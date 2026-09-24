import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  ClipboardListIcon,
  ClockIcon,
  FileTextIcon,
  UploadCloudIcon,
  RotateCcwIcon,
  EyeIcon,
  PlayIcon,
  XIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
  LightbulbIcon,
  UserIcon,
  LockIcon,
  UserCircle2Icon,
  KeyboardIcon,
  ScaleIcon,
  MicIcon,
  LandmarkIcon,
  ShieldIcon,
  Building2Icon,
  BookOpenIcon,
  AwardIcon,
  TrainFrontIcon,
  GavelIcon,
  SettingsIcon,
  MaximizeIcon,
  MinusIcon,
  PlusIcon,
  Volume2Icon,
  VolumeXIcon,
  InfoIcon } from
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

const passagePreview =
'The Government of India is committed to providing better services to the citizens through Digital India. This initiative aims to transform India into a digitally empowered society and knowledge economy. It will help in improving governance, enhancing transparency and creating new opportunities for all.';

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

function ExamLoginCover({ onStartTest }: {onStartTest: () => void;}) {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col bg-white">
      <div className="h-10 shrink-0 bg-[#1D6FC4]" />

      <div className="flex flex-wrap items-start justify-between gap-4 bg-[#3A3A3A] px-5 py-3 text-white">
        <div>
          <p className="text-[13px]">System Name :</p>
          <p className="font-display text-[22px] font-extrabold text-[#FFE100]">C001</p>
          <p className="mt-2 max-w-xl text-[11px] text-white/80">
            Kindly contact the invigilator if there are any discrepancies in the Name and Photograph
            displayed on the screen or if the photograph is not yours
          </p>
        </div>
        <div className="flex items-start gap-3">
          <div className="text-right">
            <p className="font-display text-[20px] font-extrabold text-[#FFE100]">
              Candidate Name : VIKAS
            </p>
            <p className="text-[12px] font-semibold text-[#FFE100]">AIIMS CRE LDC UDC DEO Typing</p>
          </div>
          <span className="grid h-16 w-16 shrink-0 place-items-center rounded-md border border-slate-300 bg-white">
            <UserCircle2Icon className="h-12 w-12 text-slate-400" aria-hidden="true" />
          </span>
        </div>
      </div>

      <div className="flex flex-1 items-center justify-center bg-slate-100">
        <div className="w-full max-w-[340px] overflow-hidden rounded-md border border-slate-300 bg-white shadow-lg">
          <p className="border-b border-slate-300 bg-slate-200 px-4 py-2 text-[13px] font-bold text-navy-800">
            Login
          </p>
          <div className="space-y-4 p-5">
            <div className="flex items-center gap-2">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded bg-slate-200 text-slate-700">
                <UserIcon className="h-4 w-4" aria-hidden="true" />
              </span>
              <input
                type="text"
                defaultValue="11111"
                className="w-full rounded border border-slate-300 px-2.5 py-2 text-[13px] outline-none focus:border-primary" />

              <span className="grid h-9 w-9 shrink-0 place-items-center rounded bg-slate-200 text-slate-700">
                <KeyboardIcon className="h-4 w-4" aria-hidden="true" />
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded bg-slate-200 text-slate-700">
                <LockIcon className="h-4 w-4" aria-hidden="true" />
              </span>
              <input
                type="password"
                defaultValue="12345"
                className="w-full rounded border border-slate-300 px-2.5 py-2 text-[13px] outline-none focus:border-primary" />

              <span className="grid h-9 w-9 shrink-0 place-items-center rounded bg-slate-200 text-slate-700">
                <KeyboardIcon className="h-4 w-4" aria-hidden="true" />
              </span>
            </div>
            <button
              type="button"
              onClick={onStartTest}
              className="w-full rounded bg-gradient-to-b from-[#5BC0EB] to-[#1D8FD8] py-2.5 text-[13px] font-semibold text-white shadow transition-opacity duration-150 hover:opacity-90">

              Start Test
            </button>
          </div>
        </div>
      </div>

      <p className="shrink-0 bg-[#3A3A3A] py-1.5 text-center text-[10.5px] text-white/70">
        Version Typingmitra.in
      </p>
    </div>);

}

const demoPassage =
'The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.';

const instructionRows = [
{ n: 1, type: 'Practice Typing test (English) 1', words: 5000, timing: 2 },
{ n: 2, type: 'Practice Typing test (English) 2', words: 5000, timing: 2 },
{ n: 3, type: 'Actual Typing test (English)', words: 5000, timing: 10 }];


const instructionPoints = [
'Read the given instructions carefully to avoid disqualification, error, and time loss. After reading the instructions carefully, click on the check box to proceed.',
'First Practice Test: After the candidate logs in to the system, practice test will commence and will be completed in 2 mins where in candidate will check keyboard and keys operations. There after 10 mins time will be provided to candidates to get the keyboard replaced, if required.',
'Second Practice Test: Second practice test will automatically start for 2 min after 10 min break time as mentioned in Point No. 2. The purpose of the second practice test will be to ensure proper functioning of the keyboard replaced. This will be the last opportunity to resolve keyboard/other related issues.',
'Before the commencement of the actual typing test a Typing Test Declaration form will be signed by the candidate.'];


function ExamInstructionsScreen({
  designation,
  onPrevious,
  onReady




}: {designation: string;onPrevious: () => void;onReady: () => void;}) {
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="fixed inset-0 z-[100] flex flex-col bg-white">
      <div className="flex shrink-0 justify-center bg-[#3E5C96] py-2">
        <span className="rounded-t-sm bg-[#28345E] px-8 py-2 font-display text-[15px] font-bold text-white">
          Designation: {designation}
        </span>
      </div>

      <div className="grid flex-1 overflow-hidden lg:grid-cols-[3fr_1fr]">
        <div className="flex min-w-0 flex-col overflow-hidden">
          <p className="border-b border-slate-200 bg-[#DCEEFB] px-4 py-2.5 text-[14px] font-bold text-navy-800">
            Important Instructions
          </p>
          <div className="flex-1 overflow-y-auto px-8 py-6">
            <p className="mb-4 text-[15px] font-semibold text-navy-800">
              Instructions to candidates for Typing Exam in English on desktop computer.
            </p>

            <table className="mb-5 w-full max-w-[700px] border-collapse text-left text-[13.5px]">
              <thead>
                <tr className="bg-slate-50">
                  <th className="border border-slate-300 px-3.5 py-2.5 font-semibold">Sr No</th>
                  <th className="border border-slate-300 px-3.5 py-2.5 font-semibold">Passage Type</th>
                  <th className="border border-slate-300 px-3.5 py-2.5 font-semibold">Word Count</th>
                  <th className="border border-slate-300 px-3.5 py-2.5 font-semibold">Timing</th>
                </tr>
              </thead>
              <tbody>
                {instructionRows.map((r) =>
                <tr key={r.n}>
                    <td className="border border-slate-300 px-3.5 py-2.5 text-center">{r.n}</td>
                    <td className="border border-slate-300 px-3.5 py-2.5">{r.type}</td>
                    <td className="border border-slate-300 px-3.5 py-2.5 text-center">{r.words}</td>
                    <td className="border border-slate-300 px-3.5 py-2.5 text-center">{r.timing}</td>
                  </tr>
                )}
              </tbody>
            </table>

            <p className="mb-2.5 text-[15px] font-semibold text-navy-800">Dear Candidates,</p>
            <ol className="list-decimal space-y-3.5 pl-5 text-[14px] leading-relaxed text-slate-700">
              {instructionPoints.map((p, i) => {
                const [bold, ...rest] = p.split(': ');
                const hasBold = rest.length > 0;
                return (
                  <li key={i}>
                    {hasBold ?
                    <>
                        <span className="font-bold text-navy-800">{bold}:</span> {rest.join(': ')}
                      </> :

                    p
                    }
                  </li>);

              })}
            </ol>

            <label className="mt-5 flex items-start gap-2.5 text-[13px] leading-relaxed text-amber-700">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="mt-0.5 h-4 w-4 shrink-0 accent-primary" />

              I have read and understood the instructions. All computer hardware allotted to me are in
              proper working condition. I declare that I am not in possession of / not wearing / not
              carrying any prohibited gadget like mobile phone, bluetooth devices etc. /any prohibited
              material with me into the Examination Hall.I agree that in case of not adhering to the
              instructions, I shall be liable to be debarred from this Test and/or to disciplinary action,
              which may include ban from future Tests / Examinations.
            </label>
          </div>

          <div className="flex shrink-0 items-center justify-between border-t border-slate-200 px-6 py-3">
            <button
              type="button"
              onClick={onPrevious}
              className="flex items-center gap-1.5 rounded-md border border-slate-300 px-4 py-2 text-[12.5px] font-medium text-slate-600 transition-colors duration-150 hover:bg-slate-50">

              <ChevronLeftIcon className="h-3.5 w-3.5" aria-hidden="true" /> Previous
            </button>
            <button
              type="button"
              disabled={!agreed}
              onClick={onReady}
              className="rounded-md bg-primary px-6 py-2.5 text-[12.5px] font-semibold text-white transition-colors duration-150 hover:bg-primary-700 disabled:cursor-not-allowed disabled:opacity-40">

              I am ready to begin
            </button>
          </div>
        </div>

        <div className="flex flex-col items-center gap-3 border-l border-slate-200 bg-slate-100 py-8">
          <span className="grid h-28 w-28 place-items-center rounded-md border border-slate-300 bg-white">
            <UserCircle2Icon className="h-20 w-20 text-slate-400" aria-hidden="true" />
          </span>
          <p className="font-display text-[16px] font-bold text-primary">VIKAS</p>
        </div>
      </div>

      <p className="shrink-0 bg-[#5B6B8C] py-1.5 text-center text-[10.5px] text-white/80">
        Version : 17.07.00
      </p>
    </div>);

}

function FontStepper({
  label,
  value,
  onChange




}: {label: string;value: number;onChange: (v: number) => void;}) {
  return (
    <div className="mb-3.5 flex items-center justify-between">
      <span className="text-[12.5px] text-navy-800">{label}:</span>
      <div className="flex items-center gap-2.5">
        <button
          type="button"
          onClick={() => onChange(Math.max(10, value - 1))}
          className="grid h-7 w-7 place-items-center rounded-full bg-primary text-white hover:bg-primary-700"
          aria-label={`Decrease ${label}`}>

          <MinusIcon className="h-3.5 w-3.5" aria-hidden="true" />
        </button>
        <span className="w-[38px] text-center text-[12.5px] font-semibold text-navy-800">{value}px</span>
        <button
          type="button"
          onClick={() => onChange(Math.min(32, value + 1))}
          className="grid h-7 w-7 place-items-center rounded-full bg-primary text-white hover:bg-primary-700"
          aria-label={`Increase ${label}`}>

          <PlusIcon className="h-3.5 w-3.5" aria-hidden="true" />
        </button>
      </div>
    </div>);

}

function SettingsModal({
  onClose,
  passageFontSize,
  setPassageFontSize,
  typingFontSize,
  setTypingFontSize




}: {onClose: () => void;passageFontSize: number;setPassageFontSize: (v: number) => void;typingFontSize: number;setTypingFontSize: (v: number) => void;}) {
  const [mobileMode, setMobileMode] = useState(false);

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center bg-navy-900/50 p-4">
      <div className="w-full max-w-sm rounded-xl bg-white p-5 shadow-2xl">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="font-display text-[16px] font-bold text-navy-800">Test Settings</h3>
          <button
            type="button"
            onClick={onClose}
            className="grid h-7 w-7 place-items-center rounded-full text-slate-400 hover:bg-slate-100 hover:text-slate-600"
            aria-label="Close">

            <XIcon className="h-3.5 w-3.5" aria-hidden="true" />
          </button>
        </div>

        <FontStepper label="Passage Font Size" value={passageFontSize} onChange={setPassageFontSize} />
        <FontStepper label="Typing Font Size" value={typingFontSize} onChange={setTypingFontSize} />

        <label className="mb-3.5 block">
          <span className="mb-1.5 block text-[12px] font-semibold text-navy-800">Font Family:</span>
          <select className="w-full rounded-md border border-slate-300 px-3 py-2 text-[12.5px] text-slate-600 outline-none focus:border-primary">
            <option>Arial</option>
            <option>Times New Roman</option>
            <option>Mangal</option>
            <option>Courier New</option>
          </select>
        </label>

        <label className="mb-3.5 block">
          <span className="mb-1.5 block text-[12px] font-semibold text-navy-800">Backspace Behavior:</span>
          <select className="w-full rounded-md border border-slate-300 px-3 py-2 text-[12.5px] text-slate-600 outline-none focus:border-primary">
            <option>Disabled</option>
            <option>Current Word Only</option>
            <option>Full Backspace</option>
          </select>
        </label>

        <label className="mb-3.5 block">
          <span className="mb-1.5 block text-[12px] font-semibold text-navy-800">Screen Layout:</span>
          <select className="w-full rounded-md border border-slate-300 px-3 py-2 text-[12.5px] text-slate-600 outline-none focus:border-primary">
            <option>TCS Mode</option>
            <option>Default</option>
            <option>SSC Mode</option>
            <option>Custom</option>
          </select>
        </label>

        <div>
          <span className="mb-1.5 block text-[12px] font-semibold text-navy-800">Mobile Mode:</span>
          <button
            type="button"
            role="switch"
            aria-checked={mobileMode}
            onClick={() => setMobileMode((v) => !v)}
            className="flex items-center gap-2.5 text-left">

            <span
              className={`relative h-4 w-8 shrink-0 rounded-full transition-colors duration-150 ${
              mobileMode ? 'bg-primary' : 'bg-slate-300'}`
              }>

              <span
                className={`absolute top-[2px] h-3 w-3 rounded-full bg-white transition-transform duration-150 ${
                mobileMode ? 'translate-x-[18px]' : 'translate-x-[2px]'}`
                } />

            </span>
            <span className="text-[12.5px] text-slate-600">{mobileMode ? 'Enabled' : 'Disabled'}</span>
          </button>
        </div>
      </div>
    </div>);

}

function ExamTestScreen({
  title,
  seconds,
  onFinish,
  onCancel,
  onShowInstructions




}: {title: string;seconds: number;onFinish: () => void;onCancel: () => void;onShowInstructions: () => void;}) {
  const [tab, setTab] = useState<'mock' | 'actual'>('actual');
  const [typed, setTyped] = useState('');
  const [remaining, setRemaining] = useState(seconds);
  const [passageFontSize, setPassageFontSize] = useState(20);
  const [typingFontSize, setTypingFontSize] = useState(23);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [soundOn, setSoundOn] = useState(false);

  useEffect(() => {
    setRemaining(tab === 'mock' ? 120 : seconds);
    setTyped('');
  }, [tab, seconds]);

  useEffect(() => {
    if (remaining <= 0) return;
    const timer = setInterval(() => setRemaining((r) => Math.max(0, r - 1)), 1000);
    return () => clearInterval(timer);
  }, [remaining]);

  const mm = String(Math.floor(remaining / 60)).padStart(2, '0');
  const ss = String(remaining % 60).padStart(2, '0');

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen?.().catch(() => {});
    } else {
      document.exitFullscreen?.().catch(() => {});
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex flex-col bg-white">
      <div className="flex flex-wrap items-center justify-between gap-3 bg-[#2B2B2B] px-5 py-3">
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={onCancel}
            className="flex items-center gap-1.5 rounded bg-white/15 px-3.5 py-2 text-[13.5px] font-semibold text-white hover:bg-white/25">

            <ChevronLeftIcon className="h-4 w-4" aria-hidden="true" /> Back
          </button>
          <p className="text-[17px] font-semibold text-white">{title}</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => setTypingFontSize((f) => Math.max(11, f - 1))}
            className="rounded bg-white/15 px-3.5 py-2 text-[13.5px] font-bold text-white hover:bg-white/25">

            A-
          </button>
          <button
            type="button"
            onClick={() => setTypingFontSize((f) => Math.min(32, f + 1))}
            className="rounded bg-white/15 px-3.5 py-2 text-[13.5px] font-bold text-white hover:bg-white/25">

            A+
          </button>
          <button
            type="button"
            onClick={() => setSoundOn((s) => !s)}
            className={`flex items-center gap-1.5 rounded px-4 py-2 text-[13.5px] font-bold text-white ${
            soundOn ? 'bg-success' : 'bg-danger'}`
            }>

            {soundOn ?
            <Volume2Icon className="h-4 w-4" aria-hidden="true" /> :

            <VolumeXIcon className="h-4 w-4" aria-hidden="true" />
            }
            Sound: {soundOn ? 'ON' : 'OFF'}
          </button>
          <button
            type="button"
            onClick={() => setSettingsOpen(true)}
            className="flex items-center gap-1.5 rounded bg-teal-600 px-4 py-2 text-[13.5px] font-bold text-white hover:bg-teal-700">

            <SettingsIcon className="h-4 w-4" aria-hidden="true" /> Settings
          </button>
          <button
            type="button"
            onClick={toggleFullScreen}
            className="flex items-center gap-1.5 rounded bg-teal-600 px-4 py-2 text-[13.5px] font-bold text-white hover:bg-teal-700">

            <MaximizeIcon className="h-4 w-4" aria-hidden="true" /> Full Screen
          </button>
          <button
            type="button"
            onClick={onShowInstructions}
            className="flex items-center gap-1.5 rounded bg-slate-700 px-4 py-2 text-[13.5px] font-bold text-white hover:bg-slate-800">

            <InfoIcon className="h-4 w-4" aria-hidden="true" /> Instructions
          </button>
        </div>
      </div>

      <div className="bg-[#1D6FC4] px-5 py-2 text-[15px] font-bold text-white">Group A</div>

      <div className="grid bg-white lg:grid-cols-[3fr_1fr]">
        <div className="flex items-center justify-between gap-2 px-5 py-2.5 lg:border-r lg:border-slate-200">
          <div className="flex gap-2.5">
            {[
            { id: 'mock' as const, label: 'Mock Typing' },
            { id: 'actual' as const, label: 'Actual Typing' }].
            map((t) =>
            <button
              key={t.id}
              type="button"
              onClick={() => setTab(t.id)}
              className={`rounded px-5 py-2 text-[14px] font-semibold transition-colors duration-150 ${
              tab === t.id ? 'bg-primary text-white' : 'bg-slate-100 text-slate-500 hover:bg-slate-200'}`
              }>

                {t.label}
              </button>
            )}
          </div>
          <p className="text-[16px] font-semibold text-navy-800">
            Time Left: <span className="font-extrabold text-danger">{mm}:{ss}</span>
          </p>
        </div>
        <div className="flex items-center gap-3.5 px-5 py-2.5">
          <span className="grid h-11 w-11 place-items-center rounded-md border border-slate-300 bg-white">
            <UserCircle2Icon className="h-7 w-7 text-slate-400" aria-hidden="true" />
          </span>
          <span className="text-[15px] font-semibold text-navy-800">Candidate</span>
        </div>
      </div>

      <div className="grid lg:grid-cols-[3fr_1fr]">
        <div className="bg-[#1D6FC4] px-5 py-2 text-[14px] font-semibold text-white">
          Keyboard Layout: QWERTY
        </div>
        <div className="bg-white" />
      </div>

      <div className="flex-1 overflow-y-auto bg-white py-4">
        <div className="grid h-full gap-0 lg:grid-cols-[3fr_1fr]">
          <div className="flex flex-col gap-3 px-5 lg:border-r lg:border-slate-200">
            <div
              className="h-[150px] overflow-y-auto rounded-md border border-slate-300 p-3 leading-relaxed"
              style={{ fontSize: passageFontSize }}>

              {demoPassage.split('').map((ch, i) =>
              <span key={i} className={i < typed.length ? 'text-slate-400' : 'text-navy-800'}>
                  {ch}
                </span>
              )}
            </div>

            <textarea
              value={typed}
              onChange={(e) => setTyped(e.target.value)}
              placeholder="Start typing here..."
              autoFocus
              style={{ fontSize: typingFontSize }}
              className="h-[220px] w-full resize-none rounded-md border border-slate-300 p-3 leading-relaxed outline-none focus:border-primary" />


            <div className="mt-auto flex justify-start border-t border-slate-200 pt-4">
              <button
                type="button"
                onClick={onCancel}
                className="rounded-md bg-danger px-6 py-2.5 text-[13px] font-semibold text-white transition-colors duration-150 hover:bg-red-700">

                Cancel
              </button>
            </div>
          </div>

          <div className="flex flex-col px-5">
            <div className="mt-auto flex justify-end border-t border-slate-200 pt-4">
              <button
                type="button"
                onClick={onFinish}
                className="rounded-md bg-teal-600 px-6 py-2.5 text-[13px] font-semibold text-white transition-colors duration-150 hover:bg-teal-700">

                Submit
              </button>
            </div>
          </div>
        </div>
      </div>

      {settingsOpen &&
      <SettingsModal
        onClose={() => setSettingsOpen(false)}
        passageFontSize={passageFontSize}
        setPassageFontSize={setPassageFontSize}
        typingFontSize={typingFontSize}
        setTypingFontSize={setTypingFontSize} />

      }
    </div>);

}

export function PracticeSetup() {
  const { mode = 'eng-typing' } = useParams();
  const navigate = useNavigate();
  const isSteno = mode.includes('steno');
  const title = modeTitle[mode] ?? 'Self Assessment';

  const [duration, setDuration] = useState('10 Min');
  const [passageSource, setPassageSource] = useState<'random' | 'paste' | 'audio'>('random');
  const [pattern, setPattern] = useState('steno');
  const [patternModalOpen, setPatternModalOpen] = useState(false);
  const [stage, setStage] = useState<'setup' | 'login' | 'instructions' | 'test'>('setup');
  const selectedPattern = patterns.find((p) => p.id === pattern);

  if (stage === 'login') {
    return <ExamLoginCover onStartTest={() => setStage('instructions')} />;
  }

  if (stage === 'instructions') {
    return (
      <ExamInstructionsScreen
        designation={selectedPattern ? selectedPattern.title : 'Typing Exam'}
        onPrevious={() => setStage('login')}
        onReady={() => setStage('test')} />);


  }

  if (stage === 'test') {
    const durationSeconds = parseInt(duration, 10) * 60;
    return (
      <ExamTestScreen
        title={`${selectedPattern ? selectedPattern.title : title} Live Typing Test`}
        seconds={durationSeconds}
        onFinish={() => navigate('/test-analysis/typing')}
        onCancel={() => setStage('setup')}
        onShowInstructions={() => setStage('instructions')} />);


  }

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

          {passageSource !== 'audio' &&
          <div className="mb-4 rounded-lg border border-slate-200 p-3">
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-md bg-primary-50 text-primary">
                <FileTextIcon className="h-[18px] w-[18px]" aria-hidden="true" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="flex items-center gap-1.5">
                  <span className="truncate text-[12.5px] font-semibold text-navy-800">
                    Typing_Passage_01.txt
                  </span>
                  <span className="rounded bg-primary-50 px-1.5 py-[1px] text-[9px] font-bold text-primary-700">
                    TXT
                  </span>
                </span>
                <span className="block text-[10.5px] text-slate-500">(24 KB)</span>
              </span>
            </div>
            <div className="mt-2.5 h-[150px] overflow-y-auto rounded-md bg-slate-50 p-3 text-[13px] leading-relaxed text-slate-600">
              {passagePreview}
            </div>
            <div className="mt-2.5 flex gap-2">
              <button
                type="button"
                className="flex flex-1 items-center justify-center gap-1.5 rounded-md border border-slate-300 py-1.5 text-[11px] font-medium text-slate-600 transition-colors duration-150 hover:bg-slate-50">

                <RotateCcwIcon className="h-3.5 w-3.5" aria-hidden="true" /> Replace
              </button>
              <button
                type="button"
                className="flex flex-1 items-center justify-center gap-1.5 rounded-md border border-slate-300 py-1.5 text-[11px] font-medium text-slate-600 transition-colors duration-150 hover:bg-slate-50">

                <EyeIcon className="h-3.5 w-3.5" aria-hidden="true" /> View
              </button>
            </div>
          </div>
          }

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
            onClick={() => setStage('login')}
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
