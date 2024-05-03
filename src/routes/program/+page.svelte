<script lang="ts">
	import { animate, inView } from 'motion';
	import { onMount } from 'svelte';

	onMount(() => {
		inView('section', ({ target }) => {
			animate(
				target.querySelector('#fly')!,
				{ x: ['-50%', '150%'] },
				{ duration: 5, repeat: Infinity }
			);
		});
	});
</script>

<section
	class="relative h-[100dvh] w-[100dvw] -mt-5% flex flex-col -z-1
  bg-cover bg-center"
	style="background-image: url('assets/program/greenTheaterYellow.png')"
>
	<container class="relative flex flex-row justify-center mx-auto mt-10% w-90%">
		<div class="absolute flex flex-row mx-auto mt-3% w-90% justify-end right-0">
			<img class="absolute w-50% -right-2 -top-3" src="assets/program/shipLogo.svg" alt="ships logo" />
			<h1
				class="absolute font-sans font-size-6vw italic font-900 text-black text-right px-2% w-90% leading-75%"
			>
				группа «Корабль»
			</h1>
		</div>
		<div class="flex flex-col justify-center">
			<img class="w-40%" src="assets/program/ship.webp" alt="ship" />
			<div class="bg-#fff bg-opacity-90 w-60%">
				<p class="text-red-700 px-4 font-600">
					Арт-квинтет, созданный в 1995–1996 годах единомышленниками из московской художественной
					среды, смело экспериментирующий на различных творческих плоскостях и в прочих
					пространствах. В создании текстов и музыки принимаюи участие все члены команды.
					Пропагандируют искренность, любовь и дружбу.
				</p>
			</div>
		</div>
	</container>

	<container class="relative flex flex-row justify-center mt-200 mx-auto mt-10">
		<div class="h-50 w-300 border-solid  border-red-700 border-10">
			<img class="w-50%" src="assets/program/Pakava.webp" alt="Pakava" />
		</div>
	</container>

	<!-- <container class='flex flex-col items-center mt-10% h-[90dvh]'>
		<wrapperK class="flex flex-col w-50%">

				<img class='w-25%' src="assets/program/ship.webp" alt="ship" />
				<img class='absolute w-30% top-20 -left-1' src="assets/program/shipLogo.svg" alt="ships logo" />

				<div class='bg-#fff bg-opacity-90 w-25%'>
				<p class='text-red-700 px-4 font-600'>
					Арт-квинтет, созданный в 1995–1996 годах единомышленниками из московской художественной среды, смело экспериментирует на различных творческих плоскостях. В создании текстов и
					музыки участвует каждый из участников коллектива. Пропагандируют искренность, любовь и дружбу.
				</p>
			</div>
		</wrapperK>
		<wrapperK class="flex flex-col w-50%">

			<img class='w-25%' src="assets/program/Pakava.webp" alt="Pakava" />

			<div class='bg-#fff bg-opacity-80 w-25%'>
			<p class='text-#483d8b px-4 font-300 text-12px'>фото: Сергей Анисимов</p>
			<p class='text-#483d8b px-4 font-600'>
				Экстравагантный состав и сценический облик Pakava Orchestra превращает каждое их выступление в настоящий музыкальныи перформанс с элементами хореографии и импровизационного театра,  драматичный рейв или даже Цирковой парад
			</p>
		</div>
	</wrapperK>

	<container class='flex flex-col items-center mt-10% h-[90dvh]'>
		<wrapperK class="flex flex-col w-50%">

				<h1 class="font-sans font-900 text-black text-4xl">отЗВУКИ МУ</h1>
				<img class='w-25%' src="assets/program/otzvuki.webp" alt="otzvukimu" />

				<div class='bg-#fff bg-opacity-90 w-25%'>
				<p class='text-red-700 px-4 font-600'>
					Неумерающие участники легендарной группы «Звуки Му», на этот раз с Машей Макаровой вместо Петра Мамонова
				</p>
			</div>
		</wrapperK>
		<wrapperK class="flex flex-col w-50%">

			<img class='w-25%' src="assets/program/sever.webp" alt="nord" />
			<img class='absolute w-30% top-20 -left-1' src="assets/program/nordLogoW.svg" alt="nord logo" />

			<div class='bg-#fff bg-opacity-80 w-25%'>
			<p class='text-#483d8b px-4 font-600'>
				Екатерина Рыжикова со второй половины 80-х вместе со своими сторонниками несла свет внутреннего Севера в души просвещённой публики посредством пламенных ритуальных перформансов, изощрённо оснащённых презабавными дичайшими фенечками
			</p>
		</div>
	</wrapperK>
	</container>

	<container class='flex flex-col items-center mt-10% h-[90dvh]'>

	</container> -->

	<div class="absolute w-100cqw mt-10%" id="fly">
		<img
			class="object-contain w-[20%] overflow-hidden"
			src="assets/jubilee/joke.png"
			alt="old lady flys"
		/>
	</div>
</section>
