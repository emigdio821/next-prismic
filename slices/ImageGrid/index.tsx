import BlurImage from '@/components/BlurImage'
import { Content } from '@prismicio/client'
import { PrismicRichText, SliceComponentProps } from '@prismicio/react'

type ImageGridProps = SliceComponentProps<Content.ImageGridSlice>

const ImageGrid = ({ slice }: ImageGridProps) => (
  <section className="flex flex-col gap-4 p-4">
    <div className="flex flex-col gap-1">
      <div className="text-xl font-bold">
        <PrismicRichText field={slice.primary.title} />
      </div>
      <div className="text-sm">
        <PrismicRichText field={slice.primary.description} />
      </div>
    </div>
    <div className="grid grid-cols-3 gap-4 max-lg:grid-cols-2 max-sm:grid-cols-1">
      {slice.items.map((item) => (
        <div
          key={item.image.url}
          className="group relative overflow-hidden rounded-xl bg-zinc-900 max-sm:h-60"
        >
          {item.image.url && (
            <div className="relative h-80 w-full duration-300 group-hover:opacity-60">
              <BlurImage src={item.image.url} />
            </div>
          )}
          {item.image.alt && (
            <div className="absolute bottom-0 w-full bg-black/20 p-4 text-center text-sm font-semibold text-zinc-200 opacity-0 backdrop-blur-md duration-200 group-hover:opacity-100">
              <h6 className="translate-y-1 duration-200 group-hover:translate-y-0">
                {item.image.alt}
              </h6>
            </div>
          )}
        </div>
      ))}
    </div>
  </section>
)

export default ImageGrid
