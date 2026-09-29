import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  HeartIcon,
  FolderIcon,
  FolderPlusIcon,
  SearchIcon,
  LayersIcon,
  PlayIcon,
  RotateCcwIcon,
  CrownIcon,
  CheckIcon,
  PenLineIcon,
  BarChart2Icon,
  XIcon,
  PlusIcon } from
'lucide-react';
import { StudentLayout } from '../../components/student/StudentLayout';
import { Breadcrumbs } from '../../components/common/PageHeading';
import { volumeOneDictations } from '../../data/steno';

const difficultyFilters = [
'Filter by Difficulty',
'Easiest Dictations',
'Medium Dictations',
'Hard Dictations',
'Pro Level Dictations'];


function AddToFolderModal({
  folders,
  onCreate,
  onClose




}: {folders: string[];onCreate: (name: string) => void;onClose: () => void;}) {
  const [name, setName] = useState('');

  const create = () => {
    const trimmed = name.trim();
    if (!trimmed) return;
    onCreate(trimmed);
    setName('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-navy-900/50 p-4">
      <div className="w-full max-w-lg rounded-xl bg-white p-7 shadow-2xl">
        <div className="mb-2.5 flex items-start justify-between gap-3">
          <h3 className="flex items-center gap-2.5 font-display text-[19px] font-bold text-navy-800">
            <FolderPlusIcon className="h-5 w-5 text-primary" aria-hidden="true" /> Add to a Folder
          </h3>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="grid h-8 w-8 shrink-0 place-items-center rounded-full text-slate-400 transition-colors duration-150 hover:bg-slate-100 hover:text-slate-600">

            <XIcon className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
        <p className="mb-5 text-[13.5px] text-slate-500">
          Organise this dictation into your own folders. Find them again under <b>My Dictations</b> in
          the sidebar.
        </p>

        {folders.length === 0 ?
        <div className="mb-5 flex flex-col items-center gap-2.5 py-8 text-center">
            <FolderIcon className="h-12 w-12 text-slate-300" aria-hidden="true" />
            <p className="text-[13.5px] text-slate-400">No folders yet — create your first one below.</p>
          </div> :

        <ul className="mb-5 max-h-48 space-y-2 overflow-y-auto">
            {folders.map((f) =>
          <li key={f}>
                <button
              type="button"
              className="flex w-full items-center gap-2.5 rounded-md border border-slate-200 px-4 py-2.5 text-left text-[13.5px] text-navy-800 transition-colors duration-150 hover:border-primary hover:bg-primary-50/40">

                  <FolderIcon className="h-4 w-4 text-primary" aria-hidden="true" /> {f}
                </button>
              </li>
          )}
          </ul>
        }

        <div className="flex gap-2.5">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && create()}
            placeholder="Create a new folder..."
            className="w-full rounded-md border border-slate-300 px-3.5 py-2.5 text-[13.5px] outline-none focus:border-primary" />

          <button
            type="button"
            onClick={create}
            className="flex shrink-0 items-center gap-1.5 rounded-md bg-primary px-4 py-2.5 text-[13.5px] font-semibold text-white transition-colors duration-150 hover:bg-primary-700">

            <PlusIcon className="h-4 w-4" aria-hidden="true" /> Create
          </button>
        </div>
      </div>
    </div>);

}

export function DictationList() {
  const [filter, setFilter] = useState('Hard Dictations');
  const [query, setQuery] = useState('');
  const [folders, setFolders] = useState<string[]>([]);
  const [folderModalFor, setFolderModalFor] = useState<number | null>(null);

  const rows = volumeOneDictations.filter((d) =>
  `${d.no} ${d.topic}`.toLowerCase().includes(query.trim().toLowerCase())
  );

  return (
    <StudentLayout>
      <div className="mb-3">
        <Breadcrumbs
          crumbs={[
          { label: 'Home', to: '/' },
          { label: 'English Steno Exam', to: '/english-steno' },
          { label: 'Kalish Chandra (1000 Words)' }]
          } />
        
      </div>

      <section className="mb-4 rounded-xl border border-slate-200 bg-white p-4 shadow-card">
        <div className="flex flex-wrap items-start gap-4">
          <div className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary-50 text-primary">
              <PenLineIcon className="h-5 w-5" aria-hidden="true" />
            </span>
            <h2 className="font-display text-[26px] font-bold text-navy-800">
              Kailash Chandra (1000 Words)
            </h2>
          </div>
          <button
            type="button"
            className="ml-auto flex items-center gap-2 rounded-full border border-rose-200 bg-rose-50 px-4 py-2 text-[12.5px] font-semibold text-rose-600 transition-colors duration-150 hover:bg-rose-100">
            
            <HeartIcon className="h-4 w-4 fill-current" aria-hidden="true" /> Favourite Dictations
            <span className="grid h-5 w-5 place-items-center rounded-full bg-rose-500 text-[10.5px] font-bold text-white">
              1
            </span>
          </button>
        </div>

        <div className="mt-3 flex flex-wrap items-center gap-3">
          <label className="block">
            <span className="sr-only">Filter by difficulty</span>
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="w-[300px] rounded-md border border-slate-300 bg-white px-3 py-2 text-[13px] outline-none focus:border-primary">
              
              {difficultyFilters.map((f) =>
              <option key={f} value={f}>
                  {f}
                </option>
              )}
            </select>
          </label>
          <div className="relative ml-auto">
            <SearchIcon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search topic / number / words..."
              aria-label="Search topic, number or words"
              className="w-[320px] rounded-md border border-slate-300 py-2 pl-9 pr-3 text-[13px] outline-none transition-colors duration-150 focus:border-primary" />
            
          </div>
        </div>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-card">
        <div className="mb-4 flex items-center gap-2 border-l-4 border-primary bg-slate-50 px-3 py-2">
          <LayersIcon className="h-4 w-4 text-primary" aria-hidden="true" />
          <h3 className="font-display text-[15px] font-semibold text-navy-800">Volume 1</h3>
          <span className="ml-auto rounded bg-slate-100 px-2 py-[2px] text-[11px] font-medium text-slate-600">
            22 Dictations
          </span>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {rows.map((d) =>
          <li
            key={d.no}
            className="flex flex-col rounded-lg border border-slate-200 bg-white p-3.5 shadow-card">
            
              <div className="flex items-start">
                <h4 className="font-display text-[15px] font-semibold text-navy-800">
                  Dictation No. {d.no}
                </h4>
                <div className="ml-auto flex items-center gap-2">
                  <button
                  type="button"
                  onClick={() => setFolderModalFor(d.no)}
                  aria-label="Add to a folder"
                  className="text-primary transition-colors duration-150 hover:text-primary-700">

                    <FolderIcon className="h-4 w-4" aria-hidden="true" />
                  </button>
                  <button
                  type="button"
                  aria-label={d.favourite ? 'Remove from favourites' : 'Add to favourites'}
                  className="text-rose-500 transition-colors duration-150 hover:text-rose-600">
                  
                    <HeartIcon
                    className={`h-4 w-4 ${d.favourite ? 'fill-current' : ''}`}
                    aria-hidden="true" />
                  
                  </button>
                </div>
              </div>

              <p className="mt-2.5 flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-wide text-slate-400">
                <BarChart2Icon className="h-3 w-3" aria-hidden="true" /> Difficulty level of the
                dictation
              </p>
              <p className="mt-1 text-[12.5px] font-semibold text-[#B45309]">
                {d.difficulty.toFixed(1)} <span className="text-slate-400">/10</span>
              </p>
              <span className="mt-1 block h-[3px] w-full rounded-full bg-slate-100">
                <span
                className="block h-full rounded-full bg-[#F59E0B]"
                style={{ width: `${d.difficulty * 10}%` }} />
              
              </span>

              <ul className="mt-2.5 space-y-1 text-[12px] text-slate-600">
                <li className="flex gap-1.5">
                  <span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Topic — {d.topic}
                </li>
                <li className="flex gap-1.5">
                  <span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#F59E0B]" />
                  {d.words}
                </li>
                <li className="flex gap-1.5">
                  <span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                  All Speeds
                </li>
              </ul>

              <p className="mt-2">
                {d.paid ?
              <span className="inline-flex items-center gap-1 rounded bg-amber-50 px-2 py-[2px] text-[11px] font-semibold text-[#B45309]">
                    <CrownIcon className="h-3 w-3" aria-hidden="true" /> PAID
                  </span> :

              <span className="inline-flex items-center gap-1 rounded bg-emerald-50 px-2 py-[2px] text-[11px] font-semibold text-emerald-700">
                    <CheckIcon className="h-3 w-3" aria-hidden="true" /> FREE
                  </span>
              }
              </p>

              {d.lastAttempt &&
            <div className="mt-2.5 rounded border border-rose-100 bg-rose-50 px-2.5 py-2">
                  <p className="flex items-center gap-1.5 text-[11px] text-slate-600">
                    <RotateCcwIcon className="h-3 w-3" aria-hidden="true" /> Your last attempt
                    <span className="ml-auto font-display text-[13px] font-bold text-navy-800">
                      {d.lastAttempt.percent}
                    </span>
                  </p>
                  <p className="text-[10.5px] text-slate-500">
                    {d.lastAttempt.date} • {d.lastAttempt.wpm}
                  </p>
                </div>
            }

              <Link
              to="/steno/kailash-chandra/practice"
              className={`mt-3 flex items-center justify-center gap-2 rounded-md py-2 text-[12.5px] font-semibold transition-colors duration-150 ${
              d.lastAttempt ?
              'border border-slate-300 bg-white text-navy-800 hover:bg-slate-50' :
              'bg-navy-900 text-white hover:bg-navy-800'}`
              }>
              
                {d.lastAttempt ?
              <>
                    <RotateCcwIcon className="h-3.5 w-3.5" aria-hidden="true" /> Re-attempt
                  </> :

              <>
                    <PlayIcon className="h-3.5 w-3.5 fill-current" aria-hidden="true" /> Take Test
                  </>
              }
              </Link>
            </li>
          )}
        </ul>
      </section>

      {folderModalFor !== null &&
      <AddToFolderModal
        folders={folders}
        onCreate={(name) => setFolders((prev) => [...prev, name])}
        onClose={() => setFolderModalFor(null)} />

      }
    </StudentLayout>);

}