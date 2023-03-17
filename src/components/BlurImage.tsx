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
      className={clsx(
        'group-hover:opacity-75 duration-200 ease-in-out object-cover',
        isLoading ? 'blur-xl scale-105' : 'blur-0 scale-100',
      )}
      onLoadingComplete={() => setLoading(false)}
    />
  )
}
