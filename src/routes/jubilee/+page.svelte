<script lang='ts'>
  import { animate, inView } from "motion";
  import { onMount } from "svelte";

  onMount(() => {

  inView("section", ({ target }) => {
    animate(
      target.querySelector("#flight")!,
      { x: ['-100%', '230%'] }, { duration: 4, repeat: Infinity }
      );
    animate(
      target.querySelector("#light")!,
      { x: ['230%', '-180%'] }, { duration: 5, delay: 2.5, repeat: Infinity }
      );
    })
  })

</script>

<section
  class="relative h-[100dvh] w-[100dvw] flex justify-center items-center">

  <div
    class="h-[100dvh] w-[100dvw] bg-cover bg-center" style="background-image: url('assets/jubilee/greenTheater.webp')">
  </div>

  <div class="absolute mt-20 ml-4% mr-4% flex justify-center animate-bounce-alt z-1">
    <img class="h-80cqh w-90vw" src="assets/jubilee/5.svg" alt="data">
 </div>

 <div class='absolute top-10 z-3' id='flight'>
  <img
  class="object-contain w-[90%] overflow-hidden" src='assets/jubilee/joke.png' alt="old lady flys"/>
</div>

  <div class="absolute h-[100dvh] w-[100dvw] flex justify-between z-1">

    <h1 class='font-sans font-size-6vw font-bold text-#ff1493 px-2% w-40% leading-75%'>
      ЗЕЛЁНЫЙ ТЕАТР<br/>
      им. Стаса НАМИНА<br/>
      в Нескучном саду<br/>
      им. парка Горького
    </h1>

    <div class='w-30px grow'></div>

    <h2 class='font-sans font-size-4cqw font-bold text-#ff0088 pr-5% pl-5% pb-5% w-40% leading-85% self-center z-2'>
      торжественные
      мероприятия
      приуроченные
      к столетнему<br/>
      юбилею
      Брониславы<br/>
      Анатольевны<br/>
      Дубнер<br/>
      (урожденной<br/>
      Гусевой),<br/>
      альтернативной<br/>
      мисс Вселенная 1998
    </h2>

  </div>

  <div class='absolute mt-170 flex justify-end' id='light'>
    <img
    class="object-contain w-[90%] overflow-hidden" src='assets/jubilee/jokeYellow.webp' alt="old lady flys"/>
  </div>

  <div class='absolute h-6% bottom-0 flex justify-center'>
    <img class='w-99% pr-15% self-end' src="assets/jubilee/vprogramme.svg" alt="v programme">
  </div>

</section>