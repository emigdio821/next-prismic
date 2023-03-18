import {
  PrismicLink,
  PrismicRichText,
  SliceComponentProps
} from '@prismicio/react'
import BlurImage from '@/components/BlurImage'
import type { Content } from '@prismicio/client'

type HeroProps = SliceComponentProps<Content.HeroSliceSlice>

const HeroSlice = ({ slice }: HeroProps) => (
  <section className="relative flex h-[500px] w-full items-center justify-center bg-zinc-900 p-6">
    <div className="absolute inset-0 overflow-hidden">
      {slice.primary.image.url && <BlurImage src={slice.primary.image.url} />}
      <div className="absolute inset-0 bg-zinc-500 mix-blend-multiply" />
    </div>
    <div className="relative flex flex-col items-center gap-6">
      <div className="flex flex-col items-center gap-1">
        <div className="text-3xl font-bold text-zinc-100">
          <PrismicRichText field={slice.primary.title} />
        </div>
        <div className="text-center text-base text-zinc-200">
          <PrismicRichText field={slice.primary.description} />
        </div>
      </div>
      {slice.items.length && (
        <div className="flex gap-2">
          {slice.items.map((item) => (
            <PrismicLink
              field={item.link}
              key={item.linkText}
              className="rounded-full bg-zinc-200/70 py-2 px-4 text-sm font-semibold duration-200 hover:bg-zinc-200/90 dark:bg-zinc-800/70 dark:hover:bg-zinc-800/90"
            >
              {item.linkText}
            </PrismicLink>
          ))}
        </div>
      )}
    </div>
  </section>
)

export default HeroSlice
