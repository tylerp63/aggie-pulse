"use client";

import React from "react";
import { buttonVariants } from "./ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Head from "next/head";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="flex">
      <div className="min-w-1/3 h-16 flex  items-center">
        <div
          className="font-extrabold text-2xl px-10
        "
        >
          <Link href="/">
            <h1 className="bg-gradient-to-bl from-[#500000] to-slate-500 bg-clip-text text-transparent">
              aggieAgenda
            </h1>
          </Link>
        </div>
      </div>
      <div className="min-w-1/3 h-16 flex items-center justify-center ">
        <div className="font-normal text-l px-10">
          <Link href="/dashboard" className="text-slate-600">
            Dashboard
          </Link>
        </div>
        <div className="font-normal text-l px-10">
          <Link href="/search" className="text-slate-600">
            Search
          </Link>
        </div>
      </div>
      <div className="min-w-1/3"></div>
    </div>
  );
}
