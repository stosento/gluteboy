<script>
  import Activities from './activities/+page.svelte';
  import Auth from './auth/+page.svelte';
</script>

<div class="bg-peaches bg-cover h-screen ltr-linear-infinite">
  <h1 class="text-3xl font-bold">GluteBoy!!</h1>
  <h3>If you are here, (1) welcome and (2) enjoy the glutes</h3>
  <!-- <Activities/> -->
  <Auth/>
</div>

<style lang="postcss">
    :global(html) {
      background-color: theme(colors.gray.300);
    }
  </style>