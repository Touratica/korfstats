import "./globals.css";

export const metadata = {
  title: "KorfStats",
  description: "A korfball statistics website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header>
          <h1>{metadata.title}</h1>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
