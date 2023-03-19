import { useState } from 'react'
import BlurImage from './BlurImage'
import {
  Dialog,
  DialogContent,
  DialogTrigger
} from '@/components/primitives/Dialog'
import { BiLinkExternal } from 'react-icons/bi'

interface ImageViewerProps {
  url: string
  title?: string
}

export default function ImageViewer({ url, title }: ImageViewerProps) {
  const [dialogOpened, setDialogOpened] = useState<boolean>(false)

  return (
    <>
      <Dialog
        open={dialogOpened}
        onOpenChange={(opened) => {
          setDialogOpened(opened)
        }}
      >
        <DialogTrigger asChild>
          <div
            onClick={() => setDialogOpened(true)}
            className="relative h-80 w-full cursor-pointer duration-300 group-hover:opacity-60"
          >
            <BlurImage src={url} />
          </div>
        </DialogTrigger>
        <DialogContent
          transparent
          title={title}
          subTitle={
            <a
              href={url}
              target="_blank"
              className="link inline-flex items-center gap-1 text-sm"
            >
              Full resolution
              <BiLinkExternal />
            </a>
          }
          className="h-[60%] w-[70%] !max-w-6xl max-md:w-full max-sm:h-[40%] max-sm:portrait:h-[60%] max-md:landscape:h-[100%]"
          onInteractOutside={(e) => e.preventDefault()}
        >
          <div className="relative h-full w-full rounded-md shadow-2xl">
            <BlurImage src={url} animation={false} />
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
