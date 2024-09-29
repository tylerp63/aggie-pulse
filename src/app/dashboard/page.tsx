import Navbar from "@/components/Navbar";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import prisma from "@/lib/db";

export default async function Home() {
  const events = await prisma.event.findMany();

  return (
    <>
      <Navbar />
      {/* Picker for day, week, month */}
      <div className="max-w-screen h-40 flex">
        <h1 className="flex items-center mx-auto text-2xl"> Week </h1>
      </div>
      {/* Daily, Weekly, Monthly */}
      {/* Carousel */}
      <Carousel>
        <CarouselContent>
          <CarouselItem>
            {/* Events */}
            <div className="max-w-screenh-full">
              <ul className="px-60">
                {events.map((event) => (
                  <Card className="h-40 mb-8">
                    <CardHeader>
                      <CardTitle>
                        {event.title} - {event.location}
                      </CardTitle>
                      <CardDescription>{event.date.toString()}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>{event.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </ul>
            </div>
          </CarouselItem>
          <CarouselItem>...</CarouselItem>
          <CarouselItem>...</CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
}
