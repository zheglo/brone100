<script lang="ts">
import type { Attachment } from 'svelte/attachments'
import probroneWebm from '~assets/hero/punkvideo/probrone.webm'
import probroneMp4 from '~assets/hero/punkvideo/probrone.mp4'
</script>

<section class="relative h-[100dvh] w-[100dvw] flex items-center justify-center overflow-hidden">

  <div class="absolute inset-0 overflow-hidden">
    <video class="absolute h-full w-full object-cover -z-20" muted autoplay loop playsinline>
      <source src={probroneWebm} type="video/webm" />
      <source src={probroneMp4} type="video/mp4" />
    </video>
  </div>
  </div>

</section>