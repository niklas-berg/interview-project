# Mitt projekt:
Vad jag gjort:
* Implementerat GET-requests mot API:t
* Presenterat projekten som cards i dashboard.

TODO:
* Nu använder jag `ngx-multi-line-ellipsis` till multiline-ellipsis. Tyvärr bryter den HTML-formatering (inget kommer gratis). Lösning, använd `-webkit-line-clamp`.
* Cacha Observables i Service -- helst med `shareReplay`
* Fixa routes så man kan bläddra bakåt i webläsaren (se till att cachingen funkar som den ska).
* Sökfunktion.

# Interview Project
Projektet är en admin app som listar våra AR-projekt.
Varje projekt i listan är klickbart och visar sedan mera information om det projektet.

Projektet grundar sig på vårt rest api för appen.
Så för att se hur datan ser ut, starta appen och besök `http://localhost:4200/app-api/v2/projects`

Målet med projektet är att du ska visa på hur du:

* Hanterar Angular och dess byggstenar
* Skriver html och css (scss)
* Bygger apitjänsten och hanterar rjxs

Lycka till!


## Install yarn
```
https://yarnpkg.com/en/docs/install
```

## Install dependencies
```bash
yarn
```

## Start Development
```bash
yarn start
```
