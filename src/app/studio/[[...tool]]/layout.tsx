export const metadata = {
  title: "Sanity Studio — Fabre Plomberie",
  description: "CMS Fabre Plomberie & Chauffage",
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div id="sanity" style={{ height: "100vh" }}>
      {children}
    </div>
  );
}
