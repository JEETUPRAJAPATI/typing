import React, { useState } from 'react';
import {
  FileTextIcon,
  BookOpenIcon,
  EyeIcon,
  DownloadIcon,
  MinusIcon,
  PlusIcon,
  PrinterIcon,
  MoreVerticalIcon,
  LightbulbIcon,
  ChevronLeftIcon,
  ChevronRightIcon } from
'lucide-react';
import { StudentLayout } from '../../components/student/StudentLayout';
import { Breadcrumbs } from '../../components/common/PageHeading';

interface Magazine {
  no: number;
  title: string;
  subtitle: string;
  pages: number;
  size: string;
}

const magazines: Magazine[] = [
{ no: 1, title: 'KC Magazine - 01', subtitle: 'General, Rajya Sabha, Lok Sabha', pages: 48, size: '2.4 MB' },
{ no: 2, title: 'KC Magazine - 02', subtitle: 'General, Rajya Sabha, Lok Sabha', pages: 52, size: '2.8 MB' },
{ no: 3, title: 'KC Magazine - 03', subtitle: 'General, Rajya Sabha, Lok Sabha', pages: 50, size: '2.6 MB' },
{ no: 4, title: 'KC Magazine - 04', subtitle: 'General, Rajya Sabha, Lok Sabha', pages: 55, size: '3.1 MB' },
{ no: 5, title: 'KC Magazine - 05', subtitle: 'General, Rajya Sabha, Lok Sabha', pages: 48, size: '2.7 MB' },
{ no: 6, title: 'KC Magazine - 06', subtitle: 'General, Rajya Sabha, Lok Sabha', pages: 56, size: '3.2 MB' },
{ no: 7, title: 'KC Magazine - 07', subtitle: 'General, Rajya Sabha, Lok Sabha', pages: 53, size: '2.9 MB' },
{ no: 8, title: 'KC Magazine - 08', subtitle: 'General, Rajya Sabha, Lok Sabha', pages: 49, size: '2.5 MB' },
{ no: 9, title: 'KC Magazine - 09', subtitle: 'General, Rajya Sabha, Lok Sabha', pages: 52, size: '2.8 MB' },
{ no: 10, title: 'KC Magazine - 10', subtitle: 'General, Rajya Sabha, Lok Sabha', pages: 58, size: '3.4 MB' }];


const tips = [
'Practice regularly for better speed and accuracy.',
'Use these magazines for daily practice.',
'Keep a notebook for difficult words.'];


export function KCMagazines() {
  const [selected, setSelected] = useState<Magazine>(magazines[0]);
  const [page, setPage] = useState(1);
  const totalPages = 2;

  return (
    <StudentLayout showSearch>
      <div className="mb-3">
        <Breadcrumbs
          crumbs={[
          { label: 'Home', to: '/' },
          { label: 'PDF File', to: '/pdf/kc-magazines' },
          { label: 'KC Magazines' }]
          } />

      </div>

      <section className="mb-4 flex flex-wrap items-start justify-between gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-card">
        <div className="flex items-start gap-3">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-rose-50 text-danger">
            <FileTextIcon className="h-6 w-6" aria-hidden="true" />
          </span>
          <div>
            <h2 className="font-display text-[22px] font-bold text-navy-800">KC Magazines (PDF)</h2>
            <p className="max-w-2xl text-[12.5px] text-slate-500">
              K.C. Magazines are highly useful for Shorthand practice. Download chapter-wise magazines and
              improve your speed and accuracy.
            </p>
          </div>
        </div>
        <div className="flex shrink-0 gap-2.5">
          <div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-2">
            <BookOpenIcon className="h-4 w-4 text-primary" aria-hidden="true" />
            <span>
              <span className="block text-[10px] text-slate-500">Total Magazines</span>
              <span className="block text-[13px] font-bold text-navy-800">15+</span>
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
      </section>

      <div className="grid gap-4 xl:grid-cols-[2fr_1fr]">
        <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-card">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[560px] text-left text-[12.5px]">
              <thead className="text-[11px] font-semibold text-slate-500">
                <tr>
                  <th scope="col" className="pb-2">S.No.</th>
                  <th scope="col" className="pb-2">Magazine Name</th>
                  <th scope="col" className="pb-2">Pages</th>
                  <th scope="col" className="pb-2">Size</th>
                  <th scope="col" className="pb-2">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {magazines.map((m) =>
                <tr key={m.no}>
                    <td className="py-2.5 text-slate-500">{m.no}.</td>
                    <td className="py-2.5">
                      <div className="flex items-center gap-2">
                        <span className="grid h-7 w-7 shrink-0 place-items-center rounded bg-rose-50 text-danger">
                          <FileTextIcon className="h-3.5 w-3.5" aria-hidden="true" />
                        </span>
                        <span>
                          <span className="block font-semibold text-navy-800">{m.title}</span>
                          <span className="block text-[10.5px] text-slate-500">{m.subtitle}</span>
                        </span>
                      </div>
                    </td>
                    <td className="py-2.5 text-slate-600">{m.pages}</td>
                    <td className="py-2.5 text-slate-600">{m.size}</td>
                    <td className="py-2.5">
                      <div className="flex gap-1.5">
                        <button
                        type="button"
                        onClick={() => setSelected(m)}
                        className="flex items-center gap-1 rounded-md bg-primary px-2.5 py-1.5 text-[11px] font-semibold text-white transition-colors duration-150 hover:bg-primary-700">

                          <EyeIcon className="h-3 w-3" aria-hidden="true" /> View
                        </button>
                        <button
                        type="button"
                        className="flex items-center gap-1 rounded-md bg-success px-2.5 py-1.5 text-[11px] font-semibold text-white transition-colors duration-150 hover:bg-emerald-700">

                          <DownloadIcon className="h-3 w-3" aria-hidden="true" /> Download
                        </button>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div className="mt-4 flex items-center justify-center gap-1.5">
            <button
              type="button"
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="grid h-7 w-7 place-items-center rounded-md border border-slate-300 text-slate-500 transition-colors duration-150 hover:bg-slate-50 disabled:opacity-40">

              <ChevronLeftIcon className="h-3.5 w-3.5" aria-hidden="true" />
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) =>
            <button
              key={p}
              type="button"
              onClick={() => setPage(p)}
              className={`grid h-7 w-7 place-items-center rounded-md text-[12px] font-semibold transition-colors duration-150 ${
              page === p ? 'bg-primary text-white' : 'text-slate-600 hover:bg-slate-50'}`
              }>

                {p}
              </button>
            )}
            <button
              type="button"
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="grid h-7 w-7 place-items-center rounded-md border border-slate-300 text-slate-500 transition-colors duration-150 hover:bg-slate-50 disabled:opacity-40">

              <ChevronRightIcon className="h-3.5 w-3.5" aria-hidden="true" />
            </button>
          </div>
        </section>

        <div className="space-y-4">
          <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-card">
            <p className="border-b border-slate-100 px-4 py-2.5 text-[12.5px] font-semibold text-navy-800">
              Preview ({selected.title})
            </p>
            <div className="flex items-center gap-1.5 bg-[#2B2B2B] px-3 py-2">
              <FileTextIcon className="h-3.5 w-3.5 text-rose-400" aria-hidden="true" />
              <span className="truncate text-[11.5px] font-medium text-white underline">
                {selected.title}.pdf
              </span>
              <div className="ml-auto flex items-center gap-2 text-[10.5px] text-white/80">
                <span>1 / {selected.pages}</span>
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
              key={selected.no}
              src="/pdf/kc-magazine-01.pdf"
              title={`${selected.title} preview`}
              className="h-[420px] w-full border-0 bg-slate-100" />

          </section>

          <section className="rounded-xl border border-amber-200 bg-amber-50 p-4">
            <h3 className="mb-2 flex items-center gap-2 text-[12.5px] font-bold text-amber-800">
              <LightbulbIcon className="h-4 w-4" aria-hidden="true" /> Important Tips
            </h3>
            <ul className="space-y-1.5">
              {tips.map((t) =>
              <li key={t} className="flex items-start gap-1.5 text-[11.5px] text-amber-800">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-amber-500" /> {t}
                </li>
              )}
            </ul>
          </section>
        </div>
      </div>
    </StudentLayout>);

}
