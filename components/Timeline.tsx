type Item = {
  title: string
  detail?: string
}

export default function Timeline({ items }: { items: Item[] }) {
  return (
    <ol className="relative ml-2 border-l border-neutral-800">
      {items.map((item, index) => {
        const isLast = index === items.length - 1

        return (
          <li
            key={`${item.title}-${index}`}
            className={`relative pl-7 ${
              isLast ? '' : 'pb-7'
            }`}
          >
            {/* Timeline marker */}
            <span
              className="absolute -left-[7px] top-1 flex h-3.5 w-3.5 items-center justify-center rounded-full border border-violet-500/50 bg-neutral-950"
              aria-hidden="true"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
            </span>

            {/* Timeline content */}
            <div className="rounded-lg border border-neutral-800 bg-neutral-900/30 p-4 transition duration-200 hover:border-violet-500/30 hover:bg-neutral-900/50">
              <p className="text-sm font-semibold text-white md:text-base">
                {item.title}
              </p>

              {item.detail && (
                <p className="mt-1.5 text-sm leading-6 text-neutral-400">
                  {item.detail}
                </p>
              )}
            </div>
          </li>
        )
      })}
    </ol>
  )
}