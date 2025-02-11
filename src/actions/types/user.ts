import type {SystemFields} from "@/actions/types/utilities/system-fields";

export type User = SystemFields & {
    image: string;
    username: string;
    bio: string;
    name: string;
    email: string;
}