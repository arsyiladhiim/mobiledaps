import { motion } from "motion/react";
import { Bell, Menu, User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";

export function DashboardHeader() {
  const currentDate = new Date().toLocaleDateString('id-ID', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 py-6 rounded-b-3xl shadow-lg"
    >
      <div className="flex items-center justify-between mb-4">
        <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
          <Menu className="size-6" />
        </button>
        <div className="flex items-center gap-3">
          <button className="p-2 hover:bg-white/10 rounded-lg transition-colors relative">
            <Bell className="size-6" />
            <span className="absolute top-1 right-1 size-2 bg-red-500 rounded-full" />
          </button>
          <Avatar className="size-10 border-2 border-white/30">
            <AvatarImage src="" />
            <AvatarFallback className="bg-green-700">JD</AvatarFallback>
          </Avatar>
        </div>
      </div>

      <div className="space-y-1">
        <motion.h1
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          Halo, John Doe
        </motion.h1>
        <motion.p
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-green-100 text-sm"
        >
          {currentDate}
        </motion.p>
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="pt-2"
        >
          <Badge className="bg-green-500 hover:bg-green-500 text-white border-0">
            Sales Executive
          </Badge>
        </motion.div>
      </div>
    </motion.div>
  );
}
