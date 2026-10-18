import CityOnlinePage, { getCityOnlineMetadata } from "@/app/components/landing/CityOnlinePage";

export const metadata = getCityOnlineMetadata("pereira");

export default function Page() {
  return <CityOnlinePage cityKey="pereira" />;
}
