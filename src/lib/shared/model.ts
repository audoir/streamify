//-----------------------------------------------------------------------------
// Author: Wayne Cheng
// Description: Data schema
//-----------------------------------------------------------------------------

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
  songName: string
  streamCount: number
}

export interface Stream {
  id: string
  songName: string
  artist: string
  date: string
  streamCount: number
  userId: string
}
