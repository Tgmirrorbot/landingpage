import Header from '../components/Header'

export default function Home() {
  return (
    <div className="min-h-screen text-white bg-gray-900">
      <Header />
      <main className="h-full flex items-center justify-center">
        <h1 className="font-bold text-5xl">Coming Soon</h1>
      </main>
    </div>
  )
}