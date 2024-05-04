<script lang="ts">
	import { animate, inView, stagger } from 'motion';
	import { onMount } from 'svelte';

	onMount(() => {
		inView('section', ({ target }) => {
			animate(
				target.querySelectorAll('#fly')!,
				{ x: ['-50%', '150%'] },
				{ delay: stagger(1), duration: 5, repeat: Infinity }
			);
		});
	});
</script>

<section
	class="relative h-[100dvh] w-[100dvw] flex flex-col -mt-5% -z-1
  bg-cover bg-center"
	style="background-image: url('assets/program/greenTheaterYellow.png')"
>
	<div class="relative flex items-center pt-5% px-10">
		<h1 class="font-sans font-size-5vw italic font-900 text-blak pl-10%">oрекстр</h1>
		<img class="self-center w-20% pl-3%" src="assets/program/Pakava.webp" alt="ship" />
		<h1 class="font-sans font-size-5vw italic font-900 text-blak">«Пакава Ить»</h1>
	</div>

	<div class="relative flex items-center -mt-10 px-10">
		<h1 class="font-sans font-size-7vw italic font-900 text-#e30614 pl-10% pr-10">группа</h1>
		<img class="w-20%" src="assets/program/ship.webp" alt="пакава ить" />
		<img class="w-40%" src="assets/program/shipLogo.svg" alt="ships logo" />
	</div>

	<div class="relative flex items-center -mt-10 px-10">
		<h1 class="font-sans font-size-6vw font-300 text-#4b0082 opasity-70 tracking-widest pl-10%">группа</h1>
		<img class="self-center w-20% pl-3%" src="assets/program/sever.webp" alt="группа север" />
		<img class="w-40%" src="assets/program/nordLogo.svg" alt="sever logo" />
	</div>

	<div class="relative flex items-center -mt-10 px-10">
		<h1 class="font-sans font-size-6vw font-300 text-#4b0082 opasity-70 tracking-widest pl-10%">группа</h1>
		<img class="self-center w-20% pl-3%" src="assets/program/otzvuki.webp" alt="группа север" />
		<h1 class="font-sans font-size-5vw italic font-900 text-blak">«отзвуки му»</h1>
	</div>



	<div class="absolute w-100cqw mt-10%" id="fly">
		<img
			class="object-contain w-[20%] overflow-hidden"
			src="assets/jubilee/joke.png"
			alt="old lady flys"
		/>
	</div>

	<div class="absolute w-100cqw mt-25%" id="fly">
		<img
			class="object-contain w-[20%] overflow-hidden"
			src="assets/jubilee/joke.png"
			alt="old lady flys"
		/>
	</div>
	<div class="absolute w-100cqw mt-45%" id="fly">
		<img
			class="object-contain w-[20%] overflow-hidden"
			src="assets/jubilee/joke.png"
			alt="old lady flys"
		/>
	</div>
	<div class="absolute w-100cqw mt-70%" id="fly">
		<img
			class="object-contain w-[20%] overflow-hidden"
			src="assets/jubilee/joke.png"
			alt="old lady flys"
		/>
	</div>
</section>

<section class="relative h-[100dvh] w-[100dvw] grid-cols-5 gap-6">
	<div
		class="relative h-[100dvh] w-[100dvw] bg-cover bg-center"
		style="background-image: url('assets/program/greenTheaterYellow2.png')"
	></div>
</section>
