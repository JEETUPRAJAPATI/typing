import React, { useState } from 'react';
import {
  BookOpenTextIcon,
  RefreshCwIcon,
  SearchIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  FolderIcon,
  FileTextIcon,
  DownloadIcon,
  BookOpenIcon,
  MinusIcon,
  PlusIcon,
  PrinterIcon,
  MoreVerticalIcon,
  LightbulbIcon } from
'lucide-react';
import { StudentLayout } from '../../components/student/StudentLayout';
import { Breadcrumbs } from '../../components/common/PageHeading';

interface MagazineFile {
  name: string;
  date: string;
}

interface Folder {
  key: string;
  name: string;
}

const folders: Folder[] = [
{ key: 'legal-vishnu', name: 'Legal - Vishnu Art Press' },
{ key: 'progressive-2026', name: 'Progressive 2026' },
{ key: 'progressive-2025', name: 'Progressive 2025' },
{ key: 'progressive-2024', name: 'Progressive 2024' }];


const months = [
'January', 'February', 'March', 'April', 'May', 'June',
'July', 'August', 'September', 'October', 'November', 'December'];


function buildMonthFiles(year: number, count: number): MagazineFile[] {
  return months.slice(0, count).map((m, i) => ({
    name: `${m} ${year}`,
    date: `2026-01-10 21:39:${String(15 - i).padStart(2, '0')}`
  }));
}

const filesByFolder: Record<string, MagazineFile[]> = {
  'progressive-2024': buildMonthFiles(2024, 12),
  'progressive-2025': buildMonthFiles(2025, 9),
  'progressive-2026': buildMonthFiles(2026, 8),
  'legal-vishnu': Array.from({ length: 19 }, (_, i) => ({
    name: `Legal Magazine - ${String(i + 1).padStart(2, '0')}`,
    date: `2026-01-08 18:0${i % 10}:00`
  }))
};

const tips = [
'Use these magazines for daily shorthand practice.',
'Focus on speed and accuracy.',
'Keep a notebook for difficult words.',
'Try to read and write regularly.'];


export function ProgressiveMagazines() {
  const [activeFolder, setActiveFolder] = useState<Folder | null>(null);
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState<MagazineFile | null>(null);

  const files = activeFolder ? filesByFolder[activeFolder.key] ?? [] : [];
  const rows = files.filter((f) => f.name.toLowerCase().includes(query.trim().toLowerCase()));
  const preview = selected ?? files[0];

  const openFolder = (f: Folder) => {
    setActiveFolder(f);
    setSelected(filesByFolder[f.key]?.[0] ?? null);
    setQuery('');
  };

  return (
    <StudentLayout showSearch>
      <div className="mb-3">
        <Breadcrumbs
          crumbs={[
          { label: 'Home', to: '/' },
          { label: 'PDF File', to: '/pdf/kc-magazines' },
          ...(activeFolder ?
          [{ label: 'Progressive Magazines', to: '/pdf/progressive-magazines' }, { label: activeFolder.name }] :
          [{ label: 'Progressive Magazines' }])]
          } />

      </div>

      <section className="mb-4 flex flex-wrap items-center gap-4 rounded-xl bg-gradient-to-r from-fuchsia-600 via-rose-500 to-orange-500 p-4 text-white shadow-card">
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/20">
          <BookOpenTextIcon className="h-6 w-6" aria-hidden="true" />
        </span>
        <div className="min-w-0 flex-1">
          <h2 className="font-display text-[19px] font-bold">Magazines</h2>
          <p className="text-[12.5px] text-white/85">
            {activeFolder ? 'Tap a PDF to open or download' : 'Choose a folder to view magazines'}
          </p>
        </div>
        <button
          type="button"
          aria-label="Refresh"
          className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white/20 transition-colors duration-150 hover:bg-white/30">

          <RefreshCwIcon className="h-4 w-4" aria-hidden="true" />
        </button>
      </section>

      {!activeFolder &&
      <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-card">
        <div className="relative mb-4">
          <SearchIcon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            type="search"
            placeholder="Search..."
            aria-label="Search folders"
            className="w-full rounded-md border border-slate-300 py-2 pl-9 pr-3 text-[13px] outline-none transition-colors duration-150 focus:border-primary" />

        </div>

        <p className="mb-3 text-[12.5px] font-semibold text-navy-800">Folders</p>
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {folders.map((f) =>
          <button
            key={f.key}
            type="button"
            onClick={() => openFolder(f)}
            className="flex items-center gap-3 rounded-lg border border-slate-200 p-3.5 text-left transition-colors duration-150 hover:border-primary hover:bg-primary-50/40">

              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-violet-50 text-violet-600">
                <FolderIcon className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block truncate text-[13px] font-semibold text-navy-800">{f.name}</span>
                <span className="block text-[11px] text-slate-500">
                  {filesByFolder[f.key]?.length ?? 0} files
                </span>
              </span>
              <ChevronRightIcon className="h-4 w-4 shrink-0 text-slate-400" aria-hidden="true" />
            </button>
          )}
        </div>
      </div>
      }

      {activeFolder &&
      <>
        <div className="mb-4 flex flex-wrap items-start justify-end gap-4">
          <div className="flex shrink-0 gap-2.5">
            <div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3.5 py-2 shadow-card">
              <BookOpenIcon className="h-4 w-4 text-primary" aria-hidden="true" />
              <span>
                <span className="block text-[10px] text-slate-500">Total Magazines</span>
                <span className="block text-[13px] font-bold text-navy-800">100+</span>
              </span>
            </div>
            <div className="flex items-center gap-2 rounded-lg border border-rose-100 bg-rose-50 px-3.5 py-2">
              <FileTextIcon className="h-4 w-4 text-danger" aria-hidden="true" />
              <span>
                <span className="block text-[10px] text-slate-500">Format</span>
                <span className="block text-[13px] font-bold text-danger">PDF</span>
              </span>
            </div>
          </div>
        </div>

        <div className="grid gap-4 xl:grid-cols-[2fr_1fr]">
          <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-card">
            <div className="relative mb-3">
              <SearchIcon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search..."
                aria-label="Search magazines"
                className="w-full rounded-md border border-slate-300 py-2 pl-9 pr-3 text-[13px] outline-none transition-colors duration-150 focus:border-primary" />

            </div>

            <div className="mb-3 flex items-center gap-2 text-[12.5px]">
              <button
                type="button"
                onClick={() => setActiveFolder(null)}
                className="flex items-center gap-1 font-medium text-primary hover:text-primary-700">

                <ChevronLeftIcon className="h-3.5 w-3.5" aria-hidden="true" /> Folders
              </button>
              <span className="text-slate-300">/</span>
              <span className="flex items-center gap-1.5 font-semibold text-navy-800">
                <FolderIcon className="h-4 w-4 text-primary" aria-hidden="true" /> {activeFolder.name}
              </span>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {rows.map((f) =>
              <button
                key={f.name}
                type="button"
                onClick={() => setSelected(f)}
                className={`flex items-center gap-2.5 rounded-lg border p-3 text-left transition-colors duration-150 ${
                preview?.name === f.name ? 'border-primary bg-primary-50' : 'border-slate-200 hover:border-primary'}`
                }>

                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded bg-rose-50 text-danger">
                    <FileTextIcon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-[12.5px] font-semibold text-navy-800">{f.name}</span>
                    <span className="block truncate text-[10px] text-slate-400">{f.date}</span>
                  </span>
                  <DownloadIcon className="h-4 w-4 shrink-0 text-slate-400" aria-hidden="true" />
                </button>
              )}
            </div>
          </section>

          <div className="space-y-4">
            <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-card">
              <p className="border-b border-slate-100 px-4 py-2.5 text-[12.5px] font-semibold text-navy-800">
                Preview ({preview?.name ?? 'No file selected'})
              </p>
              <div className="flex items-center gap-1.5 bg-[#2B2B2B] px-3 py-2">
                <FileTextIcon className="h-3.5 w-3.5 text-rose-400" aria-hidden="true" />
                <span className="truncate text-[11.5px] font-medium text-white underline">
                  {preview ? `${preview.name.replace(/\s+/g, '_')}.pdf` : '—'}
                </span>
                <div className="ml-auto flex items-center gap-2 text-[10.5px] text-white/80">
                  <span>1 / 48</span>
                  <button type="button" className="grid h-5 w-5 place-items-center rounded hover:bg-white/10">
                    <MinusIcon className="h-3 w-3" aria-hidden="true" />
                  </button>
                  <span>100%</span>
                  <button type="button" className="grid h-5 w-5 place-items-center rounded hover:bg-white/10">
                    <PlusIcon className="h-3 w-3" aria-hidden="true" />
                  </button>
                  <DownloadIcon className="h-3.5 w-3.5" aria-hidden="true" />
                  <PrinterIcon className="h-3.5 w-3.5" aria-hidden="true" />
                  <MoreVerticalIcon className="h-3.5 w-3.5" aria-hidden="true" />
                </div>
              </div>

              <iframe
                key={preview?.name}
                src="/pdf/progressive-magazine-01.pdf"
                title="Progressive Magazine preview"
                className="h-[420px] w-full border-0 bg-slate-100" />

            </section>

            <section className="rounded-xl border border-blue-200 bg-blue-50 p-4">
              <h3 className="mb-2 flex items-center gap-2 text-[12.5px] font-bold text-primary-700">
                <LightbulbIcon className="h-4 w-4" aria-hidden="true" /> Important Tips
              </h3>
              <ul className="space-y-1.5">
                {tips.map((t) =>
                <li key={t} className="flex items-start gap-1.5 text-[11.5px] text-primary-700">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" /> {t}
                  </li>
                )}
              </ul>
            </section>
          </div>
        </div>
      </>
      }
    </StudentLayout>);

}
