export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 py-6 mt-12">
      <div className="container text-sm text-neutral-400 flex items-center justify-between">
        <div>© {new Date().getFullYear()} Shaik Mohd Ishaq</div>
        <div>ishaqsm007@gmail.com</div>
      </div>
    </footer>
  )
}
