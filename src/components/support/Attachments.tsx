import React, { useState } from 'react';
import { PaperclipIcon, XIcon, FileImageIcon, FileVideoIcon } from 'lucide-react';
import { Attachment } from '../../data/supportStore';

const LIMITS = { image: 2 * 1024 * 1024, video: 4 * 1024 * 1024 };

export function AttachmentPicker({ value, onChange }: {value: Attachment[];onChange: (next: Attachment[]) => void;}) {
  const [error, setError] = useState('');

  const addFiles = (files: FileList | null) => {
    if (!files) return;
    setError('');
    Array.from(files).forEach((file) => {
      const isImage = file.type.startsWith('image/');
      const isVideo = file.type.startsWith('video/');
      if (!isImage && !isVideo) {
        setError(`${file.name}: only images and videos are allowed.`);
        return;
      }
      const kind = isImage ? 'image' : 'video';
      if (file.size > LIMITS[kind]) {
        setError(`${file.name} is too large (max ${kind === 'image' ? '2' : '4'} MB).`);
        return;
      }
      const reader = new FileReader();
      reader.onload = () =>
      onChange([...value, { name: file.name, kind, dataUrl: String(reader.result) }]);
      reader.readAsDataURL(file);
    });
  };

  return (
    <div>
      <label className="flex cursor-pointer items-center gap-2 rounded-md border border-dashed border-slate-300 px-3 py-2.5 text-[12px] text-slate-600 transition-colors duration-150 hover:border-primary hover:bg-primary-50/40">
        <PaperclipIcon className="h-3.5 w-3.5" aria-hidden="true" /> Attach images or videos (optional)
        <input
          type="file"
          accept="image/*,video/*"
          multiple
          className="sr-only"
          onChange={(e) => {
            addFiles(e.target.files);
            e.target.value = '';
          }} />

      </label>
      {error && <p className="mt-1.5 text-[11.5px] text-rose-600">{error}</p>}
      {value.length > 0 &&
      <ul className="mt-2.5 grid gap-2 sm:grid-cols-3">
          {value.map((a, i) =>
        <li key={`${a.name}-${i}`} className="relative overflow-hidden rounded-md border border-slate-200 bg-white">
              {a.kind === 'image' ?
            <img src={a.dataUrl} alt={a.name} className="h-24 w-full object-cover" /> :

            <video src={a.dataUrl} controls className="h-24 w-full bg-black object-cover" />
            }
              <p className="flex items-center gap-1 truncate px-2 py-1 text-[10.5px] text-slate-600">
                {a.kind === 'image' ?
              <FileImageIcon className="h-3 w-3 shrink-0" aria-hidden="true" /> :

              <FileVideoIcon className="h-3 w-3 shrink-0" aria-hidden="true" />
              }
                <span className="truncate">{a.name}</span>
              </p>
              <button
              type="button"
              onClick={() => onChange(value.filter((_, j) => j !== i))}
              aria-label={`Remove ${a.name}`}
              className="absolute right-1.5 top-1.5 grid h-6 w-6 place-items-center rounded-full bg-navy-900/70 text-white transition-colors duration-150 hover:bg-navy-900">

                <XIcon className="h-3 w-3" aria-hidden="true" />
              </button>
            </li>
        )}
        </ul>
      }
    </div>);

}

export function AttachmentList({ items }: {items: Attachment[];}) {
  if (!items || items.length === 0) return null;
  return (
    <ul className="mt-2 grid gap-2 sm:grid-cols-2">
      {items.map((a, i) =>
      <li key={`${a.name}-${i}`} className="overflow-hidden rounded-md border border-slate-200 bg-white">
          {a.kind === 'image' ?
        <img src={a.dataUrl} alt={a.name} className="max-h-48 w-full object-contain bg-slate-50" /> :

        <video src={a.dataUrl} controls className="max-h-48 w-full bg-black" />
        }
          <p className="truncate px-2 py-1 text-[10.5px] text-slate-500">{a.name}</p>
        </li>
      )}
    </ul>);

}
