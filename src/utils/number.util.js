const formatCOP = new Intl.NumberFormat('es-CO', {
  style: 'currency',
  currency: 'COP',
  maximumFractionDigits: 2,
});

export const numberToMoney = number => number.toLocaleString('es-CO');
