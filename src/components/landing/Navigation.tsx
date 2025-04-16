import { Info, HelpCircle, Mail } from "lucide-react";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
export default function Navigation() {
  const items = [{
    label: "About",
    icon: Info,
    href: "/about"
  }, {
    label: "FAQ",
    icon: HelpCircle,
    href: "/faq"
  }, {
    label: "Contact",
    icon: Mail,
    href: "/contact"
  }];
  return <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Link to="/" className="mr-6 flex items-center space-x-2">
          <img src="/lovable-uploads/02dff0ff-51ba-424a-a7dc-b196577fab72.png" alt="Logo" className="h-6 w-6" />
          <span className="font-medium">TradeTools.AI</span>
        </Link>
        <NavigationMenu>
          <NavigationMenuList>
            {items.map(item => <NavigationMenuItem key={item.label}>
                <NavigationMenuLink asChild className={cn("group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50")}>
                  <Link to={item.href}>
                    <item.icon className="mr-2 h-4 w-4" />
                    {item.label}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>)}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>;
}