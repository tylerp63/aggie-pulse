import Navbar from "@/components/Navbar";
import React from "react";
import { Input } from "@/components/ui/input";
import prisma from "@/lib/db";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default async function Search() {
  const orgs = await prisma.org.findMany();
  return (
    <>
      <Navbar />
      <div className="relative h-screen w-screen bg-white overflow-x-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none overflow-x-hidden"></div>
        <div className="relative z-10 overflow-x-hidden">
          <div className="flex justify-center items-center mt-16">
            <h1 className="text-4xl  mb-8 font-bold bg-gradient-to-bl from-[#500000] to-slate-500 bg-clip-text text-transparent">
              Find orgs...
            </h1>
          </div>
          <div className="max-w-screen h-full">
            <ul className="px-60">
              {orgs.map((org) => (
                <Link href={`/search/${org.id}`}>
                  <Card className="h-30 mb-4">
                    <CardHeader>
                      <CardTitle>{org.name}</CardTitle>
                      <CardDescription>{org.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
