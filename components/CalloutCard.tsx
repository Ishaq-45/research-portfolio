type Props = {
  title: string
  children?: React.ReactNode
}

export default function CalloutCard({ title, children }: Props) {
  return (
    <section
      className="group rounded-lg border border-neutral-800 bg-neutral-900/45 p-5 transition duration-200 hover:border-violet-500/30 hover:bg-neutral-900/65 focus-within:border-violet-500/50 focus-within:ring-1 focus-within:ring-violet-500/30"
      aria-labelledby={`callout-${title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '')}`}
    >
      <div className="flex items-start gap-3">
        <span
          className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400 transition duration-200 group-hover:scale-125"
          aria-hidden="true"
        />

        <div className="min-w-0 flex-1">
          <h3
            id={`callout-${title
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, '-')
              .replace(/^-|-$/g, '')}`}
            className="text-sm font-semibold text-white md:text-base"
          >
            {title}
          </h3>

          <div className="mt-2 text-sm leading-6 text-neutral-300">
            {children}
          </div>
        </div>
      </div>
    </section>
  )
}