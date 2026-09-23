import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  ClipboardListIcon,
  ClockIcon,
  FileTextIcon,
  UploadCloudIcon,
  PlayIcon,
  XIcon,
  ChevronRightIcon,
  LightbulbIcon,
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
import { PageHeading } from '../../components/common/PageHeading';

const modeTitle: Record<string, string> = {
  'eng-typing': 'English Typing',
  'hindi-typing': 'Hindi Typing',
  'eng-steno': 'English Steno',
  'hindi-steno': 'Hindi Steno'
};

const durations = ['2 Min', '5 Min', '10 Min', '15 Min', '20 Min', '30 Min', '40 Min', '60 Min'];

const lastPractices = [
{ date: '10 Aug 2026', wpm: 52, accuracy: 94.2 },
{ date: '09 Aug 2026', wpm: 48, accuracy: 92.8 },
{ date: '08 Aug 2026', wpm: 50, accuracy: 93.4 },
{ date: '07 Aug 2026', wpm: 45, accuracy: 91.0 },
{ date: '06 Aug 2026', wpm: 47, accuracy: 92.1 }];


const patterns = [
{ id: 'steno', title: 'STENO', hindi: 'स्टेनो', icon: KeyboardIcon, color: '#0D6EFD', qualifyBy: 'Words', badge: 'W', nwpm: 'NWPM ≥ 25', half: 'Yes' },
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


function ExamPatternModal({
  selected,
  onSelect,
  onClose



}: {selected: string;onSelect: (id: string) => void;onClose: () => void;}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-navy-900/50 p-4 backdrop-blur-sm">
      <div className="max-h-[92vh] w-full max-w-6xl overflow-y-auto rounded-xl bg-white p-7 shadow-2xl">
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
          <button
            type="button"
            onClick={onClose}
            className="grid h-8 w-8 shrink-0 place-items-center rounded-full text-slate-400 transition-colors duration-150 hover:bg-slate-100 hover:text-slate-600"
            aria-label="Close">

            <XIcon className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        <p className="mt-2 flex max-w-md items-start gap-1.5 rounded-lg bg-primary-50 px-3 py-2 text-[11px] text-primary-700">
          <LightbulbIcon className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
          Choose the exam or result pattern as per your target and start your practice.
        </p>

        <div className="mt-3 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {patterns.map((p) => {
            const active = p.id === selected;
            return (
              <button
                key={p.id}
                type="button"
                onClick={() => {
                  onSelect(p.id);
                  onClose();
                }}
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
    </div>);

}

export function PracticeSetup() {
  const { mode = 'eng-typing' } = useParams();
  const isSteno = mode.includes('steno');
  const title = modeTitle[mode] ?? 'Self Assessment';

  const [duration, setDuration] = useState('10 Min');
  const [passageSource, setPassageSource] = useState<'random' | 'paste' | 'audio'>('random');
  const [pattern, setPattern] = useState('steno');
  const [patternModalOpen, setPatternModalOpen] = useState(false);
  const selectedPattern = patterns.find((p) => p.id === pattern);

  return (
    <StudentLayout showDownloadApp>
      <PageHeading
        icon={<ClipboardListIcon className="h-5 w-5" aria-hidden="true" />}
        title={`Self Assessment — ${title}`}
        subtitle="Set up your own practice test. No ranking, no pressure — just focused practice."
        crumbs={[
        { label: 'Home', to: '/' },
        { label: 'Self Assessment' },
        { label: title }]} />


      <div className="grid gap-5 xl:grid-cols-[1fr_280px]">
        <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-card">
          <h3 className="mb-3.5 font-display text-[15px] font-bold text-navy-800">Practice Setup</h3>

          <p className="mb-2 flex items-center gap-1.5 text-[12px] font-semibold text-navy-800">
            <ClockIcon className="h-3.5 w-3.5 text-primary" aria-hidden="true" /> Test Duration
          </p>
          <div className="mb-4 flex flex-wrap gap-2">
            {durations.map((d) =>
            <button
              key={d}
              type="button"
              onClick={() => setDuration(d)}
              aria-pressed={duration === d}
              className={`rounded-md border px-3.5 py-1.5 text-[12px] font-semibold transition-colors duration-150 ${
              duration === d ?
              'border-primary bg-primary text-white' :
              'border-slate-300 text-slate-600 hover:border-primary'}`
              }>

                {d}
              </button>
            )}
          </div>

          <p className="mb-2 flex items-center gap-1.5 text-[12px] font-semibold text-navy-800">
            <FileTextIcon className="h-3.5 w-3.5 text-primary" aria-hidden="true" /> Passage Source
          </p>
          <div className={`mb-4 grid gap-3 ${isSteno ? 'sm:grid-cols-3' : 'sm:grid-cols-2'}`}>
            <button
              type="button"
              onClick={() => setPassageSource('random')}
              aria-pressed={passageSource === 'random'}
              className={`rounded-md border px-3.5 py-2.5 text-left text-[12.5px] font-medium transition-colors duration-150 ${
              passageSource === 'random' ?
              'border-primary bg-primary-50 text-primary-700' :
              'border-slate-300 text-slate-600 hover:border-primary'}`
              }>

              Random Passage
            </button>
            <button
              type="button"
              onClick={() => setPassageSource('paste')}
              aria-pressed={passageSource === 'paste'}
              className={`rounded-md border px-3.5 py-2.5 text-left text-[12.5px] font-medium transition-colors duration-150 ${
              passageSource === 'paste' ?
              'border-primary bg-primary-50 text-primary-700' :
              'border-slate-300 text-slate-600 hover:border-primary'}`
              }>

              Paste Your Own Text
            </button>
            {isSteno &&
            <button
              type="button"
              onClick={() => setPassageSource('audio')}
              aria-pressed={passageSource === 'audio'}
              className={`flex items-center gap-2 rounded-md border px-3.5 py-2.5 text-left text-[12.5px] font-medium transition-colors duration-150 ${
              passageSource === 'audio' ?
              'border-primary bg-primary-50 text-primary-700' :
              'border-slate-300 text-slate-600 hover:border-primary'}`
              }>

                <UploadCloudIcon className="h-4 w-4" aria-hidden="true" /> Upload Audio
              </button>
            }
          </div>

          <div className="grid gap-3.5 sm:grid-cols-3">
            <label className="block">
              <span className="mb-1.5 block text-[12px] font-semibold text-navy-800">Font Group</span>
              <select className="w-full rounded-md border border-slate-300 px-3 py-2 text-[12.5px] text-slate-600 outline-none focus:border-primary">
                <option>English Basic Fonts</option>
                <option>Hindi Mangal Fonts</option>
              </select>
            </label>
            <label className="block">
              <span className="mb-1.5 block text-[12px] font-semibold text-navy-800">Backspace</span>
              <select className="w-full rounded-md border border-slate-300 px-3 py-2 text-[12.5px] text-slate-600 outline-none focus:border-primary">
                <option>Current Word Backspace</option>
                <option>Full Backspace</option>
                <option>No Backspace</option>
              </select>
            </label>
            <div className="block">
              <span className="mb-1.5 block text-[12px] font-semibold text-navy-800">
                Exam/ Result Pattern
              </span>
              <button
                type="button"
                onClick={() => setPatternModalOpen(true)}
                className="flex w-full items-center justify-between gap-2 rounded-md border border-slate-300 px-3 py-2 text-left text-[12.5px] text-slate-600 outline-none transition-colors duration-150 hover:border-primary focus:border-primary">

                <span className="truncate font-medium text-navy-800">
                  {selectedPattern ? selectedPattern.title : '-- Select Pattern --'}
                </span>
                <ChevronRightIcon className="h-3.5 w-3.5 shrink-0 text-slate-400" aria-hidden="true" />
              </button>
            </div>
          </div>

          <button
            type="button"
            className="mt-4 flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-[13px] font-semibold text-white transition-colors duration-150 hover:bg-primary-700">

            <PlayIcon className="h-4 w-4 fill-current" aria-hidden="true" /> Start Practice
          </button>
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

      {patternModalOpen &&
      <ExamPatternModal
        selected={pattern}
        onSelect={setPattern}
        onClose={() => setPatternModalOpen(false)} />

      }
    </StudentLayout>);

}
