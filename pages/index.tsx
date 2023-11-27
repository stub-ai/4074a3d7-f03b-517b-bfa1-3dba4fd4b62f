import Image from 'next/image'
import { Inter } from 'next/font/google'
import HoverButton from '../components/HoverButton'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <HoverButton />
    </main>
  )
}