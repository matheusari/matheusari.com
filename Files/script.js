window.sr = ScrollReveal({ reset: false });

sr.reveal(".scroll-reveal-01", { duration: 1000, afterReveal: revealCallback });
sr.reveal(".scroll-reveal-02", {
  rotate: { x: 0, y: 30, z: 0 },
  duration: 1300,
  afterReveal: revealCallback,
});

function revealCallback(el) {
  el.classList.add("revealed");
}
