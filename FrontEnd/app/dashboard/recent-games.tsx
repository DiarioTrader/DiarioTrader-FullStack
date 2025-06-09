import { cn } from "@/lib/utils"
import { CheckCircle, XCircle, Clock, TrendingUp, TrendingDown } from "lucide-react"
import type { Game } from "../../types/trading"

interface RecentGamesProps {
  className?: string
}

export default function RecentGames({ className }: RecentGamesProps) {
  const recentGames: Game[] = [
    {
      id: "1",
      date: "2024-01-07",
      time: "16:00",
      homeTeam: "São Paulo",
      awayTeam: "Corinthians",
      league: "Brasileirão",
      market: "Over 2.5 Gols",
      odds: 1.75,
      stake: 100,
      prediction: "Over 2.5",
      status: "green",
      result: "3-1",
      profit: 75,
    },
    {
      id: "2",
      date: "2024-01-07",
      time: "18:30",
      homeTeam: "Liverpool",
      awayTeam: "Arsenal",
      league: "Premier League",
      market: "Vitória Casa",
      odds: 2.2,
      stake: 150,
      prediction: "Liverpool",
      status: "red",
      result: "1-2",
      profit: -150,
    },
    {
      id: "3",
      date: "2024-01-06",
      time: "21:00",
      homeTeam: "PSG",
      awayTeam: "Monaco",
      league: "Ligue 1",
      market: "Ambas Marcam",
      odds: 1.9,
      stake: 80,
      prediction: "Sim",
      status: "green",
      result: "2-1",
      profit: 72,
    },
    {
      id: "4",
      date: "2024-01-06",
      time: "19:45",
      homeTeam: "Bayern",
      awayTeam: "Dortmund",
      league: "Bundesliga",
      market: "Under 3.5 Gols",
      odds: 1.65,
      stake: 120,
      prediction: "Under 3.5",
      status: "red",
      result: "4-2",
      profit: -120,
    },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "green":
        return <CheckCircle className="h-4 w-4 text-green-500" />
      case "red":
        return <XCircle className="h-4 w-4 text-red-500" />
      default:
        return <Clock className="h-4 w-4 text-yellow-500" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "green":
        return "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800"
      case "red":
        return "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800"
      default:
        return "bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800"
    }
  }

  return (
    <div className={cn("w-full overflow-x-auto", className)}>
      <div className="space-y-3">
        {recentGames.map((game) => (
          <div
            key={game.id}
            className={cn("p-4 rounded-lg border transition-all duration-200", getStatusColor(game.status))}
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2">
                {getStatusIcon(game.status)}
                <div>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">
                    {game.homeTeam} vs {game.awayTeam}
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    {game.league} • {game.date} {game.time}
                  </p>
                </div>
              </div>

              <div className="text-right">
                {game.profit && (
                  <div className="flex items-center gap-1">
                    {game.profit > 0 ? (
                      <TrendingUp className="h-3 w-3 text-green-500" />
                    ) : (
                      <TrendingDown className="h-3 w-3 text-red-500" />
                    )}
                    <span
                      className={cn(
                        "text-sm font-bold",
                        game.profit > 0 ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400",
                      )}
                    >
                      {game.profit > 0 ? "+" : ""}R$ {game.profit}
                    </span>
                  </div>
                )}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 text-xs">
              <div>
                <span className="text-gray-500 dark:text-gray-400">Mercado:</span>
                <p className="font-medium text-gray-900 dark:text-white">{game.market}</p>
              </div>
              <div>
                <span className="text-gray-500 dark:text-gray-400">Aposta:</span>
                <p className="font-medium text-gray-900 dark:text-white">R$ {game.stake}</p>
              </div>
              <div>
                <span className="text-gray-500 dark:text-gray-400">Odd:</span>
                <p className="font-medium text-gray-900 dark:text-white">{game.odds}</p>
              </div>
              {game.result && (
                <div>
                  <span className="text-gray-500 dark:text-gray-400">Resultado:</span>
                  <p className="font-medium text-gray-900 dark:text-white">{game.result}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
