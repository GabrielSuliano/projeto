const CONFIG = {
  // O -03:00 fixa a contagem no horario de Brasilia/RJ, mesmo publicado na Vercel.
  targetDateIso: "2026-06-12T00:00:00-03:00",
  // O cofre nao abre por horario; ele so abre com uma dessas frases.
  manualPasscodes: ["abre meu universo", "nosso universo"],
};

CONFIG.targetDate = new Date(CONFIG.targetDateIso);

const letterLines = [
  "Julia, eu queria que essa carta parecesse menos com um texto e mais com um abraco. Daqueles que nao tem pressa, que segura um pouco mais, que diz sem falar: fica aqui comigo.",
  "Eu pensei em te dar alguma coisa bonita, mas tudo parecia pequeno perto do que voce significa pra mim. Entao eu fiz esse lugar. Nao porque eu sei fazer tudo perfeito, mas porque eu queria que voce sentisse cuidado em cada detalhe.",
  "Voce tem um jeito muito seu de chegar e mudar o peso do dia. As coisas continuam sendo as mesmas, mas perto de voce elas ficam mais leves, mais bonitas, mais possiveis. E isso e raro. Muito raro.",
  "Eu amo seu sorriso, mas amo tambem o que vem antes dele: o jeitinho que seu rosto muda, a sua presenca chegando, essa sensacao de que o mundo acertou alguma coisa quando colocou voce no meu caminho.",
  "Gosto da nossa bobeira, das nossas fotos tortas, das caras estranhas, dos olhares que a gente entende sem explicar. Gosto de perceber que, com voce, ate um momento simples consegue virar memoria.",
  "Julinha, voce nao e so alguem que eu gosto. Voce virou pensamento bom, vontade de ficar, saudade antes de ir embora, paz no meio da bagunca e motivo para eu querer ser melhor sem deixar de ser eu.",
  "Se algum dia voce duvidar do quanto e especial, volta aqui. Le essa carta de novo. Olha essas fotos. Lembra que alguem separou tempo, carinho e um pedaco do proprio coracao so para te ver sorrir.",
  "Eu nao sei escrever tudo o que eu sinto sem deixar faltar alguma coisa. Mas eu sei isso: eu escolheria voce nos dias faceis, nos dias confusos, nos dias comuns e nos dias que ainda nem chegaram.",
  "Feliz Dia dos Namorados, minha Julinha. Obrigado por existir desse jeito tao seu, e por deixar meu mundo infinitamente mais bonito desde que voce entrou nele.",
];

const reasons = [
  {
    title: "Voce melhora o dia",
    text: "Mesmo quando nada demais acontece, sua presenca muda a cor das horas.",
  },
  {
    title: "Seu riso fica comigo",
    text: "Tem risada que passa. A sua fica repetindo no pensamento como musica boa.",
  },
  {
    title: "Voce tem cuidado nos detalhes",
    text: "E bonito ver como seu carinho aparece em coisas pequenas, sem precisar fazer barulho.",
  },
  {
    title: "Perto de voce eu descanso",
    text: "Nao e so paixao. E tambem uma paz que da vontade de proteger.",
  },
  {
    title: "Voce e linda de um jeito inteiro",
    text: "Nao so pela beleza que da pra ver, mas pela que aparece quando voce fala, sente e existe.",
  },
  {
    title: "Voce me da vontade de ser melhor",
    text: "Nao por cobranca. Pelo contrario: por inspiracao.",
  },
  {
    title: "Seu nome combina com coisa boa",
    text: "Julia ja era bonito. Julinha virou uma palavra que me faz sorrir antes mesmo de terminar.",
  },
  {
    title: "A conversa com voce rende mundo",
    text: "Assunto simples vira memoria. Bobeira vira carinho. Minuto vira vontade de ficar.",
  },
  {
    title: "Voce tem forca e docura",
    text: "Essa mistura e rara. E em voce ela parece natural.",
  },
  {
    title: "Voce faz falta antes de ir",
    text: "E quando chega mensagem sua, meu dia entende rapidinho onde queria estar.",
  },
  {
    title: "A gente tem futuro no olhar",
    text: "Nao aquele futuro pesado. Um futuro leve, de planos, risadas e presenca.",
  },
  {
    title: "Porque voce e voce",
    text: "No fim, o motivo principal e simples: eu gosto de voce exatamente por ser a minha Julinha.",
  },
];

const scenes = [
  {
    label: "Cena 01",
    title: "Quando voce virou assunto preferido",
    text: "Aquele ponto em que qualquer detalhe seu ja era suficiente para meu dia prestar atencao.",
  },
  {
    label: "Cena 02",
    title: "Quando seu carinho ficou com cara de casa",
    text: "Tem gente que chega e ocupa espaco. Voce chegou e fez espaco dentro de mim.",
  },
  {
    label: "Cena 03",
    title: "O momento em que eu pensei: e ela",
    text: "Nao precisa ter fogos. As vezes a certeza vem baixa, bonita, como quem senta do lado.",
  },
  {
    label: "Cena 04",
    title: "Agora, voce lendo isso",
    text: "Eu queria estar vendo sua reacao. Entao imaginei essa pagina como uma forma de chegar perto.",
  },
  {
    label: "Cena 05",
    title: "Depois daqui",
    text: "Tudo que a gente ainda vai inventar: lugares, fotos, piadas internas e dias que vao valer memoria.",
  },
];

const memories = [
  {
    src: "assets/foto-1.jpg",
    alt: "Julia e Gabriel em uma foto azul",
    label: "capitulo 01",
    title: "Nosso universo em azul",
    text: "Uma foto com cara de segredo bonito, como se o mundo tivesse desligado um pouco so para deixar a gente existir.",
  },
  {
    src: "assets/foto-2.jpg",
    alt: "Julia e Gabriel fazendo careta juntos",
    label: "capitulo 02",
    title: "A bobeira que parece casa",
    text: "Eu gosto quando a gente vira crianca por alguns segundos. Tem carinho demais nessas caras nada serias.",
  },
  {
    src: "assets/foto-3.jpg",
    alt: "Julia e Gabriel sorrindo muito",
    label: "capitulo 03",
    title: "O sorriso que entrega tudo",
    text: "Essa aqui tem barulho de risada. Daquelas que nao precisam de legenda porque explicam a gente inteira.",
  },
  {
    src: "assets/foto-4.webp",
    alt: "Julia e Gabriel sentados lado a lado",
    label: "capitulo 04",
    title: "Dois no mesmo quadro",
    text: "Tem foto simples que guarda um mundo. Essa parece dizer que ficar perto ja era o plano todo.",
  },
  {
    src: "assets/foto-5.jpg",
    alt: "Julia e Gabriel em close",
    label: "capitulo 05",
    title: "O enquadro que virou memoria",
    text: "Mesmo torta, mesmo espontanea, mesmo do nosso jeito: bonita porque e real.",
  },
  {
    src: "assets/foto-6.jpg",
    alt: "Julia e Gabriel se olhando",
    label: "capitulo 06",
    title: "Quando o mundo ficou baixinho",
    text: "Tem olhar que conversa antes da frase chegar. Eu guardaria esse silencio com cuidado.",
  },
  {
    src: "assets/foto-7.jpg",
    alt: "Julia beijando Gabriel no rosto",
    label: "capitulo 07",
    title: "Carinho sem pedir licenca",
    text: "Um beijo, uma mao no rosto, e pronto: a foto ja sabe mais do que qualquer texto meu.",
  },
  {
    src: "assets/foto-8.jpg",
    alt: "Julia e Gabriel brincando juntos",
    label: "capitulo 08",
    title: "Nossa versao mais leve",
    text: "Eu amo essa parte da gente que nao precisa fazer pose para ser especial.",
  },
  {
    src: "assets/foto-9.jpg",
    alt: "Gabriel beijando Julia no rosto",
    label: "capitulo 09",
    title: "O lugar onde eu volto",
    text: "Se carinho tivesse endereco, talvez fosse exatamente esse espacinho entre teu sorriso e minha vontade de ficar.",
  },
  {
    src: "assets/foto-10.jpg",
    alt: "Julia e Gabriel deitados juntos",
    label: "capitulo 10",
    title: "Daqui pra frente",
    text: "Que venham mais fotos tortas, risadas altas, dias bobos e esse jeito lindo de sermos nos dois.",
  },
];

const state = {
  letterOpened: false,
  capsuleUnlocked: false,
  finalMode: false,
  memoryIndex: 0,
  cinemaTimer: null,
  finalSparkSeeded: false,
};

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

function normalize(value) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(showToast.timeout);
  showToast.timeout = window.setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 2800);
}

function updateCountdown() {
  const countdown = $("#countdown");
  const note = $("#countdownNote");
  const now = new Date();
  const diff = CONFIG.targetDate.getTime() - now.getTime();

  if (diff <= 0) {
    countdown.innerHTML = `
      <span><strong>12</strong><small>junho</small></span>
      <span><strong>hoje</strong><small>e nosso</small></span>
      <span><strong>sim</strong><small>pra voce</small></span>
      <span><strong>sempre</strong><small>Julinha</small></span>
    `;
    note.textContent = "Feliz Dia dos Namorados, Julinha. O cofre continua abrindo so com a senha.";
    return;
  }

  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  const values = [
    [days, "dias"],
    [hours, "horas"],
    [minutes, "min"],
    [seconds, "seg"],
  ];

  countdown.innerHTML = values
    .map(([value, label]) => `<span><strong>${String(value).padStart(2, "0")}</strong><small>${label}</small></span>`)
    .join("");
  note.textContent = "Contagem no horario de Brasilia. O cofre so abre quando ela souber a frase.";
}

function typeLetter() {
  if (state.letterOpened) return;
  state.letterOpened = true;

  const card = $("#letterCard");
  const target = $("#letterText");
  card.classList.remove("is-locked");
  card.classList.add("is-open");
  target.innerHTML = "";

  let lineIndex = 0;
  let charIndex = 0;
  let paragraph = document.createElement("p");
  target.append(paragraph);

  function tick() {
    const line = letterLines[lineIndex];
    paragraph.textContent += line[charIndex] || "";
    charIndex += 1;

    if (charIndex <= line.length) {
      window.setTimeout(tick, 18);
      return;
    }

    lineIndex += 1;
    charIndex = 0;

    if (lineIndex < letterLines.length) {
      paragraph = document.createElement("p");
      target.append(paragraph);
      window.setTimeout(tick, 180);
    } else {
      showToast("Carta desbloqueada.");
      unlockCapsule({ reveal: true });
      universe.pulse();
    }
  }

  tick();
}

function buildReasons() {
  const grid = $("#reasonGrid");
  grid.innerHTML = reasons
    .map(
      (reason, index) => `
        <button class="reason-card" type="button" data-number="${String(index + 1).padStart(2, "0")}" aria-expanded="false">
          <span>motivo ${String(index + 1).padStart(2, "0")}</span>
          <strong>${reason.title}</strong>
          <p>${reason.text}</p>
        </button>
      `,
    )
    .join("");

  $$(".reason-card", grid).forEach((card) => {
    card.addEventListener("click", () => {
      const isOpen = card.classList.toggle("is-open");
      card.setAttribute("aria-expanded", String(isOpen));
      universe.spark();
    });
  });
}

function buildScenes() {
  const track = $("#sceneTrack");
  track.innerHTML = scenes
    .map(
      (scene) => `
        <article class="scene-card tilt">
          <span>${scene.label}</span>
          <h3>${scene.title}</h3>
          <p>${scene.text}</p>
        </article>
      `,
    )
    .join("");
}

function buildGallery() {
  const grid = $("#photoGrid");
  grid.innerHTML = memories
    .map(
      (memory, index) => `
        <button class="photo-tile tilt" type="button" data-memory="${index}" aria-label="Abrir ${memory.title}">
          <img src="${memory.src}" alt="${memory.alt}" />
          <span class="photo-caption">
            <small>${String(index + 1).padStart(2, "0")}</small>
            <strong>${memory.title}</strong>
          </span>
        </button>
      `,
    )
    .join("");

  $$(".photo-tile", grid).forEach((tile) => {
    tile.addEventListener("click", () => {
      setMemory(Number(tile.dataset.memory));
      if (state.capsuleUnlocked) {
        openCinema();
      } else {
        $("#cofre").scrollIntoView({ behavior: "smooth", block: "start" });
        showToast("Primeiro abre o cofre com a frase secreta.");
      }
    });
  });
}

function buildMemoryDots() {
  const dots = $("#memoryDots");
  dots.innerHTML = memories
    .map((_, index) => `<span data-dot="${index}"></span>`)
    .join("");
}

function setMemory(index) {
  state.memoryIndex = (index + memories.length) % memories.length;
  renderMemory();
  renderCinema();
  universe.spark();
}

function renderMemory() {
  const memory = memories[state.memoryIndex];
  $("#memoryImage").src = memory.src;
  $("#memoryImage").alt = memory.alt;
  $("#memoryLabel").textContent = memory.label;
  $("#memoryTitle").textContent = memory.title;
  $("#memoryText").textContent = memory.text;

  $$("#memoryDots span").forEach((dot, index) => {
    dot.classList.toggle("is-active", index === state.memoryIndex);
  });
}

function unlockCapsule({ reveal = true } = {}) {
  const capsule = $("#capsula");

  if (!state.capsuleUnlocked) {
    state.capsuleUnlocked = true;
    capsule.classList.remove("is-locked");
    capsule.classList.add("is-open");
    $("#startCinema").disabled = false;
    $("#capsuleStatus").textContent = "Capsula liberada. Agora aperta para ver nosso filme.";
  }

  if (reveal) {
    window.setTimeout(() => {
      capsule.scrollIntoView({ behavior: "smooth", block: "start" });
      showToast("A capsula de memorias abriu.");
    }, 700);
  }
}

function renderCinema() {
  const overlay = $("#cinemaOverlay");
  if (!overlay || overlay.getAttribute("aria-hidden") === "true") return;

  const memory = memories[state.memoryIndex];
  $("#cinemaImage").src = memory.src;
  $("#cinemaImage").alt = memory.alt;
  $("#cinemaCounter").textContent = `${String(state.memoryIndex + 1).padStart(2, "0")} / ${memories.length}`;
  $("#cinemaTitle").textContent = memory.title;
  $("#cinemaText").textContent = memory.text;
  $("#cinemaProgress").style.width = `${((state.memoryIndex + 1) / memories.length) * 100}%`;
}

function restartCinemaTimer() {
  window.clearInterval(state.cinemaTimer);
  state.cinemaTimer = window.setInterval(() => {
    const nextIndex = (state.memoryIndex + 1) % memories.length;
    setMemory(nextIndex);

    if (nextIndex === 0) {
      universe.formText("JULINHA");
      showToast("Esse e o nosso universo.");
    }
  }, 5600);
}

function openCinema() {
  if (!state.capsuleUnlocked) {
    $("#cofre").scrollIntoView({ behavior: "smooth", block: "start" });
    showToast("Primeiro abre o cofre com a frase secreta.");
    return;
  }

  const overlay = $("#cinemaOverlay");
  overlay.setAttribute("aria-hidden", "false");
  document.body.classList.add("cinema-open");
  renderCinema();
  restartCinemaTimer();
  playChime(true);
}

function closeCinema() {
  window.clearInterval(state.cinemaTimer);
  $("#cinemaOverlay").setAttribute("aria-hidden", "true");
  document.body.classList.remove("cinema-open");
}

function seedFinalSparks() {
  if (state.finalSparkSeeded) return;
  state.finalSparkSeeded = true;

  const layer = $("#finalSparks");
  const sparks = Array.from({ length: 64 }, (_, index) => {
    const left = Math.round(Math.random() * 100);
    const top = Math.round(Math.random() * 100);
    const delay = (Math.random() * 1.7).toFixed(2);
    const travel = Math.round(38 + Math.random() * 92);
    const scale = (0.7 + Math.random() * 1.4).toFixed(2);
    const tone = index % 3 === 0 ? "var(--amber)" : index % 3 === 1 ? "var(--teal)" : "var(--coral)";

    return `<span style="--left:${left}%;--top:${top}%;--delay:${delay}s;--travel:-${travel}px;--scale:${scale};--tone:${tone}"></span>`;
  });

  layer.innerHTML = sparks.join("");
}

function openGrandFinale() {
  seedFinalSparks();
  document.body.classList.add("final-mode", "finale-open");
  state.finalMode = true;
  $("#grandFinaleOverlay").setAttribute("aria-hidden", "false");
  universe.formText("JULINHA");
  playChime(true);
  showToast("O final abriu so pra ela.");
}

function closeGrandFinale() {
  $("#grandFinaleOverlay").setAttribute("aria-hidden", "true");
  document.body.classList.remove("finale-open");
}

function writeFinalSky() {
  const skyWriting = $("#skyWriting");
  skyWriting.classList.remove("is-visible");
  void skyWriting.offsetWidth;
  skyWriting.classList.add("is-visible");
  universe.formText("JULINHA");
  playChime(true);
}

function setupCapsule() {
  buildGallery();
  buildMemoryDots();
  renderMemory();

  $("#prevMemory").addEventListener("click", () => setMemory(state.memoryIndex - 1));
  $("#nextMemory").addEventListener("click", () => setMemory(state.memoryIndex + 1));
  $("#startCinema").addEventListener("click", openCinema);
  $("#closeCinema").addEventListener("click", closeCinema);
  $("#cinemaPrev").addEventListener("click", () => {
    setMemory(state.memoryIndex - 1);
    restartCinemaTimer();
  });
  $("#cinemaNext").addEventListener("click", () => {
    setMemory(state.memoryIndex + 1);
    restartCinemaTimer();
  });

  document.addEventListener("keydown", (event) => {
    const cinemaOpen = $("#cinemaOverlay").getAttribute("aria-hidden") === "false";
    if (!cinemaOpen) return;

    if (event.key === "Escape") closeCinema();
    if (event.key === "ArrowLeft") {
      setMemory(state.memoryIndex - 1);
      restartCinemaTimer();
    }
    if (event.key === "ArrowRight") {
      setMemory(state.memoryIndex + 1);
      restartCinemaTimer();
    }
  });
}

function setupVault() {
  const form = $("#lockForm");
  const input = $("#passcode");
  const status = $("#lockStatus");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const accepted = CONFIG.manualPasscodes.includes(normalize(input.value));

    if (!accepted) {
      status.textContent = "Ainda nao. A frase certa e voce quem decide quando entregar.";
      form.animate(
        [
          { transform: "translateX(0)" },
          { transform: "translateX(-6px)" },
          { transform: "translateX(6px)" },
          { transform: "translateX(0)" },
        ],
        { duration: 260, easing: "ease-out" },
      );
      return;
    }

    status.textContent = "Aberto. Agora a carta e sua.";
    input.blur();
    unlockCapsule({ reveal: false });
    typeLetter();
    playChime();
  });
}

function setupPhotos() {
  $$(".photo-tile img, .hero-photo img, .memory-stage img, .cinema-frame img, .grand-finale-stage img").forEach((image) => {
    if (image.complete && image.naturalWidth === 0) {
      image.closest(".photo-tile, .hero-photo, .memory-stage, .cinema-frame, .grand-finale-stage").classList.add("is-missing");
    }

    image.addEventListener("error", () => {
      image.closest(".photo-tile, .hero-photo, .memory-stage, .cinema-frame, .grand-finale-stage").classList.add("is-missing");
    });
  });
}

function setupTilt() {
  $$(".tilt").forEach((card) => {
    card.addEventListener("pointermove", (event) => {
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      card.style.setProperty("--tilt-x", `${x * 5}deg`);
      card.style.setProperty("--tilt-y", `${y * -5}deg`);
    });

    card.addEventListener("pointerleave", () => {
      card.style.setProperty("--tilt-x", "0deg");
      card.style.setProperty("--tilt-y", "0deg");
    });
  });
}

function setupFinale() {
  $("#openPortal").addEventListener("click", () => {
    $("#cofre").scrollIntoView({ behavior: "smooth", block: "start" });
    window.setTimeout(() => $("#passcode").focus(), 650);
    universe.pulse();
  });

  $("#grandFinal").addEventListener("click", openGrandFinale);
  $("#closeGrandFinale").addEventListener("click", closeGrandFinale);
  $("#finalSky").addEventListener("click", () => {
    writeFinalSky();
    showToast("Agora sim: escrito no ceu.");
  });
  $("#finalReplay").addEventListener("click", () => {
    if (!state.capsuleUnlocked) {
      closeGrandFinale();
      $("#cofre").scrollIntoView({ behavior: "smooth", block: "start" });
      showToast("A capsula libera depois da frase secreta.");
      return;
    }

    closeGrandFinale();
    setMemory(0);
    openCinema();
  });

  document.addEventListener("keydown", (event) => {
    const finalOpen = $("#grandFinaleOverlay").getAttribute("aria-hidden") === "false";
    if (finalOpen && event.key === "Escape") closeGrandFinale();
  });

  $$(".promise-card").forEach((card) => {
    card.addEventListener("click", () => {
      card.classList.toggle("is-lit");
      universe.spark();
    });
  });
}

function playChime(big = false) {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return;

  const context = new AudioContext();
  const now = context.currentTime;
  const notes = big ? [392, 493.88, 659.25, 783.99] : [329.63, 415.3, 554.37];

  notes.forEach((frequency, index) => {
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    oscillator.type = "sine";
    oscillator.frequency.value = frequency;
    gain.gain.setValueAtTime(0, now + index * 0.08);
    gain.gain.linearRampToValueAtTime(0.09, now + index * 0.08 + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.001, now + index * 0.08 + 0.58);
    oscillator.connect(gain).connect(context.destination);
    oscillator.start(now + index * 0.08);
    oscillator.stop(now + index * 0.08 + 0.64);
  });
}

const universe = (() => {
  const canvas = $("#universeCanvas");
  const context = canvas.getContext("2d");
  const pointer = { x: 0, y: 0, active: false };
  const stars = [];
  let width = 0;
  let height = 0;
  let dpr = 1;
  let targetPoints = [];
  let pulsePower = 0;
  let sparkPower = 0;

  function createStar() {
    return {
      x: Math.random() * width,
      y: Math.random() * height,
      originX: Math.random() * width,
      originY: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.22,
      vy: (Math.random() - 0.5) * 0.22,
      size: Math.random() * 1.8 + 0.6,
      phase: Math.random() * Math.PI * 2,
      target: null,
      color: Math.random() > 0.72 ? "#ffcf75" : Math.random() > 0.42 ? "#67e7d1" : "#fff7e6",
    };
  }

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    context.setTransform(dpr, 0, 0, dpr, 0, 0);

    const desired = width < 720 ? 230 : 430;
    while (stars.length < desired) stars.push(createStar());
    while (stars.length > desired) stars.pop();
    stars.forEach((star) => {
      star.x = Math.min(star.x, width);
      star.y = Math.min(star.y, height);
      star.originX = Math.random() * width;
      star.originY = Math.random() * height;
    });

    if (targetPoints.length) {
      formText("JULINHA", false);
    }
  }

  function drawConnections() {
    context.lineWidth = 1;
    for (let i = 0; i < stars.length; i += 1) {
      const a = stars[i];
      for (let j = i + 1; j < Math.min(stars.length, i + 7); j += 1) {
        const b = stars[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 92) {
          context.globalAlpha = (1 - distance / 92) * 0.18;
          context.strokeStyle = "#fff7e6";
          context.beginPath();
          context.moveTo(a.x, a.y);
          context.lineTo(b.x, b.y);
          context.stroke();
        }
      }
    }
  }

  function animate(time = 0) {
    context.clearRect(0, 0, width, height);
    pulsePower *= 0.94;
    sparkPower *= 0.92;

    drawConnections();

    stars.forEach((star, index) => {
      const target = targetPoints.length ? targetPoints[index % targetPoints.length] : null;

      if (target) {
        const wave = Math.sin(time * 0.002 + index * 0.18) * 0.2;
        star.x += (target.x - star.x) * 0.035 + wave;
        star.y += (target.y - star.y) * 0.035;
      } else {
        star.x += star.vx + Math.sin(time * 0.0007 + star.phase) * 0.08;
        star.y += star.vy + Math.cos(time * 0.0008 + star.phase) * 0.08;
      }

      if (pointer.active) {
        const dx = star.x - pointer.x;
        const dy = star.y - pointer.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 150) {
          const force = (150 - distance) / 150;
          star.x += (dx / Math.max(distance, 1)) * force * 1.8;
          star.y += (dy / Math.max(distance, 1)) * force * 1.8;
        }
      }

      if (!target) {
        if (star.x < -20) star.x = width + 20;
        if (star.x > width + 20) star.x = -20;
        if (star.y < -20) star.y = height + 20;
        if (star.y > height + 20) star.y = -20;
      }

      const glow = 0.45 + Math.sin(time * 0.003 + star.phase) * 0.22 + pulsePower + sparkPower * Math.random();
      context.globalAlpha = Math.max(0.18, Math.min(1, glow));
      context.fillStyle = star.color;
      context.beginPath();
      context.arc(star.x, star.y, star.size + pulsePower * 1.4, 0, Math.PI * 2);
      context.fill();
    });

    context.globalAlpha = 1;
    requestAnimationFrame(animate);
  }

  function formText(text, announce = true) {
    const offscreen = document.createElement("canvas");
    const offContext = offscreen.getContext("2d");
    offscreen.width = width;
    offscreen.height = height;
    const fontSize = width < 720 ? 68 : Math.min(154, Math.floor(width / 7));
    offContext.fillStyle = "#ffffff";
    offContext.textAlign = "center";
    offContext.textBaseline = "middle";
    offContext.font = `900 ${fontSize}px Georgia, serif`;
    offContext.fillText(text, width / 2, height / 2);

    const imageData = offContext.getImageData(0, 0, width, height).data;
    const points = [];
    const gap = width < 720 ? 6 : 8;

    for (let y = 0; y < height; y += gap) {
      for (let x = 0; x < width; x += gap) {
        const alpha = imageData[(y * width + x) * 4 + 3];
        if (alpha > 120) points.push({ x, y });
      }
    }

    targetPoints = points.sort(() => Math.random() - 0.5).slice(0, stars.length);
    pulsePower = 0.6;
    if (announce) showToast("O ceu escreveu Julinha.");
  }

  function pulse() {
    pulsePower = 0.55;
  }

  function spark() {
    sparkPower = 0.28;
  }

  window.addEventListener("resize", resize);
  window.addEventListener("pointermove", (event) => {
    pointer.x = event.clientX;
    pointer.y = event.clientY;
    pointer.active = true;
  });
  window.addEventListener("pointerleave", () => {
    pointer.active = false;
  });

  return { resize, animate, formText, pulse, spark };
})();

function init() {
  updateCountdown();
  window.setInterval(updateCountdown, 1000);
  buildReasons();
  buildScenes();
  setupCapsule();
  setupVault();
  setupPhotos();
  setupTilt();
  setupFinale();
  universe.resize();
  universe.animate();
}

document.addEventListener("DOMContentLoaded", init);
