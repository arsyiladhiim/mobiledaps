import { motion } from "motion/react";
import { LucideIcon } from "lucide-react";
import { Card } from "./ui/card";
import { Progress } from "./ui/progress";

interface MetricCardProps {
  title: string;
  value: number;
  total?: number;
  subtitle?: string;
  icon: LucideIcon;
  color: "green" | "emerald" | "teal";
  delay: number;
  compact?: boolean;
  highlight?: boolean;
}

const colorMap = {
  green: {
    bg: "bg-green-50",
    icon: "bg-green-500",
    text: "text-green-700",
    progress: "bg-green-500"
  },
  emerald: {
    bg: "bg-emerald-50",
    icon: "bg-emerald-500",
    text: "text-emerald-700",
    progress: "bg-emerald-500"
  },
  teal: {
    bg: "bg-teal-50",
    icon: "bg-teal-500",
    text: "text-teal-700",
    progress: "bg-teal-500"
  }
};

export function MetricCard({
  title,
  value,
  total,
  subtitle,
  icon: Icon,
  color,
  delay,
  compact = false,
  highlight = false
}: MetricCardProps) {
  const colors = colorMap[color];
  const percentage = total ? (value / total) * 100 : 0;

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay, duration: 0.4 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="h-full"
    >
      <Card className={`p-4 border-0 shadow-md hover:shadow-lg transition-shadow h-full flex flex-col ${highlight ? 'ring-2 ring-green-400' : ''}`}>
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <p className="text-gray-500 text-sm mb-1">{title}</p>
            <div className="flex items-baseline gap-2">
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: delay + 0.2, type: "spring" }}
                className={`${compact ? 'text-2xl' : 'text-3xl'} ${colors.text}`}
              >
                {value}
              </motion.span>
              {total && (
                <span className="text-gray-400">/ {total}</span>
              )}
            </div>
            {subtitle && (
              <p className="text-xs text-gray-500 mt-1">{subtitle}</p>
            )}
          </div>
          <motion.div
            initial={{ rotate: -180, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ delay: delay + 0.1, duration: 0.5 }}
            className={`${colors.icon} p-3 rounded-xl shadow-md`}
          >
            <Icon className="size-6 text-white" />
          </motion.div>
        </div>

        <div className="mt-auto space-y-1">
          {total ? (
            <>
              <Progress value={percentage} className="h-2" />
              <p className="text-xs text-gray-500 text-right">
                {percentage.toFixed(0)}% tercapai
              </p>
            </>
          ) : (
            <div className="h-6" />
          )}
        </div>
      </Card>
    </motion.div>
  );
}