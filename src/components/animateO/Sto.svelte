<!-- src/lib/components/Sto.svelte -->
<script lang="ts">
  import type { Attachment } from 'svelte/attachments';
  import { animate, type AnimationSequence} from 'motion';
  import arrowL from '~assets/hero/arrowL.svg';
  import arrowR from '~assets/hero/arrowR.svg';
  import arrowB from '~assets/hero/arrowB.svg';


  // 1. Счётчик 0 -> 100 на рунах Svelte 5
  let count = $state(0);

  $effect(() => {
    const interval = setInterval(() => {
      if (count >= 100) {
        count = 100;
        clearInterval(interval); // Теперь таймер честно очищается!
      } else {
        count += 2;
      }
    }, 100);

    return () => clearInterval(interval);
  });


</script>

