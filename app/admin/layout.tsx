import type { Metadata } from "next";
import { Providers } from "../providers";
import AdminLayoutClient from "./AdminLayoutClient";

export const metadata: Metadata = {
  title: "Panel administrativo",
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <Providers>
      <AdminLayoutClient>{children}</AdminLayoutClient>
    </Providers>
  );
}
