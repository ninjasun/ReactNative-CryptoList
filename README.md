

#HOT TO RUN
npm i

#API DOCUMENTATION

CoinMarketCap JSON API Documentation

Version 1

#Public API Methods

#Ticker

Endpoint: /ticker/

Method: GET

Optional parameters:
(int) start - return results from rank [start] and above
(int) limit - return a maximum of [limit] results (default is 100, use 0 to return all results)
(string) convert - return price, 24h volume, and market cap in terms of another currency. Valid values are: 
"AUD", "BRL", "CAD", "CHF", "CLP", "CNY", "CZK", "DKK", "EUR", "GBP", "HKD", "HUF", "IDR", "ILS", "INR", "JPY", "KRW", "MXN", "MYR", "NOK", "NZD", "PHP", "PKR", "PLN", "RUB", "SEK", "SGD", "THB", "TRY", "TWD", "ZAR"

Example: https://api.coinmarketcap.com/v1/ticker/

Example: https://api.coinmarketcap.com/v1/ticker/?limit=10

Example: https://api.coinmarketcap.com/v1/ticker/?start=100&limit=10

Example: https://api.coinmarketcap.com/v1/ticker/?convert=EUR&limit=10

Sample Response:

[
    {
        "id": "bitcoin",
        "name": "Bitcoin",
        "symbol": "BTC",
        "rank": "1",
        "price_usd": "573.137",
        "price_btc": "1.0",
        "24h_volume_usd": "72855700.0",
        "market_cap_usd": "9080883500.0",
        "available_supply": "15844176.0",
        "total_supply": "15844176.0",
        "percent_change_1h": "0.04",
        "percent_change_24h": "-0.3",
        "percent_change_7d": "-0.57",
        "last_updated": "1472762067"
    },
    {
        "id": "ethereum",
        "name": "Ethereum",
        "symbol": "ETH",
        "rank": "2",
        "price_usd": "12.1844",
        "price_btc": "0.021262",
        "24h_volume_usd": "24085900.0",
        "market_cap_usd": "1018098455.0",
        "available_supply": "83557537.0",
        "total_supply": "83557537.0",
        "percent_change_1h": "-0.58",
        "percent_change_24h": "6.34",
        "percent_change_7d": "8.59",
        "last_updated": "1472762062"
    },
    ...
]                               

#Ticker (Specific Currency)
Endpoint: /ticker/{id}/

Method: GET

Optional parameters:
(string) convert - return price, 24h volume, and market cap in terms of another currency. Valid values are: 
"AUD", "BRL", "CAD", "CHF", "CLP", "CNY", "CZK", "DKK", "EUR", "GBP", "HKD", "HUF", "IDR", "ILS", "INR", "JPY", "KRW", "MXN", "MYR", "NOK", "NZD", "PHP", "PKR", "PLN", "RUB", "SEK", "SGD", "THB", "TRY", "TWD", "ZAR"

Example: https://api.coinmarketcap.com/v1/ticker/bitcoin/

Example: https://api.coinmarketcap.com/v1/ticker/bitcoin/?convert=EUR

Sample Response:

[
    {
        "id": "bitcoin",
        "name": "Bitcoin",
        "symbol": "BTC",
        "rank": "1",
        "price_usd": "573.137",
        "price_btc": "1.0",
        "24h_volume_usd": "72855700.0",
        "market_cap_usd": "9080883500.0",
        "available_supply": "15844176.0",
        "total_supply": "15844176.0",
        "max_supply": "21000000.0",
        "percent_change_1h": "0.04",
        "percent_change_24h": "-0.3",
        "percent_change_7d": "-0.57",
        "last_updated": "1472762067"
    }
]               
Sample Error Response:
{
    "error": "id not found"
}                               

#Global Data

Endpoint: /global/

Method: GET

Optional parameters:
(string) convert - return 24h volume, and market cap in terms of another currency. Valid values are: 
"AUD", "BRL", "CAD", "CHF", "CLP", "CNY", "CZK", "DKK", "EUR", "GBP", "HKD", "HUF", "IDR", "ILS", "INR", "JPY", "KRW", "MXN", "MYR", "NOK", "NZD", "PHP", "PKR", "PLN", "RUB", "SEK", "SGD", "THB", "TRY", "TWD", "ZAR"

Example: https://api.coinmarketcap.com/v1/global/

Example: https://api.coinmarketcap.com/v1/global/?convert=EUR

Sample Response:
{
    "total_market_cap_usd": 201241796675,
    "total_24h_volume_usd": 4548680009,
    "bitcoin_percentage_of_market_cap": 62.54,
    "active_currencies": 896,
    "active_assets": 360,
    "active_markets": 6439,
    "last_updated": 1509909852
}                       

