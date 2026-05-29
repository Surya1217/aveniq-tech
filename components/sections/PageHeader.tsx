type Props = {
  title: string;
  subtitle: string;
};

export default function PageHeader({
  title,
  subtitle,
}: Props) {
  return (
    <section className="relative overflow-hidden border-b border-white/10 py-32">
      <div className="absolute left-0 top-0 h-[300px] w-[300px] bg-cyan-500/20 blur-[100px]" />

      <div className="container-custom relative z-10">
        <div className="max-w-4xl">
          <p className="mb-4 text-cyan-400">
            Aveniq Tech LTD
          </p>

          <h1 className="text-5xl font-bold md:text-7xl">
            {title}
          </h1>

          <p className="mt-8 max-w-2xl text-xl leading-8 text-slate-400">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}