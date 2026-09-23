import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { TrophyIcon, InfoIcon, MedalIcon, UserIcon } from 'lucide-react';
import { StudentLayout } from '../../components/student/StudentLayout';

const testTitles: Record<string, string> = {
  'dp-hcm': 'Delhi Police HCM Typing',
  'rrb-ntpc': 'RRB NTPC TYPING',
  'upsssc-ja': 'UPSSSC Junior Assistant Typing'
};

interface RankRow {
  rank: number;
  name: string;
  netWpm: number;
  accuracy: number;
  grossWpm: number;
  time: string;
  qualified: boolean;
  you?: boolean;
}

const topRanks: RankRow[] = [
{ rank: 1, name: 'Manisha', netWpm: 55.1, accuracy: 93.23, grossWpm: 59.1, time: '10.00 min', qualified: true },
{ rank: 2, name: 'dhama', netWpm: 52.5, accuracy: 94.59, grossWpm: 55.5, time: '10.00 min', qualified: true },
{ rank: 3, name: 'anish', netWpm: 51.5, accuracy: 92.79, grossWpm: 55.5, time: '10.00 min', qualified: true },
{ rank: 4, name: 'Top Don', netWpm: 51.42, accuracy: 94.49, grossWpm: 54.42, time: '10.00 min', qualified: true },
{ rank: 5, name: 'DEEPAK LATHER', netWpm: 49.56, accuracy: 89.2, grossWpm: 55.56, time: '10.00 min', qualified: true },
{ rank: 6, name: 'sss', netWpm: 48.4, accuracy: 92.37, grossWpm: 52.4, time: '10.00 min', qualified: true },
{ rank: 7, name: 'jjjs', netWpm: 48.1, accuracy: 94.13, grossWpm: 51.1, time: '10.00 min', qualified: true },
{ rank: 20, name: 'Bobby', netWpm: 38.04, accuracy: 82.62, grossWpm: 46.04, time: '10.00 min', qualified: true }];


const yourPosition: RankRow = {
  rank: 93,
  name: 'VIKAS',
  netWpm: 0,
  accuracy: 0,
  grossWpm: 1.88,
  time: '10.00 min',
  qualified: false,
  you: true
};

const rankTone: Record<number, string> = {
  1: 'bg-amber-400 text-white',
  2: 'bg-slate-300 text-white',
  3: 'bg-orange-400 text-white'
};

function RankBadge({ rank }: {rank: number;}) {
  if (rank <= 3) {
    return (
      <span className={`grid h-8 w-8 place-items-center rounded-full ${rankTone[rank]}`}>
        <MedalIcon className="h-4 w-4" aria-hidden="true" />
      </span>);

  }
  return (
    <span className="grid h-8 w-8 place-items-center rounded-full bg-slate-100 text-[12px] font-bold text-slate-600">
      {rank}
    </span>);

}

export function TestRankList() {
  const { testId = '' } = useParams();
  const title = testTitles[testId] ?? 'Live Test';

  return (
    <StudentLayout showSearch>
      <div className="overflow-hidden rounded-xl shadow-card">
        <div className="flex flex-wrap items-center justify-between gap-3 bg-primary px-5 py-4 text-white">
          <h2 className="flex items-center gap-2.5 font-display text-[24px] font-bold">
            <TrophyIcon className="h-7 w-7" aria-hidden="true" /> Rank List - {title}
          </h2>
          <Link
            to="/live-test/typing"
            className="rounded-md bg-white px-3.5 py-1.5 text-[12.5px] font-semibold text-primary transition-colors duration-150 hover:bg-slate-100">

            Back to Tests
          </Link>
        </div>

        <p className="flex items-center gap-2 bg-primary-50 px-5 py-2.5 text-[12px] font-medium text-primary-700">
          <InfoIcon className="h-3.5 w-3.5 shrink-0" aria-hidden="true" /> Qualifying: Minimum 30.00 Net
          WPM
        </p>

        <div className="grid gap-4 bg-primary-700 px-5 py-5 text-white sm:grid-cols-4">
          <div>
            <p className="text-[11px] text-white/80">Your Rank</p>
            <p className="font-display text-[26px] font-extrabold">#{yourPosition.rank}</p>
            <p className="text-[10.5px] text-white/70">out of 93</p>
          </div>
          <div>
            <p className="text-[11px] text-white/80">Net WPM</p>
            <p className="font-display text-[22px] font-bold">{yourPosition.netWpm.toFixed(2)}</p>
          </div>
          <div>
            <p className="text-[11px] text-white/80">Accuracy</p>
            <p className="font-display text-[22px] font-bold">{yourPosition.accuracy.toFixed(2)}%</p>
          </div>
          <div>
            <p className="text-[11px] text-white/80">Status</p>
            <span className="mt-1 inline-block rounded bg-danger px-2.5 py-1 text-[11px] font-bold text-white">
              Not Qualified
            </span>
          </div>
        </div>
      </div>

      <div className="mt-4 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-card">
        <h3 className="flex items-center gap-2 bg-success px-5 py-3 font-display text-[14px] font-bold text-white">
          <TrophyIcon className="h-4 w-4" aria-hidden="true" /> Top 20 Rank Holders
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[620px] text-left">
            <thead className="text-[11.5px] font-semibold text-slate-500">
              <tr>
                <th scope="col" className="px-5 py-2.5">Rank</th>
                <th scope="col" className="px-5 py-2.5">Name</th>
                <th scope="col" className="px-5 py-2.5">Net WPM</th>
                <th scope="col" className="px-5 py-2.5">Accuracy</th>
                <th scope="col" className="px-5 py-2.5">Gross WPM</th>
                <th scope="col" className="px-5 py-2.5">Time</th>
                <th scope="col" className="px-5 py-2.5">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-[12.5px]">
              {topRanks.map((r, i) =>
              <React.Fragment key={r.rank}>
                  {i === topRanks.length - 1 &&
                <tr>
                      <td colSpan={7} className="px-5 py-2 text-center text-slate-400">⋮</td>
                    </tr>
                }
                  <tr className="transition-colors duration-150 hover:bg-slate-50/70">
                    <td className="px-5 py-2.5">
                      <RankBadge rank={r.rank} />
                    </td>
                    <td className="px-5 py-2.5 font-medium text-navy-800">{r.name}</td>
                    <td className="px-5 py-2.5 font-semibold text-success">{r.netWpm.toFixed(2)}</td>
                    <td className="px-5 py-2.5 text-slate-600">{r.accuracy.toFixed(2)}%</td>
                    <td className="px-5 py-2.5 text-slate-600">{r.grossWpm.toFixed(2)}</td>
                    <td className="px-5 py-2.5 text-slate-600">{r.time}</td>
                    <td className="px-5 py-2.5">
                      <span className="rounded bg-emerald-50 px-2 py-[2px] text-[10.5px] font-semibold text-emerald-700">
                        Qualified
                      </span>
                    </td>
                  </tr>
                </React.Fragment>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-4 overflow-hidden rounded-xl border-2 border-primary bg-white shadow-card">
        <h3 className="flex items-center gap-2 bg-[#0EA5E9] px-5 py-3 font-display text-[14px] font-bold text-white">
          <UserIcon className="h-4 w-4" aria-hidden="true" /> Your Position
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[620px] text-left">
            <thead className="text-[11.5px] font-semibold text-slate-500">
              <tr>
                <th scope="col" className="px-5 py-2.5">Rank</th>
                <th scope="col" className="px-5 py-2.5">Name</th>
                <th scope="col" className="px-5 py-2.5">Net WPM</th>
                <th scope="col" className="px-5 py-2.5">Accuracy</th>
                <th scope="col" className="px-5 py-2.5">Gross WPM</th>
                <th scope="col" className="px-5 py-2.5">Time</th>
                <th scope="col" className="px-5 py-2.5">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-5 py-2.5">
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-primary text-[12px] font-bold text-white">
                    {yourPosition.rank}
                  </span>
                </td>
                <td className="px-5 py-2.5">
                  <span className="flex items-center gap-1.5 font-medium text-navy-800">
                    {yourPosition.name}
                    <span className="rounded bg-primary-50 px-1.5 py-[1px] text-[9px] font-bold text-primary-700">
                      You
                    </span>
                  </span>
                </td>
                <td className="px-5 py-2.5 font-semibold text-danger">{yourPosition.netWpm.toFixed(2)}</td>
                <td className="px-5 py-2.5 text-slate-600">{yourPosition.accuracy.toFixed(2)}%</td>
                <td className="px-5 py-2.5 text-slate-600">{yourPosition.grossWpm.toFixed(2)}</td>
                <td className="px-5 py-2.5 text-slate-600">{yourPosition.time}</td>
                <td className="px-5 py-2.5">
                  <span className="rounded bg-rose-50 px-2 py-[2px] text-[10.5px] font-semibold text-rose-700">
                    Not Qualified
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </StudentLayout>);

}
