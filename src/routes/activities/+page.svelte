<script>
    import { onMount } from 'svelte';
  
    /**
	 * @type {any[]}
	 */
    let activities = [];
  
    onMount(async () => {
      const response = await fetch('/api/strava');
      activities = await response.json();
    });
  </script>

<main>
    <h1>My Strava Activities</h1>
    {#each activities as activity}
      <div>
        <h2>{activity.name}</h2>
        <p>Type: {activity.type}</p>
        <p>Distance: {activity.distance} meters</p>
        <p>Duration: {activity.duration} seconds</p>
        <!-- Display other relevant activity data -->
      </div>
    {/each}
  </main>