import CityOnlinePage, { getCityOnlineMetadata } from "@/app/components/landing/CityOnlinePage";

export const metadata = getCityOnlineMetadata("armenia");

export default function Page() {
  return <CityOnlinePage cityKey="armenia" />;
}
