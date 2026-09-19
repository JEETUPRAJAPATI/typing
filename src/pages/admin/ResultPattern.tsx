import React, { useState } from 'react';
import {
  FileTextIcon,
  HourglassIcon,
  SettingsIcon,
  ArrowLeftIcon,
  SaveIcon,
  EyeIcon,
  ArrowRightIcon,
  PencilIcon,
  Trash2Icon,
  RotateCcwIcon,
  PlusIcon } from
'lucide-react';
import { AdminLayout } from '../../components/admin/AdminLayout';
import { Breadcrumbs } from '../../components/common/PageHeading';

const card = 'rounded-xl border border-slate-200 bg-white p-4 shadow-card';
const labelCls = 'mb-1.5 block text-[11.5px] font-semibold text-navy-800';
const inputCls =
'w-full rounded-md border border-slate-300 px-3 py-2 text-[12px] outline-none focus:border-primary';

const tabs = ['Test Information', 'Test Content', 'Result Pattern', 'Preview Test', 'Publish Test'];

const savedPatterns = [
{ no: 1, name: 'SSC Typing Result Pattern 2026', applicable: 'Typing', def: 'Yes', created: '12 May 2026, 10:30 AM', status: 'Active' },
{ no: 2, name: 'Railway Typing Pattern', applicable: 'Typing', def: 'No', created: '28 Apr 2026, 04:15 PM', status: 'Active' },
{ no: 3, name: 'Steno Exam Pattern', applicable: 'Steno', def: 'No', created: '10 Apr 2026, 02:45 PM', status: 'Inactive' }];


const penaltyFields = [
{ group: 'Mistake Penalty', fields: [
  { label: 'Speed Penalty', value: '1' },
  { label: 'Words Penalty', value: '1' },
  { label: 'Strokes Penalty', value: '1' }]
},
{ group: 'Mistakes Weight', fields: [
  { label: 'Full Mistake Penalty', value: '1' },
  { label: 'Half Mistake Penalty', value: '0.5' },
  { label: 'Extra Words Penalty', value: '0.5' },
  { label: 'Missing Words Penalty', value: '0.5' },
  { label: 'Extra Space Penalty', value: '0.5' },
  { label: 'Panchuation Penalty', value: '0.5' },
  { label: 'Ignorable Mistakes (%)', value: '10' },
  { label: 'Mistakes Multiply', value: '1' }]
}];


export function ResultPattern() {
  const [tab, setTab] = useState('Result Pattern');

  return (
    <AdminLayout searchPlaceholder="Search typing tests..." showActionButtons={false}>
      <div className="mb-4 flex flex-wrap items-start gap-4">
        <div>
          <h2 className="font-display text-[24px] font-bold leading-tight text-navy-800">
            Add / Upload Typing Test
          </h2>
          <p className="text-[12.5px] text-slate-500">
            Create and upload new typing test for students
          </p>
        </div>
        <div className="ml-auto">
          <Breadcrumbs
            crumbs={[
            { label: 'Home', to: '/admin' },
            { label: 'Typing Exam', to: '/admin/tests' },
            { label: 'Test Management', to: '/admin/tests' },
            { label: 'Add / Upload Test' }]
            } />
          
        </div>
      </div>

      <div className="mb-4 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-card">
        <div className="flex flex-wrap">
          {tabs.map((t) =>
          <button
            key={t}
            type="button"
            onClick={() => setTab(t)}
            aria-pressed={tab === t}
            className={`flex-1 border-b-2 px-4 py-3 text-[12.5px] font-semibold transition-colors duration-150 ${
            tab === t ?
            'border-primary bg-primary-50 text-primary' :
            'border-transparent text-slate-500 hover:bg-slate-50'}`
            }>
            
              {t}
            </button>
          )}
        </div>
      </div>

      <div className="grid gap-4 xl:grid-cols-2">
        <div className="space-y-4">
        {/* Result name */}
        <section className={card}>
          <h3 className="mb-3 flex items-center gap-2 text-[12.5px] font-bold text-navy-800">
            <FileTextIcon className="h-4 w-4 text-primary" aria-hidden="true" /> Result Name
          </h3>
          <div className="rounded-lg border border-slate-200 p-3">
            <p className="mb-2.5 flex items-center gap-1.5 text-[11.5px] font-semibold text-navy-800">
              <FileTextIcon className="h-3.5 w-3.5 text-primary" aria-hidden="true" /> Pattern
              Information
            </p>
            <div className="grid gap-3 sm:grid-cols-[1fr_120px]">
              <label className="block">
                <span className={labelCls}>Pattern Name <span className="text-danger">*</span></span>
                <input type="text" defaultValue="SSC Typing Result Pattern 2026" className={inputCls} />
              </label>
              <div>
                <p className={labelCls}>Applicable For <span className="text-danger">*</span></p>
                <label className="mb-1 flex items-center gap-2 text-[11.5px] text-slate-600">
                  <input type="checkbox" defaultChecked className="h-3.5 w-3.5 accent-primary" /> Typing Exam
                </label>
                <label className="flex items-center gap-2 text-[11.5px] text-slate-600">
                  <input type="checkbox" className="h-3.5 w-3.5 accent-primary" /> Steno Exam
                </label>
              </div>
              <label className="block">
                <span className={labelCls}>Description (Optional)</span>
                <textarea
                  rows={3}
                  defaultValue="Standard result pattern for all SSC typing and steno exams."
                  className={`${inputCls} resize-none`} />
                
              </label>
              <fieldset>
                <legend className={labelCls}>Default Pattern</legend>
                {['Yes', 'No'].map((v) =>
                <label key={v} className="mb-1 flex items-center gap-2 text-[11.5px] text-slate-600">
                    <input
                    type="radio"
                    name="defaultPattern"
                    defaultChecked={v === 'Yes'}
                    className="h-3.5 w-3.5 accent-primary" />
                  
                    {v}
                  </label>
                )}
              </fieldset>
            </div>
          </div>
        </section>

        {/* Passing criteria */}
        <section className={card}>
          <h3 className="mb-3 flex items-center gap-2 text-[12.5px] font-bold text-navy-800">
            <HourglassIcon className="h-4 w-4 text-primary" aria-hidden="true" /> Passing Criteria
          </h3>
          <label className="block">
            <span className={labelCls}>Result Mode <span className="text-danger">*</span></span>
            <select className={`${inputCls} text-slate-600`}>
              <option>Net WPM + Accuracy</option>
              <option>Gross WPM</option>
              <option>Marks</option>
            </select>
          </label>

          <label className="mt-3 block">
            <span className={labelCls}>Minimum Qualifying Speed (WPM) <span className="text-danger">*</span></span>
            <input type="text" defaultValue="35" className={inputCls} />
          </label>
          <label className="mt-3 block">
            <span className={labelCls}>Minimum Accuracy (%)</span>
            <input type="text" defaultValue="90" className={inputCls} />
          </label>
        </section>
        </div>

        {/* Penalty & calculation */}
        <section className={card}>
          <h3 className="mb-3 flex items-center gap-2 text-[12.5px] font-bold text-navy-800">
            <SettingsIcon className="h-4 w-4 text-primary" aria-hidden="true" /> Penalty &amp;
            Calculation Settings
          </h3>

          <div className="grid gap-3 sm:grid-cols-3">
            <fieldset>
              <legend className={labelCls}>Speed Source</legend>
              {['Typed Words', 'Typed Strokes', 'Right Words Only'].map((v) =>
              <label key={v} className="mb-1 flex items-center gap-2 text-[11px] text-slate-600">
                  <input
                  type="radio"
                  name="speedSource"
                  defaultChecked={v === 'Typed Words'}
                  className="h-3.5 w-3.5 accent-primary" />
                
                  {v}
                </label>
              )}
            </fieldset>
            <fieldset>
              <legend className={labelCls}>Unit</legend>
              {['WPM', 'KDPH'].map((v) =>
              <label key={v} className="mb-1 flex items-center gap-2 text-[11px] text-slate-600">
                  <input
                  type="radio"
                  name="unit"
                  defaultChecked={v === 'WPM'}
                  className="h-3.5 w-3.5 accent-primary" />
                
                  {v}
                </label>
              )}
            </fieldset>
            <label className="block">
              <span className={labelCls}>Strokes Per Word <span className="text-danger">*</span></span>
              <input type="text" defaultValue="5" className={inputCls} />
              <span className="mt-1 block text-[10.5px] text-slate-500">(eg. 5)</span>
            </label>
          </div>

          <fieldset className="mt-3">
            <legend className={labelCls}>Remaining Words as Mistakes</legend>
            <div className="flex flex-wrap gap-4">
              {['Enabled', 'Count unattempted Ending words'].map((v) =>
              <label key={v} className="flex items-center gap-2 text-[11px] text-slate-600">
                  <input
                  type="radio"
                  name="remainingWords"
                  defaultChecked={v === 'Enabled'}
                  className="h-3.5 w-3.5 accent-primary" />
                
                  {v}
                </label>
              )}
            </div>
          </fieldset>

          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            {penaltyFields.map((g) =>
            <fieldset key={g.group} className="rounded-md border border-slate-200 p-2.5">
                <legend className="px-1 text-[10.5px] font-semibold text-slate-500">{g.group}</legend>
                <div className="grid gap-2">
                  {g.fields.map((f) =>
                <label key={f.label} className="block">
                      <span className="mb-1 flex items-center gap-1.5 text-[10.5px] text-slate-600">
                        {g.group === 'Mistake Penalty' &&
                    <input type="checkbox" defaultChecked className="h-3 w-3 accent-primary" aria-label={`Enable ${f.label}`} />
                    }
                        {f.label}
                      </span>
                      <input
                    type="text"
                    defaultValue={f.value}
                    className="w-full rounded border border-slate-300 px-2 py-1 text-[11px] outline-none focus:border-primary" />

                    </label>
                )}
                </div>
              </fieldset>
            )}
          </div>

          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            <fieldset className="rounded-md border border-slate-200 p-2.5">
              <legend className="px-1 text-[10.5px] font-semibold text-slate-500">Accuracy ON</legend>
              {['Typed Words', 'Total Words', 'Typed Keystrokes', 'Total Keystrokes'].map((v) =>
              <label key={v} className="mb-1 flex items-center gap-2 text-[11px] text-slate-600">
                  <input
                  type="radio"
                  name="accuracyOn"
                  defaultChecked={v === 'Typed Words'}
                  className="h-3.5 w-3.5 accent-primary" />

                  {v}
                </label>
              )}
            </fieldset>
            <fieldset className="rounded-md border border-slate-200 p-2.5">
              <legend className="px-1 text-[10.5px] font-semibold text-slate-500">Marks</legend>
              <label className="mb-1.5 flex items-center gap-2 text-[11px] text-slate-600">
                <input type="checkbox" defaultChecked className="h-3.5 w-3.5 accent-primary" /> On Right Words
              </label>
              <input
                type="text"
                defaultValue="0.10"
                aria-label="Marks on right words"
                className="mb-2 w-full rounded border border-slate-300 px-2 py-1 text-[11px] outline-none focus:border-primary" />
              
              <label className="mb-1.5 flex items-center gap-2 text-[11px] text-slate-600">
                <input type="checkbox" defaultChecked className="h-3.5 w-3.5 accent-primary" /> On Net WPM
              </label>
              <div className="flex items-center gap-2 text-[10.5px] text-slate-500">
                <span className="flex-1">Speed Range (WPM)</span>
                <span className="w-10 text-right">Marks</span>
              </div>
              <div className="mt-1 flex items-center gap-2">
                <input
                  type="text"
                  defaultValue="31 - 35"
                  aria-label="Speed range"
                  className="flex-1 rounded border border-slate-300 px-2 py-1 text-[11px] outline-none focus:border-primary" />
                
                <input
                  type="text"
                  defaultValue="12"
                  aria-label="Marks for range"
                  className="w-12 rounded border border-slate-300 px-2 py-1 text-[11px] outline-none focus:border-primary" />
                
              </div>
              <button
                type="button"
                className="mt-1.5 flex items-center gap-1 text-[10.5px] font-semibold text-primary hover:text-primary-700">
                
                <PlusIcon className="h-3 w-3" aria-hidden="true" /> Add Range
              </button>
            </fieldset>
          </div>
        </section>
      </div>

      <div className="mt-4 grid gap-4 xl:grid-cols-[1fr_330px]">
        <section className="rounded-xl border border-slate-200 bg-white shadow-card">
          <h3 className="p-3.5 text-[12.5px] font-bold text-navy-800">Saved Result Patterns</h3>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] text-left">
              <thead className="bg-slate-50 text-[11px] font-semibold text-slate-600">
                <tr>
                  <th scope="col" className="px-3 py-2.5">S.No.</th>
                  <th scope="col" className="px-3 py-2.5">Pattern Name</th>
                  <th scope="col" className="px-3 py-2.5">Applicable For</th>
                  <th scope="col" className="px-3 py-2.5">Default</th>
                  <th scope="col" className="px-3 py-2.5">Created On</th>
                  <th scope="col" className="px-3 py-2.5">Status</th>
                  <th scope="col" className="px-3 py-2.5">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-[11px]">
                {savedPatterns.map((p) =>
                <tr key={p.no} className="transition-colors duration-150 hover:bg-slate-50/70">
                    <td className="px-3 py-2.5 text-slate-600">{p.no}</td>
                    <td className="px-3 py-2.5 font-medium text-navy-800">{p.name}</td>
                    <td className="px-3 py-2.5 text-slate-600">{p.applicable}</td>
                    <td className="px-3 py-2.5 text-slate-600">{p.def}</td>
                    <td className="px-3 py-2.5 text-slate-600">{p.created}</td>
                    <td className="px-3 py-2.5">
                      <span
                      className={`rounded px-2 py-[2px] text-[10px] font-medium ${
                      p.status === 'Active' ?
                      'bg-emerald-50 text-emerald-700' :
                      'bg-rose-50 text-rose-700'}`
                      }>
                      
                        {p.status}
                      </span>
                    </td>
                    <td className="px-3 py-2.5">
                      <div className="flex items-center gap-2 text-slate-400">
                        <button type="button" aria-label={`Edit ${p.name}`} className="hover:text-primary">
                          <PencilIcon className="h-3.5 w-3.5" aria-hidden="true" />
                        </button>
                        <button type="button" aria-label={`Duplicate ${p.name}`} className="hover:text-primary">
                          <RotateCcwIcon className="h-3.5 w-3.5" aria-hidden="true" />
                        </button>
                        <button type="button" aria-label={`Delete ${p.name}`} className="text-rose-400 hover:text-rose-600">
                          <Trash2Icon className="h-3.5 w-3.5" aria-hidden="true" />
                        </button>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <p className="border-t border-slate-100 p-3.5 text-[11px] text-slate-500">
            Note: Default pattern will be applied when creating a new exam.
            <span className="float-right">Showing 1 to 3 of 3 patterns</span>
          </p>
        </section>

        <section className={card}>
          <h3 className="mb-3 flex items-center gap-2 text-[12.5px] font-bold text-navy-800">
            <SettingsIcon className="h-4 w-4 text-primary" aria-hidden="true" /> Other Settings
          </h3>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
            { title: 'Live Test Settings', badge: 'LIVE', badgeTone: 'bg-success' },
            { title: 'Pre-Load Test Settings', badge: 'PRELOAD', badgeTone: 'bg-[#F59E0B]' }].
            map((s) =>
            <div key={s.title} className="rounded-lg border border-slate-200 p-2.5">
                <p className="mb-2 flex items-center gap-1.5 text-[11.5px] font-semibold text-navy-800">
                  {s.title}
                  <span className={`rounded px-1.5 py-[1px] text-[9px] font-bold text-white ${s.badgeTone}`}>
                    {s.badge}
                  </span>
                </p>
                <p className="mb-1 text-[10.5px] font-medium text-slate-600">Show Result to Students</p>
                <label className="mb-1 flex items-center gap-2 text-[11px] text-slate-600">
                  <input type="radio" name={`${s.title}-result`} defaultChecked className="h-3.5 w-3.5 accent-primary" />
                  Immediately
                </label>
                <label className="mb-2 flex items-center gap-2 text-[11px] text-slate-600">
                  <input type="radio" name={`${s.title}-result`} className="h-3.5 w-3.5 accent-primary" />
                  Set a Time
                  <input
                  type="text"
                  defaultValue="09:00 PM"
                  aria-label={`${s.title} result time`}
                  className="w-[72px] rounded border border-slate-300 px-1.5 py-[2px] text-[10.5px] outline-none focus:border-primary" />
                
                </label>
                <p className="mb-1 text-[10.5px] font-medium text-slate-600">Show Rank</p>
                <label className="mb-1 flex items-center gap-2 text-[11px] text-slate-600">
                  <input type="radio" name={`${s.title}-rank`} className="h-3.5 w-3.5 accent-primary" />
                  Immediately
                </label>
                <label className="flex items-center gap-2 text-[11px] text-slate-600">
                  <input type="radio" name={`${s.title}-rank`} defaultChecked className="h-3.5 w-3.5 accent-primary" />
                  After {s.badge === 'LIVE' ? 'Live Test Session End' : 'Test is Completed'}
                </label>
              </div>
            )}
          </div>
        </section>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-2.5">
        <button
          type="button"
          className="flex items-center gap-1.5 rounded-md border border-primary bg-white px-5 py-2.5 text-[12.5px] font-medium text-primary transition-colors duration-150 hover:bg-primary-50">
          
          <ArrowLeftIcon className="h-4 w-4" aria-hidden="true" /> Back
        </button>
        <button
          type="button"
          className="ml-auto flex items-center gap-1.5 rounded-md border border-primary bg-white px-5 py-2.5 text-[12.5px] font-medium text-primary transition-colors duration-150 hover:bg-primary-50">
          
          <SaveIcon className="h-4 w-4" aria-hidden="true" /> Save as Draft
        </button>
        <button
          type="button"
          className="flex items-center gap-1.5 rounded-md bg-primary px-5 py-2.5 text-[12.5px] font-semibold text-white transition-colors duration-150 hover:bg-primary-700">
          
          Save &amp; Next <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
        </button>
        <button
          type="button"
          className="flex items-center gap-1.5 rounded-md bg-success px-5 py-2.5 text-[12.5px] font-semibold text-white transition-colors duration-150 hover:bg-[#146c43]">
          
          <EyeIcon className="h-4 w-4" aria-hidden="true" /> Preview Test
        </button>
      </div>
    </AdminLayout>);

}