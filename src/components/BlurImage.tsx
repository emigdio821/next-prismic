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
        'duration-500 ease-in-out object-cover',
        isLoading ? 'blur-xl scale-110' : 'blur-0 scale-100',
      )}
      onLoadingComplete={() => setLoading(false)}
    />
  )
}
