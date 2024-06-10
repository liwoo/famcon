import { Link } from "@remix-run/react"
import { LucideIcon } from "lucide-react"

interface NavItemProps {
  label: string
  href: string
  icon: LucideIcon
}

export const NavItem = ({label, href, icon: Icon }: NavItemProps) => {
  return (
    <Link
      to={href}
      className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
    >
      <Icon className="h-4 w-4" />
      {label}
    </Link>
  )
}
