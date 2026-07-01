# Para Julinha

Site estatico e interativo criado como uma surpresa personalizada de Dia dos Namorados. O projeto combina narrativa, fotos, contagem regressiva, cofre com senha, capsula de memorias, constelacao de motivos e um grande final visual.

## Recursos

- Hero com canvas de fundo e chamada personalizada.
- Cofre desbloqueado por frase secreta.
- Carta exibida somente apos desbloqueio.
- Capsula de memorias com galeria e modo cinema.
- Constelacao com motivos especiais.
- Linha de cenas, promessas e final interativo.
- Galeria com imagens em `assets/`.
- Projeto pronto para publicar como site estatico.

## Stack

- HTML5
- CSS3
- JavaScript puro
- Vercel ou qualquer hospedagem estatica

## Estrutura

```text
.
├── index.html
├── styles.css
├── script.js
├── assets/
│   ├── foto-1.jpg
│   ├── foto-2.jpg
│   └── ...
└── vercel.json
```

## Personalizacao rapida

- Textos principais: `index.html`
- Frases, motivos, cenas e memorias: arrays no inicio de `script.js`
- Data da contagem: `targetDateIso` em `script.js`
- Senhas do cofre: `manualPasscodes` em `script.js`
- Fotos: pasta `assets/`, seguindo os nomes esperados pelo codigo

## Como rodar

Abra `index.html` no navegador ou use uma extensao como Live Server.

## Deploy

Importe o repositorio na Vercel como projeto estatico. Nao e necessario build command.

## Status

Projeto front-end completo, focado em uma experiencia visual e emocional personalizada.
