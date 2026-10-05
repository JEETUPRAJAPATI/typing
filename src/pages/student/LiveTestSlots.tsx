import React, { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import {
  ArrowLeftIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CalendarIcon,
  BarChart2Icon,
  TrophyIcon,
  PlayIcon,
  RotateCcwIcon,
  EyeIcon,
  MoreVerticalIcon,
  InfoIcon } from
'lucide-react';
import { StudentLayout } from '../../components/student/StudentLayout';

interface SlotRow {
  no: string;
  testNo: string;
  examName: string;
  mode: string;
  start: string;
  end: string;
  language: string;
  duration: string;
  rank: string;
  hasResult: boolean;
  locked: boolean;
}

const slots: SlotRow[] = [
{ no: '01', testNo: '2535', examName: 'CRPF HCM TYPING TEST', mode: 'Easy', start: '12:00 AM', end: '11:59 PM', language: 'English', duration: '10 Min', rank: '-', hasResult: true, locked: false },
{ no: '02', testNo: '2536', examName: 'CRPF HCM TYPING TEST', mode: 'Moderate', start: '12:00 AM', end: '11:59 PM', language: 'English', duration: '10 Min', rank: '-', hasResult: false, locked: true },
{ no: '03', testNo: '2537', examName: 'CRPF HCM TYPING TEST', mode: 'Hard', start: '12:00 AM', end: '11:59 PM', language: 'English', duration: '10 Min', rank: '-', hasResult: false, locked: true },
{ no: '04', testNo: '2538', examName: 'CRPF HCM TYPING TEST', mode: 'Easy', start: '12:00 AM', end: '11:59 PM', language: 'English', duration: '10 Min', rank: '-', hasResult: false, locked: true },
{ no: '05', testNo: '2539', examName: 'CRPF HCM TYPING TEST', mode: 'Moderate', start: '12:00 AM', end: '11:59 PM', language: 'English', duration: '10 Min', rank: '-', hasResult: false, locked: true },
{ no: '06', testNo: '2540', examName: 'CRPF HCM TYPING TEST', mode: 'Hard', start: '12:00 AM', end: '11:59 PM', language: 'English', duration: '10 Min', rank: '-', hasResult: false, locked: true }];


const modeTone: Record<string, string> = {
  Easy: 'bg-emerald-50 text-emerald-700',
  Moderate: 'bg-amber-50 text-amber-700',
  Hard: 'bg-rose-50 text-rose-700'
};

const infoCards = [
{ icon: CalendarIcon, title: 'Daily Free Test(s)', titleTone: 'text-emerald-600', circle: 'bg-emerald-500', text: 'You have 1 unlocked test available per day. Beyond this limit, tests remain locked unless updated by your administrator.' },
{ icon: BarChart2Icon, title: 'About Results', titleTone: 'text-blue-700', circle: 'bg-blue-600', text: 'Your latest result will be shown here. If you give the same test again, only the latest result will be displayed.' },
{ icon: TrophyIcon, title: 'About Rank', titleTone: 'text-violet-600', circle: 'bg-violet-600', text: 'Rank will be shown behind the result. Ranks are visible in the evening (7:00 PM to 10 PM) for all students who took the test throughout the day.' }];


export function LiveTestSlots() {
  const { testId = 'dp-hcm' } = useParams();
  const navigate = useNavigate();
  const [dayOffset, setDayOffset] = useState(0);

  const dayLabel =
  dayOffset === 0 ?
  'Today — Sat, 03 Oct 2026' :
  dayOffset < 0 ?
  `Wed, ${30 + dayOffset + 1} Sep 2026` :
  `Fri, 0${1 + dayOffset} Oct 2026`;

  return (
    <StudentLayout>
      <Link
        to="/live-test/typing"
        className="mb-4 inline-flex items-center gap-1.5 rounded-md border border-slate-300 bg-white px-3 py-1.5 text-[12.5px] font-medium text-slate-600 transition-colors duration-150 hover:bg-slate-50">

        <ArrowLeftIcon className="h-3.5 w-3.5" aria-hidden="true" /> Back to Dashboard
      </Link>

      <div className="mb-4 text-center">
        <h2 className="font-display text-[24px] font-bold text-navy-800">Live Test</h2>
        <p className="text-[12.5px] text-slate-500">Take Tests Daily &amp; Improve Your Speed &amp; Accuracy</p>
      </div>

      <div className="mb-4 flex items-center justify-center gap-4 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-card">
        <button
          type="button"
          aria-label="Previous day"
          onClick={() => setDayOffset((d) => d - 1)}
          className="grid h-8 w-8 place-items-center rounded-md border border-slate-300 text-slate-600 transition-colors duration-150 hover:bg-slate-50">

          <ChevronLeftIcon className="h-4 w-4" aria-hidden="true" />
        </button>
        <span className="flex items-center gap-2 font-display text-[16px] font-semibold text-navy-800">
          <CalendarIcon className="h-5 w-5" aria-hidden="true" /> {dayLabel}
        </span>
        <button
          type="button"
          aria-label="Next day"
          onClick={() => setDayOffset((d) => d + 1)}
          className="grid h-8 w-8 place-items-center rounded-md border border-slate-300 text-slate-600 transition-colors duration-150 hover:bg-slate-50">

          <ChevronRightIcon className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>

      <section className="mb-4 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-card">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[940px] text-left">
            <thead className="bg-slate-50 text-[11.5px] font-semibold text-slate-600">
              <tr>
                <th scope="col" className="px-4 py-2.5">S.No</th>
                <th scope="col" className="px-4 py-2.5">Test No</th>
                <th scope="col" className="px-4 py-2.5">Exam Name</th>
                <th scope="col" className="px-4 py-2.5 text-center">Mode</th>
                <th scope="col" className="px-4 py-2.5">Exam Start</th>
                <th scope="col" className="px-4 py-2.5">Exam end</th>
                <th scope="col" className="px-4 py-2.5">Language</th>
                <th scope="col" className="px-4 py-2.5">Duration</th>
                <th scope="col" className="px-4 py-2.5 text-center">Rank</th>
                <th scope="col" className="px-4 py-2.5 text-center">Result</th>
                <th scope="col" className="px-4 py-2.5 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-[12.5px]">
              {slots.map((s) =>
              <tr key={s.testNo} className="transition-colors duration-150 hover:bg-slate-50/70">
                  <td className="px-4 py-3 text-slate-600">{s.no}</td>
                  <td className="px-4 py-3 font-medium text-navy-800">{s.testNo}</td>
                  <td className="px-4 py-3 font-medium text-navy-800">{s.examName}</td>
                  <td className="px-4 py-3 text-center">
                    <span className={`inline-block rounded px-2.5 py-[3px] text-[11.5px] font-medium ${modeTone[s.mode]}`}>
                      {s.mode}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-slate-600">{s.start}</td>
                  <td className="px-4 py-3 text-slate-600">{s.end}</td>
                  <td className="px-4 py-3 text-center">
                    <span className="inline-block rounded bg-primary-50 px-2.5 py-[3px] text-[11.5px] font-medium text-primary-700">
                      {s.language}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-slate-600">{s.duration}</td>
                  <td className="px-4 py-3 text-center">
                    <Link
                      to={`/live-test/typing/${testId}/rank`}
                      className="inline-flex items-center gap-1 font-semibold text-violet-600 transition-colors duration-150 hover:text-violet-800">

                      <BarChart2Icon className="h-3.5 w-3.5" aria-hidden="true" /> View Rank
                    </Link>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <Link
                      to={`/live-test/typing/${testId}/${s.testNo}/result-pdf`}
                      className="font-semibold text-violet-600 transition-colors duration-150 hover:text-violet-800">

                      View
                    </Link>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <div className="flex items-center justify-center gap-2">
                      {s.locked ?
                    <button
                      type="button"
                      onClick={() => navigate('/result/typing')}
                      className="inline-flex items-center gap-1 rounded-md bg-primary px-4 py-1.5 text-[11.5px] font-semibold text-white transition-colors duration-150 hover:bg-primary-700">

                          <RotateCcwIcon className="h-3 w-3" aria-hidden="true" /> Re-take
                        </button> :

                    <button
                      type="button"
                      onClick={() => navigate('/result/typing')}
                      className="inline-flex items-center gap-1 rounded-md bg-success px-4 py-1.5 text-[11.5px] font-semibold text-white transition-colors duration-150 hover:bg-emerald-700">

                          <PlayIcon className="h-3 w-3 fill-current" aria-hidden="true" /> Start
                        </button>
                    }
                      <button type="button" aria-label="View details" className="text-slate-400 transition-colors duration-150 hover:text-primary">
                        <EyeIcon className="h-4 w-4" aria-hidden="true" />
                      </button>
                      <button type="button" aria-label="More options" className="text-slate-400 transition-colors duration-150 hover:text-navy-800">
                        <MoreVerticalIcon className="h-4 w-4" aria-hidden="true" />
                      </button>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>

      <p className="mb-4 flex items-center gap-2 rounded-lg border border-primary-100 bg-primary-50 px-4 py-2.5 text-[12.5px] text-primary-700">
        <InfoIcon className="h-4 w-4 shrink-0" aria-hidden="true" />
        Result PDFs are published after the session ends. Usually, they appear within{' '}
        <span className="font-semibold">20–25 minutes</span> in the{' '}
        <span className="font-semibold">Action</span> column and also in{' '}
        <span className="font-semibold">Telegram group</span>.
      </p>

      <div className="mb-4 grid gap-4 lg:grid-cols-3">
        {infoCards.map((c) =>
        <div key={c.title} className="flex gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-card">
            <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-full text-white ${c.circle}`}>
              <c.icon className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <p className={`font-display text-[14px] font-bold ${c.titleTone}`}>{c.title}</p>
              <p className="mt-1 text-[11.5px] leading-relaxed text-slate-600">{c.text}</p>
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-wrap items-center gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4">
        <RotateCcwIcon className="h-5 w-5 shrink-0 text-amber-600" aria-hidden="true" />
        <div className="min-w-0">
          <p className="text-[13px] font-semibold text-amber-800">Re-attempt Option</p>
          <p className="text-[11.5px] text-amber-700">You Can Re-Attempt A Test Upto 3 Times</p>
        </div>
        <span className="ml-auto rounded-md border border-amber-300 bg-white px-3 py-1.5 text-[12px] font-semibold text-amber-700">
          Attempts Left: 18/18
        </span>
        <button
          type="button"
          onClick={() => navigate('/result/typing')}
          className="flex items-center gap-1.5 rounded-md bg-danger px-4 py-1.5 text-[12px] font-semibold text-white transition-colors duration-150 hover:bg-[#bb2d3b]">

          <RotateCcwIcon className="h-3.5 w-3.5" aria-hidden="true" /> Re-Attempt
        </button>
      </div>
    </StudentLayout>);

}
