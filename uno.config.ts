import { presetAttributify, presetIcons } from 'unocss'
import presetWeapp from 'unocss-preset-weapp'
import { transformerAttributify, transformerClass } from 'unocss-preset-weapp/transformer'

export default {
  shortcuts: [
    {
      'flex-center': 'flex justify-center items-center',
    },
  ],
  rules: [
    [
      /^lh-(\d+)$/,
      ([, n]) => ({
        'line-height': `${n / 100}`,
      }),
    ],
  ],
  theme: {
    extend: {
      fontSize: {
        base: '0.125rem',
      },
    },
  },
  presets: [
    // https://github.com/MellowCo/unocss-preset-weapp
    presetWeapp(),
    presetIcons({ scale: 1.2 }),
    presetAttributify(),
  ],
  transformers: [
    transformerAttributify(),
    transformerClass(),
  ],
}
