import Image from "next/image";
import {BannerAnimation} from "@/components/banner-animation";
import {PartnerCarousel} from "@/components/partner-carousel";
import {StatisticsStrip} from "@/components/statistics-strip";
import {AnnouncementsView} from "@/components/announcments-view";
import {UpcomingEvents} from "@/components/upcoming-events";
import {getPaginatedResources} from "@/actions/resources";
import {SplineScene} from "@/components/spline-scene";
import {BannerCarousel} from "@/components/banner-carousel";
import {Suspense} from "react";

export default async () => {
  const resources = await getPaginatedResources();
  return (
    <section
      className={"scrollbar size-full overflow-y-auto overflow-x-hidden"}
    >
      <section className={"relative size-full"}>
        <Image
          src={"/images/background.jpg"}
          alt={"gradient"}
          fill
          className={"opacity-50"}
        />
        <div
          className={"absolute inset-0 "}
          style={{
            background: `
              radial-gradient(circle at bottom center, rgba(191, 219, 254, 0.8) 0%, rgba(244, 114, 182, 0.2) 70%, transparent 100%),
              repeating-linear-gradient(transparent, transparent 39px, rgba(0,0,0,0.2) 39px, rgba(0,0,0,0.2) 41px, transparent 41px),
              repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(0,0,0,0.2) 39px, rgba(0,0,0,0.2) 41px, transparent 41px)
            `,
            maskImage:
              "radial-gradient(circle at bottom center, black 0%, transparent 70%)",
            WebkitMaskImage:
              "radial-gradient(circle at bottom center, black 0%, transparent 70%)",
          }}
        />
        <div
          className={
            "bg-gradient-to-b from-transparent to-white h-1/3 w-full absolute bottom-0 inset-x-0"
          }
        />

        <BannerAnimation
          titleComponent={
            <div className={"flex flex-col items-center"}>
              <h2 className="text-xs md:text-lg font-semibold text-primary">
                Shkolla e mesme profesionale:
              </h2>
              <h1 className="text-6xl md:text-8xl -mt-2 font-semibold text-foreground font-header">
                Hermann Gmeiner
              </h1>
              <h2 className="text-xs md:text-lg  font-semibold text-primary">
                me drejtim Inxhinieri Informatike Softwaresh
              </h2>
            </div>
          }
        >
          <BannerCarousel resources={resources.items} />
        </BannerAnimation>
      </section>
      <section
        className={
          "mt-20 md:mt-44 lg:mt-96 py-[1.5px] bg-border flex flex-wrap gap-[1.5px] *:bg-background"
        }
      >
        <PartnerCarousel />
        <StatisticsStrip />
      </section>
      <Suspense>
        <AnnouncementsView />
      </Suspense>
      <section className={"relative size-full md:mt-24"}>
        <Image
          src={"/images/background.jpg"}
          alt={"gradient"}
          className={"size-full rotate-180 opacity-90"}
          width={1920}
          height={1080}
        />
        <div
          className={"absolute inset-0"}
          style={{
            background: `
              radial-gradient(circle at bottom center, rgba(191, 219, 254, 0.8) 0%, rgba(244, 114, 182, 0.2) 70%, transparent 100%),
              repeating-linear-gradient(transparent, transparent 39px, rgba(0,0,0,0.2) 39px, rgba(0,0,0,0.2) 41px, transparent 41px),
              repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(0,0,0,0.2) 39px, rgba(0,0,0,0.2) 41px, transparent 41px)
            `,
            maskImage:
              "radial-gradient(circle at bottom center, black 0%, transparent 70%)",
            WebkitMaskImage:
              "radial-gradient(circle at bottom center, black 0%, transparent 70%)",
          }}
        />
        <SplineScene
          scene={"https://prod.spline.design/QlrATUcJYh6nKxUv/scene.splinecode"}
          fallback={"/images/globe.png"}
        />
        <div className={"absolute z-50 inset-x-0 bottom-16 px-6 md:px-24"}>
          <h4 className={"text-sm md:text-lg text-white text-shadow shadow-white/40"}>
            Where curiosity meets excellence, and every student's potential is
          </h4>
          <h1
            className={
              "md:-ml-2.5 font-medium text-white text-shadow shadow-white/40 text-5xl md:text-8xl font-header"
            }
          >
            Shkolla 'Hermann Gmeiner'
          </h1>
        </div>

        <div
          className={
            "bg-gradient-to-t  from-transparent to-white h-1/3 w-full absolute top-0 inset-x-0"
          }
        />
      </section>
      {/*<EventsCalendar />*/}


      <Suspense>
      <UpcomingEvents/>
      </Suspense>
    </section>
  );
};
