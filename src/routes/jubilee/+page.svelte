<script lang='ts'>
  import { animate, inView } from "motion";
  import { onMount } from "svelte";

  onMount(() => {

  inView("section", ({ target }) => {
    animate(
      target.querySelector("#flight")!,
      { x: ['-100%', '300%'] }, { duration: 5, repeat: Infinity }
    );
    animate(
    target.querySelector("#light")!,
    { x: ['300%', '-100%'] }, { duration: 5, delay: 2, repeat: Infinity }
  );
  });

  })

</script>

<section
  class="relative h-[100dvh] w-[100dvw] flex">

  <div
    class="h-[100dvh] w-[100dvw] bg-cover bg-center" style="background-image: url('assets/jubilee/greenTheater.webp')">
  </div>

  <div class='absolute top-10 z-10' id='flight'>
    <img
    class="object-contain w-[90%] overflow-hidden" src='assets/jubilee/joke.webp' alt="old lady flys"/>
  </div>

  <div class="absolute grid grid-cols-3 gap-4 z-1">
    <h1 class='font-sans font-size-6vw font-bold text-#ff1493 px-5% leading-75%'>
      ЗЕЛЁНЫЙ ТЕАТР<br/>
      им. Стаса НАМИНА<br/>
      в Нескучном саду<br/>
      им. парка Горького
    </h1>

    <div class="mt-20 animate-bounce-alt">
       <img class="w-[99%] max-h-80%" src="assets/jubilee/5.svg" alt="data">
    </div>

    <h2 class='font-sans font-size-4vw font-bold text-#ff1493 px-5% leading-90% z-2'>
      торжественное<br/>
      мероприятие<br/>
      приуроченное<br/>
      к столетнему<br/>
      юбилею<br/>
      Брониславы<br/>
      Анатольевны<br/>
      Дубнер<br/>
      (урожденной<br/>
      Гусевой),<br/>
      альтернативной<br/>
      мисс Мира
    </h2>




  </div>

  <div class='absolute mt-170 flex justify-end' id='light'>
    <img
    class="object-contain w-[90%] overflow-hidden" src='assets/jubilee/jokeYellow.webp' alt="old lady flys"/>
  </div>

  <div class='absolute h-6% bottom-0 flex justify-center'>
    <img class='w-99%' src="assets/jubilee/vprogramme.svg" alt="v programme">
  </div>

</section>