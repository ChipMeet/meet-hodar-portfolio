import type { Metadata } from 'next';
import { SectionHeader } from '@/components/SectionHeader';
import { Timeline } from '@/components/Timeline';

export const metadata: Metadata = {
  title: 'Education',
  description:
    'A timeline of Meet Hodar’s formal education and milestones on the journey toward a career in the semiconductor industry.'
};

const educationItems = [
  {
    title: 'B.Tech in Information and Communication Technology',
    subtitle: 'Institute of Technology, Nirma University · Ahmedabad, India',
    period: '2022 — 2026 (In Progress)',
    description:
      'Focusing on digital system design, computer architecture, FPGA programming, and semiconductor fundamentals. Active member of hardware clubs and VLSI communities; leading workshops on Verilog and HDL tooling.'
  },
  {
    title: 'Higher Secondary Education (Science Stream)',
    subtitle: 'Shree Swaminarayan Gurukul, Gujarat',
    period: '2020 — 2022',
    description:
      'Graduated with distinction while building a strong foundation in physics, mathematics, and computer science. Led the STEM club and facilitated peer-learning sessions in electronics and programming.'
  }
];

const achievements = [
  'Organised hands-on HDL bootcamps introducing classmates to simulation workflows.',
  'Collaborated on open-source FPGA labs to help juniors build their first digital projects.',
  'Participated in national-level hackathons focusing on embedded systems and automation.',
  'Maintained an academic focus on digital electronics, microprocessors, and semiconductor physics.'
];

export default function EducationPage() {
  return (
    <div className="space-y-16 pb-20">
      <section className="section-container space-y-12 pt-16">
        <SectionHeader
          eyebrow="Education"
          title="Learning foundations that power future chips"
          description="My academic journey combines theory, labs, and community building. Every semester is an opportunity to double down on VLSI while supporting peers who share the dream."
        />

        <Timeline items={educationItems} />
      </section>

      <section className="section-container space-y-8">
        <SectionHeader
          eyebrow="Beyond the classroom"
          title="Initiatives and highlights"
          description="Education isn’t limited to credits—these moments shaped my problem-solving approach and accelerated my growth."
        />

        <ul className="grid gap-4 sm:grid-cols-2">
          {achievements.map((achievement) => (
            <li
              key={achievement}
              className="glass-card flex items-start gap-3 px-6 py-4 text-sm text-slate-200"
            >
              <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-brand-primary" />
              {achievement}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

