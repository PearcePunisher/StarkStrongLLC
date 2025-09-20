'use client';
import { useState } from 'react';

interface FormDataState { name: string; phone: string; service: string; otherService: string; message: string; status: 'idle' | 'submitting' | 'success' | 'error'; }

export function LeadForm() {
  const [form, setForm] = useState<FormDataState>({ name: '', phone: '', service: '', otherService: '', message: '', status: 'idle' });

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setForm(f => ({ ...f, status: 'submitting' }));
    try {
  const serviceValue = form.service === 'Other' && form.otherService.trim() ? form.otherService.trim() : form.service;
  const res = await fetch('/api/lead', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name: form.name, phone: form.phone, service: serviceValue, message: form.message }) });
      if (!res.ok) throw new Error('Request failed');
  setForm({ name: '', phone: '', service: '', otherService: '', message: '', status: 'success' });
    } catch (err) {
      setForm(f => ({ ...f, status: 'error' }));
    }
  }

  return (
  <form onSubmit={onSubmit} className="space-y-4 rounded-lg border border-neutral-200 bg-white p-6 shadow-sm dark:bg-[color:var(--color-surface)] dark:border-neutral-700">
      <div className="space-y-1">
  <label className="text-sm font-medium text-neutral-800 dark:text-neutral-200">Name</label>
  <input required value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent/30 dark:bg-[color:var(--color-surface-alt)] dark:border-neutral-600 dark:text-neutral-100" />
      </div>
      <div className="space-y-1">
  <label className="text-sm font-medium text-neutral-800 dark:text-neutral-200">Phone</label>
  <input required value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent/30 dark:bg-[color:var(--color-surface-alt)] dark:border-neutral-600 dark:text-neutral-100" />
      </div>
      <div className="space-y-1">
  <label className="text-sm font-medium text-neutral-800 dark:text-neutral-200">Service Needed</label>
  <select value={form.service} onChange={e => setForm(f => ({ ...f, service: e.target.value }))} className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent/30 dark:bg-[color:var(--color-surface-alt)] dark:border-neutral-600 dark:text-neutral-100">
          <option value="">Select...</option>
          <option>Junk Removal</option>
          <option>Hauling</option>
          <option>Recycling</option>
          <option>House Cleaning</option>
          <option>Other</option>
        </select>
      {form.service === 'Other' && (
        <div className="space-y-1">
          <label className="text-sm font-medium text-neutral-800 dark:text-neutral-200">Please Describe Service</label>
          <input required value={form.otherService} onChange={e => setForm(f => ({ ...f, otherService: e.target.value }))} className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent/30 dark:bg-[color:var(--color-surface-alt)] dark:border-neutral-600 dark:text-neutral-100" />
        </div>
      )}
      </div>
      <div className="space-y-1">
  <label className="text-sm font-medium text-neutral-800 dark:text-neutral-200">Message</label>
  <textarea value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} rows={4} className="w-full resize-none rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent/30 dark:bg-[color:var(--color-surface-alt)] dark:border-neutral-600 dark:text-neutral-100" />
      </div>
      <button type="submit" disabled={form.status === 'submitting'} className="btn-primary w-full">
        {form.status === 'submitting' ? 'Sending...' : 'Send Message'}
      </button>
      {form.status === 'success' && <p className="text-sm text-green-600">Message sent. We will reach out soon.</p>}
      {form.status === 'error' && <p className="text-sm text-red-600">Something went wrong. Please call or text.</p>}
    </form>
  );
}
