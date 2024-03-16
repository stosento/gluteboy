<script>
    import { onMount } from 'svelte';
    import profilePic from '../../../src/images/profile-pic.jpeg'
  
    let activities = [];
  
    onMount(async () => {
      const response = await fetch('/api/strava');
      activities = await response.json();
    });

    function formatDate(date) {
      date = new Date(date)
      // Get individual components of the date
      const year = date.getFullYear();
      const month = date.toLocaleString('default', { month: 'long' }); // Get full month name
      const day = date.getDate();
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const ampm = hours >= 12 ? 'PM' : 'AM'; // Determine AM or PM
      const formattedHours = hours % 12 || 12; // Convert to 12-hour format

      // Construct the formatted date string
      const formattedDate = `${month} ${day}, ${year} at ${formattedHours}:${minutes.toString().padStart(2, '0')} ${ampm}`;

      return formattedDate;
    }

  </script>

<main class="flex flex-col items-center">
    {#each activities as activity}

      <div class="w-1/2 content-center grid grid-cols-12 bg-amber-50 rounded-lg shadow-xl overflow-hidden my-2 opacity-90">
        <div class="pt-7 col-span-1 justify-self-center">
          <img src={profilePic} alt="Image" class="rounded-full w-10 h-10" />
        </div>
        <div class="col-span-11">
          <div class="py-5">
            <h4 class="text-sm leading-6 font-medium text-gray-900">
              Stephen Osentoski
            </h4>
            <p class="max-w-2xl text-xs text-gray-500">
              <!-- {activity.start_date.toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"})}  -->
              {formatDate(activity.start_date)}
            </p>
            <h3 class="mt-2 text-lg leading-4 font-medium text-gray-900">
              {activity.name}
            </h3>
          </div>
          <div class="border-t border-gray-200 py-3">
            <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-6">
              <div class="sm:col-span-1">
                <dt class="text-xs font-medium text-gray-500">Time</dt>
                <dd class="mt-1 text-xl text-gray-900">
                  {Math.floor(activity.elapsed_time / 60)}:{activity.elapsed_time % 60 < 10 ? '0' : ''}{activity.elapsed_time % 60}
                </dd>
              </div>
              <div class="sm:col-span-1">
                <dt class="text-xs font-medium text-gray-500">Avg HR</dt>
                <dd class="mt-1 text-xl text-gray-900">
                  {activity.average_heartrate} bpm
                </dd>
              </div>
              <div class="sm:col-span-1"> 
                <dt class="text-xs font-medium text-gray-500">Max HR</dt>
                <dd class="mt-1 text-xl text-gray-900">
                  {activity.max_heartrate} bpm
                </dd>
              </div>
              <div class="sm:col-span-1">
                <dt class="text-xs font-medium text-gray-500">Kudos</dt>
                <dd class="mt-1 text-xl text-gray-900">
                  {activity.kudos_count} 
                </dd>
              </div>
              <!-- Add more activity details as needed -->
            </dl>
          </div>
        </div>
        <div class="pl-3 pb-3">
          {activity.kudos_count}
        </div>
      </div>

    {/each}
  </main>