import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  UploadIcon,
  CheckCircle2Icon,
  ChevronRightIcon,
  LightbulbIcon,
  ClockIcon,
  KeyboardIcon,
  ScaleIcon,
  MicIcon,
  LandmarkIcon,
  ShieldIcon,
  Building2Icon,
  BookOpenIcon,
  AwardIcon,
  TrainFrontIcon,
  GavelIcon } from
'lucide-react';
import { StudentLayout } from '../../components/student/StudentLayout';

const steps = [
{ n: 1, label: 'Upload Content', sub: 'Passage uploaded successfully', status: 'done' },
{ n: 2, label: 'Select Result Pattern', sub: '', status: 'active' },
{ n: 3, label: 'Give Test', sub: 'Start your typing test', status: 'pending' },
{ n: 4, label: 'View Result', sub: 'See your performance', status: 'pending' }];


const patterns = [
{ id: 'steno', title: 'STENO', hindi: 'स्टेनो', icon: KeyboardIcon, color: '#0D6EFD', selected: true, qualifyBy: 'Words', badge: 'W', nwpm: 'NWPM ≥ 25', half: 'Yes' },
{ id: 'uk-psc', title: 'UK PSC', hindi: 'उत्तराखंड लोक सेवा आयोग', icon: ScaleIcon, color: '#DC2626', qualifyBy: 'Words', badge: 'W', nwpm: 'NWPM ≥ 20', half: 'No' },
{ id: 'steno-2', title: 'STENO', hindi: 'स्टेनोग्राफर', icon: MicIcon, color: '#16A34A', qualifyBy: 'Words', badge: 'W', nwpm: 'GWPM ≥ 20', half: 'Yes' },
{ id: 'high-court', title: 'High Court', hindi: 'हाई कोर्ट', icon: LandmarkIcon, color: '#EA580C', qualifyBy: 'Words', badge: 'W', nwpm: 'NWPM ≥ 40', half: 'No' },
{ id: 'dsssb', title: 'DSSSB', hindi: 'दिल्ली अधीनस्थ सेवा चयन बोर्ड', icon: GavelIcon, color: '#DC2626', qualifyBy: 'Strokes', badge: 'S', nwpm: 'NWPM ≥ 35', half: 'No' },
{ id: 'rj-hc', title: 'RJ HC', hindi: 'राजस्थान उच्च न्यायालय', icon: LandmarkIcon, color: '#16A34A', qualifyBy: 'Strokes', badge: 'S', nwpm: 'NWPM ≥ 27', half: 'No' },
{ id: 'dp-hcm', title: 'DP HCM/CHD', hindi: 'दिल्ली पुलिस हेड कांस्टेबल', icon: ShieldIcon, color: '#2563EB', qualifyBy: 'Strokes', badge: 'S', nwpm: 'NWPM ≥ 30', half: 'No' },
{ id: 'chd-hc', title: 'CHD HIGH COURT', hindi: 'चंडीगढ़ उच्च न्यायालय', icon: Building2Icon, color: '#92400E', qualifyBy: 'Words', badge: 'W', nwpm: 'NWPM ≥ 35', half: 'Yes' },
{ id: 'common', title: 'COMMON', hindi: 'सामान्य', icon: BookOpenIcon, color: '#7C3AED', qualifyBy: 'Words', badge: 'W', nwpm: 'NWPM ≥ 35', half: 'Yes' },
{ id: 'ssc-cgl', title: 'SSC cgl', hindi: 'कर्मचारी चयन आयोग (सी.जी.एल.)', icon: AwardIcon, color: '#D97706', qualifyBy: 'Strokes', badge: 'S', nwpm: 'NWPM ≥ 27', half: 'Yes' },
{ id: 'ssc', title: 'SSC', hindi: 'कर्मचारी चयन आयोग', icon: KeyboardIcon, color: '#0D9488', qualifyBy: 'Strokes', badge: 'S', nwpm: 'NWPM ≥ 35', half: 'No' },
{ id: 'ntpc', title: 'NTPC', hindi: 'एनटीपीसी', icon: TrainFrontIcon, color: '#1E3A8A', qualifyBy: 'Strokes', badge: 'S', nwpm: 'NWPM ≥ 35', half: 'Yes' }];


const lastPractices = [
{ date: '10 Aug 2026', wpm: 52, accuracy: 94.2 },
{ date: '09 Aug 2026', wpm: 48, accuracy: 92.8 },
{ date: '08 Aug 2026', wpm: 50, accuracy: 93.4 },
{ date: '07 Aug 2026', wpm: 45, accuracy: 91.0 },
{ date: '06 Aug 2026', wpm: 47, accuracy: 92.1 }];


const modeTitle: Record<string, string> = {
  'eng-typing': 'Eng. Typing',
  'hindi-typing': 'Hindi Typing',
  'eng-steno': 'Eng. Steno',
  'hindi-steno': 'Hindi Steno'
};

export function SelfAssessment() {
  const { mode = 'eng-typing' } = useParams();
  const [selected, setSelected] = useState('steno');

  return (
    <StudentLayout showDownloadApp>
      <section className="relative mb-5 overflow-hidden rounded-xl bg-navy-800">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-40" />

        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/95 via-navy-800/80 to-transparent" />
        <div className="relative flex flex-wrap items-start justify-between gap-4 p-6">
          <div>
            <p className="text-[11.5px] font-medium text-white/70">
              {modeTitle[mode] ?? 'Self Assessment'}
            </p>
            <h2 className="font-display text-[30px] font-bold leading-tight text-white">Self Assessment</h2>
            <p className="mt-1 max-w-md text-[12.5px] text-white/80">
              Upload your own passage, choose a result pattern, and take a timed typing test.
            </p>
          </div>
          <p className="font-display text-[20px] italic text-white/90">
            Practice Builds
            <br />
            Success
          </p>
        </div>
      </section>

      <div className="mb-5 flex flex-wrap items-center gap-2 rounded-xl border border-slate-200 bg-white p-4 shadow-card">
        {steps.map((s, i) =>
        <React.Fragment key={s.n}>
            <div className="flex items-center gap-2.5">
              {s.status === 'done' ?
            <CheckCircle2Icon className="h-6 w-6 shrink-0 text-success" aria-hidden="true" /> :

            <span
              className={`grid h-6 w-6 shrink-0 place-items-center rounded-full text-[11px] font-bold ${
              s.status === 'active' ? 'bg-primary text-white' : 'bg-slate-100 text-slate-400'}`
              }>

                  {s.n}
                </span>
            }
              <span>
                <span
                className={`block text-[12.5px] font-semibold ${
                s.status === 'pending' ? 'text-slate-400' : 'text-navy-800'}`
                }>

                  {s.label}
                </span>
                {s.sub && <span className="block text-[10.5px] text-slate-500">{s.sub}</span>}
              </span>
            </div>
            {i < steps.length - 1 &&
          <span className="mx-1 hidden h-px w-10 flex-1 bg-slate-200 sm:block" aria-hidden="true" />
          }
          </React.Fragment>
        )}
      </div>

      <div className="grid gap-5 xl:grid-cols-[1fr_280px]">
        <div>
          <div className="mb-1 flex flex-wrap items-start justify-between gap-3">
            <div>
              <h3 className="flex items-center gap-2 font-display text-[19px] font-bold text-navy-800">
                Select Exam/Result Pattern
                <span className="text-[15px] font-normal text-primary">अपना exam चुनिए</span>
              </h3>
              <p className="mt-0.5 text-[12px] text-slate-500">
                The pattern determines how your score is calculated and what results are shown.
              </p>
            </div>
            <p className="flex max-w-[240px] items-start gap-1.5 rounded-lg bg-primary-50 px-3 py-2 text-[11px] text-primary-700">
              <LightbulbIcon className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              Choose the exam or result pattern as per your target and start your practice.
            </p>
          </div>

          <div className="mt-3 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {patterns.map((p) => {
              const active = p.id === selected;
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setSelected(p.id)}
                  aria-pressed={active}
                  className={`rounded-xl border bg-white p-3.5 text-left shadow-card transition-colors duration-150 ${
                  active ? 'border-primary ring-1 ring-primary' : 'border-slate-200 hover:border-primary'}`
                  }>

                  <div className="flex items-start gap-2.5">
                    <span
                      className="grid h-9 w-9 shrink-0 place-items-center rounded-lg text-white"
                      style={{ backgroundColor: p.color }}>

                      <p.icon className="h-[18px] w-[18px]" aria-hidden="true" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="flex items-center gap-1.5">
                        <span className="truncate font-display text-[13px] font-bold text-navy-800">
                          {p.title}
                        </span>
                        {active &&
                        <span className="rounded bg-primary px-1.5 py-[1px] text-[9px] font-bold text-white">
                            Selected
                          </span>
                        }
                      </span>
                      <span className="block truncate text-[10.5px] text-slate-500">{p.hindi}</span>
                    </span>
                    <ChevronRightIcon className="mt-1 h-4 w-4 shrink-0 text-slate-300" aria-hidden="true" />
                  </div>

                  <div className="mt-3 flex items-center justify-between gap-2 border-t border-slate-100 pt-2.5 text-[10.5px]">
                    <span className="flex items-center gap-1.5 text-slate-500">
                      <span
                        className={`grid h-4 w-4 place-items-center rounded text-[8.5px] font-bold text-white ${
                        p.badge === 'W' ? 'bg-primary' : 'bg-rose-500'}`
                        }>

                        {p.badge}
                      </span>
                      Qualify on: {p.qualifyBy}
                    </span>
                    <span className="text-right text-slate-500">
                      <span className="block font-semibold text-navy-800">{p.nwpm}</span>
                      Half mistakes: {p.half}
                    </span>
                  </div>
                </button>);

            })}
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-card">
            <h3 className="flex items-center gap-2 font-display text-[13.5px] font-semibold text-navy-800">
              <ClockIcon className="h-4 w-4 text-primary" aria-hidden="true" /> Your Last 5 Practices
            </h3>
            <ul className="mt-3 divide-y divide-slate-100">
              {lastPractices.map((p) =>
              <li key={p.date} className="flex items-center justify-between py-2 text-[11.5px]">
                  <span className="text-slate-500">{p.date}</span>
                  <span className="font-semibold text-primary">{p.wpm} WPM</span>
                  <span className="font-medium text-success">{p.accuracy.toFixed(1)}%</span>
                </li>
              )}
            </ul>
          </div>

          <p className="rounded-lg bg-primary-50 p-3 text-[11px] text-primary-700">
            Self assessment results are private. They do not affect your leaderboard rank, so practise
            freely and track improvement over time.
          </p>
        </div>
      </div>

      <div className="mt-5 flex justify-end">
        <button
          type="button"
          className="flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-[13px] font-semibold text-white transition-colors duration-150 hover:bg-primary-700">

          <UploadIcon className="h-4 w-4" aria-hidden="true" /> Continue to Give Test
        </button>
      </div>
    </StudentLayout>);

}
