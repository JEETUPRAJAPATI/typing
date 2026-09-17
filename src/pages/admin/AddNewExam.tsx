import React, { useState } from 'react';
import {
  FileTextIcon,
  ImagePlusIcon,
  ClockIcon,
  InfoIcon,
  StarIcon,
  ArrowLeftIcon,
  SaveIcon,
  SendIcon,
  UploadIcon,
  CheckIcon,
  SquareIcon,
  LandmarkIcon,
  ClipboardListIcon } from
'lucide-react';
import { AdminLayout } from '../../components/admin/AdminLayout';

const card = 'rounded-xl border border-slate-200 bg-white p-4 shadow-card';
const cardTitle = (icon: React.ReactNode, title: string) =>
<h3 className="mb-3.5 flex items-center gap-2 border-b border-slate-100 pb-2 font-display text-[12.5px] font-bold uppercase tracking-wide text-navy-800">
    {icon}
    {title}
  </h3>;

const labelCls = 'mb-1.5 block text-[11.5px] font-semibold text-navy-800';
const inputCls =
'w-full rounded-md border border-slate-300 px-3 py-2 text-[12px] outline-none focus:border-primary';

const resultComponents = [
'Total Words (in Test)',
'Typed Words',
'Total KeyStroks (in Test)',
'Typed KeyStroks',
'Right Words',
'Right KeyStroks',
'Gross WPM',
'New WPM (Net WPM)',
'KDPH',
'Accuracy',
'Full Mistakes',
'Half Mistakes',
'Total Mistakes',
'Backspace Count',
'Ignorable Mistakes',
'Marks',
'Rank'];


const summaryRows = [
'Exam Name',
'Exam Title',
'Test Time',
'Screen Layout',
'Result Rule',
'Backspace Option',
'Highlight Word',
'Highlighting Color',
'Auto Scroll',
'Highlight Error',
'Font Size (User)',
'Font Size (Exam)',
'Test Type',
'Test Re-type'];


const summaryRowsRight = [
'Min Words/Strokes',
'Max Words/Strokes',
'Auto Submit',
'Formatting Type',
'Instructions File',
'Logo',
'Duration',
'Language',
'Min Qualifying',
'Conducted By',
'Result Components'];


const notes = [
'Fields marked with * are mandatory.',
'Students will see only the selected result components.',
'Instructions file will be shown to students before starting the test.',
'You can edit all settings anytime after saving the exam.',
'Make sure to preview all settings before publishing the exam.'];


export function AddNewExam() {
  const [checked, setChecked] = useState<string[]>(resultComponents);

  const toggle = (c: string) =>
  setChecked((prev) => prev.includes(c) ? prev.filter((x) => x !== c) : [...prev, c]);

  return (
    <AdminLayout
      searchPlaceholder="Search exams..."
      showActionButtons={false}
      summary={[
      { label: 'Total Students', value: '1,575' },
      { label: 'Active Students', value: '1,142' },
      { label: 'Total Exams', value: '28' },
      { label: 'Tests Assigned', value: '542' }]
      }>
      
      <div className="mb-4">
        <h2 className="font-display text-[24px] font-bold uppercase leading-tight text-navy-800">
          Add New Exam
        </h2>
        <p className="text-[12.5px] text-slate-500">Create a new exam with required settings</p>
      </div>

      <form className="space-y-4">
        <div className="grid gap-4 xl:grid-cols-[1fr_290px_290px]">
          {/* 1. Basic information */}
          <section className={card}>
            {cardTitle(<FileTextIcon className="h-4 w-4 text-primary" aria-hidden="true" />, '1. Basic Information')}
            <div className="grid gap-3.5 sm:grid-cols-2">
              <label className="block">
                <span className={labelCls}>Exam Name <span className="text-danger">*</span></span>
                <input type="text" placeholder="Enter exam name" className={inputCls} />
              </label>
              <label className="block">
                <span className={labelCls}>Exam Title / Display Title <span className="text-danger">*</span></span>
                <input type="text" placeholder="Enter exam title / display title" className={inputCls} />
              </label>
              <label className="block">
                <span className={labelCls}>Test Time <span className="text-danger">*</span></span>
                <span className="relative block">
                  <input type="text" placeholder="hh:mm:ss" className={`${inputCls} pr-8`} />
                  <ClockIcon className="pointer-events-none absolute right-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-400" aria-hidden="true" />
                </span>
              </label>
              <label className="block">
                <span className={labelCls}>Screen Layout <span className="text-danger">*</span></span>
                <select className={`${inputCls} text-slate-600`}>
                  <option>Select Screen Layout</option>
                  <option>Default Layout 2026</option>
                </select>
              </label>
            </div>
          </section>

          {/* 2. Exam logo */}
          <section className={card}>
            {cardTitle(<ImagePlusIcon className="h-4 w-4 text-primary" aria-hidden="true" />, '2. Exam Logo')}
            <button
              type="button"
              className="flex w-full flex-col items-center justify-center gap-2 rounded-md border-2 border-dashed border-slate-300 py-6 transition-colors duration-150 hover:border-primary hover:bg-primary-50/40">
              
              <LandmarkIcon className="h-7 w-7 text-primary" aria-hidden="true" />
              <span className="text-[12px] font-semibold text-navy-800">Upload Exam Logo</span>
              <span className="text-[10.5px] text-slate-400">JPG, PNG (Max. 2MB)</span>
              <span className="mt-1 rounded-md bg-primary px-3.5 py-1.5 text-[11.5px] font-semibold text-white">
                Choose File
              </span>
            </button>
          </section>

          {/* 10. Exam details */}
          <section className={card}>
            {cardTitle(<ClipboardListIcon className="h-4 w-4 text-primary" aria-hidden="true" />, '10. Exam Details (Info for Students)')}
            <div className="space-y-3.5">
              <label className="block">
                <span className={labelCls}>Duration <span className="text-danger">*</span></span>
                <span className="relative block">
                  <input type="text" placeholder="hh:mm:ss" className={`${inputCls} pr-8`} />
                  <ClockIcon className="pointer-events-none absolute right-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-400" aria-hidden="true" />
                </span>
              </label>
              <label className="block">
                <span className={labelCls}>Language <span className="text-danger">*</span></span>
                <select className={`${inputCls} text-slate-600`}>
                  <option>Select Language</option>
                  <option>English</option>
                  <option>Hindi</option>
                </select>
              </label>
              <label className="block">
                <span className={labelCls}>Minimum Qualifying Speed <span className="text-danger">*</span></span>
                <span className="flex gap-2">
                  <input type="text" placeholder="Enter speed" className={inputCls} />
                  <select className="w-[84px] rounded-md border border-slate-300 px-2 py-2 text-[12px] outline-none focus:border-primary">
                    <option>WPM</option>
                    <option>KDPH</option>
                  </select>
                </span>
              </label>
            </div>
          </section>
        </div>

        <div className="grid gap-4 xl:grid-cols-[1fr_290px_290px]">
          {/* 3. Exam rules */}
          <section className={card}>
            {cardTitle(<FileTextIcon className="h-4 w-4 text-primary" aria-hidden="true" />, '3. Exam Rules & Flow Settings')}
            <div className="grid gap-3.5 sm:grid-cols-2">
              <label className="block">
                <span className={labelCls}>Result Rule (Pattern) <span className="text-danger">*</span></span>
                <select className={`${inputCls} text-slate-600`}>
                  <option>Select Result Rule (Pattern)</option>
                  <option>SSC Typing Result Pattern 2026</option>
                </select>
              </label>
              <label className="block">
                <span className={labelCls}>Backspace Option <span className="text-danger">*</span></span>
                <select className={`${inputCls} text-slate-600`}>
                  <option>Select Backspace Option</option>
                  <option>Current Word Backspace</option>
                </select>
              </label>
            </div>

            <div className="mt-3.5 grid gap-3.5 sm:grid-cols-4">
              <fieldset>
                <legend className={labelCls}>Highlight Word</legend>
                <div className="flex gap-3">
                  {['Yes', 'No'].map((v) =>
                  <label key={v} className="flex items-center gap-1.5 text-[12px] text-slate-600">
                      <input type="radio" name="highlightWord" defaultChecked={v === 'Yes'} className="h-3.5 w-3.5 accent-primary" />
                      {v}
                    </label>
                  )}
                </div>
              </fieldset>
              <label className="block">
                <span className={labelCls}>Highlighting Color <span className="text-danger">*</span></span>
                <span className="flex items-center gap-2 rounded-md border border-slate-300 px-2 py-1.5">
                  <span className="h-4 w-4 rounded-sm bg-[#FFD700]" aria-hidden="true" />
                  <span className="text-[12px] text-navy-800">#FFD700</span>
                </span>
              </label>
              <fieldset>
                <legend className={labelCls}>Auto Scroll</legend>
                <div className="flex gap-3">
                  {['Yes', 'No'].map((v) =>
                  <label key={v} className="flex items-center gap-1.5 text-[12px] text-slate-600">
                      <input type="radio" name="autoScroll" defaultChecked={v === 'Yes'} className="h-3.5 w-3.5 accent-primary" />
                      {v}
                    </label>
                  )}
                </div>
              </fieldset>
              <fieldset>
                <legend className={labelCls}>Highlight Error</legend>
                <div className="flex gap-3">
                  {['Yes', 'No'].map((v) =>
                  <label key={v} className="flex items-center gap-1.5 text-[12px] text-slate-600">
                      <input type="radio" name="highlightError" defaultChecked={v === 'Yes'} className="h-3.5 w-3.5 accent-primary" />
                      {v}
                    </label>
                  )}
                </div>
              </fieldset>
            </div>

            <div className="mt-3.5 grid gap-3.5 sm:grid-cols-2">
              <label className="block">
                <span className={labelCls}>Font Size (User Screen) <span className="text-danger">*</span></span>
                <select className={`${inputCls} text-slate-600`}>
                  <option>Select Font Size</option>
                  <option>Medium</option>
                </select>
              </label>
              <label className="block">
                <span className={labelCls}>Font Size (Exam Screen) <span className="text-danger">*</span></span>
                <select className={`${inputCls} text-slate-600`}>
                  <option>Select Font Size</option>
                  <option>Medium</option>
                </select>
              </label>
            </div>

            <div className="mt-3.5 grid gap-3.5 sm:grid-cols-2">
              <fieldset>
                <legend className={labelCls}>Test (On Paper / On Screen) <span className="text-danger">*</span></legend>
                <div className="flex gap-4">
                  {['On Paper', 'On Screen'].map((v) =>
                  <label key={v} className="flex items-center gap-1.5 text-[12px] text-slate-600">
                      <input type="radio" name="testOn" defaultChecked={v === 'On Screen'} className="h-3.5 w-3.5 accent-primary" />
                      {v}
                    </label>
                  )}
                </div>
              </fieldset>
              <fieldset>
                <legend className={labelCls}>Test Re-type</legend>
                <div className="flex gap-4">
                  {['Yes', 'No'].map((v) =>
                  <label key={v} className="flex items-center gap-1.5 text-[12px] text-slate-600">
                      <input type="radio" name="reType" defaultChecked={v === 'No'} className="h-3.5 w-3.5 accent-primary" />
                      {v}
                    </label>
                  )}
                </div>
              </fieldset>
            </div>

            <div className="mt-3.5 grid gap-3.5 sm:grid-cols-3">
              <label className="block">
                <span className={labelCls}>Minimum Words / Strokes <span className="text-danger">*</span></span>
                <input type="text" placeholder="Enter minimum words or strokes" className={inputCls} />
              </label>
              <label className="block">
                <span className={labelCls}>Maximum Words / Strokes <span className="text-danger">*</span></span>
                <input type="text" placeholder="Enter maximum words or strokes" className={inputCls} />
              </label>
              <fieldset>
                <legend className={labelCls}>Auto Submit <span className="text-danger">*</span></legend>
                <div className="flex gap-4">
                  {['Yes', 'No'].map((v) =>
                  <label key={v} className="flex items-center gap-1.5 text-[12px] text-slate-600">
                      <input type="radio" name="autoSubmit" defaultChecked={v === 'Yes'} className="h-3.5 w-3.5 accent-primary" />
                      {v}
                    </label>
                  )}
                </div>
              </fieldset>
            </div>

            <div className="mt-3.5 grid gap-3.5 sm:grid-cols-2">
              <fieldset>
                <legend className={labelCls}>Formatting Test / Normal Test <span className="text-danger">*</span></legend>
                <div className="flex gap-4">
                  {['Formatting Test', 'Normal Test'].map((v) =>
                  <label key={v} className="flex items-center gap-1.5 text-[12px] text-slate-600">
                      <input type="radio" name="formatting" defaultChecked={v === 'Formatting Test'} className="h-3.5 w-3.5 accent-primary" />
                      {v}
                    </label>
                  )}
                </div>
              </fieldset>
              <div>
                <p className={labelCls}>Instructions for Students (&quot;Exam Rule&quot;) <span className="text-danger">*</span></p>
                <p className="mb-1.5 text-[10.5px] text-slate-500">
                  Upload exam instructions or rules that students will read before starting the test.
                </p>
                <div className="flex gap-2">
                  <button
                    type="button"
                    className="flex items-center gap-1.5 rounded-md border border-primary px-3 py-1.5 text-[11.5px] font-medium text-primary transition-colors duration-150 hover:bg-primary-50">
                    
                    <UploadIcon className="h-3.5 w-3.5" aria-hidden="true" /> Upload Text (TXT)
                  </button>
                  <button
                    type="button"
                    className="flex items-center gap-1.5 rounded-md border border-rose-300 px-3 py-1.5 text-[11.5px] font-medium text-rose-600 transition-colors duration-150 hover:bg-rose-50">
                    
                    <UploadIcon className="h-3.5 w-3.5" aria-hidden="true" /> Upload PDF
                  </button>
                </div>
                <p className="mt-1 text-[10.5px] text-slate-400">TXT or PDF (Max. 2MB)</p>
              </div>
            </div>
          </section>

          {/* 4. Result component visibility */}
          <section className={card}>
            {cardTitle(<CheckIcon className="h-4 w-4 text-primary" aria-hidden="true" />, '4. Result Component Visibility')}
            <p className="mb-2.5 text-[11px] text-slate-500">
              Select the result components you want to show to students after the test.
            </p>
            <ul className="grid grid-cols-2 gap-x-3 gap-y-1.5">
              {resultComponents.map((c, i) =>
              <li key={c}>
                  <label className="flex items-start gap-1.5 text-[11px] text-navy-800">
                    <input
                    type="checkbox"
                    checked={checked.includes(c)}
                    onChange={() => toggle(c)}
                    className="mt-[2px] h-3.5 w-3.5 shrink-0 accent-primary" />
                  
                    <span>
                      {i + 1}. {c}
                    </span>
                  </label>
                </li>
              )}
            </ul>
            <div className="mt-3 flex gap-2">
              <button
                type="button"
                onClick={() => setChecked(resultComponents)}
                className="flex flex-1 items-center justify-center gap-1.5 rounded-md border border-emerald-300 py-1.5 text-[11.5px] font-medium text-emerald-700 transition-colors duration-150 hover:bg-emerald-50">
                
                <CheckIcon className="h-3.5 w-3.5" aria-hidden="true" /> Select All
              </button>
              <button
                type="button"
                onClick={() => setChecked([])}
                className="flex flex-1 items-center justify-center gap-1.5 rounded-md border border-slate-300 py-1.5 text-[11.5px] font-medium text-slate-600 transition-colors duration-150 hover:bg-slate-50">
                
                <SquareIcon className="h-3.5 w-3.5" aria-hidden="true" /> Unselect All
              </button>
            </div>
          </section>

          {/* 11 + 12 */}
          <div className="space-y-4">
            <section className={card}>
              {cardTitle(<FileTextIcon className="h-4 w-4 text-primary" aria-hidden="true" />, '11. Conducted By (Info for Students)')}
              <label className="block">
                <span className={labelCls}>Organization Name <span className="text-danger">*</span></span>
                <input type="text" placeholder="Enter organization name" className={inputCls} />
              </label>
            </section>

            <section className={card}>
              {cardTitle(<ClipboardListIcon className="h-4 w-4 text-primary" aria-hidden="true" />, '12. Exam Summary (Preview)')}
              <div className="grid grid-cols-2 gap-x-4">
                <ul className="space-y-1">
                  {summaryRows.map((r) =>
                  <li key={r} className="flex text-[10.5px]">
                      <span className="text-slate-600">{r}</span>
                      <span className="ml-auto text-slate-400">: --</span>
                    </li>
                  )}
                </ul>
                <ul className="space-y-1">
                  {summaryRowsRight.map((r) =>
                  <li key={r} className="flex text-[10.5px]">
                      <span className="text-slate-600">{r}</span>
                      <span className="ml-auto text-slate-400">: --</span>
                    </li>
                  )}
                </ul>
              </div>
            </section>
          </div>
        </div>

        <div className="grid gap-4 xl:grid-cols-[1fr_1fr_280px]">
          <section className="rounded-xl border border-amber-200 bg-amber-50 p-4">
            <h3 className="mb-2.5 flex items-center gap-2 text-[12px] font-bold uppercase tracking-wide text-[#B45309]">
              <StarIcon className="h-4 w-4" aria-hidden="true" /> Important Notes
            </h3>
            <ul className="space-y-1.5">
              {notes.map((n) =>
              <li key={n} className="flex items-start gap-1.5 text-[11.5px] text-[#92400E]">
                  <CheckIcon className="mt-[2px] h-3.5 w-3.5 shrink-0" aria-hidden="true" /> {n}
                </li>
              )}
            </ul>
          </section>

          <section className={card}>
            {cardTitle(<SaveIcon className="h-4 w-4 text-primary" aria-hidden="true" />, '13. Save Options')}
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-lg border border-amber-200 bg-amber-50/60 p-3">
                <p className="flex items-center gap-1.5 text-[12px] font-semibold text-navy-800">
                  <SaveIcon className="h-3.5 w-3.5 text-[#B45309]" aria-hidden="true" /> Save as Draft
                </p>
                <p className="mt-1 text-[10.5px] text-slate-500">
                  Save this exam as draft. You can edit it later.
                </p>
                <button
                  type="button"
                  className="mt-2.5 flex w-full items-center justify-center gap-1.5 rounded-md bg-success py-2 text-[11.5px] font-semibold text-white transition-colors duration-150 hover:bg-[#146c43]">
                  
                  <SaveIcon className="h-3.5 w-3.5" aria-hidden="true" /> Save as Draft
                </button>
              </div>
              <div className="rounded-lg border border-emerald-200 bg-emerald-50/60 p-3">
                <p className="flex items-center gap-1.5 text-[12px] font-semibold text-navy-800">
                  <SendIcon className="h-3.5 w-3.5 text-success" aria-hidden="true" /> Save &amp; Publish Exam
                </p>
                <p className="mt-1 text-[10.5px] text-slate-500">
                  Save this exam and make it active for students.
                </p>
                <button
                  type="submit"
                  className="mt-2.5 flex w-full items-center justify-center gap-1.5 rounded-md bg-success py-2 text-[11.5px] font-semibold text-white transition-colors duration-150 hover:bg-[#146c43]">
                  
                  <SendIcon className="h-3.5 w-3.5" aria-hidden="true" /> Save &amp; Publish Exam
                </button>
              </div>
            </div>
          </section>

          <div className="flex items-center justify-end">
            <button
              type="button"
              className="flex items-center gap-1.5 rounded-md border border-slate-300 bg-white px-5 py-2.5 text-[12.5px] font-medium text-slate-600 transition-colors duration-150 hover:bg-slate-50">
              
              <ArrowLeftIcon className="h-4 w-4" aria-hidden="true" /> Back
            </button>
          </div>
        </div>

        <p className="flex items-center gap-2 rounded-md bg-slate-100 px-3 py-2 text-[11.5px] text-slate-500">
          <InfoIcon className="h-3.5 w-3.5" aria-hidden="true" />
          All settings can be edited later from Exam Management → Manage Exam.
        </p>
      </form>
    </AdminLayout>);

}