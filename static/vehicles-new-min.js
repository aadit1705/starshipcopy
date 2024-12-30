const Vehicles = () => {
    const e = getId("specs")
      , t = getId("controls")
      , i = getId("gallery-prev-s")
      , n = getId("gallery-next-s")
      , s = getId("reveal-video")
      , o = getId("slider")
      , a = getId("feature")
      , l = getId("reveal-overview")
      , p = queryAll(".js-stagger")
      , d = queryAll(".additional-toggle")
      , r = {
        v: 0
    }
      , c = getId("capabilities-next-g")
      , g = getId("capabilities-prev-g");
    let y = 0
      , v = 0
      , S = !1;
    const u = () => {
        v = innerHeight,
        y = a.getBoundingClientRect().top + (HAS_SMOOTH ? SMOOTH_SCROLLING : window.scrollY)
    }
    ;
    let w = !1;
    s.pause(),
    s.currentTime = 0,
    i.style.opacity = .25,
    i.style["pointer-events"] = "none";
    const I = new Swiper(o,{
        direction: "horizontal",
        loop: !1,
        touchRatio: 2,
        shortSwipes: !0,
        longSwipes: !1,
        simulateTouch: !1,
        autoHeight: !deviceSettings.isDesktop,
        effect: "slide",
        speed: 600,
        pagination: {
            el: ".swiper-dots",
            type: "bullets",
            clickable: !0
        },
        navigation: {
            nextEl: n,
            prevEl: i
        },
        keyboard: {
            enabled: !0,
            onlyInViewport: !0
        },
        a11y: !0
    }).on("slideChange", e => {
        i.style.opacity = I.isBeginning ? .25 : 1,
        i.style["pointer-events"] = I.isBeginning ? "none" : "",
        n.style.opacity = I.isEnd ? .25 : 1,
        n.style["pointer-events"] = I.isEnd ? "none" : "",
        deviceSettings.isDesktop && SMOOTH_SCROLLING <= y + v && window.scrollTo(0, y + v)
    }
    )
      , h = new Swiper(getId("starship-capabilities"),{
        direction: "horizontal",
        loop: !1,
        speed: 1500,
        autoHeight: !deviceSettings.isDesktop,
        pagination: {
            el: "#capabilities-dots",
            type: "bullets",
            clickable: !0
        },
        navigation: {
            nextEl: c,
            prevEl: g
        },
        keyboard: {
            enabled: !0,
            onlyInViewport: !0
        },
        a11y: !0,
        on: {
            init: () => decodeImages()
        }
    }).on("slideChange", e => {
        g.style.opacity = h.isBeginning ? .25 : 1,
        g.style["pointer-events"] = h.isBeginning ? "none" : "",
        c.style.opacity = h.isEnd ? .25 : 1,
        c.style["pointer-events"] = h.isEnd ? "none" : "",
        deviceSettings.isDesktop && SMOOTH_SCROLLING <= y + v && window.scrollTo(0, y + v)
    }
    );
    new Swiper("#gallery",{
        direction: "horizontal",
        loop: !0,
        speed: 1500,
        pagination: {
            el: "#gallery-dots",
            type: "bullets",
            clickable: !0
        },
        navigation: {
            nextEl: "#gallery-next-g",
            prevEl: "#gallery-prev-g"
        },
        on: {
            init: () => decodeImages()
        }
    });
    let O = !1;
    e && e.addEventListener("click", t => {
        t.preventDefault(),
        O = !O,
        d[0].style.display = O ? "none" : "table",
        d[1].style.display = O ? "table" : "none",
        O ? e.classList.add("active") : e.classList.remove("active")
    }
    ),
    u(),
    window.addEventListener("resize", u),
    gsap.ticker.add( () => {
        const e = HAS_SMOOTH ? SMOOTH_SCROLLING : window.scrollY
          , i = Math.min(v, Math.max(v - (v + y - e), 0));
        i >= v - v / 2 ? (gsap.set(t, {
            opacity: 1,
            clearProps: "opacity"
        }),
        deviceSettings.isDesktop && gsap.set(l, {
            opacity: 1,
            clearProps: "opacity"
        })) : (gsap.set(t, {
            opacity: 0
        }),
        deviceSettings.isDesktop && gsap.set(l, {
            opacity: 0
        })),
        deviceSettings.isDesktop && (!w && i >= v / 2 && (w = !0,
        s.currentTime = 0,
        gsap.to(r, .4, {
            v: 1,
            ease: Linear.easeNone,
            onComplete: () => s.play()
        })),
        w && i < v / 2 && (w = !1,
        gsap.to(r, .4, {
            v: 0,
            ease: Linear.easeNone,
            onComplete: () => {
                s.pause(),
                s.currentTime = 0
            }
        })),
        !S && i >= .25 * v && (S = !0,
        gsap.fromTo(p, .6, {
            x: 20,
            autoAlpha: 0
        }, {
            x: 0,
            autoAlpha: 1,
            duration: .6,
            stagger: .2
        }))),
        0 !== I.activeIndex && i <= .75 * v && I.slideTo(0, 1e3 * I.activeIndex)
    }
    )
}
;
"loading" != document.readyState ? Vehicles() : document.addEventListener("DOMContentLoaded", Vehicles);
