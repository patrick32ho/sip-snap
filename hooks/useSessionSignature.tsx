"use client";

import { useCallback, useEffect, useState } from "react";

const SIGNATURE_KEY = "sipsnap:signature";

export function useSessionSignature() {
  const [signature, setSignatureState] = useState<string | null>(null);
  const [rejected, setRejected] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    const stored = window.sessionStorage.getItem(SIGNATURE_KEY);
    if (stored) {
      setSignatureState(stored);
    }
  }, []);

  const setSignature = useCallback((sig: string) => {
    setSignatureState(sig);
    if (typeof window !== "undefined") {
      window.sessionStorage.setItem(SIGNATURE_KEY, sig);
    }
  }, []);

  const clearSignature = useCallback(() => {
    setSignatureState(null);
    if (typeof window !== "undefined") {
      window.sessionStorage.removeItem(SIGNATURE_KEY);
    }
  }, []);

  return {
    signature,
    setSignature,
    rejected,
    setRejected,
    clearSignature,
  };
}
