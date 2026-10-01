import React, { useEffect, useState } from 'react';
import {
  LandmarkIcon,
  CheckCircle2Icon,
  RotateCcwIcon,
  ArrowRightIcon,
  ClockIcon,
  ClipboardCheckIcon,
  MessageSquareIcon,
  UserCircle2Icon,
  XIcon,
  PlayIcon,
  FileTextIcon,
  ShieldIcon,
  GavelIcon,
  ScaleIcon,
  InfoIcon,
  AlertTriangleIcon,
  HeadphonesIcon,
  PauseIcon } from
'lucide-react';
import { TranscriptionInterface } from '../../data/steno';

const instructionIcons = [
CheckCircle2Icon,
CheckCircle2Icon,
RotateCcwIcon,
ArrowRightIcon,
ClockIcon,
ClipboardCheckIcon,
MessageSquareIcon];

const instructionTones = [
'text-emerald-600',
'text-emerald-600',
'text-amber-600',
'text-primary',
'text-slate-500',
'text-danger',
'text-amber-600'];


function useCountdown(totalSeconds: number, onExpire: () => void) {
  const [remaining, setRemaining] = useState(totalSeconds);

  useEffect(() => {
    if (remaining <= 0) {
      onExpire();
      return;
    }
    const timer = setInterval(() => setRemaining((r) => Math.max(0, r - 1)), 1000);
    return () => clearInterval(timer);
  }, [remaining, onExpire]);

  return {
    remaining,
    mm: String(Math.floor(remaining / 60)).padStart(2, '0'),
    ss: String(remaining % 60).padStart(2, '0')
  };
}

function ExamSidebarCard({
  mm,
  ss,
  examLabel,
  accent = 'danger'



}: {mm: string;ss: string;examLabel: string;accent?: 'danger' | 'success';}) {
  const accentText = accent === 'success' ? 'text-success' : 'text-danger';
  const accentBorder = accent === 'success' ? 'border-success/30' : 'border-danger/20';
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 text-center shadow-card">
      <p className={`rounded-lg border py-2 text-[15px] font-bold text-navy-800 ${accentBorder}`}>
        Time Left: <span className={accentText}>{mm}:{ss}</span>
      </p>
      <span className="mx-auto mt-4 grid h-16 w-16 place-items-center rounded-full bg-slate-100 text-slate-400">
        <UserCircle2Icon className="h-9 w-9" aria-hidden="true" />
      </span>
      <dl className="mt-3 space-y-1 text-left text-[12px]">
        <div className="flex gap-1.5">
          <dt className="font-semibold text-navy-800">Name:</dt>
          <dd className="text-slate-600">Vikram</dd>
        </div>
        <div className="flex gap-1.5">
          <dt className="font-semibold text-navy-800">Roll No:</dt>
          <dd className="text-slate-600">11562574200</dd>
        </div>
        <div className="flex gap-1.5">
          <dt className="font-semibold text-navy-800">Language:</dt>
          <dd className="text-slate-600">English</dd>
        </div>
        <div className="flex gap-1.5">
          <dt className="font-semibold text-navy-800">Exam:</dt>
          <dd className="text-slate-600">{examLabel}</dd>
        </div>
      </dl>
    </div>);

}

function SoundToggle({
  on,
  onToggle,
  iconColor = 'text-primary',
  iconBg = 'bg-primary-50'



}: {on: boolean;onToggle: () => void;iconColor?: string;iconBg?: string;}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={on}
      onClick={onToggle}
      className="mb-4 flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[12px] font-medium text-slate-600">

      <span className={`grid h-5 w-5 place-items-center rounded-full ${iconBg} ${iconColor}`}>
        <HeadphonesIcon className="h-3 w-3" aria-hidden="true" />
      </span>
      Exam Hall Sound
      <span
        className={`relative h-4 w-8 shrink-0 rounded-full transition-colors duration-150 ${
        on ? 'bg-success' : 'bg-slate-300'}`
        }>

        <span
          className={`absolute top-[2px] h-3 w-3 rounded-full bg-white transition-transform duration-150 ${
          on ? 'translate-x-[18px]' : 'translate-x-[2px]'}`
          } />

      </span>
    </button>);

}

function InstructionsList({ instructions }: {instructions: string[];}) {
  return (
    <ul className="space-y-2.5">
      {instructions.map((ins, i) => {
        const Icon = instructionIcons[i] ?? InfoIcon;
        return (
          <li
            key={i}
            className="flex items-start gap-2.5 rounded-lg bg-slate-50 px-3 py-2.5 text-[12.5px] leading-relaxed text-slate-700">

            <Icon
              className={`mt-0.5 h-4 w-4 shrink-0 ${instructionTones[i] ?? 'text-slate-500'}`}
              aria-hidden="true" />

            {ins}
          </li>);

      })}
    </ul>);

}

/* ---------- Generic (SSC / Court) ---------- */

export function GenericInstructionsScreen({
  iface,
  icon: Icon,
  badgeBg,
  btnBg,
  onExit,
  onStart





}: {iface: TranscriptionInterface;icon: React.ComponentType<{className?: string;}>;badgeBg: string;btnBg: string;onExit: () => void;onStart: () => void;}) {
  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto bg-slate-50">
      <div className="flex items-center justify-end px-5 py-4">
        <button
          type="button"
          onClick={onExit}
          className="flex items-center gap-1.5 text-[12.5px] font-medium text-slate-500 transition-colors duration-150 hover:text-slate-700">

          <XIcon className="h-4 w-4" aria-hidden="true" /> Exit
        </button>
      </div>
      <div className="mx-auto max-w-5xl px-5 pb-10">
        <div className="grid overflow-hidden rounded-xl border border-slate-200 bg-white shadow-card lg:grid-cols-[320px_1fr]">
          <div className="flex flex-col items-center justify-center gap-3 border-b border-slate-100 p-8 text-center lg:border-b-0 lg:border-r">
            <span className={`grid h-20 w-20 place-items-center rounded-full ${badgeBg}`}>
              <Icon className="h-10 w-10" aria-hidden="true" />
            </span>
            <h3 className="font-display text-[17px] font-bold text-navy-800">{iface.skillTestTitle}</h3>
            <p className="text-[12px] text-slate-500">Skill Test Language - English</p>
            <p className="flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-[11.5px] font-medium text-slate-600">
              <ClockIcon className="h-3.5 w-3.5" aria-hidden="true" /> Test Duration: {iface.durationMinutes}{' '}
              Minutes
            </p>
            <button
              type="button"
              onClick={onStart}
              className={`mt-2 flex items-center gap-2 rounded-md px-6 py-2.5 text-[13px] font-semibold text-white transition-colors duration-150 ${btnBg}`}>

              <PlayIcon className="h-4 w-4 fill-current" aria-hidden="true" /> Start Test
            </button>
          </div>
          <div className="p-6">
            <p className="mb-3 flex items-center gap-1.5 font-display text-[14px] font-bold text-navy-800">
              <FileTextIcon className="h-4 w-4 text-primary" aria-hidden="true" /> Exam Instructions
            </p>
            <InstructionsList instructions={iface.instructions} />
          </div>
        </div>
      </div>
    </div>);

}

export function GenericTypingScreen({
  iface,
  icon: Icon,
  iconBg,
  metaRows,
  inputLabel,
  selectedDuration,
  onSubmit







}: {iface: TranscriptionInterface;icon: React.ComponentType<{className?: string;}>;iconBg: string;metaRows: {label: string;value: string;}[];inputLabel?: string;selectedDuration?: number;onSubmit: () => void;}) {
  const [typed, setTyped] = useState('');
  const [soundOn, setSoundOn] = useState(true);
  const { mm, ss } = useCountdown((selectedDuration ?? iface.durationMinutes) * 60, onSubmit);

  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto bg-slate-50 p-5">
      <div className="mx-auto max-w-6xl">
        <div className="mb-4 flex flex-wrap items-start justify-between gap-3 rounded-xl border border-slate-200 bg-white px-5 py-4 shadow-card">
          <div className="flex items-center gap-3">
            <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-full ${iconBg}`}>
              <Icon className="h-6 w-6" aria-hidden="true" />
            </span>
            <div>
              <p className="font-display text-[15px] font-bold text-navy-800">{iface.orgName}</p>
              <p className="text-[11.5px] text-slate-500">{iface.examTitle}</p>
            </div>
          </div>
          <div className="text-right text-[11.5px] leading-relaxed text-slate-600">
            {metaRows.map((r) =>
            <p key={r.label}>
                <span className="font-semibold text-navy-800">{r.label}:</span> {r.value}
              </p>
            )}
          </div>
        </div>

        <SoundToggle on={soundOn} onToggle={() => setSoundOn((s) => !s)} />

        <div className="grid gap-4 lg:grid-cols-[1fr_280px]">
          <div>
            {inputLabel &&
            <p className="mb-2 text-[11px] font-bold uppercase tracking-wide text-slate-500">{inputLabel}</p>
            }
            <textarea
              value={typed}
              onChange={(e) => setTyped(e.target.value)}
              placeholder="Start typing..."
              autoFocus
              className="h-[380px] w-full resize-none rounded-xl border border-slate-200 bg-white p-4 text-[14px] leading-relaxed text-navy-800 shadow-card outline-none focus:border-primary" />


            <button
              type="button"
              onClick={onSubmit}
              className="mt-4 rounded-md bg-navy-900 px-6 py-2.5 text-[13px] font-semibold text-white transition-colors duration-150 hover:bg-navy-800">

              Submit
            </button>
          </div>
          <ExamSidebarCard mm={mm} ss={ss} examLabel={iface.examTitle} />
        </div>
      </div>
    </div>);

}

/* ---------- HSSC ---------- */

export function HsscInstructionsScreen({
  iface,
  onExit,
  onStart



}: {iface: TranscriptionInterface;onExit: () => void;onStart: () => void;}) {
  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto bg-navy-900">
      <div className="bg-amber-400 py-1 text-center text-[10px] font-semibold uppercase tracking-wide text-navy-900">
        Government of Haryana · Haryana Staff Selection Commission
      </div>
      <div className="border-b-4 border-amber-400 bg-navy-900 px-5 py-4">
        <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-white">
              <LandmarkIcon className="h-6 w-6 text-navy-900" aria-hidden="true" />
            </span>
            <div>
              <p className="font-display text-[16px] font-bold text-white">{iface.orgName}</p>
              <p className="text-[11px] text-slate-300">HSSC · Government of Haryana</p>
              <p className="text-[10.5px] font-semibold text-amber-300">
                {iface.skillTestTitle} | English Transcription
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onExit}
            className="flex items-center gap-1.5 text-[12px] font-medium text-slate-300 transition-colors duration-150 hover:text-white">

            <XIcon className="h-4 w-4" aria-hidden="true" /> Exit
          </button>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-5 py-8">
        <div className="overflow-hidden rounded-lg border border-navy-700 bg-navy-800">
          <div className="flex items-center justify-between border-b border-navy-700 bg-navy-700 px-5 py-2.5">
            <p className="text-[13px] font-bold text-white">Admit Card &amp; Examination Instructions</p>
            <span className="rounded bg-danger px-2 py-[2px] text-[9.5px] font-bold uppercase tracking-wide text-white">
              Confidential
            </span>
          </div>
          <div className="grid gap-6 p-6 lg:grid-cols-[220px_1fr]">
            <div>
              <span className="grid h-24 w-24 place-items-center rounded-md border border-navy-600 bg-navy-700 text-slate-400">
                <UserCircle2Icon className="h-14 w-14" aria-hidden="true" />
              </span>
              <dl className="mt-3 space-y-1.5 text-[11.5px]">
                {[
                ['Name', 'Vikram'],
                ['Roll No', '11562574200'],
                ['Language', 'English'],
                ['Category', 'General'],
                ['Post', 'Stenographer Grade D']].
                map(([k, v]) =>
                <div key={k} className="flex justify-between gap-2">
                    <dt className="uppercase tracking-wide text-slate-400">{k}</dt>
                    <dd className="font-semibold text-white">{v}</dd>
                  </div>
                )}
              </dl>
              <dl className="mt-4 space-y-1.5 border-t border-navy-700 pt-3 text-[11.5px]">
                {[
                ['Date', '30-09-2026'],
                ['Shift', '3rd Shift (Evening)'],
                ['Duration', `${iface.durationMinutes} Min`],
                ['Centre', iface.examCentre || '—']].
                map(([k, v]) =>
                <div key={k} className="flex justify-between gap-2">
                    <dt className="text-slate-400">{k}</dt>
                    <dd className="text-right font-medium text-slate-200">{v}</dd>
                  </div>
                )}
              </dl>
            </div>
            <div>
              <p className="mb-3 flex items-center gap-1.5 text-[12px] font-bold uppercase tracking-wide text-amber-300">
                <span className="h-1.5 w-1.5 rounded-full bg-danger" aria-hidden="true" /> General Instructions
                for Candidates
              </p>
              <ol className="space-y-2.5">
                {iface.instructions.map((ins, i) =>
                <li
                  key={i}
                  className="flex items-start gap-2.5 text-[12.5px] leading-relaxed text-slate-200">

                    <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-amber-400 text-[9px] font-bold text-navy-900">
                      {i + 1}
                    </span>
                    {ins}
                  </li>
                )}
              </ol>
              <p className="mt-4 border-t border-navy-700 pt-3 text-[11px] italic leading-relaxed text-slate-400">
                By proceeding, I confirm that I have read and understood all the instructions above and will
                comply with the examination rules.
              </p>
              <button
                type="button"
                onClick={onStart}
                className="mt-4 flex items-center gap-2 rounded-md bg-danger px-6 py-2.5 text-[13px] font-semibold text-white transition-colors duration-150 hover:bg-[#bb2d3b]">

                <PlayIcon className="h-4 w-4 fill-current" aria-hidden="true" /> Start Test
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>);

}

export function HsscTypingScreen({ iface, onSubmit }: {iface: TranscriptionInterface;onSubmit: () => void;}) {
  const [typed, setTyped] = useState('');
  const [soundOn, setSoundOn] = useState(false);
  const { mm, ss } = useCountdown(iface.durationMinutes * 60, onSubmit);
  const words = typed.trim() ? typed.trim().split(/\s+/).length : 0;

  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto bg-slate-50">
      <div className="border-b border-slate-200 bg-white px-5 py-3">
        <div className="mx-auto flex max-w-6xl flex-wrap items-start justify-between gap-3">
          <div>
            <p className="font-display text-[14px] font-bold text-navy-800">{iface.orgName}</p>
            <p className="text-[10.5px] uppercase tracking-wide text-slate-500">
              Government of Haryana - HSSC
            </p>
          </div>
          <div className="text-center">
            <p className="font-display text-[13.5px] font-bold text-navy-800">{iface.skillTestTitle}</p>
            <p className="text-[10.5px] text-slate-500">
              Transcription Paper | English | {iface.durationMinutes} Minutes
            </p>
          </div>
          <div className="text-right text-[10.5px] leading-relaxed text-slate-500">
            <p>
              <span className="font-semibold text-navy-800">Date:</span> 30-09-2026
            </p>
            <p>
              <span className="font-semibold text-navy-800">Shift:</span> 3rd Shift (Evening)
            </p>
            <p>
              <span className="font-semibold text-navy-800">Centre:</span> {iface.examCentre}
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-2 bg-navy-900 py-1.5 text-[11.5px] font-semibold text-white">
        Time Remaining <span className="font-display text-[13px] text-amber-300">{mm}:{ss}</span>
        <span className="flex items-center gap-1 text-emerald-400">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden="true" /> Running
        </span>
      </div>

      <div className="border-b border-slate-200 bg-slate-100 px-5 py-1.5 text-[11px] text-slate-500">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-3">
          <span>Dictation: Eduquity 100 — Dictation No. 1</span>
          <span>• Duration: {iface.durationMinutes} Minutes</span>
          <span>• Candidate: Vikram</span>
          <span>• Mode: HSSC Skill Test</span>
        </div>
      </div>

      <div className="mx-auto max-w-6xl p-5">
        <div className="grid gap-4 lg:grid-cols-[1fr_280px]">
          <div>
            <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
              <p className="flex items-center gap-1.5 text-[12px] font-bold uppercase tracking-wide text-navy-800">
                <FileTextIcon className="h-3.5 w-3.5 text-primary" aria-hidden="true" /> Transcription Input
              </p>
              <p className="text-[10.5px] text-slate-400">
                Type the dictated passage below · Scroll inside textarea is disabled
              </p>
            </div>
            <SoundToggle
              on={soundOn}
              onToggle={() => setSoundOn((s) => !s)}
              iconColor="text-amber-600"
              iconBg="bg-amber-50" />

            <textarea
              value={typed}
              onChange={(e) => setTyped(e.target.value)}
              placeholder="Begin typing the dictated passage here..."
              autoFocus
              className="h-[320px] w-full resize-none overflow-hidden rounded-lg border border-slate-200 bg-white p-4 text-[14px] leading-relaxed text-navy-800 outline-none focus:border-primary" />


            <div className="mt-3 flex items-center justify-between">
              <button
                type="button"
                onClick={onSubmit}
                className="rounded-md bg-navy-900 px-6 py-2.5 text-[13px] font-semibold text-white transition-colors duration-150 hover:bg-navy-800">

                Submit Answer
              </button>
              <span className="text-[11px] text-slate-400">Words: {words}</span>
            </div>
          </div>
          <div className="space-y-3">
            <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-card">
              <p className="bg-navy-800 px-3 py-2 text-[10.5px] font-bold uppercase tracking-wide text-white">
                Candidate Details
              </p>
              <div className="flex gap-3 p-3">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-md bg-slate-100 text-slate-400">
                  <UserCircle2Icon className="h-7 w-7" aria-hidden="true" />
                </span>
                <dl className="space-y-0.5 text-[11px]">
                  <div>
                    <dt className="inline text-slate-400">Full Name: </dt>
                    <dd className="inline font-semibold text-navy-800">Vikram</dd>
                  </div>
                  <div>
                    <dt className="inline text-slate-400">Roll Number: </dt>
                    <dd className="inline font-semibold text-navy-800">11562574200</dd>
                  </div>
                  <div>
                    <dt className="inline text-slate-400">Language: </dt>
                    <dd className="inline font-semibold text-navy-800">English</dd>
                  </div>
                  <div>
                    <dt className="inline text-slate-400">Post Applied: </dt>
                    <dd className="inline font-semibold text-navy-800">HSSC Stenographer</dd>
                  </div>
                </dl>
              </div>
            </div>
            <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-card">
              <p className="bg-navy-800 px-3 py-2 text-[10.5px] font-bold uppercase tracking-wide text-white">
                Examination Details
              </p>
              <dl className="space-y-1.5 p-3 text-[11px]">
                {[
                ['Dictation Title', 'Eduquity 100 — Dictation No. 1'],
                ['Exam Date', '30-09-2026'],
                ['Shift', '3rd Shift (Evening)'],
                ['Duration', `${iface.durationMinutes} Minutes`],
                ['Exam Centre', iface.examCentre],
                ['Standard', 'HSSC Stenographer Rules']].
                map(([k, v]) =>
                <div key={k}>
                    <dt className="text-[9.5px] uppercase tracking-wide text-slate-400">{k}</dt>
                    <dd className="font-medium text-navy-800">{v}</dd>
                  </div>
                )}
              </dl>
            </div>
            <div className="rounded-xl border border-amber-200 bg-amber-50 p-3">
              <p className="mb-1.5 flex items-center gap-1.5 text-[11px] font-bold text-amber-700">
                <AlertTriangleIcon className="h-3.5 w-3.5" aria-hidden="true" /> Important Notices
              </p>
              <ul className="space-y-1 text-[10.5px] text-amber-700">
                <li>• Do not refresh the page</li>
                <li>• Submit before timer ends</li>
                <li>• Tab-switching may flag malpractice</li>
                <li>• Use only keyboard for typing</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>);

}

/* ---------- DSSSB ---------- */

export function DsssbInstructionsScreen({
  iface,
  onExit,
  onStart



}: {iface: TranscriptionInterface;onExit: () => void;onStart: (duration: number) => void;}) {
  const [duration, setDuration] = useState<number | null>(null);

  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto bg-slate-50">
      <div className="flex items-center justify-end px-5 py-4">
        <button
          type="button"
          onClick={onExit}
          className="flex items-center gap-1.5 text-[12.5px] font-medium text-slate-500 transition-colors duration-150 hover:text-slate-700">

          <XIcon className="h-4 w-4" aria-hidden="true" /> Exit
        </button>
      </div>
      <div className="mx-auto max-w-5xl px-5 pb-10">
        <div className="grid overflow-hidden rounded-xl border border-slate-200 bg-white shadow-card lg:grid-cols-[320px_1fr]">
          <div className="flex flex-col items-center justify-center gap-3 border-b border-slate-100 p-8 text-center lg:border-b-0 lg:border-r">
            <span className="grid h-20 w-20 place-items-center rounded-full bg-rose-50 text-rose-600">
              <GavelIcon className="h-10 w-10" aria-hidden="true" />
            </span>
            <h3 className="font-display text-[17px] font-bold text-navy-800">{iface.skillTestTitle}</h3>
            <p className="text-[12px] text-slate-500">{iface.orgName}</p>
            <div className="mt-2 w-full">
              <p className="mb-2 flex items-center justify-center gap-1.5 text-[11.5px] font-semibold text-navy-800">
                <ClockIcon className="h-3.5 w-3.5" aria-hidden="true" /> Select Test Duration
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {(iface.durationOptions ?? [iface.durationMinutes]).map((d) =>
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

                    {d} min
                  </button>
                )}
              </div>
              {duration === null &&
              <p className="mt-2 text-[11px] italic text-slate-400">
                  Please select a duration to continue.
                </p>
              }
            </div>
            <button
              type="button"
              disabled={duration === null}
              onClick={() => duration !== null && onStart(duration)}
              className="mt-2 flex items-center gap-2 rounded-md bg-danger px-6 py-2.5 text-[13px] font-semibold text-white transition-colors duration-150 hover:bg-[#bb2d3b] disabled:cursor-not-allowed disabled:bg-slate-300">

              <PlayIcon className="h-4 w-4 fill-current" aria-hidden="true" /> Start Test
            </button>
          </div>
          <div className="p-6">
            <p className="mb-3 flex items-center gap-1.5 font-display text-[14px] font-bold text-navy-800">
              <FileTextIcon className="h-4 w-4 text-primary" aria-hidden="true" /> Exam Instructions
            </p>
            <InstructionsList instructions={iface.instructions} />
          </div>
        </div>
      </div>
    </div>);

}

/* ---------- CAPF ---------- */

export function CapfInstructionsScreen({
  iface,
  onExit,
  onStart



}: {iface: TranscriptionInterface;onExit: () => void;onStart: () => void;}) {
  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto bg-emerald-50/60">
      <div className="flex items-center justify-end px-5 py-4">
        <button
          type="button"
          onClick={onExit}
          className="flex items-center gap-1.5 text-[12.5px] font-medium text-slate-500 transition-colors duration-150 hover:text-slate-700">

          <XIcon className="h-4 w-4" aria-hidden="true" /> Exit
        </button>
      </div>
      <div className="mx-auto grid max-w-5xl gap-8 px-5 pb-10 lg:grid-cols-[320px_1fr]">
        <div className="flex flex-col items-center gap-2 text-center">
          <ShieldIcon className="h-12 w-12 text-emerald-700" aria-hidden="true" />
          <p className="text-[10px] font-semibold uppercase tracking-wide text-emerald-700">
            Central Armed Police Force
          </p>
          <h3 className="font-display text-[19px] font-bold text-navy-800">
            <mark className="rounded bg-emerald-100 px-1">{iface.skillTestTitle}</mark>
          </h3>
          <p className="text-[12px] text-slate-500">Skill Test Language - English</p>
          <p className="flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-[11.5px] font-medium text-slate-600 shadow-sm">
            <ClockIcon className="h-3.5 w-3.5" aria-hidden="true" /> Test Duration: {iface.durationMinutes}{' '}
            Minutes
          </p>
          <button
            type="button"
            onClick={onStart}
            className="mt-2 flex items-center gap-2 rounded-md bg-emerald-700 px-6 py-2.5 text-[13px] font-semibold text-white transition-colors duration-150 hover:bg-emerald-800">

            <PlayIcon className="h-4 w-4 fill-current" aria-hidden="true" /> Start Test
          </button>
        </div>
        <div>
          <p className="mb-3 flex items-center gap-1.5 font-display text-[14px] font-bold text-navy-800">
            <FileTextIcon className="h-4 w-4 text-emerald-700" aria-hidden="true" /> Exam Instructions
          </p>
          <ul className="space-y-2.5">
            {iface.instructions.map((ins, i) => {
              const Icon = instructionIcons[i] ?? InfoIcon;
              return (
                <li
                  key={i}
                  className="flex items-start gap-2.5 rounded-lg bg-white/70 px-3 py-2.5 text-[12.5px] leading-relaxed text-slate-700 shadow-sm">

                  <Icon
                    className={`mt-0.5 h-4 w-4 shrink-0 ${instructionTones[i] ?? 'text-slate-500'}`}
                    aria-hidden="true" />

                  {ins}
                </li>);

            })}
          </ul>
        </div>
      </div>
    </div>);

}

export function CapfTypingScreen({ iface, onSubmit }: {iface: TranscriptionInterface;onSubmit: () => void;}) {
  const [typed, setTyped] = useState('');
  const [soundOn, setSoundOn] = useState(true);
  const { mm, ss } = useCountdown(iface.durationMinutes * 60, onSubmit);

  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto bg-emerald-50/60 p-5">
      <div className="mx-auto max-w-6xl">
        <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-emerald-100 text-emerald-700">
              <ShieldIcon className="h-6 w-6" aria-hidden="true" />
            </span>
            <div>
              <p className="font-display text-[15px] font-bold text-navy-800">{iface.orgName}</p>
              <p className="text-[11.5px] text-slate-500">{iface.examTitle}</p>
            </div>
          </div>
          <div className="text-right text-[11.5px] leading-relaxed text-slate-600">
            <p>
              <span className="font-semibold text-navy-800">Exam Date:</span> 30-09-2026
            </p>
            <p>
              <span className="font-semibold text-navy-800">Shift:</span> 3rd Shift (Evening)
            </p>
            <p>
              <span className="font-semibold text-navy-800">Language:</span> English
            </p>
          </div>
        </div>

        <SoundToggle
          on={soundOn}
          onToggle={() => setSoundOn((s) => !s)}
          iconColor="text-emerald-700"
          iconBg="bg-emerald-100" />


        <div className="grid gap-4 lg:grid-cols-[1fr_280px]">
          <div>
            <textarea
              value={typed}
              onChange={(e) => setTyped(e.target.value)}
              placeholder="Start typing..."
              autoFocus
              className="h-[380px] w-full resize-none rounded-xl border border-slate-200 bg-white p-4 text-[14px] leading-relaxed text-navy-800 shadow-card outline-none focus:border-emerald-600" />


            <button
              type="button"
              onClick={onSubmit}
              className="mt-4 rounded-md bg-emerald-700 px-6 py-2.5 text-[13px] font-semibold text-white transition-colors duration-150 hover:bg-emerald-800">

              Submit
            </button>
          </div>
          <ExamSidebarCard mm={mm} ss={ss} examLabel={iface.examTitle} accent="success" />
        </div>
      </div>
    </div>);

}

/* ---------- Common ---------- */

export function CommonConfigModal({
  onClose,
  onContinue



}: {onClose: () => void;onContinue: (minutes: number) => void;}) {
  const [tab, setTab] = useState<'manual' | 'exam'>('manual');
  const [backspace, setBackspace] = useState('Enabled');
  const [spelling, setSpelling] = useState('Half');
  const [capitalization, setCapitalization] = useState('None');
  const [punctuation, setPunctuation] = useState('None');
  const [minutes, setMinutes] = useState(50);
  const [highlightSlow, setHighlightSlow] = useState(true);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-navy-900/50 p-4 backdrop-blur-sm">
      <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-2xl">
        <h3 className="text-center font-display text-[17px] font-bold text-navy-800">
          Configure Your Transcription Session
        </h3>
        <p className="mt-1 text-center text-[11.5px] text-slate-500">
          Set your error-checking style: Manual or Exam Based.
        </p>

        <div className="mt-4 grid grid-cols-2 gap-1 rounded-lg bg-slate-100 p-1">
          <button
            type="button"
            onClick={() => setTab('manual')}
            className={`rounded-md py-1.5 text-[12.5px] font-semibold transition-colors duration-150 ${
            tab === 'manual' ? 'bg-primary text-white' : 'text-slate-600'}`
            }>

            Manual
          </button>
          <button
            type="button"
            onClick={() => setTab('exam')}
            className={`rounded-md py-1.5 text-[12.5px] font-semibold transition-colors duration-150 ${
            tab === 'exam' ? 'bg-primary text-white' : 'text-slate-600'}`
            }>

            By Exam
          </button>
        </div>

        {tab === 'manual' ?
        <div className="mt-4 space-y-3.5">
            <div className="grid grid-cols-2 gap-3">
              <label className="block">
                <span className="mb-1 block text-[11.5px] font-semibold text-navy-800">Backspace Status</span>
                <select
                value={backspace}
                onChange={(e) => setBackspace(e.target.value)}
                className="w-full rounded-md border border-slate-300 px-2.5 py-2 text-[12px] text-slate-700 outline-none focus:border-primary">

                  <option>Enabled</option>
                  <option>Disabled</option>
                  <option>Current Word Only</option>
                </select>
              </label>
              <label className="block">
                <span className="mb-1 block text-[11.5px] font-semibold text-navy-800">
                  Count Spelling Mistake as
                </span>
                <select
                value={spelling}
                onChange={(e) => setSpelling(e.target.value)}
                className="w-full rounded-md border border-slate-300 px-2.5 py-2 text-[12px] text-slate-700 outline-none focus:border-primary">

                  <option>Full</option>
                  <option>Half</option>
                  <option>Ignore</option>
                </select>
              </label>
              <label className="block">
                <span className="mb-1 block text-[11.5px] font-semibold text-navy-800">
                  Count Capitalization Mistake as
                </span>
                <select
                value={capitalization}
                onChange={(e) => setCapitalization(e.target.value)}
                className="w-full rounded-md border border-slate-300 px-2.5 py-2 text-[12px] text-slate-700 outline-none focus:border-primary">

                  <option>Full</option>
                  <option>Half</option>
                  <option>None</option>
                </select>
              </label>
              <label className="block">
                <span className="mb-1 block text-[11.5px] font-semibold text-navy-800">
                  Count Punctuation Mistake as
                </span>
                <select
                value={punctuation}
                onChange={(e) => setPunctuation(e.target.value)}
                className="w-full rounded-md border border-slate-300 px-2.5 py-2 text-[12px] text-slate-700 outline-none focus:border-primary">

                  <option>Full</option>
                  <option>Half</option>
                  <option>None</option>
                </select>
              </label>
            </div>
            <label className="block">
              <span className="mb-1 block text-[11.5px] font-semibold text-navy-800">Transcription Time</span>
              <select
              value={minutes}
              onChange={(e) => setMinutes(Number(e.target.value))}
              className="w-full rounded-md border border-slate-300 px-2.5 py-2 text-[12px] text-slate-700 outline-none focus:border-primary">

                {[20, 30, 40, 50, 60].map((m) =>
              <option key={m} value={m}>
                    {m} Minutes
                  </option>
              )}
              </select>
            </label>
            <button
            type="button"
            onClick={() => setHighlightSlow((s) => !s)}
            className="flex w-full items-center justify-between rounded-md border border-slate-200 px-3 py-2.5 text-left">

              <span className="text-[12px] text-slate-600">Highlight words I read or spelled slowly</span>
              <span
              className={`relative h-4 w-8 shrink-0 rounded-full transition-colors duration-150 ${
              highlightSlow ? 'bg-success' : 'bg-slate-300'}`
              }>

                <span
                className={`absolute top-[2px] h-3 w-3 rounded-full bg-white transition-transform duration-150 ${
                highlightSlow ? 'translate-x-[18px]' : 'translate-x-[2px]'}`
                } />

              </span>
            </button>
          </div> :

        <p className="mt-4 rounded-lg bg-primary-50 p-3 text-[11.5px] text-primary-700">
            Exam-based scoring will automatically apply the official mistake rules of a selected exam
            pattern.
          </p>
        }

        <button
          type="button"
          onClick={() => onContinue(minutes)}
          className="mt-5 w-full rounded-md bg-primary py-2.5 text-[13px] font-semibold text-white transition-colors duration-150 hover:bg-primary-700">

          Save and Continue
        </button>
        <button
          type="button"
          onClick={onClose}
          className="mt-2 w-full text-center text-[11.5px] text-slate-400 transition-colors duration-150 hover:text-slate-600">

          Cancel
        </button>
      </div>
    </div>);

}

export function CommonTypingScreen({
  minutes,
  onSubmit



}: {minutes: number;onSubmit: () => void;}) {
  const [typed, setTyped] = useState('');
  const [soundOn, setSoundOn] = useState(true);
  const [paused, setPaused] = useState(false);
  const [remaining, setRemaining] = useState(minutes * 60);

  useEffect(() => {
    if (paused) return;
    if (remaining <= 0) {
      onSubmit();
      return;
    }
    const timer = setInterval(() => setRemaining((r) => Math.max(0, r - 1)), 1000);
    return () => clearInterval(timer);
  }, [remaining, paused, onSubmit]);

  const mm = String(Math.floor(remaining / 60)).padStart(2, '0');
  const ss = String(remaining % 60).padStart(2, '0');

  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto bg-indigo-50/40 p-6">
      <div className="fixed right-6 top-6 rounded-lg border border-slate-200 bg-white px-4 py-2 text-[13px] font-bold text-navy-800 shadow-card">
        Time Left: <span className="text-primary">{mm}:{ss}</span>
      </div>
      <div className="mx-auto max-w-2xl pt-4">
        <div className="mb-4 rounded-lg bg-sky-100 py-2.5 text-center font-display text-[13px] italic font-semibold text-navy-800">
          Balaji Typing &amp; Steno College
        </div>
        <SoundToggle
          on={soundOn}
          onToggle={() => setSoundOn((s) => !s)}
          iconColor="text-violet-600"
          iconBg="bg-violet-50" />

        <textarea
          value={typed}
          onChange={(e) => setTyped(e.target.value)}
          placeholder="Start typing..."
          autoFocus
          className="h-[300px] w-full resize-none rounded-xl border border-slate-200 bg-white p-4 text-[14px] leading-relaxed text-navy-800 shadow-card outline-none focus:border-primary" />


        <div className="mt-4 flex justify-center gap-3">
          <button
            type="button"
            onClick={onSubmit}
            className="rounded-md bg-navy-900 px-6 py-2.5 text-[13px] font-semibold text-white transition-colors duration-150 hover:bg-navy-800">

            Submit
          </button>
          <button
            type="button"
            onClick={() => setPaused((p) => !p)}
            className="flex items-center gap-1.5 rounded-md border border-slate-300 bg-white px-5 py-2.5 text-[13px] font-semibold text-navy-800 transition-colors duration-150 hover:bg-slate-50">

            <PauseIcon className="h-4 w-4" aria-hidden="true" /> {paused ? 'Resume Test' : 'Pause Test'}
          </button>
        </div>
      </div>
    </div>);

}

export { ScaleIcon, LandmarkIcon, GavelIcon };
