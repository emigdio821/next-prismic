import clsx from 'clsx'
import { forwardRef } from 'react'
import { BiX } from 'react-icons/bi'
import * as DialogPrimitive from '@radix-ui/react-dialog'

type DialogContentProps = {
  title?: string
  className?: string
  fullSize?: boolean
  description?: string
  transparent?: boolean
  children: React.ReactNode
} & React.ComponentProps<typeof DialogPrimitive.Content>

export const DialogContent = forwardRef<HTMLDivElement, DialogContentProps>(
  (
    { children, title, className, description, transparent, ...props },
    forwardedRef
  ) => (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className="fixed inset-0 z-[1] animate-overlayShow overflow-y-auto bg-black/80 backdrop-blur-sm duration-200 data-[state=closed]:animate-overlayHide" />
      <DialogPrimitive.Content
        {...props}
        ref={forwardedRef}
        className={clsx(
          'fixed top-2/4 left-2/4 z-[2] flex w-[90vw] max-w-lg -translate-x-2/4 -translate-y-2/4 animate-contentShow flex-col rounded-md p-6 pt-8 duration-200 focus:outline-none data-[state=closed]:animate-contentHide',
          { 'bg-transparent text-zinc-200 dark:bg-transparent': transparent },
          { 'bg-white shadow-md dark:bg-zinc-900': !transparent },
          className
        )}
      >
        {title && (
          <DialogPrimitive.Title className="mb-2 text-lg font-semibold">
            {title}
          </DialogPrimitive.Title>
        )}
        {description && (
          <DialogPrimitive.Description className="text-sm leading-tight opacity-70">
            {description}
          </DialogPrimitive.Description>
        )}
        {children}
        <DialogPrimitive.Close
          asChild
          aria-label="Close"
          className={clsx(
            'absolute top-3 right-3 inline-flex h-6 w-6 cursor-pointer items-center justify-center rounded-md border ring-zinc-300 duration-200 focus:ring-2 dark:ring-zinc-700',
            {
              'border-zinc-800 bg-zinc-800/60 ring-zinc-700 hover:bg-zinc-800 dark:border-zinc-800 dark:hover:bg-zinc-800/80':
                transparent
            },
            {
              'bg-zinc-100/80 hover:bg-zinc-100 dark:border-zinc-800 dark:hover:bg-zinc-800/80':
                !transparent
            }
          )}
        >
          <button className="outline-none">
            <BiX />
          </button>
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  )
)

export const Dialog = DialogPrimitive.Root
export const DialogTrigger = DialogPrimitive.Trigger

DialogContent.displayName = 'DialogContent'
