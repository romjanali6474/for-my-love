const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");
if (menuButton && nav) menuButton.addEventListener("click", () => nav.classList.toggle("open"));

const gift = document.getElementById("giftHeart");
if (gift) {
  gift.addEventListener("click", () => {
    const message = document.getElementById("revealMessage");
    message.classList.add("show");
    gift.classList.add("opened");
    gift.querySelector("i").textContent = "opened with love";
    gift.disabled = true;
    for (let i = 0; i < 24; i++) {
      const heart = document.createElement("span");
      heart.textContent = ["♥", "✦", "♡", "✿"][i % 4];
      heart.className = "confetti";
      heart.style.left = `${Math.random() * 100}%`;
      heart.style.animationDelay = `${Math.random() * .8}s`;
      document.body.appendChild(heart);
      setTimeout(() => heart.remove(), 3000);
    }
    message.scrollIntoView({ behavior: "smooth", block: "center" });
  });
}
