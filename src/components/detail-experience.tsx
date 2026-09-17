"use client";
import {
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { services, steps, hours, faqs } from "@/content/site";
import { Arrow, Check, Star } from "./icons";
import { BookingForm } from "./booking-form";
gsap.registerPlugin(useGSAP, ScrollTrigger);
function Spark({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M32 0v64M0 32h64M9.4 9.4l45.2 45.2M9.4 54.6 54.6 9.4"
        stroke="currentColor"
        strokeWidth="6"
      />
    </svg>
  );
}

type BeforeAfterComparisonProps = {
  beforeSrc: string;
  afterSrc: string;
  afterAlt: string;
  label: string;
};

function BeforeAfterComparison({
  beforeSrc,
  afterSrc,
  afterAlt,
  label,
}: BeforeAfterComparisonProps) {
  const [position, setPosition] = useState(50);

  function setPositionFromPointer(event: ReactPointerEvent<HTMLDivElement>) {
    const bounds = event.currentTarget.getBoundingClientRect();
    const nextPosition = ((event.clientX - bounds.left) / bounds.width) * 100;
    setPosition(Math.min(100, Math.max(0, Math.round(nextPosition))));
  }

  return (
    <div
      className="before-after"
      onPointerDown={(event) => {
        event.currentTarget.setPointerCapture(event.pointerId);
        setPositionFromPointer(event);
      }}
      onPointerMove={(event) => {
        if (event.currentTarget.hasPointerCapture(event.pointerId)) {
          setPositionFromPointer(event);
        }
      }}
      onPointerUp={(event) => {
        if (event.currentTarget.hasPointerCapture(event.pointerId)) {
          event.currentTarget.releasePointerCapture(event.pointerId);
        }
      }}
      onPointerCancel={(event) => {
        if (event.currentTarget.hasPointerCapture(event.pointerId)) {
          event.currentTarget.releasePointerCapture(event.pointerId);
        }
      }}
    >
      <img
        src={afterSrc}
        alt={afterAlt}
        width="765"
        height="1024"
        loading="lazy"
      />
      <div
        className="before-after-before"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        aria-hidden="true"
      >
        <img
          src={beforeSrc}
          alt=""
          width="765"
          height="1024"
          loading="lazy"
        />
      </div>
      <input
        className="before-after-range"
        type="range"
        min="0"
        max="100"
        value={position}
        aria-label={`Reveal ${label} result: ${position}% after`}
        onChange={(event) => setPosition(Number(event.target.value))}
      />
      <div
        className="before-after-divider"
        style={{ left: `${position}%` }}
        aria-hidden="true"
      >
        <span />
      </div>
      <span className="before-after-label before" aria-hidden="true">
        Before
      </span>
      <span className="before-after-label after" aria-hidden="true">
        After
      </span>
    </div>
  );
}

const reviews = [
  {
    name: "Daniel H.",
    detail: "Local Guide · 18 reviews",
    text: "The interior came back feeling brand new. Every little detail was spot on.",
  },
  {
    name: "Sophie R.",
    detail: "Local Guide · 9 reviews",
    text: "Genuinely impressed with the finish. Friendly, thorough and properly cared for the car.",
  },
  {
    name: "Marcus T.",
    detail: "Local Guide · 26 reviews",
    text: "Paintwork looks incredible in the sun. You can tell there is real pride in the work.",
  },
  {
    name: "Amelia K.",
    detail: "Local Guide · 12 reviews",
    text: "Easy to arrange, great communication, and my car looked better than the day I collected it.",
  },
];

export function DetailExperience() {
  const root = useRef<HTMLElement>(null);
  const panel = useRef<HTMLDivElement>(null);
  const reviewSection = useRef<HTMLElement>(null);
  const reviewTrack = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [reviewsPaused, setReviewsPaused] = useState(false);
  const service = services[active];
  const comparison =
    service.id === "correction"
      ? {
          beforeSrc: "/images/paint-correction-before.png",
          afterSrc: "/images/paint-correction-after.png",
          afterAlt:
            "Red sports car paintwork after correction, with a clear glossy finish.",
          label: "Paint Correction",
        }
      : service.id === "ceramic"
        ? {
            beforeSrc: "/images/wash-before.png",
            afterSrc: "/images/wash-after.png",
            afterAlt: "Car exterior after deep cleansing, with a clean refreshed finish.",
            label: "Deep Cleansing",
          }
        : null;
  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".hero-title span", {
          yPercent: 100,
          rotate: 3,
          duration: 1.15,
          stagger: 0.13,
          ease: "expo.out",
        });
        gsap.from(".hero-image", {
          scale: 1.12,
          duration: 1.7,
          ease: "power3.out",
        });
        gsap.from(".hero-copy > *", {
          y: 18,
          opacity: 0,
          stagger: 0.12,
          duration: 0.8,
          delay: 0.35,
          ease: "power3.out",
        });
        gsap.to(".hero-image", {
          yPercent: 10,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });
        gsap.to(".hero-stamp", {
          rotation: 35,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });
        gsap.from(".manifesto-line", {
          x: -70,
          opacity: 0.25,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".manifesto",
            start: "top 85%",
            end: "center 65%",
            scrub: 1,
          },
        });
        gsap.from(".detail-photo", {
          clipPath: "inset(12% 8% 12% 8%)",
          duration: 1.2,
          ease: "expo.out",
          scrollTrigger: {
            trigger: ".detail-photo",
            start: "top 80%",
            once: true,
          },
        });
        gsap.from(".process-step", {
          y: 35,
          stagger: 0.13,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".process-grid",
            start: "top 85%",
            once: true,
          },
        });
        gsap.to(".cta-spark", {
          rotation: 180,
          ease: "none",
          scrollTrigger: {
            trigger: ".closing-call",
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      });
      return () => mm.revert();
    },
    { scope: root },
  );
  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const marquee = gsap.to(reviewTrack.current, {
        xPercent: -50,
        duration: 34,
        ease: "none",
        repeat: -1,
        paused: true,
      });
      const trigger = ScrollTrigger.create({
        trigger: reviewSection.current,
        start: "top bottom",
        end: "bottom top",
        onEnter: () => !reviewsPaused && marquee.play(),
        onEnterBack: () => !reviewsPaused && marquee.play(),
        onLeave: () => marquee.pause(),
        onLeaveBack: () => marquee.pause(),
      });

      return () => {
        trigger.kill();
        marquee.kill();
      };
    },
    { scope: root, dependencies: [reviewsPaused], revertOnUpdate: true },
  );
  useGSAP(
    () => {
      if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches)
        gsap.fromTo(
          panel.current,
          { opacity: 0.65, y: 12 },
          { opacity: 1, y: 0, duration: 0.45, ease: "power3.out" },
        );
    },
    { scope: root, dependencies: [active], revertOnUpdate: true },
  );
  function select(index: number) {
    if (index !== active) setActive(index);
  }
  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      gsap.to(".ribbon-track", {
        xPercent: -50,
        duration: 28,
        repeat: -1,
        ease: "none",
      });
    },
    { scope: root },
  );
  function plan(id: string) {
    window.dispatchEvent(new CustomEvent("select-service", { detail: id }));
  }
  return (
    <main id="main" ref={root}>
      <section className="hero" aria-labelledby="hero-title">
        <img
          className="hero-image"
          src="/images/hero.png"
          alt="Orange Porsche 911 GT3 RS parked between industrial buildings."
          width="1536"
          height="1024"
          fetchPriority="high"
        />
        <div className="hero-shade" />
        {/*<div className="hero-topline">
          <span>Manchester · By appointment</span>
        </div>*/}
        <div className="hero-main">
          <h1 id="hero-title" className="hero-title">
            <span>NOT JUST</span>
            <span>A CLEAN.</span>
            <span className="hero-outline">A FEELING.</span>
          </h1>
          <div className="hero-copy">
            <p>
              That first-drive feeling.
              <br />
              Let’s bring it back.
            </p>
            <p className="hero-body">
              Interior care, paint enhancement & protection. A personal approach
              to every vehicle.
            </p>
            <a className="button light" href="#services">
              Find your treatment
              <Arrow />
            </a>
          </div>
        </div>
        <div className="hero-stamp" aria-hidden="true">
          <Spark />
          <span>
            ALL IN THE
            <br />
            DETAILS
          </span>
        </div>
        <div className="hero-bottom">
          <span>
            For the daily drive.
            <br />
            And the pride of your garage.
          </span>
          <a href="#services">
            Take a closer look
            <span className="down-circle">
              <Arrow />
            </span>
          </a>
          <span className="hero-coordinate">
            Manchester / Salford / Trafford
          </span>
        </div>
      </section>
      <div
        className="ribbon"
        role="group"
        aria-label="Clean. Refine. Protect. Repeat."
      >
        <div className="ribbon-track" aria-hidden="true">
          {Array.from({ length: 4 }, (_, i) => (
            <span key={i}>
              CLEAN. <Spark /> REFINE. <Spark /> PROTECT. <Spark /> REPEAT.{" "}
              <Spark />
            </span>
          ))}
        </div>
      </div>
      <section className="manifesto container">
        <div className="manifesto-heading">
          <h2>
            <span className="manifesto-line">Your car has character.</span>
            <span className="manifesto-line">
              We bring it <em>out.</em>
            </span>
          </h2>
          <Spark />
        </div>
        <div className="manifesto-bottom">
          <span className="small-label">
            A LITTLE OBSESSIVE.
            <br />A LOT OF DETAIL.
          </span>
          <p>
            From the cabin you live in to the paintwork you look back at. Good
            car care is about the little things — and how they all come
            together.
          </p>
          <a className="text-link" href="#how-it-works">
            Meet the process
            <Arrow />
          </a>
        </div>
      </section>
      <section
        className="services-section"
        id="services"
        aria-labelledby="services-title"
      >
        <div className="container">
          <div className="section-heading">
            <h2 id="services-title">
              Pick your
              <br />
              <em>fresh start.</em>
            </h2>
            <p>
              A refresh, a little refinement, or a full reset.
              <br />
              There’s a treatment for that.
            </p>
          </div>
          <div
            className="service-tabs"
            role="tablist"
            aria-label="Detailing treatments"
          >
            {services.map((item, i) => (
              <button
                role="tab"
                id={`tab-${item.id}`}
                aria-controls="service-panel"
                aria-selected={i === active}
                tabIndex={i === active ? 0 : -1}
                key={item.id}
                onClick={() => select(i)}
                onKeyDown={(e) => {
                  let next = i;
                  if (e.key === "ArrowRight") next = (i + 1) % services.length;
                  else if (e.key === "ArrowLeft")
                    next = (i + services.length - 1) % services.length;
                  else if (e.key === "Home") next = 0;
                  else if (e.key === "End") next = services.length - 1;
                  else return;
                  e.preventDefault();
                  select(next);
                  document.getElementById(`tab-${services[next].id}`)?.focus();
                }}
              >
                {item.name}
                <Arrow />
              </button>
            ))}
          </div>
          <div
            className="service-panel"
            id="service-panel"
            role="tabpanel"
            aria-labelledby={`tab-${service.id}`}
            tabIndex={0}
            ref={panel}
          >
            <div className="service-visual">
              {comparison ? (
                <BeforeAfterComparison key={service.id} {...comparison} />
              ) : (
                <img
                  src={
                    service.image === "exterior.png"
                      ? "/images/exterior.png"
                      : `/photography/${service.image}.webp`
                  }
                  srcSet={
                    service.image === "exterior.png"
                      ? undefined
                      : `/photography/${service.image}-768.webp 768w, /photography/${service.image}.webp 1920w`
                  }
                  sizes="(max-width: 600px) 100vw, 50vw"
                  width="1000"
                  height="800"
                  alt={service.alt}
                  loading="lazy"
                />
              )}
              <span className="service-photo-label">
                {service.name}
                <Spark />
              </span>
            </div>
            <div className="service-info">
              <h3>
                {service.headline.split("\n").map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </h3>
              <p>{service.benefit}</p>
              <div className="service-price">
                <span>
                  From <strong>£{service.price}</strong>
                </span>
                <span>
                  {service.duration}
                  <br />
                  <small>depending on condition</small>
                </span>
              </div>
              <ul>
                {service.includes.map((item) => (
                  <li key={item}>
                    <Check />
                    {item}
                  </li>
                ))}
              </ul>
              {service.note && <p className="caption">{service.note}</p>}
              <a
                className="button"
                href="#booking"
                onClick={() => plan(service.id)}
              >
                Choose {service.name}
                <Arrow />
              </a>
            </div>
          </div>
          <p className="service-note">
            A starting point, tailored to your car. Final pricing and timing
            depend on vehicle size, condition and agreed scope.
          </p>
        </div>
      </section>
      <section
        className="detail-section container"
        id="the-details"
        aria-labelledby="detail-title"
      >
        <div className="detail-copy">
          <h2 id="detail-title">
            The little things.
            <br />
            The <em>big difference.</em>
          </h2>
          <p>
            Clean glass. A fresh cabin. A finish worth a second look. We’re here
            for every part of that feeling.
          </p>
          <div className="detail-tags">
            <span>Interior care</span>
            <span>Paint refinement</span>
            <span>Finishing protection</span>
          </div>
          <a className="text-link" href="#booking">
            Let’s talk about your car
            <Arrow />
          </a>
        </div>
        <figure className="detail-photo">
          <img
            src="/photography/craft.webp"
            srcSet="/photography/craft-768.webp 768w, /photography/craft.webp 1920w"
            sizes="(max-width: 600px) 100vw, 50vw"
            width="1200"
            height="800"
            loading="lazy"
            alt="Close-up of a detailer wiping a green sports car with a microfibre cloth."
          />
          <figcaption>THE DETAILS MAKE THE DRIVE.</figcaption>
        </figure>
        <div className="detail-note">
          <Spark />
          <p>
            Care.
            <br />
            Precision.
            <br />
            <em>A little obsession.</em>
          </p>
        </div>
      </section>
      <section
        className="process-section"
        id="how-it-works"
        aria-labelledby="process-title"
      >
        <div className="container">
          <div className="section-heading">
            <h2 id="process-title">
              Good care.
              <br />
              <em>No guesswork.</em>
            </h2>
            <p>
              From the first conversation
              <br />
              to the final once-over.
            </p>
          </div>
          <ol className="process-grid">
            {steps.map(([title, body], i) => (
              <li className="process-step" key={title}>
                <div className="process-number">
                  {String(i + 1).padStart(2, "0")}
                  <Arrow />
                </div>
                <h3>{title}</h3>
                <p>{body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section
        className="visit-section container"
        id="contact"
        aria-labelledby="contact-title"
      >
        <div className="visit-image">
          <img
            src="/photography/garage.webp"
            srcSet="/photography/garage-768.webp 768w, /photography/garage.webp 1920w"
            sizes="(max-width: 600px) 100vw, 50vw"
            alt="Black Ford Mustang beneath a tunnel’s architectural lighting."
            width="1100"
            height="1000"
            loading="lazy"
          />
          <span>GOOD CARS. GOOD COMPANY.</span>
        </div>
        <div className="visit-info">
          <h2 id="contact-title">
            Manchester.
            <br />
            <em>Through & through.</em>
          </h2>
          <p>
            Studio detailing for Manchester, Salford and Trafford. Visits by
            appointment, so your car gets the time it deserves.
          </p>
          <dl className="hours">
            {hours.map(([day, time]) => (
              <div key={day}>
                <dt>{day}</dt>
                <dd>{time}</dd>
              </div>
            ))}
          </dl>
          <a className="text-link" href="#booking">
            Plan a visit
            <Arrow />
          </a>
        </div>
      </section>
      <section
        className="reviews-section"
        ref={reviewSection}
        aria-labelledby="reviews-title"
      >
        <div className="container reviews-heading">
          <h2 id="reviews-title">What they say on Google Maps</h2>
          <button
            className="reviews-motion-control"
            type="button"
            aria-pressed={reviewsPaused}
            onClick={() => setReviewsPaused((paused) => !paused)}
          >
            {reviewsPaused ? "Play review motion" : "Pause review motion"}
          </button>
        </div>
        <div className="reviews-marquee">
          <div className="reviews-track" ref={reviewTrack}>
            {[false, true].map((isDuplicate) => (
              <div
                className="reviews-set"
                aria-hidden={isDuplicate}
                key={String(isDuplicate)}
              >
                {reviews.map((review) => (
                  <article
                    className="review-card"
                    key={`${isDuplicate}-${review.name}`}
                  >
                    <div className="review-card-top">
                      <div>
                        <h3>{review.name}</h3>
                        <p>{review.detail}</p>
                      </div>
                      <span
                        className="review-google-mark"
                        aria-label="Google Maps"
                      >
                        G
                      </span>
                    </div>
                    <div className="review-stars" aria-label="5 out of 5 stars">
                      {Array.from({ length: 5 }, (_, index) => (
                        <Star key={index} />
                      ))}
                    </div>
                    <p className="review-quote">“{review.text}”</p>
                  </article>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="faq-section container" aria-labelledby="faq-title">
        <h2 id="faq-title">
          A few good
          <br />
          <em>questions.</em>
        </h2>
        <div className="faq-list">
          {faqs.map(([question, answer]) => (
            <details key={question}>
              <summary>
                {question}
                <span className="faq-icon" aria-hidden="true" />
              </summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>
      <section className="closing-call">
        <div className="container">
          <h2>
            FALL IN LOVE
            <br />
            WITH YOUR CAR.
            <br />
            <span>AGAIN.</span>
          </h2>
          <Spark className="cta-spark" />
          <a className="round-cta" href="#booking">
            <Arrow />
            <span>
              Let’s get
              <br />
              into it.
            </span>
          </a>
        </div>
      </section>
      <section
        className="booking-section container"
        id="booking"
        aria-labelledby="booking-title"
      >
        <div className="booking-intro">
          <h2 id="booking-title">
            Your car.
            <br />
            <em>Your kind of care.</em>
          </h2>
          <p>
            Tell us what you’re driving and what you have in mind. Start with a
            detail brief you can save and take with you.
          </p>
          <span className="booking-side-note">
            THE NEXT GOOD DRIVE
            <br />
            STARTS HERE.
          </span>
        </div>
        <BookingForm />
      </section>
    </main>
  );
}
