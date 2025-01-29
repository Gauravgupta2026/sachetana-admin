import Link from "next/link"
import { Button } from "@/components/ui/button"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold text-[#00584D]">Sectretana</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="#" className="text-sm font-medium">
            Product
          </Link>
          <Link href="#" className="text-sm font-medium">
            Community
          </Link>
          <Link href="#" className="text-sm font-medium">
            Pricing
          </Link>
          <Link href="#" className="text-sm font-medium">
            Download
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Link href="#" className="text-sm font-medium">
            Login
          </Link>
          <Button className="bg-[#00584D] hover:bg-[#00584D]/90">Sign Up</Button>
        </div>
      </div>
    </header>
  )
}

