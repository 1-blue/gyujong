import {
  Button,
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "#/components/ui";
import { ROUTES } from "#/constants/routes";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const Aside: React.FC = () => {
  return (
    <aside className="lg:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <HamburgerMenuIcon />
          </Button>
        </SheetTrigger>
        <SheetContent className="p-0">
          <SheetHeader>
            <Link
              href="/login"
              className="flex justify-between bg-primary p-4 text-white"
            >
              <span>로그인이 필요합니다.</span>
              <span>로그인</span>
            </Link>
          </SheetHeader>

          <ul className="flex flex-1 flex-col justify-center text-sm">
            {ROUTES.map((route) => (
              <SheetClose asChild key={route.path}>
                <Link href={route.path} target={route.target} className="p-4">
                  {route.label}
                </Link>
              </SheetClose>
            ))}
          </ul>
        </SheetContent>
      </Sheet>
    </aside>
  );
};

export default Aside;
