gsap.registerPlugin(ScrollTrigger);

gsap.from("#billeder", {
  yPercent: 50,
  ease: "back.out(0.5)",
  scrollTrigger: {
    trigger: "#billeder",
    start: "top 100%",
    end: "top 80%",
    scrub: true,
    // markers: true,
  },
});


 gsap.to(".animation_produkter_jap ", {
   x: -100,
   duration: 2,
   ease: "power2.out",
   scrollTrigger: {
     trigger: ".animation_produkter_jap ",
     start: "top center",
     toggleActions: "restart pause reverse pause",
    //  markers: true,
     scrub: true,
   },
 });


 gsap.to(".animation_produkter_mexi ", {
   x: 100,
   duration: 2,
   ease: "power2.out",
   scrollTrigger: {
     trigger: ".animation_produkter_mexi ",
     start: "top center",
     toggleActions: "restart pause reverse pause",
    //  markers: true,
     scrub: true,
   },
 });




 
 gsap.to(".animation_produkte_egyp", {
   x: -100,
   duration: 2,
   ease: "power2.out",
   scrollTrigger: {
     trigger: ".animation_produkte_egyp",
     start: "top center",
     toggleActions: "restart pause reverse pause",
    //  markers: true,
     scrub: true,
   },
 });


gsap.from("#event", {
  scaleX: 0.5,
  scaleY: 0.5,
  scrollTrigger: {
    trigger: "#event",
    start: "top 90%",
    end: "top 50%",
    scrub: true,
    // markers: true,
  },
});
