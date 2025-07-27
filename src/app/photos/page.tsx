import { dayzeeData } from "@/data/dayzee";
import ScrapbookGrid from "@/components/ScrapbookGrid";

export default function Photos() {
  return <ScrapbookGrid photos={dayzeeData.photos} />;
}
