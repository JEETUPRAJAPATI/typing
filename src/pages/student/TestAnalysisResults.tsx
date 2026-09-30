import React, { useState } from 'react';
import {
  BarChart3Icon,
  FilterIcon,
  XIcon,
  CalendarIcon,
  EyeIcon,
  ZapIcon,
  GaugeIcon,
  MoreVerticalIcon,
  DownloadIcon } from
'lucide-react';
import { StudentLayout } from '../../components/student/StudentLayout';

interface ResultRow {
  course: string;
  testType: 'Live' | 'Offline';
  examName: string;
  testNo: string;
  dateTime: string;
  grossWpm: number;
  netWpm: number;
  accuracy: number;
  marks: number;
  status: 'Qualified' | 'Not Qualified';
}

const typingRows: ResultRow[] = [
{ course: 'Typing English', testType: 'Live', examName: 'AHC RO ARO Typing Test', testNo: '01', dateTime: '24 May 2026, 10:30 AM', grossWpm: 72.0, netWpm: 68.5, accuracy: 96.5, marks: 94.0, status: 'Qualified' },
{ course: 'Typing English', testType: 'Live', examName: 'AHC RO ARO Typing Test', testNo: '01', dateTime: '24 May 2026, 10:32 AM', grossWpm: 66.8, netWpm: 63.2, accuracy: 95.2, marks: 91.0, status: 'Qualified' },
{ course: 'Typing Hindi', testType: 'Live', examName: 'AHC RO ARO Typing Test', testNo: '01', dateTime: '24 May 2026, 10:34 AM', grossWpm: 63.5, netWpm: 60.1, accuracy: 94.1, marks: 89.5, status: 'Qualified' },
{ course: 'Typing English', testType: 'Live', examName: 'AHC RO ARO Typing Test', testNo: '01', dateTime: '24 May 2026, 10:38 AM', grossWpm: 59.8, netWpm: 57.3, accuracy: 92.8, marks: 85.5, status: 'Qualified' },
{ course: 'Typing Hindi', testType: 'Offline', examName: 'AHC RO ARO Typing Test', testNo: '01', dateTime: '24 May 2026, 10:40 AM', grossWpm: 48.2, netWpm: 34.6, accuracy: 88.4, marks: 62.0, status: 'Not Qualified' },
{ course: 'Typing English', testType: 'Offline', examName: 'AHC RO ARO Typing Test', testNo: '02', dateTime: '20 May 2026, 09:12 AM', grossWpm: 1.09, netWpm: 0.9, accuracy: 37.5, marks: 12.0, status: 'Not Qualified' }];


const stenoRows: ResultRow[] = [
{ course: 'Steno English', testType: 'Live', examName: 'AHC RO ARO Typing Test', testNo: '01', dateTime: '24 May 2026, 10:36 AM', grossWpm: 61.9, netWpm: 58.7, accuracy: 93.0, marks: 87.0, status: 'Qualified' },
{ course: 'Steno Hindi', testType: 'Offline', examName: 'AHC RO ARO Typing Test', testNo: '01', dateTime: '24 May 2026, 10:42 AM', grossWpm: 41.3, netWpm: 28.2, accuracy: 85.1, marks: 48.0, status: 'Not Qualified' }];


function StatusPill({ status }: {status: ResultRow['status'];}) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-[3px] text-[10.5px] font-semibold ${
      status === 'Qualified' ? 'bg-emerald-50 text-emerald-700' : 'bg-rose-50 text-rose-600'}`
      }>

      {status}
    </span>);

}

function TestTypePill({ type }: {type: ResultRow['testType'];}) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-[3px] text-[10.5px] font-semibold ${
      type === 'Live' ? 'bg-emerald-50 text-emerald-700' : 'bg-slate-100 text-slate-500'}`
      }>

      {type}
    </span>);

}

function SpeedBadge({ value }: {value: number;}) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-lg bg-rose-50 px-2.5 py-1.5">
      <GaugeIcon className="h-4 w-4 text-rose-500" aria-hidden="true" />
      <span className="leading-tight">
        <span className="block text-[12.5px] font-bold text-navy-800">{value.toFixed(2)}</span>
        <span className="block text-[9px] font-semibold text-slate-400">WPM</span>
      </span>
    </span>);

}

export function TestAnalysisResults() {
  const [tab, setTab] = useState<'typing' | 'steno'>('typing');
  const [page, setPage] = useState(1);
  const rows = tab === 'typing' ? typingRows : stenoRows;
  const qualifiedCount = rows.filter((r) => r.status === 'Qualified').length;
  const avgWpm = Math.round(rows.reduce((sum, r) => sum + r.netWpm, 0) / rows.length);

  return (
    <StudentLayout showSearch>
      <div className="mb-4 flex flex-wrap items-start justify-between gap-4">
        <div>
          <h2 className="flex items-center gap-2 font-display text-[22px] font-bold text-navy-800">
            <BarChart3Icon className="h-5 w-5 text-primary" aria-hidden="true" /> Test Analysis (Results)
          </h2>
          <p className="mt-0.5 text-[12.5px] text-slate-500">
            View detailed performance and analysis of typing and steno tests.
          </p>
          <div className="mt-2.5 flex gap-4 border-b border-slate-200">
            {([
            { id: 'typing' as const, label: 'Typing' },
            { id: 'steno' as const, label: 'Steno' }]).
            map((t) =>
            <button
              key={t.id}
              type="button"
              onClick={() => {setTab(t.id);setPage(1);}}
              className={`border-b-2 pb-2 text-[13px] font-semibold transition-colors duration-150 ${
              tab === t.id ? 'border-primary text-primary' : 'border-transparent text-slate-500 hover:text-navy-800'}`
              }>

                {t.label}
              </button>
            )}
          </div>
        </div>

        <div className="flex shrink-0 gap-2.5">
          <div className="rounded-lg border border-primary-100 bg-primary-50 px-4 py-2 text-center">
            <p className="font-display text-[18px] font-bold text-primary">{rows.length}</p>
            <p className="text-[10px] font-medium text-primary-700">Total Tests</p>
          </div>
          <div className="rounded-lg border border-primary-100 bg-primary-50 px-4 py-2 text-center">
            <p className="font-display text-[18px] font-bold text-primary">{qualifiedCount}</p>
            <p className="text-[10px] font-medium text-primary-700">Qualified</p>
          </div>
          <div className="rounded-lg border border-primary-100 bg-primary-50 px-4 py-2 text-center">
            <p className="font-display text-[18px] font-bold text-primary">{avgWpm}</p>
            <p className="text-[10px] font-medium text-primary-700">Avg WPM</p>
          </div>
        </div>
      </div>

      <section className="mb-4 rounded-xl border border-slate-200 bg-white p-4 shadow-card">
        <h3 className="mb-3 flex items-center gap-2 font-display text-[13.5px] font-semibold text-navy-800">
          <FilterIcon className="h-4 w-4 text-primary" aria-hidden="true" /> Filter Results
        </h3>
        <div className="grid gap-3.5 sm:grid-cols-3">
          <label className="block">
            <span className="mb-1.5 block text-[11.5px] font-semibold text-navy-800">Select Exam</span>
            <select className="w-full rounded-md border border-slate-300 px-3 py-2 text-[12.5px] text-slate-600 outline-none focus:border-primary">
              <option>AHC RO ARO Typing Test</option>
              <option>RRB NTPC Typing Test</option>
            </select>
          </label>
          <label className="block">
            <span className="mb-1.5 block text-[11.5px] font-semibold text-navy-800">Test Type</span>
            <select className="w-full rounded-md border border-slate-300 px-3 py-2 text-[12.5px] text-slate-600 outline-none focus:border-primary">
              <option>All (Live / Offline)</option>
              <option>Live</option>
              <option>Offline</option>
            </select>
          </label>
          <label className="block">
            <span className="mb-1.5 block text-[11.5px] font-semibold text-navy-800">Date Range</span>
            <span className="relative block">
              <input
                type="text"
                defaultValue="01 May 2026 - 31 May 2026"
                className="w-full rounded-md border border-slate-300 px-3 py-2 pr-8 text-[12.5px] outline-none focus:border-primary" />

              <CalendarIcon
                className="pointer-events-none absolute right-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-400"
                aria-hidden="true" />

            </span>
          </label>
        </div>
        <div className="mt-3.5 flex gap-2.5">
          <button
            type="button"
            className="flex items-center gap-1.5 rounded-md bg-primary px-4 py-2 text-[12.5px] font-semibold text-white transition-colors duration-150 hover:bg-primary-700">

            <FilterIcon className="h-3.5 w-3.5" aria-hidden="true" /> Apply Filters
          </button>
          <button
            type="button"
            className="flex items-center gap-1.5 rounded-md border border-primary px-4 py-2 text-[12.5px] font-medium text-primary transition-colors duration-150 hover:bg-primary-50">

            <XIcon className="h-3.5 w-3.5" aria-hidden="true" /> Clear Filters
          </button>
        </div>
      </section>

      <div className="mb-2.5 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h3 className="font-display text-[15px] font-bold text-navy-800">Detailed Results</h3>
          <p className="text-[11.5px] text-slate-500">Showing 1 to {rows.length} of 147 results</p>
        </div>
        <button
          type="button"
          className="flex items-center gap-1.5 rounded-md border border-slate-300 bg-white px-3.5 py-2 text-[12px] font-semibold text-navy-800 shadow-card transition-colors duration-150 hover:bg-slate-50">

          <DownloadIcon className="h-3.5 w-3.5" aria-hidden="true" /> Download Report
        </button>
      </div>

      <section className="hidden overflow-hidden rounded-xl border border-slate-200 bg-white shadow-card md:block">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[980px] text-left text-[12px]">
            <thead className="bg-gradient-to-r from-primary to-indigo-600 text-[10.5px] font-semibold uppercase tracking-wide text-white">
              <tr>
                <th scope="col" className="px-4 py-3">#</th>
                <th scope="col" className="px-4 py-3">Course</th>
                <th scope="col" className="px-4 py-3">Test Type</th>
                <th scope="col" className="px-4 py-3">Exam Name</th>
                <th scope="col" className="px-4 py-3">Test No.</th>
                <th scope="col" className="px-4 py-3">Test Date &amp; Time</th>
                <th scope="col" className="px-4 py-3">Gross Speed (WPM)</th>
                <th scope="col" className="px-4 py-3">Net Speed (WPM)</th>
                <th scope="col" className="px-4 py-3">Accuracy (%)</th>
                <th scope="col" className="px-4 py-3 text-right">Marks</th>
                <th scope="col" className="px-4 py-3">Status</th>
                <th scope="col" className="px-4 py-3 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {rows.map((r, i) =>
              <tr key={i} className="transition-colors duration-150 hover:bg-slate-50/70">
                  <td className="px-4 py-3 text-slate-400">{i + 1}</td>
                  <td className="px-4 py-3 font-medium text-navy-800">{r.course}</td>
                  <td className="px-4 py-3">
                    <TestTypePill type={r.testType} />
                  </td>
                  <td className="px-4 py-3 text-slate-600">{r.examName}</td>
                  <td className="px-4 py-3 text-slate-600">{r.testNo}</td>
                  <td className="px-4 py-3 text-slate-500">{r.dateTime}</td>
                  <td className="px-4 py-3">
                    <SpeedBadge value={r.grossWpm} />
                  </td>
                  <td className="px-4 py-3">
                    <SpeedBadge value={r.netWpm} />
                  </td>
                  <td className="px-4 py-3">
                    <span className="mb-1 block text-[11.5px] font-semibold text-slate-600">
                      {r.accuracy.toFixed(2)}%
                    </span>
                    <span className="block h-1.5 w-24 overflow-hidden rounded-full bg-slate-100">
                      <span
                      className={`block h-full rounded-full ${r.status === 'Qualified' ? 'bg-emerald-500' : 'bg-danger'}`}
                      style={{ width: `${Math.min(100, r.accuracy)}%` }} />

                    </span>
                  </td>
                  <td className="px-4 py-3 text-right font-semibold text-navy-800">{r.marks.toFixed(2)}</td>
                  <td className="px-4 py-3">
                    <StatusPill status={r.status} />
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center justify-end gap-2">
                      <button
                      type="button"
                      aria-label="View details"
                      className="text-primary transition-colors duration-150 hover:text-primary-700">

                        <EyeIcon className="h-4 w-4" aria-hidden="true" />
                      </button>
                      <button
                      type="button"
                      aria-label="More actions"
                      className="text-slate-400 transition-colors duration-150 hover:text-navy-800">

                        <MoreVerticalIcon className="h-4 w-4" aria-hidden="true" />
                      </button>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>

      <div className="space-y-3 md:hidden">
        {rows.map((r, i) =>
        <div key={i} className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-3.5 shadow-card">
            <span
            className={`grid h-12 w-12 shrink-0 place-items-center rounded-full text-center text-[10px] font-bold leading-tight ${
            r.status === 'Qualified' ? 'bg-emerald-50 text-emerald-700' : 'bg-rose-50 text-rose-600'}`
            }>

              {r.netWpm.toFixed(r.netWpm < 10 ? 2 : 0)}
              <br />
              WPM
            </span>
            <div className="min-w-0 flex-1">
              <span className="block h-1.5 overflow-hidden rounded-full bg-slate-100">
                <span
                className={`block h-full rounded-full ${r.status === 'Qualified' ? 'bg-emerald-500' : 'bg-primary'}`}
                style={{ width: `${Math.min(100, r.accuracy)}%` }} />

              </span>
              <p className="mt-1 text-[11px] font-semibold text-slate-600">{r.accuracy.toFixed(1)}%</p>
            </div>
            <StatusPill status={r.status} />
            <div className="shrink-0 text-right">
              <p className="text-[10.5px] text-slate-500">{r.dateTime.split(',')[0]}</p>
              <p className="text-[10px] text-slate-400">{r.dateTime.split(',')[1]}</p>
            </div>
            <button
            type="button"
            className="flex shrink-0 items-center gap-1 rounded-md bg-primary px-2.5 py-1.5 text-[10.5px] font-semibold text-white">

              <EyeIcon className="h-3 w-3" aria-hidden="true" /> View
            </button>
          </div>
        )}
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-end gap-3">
        <div className="flex items-center gap-2">
          <span className="text-[11.5px] text-slate-500">Rows per page</span>
          <select className="rounded-md border border-slate-300 px-2 py-1.5 text-[11.5px] text-slate-600 outline-none">
            <option>10</option>
            <option>25</option>
            <option>50</option>
          </select>
          <div className="flex gap-1">
            {[1, 2, 3].map((p) =>
            <button
              key={p}
              type="button"
              onClick={() => setPage(p)}
              className={`grid h-7 w-7 place-items-center rounded-md text-[11.5px] font-semibold transition-colors duration-150 ${
              page === p ? 'bg-primary text-white' : 'text-slate-600 hover:bg-slate-100'}`
              }>

                {p}
              </button>
            )}
            <span className="grid h-7 w-7 place-items-center text-[11.5px] text-slate-400">…</span>
            <button
              type="button"
              onClick={() => setPage(15)}
              className={`grid h-7 w-7 place-items-center rounded-md text-[11.5px] font-semibold transition-colors duration-150 ${
              page === 15 ? 'bg-primary text-white' : 'text-slate-600 hover:bg-slate-100'}`
              }>

              15
            </button>
          </div>
        </div>
      </div>

      <p className="mt-4 flex items-center gap-2 rounded-lg bg-primary-50 p-3 text-[11.5px] text-primary-700">
        <ZapIcon className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
        Tap the eye icon on any row to open its full detailed analysis report.
      </p>
    </StudentLayout>);

}
