import { useParams } from 'react-router-dom'
import { EcommerceTemplate } from '@/templates/EcommerceTemplate'
import { SEO } from '@/components/SEO'
import OrderTrackUI from '@/pages/ui/OrderTrackUI'

const OrderTrack = () => {
  const { token } = useParams()

  return (
    <>
      <SEO title="Rastrea tu pedido" noindex />
      <EcommerceTemplate layout="centered">
        <div className="py-8 max-w-2xl mx-auto w-full">
          <OrderTrackUI token={token} />
        </div>
      </EcommerceTemplate>
    </>
  )
}

export default OrderTrack