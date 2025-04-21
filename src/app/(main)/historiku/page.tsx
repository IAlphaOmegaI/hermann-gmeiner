import { Separator } from "@/components/ui/separator";
import Image from "next/image";
export default async () => {
  return (
    <main className={"flex flex-col gap-2 max-w-[80ch] mx-auto"}>
      <div className={" gap-2 flex flex-col w-full"}>
        <h1 className={"text-3xl md:text-5xl font-header font-semibold"}>
          Historiku
        </h1>
      </div>
      <Separator className="mb-2" />
      <section
        className={"relative prose lg:prose-xl dark:prose-invert"}
        // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
        dangerouslySetInnerHTML={{
          __html: `Shkolla TIK “HERMANN GMEINER”e hapur në shtator 2014, perfaqeson gjeneratën e re  në fushën e IT, përkatësisht të programimit.
        Shkolla është e përfshirë në aktivitete profesionale dhe arsimore-trajnuese që lidhen me sektorin e Inxhinierisë së Softuerit Kompjuterik. Shkolla ka një infrastrukturë moderne, me mjedise shumë të mira strukturore dhe të përshtatshme për zhvillimin cilësor të procesit mësimor-arsimor, e pajisur me laboratorë dhe mjete moderne didaktike, me sisteme ngrohje qendrore, me ambiente për aktivitete të larmishme sportive dhe social-kulturore. Stafi pedagogjik është i përbërë nga specialistë me përvojë dhe të kualifikuar në lëndët profesionale dhe i trajnuar vazhdimisht për t'u përditësuar me teknologjinë më të fundit në fushën e TIK-ut. Programet e Shkollës TIK bazohen në modelin dhe profilin e shkollës austriake, për përgatitjen e programuesve në Informatikë. Gjatë viteve, shkolla ka zhvilluar partneritete me donatorë të ndryshëm dhe pjesëmarrje në projekte rajonale dhe evropiane si dhe konkurse.`,
        }}
      />
      <Image
        src="/images/history.jpg"
        alt="Historiku"
        className="rounded-lg"
        width={1000}
        height={1000}
      />
    </main>
  );
};
