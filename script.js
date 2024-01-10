gsap.to("#page", {
  scrollTrigger: {
    trigger: `.heroImg`,
    start: `top 20%`,
    end: `bottom top`,
    pin: true,
    scrub: 0.5,
  },
});
