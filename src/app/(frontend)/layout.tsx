import type { Metadata } from 'next'

import { cn } from 'src/utilities/cn'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import {
  Amatic_SC,
  Anonymous_Pro,
  Charm,
  Inter,
  Tangerine,
  Petit_Formal_Script,
  Funnel_Display,
  Funnel_Sans,
  Ms_Madi,
  Pompiere,
} from 'next/font/google'
import React from 'react'

import { AdminBar } from '@/components/AdminBar'
import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'
import { draftMode } from 'next/headers'

import './globals.css'
import { getServerSideURL } from '@/utilities/getURL'

const amatic = Amatic_SC({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-amatic',
})

const anonymousPro = Anonymous_Pro({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-anonymous-pro',
})

const tangerine = Tangerine({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-tangerine',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-inter',
})

const charm = Charm({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-charm',
})

const petitFormalScript = Petit_Formal_Script({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-petit-formal-script',
})

const funnelSans = Funnel_Sans({
  subsets: ['latin'],
  weight: ['300', '700'],
  variable: '--font-funnel-sans',
})

const msMadi = Ms_Madi({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-ms-madi',
})

const pompiere = Pompiere({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-pompiere',
})

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const { isEnabled } = await draftMode()

  return (
    <html
      className={cn(
        GeistSans.variable,
        GeistMono.variable,
        amatic.variable,
        anonymousPro.variable,
        tangerine.variable,
        inter.variable,
        charm.variable,
        petitFormalScript.variable,
        funnelSans.variable,
        msMadi.variable,
        pompiere.variable,
      )}
      lang="en"
      suppressHydrationWarning
    >
      <head>
        <link href="/favicon.png" rel="icon" sizes="32x32" />
      </head>
      <body>
        <AdminBar
          adminBarProps={{
            preview: isEnabled,
          }}
        />
        {children}
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  metadataBase: new URL(getServerSideURL()),
  openGraph: mergeOpenGraph(),
}
