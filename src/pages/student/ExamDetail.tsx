import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ClockIcon,
  GlobeIcon,
  FileTextIcon,
  DownloadIcon,
  CrownIcon,
  LockIcon,
  SearchIcon,
  ArrowUpDownIcon,
  FilterIcon,
  LayersIcon,
  LandmarkIcon,
  RotateCcwIcon,
  CheckCircle2Icon,
  CircleDotIcon,
  CircleAlertIcon } from
'lucide-react';
import { StudentLayout } from '../../components/student/StudentLayout';
import { Breadcrumbs } from '../../components/common/PageHeading';
import { ahcTestRows } from '../../data/typingExams';

const examMeta = [
{ label: 'Conducted By', value: 'Allahabad High Court' },
{ label: 'Exam Level', value: 'District Judge (Group C & D)' },
{ label: 'Time Duration', value: '10 Minutes' },
{ label: 'Language', value: 'English / Hindi' },
{ label: 'Negative Marking', value: 'No' },
{ label: 'Result Mode', value: 'Speed + Accuracy' }];


const examDetails = [
{ icon: FileTextIcon, label: 'Total Words : 250' },
{ icon: ClockIcon, label: 'Time Duration : 10 Minutes' },
{ icon: GlobeIcon, label: 'Language : English / Hindi' },
{ icon: CircleDotIcon, label: 'Negative Marking : No' },
{ icon: CircleAlertIcon, label: 'Minimum Qualifying Speed : 35 WPM' },
{ icon: CheckCircle2Icon, label: 'Result Mode : Speed + Accuracy' }];


const difficultyTabs = [
{ id: 'all', label: 'All', count: 375, icon: LayersIcon, active: 'bg-navy-800 text-white' },
{ id: 'easy', label: 'Easy', count: 120, icon: CircleDotIcon, active: 'bg-emerald-50 text-emerald-700' },
{ id: 'moderate', label: 'Moderate', count: 135, icon: CircleDotIcon, active: 'bg-amber-50 text-amber-700' },
{ id: 'hard', label: 'Hard', count: 120, icon: CircleDotIcon, active: 'bg-rose-50 text-rose-700' }];


const difficultyTone: Record<string, string> = {
  Easy: 'bg-emerald-50 text-emerald-700',
  Moderate: 'bg-amber-50 text-amber-700',
  Hard: 'bg-rose-50 text-rose-700'
};

export function ExamDetail() {
  const [language, setLanguage] = useState<'English' | 'Hindi'>('English');
  const [difficulty, setDifficulty] = useState('all');
  const [query, setQuery] = useState('');

  const rows = useMemo(
    () =>
    ahcTestRows.filter(
      (r) =>
      (difficulty === 'all' || r.difficulty.toLowerCase() === difficulty) &&
      r.name.toLowerCase().includes(query.trim().toLowerCase())
    ),
    [difficulty, query]
  );

  return (
    <StudentLayout>
      <div className="mb-3">
        <Breadcrumbs
          crumbs={[
          { label: 'Home', to: '/' },
          { label: 'Typing Exam', to: '/typing-exam' },
          { label: 'AHC RO ARO Typing Test' }]
          } />
        
      </div>

      {/* Exam banner */}
      <section className="mb-4 rounded-xl bg-navy-900 p-5">
        <div className="grid gap-5 lg:grid-cols-[1fr_300px_230px]">
          <div>
            <div className="flex items-start gap-4">
              <span className="grid h-[72px] w-[72px] shrink-0 place-items-center rounded-full bg-white/10">
                <LandmarkIcon className="h-9 w-9 text-white/80" aria-hidden="true" />
              </span>
              <div>
                <h2 className="font-display text-[30px] font-bold leading-tight text-white">
                  AHC RO ARO Typing Test
                </h2>
                <div className="mt-2.5 flex flex-wrap items-center gap-2.5">
                  <span className="rounded-full border border-white/30 px-3 py-1 text-[12px] font-medium text-white">
                    375 Tests Available
                  </span>
                  <span className="flex items-center gap-1.5 rounded-full border border-warn px-3 py-1 text-[12px] font-semibold text-warn">
                    <CrownIcon className="h-3.5 w-3.5" aria-hidden="true" /> Premium
                  </span>
                </div>
              </div>
            </div>

            <dl className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 border-t border-white/10 pt-4 sm:grid-cols-3 lg:grid-cols-6">
              {examMeta.map((m) =>
              <div key={m.label}>
                  <dt className="text-[11px] font-semibold text-[#38BDF8]">{m.label}</dt>
                  <dd className="text-[11.5px] leading-snug text-white/85">{m.value}</dd>
                </div>
              )}
            </dl>
          </div>

          <div className="rounded-lg bg-white/5 p-4">
            <p className="mb-2.5 flex items-center gap-2 font-display text-[13.5px] font-semibold text-white">
              <FileTextIcon className="h-4 w-4" aria-hidden="true" /> Exam Details
            </p>
            <ul className="space-y-2">
              {examDetails.map((d) =>
              <li key={d.label} className="flex items-center gap-2 text-[12px] text-white/85">
                  <d.icon className="h-3.5 w-3.5 shrink-0 text-white/60" aria-hidden="true" />
                  {d.label}
                </li>
              )}
            </ul>
          </div>

          <div className="rounded-lg bg-white/5 p-4 text-center">
            <p className="font-display text-[13.5px] font-semibold text-white">
              Typing Rules <span className="font-normal text-white/70">(Official PDF)</span>
            </p>
            <span className="mx-auto mt-3 grid h-14 w-12 place-items-center rounded bg-danger text-[11px] font-bold text-white">
              PDF
            </span>
            <p className="mt-2.5 text-[11px] leading-snug text-white/70">
              Check official typing rules, instructions and guidelines.
            </p>
            <button
              type="button"
              className="mt-3 inline-flex w-full items-center justify-center gap-1.5 rounded-md bg-white px-3 py-2 text-[12px] font-semibold text-navy-800 transition-colors duration-150 hover:bg-slate-100">
              
              <DownloadIcon className="h-3.5 w-3.5" aria-hidden="true" /> Download PDF
            </button>
          </div>
        </div>
      </section>

      {/* Filter bar */}
      <section className="mb-3 flex flex-wrap items-end gap-4 rounded-xl border border-slate-200 bg-white p-3.5 shadow-card">
        <div>
          <p className="mb-1.5 flex items-center gap-1.5 text-[12px] font-medium text-slate-600">
            <GlobeIcon className="h-3.5 w-3.5" aria-hidden="true" /> Select Language
          </p>
          <div className="flex overflow-hidden rounded-md border border-slate-300">
            {(['English', 'Hindi'] as const).map((lang) =>
            <button
              key={lang}
              type="button"
              onClick={() => setLanguage(lang)}
              aria-pressed={language === lang}
              className={`px-5 py-1.5 text-[12.5px] font-medium transition-colors duration-150 ${
              language === lang ? 'bg-primary text-white' : 'bg-white text-slate-600 hover:bg-slate-50'}`
              }>
              
                {lang}
              </button>
            )}
          </div>
        </div>

        <div className="flex flex-wrap gap-2 self-end">
          {difficultyTabs.map((t) =>
          <button
            key={t.id}
            type="button"
            onClick={() => setDifficulty(t.id)}
            aria-pressed={difficulty === t.id}
            className={`flex items-center gap-1.5 rounded-md border px-3 py-1.5 text-[12.5px] font-medium transition-colors duration-150 ${
            difficulty === t.id ?
            `border-transparent ${t.active}` :
            'border-slate-300 bg-white text-slate-600 hover:bg-slate-50'}`
            }>
            
              <t.icon className="h-3.5 w-3.5" aria-hidden="true" />
              {t.label}
              <span className="rounded bg-black/10 px-1.5 text-[11px] font-semibold">{t.count}</span>
            </button>
          )}
        </div>

        <div className="ml-auto flex flex-wrap items-end gap-3">
          <label className="block">
            <span className="mb-1.5 flex items-center gap-1.5 text-[12px] font-medium text-slate-600">
              <ArrowUpDownIcon className="h-3.5 w-3.5" aria-hidden="true" /> Sort By
            </span>
            <select className="w-[150px] rounded-md border border-slate-300 px-3 py-1.5 text-[12.5px] outline-none focus:border-primary">
              <option>A to Z</option>
              <option>Z to A</option>
              <option>Newest first</option>
            </select>
          </label>
          <label className="block">
            <span className="mb-1.5 flex items-center gap-1.5 text-[12px] font-medium text-slate-600">
              <FilterIcon className="h-3.5 w-3.5" aria-hidden="true" /> Filter
            </span>
            <select className="w-[150px] rounded-md border border-slate-300 px-3 py-1.5 text-[12.5px] outline-none focus:border-primary">
              <option>All Tests</option>
              <option>Free Tests</option>
              <option>Premium Tests</option>
            </select>
          </label>
          <div className="relative">
            <SearchIcon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search test..."
              aria-label="Search test"
              className="w-[190px] rounded-md border border-slate-300 py-1.5 pl-9 pr-3 text-[12.5px] outline-none transition-colors duration-150 focus:border-primary" />
            
          </div>
        </div>
      </section>

      {/* Test table */}
      <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-card">
        <table className="w-full text-left">
          <thead className="bg-slate-50 text-[12px] font-semibold text-slate-600">
            <tr>
              <th scope="col" className="px-5 py-3">Test No.</th>
              <th scope="col" className="px-5 py-3">Test Name</th>
              <th scope="col" className="px-5 py-3 text-center">Time</th>
              <th scope="col" className="px-5 py-3 text-center">Difficulty</th>
              <th scope="col" className="px-5 py-3 text-center">Access</th>
              <th scope="col" className="px-5 py-3 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-[12.5px]">
            {rows.map((row) =>
            <tr key={row.no} className="transition-colors duration-150 hover:bg-slate-50/70">
                <td className="px-5 py-3">
                  <span className="inline-block rounded border border-slate-200 px-2 py-[2px] text-[11.5px] font-semibold text-navy-800">
                    {row.no}
                  </span>
                </td>
                <td className="px-5 py-3 font-medium text-navy-800">{row.name}</td>
                <td className="px-5 py-3 text-center text-slate-600">
                  <span className="inline-flex items-center gap-1.5">
                    <ClockIcon className="h-3.5 w-3.5 text-slate-400" aria-hidden="true" />
                    {row.time}
                  </span>
                </td>
                <td className="px-5 py-3 text-center">
                  <span
                  className={`inline-block rounded px-2.5 py-[3px] text-[11.5px] font-medium ${difficultyTone[row.difficulty]}`}>
                  
                    {row.difficulty}
                  </span>
                </td>
                <td className="px-5 py-3 text-center">
                  {row.free ?
                <span className="font-display text-[13px] font-bold text-success">Free</span> :

                <span className="inline-flex items-center gap-1 font-display text-[13px] font-bold text-[#B45309]">
                      <LockIcon className="h-3.5 w-3.5" aria-hidden="true" /> Premium
                    </span>
                }
                </td>
                <td className="px-5 py-3">
                  <div className="flex items-center justify-end gap-2">
                    {row.free ?
                  <>
                        <Link
                      to="/result/typing"
                      className="rounded border border-slate-300 px-2.5 py-1 text-[11.5px] font-medium text-slate-600 transition-colors duration-150 hover:bg-slate-50">
                      
                          Result
                        </Link>
                        <Link
                      to="/login"
                      className="inline-flex items-center gap-1 rounded border border-primary px-2.5 py-1 text-[11.5px] font-medium text-primary transition-colors duration-150 hover:bg-primary-50">
                      
                          <RotateCcwIcon className="h-3 w-3" aria-hidden="true" /> Retake
                        </Link>
                      </> :

                  <Link
                    to="/plan-pricing"
                    className="inline-flex items-center gap-1 rounded bg-[#F59E0B] px-3 py-1 text-[11.5px] font-semibold text-white transition-colors duration-150 hover:bg-[#d98806]">
                    
                        <CrownIcon className="h-3 w-3" aria-hidden="true" /> Unlock
                      </Link>
                  }
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
        {rows.length === 0 &&
        <p className="py-10 text-center text-[13px] text-slate-500">No tests found for this filter.</p>
        }
      </section>
    </StudentLayout>);

}