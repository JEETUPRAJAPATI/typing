import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeftIcon, PrinterIcon, DownloadIcon } from 'lucide-react';
import { StudentLayout } from '../../components/student/StudentLayout';

interface LeaderboardRow {
  no: number;
  name: string;
  keyGiven: number;
  keyTyped: number;
  time: string;
  backspace: number;
  gross: number;
  net: number;
  qualified: boolean;
  wrong: number;
}

const examTitle = 'UPSSSC Assistants English Typing Test';
const passageTitle = 'Heritage Tourism Sites Need Better Storytelling';

const topRows: LeaderboardRow[] = [
{ no: 1, name: 'V S', keyGiven: 1500, keyTyped: 1501, time: '04:33', backspace: 0, gross: 65.83, net: 65.83, qualified: true, wrong: 4 },
{ no: 2, name: 'Nikhil Yadav', keyGiven: 1500, keyTyped: 1485, time: '05:00', backspace: 10, gross: 59.4, net: 59.4, qualified: true, wrong: 1 },
{ no: 3, name: 'Mehran Khan', keyGiven: 1500, keyTyped: 1433, time: '05:00', backspace: 10, gross: 57.32, net: 57.32, qualified: true, wrong: 0 },
{ no: 4, name: 'Akash Chauhan', keyGiven: 1500, keyTyped: 1319, time: '05:00', backspace: 88, gross: 52.76, net: 52.76, qualified: true, wrong: 1.5 },
{ no: 5, name: 'Ankit Baghel', keyGiven: 1500, keyTyped: 1304, time: '05:00', backspace: 58, gross: 52.16, net: 52.16, qualified: true, wrong: 1 },
{ no: 6, name: 'Om Krishnaut', keyGiven: 1500, keyTyped: 1292, time: '05:00', backspace: 45, gross: 51.68, net: 51.68, qualified: true, wrong: 2 },
{ no: 7, name: 'Ankit Singh', keyGiven: 1500, keyTyped: 1279, time: '04:59', backspace: 15, gross: 51.16, net: 51.16, qualified: true, wrong: 4 },
{ no: 8, name: 'Abhishek Yadav', keyGiven: 1500, keyTyped: 1292, time: '05:00', backspace: 30, gross: 51.68, net: 51.08, qualified: true, wrong: 5.5 }];


const bottomRows: LeaderboardRow[] = [
{ no: 505, name: 'Gyanendra Singh', keyGiven: 1500, keyTyped: 782, time: '05:00', backspace: 117, gross: 31.28, net: 30.08, qualified: true, wrong: 6 },
{ no: 506, name: 'Ashif Siddiqi', keyGiven: 1500, keyTyped: 750, time: '05:00', backspace: 69, gross: 30, net: 30, qualified: true, wrong: 2.5 },
{ no: 507, name: 'Harendra Kumar', keyGiven: 1500, keyTyped: 749, time: '05:00', backspace: 87, gross: 29.96, net: 29.96, qualified: false, wrong: 4 },
{ no: 508, name: 'Mohd Sajjad', keyGiven: 1500, keyTyped: 749, time: '04:59', backspace: 139, gross: 29.96, net: 29.96, qualified: false, wrong: 1 },
{ no: 509, name: 'Baba Shyam', keyGiven: 1500, keyTyped: 749, time: '05:00', backspace: 170, gross: 29.96, net: 29.92, qualified: false, wrong: 2.5 },
{ no: 510, name: 'Lokendra Singh', keyGiven: 1500, keyTyped: 748, time: '05:00', backspace: 81, gross: 29.92, net: 29.85, qualified: false, wrong: 3 }];


function ResultRow({ r }: {r: LeaderboardRow;}) {
  return (
    <tr className={r.qualified ? 'bg-emerald-50/60' : 'bg-rose-50/60'}>
      <td className="border border-slate-200 px-2.5 py-1.5 text-center font-semibold text-navy-800">{r.no}</td>
      <td className="border border-slate-200 px-2.5 py-1.5 font-medium text-navy-800">{r.name}</td>
      <td className="border border-slate-200 px-2.5 py-1.5 text-slate-600">{examTitle}</td>
      <td className="border border-slate-200 px-2.5 py-1.5 text-slate-600">{passageTitle}</td>
      <td className="border border-slate-200 px-2.5 py-1.5 text-center text-slate-600">{r.keyGiven}</td>
      <td className="border border-slate-200 px-2.5 py-1.5 text-center text-slate-600">{r.keyTyped}</td>
      <td className="border border-slate-200 px-2.5 py-1.5 text-center text-slate-600">{r.time}</td>
      <td className="border border-slate-200 px-2.5 py-1.5 text-center text-slate-600">{r.backspace}</td>
      <td className="border border-slate-200 px-2.5 py-1.5 text-center font-semibold text-navy-800">{r.gross}</td>
      <td className="border border-slate-200 px-2.5 py-1.5 text-center font-semibold text-navy-800">{r.net}</td>
      <td
        className={`border border-slate-200 px-2.5 py-1.5 text-center font-bold ${
        r.qualified ? 'bg-emerald-200 text-emerald-800' : 'bg-rose-200 text-rose-800'}`
        }>

        {r.qualified ? 'Yes' : 'No'}
      </td>
      <td className="border border-slate-200 px-2.5 py-1.5 text-center text-slate-600">{r.wrong}</td>
    </tr>);

}

export function LiveTestResultPdf() {
  const { testId = 'dp-hcm', testNo = '2535' } = useParams();

  return (
    <StudentLayout>
      <div className="mb-3 flex flex-wrap items-center gap-3">
        <Link
          to={`/live-test/typing/${testId}/slots`}
          className="inline-flex items-center gap-1.5 rounded-md border border-slate-300 bg-white px-3 py-1.5 text-[12.5px] font-medium text-slate-600 transition-colors duration-150 hover:bg-slate-50">

          <ArrowLeftIcon className="h-3.5 w-3.5" aria-hidden="true" /> Back
        </Link>
        <div className="ml-auto flex gap-2">
          <button
            type="button"
            className="flex items-center gap-1.5 rounded-md border border-slate-300 bg-white px-3 py-1.5 text-[12px] font-medium text-navy-800 transition-colors duration-150 hover:bg-slate-50">

            <PrinterIcon className="h-3.5 w-3.5" aria-hidden="true" /> Print
          </button>
          <button
            type="button"
            className="flex items-center gap-1.5 rounded-md bg-primary px-3 py-1.5 text-[12px] font-semibold text-white transition-colors duration-150 hover:bg-primary-700">

            <DownloadIcon className="h-3.5 w-3.5" aria-hidden="true" /> Download PDF
          </button>
        </div>
      </div>

      <section className="overflow-hidden rounded-xl border border-slate-200 bg-white p-5 shadow-card">
        <p className="font-display text-[15px] font-bold text-navy-800">
          Balaji Typing &amp; Steno College <span className="text-danger">Live Test</span> Result
        </p>

        <div className="mt-3 rounded-md border border-navy-800 px-4 py-2 text-center">
          <p className="font-display text-[14px] font-bold text-navy-800">
            {examTitle} - Live Typing - Test {testNo} - 01/10/2026, 07:00 AM
          </p>
        </div>

        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[1100px] border-collapse text-left text-[11.5px]">
            <thead>
              <tr className="bg-slate-100 text-navy-800">
                <th className="border border-slate-200 px-2.5 py-2 font-bold">SI.NO.</th>
                <th className="border border-slate-200 px-2.5 py-2 font-bold">Name</th>
                <th className="border border-slate-200 px-2.5 py-2 font-bold">Exam Title</th>
                <th className="border border-slate-200 px-2.5 py-2 font-bold">Passage Title</th>
                <th className="border border-slate-200 px-2.5 py-2 text-center font-bold">Key Strokes Given</th>
                <th className="border border-slate-200 px-2.5 py-2 text-center font-bold">Key Strokes Typed</th>
                <th className="border border-slate-200 px-2.5 py-2 text-center font-bold">Time Taken (min)</th>
                <th className="border border-slate-200 px-2.5 py-2 text-center font-bold">Backspace Count</th>
                <th className="border border-slate-200 px-2.5 py-2 text-center font-bold">Gross Speed</th>
                <th className="border border-slate-200 px-2.5 py-2 text-center font-bold">Net Speed</th>
                <th className="border border-slate-200 px-2.5 py-2 text-center font-bold">Qualified</th>
                <th className="border border-slate-200 px-2.5 py-2 text-center font-bold">Wrong Words</th>
              </tr>
            </thead>
            <tbody>
              {topRows.map((r) => <ResultRow key={r.no} r={r} />)}
              <tr>
                <td colSpan={12} className="border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-center text-slate-400">
                  ⋮
                </td>
              </tr>
              {bottomRows.map((r) => <ResultRow key={r.no} r={r} />)}
            </tbody>
          </table>
        </div>

        <p className="mt-3 text-[11px] text-slate-400">
          Showing top and bottom entries of the full leaderboard. Download the PDF for the complete list
          of all 510 participants.
        </p>
      </section>
    </StudentLayout>);

}
