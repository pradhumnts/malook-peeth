"use client";

import { PlayerView } from "@/components/player-view";
import { use } from "react";

export default function PlayEpisodePage({
  params,
}: {
  params: Promise<{ id: string; episodeId: string }>;
}) {
  const { id, episodeId } = use(params);
  return <PlayerView kathaId={id} episodeId={episodeId} />;
}
