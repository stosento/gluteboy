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
        <h2 class="font-extrabold">{activity.name}</h2>
        <p>Duration: {activity.elapsed_time} seconds</p>
        <p>Date: {activity.start_date}</p>
        <p>Kudos: {activity.kudos_count}</p>
        <p>Comments: {activity.comment_count}</p>
        <!-- Display other relevant activity data -->
      </div>
    {/each}
  </main>