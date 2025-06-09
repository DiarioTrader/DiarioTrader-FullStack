import { TrendingUp, Target, Trophy } from "lucide-react"
import TradingStats from "./trading-stats"
import RecentGames from "./recent-games"
import TodayGames from "./today-games"

export default function Content() {
  return (
    <div className="space-y-6">
      {/* Estatísticas principais */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-[#0F0F12] rounded-xl p-6 flex flex-col border border-gray-200 dark:border-[#1F1F23]">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4 text-left flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-green-500" />
            Performance Geral
          </h2>
          <div className="flex-1">
            <TradingStats className="h-full" />
          </div>
        </div>

        <div className="bg-white dark:bg-[#0F0F12] rounded-xl p-6 flex flex-col border border-gray-200 dark:border-[#1F1F23]">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4 text-left flex items-center gap-2">
            <Target className="w-5 h-5 text-blue-500" />
            Jogos de Hoje
          </h2>
          <div className="flex-1">
            <TodayGames className="h-full" />
          </div>
        </div>
      </div>

      {/* Histórico de jogos */}
      <div className="bg-white dark:bg-[#0F0F12] rounded-xl p-6 flex flex-col items-start justify-start border border-gray-200 dark:border-[#1F1F23]">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4 text-left flex items-center gap-2">
          <Trophy className="w-5 h-5 text-yellow-500" />
          Últimos Resultados
        </h2>
        <RecentGames />
      </div>
    </div>
  )
}
