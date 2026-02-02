"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Signature,
  SignatureButton,
  SignatureStatus,
} from "@coinbase/onchainkit/signature";
import { SIGN_MESSAGE } from "../lib/constants";
import { useSessionSignature } from "../hooks/useSessionSignature";
import { Card } from "./Card";

type SignatureGateProps = {
  children: ReactNode;
};

export function SignatureGate({ children }: SignatureGateProps) {
  const router = useRouter();
  const buttonWrapRef = useRef<HTMLDivElement | null>(null);
  const [autoRequested, setAutoRequested] = useState(false);
  const { signature, setSignature, rejected, setRejected } =
    useSessionSignature();

  useEffect(() => {
    if (!signature && !autoRequested) {
      setAutoRequested(true);
      const timer = setTimeout(() => {
        const button = buttonWrapRef.current?.querySelector("button");
        button?.click();
      }, 350);
      return () => clearTimeout(timer);
    }
  }, [signature, autoRequested]);

  if (signature) {
    return <>{children}</>;
  }

  return (
    <div className="flex flex-1 items-center justify-center">
      <Card className="w-full text-center">
        <h1 className="text-2xl font-semibold text-slate-900">Sign to Start</h1>
        <p className="mt-2 text-sm text-slate-600">
          SipSnap uses a one-time session signature to prevent spam and keep
          gameplay fair.
        </p>

        <div className="mt-6">
          <Signature
            message={SIGN_MESSAGE}
            onSuccess={(sig: string) => {
              setSignature(sig);
              setRejected(false);
              router.replace("/game");
            }}
            onError={() => {
              setRejected(true);
            }}
          >
            <div ref={buttonWrapRef} className="flex flex-col gap-3">
              <SignatureButton
                label="Sign to Play"
                connectLabel="Open in Base App"
                errorLabel="Try again"
                pendingLabel="Signing..."
                successLabel="Signed!"
                className="w-full rounded-2xl bg-splash-500 px-5 py-4 text-white shadow-lg shadow-splash-200/60"
              />
              <SignatureStatus className="text-xs text-slate-500" />
            </div>
          </Signature>
        </div>

        {rejected ? (
          <div className="mt-4 flex flex-col items-center gap-2 text-sm text-rose-500">
            <span>You must sign to continue.</span>
            <button
              type="button"
              onClick={() => {
                setRejected(false);
                const button = buttonWrapRef.current?.querySelector("button");
                button?.click();
              }}
              className="text-xs font-semibold text-splash-700"
            >
              Try again
            </button>
          </div>
        ) : null}

        <p className="mt-4 text-xs text-slate-400">
          Open this mini app inside Base App to sign.
        </p>
      </Card>
    </div>
  );
}
