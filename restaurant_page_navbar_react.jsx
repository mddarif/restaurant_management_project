/*
Restaurant Page + Navbar
- React single-file components using Tailwind CSS (no extra imports required for Tailwind classes)
- Includes: Navbar (with link to Restaurant page) and RestaurantPage component (default export)
- How to use:
  • If you use React Router: add a route for path "/restaurant" that renders <RestaurantPage />.
  • If you use Next.js: copy the RestaurantPage component into `app/restaurant/page.jsx` (or `pages/restaurant.jsx`) and import/use the Navbar in your main layout.
  • The Navbar component exports a small navigation bar — replace or merge it into your existing site header.
- Placeholder image uses Unsplash (open-source friendly) and includes alt text.
*/

import React from "react";
import { Link } from "react-router-dom"; // remove or replace if you're not using react-router

export function Navbar() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-rose-500 rounded-full flex items-center justify-center text-white font-bold">R</div>
          <h1 className="text-xl font-semibold">GreenFork Bistro</h1>
        </div>

        <nav>
          <ul className="flex gap-6 items-center">
            <li>
              <Link to="/" className="text-gray-700 hover:text-amber-500">Home</Link>
            </li>
            <li>
              <Link to="/menu" className="text-gray-700 hover:text-amber-500">Menu</Link>
            </li>
            <li>
              <Link to="/restaurant" className="text-amber-600 font-medium">About</Link>
            </li>
            <li>
              <Link to="/contact" className="text-gray-700 hover:text-amber-500">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default function RestaurantPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Navbar />

      <main className="max-w-5xl mx-auto px-4 py-12">
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-extrabold mb-4">About GreenFork Bistro</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              GreenFork Bistro is a neighbourhood restaurant serving fresh, seasonal dishes with
              a sustainable touch. We blend classic flavours with modern techniques to create
              approachable meals made from locally sourced produce. Our cozy dining room and
              friendly staff make every visit feel like coming home.
            </p>

            <ul className="space-y-2 text-gray-700">
              <li>• Farm-to-table ingredients with daily specials</li>
              <li>• Vegetarian, vegan and gluten-free options available</li>
              <li>• Casual dine-in, takeout, and small-group catering</li>
            </ul>

            <div className="mt-6">
              <a
                href="/reservation"
                className="inline-block rounded-2xl px-5 py-2.5 bg-amber-500 text-white font-medium shadow"
              >
                Make a reservation
              </a>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden shadow-lg bg-white">
            <img
              src="https://images.unsplash.com/photo-1541542684-7c5a8f7b0d6f?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder"
              alt="Interior of a cozy restaurant with wooden tables and plates"
              className="w-full h-72 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold">Seasonal dining, thoughtfully prepared</h3>
              <p className="text-sm text-gray-600 mt-2">Open Tue–Sun • Brunch & Dinner</p>
            </div>
          </div>
        </section>

        <section className="mt-12 grid md:grid-cols-3 gap-6">
          <article className="bg-white p-4 rounded-lg shadow-sm">
            <h4 className="font-semibold mb-2">Our Story</h4>
            <p className="text-sm text-gray-600">Started by local chefs with a passion for sustainable cooking.</p>
          </article>

          <article className="bg-white p-4 rounded-lg shadow-sm">
            <h4 className="font-semibold mb-2">Catering</h4>
            <p className="text-sm text-gray-600">Small-event catering for offices and gatherings.</p>
          </article>

          <article className="bg-white p-4 rounded-lg shadow-sm">
            <h4 className="font-semibold mb-2">Private Events</h4>
            <p className="text-sm text-gray-600">Book our backroom for intimate dinners and celebrations.</p>
          </article>
        </section>
      </main>

      <footer className="border-t mt-12 py-6">
        <div className="max-w-5xl mx-auto px-4 text-sm text-gray-600">© {new Date().getFullYear()} GreenFork Bistro</div>
      </footer>
    </div>
  );
}
