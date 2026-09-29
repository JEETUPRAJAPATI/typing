import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeftIcon, InfoIcon, CameraIcon, SendIcon } from 'lucide-react';
import { StudentLayout } from '../../components/student/StudentLayout';

const examPatterns = [
'SSC CGL Typing',
'RRB NTPC Typing',
'Delhi Police HCM Typing',
'English Steno',
'Hindi Steno'];


export function WriteReview() {
  const navigate = useNavigate();
  const [examPattern, setExamPattern] = useState('');
  const [review, setReview] = useState('');

  return (
    <StudentLayout showDownloadApp>
      <div className="mx-auto max-w-2xl">
        <div className="mb-4 flex items-start gap-3">
          <button
            type="button"
            onClick={() => navigate('/my-account')}
            aria-label="Back"
            className="mt-1 grid h-8 w-8 shrink-0 place-items-center rounded-full text-slate-500 transition-colors duration-150 hover:bg-slate-100">

            <ArrowLeftIcon className="h-4 w-4" aria-hidden="true" />
          </button>
          <div>
            <h2 className="font-display text-[20px] font-bold text-navy-800">Write a Review</h2>
            <p className="text-[12.5px] text-slate-500">
              Share your experience and typing progress with the community.
            </p>
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-card">
          <p className="mb-4 flex items-start gap-2.5 rounded-lg bg-violet-50 p-3 text-[12px] text-violet-700">
            <InfoIcon className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
            <span>
              <span className="block font-semibold">Before You Post</span>
              Your review will be verified by an admin before appearing on the homepage. Sharing
              authentic progress motivates others!
            </span>
          </p>

          <label className="mb-4 block">
            <span className="mb-1.5 block text-[12.5px] font-semibold text-navy-800">
              Target Exam Pattern <span className="text-danger">*</span>
            </span>
            <select
              value={examPattern}
              onChange={(e) => setExamPattern(e.target.value)}
              className="w-full rounded-md border border-violet-300 px-3 py-2.5 text-[13px] text-slate-600 outline-none focus:border-violet-500">

              <option value="">Select the main exam you are preparing for...</option>
              {examPatterns.map((p) =>
              <option key={p} value={p}>
                  {p}
                </option>
              )}
            </select>
          </label>

          <div className="mb-4">
            <span className="mb-1.5 block text-[12.5px] font-semibold text-navy-800">
              Add a Photo (Optional)
            </span>
            <button
              type="button"
              className="flex w-full flex-col items-center justify-center gap-1.5 rounded-lg border-2 border-dashed border-slate-300 py-6 transition-colors duration-150 hover:border-primary hover:bg-primary-50/40">

              <CameraIcon className="h-6 w-6 text-slate-400" aria-hidden="true" />
              <span className="text-[12.5px]">
                <span className="font-semibold text-primary">Upload a file</span>
                <span className="text-slate-500"> or drag and drop</span>
              </span>
              <span className="text-[10.5px] text-slate-400">PNG, JPG, GIF up to 5MB</span>
            </button>
          </div>

          <label className="block">
            <span className="mb-1.5 block text-[12.5px] font-semibold text-navy-800">
              Your Review <span className="text-danger">*</span>
            </span>
            <textarea
              rows={4}
              maxLength={500}
              value={review}
              onChange={(e) => setReview(e.target.value)}
              placeholder="How has EzTyping helped your typing speed? Did you clear your exam?"
              className="w-full resize-none rounded-md border border-slate-300 p-3 text-[13px] outline-none focus:border-primary" />

            <span className="mt-1 block text-right text-[11px] text-slate-400">
              {review.length} / 500 characters
            </span>
          </label>

          <div className="mt-4 flex justify-end gap-2.5">
            <button
              type="button"
              onClick={() => navigate('/my-account')}
              className="rounded-md border border-slate-300 bg-white px-5 py-2.5 text-[12.5px] font-medium text-slate-600 transition-colors duration-150 hover:bg-slate-50">

              Cancel
            </button>
            <button
              type="button"
              className="flex items-center gap-2 rounded-md bg-violet-600 px-5 py-2.5 text-[12.5px] font-semibold text-white transition-colors duration-150 hover:bg-violet-700">

              Submit Review <SendIcon className="h-3.5 w-3.5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </StudentLayout>);

}
