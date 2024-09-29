"use client";

import React from "react";
import { buttonVariants } from "./ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Head from "next/head";

export default function Navbar() {
  return (
    <div className="flex">
      <div className="min-w-1/3 h-16 flex  items-center">
        <div
          className="font-bold text-2xl px-10
        "
        >
          <Link href="/">maroonMeetup</Link>
        </div>
      </div>
      <div className="min-w-1/3 h-16 flex items-center justify-center ">
        <div className="font-normal text-l px-10">
          <Link href="/dashboard">Dashboard</Link>
        </div>
        <div className="font-normal text-l px-10">
          <Link href="/search">Search</Link>
        </div>
      </div>
      <div className="min-w-1/3"></div>
    </div>
  );
}
