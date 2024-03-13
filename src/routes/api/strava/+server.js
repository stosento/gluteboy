import * as dotenv from 'dotenv';
dotenv.config();

import { STRAVA_ACCESS_TOKEN, STRAVA_REFRESH_TOKEN } from '$env/static/private';

const requiredScopes = 'activity:read_all';

/** @type {import('./$types').RequestHandler} */
export async function GET() {
  console.log('access token: ', STRAVA_ACCESS_TOKEN);
  const url = new URL('https://www.strava.com/api/v3/athlete/activities');
  url.searchParams.append('access_token', STRAVA_ACCESS_TOKEN);
  url.searchParams.append('scope', requiredScopes);

  const response = await fetch(url.toString(), {
    headers: {
      'Authorization': `Bearer ${STRAVA_ACCESS_TOKEN}`
    }
  });

  if (!response.ok) {
    throw new Error(`Strava API error: ${response.status} ${response.statusText}`);
  }

  const activities = await response.json();

  return new Response(JSON.stringify(activities));
}