gsap.registerPlugin(scrollTrigger);
let speed = 100;

/* SCENE 1 */
let scene1 = gsap.timeline();
ScrollTrigger.create({
    animation: scene1,
    trigger: ".scrollElement",
    start: "top top",
    end: "45% 100%",
    scrub: 3,
});

// hills animation
scene1.to("#h1-1", { y: 3 * speed, x: 1 * speed, scale: 0.9, ease: "power1.in" }, 0)
scene1.to("#h1-2", { y: 2.6 * speed, x: -0.6 * speed, ease: "pover1.in" }, 0)
scene1.to("#h1-3", { y: 1.7 * speed, x: 1.2 * speed }, 0.03)
scene1.to("#h1-4", { y: 3 * speed, x: 1 * speed }, 0.03)
scene1.to("#h1-5", { y: 2 * speed, x: 1 * speed }, 0.03)
scene1.to("#h1-6", { y: 2.3 * speed, x: -2.5 * speed }, 0)
scene1.to("#h1-7", { y: 5 * speed, x: 1.6 * speed }, 0)
scene1.to("#h1-8", { y: 3.5 * speed, x: 0.2 * speed }, 0)
scene1.to("#h1-9", { y: 3.5 * speed, x: -0.2 * speed }, 0)

//animate text
scene1.to("#info", {opacity: 1 }, {
    y: -250,
    x: 800,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".scrollElement",
        start: "15% top",
        end: "60% 100%",
        scrub: 4,
        onEnter: function() { gsap.to("#bird", { scaleX: 1, rotation: 0 }) },
        onLeave: function() { gsap.to("#bird", { scaleX: -1, rotation: -15 }) },
    }
})

/* falling star */
gsap.to("#fstar", {
    x: -700,
    y: -250,
    ease: "power4.out",
    scrollTrigger: {
        trigger: ".scrollELement",
        start: "4000 top",
        end: "6000 100%",
        scrub: 5,
        onEnter: function() { gsap.set("#fstar", { opacity: 1 }) },
        onLeave: function() { gsap.set("#fstar", { opacity: 0 }) },
    }
})

//reset scrollbar position after refresh
window.onbeforeunload = function() {
    window.scrollTo(0, 0);
}

let fullscreen;
let fsEnter = document.getElementById('fullscr');
fsEnter.addEventListener('click', function(e) {
    e.preventDefault();
    if (!fullscreen) {
        fullscreen = true;
        document.documentElement.requestFullscreen();
        fsEnter.innerHTML = "Exit Fullscreen";
    }
    else {
        fullscreen = false;
        document.exitFullscreen();
        fsEnter.innerHTML = "Go Fullscreen";
    }
});