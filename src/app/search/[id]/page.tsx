import React from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card"; // Adjust the import path as necessary
import prisma from "@/lib/db";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";

export default async function Page({ params }: { params: { id: string } }) {
  const org = await prisma.org.findUnique({
    where: {
      id: params.id,
    },
    include: {
      events: true,
    },
  });
  return (
    <>
      <Navbar />
      <div className="relative h-screen w-screen bg-white overflow-x-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none overflow-x-hidden"></div>
        <div className="relative z-10 overflow-x-hidden">
          <div className="flex justify-center items-center mt-16">
            <div className="flex justify-center h-screen mt-8">
              <div className="flex-col">
                <div className="flex items-center justify-center">
                  <h1 className="text-4xl  mb-8 font-bold bg-gradient-to-bl from-[#500000] to-slate-500 bg-clip-text text-transparent">
                    Events
                  </h1>
                </div>
                <ul>
                  {org?.events.map((event) => (
                    <Card className="h-30 mb-8" key={event.id}>
                      <CardHeader>
                        <CardTitle>
                          {event.title} - {event.location}
                        </CardTitle>
                        <CardDescription>
                          {event.date.toString()}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p>{event.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                  <Button
                    className="w-36 border-1 drop-shadow-md font-medium"
                    variant={"secondary"}
                  >
                    Add to My Schedule
                  </Button>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
