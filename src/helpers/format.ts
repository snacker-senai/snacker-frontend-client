export const formatToBrazilianReal = (value: number) => {
    return value.toLocaleString('pt-br', { minimumFractionDigits: 2 })
}