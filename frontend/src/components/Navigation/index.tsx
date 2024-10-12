import TopNav from "@/components/Navigation/TopNav"
import SideNav from "@/components/Navigation/SideNav"

export const description =
  "A products dashboard with a sidebar navigation and a main content area. The dashboard has a header with a search input and a user menu. The sidebar has a logo, navigation links, and a card with a call to action. The main content area shows an empty state with a call to action."

export default function Navigation({
  children,
}: {
  readonly children: React.ReactNode;
})
{
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <SideNav />
      <div className="flex flex-col">
        <TopNav />
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
        {children}
        </main>
      </div>
    </div>
  )
}
