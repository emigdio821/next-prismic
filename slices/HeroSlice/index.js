import BlurImage from '@/components/BlurImage'
import { BiRightArrowAlt } from 'react-icons/bi'
import { PrismicLink, PrismicRichText } from '@prismicio/react'

/**
 * @typedef {import("@prismicio/client").Content.HeroSliceSlice} HeroSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroSliceSlice>} HeroSliceProps
 * @param { HeroSliceProps }
 */
const HeroSlice = ({ slice }) => (
  <section className="relative flex h-[500px] w-full items-center justify-center bg-zinc-900 p-6">
    <div className="absolute inset-0 overflow-hidden">
      <BlurImage src={slice.primary.image.url} />
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
          {slice.items.map((item) => {
            return (
              <PrismicLink
                key={item.cta_link}
                field={item.cta_link}
                className="rounded-full bg-zinc-200/70 py-2 px-4 text-sm font-semibold duration-200 hover:bg-zinc-200/90 dark:bg-zinc-800/70 dark:hover:bg-zinc-800/90"
              >
                {item.cta_text}
              </PrismicLink>
            )
          })}
        </div>
      )}
    </div>
  </section>
  // <pre>{JSON.stringify(slice, null, 2)}</pre>
)

export default HeroSlice
