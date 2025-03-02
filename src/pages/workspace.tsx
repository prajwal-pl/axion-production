import Header from "@/components/global/header";
import { metadata } from "@/lib/page-metadata";

export function Workspace() {
  return (
    <Header
      title={metadata.workspace.title}
      description={metadata.workspace.description}
    />
  );
}
