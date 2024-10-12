import Link from "next/link"
import Image from "next/image";
import {
  Home,
  Heart,
  List,
  Search,
  Upload,
  User
} from "lucide-react"

export const description =
  "A products dashboard with a sidebar navigation and a main content area. The dashboard has a header with a search input and a user menu. The sidebar has a logo, navigation links, and a card with a call to action. The main content area shows an empty state with a call to action."

export default function Navigation() {
  return (
    <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link
                href="/"
                className="header-logo block w-ful">
                <Image
                  src="/images/logo/logo-2.svg"
                  alt="logo"
                  width={140}
                  height={30}
                  className="w-full dark:hidden"
                />
                <Image
                  src="/images/logo/logo.svg"
                  alt="logo"
                  width={140}
                  height={30}
                  className="hidden w-full dark:block"
                />
              </Link>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 lg:pt-8 lg:py-5 text-muted-foreground transition-all hover:text-primary"
              >
                <Home className="h-6 w-6" />
                Dashboard
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 lg:py-5 text-muted-foreground transition-all hover:text-primary"
              >
                <Upload className="h-6 w-6" />
                Upload NFT
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 lg:py-5 text-primary transition-all hover:text-primary"
              >
                <List className="h-6 w-6" />
                View NFTs
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 lg:py-5 text-muted-foreground transition-all hover:text-primary"
              >
                <Search className="h-6 w-6" />
                Browse NFTs
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 lg:py-5 text-muted-foreground transition-all hover:text-primary"
              >
                <Heart className="h-6 w-6" />
                Favorites
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 lg:py-5 text-muted-foreground transition-all hover:text-primary"
              >
                <User className="h-6 w-6" />
                Profile
              </Link>
            </nav>
          </div>
        </div>
    </div>
  )
}
