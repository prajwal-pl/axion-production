import Header from "@/components/global/header";
import { metadata } from "@/lib/page-metadata";

const Community = () => {
  return (
    <Header
      title={metadata.community.title}
      description={metadata.community.description}
    />
  );
};

export default Community;
