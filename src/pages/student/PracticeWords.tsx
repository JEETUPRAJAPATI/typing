import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { KeyboardIcon, ArrowLeftIcon, CheckCircle2Icon, RotateCcwIcon, TargetIcon } from 'lucide-react';
import { AdminLayout } from '../../components/admin/AdminLayout';
import { Panel } from '../../components/common/Pill';

const REPS_TARGET = 20;

const practiceWords = ['Interim', 'Budget', 'Recovery', 'Infrastructure', 'Education', 'Healthcare', 'Sincerely'];

export function PracticeWords() {
  const [wordIndex, setWordIndex] = useState(0);
  const [reps, setReps] = useState<number[]>(() => practiceWords.map(() => 0));
  const [input, setInput] = useState('');
  const [status, setStatus] = useState<'idle' | 'correct' | 'wrong'>('idle');

  const currentWord = practiceWords[wordIndex];
  const currentReps = reps[wordIndex];
  const allDone = reps.every((r) => r >= REPS_TARGET);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    if (input.trim().toLowerCase() === currentWord.toLowerCase()) {
      setStatus('correct');
      setReps((prev) => {
        const next = [...prev];
        next[wordIndex] = Math.min(next[wordIndex] + 1, REPS_TARGET);
        return next;
      });
      setInput('');
      setTimeout(() => setStatus('idle'), 400);
    } else {
      setStatus('wrong');
    }
  };

  const goToWord = (i: number) => {
    setWordIndex(i);
    setInput('');
    setStatus('idle');
  };

  const nextWord = () => {
    const next = practiceWords.findIndex((_, i) => i > wordIndex && reps[i] < REPS_TARGET);
    if (next !== -1) goToWord(next);
    else {
      const anyLeft = practiceWords.findIndex((_, i) => reps[i] < REPS_TARGET);
      if (anyLeft !== -1) goToWord(anyLeft);
    }
  };

  return (
    <AdminLayout searchPlaceholder="Search test name, exam name..." showActionButtons={false}>
      <div className="mb-5 flex flex-wrap items-start justify-between gap-4">
        <div className="flex items-start gap-3">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary-50 text-primary">
            <KeyboardIcon className="h-5 w-5" aria-hidden="true" />
          </span>
          <div>
            <h2 className="font-display text-[22px] font-bold leading-tight text-navy-800">
              Practice Your Mistake Words
            </h2>
            <p className="text-[12.5px] text-slate-500">
              Type each word correctly {REPS_TARGET} times to build muscle memory.
            </p>
          </div>
        </div>
        <Link
          to="/result/typing/ai-analysis"
          className="flex items-center gap-1.5 rounded-md border border-slate-300 bg-white px-3 py-2 text-[12px] font-medium text-navy-800 transition-colors duration-150 hover:bg-slate-50">

          <ArrowLeftIcon className="h-3.5 w-3.5" aria-hidden="true" /> Back to AI Deep Analysis
        </Link>
      </div>
      <Panel title="Words to Practice">
        <ul className="grid grid-cols-2 gap-2.5 sm:grid-cols-4 xl:grid-cols-7">
          {practiceWords.map((w, i) => {
            const done = reps[i] >= REPS_TARGET;
            const active = i === wordIndex;
            return (
              <li key={w}>
                <button
                  type="button"
                  onClick={() => goToWord(i)}
                  aria-pressed={active}
                  className={`w-full rounded-lg border p-2.5 text-left transition-colors duration-150 ${
                  active ?
                  'border-primary bg-primary-50' :
                  done ?
                  'border-emerald-200 bg-emerald-50' :
                  'border-slate-200 hover:border-primary'}`
                  }>

                  <span className="flex items-center gap-1.5">
                    {done && <CheckCircle2Icon className="h-3.5 w-3.5 shrink-0 text-success" aria-hidden="true" />}
                    <span className="truncate font-display text-[12.5px] font-semibold text-navy-800">
                      {w}
                    </span>
                  </span>
                  <span className="mt-1 block h-1.5 overflow-hidden rounded-full bg-slate-200">
                    <span
                      className={`block h-full rounded-full ${done ? 'bg-success' : 'bg-primary'}`}
                      style={{ width: `${reps[i] / REPS_TARGET * 100}%` }} />

                  </span>
                  <span className="mt-0.5 block text-[10px] text-slate-500">{reps[i]} / {REPS_TARGET}</span>
                </button>
              </li>);

          })}
        </ul>
      </Panel>

      <div className="mt-5">
        {allDone ?
        <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-8 text-center">
            <CheckCircle2Icon className="mx-auto h-10 w-10 text-success" aria-hidden="true" />
            <h3 className="mt-2 font-display text-[18px] font-bold text-navy-800">
              Great job! You've completed all practice words.
            </h3>
            <p className="mt-1 text-[12.5px] text-slate-600">
              You typed every word correctly {REPS_TARGET} times. Keep this consistency in your next
              test.
            </p>
            <Link
            to="/result/typing/ai-analysis"
            className="mt-4 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-[12.5px] font-semibold text-white transition-colors duration-150 hover:bg-primary-700">

              <ArrowLeftIcon className="h-4 w-4" aria-hidden="true" /> Back to AI Deep Analysis
            </Link>
          </div> :

        <Panel>
            <div className="mx-auto max-w-md text-center">
              <p className="flex items-center justify-center gap-1.5 text-[11.5px] font-medium text-slate-500">
                <TargetIcon className="h-3.5 w-3.5" aria-hidden="true" /> Attempt {currentReps} / {REPS_TARGET}
              </p>
              <p className="mt-2 font-display text-[38px] font-extrabold tracking-wide text-navy-800">
                {currentWord}
              </p>

              <form onSubmit={handleSubmit} className="mt-4">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => {
                    setInput(e.target.value);
                    if (status === 'wrong') setStatus('idle');
                  }}
                  autoFocus
                  placeholder="Type the word above..."
                  aria-label="Type the word above"
                  className={`w-full rounded-lg border-2 px-4 py-3 text-center text-[16px] outline-none transition-colors duration-150 ${
                  status === 'wrong' ?
                  'border-danger bg-rose-50' :
                  status === 'correct' ?
                  'border-success bg-emerald-50' :
                  'border-slate-300 focus:border-primary'}`
                  } />

                {status === 'wrong' &&
                <p className="mt-1.5 text-[11.5px] font-medium text-danger">
                    Not quite right, try again.
                  </p>
                }
                <button
                  type="submit"
                  className="mt-3 flex w-full items-center justify-center gap-2 rounded-md bg-primary py-2.5 text-[12.5px] font-semibold text-white transition-colors duration-150 hover:bg-primary-700">

                  Check &amp; Continue
                </button>
              </form>

              <div className="mt-3 flex justify-center gap-2">
                <button
                  type="button"
                  onClick={() => setReps((prev) => {
                    const next = [...prev];
                    next[wordIndex] = 0;
                    return next;
                  })}
                  className="flex items-center gap-1.5 rounded-md border border-slate-300 px-3 py-1.5 text-[11px] font-medium text-slate-600 transition-colors duration-150 hover:bg-slate-50">

                  <RotateCcwIcon className="h-3.5 w-3.5" aria-hidden="true" /> Reset This Word
                </button>
                <button
                  type="button"
                  onClick={nextWord}
                  className="rounded-md border border-slate-300 px-3 py-1.5 text-[11px] font-medium text-slate-600 transition-colors duration-150 hover:bg-slate-50">

                  Skip to Next Word →
                </button>
              </div>
            </div>
          </Panel>
        }
      </div>
    </AdminLayout>);

}
