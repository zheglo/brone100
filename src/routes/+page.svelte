<script lang="ts">
  import { animate, scroll } from 'motion'
  import Hero from 'routes/hero/+page.svelte'
  import Jubilee from 'routes/jubilee/+page.svelte'
  import Program from 'routes/program/+page.svelte'
  import Destiny from 'routes/destiny/+page.svelte'
  import { onMount } from "svelte"

  onMount(() => {

    // scroll(animate("#progress", { scaleX: [0, 1] }))

    document.querySelectorAll("section")
    forEach((section) => {
    const header = section.querySelector("h2");
    scroll(animate(header, { y: [-400, 400] }), {
      target: header
    });
  });

  })

</script>

<section class='snap-start'>
  <Hero />
  <h2 class='absolute font-sans font-size-6vw font-bold text-black inline-block m-0 z-10'></h2>
</section>

<section class='snap-start'>
  <Jubilee />
  <h2 class='absolute font-sans font-size-6vw font-bold text-black inline-block -mt-5% z-10'></h2>
</section>

<section class='snap-start'>
  <Program />
  <h2 class='absolute font-sans font-size-6vw font-bold text-black inline-block m-0 z-10'></h2>
</section>

<section class='snap-start'>
  <Destiny />
  <!-- <h2 class='absolute font-sans font-size-6vw font-bold text-black inline-block m-0 z-10'>#004</h2> -->
</section>
<!-- <div id='progress' class="fixed inset-x-0 h-7px scale-x-0 bg-red-7 z-12 top-10px"></div> -->

