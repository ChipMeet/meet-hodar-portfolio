type TimelineItem = {
  title: string;
  subtitle?: string;
  period: string;
  description: string;
};

type TimelineProps = {
  items: TimelineItem[];
};

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative pl-6">
      <span className="absolute left-2 top-0 h-full w-[2px] bg-gradient-to-b from-blue-500/60 via-white/10 to-transparent" />
      <ul className="space-y-10">
        {items.map((item) => (
          <li key={item.title} className="relative pl-6">
            <span className="absolute left-[-6px] top-1 h-3 w-3 rounded-full border border-white/40 bg-blue-400 shadow-[0_0_12px_rgba(37,99,235,0.7)]" />
            <div className="glass-card space-y-3 p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-blue-200">
                {item.period}
              </p>
              <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
              {item.subtitle ? (
                <p className="text-sm text-blue-200">{item.subtitle}</p>
              ) : null}
              <p className="text-sm text-slate-300">{item.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

