import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon, InfoIcon, StarIcon, CheckIcon } from 'lucide-react';
import { wordLengthOptions } from '../../data/steno';

interface WordLengthSelectProps {
  value: string;
  onChange: (label: string) => void;
  totalWords: number;
}

export function WordLengthSelect({ value, onChange, totalWords }: WordLengthSelectProps) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <p className="mb-1.5 flex items-center gap-1.5 text-[13px] font-semibold text-navy-800">
        Select the word length
        <span
          className="grid h-4 w-4 place-items-center rounded-full bg-danger text-white"
          aria-hidden="true">
          
          <InfoIcon className="h-2.5 w-2.5" />
        </span>
      </p>

      <div className="relative">
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          className={`flex w-full items-center rounded-md border px-3 py-2.5 text-left text-[13px] transition-colors duration-150 ${
          open ? 'border-primary ring-2 ring-primary/20' : 'border-slate-300 hover:bg-slate-50'}`
          }>
          
          <span className="text-navy-800">{value}</span>
          {open ?
          <ChevronUpIcon className="ml-auto h-4 w-4 text-slate-500" aria-hidden="true" /> :

          <ChevronDownIcon className="ml-auto h-4 w-4 text-slate-500" aria-hidden="true" />
          }
        </button>

        {open &&
        <div className="scroll-thin absolute left-0 right-0 top-[calc(100%+4px)] z-20 max-h-[300px] overflow-y-auto rounded-md border border-slate-200 bg-white py-1 shadow-panel">
            {wordLengthOptions.map((opt) => {
            const selected = opt.label === value;
            if (opt.id === 'pick') {
              return (
                <div
                  key={opt.id}
                  className="mx-2 my-1 rounded-md border border-violet-200 bg-violet-50 px-3 py-2">
                  
                    <button
                    type="button"
                    onClick={() => {
                      onChange(opt.label);
                      setOpen(false);
                    }}
                    className="flex w-full items-start gap-2 text-left">
                    
                      <span className="min-w-0">
                        <span className="flex items-center gap-2">
                          <span className="text-[13px] font-semibold text-violet-700">
                            {opt.label}
                          </span>
                          <span className="inline-flex items-center gap-1 rounded-full bg-violet-600 px-2 py-[1px] text-[9.5px] font-bold text-white">
                            <StarIcon className="h-2.5 w-2.5 fill-current" aria-hidden="true" /> BEST
                          </span>
                        </span>
                        <span className="mt-0.5 block text-[11px] text-slate-500">{opt.help}</span>
                      </span>
                      <InfoIcon
                      className="ml-auto mt-0.5 h-4 w-4 shrink-0 text-slate-400"
                      aria-hidden="true" />
                    
                    </button>
                  </div>);

            }

            if (opt.input) {
              return (
                <div
                  key={opt.id}
                  className="flex items-center gap-2 px-3 py-2 hover:bg-slate-50">
                  
                    <span className="w-[120px] shrink-0 text-[12.5px] font-medium text-navy-800">
                      {opt.label}
                    </span>
                    {opt.input === 'single' ?
                  <input
                    type="number"
                    placeholder="e.g., 150"
                    aria-label="Number of words"
                    className="w-[90px] rounded border border-slate-300 px-2 py-1 text-[12px] outline-none focus:border-primary" /> :


                  <>
                        <input
                      type="number"
                      placeholder="From"
                      aria-label="Word number from"
                      className="w-[78px] rounded border border-slate-300 px-2 py-1 text-[12px] outline-none focus:border-primary" />
                    
                        <input
                      type="number"
                      placeholder="To"
                      aria-label="Word number to"
                      className="w-[78px] rounded border border-slate-300 px-2 py-1 text-[12px] outline-none focus:border-primary" />
                    
                      </>
                  }
                    <button
                    type="button"
                    className="rounded bg-primary px-3 py-1 text-[11.5px] font-semibold text-white transition-colors duration-150 hover:bg-primary-700">
                    
                      Set
                    </button>
                    <InfoIcon className="ml-auto h-4 w-4 shrink-0 text-slate-400" aria-hidden="true" />
                  </div>);

            }

            return (
              <button
                key={opt.id}
                type="button"
                onClick={() => {
                  onChange(opt.label);
                  setOpen(false);
                }}
                className="flex w-full items-center gap-2 px-3 py-2 text-left text-[12.5px] transition-colors duration-150 hover:bg-slate-50">
                
                  {selected && <CheckIcon className="h-3.5 w-3.5 text-primary" aria-hidden="true" />}
                  <span className={selected ? 'font-medium text-primary' : 'text-navy-800'}>
                    {opt.label}
                  </span>
                  <InfoIcon className="ml-auto h-4 w-4 shrink-0 text-slate-400" aria-hidden="true" />
                </button>);

          })}
          </div>
        }
      </div>

      <p className="mt-1.5 text-[11.5px] text-slate-500">
        Total words available: <span className="font-semibold">{totalWords}</span>
        {value.startsWith('First') &&
        <>
            {' '}
            · Selected: <span className="font-semibold">{value.replace('First ', 'first ')}</span>
          </>
        }
      </p>
    </div>);

}