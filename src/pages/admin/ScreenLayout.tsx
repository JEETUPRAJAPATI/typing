import React, { useState } from 'react';
import {
  MonitorIcon,
  MaximizeIcon,
  ArrowLeftRightIcon,
  Volume2Icon,
  SaveIcon,
  EyeIcon,
  RotateCcwIcon,
  InfoIcon,
  CheckCircle2Icon,
  UserIcon } from
'lucide-react';
import { AdminLayout } from '../../components/admin/AdminLayout';

const card = 'rounded-xl border border-slate-200 bg-white p-4 shadow-card';
const labelCls = 'mb-1.5 block text-[11.5px] font-semibold text-navy-800';
const inputCls =
'w-full rounded-md border border-slate-300 px-3 py-2 text-[12px] outline-none focus:border-primary';

const headerContent = ['Exam Name', 'Exam Title', 'Instruction', 'Logo', 'Show / Hide Text Option'];
const buttonSettings = ['Full Screen', 'Change Interface', 'Start Button', 'Submit Button', 'Keyboard Sound'];
const layoutPositions = ['Left Top', 'Center Top', 'Right Top', 'Left Bottom', 'Center Bottom', 'Right Bottom'];

const colors = [
{ label: 'Header BG', value: '#0A2E6B' },
{ label: 'Header Text', value: '#FFFFFF' },
{ label: 'Body BG', value: '#F5F7FA' },
{ label: 'Passage BG', value: '#FFFBE6' },
{ label: 'Typing BG', value: '#FFFFFF' },
{ label: 'Button BG', value: '#0D6EFD' },
{ label: 'Button Text', value: '#FFFFFF' },
{ label: 'Border Color', value: '#D9E1EC' },
{ label: 'Submit Button', value: '#198754' },
{ label: 'A- / A+ Button BG', value: '#F0F4FF' },
{ label: 'A- / A+ Button Text', value: '#0A2E6B' }];


export function ScreenLayout() {
  const [position, setPosition] = useState('Center Top');
  const [passageHeight, setPassageHeight] = useState(180);
  const [typingHeight, setTypingHeight] = useState(140);

  return (
    <AdminLayout
      searchPlaceholder="Search layouts..."
      showActionButtons={false}
      summary={[
      { label: 'Total Students', value: '1,575' },
      { label: 'Active Students', value: '1,142' },
      { label: 'Total Exams', value: '28' },
      { label: 'Tests Assigned', value: '542' }]
      }>
      
      <div className="mb-4 flex items-start gap-3">
        <MonitorIcon className="h-7 w-7 text-primary" aria-hidden="true" />
        <div>
          <h2 className="font-display text-[24px] font-bold uppercase leading-tight text-navy-800">
            Screen Layout Settings
          </h2>
          <p className="text-[12.5px] text-slate-500">
            Design and customize the exam screen layout for students
          </p>
        </div>
      </div>

      <div className="mb-4 grid gap-4 lg:grid-cols-3">
        {[
        { n: 1, title: 'Top Header Title', desc: 'Set the main title shown in the top header of exam screen.', value: 'Balaji Typing & Steno College' },
        { n: 2, title: 'Main Title', desc: 'Set the main title shown in the exam screen.', value: 'SSC Typing Examination' },
        { n: 3, title: 'Sub Title', desc: 'Set the sub title / description shown under main title.', value: 'Complete the passage as accurately and as fast as you can.' }].
        map((s) =>
        <section key={s.n} className={card}>
            <h3 className="text-[12.5px] font-bold text-navy-800">
              {s.n}. {s.title.toUpperCase()}
            </h3>
            <p className="mb-2 text-[11px] text-slate-500">{s.desc}</p>
            <input type="text" defaultValue={s.value} className={inputCls} />
          </section>
        )}
      </div>

      <div className="grid gap-4 xl:grid-cols-[230px_230px_1fr]">
        {/* Column 1 */}
        <div className="space-y-4">
          <section className={card}>
            <h3 className="mb-2.5 text-[12px] font-bold text-navy-800">HEADER CONTENT (Show / Hide)</h3>
            <ul className="space-y-1.5">
              {headerContent.map((h) =>
              <li key={h}>
                  <label className="flex items-center gap-2 text-[11.5px] text-navy-800">
                    <input type="checkbox" defaultChecked className="h-3.5 w-3.5 accent-primary" />
                    {h}
                  </label>
                </li>
              )}
            </ul>
          </section>

          <section className={card}>
            <h3 className="mb-1 text-[12px] font-bold text-navy-800">TOP HEADER &amp; PANELS POSITION</h3>
            <p className="mb-2 text-[11px] text-slate-500">
              Select position for header, panels and timer on screen.
            </p>
            <p className={labelCls}>Layout Position</p>
            <ul className="grid grid-cols-3 gap-2">
              {layoutPositions.map((p) => {
                const active = p === position;
                return (
                  <li key={p}>
                    <button
                      type="button"
                      onClick={() => setPosition(p)}
                      aria-pressed={active}
                      className={`relative w-full rounded-md border p-1.5 transition-colors duration-150 ${
                      active ? 'border-primary bg-primary-50' : 'border-slate-200 hover:border-primary'}`
                      }>
                      
                      <span className="block h-8 rounded bg-slate-100">
                        <span
                          className={`block h-2.5 w-8 rounded-sm bg-primary/60 ${
                          p.includes('Bottom') ? 'mt-[22px]' : 'mt-0'} ${

                          p.startsWith('Center') ?
                          'mx-auto' :
                          p.startsWith('Right') ?
                          'ml-auto' :
                          ''}`
                          } />
                        
                      </span>
                      <span className="mt-1 block text-[9.5px] text-slate-600">{p}</span>
                      {active &&
                      <CheckCircle2Icon
                        className="absolute right-1 top-1 h-3.5 w-3.5 fill-primary text-white"
                        aria-hidden="true" />

                      }
                    </button>
                  </li>);

              })}
            </ul>
          </section>

          <section className={card}>
            <h3 className="mb-2.5 text-[12px] font-bold text-navy-800">BUTTONS &amp; SOUNDS SETTINGS</h3>
            <div className="grid gap-3 sm:grid-cols-2">
              <div>
                <p className={labelCls}>Buttons (Show / Hide)</p>
                <ul className="space-y-1.5">
                  {buttonSettings.map((b) =>
                  <li key={b}>
                      <label className="flex items-center gap-2 text-[11px] text-navy-800">
                        <input type="checkbox" defaultChecked className="h-3.5 w-3.5 accent-primary" />
                        {b}
                      </label>
                    </li>
                  )}
                </ul>
              </div>
              <div className="space-y-2.5">
                <label className="block">
                  <span className={labelCls}>Button Position</span>
                  <select className="w-full rounded-md border border-slate-300 px-2 py-1.5 text-[11px] outline-none focus:border-primary">
                    <option>Right Top</option>
                    <option>Left Top</option>
                  </select>
                </label>
                <label className="block">
                  <span className={labelCls}>Button Style</span>
                  <select className="w-full rounded-md border border-slate-300 px-2 py-1.5 text-[11px] outline-none focus:border-primary">
                    <option>Modern</option>
                    <option>Classic</option>
                  </select>
                </label>
                <label className="block">
                  <span className={labelCls}>Keyboard Sound</span>
                  <select className="w-full rounded-md border border-slate-300 px-2 py-1.5 text-[11px] outline-none focus:border-primary">
                    <option>Click Sound 1</option>
                    <option>Click Sound 2</option>
                  </select>
                </label>
                <button
                  type="button"
                  className="flex w-full items-center justify-center gap-1.5 rounded-md border border-slate-300 py-1.5 text-[11px] font-medium text-slate-600 transition-colors duration-150 hover:bg-slate-50">
                  
                  <Volume2Icon className="h-3.5 w-3.5" aria-hidden="true" /> Preview
                </button>
              </div>
            </div>
          </section>
        </div>

        {/* Column 2 */}
        <div className="space-y-4">
          <section className={card}>
            <h3 className="mb-2.5 text-[12px] font-bold text-navy-800">PANELS &amp; TIMER SETTINGS</h3>
            <p className="mb-1.5 text-[11.5px] font-semibold text-navy-800">1. Candidate Panel</p>
            <ul className="mb-3 space-y-1.5">
              {['Candidate Photo', 'Name', 'Roll No.'].map((c) =>
              <li key={c}>
                  <label className="flex items-center gap-2 text-[11px] text-navy-800">
                    <input type="checkbox" defaultChecked className="h-3.5 w-3.5 accent-primary" />
                    {c}
                  </label>
                </li>
              )}
            </ul>

            <p className="mb-1.5 text-[11.5px] font-semibold text-navy-800">2. Timer</p>
            <label className="mb-2 flex items-center gap-2 text-[11px] text-navy-800">
              <input type="checkbox" defaultChecked className="h-3.5 w-3.5 accent-primary" /> Show Timer
            </label>
            <label className="mb-2 block">
              <span className={labelCls}>Timer Position</span>
              <select className="w-full rounded-md border border-slate-300 px-2 py-1.5 text-[11px] outline-none focus:border-primary">
                <option>Center Top</option>
                <option>Right Top</option>
              </select>
            </label>
            <label className="mb-3 block">
              <span className={labelCls}>Time Format</span>
              <select className="w-full rounded-md border border-slate-300 px-2 py-1.5 text-[11px] outline-none focus:border-primary">
                <option>MM:SS</option>
                <option>HH:MM:SS</option>
              </select>
            </label>

            <p className="mb-1.5 text-[11.5px] font-semibold text-navy-800">3. Setting Panel</p>
            <label className="mb-2 flex items-center gap-2 text-[11px] text-navy-800">
              <input type="checkbox" defaultChecked className="h-3.5 w-3.5 accent-primary" /> Show Setting Panel
            </label>
            <label className="mb-2 block">
              <span className={labelCls}>Font Size</span>
              <select className="w-full rounded-md border border-slate-300 px-2 py-1.5 text-[11px] outline-none focus:border-primary">
                <option>Medium</option>
                <option>Large</option>
              </select>
            </label>
            <label className="block">
              <span className={labelCls}>Backspace Option</span>
              <select className="w-full rounded-md border border-slate-300 px-2 py-1.5 text-[11px] outline-none focus:border-primary">
                <option>Current Word Backspace</option>
                <option>No Backspace</option>
              </select>
            </label>
          </section>

          <section className={card}>
            <h3 className="mb-2.5 text-[12px] font-bold text-navy-800">TYPING BOX SETTINGS</h3>
            <label className="mb-3 block">
              <span className={labelCls}>1. Passage Height</span>
              <span className="flex items-center gap-2">
                <input
                  type="range"
                  min={100}
                  max={320}
                  value={passageHeight}
                  onChange={(e) => setPassageHeight(Number(e.target.value))}
                  className="h-1.5 flex-1 cursor-pointer appearance-none rounded-full bg-slate-200 accent-primary" />
                
                <span className="w-[46px] rounded border border-slate-300 py-1 text-center text-[11px]">
                  {passageHeight}
                </span>
                <span className="text-[11px] text-slate-500">px</span>
              </span>
            </label>
            <label className="mb-3 block">
              <span className={labelCls}>2. Typing Box Height</span>
              <span className="flex items-center gap-2">
                <input
                  type="range"
                  min={100}
                  max={320}
                  value={typingHeight}
                  onChange={(e) => setTypingHeight(Number(e.target.value))}
                  className="h-1.5 flex-1 cursor-pointer appearance-none rounded-full bg-slate-200 accent-primary" />
                
                <span className="w-[46px] rounded border border-slate-300 py-1 text-center text-[11px]">
                  {typingHeight}
                </span>
                <span className="text-[11px] text-slate-500">px</span>
              </span>
            </label>
            <div className="space-y-2">
              <p className="grid place-items-center rounded border border-amber-200 bg-amber-50 text-[10.5px] font-medium text-[#B45309]" style={{ height: passageHeight / 3 }}>
                Passage Area ({passageHeight}px)
              </p>
              <p className="grid place-items-center rounded border border-primary-100 bg-primary-50 text-[10.5px] font-medium text-primary-700" style={{ height: typingHeight / 3 }}>
                Typing Area ({typingHeight}px)
              </p>
            </div>
          </section>

          <section className={card}>
            <h3 className="mb-2.5 text-[12px] font-bold text-navy-800">COLORS SETTINGS</h3>
            <ul className="grid grid-cols-2 gap-2.5">
              {colors.map((c) =>
              <li key={c.label}>
                  <p className="mb-1 text-[10.5px] font-medium text-slate-600">{c.label}</p>
                  <p className="flex items-center gap-1.5 rounded border border-slate-300 px-1.5 py-1">
                    <span
                    className="h-3.5 w-3.5 rounded-sm border border-slate-200"
                    style={{ backgroundColor: c.value }}
                    aria-hidden="true" />
                  
                    <span className="text-[10.5px] text-navy-800">{c.value}</span>
                  </p>
                </li>
              )}
            </ul>
          </section>
        </div>

        {/* Live preview column */}
        <div className="space-y-4">
          <section className={card}>
            <h3 className="mb-2.5 text-[12px] font-bold text-navy-800">
              LIVE PREVIEW{' '}
              <span className="font-normal normal-case text-slate-500">
                (This is how students will see the exam screen)
              </span>
            </h3>

            <div className="overflow-hidden rounded-lg border border-slate-200">
              <div className="flex items-center gap-3 bg-navy-800 px-4 py-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white/15 text-[9px] font-bold text-white">
                  LOGO
                </span>
                <div className="min-w-0">
                  <p className="font-display text-[13px] font-bold text-white">
                    Balaji Typing &amp; Steno College
                  </p>
                  <p className="text-[11.5px] font-semibold text-white/90">SSC Typing Examination</p>
                  <p className="text-[10.5px] text-white/70">
                    Complete the passage as accurately and as fast as you can.
                  </p>
                </div>
                <div className="ml-auto flex items-center gap-2 text-white">
                  {[MaximizeIcon, ArrowLeftRightIcon].map((Icon, i) =>
                  <button
                    key={i}
                    type="button"
                    aria-label={i === 0 ? 'Full screen' : 'Change interface'}
                    className="grid h-7 w-7 place-items-center rounded bg-white/10 transition-colors duration-150 hover:bg-white/20">
                    
                      <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                    </button>
                  )}
                  <button type="button" className="grid h-7 w-7 place-items-center rounded bg-white/10 text-[11px] font-bold">
                    A-
                  </button>
                  <button type="button" className="grid h-7 w-7 place-items-center rounded bg-white/10 text-[11px] font-bold">
                    A+
                  </button>
                  <button type="button" aria-label="Sound" className="grid h-7 w-7 place-items-center rounded bg-white/10">
                    <Volume2Icon className="h-3.5 w-3.5" aria-hidden="true" />
                  </button>
                </div>
              </div>

              <div className="bg-canvas p-4">
                <div className="flex gap-4">
                  <div className="w-[110px] shrink-0 text-center">
                    <span className="grid h-[100px] w-full place-items-center rounded-lg bg-slate-200 text-slate-400">
                      <UserIcon className="h-10 w-10" aria-hidden="true" />
                    </span>
                    <p className="mt-1.5 text-[12px] font-semibold text-navy-800">Anjali Sharma</p>
                    <p className="text-[10.5px] text-slate-500">Roll No.</p>
                    <p className="font-display text-[13px] font-bold text-navy-800">25010125</p>
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="mb-2.5 flex items-center gap-3">
                      <span className="rounded-md bg-white px-4 py-1.5 font-display text-[22px] font-bold text-navy-800 shadow-card">
                        13:45
                      </span>
                      <label className="ml-auto block">
                        <span className="mb-0.5 block text-[10.5px] font-medium text-slate-600">Font Size</span>
                        <select className="w-[100px] rounded border border-slate-300 px-2 py-1 text-[11px] outline-none focus:border-primary">
                          <option>Medium</option>
                        </select>
                      </label>
                      <label className="block">
                        <span className="mb-0.5 block text-[10.5px] font-medium text-slate-600">Backspace</span>
                        <select className="w-[110px] rounded border border-slate-300 px-2 py-1 text-[11px] outline-none focus:border-primary">
                          <option>Current Word</option>
                        </select>
                      </label>
                    </div>

                    <p
                      className="overflow-hidden rounded-md border border-amber-200 bg-[#FFFBE6] p-3 text-[12px] leading-relaxed text-navy-900"
                      style={{ height: passageHeight }}>
                      
                      India is a land of diversity. It is a country where people of different
                      religions, cultures and traditions live together in unity. Our country has made
                      great progress in every field. Education, science, technology, agriculture and
                      industry have all developed over the years. The youth of India are talented and
                      hardworking. They are the future of the nation. It is our duty to work sincerely
                      and build a strong and prosperous India.
                    </p>

                    <p
                      className="mt-2.5 rounded-md border border-slate-300 bg-white p-3 text-[12px] text-slate-400"
                      style={{ height: typingHeight }}>
                      
                      Start typing here...
                    </p>

                    <div className="mt-3 flex items-center gap-2.5">
                      <button
                        type="button"
                        className="rounded-md bg-primary px-6 py-1.5 text-[12px] font-semibold text-white transition-colors duration-150 hover:bg-primary-700">
                        
                        Start
                      </button>
                      <button
                        type="button"
                        className="rounded-md bg-success px-6 py-1.5 text-[12px] font-semibold text-white transition-colors duration-150 hover:bg-[#146c43]">
                        
                        Submit
                      </button>
                      <span className="ml-auto flex items-center gap-2 text-[11px] text-slate-600">
                        Keyboard Sound
                        <span className="relative h-4 w-8 rounded-full bg-primary">
                          <span className="absolute right-[2px] top-[2px] h-3 w-3 rounded-full bg-white" />
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className={card}>
            <h3 className="mb-2.5 text-[12px] font-bold text-navy-800">SAVE LAYOUT</h3>
            <label className="block">
              <span className={labelCls}>Layout Name</span>
              <input type="text" defaultValue="Default Layout 2026" className={inputCls} />
            </label>
            <div className="mt-3 flex flex-wrap gap-2">
              <button
                type="button"
                className="flex items-center gap-1.5 rounded-md bg-primary px-4 py-2 text-[12px] font-semibold text-white transition-colors duration-150 hover:bg-primary-700">
                
                <SaveIcon className="h-3.5 w-3.5" aria-hidden="true" /> Save Layout
              </button>
              <button
                type="button"
                className="flex items-center gap-1.5 rounded-md bg-success px-4 py-2 text-[12px] font-semibold text-white transition-colors duration-150 hover:bg-[#146c43]">
                
                <EyeIcon className="h-3.5 w-3.5" aria-hidden="true" /> Save &amp; Preview
              </button>
              <button
                type="button"
                className="flex items-center gap-1.5 rounded-md border border-rose-300 px-4 py-2 text-[12px] font-medium text-rose-600 transition-colors duration-150 hover:bg-rose-50">
                
                <RotateCcwIcon className="h-3.5 w-3.5" aria-hidden="true" /> Reset Layout
              </button>
            </div>
          </section>
        </div>
      </div>

      <p className="mt-4 flex items-center gap-2 rounded-md border border-primary-100 bg-primary-50 px-3 py-2 text-[11.5px] text-primary-700">
        <InfoIcon className="h-3.5 w-3.5" aria-hidden="true" />
        Note: Changes made here will affect all exams using this layout.
      </p>
    </AdminLayout>);

}