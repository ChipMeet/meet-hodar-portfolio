"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { z } from 'zod';
import { contactInputSchema } from '@/lib/validators';
import { Button } from '@/components/ui/button';

type FormState = 'idle' | 'submitting' | 'success' | 'error';

type FormErrors = Partial<Record<'name' | 'email' | 'message', string>>;

/**
 * Client-side contact form that validates inputs with Zod and persists messages via API route.
 */
export function ContactForm() {
  const [formState, setFormState] = useState<FormState>('idle');
  const [errors, setErrors] = useState<FormErrors>({});
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormState('submitting');
    setErrors({});

    const parseResult = contactInputSchema.safeParse(formData);
    if (!parseResult.success) {
      const fieldErrors: FormErrors = {};
      const flattened = parseResult.error.flatten();
      if (flattened.fieldErrors.name?.[0]) {
        fieldErrors.name = flattened.fieldErrors.name[0];
      }
      if (flattened.fieldErrors.email?.[0]) {
        fieldErrors.email = flattened.fieldErrors.email[0];
      }
      if (flattened.fieldErrors.message?.[0]) {
        fieldErrors.message = flattened.fieldErrors.message[0];
      }

      setErrors(fieldErrors);
      setFormState('error');
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(parseResult.data)
      });

      if (!response.ok) {
        throw new Error('Request failed');
      }

      setFormState('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Failed to submit contact form', error);
      setFormState('error');
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="glass-card space-y-6 p-8"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <label
            htmlFor="name"
            className="text-sm font-medium text-slate-200"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your full name"
            className="h-12 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-sm text-slate-100 outline-none transition-colors placeholder:text-slate-500 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/30"
          />
          {errors.name ? (
            <p className="text-xs text-red-500">{errors.name}</p>
          ) : null}
        </div>

        <div className="space-y-2">
          <label
            htmlFor="email"
            className="text-sm font-medium text-slate-200"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="name@company.com"
            className="h-12 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-sm text-slate-100 outline-none transition-colors placeholder:text-slate-500 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/30"
          />
          {errors.email ? (
            <p className="text-xs text-red-500">{errors.email}</p>
          ) : null}
        </div>
      </div>

      <div className="space-y-2">
        <label
          htmlFor="message"
          className="text-sm font-medium text-slate-700 dark:text-slate-200"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          placeholder="Tell me about your project or collaboration idea..."
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-100 outline-none transition-colors placeholder:text-slate-500 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/30"
        />
        {errors.message ? (
          <p className="text-xs text-red-500">{errors.message}</p>
        ) : null}
      </div>

      <div className="flex items-center justify-between">
        <p className="text-xs text-slate-400">
          Your message will be stored securely so I can respond quickly. No spam ever.
        </p>
        <Button
          type="submit"
          disabled={formState === 'submitting'}
          className="min-w-[160px]"
        >
          {formState === 'submitting' ? 'Sending...' : 'Send Message'}
        </Button>
      </div>

      {formState === 'success' ? (
        <div className="rounded-lg border border-green-500/30 bg-green-500/10 px-4 py-3 text-sm text-green-300">
          Thanks for reaching out! I’ll get back to you shortly.
        </div>
      ) : null}

      {formState === 'error' && Object.keys(errors).length === 0 ? (
        <div className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
          Something went wrong while submitting. Please try again in a moment.
        </div>
      ) : null}
    </motion.form>
  );
}

