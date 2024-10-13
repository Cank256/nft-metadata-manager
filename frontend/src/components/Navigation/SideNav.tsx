import Link from "next/link"
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Home,
  Heart,
  HeartHandshake,
  List,
  Search,
  Upload,
  User
} from "lucide-react";

export default function Navigation() {
  const usePathName = usePathname();
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
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4 lg:pt-8 ">
              <Link
                href="/dashboard"
                className={`flex items-center gap-3 rounded-lg px-3 py-2 lg:py-5 text-muted-foreground transition-all hover:text-primary
                ${usePathName === "/dashboard" ? "bg-muted text-primary" : ""}`}
              >
                <Home className="h-6 w-6" />
                Dashboard
              </Link>
              <Link
                href="#"
                className={`flex items-center gap-3 rounded-lg px-3 py-2 lg:py-5 text-muted-foreground transition-all hover:text-primary
                ${usePathName === "/upload" ? "bg-muted text-primary" : ""}`}
              >
                <Upload className="h-6 w-6" />
                Upload NFT
              </Link>
              <Link
                href="#"
                className={`flex items-center gap-3 rounded-lg px-3 py-2 lg:py-5 text-muted-foreground transition-all hover:text-primary
                ${usePathName === "/view" ? "bg-muted text-primary" : ""}`}
              >
                <List className="h-6 w-6" />
                View NFTs
              </Link>
              <Link
                href="#"
                className={`flex items-center gap-3 rounded-lg px-3 py-2 lg:py-5 text-muted-foreground transition-all hover:text-primary
                ${usePathName === "/browse" ? "bg-muted text-primary" : ""}`}
              >
                <Search className="h-6 w-6" />
                Browse NFTs
              </Link>
              <Link
                href="#"
                className={`flex items-center gap-3 rounded-lg px-3 py-2 lg:py-5 text-muted-foreground transition-all hover:text-primary
                ${usePathName === "/favorite" ? "bg-muted text-primary" : ""}`}
              >
                <Heart className="h-6 w-6" />
                Favorites
              </Link>
              <Link
                href="#"
                className={`flex items-center gap-3 rounded-lg px-3 py-2 lg:py-5 text-muted-foreground transition-all hover:text-primary
                ${usePathName === "/profile" ? "bg-muted text-primary" : ""}`}
              >
                <User className="h-6 w-6" />
                Profile
              </Link>
              <Link
                href="/contact"
                className={`flex items-center gap-3 rounded-lg px-3 py-2 lg:py-5 text-muted-foreground transition-all hover:text-primary
                ${usePathName === "/contact" ? "bg-muted text-primary" : ""}`}
              >
                <HeartHandshake className="h-6 w-6" />
                Support
              </Link>
            </nav>
          </div>
        </div>
    </div>
  )
}
