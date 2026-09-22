type Props = {
  title: string
  children?: React.ReactNode
}

export default function CalloutCard({ title, children }: Props) {
  return (
    <div className="p-4 bg-neutral-800 rounded-md border border-neutral-800 shadow-sm focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-accent">
      <h4 className="font-semibold">{title}</h4>
      <div className="text-neutral-300 mt-2">{children}</div>
    </div>
  )
}
