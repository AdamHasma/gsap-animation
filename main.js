const mobile = window.matchMedia('(max-width: 480px)')
const desktop = window.matchMedia('(min-width: 481px)')
const resetButton = document.getElementById('reset')
const button = document.querySelector('.button')

let tl = gsap.timeline({
  defaults: {
    duration: 1.5,
    autoAlpha: 0,
    ease: "power4"
  }
})

document.querySelector(".button").addEventListener("click", () => {
  tl.reversed() ? tl.play() : tl.reverse();
})

document.addEventListener("DOMContentLoaded", function() {
  if (desktop.matches) {
    tl.from("h1", {
        y: -50
      })
      .from("p", {
        y: -50,
      }, "-=1.2")
      .from(".button", {
        y: -50
      }, "-=1.2")
      .from(".pic-container", {
        width: 0,
        left: 400,
        duration: 2
      }, "-=1.6")
  }

  if (mobile.matches) {
    tl.from("h1", {
        y: -50
      })
      .from("p", {
        y: -50,
      }, "-=1.2")
      .from(".button", {
        y: 50
      }, "-=1.2")
      .from(".pic-container", {
        y: 50,
        duration: 2
      }, "-=1.6")
  }
});
