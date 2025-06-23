import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen p-8 bg-gray-50 dark:bg-gray-900">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-blue-600">TinyCRM</h1>
      </header>

      <nav className="mb-6">
        <ul className="flex gap-4 text-lg text-gray-700 dark:text-gray-300">
          <li><a href="#" className="hover:underline">Dashboard</a></li>
          <li><a href="#" className="hover:underline">Klienti</a></li>
          <li><a href="#" className="hover:underline">Nastavení</a></li>
        </ul>
      </nav>

      <main>
        <p>Vítej v TinyCRM! Tady bude hlavní obsah.</p>
      </main>
    </div>
  );
}