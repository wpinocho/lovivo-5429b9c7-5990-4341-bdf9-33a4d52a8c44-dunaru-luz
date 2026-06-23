## Problema

Cuando creas un link de pago en el dashboard que ya trae un descuento (guardado como `order.discount_amount`), el checkout no lo refleja porque solo considera `backendDiscountAmount` (reglas automáticas) o `localDiscountAmount` (cupón). El descuento manual queda ignorado y el total se muestra sin descontar.

## Cambios

### 1. `src/hooks/useCheckout.ts`
Exponer el descuento manual ya persistido en la orden:

- Calcular `manualDiscountAmount = lastOrder?.order?.discount_amount ?? checkoutState?.order?.discount_amount ?? 0`.
- Agregarlo al objeto retornado, junto a `appliedRules` y `backendDiscountAmount`.

No se toca lógica de actualización ni eventos; solo se expone un valor que ya existe en la orden.

### 2. `src/adapters/CheckoutAdapter.tsx`
Usar `manualDiscountAmount` como fallback en la línea ~620:

```ts
const discountAmount =
  backendDiscountAmount > 0 ? backendDiscountAmount :
  localDiscountAmount    > 0 ? localDiscountAmount :
  manualDiscountAmount   > 0 ? manualDiscountAmount :
  0;
```

- Desestructurar `manualDiscountAmount` desde `useCheckout()`.
- `finalTotal` queda igual: `Math.max(0, summaryTotal - discountAmount + shippingCost)`.

### 3. Resumen en `CheckoutUI.tsx`
Ya muestra la línea "Descuento - $X" cuando `logic.discountAmount > 0` (líneas 566 y 650), así que con el fallback anterior aparecerá automáticamente para descuentos manuales. **No se modifica.**

## Alcance / no se toca

- No se modifica `HeadlessCheckout`, ni la edge function, ni el flujo de cupones, ni reglas automáticas.
- Prioridad respetada: reglas > cupón > manual, así que si el usuario aplica un cupón sobre un link con descuento manual, gana el cupón (comportamiento actual + claro).

## Resultado esperado

Un link de pago creado con descuento manual mostrará en `/pagar`:
- Subtotal original
- Línea "Descuento - $X"
- Total con descuento aplicado
