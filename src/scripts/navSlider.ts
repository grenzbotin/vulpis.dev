window.addEventListener("scroll", () => {
  const scroll = window.scrollY;
  const nav = document.getElementById("inner_wrapper");
  const navDivider = document.getElementById("nav_divider");
  if (scroll > 200) {
    nav?.classList.remove("slide_up");
    nav?.classList.add("slide_in");
    navDivider?.classList.remove("dark");
  } else if (scroll <= 200 && nav?.classList.contains("slide_in")) {
    nav.classList.add("slide_up");
    nav.classList.remove("slide_in");
    navDivider?.classList.add("dark");
  }
});

export {};
