import React from 'react';
import { CheckCircle2Icon, LayersIcon, MousePointerClickIcon, KeyboardIcon } from 'lucide-react';
import { transcriptionInterfaces } from '../../data/steno';

interface InterfacePickerProps {
  selected: string;
  onSelect: (id: string) => void;
}

export function InterfacePicker({ selected, onSelect }: InterfacePickerProps) {
  return (
    <div className="rounded-lg border border-slate-200 bg-slate-50/70 p-3">
      <p className="mb-3 flex items-center gap-2 rounded border border-primary-100 bg-primary-50 px-3 py-2 text-[11.5px] font-medium text-primary-700">
        <MousePointerClickIcon className="h-3.5 w-3.5" aria-hidden="true" />
        Pick the interface you want to practice in, then tap Transcribe Now again to start.
      </p>

      <p className="mb-2 flex items-center gap-1.5 text-[10.5px] font-semibold uppercase tracking-wide text-slate-500">
        <LayersIcon className="h-3.5 w-3.5" aria-hidden="true" /> Choose transcription interface
      </p>

      <ul className="grid gap-2.5 sm:grid-cols-2 xl:grid-cols-4">
        {transcriptionInterfaces.map((item) => {
          const active = item.id === selected;
          return (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => onSelect(item.id)}
                aria-pressed={active}
                className={`relative flex h-full w-full items-start gap-2.5 rounded-lg border bg-white p-2.5 text-left transition-colors duration-150 ${
                active ? 'border-primary ring-2 ring-primary/20' : 'border-slate-200 hover:border-primary'}`
                }>
                
                <span
                  className="grid h-8 w-8 shrink-0 place-items-center rounded text-white"
                  style={{ backgroundColor: item.bg }}>
                  
                  <KeyboardIcon className="h-4 w-4" aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block text-[12px] font-semibold leading-snug text-navy-800">
                    {item.name}
                  </span>
                  <span className="block text-[10.5px] leading-snug text-slate-500">{item.meta}</span>
                </span>
                {active &&
                <CheckCircle2Icon
                  className="absolute right-1.5 top-1.5 h-4 w-4 fill-primary text-white"
                  aria-hidden="true" />

                }
              </button>
            </li>);

        })}
      </ul>
    </div>);

}