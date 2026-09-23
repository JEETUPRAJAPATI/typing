import React from 'react';
import { TrophyIcon, MedalIcon } from 'lucide-react';
import { StudentLayout } from '../../components/student/StudentLayout';
import { Breadcrumbs } from '../../components/common/PageHeading';

interface RankRow {
  rank: number;
  name: string;
  address: string;
  exam: string;
  wpm: number;
  errors: number;
}

const hindiRanks: RankRow[] = [
{ rank: 1, name: 'Ravi Kumar Sharma', address: 'RZ-12, Ashok Vihar, Delhi - 110052', exam: 'Hindi Typing (Govt. Exam Pattern)', wpm: 72, errors: 2 },
{ rank: 2, name: 'Priya Singh', address: 'Flat No. 302, Shakti Nagar, Delhi - 110007', exam: 'Hindi Typing (SSC Pattern)', wpm: 68, errors: 3 },
{ rank: 3, name: 'Rohit Verma', address: 'C-45, Laxmi Nagar, Delhi - 110092', exam: 'Hindi Typing (DSSSB)', wpm: 64, errors: 4 },
{ rank: 4, name: 'Neha Gupta', address: 'B-104, Mukherjee Nagar, Delhi - 110009', exam: 'Hindi Typing (Railway)', wpm: 60, errors: 5 },
{ rank: 5, name: 'Sandeep Yadav', address: 'H-12, Karawal Nagar, Delhi - 110094', exam: 'Hindi Typing (UPPSC)', wpm: 58, errors: 6 },
{ rank: 6, name: 'Pooja Sharma', address: 'D-7, Rohini Sector-6, Delhi - 110085', exam: 'Hindi Typing (SSC)', wpm: 56, errors: 7 },
{ rank: 7, name: 'Amit Kumar', address: 'E-18, Preet Vihar, Delhi - 110092', exam: 'Hindi Typing (Railway)', wpm: 54, errors: 8 },
{ rank: 8, name: 'Sunita Devi', address: 'K-16, Janakpuri, Delhi - 110058', exam: 'Hindi Typing (DSSSB)', wpm: 52, errors: 9 },
{ rank: 9, name: 'Vikash Singh', address: 'M-23, Shalimar Bagh, Delhi - 110088', exam: 'Hindi Typing (UPPSC)', wpm: 50, errors: 10 },
{ rank: 10, name: 'Anjali Tiwari', address: 'C-32, Dwarka, Delhi - 110075', exam: 'Hindi Typing (Delhi Police)', wpm: 48, errors: 11 }];


const englishRanks: RankRow[] = [
{ rank: 1, name: 'Amit Kumar Sharma', address: 'RZ-15, Model Town, Delhi - 110009', exam: 'English Typing (SSC)', wpm: 78, errors: 1 },
{ rank: 2, name: 'Sneha Verma', address: 'A-12, Shalimar Bagh, Delhi - 110088', exam: 'English Typing (DSSSB)', wpm: 75, errors: 2 },
{ rank: 3, name: 'Vikash Singh', address: 'E-45, Model Town, Delhi - 110009', exam: 'English Typing (Railway)', wpm: 72, errors: 3 },
{ rank: 4, name: 'Anjali Sharma', address: 'F-32, Patel Nagar, Delhi - 110008', exam: 'English Typing (UPPSC)', wpm: 68, errors: 4 },
{ rank: 5, name: 'Mohit Gupta', address: 'B-18, Rohini, Delhi - 110085', exam: 'English Typing (Delhi Police)', wpm: 64, errors: 5 },
{ rank: 6, name: 'Pooja Mehta', address: 'C-22, Rajouri Garden, Delhi - 110027', exam: 'English Typing (SSC)', wpm: 62, errors: 6 },
{ rank: 7, name: 'Rohit Saini', address: 'D-11, Vivek Vihar, Delhi - 110095', exam: 'English Typing (UPPSC)', wpm: 58, errors: 7 },
{ rank: 8, name: 'Kavita Singh', address: 'G-7, Lajpat Nagar, Delhi - 110024', exam: 'English Typing (Railway)', wpm: 56, errors: 8 },
{ rank: 9, name: 'Deepak Yadav', address: 'H-19, Tilak Nagar, Delhi - 110018', exam: 'English Typing (DSSSB)', wpm: 54, errors: 9 },
{ rank: 10, name: 'Nisha Kumari', address: 'J-28, Karol Bagh, Delhi - 110005', exam: 'English Typing (SSC)', wpm: 52, errors: 10 }];


const rankBadgeTone: Record<number, string> = {
  1: 'bg-amber-100 text-amber-700',
  2: 'bg-slate-200 text-slate-600',
  3: 'bg-orange-100 text-orange-700'
};

function RankBadge({ rank }: {rank: number;}) {
  if (rank <= 3) {
    return (
      <span className={`grid h-7 w-7 place-items-center rounded-full ${rankBadgeTone[rank]}`}>
        <MedalIcon className="h-3.5 w-3.5" aria-hidden="true" />
      </span>);

  }
  return (
    <span className="grid h-7 w-7 place-items-center rounded-full bg-primary-50 text-[11px] font-bold text-primary-700">
      {rank}
    </span>);

}

function RankTable({ title, hindi, tagline, tone, badgeBg, rows }: {
  title: string;
  hindi: string;
  tagline: string;
  tone: string;
  badgeBg: string;
  rows: RankRow[];
}) {
  return (
    <section className="rounded-xl border border-slate-200 bg-white shadow-card">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 p-4">
        <div className="flex items-center gap-2.5">
          <span
            className={`grid h-9 w-9 place-items-center rounded-lg font-display text-[12px] font-bold text-white ${badgeBg}`}>

            {hindi}
          </span>
          <h3 className={`font-display text-[18px] font-bold ${tone}`}>{title}</h3>
        </div>
        <span className="rounded-full bg-slate-50 px-3 py-1 text-[11px] font-medium text-slate-500">
          {tagline}
        </span>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[560px] text-left">
          <thead className="bg-slate-50 text-[11px] font-semibold text-slate-500">
            <tr>
              <th scope="col" className="px-4 py-2.5">Rank</th>
              <th scope="col" className="px-4 py-2.5">Candidate Name with Address</th>
              <th scope="col" className="px-4 py-2.5">Exam Name</th>
              <th scope="col" className="px-4 py-2.5 text-right">Gross Speed (WPM)</th>
              <th scope="col" className="px-4 py-2.5 text-right">Total Error</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-[12px]">
            {rows.map((r) =>
            <tr key={r.rank} className="transition-colors duration-150 hover:bg-slate-50/70">
                <td className="px-4 py-2.5">
                  <RankBadge rank={r.rank} />
                </td>
                <td className="px-4 py-2.5">
                  <p className="font-semibold text-navy-800">{r.name}</p>
                  <p className="text-[11px] text-slate-500">{r.address}</p>
                </td>
                <td className="px-4 py-2.5 text-slate-600">{r.exam}</td>
                <td className="px-4 py-2.5 text-right font-semibold text-primary">{r.wpm}</td>
                <td className="px-4 py-2.5 text-right text-danger">{r.errors}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>);

}

export function TopRanks() {
  return (
    <StudentLayout showDownloadApp>
      <div className="mb-4">
        <Breadcrumbs crumbs={[{ label: 'Home', to: '/' }, { label: 'Top Ranks' }]} />
      </div>

      <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <TrophyIcon className="h-9 w-9 text-warn" aria-hidden="true" />
          <div>
            <h2 className="font-display text-[24px] font-bold text-navy-800">Top Ranks</h2>
            <p className="text-[12.5px] text-slate-500">Our Proud Students - Our Real Success</p>
          </div>
        </div>
        <p className="max-w-md rounded-lg bg-amber-50 px-4 py-2.5 text-center text-[12.5px] font-medium text-amber-800">
          <TrophyIcon className="mr-1.5 inline h-3.5 w-3.5" aria-hidden="true" />
          Your Hard Work Brings Success
        </p>
      </div>

      <p className="mb-5 rounded-xl border border-slate-200 bg-white p-4 text-center font-display text-[15px] font-semibold leading-relaxed text-navy-800">
        पूरे भारत देश में आज का English और Hindi टाइपिंग में अच्छा प्रदर्शन करने वाले Balaji Typing के छात्र
        का नाम
      </p>

      <div className="grid gap-5 xl:grid-cols-2">
        <RankTable
          title="Hindi Typing"
          hindi="हिं"
          tagline="मेहनत + अभ्यास = सफलता"
          tone="text-danger"
          badgeBg="bg-danger"
          rows={hindiRanks} />

        <RankTable
          title="English Typing"
          hindi="En"
          tagline="Practice Makes Perfect"
          tone="text-primary"
          badgeBg="bg-primary"
          rows={englishRanks} />

      </div>
    </StudentLayout>);

}
