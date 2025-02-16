import Header from "@/components/global/header";
import { metadata } from "@/lib/page-metadata";

export default function History() {
  return (
    <Header
      title={metadata.history.title}
      description={metadata.history.description}
    />
  );
}
