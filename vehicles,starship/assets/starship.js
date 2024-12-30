const Destinations = () => {
    gsap.registerPlugin(ScrollTrigger);
  
    const iss = document.getElementById('uses-iss');
    gsap.set(iss, { rotate:"25deg"});
    gsap.to(iss, {
      rotate:"50deg",
      ease: "none",
      scrollTrigger: {
        trigger: "#starship-uses",
        start: "top center",
        end: "top top",
        scrub: 1
      },
      duration: .1
    });
  
    gsap.set(".iss__inner", {xPercent: 15, rotate:"-25deg"});
    gsap.to(".iss__inner", {
      xPercent: 0, rotate:"-50deg",
      ease: "none",
      scrollTrigger: {
        trigger: "#starship-uses",
        start: "top center",
        end: "top top",
        scrub: 1
      },
      duration: .1
    });

    gsap.set(".station__inner", {xPercent: 15, rotate:"-25deg"});
    gsap.to(".station__inner", {
      xPercent: 0, rotate:"-50deg",
      ease: "none",
      scrollTrigger: {
        trigger: "#starship-uses",
        start: "top center",
        end: "top top",
        scrub: 1
      },
      duration: .1
    });
  
    const moon = document.getElementById('uses-moon');
    gsap.set(moon, {rotate:"-20deg"});
    gsap.to(moon, {
      rotate:"0",
      ease: "none",
      scrollTrigger: {
        trigger: "#starship-uses",
        start: "top center",
        end: "top top",
        scrub: 1
      },
      duration: .1
    });
  
    gsap.set(".moon__inner", {xPercent: 0, rotate:"20deg"});
    gsap.to(".moon__inner", {
      xPercent: 0, rotate:"0",
      ease: "none",
      scrollTrigger: {
        trigger: "#starship-uses",
        start: "top center",
        end: "top top",
        scrub: 1
      },
      duration: .1
    });
  
    const mars = document.getElementById('uses-mars');
    gsap.set(mars, {rotate:"5deg"});
    gsap.to(mars, {
      rotate:"10deg",
      ease: "none",
      scrollTrigger: {
        trigger: "#starship-uses",
        start: "top center",
        end: "top top",
        scrub: 1
      },
      duration: .1
    });
  
    gsap.set(".mars__inner", {xPercent: 0, rotate:"-5%"});
    gsap.to(".mars__inner", {
      xPercent: 0, rotate:"-10deg",
      ease: "none",
      scrollTrigger: {
        trigger: "#starship-uses",
        start: "top center",
        end: "top top",
        scrub: 1
      },
      duration: .1
    });
  
  }
  
  if (document.readyState != 'loading'){
    Destinations()
  } else {
    document.addEventListener('DOMContentLoaded', Destinations)
  }
