// import Link from 'next/link'
import { FiGithub } from 'react-icons/fi'

export default function Navbar() {
  return (
    <nav className="bg-transparent absolute w-full z-10">
      <div className="mx-auto p-4">
        <div className="relative flex items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <h2 className="text-zinc-200 font-bold text-lg">PrismicNext</h2>
            </div>
          </div>
          {/* <Link
            href="/about"
            className="text-sm bg-transparent border-zinc-200 border-2 text-zinc-200 py-2 px-8 font-semibold rounded-full hover:bg-zinc-200 hover:text-zinc-800"
          >
            About
          </Link> */}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/emigdio821/next-prismic"
            className="flex gap-2 text-zinc-400 items-center text-sm bg-zinc-600/20 py-2 px-4 font-semibold rounded-md hover:bg-zinc-600/30"
          >
            <FiGithub />
            Source
          </a>
        </div>
      </div>
    </nav>
  )
}
