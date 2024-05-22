"use client";

import { UserButton, useAuth } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import Link from "next/link";
import { isTeacher } from "@/lib/teacher";
import { SearchInput } from "./search-input";

export const NavbarRoutes = () => {
  const pathname = usePathname();
  const { userId } = useAuth();

  const isTeacherPage = pathname?.startsWith("/teacher");
  const isPlayerPage = pathname?.includes("/chapter");
  const isCoursePage = pathname?.includes("/courses");
  const isSearchPage = pathname === "/search";

  return (
    <div className="flex gap-x-2 ml-auto">
      {isSearchPage && (
        <div className="hidden md:block">
          <SearchInput />
        </div>
      )}
      {isTeacherPage || isPlayerPage ? (
        <Link href="/">
          <Button size="sm" variant="ghost">
            <LogOut className="h-4 w-4 mr-2" />
            Exit
          </Button>
        </Link>
      ) : isTeacher(userId) ? (
        <Link href="/teacher/courses">
          <Button size="sm" variant="ghost">
            Teacher mode
          </Button>
        </Link>
      ) : null}
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};
