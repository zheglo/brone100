import { defineConfig, presetWind3 } from 'unocss';
import presetRemToPx from '@unocss/preset-rem-to-px'

export default defineConfig({
  presets: [
    presetWind3(),
    presetRemToPx(),
  ],

  preflights: [
    {
      getCSS: () => `
        @font-face {
				font-family: 'Montserrat';
				src: url('./src/lib/fonts/Montserrat.woff2') format('woff2-variations'),
              url('./src/lib/fonts/Montserrat.woff2') format('woff2');
				font-weight: 100 900;
				font-style: normal;
				font-display: swap;
		},

        @font-face {
				font-family: 'Playfair Display';
				src: url('./src/lib/fonts/Playfair_Display.woff2') format('woff2-variations')
                url('./src/lib/fonts/Playfair_Display.woff2') format('woff2');
				font-weight: 400 900;
				font-style: normal;
				font-display: swap;
		},

        @font-face {
				font-family: 'Magical Childhood Regular';
				src: url('./src/lib/fonts/MagicalChildhood-Rprjl.woff2') format('woff2');
				font-weight: 400;
				font-style: normal;
				font-display: swap;
		}

        html, body {
				font-family: 'Montserrat', system-ui, sans-serif;
				-webkit-font-smoothing: antialiased;
				}

				h1, h2, h3, h4, h5, h6 {
					font-family: 'Playfair Display', serif;
				}
      `,
    },
  ],

  theme: {

  },
    // другие пресеты, например, presetIcons
});