<script lang="ts">
  import { animate, inView } from "motion"
  import { onMount } from "svelte"



onMount(() => {

inView("section", ({ target }) => {
  animate(
    target.querySelector("#fly")!,
    { x: [ '-100%', '300%'] }, { duration: 5, repeat: Infinity }
  );
});


});

</script>

<section
  class="relative h-[100dvh] w-[100dvw] -mt-5% flex -z-1">

  <div
    class="h-[100dvh] w-[100dvw] bg-cover bg-center" style="background-image: url('assets/program/greenTheaterYellow.png')">
  </div>

  <div class="absolute mt-40" id='fly'>

    <img
    class="object-contain w-[55%] overflow-hidden" src='assets/jubilee/joke.webp' alt="old lady flys"/>

  </div>

</section>