import Head from 'next/head'
import { useState, useEffect } from 'react'
import { BiMoon, BiSun } from 'react-icons/bi'

export default function ThemeBtn() {
  const [darkTheme, setDarkTheme] = useState<boolean>(false)

  function handleTheme() {
    document.documentElement.classList.toggle('dark')

    if (!darkTheme) {
      localStorage.setItem('theme', 'dark')
    } else {
      localStorage.removeItem('theme')
    }
    setDarkTheme(!darkTheme)
  }

  useEffect(() => {
    if (localStorage.getItem('theme') === 'dark') {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
      setDarkTheme(true)
    }
  }, [])

  return (
    <>
      <Head>
        <meta name="theme-color" content={darkTheme ? '#18181b' : '#ffffff'} />
      </Head>
      <button
        onClick={handleTheme}
        className="flex items-center gap-2 rounded-full bg-zinc-300/10 py-2 px-4 text-sm font-semibold text-zinc-300 hover:bg-zinc-300/20"
      >
        {darkTheme ? <BiSun /> : <BiMoon />}
      </button>
    </>
  )
}
