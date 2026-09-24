import React from 'react';
import {
  Gamepad2Icon,
  EyeIcon,
  PlayIcon,
  RocketIcon,
  CircleIcon,
  ZapIcon,
  CarIcon,
  TreePineIcon,
  BirdIcon,
  FishIcon } from
'lucide-react';
import { StudentLayout } from '../../components/student/StudentLayout';

const games = [
{
  id: 'bubble',
  title: 'Bubble Typing',
  desc: 'Type the falling bubbles before they reach the bottom.',
  icon: CircleIcon,
  from: '#38BDF8',
  to: '#6366F1'
},
{
  id: 'space',
  title: 'Space Defender',
  desc: 'Type to shoot the aliens and protect your spaceship.',
  icon: RocketIcon,
  from: '#4C1D95',
  to: '#1E293B'
},
{
  id: 'nitro',
  title: 'Nitro Type',
  desc: 'Race against others by typing as fast as you can.',
  icon: CarIcon,
  from: '#111827',
  to: '#DC2626'
},
{
  id: 'jungle',
  title: 'Key Jungle',
  desc: 'Type the words and help the monkey collect bananas.',
  icon: TreePineIcon,
  from: '#65A30D',
  to: '#166534'
},
{
  id: 'birds',
  title: 'Typing Birds',
  desc: 'Type the words to keep the birds flying.',
  icon: BirdIcon,
  from: '#38BDF8',
  to: '#22C55E'
},
{
  id: 'aqua',
  title: 'Aqua Typing',
  desc: 'Type the words and dive deeper in the ocean.',
  icon: FishIcon,
  from: '#0EA5E9',
  to: '#0C4A6E'
}];


export function TypingGames() {
  return (
    <StudentLayout showDownloadApp>
      <section className="relative mb-5 overflow-hidden rounded-xl bg-gradient-to-r from-sky-50 to-indigo-50 p-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="flex items-center gap-2.5 font-display text-[28px] font-bold text-navy-800">
              <Gamepad2Icon className="h-7 w-7 text-primary" aria-hidden="true" /> Typing Games
            </h2>
            <p className="mt-0.5 text-[13px] font-semibold text-primary">
              Play • Improve • Beat Your Best
            </p>
            <p className="mt-2 max-w-md text-[12.5px] text-slate-500">
              Make your typing practice fun! Choose a game, type fast, and track your progress.
            </p>
          </div>
          <div className="relative hidden shrink-0 items-center gap-3 sm:flex">
            <span className="rotate-[-6deg] rounded-2xl bg-primary px-4 py-3 text-center font-display text-[15px] font-extrabold italic leading-tight text-white shadow-lg">
              Type
              <br />
              Play
              <br />
              Improve
            </span>
            <RocketIcon className="h-14 w-14 rotate-45 text-primary-700" aria-hidden="true" />
          </div>
        </div>
      </section>

      <section className="mb-5 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-4">
        <div className="flex items-center gap-3">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-emerald-600 text-white">
            <EyeIcon className="h-5 w-5" aria-hidden="true" />
          </span>
          <div>
            <p className="flex items-center gap-2 font-display text-[14.5px] font-bold text-emerald-800">
              Play with Blink
              <span className="rounded bg-danger px-1.5 py-[1px] text-[9px] font-bold text-white">NEW</span>
            </p>
            <p className="text-[12px] text-emerald-700">
              Type the words as they appear with a blinking effect for better focus and speed.
            </p>
          </div>
        </div>
        <button
          type="button"
          className="flex shrink-0 items-center gap-2 rounded-full bg-emerald-600 px-5 py-2.5 text-[12.5px] font-semibold text-white transition-colors duration-150 hover:bg-emerald-700">

          <PlayIcon className="h-4 w-4 fill-current" aria-hidden="true" /> Start Now
        </button>
      </section>

      <h3 className="mb-3 flex items-center gap-2 font-display text-[18px] font-bold text-navy-800">
        <Gamepad2Icon className="h-5 w-5 text-primary" aria-hidden="true" /> Choose Your Game
      </h3>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {games.map((g) =>
        <article
          key={g.id}
          className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-card">

            <div
            className="flex h-28 items-center justify-center gap-2.5"
            style={{ background: `linear-gradient(135deg, ${g.from}, ${g.to})` }}>

              <g.icon className="h-8 w-8 text-white/90" aria-hidden="true" />
              <span className="font-display text-[22px] font-extrabold uppercase italic tracking-wide text-white drop-shadow">
                {g.title}
              </span>
            </div>
            <div className="p-4">
              <h4 className="font-display text-[15px] font-bold text-navy-800">{g.title}</h4>
              <p className="mt-1 text-[12px] text-slate-500">{g.desc}</p>
              <button
              type="button"
              className="mt-3 flex w-full items-center justify-center gap-2 rounded-md bg-primary py-2.5 text-[12.5px] font-semibold text-white transition-colors duration-150 hover:bg-primary-700">

                <PlayIcon className="h-4 w-4 fill-current" aria-hidden="true" /> Play Now
              </button>
            </div>
          </article>
        )}
      </div>

      <p className="mt-5 flex items-center gap-2 rounded-lg bg-primary-50 p-3 text-[11.5px] text-primary-700">
        <ZapIcon className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
        These games are for practice only — scores here do not affect your exam results or leaderboard
        rank.
      </p>
    </StudentLayout>);

}
