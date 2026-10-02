gsap.registerPlugin(ScrollTrigger);

const introTimeline = gsap.timeline();

introTimeline.from(".eyebrow", {
    opacity: 0,
    y: 20,
    duration: 0.8,
    ease: "power3.out"
});

introTimeline.from(".title-line", {
    opacity: 0,
    y: 60,
    duration: 1,
    stagger: 0.18,
    ease: "power4.out"
}, "-=0.45");

introTimeline.from(".hero-description", {
    opacity: 0,
    y: 25,
    duration: 0.8,
    ease: "power3.out"
}, "-=0.55");

introTimeline.to(".stat-card", {
    opacity: 1,
    duration: 0.7,
    stagger: 0.18,
    ease: "power3.out"
}, "-=0.35");

document.querySelectorAll(".counter").forEach((counter) => {
    const target = Number(counter.dataset.target);
    const counterObject = { value: 0 };
    gsap.to(counterObject, {
        value: target,
        duration: 1.8,
        delay: 1.3,
        ease: "power2.out",
        onUpdate: () => {
            counter.textContent = Math.round(counterObject.value);
        }
    });
});

gsap.from(".hero-visual", {
    opacity: 0,
    scale: 0.8,
    rotate: -10,
    duration: 1.4,
    delay: 0.4,
    ease: "power3.out"
});

const heroScrollTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: 1
    }
});

heroScrollTimeline.to(".orb-main", {
    x: -180,
    y: 220,
    scale: 0.75,
    rotation: 120,
    ease: "none"
}, 0);

heroScrollTimeline.to(".orb-back", {
    x: 120,
    y: 180,
    scale: 1.3,
    rotation: -180,
    ease: "none"
}, 0);

heroScrollTimeline.to(".card-one", {
    x: 80,
    y: 160,
    rotation: 15,
    ease: "none"
}, 0);

heroScrollTimeline.to(".card-two", {
    x: -100,
    y: -120,
    rotation: -12,
    ease: "none"
}, 0);

heroScrollTimeline.to(".card-three", {
    x: 100,
    y: -100,
    rotation: 10,
    ease: "none"
}, 0);

gsap.to(".hero-content", {
    y: -100,
    opacity: 0.35,
    ease: "none",
    scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: 1
    }
});

gsap.to(".hero-grid", {
    y: 150,
    ease: "none",
    scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: 1.5
    }
});

gsap.from(".section-content", {
    opacity: 0,
    y: 80,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".about-section",
        start: "top 75%",
        toggleActions: "play none none reverse"
    }
});

gsap.from(".process-card", {
    opacity: 0,
    y: 70,
    duration: 0.9,
    stagger: 0.15,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".process-grid",
        start: "top 80%",
        toggleActions: "play none none reverse"
    }
});
gsap.from(".cta-section h2", {
    opacity: 0,
    y: 80,
    duration: 1.2,
    ease: "power4.out",
    scrollTrigger: {
        trigger: ".cta-section",
        start: "top 75%",
        toggleActions: "play none none reverse"
    }
});

window.addEventListener("load", () => {
    ScrollTrigger.refresh();
});
