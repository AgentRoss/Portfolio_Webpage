let dayNight = document.querySelector(".dayNight");
let banner = document.querySelector(".banner");

dayNight.addEventListener("click", () => {
  banner.classList.toggle("night");
});

let typingeffect = new Typed("#text", {
  strings: ["DropXOut", "Developer", "Coder", "Youtuber"],
  loop: true,
  typeSpeed: 110,
  backspeed: 50,
  backdelay: 1000,
});
