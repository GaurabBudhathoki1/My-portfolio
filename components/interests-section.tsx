"use client";

import { useState } from "react";
import { RetroCdPlayer } from "@/components/retro-cd-player";

const interests = {
  music: [
    { title: "Kendrick Lamar", note: "Storytelling, perspective, and fearless lyricism." },
    { title: "Travis Scott", note: "Atmospheric production and immersive sound." },
    { title: "Playboi Carti", note: "Experimental energy and distinctive style." },
  ],
  inspiration: [
    { title: "Steve Jobs", note: "Simplicity, focus, and product craftsmanship." },
    { title: "Warren Buffett", note: "Long-term thinking and disciplined decisions." },
    { title: "Leonardo da Vinci", note: "Curiosity across art, science, and invention." },
  ],
} as const;

type InterestCategory = keyof typeof interests;

export function InterestsSection() {
  const [category, setCategory] = useState<InterestCategory>("music");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedInterest = interests[category][selectedIndex];

  const selectCategory = (nextCategory: InterestCategory) => {
    setCategory(nextCategory);
    setSelectedIndex(0);
  };

  return (
    <section id="interests" className="screen-section border-b border-[#121212]/20">
      <div className="interests-paper">
        <div className="interest-sticker-layer" aria-hidden="true">
          <svg className="interest-sticker interest-sticker-burst" viewBox="0 0 100 100">
            <path d="M50 2 61 19 81 10 79 31 99 39 83 53 94 72 72 73 67 96 49 82 32 98 27 76 5 72 19 54 2 39 24 31 23 10 42 20Z" />
            <text x="50" y="58" textAnchor="middle">WOW</text>
          </svg>
          <svg className="interest-sticker interest-sticker-bolt" viewBox="0 0 80 110">
            <path d="M45 4 12 60h24l-3 46 36-63H45Z" />
          </svg>
          <svg className="interest-sticker interest-sticker-star" viewBox="0 0 100 100">
            <path d="m50 4 11 29 31-1-24 20 9 30-27-17-27 17 9-30L8 32l31 1Z" />
          </svg>
          <svg className="interest-sticker interest-sticker-web" viewBox="0 0 120 120">
            <path d="M4 4 116 116M4 4 4 116M4 4 116 4M4 4 116 48M4 4 48 116M4 4 80 116M4 4 116 80M4 4 116 24M4 4 24 116" />
            <path d="m22 22 8 2 2 8m10-10 13 5 5 13m10-10 18 7 7 18m8-10 12 5 5 12M22 42l5 13 13 5m-10 10 7 18 18 7m-10 8 5 12 12 5" />
          </svg>
          <svg className="interest-sticker interest-sticker-note" viewBox="0 0 100 100">
            <path d="M60 12v53a14 14 0 1 1-8-13V29l35-8v36a14 14 0 1 1-8-13V12Z" />
          </svg>
          <svg className="interest-sticker interest-sticker-pop" viewBox="0 0 120 90">
            <path d="m9 9 101 4-9 53-47 2-24 17 5-18L5 61Z" />
            <text x="59" y="49" textAnchor="middle">BAM!</text>
          </svg>
        </div>
        <div className="interests-heading-row">
          <div>
            <div className="about-label">OUTSIDE THE CODE / 02</div>
            <h2 className="interests-title">INTERESTS</h2>
          </div>
          <span className="interests-note">A few things I come back to</span>
        </div>

        <div className="interests-tabs" role="tablist" aria-label="Interest categories">
          <button
            type="button"
            role="tab"
            id="interest-tab-music"
            aria-controls="interest-panel"
            aria-selected={category === "music"}
            className="interests-tab"
            onClick={() => selectCategory("music")}
          >
            Music
          </button>
          <button
            type="button"
            role="tab"
            id="interest-tab-inspiration"
            aria-controls="interest-panel"
            aria-selected={category === "inspiration"}
            className="interests-tab"
            onClick={() => selectCategory("inspiration")}
          >
            Inspirations
          </button>
        </div>

        <div className="interests-content">
          <div
            id="interest-panel"
            className="interests-list"
            role="tabpanel"
            aria-labelledby={`interest-tab-${category}`}
          >
            {interests[category].map((interest, index) => (
              <button
                key={interest.title}
                type="button"
                className={`interest-item${selectedIndex === index ? " is-selected" : ""}`}
                aria-pressed={selectedIndex === index}
                onClick={() => setSelectedIndex(index)}
              >
                <span className="interest-index">0{index + 1}</span>
                <span className="interest-item-copy">
                  <span className="interest-item-title">{interest.title}</span>
                  <span className="interest-item-note">{interest.note}</span>
                </span>
                <span className="interest-arrow" aria-hidden="true">↗</span>
              </button>
            ))}
          </div>

          <RetroCdPlayer
            category={category}
            title={selectedInterest.title}
            note={selectedInterest.note}
          />
        </div>
      </div>
    </section>
  );
}
