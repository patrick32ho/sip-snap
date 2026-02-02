"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { AppShell } from "../../components/AppShell";
import { Card } from "../../components/Card";
import { PrimaryButton } from "../../components/PrimaryButton";
import { SignatureGate } from "../../components/SignatureGate";
import { logGlass } from "../../lib/stats";

export default function GamePage() {
  const router = useRouter();
  const [splashOn, setSplashOn] = useState(false);

  const handleLog = () => {
    setSplashOn(true);
    logGlass();
    setTimeout(() => {
      router.push("/result?delta=1");
    }, 150);
  };

  return (
    <AppShell>
      <SignatureGate>
        <Card className="relative flex flex-1 flex-col items-center justify-center gap-8 text-center">
          {splashOn ? (
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <div className="h-40 w-40 animate-ping rounded-full bg-splash-200/70" />
            </div>
          ) : null}

          <div className="text-6xl">💧</div>
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">
              Ready to log?
            </h2>
            <p className="mt-2 text-sm text-slate-500">
              One tap counts as one glass.
            </p>
          </div>

          <PrimaryButton onClick={handleLog} className="text-lg">
            I drank a glass
          </PrimaryButton>

          <button
            type="button"
            onClick={() => router.push("/")}
            className="text-sm text-slate-400"
          >
            Back
          </button>
        </Card>
      </SignatureGate>
    </AppShell>
  );
}
