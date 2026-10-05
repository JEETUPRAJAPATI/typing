import React, { useState } from 'react';
import { XIcon } from 'lucide-react';

interface PickWordRangeModalProps {
  words: string[];
  wpm: number;
  onClose: () => void;
  onApply: (start: number, end: number) => void;
}

export function PickWordRangeModal({ words, wpm, onClose, onApply }: PickWordRangeModalProps) {
  const [start, setStart] = useState<number | null>(null);
  const [end, setEnd] = useState<number | null>(null);

  const tap = (i: number) => {
    if (start === null || end !== null) {
      setStart(i);
      setEnd(null);
      return;
    }
    if (i < start) {
      setEnd(start);
      setStart(i);
    } else {
      setEnd(i);
    }
  };

  const clear = () => {
    setStart(null);
    setEnd(null);
  };

  const hasRange = start !== null && end !== null;
  const count = hasRange ? end - start + 1 : 0;
  const seconds = Math.round((count / wpm) * 60);
  const mm = Math.floor(seconds / 60);
  const ss = String(seconds % 60).padStart(2, '0');

  const inRange = (i: number) => {
    if (start === null) return false;
    if (end === null) return i === start;
    return i >= start && i <= end;
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-navy-900/50 p-4">
      <div className="flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-xl bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b border-slate-200 px-5 py-3.5">
          <p className="flex items-center gap-2 text-[13.5px] font-bold text-navy-800">
            <span className="text-primary">I</span>
            {start === null || hasRange ? 'Tap your START word, then your END word' : 'Now tap your END word'}
          </p>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="grid h-8 w-8 place-items-center rounded-full text-slate-400 transition-colors duration-150 hover:bg-slate-100 hover:text-slate-600">

            <XIcon className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-5">
          <p className="text-[16px] leading-[2.2] text-navy-800">
            {words.map((w, i) => {
              const selected = i === start || i === end;
              const between = inRange(i) && !selected;
              return (
                <React.Fragment key={i}>
                  <button
                    type="button"
                    onClick={() => tap(i)}
                    aria-pressed={selected}
                    className={`mx-[1px] rounded px-1 transition-colors duration-100 ${
                    selected ? 'bg-primary text-white' :
                    between ? 'bg-sky-100 text-navy-800' :
                    'hover:bg-slate-100'}`
                    }>

                    {w}
                  </button>{' '}
                </React.Fragment>);

            })}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 border-t border-slate-200 px-5 py-3.5">
          <span className="text-[12px] text-slate-600">
            {hasRange ?
            <>
                Words <span className="font-semibold text-navy-800">{start! + 1}–{end! + 1}</span> · {count} words ·
                about {mm}:{ss} of audio
              </> :
            start !== null ?
            <>Start word: <span className="font-semibold text-navy-800">{start + 1}</span> — now tap the end word</> :

            'No words selected yet'
            }
          </span>
          <div className="ml-auto flex gap-2">
            <button
              type="button"
              onClick={clear}
              className="rounded-md border border-slate-300 px-4 py-2 text-[12px] font-semibold text-slate-600 transition-colors duration-150 hover:bg-slate-50">

              Clear
            </button>
            <button
              type="button"
              disabled={!hasRange}
              onClick={() => hasRange && onApply(start!, end!)}
              className="rounded-md bg-primary px-5 py-2 text-[12px] font-semibold text-white transition-colors duration-150 hover:bg-primary-700 disabled:cursor-not-allowed disabled:bg-slate-300">

              Use this part
            </button>
          </div>
        </div>
      </div>
    </div>);

}
