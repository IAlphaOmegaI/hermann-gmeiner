import type {LayoutProps} from "@/types/navigation";
import {Suspense} from "react";

export default ({children}: LayoutProps) => {
    return <Suspense fallback={null}>{children}</Suspense>
}