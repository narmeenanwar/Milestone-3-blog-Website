import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Blog() {
  return (
    <div className="min-h-screen bg-stone-100 p-8">
      <h1 className="text-3xl font-bold mb-6 text-stone-800">House Blog</h1>
      <p className="mb-6 text-stone-700">Welcome to our blog! Here you'll find articles about house design, architecture, and home improvement.</p>
      <Link href="/">
        <Button className=" text-white font-bold py-2 px-4 rounded">
          Back to Home
        </Button>
      </Link>
    </div>
  )
}