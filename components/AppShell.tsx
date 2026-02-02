"use client";

import { ReactNode, useEffect, useState } from "react";
import { isLocalStorageAvailable } from "../lib/storage";

type AppShellProps = {
  children: ReactNode;
};

export function AppShell({ children }: AppShellProps) {
  const [limitedMode, setLimitedMode] = useState(false);

  useEffect(() => {
    setLimitedMode(!isLocalStorageAvailable());
  }, []);

  return (
    <div className="min-h-screen bg-splash-50">
      <div className="mx-auto flex min-h-screen w-full max-w-md flex-col px-5 pb-10 pt-6">
        <header className="mb-4 flex items-center justify-between text-sm text-slate-500">
          <span className="font-semibold uppercase tracking-[0.2em] text-slate-400">
            SipSnap
          </span>
          <span className="text-xs text-slate-400">Hydration Arcade</span>
        </header>

        {limitedMode ? (
          <div className="mb-4 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-xs text-amber-800">
            Limited mode: local storage is unavailable, so progress resets when
            you close the session.
          </div>
        ) : null}

        <main className="flex flex-1 flex-col">{children}</main>
      </div>
    </div>
  );
}
