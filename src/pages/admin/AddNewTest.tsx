import React, { useState } from 'react';
import {
  KeyboardIcon,
  PenLineIcon,
  StarIcon,
  FileTextIcon,
  MicIcon,
  SearchIcon,
  InfoIcon,
  RotateCcwIcon,
  SaveIcon,
  CalendarIcon,
  ClockIcon,
  CheckCircle2Icon,
  EyeIcon,
  PlayIcon,
  PauseIcon,
  Volume2Icon,
  Music2Icon } from
'lucide-react';
import { AdminLayout } from '../../components/admin/AdminLayout';
import { Breadcrumbs } from '../../components/common/PageHeading';

const sectionTitle = (n: number, title: string) =>
<h3 className="mb-3.5 flex items-center gap-2 font-display text-[13.5px] font-semibold text-navy-800">
    <span className="grid h-5 w-5 place-items-center rounded-full bg-primary text-[10.5px] font-bold text-white">
      {n}
    </span>
    {n}. {title}
  </h3>;


const testTypes = [
{ id: 'eng-typing', label: 'English Typing', icon: KeyboardIcon, tone: 'border-primary bg-primary-50 text-primary' },
{ id: 'hi-typing', label: 'Hindi Typing', icon: KeyboardIcon, tone: 'border-emerald-200 bg-emerald-50 text-emerald-700' },
{ id: 'eng-steno', label: 'English Steno', icon: PenLineIcon, tone: 'border-violet-200 bg-violet-50 text-violet-700' },
{ id: 'hi-steno', label: 'Hindi Steno', icon: PenLineIcon, tone: 'border-rose-200 bg-rose-50 text-rose-600' }];


const difficulties = [
{ id: 'easy', label: 'Easy', desc: 'For beginners', tone: 'border-emerald-200 bg-emerald-50 text-emerald-700' },
{ id: 'moderate', label: 'Moderate', desc: 'For intermediate level', tone: 'border-amber-300 bg-amber-50 text-amber-700' },
{ id: 'hard', label: 'Hard', desc: 'For advanced level', tone: 'border-rose-200 bg-rose-50 text-rose-600' }];


const passagePreview =
'The Government of India is committed to providing better services to the citizens through Digital India. This initiative aims to transform India into a digitally empowered society and knowledge economy. It will help in improving governance, enhancing transparency and creating new opportunities for all.';

const waveform = [6, 12, 18, 10, 22, 14, 26, 16, 20, 8, 24, 12, 18, 10, 22, 16, 28, 14, 20, 10, 24, 16, 12, 20, 8, 18, 24, 14, 10, 22];

const toggles = [
{ id: 'shuffle', label: 'Shuffle Content', on: false },
{ id: 'review', label: 'Allow Review (Preload Only)', on: false }];


const contentSummary = [
'Total Words',
'Total Strokes',
'Estimated Duration',
'Difficulty Level',
'Display Preview'];


export function AddNewTest() {
  const [type, setType] = useState('eng-typing');
  const [difficulty, setDifficulty] = useState('moderate');
  const [mode, setMode] = useState('live');
  const [status, setStatus] = useState('active');
  const [switches, setSwitches] = useState<Record<string, boolean>>(
    Object.fromEntries(toggles.map((t) => [t.id, t.on]))
  );
  const [playing, setPlaying] = useState(false);

  return (
    <AdminLayout
      searchPlaceholder="Search by test title, ID, type, category..."
      summary={[
      { label: 'Total Students', value: '1,575' },
      { label: 'Active Students', value: '1,142' },
      { label: 'Total Exams', value: '28' },
      { label: 'Tests Assigned', value: '542' }]
      }>
      
      <div className="mb-4 flex flex-wrap items-start gap-4">
        <div>
          <h2 className="font-display text-[26px] font-bold leading-tight text-navy-800">
            Add New Test (Live / Preload)
          </h2>
          <p className="text-[12.5px] text-slate-500">
            Create a new test for students. Choose test type, exam/category, difficulty level and
            other test settings.
          </p>
        </div>
        <div className="ml-auto">
          <Breadcrumbs
            crumbs={[{ label: 'Test Management', to: '/admin/tests' }, { label: 'Add New Test' }]} />
          
        </div>
      </div>

      <form className="space-y-4">
        <div className="grid gap-4 xl:grid-cols-2">
          {/* 1. Basic info */}
          <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-card">
            {sectionTitle(1, 'Basic Information')}
            <div className="grid gap-3.5 sm:grid-cols-2">
              <label className="block">
                <span className="mb-1.5 block text-[12px] font-semibold text-navy-800">
                  Test Title <span className="text-danger">*</span>
                </span>
                <input
                  type="text"
                  placeholder="Enter test title"
                  className="w-full rounded-md border border-slate-300 px-3 py-2 text-[12.5px] outline-none focus:border-primary" />
                
              </label>
              <label className="block">
                <span className="mb-1.5 block text-[12px] font-semibold text-navy-800">
                  Test ID / Code <span className="text-danger">*</span>
                </span>
                <input
                  type="text"
                  placeholder="Enter unique test ID"
                  className="w-full rounded-md border border-slate-300 px-3 py-2 text-[12.5px] outline-none focus:border-primary" />
                
                <span className="mt-1 block text-[11px] text-slate-500">Example: ENG-TYP-001</span>
              </label>
            </div>

            <label className="mt-3.5 block">
              <span className="mb-1.5 block text-[12px] font-semibold text-navy-800">
                Description (Optional)
              </span>
              <textarea
                rows={3}
                maxLength={250}
                placeholder="Enter test description..."
                className="w-full resize-none rounded-md border border-slate-300 px-3 py-2 text-[12.5px] outline-none focus:border-primary" />
              
              <span className="mt-1 block text-right text-[11px] text-slate-400">0 / 250</span>
            </label>

            <div className="mt-2 grid gap-3.5 sm:grid-cols-2">
              <fieldset>
                <legend className="mb-1.5 text-[12px] font-semibold text-navy-800">
                  Test Mode <span className="text-danger">*</span>
                </legend>
                {[
                { id: 'live', label: 'Live Test (Real Time Exam)' },
                { id: 'preload', label: 'Preload Test (Practice)' }].
                map((m) =>
                <label key={m.id} className="mb-1.5 flex items-center gap-2 text-[12.5px] text-slate-600">
                    <input
                    type="radio"
                    name="testMode"
                    checked={mode === m.id}
                    onChange={() => setMode(m.id)}
                    className="h-3.5 w-3.5 accent-primary" />
                  
                    {m.label}
                  </label>
                )}
              </fieldset>
              <fieldset>
                <legend className="mb-1.5 text-[12px] font-semibold text-navy-800">
                  Status <span className="text-danger">*</span>
                </legend>
                <div className="flex gap-5">
                  {['active', 'inactive'].map((s) =>
                  <label key={s} className="flex items-center gap-2 text-[12.5px] capitalize text-slate-600">
                      <input
                      type="radio"
                      name="testStatus"
                      checked={status === s}
                      onChange={() => setStatus(s)}
                      className="h-3.5 w-3.5 accent-primary" />
                    
                      {s}
                    </label>
                  )}
                </div>
              </fieldset>
            </div>
          </section>

          {/* 2. Test type */}
          <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-card">
            {sectionTitle(2, 'Test Type & Category')}
            <p className="mb-2 text-[12px] font-semibold text-navy-800">
              Test Type <span className="text-danger">*</span>
            </p>
            <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
              {testTypes.map((t) => {
                const active = t.id === type;
                return (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setType(t.id)}
                    aria-pressed={active}
                    className={`relative flex flex-col items-center gap-2 rounded-lg border px-2 py-3 text-[11.5px] font-semibold transition-colors duration-150 ${
                    active ? t.tone : 'border-slate-200 text-slate-500 hover:border-primary'}`
                    }>
                    
                    <t.icon className="h-5 w-5" aria-hidden="true" />
                    {t.label}
                    {active &&
                    <CheckCircle2Icon
                      className="absolute right-1.5 top-1.5 h-4 w-4 fill-primary text-white"
                      aria-hidden="true" />

                    }
                  </button>);

              })}
            </div>

            <div className="mt-3.5 grid gap-3.5 sm:grid-cols-2">
              <label className="block">
                <span className="mb-1.5 block text-[12px] font-semibold text-navy-800">
                  Category / Exam <span className="text-danger">*</span>
                </span>
                <select className="w-full rounded-md border border-slate-300 px-3 py-2 text-[12.5px] text-slate-600 outline-none focus:border-primary">
                  <option>-- Select Category / Exam --</option>
                  <option>SSC CGL</option>
                  <option>Delhi Police</option>
                </select>
              </label>
              <label className="block">
                <span className="mb-1.5 block text-[12px] font-semibold text-navy-800">
                  Select Chapter / Dictation <span className="text-danger">*</span>
                </span>
                <select className="w-full rounded-md border border-slate-300 px-3 py-2 text-[12.5px] text-slate-600 outline-none focus:border-primary">
                  <option>-- Select Chapter / Dictation --</option>
                  <option>Volume 1 — Dictation 1</option>
                </select>
              </label>
              <label className="block">
                <span className="mb-1.5 block text-[12px] font-semibold text-navy-800">
                  Font Group <span className="text-danger">*</span>
                </span>
                <select className="w-full rounded-md border border-slate-300 px-3 py-2 text-[12.5px] text-slate-600 outline-none focus:border-primary">
                  <option>-- Select Font Group --</option>
                  <option>Arial Group</option>
                  <option>Mangal Group</option>
                </select>
                <span className="mt-1 block text-[11px] text-slate-500">
                  Font group used in the test content
                </span>
              </label>
              <label className="block">
                <span className="mb-1.5 block text-[12px] font-semibold text-navy-800">
                  Tags / Keywords (Optional)
                </span>
                <input
                  type="text"
                  placeholder="Enter tags and press enter..."
                  className="w-full rounded-md border border-slate-300 px-3 py-2 text-[12.5px] outline-none focus:border-primary" />
                
                <span className="mt-1 block text-[11px] text-slate-500">
                  Helps in searching tests quickly
                </span>
              </label>
            </div>
          </section>
        </div>

        <div className="grid gap-4 xl:grid-cols-[1fr_2fr]">
        <div className="space-y-4">
        {/* 3. Difficulty */}
        <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-card">
            {sectionTitle(3, 'Difficulty Level')}
            <p className="mb-2.5 text-[12px] text-slate-500">Select the difficulty level of this test.</p>
            <div className="grid gap-3">
              {difficulties.map((d) => {
                const active = d.id === difficulty;
                return (
                  <button
                    key={d.id}
                    type="button"
                    onClick={() => setDifficulty(d.id)}
                    aria-pressed={active}
                    className={`relative flex items-center gap-3 rounded-lg border px-4 py-3 text-left transition-colors duration-150 ${
                    active ? d.tone : 'border-slate-200 text-slate-500 hover:border-primary'}`
                    }>

                    <StarIcon className="h-5 w-5 shrink-0" aria-hidden="true" />
                    <span>
                      <span className="block font-display text-[14px] font-bold">{d.label}</span>
                      <span className="block text-[11px]">{d.desc}</span>
                    </span>
                    {active &&
                    <CheckCircle2Icon
                      className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 fill-amber-500 text-white"
                      aria-hidden="true" />

                    }
                  </button>);

              })}
            </div>
            <p className="mt-3.5 flex items-start gap-2 rounded-md border border-primary-100 bg-primary-50 px-3 py-2 text-[11.5px] text-primary-700">
              <InfoIcon className="mt-[1px] h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              Note: Difficulty level will help in filtering and recommending tests to students.
            </p>
        </section>

        {/* 5. Advanced */}
        <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-card">
          {sectionTitle(5, 'Advanced Options')}
          <div className="space-y-4">
            <ul className="space-y-2.5">
              {toggles.map((t) =>
              <li key={t.id}>
                  <button
                  type="button"
                  role="switch"
                  aria-checked={switches[t.id]}
                  onClick={() => setSwitches((s) => ({ ...s, [t.id]: !s[t.id] }))}
                  className="flex w-full items-center gap-2.5 text-left">

                    <span
                    className={`relative h-4 w-8 shrink-0 rounded-full transition-colors duration-150 ${
                    switches[t.id] ? 'bg-primary' : 'bg-slate-300'}`
                    }>

                      <span
                      className={`absolute top-[2px] h-3 w-3 rounded-full bg-white transition-transform duration-150 ${
                      switches[t.id] ? 'translate-x-[18px]' : 'translate-x-[2px]'}`
                      } />

                    </span>
                    <span className="text-[12px] text-navy-800">{t.label}</span>
                  </button>
                </li>
              )}
            </ul>

            <div className="space-y-3.5">
              <div className="grid gap-3.5">
              <label className="block">
                <span className="mb-1.5 block text-[12px] font-semibold text-navy-800">
                  Start Date &amp; Time
                </span>
                <span className="flex gap-2">
                  <span className="relative flex-1">
                    <input
                      type="text"
                      placeholder="dd-mm-yyyy"
                      className="w-full rounded-md border border-slate-300 px-3 py-2 pr-8 text-[12.5px] outline-none focus:border-primary" />

                    <CalendarIcon
                      className="pointer-events-none absolute right-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-400"
                      aria-hidden="true" />

                  </span>
                  <span className="relative w-[96px]">
                    <input
                      type="text"
                      placeholder="--:-- --"
                      className="w-full rounded-md border border-slate-300 px-3 py-2 pr-8 text-[12.5px] outline-none focus:border-primary" />

                    <ClockIcon
                      className="pointer-events-none absolute right-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-400"
                      aria-hidden="true" />

                  </span>
                </span>
              </label>

              <label className="block">
                <span className="mb-1.5 block text-[12px] font-semibold text-navy-800">
                  End Date &amp; Time (Optional)
                </span>
                <span className="flex gap-2">
                  <span className="relative flex-1">
                    <input
                      type="text"
                      placeholder="dd-mm-yyyy"
                      className="w-full rounded-md border border-slate-300 px-3 py-2 pr-8 text-[12.5px] outline-none focus:border-primary" />

                    <CalendarIcon
                      className="pointer-events-none absolute right-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-400"
                      aria-hidden="true" />

                  </span>
                  <span className="relative w-[96px]">
                    <input
                      type="text"
                      placeholder="--:-- --"
                      className="w-full rounded-md border border-slate-300 px-3 py-2 pr-8 text-[12.5px] outline-none focus:border-primary" />

                    <ClockIcon
                      className="pointer-events-none absolute right-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-400"
                      aria-hidden="true" />

                  </span>
                </span>
                <span className="mt-1 block text-[11px] text-slate-500">Leave blank for no expiry</span>
              </label>
              </div>
            </div>
          </div>
        </section>
        </div>

        {/* 4. Content */}
        <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-card">
            {sectionTitle(4, 'Test Content')}
            <label className="mb-3.5 block max-w-[220px]">
              <span className="mb-1.5 block text-[12px] font-semibold text-navy-800">
                Content Source <span className="text-danger">*</span>
              </span>
              <select className="w-full rounded-md border border-slate-300 px-2.5 py-2 text-[12px] text-slate-600 outline-none focus:border-primary">
                <option>-- Select Source --</option>
                <option>Upload File</option>
                <option>Existing Chapter</option>
              </select>
              <span className="mt-1 block text-[11px] text-slate-500">
                Choose content source for the test
              </span>
            </label>

            <div className="space-y-4">
              <div>
                <p className="mb-1.5 flex items-center gap-1.5 text-[12px] font-semibold text-navy-800">
                  <FileTextIcon className="h-4 w-4 text-primary" aria-hidden="true" /> Uploaded Text File{' '}
                  <span className="text-danger">*</span>
                </p>
                <p className="mb-2 text-[10.5px] text-slate-500">Text file used for typing/steno test</p>
                <div className="rounded-lg border border-slate-200 p-3">
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
                  <div className="mt-2.5 h-[260px] overflow-y-auto rounded-md bg-slate-50 p-3 text-[14px] leading-relaxed text-slate-600">
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
              </div>

              <div>
                <p className="mb-1.5 flex items-center gap-1.5 text-[12px] font-semibold text-navy-800">
                  <MicIcon className="h-4 w-4 text-violet-600" aria-hidden="true" /> Uploaded Audio File /
                  Steno <span className="text-danger">*</span>
                </p>
                <p className="mb-2 text-[10.5px] text-slate-500">Audio file for steno/dictation test</p>
                <div className="rounded-lg border border-slate-200 p-3">
                  <div className="flex items-center gap-2.5">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-md bg-violet-50 text-violet-600">
                      <Music2Icon className="h-[18px] w-[18px]" aria-hidden="true" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="flex items-center gap-1.5">
                        <span className="truncate text-[12.5px] font-semibold text-navy-800">
                          Dictation_01.mp3
                        </span>
                        <span className="rounded bg-violet-50 px-1.5 py-[1px] text-[9px] font-bold text-violet-700">
                          MP3
                        </span>
                      </span>
                      <span className="block text-[10.5px] text-slate-500">(2.4 MB)</span>
                    </span>
                  </div>

                  <div className="mt-2.5 flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setPlaying((v) => !v)}
                      aria-label={playing ? 'Pause' : 'Play'}
                      className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-violet-600 text-white transition-colors duration-150 hover:bg-violet-700">

                      {playing ?
                      <PauseIcon className="h-3.5 w-3.5" aria-hidden="true" /> :

                      <PlayIcon className="h-3.5 w-3.5" aria-hidden="true" />
                      }
                    </button>
                    <span className="shrink-0 text-[10.5px] text-slate-500">0:45 / 1:30</span>
                    <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-slate-200">
                      <span className="block h-full w-1/2 rounded-full bg-violet-600" />
                    </span>
                    <Volume2Icon className="h-3.5 w-3.5 shrink-0 text-slate-400" aria-hidden="true" />
                  </div>

                  <div className="mt-2.5 flex h-8 items-end gap-[2px]">
                    {waveform.map((h, i) =>
                    <span
                      key={i}
                      className={`w-[3px] rounded-full ${i < waveform.length / 2 ? 'bg-violet-500' : 'bg-slate-200'}`}
                      style={{ height: h }} />
                    )}
                  </div>

                  <button
                    type="button"
                    className="mt-2.5 flex w-full items-center justify-center gap-1.5 rounded-md border border-slate-300 py-1.5 text-[11px] font-medium text-slate-600 transition-colors duration-150 hover:bg-slate-50">

                    <RotateCcwIcon className="h-3.5 w-3.5" aria-hidden="true" /> Replace
                  </button>
                </div>
              </div>

              <div className="rounded-md border border-slate-200 p-3">
                <p className="mb-2 text-[11.5px] font-semibold text-navy-800">Content Summary</p>
                <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-5">
                  {contentSummary.map((c) =>
                  <div key={c} className="rounded-md bg-slate-50 px-2.5 py-2 text-[11px] text-slate-500">
                      <p>{c}</p>
                      <p className="font-semibold text-navy-800">--</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="mt-3.5 flex justify-end gap-2">
              <button
                type="button"
                className="flex items-center gap-1.5 rounded-md border border-slate-300 px-3 py-1.5 text-[12px] font-medium text-slate-600 transition-colors duration-150 hover:bg-slate-50">
                
                <SearchIcon className="h-3.5 w-3.5" aria-hidden="true" /> Content Preview
              </button>
              <button
                type="button"
                className="flex items-center gap-1.5 rounded-md border border-primary px-3 py-1.5 text-[12px] font-medium text-primary transition-colors duration-150 hover:bg-primary-50">
                
                <SearchIcon className="h-3.5 w-3.5" aria-hidden="true" /> Preview Content
              </button>
            </div>
        </section>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <button
            type="reset"
            className="flex items-center gap-1.5 rounded-md border border-slate-300 bg-white px-4 py-2.5 text-[12.5px] font-medium text-slate-600 transition-colors duration-150 hover:bg-slate-50">
            
            <RotateCcwIcon className="h-4 w-4" aria-hidden="true" /> Reset
          </button>
          <button
            type="button"
            className="ml-auto rounded-md border border-slate-300 bg-white px-5 py-2.5 text-[12.5px] font-medium text-slate-600 transition-colors duration-150 hover:bg-slate-50">
            
            Cancel
          </button>
          <button
            type="submit"
            className="flex items-center gap-1.5 rounded-md bg-primary px-5 py-2.5 text-[12.5px] font-semibold text-white transition-colors duration-150 hover:bg-primary-700">
            
            <SaveIcon className="h-4 w-4" aria-hidden="true" /> Save &amp; Create Test
          </button>
        </div>
      </form>
    </AdminLayout>);

}