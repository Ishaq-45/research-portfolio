type Item = { title: string; detail?: string }

export default function Timeline({ items }: { items: Item[] }) {
  return (
    <ol className="border-l border-neutral-800 pl-4">
      {items.map((it, i) => (
        <li key={i} className="mb-4 ml-4">
          <div className="-ml-6 inline-block w-3 h-3 rounded-full bg-accent" aria-hidden />
          <div className="inline-block align-top ml-3">
            <div className="font-medium">{it.title}</div>
            {it.detail && <div className="text-sm text-neutral-400">{it.detail}</div>}
          </div>
        </li>
      ))}
    </ol>
  )
}
