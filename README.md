# Self Promotion LINE Bot

A simple self promotion LINE bot that helps you promote yourself.
Simply create `data.json` under `data/` following the `example.json`, and see [data/README.md](data/README.md) for more.

# Features
* Data is decoupled from code/control flow, thus making both easier to maintain
* Supports chat history feature, so if you created a `back` button on any flex message (or simply just typed `back` in the chat), we can retrieve previously sent message
* If the text entered by the user does not correspond to any key in `data/data.json`, the `home` card will be returned

## How to use

### Clone the repo

```shell
$ git clone https://github.com/andyrochi/self-promo-line-bot.git
```
 
### Install dependencies

``` shell
$ npm install
```

### Create menus/data
```shell
$ mv data/example.json data/data.json
```

### Configuration

#### Develop
During development, create a `.env` file with the contents below:
```
CHANNEL_ACCESS_TOKEN = {YOUR_CHANNEL_SECRET}
CHANNEL_SECRET = {YOUR_CHANNEL_ACCESS_TOKEN}
```
You may use [`ngrok`](https://ngrok.com/) to test your LINE bot locally during development. Simply enter the command below:
```
$ ngrok http {PORT}
```
The port will be thus forwarded to a global address.

#### Production
``` shell
$ export NODE_ENV=production
$ export CHANNEL_SECRET=YOUR_CHANNEL_SECRET
$ export CHANNEL_ACCESS_TOKEN=YOUR_CHANNEL_ACCESS_TOKEN
```

### Run

``` shell
$ node .
```

## Webhook URL

```
https://your.base.url/callback
```

## Miscellaneous

This is code is mainly modified from the echo bot example [here](https://github.com/line/line-bot-sdk-nodejs/tree/next/examples/echo-bot).