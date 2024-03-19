<script>
  import Activities from './activities/+page.svelte';
</script>

<div class="">
  <h1 class="text-7xl font-bold font-pattaya text-gray-800 text-center">Glütentag!</h1>
  <br/>
  <h3 class="text-3xl font-pattaya text-gray-900 text-center">You've stumbled upon Stephen's glutes. Enjoy the peaches.</h3>
  <Activities/>
</div>

<style lang="postcss">
  :global(body) {
    background-image: url('./src/lib/assets/peaches.png');
    background-size: cover;
    background-attachment: fixed;
  }

  :global(html) {
    background-color: theme(colors.gray.300);
  }
</style>