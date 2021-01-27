const mobile = window.matchMedia('(max-width: 480px)')
const desktop = window.matchMedia('(min-width: 481px)')

if (mobile.matches) {
  gsap.from("h1", {
    ease: "power4",
    opacity: 0,
    duration: 1,
    y: -50,
    delay: .1
  })

  gsap.from("p", {
    ease: "power4",
    opacity: 0,
    duration: 1,
    y: -50,
    delay: .3
  })

  gsap.from("button", {
    ease: "power4",
    opacity: 0,
    duration: 1,
    y: 50,
    delay: .5
  })

  gsap.from(".pic-container", {
    ease: "power4",
    opacity: 0,
    duration: 1,
    y: 50,
    delay: .5
  })
}

if (desktop.matches) {
gsap.from("h1", {
  ease: "power4",
  opacity: 0,
  duration: 1,
  y: -50,
  delay: .1
})

gsap.from("p", {
  ease: "power4",
  opacity: 0,
  duration: 1,
  y: -50,
  delay: .3
})

gsap.from("button", {
  ease: "power4",
  opacity: 0,
  duration: 1,
  y: -50,
  delay: .5
})

gsap.from(".pic-container", {
  ease: "power4",
  duration: 2,
  width: 0,
  delay: .3
})
}
