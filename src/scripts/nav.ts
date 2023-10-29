document.querySelector(".hamburger")?.addEventListener("click", () => {
  document.querySelector(".nav__right")?.classList.toggle("expanded");
});

export {};
