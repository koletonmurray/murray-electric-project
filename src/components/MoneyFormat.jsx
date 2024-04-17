export default function MoneyFormat(value) {
    return value ? new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(value) : '-';
}