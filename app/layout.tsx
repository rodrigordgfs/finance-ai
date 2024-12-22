import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { dark } from "@clerk/themes";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <ClerkProvider
        appearance={{
          baseTheme: dark,
        }}
      >
        <body className="dark antialiased">{children}</body>
      </ClerkProvider>
    </html>
  );
}
