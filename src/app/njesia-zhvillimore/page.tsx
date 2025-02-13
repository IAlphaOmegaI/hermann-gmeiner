import type {DevelopmentUnitHead} from "@/actions/types/development-unit-head";
import {unstable_cacheTag as cacheTag} from "next/cache";
import {getPocketBase} from "@/actions/pocketbase";
import type {User} from "@/actions/types/user";

type PopulatedDevelopmentUnitHead = DevelopmentUnitHead & {
    expand: { head: User };
}
export default async () => {
    "use cache";
    cacheTag("development-unit")

    const pb = await getPocketBase();

    const results = await pb.collection("development_units_heads").getList<PopulatedDevelopmentUnitHead>(1, 1000, {
        sort: "rank",
        order: "desc",
        expand: "head",
    });


    const ranks = results.items.reduce<PopulatedDevelopmentUnitHead[][]>((accumulator, item) => {
        const {rank} = item;
        accumulator[rank] ??= [];
        accumulator[rank].push(item);
        return accumulator;
    }, [])


    return (
        <main className={"size-full flex flex-col pt-24 items-center"}>
            {ranks.map((heads, index) => {
                return (
                    // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                    <div key={index} className={"flex gap-4 p-4 w-full justify-center items-center  flex-wrap "}>
                        {heads.map((head) => {
                            return (
                                <div key={head.id}
                                     className={"flex flex-col gap-4 p-4 w-[calc((100%/3)-theme(spacing.4))] max-w-[calc((100%/3)-theme(spacing.4))] min-w-[calc((100%/3)-theme(spacing.4))]"}>
                                    <img src={head.expand.head.image} alt={head.name}
                                         className={"rounded-full w-24 h-24 object-cover"}/>
                                    <h1 className={"text-4xl font-header"}>{head.name}</h1>
                                    <p className={"text-sm"}>{head.description}</p>
                                </div>
                            )
                        })}
                    </div>
                )
            })}
        </main>
    )
}