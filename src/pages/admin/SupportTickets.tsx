import React, { useMemo, useState } from 'react';
import { HeadphonesIcon, SearchIcon, XIcon, SendIcon, InboxIcon, CircleDotIcon, CheckCircle2Icon, ClockIcon } from 'lucide-react';
import { AdminLayout } from '../../components/admin/AdminLayout';
import { Breadcrumbs } from '../../components/common/PageHeading';
import { Panel } from '../../components/common/Pill';
import { AttachmentPicker, AttachmentList } from '../../components/support/Attachments';
import {
  ticketCategories,
  statusTone,
  priorityTone,
  useSupportTickets,
  TicketStatus,
  TicketPriority,
  SupportTicket,
  Attachment } from
'../../data/supportStore';

const inputCls = 'rounded-md border border-slate-300 px-2.5 py-1.5 text-[12px] text-slate-700 outline-none focus:border-primary';

function TicketDrawer({ ticket, onClose }: {ticket: SupportTicket;onClose: () => void;}) {
  const { addReply, updateTicket } = useSupportTickets();
  const [reply, setReply] = useState('');
  const [files, setFiles] = useState<Attachment[]>([]);
  const [error, setError] = useState('');

  const send = () => {
    if (!reply.trim() && files.length === 0) return;
    const ok = addReply(ticket.id, { from: 'admin', author: 'Admin', message: reply.trim(), attachments: files });
    if (!ok) {
      setError('Could not save: attachments are too large for browser storage.');
      return;
    }
    setError('');
    setReply('');
    setFiles([]);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-navy-900/40">
      <div className="flex h-full w-full max-w-lg flex-col bg-white shadow-2xl">
        <div className="flex items-start justify-between gap-3 border-b border-slate-200 p-5">
          <div className="min-w-0">
            <p className="text-[11px] font-semibold text-primary">{ticket.id} · {ticket.category}</p>
            <h3 className="font-display text-[15px] font-bold text-navy-800">{ticket.subject}</h3>
            <p className="mt-0.5 text-[11.5px] text-slate-500">{ticket.student} (Roll {ticket.rollNo}) · {ticket.createdAt}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="grid h-8 w-8 shrink-0 place-items-center rounded-full text-slate-400 transition-colors duration-150 hover:bg-slate-100 hover:text-slate-600">

            <XIcon className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        <div className="flex flex-wrap items-center gap-3 border-b border-slate-200 px-5 py-3">
          <label className="flex items-center gap-2 text-[11.5px] font-medium text-slate-600">
            Status
            <select value={ticket.status} onChange={(e) => updateTicket(ticket.id, { status: e.target.value as TicketStatus })} className={inputCls}>
              <option>Open</option>
              <option>In Progress</option>
              <option>Resolved</option>
            </select>
          </label>
          <label className="flex items-center gap-2 text-[11.5px] font-medium text-slate-600">
            Priority
            <select value={ticket.priority} onChange={(e) => updateTicket(ticket.id, { priority: e.target.value as TicketPriority })} className={inputCls}>
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>
          </label>
          <span className={`ml-auto rounded px-2 py-[2px] text-[10.5px] font-semibold ${statusTone[ticket.status]}`}>{ticket.status}</span>
        </div>

        <div className="flex-1 space-y-2.5 overflow-y-auto bg-slate-50 p-5">
          {ticket.replies.map((r) =>
          <div
            key={r.id}
            className={`rounded-md p-3 text-[12px] ${r.from === 'admin' ? 'ml-8 bg-primary-50 text-primary-800' : 'mr-8 border border-slate-200 bg-white text-slate-700'}`}>

              <p className="mb-1 text-[11px] font-semibold">
                {r.author} <span className="font-normal text-slate-400">{r.at}</span>
              </p>
              {r.message}
              <AttachmentList items={r.attachments ?? []} />
            </div>
          )}
        </div>

        <div className="space-y-2 border-t border-slate-200 p-4">
          <AttachmentPicker value={files} onChange={setFiles} />
          {error && <p className="text-[11.5px] text-rose-600">{error}</p>}
          <div className="flex gap-2">
          <input
            value={reply}
            onChange={(e) => setReply(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && send()}
            placeholder="Type your reply..."
            className={`${inputCls} flex-1 py-2`} />

          <button
            type="button"
            onClick={send}
            disabled={!reply.trim() && files.length === 0}
            className="flex items-center gap-1.5 rounded-md bg-primary px-4 py-2 text-[12px] font-semibold text-white transition-colors duration-150 hover:bg-primary-700 disabled:cursor-not-allowed disabled:bg-slate-300">

            <SendIcon className="h-3.5 w-3.5" aria-hidden="true" /> Send
          </button>
          </div>
        </div>
      </div>
    </div>);

}

export function AdminSupportTickets() {
  const { tickets } = useSupportTickets();
  const [status, setStatus] = useState<'All' | TicketStatus>('All');
  const [category, setCategory] = useState('All');
  const [query, setQuery] = useState('');
  const [openId, setOpenId] = useState<string | null>(null);

  const filtered = useMemo(
    () =>
    tickets.filter((t) =>
    (status === 'All' || t.status === status) &&
    (category === 'All' || t.category === category) &&
    (t.subject + ' ' + t.student + ' ' + t.rollNo + ' ' + t.id).toLowerCase().includes(query.trim().toLowerCase())
    ),
    [tickets, status, category, query]
  );

  const openTicket = tickets.find((t) => t.id === openId) ?? null;

  const stats = [
  { icon: InboxIcon, label: 'Total Tickets', value: tickets.length, color: '#0D6EFD' },
  { icon: CircleDotIcon, label: 'Open', value: tickets.filter((t) => t.status === 'Open').length, color: '#DC3545' },
  { icon: ClockIcon, label: 'In Progress', value: tickets.filter((t) => t.status === 'In Progress').length, color: '#F59E0B' },
  { icon: CheckCircle2Icon, label: 'Resolved', value: tickets.filter((t) => t.status === 'Resolved').length, color: '#198754' }];


  return (
    <AdminLayout searchPlaceholder="Search tickets...">
      <div className="mb-4 flex flex-wrap items-start gap-4">
        <div>
          <h2 className="flex items-center gap-2 font-display text-[26px] font-bold leading-tight text-navy-800">
            <HeadphonesIcon className="h-6 w-6 text-primary" aria-hidden="true" /> Support Tickets
          </h2>
          <p className="text-[12.5px] text-slate-500">Review student tickets, reply and update their status.</p>
        </div>
        <div className="ml-auto">
          <Breadcrumbs crumbs={[{ label: 'Support Tickets' }]} />
        </div>
      </div>

      <div className="mb-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((s) =>
        <div key={s.label} className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-card">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg text-white" style={{ backgroundColor: s.color }}>
              <s.icon className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <p className="text-[11.5px] text-slate-500">{s.label}</p>
              <p className="font-display text-[22px] font-bold leading-tight text-navy-800">{s.value}</p>
            </div>
          </div>
        )}
      </div>

      <Panel>
        <div className="mb-3 flex flex-wrap items-center gap-2.5">
          <select value={status} onChange={(e) => setStatus(e.target.value as 'All' | TicketStatus)} className={inputCls}>
            <option value="All">All Status</option>
            <option>Open</option>
            <option>In Progress</option>
            <option>Resolved</option>
          </select>
          <select value={category} onChange={(e) => setCategory(e.target.value)} className={inputCls}>
            <option value="All">All Categories</option>
            {ticketCategories.map((c) => <option key={c}>{c}</option>)}
          </select>
          <div className="relative ml-auto">
            <SearchIcon className="pointer-events-none absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-400" aria-hidden="true" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by student, roll no, subject..."
              className={`${inputCls} w-[280px] pl-8`} />

          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[860px] text-left text-[12px]">
            <thead className="bg-slate-50 text-[11.5px] font-semibold text-slate-600">
              <tr>
                <th scope="col" className="px-3 py-2.5">Ticket</th>
                <th scope="col" className="px-3 py-2.5">Student</th>
                <th scope="col" className="px-3 py-2.5">Subject</th>
                <th scope="col" className="px-3 py-2.5">Category</th>
                <th scope="col" className="px-3 py-2.5">Priority</th>
                <th scope="col" className="px-3 py-2.5">Status</th>
                <th scope="col" className="px-3 py-2.5">Created</th>
                <th scope="col" className="px-3 py-2.5 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filtered.map((t) =>
              <tr key={t.id} className="transition-colors duration-150 hover:bg-slate-50/70">
                  <td className="px-3 py-2.5 font-semibold text-primary">{t.id}</td>
                  <td className="px-3 py-2.5 text-navy-800">{t.student}<span className="block text-[10.5px] text-slate-400">{t.rollNo}</span></td>
                  <td className="px-3 py-2.5 text-slate-700">{t.subject}</td>
                  <td className="px-3 py-2.5 text-slate-600">{t.category}</td>
                  <td className="px-3 py-2.5">
                    <span className={`rounded px-2 py-[2px] text-[10.5px] font-semibold ${priorityTone[t.priority]}`}>{t.priority}</span>
                  </td>
                  <td className="px-3 py-2.5">
                    <span className={`rounded px-2 py-[2px] text-[10.5px] font-semibold ${statusTone[t.status]}`}>{t.status}</span>
                  </td>
                  <td className="px-3 py-2.5 text-slate-500">{t.createdAt}</td>
                  <td className="px-3 py-2.5 text-right">
                    <button
                    type="button"
                    onClick={() => setOpenId(t.id)}
                    className="rounded-md border border-primary px-3 py-1 text-[11.5px] font-medium text-primary transition-colors duration-150 hover:bg-primary-50">

                      View &amp; Reply
                    </button>
                  </td>
                </tr>
              )}
              {filtered.length === 0 &&
              <tr>
                  <td colSpan={8} className="px-3 py-10 text-center text-slate-500">No tickets match these filters.</td>
                </tr>
              }
            </tbody>
          </table>
        </div>
      </Panel>

      {openTicket && <TicketDrawer ticket={openTicket} onClose={() => setOpenId(null)} />}
    </AdminLayout>);

}
