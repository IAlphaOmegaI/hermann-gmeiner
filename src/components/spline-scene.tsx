"use client";
import Image from "next/image";
import { Suspense, lazy } from "react";

const Spline = lazy(() => import("@splinetool/react-spline"));

export type SplineSceneProps = {
  scene: string;
  fallback: string;
};
export const SplineScene = ({ scene, fallback }: SplineSceneProps) => {
  return (
    <Suspense
      fallback={
        <Image
          src={fallback}
          alt="Loading Spline Scene"
          fill
          className="object-cover"
        />
      }
    >
      <Spline scene={scene} className="absolute top-0 left-0 z-10 size-full">
        <Image
          src={fallback}
          alt="Loading Spline Scene"
          fill
          className="object-cover"
        />
      </Spline>
    </Suspense>
  );
};
