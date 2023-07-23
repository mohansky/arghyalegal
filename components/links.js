import Link from "next/link";

export default function Links({href, className, children}) {
  return (
    <Link href={href} className={`text-white hover:text-slate-300 ${className}`}>{children}</Link>
  )
}
