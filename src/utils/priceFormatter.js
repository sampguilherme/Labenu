export const priceFormmater = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',

    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
})