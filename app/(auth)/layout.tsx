import type { Metadata } from "next";
import "../globals.css";
import { ClerkProvider } from "@clerk/nextjs";


export const metadata: Metadata = {
  title: "Controle - Auth",
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
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
