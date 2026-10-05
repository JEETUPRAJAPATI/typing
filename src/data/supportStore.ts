import { useEffect, useState } from 'react';

export type TicketStatus = 'Open' | 'In Progress' | 'Resolved';
export type TicketPriority = 'Low' | 'Medium' | 'High';

export interface Attachment {
  name: string;
  kind: 'image' | 'video';
  dataUrl: string;
}

export interface TicketReply {
  id: string;
  from: 'student' | 'admin';
  author: string;
  message: string;
  at: string;
  attachments?: Attachment[];
}

export interface SupportTicket {
  id: string;
  subject: string;
  category: string;
  priority: TicketPriority;
  status: TicketStatus;
  student: string;
  rollNo: string;
  createdAt: string;
  replies: TicketReply[];
}

export const ticketCategories = ['Result / Score', 'Payment / Subscription', 'Test Not Loading', 'Account / Login', 'Other'];

const STORAGE_KEY = 'support-tickets';
const EVENT = 'support-tickets-changed';

const seedTickets: SupportTicket[] = [
{
  id: 'T-1001',
  subject: 'Result not showing for Test 07',
  category: 'Result / Score',
  priority: 'High',
  status: 'Open',
  student: 'Aman Kumar',
  rollNo: '2501001',
  createdAt: '02 Oct 2026, 10:20 AM',
  replies: [
  { id: 'r1', from: 'student', author: 'Aman Kumar', message: 'My result for DSSSB LDC Test 07 is not visible in Test Analysis.', at: '02 Oct 2026, 10:20 AM' }]

},
{
  id: 'T-1002',
  subject: 'Subscription payment deducted but plan not active',
  category: 'Payment / Subscription',
  priority: 'High',
  status: 'In Progress',
  student: 'Neha Gupta',
  rollNo: '2501044',
  createdAt: '01 Oct 2026, 04:45 PM',
  replies: [
  { id: 'r1', from: 'student', author: 'Neha Gupta', message: 'Payment of Rs 499 was debited but my plan still shows Free.', at: '01 Oct 2026, 04:45 PM' },
  { id: 'r2', from: 'admin', author: 'Admin', message: 'We are checking the transaction with the payment gateway. Will update you shortly.', at: '01 Oct 2026, 05:10 PM' }]

},
{
  id: 'T-1003',
  subject: 'Typing test page freezes on Submit',
  category: 'Test Not Loading',
  priority: 'Medium',
  status: 'Resolved',
  student: 'Ravi Shankar',
  rollNo: '2501078',
  createdAt: '29 Sep 2026, 11:05 AM',
  replies: [
  { id: 'r1', from: 'student', author: 'Ravi Shankar', message: 'The page freezes when I press Submit on the steno test.', at: '29 Sep 2026, 11:05 AM' },
  { id: 'r2', from: 'admin', author: 'Admin', message: 'Fixed in the latest update. Please clear cache and try again.', at: '29 Sep 2026, 02:30 PM' }]

}];


function load(): SupportTicket[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw) as SupportTicket[];
  } catch {

    // storage unavailable (private mode, blocked); fall back to seed data
  }
  return seedTickets;
}

function save(tickets: SupportTicket[]): boolean {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tickets));
  } catch {
    return false;
  }
  window.dispatchEvent(new Event(EVENT));
  return true;
}

const nowLabel = () =>
new Date().toLocaleString('en-GB', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' });

export function useSupportTickets() {
  const [tickets, setTickets] = useState<SupportTicket[]>(load);

  useEffect(() => {
    const sync = () => setTickets(load());
    window.addEventListener(EVENT, sync);
    window.addEventListener('storage', sync);
    return () => {
      window.removeEventListener(EVENT, sync);
      window.removeEventListener('storage', sync);
    };
  }, []);

  const createTicket = (data: {subject: string;category: string;priority: TicketPriority;message: string;student: string;rollNo: string;attachments?: Attachment[];}): boolean => {
    const ticket: SupportTicket = {
      id: `T-${Date.now().toString().slice(-6)}`,
      subject: data.subject,
      category: data.category,
      priority: data.priority,
      status: 'Open',
      student: data.student,
      rollNo: data.rollNo,
      createdAt: nowLabel(),
      replies: [{ id: 'r1', from: 'student', author: data.student, message: data.message, at: nowLabel(), attachments: data.attachments }]
    };
    return save([ticket, ...load()]);
  };

  const addReply = (ticketId: string, reply: {from: 'student' | 'admin';author: string;message: string;attachments?: Attachment[];}): boolean => {
    return save(load().map((t) =>
    t.id === ticketId ?
    { ...t, replies: [...t.replies, { id: `r${Date.now()}`, ...reply, at: nowLabel() }] } :
    t
    ));
  };

  const updateTicket = (ticketId: string, patch: Partial<Pick<SupportTicket, 'status' | 'priority'>>) => {
    save(load().map((t) => t.id === ticketId ? { ...t, ...patch } : t));
  };

  return { tickets, createTicket, addReply, updateTicket };
}

export const statusTone: Record<TicketStatus, string> = {
  'Open': 'bg-rose-50 text-rose-700',
  'In Progress': 'bg-amber-50 text-amber-700',
  'Resolved': 'bg-emerald-50 text-emerald-700'
};

export const priorityTone: Record<TicketPriority, string> = {
  Low: 'bg-slate-100 text-slate-600',
  Medium: 'bg-primary-50 text-primary-700',
  High: 'bg-rose-50 text-rose-700'
};
