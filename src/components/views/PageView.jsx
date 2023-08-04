'use client'

import { Hero } from '../blocks'
import ContentBlocks from '../ContentBlocks'

export default function PageView({ data }) {
  return (
    <main>
      {data?.hero && <Hero data={data.hero} />}
      {data?.contentBlocks && <ContentBlocks blocks={data.contentBlocks} />}
    </main>
  )
}
