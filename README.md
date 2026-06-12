# Surpresa para a Julinha

Site estatico pronto para publicar na Vercel.

## Personalizar rapido

- Textos principais: edite `index.html`.
- Carta, motivos, cenas e capsula de memorias: edite os arrays no topo de `script.js`.
- Horario da contagem: edite `targetDateIso` no topo de `script.js`.
  Use o formato `2026-06-12T20:00:00-03:00`. O `-03:00` deixa a contagem no horario de Brasilia/RJ.
- Cofre: edite `manualPasscodes` no topo de `script.js`.
  Ele nao abre sozinho por horario; so abre quando ela digitar uma das frases.
- Fotos: coloque imagens em `assets/` com estes nomes:
  - `foto-1.jpg`
  - `foto-2.jpg`
  - `foto-3.jpg`
  - `foto-4.webp`
  - `foto-5.jpg`
  - `foto-6.jpg`
  - `foto-7.jpg`
  - `foto-8.jpg`
  - `foto-9.jpg`
  - `foto-10.jpg`

## Publicar na Vercel

Importe esta pasta como um projeto estatico. Nao precisa de build command.
