import React from 'react';
import {
  TypeIcon,
  CheckCircle2Icon,
  PauseCircleIcon,
  ListIcon,
  PlusIcon,
  SearchIcon,
  RotateCcwIcon,
  EyeIcon,
  PencilIcon,
  CopyIcon,
  Trash2Icon,
  FileSpreadsheetIcon,
  FileTextIcon,
  InfoIcon,
  UploadIcon } from
'lucide-react';
import { AdminLayout } from '../../components/admin/AdminLayout';
import { Breadcrumbs } from '../../components/common/PageHeading';

const stats = [
{ icon: TypeIcon, label: 'Total Font Groups', value: '28', sub: 'All Font Groups', color: '#0D6EFD' },
{ icon: CheckCircle2Icon, label: 'Active Font Groups', value: '24', sub: 'Currently Active', color: '#198754' },
{ icon: PauseCircleIcon, label: 'Inactive Font Groups', value: '4', sub: 'Currently Inactive', color: '#F59E0B' },
{ icon: ListIcon, label: 'Assigned to Tests', value: '22', sub: 'Font Groups in Use', color: '#6F42C1' }];


interface FontGroupRow {
  no: number;
  name: string;
  code: string;
  codeTone: string;
  language: string;
  type: string;
  preview: string;
  previewClass?: string;
  tests: number;
  status: 'Active' | 'Inactive';
  created: string;
}

const rows: FontGroupRow[] = [
{ no: 1, name: 'English Basic Fonts', code: 'EN-BASIC', codeTone: 'bg-primary-50 text-primary-700', language: 'English', type: 'Basic', preview: 'The quick brown fox jumps over the lazy dog.', tests: 15, status: 'Active', created: '10 Aug 2026' },
{ no: 2, name: 'English Advanced Fonts', code: 'EN-ADV', codeTone: 'bg-primary-50 text-primary-700', language: 'English', type: 'Advanced', preview: 'The quick brown fox jumps over the lazy dog.', previewClass: 'italic', tests: 18, status: 'Active', created: '09 Aug 2026' },
{ no: 3, name: 'Hindi Basic Fonts', code: 'HI-BASIC', codeTone: 'bg-emerald-50 text-emerald-700', language: 'Hindi', type: 'Basic', preview: 'कठिन परिश्रम सफलता की कुंजी है।', tests: 12, status: 'Active', created: '09 Aug 2026' },
{ no: 4, name: 'Hindi Advanced Fonts', code: 'HI-ADV', codeTone: 'bg-emerald-50 text-emerald-700', language: 'Hindi', type: 'Advanced', preview: 'अभ्यास से ही मनुष्य पूर्णता प्राप्त करता है।', tests: 10, status: 'Active', created: '08 Aug 2026' },
{ no: 5, name: 'English Typewriter Fonts', code: 'EN-TYPE', codeTone: 'bg-primary-50 text-primary-700', language: 'English', type: 'Typewriter', preview: 'The quick brown fox jumps over the lazy dog.', previewClass: 'font-mono', tests: 8, status: 'Active', created: '07 Aug 2026' },
{ no: 6, name: 'Hindi Typewriter Fonts', code: 'HI-TYPE', codeTone: 'bg-emerald-50 text-emerald-700', language: 'Hindi', type: 'Typewriter', preview: 'सफलता का कोई शॉर्टकट नहीं होता है।', tests: 6, status: 'Inactive', created: '07 Aug 2026' },
{ no: 7, name: 'Courier New Fonts', code: 'COURIER', codeTone: 'bg-violet-50 text-violet-700', language: 'English', type: 'Monospace', preview: 'The quick brown fox jumps over the lazy dog.', previewClass: 'font-mono', tests: 9, status: 'Active', created: '06 Aug 2026' },
{ no: 8, name: 'Kruti Dev Fonts', code: 'KRUTI', codeTone: 'bg-emerald-50 text-emerald-700', language: 'Hindi', type: 'Unicode', preview: 'मेहनत आज की, सफलता कल की।', tests: 5, status: 'Inactive', created: '05 Aug 2026' },
{ no: 9, name: 'DevLys Fonts', code: 'DEVLYS', codeTone: 'bg-emerald-50 text-emerald-700', language: 'Hindi', type: 'Unicode', preview: 'ज्ञान से बढ़कर कोई धन नहीं।', tests: 4, status: 'Active', created: '05 Aug 2026' },
{ no: 10, name: 'Custom Special Fonts', code: 'CUSTOM', codeTone: 'bg-amber-50 text-amber-700', language: 'English/Hindi', type: 'Custom', preview: 'The quick brown fox jumps over the lazy dog.', previewClass: 'font-semibold', tests: 3, status: 'Active', created: '04 Aug 2026' }];


const statusTone: Record<string, string> = {
  Active: 'bg-emerald-50 text-emerald-700',
  Inactive: 'bg-rose-50 text-rose-700'
};

const quickActions = [
{ label: 'Add New Font Group', desc: 'Create a new font group', icon: PlusIcon },
{ label: 'Duplicate Font Group', desc: 'Create a copy of existing font group', icon: CopyIcon },
{ label: 'Assign to Tests', desc: 'Assign font group while creating/editing tests', icon: ListIcon },
{ label: 'Export Font Groups', desc: 'Export font group list to Excel / PDF', icon: UploadIcon }];


export function FontGroups() {
  return (
    <AdminLayout searchPlaceholder="Search by font group name, code, description...">
      <div className="mb-4 flex flex-wrap items-start gap-4">
        <div>
          <h2 className="font-display text-[26px] font-bold leading-tight text-navy-800">Font Groups</h2>
          <p className="text-[12.5px] text-slate-500">
            Create, manage and organize font groups. Assign font groups to tests for consistent
            typing/steno experience.
          </p>
        </div>
        <div className="ml-auto">
          <Breadcrumbs
            crumbs={[{ label: 'Font Group', to: '/admin/font-groups' }, { label: 'Manage Font Groups' }]} />
          
        </div>
      </div>

      <div className="mb-4 flex flex-wrap items-stretch gap-4">
        {stats.map((s) =>
        <div
          key={s.label}
          className="flex min-w-[210px] flex-1 items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-card">
          
            <span
            className="grid h-10 w-10 shrink-0 place-items-center rounded-lg text-white"
            style={{ backgroundColor: s.color }}>
            
              <s.icon className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <p className="text-[11.5px] text-slate-500">{s.label}</p>
              <p className="font-display text-[22px] font-bold leading-tight text-navy-800">{s.value}</p>
              <p className="text-[11px] text-slate-500">{s.sub}</p>
            </div>
          </div>
        )}
        <div className="flex items-center">
          <button
            type="button"
            className="flex items-center gap-1.5 rounded-md bg-primary px-4 py-2.5 text-[12.5px] font-semibold text-white transition-colors duration-150 hover:bg-primary-700">
            
            <PlusIcon className="h-4 w-4" aria-hidden="true" /> Add New Font Group
          </button>
        </div>
      </div>

      <section className="mb-4 rounded-xl border border-slate-200 bg-white shadow-card">
        <div className="flex flex-wrap items-center gap-2.5 border-b border-slate-100 p-3.5">
          {[
          ['-- Status --', 'Active', 'Inactive'],
          ['-- Language --', 'English', 'Hindi'],
          ['-- Font Type --', 'Basic', 'Advanced', 'Unicode'],
          ['-- Created By --', 'Super Admin']].
          map((opts) =>
          <label key={opts[0]} className="block">
              <span className="sr-only">{opts[0]}</span>
              <select className="w-[150px] rounded-md border border-slate-300 px-2.5 py-1.5 text-[12px] text-slate-600 outline-none focus:border-primary">
                {opts.map((o) =>
              <option key={o}>{o}</option>
              )}
              </select>
            </label>
          )}
          <div className="relative ml-auto">
            <SearchIcon className="pointer-events-none absolute right-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-400" />
            <input
              type="search"
              placeholder="Search by name, code, description..."
              aria-label="Search font groups"
              className="w-[260px] rounded-md border border-slate-300 py-1.5 pl-3 pr-8 text-[12px] outline-none focus:border-primary" />
            
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
          <table className="w-full min-w-[1040px] text-left">
            <thead className="bg-slate-50 text-[11.5px] font-semibold text-slate-600">
              <tr>
                <th scope="col" className="px-3 py-2.5">
                  <input type="checkbox" aria-label="Select all font groups" className="h-3.5 w-3.5 accent-primary" />
                </th>
                <th scope="col" className="px-3 py-2.5">S.No.</th>
                <th scope="col" className="px-3 py-2.5">Font Group Name</th>
                <th scope="col" className="px-3 py-2.5">Code</th>
                <th scope="col" className="px-3 py-2.5">Language</th>
                <th scope="col" className="px-3 py-2.5">Font Type</th>
                <th scope="col" className="px-3 py-2.5">Preview</th>
                <th scope="col" className="px-3 py-2.5 text-center">Assigned Tests</th>
                <th scope="col" className="px-3 py-2.5">Status</th>
                <th scope="col" className="px-3 py-2.5">Created On</th>
                <th scope="col" className="px-3 py-2.5">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-[11.5px]">
              {rows.map((r) =>
              <tr key={r.no} className="transition-colors duration-150 hover:bg-slate-50/70">
                  <td className="px-3 py-2.5">
                    <input type="checkbox" aria-label={`Select ${r.name}`} className="h-3.5 w-3.5 accent-primary" />
                  </td>
                  <td className="px-3 py-2.5 text-slate-600">{r.no}</td>
                  <td className="px-3 py-2.5 font-semibold text-primary">{r.name}</td>
                  <td className="px-3 py-2.5">
                    <span className={`rounded px-2 py-[2px] text-[10.5px] font-semibold ${r.codeTone}`}>
                      {r.code}
                    </span>
                  </td>
                  <td className="px-3 py-2.5 text-slate-600">{r.language}</td>
                  <td className="px-3 py-2.5 text-slate-600">{r.type}</td>
                  <td className={`px-3 py-2.5 text-slate-600 ${r.previewClass ?? ''}`}>{r.preview}</td>
                  <td className="px-3 py-2.5 text-center font-medium text-primary">{r.tests}</td>
                  <td className="px-3 py-2.5">
                    <span className={`rounded px-2 py-[2px] text-[10.5px] font-medium ${statusTone[r.status]}`}>
                      {r.status}
                    </span>
                  </td>
                  <td className="px-3 py-2.5 text-slate-600">{r.created}</td>
                  <td className="px-3 py-2.5">
                    <div className="flex items-center gap-2 text-slate-400">
                      <button type="button" aria-label={`View ${r.name}`} className="hover:text-primary">
                        <EyeIcon className="h-3.5 w-3.5" aria-hidden="true" />
                      </button>
                      <button type="button" aria-label={`Edit ${r.name}`} className="hover:text-primary">
                        <PencilIcon className="h-3.5 w-3.5" aria-hidden="true" />
                      </button>
                      <button type="button" aria-label={`Duplicate ${r.name}`} className="hover:text-primary">
                        <CopyIcon className="h-3.5 w-3.5" aria-hidden="true" />
                      </button>
                      <button type="button" aria-label={`Delete ${r.name}`} className="text-rose-400 hover:text-rose-600">
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
          <span>Showing 1 to 10 of 28 font groups</span>
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
            {['1', '2', '3'].map((p) =>
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

      <div className="grid gap-4 xl:grid-cols-[1fr_260px_1fr]">
        <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-card">
          <h3 className="mb-2 flex items-center gap-2 text-[12.5px] font-semibold text-navy-800">
            <InfoIcon className="h-3.5 w-3.5 text-primary" aria-hidden="true" /> About Font Groups
          </h3>
          <p className="text-[11.5px] leading-relaxed text-slate-500">
            Font groups allow you to organize and apply specific font settings to tests. You can
            create multiple font groups with different font families, sizes, line spacing, and styling
            to suit various exam patterns.
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-card">
          <h3 className="mb-2 text-[12.5px] font-semibold text-navy-800">Font Group Status</h3>
          <ul className="space-y-2">
            <li className="flex items-start gap-2 text-[11px]">
              <span className="rounded bg-emerald-50 px-2 py-[2px] text-[10.5px] font-medium text-emerald-700">
                Active
              </span>
              <span className="text-slate-500">Font group is active and can be assigned to tests.</span>
            </li>
            <li className="flex items-start gap-2 text-[11px]">
              <span className="rounded bg-rose-50 px-2 py-[2px] text-[10.5px] font-medium text-rose-700">
                Inactive
              </span>
              <span className="text-slate-500">Font group is inactive and cannot be assigned.</span>
            </li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-card">
          <h3 className="mb-2 text-[12.5px] font-semibold text-navy-800">Quick Actions</h3>
          <ul className="grid gap-2 sm:grid-cols-2">
            {quickActions.map((a) =>
            <li key={a.label}>
                <button type="button" className="flex w-full items-start gap-2 text-left">
                  <a.icon className="mt-[2px] h-3.5 w-3.5 shrink-0 text-primary" aria-hidden="true" />
                  <span>
                    <span className="block text-[11.5px] font-semibold text-navy-800">{a.label}</span>
                    <span className="block text-[10.5px] text-slate-500">{a.desc}</span>
                  </span>
                </button>
              </li>
            )}
          </ul>
        </section>
      </div>
    </AdminLayout>);

}