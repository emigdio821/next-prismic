import { FiGithub } from 'react-icons/fi'
import ThemeBtn from './ThemeBtn'

export default function Navbar() {
  return (
    <nav className="absolute z-[1] w-full max-w-[2560px] bg-transparent">
      <div className="mx-auto p-4">
        <div className="relative flex items-center justify-between">
          <div className="flex  items-center justify-center">
            <h2 className="text-lg font-bold text-zinc-200">Prismicool</h2>
          </div>
          <div className="flex gap-2">
            <ThemeBtn />
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/emigdio821/next-prismic"
              className="flex items-center gap-2 rounded-md bg-zinc-300/10 py-2 px-4 text-sm font-semibold text-zinc-300 duration-200 hover:bg-zinc-300/20"
            >
              <FiGithub />
              Source
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
