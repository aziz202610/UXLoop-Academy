interface ProgressBarProps {
  progress: number;
  gradient?: string;
}

export default function ProgressBar({ progress, gradient = "from-brand-yellow to-brand-purple" }: ProgressBarProps) {
  return (
    <div className="h-1.5 bg-surface-border rounded-full overflow-hidden">
      <div className={`h-full rounded-full bg-gradient-to-r ${gradient} transition-all duration-700 ease-out`}
        style={{ width: `${progress}%` }} />
    </div>
  );
}