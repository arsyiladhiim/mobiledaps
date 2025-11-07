import { motion } from "motion/react";
import { Card } from "./ui/card";
import { Weight, TrendingUp } from "lucide-react";

interface VolumeChartProps {
  current: number;
  target: number;
  delay: number;
}

export function VolumeChart({ current, target, delay }: VolumeChartProps) {
  const percentage = (current / target) * 100;
  const remaining = target - current;

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay, duration: 0.4 }}
    >
      <Card className="p-5 border-0 shadow-md">
        <div className="flex items-center gap-2 mb-4">
          <div className="bg-green-100 p-2 rounded-lg">
            <Weight className="size-5 text-green-600" />
          </div>
          <div className="flex-1">
            <h3 className="text-gray-700">Volume Target</h3>
            <p className="text-xs text-gray-500">Capaian per berat (Ton)</p>
          </div>
          {percentage >= 50 && (
            <div className="flex items-center gap-1 text-green-600 bg-green-50 px-2 py-1 rounded-full text-xs">
              <TrendingUp className="size-3" />
              <span>On Track</span>
            </div>
          )}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="text-center">
            <p className="text-xs text-gray-500 mb-1">Tercapai</p>
            <motion.p
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: delay + 0.2, type: "spring" }}
              className="text-xl text-green-600"
            >
              {current.toFixed(1)}
            </motion.p>
            <p className="text-xs text-gray-400">ton</p>
          </div>
          <div className="text-center">
            <p className="text-xs text-gray-500 mb-1">Sisa</p>
            <motion.p
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: delay + 0.25, type: "spring" }}
              className="text-xl text-orange-500"
            >
              {remaining.toFixed(1)}
            </motion.p>
            <p className="text-xs text-gray-400">ton</p>
          </div>
          <div className="text-center">
            <p className="text-xs text-gray-500 mb-1">Target</p>
            <motion.p
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: delay + 0.3, type: "spring" }}
              className="text-xl text-gray-700"
            >
              {target.toFixed(1)}
            </motion.p>
            <p className="text-xs text-gray-400">ton</p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="relative h-8 bg-gray-100 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${percentage}%` }}
            transition={{ delay: delay + 0.4, duration: 1, ease: "easeOut" }}
            className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full relative overflow-hidden"
          >
            {/* Shimmer effect */}
            <motion.div
              animate={{
                x: ["-100%", "100%"]
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: "linear"
              }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            />
          </motion.div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xs text-gray-700 mix-blend-difference">{percentage.toFixed(1)}%</span>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
