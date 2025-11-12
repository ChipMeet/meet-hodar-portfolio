type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <div className="space-y-3">
      {eyebrow ? (
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-blue-200">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="text-3xl font-semibold text-white md:text-[2.3rem] md:leading-[1.1]">
        {title}
      </h2>
      {description ? <p className="max-w-2xl text-slate-300">{description}</p> : null}
    </div>
  );
}

