import { motion } from "motion/react";
import { Card } from "./ui/card";
import { CheckCircle, UserPlus, MapPin, BarChart3 } from "lucide-react";

interface QuickActionsProps {
  delay: number;
}

const actions = [
  {
    icon: CheckCircle,
    label: "Check In",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: UserPlus,
    label: "Tambah NOO",
    color: "from-teal-500 to-cyan-500"
  },
  {
    icon: MapPin,
    label: "Rute Hari Ini",
    color: "from-blue-500 to-indigo-500"
  },
  {
    icon: BarChart3,
    label: "Laporan",
    color: "from-purple-500 to-pink-500"
  }
];

export function QuickActions({ delay }: QuickActionsProps) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay, duration: 0.4 }}
    >
      <Card className="p-5 border-0 shadow-md">
        <h3 className="text-gray-700 mb-4">Aksi Cepat</h3>
        <div className="grid grid-cols-4 gap-3">
          {actions.map((action, index) => (
            <motion.button
              key={action.label}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                delay: delay + 0.1 + (index * 0.05),
                type: "spring",
                stiffness: 200
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-gray-50 transition-colors"
            >
              <div className={`size-12 rounded-xl bg-gradient-to-br ${action.color} flex items-center justify-center shadow-md`}>
                <action.icon className="size-6 text-white" />
              </div>
              <span className="text-xs text-gray-600 text-center leading-tight">
                {action.label}
              </span>
            </motion.button>
          ))}
        </div>
      </Card>
    </motion.div>
  );
}
