import React, { useState } from 'react';
import {
  ZapIcon,
  CheckCircle2Icon,
  PauseCircleIcon,
  ListIcon,
  PlusIcon,
  PencilIcon,
  Trash2Icon,
  XIcon,
  LinkIcon,
  CalendarIcon,
  UploadCloudIcon } from
'lucide-react';
import { AdminLayout } from '../../components/admin/AdminLayout';
import { Breadcrumbs } from '../../components/common/PageHeading';

interface Banner {
  id: string;
  title: string;
  message: string;
  link: string;
  color: string;
  image: string;
  status: 'Active' | 'Inactive';
  startDate: string;
  endDate: string;
}

const initialBanners: Banner[] = [
{
  id: 'b1',
  title: 'Monsoon Offer',
  message: 'Get 40% OFF on all Steno Premium Plans — limited time only!',
  link: '/plan-pricing',
  color: '#DC3545',
  image: '',
  status: 'Active',
  startDate: '01 Aug 2026',
  endDate: '31 Aug 2026'
},
{
  id: 'b2',
  title: 'New Live Test',
  message: 'SSC Stenographer Grade D Live Mock Test is now available.',
  link: '/live-test/steno',
  color: '#0D6EFD',
  image: '',
  status: 'Active',
  startDate: '15 Aug 2026',
  endDate: '15 Sep 2026'
},
{
  id: 'b3',
  title: 'Maintenance Notice',
  message: 'Servers will be down for maintenance on 5 Sep, 1 AM – 3 AM.',
  link: '',
  color: '#F59E0B',
  image: '',
  status: 'Inactive',
  startDate: '04 Sep 2026',
  endDate: '05 Sep 2026'
}];


const emptyBanner: Omit<Banner, 'id'> = {
  title: '',
  message: '',
  link: '',
  color: '#0D6EFD',
  image: '',
  status: 'Active',
  startDate: '',
  endDate: ''
};

const colorOptions = ['#0D6EFD', '#DC3545', '#198754', '#F59E0B', '#6F42C1', '#0EA5E9'];

function BannerFormModal({
  initial,
  onClose,
  onSave



}: {initial: Banner | null;onClose: () => void;onSave: (data: Omit<Banner, 'id'>) => void;}) {
  const [form, setForm] = useState<Omit<Banner, 'id'>>(
    initial ?
    {
      title: initial.title,
      message: initial.message,
      link: initial.link,
      color: initial.color,
      image: initial.image,
      status: initial.status,
      startDate: initial.startDate,
      endDate: initial.endDate
    } :
    emptyBanner
  );

  const handleImageFile = (file: File | undefined) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setForm((f) => ({ ...f, image: String(reader.result) }));
    reader.readAsDataURL(file);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-navy-900/50 p-4">
      <div className="w-full max-w-lg rounded-xl bg-white p-6 shadow-2xl">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="font-display text-[16px] font-bold text-navy-800">
            {initial ? 'Edit Flash Banner' : 'Add New Flash Banner'}
          </h3>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="grid h-7 w-7 place-items-center rounded-full text-slate-400 transition-colors duration-150 hover:bg-slate-100 hover:text-slate-600">

            <XIcon className="h-3.5 w-3.5" aria-hidden="true" />
          </button>
        </div>

        <div className="space-y-3.5">
          <label className="block">
            <span className="mb-1 block text-[11.5px] font-semibold text-navy-800">Banner Title</span>
            <input
              type="text"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              placeholder="e.g. Monsoon Offer"
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-[12.5px] outline-none focus:border-primary" />

          </label>

          <div>
            <span className="mb-1 block text-[11.5px] font-semibold text-navy-800">Banner Image</span>
            {form.image ?
            <div className="relative overflow-hidden rounded-md border border-slate-200">
                <img src={form.image} alt="Banner preview" className="h-28 w-full object-cover" />
                <button
                type="button"
                onClick={() => setForm({ ...form, image: '' })}
                aria-label="Remove image"
                className="absolute right-2 top-2 grid h-6 w-6 place-items-center rounded-full bg-navy-900/70 text-white transition-colors duration-150 hover:bg-navy-900">

                  <XIcon className="h-3.5 w-3.5" aria-hidden="true" />
                </button>
              </div> :

            <label className="flex w-full cursor-pointer flex-col items-center justify-center gap-1.5 rounded-md border-2 border-dashed border-slate-300 py-6 transition-colors duration-150 hover:border-primary hover:bg-primary-50/40">
                <UploadCloudIcon className="h-6 w-6 text-primary" aria-hidden="true" />
                <span className="text-[11.5px] text-slate-600">Click to upload a banner image</span>
                <span className="text-[10.5px] text-slate-400">PNG, JPG up to 2MB</span>
                <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => handleImageFile(e.target.files?.[0])} />

              </label>
            }
          </div>

          <label className="block">
            <span className="mb-1 block text-[11.5px] font-semibold text-navy-800">Message</span>
            <textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Banner message shown to students"
              rows={2}
              className="w-full resize-none rounded-md border border-slate-300 px-3 py-2 text-[12.5px] outline-none focus:border-primary" />

          </label>
          <label className="block">
            <span className="mb-1 block text-[11.5px] font-semibold text-navy-800">Link (optional)</span>
            <span className="relative block">
              <LinkIcon className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-400" aria-hidden="true" />
              <input
                type="text"
                value={form.link}
                onChange={(e) => setForm({ ...form, link: e.target.value })}
                placeholder="/plan-pricing"
                className="w-full rounded-md border border-slate-300 py-2 pl-8 pr-3 text-[12.5px] outline-none focus:border-primary" />

            </span>
          </label>

          <div className="grid grid-cols-2 gap-3">
            <label className="block">
              <span className="mb-1 block text-[11.5px] font-semibold text-navy-800">Start Date</span>
              <span className="relative block">
                <CalendarIcon className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-400" aria-hidden="true" />
                <input
                  type="text"
                  value={form.startDate}
                  onChange={(e) => setForm({ ...form, startDate: e.target.value })}
                  placeholder="01 Aug 2026"
                  className="w-full rounded-md border border-slate-300 py-2 pl-8 pr-3 text-[12.5px] outline-none focus:border-primary" />

              </span>
            </label>
            <label className="block">
              <span className="mb-1 block text-[11.5px] font-semibold text-navy-800">End Date</span>
              <span className="relative block">
                <CalendarIcon className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-400" aria-hidden="true" />
                <input
                  type="text"
                  value={form.endDate}
                  onChange={(e) => setForm({ ...form, endDate: e.target.value })}
                  placeholder="31 Aug 2026"
                  className="w-full rounded-md border border-slate-300 py-2 pl-8 pr-3 text-[12.5px] outline-none focus:border-primary" />

              </span>
            </label>
          </div>

          <div>
            <span className="mb-1.5 block text-[11.5px] font-semibold text-navy-800">Banner Color</span>
            <div className="flex flex-wrap gap-2">
              {colorOptions.map((c) =>
              <button
                key={c}
                type="button"
                aria-label={`Color ${c}`}
                aria-pressed={form.color === c}
                onClick={() => setForm({ ...form, color: c })}
                className={`h-7 w-7 rounded-full border-2 transition-transform duration-150 ${
                form.color === c ? 'scale-110 border-navy-800' : 'border-transparent'}`
                }
                style={{ backgroundColor: c }} />

              )}
            </div>
          </div>

          <div>
            <span className="mb-1.5 block text-[11.5px] font-semibold text-navy-800">Status</span>
            <div className="flex gap-2">
              {(['Active', 'Inactive'] as const).map((s) =>
              <button
                key={s}
                type="button"
                onClick={() => setForm({ ...form, status: s })}
                aria-pressed={form.status === s}
                className={`rounded-md border px-4 py-1.5 text-[12px] font-semibold transition-colors duration-150 ${
                form.status === s ?
                s === 'Active' ? 'border-emerald-600 bg-emerald-50 text-emerald-700' : 'border-rose-600 bg-rose-50 text-rose-700' :
                'border-slate-300 text-slate-600 hover:border-primary'}`
                }>

                  {s}
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="mt-5 flex justify-end gap-2.5">
          <button
            type="button"
            onClick={onClose}
            className="rounded-md border border-slate-300 px-4 py-2 text-[12.5px] font-medium text-slate-600 transition-colors duration-150 hover:bg-slate-50">

            Cancel
          </button>
          <button
            type="button"
            disabled={!form.title.trim()}
            onClick={() => form.title.trim() && onSave(form)}
            className="rounded-md bg-primary px-5 py-2 text-[12.5px] font-semibold text-white transition-colors duration-150 hover:bg-primary-700 disabled:cursor-not-allowed disabled:bg-slate-300">

            {initial ? 'Save Changes' : 'Add Banner'}
          </button>
        </div>
      </div>
    </div>);

}

export function FlashBanner() {
  const [banners, setBanners] = useState<Banner[]>(initialBanners);
  const [modal, setModal] = useState<'closed' | 'add' | string>('closed');

  const editing = typeof modal === 'string' && modal !== 'closed' && modal !== 'add' ?
  banners.find((b) => b.id === modal) ?? null :
  null;

  const stats = [
  { icon: ZapIcon, label: 'Total Banners', value: banners.length, color: '#0D6EFD' },
  { icon: CheckCircle2Icon, label: 'Active', value: banners.filter((b) => b.status === 'Active').length, color: '#198754' },
  { icon: PauseCircleIcon, label: 'Inactive', value: banners.filter((b) => b.status === 'Inactive').length, color: '#F59E0B' }];


  const handleSave = (data: Omit<Banner, 'id'>) => {
    if (editing) {
      setBanners((prev) => prev.map((b) => b.id === editing.id ? { ...b, ...data } : b));
    } else {
      setBanners((prev) => [...prev, { ...data, id: `b${Date.now()}` }]);
    }
    setModal('closed');
  };

  const handleDelete = (id: string) => {
    setBanners((prev) => prev.filter((b) => b.id !== id));
  };

  return (
    <AdminLayout searchPlaceholder="Search banners...">
      <div className="mb-4 flex flex-wrap items-start gap-4">
        <div>
          <h2 className="font-display text-[26px] font-bold leading-tight text-navy-800">Flash Banner</h2>
          <p className="text-[12.5px] text-slate-500">
            Create and manage promotional flash banners shown to students across the site.
          </p>
        </div>
        <div className="ml-auto">
          <Breadcrumbs crumbs={[{ label: 'Settings' }, { label: 'Flash Banner' }]} />
        </div>
      </div>

      <div className="mb-4 flex flex-wrap items-stretch gap-4">
        {stats.map((s) =>
        <div
          key={s.label}
          className="flex min-w-[180px] flex-1 items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-card">

            <span
            className="grid h-10 w-10 shrink-0 place-items-center rounded-lg text-white"
            style={{ backgroundColor: s.color }}>

              <s.icon className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <p className="text-[11.5px] text-slate-500">{s.label}</p>
              <p className="font-display text-[22px] font-bold leading-tight text-navy-800">{s.value}</p>
            </div>
          </div>
        )}
        <div className="flex items-center">
          <button
            type="button"
            onClick={() => setModal('add')}
            className="flex items-center gap-1.5 rounded-md bg-primary px-4 py-2.5 text-[12.5px] font-semibold text-white transition-colors duration-150 hover:bg-primary-700">

            <PlusIcon className="h-4 w-4" aria-hidden="true" /> Add New Banner
          </button>
        </div>
      </div>

      <section className="rounded-xl border border-slate-200 bg-white shadow-card">
        {banners.length === 0 ?
        <div className="flex flex-col items-center gap-2 py-14 text-center">
            <ListIcon className="h-8 w-8 text-slate-300" aria-hidden="true" />
            <p className="text-[12.5px] text-slate-500">No flash banners yet. Add one to get started.</p>
          </div> :

        <ul className="divide-y divide-slate-100">
            {banners.map((b) =>
          <li key={b.id} className="flex flex-wrap items-center gap-3 p-4">
                {b.image ?
            <img
              src={b.image}
              alt={b.title}
              className="h-10 w-10 shrink-0 rounded-lg object-cover" /> :


            <span
              className="grid h-10 w-10 shrink-0 place-items-center rounded-lg text-white"
              style={{ backgroundColor: b.color }}>

                    <ZapIcon className="h-5 w-5" aria-hidden="true" />
                  </span>
            }
                <div className="min-w-0 flex-1">
                  <p className="flex items-center gap-2 text-[13px] font-semibold text-navy-800">
                    {b.title}
                    <span
                  className={`rounded px-2 py-[1px] text-[10px] font-semibold ${
                  b.status === 'Active' ? 'bg-emerald-50 text-emerald-700' : 'bg-rose-50 text-rose-700'}`
                  }>

                      {b.status}
                    </span>
                  </p>
                  <p className="truncate text-[11.5px] text-slate-500">{b.message}</p>
                  <p className="mt-0.5 text-[10.5px] text-slate-400">
                    {b.startDate} – {b.endDate}
                    {b.link && <span> · Links to {b.link}</span>}
                  </p>
                </div>
                <div className="flex shrink-0 items-center gap-2">
                  <button
                type="button"
                onClick={() => setModal(b.id)}
                aria-label={`Edit ${b.title}`}
                className="grid h-8 w-8 place-items-center rounded-md border border-slate-300 text-slate-500 transition-colors duration-150 hover:bg-slate-50 hover:text-primary">

                    <PencilIcon className="h-3.5 w-3.5" aria-hidden="true" />
                  </button>
                  <button
                type="button"
                onClick={() => handleDelete(b.id)}
                aria-label={`Delete ${b.title}`}
                className="grid h-8 w-8 place-items-center rounded-md border border-rose-200 text-rose-500 transition-colors duration-150 hover:bg-rose-50">

                    <Trash2Icon className="h-3.5 w-3.5" aria-hidden="true" />
                  </button>
                </div>
              </li>
          )}
          </ul>
        }
      </section>

      {modal !== 'closed' &&
      <BannerFormModal initial={editing} onClose={() => setModal('closed')} onSave={handleSave} />
      }
    </AdminLayout>);

}
