"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { AppShell } from "../components/AppShell";
import { Card } from "../components/Card";
import { PrimaryButton } from "../components/PrimaryButton";
import { ProgressBar } from "../components/ProgressBar";
import { DAILY_GOAL_DEFAULT, MAX_DAILY_GOAL } from "../lib/constants";
import { getDailyGoal, getTodayCount, setDailyGoal } from "../lib/stats";

export default function Home() {
  const router = useRouter();
  const [todayCount, setTodayCount] = useState(0);
  const [goal, setGoal] = useState(DAILY_GOAL_DEFAULT);

  useEffect(() => {
    setTodayCount(getTodayCount());
    setGoal(getDailyGoal());
  }, []);

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
        <PrimaryButton onClick={() => router.push("/game")}>
          Start
        </PrimaryButton>
        <p className="mt-3 text-center text-xs text-slate-400">
          One tap, one sip, one step closer to your goal.
        </p>
      </div>
    </AppShell>
  );
}
