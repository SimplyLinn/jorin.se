import type { ThemeConfig } from './theme/lib/config'

const config: ThemeConfig = {
  lang: 'en-GB',
  title: {
    postfix: "Jorin's website",
    separator: ' · ',
  },
  externalLinks: [
    {
      id: 'soundcloud',
      title: 'SoundCloud',
      href: 'https://soundcloud.com/yawninggirl',
    },
    {
      id: 'bandcamp',
      title: 'Bandcamp',
      href: 'https://yawninggirl.bandcamp.com',
    },
    {
      id: 'github',
      title: 'GitHub',
      href: 'https://github.com/jorins',
    },
  ],
}

export default config
