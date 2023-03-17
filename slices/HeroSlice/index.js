import { PrismicLink, PrismicRichText } from '@prismicio/react'
import BlurImage from '@/components/BlurImage'

/**
 * @typedef {import("@prismicio/client").Content.HeroSliceSlice} HeroSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroSliceSlice>} HeroSliceProps
 * @param { HeroSliceProps }
 */
const HeroSlice = ({ slice }) => (
  <section className="relative bg-zinc-900 w-full p-6 h-[500px] flex items-center justify-center">
    <div className="absolute inset-0 overflow-hidden">
      <BlurImage src={slice.primary.image.url} />
      <div className="absolute inset-0 bg-zinc-500 mix-blend-multiply" />
    </div>
    <div className="relative flex flex-col gap-6 items-center">
      <div className="flex flex-col items-center gap-1">
        <div className="font-bold text-3xl text-zinc-100">
          <PrismicRichText field={slice.primary.title} />
        </div>
        <div className="text-base text-zinc-200 text-center">
          <PrismicRichText field={slice.primary.description} />
        </div>
      </div>
      <div className="flex gap-2">
        {slice.items.map((item) => {
          return (
            <PrismicLink
              key={item.cta_link}
              field={item.cta_link}
              className="text-sm bg-zinc-200 py-2 px-4 font-semibold rounded-full hover:bg-zinc-300 text-zinc-700"
            >
              {item.cta_text}
            </PrismicLink>
          )
        })}
      </div>
    </div>
  </section>
)

export default HeroSlice
