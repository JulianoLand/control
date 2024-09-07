import type { Metadata } from "next";
import "../globals.css";
import TopBar from "@/components/layout/TopBar";

import { ClerkProvider } from "@clerk/nextjs";


export const metadata: Metadata = {
  title: "Controle",
  description: "Controle de gastos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="pt-br">
        <body>
          <TopBar />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
