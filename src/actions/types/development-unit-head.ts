import type {SystemFields} from "@/actions/types/utilities/system-fields";

export type DevelopmentUnitHead = SystemFields & {
    name: string;
    head: string;
    description: string;
    rank: number;
};