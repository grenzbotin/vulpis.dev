import gsap from "gsap";
import TextPlugin from "gsap/TextPlugin";

let animationIsPlaying = false;

gsap.registerPlugin(TextPlugin);

const getText = () =>
  localStorage.getItem("theme") === "dark" ? "*on" : "*off";

const textBlendIn = () => {
  const t1 = gsap.timeline();
  t1.to("#click_text", {
    duration: 0.3,
    text: getText(),
    ease: "power4",
  }).to("#click_text", { delay: 0.5, duration: 0.2, text: "" });
};

const switchTheme = () => {
  textBlendIn();
  const html = document.querySelector("html");
  const theme = localStorage.getItem("theme");

  if (theme === "light") {
    html?.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    html?.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }

  animationIsPlaying = false;
};

const playAnimation = () => {
  animationIsPlaying = true;
  const t1 = gsap.timeline();
  const easeStyle = "expo.out";
  t1.to("#logo_face", {
    x: -13,
    rotateZ: -10,
    transformOrigin: "center center",
  })
    .to("#arm", { y: -20, ease: easeStyle })
    .to("#arm", { x: 45, y: -15, ease: easeStyle })
    .to("#arm", { x: 0, y: 20, ease: easeStyle })
    .to("#arm", { x: 60, ease: easeStyle })
    .to("#arm", { x: 40, y: 0, ease: easeStyle })
    .to("#arm", { x: 70, ease: easeStyle })
    .to("#switch", { y: 4, x: 0.5 })
    .call(switchTheme, undefined, "-=0.7")
    .to("#arm", { y: 0, x: 0 })
    .to("#logo_face", { x: 0, rotateZ: 0, transformOrigin: "center center" });
};

const logo = document.getElementById("logo");
logo?.addEventListener("click", () => {
  if (!animationIsPlaying) {
    playAnimation();
  }
});

logo?.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    if (!animationIsPlaying) {
      playAnimation();
    }
  }
});

export {};
