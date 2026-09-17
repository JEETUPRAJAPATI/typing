import React, { useState } from 'react';
import {
  TrophyIcon,
  SearchIcon,
  DownloadIcon,
  UploadIcon,
  FilterIcon,
  RotateCcwIcon,
  CalendarIcon,
  UsersIcon,
  GaugeIcon,
  TargetIcon,
  BarChart3Icon,
  UserIcon,
  InfoIcon } from
'lucide-react';
import { AdminLayout } from '../../components/admin/AdminLayout';
import { Panel } from '../../components/common/Pill';

type Tab = 'Typing Leaderboard' | 'Steno Leaderboard';

const typingStats = [
{ icon: UsersIcon, label: 'Total Students', value: '2,856', sub: 'All Students in System', color: '#0D6EFD' },
{ icon: TrophyIcon, label: 'Topper (Gross WPM)', value: 'Aman Kumar', sub: '72.80 WPM', color: '#198754' },
{ icon: GaugeIcon, label: 'Highest Gross WPM', value: '72.80', sub: 'By Aman Kumar', color: '#F59E0B' },
{ icon: TargetIcon, label: 'Highest Net WPM', value: '68.50', sub: 'By Aman Kumar', color: '#6F42C1' },
{ icon: BarChart3Icon, label: 'Average Accuracy', value: '93.42%', sub: 'Overall Average', color: '#0EA5E9' }];


const stenoStats = [
{ icon: UsersIcon, label: 'Total Students', value: '856', sub: 'All Students in System', color: '#0D6EFD' },
{ icon: TrophyIcon, label: 'Topper (Dictation Speed)', value: 'Anjali Sharma', sub: '126.40 WPM', color: '#198754' },
{ icon: GaugeIcon, label: 'Highest Dictation Speed', value: '126.40 WPM', sub: 'By Anjali Sharma', color: '#F59E0B' },
{ icon: TargetIcon, label: 'Average Accuracy', value: '95.18%', sub: 'Overall Average', color: '#6F42C1' }];


const typingRows = [
{ rank: 1, name: 'Aman Kumar', course: 'Typing English', exam: 'DSSSB LDC Typing Test', test: 'Test 07', type: 'Live', gross: '72.80', net: '68.50', acc: '96.50%', marks: '94.00' },
{ rank: 2, name: 'Pooja Sharma', course: 'Typing Hindi', exam: 'SSC CHSL Typing Test', test: 'Test 05', type: 'Live', gross: '66.80', net: '63.20', acc: '95.20%', marks: '91.00' },
{ rank: 3, name: 'Rahul Verma', course: 'Steno English', exam: 'SSC Steno Dictation Test', test: 'Test 03', type: 'Live', gross: '63.50', net: '60.10', acc: '94.10%', marks: '89.50' },
{ rank: 4, name: 'Vikash Singh', course: 'Typing English', exam: 'UPSSSC Typing Test', test: 'Test 02', type: 'Offline', gross: '61.90', net: '58.70', acc: '93.00%', marks: '87.00' },
{ rank: 5, name: 'Neha Yadav', course: 'Steno Hindi', exam: 'Delhi High Court Steno', test: 'Test 04', type: 'Live', gross: '59.80', net: '57.30', acc: '92.80%', marks: '85.50' },
{ rank: 6, name: 'Simran Kaur', course: 'Typing Hindi', exam: 'SSC MTS Typing Test', test: 'Test 06', type: 'Offline', gross: '58.20', net: '55.60', acc: '91.70%', marks: '83.00' },
{ rank: 7, name: 'Arjun Patel', course: 'Steno English', exam: 'Railway Steno Test', test: 'Test 01', type: 'Live', gross: '56.40', net: '53.10', acc: '91.20%', marks: '81.00' },
{ rank: 8, name: 'Kavita Kumari', course: 'Steno Hindi', exam: 'UP Police Steno Test', test: 'Test 03', type: 'Offline', gross: '55.30', net: '52.10', acc: '90.80%', marks: '79.50' },
{ rank: 9, name: 'Deepak Raj', course: 'Typing English', exam: 'DSSSB LDC Typing Test', test: 'Test 01', type: 'Live', gross: '54.10', net: '50.70', acc: '90.40%', marks: '78.00' },
{ rank: 10, name: 'Sonam Gupta', course: 'Typing Hindi', exam: 'Rajasthan Typing Test', test: 'Test 02', type: 'Offline', gross: '53.20', net: '49.60', acc: '89.90%', marks: '76.50' }];


const stenoRows = [
{ rank: 1, name: 'Anjali Sharma', course: 'Steno English', details: '(HSSC Steno) SSC PY — 2018 / 2019 — 09 Nov, 2019 — Interim Budget, KC 840 — Dictation No. 501 — Topic: Constitution Amendment Recommendation — Words 398–538', no: '501', speed: '126.40', acc: '97.80%', date: '25 May 2026 10:32 AM', type: 'Live' },
{ rank: 2, name: 'Rohit Verma', course: 'Steno English', details: '(DSSSB Steno) SSC PY — 2017 / 2018 — 15 Oct, 2018 — Economic Survey, KC 820 — Volume 21 — Dictation No. 412 — Topic: Fiscal Policy — Words 421–561', no: '412', speed: '118.70', acc: '96.40%', date: '25 May 2026 10:18 AM', type: 'Live' },
{ rank: 3, name: 'Pooja Singh', course: 'Steno Hindi', details: '(UPSSC Steno) SSC PY — 2018 / 2019 — 12 Dec, 2019 — Railway Reforms, KC 865 — Volume 24 — Dictation No. 623 — Topic: Infrastructure Development — Words 367–502', no: '623', speed: '112.30', acc: '96.10%', date: '25 May 2026 09:58 AM', type: 'Live' },
{ rank: 4, name: 'Vikas Yadav', course: 'Steno English', details: '(High Court Steno) SSC PY — 2017 / 2018 — 07 Jul, 2018 — Law & Order, KC 798 — Volume 20 — Dictation No. 345 — Topic: Criminal Justice — Words 372–495', no: '345', speed: '108.90', acc: '94.80%', date: '24 May 2026 04:21 PM', type: 'Offline' },
{ rank: 5, name: 'Neha Gupta', course: 'Steno Hindi', details: '(Delhi High Court) SSC PY — 2019 / 2020 — 18 Jan, 2020 — Women Empowerment, KC 910 — Volume 25 — Dictation No. 701 — Topic: Social Welfare — Words 410–548', no: '701', speed: '105.60', acc: '94.20%', date: '24 May 2026 03:45 PM', type: 'Live' },
{ rank: 6, name: 'Amit Kumar', course: 'Steno English', details: '(Railway Steno) SSC PY — 2018 / 2019 — 21 Sep, 2019 — Passenger Safety, KC 832 — Volume 22 — Dictation No. 456 — Topic: Transportation — Words 356–487', no: '456', speed: '102.30', acc: '93.70%', date: '24 May 2026 02:33 PM', type: 'Offline' }];


const typingCategories = [
{ label: 'English Typing', value: '68.50', pct: 100, color: '#0D6EFD' },
{ label: 'Hindi Typing', value: '63.20', pct: 92, color: '#6F42C1' },
{ label: 'English Steno', value: '60.10', pct: 88, color: '#F59E0B' },
{ label: 'Hindi Steno', value: '57.30', pct: 84, color: '#8B5CF6' },
{ label: 'Court Steno', value: '55.70', pct: 81, color: '#10B981' }];


const stenoCategories = [
{ label: 'Steno English', value: '102.40', pct: 100, color: '#6F42C1' },
{ label: 'Steno Hindi', value: '97.80', pct: 95, color: '#8B5CF6' },
{ label: 'Court Steno', value: '92.30', pct: 90, color: '#F59E0B' },
{ label: 'SSC Steno', value: '89.60', pct: 87, color: '#0D6EFD' },
{ label: 'Railway Steno', value: '86.20', pct: 84, color: '#10B981' }];


const rankMedal = ['🥇', '🥈', '🥉'];

export function AdminLeaderboard() {
  const [tab, setTab] = useState<Tab>('Typing Leaderboard');
  const isSteno = tab === 'Steno Leaderboard';
  const stats = isSteno ? stenoStats : typingStats;
  const categories = isSteno ? stenoCategories : typingCategories;

  return (
    <AdminLayout
      searchPlaceholder="Search by student name, roll no., mobile..."
      summary={[
      { label: 'Total Students', value: '2,856' },
      { label: 'Active Students', value: '2,356' },
      { label: 'Tests Conducted', value: '6,542' },
      { label: 'Typing Tests', value: '5,231' },
      { label: 'Steno Tests', value: '1,311' }]
      }>
      
      <div className="mb-4 flex items-start gap-3">
        <TrophyIcon className="h-7 w-7 text-primary" aria-hidden="true" />
        <div>
          <h2 className="font-display text-[26px] font-bold leading-tight text-navy-800">
            {isSteno ? 'Steno Leaderboard' : 'Leaderboard'}
          </h2>
          <p className="text-[12.5px] text-slate-500">
            View top performing students based on{' '}
            {isSteno ? 'stenography test results.' : 'typing and steno test results.'}
          </p>
        </div>
      </div>

      <div className="mb-4 flex flex-wrap items-center gap-6 border-b border-slate-200">
        {(['Typing Leaderboard', 'Steno Leaderboard'] as Tab[]).map((t) =>
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
        <div className="ml-auto flex gap-2 pb-2">
          <button
            type="button"
            className="flex items-center gap-1.5 rounded-md border border-slate-300 bg-white px-3 py-2 text-[12px] font-medium text-navy-800 transition-colors duration-150 hover:bg-slate-50">
            
            <DownloadIcon className="h-3.5 w-3.5" aria-hidden="true" /> Download PDF
          </button>
          <button
            type="button"
            className="flex items-center gap-1.5 rounded-md border border-slate-300 bg-white px-3 py-2 text-[12px] font-medium text-navy-800 transition-colors duration-150 hover:bg-slate-50">
            
            <UploadIcon className="h-3.5 w-3.5" aria-hidden="true" /> Export Leaderboard
          </button>
        </div>
      </div>

      <section className="mb-4 rounded-xl border border-slate-200 bg-white p-3.5 shadow-card">
        <h3 className="mb-3 flex items-center gap-2 text-[12.5px] font-semibold text-navy-800">
          <FilterIcon className="h-3.5 w-3.5 text-primary" aria-hidden="true" /> Filter Leaderboard
        </h3>
        <div className="flex flex-wrap items-end gap-3">
          {[
          { label: 'Select Exam', options: ['All Exams'] },
          { label: 'Test Type', options: ['All (Live / Offline)', 'Live', 'Offline'] },
          { label: 'Course / Type', options: [isSteno ? 'All Steno Courses' : 'All Courses'] },
          { label: 'Batch / Time', options: ['All Batches'] }].
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

      <ul className={`mb-4 grid gap-4 sm:grid-cols-2 ${isSteno ? 'xl:grid-cols-4' : 'xl:grid-cols-5'}`}>
        {stats.map((s) =>
        <li key={s.label} className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-3.5 shadow-card">
            <span
            className="grid h-10 w-10 shrink-0 place-items-center rounded-lg text-white"
            style={{ backgroundColor: s.color }}>
            
              <s.icon className="h-5 w-5" aria-hidden="true" />
            </span>
            <div className="min-w-0">
              <p className="text-[11px] text-slate-500">{s.label}</p>
              <p className="font-display text-[18px] font-bold leading-tight text-navy-800">{s.value}</p>
              <p className="text-[11px] text-slate-500">{s.sub}</p>
            </div>
          </li>
        )}
      </ul>

      <div className="grid gap-4 xl:grid-cols-[1fr_290px]">
        <section className="rounded-xl border border-slate-200 bg-white shadow-card">
          <div className="flex flex-wrap items-center gap-2.5 p-3.5">
            <h3 className="flex items-center gap-2 font-display text-[14px] font-semibold text-navy-800">
              <FilterIcon className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
              {isSteno ? 'Top 100 Steno Students' : 'Top 100 Students'}
            </h3>
            <div className="relative ml-auto">
              <SearchIcon className="pointer-events-none absolute right-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-400" />
              <input
                type="search"
                placeholder="Search by student name, roll no., mobile..."
                aria-label="Search leaderboard"
                className="w-[280px] rounded-md border border-slate-300 py-2 pl-3 pr-8 text-[12px] outline-none focus:border-primary" />
              
            </div>
          </div>

          <div className="overflow-x-auto">
            {isSteno ?
            <table className="w-full min-w-[1000px] text-left">
                <thead className="bg-slate-50 text-[11px] font-semibold text-slate-600">
                  <tr>
                    <th scope="col" className="px-3 py-2.5">Rank</th>
                    <th scope="col" className="px-3 py-2.5">Student Name</th>
                    <th scope="col" className="px-3 py-2.5">Course / Type</th>
                    <th scope="col" className="px-3 py-2.5">Dictation Name (Details)</th>
                    <th scope="col" className="px-3 py-2.5">Dictation No.</th>
                    <th scope="col" className="px-3 py-2.5">Dictation Speed (WPM)</th>
                    <th scope="col" className="px-3 py-2.5">Accuracy (%)</th>
                    <th scope="col" className="px-3 py-2.5">Test Date</th>
                    <th scope="col" className="px-3 py-2.5">Test Type</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-[11px]">
                  {stenoRows.map((r) =>
                <tr key={r.rank} className="transition-colors duration-150 hover:bg-slate-50/70">
                      <td className="px-3 py-3">
                        <span className="text-[15px]">{rankMedal[r.rank - 1] ?? r.rank}</span>
                      </td>
                      <td className="px-3 py-3">
                        <span className="flex items-center gap-2">
                          <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-slate-100 text-slate-400">
                            <UserIcon className="h-3.5 w-3.5" aria-hidden="true" />
                          </span>
                          <span className="font-semibold text-violet-700">{r.name}</span>
                        </span>
                      </td>
                      <td className="px-3 py-3 text-primary">{r.course}</td>
                      <td className="px-3 py-3 max-w-[300px] text-[10.5px] leading-snug text-slate-600">
                        {r.details}
                      </td>
                      <td className="px-3 py-3 text-center text-navy-800">{r.no}</td>
                      <td className="px-3 py-3 text-center font-semibold text-navy-800">{r.speed}</td>
                      <td className="px-3 py-3 text-center text-navy-800">{r.acc}</td>
                      <td className="px-3 py-3 text-slate-600">{r.date}</td>
                      <td className="px-3 py-3">
                        <span
                      className={`rounded px-2 py-[2px] text-[10px] font-medium ${
                      r.type === 'Live' ? 'bg-emerald-50 text-emerald-700' : 'bg-slate-100 text-slate-600'}`
                      }>
                      
                          {r.type}
                        </span>
                      </td>
                    </tr>
                )}
                </tbody>
              </table> :

            <table className="w-full min-w-[940px] text-left">
                <thead className="bg-slate-50 text-[11px] font-semibold text-slate-600">
                  <tr>
                    <th scope="col" className="px-3 py-2.5">Rank</th>
                    <th scope="col" className="px-3 py-2.5">Student Name</th>
                    <th scope="col" className="px-3 py-2.5">Course / Type</th>
                    <th scope="col" className="px-3 py-2.5">Exam Name</th>
                    <th scope="col" className="px-3 py-2.5">Test No.</th>
                    <th scope="col" className="px-3 py-2.5">Test Type</th>
                    <th scope="col" className="px-3 py-2.5">Gross WPM</th>
                    <th scope="col" className="px-3 py-2.5">Net WPM</th>
                    <th scope="col" className="px-3 py-2.5">Accuracy (%)</th>
                    <th scope="col" className="px-3 py-2.5">Marks</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-[11px]">
                  {typingRows.map((r) =>
                <tr key={r.rank} className="transition-colors duration-150 hover:bg-slate-50/70">
                      <td className="px-3 py-3">
                        <span className="text-[15px]">{rankMedal[r.rank - 1] ?? r.rank}</span>
                      </td>
                      <td className="px-3 py-3">
                        <span className="flex items-center gap-2">
                          <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-slate-100 text-slate-400">
                            <UserIcon className="h-3.5 w-3.5" aria-hidden="true" />
                          </span>
                          <span className="font-semibold text-primary">{r.name}</span>
                        </span>
                      </td>
                      <td className="px-3 py-3 text-primary">{r.course}</td>
                      <td className="px-3 py-3 text-slate-600">{r.exam}</td>
                      <td className="px-3 py-3 text-slate-600">{r.test}</td>
                      <td className="px-3 py-3">
                        <span
                      className={`rounded px-2 py-[2px] text-[10px] font-medium ${
                      r.type === 'Live' ? 'bg-emerald-50 text-emerald-700' : 'bg-slate-100 text-slate-600'}`
                      }>
                      
                          {r.type}
                        </span>
                      </td>
                      <td className="px-3 py-3 font-semibold text-navy-800">{r.gross}</td>
                      <td className="px-3 py-3 text-navy-800">{r.net}</td>
                      <td className="px-3 py-3 text-navy-800">{r.acc}</td>
                      <td className="px-3 py-3 text-navy-800">{r.marks}</td>
                    </tr>
                )}
                </tbody>
              </table>
            }
          </div>

          <div className="flex flex-wrap items-center gap-3 border-t border-slate-100 p-3.5 text-[12px] text-slate-600">
            <span>Showing 1 to 10 of 100 students</span>
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
              {['1', '2', '3', '4', '5', '...', '10'].map((p) =>
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
          <Panel
            title="Leaderboard by Category"
            right={
            <select className="rounded-md border border-slate-300 px-2 py-1 text-[11px] outline-none focus:border-primary">
                <option>{isSteno ? 'Top by Dictation Speed (WPM)' : 'Top by Net WPM'}</option>
              </select>
            }>
            
            <ul className="space-y-2.5">
              {categories.map((c) =>
              <li key={c.label}>
                  <p className="mb-1 flex text-[11px]">
                    <span className="text-slate-600">{c.label}</span>
                    <span className="ml-auto font-medium text-navy-800">{c.value}</span>
                  </p>
                  <span className="block h-1.5 w-full rounded-full bg-slate-100">
                    <span
                    className="block h-full rounded-full"
                    style={{ width: `${c.pct}%`, backgroundColor: c.color }} />
                  
                  </span>
                </li>
              )}
            </ul>
          </Panel>

          <Panel title="Download Options">
            <div className="rounded-lg border border-slate-200 p-3">
              <p className="flex items-center gap-2 text-[12px] font-semibold text-navy-800">
                <span className="grid h-7 w-7 place-items-center rounded bg-rose-50 text-[8px] font-bold text-rose-600">
                  PDF
                </span>
                {isSteno ? 'Download Steno Leaderboard (PDF)' : 'Download Leaderboard (PDF)'}
              </p>
              <p className="mt-1 text-[11px] text-slate-500">Top 100 Students</p>
              <p className="mt-1 text-[10.5px] text-slate-400">
                Includes all details and performance summary.
              </p>
              <button
                type="button"
                className="mt-2.5 flex w-full items-center justify-center gap-1.5 rounded-md bg-primary py-2 text-[12px] font-semibold text-white transition-colors duration-150 hover:bg-primary-700">
                
                <DownloadIcon className="h-3.5 w-3.5" aria-hidden="true" /> Download PDF
              </button>
            </div>
          </Panel>

          <Panel title="Note">
            <ul className="space-y-1.5 text-[11.5px] text-slate-500">
              {[
              'Leaderboard shows top 100 students.',
              isSteno ? 'Based on Dictation Speed (WPM) as primary criteria.' : 'Based on Net WPM of best attempt.',
              'Only qualified attempts are considered.',
              'Click on student name to view full report.'].
              map((n) =>
              <li key={n} className="flex items-start gap-2">
                  <span className="mt-[6px] h-1 w-1 shrink-0 rounded-full bg-slate-400" aria-hidden="true" />
                  {n}
                </li>
              )}
            </ul>
          </Panel>
        </div>
      </div>

      <p className="mt-4 flex items-center gap-2 rounded-md border border-primary-100 bg-primary-50 px-3 py-2 text-[11.5px] text-primary-700">
        <InfoIcon className="h-3.5 w-3.5" aria-hidden="true" />
        Note: Leaderboard is calculated based on {isSteno ? 'Dictation Speed' : 'Net WPM'}. Only
        qualified attempts are considered.
      </p>
    </AdminLayout>);

}