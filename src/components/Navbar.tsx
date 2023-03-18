// import Link from 'next/link'
import { FiGithub } from 'react-icons/fi'
import ThemeBtn from './ThemeBtn'

export default function Navbar() {
  return (
    <nav className="absolute z-10 w-full bg-transparent">
      <div className="mx-auto p-4">
        <div className="relative flex items-center justify-between">
          <div className="flex  items-center justify-center">
            <h2 className="text-lg font-bold text-zinc-200">PrismicNext</h2>
          </div>
          {/* <Link
            href="/about"
            className="text-sm bg-transparent border-zinc-200 border-2 text-zinc-200 py-2 px-8 font-semibold rounded-full hover:bg-zinc-200 hover:text-zinc-800"
          >
            About
          </Link> */}
          <div className="flex gap-2">
            <ThemeBtn />
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/emigdio821/next-prismic"
              className="flex items-center gap-2 rounded-md bg-zinc-300/10 py-2 px-4 text-sm font-semibold text-zinc-300 hover:bg-zinc-300/20"
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
