import React, { useState } from 'react';
import {
  PlusIcon,
  UploadIcon,
  SearchIcon,
  RotateCcwIcon,
  EyeIcon,
  PencilIcon,
  BarChart3Icon,
  CopyIcon,
  Trash2Icon,
  ToggleRightIcon,
  ToggleLeftIcon,
  FileSpreadsheetIcon,
  FileTextIcon,
  KeyboardIcon,
  PenLineIcon,
  LayersIcon,
  ZapIcon,
  CircleSlashIcon,
  CheckCircle2Icon,
  StarIcon } from
'lucide-react';
import { AdminLayout } from '../../components/admin/AdminLayout';
import { Breadcrumbs } from '../../components/common/PageHeading';
import { StatCard } from '../../components/common/StatCard';
import { adminTestRows, difficultyTone, modeTone, statusTone } from '../../data/adminTests';

const summaryStats = [
{ icon: <LayersIcon className="h-5 w-5" />, iconBg: '#0D6EFD', label: 'Total Tests', value: '2,356', sub: 'All Tests in System', accentBar: '#0D6EFD' },
{ icon: <ZapIcon className="h-5 w-5" />, iconBg: '#198754', label: 'Live Tests', value: '1,256', sub: 'Active Live Tests', accentBar: '#198754' },
{ icon: <FileTextIcon className="h-5 w-5" />, iconBg: '#F59E0B', label: 'Preload Tests', value: '1,100', sub: 'Practice / Preload Tests', accentBar: '#F59E0B' },
{ icon: <CheckCircle2Icon className="h-5 w-5" />, iconBg: '#6F42C1', label: 'Active Tests', value: '1,985', sub: 'Currently Active', accentBar: '#6F42C1' },
{ icon: <CircleSlashIcon className="h-5 w-5" />, iconBg: '#DC3545', label: 'Inactive Tests', value: '371', sub: 'Inactive / Expired', accentBar: '#DC3545' }];


const tabs = ['All Tests', 'Live Tests', 'Preload Tests'];

const filters = [
{ label: '-- Test Type --', options: ['English Typing', 'Hindi Typing', 'English Steno', 'Hindi Steno'] },
{ label: '-- Category / Exam --', options: ['SSC CGL', 'SSC CHSL', 'Delhi Police', 'Court Steno'] },
{ label: '-- Difficulty Level --', options: ['Easy', 'Moderate', 'Hard'] },
{ label: '-- Font Group --', options: ['Arial Group', 'Mangal Group', 'Kruti Dev Group'] },
{ label: '-- Status --', options: ['Active', 'Inactive'] }];


const typeIcon: Record<string, React.ElementType> = {
  'English Typing': KeyboardIcon,
  'Hindi Typing': KeyboardIcon,
  'English Steno': PenLineIcon,
  'Hindi Steno': PenLineIcon
};

const legendBlocks = [
{
  title: 'Test Types',
  items: [
  { label: 'English Typing', tone: 'text-primary' },
  { label: 'Hindi Typing', tone: 'text-success' },
  { label: 'English Steno', tone: 'text-violet-700' },
  { label: 'Hindi Steno', tone: 'text-rose-600' }]

},
{
  title: 'Difficulty Levels',
  items: [
  { label: 'Easy', desc: 'For beginners', tone: 'bg-emerald-50 text-emerald-700' },
  { label: 'Moderate', desc: 'For intermediate level', tone: 'bg-amber-50 text-amber-700' },
  { label: 'Hard', desc: 'For advanced level', tone: 'bg-rose-50 text-rose-700' }]

},
{
  title: 'Modes',
  items: [
  { label: 'Live', desc: 'Real time exam', tone: 'bg-emerald-50 text-emerald-700' },
  { label: 'Preload', desc: 'Practice / Preparation', tone: 'bg-amber-50 text-amber-700' }]

},
{
  title: 'Status',
  items: [
  { label: 'Active', desc: 'Test is active and visible', tone: 'bg-emerald-50 text-emerald-700' },
  { label: 'Inactive', desc: 'Test is inactive or expired', tone: 'bg-rose-50 text-rose-700' }]

}];


const actionLegend = [
{ icon: EyeIcon, label: 'View Details' },
{ icon: PencilIcon, label: 'Edit Test' },
{ icon: BarChart3Icon, label: 'Analytics' },
{ icon: CopyIcon, label: 'Duplicate Test' },
{ icon: ToggleRightIcon, label: 'Activate / Inactivate' },
{ icon: Trash2Icon, label: 'Delete Test' }];


export function ManageTest() {
  const [tab, setTab] = useState('All Tests');

  const rows = adminTestRows.filter((r) =>
  tab === 'All Tests' ? true : tab === 'Live Tests' ? r.mode === 'Live' : r.mode === 'Preload'
  );

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
            Manage Test (Live / Preload)
          </h2>
          <p className="text-[12.5px] text-slate-500">
            View, manage, edit, activate/inactivate or delete tests. Use filters to find specific
            tests quickly.
          </p>
        </div>
        <div className="ml-auto flex flex-col items-end gap-2.5">
          <Breadcrumbs
            crumbs={[{ label: 'Test Management', to: '/admin/tests' }, { label: 'Manage Test' }]} />
          
          <div className="flex gap-2">
            <button
              type="button"
              className="flex items-center gap-1.5 rounded-md bg-primary px-3.5 py-2 text-[12.5px] font-semibold text-white transition-colors duration-150 hover:bg-primary-700">
              
              <PlusIcon className="h-4 w-4" aria-hidden="true" /> Add New Test (Live / Preload)
            </button>
            <button
              type="button"
              className="flex items-center gap-1.5 rounded-md border border-slate-300 bg-white px-3.5 py-2 text-[12.5px] font-medium text-navy-800 transition-colors duration-150 hover:bg-slate-50">
              
              <UploadIcon className="h-4 w-4" aria-hidden="true" /> Import Test
            </button>
          </div>
        </div>
      </div>

      <div className="mb-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
        {summaryStats.map((s) =>
        <StatCard key={s.label} {...s} />
        )}
      </div>

      <section className="mb-4 rounded-xl border border-slate-200 bg-white shadow-card">
        <div className="flex gap-6 border-b border-slate-200 px-4">
          {tabs.map((t) =>
          <button
            key={t}
            type="button"
            onClick={() => setTab(t)}
            aria-pressed={tab === t}
            className={`-mb-px border-b-2 py-3 text-[13px] font-semibold transition-colors duration-150 ${
            tab === t ? 'border-primary text-primary' : 'border-transparent text-slate-500 hover:text-navy-800'}`
            }>
            
              {t}
            </button>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-2.5 border-b border-slate-100 p-3.5">
          {filters.map((f) =>
          <label key={f.label} className="block">
              <span className="sr-only">{f.label}</span>
              <select className="w-[150px] rounded-md border border-slate-300 px-2.5 py-1.5 text-[12px] text-slate-600 outline-none focus:border-primary">
                <option>{f.label}</option>
                {f.options.map((o) =>
              <option key={o}>{o}</option>
              )}
              </select>
            </label>
          )}
          <div className="relative">
            <SearchIcon className="pointer-events-none absolute right-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-400" />
            <input
              type="search"
              placeholder="Search by title, ID, tags..."
              aria-label="Search by title, ID or tags"
              className="w-[210px] rounded-md border border-slate-300 py-1.5 pl-3 pr-8 text-[12px] outline-none focus:border-primary" />
            
          </div>
          <button
            type="button"
            className="flex items-center gap-1.5 rounded-md border border-slate-300 px-3 py-1.5 text-[12px] font-medium text-slate-600 transition-colors duration-150 hover:bg-slate-50">
            
            <RotateCcwIcon className="h-3.5 w-3.5" aria-hidden="true" /> Reset Filters
          </button>
          <button
            type="button"
            className="flex items-center gap-1.5 rounded-md bg-primary px-4 py-1.5 text-[12px] font-semibold text-white transition-colors duration-150 hover:bg-primary-700">
            
            <SearchIcon className="h-3.5 w-3.5" aria-hidden="true" /> Search
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[1180px] text-left">
            <thead className="bg-slate-50 text-[11.5px] font-semibold text-slate-600">
              <tr>
                <th scope="col" className="px-3 py-2.5">
                  <input type="checkbox" aria-label="Select all tests" className="h-3.5 w-3.5 accent-primary" />
                </th>
                <th scope="col" className="px-3 py-2.5">Test ID</th>
                <th scope="col" className="px-3 py-2.5">Test Title</th>
                <th scope="col" className="px-3 py-2.5">Type</th>
                <th scope="col" className="px-3 py-2.5">Category / Exam</th>
                <th scope="col" className="px-3 py-2.5">Level</th>
                <th scope="col" className="px-3 py-2.5">Font Group</th>
                <th scope="col" className="px-3 py-2.5">Mode</th>
                <th scope="col" className="px-3 py-2.5">Words / Dictation</th>
                <th scope="col" className="px-3 py-2.5">Duration</th>
                <th scope="col" className="px-3 py-2.5">Status</th>
                <th scope="col" className="px-3 py-2.5">Created On</th>
                <th scope="col" className="px-3 py-2.5">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-[11.5px]">
              {rows.map((r) => {
                const Icon = typeIcon[r.type];
                return (
                  <tr key={r.id} className="transition-colors duration-150 hover:bg-slate-50/70">
                    <td className="px-3 py-2.5">
                      <input
                        type="checkbox"
                        aria-label={`Select ${r.title}`}
                        className="h-3.5 w-3.5 accent-primary" />
                      
                    </td>
                    <td className="px-3 py-2.5 text-slate-600">{r.id}</td>
                    <td className="px-3 py-2.5 font-semibold text-primary">{r.title}</td>
                    <td className="px-3 py-2.5">
                      <span className="flex items-center gap-1.5 text-slate-600">
                        <Icon className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                        {r.type}
                      </span>
                    </td>
                    <td className="px-3 py-2.5 text-slate-600">{r.category}</td>
                    <td className="px-3 py-2.5">
                      <span className={`rounded px-2 py-[2px] text-[10.5px] font-medium ${difficultyTone[r.difficulty]}`}>
                        {r.difficulty}
                      </span>
                    </td>
                    <td className="px-3 py-2.5 text-slate-600">{r.fontGroup}</td>
                    <td className="px-3 py-2.5">
                      <span className={`rounded px-2 py-[2px] text-[10.5px] font-medium ${modeTone[r.mode]}`}>
                        {r.mode}
                      </span>
                    </td>
                    <td className="px-3 py-2.5 text-slate-600">{r.words}</td>
                    <td className="px-3 py-2.5 text-slate-600">{r.duration}</td>
                    <td className="px-3 py-2.5">
                      <span className={`rounded px-2 py-[2px] text-[10.5px] font-medium ${statusTone[r.status]}`}>
                        {r.status}
                      </span>
                    </td>
                    <td className="px-3 py-2.5 text-slate-600">{r.created}</td>
                    <td className="px-3 py-2.5">
                      <div className="flex items-center gap-2 text-slate-400">
                        <button type="button" aria-label={`View ${r.title}`} className="transition-colors duration-150 hover:text-primary">
                          <EyeIcon className="h-3.5 w-3.5" aria-hidden="true" />
                        </button>
                        <button type="button" aria-label={`Edit ${r.title}`} className="transition-colors duration-150 hover:text-primary">
                          <PencilIcon className="h-3.5 w-3.5" aria-hidden="true" />
                        </button>
                        <button type="button" aria-label={`Analytics for ${r.title}`} className="transition-colors duration-150 hover:text-primary">
                          <BarChart3Icon className="h-3.5 w-3.5" aria-hidden="true" />
                        </button>
                        <button type="button" aria-label={`Duplicate ${r.title}`} className="transition-colors duration-150 hover:text-primary">
                          <CopyIcon className="h-3.5 w-3.5" aria-hidden="true" />
                        </button>
                        <button
                          type="button"
                          aria-label={`Toggle status for ${r.title}`}
                          className={r.status === 'Active' ? 'text-primary' : 'text-slate-300'}>
                          
                          {r.status === 'Active' ?
                          <ToggleRightIcon className="h-4 w-4" aria-hidden="true" /> :

                          <ToggleLeftIcon className="h-4 w-4" aria-hidden="true" />
                          }
                        </button>
                        <button type="button" aria-label={`Delete ${r.title}`} className="text-rose-400 transition-colors duration-150 hover:text-rose-600">
                          <Trash2Icon className="h-3.5 w-3.5" aria-hidden="true" />
                        </button>
                      </div>
                    </td>
                  </tr>);

              })}
            </tbody>
          </table>
        </div>

        <div className="flex flex-wrap items-center gap-3 border-t border-slate-100 p-3.5 text-[12px] text-slate-600">
          <span>Showing 1 to 10 of 2,356 tests</span>
          <label className="flex items-center gap-1.5">
            <select
              aria-label="Rows per page"
              className="rounded border border-slate-300 px-2 py-1 text-[11.5px] outline-none focus:border-primary">
              
              <option>10</option>
              <option>25</option>
              <option>50</option>
            </select>
            per page
          </label>
          <nav aria-label="Pagination" className="flex items-center gap-1">
            {['1', '2', '3', '4', '5', '...', '236'].map((p) =>
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
            <button
              type="button"
              aria-label="Next page"
              className="grid h-7 min-w-7 place-items-center rounded border border-slate-300 px-2 text-[11.5px] transition-colors duration-150 hover:bg-slate-50">
              
              ›
            </button>
          </nav>
          <div className="ml-auto flex gap-2">
            <button
              type="button"
              className="flex items-center gap-1.5 rounded-md border border-emerald-300 px-3 py-1.5 text-[12px] font-medium text-emerald-700 transition-colors duration-150 hover:bg-emerald-50">
              
              <FileSpreadsheetIcon className="h-3.5 w-3.5" aria-hidden="true" /> Export Excel
            </button>
            <button
              type="button"
              className="flex items-center gap-1.5 rounded-md border border-rose-300 px-3 py-1.5 text-[12px] font-medium text-rose-600 transition-colors duration-150 hover:bg-rose-50">
              
              <FileTextIcon className="h-3.5 w-3.5" aria-hidden="true" /> Export PDF
            </button>
          </div>
        </div>
      </section>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
        {legendBlocks.map((block) =>
        <section key={block.title} className="rounded-xl border border-slate-200 bg-white p-3.5 shadow-card">
            <h3 className="mb-2 text-[12.5px] font-semibold text-navy-800">{block.title}</h3>
            <ul className="space-y-1.5">
              {block.items.map((item) =>
            <li key={item.label} className="flex items-center gap-2 text-[11.5px]">
                  {'desc' in item && item.desc ?
              <>
                      <span className={`rounded px-2 py-[2px] text-[10.5px] font-medium ${item.tone}`}>
                        {item.label}
                      </span>
                      <span className="text-slate-500">– {item.desc}</span>
                    </> :

              <span className={`flex items-center gap-1.5 font-medium ${item.tone}`}>
                      <StarIcon className="h-3 w-3" aria-hidden="true" /> {item.label}
                    </span>
              }
                </li>
            )}
            </ul>
          </section>
        )}

        <section className="rounded-xl border border-slate-200 bg-white p-3.5 shadow-card">
          <h3 className="mb-2 text-[12.5px] font-semibold text-navy-800">Actions</h3>
          <ul className="grid grid-cols-2 gap-1.5">
            {actionLegend.map((a) =>
            <li key={a.label} className="flex items-center gap-1.5 text-[11px] text-slate-600">
                <a.icon className="h-3.5 w-3.5 text-slate-400" aria-hidden="true" /> {a.label}
              </li>
            )}
          </ul>
        </section>
      </div>
    </AdminLayout>);

}