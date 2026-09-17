import React, { useState } from 'react';
import {
  HeartIcon,
  BookmarkIcon,
  EyeOffIcon,
  EyeIcon,
  ClockIcon,
  GaugeIcon,
  InfoIcon,
  MinusIcon,
  PlusIcon,
  PlayIcon,
  KeyboardIcon,
  MaximizeIcon,
  RotateCcwIcon,
  FileTextIcon } from
'lucide-react';
import { StudentLayout } from '../../components/student/StudentLayout';
import { Breadcrumbs } from '../../components/common/PageHeading';
import { WordLengthSelect } from '../../components/steno/WordLengthSelect';
import { InterfacePicker } from '../../components/steno/InterfacePicker';

const speeds = Array.from({ length: 20 }, (_, i) => `${60 + i * 5} WPM`);
const fluctuations = ['Off', 'Low (±5%)', 'Medium (±10%)', 'High (±15%)'];

export function StenoPractice() {
  const [speed, setSpeed] = useState('100 WPM');
  const [fluctuation, setFluctuation] = useState('Off');
  const [volume, setVolume] = useState(60);
  const [seen, setSeen] = useState<'unseen' | 'seen'>('unseen');
  const [wordLength, setWordLength] = useState('Full Length');
  const [showInterfaces, setShowInterfaces] = useState(false);
  const [selectedInterface, setSelectedInterface] = useState('ssc-d');

  return (
    <StudentLayout>
      <div className="mb-3">
        <Breadcrumbs
          crumbs={[
          { label: 'Home', to: '/' },
          { label: 'English Steno Exam', to: '/english-steno' },
          { label: 'Practice' }]
          } />
        
      </div>

      <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-card">
        {/* Dictation header */}
        <div className="flex flex-wrap items-start gap-4 border-b border-slate-100 pb-4">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-primary-50 text-primary">
            <FileTextIcon className="h-6 w-6" aria-hidden="true" />
          </span>
          <div className="min-w-0">
            <h2 className="font-display text-[24px] font-bold leading-tight text-navy-800">
              Kailash Chandra (1000 Words)
            </h2>
            <p className="mt-0.5 text-[12.5px] text-slate-500">
              Topic – Company Clause Impact • Difficulty – Easy • Words – 1000 • Time – 10 Min
            </p>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <button
              type="button"
              aria-label="Add to favourites"
              className="grid h-9 w-9 place-items-center rounded-md border border-slate-300 text-slate-500 transition-colors duration-150 hover:bg-slate-50">
              
              <HeartIcon className="h-4 w-4" aria-hidden="true" />
            </button>
            <button
              type="button"
              aria-label="Bookmark dictation"
              className="grid h-9 w-9 place-items-center rounded-md border border-slate-300 text-slate-500 transition-colors duration-150 hover:bg-slate-50">
              
              <BookmarkIcon className="h-4 w-4" aria-hidden="true" />
            </button>
            <span className="flex items-center gap-1.5 rounded-md border border-slate-300 px-3 py-2 text-[12.5px] font-medium text-slate-600">
              <EyeOffIcon className="h-4 w-4" aria-hidden="true" /> Unseen
            </span>
            <span className="flex items-center gap-1.5 rounded-md border border-rose-200 px-3 py-2 text-[12.5px] font-semibold text-danger">
              <ClockIcon className="h-4 w-4" aria-hidden="true" /> 10:00
            </span>
          </div>
        </div>

        {/* Controls */}
        <div className="grid gap-5 py-4 lg:grid-cols-3">
          <label className="block">
            <span className="mb-1.5 flex items-center gap-1.5 text-[13px] font-semibold text-navy-800">
              Dictation Speed
              <span
                className="grid h-4 w-4 place-items-center rounded-full bg-danger text-white"
                aria-hidden="true">
                
                <InfoIcon className="h-2.5 w-2.5" />
              </span>
            </span>
            <span className="relative block">
              <GaugeIcon
                className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
                aria-hidden="true" />
              
              <select
                value={speed}
                onChange={(e) => setSpeed(e.target.value)}
                className="w-full appearance-none rounded-md border border-slate-300 py-2.5 pl-9 pr-8 text-[13px] font-medium text-navy-800 outline-none focus:border-primary">
                
                {speeds.map((s) =>
                <option key={s} value={s}>
                    {s}
                  </option>
                )}
              </select>
            </span>
          </label>

          <label className="block">
            <span className="mb-1.5 flex items-center gap-1.5 text-[13px] font-semibold text-navy-800">
              Fluctuation Level
              <span
                className="grid h-4 w-4 place-items-center rounded-full bg-danger text-white"
                aria-hidden="true">
                
                <InfoIcon className="h-2.5 w-2.5" />
              </span>
            </span>
            <select
              value={fluctuation}
              onChange={(e) => setFluctuation(e.target.value)}
              className="w-full rounded-md border border-slate-300 px-3 py-2.5 text-[13px] text-navy-800 outline-none focus:border-primary">
              
              {fluctuations.map((f) =>
              <option key={f} value={f}>
                  {f}
                </option>
              )}
            </select>
          </label>

          <div>
            <p className="mb-1.5 text-[13px] font-semibold text-navy-800">Volume Control</p>
            <div className="flex items-center gap-3">
              <button
                type="button"
                aria-label="Decrease volume"
                className="grid h-8 w-8 place-items-center rounded-md border border-slate-300 text-slate-600 transition-colors duration-150 hover:bg-slate-50"
                onClick={() => setVolume((v) => Math.max(0, v - 10))}>
                
                <MinusIcon className="h-4 w-4" aria-hidden="true" />
              </button>
              <input
                type="range"
                min={0}
                max={100}
                value={volume}
                onChange={(e) => setVolume(Number(e.target.value))}
                aria-label="Volume"
                className="h-1.5 flex-1 cursor-pointer appearance-none rounded-full bg-slate-200 accent-navy-800"
                style={{
                  background: `linear-gradient(to right, #0A2E6B ${volume}%, #E2E8F0 ${volume}%)`
                }} />
              
              <button
                type="button"
                aria-label="Increase volume"
                className="grid h-8 w-8 place-items-center rounded-md border border-slate-300 text-slate-600 transition-colors duration-150 hover:bg-slate-50"
                onClick={() => setVolume((v) => Math.min(100, v + 10))}>
                
                <PlusIcon className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>

        {/* Mark as */}
        <div className="pb-4">
          <p className="mb-1.5 text-[13px] font-semibold text-navy-800">Mark as</p>
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => setSeen('unseen')}
              aria-pressed={seen === 'unseen'}
              className={`flex items-center gap-1.5 rounded-md px-4 py-2 text-[12.5px] font-medium transition-colors duration-150 ${
              seen === 'unseen' ?
              'bg-navy-900 text-white' :
              'border border-slate-300 bg-white text-slate-600 hover:bg-slate-50'}`
              }>
              
              <EyeOffIcon className="h-4 w-4" aria-hidden="true" /> Unseen
            </button>
            <button
              type="button"
              onClick={() => setSeen('seen')}
              aria-pressed={seen === 'seen'}
              className={`flex items-center gap-1.5 rounded-md px-4 py-2 text-[12.5px] font-medium transition-colors duration-150 ${
              seen === 'seen' ?
              'bg-navy-900 text-white' :
              'border border-slate-300 bg-white text-slate-600 hover:bg-slate-50'}`
              }>
              
              <EyeIcon className="h-4 w-4" aria-hidden="true" /> Seen
            </button>
            <button
              type="button"
              className="flex items-center gap-1.5 rounded-md border border-slate-300 bg-white px-4 py-2 text-[12.5px] font-medium text-slate-600 transition-colors duration-150 hover:bg-slate-50">
              
              <FileTextIcon className="h-4 w-4" aria-hidden="true" /> Show Transcription
            </button>
          </div>
        </div>

        {/* Word length */}
        <div className="pb-4">
          <WordLengthSelect value={wordLength} onChange={setWordLength} totalWords={1018} />
        </div>

        {/* Timeline */}
        <div className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3">
          <span className="mb-2 block h-1 w-full rounded-full bg-slate-200">
            <span className="block h-full w-[2%] rounded-full bg-danger" />
          </span>
          <div className="flex items-center text-[12.5px] text-slate-600">
            <span className="flex items-center gap-1.5">
              <RotateCcwIcon className="h-3.5 w-3.5" aria-hidden="true" /> 0:00
            </span>
            <span className="ml-auto flex items-center gap-2">
              10:30
              <RotateCcwIcon className="h-3.5 w-3.5" aria-hidden="true" />
            </span>
          </div>
        </div>

        {/* Interface picker */}
        {showInterfaces &&
        <div className="mt-4">
            <InterfacePicker selected={selectedInterface} onSelect={setSelectedInterface} />
          </div>
        }

        {/* Action row */}
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <button
            type="button"
            className="flex min-w-[200px] items-center justify-center gap-2 rounded-md bg-primary py-3 text-[14px] font-semibold text-white transition-colors duration-150 hover:bg-primary-700">
            
            <PlayIcon className="h-4 w-4 fill-current" aria-hidden="true" /> Play
          </button>
          <button
            type="button"
            onClick={() => setShowInterfaces(true)}
            className="flex min-w-[200px] items-center justify-center gap-2 rounded-md bg-danger py-3 text-[14px] font-semibold text-white transition-colors duration-150 hover:bg-[#bb2d3b]">
            
            <KeyboardIcon className="h-4 w-4" aria-hidden="true" /> Transcribe Now
          </button>
          <button
            type="button"
            className="ml-auto flex items-center justify-center gap-2 rounded-md border border-slate-300 px-6 py-3 text-[14px] font-semibold text-navy-800 transition-colors duration-150 hover:bg-slate-50">
            
            <MaximizeIcon className="h-4 w-4" aria-hidden="true" /> Full Screen
          </button>
        </div>
      </section>
    </StudentLayout>);

}