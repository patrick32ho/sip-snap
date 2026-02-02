"use client";

import { ReactNode } from "react";
import { MiniKitProvider } from "@coinbase/onchainkit/minikit";
import { base } from "viem/chains";

export function Providers({ children }: { children: ReactNode }) {
  const apiKey = process.env.NEXT_PUBLIC_ONCHAINKIT_API_KEY;
  const projectName =
    process.env.NEXT_PUBLIC_ONCHAINKIT_PROJECT_NAME || "SipSnap";
  const iconUrl = process.env.NEXT_PUBLIC_ICON_URL;

  return (
    <MiniKitProvider
      chain={base}
      apiKey={apiKey}
      config={{
        appearance: {
          name: projectName,
          logo: iconUrl,
          mode: "light",
          theme: "default",
        },
        wallet: {
          display: "classic",
        },
      }}
    >
      {children}
    </MiniKitProvider>
  );
}
