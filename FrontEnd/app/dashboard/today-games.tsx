import { cn } from "@/lib/utils"
import { Clock, Plus, Target } from "lucide-react"
import type { Game } from "../../types/trading"

interface TodayGamesProps {
  className?: string
}

export default function TodayGames({ className }: TodayGamesProps) {
  const todayGames: Game[] = [
    {
      id: "1",
      date: "2024-01-08",
      time: "20:00",
      homeTeam: "Flamengo",
      awayTeam: "Palmeiras",
      league: "Brasileirão",
      market: "Over 2.5 Gols",
      odds: 1.85,
      stake: 100,
      prediction: "Over 2.5",
      status: "pending",
    },
    {
      id: "2",
      date: "2024-01-08",
      time: "22:00",
      homeTeam: "Real Madrid",
      awayTeam: "Barcelona",
      league: "La Liga",
      market: "Vitória Casa",
      odds: 2.1,
      stake: 150,
      prediction: "Real Madrid",
      status: "pending",
    },
  ]

  return (
    <div className={cn("w-full", className)}>
      <div className="space-y-3">
        {todayGames.map((game) => (
          <div
            key={game.id}
            className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-blue-500" />
                <span className="text-sm font-medium text-gray-900 dark:text-white">{game.time}</span>
              </div>
              <span className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                {game.league}
              </span>
            </div>

            <div className="mb-2">
              <p className="text-sm font-semibold text-gray-900 dark:text-white">
                {game.homeTeam} vs {game.awayTeam}
              </p>
            </div>

            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-1">
                <Target className="h-3 w-3 text-green-500" />
                <span className="text-gray-600 dark:text-gray-400">{game.market}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-600 dark:text-gray-400">Odd: {game.odds}</span>
                <span className="text-green-600 dark:text-green-400 font-medium">R$ {game.stake}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="w-full mt-4 p-3 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg hover:border-blue-400 dark:hover:border-blue-500 transition-colors group">
        <div className="flex items-center justify-center gap-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-500">
          <Plus className="h-4 w-4" />
          <span className="text-sm font-medium">Adicionar Novo Jogo</span>
        </div>
      </button>
    </div>
  )
}
