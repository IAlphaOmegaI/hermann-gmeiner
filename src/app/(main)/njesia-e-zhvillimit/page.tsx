import type { DevelopmentUnitHead } from "@/actions/types/development-unit-head";
import { unstable_cacheTag as cacheTag } from "next/cache";
import { getPocketBase } from "@/actions/pocketbase";
import type { User } from "@/actions/types/user";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type PopulatedDevelopmentUnitHead = DevelopmentUnitHead & {
  expand: { head: User };
};
export default async () => {
  "use cache";
  cacheTag("development-unit");

  const pb = await getPocketBase();

  const results = await pb
    .collection("development_units_heads")
    .getList<PopulatedDevelopmentUnitHead>(1, 1000, {
      sort: "rank",
      order: "desc",
      expand: "head",
    });

  return (
    <main className={"size-full"}>
      <h1 className={"text-3xl md:text-5xl font-header font-semibold"}>
        Njesia e Zhvillimit
      </h1>
      <Separator className="mb-2" />
      <p>
        Njësia e zhvillimit është një proces i vazhdueshëm që fokusohet në
        përmirësimin e cilësisë dhe eficiencës së arsimit dhe trajnimit
        profesional që ofrohet. Ajo synon të ofrojë mundësi për zhvillimin e
        mësimdhënësve, nxënësve dhe infrastrukturës së shkollës, në mënyrë që
        shkolla të mund të përgatitë më mirë nxënësit për tregun e punës. Ky
        koncept përfshin disa aspekte, të tilla si: Përmirësimi i cilësisë së
        mësimdhënies Përshtatja e programeve mësimore Bashkëpunimi me bizneset
        dhe institucionet e tjera
      </p>
      <section className="flex flex-wrap gap-4 mt-8">
        {results.items.map((item) => {
          return (
            <div
              key={item.id}
              className="flex flex-col rounded-lg border border-border w-[calc(100%/3-(theme(spacing.3)))] p-4"
            >
              <h2 className="text-2xl font-header mb-2">{item.name}</h2>
              <Separator className="mb-2" />
              <h3 className="text-lg font-header mb-2 flex gap-2 items-center">
                <Avatar className="w-10 h-10">
                  <AvatarImage src={item.expand.head.image} />
                  <AvatarFallback>
                    {item.expand.head.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                {item.expand.head.name}
              </h3>
              <Separator className="mb-2" />
              <p>{item.description}</p>
            </div>
          );
        })}
      </section>
    </main>
  );
};
