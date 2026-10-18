import CityOnlinePage, { getCityOnlineMetadata } from "@/app/components/landing/CityOnlinePage";

export const metadata = getCityOnlineMetadata("medellin");

export default function Page() {
  return <CityOnlinePage cityKey="medellin" />;
}
