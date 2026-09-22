import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  BarChart3Icon,
  PrinterIcon,
  DownloadIcon,
  FileTextIcon,
  CheckCircle2Icon,
  XCircleIcon,
  PlusCircleIcon,
  AlertTriangleIcon,
  TargetIcon,
  ZapIcon,
  SparklesIcon,
  RocketIcon,
  TrophyIcon } from
'lucide-react';
import { AdminLayout } from '../../components/admin/AdminLayout';
import { Panel } from '../../components/common/Pill';

const overview = [
{ icon: FileTextIcon, label: 'Total Words', value: '410', color: '#0D6EFD' },
{ icon: CheckCircle2Icon, label: 'Correct Words', value: '384 (94.15%)', color: '#198754' },
{ icon: XCircleIcon, label: 'Incorrect Words', value: '7 (1.71%)', color: '#DC3545' },
{ icon: PlusCircleIcon, label: 'Extra Words', value: '2 (0.49%)', color: '#0D6EFD' },
{ icon: AlertTriangleIcon, label: 'Missed Words', value: '4 (0.98%)', color: '#D97706' },
{ icon: TargetIcon, label: 'Accuracy', value: '96.58%', color: '#198754' },
{ icon: ZapIcon, label: 'Gross Speed (WPM)', value: '58', color: '#7C3AED' }];


const perfBars = [
{ minute: '1st Min', correct: 78, incorrect: 3, speed: 55, accuracy: 92 },
{ minute: '2nd Min', correct: 80, incorrect: 2, speed: 58, accuracy: 95 },
{ minute: '3rd Min', correct: 79, incorrect: 1, speed: 60, accuracy: 96 },
{ minute: '4th Min', correct: 82, incorrect: 1, speed: 59, accuracy: 97 },
{ minute: '5th Min', correct: 81, incorrect: 0, speed: 58, accuracy: 96 }];


const mistakeAnalysis = [
{ label: 'Spelling Mistake', count: 1, pct: 14.3, color: '#EC4899' },
{ label: 'Omission Mistake', count: 1, pct: 14.3, color: '#198754' },
{ label: 'Addition Mistake', count: 1, pct: 14.3, color: '#F59E0B' },
{ label: 'Punctuation Error', count: 2, pct: 28.6, color: '#7C3AED' },
{ label: 'Extra Space Error', count: 1, pct: 14.3, color: '#0EA5E9' },
{ label: 'Repetition Error', count: 1, pct: 14.3, color: '#0D6EFD' },
{ label: 'Half Error', count: 0, pct: 0, color: '#94A3B8' }];


const mistakesList = [
{ n: 1, type: 'Punctuation Error', original: ', instead of .', input: '-', count: 2 },
{ n: 2, type: 'Spelling Mistake', original: 'interim', input: 'interim', count: 1 },
{ n: 3, type: 'Omission Mistake', original: 'the', input: 'the', count: 1 },
{ n: 4, type: 'Addition Mistake', original: 'India', input: 'India', count: 1 },
{ n: 5, type: 'Extra Space Error', original: 'Budget', input: 'Budget', count: 1 },
{ n: 6, type: 'Repetition Error', original: 'the the', input: 'the the', count: 1 },
{ n: 7, type: 'Half Error', original: '-', input: '-', count: 0 }];


const commonWrongWords = [
{ word: 'interim', count: 1 },
{ word: 'budget', count: 1 },
{ word: 'india', count: 2 },
{ word: 'the', count: 2 },
{ word: '.', count: 2 }];


const mistakeTrend = [3, 2, 1, 1, 0];
const accuracyTrend = [92, 95, 96, 97, 96];

const takeaways = [
'Your accuracy is excellent (96.58%).',
'Your speed is good (58 WPM) but can be improved to reach 70 WPM.',
'Main mistakes are in punctuation (28.6%) and spelling (14.3%).',
'Focus on accuracy and consistent practice to achieve your goal.'];


const suggestions = [
'Practice punctuation rules (full stop, comma, semicolon, etc.).',
'Use regular typing drills to improve your speed (aim for 70+ WPM).',
'Try 15-20 minutes of focused practice daily.',
'Review incorrect words and learn from mistakes.'];


function BarLineChart() {
  const width = 520;
  const height = 180;
  const barMax = 90;
  const lineMax = 100;
  const groupWidth = width / perfBars.length;

  const linePath = (values: number[], max: number) =>
  values.
  map((v, i) => {
    const x = i * groupWidth + groupWidth / 2;
    const y = height - v / max * height;
    return `${i === 0 ? 'M' : 'L'}${x.toFixed(1)},${y.toFixed(1)}`;
  }).
  join(' ');

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="h-[190px] w-full" role="img" aria-label="Typing performance graph">
      {[0, 1, 2, 3, 4].map((i) =>
      <line key={i} x1={0} x2={width} y1={i / 4 * height} y2={i / 4 * height} stroke="#E2E8F0" strokeWidth={1} />
      )}
      {perfBars.map((b, i) => {
        const x = i * groupWidth;
        const cH = b.correct / barMax * height;
        const iH = b.incorrect / barMax * height * 4;
        return (
          <g key={b.minute}>
            <rect x={x + groupWidth * 0.28} y={height - cH} width={groupWidth * 0.2} height={cH} fill="#86EFAC" rx={2} />
            <rect x={x + groupWidth * 0.52} y={height - iH} width={groupWidth * 0.2} height={iH} fill="#FCA5A5" rx={2} />
          </g>);

      })}
      <path d={linePath(perfBars.map((b) => b.speed), lineMax)} fill="none" stroke="#0D6EFD" strokeWidth={2} strokeLinecap="round" />
      <path d={linePath(perfBars.map((b) => b.accuracy), lineMax)} fill="none" stroke="#198754" strokeWidth={2} strokeLinecap="round" />
    </svg>);

}

function Donut({ data, centerLabel, centerValue }: {
  data: {color: string;pct: number;}[];
  centerLabel: string;
  centerValue: string;
}) {
  let offset = 0;
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  return (
    <svg viewBox="0 0 100 100" className="h-[140px] w-[140px] shrink-0" role="presentation">
      {data.map((s) => {
        const length = s.pct / 100 * circumference;
        const el =
        <circle
          key={s.color}
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          stroke={s.color}
          strokeWidth="16"
          strokeDasharray={`${length} ${circumference - length}`}
          strokeDashoffset={-offset} />;

        offset += length;
        return el;
      })}
      <text x="50" y="47" textAnchor="middle" className="fill-slate-500" style={{ fontSize: 7 }}>
        {centerLabel}
      </text>
      <text x="50" y="58" textAnchor="middle" className="fill-navy-800 font-bold" style={{ fontSize: 13 }}>
        {centerValue}
      </text>
    </svg>);

}

function TrendChart() {
  const width = 480;
  const height = 140;
  const max = 10;
  const accMax = 100;
  const step = width / (mistakeTrend.length - 1);
  const path = (values: number[], max: number) =>
  values.
  map((v, i) => `${i === 0 ? 'M' : 'L'}${(i * step).toFixed(1)},${(height - v / max * height).toFixed(1)}`).
  join(' ');

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="h-[150px] w-full" role="img" aria-label="Mistake trend chart">
      {[0, 1, 2, 3].map((i) =>
      <line key={i} x1={0} x2={width} y1={i / 3 * height} y2={i / 3 * height} stroke="#E2E8F0" strokeWidth={1} />
      )}
      <path d={path(mistakeTrend, max)} fill="none" stroke="#DC3545" strokeWidth={2} strokeLinecap="round" />
      <path d={path(accuracyTrend, accMax)} fill="none" stroke="#0D6EFD" strokeWidth={2} strokeLinecap="round" />
    </svg>);

}

export function DetailedAnalysisReport() {
  const [showAllMistakes, setShowAllMistakes] = useState(false);

  return (
    <AdminLayout searchPlaceholder="Search test name, exam name..." showActionButtons={false}>
      <div className="mb-5 flex flex-wrap items-start justify-between gap-4">
        <div className="flex items-start gap-3">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary-50 text-primary">
            <BarChart3Icon className="h-5 w-5" aria-hidden="true" />
          </span>
          <div>
            <h2 className="font-display text-[22px] font-bold leading-tight text-navy-800">
              Detailed Analysis Report
            </h2>
            <p className="text-[12.5px] text-slate-500">
              Complete breakdown of your performance with insights and suggestions
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            className="flex items-center gap-1.5 rounded-md border border-slate-300 bg-white px-3 py-2 text-[12px] font-medium text-navy-800 transition-colors duration-150 hover:bg-slate-50">

            <PrinterIcon className="h-3.5 w-3.5" aria-hidden="true" /> Print Report
          </button>
          <button
            type="button"
            className="flex items-center gap-1.5 rounded-md bg-primary px-3 py-2 text-[12px] font-semibold text-white transition-colors duration-150 hover:bg-primary-700">

            <DownloadIcon className="h-3.5 w-3.5" aria-hidden="true" /> Download PDF
          </button>
        </div>
      </div>

      <div className="grid gap-5 xl:grid-cols-[1fr_300px]">
        <div className="space-y-4">
          <ul className="grid grid-cols-2 gap-2.5 sm:grid-cols-4 xl:grid-cols-7">
            {overview.map((o) =>
            <li
              key={o.label}
              className="rounded-lg border p-2.5"
              style={{ backgroundColor: `${o.color}14`, borderColor: `${o.color}33` }}>

                <o.icon className="h-3.5 w-3.5" style={{ color: o.color }} aria-hidden="true" />
                <p className="mt-1 text-[10px] leading-snug text-slate-500">{o.label}</p>
                <p className="font-display text-[13px] font-bold text-navy-800">{o.value}</p>
              </li>
            )}
          </ul>

          <div className="grid gap-4 lg:grid-cols-2">
            <Panel title="Typing Performance Graph">
              <div className="mb-2 flex flex-wrap items-center gap-3 text-[10.5px] text-slate-600">
                <span className="flex items-center gap-1.5">
                  <span className="h-[3px] w-4 rounded-full bg-primary" /> Speed (WPM)
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="h-[3px] w-4 rounded-full bg-success" /> Accuracy (%)
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-sm" style={{ backgroundColor: '#86EFAC' }} /> Correct Words
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-sm" style={{ backgroundColor: '#FCA5A5' }} /> Incorrect Words
                </span>
              </div>
              <BarLineChart />
              <ul className="mt-1 flex justify-between text-[10.5px] text-slate-400">
                {perfBars.map((b) => <li key={b.minute}>{b.minute}</li>)}
              </ul>
            </Panel>

            <Panel title="Mistake Analysis">
              <div className="flex items-center gap-4">
                <Donut
                  data={mistakeAnalysis.map((m) => ({ color: m.color, pct: m.pct }))}
                  centerLabel="Total Mistakes"
                  centerValue="7" />

                <ul className="min-w-0 flex-1 space-y-1.5">
                  {mistakeAnalysis.map((m) =>
                  <li key={m.label} className="flex items-center gap-1.5 text-[11px]">
                      <span className="h-2 w-2 shrink-0 rounded-full" style={{ backgroundColor: m.color }} />
                      <span className="min-w-0 flex-1 truncate text-slate-600">{m.label}</span>
                      <span className="shrink-0 font-medium text-navy-800">
                        {m.count} ({m.pct.toFixed(1)}%)
                      </span>
                    </li>
                  )}
                </ul>
              </div>
            </Panel>
          </div>

          <div className="grid gap-4 lg:grid-cols-[1.4fr_1fr_1.2fr]">
            <Panel title="Detailed Mistakes List">
              <div className="flex items-center justify-between">
                <span className="text-[11px] text-slate-500">7 mistakes found</span>
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setShowAllMistakes((v) => !v)}
                    aria-expanded={showAllMistakes}
                    className="rounded-md border border-slate-300 bg-white px-2.5 py-1 text-[11px] font-medium text-slate-600 transition-colors duration-150 hover:bg-slate-50">

                    View all
                  </button>
                  {showAllMistakes &&
                  <ul className="absolute right-0 top-full z-10 mt-1 w-24 rounded-md border border-slate-200 bg-white py-1 shadow-panel">
                      {mistakesList.map((m) =>
                    <li key={m.n}>
                          <button
                        type="button"
                        className="block w-full px-3 py-1.5 text-left text-[11px] text-slate-600 transition-colors duration-150 hover:bg-slate-50">

                            View
                          </button>
                        </li>
                    )}
                    </ul>
                  }
                </div>
              </div>
              <div className="mt-2 overflow-x-auto">
                <table className="w-full min-w-[460px] text-left text-[11px]">
                  <thead className="text-slate-500">
                    <tr>
                      <th scope="col" className="pb-1.5 font-medium">#</th>
                      <th scope="col" className="pb-1.5 font-medium">Mistake Type</th>
                      <th scope="col" className="pb-1.5 font-medium">Original Word / Text</th>
                      <th scope="col" className="pb-1.5 font-medium">Your Input</th>
                      <th scope="col" className="pb-1.5 text-right font-medium">Count</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {mistakesList.map((m) =>
                    <tr key={m.n}>
                        <td className="py-1.5 text-slate-400">{m.n}</td>
                        <td className="py-1.5 font-medium text-navy-800">{m.type}</td>
                        <td className="py-1.5 text-slate-500">{m.original}</td>
                        <td className="py-1.5 text-slate-500">{m.input}</td>
                        <td className="py-1.5 text-right font-semibold text-navy-800">{m.count}</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </Panel>

            <Panel title="Common Wrong Words">
              <ul className="space-y-1.5">
                {commonWrongWords.map((w) =>
                <li key={w.word} className="flex items-center justify-between rounded-md bg-rose-50 px-2.5 py-1.5 text-[11.5px]">
                    <span className="font-medium text-rose-700">{w.word}</span>
                    <span className="text-rose-500">{w.count}</span>
                  </li>
                )}
              </ul>
              <p className="mt-2.5 rounded-md bg-slate-50 p-2 text-[10.5px] text-slate-500">
                These are the words where you made mistakes most frequently. Practice them to improve
                accuracy.
              </p>
            </Panel>

            <Panel title="Mistake Trend">
              <div className="mb-1.5 flex items-center gap-3 text-[10.5px] text-slate-600">
                <span className="flex items-center gap-1.5">
                  <span className="h-[3px] w-4 rounded-full bg-danger" /> Mistakes
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="h-[3px] w-4 rounded-full bg-primary" /> Accuracy (%)
                </span>
              </div>
              <TrendChart />
              <ul className="mt-1 flex justify-between text-[10px] text-slate-400">
                {perfBars.map((b) => <li key={b.minute}>{b.minute}</li>)}
              </ul>
            </Panel>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-amber-200 bg-amber-50 p-4">
            <p className="flex items-center gap-2 text-[12.5px] font-medium text-amber-800">
              <TrophyIcon className="h-4 w-4 shrink-0" aria-hidden="true" />
              Your typing performance is excellent with 96.58% accuracy and 58 WPM speed. With focused
              practice on punctuation and spelling, you can reach 70+ WPM while maintaining your
              accuracy.
            </p>
            <p className="font-display text-[13px] italic text-amber-700">Keep Typing... Keep Growing! →</p>
          </div>
        </div>

        <div className="space-y-4">
          <Panel>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-violet-600 text-white">
                  <SparklesIcon className="h-4 w-4" aria-hidden="true" />
                </span>
                <span className="font-display text-[13.5px] font-semibold text-navy-800">AI Coach</span>
              </div>
              <span className="rounded bg-success px-1.5 py-[1px] text-[9px] font-bold text-white">NEW</span>
            </div>
            <p className="mt-2 text-[11px] font-semibold text-navy-800">AI Coach - Detailed Insights</p>

            <p className="mt-3 flex items-center gap-1.5 text-[11.5px] font-semibold text-navy-800">
              <CheckCircle2Icon className="h-3.5 w-3.5 text-success" aria-hidden="true" /> Key Takeaways
            </p>
            <ul className="mt-1.5 space-y-1.5">
              {takeaways.map((t) =>
              <li key={t} className="flex items-start gap-1.5 text-[11px] text-slate-600">
                  <CheckCircle2Icon className="mt-0.5 h-3 w-3 shrink-0 text-success" aria-hidden="true" />
                  {t}
                </li>
              )}
            </ul>

            <p className="mt-3.5 flex items-center gap-1.5 text-[11.5px] font-semibold text-navy-800">
              <RocketIcon className="h-3.5 w-3.5 text-primary" aria-hidden="true" /> Personalized Suggestions
            </p>
            <ul className="mt-1.5 space-y-1.5">
              {suggestions.map((s, i) =>
              <li key={s} className="flex items-start gap-1.5 text-[11px] text-slate-600">
                  <span className="grid h-4 w-4 shrink-0 place-items-center rounded-full bg-primary-50 text-[9px] font-bold text-primary-700">
                    {i + 1}
                  </span>
                  {s}
                </li>
              )}
            </ul>

            <div className="mt-3.5 rounded-lg bg-slate-50 p-3">
              <p className="mb-1.5 flex items-center justify-between text-[11px] font-semibold text-navy-800">
                Your Next Goal
                <span className="text-slate-500">70+ WPM with 96%+ Accuracy</span>
              </p>
              <span className="block h-1.5 overflow-hidden rounded-full bg-slate-200">
                <span className="block h-full rounded-full bg-primary" style={{ width: '83%' }} />
              </span>
              <div className="mt-1 flex justify-between text-[10px] text-slate-500">
                <span>58 WPM</span>
                <span>70+ WPM</span>
              </div>
            </div>

            <p className="mt-3.5 rounded-lg bg-violet-50 p-3 text-center text-[11px] italic text-violet-700">
              "You're doing great, Vikas! Keep practicing and you'll reach your goal soon."
            </p>
          </Panel>

          <Link
            to="/result/typing/ai-analysis"
            className="flex items-center justify-center gap-2 rounded-md border border-slate-300 bg-white py-2.5 text-[12.5px] font-semibold text-navy-800 shadow-card transition-colors duration-150 hover:bg-slate-50">

            ← Back to AI Deep Analysis
          </Link>
        </div>
      </div>
    </AdminLayout>);

}
