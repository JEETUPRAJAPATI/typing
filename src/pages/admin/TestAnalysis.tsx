import React, { useState } from 'react';
import {
  FilterIcon,
  CalendarIcon,
  RotateCcwIcon,
  UsersIcon,
  CheckCircle2Icon,
  XCircleIcon,
  GaugeIcon,
  TargetIcon,
  DownloadIcon,
  EyeIcon,
  SlidersHorizontalIcon,
  InfoIcon } from
'lucide-react';
import { AdminLayout } from '../../components/admin/AdminLayout';
import { Breadcrumbs } from '../../components/common/PageHeading';
import { Panel } from '../../components/common/Pill';

const stats = [
{ icon: UsersIcon, label: 'Total Appeared', value: '147', sub: '100%', color: '#0D6EFD', subColor: 'text-primary' },
{ icon: CheckCircle2Icon, label: 'Qualified', value: '98', sub: '66.67%', color: '#198754', subColor: 'text-success' },
{ icon: XCircleIcon, label: 'Not Qualified', value: '49', sub: '33.33%', color: '#DC3545', subColor: 'text-danger' },
{ icon: GaugeIcon, label: 'Average Gross WPM', value: '42.35', sub: '↑ 6.25%', color: '#0EA5E9', subColor: 'text-success' },
{ icon: GaugeIcon, label: 'Average Net WPM', value: '37.12', sub: '↑ 5.84%', color: '#F59E0B', subColor: 'text-success' },
{ icon: TargetIcon, label: 'Average Accuracy', value: '92.18%', sub: '↑ 3.10%', color: '#6F42C1', subColor: 'text-success' }];


const scoreDistribution = [
{ label: '60+ WPM', value: '22 (14.97%)', color: '#198754', pct: 14.97 },
{ label: '40-59 WPM', value: '48 (32.65%)', color: '#0D6EFD', pct: 32.65 },
{ label: '25-39 WPM', value: '42 (28.57%)', color: '#F59E0B', pct: 28.57 },
{ label: 'Below 25 WPM', value: '35 (23.81%)', color: '#DC3545', pct: 23.81 }];


const difficultySummary = [
{ label: 'Easy', value: '61 (41.50%)', color: '#198754', pct: 41.5 },
{ label: 'Moderate', value: '52 (35.37%)', color: '#F59E0B', pct: 35.37 },
{ label: 'Hard', value: '34 (23.13%)', color: '#DC3545', pct: 23.13 }];


interface ResultRow {
  no: number;
  user: string;
  course: string;
  type: 'Live' | 'Offline';
  exam: string;
  test: string;
  date: string;
  gross: string;
  net: string;
  accuracy: string;
  marks: string;
  qualified: boolean;
}

const results: ResultRow[] = [
{ no: 1, user: 'rahul.verma', course: 'Typing English', type: 'Live', exam: 'AHC RO ARO Typing Test', test: '01', date: '24 May 2026, 10:30 AM', gross: '72.00', net: '68.50', accuracy: '96.50%', marks: '94.00', qualified: true },
{ no: 2, user: 'anjali.sharma', course: 'Typing English', type: 'Live', exam: 'AHC RO ARO Typing Test', test: '01', date: '24 May 2026, 10:32 AM', gross: '66.80', net: '63.20', accuracy: '95.20%', marks: '91.00', qualified: true },
{ no: 3, user: 'priyanshu.singh', course: 'Typing Hindi', type: 'Live', exam: 'AHC RO ARO Typing Test', test: '01', date: '24 May 2026, 10:34 AM', gross: '63.50', net: '60.10', accuracy: '94.10%', marks: '89.50', qualified: true },
{ no: 4, user: 'neha.gupta', course: 'Steno English', type: 'Live', exam: 'AHC RO ARO Typing Test', test: '01', date: '24 May 2026, 10:36 AM', gross: '61.90', net: '58.70', accuracy: '93.00%', marks: '87.00', qualified: true },
{ no: 5, user: 'mohit.kumar', course: 'Typing English', type: 'Live', exam: 'AHC RO ARO Typing Test', test: '01', date: '24 May 2026, 10:38 AM', gross: '59.80', net: '57.30', accuracy: '92.80%', marks: '85.50', qualified: true },
{ no: 6, user: 'saurabh.yadav', course: 'Typing Hindi', type: 'Offline', exam: 'AHC RO ARO Typing Test', test: '01', date: '24 May 2026, 10:40 AM', gross: '48.20', net: '34.60', accuracy: '88.40%', marks: '62.00', qualified: false },
{ no: 7, user: 'pooja.kumari', course: 'Steno Hindi', type: 'Offline', exam: 'AHC RO ARO Typing Test', test: '01', date: '24 May 2026, 10:42 AM', gross: '41.30', net: '28.20', accuracy: '85.10%', marks: '48.00', qualified: false },
{ no: 8, user: 'deepak.raj', course: 'Typing English', type: 'Offline', exam: 'AHC RO ARO Typing Test', test: '01', date: '24 May 2026, 10:44 AM', gross: '35.60', net: '21.40', accuracy: '82.50%', marks: '36.00', qualified: false }];


const reports = [
'Individual Result Report',
'Summary Report',
'Performance Report',
'Detailed Analytics (Excel)'];


function PerformanceChart() {
  const width = 560;
  const height = 180;
  const series = [
  { label: 'Gross WPM', color: '#0D6EFD', points: [44, 46, 45, 48, 47, 50, 49, 52, 50, 54, 52, 56] },
  { label: 'Net WPM', color: '#198754', points: [30, 32, 31, 34, 33, 35, 34, 37, 36, 38, 37, 40] },
  { label: 'Accuracy (%)', color: '#F59E0B', points: [80, 81, 80, 82, 83, 82, 84, 83, 85, 84, 86, 85] }];

  const max = 100;
  const path = (points: number[]) =>
  points.
  map((p, i) => {
    const x = i / (points.length - 1) * width;
    const y = height - p / max * height;
    return `${i === 0 ? 'M' : 'L'}${x.toFixed(1)},${y.toFixed(1)}`;
  }).
  join(' ');

  return (
    <>
      <ul className="mb-2 flex flex-wrap gap-4">
        {series.map((s) =>
        <li key={s.label} className="flex items-center gap-1.5 text-[11px] text-slate-600">
            <span className="h-[3px] w-4 rounded-full" style={{ backgroundColor: s.color }} aria-hidden="true" />
            {s.label}
          </li>
        )}
      </ul>
      <svg viewBox={`0 0 ${width} ${height}`} className="h-[180px] w-full" role="img" aria-label="Performance overview chart">
        {[0, 1, 2, 3, 4, 5].map((i) =>
        <line key={i} x1={0} x2={width} y1={i / 5 * height} y2={i / 5 * height} stroke="#E2E8F0" strokeWidth={1} />
        )}
        {series.map((s) =>
        <path key={s.label} d={path(s.points)} fill="none" stroke={s.color} strokeWidth={2} strokeLinecap="round" />
        )}
      </svg>
      <ul className="mt-1 flex justify-between text-[10.5px] text-slate-400">
        {['01 May', '06 May', '11 May', '16 May', '21 May', '26 May', '31 May'].map((d) =>
        <li key={d}>{d}</li>
        )}
      </ul>
    </>);

}

function Donut({ data }: {data: {color: string;pct: number;}[];}) {
  let offset = 0;
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  return (
    <svg viewBox="0 0 100 100" className="h-[120px] w-[120px] shrink-0" role="presentation">
      {data.map((s) => {
        const length = s.pct / 100 * circumference;
        const el =
        <circle
          key={s.color}
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          stroke={s.color}
          strokeWidth="16"
          strokeDasharray={`${length} ${circumference - length}`}
          strokeDashoffset={-offset}
          transform="rotate(-90 50 50)" />;


        offset += length;
        return el;
      })}
    </svg>);

}

export function AdminTestAnalysis() {
  const [tab, setTab] = useState<'Typing' | 'Steno'>('Typing');

  return (
    <AdminLayout
      searchPlaceholder="Search results..."
      showActionButtons={false}
      summary={[
      { label: 'Total Students', value: '1,575' },
      { label: 'Active Students', value: '1,142' },
      { label: 'Tests Conducted', value: '3,284' },
      { label: 'Typing Tests', value: '2,650' },
      { label: 'Steno Tests', value: '634' }]
      }>
      
      <div className="mb-4">
        <h2 className="font-display text-[26px] font-bold leading-tight text-navy-800">
          Test Analysis (Results)
        </h2>
        <p className="text-[12.5px] text-slate-500">
          View detailed performance and analysis of typing and steno tests.
        </p>
      </div>

      <div className="mb-4 flex flex-wrap items-center gap-4 border-b border-slate-200">
        {(['Typing', 'Steno'] as const).map((t) =>
        <button
          key={t}
          type="button"
          onClick={() => setTab(t)}
          aria-pressed={tab === t}
          className={`-mb-px border-b-2 px-1 py-2.5 text-[13px] font-semibold transition-colors duration-150 ${
          tab === t ? 'border-primary text-primary' : 'border-transparent text-slate-500 hover:text-navy-800'}`
          }>
          
            {t}
          </button>
        )}
        <div className="ml-auto pb-2">
          <Breadcrumbs
            crumbs={[
            { label: 'Home', to: '/admin' },
            { label: 'Test Analysis', to: '/admin/test-analysis' },
            { label: `${tab} Results` }]
            } />
          
        </div>
      </div>

      <section className="mb-4 rounded-xl border border-slate-200 bg-white p-3.5 shadow-card">
        <h3 className="mb-3 flex items-center gap-2 text-[12.5px] font-semibold text-navy-800">
          <FilterIcon className="h-3.5 w-3.5 text-primary" aria-hidden="true" /> Filter Results
        </h3>
        <div className="flex flex-wrap items-end gap-3">
          {[
          { label: 'Select Exam', options: ['AHC RO ARO Typing Test'] },
          { label: 'Select Test', options: ['AHC RO ARO Typing Test 01'] },
          { label: 'Course', options: ['All Courses'] },
          { label: 'Test Type', options: ['All (Live / Offline)', 'Live', 'Offline'] }].
          map((f) =>
          <label key={f.label} className="block">
              <span className="mb-1.5 block text-[11.5px] font-semibold text-navy-800">{f.label}</span>
              <select className="w-[190px] rounded-md border border-slate-300 px-2.5 py-2 text-[12px] outline-none focus:border-primary">
                {f.options.map((o) =>
              <option key={o}>{o}</option>
              )}
              </select>
            </label>
          )}
          <label className="block">
            <span className="mb-1.5 block text-[11.5px] font-semibold text-navy-800">User Name</span>
            <input
              type="text"
              placeholder="Enter user name"
              className="w-[160px] rounded-md border border-slate-300 px-2.5 py-2 text-[12px] outline-none focus:border-primary" />
            
          </label>
          <label className="block">
            <span className="mb-1.5 block text-[11.5px] font-semibold text-navy-800">Date Range</span>
            <span className="relative block">
              <CalendarIcon className="pointer-events-none absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-400" aria-hidden="true" />
              <input
                type="text"
                defaultValue="01 May 2026 - 31 May 2026"
                className="w-[210px] rounded-md border border-slate-300 py-2 pl-8 pr-2.5 text-[12px] outline-none focus:border-primary" />
              
            </span>
          </label>
          <button
            type="button"
            className="flex items-center gap-1.5 rounded-md bg-primary px-4 py-2 text-[12px] font-semibold text-white transition-colors duration-150 hover:bg-primary-700">
            
            <FilterIcon className="h-3.5 w-3.5" aria-hidden="true" /> Apply Filter
          </button>
          <button
            type="button"
            className="flex items-center gap-1.5 rounded-md border border-slate-300 px-3 py-2 text-[12px] font-medium text-slate-600 transition-colors duration-150 hover:bg-slate-50">
            
            <RotateCcwIcon className="h-3.5 w-3.5" aria-hidden="true" /> Reset
          </button>
        </div>
      </section>

      <ul className="mb-4 grid gap-4 sm:grid-cols-3 xl:grid-cols-6">
        {stats.map((s) =>
        <li key={s.label} className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-3.5 shadow-card">
            <span
            className="grid h-9 w-9 shrink-0 place-items-center rounded-full text-white"
            style={{ backgroundColor: s.color }}>

              <s.icon className="h-4 w-4" aria-hidden="true" />
            </span>
            <div className="min-w-0">
              <p className="text-[11px] text-slate-500">{s.label}</p>
              <p className="font-display text-[20px] font-bold leading-tight text-navy-800">{s.value}</p>
              <p className={`text-[11px] font-medium ${s.subColor}`}>{s.sub}</p>
            </div>
          </li>
        )}
      </ul>

      <div className="mb-4 grid gap-4 xl:grid-cols-[1fr_330px_330px]">
        <Panel
          title="Performance Overview"
          right={
          <select className="rounded-md border border-slate-300 px-2.5 py-1 text-[11.5px] outline-none focus:border-primary">
              <option>Daily</option>
              <option>Weekly</option>
            </select>
          }>
          
          <PerformanceChart />
        </Panel>

        <Panel title="Score Distribution (Net WPM)">
          <div className="flex items-center gap-4">
            <Donut data={scoreDistribution} />
            <ul className="space-y-1.5 text-[11.5px]">
              {scoreDistribution.map((s) =>
              <li key={s.label} className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-sm" style={{ backgroundColor: s.color }} aria-hidden="true" />
                  <span className="text-slate-600">{s.label}</span>
                  <span className="ml-auto font-medium text-navy-800">{s.value}</span>
                </li>
              )}
            </ul>
          </div>
        </Panel>

        <Panel title="Summary by Difficulty">
          <div className="flex items-center gap-4">
            <Donut data={difficultySummary} />
            <ul className="space-y-1.5 text-[11.5px]">
              {difficultySummary.map((s) =>
              <li key={s.label} className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-sm" style={{ backgroundColor: s.color }} aria-hidden="true" />
                  <span className="text-slate-600">{s.label}</span>
                  <span className="ml-auto font-medium text-navy-800">{s.value}</span>
                </li>
              )}
            </ul>
          </div>
        </Panel>
      </div>

      <div className="grid gap-4 xl:grid-cols-[1fr_290px]">
        <section className="rounded-xl border border-slate-200 bg-white shadow-card">
          <div className="flex flex-wrap items-center gap-2.5 p-3.5">
            <h3 className="font-display text-[14px] font-semibold text-navy-800">Detailed Results</h3>
            <button
              type="button"
              className="ml-auto flex items-center gap-1.5 rounded-md border border-slate-300 px-3 py-1.5 text-[11.5px] font-medium text-slate-600 transition-colors duration-150 hover:bg-slate-50">
              
              <SlidersHorizontalIcon className="h-3.5 w-3.5" aria-hidden="true" /> Show / Hide Columns
            </button>
            <button
              type="button"
              className="flex items-center gap-1.5 rounded-md border border-slate-300 px-3 py-1.5 text-[11.5px] font-medium text-slate-600 transition-colors duration-150 hover:bg-slate-50">
              
              <DownloadIcon className="h-3.5 w-3.5" aria-hidden="true" /> Export
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[1020px] text-left">
              <thead className="bg-slate-50 text-[11px] font-semibold text-slate-600">
                <tr>
                  <th scope="col" className="px-3 py-2.5">
                    <input type="checkbox" aria-label="Select all results" className="h-3.5 w-3.5 accent-primary" />
                  </th>
                  <th scope="col" className="px-3 py-2.5">S.No.</th>
                  <th scope="col" className="px-3 py-2.5">User Name</th>
                  <th scope="col" className="px-3 py-2.5">Course</th>
                  <th scope="col" className="px-3 py-2.5">Test Type</th>
                  <th scope="col" className="px-3 py-2.5">Exam Name</th>
                  <th scope="col" className="px-3 py-2.5">Test No.</th>
                  <th scope="col" className="px-3 py-2.5">Test Date &amp; Time</th>
                  <th scope="col" className="px-3 py-2.5">Gross WPM</th>
                  <th scope="col" className="px-3 py-2.5">Net WPM</th>
                  <th scope="col" className="px-3 py-2.5">Accuracy (%)</th>
                  <th scope="col" className="px-3 py-2.5">Marks</th>
                  <th scope="col" className="px-3 py-2.5">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-[11px]">
                {results.map((r) =>
                <tr key={r.no} className="transition-colors duration-150 hover:bg-slate-50/70">
                    <td className="px-3 py-2.5">
                      <input type="checkbox" aria-label={`Select ${r.user}`} className="h-3.5 w-3.5 accent-primary" />
                    </td>
                    <td className="px-3 py-2.5 text-slate-600">{r.no}</td>
                    <td className="px-3 py-2.5 font-medium text-navy-800">{r.user}</td>
                    <td className="px-3 py-2.5 text-slate-600">{r.course}</td>
                    <td className="px-3 py-2.5">
                      <span
                      className={`rounded px-2 py-[2px] text-[10px] font-medium ${
                      r.type === 'Live' ? 'bg-emerald-50 text-emerald-700' : 'bg-rose-50 text-rose-700'}`
                      }>
                      
                        {r.type}
                      </span>
                    </td>
                    <td className="px-3 py-2.5 text-slate-600">{r.exam}</td>
                    <td className="px-3 py-2.5 text-slate-600">{r.test}</td>
                    <td className="px-3 py-2.5 text-slate-600">{r.date}</td>
                    <td className="px-3 py-2.5 text-navy-800">{r.gross}</td>
                    <td className="px-3 py-2.5 text-navy-800">{r.net}</td>
                    <td className="px-3 py-2.5 text-navy-800">{r.accuracy}</td>
                    <td className="px-3 py-2.5 text-navy-800">{r.marks}</td>
                    <td className="px-3 py-2.5">
                      <span className="flex items-center gap-1.5">
                        <span
                        className={`rounded px-2 py-[2px] text-[10px] font-medium ${
                        r.qualified ? 'bg-emerald-50 text-emerald-700' : 'bg-rose-50 text-rose-700'}`
                        }>
                        
                          {r.qualified ? 'Qualified' : 'Not Qualified'}
                        </span>
                        <button
                        type="button"
                        aria-label={`View detailed result for ${r.user}`}
                        className="text-slate-400 transition-colors duration-150 hover:text-primary">
                        
                          <EyeIcon className="h-3.5 w-3.5" aria-hidden="true" />
                        </button>
                      </span>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div className="flex flex-wrap items-center gap-3 border-t border-slate-100 p-3.5 text-[12px] text-slate-600">
            <span>Showing 1 to 10 of 147 results</span>
            <label className="flex items-center gap-1.5">
              <select
                aria-label="Rows per page"
                className="rounded border border-slate-300 px-2 py-1 text-[11.5px] outline-none focus:border-primary">
                
                <option>10</option>
                <option>25</option>
              </select>
              per page
            </label>
            <nav aria-label="Pagination" className="flex items-center gap-1">
              {['1', '2', '3', '...', '15'].map((p) =>
              <button
                key={p}
                type="button"
                aria-current={p === '1' ? 'page' : undefined}
                className={`grid h-7 min-w-7 place-items-center rounded px-2 text-[11.5px] font-medium transition-colors duration-150 ${
                p === '1' ? 'bg-primary text-white' : 'border border-slate-300 hover:bg-slate-50'}`
                }>
                
                  {p}
                </button>
              )}
            </nav>
          </div>
        </section>

        <div className="space-y-4">
          <Panel title="Download Reports">
            <ul className="space-y-2">
              {reports.map((r) =>
              <li key={r}>
                  <button
                  type="button"
                  className="flex w-full items-center gap-2 rounded-md border border-slate-200 px-3 py-2 text-left text-[12px] font-medium text-primary transition-colors duration-150 hover:bg-primary-50">
                  
                    {r}
                    <DownloadIcon className="ml-auto h-3.5 w-3.5 text-slate-400" aria-hidden="true" />
                  </button>
                </li>
              )}
            </ul>
          </Panel>

          <Panel title="Note">
            <p className="flex items-start gap-2 text-[11.5px] text-slate-500">
              <InfoIcon className="mt-[2px] h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              Click on the view icon to see a detailed result. Reports are generated based on the
              applied filters.
            </p>
          </Panel>
        </div>
      </div>
    </AdminLayout>);

}