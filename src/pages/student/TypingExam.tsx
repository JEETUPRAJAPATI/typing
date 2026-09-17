import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchIcon, ArrowRightIcon, LayoutGridIcon, LandmarkIcon, FileSpreadsheetIcon } from 'lucide-react';
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
                
                {p.id === 'all' ?
                <LayoutGridIcon className="h-4 w-4" aria-hidden="true" /> :

                <LandmarkIcon className="h-4 w-4 text-[#C2410C]" aria-hidden="true" />
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
                <span className="h-14 w-14 shrink-0 overflow-hidden rounded-full">
                  <img 
                    src={exam.image} 
                    alt={exam.name}
                    className="h-full w-full object-cover"
                  />
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
              <span
              className={`mt-auto ml-auto grid h-8 w-8 place-items-center rounded-md ${exam.arrowBg} ${exam.arrowText}`}>
              
                <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
              </span>
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