import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const introTimeline = gsap.timeline();

      introTimeline
        .from(".eyebrow", {
          opacity: 0,
          y: 20,
          duration: 0.8,
          ease: "power3.out"
        })
        .from(
          ".title-line",
          {
            opacity: 0,
            y: 60,
            duration: 1,
            stagger: 0.18,
            ease: "power4.out"
          },
          "-=0.45"
        )
        .from(
          ".hero-description",
          {
            opacity: 0,
            y: 25,
            duration: 0.8,
            ease: "power3.out"
          },
          "-=0.55"
        )
        .to(
          ".stat-card",
          {
            opacity: 1,
            duration: 0.7,
            stagger: 0.18,
            ease: "power3.out"
          },
          "-=0.35"
        );

      document.querySelectorAll(".counter").forEach((counter) => {
        const target = Number(counter.dataset.target);

        const counterObject = {
          value: 0
        };

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
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1
        }
      });

      heroScrollTimeline
        .to(
          ".orb-main",
          {
            x: -180,
            y: 220,
            scale: 0.75,
            rotation: 120,
            ease: "none"
          },
          0
        )
        .to(
          ".orb-back",
          {
            x: 120,
            y: 180,
            scale: 1.3,
            rotation: -180,
            ease: "none"
          },
          0
        )
        .to(
          ".card-one",
          {
            x: 80,
            y: 160,
            rotation: 15,
            ease: "none"
          },
          0
        )
        .to(
          ".card-two",
          {
            x: -100,
            y: -120,
            rotation: -12,
            ease: "none"
          },
          0
        )
        .to(
          ".card-three",
          {
            x: 100,
            y: -100,
            rotation: 10,
            ease: "none"
          },
          0
        );

      gsap.to(".hero-content", {
        y: -100,
        opacity: 0.35,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1
        }
      });

      gsap.to(".hero-grid", {
        y: 150,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
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

      ScrollTrigger.refresh();
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-[#080808] text-white">
      
      {/* NAVBAR */}
      <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/40 backdrop-blur-xl">
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
          <a
            href="#home"
            className="text-xl font-black tracking-[-0.05em]"
          >
            ITZFIZZ<span className="text-[#a3ff12]">.</span>
          </a>

          <div className="hidden items-center gap-8 text-sm text-white/70 md:flex">
            <a
              href="#home"
              className="transition hover:text-white"
            >
              Home
            </a>

            <a
              href="#about"
              className="transition hover:text-white"
            >
              About
            </a>

            <a
              href="#process"
              className="transition hover:text-white"
            >
              Process
            </a>

            <a
              href="#contact"
              className="transition hover:text-white"
            >
              Contact
            </a>
          </div>

          <a
            href="#contact"
            className="rounded-full border border-white/20 px-5 py-2.5 text-sm font-medium transition hover:border-[#a3ff12] hover:text-[#a3ff12]"
          >
            Let's Talk
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section
        ref={heroRef}
        id="home"
        className="relative flex min-h-screen items-center overflow-hidden px-6 pt-20 lg:px-10"
      >
        {/* GRID */}
        <div className="hero-grid absolute inset-0 opacity-70" />

        {/* GLOW 01 */}
        <div className="hero-glow absolute left-[10%] top-[20%] h-72 w-72 rounded-full bg-[#a3ff12]/10" />

        {/* GLOW 02 */}
        <div className="hero-glow absolute bottom-[10%] right-[10%] h-96 w-96 rounded-full bg-blue-500/10" />

        <div className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-between">
          
          {/* HERO CONTENT */}
          <div className="hero-content w-full lg:w-[58%]">
            <p className="eyebrow mb-6 text-sm font-semibold uppercase tracking-[0.35em] text-[#a3ff12]">
              Digital Experiences • Technology • Innovation
            </p>

            <h1 className="font-black uppercase leading-[0.88] tracking-[-0.07em]">
              <span className="title-line block text-[clamp(3.5rem,8vw,8rem)]">
                W E L C O M E
              </span>

              <span className="title-line block text-[clamp(3.5rem,8vw,8rem)] text-[#a3ff12]">
                I T Z F I Z Z
              </span>
            </h1>

            <p className="hero-description mt-8 max-w-xl text-base leading-7 text-white/55 md:text-lg">
              We create digital experiences that combine creative thinking,
              modern technology and meaningful user experiences.
            </p>

            {/* STATS */}
            <div className="mt-12 flex flex-wrap gap-8 md:gap-12">
              
              <div className="stat-card">
                <div className="text-4xl font-bold">
                  <span className="counter" data-target="95">
                    0
                  </span>
                  <span className="text-[#a3ff12]">%</span>
                </div>

                <p className="mt-2 text-sm text-white/45">
                  Client Satisfaction
                </p>
              </div>

              <div className="stat-card">
                <div className="text-4xl font-bold">
                  <span className="counter" data-target="80">
                    0
                  </span>
                  <span className="text-[#a3ff12]">+</span>
                </div>

                <p className="mt-2 text-sm text-white/45">
                  Digital Projects
                </p>
              </div>

              <div className="stat-card">
                <div className="text-4xl font-bold">
                  <span className="counter" data-target="99">
                    0
                  </span>
                  <span className="text-[#a3ff12]">%</span>
                </div>

                <p className="mt-2 text-sm text-white/45">
                  Performance Focus
                </p>
              </div>
            </div>
          </div>

          {/* HERO VISUAL */}
          <div className="hero-visual absolute right-[-5%] top-1/2 hidden h-[430px] w-[430px] -translate-y-1/2 lg:block">
            
            {/* OUTER ORB */}
            <div className="orb-back absolute left-1/2 top-1/2 h-[390px] w-[390px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#a3ff12]/20" />

            {/* MAIN ORB */}
            <div className="orb-main absolute left-1/2 top-1/2 flex h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[radial-gradient(circle_at_35%_30%,#d8ff8b,#a3ff12_35%,#315000_75%,#101010)] shadow-[0_0_100px_rgba(163,255,18,0.2)]">
              
              <div className="flex h-44 w-44 items-center justify-center rounded-full border border-black/20 bg-black/20 backdrop-blur-md">
                <span className="text-5xl font-black tracking-[-0.08em] text-black">
                  ITZ
                </span>
              </div>
            </div>

            {/* FLOATING CARD 01 */}
            <div className="card-one glass-card absolute left-[-10px] top-[70px] rounded-xl px-5 py-4">
              <p className="text-[10px] font-semibold tracking-[0.3em] text-white/40">
                01
              </p>
              <p className="mt-1 text-sm font-semibold">
                DESIGN
              </p>
            </div>

            {/* FLOATING CARD 02 */}
            <div className="card-two glass-card absolute right-[-20px] top-[30px] rounded-xl px-5 py-4">
              <p className="text-[10px] font-semibold tracking-[0.3em] text-white/40">
                02
              </p>
              <p className="mt-1 text-sm font-semibold">
                DEVELOP
              </p>
            </div>

            {/* FLOATING CARD 03 */}
            <div className="card-three glass-card absolute bottom-[50px] right-[20px] rounded-xl px-5 py-4">
              <p className="text-[10px] font-semibold tracking-[0.3em] text-white/40">
                03
              </p>
              <p className="mt-1 text-sm font-semibold">
                DELIVER
              </p>
            </div>
          </div>
        </div>

        {/* SCROLL INDICATOR */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
          <p className="mb-3 text-[10px] uppercase tracking-[0.35em] text-white/30">
            Scroll
          </p>

          <div className="mx-auto h-10 w-px bg-gradient-to-b from-[#a3ff12] to-transparent" />
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="about-section border-t border-white/10 px-6 py-32 lg:px-10"
      >
        <div className="section-content mx-auto max-w-7xl">
          <div className="mb-10 flex items-center gap-4">
            <span className="text-sm text-[#a3ff12]">
              01
            </span>

            <div className="h-px w-12 bg-[#a3ff12]" />

            <span className="text-xs uppercase tracking-[0.3em] text-white/40">
              About
            </span>
          </div>

          <h2 className="max-w-5xl text-4xl font-bold leading-tight tracking-[-0.04em] md:text-6xl lg:text-7xl">
            Turning ideas into{" "}
            <span className="text-[#a3ff12]">
              digital experiences.
            </span>
          </h2>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-white/50">
            We focus on building modern digital solutions that are visually
            engaging, technically strong and designed around real user needs.
          </p>
        </div>
      </section>

      {/* PROCESS */}
      <section
        id="process"
        className="border-t border-white/10 px-6 py-32 lg:px-10"
      >
        <div className="mx-auto max-w-7xl">
          
          <div className="mb-16">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#a3ff12]">
              02 — Process
            </p>

            <h2 className="text-4xl font-bold tracking-[-0.04em] md:text-6xl">
              From idea to impact.
            </h2>
          </div>

          <div className="process-grid grid gap-5 md:grid-cols-3">
            
            <div className="process-card rounded-2xl border border-white/10 bg-white/[0.03] p-8">
              <span className="text-sm text-[#a3ff12]">
                01
              </span>

              <h3 className="mt-12 text-2xl font-bold">
                Discover
              </h3>

              <p className="mt-4 leading-7 text-white/45">
                Understand the problem, audience and goals before creating
                the solution.
              </p>
            </div>

            <div className="process-card rounded-2xl border border-white/10 bg-white/[0.03] p-8">
              <span className="text-sm text-[#a3ff12]">
                02
              </span>

              <h3 className="mt-12 text-2xl font-bold">
                Create
              </h3>

              <p className="mt-4 leading-7 text-white/45">
                Transform ideas into intuitive interfaces and powerful
                digital experiences.
              </p>
            </div>

            <div className="process-card rounded-2xl border border-white/10 bg-white/[0.03] p-8">
              <span className="text-sm text-[#a3ff12]">
                03
              </span>

              <h3 className="mt-12 text-2xl font-bold">
                Deliver
              </h3>

              <p className="mt-4 leading-7 text-white/45">
                Build, optimize and deliver reliable solutions that are ready
                for real users.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        id="contact"
        className="cta-section border-t border-white/10 px-6 py-32 lg:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <p className="mb-6 text-sm uppercase tracking-[0.3em] text-[#a3ff12]">
            Have an idea?
          </p>

          <h2 className="max-w-5xl text-5xl font-bold leading-tight tracking-[-0.05em] md:text-7xl lg:text-8xl">
            Let's build something{" "}
            <span className="text-[#a3ff12]">
              meaningful.
            </span>
          </h2>

          <a
            href="mailto:hello@itzfizz.com"
            className="mt-10 inline-flex rounded-full bg-[#a3ff12] px-7 py-4 font-semibold text-black transition hover:scale-105"
          >
            Start a conversation →
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-6 py-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-white/40 md:flex-row">
          <p>
            © 2026 ITZFIZZ. Internship Assignment.
          </p>

          <p>
            React • Tailwind CSS • GSAP
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
