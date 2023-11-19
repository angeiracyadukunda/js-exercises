


function convertCurrency(amount, sourceCurrency, targetCurrency) {
    const exchangeRate = 1.2; // Replace with actual exchange rates

    switch (`${sourceCurrency}-${targetCurrency}`) {
        case 'USD-EUR':
            return amount * exchangeRate;
        case 'EUR-USD':
            return amount / exchangeRate;
        // Add more cases for other currency pairs
        default:
            return "Invalid currency pair";
    }
}

// Example usage:
const amountToConvert = 100;
const sourceCurrencyCode = 'USD';
const targetCurrencyCode = 'EUR';

console.log(`${amountToConvert} ${sourceCurrencyCode} is equal to:`, convertCurrency(amountToConvert, sourceCurrencyCode, targetCurrencyCode), targetCurrencyCode);
