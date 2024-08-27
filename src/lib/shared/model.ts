export interface DashboardData {
  totalUsers: number
  activeUsers: number
  totalStreams: number
  revenue: number
  topArtist: string
  usersPastYear: UserMonth[]
  revenueDist: RevenueDist
  topStreamedSongs: TopSong[]
  recentStreams: Stream[]
}

export interface UserMonth {
  total: number
  active: number
}

export interface RevenueDist {
  subscriptions: number
  ads: number
}

export interface TopSong {
  songId: string
  streamCount: number
}

export interface Stream {
  songName: string
  artist: string
  timestamp: number
  streamCount: number
  userId: string
}
