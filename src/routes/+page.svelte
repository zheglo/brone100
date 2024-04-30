<script lang="ts">
  import Hero from 'routes/hero/+page.svelte'
  import Jubilee from 'routes/jubilee/+page.svelte'
  import Program from 'routes/program/+page.svelte'
  import { animate, scroll } from 'motion'



</script>

<section>
  <Hero />
  <h2 class='absolute font-sans font-size-6vw font-bold text-black inline-block z-10'>#001</h2>
</section>

<section>
  <Jubilee />
  <h2 class='absolute font-sans font-size-6vw font-bold text-black inline-block z-10'>#002</h2>
</section>

<section>
  <Program />
  <h2 class='absolute font-sans font-size-6vw font-bold text-black inline-block z-10'>#003</h2>
</section>


