import { cn } from "@/lib/utils"
import { TrendingUp, TrendingDown, Target, DollarSign } from "lucide-react"

interface TradingStatsProps {
  className?: string
}

export default function TradingStats({ className }: TradingStatsProps) {
  const stats = {
    totalGames: 45,
    greenGames: 28,
    redGames: 12,
    pendingGames: 5,
    totalProfit: 1250.5,
    winRate: 70,
    roi: 15.2,
  }

  return (
    <div className={cn("w-full", className)}>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-green-600 dark:text-green-400">Green</p>
              <p className="text-2xl font-bold text-green-700 dark:text-green-300">{stats.greenGames}</p>
            </div>
            <TrendingUp className="h-8 w-8 text-green-500" />
          </div>
        </div>

        <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-red-600 dark:text-red-400">Red</p>
              <p className="text-2xl font-bold text-red-700 dark:text-red-300">{stats.redGames}</p>
            </div>
            <TrendingDown className="h-8 w-8 text-red-500" />
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
          <div className="flex items-center gap-2">
            <Target className="h-4 w-4 text-blue-500" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Taxa de Acerto</span>
          </div>
          <span className="text-sm font-bold text-gray-900 dark:text-white">{stats.winRate}%</span>
        </div>

        <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
          <div className="flex items-center gap-2">
            <DollarSign className="h-4 w-4 text-green-500" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Lucro Total</span>
          </div>
          <span className="text-sm font-bold text-green-600 dark:text-green-400">
            R$ {stats.totalProfit.toFixed(2)}
          </span>
        </div>

        <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-purple-500" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">ROI</span>
          </div>
          <span className="text-sm font-bold text-purple-600 dark:text-purple-400">{stats.roi}%</span>
        </div>

        <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
          <div className="flex items-center gap-2">
            <Target className="h-4 w-4 text-orange-500" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Jogos Pendentes</span>
          </div>
          <span className="text-sm font-bold text-orange-600 dark:text-orange-400">{stats.pendingGames}</span>
        </div>
      </div>
    </div>
  )
}
