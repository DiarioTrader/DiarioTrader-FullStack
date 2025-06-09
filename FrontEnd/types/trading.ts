export interface Game {
  id: string
  date: string
  time: string
  homeTeam: string
  awayTeam: string
  league: string
  market: string
  odds: number
  stake: number
  prediction: string
  status: "pending" | "green" | "red"
  result?: string
  profit?: number
}

export interface TradingStats {
  totalGames: number
  greenGames: number
  redGames: number
  pendingGames: number
  totalProfit: number
  winRate: number
  roi: number
}
