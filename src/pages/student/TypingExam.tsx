import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchIcon, ArrowRightIcon, LayoutGridIcon, FileSpreadsheetIcon, LockIcon } from 'lucide-react';

type MonumentIconProps = React.SVGProps<SVGSVGElement>;

function IndiaGateIcon({ style, ...props }: MonumentIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" style={style} {...props}>
      <path d="M7 21V11C7 7.5 9 5 12 5C15 5 17 7.5 17 11V21H14.5V11.5C14.5 9.3 13.4 8 12 8C10.6 8 9.5 9.3 9.5 11.5V21H7Z" />
      <rect x="5" y="21" width="14" height="1.6" rx="0.5" />
    </svg>);

}

function TajMahalIcon({ style, ...props }: MonumentIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" style={style} {...props}>
      <path d="M9 12C9 8.5 10.3 6 12 5C13.7 6 15 8.5 15 12H9Z" />
      <circle cx="12" cy="4.2" r="0.9" />
      <rect x="9.3" y="12" width="5.4" height="9" />
      <rect x="4.6" y="15" width="1.4" height="6" />
      <circle cx="5.3" cy="14.2" r="0.8" />
      <rect x="18" y="15" width="1.4" height="6" />
      <circle cx="18.7" cy="14.2" r="0.8" />
      <rect x="6" y="21" width="12" height="1.4" rx="0.4" />
    </svg>);

}

function ToranGateIcon({ style, ...props }: MonumentIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" style={style} {...props}>
      <rect x="5" y="6" width="2" height="15" />
      <rect x="17" y="6" width="2" height="15" />
      <rect x="4" y="3.2" width="16" height="1.4" rx="0.4" />
      <rect x="4" y="6" width="16" height="1.2" rx="0.4" />
      <rect x="4" y="8.6" width="16" height="1.2" rx="0.4" />
    </svg>);

}

function PalaceIcon({ style, ...props }: MonumentIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" style={style} {...props}>
      <rect x="4.5" y="12" width="15" height="9" />
      <circle cx="7" cy="11" r="1.4" />
      <circle cx="12" cy="10" r="1.6" />
      <circle cx="17" cy="11" r="1.4" />
      <rect x="9.5" y="15" width="2" height="3" />
      <rect x="12.5" y="15" width="2" height="3" />
    </svg>);

}

function GopuramGateIcon({ style, ...props }: MonumentIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" style={style} {...props}>
      <path d="M12 3L20 10H4L12 3Z" />
      <rect x="5" y="10" width="2" height="11" />
      <rect x="17" y="10" width="2" height="11" />
      <path d="M9.5 21V15C9.5 13.3 10.6 12 12 12C13.4 12 14.5 13.3 14.5 15V21H9.5Z" />
    </svg>);

}

function StupaIcon({ style, ...props }: MonumentIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" style={style} {...props}>
      <path d="M6 19C6 12.4 8.7 8 12 8C15.3 8 18 12.4 18 19H6Z" />
      <rect x="11.3" y="3" width="1.4" height="5" />
      <circle cx="12" cy="2.4" r="1" />
      <rect x="5" y="19" width="14" height="2" />
    </svg>);

}

function IndiaMapIcon({ style, ...props }: MonumentIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" style={style} {...props}>
      <path d="M11 2.3c1 .3 1.9.9 2.4 1.7.4.6 1.5.8 2.4.6.7-.1 1.4.3 1.3 1-.1.6-.8.9-.8 1.5 0 .5.6.7 1 1.1.6.6.4 1.5-.1 2-.6.6-1.5.6-2 1.3-.4.6-.2 1.4-.6 2-.5.7-1.5.7-1.9 1.5-.3.6.1 1.3-.3 1.9-.4.6-1.3.5-1.6 1.2-.3.7.2 1.6-.4 2.1-.5.4-1.2.1-1.6-.3-.6-.6-.5-1.6-1.1-2.2-.4-.4-1.1-.4-1.4-.9-.3-.5.1-1.1-.2-1.6-.4-.7-1.4-.6-1.9-1.2-.4-.5-.1-1.3-.5-1.8-.4-.5-1.2-.4-1.6-.9-.5-.6-.1-1.5-.5-2.1C4.1 8.7 2.8 8.7 2.7 7.9c-.1-.6.6-1 1.1-1.3.7-.4.9-1.3 1.6-1.7.6-.3 1.4 0 2-.4.6-.4.6-1.3 1.3-1.6.7-.3 1.5.5 2.3.4z" />
    </svg>);

}

const patternIcon: Record<string, React.ElementType> = {
  gate: IndiaGateIcon,
  taj: TajMahalIcon,
  toran: ToranGateIcon,
  palace: PalaceIcon,
  gopuram: GopuramGateIcon,
  stupa: StupaIcon,
  map: IndiaMapIcon
};
import { StudentLayout } from '../../components/student/StudentLayout';
import { PageHeading } from '../../components/common/PageHeading';
import { examPatterns, typingExams } from '../../data/typingExams';

export function TypingExam() {
  const navigate = useNavigate();
  const [pattern, setPattern] = useState('all');
  const [query, setQuery] = useState('');

  const visible = useMemo(
    () =>
    typingExams.filter(
      (e) =>
      (pattern === 'all' || e.state === pattern) &&
      e.name.toLowerCase().includes(query.trim().toLowerCase())
    ),
    [pattern, query]
  );

  return (
    <StudentLayout>
      <PageHeading
        icon={<FileSpreadsheetIcon className="h-5 w-5" />}
        title="Typing Exam"
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Typing Exam' }]} />
      

      <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-card">
        <h3 className="font-display text-[16px] font-semibold text-navy-800">Select Exam Pattern</h3>

        <div className="mt-3 flex flex-wrap gap-2.5">
          {examPatterns.map((p) => {
            const active = p.id === pattern;
            const Icon = p.icon ? patternIcon[p.icon] : null;
            return (
              <button
                key={p.id}
                type="button"
                onClick={() => setPattern(p.id)}
                aria-pressed={active}
                className={`flex min-w-[112px] items-center justify-center gap-2 rounded-lg border px-4 py-2.5 text-[13px] font-medium transition-colors duration-150 ${
                active ?
                'border-primary bg-primary text-white' :
                'border-slate-200 bg-white text-navy-800 hover:border-primary hover:text-primary'}`
                }>

                {Icon ?
                <Icon className="h-6 w-6" style={{ color: active ? '#FFFFFF' : p.color }} aria-hidden="true" /> :

                <LayoutGridIcon className="h-5 w-5" aria-hidden="true" />
                }
                {p.label}
              </button>);

          })}
        </div>

        <div className="relative mt-4">
          <SearchIcon className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for exam..."
            aria-label="Search for exam"
            className="w-full rounded-lg border border-slate-300 py-2.5 pl-10 pr-4 text-[13px] outline-none transition-colors duration-150 placeholder:text-slate-400 focus:border-primary" />
          
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {visible.map((exam) =>
          <button
            key={exam.id}
            type="button"
            onClick={() => navigate(`/typing-exam/${exam.id}`)}
            className={`flex flex-col rounded-xl border border-slate-200 ${exam.tone} p-3.5 text-left shadow-card transition-colors duration-150 hover:border-primary`}>
            
              <div className="flex gap-3">
                <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-full ${exam.arrowBg} ${exam.arrowText} font-display text-[11px] font-bold`}>
                  {exam.initials}
                </span>
                <span className="min-w-0">
                  <span className="block font-display text-[13.5px] font-semibold leading-snug text-navy-800">
                    {exam.name}
                  </span>
                  {exam.lines.map((l) =>
                <span key={l} className="block text-[11.5px] leading-snug text-slate-500">
                      {l}
                    </span>
                )}
                </span>
              </div>
              <div className="mt-3 flex items-center justify-between gap-2">
                <span className="rounded-md border border-slate-200 px-2 py-1 text-[11px] font-medium text-slate-600">
                  {exam.testsCount} Tests
                </span>
                <span className="flex items-center gap-1.5">
                  {exam.premium ?
                  <span className="flex items-center gap-1 rounded-full bg-amber-50 px-2 py-1 text-[10.5px] font-semibold text-amber-700">
                      <LockIcon className="h-3 w-3" aria-hidden="true" /> Premium
                    </span> :

                  <span className="rounded-full bg-emerald-50 px-2 py-1 text-[10.5px] font-semibold text-emerald-700">
                      Free
                    </span>
                  }
                  <span
                  className={`grid h-7 w-7 shrink-0 place-items-center rounded-md ${exam.arrowBg} ${exam.arrowText}`}>

                    <ArrowRightIcon className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                </span>
              </div>
            </button>
          )}
        </div>

        {visible.length === 0 &&
        <p className="py-10 text-center text-[13px] text-slate-500">
            No exams match your search. Try a different exam pattern or keyword.
          </p>
        }
      </section>
    </StudentLayout>);

}