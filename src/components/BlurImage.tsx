import clsx from 'clsx'
import Image from 'next/image'
import { useState } from 'react'

interface BlurImageProps {
  src: string
  animation?: boolean
  priority?: boolean
}

export default function BlurImage({
  src,
  priority,
  animation = true
}: BlurImageProps) {
  const [isLoading, setLoading] = useState<boolean>(true)

  return (
    <Image
      fill
      alt=""
      src={src}
      priority={priority}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      className={clsx(
        'rounded-[inherit] object-cover duration-500 ease-in-out group-hover:scale-105',
        isLoading ? 'blur-md' : 'blur-0',
        animation && isLoading ? 'scale-105' : 'scale-100'
      )}
      onError={() => setLoading(false)}
      onLoadingComplete={() => setLoading(false)}
    />
  )
}
