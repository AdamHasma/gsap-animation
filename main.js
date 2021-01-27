const mobile = window.matchMedia('(max-width: 480px)')
const desktop = window.matchMedia('(min-width: 481px)')

if (mobile.matches) {
  gsap.from("h1", {
    opacity: 0,
    duration: 1,
    y: -50,
    delay: .3
  })

  gsap.from("p", {
    opacity: 0,
    duration: 1,
    y: -50,
    delay: .6
  })

  gsap.from("button", {
    opacity: 0,
    duration: 1,
    y: 50,
    delay: .9
  })

  gsap.from(".pic-container", {
    opacity: 0,
    duration: 1,
    y: 50,
    delay: 1.2
  })
}

if (desktop.matches) {
gsap.from("h1", {
  opacity: 0,
  duration: 1,
  y: -50,
  delay: .3
})

gsap.from("p", {
  opacity: 0,
  duration: 1,
  y: -50,
  delay: .6
})

gsap.from("button", {
  opacity: 0,
  duration: 1,
  y: -50,
  delay: .9
})

gsap.from(".pic-container", {
  duration: 1,
  width: 0,
  delay: 1.2
})
}
