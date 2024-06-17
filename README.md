# data-url-booster

evaluate data URLs in a secure context using service workers

> ## work-in-progress note
> this is a work in progress, but _is_ fully functional. upcoming changes include making the default page prettier (e.g. display error codes, basic API usage, etc) and possibly adding a more powerful API in addition to the existing data URL syntax.

## IMPORTANT! security disclaimer

this is a **demo/proof-of-concept project**, and therefore **does not implement
security practices with regard to storage APIs, cross-origin requests, etc.**

## theory

this project is deployed automatically to https://dinguskhan0.github.io/data-url-booster,
which serves as the "booster" domain, which **must** be served over HTTPS. upon first visit, it will install a
service worker which serves as the backend for loading web content from URL
content.

## usage

data-url-booster is designed to serve as a drop-in replacement for the `data:`
protocol via URL search parameters.

for example:

```
data:text/plain,Hello, World
```

becomes (the 'data' parameter must be URL encoded)

```
https://dinguskhan0.github.io/data-url-booster?data=text%2Fplain%3BHello%2C%20World
```
