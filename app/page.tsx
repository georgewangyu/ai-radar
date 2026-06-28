import { AiRadarApp } from "./ai-radar-app";
import { papers } from "@/lib/papers";

export default function Home() {
  return <AiRadarApp papers={papers} />;
}

