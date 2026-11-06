import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "OneStopAI",
  description: "Your all-in-one AI content creation studio"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
