import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <Navbar />
        <div className="flex h-full">
          <Sidebar />
          <div className="w-full h-full">{children}</div>
        </div>
      </body>
    </html>
  );
}
