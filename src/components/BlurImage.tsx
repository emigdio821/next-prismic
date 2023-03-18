import clsx from 'clsx'
import Image from 'next/image'
import { useState } from 'react'

interface BlurImageProps {
  src: string
}

export default function BlurImage({ src }: BlurImageProps) {
  const [isLoading, setLoading] = useState<boolean>(true)

  return (
    <Image
      fill
      alt=""
      src={src}
      sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
      className={clsx(
        'object-cover duration-500 ease-in-out group-hover:scale-105',
        isLoading ? 'scale-110 blur-xl' : 'scale-100 blur-0'
      )}
      onLoadingComplete={() => setLoading(false)}
    />
  )
}
