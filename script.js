// Initial animation
gsap.to("#mainContainer", {
  opacity: 1,
  y: 0,
  duration: 1,
  ease: "power2.out",
});

gsap.to("#title", {
  opacity: 1,
  y: 0,
  duration: 1,
  delay: 0.5,
});

gsap.to("#message", {
  opacity: 1,
  duration: 1,
  delay: 1,
});

// Typing effect
function typeMessage(element, text, speed = 50) {
  let i = 0;
  element.innerHTML = "";
  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}

// Create floating heart
function createHeart() {
  const heart = document.createElement("div");
  heart.innerHTML = "❤️";
  heart.className = "floating-heart text-2xl";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.top = "100vh";
  document.getElementById("particles").appendChild(heart);

  gsap.to(heart, {
    y: -window.innerHeight * 1.5,
    x: "random(-100, 100)",
    rotation: "random(-90, 90)",
    duration: "random(3, 6)",
    ease: "power1.out",
    onComplete: () => heart.remove(),
  });
}

// Heart shower effect
function createHeartShower() {
  for (let i = 0; i < 20; i++) {
    setTimeout(createHeart, i * 100);
  }
}

// Interactive elements
let heartClicks = 0;
document.getElementById("mainHeart").addEventListener("click", () => {
  heartClicks++;
  if (heartClicks >= 5) {
    createHeartShower();
    heartClicks = 0;
  }
  gsap.to("#mainHeart", {
    scale: 1.5,
    duration: 0.2,
    yoyo: true,
    repeat: 1,
  });
});

document.getElementById("showLove").addEventListener("click", () => {
  createHeartShower();
  gsap.to("#message", {
    scale: 1.1,
    duration: 0.3,
    yoyo: true,
    repeat: 1,
  });
});

document.getElementById("revealMessage").addEventListener("click", () => {
  typeMessage(
    document.getElementById("message"),
    `You are my favorite person in the world, and I love you so much. You make me feel truly happy, and no one else can do that. Even when things get hard, I will never give up on you because my love for you will never change.
  
  I just want you to know how I feel. I want you to understand and respect my feelings because you mean everything to me. I never want you to hurt me like others have. More than anything, I want you to be happy. Even if it means I have to go through pain, your happiness will always be my priority.
  
  I’m sorry for anything I’ve done that made you unhappy. I know I’m not perfect, but my love for you is real and forever. No matter what happens, I love you with all my heart. Always. ❤️`
  );
});

// Easter egg: Move hearts on mouse move
document.addEventListener("mousemove", (e) => {
  const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  gsap.to("#mainContainer", {
    rotateY: xAxis,
    rotateX: yAxis,
    duration: 0.5,
  });
});
