function createCurrencyConverter(rate) {
    return function (amount, fromCurrency, toCurrency) {
        const convertedAmount = (fromCurrency === 'USD') ? amount * rate : amount / rate;

        return `${convertedAmount.toFixed(2)} ${toCurrency}`;
    };
}

const exchangeRateUSDToEUR = 0.89;
const convertCurrency = createCurrencyConverter(exchangeRateUSDToEUR);

const amountInUSD = parseFloat(prompt("Введите сумму в долларах:"));

const convertedAmountEUR = convertCurrency(amountInUSD, 'USD', 'EUR');

alert(`${amountInUSD} USD = ${convertedAmountEUR}`);

const exchangeRateEURToUSD = 1.12;
const convertCurrency2 = createCurrencyConverter(exchangeRateEURToUSD);

const amountInEUR = parseFloat(prompt("Введите сумму в евро:"));

const convertedAmountUSD = convertCurrency2(amountInEUR, 'EUR', 'USD');

alert(`${amountInEUR} EUR = ${convertedAmountUSD}`);