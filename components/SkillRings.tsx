"use client";

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

type SkillRingProps = {
  label: string;
  value: number;
};

const rings: SkillRingProps[] = [
  { label: 'Leadership', value: 82 },
  { label: 'Teamwork', value: 88 },
  { label: 'Hard Work', value: 95 }
];

export function SkillRings() {
  return (
    <div className="grid gap-6 sm:grid-cols-3">
      {rings.map((ring) => (
        <div
          key={ring.label}
          className="glass-card flex flex-col items-center gap-4 p-6 text-center"
        >
          <CircularProgressbar
            value={ring.value}
            text={`${ring.value}%`}
            strokeWidth={10}
            styles={buildStyles({
              textColor: '#E2E8F0',
              pathColor: '#2563EB',
              trailColor: 'rgba(255,255,255,0.08)',
              textSize: '16px'
            })}
          />
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-200">
            {ring.label}
          </p>
        </div>
      ))}
    </div>
  );
}

