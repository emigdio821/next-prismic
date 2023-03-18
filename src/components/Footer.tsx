import { SiPrismic } from 'react-icons/si'
import { TbBrandNextjs, TbBrandTailwind } from 'react-icons/tb'

export default function Footer() {
  return (
    <footer className="mt-auto flex flex-col items-center justify-center gap-2 border-t-[1px] border-t-zinc-200 p-4 dark:border-t-zinc-800">
      <div className="text-center text-sm font-semibold">Powered by</div>
      <div className="flex items-center gap-4">
        <TbBrandNextjs size={30} />
        <TbBrandTailwind size={30} />
        <SiPrismic size={22} />
      </div>
    </footer>
  )
}
