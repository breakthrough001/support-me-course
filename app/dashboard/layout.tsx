export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-[250px_1fr] h-screen">
      <div className="bg-muted overflow-auto px-6 py-4">side panel</div>
      <div className="overflow-auto py-2 px-6">
        <h1 className="pb-4">Welcome back, Joe!</h1>
        {children}
      </div>
    </div>
  );
}
