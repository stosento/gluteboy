<script>
    import { onMount } from 'svelte';
  
    const clientId = '122921';
    const redirectUri = 'http://localhost:5173';
    const scope = 'activity:read_all'; // Add the required scope here
  
    /**
	 * @type {string}
	 */
    let authUrl;
  
    onMount(() => {
      const authorizeUrl = new URL('https://www.strava.com/oauth/authorize');
      authorizeUrl.searchParams.append('client_id', clientId);
      authorizeUrl.searchParams.append('redirect_uri', redirectUri);
      authorizeUrl.searchParams.append('response_type', 'code');
      authorizeUrl.searchParams.append('scope', scope); // Append the scope
      authUrl = authorizeUrl.toString();
    });
  </script>
  
  <main>
    <h1>Strava Authorization</h1>
    <p>Click the button below to authorize with Strava:</p>
    <a href="{authUrl}">Authorize with Strava</a>
  </main>