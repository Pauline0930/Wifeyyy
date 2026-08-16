/* ==================================================
   COURTING WEBSITE
   ================================================== */


/* ================= GET ELEMENTS ================= */

const screens = {

  intro:
    document.getElementById("intro"),

  message:
    document.getElementById("message"),

  question:
    document.getElementById("question"),

  yes:
    document.getElementById("yes"),

  surprise:
    document.getElementById("surprise")
};


const introText =
  document.getElementById("introText");


const finalText =
  document.getElementById("finalText");


const noBtn =
  document.getElementById("noBtn");


const noMessage =
  document.getElementById("noMessage");


const musicBtn =
  document.getElementById("musicBtn");


const bgMusic =
  document.getElementById("bgMusic");


const hearts =
  document.getElementById("hearts");


const confetti =
  document.getElementById("confetti");


/* ================= VARIABLES ================= */

const introWords =
  "I have something to ask you...";


const finalWords =

  "I’m not promising that I’ll be perfect, because I know I have flaws too. But I can promise that I’ll be sincere with you. " +
  "I want to take my time getting to know you, to make you feel appreciated, respected, and comfortable around me. " +
  "I don’t want to force you into anything. I want you to have the freedom to decide if you want to let me into your life and give me a chance. " +
  "I want to show you through my actions, not just through words, that my intentions are genuine. " +
  "I want to be someone who listens to you, supports you, respects your boundaries, celebrates your happiness, and stays even when things aren't always easy. " +
  "I don't know where this will eventually lead us. " +
  "For now, I just want the opportunity to get to know you better and show you how serious I am about you. ";


let noAttempts = 0;

let musicPlaying = false;


/* ================= TYPING EFFECT ================= */

function typeText(
  element,
  text,
  speed = 65
) {

  element.textContent = "";

  let i = 0;

  const timer =
    setInterval(() => {

      element.textContent += text[i];

      i++;

      if (i >= text.length) {

        clearInterval(timer);
      }

    }, speed);
}


/* ================= CHANGE SCREEN ================= */

function showScreen(name) {

  Object.values(screens)
    .forEach(screen => {

      screen.classList.remove(
        "active"
      );

    });


  screens[name]
    .classList.add("active");


  window.scrollTo({

    top: 0,

    behavior: "smooth"

  });
}


/* ================= FALLING HEARTS ================= */

function createHeart() {

  const heart =
    document.createElement("span");


  heart.className =
    "floating-heart";


  heart.textContent = [

    "♡",
    "♥",
    "❤",
    "💕",
    "💗"

  ][
    Math.floor(
      Math.random() * 5
    )
  ];


  heart.style.left =
    `${Math.random() * 100}%`;


  heart.style.fontSize =
    `${12 + Math.random() * 20}px`;


  heart.style.animationDuration =
    `${5 + Math.random() * 7}s`;


  hearts.appendChild(heart);


  setTimeout(() => {

    heart.remove();

  }, 13000);
}


/* Create hearts continuously */

setInterval(
  createHeart,
  850
);


/* Create some immediately */

for (
  let i = 0;
  i < 8;
  i++
) {

  setTimeout(
    createHeart,
    i * 180
  );
}


/* ================= CONFETTI ================= */

function celebrate() {

  const symbols = [

    "💗",
    "💕",
    "✨",
    "🌷",
    "♡",
    "💖"

  ];


  for (
    let i = 0;
    i < 55;
    i++
  ) {

    const piece =
      document.createElement("span");


    piece.className =
      "confetti-piece";


    piece.textContent =
      symbols[
        Math.floor(
          Math.random() *
          symbols.length
        )
      ];


    piece.style.left =
      `${Math.random() * 100}%`;


    piece.style.fontSize =
      `${12 + Math.random() * 18}px`;


    piece.style.animationDuration =
      `${2 + Math.random() * 3}s`;


    piece.style.animationDelay =
      `${Math.random() * .8}s`;


    confetti.appendChild(piece);


    setTimeout(() => {

      piece.remove();

    }, 6000);
  }
}


/* ================= NO BUTTON ================= */

function moveNoButton() {

  noAttempts++;


  const messages = [

    "Are you sure? 🥺",

    "Think about it again... 😭",

    "The button is shy too. 😂",

    "You can't escape the question! 😭",

    "I'll ask nicely again... please? 🥹",

    "Okay okay, last chance... 💗"

  ];


  noMessage.textContent =
    messages[
      Math.min(
        noAttempts - 1,
        messages.length - 1
      )
    ];


  const buttons =
    document.querySelector(
      ".buttons"
    );


  const rect =
    buttons.getBoundingClientRect();


  const btnRect =
    noBtn.getBoundingClientRect();


  const maxX =
    Math.max(
      0,
      rect.width - btnRect.width
    );


  const maxY =
    Math.max(
      0,
      rect.height - btnRect.height
    );


  noBtn.style.position =
    "absolute";


  noBtn.style.left =
    `${Math.random() * maxX}px`;


  noBtn.style.top =
    `${Math.random() *
      Math.max(maxY, 45)}px`;
}


/* ================= NAVIGATION ================= */


/* Open message */

document
  .getElementById("startBtn")
  .addEventListener(
    "click",
    () => {

      showScreen("message");

    }
  );


/* Open question */

document
  .getElementById("questionBtn")
  .addEventListener(
    "click",
    () => {

      showScreen("question");

    }
  );


/* YES */

document
  .getElementById("yesBtn")
  .addEventListener(
    "click",
    () => {

      celebrate();

      showScreen("yes");

    }
  );


/* Final surprise */

document
  .getElementById("surpriseBtn")
  .addEventListener(
    "click",
    () => {

      showScreen("surprise");

      typeText(
        finalText,
        finalWords,
        22
      );

    }
  );


/* Restart */

document
  .getElementById("restartBtn")
  .addEventListener(
    "click",
    () => {

      noAttempts = 0;

      noBtn.style.position =
        "relative";

      noBtn.style.left = "";

      noBtn.style.top = "";

      noMessage.textContent = "";

      showScreen("intro");

      typeText(
        introText,
        introWords,
        65
      );

    }
  );


/* ================= NO BUTTON EVENTS ================= */


/* Desktop */

noBtn.addEventListener(
  "mouseenter",
  moveNoButton
);


noBtn.addEventListener(
  "click",
  moveNoButton
);


/* Mobile */

noBtn.addEventListener(
  "touchstart",
  (event) => {

    event.preventDefault();

    moveNoButton();

  },
  {
    passive: false
  }
);


/* ================= MUSIC ================= */

musicBtn.addEventListener(
  "click",
  async () => {

    try {

      if (musicPlaying) {

        bgMusic.pause();

        musicPlaying = false;

        musicBtn.textContent =
          "♫ Music";

      }

      else {

        await bgMusic.play();

        musicPlaying = true;

        musicBtn.textContent =
          "♫ Music: ON";

      }

    }

    catch {

      musicBtn.textContent =
        "Add music.mp3 🎵";

    }

  }
);


/* ================= START ================= */

typeText(
  introText,
  introWords,
  65
);