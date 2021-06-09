import { useEffect } from 'react'
import 'tailwindcss/tailwind.css'
import Navbar from '../components/navbar/Navbar'
import Link from 'next/link'

export default function Home() {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
  }, []);

  return (
    <>
      <Navbar />
      <div className="text-center font-display mt-14">
        <h1 className="text-7xl font-extrabold">Your music <span className="text-green-900">speaks</span>.</h1>
      </div>

      <div className="mx-auto max-w-2xl w-100 text-center mt-3">
        <h2 className="text-xl">See which artists and tracks you've listened to the most within the past month, 
          six month, or even all-time in a single place.</h2>
      </div>

      <div className="text-center mt-5">
        <Link href="/auth" passHref>
          <button className="bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded">
            Sign in via Spotify
          </button>
        </Link>
      </div>

      <div className="text-center text-sm text-gray-600 mt-2">
        <p>Your privacy is important, learn more&nbsp;
          <a href="#" className="text-blue-600 hover:text-blue-800 visited:text-purple-600">here</a>.</p>
      </div>

      <div className="w-100 mt-8">
        <img 
          src="https://myspotify.pw/assets/img/preview.png"
          alt="showcase"
          className="mx-auto max-w-screen-xl w-11/12 shadow-2xl"
        />
      </div>
    </>
  );
}
