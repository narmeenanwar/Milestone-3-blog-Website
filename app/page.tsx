import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-cover bg-center">
      <div className="max-w-2xl text-center bg-white bg-opacity-50 p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-4 text-stone-800">Welcome to Our House Blog</h1>
        <p className="text-lg mb-6 text-stone-700">
          Discover the beauty of homes, from cozy cottages to modern mansions. Our blog covers architecture, interior design, and home improvement tips to help you create your dream living space.
        </p>
        <Link href="/blog">
          <Button className=" text-white font-bold py-2 px-4 rounded">
            Explore Our Blog
          </Button>
        </Link>
      </div>
    </main>
  )
}


