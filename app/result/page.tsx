"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { AppShell } from "../../components/AppShell";
import { Card } from "../../components/Card";
import { PrimaryButton } from "../../components/PrimaryButton";
import { ProgressBar } from "../../components/ProgressBar";
import { useSwipe } from "../../hooks/useSwipe";
import { getDailyGoal, getStatsSnapshot } from "../../lib/stats";

export default function ResultPage() {
  const router = useRouter();
  const [todayCount, setTodayCount] = useState(0);
  const [goal, setGoal] = useState(0);
  const [stats, setStats] = useState({
    plays: 0,
    totalGlasses: 0,
    bestDay: 0,
  });

  useEffect(() => {
    const snapshot = getStatsSnapshot();
    setTodayCount(snapshot.today);
    setStats({
      plays: snapshot.plays,
      totalGlasses: snapshot.totalGlasses,
      bestDay: snapshot.bestDay,
    });
    setGoal(getDailyGoal());
  }, []);

  const swipeHandlers = useSwipe({
    onSwipeUp: () => {
      router.push("/game");
    },
  });

  return (
    <AppShell>
      <Card className="flex flex-1 flex-col gap-6" {...swipeHandlers}>
        <div>
          <h1 className="text-2xl font-semibold text-slate-900">
            Nice! +1 glass logged.
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            Keep the momentum going — one more tap is one more sip.
          </p>
        </div>

        <ProgressBar current={todayCount} goal={goal} />

        <div className="grid grid-cols-3 gap-3 text-center text-xs text-slate-500">
          <div className="rounded-2xl bg-slate-50 px-3 py-3">
            <p className="text-lg font-semibold text-slate-900">
              {stats.plays}
            </p>
            <p>Plays</p>
          </div>
          <div className="rounded-2xl bg-slate-50 px-3 py-3">
            <p className="text-lg font-semibold text-slate-900">
              {stats.totalGlasses}
            </p>
            <p>Total</p>
          </div>
          <div className="rounded-2xl bg-slate-50 px-3 py-3">
            <p className="text-lg font-semibold text-slate-900">
              {stats.bestDay}
            </p>
            <p>Best day</p>
          </div>
        </div>

        <div className="mt-auto flex flex-col gap-3">
          <PrimaryButton onClick={() => router.push("/game")}>
            Log another
          </PrimaryButton>
          <PrimaryButton variant="secondary" onClick={() => router.push("/")}>
            Home
          </PrimaryButton>
        </div>
      </Card>
      <p className="mt-3 text-center text-xs text-slate-400">
        Swipe up to log another.
      </p>
    </AppShell>
  );
}
