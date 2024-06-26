import {env} from '$env/dynamic/private';
//dotenv.config();

// import { 
//     ACCESS_TOKEN, 
//     REFRESH_TOKEN, 
//     CLIENT_ID, 
//     CLIENT_SECRET 
// } from '$env/static/private';

/** @type {import('./$types').RequestHandler} */
export async function GET() {
  const url = new URL('https://www.strava.com/api/v3/athlete/activities');
  url.searchParams.append('access_token', env.ACCESS_TOKEN);
  url.searchParams.append('after', 1709727029);
  url.searchParams.append('per_page', '200');

  const response = await fetch(url.toString(), {
    headers: {
      'Authorization': `Bearer ${env.ACCESS_TOKEN}`
    }
  });

  if (!response.ok) {
        // Handle error, e.g., refresh the access token if it has expired
        const refreshResponse = await fetch('https://www.strava.com/oauth/token', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams({
              client_id: env.CLIENT_ID,
              client_secret: env.CLIENT_SECRET,
              grant_type: 'refresh_token',
              refresh_token: env.REFRESH_TOKEN
            })
          });

        const refreshData = await refreshResponse.json();
        const newAccessToken = refreshData.access_token;

        // Retry the request with the new access token
        const retryResponse = await fetch(url.toString(), {
            headers: {
            'Authorization': `Bearer ${newAccessToken}`
            }
        });

        if (!retryResponse.ok) {
            throw new Error(`Strava API error: ${retryResponse.status} ${retryResponse.statusText}`);
        }

        const activities = await retryResponse.json();
        return new Response(filterActivities(activities));
  }

  const activities = await response.json();
  return new Response(filterActivities(activities));
}

function filterActivities(activities) {

    const buttNames = ["BUTT", "GLUTES", "GLUTE"];

    const weightActivities = activities.filter((activity) => 
                activity.sport_type == 'WeightTraining' && 
                buttNames.some(str => activity.name.includes(str)))

    weightActivities.sort((a, b) => {
        return new Date(b.start_date) - new Date(a.start_date);
    });

    return JSON.stringify(weightActivities);
}