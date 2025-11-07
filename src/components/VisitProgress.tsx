import { motion } from "motion/react";
import { Card } from "./ui/card";
import { MapPin, TrendingUp } from "lucide-react";

interface VisitProgressProps {
  current: number;
  goal: number;
  delay: number;
}

export function VisitProgress({ current, goal, delay }: VisitProgressProps) {
  const percentage = (current / goal) * 100;
  const circumference = 2 * Math.PI * 45;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay, duration: 0.4 }}
    >
      <Card className="p-5 border-0 shadow-md bg-gradient-to-br from-green-500 to-emerald-600 text-white overflow-hidden relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 size-32 bg-white rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 size-24 bg-white rounded-full translate-y-1/2 -translate-x-1/2" />
        </div>

        <div className="relative z-10 flex items-center justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <MapPin className="size-5" />
              <h3 className="text-sm opacity-90">Kunjungan Hari Ini</h3>
            </div>
            <div className="flex items-baseline gap-2 mb-2">
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: delay + 0.2, type: "spring" }}
                className="text-4xl"
              >
                {current}
              </motion.span>
              <span className="text-green-100">/ {goal} visit</span>
            </div>
            <div className="flex items-center gap-1 text-sm">
              <TrendingUp className="size-4" />
              <span>{((current / goal) * 100).toFixed(0)}% dari target</span>
            </div>
          </div>

          {/* Circular Progress */}
          <div className="relative size-24">
            <svg className="size-24 -rotate-90" viewBox="0 0 100 100">
              {/* Background circle */}
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="8"
              />
              {/* Progress circle */}
              <motion.circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="white"
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray={circumference}
                initial={{ strokeDashoffset: circumference }}
                animate={{ strokeDashoffset }}
                transition={{ delay: delay + 0.3, duration: 1, ease: "easeOut" }}
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-lg">{((current / goal) * 100).toFixed(0)}%</span>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
