"use client";

import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import {
  Transaction,
  TransactionButton,
  TransactionStatus,
  TransactionStatusLabel,
} from "@coinbase/onchainkit/transaction";
import type { LifecycleStatus } from "@coinbase/onchainkit/transaction";
import { base } from "viem/chains";
import { AppShell } from "../components/AppShell";
import { Card } from "../components/Card";
import { ProgressBar } from "../components/ProgressBar";
import { DAILY_GOAL_DEFAULT, MAX_DAILY_GOAL } from "../lib/constants";
import { getDailyGoal, getTodayCount, setDailyGoal } from "../lib/stats";
import { START_GAME_CALLS } from "../lib/tx";

export default function Home() {
  const router = useRouter();
  const [todayCount, setTodayCount] = useState(0);
  const [goal, setGoal] = useState(DAILY_GOAL_DEFAULT);

  useEffect(() => {
    setTodayCount(getTodayCount());
    setGoal(getDailyGoal());
  }, []);

  const handleTxStatus = useCallback(
    (status: LifecycleStatus) => {
      if (status.statusName === "success") {
        router.push("/game");
      }
    },
    [router]
  );

  const updateGoal = (delta: number) => {
    setGoal((prev) => {
      const next = Math.min(MAX_DAILY_GOAL, Math.max(1, prev + delta));
      setDailyGoal(next);
      return next;
    });
  };

  return (
    <AppShell>
      <Card className="mb-6">
        <div className="flex flex-col gap-4">
          <div>
            <h1 className="text-3xl font-semibold text-slate-900">
              SipSnap
            </h1>
            <p className="mt-2 text-sm text-slate-600">
              Tap to log a glass. Keep the streak alive.
            </p>
          </div>

          <ProgressBar current={todayCount} goal={goal} />

          <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-wide text-slate-400">
                  Daily goal
                </p>
                <p className="text-lg font-semibold text-slate-900">
                  {goal} glasses
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => updateGoal(-1)}
                  className="h-10 w-10 rounded-full border border-slate-200 bg-white text-lg font-semibold text-slate-600"
                >
                  -
                </button>
                <button
                  type="button"
                  onClick={() => updateGoal(1)}
                  className="h-10 w-10 rounded-full border border-slate-200 bg-white text-lg font-semibold text-slate-600"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </Card>

      <div className="mt-auto">
        <Transaction
          calls={START_GAME_CALLS}
          chainId={base.id}
          onStatus={handleTxStatus}
        >
          <TransactionButton
            text="Start game (onchain)"
            className="inline-flex w-full items-center justify-center rounded-2xl bg-splash-500 px-5 py-4 text-base font-semibold text-white shadow-lg shadow-splash-200/60 transition active:scale-[0.98]"
          />
          <TransactionStatus className="mt-3 text-center text-xs text-slate-400">
            <TransactionStatusLabel />
          </TransactionStatus>
        </Transaction>
        <p className="mt-3 text-center text-xs text-slate-400">
          Onchain start helps Base track unique players.
        </p>
      </div>
    </AppShell>
  );
}
