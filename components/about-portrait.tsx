import Image from "next/image";

export function AboutPortrait() {
  return (
    <figure className="about-portrait">
      <div
        className="about-photo-frame"
        tabIndex={0}
        role="img"
        aria-label="Hand-drawn portrait; hover or focus to see a childhood-style portrait"
      >
        <span className="about-photo-clip" aria-hidden="true" />
        <Image
          className="about-portrait-art about-portrait-adult"
          src="/about-portrait.png"
          alt="Sketch-style portrait of Gaurab"
          fill
          sizes="(max-width: 767px) 72vw, 336px"
          priority
        />
        <Image
          className="about-portrait-art about-portrait-child"
          src="/about-childhood.png"
          alt=""
          fill
          sizes="(max-width: 767px) 72vw, 336px"
        />
        <span className="about-photo-caption" aria-hidden="true">HOVER TO LOOK BACK</span>
      </div>
      <figcaption className="about-portrait-credit">A little then, a little now.</figcaption>
    </figure>
  );
}
