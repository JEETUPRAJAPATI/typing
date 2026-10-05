import React, { useState } from 'react';
import { HeadphonesIcon, MessageSquareIcon, SendIcon, ChevronDownIcon, ChevronUpIcon } from 'lucide-react';
import { StudentLayout } from '../../components/student/StudentLayout';
import { Breadcrumbs } from '../../components/common/PageHeading';
import { Panel } from '../../components/common/Pill';
import { AttachmentPicker, AttachmentList } from '../../components/support/Attachments';
import {
  ticketCategories,
  statusTone,
  useSupportTickets,
  TicketPriority,
  Attachment } from
'../../data/supportStore';

const CURRENT_STUDENT = { name: 'Aman Kumar', rollNo: '2501001' };

const inputCls = 'w-full rounded-md border border-slate-300 px-3 py-2 text-[12.5px] text-slate-700 outline-none focus:border-primary';

export function Support() {
  const { tickets, createTicket, addReply } = useSupportTickets();
  const [subject, setSubject] = useState('');
  const [category, setCategory] = useState(ticketCategories[0]);
  const [priority, setPriority] = useState<TicketPriority>('Medium');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);
  const [saveError, setSaveError] = useState('');
  const [attachments, setAttachments] = useState<Attachment[]>([]);
  const [replyAttachments, setReplyAttachments] = useState<Attachment[]>([]);
  const [openId, setOpenId] = useState<string | null>(null);
  const [reply, setReply] = useState('');

  const myTickets = tickets.filter((t) => t.student === CURRENT_STUDENT.name);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!subject.trim() || !message.trim()) return;
    const ok = createTicket({ subject: subject.trim(), category, priority, message: message.trim(), student: CURRENT_STUDENT.name, rollNo: CURRENT_STUDENT.rollNo, attachments });
    if (!ok) {
      setSaveError('Could not save: the attachments are too large for browser storage. Remove a file and try again.');
      return;
    }
    setSaveError('');
    setSubject('');
    setMessage('');
    setAttachments([]);
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  const onReply = (ticketId: string) => {
    if (!reply.trim() && replyAttachments.length === 0) return;
    const ok = addReply(ticketId, { from: 'student', author: CURRENT_STUDENT.name, message: reply.trim(), attachments: replyAttachments });
    if (!ok) {
      setSaveError('Could not save: the attachments are too large for browser storage.');
      return;
    }
    setSaveError('');
    setReply('');
    setReplyAttachments([]);
  };

  return (
    <StudentLayout>
      <div className="mb-4 flex flex-wrap items-start gap-4">
        <div>
          <h2 className="flex items-center gap-2 font-display text-[24px] font-bold text-navy-800">
            <HeadphonesIcon className="h-6 w-6 text-primary" aria-hidden="true" /> Support
          </h2>
          <p className="text-[12.5px] text-slate-500">Raise a ticket and track replies from our team.</p>
        </div>
        <div className="ml-auto">
          <Breadcrumbs crumbs={[{ label: 'Home', to: '/' }, { label: 'Support' }]} />
        </div>
      </div>

      <div className="grid gap-4 xl:grid-cols-[1fr_320px]">
        <div className="space-y-4">
          <Panel title="Create a Support Ticket">
            <form onSubmit={onSubmit} className="grid gap-3.5 sm:grid-cols-2">
              <label className="block sm:col-span-2">
                <span className="mb-1.5 block text-[12px] font-semibold text-navy-800">Subject</span>
                <input value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="Briefly describe your issue" className={inputCls} />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-[12px] font-semibold text-navy-800">Category</span>
                <select value={category} onChange={(e) => setCategory(e.target.value)} className={inputCls}>
                  {ticketCategories.map((c) => <option key={c}>{c}</option>)}
                </select>
              </label>
              <label className="block">
                <span className="mb-1.5 block text-[12px] font-semibold text-navy-800">Priority</span>
                <select value={priority} onChange={(e) => setPriority(e.target.value as TicketPriority)} className={inputCls}>
                  <option>Low</option>
                  <option>Medium</option>
                  <option>High</option>
                </select>
              </label>
              <label className="block sm:col-span-2">
                <span className="mb-1.5 block text-[12px] font-semibold text-navy-800">Message</span>
                <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows={4} placeholder="Describe the problem in detail" className={`${inputCls} resize-y`} />
              </label>
              <div className="sm:col-span-2">
                <AttachmentPicker value={attachments} onChange={setAttachments} />
              </div>
              {saveError && <p className="text-[12px] text-rose-600 sm:col-span-2">{saveError}</p>}
              <div className="flex items-center gap-3 sm:col-span-2">
                <button
                  type="submit"
                  disabled={!subject.trim() || !message.trim()}
                  className="flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-[12.5px] font-semibold text-white transition-colors duration-150 hover:bg-primary-700 disabled:cursor-not-allowed disabled:bg-slate-300">

                  <SendIcon className="h-3.5 w-3.5" aria-hidden="true" /> Submit Ticket
                </button>
                {sent && <span className="text-[12px] font-medium text-emerald-700">Ticket submitted. Our team will reply soon.</span>}
              </div>
            </form>
          </Panel>

          <Panel title={`My Tickets (${myTickets.length})`}>
            {myTickets.length === 0 ?
            <p className="py-6 text-center text-[12.5px] text-slate-500">You have not raised any tickets yet.</p> :

            <ul className="divide-y divide-slate-100">
                {myTickets.map((t) => {
                const open = openId === t.id;
                return (
                  <li key={t.id} className="py-3">
                      <button
                      type="button"
                      onClick={() => setOpenId(open ? null : t.id)}
                      className="flex w-full items-start gap-3 text-left">

                        <span className="min-w-0 flex-1">
                          <span className="block text-[13px] font-semibold text-navy-800">{t.subject}</span>
                          <span className="mt-0.5 block text-[11px] text-slate-500">
                            {t.id} · {t.category} · {t.createdAt}
                          </span>
                        </span>
                        <span className={`rounded px-2 py-[2px] text-[10.5px] font-semibold ${statusTone[t.status]}`}>{t.status}</span>
                        {open ? <ChevronUpIcon className="h-4 w-4 text-slate-400" aria-hidden="true" /> : <ChevronDownIcon className="h-4 w-4 text-slate-400" aria-hidden="true" />}
                      </button>

                      {open &&
                    <div className="mt-3 space-y-2.5 rounded-lg bg-slate-50 p-3">
                          {t.replies.map((r) =>
                      <div key={r.id} className={`rounded-md p-2.5 text-[12px] ${r.from === 'admin' ? 'bg-primary-50 text-primary-800' : 'bg-white text-slate-700 border border-slate-200'}`}>
                              <p className="mb-1 flex items-center gap-2 text-[11px] font-semibold">
                                {r.author} <span className="font-normal text-slate-400">{r.at}</span>
                              </p>
                              {r.message}
                              <AttachmentList items={r.attachments ?? []} />
                            </div>
                      )}
                          {t.status !== 'Resolved' &&
                      <div className="space-y-2 pt-1">
                              <div className="flex gap-2">
                                <input
                            value={reply}
                            onChange={(e) => setReply(e.target.value)}
                            placeholder="Write a reply..."
                            className={inputCls} />

                                <button
                            type="button"
                            onClick={() => onReply(t.id)}
                            className="shrink-0 rounded-md bg-primary px-3.5 py-2 text-[12px] font-semibold text-white transition-colors duration-150 hover:bg-primary-700">

                                  Reply
                                </button>
                              </div>
                              <AttachmentPicker value={replyAttachments} onChange={setReplyAttachments} />
                            </div>
                      }
                        </div>
                    }
                    </li>);

              })}
              </ul>
            }
          </Panel>
        </div>

        <div className="space-y-4">
          <Panel title="Contact Us Directly">
            <ul className="space-y-2.5 text-[12px]">
              <li className="rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2.5">
                <p className="font-semibold text-emerald-700">WhatsApp Support</p>
                <p className="text-emerald-700">8447949206</p>
              </li>
              <li className="rounded-lg border border-primary-100 bg-primary-50 px-3 py-2.5">
                <p className="font-semibold text-primary-700">Telegram Channel</p>
                <p className="text-primary-700">Live test updates &amp; announcements</p>
              </li>
            </ul>
          </Panel>
          <Panel title="Tips">
            <p className="flex items-start gap-2 text-[11.5px] leading-relaxed text-slate-500">
              <MessageSquareIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" aria-hidden="true" />
              Include your roll number and test name in the message so we can find your attempt quickly.
            </p>
          </Panel>
        </div>
      </div>
    </StudentLayout>);

}
