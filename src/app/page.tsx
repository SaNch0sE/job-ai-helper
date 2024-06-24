import { SignIn } from "@/components/auth/signin-button";
import { NextUIProvider } from "@nextui-org/react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <NextUIProvider>
        <SignIn></SignIn>
      </NextUIProvider>
    </main>
  );
}
