import type { MetaFunction } from "@remix-run/cloudflare";
import Logo from "~/components/logo";

export const meta: MetaFunction = () => {
  return [
    { title: "LootLand" },
    {
      name: "A place for people to get together and have fun!",
      content: "Welcome to LootLand!",
    },
  ];
};

export default function Index() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="grid grid-col items-center gap-4">
        <img src="./Logo.png" alt="Logo" width={350} />
        <p className="text-center">Coming Soon!</p>
      </div>
    </div>
  );
}
