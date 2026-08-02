"use client";

import { PlayerView } from "@/components/player-view";
import { use } from "react";

export default function PlayLatestPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  return <PlayerView kathaId={id} />;
}
