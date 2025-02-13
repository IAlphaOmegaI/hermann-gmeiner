import type {SystemFields} from "@/actions/types/utilities/system-fields";
import type {User} from "@/actions/types/user";

export type DevelopmentUnitHead = SystemFields & {
    name: string;
    head: string;
    description: string;
    rank: number;
};