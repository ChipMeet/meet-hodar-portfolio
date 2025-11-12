import { ReactNode } from 'react';

type SkillCardProps = {
  title: string;
  description: string;
  icon: ReactNode;
};

export function SkillCard({ title, description, icon }: SkillCardProps) {
  return (
    <div className="glass-card flex flex-col gap-4 p-6 transition-transform hover:-translate-y-1 hover:shadow-glow">
      <div className="flex items-center gap-3">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-blue-200">
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
      </div>
      <p className="text-sm text-slate-300">{description}</p>
    </div>
  );
}

