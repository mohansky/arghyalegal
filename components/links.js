import Link from "next/link";

export default function Links({href, className, children}) {
  return (
    <Link href={href} className={`text-gray-900 hover:text-gray-600 ${className}`}>{children}</Link>
  )
}
