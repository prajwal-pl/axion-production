import Header from "@/components/global/header";
import { metadata } from "@/lib/page-metadata";

export function Dashboard() {
  return (
    <div>
      <Header
        title={metadata.dashboard.title}
        description={metadata.dashboard.description}
      />
    </div>
  );
}
