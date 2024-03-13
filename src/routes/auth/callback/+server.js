// @ts-nocheck
// src/routes/auth/callback/+page.server.js
import { error } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function GET({ url }) {
  const code = url.searchParams.get('code');

  if (!code) {
    throw error(400, 'No authorization code received');
  }

  const clientId = '122921';
  const clientSecret = 'df94e09cb59f1e637822169f29e70dcdaf2081a6';
  const redirectUri = 'localhost';

  const response = await fetch('https://www.strava.com/oauth/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams({
      client_id: clientId,
      client_secret: clientSecret,
      code,
      grant_type: 'authorization_code',
      redirect_uri: redirectUri
    })
  });

  if (!response.ok) {
    throw error(response.status, await response.text());
  }

  const data = await response.json();
  const accessToken = data.access_token;
  const refreshToken = data.refresh_token;

  console.log('access : ', accessToken);
  console.log('refresh : ', refreshToken);

  // Store the access token and refresh token securely
  // You can use environment variables or a secure configuration file
  process.env.STRAVA_ACCESS = accessToken;
  process.env.STRAVA_REFRESH = refreshToken;

  // Redirect the user or display a success message
  return {
    status: 302,
    headers: {
      location: '/'
    }
  };
}