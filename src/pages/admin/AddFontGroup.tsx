import React, { useState } from 'react';
import { UploadIcon, InfoIcon, XIcon, SaveIcon, PlusIcon, CheckIcon } from 'lucide-react';
import { AdminLayout } from '../../components/admin/AdminLayout';
import { Breadcrumbs } from '../../components/common/PageHeading';

const card = 'rounded-xl border border-slate-200 bg-white p-4 shadow-card';
const labelCls = 'mb-1.5 block text-[11.5px] font-semibold text-navy-800';
const inputCls =
'w-full rounded-md border border-slate-300 px-3 py-2 text-[12px] outline-none focus:border-primary';

const fontTypeNotes = [
{ label: 'Regular', desc: 'Standard characters (A-Z, a-z, 0-9, symbols)' },
{ label: 'Inscript', desc: 'Official Indian script fonts used in government exams' },
{ label: 'Remington Gail', desc: 'Stenography specific fonts' },
{ label: 'Unicode', desc: 'Universal character set fonts' }];


const installedFonts = [
{ name: 'Calibri', lang: 'EN' },
{ name: 'Arial', lang: 'EN' },
{ name: 'Times New Roman', lang: 'EN' },
{ name: 'Mangal', lang: 'HI' },
{ name: 'Kruti Dev 010', lang: 'HI' },
{ name: 'Nirmala UI', lang: 'HI' },
{ name: 'Cambria', lang: 'EN' },
{ name: 'Verdana', lang: 'EN' }];


const keyboards = [
{ id: 'inscript', label: 'Inscript Keyboard (Unicode)', desc: 'Standard Inscript layout for Indian languages', recommended: true },
{ id: 'phonetic', label: 'Phonetic Keyboard (Unicode)', desc: 'Type using phonetic keys (e.g., a = अ, aa = आ).' },
{ id: 'remington', label: 'Remington Keyboard (Unicode)', desc: 'Stenography layout for Remington system.' },
{ id: 'custom', label: 'Custom Keyboard Mapping', desc: 'Use custom key mapping (if any).' }];


const keyboardPreview = [
['क', 'ख', 'ग', 'घ', 'ड', 'च', 'छ', 'ज', 'झ', 'ञ'],
['क', 'ख', 'ग', 'घ', 'ड', 'च', 'छ', 'ज', 'ञ', 'ञ']];


export function AddFontGroup() {
  const [language, setLanguage] = useState<'English' | 'Hindi'>('English');
  const [keyboard, setKeyboard] = useState('inscript');
  const [selected, setSelected] = useState<string[]>([]);

  const toggleFont = (name: string) =>
  setSelected((prev) => prev.includes(name) ? prev.filter((f) => f !== name) : [...prev, name]);

  return (
    <AdminLayout searchPlaceholder="Search by font group name, code, description...">
      <div className="mb-4 flex flex-wrap items-start gap-4">
        <div>
          <h2 className="font-display text-[26px] font-bold leading-tight text-navy-800">
            Add New Font Group
          </h2>
          <p className="text-[12.5px] text-slate-500">
            Create a new font group and configure font settings for tests.
          </p>
        </div>
        <div className="ml-auto">
          <Breadcrumbs
            crumbs={[{ label: 'Font Group', to: '/admin/font-groups' }, { label: 'Add New Font Group' }]} />
          
        </div>
      </div>

      <form className="space-y-4">
        <div className="grid gap-4 xl:grid-cols-3">
          <section className={card}>
            <h3 className="mb-3 text-[12.5px] font-bold text-navy-800">1. Font Group Details</h3>
            <label className="block">
              <span className={labelCls}>Font Group Name <span className="text-danger">*</span></span>
              <input type="text" placeholder="Enter font group name" className={inputCls} />
              <span className="mt-1 block text-[11px] text-slate-500">Example: English Basic Fonts</span>
            </label>
            <label className="mt-3 block">
              <span className={labelCls}>Description (Optional)</span>
              <textarea
                rows={4}
                placeholder="Enter description (optional)"
                className={`${inputCls} resize-none`} />
              
              <span className="mt-1 block text-[11px] text-slate-500">
                Give a short description about this font group.
              </span>
            </label>
          </section>

          <section className={card}>
            <h3 className="mb-3 text-[12.5px] font-bold text-navy-800">2. Font Type (Script / Encoding)</h3>
            <label className="block">
              <span className={labelCls}>Font Type <span className="text-danger">*</span></span>
              <select className={`${inputCls} text-slate-600`}>
                <option>Select font type</option>
                <option>Regular</option>
                <option>Inscript</option>
                <option>Remington Gail</option>
                <option>Unicode</option>
              </select>
              <span className="mt-1 block text-[11px] text-slate-500">
                Select the script/encoding type used in this font group.
              </span>
            </label>
            <div className="mt-3 rounded-md border border-primary-100 bg-primary-50 p-3">
              <p className="mb-1.5 flex items-center gap-1.5 text-[11.5px] font-semibold text-primary-700">
                <InfoIcon className="h-3.5 w-3.5" aria-hidden="true" /> About Font Types
              </p>
              <ul className="space-y-1">
                {fontTypeNotes.map((n) =>
                <li key={n.label} className="text-[11px] text-primary-700">
                    <span className="font-semibold">• {n.label}</span> : {n.desc}
                  </li>
                )}
              </ul>
            </div>
          </section>

          <section className={card}>
            <h3 className="mb-3 text-[12.5px] font-bold text-navy-800">3. Language</h3>
            <fieldset>
              <legend className={labelCls}>Language <span className="text-danger">*</span></legend>
              <div className="flex gap-6">
                {(['English', 'Hindi'] as const).map((l) =>
                <label key={l} className="flex items-center gap-2 text-[12.5px] text-slate-600">
                    <input
                    type="radio"
                    name="fontLanguage"
                    checked={language === l}
                    onChange={() => setLanguage(l)}
                    className="h-3.5 w-3.5 accent-primary" />
                  
                    {l}
                  </label>
                )}
              </div>
            </fieldset>
            <p className="mt-2 text-[11px] text-slate-500">
              Select the primary language of this font group.
            </p>
          </section>
        </div>

        <div className="grid gap-4 xl:grid-cols-2">
          <section className={card}>
            <h3 className="mb-3 text-[12.5px] font-bold text-navy-800">4. Installed Font Family</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <p className={labelCls}>Select Installed Fonts <span className="text-danger">*</span></p>
                <div className="scroll-thin max-h-[220px] overflow-y-auto rounded-md border border-slate-300">
                  <label className="flex items-center gap-2 border-b border-slate-100 px-3 py-2 text-[11.5px] text-navy-800">
                    <input
                      type="checkbox"
                      checked={selected.length === installedFonts.length}
                      onChange={() =>
                      setSelected(
                        selected.length === installedFonts.length ?
                        [] :
                        installedFonts.map((f) => f.name)
                      )
                      }
                      className="h-3.5 w-3.5 accent-primary" />
                    
                    Select All
                  </label>
                  {installedFonts.map((f) =>
                  <label
                    key={f.name}
                    className="flex items-center gap-2 border-b border-slate-50 px-3 py-2 text-[11.5px] text-navy-800 last:border-b-0">
                    
                      <input
                      type="checkbox"
                      checked={selected.includes(f.name)}
                      onChange={() => toggleFont(f.name)}
                      className="h-3.5 w-3.5 accent-primary" />
                    
                      {f.name}
                      <span
                      className={`ml-auto rounded px-1.5 py-[1px] text-[9.5px] font-semibold ${
                      f.lang === 'EN' ?
                      'bg-primary-50 text-primary-700' :
                      'bg-violet-50 text-violet-700'}`
                      }>
                      
                        {f.lang}
                      </span>
                    </label>
                  )}
                </div>
              </div>

              <div>
                <p className={labelCls}>Upload Additional Font (If Any)</p>
                <button
                  type="button"
                  className="flex w-full flex-col items-center justify-center gap-1.5 rounded-md border-2 border-dashed border-slate-300 py-6 transition-colors duration-150 hover:border-primary hover:bg-primary-50/40">
                  
                  <UploadIcon className="h-6 w-6 text-primary" aria-hidden="true" />
                  <span className="text-[11.5px] text-slate-600">Drag &amp; drop font file here</span>
                  <span className="text-[10.5px] text-slate-400">or</span>
                  <span className="flex items-center gap-1.5 rounded-md border border-primary px-3 py-1.5 text-[11.5px] font-medium text-primary">
                    <PlusIcon className="h-3.5 w-3.5" aria-hidden="true" /> Choose File
                  </span>
                  <span className="text-[10.5px] text-slate-400">Supported formats: .ttf, .otf</span>
                </button>
                <p className="mt-2 text-[11px] text-slate-500">
                  Upload custom font file if not listed above.
                </p>
                <p className="mt-2 rounded-md border border-emerald-200 bg-emerald-50 px-2.5 py-2 text-[11px] text-emerald-700">
                  <span className="font-semibold">Note</span> — Uploaded fonts will be available only
                  on this system.
                </p>
              </div>
            </div>
          </section>

          <section className={card}>
            <h3 className="mb-3 text-[12.5px] font-bold text-navy-800">
              5. Installed Keyboard (For Unicode Font)
            </h3>
            <p className={labelCls}>Select Installed Keyboard Layout <span className="text-danger">*</span></p>
            <ul className="space-y-2">
              {keyboards.map((k) =>
              <li key={k.id}>
                  <label className="flex items-start gap-2">
                    <input
                    type="radio"
                    name="keyboardLayout"
                    checked={keyboard === k.id}
                    onChange={() => setKeyboard(k.id)}
                    className="mt-[3px] h-3.5 w-3.5 accent-primary" />
                  
                    <span>
                      <span className="flex items-center gap-2 text-[12px] font-medium text-navy-800">
                        {k.label}
                        {k.recommended &&
                      <span className="rounded bg-emerald-50 px-1.5 py-[1px] text-[9.5px] font-semibold text-emerald-700">
                            Recommended
                          </span>
                      }
                      </span>
                      <span className="block text-[10.5px] text-slate-500">{k.desc}</span>
                    </span>
                  </label>
                </li>
              )}
            </ul>

            <p className="mb-1.5 mt-3 text-[11.5px] font-semibold text-navy-800">Keyboard Preview</p>
            <div className="space-y-1.5 rounded-md border border-slate-200 p-2.5">
              {keyboardPreview.map((row, i) =>
              <ul key={i} className="flex gap-1.5">
                  {row.map((key, j) =>
                <li
                  key={`${i}-${j}`}
                  className="grid h-7 flex-1 place-items-center rounded border border-slate-200 bg-slate-50 text-[12px] text-navy-800">
                  
                      {key}
                    </li>
                )}
                </ul>
              )}
            </div>
            <p className="mt-1.5 text-[10.5px] text-slate-500">
              Note: This is a preview of Inscript Keyboard (Unicode) layout.
            </p>
          </section>
        </div>

        <section className={card}>
          <h3 className="mb-3 text-[12.5px] font-bold text-navy-800">6. Additional Settings (Optional)</h3>
          <div className="grid gap-3.5 lg:grid-cols-[150px_150px_180px_1fr]">
            <label className="block">
              <span className={labelCls}>Default Font Size</span>
              <select className={`${inputCls} text-slate-600`}>
                <option>16px</option>
                <option>18px</option>
                <option>20px</option>
              </select>
            </label>
            <label className="block">
              <span className={labelCls}>Line Spacing</span>
              <select className={`${inputCls} text-slate-600`}>
                <option>1.5</option>
                <option>1.75</option>
                <option>2</option>
              </select>
            </label>
            <label className="block">
              <span className={labelCls}>Default Font Weight</span>
              <select className={`${inputCls} text-slate-600`}>
                <option>Normal (400)</option>
                <option>Medium (500)</option>
                <option>Bold (700)</option>
              </select>
            </label>
            <label className="block">
              <span className={labelCls}>Preview Text</span>
              <input
                type="text"
                defaultValue="The quick brown fox jumps over the lazy dog. 1234567890"
                className={inputCls} />
              
              <span className="mt-1 block text-[11px] text-slate-500">
                This text will be used to preview the selected font.
              </span>
            </label>
          </div>
        </section>

        <div className="flex flex-wrap items-center justify-center gap-2.5">
          <button
            type="button"
            className="flex items-center gap-1.5 rounded-md border border-slate-300 bg-white px-5 py-2.5 text-[12.5px] font-medium text-slate-600 transition-colors duration-150 hover:bg-slate-50">
            
            <XIcon className="h-4 w-4" aria-hidden="true" /> Cancel
          </button>
          <button
            type="button"
            className="flex items-center gap-1.5 rounded-md bg-[#7C3AED] px-5 py-2.5 text-[12.5px] font-semibold text-white transition-colors duration-150 hover:bg-[#6D28D9]">
            
            <CheckIcon className="h-4 w-4" aria-hidden="true" /> Save &amp; Add Another
          </button>
          <button
            type="submit"
            className="flex items-center gap-1.5 rounded-md bg-primary px-5 py-2.5 text-[12.5px] font-semibold text-white transition-colors duration-150 hover:bg-primary-700">
            
            <SaveIcon className="h-4 w-4" aria-hidden="true" /> Save Font Group
          </button>
        </div>
      </form>
    </AdminLayout>);

}