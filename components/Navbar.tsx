import React from "react";
import Link from "next/link";
import Image from "next/image";
import NavItems from "./NavItems"; // Use relative
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button"; // Use shadcn/ui Button

const Navbar = () => {
  return (
    <nav className="navbar flex items-center justify-between">
      <Link href="/">
        <div className="flex items-center gap-2.5 cursor-pointer">
          <Image src="/images/logo.svg" alt="logo" width={46} height={44} />
        </div>
      </Link>

      <div className="flex items-center gap-8 p-3">
        <NavItems />
        <SignedOut>
          <SignInButton>
            <button className="btn-signin border-black border rounded-full p-2">
              Sign In
            </button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
      </div>
    </nav>
  );
};

export default Navbar;
