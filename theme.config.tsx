import React from 'react'
import Image from 'next';
import Script from 'next/script'

import { DocsThemeConfig, Tabs, Tab } from 'nextra-theme-docs';

import { Logo } from './components/logo';

const config: DocsThemeConfig = {
  logo: () => <Logo />,
  head: () => (
    <>
      <Script
        async
        src={process.env.NEXT_PUBLIC_ANALYTICS_URL}
        data-website-id={process.env.NEXT_PUBLIC_ANALYTICS_ID}
      />
    </>
  ),
  useNextSeoProps: () => ({
    titleTemplate: '%s - SecNex',
  }),
  project: {
    link: 'https://github.com/secnex',
  },
  chat: {
    link: 'https://discord.gg/BXkY4Yt5TW',
  },
  docsRepositoryBase: 'https://github.com/secnex/docs',
  footer: {
    text: 'SecNex © 2024',
  },
  // i18n: [
  //   { locale: 'en', text: 'English' },
  //   { locale: 'de', text: 'Deutsch' },
  // ],
  primaryHue: {
    dark: 96,
    light: 92,
  },
  primarySaturation: {
    dark: 100,
    light: 90,
  },
  // banner: {
  //   key: '2.0-release',
  //   text: (
  //     <a href="https://nextra.site" target="_blank">
  //       🎉 Nextra 2.0 is released. Read more →
  //     </a>
  //   )
  // },
  toc: {
  },
  sidebar: {
    toggleButton: true,
    titleComponent: ({ title, type }) => {
      if (type === 'h1') {
        return (
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">{title}</h1>
          </div>
        )
      }
      return (
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold">{title}</h2>
        </div>
      )
    }
  },
  search: {}
}

export default config
