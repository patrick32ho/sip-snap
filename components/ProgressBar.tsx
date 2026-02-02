type ProgressBarProps = {
  current: number;
  goal: number;
};

export function ProgressBar({ current, goal }: ProgressBarProps) {
  const safeGoal = Math.max(1, goal);
  const progress = Math.min(100, Math.round((current / safeGoal) * 100));

  return (
    <div className="w-full">
      <div className="mb-2 flex items-center justify-between text-xs text-slate-500">
        <span>{current} today</span>
        <span>Goal {safeGoal}</span>
      </div>
      <div className="h-3 w-full overflow-hidden rounded-full bg-splash-100">
        <div
          className="h-full rounded-full bg-splash-500 transition-all"
          style={{ width: `${progress}%` }}
          aria-valuemin={0}
          aria-valuemax={safeGoal}
          aria-valuenow={current}
          role="progressbar"
        />
      </div>
    </div>
  );
}
