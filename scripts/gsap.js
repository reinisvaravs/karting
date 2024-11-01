gsap.registerPlugin(ScrollTrigger)


const lenis = new Lenis();
lenis.on("scroll", ScrollTrigger.update);
gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});
gsap.ticker.lagSmoothing(0);







// var timeline = gsap.timeline();

// timeline.to("#card1", {
//   scrollTrigger: {
//     trigger: "#card1",
//     start: "center center",
//     toggleActions: "play none none reverse",
//     markers: true,
//     pin: "#card1",
//     pinSpacing: true,
//     toggleClass: '.card-stick',
//   }
// });