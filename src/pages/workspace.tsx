import { useUser } from "@clerk/clerk-react";

export function Workspace() {
  const { user, isSignedIn } = useUser();
  return <div>{isSignedIn ? user?.username : "Not signed in"}</div>;
}
