import React, { useMemo, useState } from 'react';
import { SectionTitle } from '../components/SectionTitle';
import { Hero } from '../components/Hero';
import { KURUKSHETRA_DAYS } from '../data/kurukshetra';

// Accent per Kaurava commander phase
const COMMANDER_ACCENT: Record<string, string> = {
  Bhishma:     '#F5D061',
  Drona:       '#FF8C42',
  Karna:       '#B91C1C',
  Shalya:      '#0EA5E9',
  Ashwatthama: '#E879F9',
};

export const KurukshetraPage: React.FC = () => {
  const [active, setActive] = useState<number>(1);
  const day = useMemo(
    () => KURUKSHETRA_DAYS.find((d) => d.day === active) ?? KURUKSHETRA_DAYS[0],
    [active],
  );
  const accent = COMMANDER_ACCENT[day.commander] ?? '#FFD700';

  return (
    <>
      <Hero
        sanskrit="कुरुक्षेत्रम् धर्मक्षेत्रम्"
        title="The Eighteen Days"
        subtitle="Dharmakṣetra Kurukṣetra — the field of dharma, the field of the Kurus."
        tagline="Eighteen days. Five generals on the Kaurava side. Forty crore warriors. One winner — and not a happy one."
        glyph="⚔️"
      />

      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Day picker rail */}
        <SectionTitle
          sanskrit="अष्टादश दिनानि"
          title="Choose a Day of the War"
          align="center"
        />
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {KURUKSHETRA_DAYS.map((d) => {
            const a = COMMANDER_ACCENT[d.commander] ?? '#FFD700';
            const isActive = d.day === active;
            return (
              <button
                key={d.day}
                type="button"
                onClick={() => setActive(d.day)}
                className="rounded-full px-3 py-1.5 text-xs font-display border transition"
                style={{
                  background: isActive ? `${a}30` : 'transparent',
                  borderColor: isActive ? a : `${a}55`,
                  color: isActive ? '#fdf4d6' : `${a}cc`,
                  boxShadow: isActive ? `0 0 14px ${a}88` : 'none',
                }}
                aria-pressed={isActive}
              >
                Day {String(d.day).padStart(2, '0')}
              </button>
            );
          })}
        </div>

        {/* Active day panel */}
        <section
          className="glass p-6 sm:p-8 mb-12 relative overflow-hidden"
          style={{ borderColor: `${accent}55` }}
        >
          <div
            aria-hidden
            className="absolute -right-20 -top-20 w-80 h-80 rounded-full opacity-25"
            style={{ background: `radial-gradient(circle, ${accent}, transparent 70%)` }}
          />
          <div className="flex items-baseline justify-between gap-4 flex-wrap mb-2">
            <p className="text-[10px] uppercase tracking-[0.3em] text-parchment/55">
              Day {String(day.day).padStart(2, '0')} of the Mahābhārata war
            </p>
            <span
              className="pill text-[10px]"
              style={{ borderColor: `${accent}80`, color: accent }}
            >
              Kaurava Senāpati · {day.commander}
            </span>
          </div>
          <h2
            className="font-display text-3xl sm:text-4xl mb-4"
            style={{ color: accent }}
          >
            Under the Banner of {day.commander}
          </h2>
          <p className="text-parchment/90 leading-relaxed mb-5">{day.highlight}</p>

          {day.fallen.length > 0 && (
            <>
              <h4 className="text-parchment/60 uppercase tracking-[0.3em] text-xs mb-2">
                Fallen this day
              </h4>
              <ul className="flex flex-wrap gap-2">
                {day.fallen.map((name, i) => (
                  <li
                    key={i}
                    className="pill text-[11px]"
                    style={{ borderColor: `${accent}55`, color: 'rgba(245,232,201,.85)' }}
                  >
                    {name}
                  </li>
                ))}
              </ul>
            </>
          )}
        </section>

        {/* Compact list of all 18 */}
        <SectionTitle
          sanskrit="युद्धपञ्जिका"
          title="The Full War Chronicle"
          subtitle="Each day, each commander, each cost."
          align="center"
        />
        <ol className="relative border-l-2 border-gold/25 ml-3 sm:ml-6 space-y-5">
          {KURUKSHETRA_DAYS.map((d) => {
            const a = COMMANDER_ACCENT[d.commander] ?? '#FFD700';
            return (
              <li key={d.day} className="pl-6 sm:pl-8 relative">
                <span
                  aria-hidden
                  className="absolute -left-[10px] sm:-left-[14px] top-2 w-5 h-5 rounded-full border-2 border-ink"
                  style={{
                    background: `radial-gradient(circle, ${a}, ${a}88)`,
                    boxShadow: `0 0 12px ${a}88`,
                  }}
                />
                <button
                  type="button"
                  onClick={() => setActive(d.day)}
                  className="glass glass-hover w-full text-left p-4"
                  style={{ borderColor: `${a}30` }}
                >
                  <div className="flex items-baseline justify-between gap-3 flex-wrap">
                    <p className="font-display text-base" style={{ color: a }}>
                      Day {String(d.day).padStart(2, '0')} · {d.commander}
                    </p>
                    <p className="text-[10px] uppercase tracking-[0.3em] text-parchment/45">
                      {d.fallen.length} fallen
                    </p>
                  </div>
                  <p className="text-parchment/75 text-sm mt-1 leading-relaxed line-clamp-2">
                    {d.highlight}
                  </p>
                </button>
              </li>
            );
          })}
        </ol>

        <p className="text-center text-parchment/55 text-xs mt-10 italic">
          At sunset on Day 18, only ten men remain alive: the five Pāṇḍavas,
          Kṛṣṇa, Sātyaki, Yuyutsu, Aśvatthāman, Kṛpa, and Kṛtavarmā.
        </p>
      </main>
    </>
  );
};

export default KurukshetraPage;
