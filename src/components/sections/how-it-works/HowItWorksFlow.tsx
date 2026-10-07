"use client";

import { useEffect, useRef, useState, useSyncExternalStore, type CSSProperties, type ReactNode } from "react";
import { Check, CheckCircle2, House, Pause, Play, PartyPopper, RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";

/*
 * Web port of the Splitry app's "How it works" sample flow
 * (Splitry/lib/features/sample_preview/widgets/how_it_works_flow.dart): same steps, copy,
 * sample group, timings and scene animations, so the site matches the app 1:1.
 */

const STEP_DWELL_MS = 3600;

export const HOW_IT_WORKS_STEPS = [
  { label: "Add", title: "Add an expense", body: "Someone pays for the group. Add it in a few taps." },
  { label: "Split", title: "Splitry splits it", body: "Each person's share is worked out for you. No math, no spreadsheet." },
  { label: "Track", title: "See who owes whom", body: "Balances stay up to date as everyone adds expenses." },
  { label: "Settle", title: "Settle up in fewer payments", body: "Splitry suggests the fewest payments. Pay your usual way, then record it." },
];

const GROUP = "Beach weekend";
const MEMBERS = [
  { name: "You", tint: "var(--color-app-teal)" },
  { name: "Alex", tint: "var(--color-primary-green)" },
  { name: "Sam", tint: "var(--color-app-amber)" },
  { name: "Priya", tint: "var(--color-app-amber)" },
];
const BALANCES = [295.7, -97.9, -142.3, -55.5];
const TRANSFERS = [
  { from: 2, to: 0, amount: 142.3 },
  { from: 1, to: 0, amount: 97.9 },
  { from: 3, to: 0, amount: 55.5 },
];

const money = (n: number) => `$ ${Math.abs(n).toFixed(2)}`;
const delay = (ms: number) => ({ animationDelay: `${ms}ms` }) as CSSProperties;

// ---------- reduced motion (SSR-safe) ----------
const reduceQuery = "(prefers-reduced-motion: reduce)";
const subscribeReduce = (cb: () => void) => {
  const mq = window.matchMedia(reduceQuery);
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
};
const useReducedMotionPref = () =>
  useSyncExternalStore(subscribeReduce, () => window.matchMedia(reduceQuery).matches, () => false);

// ---------- small pieces ----------
function Avatar({ index, size = 28 }: { index: number; size?: number }) {
  const { name, tint } = MEMBERS[index];
  return (
    <span
      aria-hidden="true"
      className="flex shrink-0 items-center justify-center rounded-full border font-bold"
      style={{
        width: size,
        height: size,
        fontSize: size * 0.4,
        color: tint,
        backgroundColor: `color-mix(in srgb, ${tint} 14%, white)`,
        borderColor: `color-mix(in srgb, ${tint} 25%, white)`,
      }}
    >
      {name[0]}
    </span>
  );
}

function Pill({ icon, children, style }: { icon: ReactNode; children: ReactNode; style?: CSSProperties }) {
  return (
    <span
      className="mx-auto flex w-fit items-center gap-1.5 rounded-full bg-primary-green/10 px-3 py-1.5 text-xs font-semibold text-primary-green-deeper [animation:hw-pop_420ms_cubic-bezier(0.34,1.56,0.64,1)_both]"
      style={style}
    >
      {icon}
      {children}
    </span>
  );
}

const rise = "[animation:rise-in_500ms_cubic-bezier(0.16,1,0.3,1)_both]";

// ---------- scenes ----------
function AddScene() {
  return (
    <div className="flex h-full flex-col justify-center gap-4">
      <div className={cn("flex items-center gap-3 rounded-2xl border border-app-card-border bg-white p-3 shadow-card", rise)}>
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl" style={{ backgroundColor: "color-mix(in srgb, var(--color-app-teal) 14%, white)", color: "var(--color-app-teal)" }}>
          <House className="h-5 w-5" aria-hidden="true" />
        </span>
        <span className="min-w-0 flex-1">
          <span className="block truncate text-[15px] font-semibold text-primary-dark">Beach house</span>
          <span className="block text-xs text-body">Today · paid by You</span>
        </span>
        <span className="text-[15px] font-bold text-primary-dark">{money(480)}</span>
      </div>
      <Pill icon={<CheckCircle2 className="h-4 w-4 text-primary-green" aria-hidden="true" />} style={delay(650)}>
        Added to {GROUP}
      </Pill>
    </div>
  );
}

function SplitScene() {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <span className="rounded-full bg-primary-green px-4 py-1.5 text-sm font-bold text-white [animation:hw-pop_420ms_cubic-bezier(0.34,1.56,0.64,1)_both]">
        {money(480)}
      </span>
      {/* Branches: short trunk, then one line per member (drawn like the app's painter) */}
      <svg viewBox="0 0 400 30" preserveAspectRatio="none" className="h-[30px] w-full" aria-hidden="true">
        <path
          d="M200 0 V15 M50 15 H350 M50 15 V30 M150 15 V30 M250 15 V30 M350 15 V30"
          fill="none"
          stroke="var(--color-primary-green)"
          strokeOpacity="0.45"
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
          pathLength={1}
          strokeDasharray="1"
          className="[animation:hw-draw_450ms_ease-out_250ms_both]"
        />
      </svg>
      <div className="grid w-full grid-cols-4">
        {MEMBERS.map((m, i) => (
          <div key={m.name} className={cn("flex flex-col items-center gap-1", rise)} style={delay(450 + i * 90)}>
            <Avatar index={i} size={34} />
            <span className="text-[11px] font-semibold text-primary-dark">{m.name}</span>
            <span className="text-xs font-bold text-primary-green-deeper">{money(120)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function TrackScene() {
  const max = Math.max(...BALANCES.map(Math.abs));
  return (
    <div className="flex h-full flex-col justify-center gap-3">
      {MEMBERS.map((m, i) => {
        const value = BALANCES[i];
        const positive = value > 0;
        return (
          <div key={m.name} className={cn("flex items-center gap-2.5", rise)} style={delay(i * 120)}>
            <Avatar index={i} size={26} />
            <span className="w-11 text-[13px] font-semibold text-primary-dark">{m.name}</span>
            <span className="h-2 flex-1 overflow-hidden rounded-full bg-app-muted">
              <span
                className="block h-full origin-left rounded-full [animation:hw-grow_700ms_cubic-bezier(0.16,1,0.3,1)_both]"
                style={{
                  width: `${(Math.abs(value) / max) * 100}%`,
                  backgroundColor: positive ? "var(--color-primary-green)" : "var(--color-app-owe)",
                  ...delay(300 + i * 150),
                }}
              />
            </span>
            <span className={cn("w-[4.6rem] text-right text-[13px] font-bold", positive ? "text-primary-green-deeper" : "text-app-owe-text")}>
              {positive ? "+" : "-"}
              {money(value)}
            </span>
          </div>
        );
      })}
    </div>
  );
}

function SettleScene() {
  return (
    <div className="flex h-full flex-col justify-center gap-2.5">
      {TRANSFERS.map((t, i) => (
        <div key={i} className="flex items-center gap-2">
          <Avatar index={t.from} />
          <span className="relative h-7 flex-1 overflow-hidden">
            <span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 bg-app-divider" />
            <span
              className="absolute inset-0 [animation:hw-slide_600ms_ease-in-out_both]"
              style={delay(200 + i * 700)}
            >
              <span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 bg-primary-green/50" />
              <span className="absolute right-0 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-primary-green" />
            </span>
          </span>
          <Avatar index={t.to} />
          <span className="w-[4.4rem] text-right text-[13px] font-bold text-primary-dark">{money(t.amount)}</span>
          <CheckCircle2
            className="h-5 w-5 shrink-0 fill-primary-green text-white [animation:hw-pop_420ms_cubic-bezier(0.34,1.56,0.64,1)_both]"
            style={delay(800 + i * 700)}
            aria-hidden="true"
          />
        </div>
      ))}
      <Pill icon={<PartyPopper className="h-4 w-4 text-primary-green" aria-hidden="true" />} style={delay(2400)}>
        Everyone is settled up
      </Pill>
    </div>
  );
}

const SCENES = [AddScene, SplitScene, TrackScene, SettleScene];

// ---------- flow ----------
export function HowItWorksFlow({ className }: { className?: string }) {
  const reduced = useReducedMotionPref();
  const rootRef = useRef<HTMLDivElement>(null);
  const swipeX = useRef<number | null>(null);
  const [step, setStep] = useState(0);
  const [run, setRun] = useState(0);
  const [started, setStarted] = useState(false);
  const [playing, setPlaying] = useState(true);
  const [finished, setFinished] = useState(false);
  const [userDriven, setUserDriven] = useState(false);
  const last = HOW_IT_WORKS_STEPS.length - 1;

  // Like the app, the flow starts once it's shown (here: scrolled into view).
  useEffect(() => {
    const node = rootRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const running = started && playing && !finished && !reduced;
  const playState = { animationPlayState: running ? "running" : "paused" } as CSSProperties;

  const onDwellEnd = () => {
    if (step < last) setStep(step + 1);
    else {
      setPlaying(false);
      setFinished(true);
    }
  };

  const goTo = (target: number) => {
    setStep(Math.max(0, Math.min(last, target)));
    setRun((r) => r + 1);
    setFinished(false);
    setPlaying(!reduced);
    setUserDriven(true);
  };

  const togglePlay = () => {
    if (finished) goTo(0);
    else setPlaying((p) => !p);
  };

  const Scene = SCENES[step];
  const current = HOW_IT_WORKS_STEPS[step];
  const dwellKey = `${run}-${step}`;

  return (
    <div ref={rootRef} className={cn("grid items-center gap-10 lg:grid-cols-[1fr_minmax(0,28rem)] lg:gap-16", className)}>
      {/* Desktop: the steps as a selectable list, synced with the card */}
      <ol className="hidden flex-col gap-3 lg:flex">
        {HOW_IT_WORKS_STEPS.map((s, i) => {
          const active = i === step;
          return (
            <li key={s.label}>
              <button
                type="button"
                onClick={() => goTo(i)}
                aria-current={active ? "step" : undefined}
                className={cn(
                  "flex w-full items-start gap-4 rounded-2xl border p-5 text-left transition-all duration-300",
                  active ? "border-primary-green/30 bg-white shadow-lift" : "border-transparent hover:bg-white/70"
                )}
              >
                <span
                  className={cn(
                    "flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold transition-colors",
                    active ? "bg-primary-green text-white" : i < step || finished ? "bg-primary-green/10 text-primary-green-deeper" : "bg-app-muted text-muted"
                  )}
                >
                  {i < step || (finished && active) ? <Check className="h-4 w-4" aria-hidden="true" /> : i + 1}
                </span>
                <span>
                  <span className="block text-lg font-semibold text-primary-dark">{s.title}</span>
                  <span className="mt-1 block text-sm leading-relaxed text-body">{s.body}</span>
                </span>
              </button>
            </li>
          );
        })}
      </ol>

      {/* The in-app "How it works" card */}
      <div role="group" aria-label="How it works" className="mx-auto w-full max-w-md rounded-3xl border border-app-card-border bg-white p-5 shadow-lift sm:p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-[11px] font-bold uppercase tracking-[0.08em] text-primary-green-deeper">How it works</h3>
          {!reduced && (
            <button
              type="button"
              onClick={togglePlay}
              aria-label={finished ? "Replay" : running || (!started && playing) ? "Pause" : "Play"}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-green/10 text-primary-green-deeper transition-transform active:scale-95"
            >
              {finished ? <RotateCcw className="h-[18px] w-[18px]" /> : playing ? <Pause className="h-[18px] w-[18px] fill-current" /> : <Play className="h-[18px] w-[18px] fill-current" />}
            </button>
          )}
        </div>

        {/* Stepper */}
        <div className="mt-4 flex items-start">
          {HOW_IT_WORKS_STEPS.map((s, i) => {
            const active = i === step;
            const done = i < step || (finished && active);
            return (
              <div key={s.label} className={cn("flex items-start", i > 0 && "flex-1")}>
                {i > 0 && (
                  <span className="mx-1.5 mt-[13.5px] h-[3px] flex-1 overflow-hidden rounded-full bg-app-divider" aria-hidden="true">
                    {i - 1 < step || finished ? (
                      <span className="block h-full w-full bg-primary-green" />
                    ) : i - 1 === step ? (
                      <span
                        key={dwellKey}
                        className="block h-full w-full origin-left bg-primary-green"
                        style={{ animation: `hw-dwell ${STEP_DWELL_MS}ms linear both`, ...playState }}
                      />
                    ) : null}
                  </span>
                )}
                <button
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`Step ${i + 1} of ${HOW_IT_WORKS_STEPS.length}: ${s.title}`}
                  aria-current={active ? "step" : undefined}
                  className="flex w-12 shrink-0 flex-col items-center gap-1.5"
                >
                  <span
                    className={cn(
                      "flex h-[30px] w-[30px] items-center justify-center rounded-full text-[13px] font-bold transition-all duration-300",
                      done
                        ? "bg-primary-green/10 text-primary-green-deeper"
                        : active
                          ? "bg-primary-green text-white shadow-[0_0_0_4px_rgba(3,166,113,0.18)]"
                          : "bg-app-muted text-muted"
                    )}
                  >
                    {done ? <Check className="h-4 w-4" strokeWidth={2.75} aria-hidden="true" /> : i + 1}
                  </span>
                  <span className={cn("text-[11px]", active ? "font-bold text-primary-dark" : "font-medium text-muted")}>{s.label}</span>
                </button>
              </div>
            );
          })}
        </div>

        {/* Dwell timer: runs in lockstep with the connector fill above and advances the step when
            it ends (an element of its own so the last step, which has no connector, works too) */}
        {!finished && (
          <span
            key={`t-${dwellKey}`}
            aria-hidden="true"
            className="sr-only"
            style={{ animation: `hw-dwell ${STEP_DWELL_MS}ms linear both`, ...playState }}
            onAnimationEnd={onDwellEnd}
          />
        )}

        {/* Scene panel */}
        <div
          className="mt-5 h-[196px] touch-pan-y overflow-hidden rounded-2xl border border-app-card-border bg-background-soft"
          onPointerDown={(e) => (swipeX.current = e.clientX)}
          onPointerUp={(e) => {
            if (swipeX.current === null) return;
            const dx = e.clientX - swipeX.current;
            swipeX.current = null;
            if (dx < -40 && step < last) goTo(step + 1);
            if (dx > 40 && step > 0) goTo(step - 1);
          }}
        >
          {/* Re-keyed when the flow starts so the scene animates in view, not at page load */}
          <div key={`${dwellKey}-${started}`} className="h-full p-4 [animation:hw-scene-in_350ms_cubic-bezier(0.16,1,0.3,1)_both]">
            <Scene />
          </div>
        </div>

        {/* Caption */}
        <div className="mt-5 min-h-[4.5rem]" aria-live={userDriven ? "polite" : "off"}>
          <p key={dwellKey} className={cn("text-[17px] font-bold text-primary-dark", rise)}>{current.title}</p>
          <p className="mt-1 text-[13px] leading-[1.4] text-body">{current.body}</p>
        </div>
      </div>
    </div>
  );
}
