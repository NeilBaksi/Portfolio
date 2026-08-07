"use client";

import { Suspense } from "react";
import dynamic from "next/dynamic";
import { LoadingProvider } from "../src/context/LoadingProvider";
import MainContainer from "../src/components/MainContainer";

const CharacterModel = dynamic(
  () => import("../src/components/Character"),
  { ssr: false }
);

export default function Home() {
  return (
    <LoadingProvider>
      <Suspense fallback={null}>
        <MainContainer>
          <Suspense fallback={null}>
            <CharacterModel />
          </Suspense>
        </MainContainer>
      </Suspense>
    </LoadingProvider>
  );
}
