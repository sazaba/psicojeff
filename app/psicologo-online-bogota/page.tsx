import CityOnlinePage, { getCityOnlineMetadata } from "@/app/components/landing/CityOnlinePage";

export const metadata = getCityOnlineMetadata("bogota");

export default function Page() {
  return <CityOnlinePage cityKey="bogota" />;
}
