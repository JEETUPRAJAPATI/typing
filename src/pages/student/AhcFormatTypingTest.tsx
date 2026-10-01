import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  UserCircle2Icon,
  ClockIcon,
  LogOutIcon,
  FileTextIcon,
  BoldIcon,
  ItalicIcon,
  UnderlineIcon,
  StrikethroughIcon,
  SuperscriptIcon,
  SubscriptIcon,
  AlignLeftIcon,
  AlignCenterIcon,
  AlignRightIcon,
  AlignJustifyIcon,
  ListOrderedIcon,
  ListIcon,
  IndentIcon,
  OutdentIcon,
  QuoteIcon,
  UndoIcon,
  RedoIcon,
  RemoveFormattingIcon,
  SendIcon } from
'lucide-react';

const fontFamilies = ['Times New Roman', 'Arial', 'Georgia', 'Courier New'];
const fontSizes = ['12', '14', '16', '18', '20', '24'];

function SourcePassage() {
  return (
    <div className="space-y-4 text-[15px] leading-relaxed text-navy-900" style={{ fontFamily: 'Times New Roman, serif' }}>
      <p className="text-center font-bold underline">IN THE HIGH COURT OF JUDICATURE AT ALLAHABAD</p>
      <p className="text-center italic">CIVIL MISC. WRIT PETITION No. 12847 of 2023</p>
      <p className="text-center font-bold">BETWEEN:</p>
      <p>Ram Prasad Sharma &amp; Ors. … Petitioners</p>
      <p className="text-center font-bold">AND</p>
      <p>State of Uttar Pradesh &amp; Ors. … Respondents</p>
      <p>
        This writ petition has been filed under Article 226 of the Constitution of India seeking a writ
        of mandamus directing the respondents to consider and decide the representation dated 14th
        August, 2023 submitted by the petitioners within a stipulated time frame, in accordance with
        law.
      </p>
      <p>
        The petitioners state that they are permanent residents of the district and have been aggrieved
        by the inaction on the part of the respondent authorities despite repeated representations made
        in this regard.
      </p>
      <p className="font-semibold">IT IS, THEREFORE, PRAYED THAT this Hon&apos;ble Court may be pleased to:</p>
      <p>
        (a) issue a writ, order or direction in the nature of mandamus commanding the respondents to
        decide the representation of the petitioners expeditiously; and
      </p>
      <p>(b) pass such other order(s) as this Hon&apos;ble Court may deem fit and proper.</p>
    </div>);

}

const sourceWordCount = 140;

export function AhcFormatTypingTest() {
  const { testNo = '01' } = useParams();
  const navigate = useNavigate();
  const editorRef = useRef<HTMLDivElement>(null);

  const [remaining, setRemaining] = useState(15 * 60);
  const [typedWords, setTypedWords] = useState(0);
  const [typedChars, setTypedChars] = useState(0);
  const [fontFamily, setFontFamily] = useState(fontFamilies[0]);
  const [fontSize, setFontSize] = useState(fontSizes[3]);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    document.documentElement.requestFullscreen?.().catch(() => {});
    const onChange = () => setIsFullscreen(!!document.fullscreenElement);
    onChange();
    document.addEventListener('fullscreenchange', onChange);
    return () => {
      document.removeEventListener('fullscreenchange', onChange);
      if (document.fullscreenElement) document.exitFullscreen?.().catch(() => {});
    };
  }, []);

  useEffect(() => {
    if (remaining <= 0) return;
    const timer = setInterval(() => setRemaining((r) => Math.max(0, r - 1)), 1000);
    return () => clearInterval(timer);
  }, [remaining]);

  const mm = String(Math.floor(remaining / 60)).padStart(2, '0');
  const ss = String(remaining % 60).padStart(2, '0');

  const handleInput = () => {
    const text = editorRef.current?.innerText ?? '';
    setTypedChars(text.length);
    setTypedWords(text.trim() ? text.trim().split(/\s+/).length : 0);
  };

  const exec = (command: string, value?: string) => {
    editorRef.current?.focus();
    document.execCommand(command, false, value);
    handleInput();
  };

  const onSubmit = () => navigate('/result/typing');

  const toolbarButtons: {icon: React.ComponentType<{className?: string;}>;command: string;value?: string;label: string;}[] = [
  { icon: BoldIcon, command: 'bold', label: 'Bold' },
  { icon: ItalicIcon, command: 'italic', label: 'Italic' },
  { icon: UnderlineIcon, command: 'underline', label: 'Underline' },
  { icon: StrikethroughIcon, command: 'strikeThrough', label: 'Strikethrough' },
  { icon: SuperscriptIcon, command: 'superscript', label: 'Superscript' },
  { icon: SubscriptIcon, command: 'subscript', label: 'Subscript' },
  { icon: ListOrderedIcon, command: 'insertOrderedList', label: 'Numbered list' },
  { icon: ListIcon, command: 'insertUnorderedList', label: 'Bulleted list' },
  { icon: AlignLeftIcon, command: 'justifyLeft', label: 'Align left' },
  { icon: AlignCenterIcon, command: 'justifyCenter', label: 'Align center' },
  { icon: AlignRightIcon, command: 'justifyRight', label: 'Align right' },
  { icon: AlignJustifyIcon, command: 'justifyFull', label: 'Justify' },
  { icon: OutdentIcon, command: 'outdent', label: 'Outdent' },
  { icon: IndentIcon, command: 'indent', label: 'Indent' },
  { icon: QuoteIcon, command: 'formatBlock', value: 'blockquote', label: 'Blockquote' }];


  return (
    <div className="fixed inset-0 z-[100] flex flex-col bg-slate-100">
      {/* Top bar */}
      <div className="flex shrink-0 flex-wrap items-center gap-3 bg-navy-900 px-5 py-2.5 text-white">
        <span className="flex items-center gap-1.5 text-[13px] font-semibold">
          <UserCircle2Icon className="h-4 w-4" aria-hidden="true" /> Test {parseInt(testNo, 10)}
        </span>
        <span className="mx-auto flex items-center gap-4 text-[13px]">
          <span className="flex items-center gap-1.5 font-display text-[16px] font-bold text-emerald-400">
            <ClockIcon className="h-4 w-4" aria-hidden="true" /> {mm}:{ss}
          </span>
          <span className="text-white/80">
            Words: <span className="font-semibold text-white">{typedWords}</span> / {sourceWordCount}
          </span>
        </span>
        <button
          type="button"
          onClick={onSubmit}
          className="ml-auto flex items-center gap-1.5 rounded-md border border-white/20 px-3 py-1.5 text-[12.5px] font-medium text-white/85 transition-colors duration-150 hover:bg-white/10">

          <LogOutIcon className="h-3.5 w-3.5" aria-hidden="true" /> Exit
        </button>
      </div>

      {/* Source passage label */}
      <div className="flex shrink-0 items-center gap-2 border-b border-slate-200 bg-primary-50 px-5 py-2 text-[11.5px] font-bold uppercase tracking-wide text-primary-700">
        <FileTextIcon className="h-3.5 w-3.5" aria-hidden="true" /> Source Passage — Reproduce with Exact Formatting
      </div>

      {/* Source + editor split */}
      <div className="flex min-h-0 flex-1 flex-col overflow-hidden">
        <div className="min-h-0 flex-1 overflow-y-auto bg-[#fdfcf9] px-8 py-6">
          <SourcePassage />
        </div>

        {/* Toolbar */}
        <div className="flex shrink-0 flex-wrap items-center gap-1 border-y border-slate-700 bg-navy-900 px-3 py-2">
          <select
            value={fontFamily}
            onChange={(e) => {
              setFontFamily(e.target.value);
              exec('fontName', e.target.value);
            }}
            className="rounded border border-white/20 bg-navy-800 px-2 py-1 text-[12px] text-white outline-none">

            {fontFamilies.map((f) => <option key={f}>{f}</option>)}
          </select>
          <select
            value={fontSize}
            onChange={(e) => {
              setFontSize(e.target.value);
              exec('fontSize', '3');
            }}
            className="w-[60px] rounded border border-white/20 bg-navy-800 px-2 py-1 text-[12px] text-white outline-none">

            {fontSizes.map((s) => <option key={s}>{s}</option>)}
          </select>

          <span className="mx-1 h-5 w-px bg-white/15" aria-hidden="true" />

          {toolbarButtons.map((b) =>
          <button
            key={b.label}
            type="button"
            title={b.label}
            aria-label={b.label}
            onClick={() => exec(b.command, b.value)}
            className="grid h-8 w-8 shrink-0 place-items-center rounded text-white/80 transition-colors duration-150 hover:bg-white/10 hover:text-white">

              <b.icon className="h-4 w-4" aria-hidden="true" />
            </button>
          )}

          <span className="mx-1 h-5 w-px bg-white/15" aria-hidden="true" />

          <label title="Text color" className="grid h-8 w-8 shrink-0 cursor-pointer place-items-center rounded text-white/80 transition-colors duration-150 hover:bg-white/10 hover:text-white">
            <span className="relative">
              <span className="text-[13px] font-bold">A</span>
              <span className="absolute -bottom-1 left-0 h-[3px] w-full bg-danger" aria-hidden="true" />
            </span>
            <input
              type="color"
              className="sr-only"
              onChange={(e) => exec('foreColor', e.target.value)} />

          </label>
          <label title="Highlight color" className="grid h-8 w-8 shrink-0 cursor-pointer place-items-center rounded text-white/80 transition-colors duration-150 hover:bg-white/10 hover:text-white">
            <span className="relative rounded px-0.5">
              <span className="text-[13px] font-bold">A</span>
              <span className="absolute -bottom-1 left-0 h-[3px] w-full bg-warn" aria-hidden="true" />
            </span>
            <input
              type="color"
              className="sr-only"
              onChange={(e) => exec('hiliteColor', e.target.value)} />

          </label>

          <span className="mx-1 h-5 w-px bg-white/15" aria-hidden="true" />

          <button
            type="button"
            title="Undo"
            onClick={() => exec('undo')}
            className="grid h-8 w-8 shrink-0 place-items-center rounded text-white/80 transition-colors duration-150 hover:bg-white/10 hover:text-white">

            <UndoIcon className="h-4 w-4" aria-hidden="true" />
          </button>
          <button
            type="button"
            title="Redo"
            onClick={() => exec('redo')}
            className="grid h-8 w-8 shrink-0 place-items-center rounded text-white/80 transition-colors duration-150 hover:bg-white/10 hover:text-white">

            <RedoIcon className="h-4 w-4" aria-hidden="true" />
          </button>
          <button
            type="button"
            title="Clear formatting"
            onClick={() => exec('removeFormat')}
            className="grid h-8 w-8 shrink-0 place-items-center rounded text-white/80 transition-colors duration-150 hover:bg-white/10 hover:text-white">

            <RemoveFormattingIcon className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        <div
          ref={editorRef}
          contentEditable
          suppressContentEditableWarning
          onInput={handleInput}
          style={{ fontFamily, fontSize: `${fontSize}px` }}
          className="min-h-[220px] flex-1 overflow-y-auto bg-white px-8 py-6 leading-relaxed text-navy-900 outline-none" />

      </div>

      {/* Status bar */}
      <div className="flex shrink-0 flex-wrap items-center gap-4 bg-navy-900 px-5 py-2.5 text-[12px] text-white/80">
        <span>
          Words: <span className="font-semibold text-white">{typedWords}</span>
        </span>
        <span>
          Chars: <span className="font-semibold text-white">{typedChars}</span>
        </span>
        <span className="mx-auto">
          {!isFullscreen &&
          <span className="font-medium text-danger">⚠ Fullscreen exited</span>
          }
        </span>
        <button
          type="button"
          onClick={onSubmit}
          className="flex items-center gap-1.5 rounded-md bg-sky-500 px-4 py-2 text-[12.5px] font-semibold text-white transition-colors duration-150 hover:bg-sky-600">

          <SendIcon className="h-3.5 w-3.5" aria-hidden="true" /> Submit Test
        </button>
      </div>
    </div>);

}
