//-----------------------------------------------------------------------------
// Author: Wayne Cheng
// Description: Get dashboard data
//-----------------------------------------------------------------------------

import { DashboardData, RevenueDist, Stream, TopSong, UserMonth } from "@/lib/shared/model";
import { getRandomInt } from "@/lib/shared/utils";
import { randomUUID } from "crypto";
import { NextRequest, NextResponse } from "next/server";
import { createRandomWord } from "@/lib/shared/utils";

interface ReqObj {
  authToken: string
}

export async function POST(request: NextRequest) {
  // request validation
  const reqObj: ReqObj = await request.json();
  if (reqObj.authToken === undefined) {
    return new NextResponse("Unauthorized", { status: 400 });
  }

  // create dashboard data
  const totalUsers: number = getRandomInt(100, 500);
  const activeUsers: number = totalUsers - getRandomInt(0, 50);
  const totalStreams: number = getRandomInt(1000, 3000);
  const revenueDist: RevenueDist = {
    subscriptions: getRandomInt(100000, 200000),
    ads: getRandomInt(50000, 100000),
  };
  const revenue: number = revenueDist.subscriptions + revenueDist.ads;
  const topArtist: string = createRandomWord();
  const usersPastYear: UserMonth[] = [];
  for (let i = 0; i < 12; i += 1) {
    usersPastYear.push({
      total: getRandomInt(10, 20),
      active: getRandomInt(5, 10)
    });
  }
  const topStreamedSongs: TopSong[] = [];
  for (let i = 0; i < 12; i += 1) {
    topStreamedSongs.push({
      songId: randomUUID(),
      streamCount: getRandomInt(100, 500),
    });
  }
  const recentStreams: Stream[] = [];
  for (let i = 0; i < 20; i += 1) {
    recentStreams.push({
      songName: createRandomWord(),
      artist: createRandomWord(),
      timestamp: getUtcMinusRandomMinus5Days(),
      streamCount: getRandomInt(1, 5),
      userId: randomUUID(),
    });
  }

  const dashboardData: DashboardData = {
    totalUsers,
    activeUsers,
    totalStreams,
    revenue,
    topArtist,
    usersPastYear,
    revenueDist,
    topStreamedSongs,
    recentStreams,
  };

  return new NextResponse(JSON.stringify(dashboardData), {
    status: 200,
  });
}

function getUtcMinusRandomMinus5Days(): number {
  const randomDays = Math.floor(Math.random() * 6);
  const now = Date.now();
  const millisecondsToSubtract = (randomDays + 5) * 24 * 60 * 60 * 1000;
  return now - millisecondsToSubtract;
}