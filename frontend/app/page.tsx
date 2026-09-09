import { getCVSource } from "@/lib/cms";
import { HomeScreen } from "@/components/HomeScreen";

export default async function Home() {
  const cms = getCVSource();
  const cv = await cms.getCVContent();

  return <HomeScreen cv={cv} />;
}