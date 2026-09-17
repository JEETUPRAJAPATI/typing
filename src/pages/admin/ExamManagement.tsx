import React from 'react';
import {
  FilePlus2Icon,
  ClipboardListIcon,
  ScaleIcon,
  PlusIcon,
  ListIcon,
  SearchIcon,
  FilterIcon,
  PencilIcon,
  Trash2Icon,
  LandmarkIcon,
  UsersIcon,
  MonitorIcon,
  FileTextIcon } from
'lucide-react';
import { AdminLayout } from '../../components/admin/AdminLayout';
import { Panel } from '../../components/common/Pill';

const topCards = [
{
  n: 1,
  title: 'Add New Exam',
  text: 'Create a new typing/steno exam, set details, assign tests and configure basic settings.',
  cta: 'Add New Exam',
  icon: FilePlus2Icon,
  color: '#0D6EFD',
  btn: 'bg-primary hover:bg-primary-700',
  ctaIcon: PlusIcon
},
{
  n: 2,
  title: 'Manage Exam',
  text: 'View, edit, activate/deactivate exams, assign tests and manage exam schedule.',
  cta: 'Manage Exams',
  icon: ClipboardListIcon,
  color: '#198754',
  btn: 'bg-success hover:bg-[#146c43]',
  ctaIcon: ListIcon
},
{
  n: 3,
  title: 'Result Pattern (Rules)',
  text: 'Create and manage result patterns, penalty rules and calculation settings.',
  cta: 'Create New Rule',
  icon: ScaleIcon,
  color: '#6F42C1',
  btn: 'bg-[#6F42C1] hover:bg-[#5c36a4]',
  ctaIcon: PlusIcon
}];


interface ExamRow {
  no: number;
  name: string;
  kind: string;
  type: 'Typing' | 'Steno';
  language: string;
  tests: string;
  testsSub: string;
  assigned: string;
  layout: string;
  status: 'Active' | 'Upcoming' | 'Inactive' | 'Closed';
}

const exams: ExamRow[] = [
{ no: 1, name: 'SSC Stenographer Grade C & D', kind: 'Steno Exam', type: 'Steno', language: 'English', tests: '15', testsSub: '(10 Live, 5 Preload)', assigned: '325', layout: 'SSC Steno Layout', status: 'Active' },
{ no: 2, name: 'Railway Clerk Typing Exam', kind: 'Typing Exam', type: 'Typing', language: 'English', tests: '20', testsSub: '(12 Live, 8 Preload)', assigned: '410', layout: 'Railway Typing Layout', status: 'Active' },
{ no: 3, name: 'UP Lekhpal Typing Exam', kind: 'Typing Exam', type: 'Typing', language: 'Hindi', tests: '18', testsSub: '(10 Live, 8 Preload)', assigned: '298', layout: 'UP Lekhpal Layout', status: 'Active' },
{ no: 4, name: 'Delhi Police Head Constable (Ministerial)', kind: 'Typing Exam', type: 'Typing', language: 'English', tests: '15', testsSub: '(10 Live, 5 Preload)', assigned: '362', layout: 'Delhi Police Layout', status: 'Upcoming' },
{ no: 5, name: 'High Court Steno Exam', kind: 'Steno Exam', type: 'Steno', language: 'English', tests: '22', testsSub: '(14 Live, 8 Preload)', assigned: '180', layout: 'High Court Steno Layout', status: 'Inactive' },
{ no: 6, name: 'Bihar SSC Typing Exam', kind: 'Typing Exam', type: 'Typing', language: 'English', tests: '12', testsSub: '(8 Live, 4 Preload)', assigned: '195', layout: 'Bihar SSC Layout', status: 'Closed' }];


const statusTone: Record<ExamRow['status'], string> = {
  Active: 'bg-emerald-50 text-emerald-700',
  Upcoming: 'bg-amber-50 text-amber-700',
  Inactive: 'bg-rose-50 text-rose-700',
  Closed: 'bg-slate-100 text-slate-600'
};

const quickLinks = [
{ label: 'Add New Exam', desc: 'Create a new typing/steno exam', icon: UsersIcon },
{ label: 'Screen Layout', desc: 'Manage exam screen layout and settings', icon: MonitorIcon },
{ label: 'Result Pattern (Rules)', desc: 'Create and manage result calculation rules', icon: ScaleIcon }];


const popularPatterns = [
{ name: 'SSC Typing Rule 2026', desc: 'For SSC & similar exams', used: 'Used in 8 Exams', icon: FileTextIcon, color: '#0D6EFD' },
{ name: 'Steno Rule - Grade C & D', desc: 'For SSC Steno Exams', used: 'Used in 5 Exams', icon: FileTextIcon, color: '#198754' },
{ name: 'High Court Steno Rule', desc: 'For Court & Legal Exams', used: 'Used in 4 Exams', icon: FileTextIcon, color: '#6F42C1' }];


const overview = [
{ label: 'Total Exams', value: '28', color: '#0D6EFD' },
{ label: 'Active Exams', value: '15', color: '#198754' },
{ label: 'Upcoming Exams', value: '6', color: '#F59E0B' },
{ label: 'Inactive Exams', value: '4', color: '#DC3545' }];


export function ExamManagement() {
  return (
    <AdminLayout
      searchPlaceholder="Search by exam name, type, language..."
      showActionButtons={false}
      summary={[
      { label: 'Total Students', value: '1,575' },
      { label: 'Active Students', value: '1,142' },
      { label: 'Total Exams', value: '28' },
      { label: 'Tests Assigned', value: '542' }]
      }>
      
      <div className="mb-4">
        <h2 className="font-display text-[26px] font-bold leading-tight text-navy-800">
          Exam Management
        </h2>
        <p className="text-[12.5px] text-slate-500">Create, manage exams and set result patterns.</p>
      </div>

      <div className="mb-4 grid gap-4 lg:grid-cols-3">
        {topCards.map((c) =>
        <article key={c.n} className="rounded-xl border border-slate-200 bg-white p-5 shadow-card">
            <div className="flex gap-4">
              <span
              className="grid h-12 w-12 shrink-0 place-items-center rounded-full text-white"
              style={{ backgroundColor: c.color }}>
              
                <c.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <h3 className="font-display text-[14.5px] font-bold text-navy-800">
                  {c.n}. {c.title}
                </h3>
                <p className="mt-1 text-[12px] leading-snug text-slate-500">{c.text}</p>
                <button
                type="button"
                className={`mt-3 flex items-center gap-1.5 rounded-md px-3.5 py-2 text-[12px] font-semibold text-white transition-colors duration-150 ${c.btn}`}>
                
                  <c.ctaIcon className="h-3.5 w-3.5" aria-hidden="true" /> {c.cta}
                </button>
              </div>
            </div>
          </article>
        )}
      </div>

      <section className="mb-4 rounded-xl border border-slate-200 bg-white shadow-card">
        <div className="flex flex-wrap items-center gap-3 p-4">
          <div>
            <h3 className="font-display text-[16px] font-semibold text-navy-800">Manage Exams</h3>
            <p className="text-[12px] text-slate-500">
              View, edit, activate/deactivate exams and assign tests.
            </p>
          </div>
          <div className="relative ml-auto">
            <SearchIcon className="pointer-events-none absolute right-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-400" />
            <input
              type="search"
              placeholder="Search by exam name, type, language..."
              aria-label="Search exams"
              className="w-[300px] rounded-md border border-slate-300 py-2 pl-3 pr-8 text-[12px] outline-none focus:border-primary" />
            
          </div>
          <button
            type="button"
            className="flex items-center gap-1.5 rounded-md border border-slate-300 px-3.5 py-2 text-[12px] font-medium text-slate-600 transition-colors duration-150 hover:bg-slate-50">
            
            <FilterIcon className="h-3.5 w-3.5" aria-hidden="true" /> Filter
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[980px] text-left">
            <thead className="bg-slate-50 text-[11.5px] font-semibold text-slate-600">
              <tr>
                <th scope="col" className="px-4 py-2.5">S.No.</th>
                <th scope="col" className="px-4 py-2.5">Exam Name</th>
                <th scope="col" className="px-4 py-2.5">Type</th>
                <th scope="col" className="px-4 py-2.5">Language</th>
                <th scope="col" className="px-4 py-2.5 text-center">Tests Assigned</th>
                <th scope="col" className="px-4 py-2.5 text-center">Assigned To</th>
                <th scope="col" className="px-4 py-2.5">Screen Layout</th>
                <th scope="col" className="px-4 py-2.5 text-center">Status</th>
                <th scope="col" className="px-4 py-2.5 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-[11.5px]">
              {exams.map((e) =>
              <tr key={e.no} className="transition-colors duration-150 hover:bg-slate-50/70">
                  <td className="px-4 py-3 text-slate-600">{e.no}</td>
                  <td className="px-4 py-3">
                    <span className="flex items-center gap-2.5">
                      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-slate-100">
                        <LandmarkIcon className="h-4 w-4 text-slate-500" aria-hidden="true" />
                      </span>
                      <span className="leading-tight">
                        <span className="block font-semibold text-navy-800">{e.name}</span>
                        <span className="block text-[10.5px] text-slate-500">{e.kind}</span>
                      </span>
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <span
                    className={`rounded px-2 py-[2px] text-[10.5px] font-medium ${
                    e.type === 'Steno' ? 'bg-violet-50 text-violet-700' : 'bg-primary-50 text-primary-700'}`
                    }>
                    
                      {e.type}
                    </span>
                  </td>
                  <td className="px-4 py-3 font-medium text-navy-800">{e.language}</td>
                  <td className="px-4 py-3 text-center">
                    <span className="block font-semibold text-navy-800">{e.tests}</span>
                    <span className="block text-[10px] text-slate-500">{e.testsSub}</span>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <span className="block font-semibold text-navy-800">{e.assigned}</span>
                    <span className="block text-[10px] text-slate-500">Students</span>
                  </td>
                  <td className="px-4 py-3">
                    <span className="rounded bg-primary-50 px-2 py-[2px] text-[10.5px] font-medium text-primary-700">
                      {e.layout}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <span className={`rounded px-2 py-[2px] text-[10.5px] font-medium ${statusTone[e.status]}`}>
                      {e.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center justify-center gap-2">
                      <button
                      type="button"
                      aria-label={`Edit ${e.name}`}
                      className="grid h-7 w-7 place-items-center rounded border border-primary-100 bg-primary-50 text-primary transition-colors duration-150 hover:bg-primary-100">
                      
                        <PencilIcon className="h-3.5 w-3.5" aria-hidden="true" />
                      </button>
                      <button
                      type="button"
                      aria-label={`Delete ${e.name}`}
                      className="grid h-7 w-7 place-items-center rounded border border-rose-100 bg-rose-50 text-rose-600 transition-colors duration-150 hover:bg-rose-100">
                      
                        <Trash2Icon className="h-3.5 w-3.5" aria-hidden="true" />
                      </button>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="flex flex-wrap items-center gap-3 border-t border-slate-100 p-3.5 text-[12px] text-slate-600">
          <span>Showing 1 to 6 of 28 exams</span>
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
            {['1', '2', '3', '...'].map((p) =>
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
              className="rounded border border-slate-300 px-2.5 py-1 text-[11.5px] transition-colors duration-150 hover:bg-slate-50">
              
              Next ›
            </button>
          </nav>
        </div>
      </section>

      <div className="grid gap-4 lg:grid-cols-3">
        <Panel title="Quick Links">
          <ul className="space-y-2.5">
            {quickLinks.map((l) =>
            <li key={l.label}>
                <button type="button" className="flex w-full items-start gap-2.5 text-left">
                  <l.icon className="mt-[2px] h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                  <span>
                    <span className="block text-[12.5px] font-semibold text-navy-800">{l.label}</span>
                    <span className="block text-[11px] text-slate-500">{l.desc}</span>
                  </span>
                </button>
              </li>
            )}
          </ul>
        </Panel>

        <Panel title="Popular Result Patterns">
          <ul className="space-y-2.5">
            {popularPatterns.map((p) =>
            <li key={p.name} className="flex items-start gap-2.5">
                <p.icon className="mt-[2px] h-4 w-4 shrink-0" style={{ color: p.color }} aria-hidden="true" />
                <span className="min-w-0">
                  <span className="block text-[12.5px] font-semibold text-navy-800">{p.name}</span>
                  <span className="block text-[11px] text-slate-500">{p.desc}</span>
                </span>
                <span className="ml-auto shrink-0 rounded bg-emerald-50 px-2 py-[2px] text-[10.5px] font-medium text-emerald-700">
                  {p.used}
                </span>
              </li>
            )}
          </ul>
          <button type="button" className="mt-3 text-[12px] font-semibold text-primary hover:text-primary-700">
            View All Result Patterns →
          </button>
        </Panel>

        <Panel title="Exam Overview">
          <ul className="space-y-2">
            {overview.map((o) =>
            <li key={o.label} className="flex items-center gap-2 text-[12.5px]">
                <span className="h-2.5 w-2.5 rounded-sm" style={{ backgroundColor: o.color }} aria-hidden="true" />
                <span className="text-slate-600">{o.label}</span>
                <span className="ml-auto font-display text-[14px] font-bold text-navy-800">{o.value}</span>
              </li>
            )}
          </ul>
          <button type="button" className="mt-3 text-[12px] font-semibold text-primary hover:text-primary-700">
            View Full Report →
          </button>
        </Panel>
      </div>
    </AdminLayout>);

}