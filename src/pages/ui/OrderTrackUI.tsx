/**
 * EDITABLE UI COMPONENT - OrderTrackUI
 * TIPO B - El agente de IA puede editar libremente este componente
 *
 * Página pública de rastreo de pedidos.
 * - Modo token: /orders/track/:token → callEdge('order-track', { token })
 * - Modo lookup: /orders/track → formulario order_number + email
 */

import { useEffect, useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import { Skeleton } from '@/components/ui/skeleton'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import {
  Package,
  Truck,
  CheckCircle2,
  Clock,
  Search,
  AlertCircle,
  XCircle,
  Copy,
  Check,
  ExternalLink,
  ChevronDown,
  MapPin,
} from 'lucide-react'
import { callEdge } from '@/lib/edge'
import { STORE_ID } from '@/lib/config'
import { format } from 'date-fns'
import { es } from 'date-fns/locale'
import { toast } from 'sonner'
import { cn } from '@/lib/utils'

interface TrackStep {
  key?: string
  label?: string
  date?: string
  occurred_at?: string
  completed_at?: string
}

interface TrackEvent {
  occurred_at?: string
  status_detail?: string
  location?: string
}

interface TrackResult {
  steps?: TrackStep[]
  current_step?: number
  cancelled?: boolean
  carrier?: string
  tracking_number?: string
  tracking_url?: string
  estimated_delivery_at?: string
  events?: TrackEvent[]
  display_mode?: 'detailed' | 'masked'
  order_number?: string
  error?: string
}

interface OrderTrackUIProps {
  token?: string
}

const STEP_ICONS = [CheckCircle2, Package, Truck, MapPin]

function fmtDate(value?: string, withTime = false) {
  if (!value) return null
  try {
    return format(new Date(value), withTime ? "d MMM yyyy, HH:mm" : 'd MMM yyyy', {
      locale: es,
    })
  } catch {
    return null
  }
}

function TrackSkeleton() {
  return (
    <div className="space-y-6">
      <Skeleton className="h-6 w-40" />
      <div className="flex justify-between gap-2">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="flex flex-col items-center gap-2 flex-1">
            <Skeleton className="h-10 w-10 rounded-full" />
            <Skeleton className="h-3 w-16" />
          </div>
        ))}
      </div>
      <Skeleton className="h-24 w-full rounded-xl" />
    </div>
  )
}

/** Timeline horizontal estilo Shopify */
function Timeline({ steps, currentStep }: { steps: TrackStep[]; currentStep: number }) {
  return (
    <div className="relative">
      <div className="flex items-start justify-between">
        {steps.map((step, idx) => {
          const isCompleted = idx < currentStep
          const isCurrent = idx === currentStep
          const Icon = STEP_ICONS[idx] ?? Clock
          const date =
            fmtDate(step.date || step.completed_at || step.occurred_at) ??
            (isCurrent ? 'En curso' : null)

          return (
            <div key={step.key ?? idx} className="flex flex-col items-center flex-1 relative z-10">
              {/* Connector line to next step */}
              {idx < steps.length - 1 && (
                <span
                  className={cn(
                    'absolute top-5 left-1/2 w-full h-0.5 -z-10',
                    idx < currentStep ? 'bg-dunaru-champagne' : 'bg-border'
                  )}
                />
              )}
              <div
                className={cn(
                  'h-10 w-10 rounded-full flex items-center justify-center border-2 transition-colors bg-background',
                  isCompleted && 'border-dunaru-champagne bg-dunaru-champagne text-dunaru-carbon',
                  isCurrent && 'border-dunaru-ambar text-dunaru-ambar animate-pulse',
                  !isCompleted && !isCurrent && 'border-border text-muted-foreground'
                )}
              >
                <Icon className="h-5 w-5" />
              </div>
              <span
                className={cn(
                  'mt-2 text-xs font-body font-medium text-center leading-tight',
                  (isCompleted || isCurrent) ? 'text-foreground' : 'text-muted-foreground'
                )}
              >
                {step.label ?? `Paso ${idx + 1}`}
              </span>
              {date && (
                <span className="mt-0.5 text-[10px] text-muted-foreground font-body text-center">
                  {date}
                </span>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

function LookupForm({
  onSubmit,
  loading,
}: {
  onSubmit: (orderNumber: string, email: string) => void
  loading: boolean
}) {
  const [orderNumber, setOrderNumber] = useState('')
  const [email, setEmail] = useState('')

  const handle = (e: React.FormEvent) => {
    e.preventDefault()
    if (!orderNumber.trim() || !email.trim()) {
      toast.error('Ingresa tu número de pedido y correo')
      return
    }
    onSubmit(orderNumber.trim(), email.trim())
  }

  return (
    <form onSubmit={handle} className="space-y-4">
      <div className="space-y-1.5">
        <Label htmlFor="order_number" className="font-body">Número de pedido</Label>
        <Input
          id="order_number"
          placeholder="Ej. 1024"
          value={orderNumber}
          onChange={(e) => setOrderNumber(e.target.value)}
          autoComplete="off"
        />
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="email" className="font-body">Correo de la compra</Label>
        <Input
          id="email"
          type="email"
          placeholder="tucorreo@ejemplo.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
        />
      </div>
      <Button type="submit" size="lg" className="w-full" disabled={loading}>
        <Search className="mr-2 h-4 w-4" />
        {loading ? 'Buscando…' : 'Rastrear mi pedido'}
      </Button>
    </form>
  )
}

export default function OrderTrackUI({ token }: OrderTrackUIProps) {
  const navigate = useNavigate()
  const [loading, setLoading] = useState<boolean>(!!token)
  const [result, setResult] = useState<TrackResult | null>(null)
  const [notFound, setNotFound] = useState(false)
  const [errored, setErrored] = useState(false)
  const [copied, setCopied] = useState(false)

  const lookup = useCallback(async (payload: Record<string, unknown>) => {
    setLoading(true)
    setNotFound(false)
    setErrored(false)
    try {
      const res: TrackResult = await callEdge('order-track', payload)
      if (!res || res.error || !res.steps) {
        setNotFound(true)
        setResult(null)
      } else {
        setResult(res)
      }
    } catch (e) {
      console.error('order-track failed:', e)
      setErrored(true)
      setResult(null)
    } finally {
      setLoading(false)
    }
  }, [])

  // Token mode: fetch on mount
  useEffect(() => {
    if (token) {
      lookup({ token })
    }
  }, [token, lookup])

  const handleLookup = (orderNumber: string, email: string) => {
    lookup({ store_id: STORE_ID, order_number: orderNumber, email })
  }

  const copyTracking = (value: string) => {
    navigator.clipboard?.writeText(value)
    setCopied(true)
    toast.success('Número de guía copiado')
    setTimeout(() => setCopied(false), 2000)
  }

  // ---- LOADING ----
  if (loading) {
    return (
      <Card>
        <CardContent className="p-6">
          <TrackSkeleton />
        </CardContent>
      </Card>
    )
  }

  // ---- LOOKUP FORM (no token, no result yet) ----
  if (!token && !result) {
    return (
      <div className="max-w-md mx-auto">
        <Card>
          <CardContent className="p-6 space-y-5">
            <div className="text-center space-y-1">
              <div className="inline-flex rounded-full bg-muted p-3 mb-2">
                <Package className="h-7 w-7 text-dunaru-champagne" />
              </div>
              <h2 className="font-display text-2xl text-foreground">Rastrea tu pedido</h2>
              <p className="text-sm text-muted-foreground font-body">
                Ingresa tu número de pedido y el correo con el que compraste.
              </p>
            </div>
            {(notFound || errored) && (
              <div className="flex items-start gap-2 rounded-lg bg-destructive/5 border border-destructive/30 p-3 text-sm text-destructive font-body">
                <AlertCircle className="h-4 w-4 mt-0.5 shrink-0" />
                <span>
                  {notFound
                    ? 'No encontramos un pedido con esos datos. Revisa el número y el correo.'
                    : 'Algo salió mal. Intenta de nuevo en un momento.'}
                </span>
              </div>
            )}
            <LookupForm onSubmit={handleLookup} loading={loading} />
          </CardContent>
        </Card>
      </div>
    )
  }

  // ---- NOT FOUND (token mode) ----
  if (notFound) {
    return (
      <Card className="border-dashed">
        <CardContent className="py-12">
          <div className="text-center space-y-4">
            <div className="rounded-full bg-muted p-5 inline-flex">
              <Package className="h-10 w-10 text-muted-foreground" />
            </div>
            <div>
              <h3 className="font-display text-xl text-foreground">No encontramos tu pedido</h3>
              <p className="text-muted-foreground text-sm mt-1 font-body max-w-sm mx-auto">
                El enlace puede haber expirado. Búscalo con tu número de pedido y correo.
              </p>
            </div>
            <Button size="lg" onClick={() => navigate('/orders/track')}>
              <Search className="mr-2 h-4 w-4" />
              Buscar mi pedido
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  // ---- ERROR (token mode) ----
  if (errored || !result) {
    return (
      <Card className="border-destructive/50 bg-destructive/5">
        <CardContent className="py-10">
          <div className="text-center space-y-3">
            <AlertCircle className="h-10 w-10 text-destructive mx-auto" />
            <p className="text-sm text-muted-foreground font-body">
              No pudimos cargar el rastreo. Intenta de nuevo.
            </p>
            <Button onClick={() => token ? lookup({ token }) : navigate('/orders/track')} variant="outline" size="sm">
              Reintentar
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  // ---- RESULT ----
  const steps = result.steps ?? []
  const currentStep = result.current_step ?? 0
  const isDetailed = result.display_mode !== 'masked'
  const estimated = fmtDate(result.estimated_delivery_at)
  const events = result.events ?? []

  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-2">
        <div>
          <h2 className="font-display text-2xl text-foreground">
            {result.cancelled ? 'Pedido cancelado' : 'Estado de tu pedido'}
          </h2>
          {result.order_number && (
            <p className="text-sm text-muted-foreground font-body mt-0.5">
              Pedido #{result.order_number}
            </p>
          )}
        </div>
        {result.cancelled && (
          <Badge variant="outline" className="bg-red-100 text-red-800 border-red-200">
            Cancelado
          </Badge>
        )}
      </div>

      {/* Cancelled banner */}
      {result.cancelled && (
        <div className="flex items-start gap-2 rounded-lg bg-red-50 border border-red-200 p-4 text-sm text-red-800 font-body">
          <XCircle className="h-5 w-5 mt-0.5 shrink-0" />
          <div>
            <p className="font-semibold">Este pedido fue cancelado.</p>
            <p className="opacity-80">Si tienes dudas, contáctanos por WhatsApp y te ayudamos.</p>
          </div>
        </div>
      )}

      {/* Timeline */}
      {!result.cancelled && steps.length > 0 && (
        <Card>
          <CardContent className="p-6">
            <Timeline steps={steps} currentStep={currentStep} />
          </CardContent>
        </Card>
      )}

      {/* Estimated delivery */}
      {!result.cancelled && estimated && (
        <Card className="bg-dunaru-arena border-dunaru-champagne/40">
          <CardContent className="p-5 flex items-center gap-4">
            <div className="rounded-full bg-background p-3">
              <Truck className="h-6 w-6 text-dunaru-champagne" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground font-body">
                Entrega estimada
              </p>
              <p className="font-display text-xl text-foreground">{estimated}</p>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Carrier & tracking — only detailed mode */}
      {isDetailed && !result.cancelled && (result.carrier || result.tracking_number) && (
        <Card>
          <CardContent className="p-5 space-y-3">
            {result.carrier && (
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground font-body">Paquetería</span>
                <span className="font-body font-semibold text-foreground">{result.carrier}</span>
              </div>
            )}
            {result.tracking_number && (
              <div className="flex items-center justify-between gap-2">
                <span className="text-sm text-muted-foreground font-body">Número de guía</span>
                <button
                  onClick={() => copyTracking(result.tracking_number!)}
                  className="inline-flex items-center gap-1.5 font-body font-semibold text-foreground hover:text-dunaru-champagne transition-colors"
                >
                  {result.tracking_number}
                  {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                </button>
              </div>
            )}
            {result.tracking_url && (
              <Button asChild variant="outline" className="w-full mt-1">
                <a href={result.tracking_url} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Rastrear con la paquetería
                </a>
              </Button>
            )}
          </CardContent>
        </Card>
      )}

      {/* Events — only detailed mode */}
      {isDetailed && !result.cancelled && events.length > 0 && (
        <Collapsible>
          <Card>
            <CollapsibleTrigger asChild>
              <button className="w-full flex items-center justify-between p-5 text-left focus:outline-none group">
                <span className="font-body font-semibold text-foreground">
                  Historial de envío ({events.length})
                </span>
                <ChevronDown className="h-4 w-4 text-muted-foreground transition-transform group-data-[state=open]:rotate-180" />
              </button>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="border-t px-5 pb-5 pt-4 space-y-4">
                {events.map((ev, idx) => (
                  <div key={idx} className="flex gap-3">
                    <div className="flex flex-col items-center">
                      <span className="h-2 w-2 rounded-full bg-dunaru-champagne mt-1.5" />
                      {idx < events.length - 1 && <span className="w-px flex-1 bg-border mt-1" />}
                    </div>
                    <div className="pb-1">
                      <p className="text-sm font-body text-foreground">{ev.status_detail}</p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground font-body mt-0.5">
                        {fmtDate(ev.occurred_at, true) && <span>{fmtDate(ev.occurred_at, true)}</span>}
                        {ev.location && (
                          <>
                            <span className="opacity-40">·</span>
                            <span>{ev.location}</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CollapsibleContent>
          </Card>
        </Collapsible>
      )}

      {/* Help */}
      <p className="text-center text-xs text-muted-foreground font-body pt-2">
        ¿Algún problema con tu pedido?{' '}
        <a
          href="https://wa.me/525531215386?text=Hola%2C%20tengo%20una%20duda%20sobre%20mi%20pedido"
          target="_blank"
          rel="noopener noreferrer"
          className="text-dunaru-champagne hover:underline"
        >
          Escríbenos por WhatsApp
        </a>
      </p>
    </div>
  )
}