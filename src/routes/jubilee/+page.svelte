<script lang='ts'>
  import { animate, inView } from "motion"
  import {onMount} from "svelte"

  onMount(() => {

  inView("section", ({ target }) => {
    animate(
      target.querySelector("#flight"),
      { x: [ '300%', '-100%'] }, { duration: 5, repeat: Infinity }
    );
  });

  })

</script>

<section
  class="relative h-[100dvh] w-[100dvw] flex">

  <div
    class="h-[100dvh] w-[100dvw] bg-cover bg-center" style="background-image: url('assets/jubilee/greenTheater.webp')">
  </div>

  <div class='absolute h-6% bottom-0 flex justify-center'>
    <img class='w-99%' src="assets/jubilee/vprogramme.svg" alt="v programme">
  </div>

  <div class='absolute top:0' id='flight'>
    <img
    class="object-contain w-[55%] overflow-hidden" src='assets/jubilee/joke.webp' alt="old lady flys"/>
  </div>

  <div class='absolute top:0' id='light'>
    <img
    class="object-contain w-[55%] overflow-hidden" src='assets/jubilee/jokeYellow.webp' alt="old lady flys"/>
  </div>

</section>