import ChatWindow from "@/components/Chatwindow";
import Navbar from "@/components/Navbar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import prisma from "@/lib/db";

export default async function Home() {
  const schedules = await prisma.schedule.findMany({
    include: {
      events: true, // Include related events
    },
  });

  return (
    <>
      <Navbar />
      <div className="relative h-screen w-screen bg-white overflow-x-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none overflow-x-hidden"></div>
        <div className="relative z-10 overflow-x-hidden">
          <div className="max-w-screen h-40 flex overflow-x-hidden">
            <h1 className="font-extrabold flex items-center mx-auto text-4xl overflow-x-hidden bg-gradient-to-bl from-[#500000] to-slate-500 bg-clip-text text-transparent">
              This week
            </h1>
          </div>
          {/* Daily, Weekly, Monthly */}
          {/* Carousel */}
          {/* Events */}
          <div className="max-w-screen h-full overflow-x-hidden">
            <ul className="px-60">
              {schedules.map((schedule) => (
                <ul>
                  {schedule.events.map((event) => (
                    <li key={event.id}>
                      <Card className="h-40 mb-8">
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
                    </li>
                  ))}
                </ul>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <ChatWindow />
    </>
  );
}
