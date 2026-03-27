import React from "react";
import { Heart, ShoppingBag, Search } from "lucide-react";

/* ================== DATA ================== */
const products = [
  {
    id: 1,
    name: "X-Bud",
    type: "New Gen",
    img: "https://images.unsplash.com/photo-1606229365485-93a3b8ee0385",
  },
  {
    id: 2,
    name: "Light Grey Surface Headphone",
    desc: "Boosted with bass",
    img: "https://i.pinimg.com/736x/85/1a/62/851a62d06cd8ea0598f5e7b83a698812.jpg",
  },
];

/* ================== COMPONENT ================== */
export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-300 to-green-100 p-6">

      {/* MAIN CONTAINER */}
      <div className="max-w-7xl mx-auto bg-white/40 backdrop-blur-2xl rounded-[40px] shadow-2xl p-6">

        {/* ================= NAVBAR ================= */}
        <div className="flex items-center justify-between mb-6">

          <h1 className="text-xl font-bold">Nitec.</h1>

          {/* SEARCH */}
          <div className="flex items-center bg-white px-4 py-2 rounded-full w-[350px] shadow">
            <input
              type="text"
              placeholder="Search products..."
              className="flex-1 outline-none text-sm"
            />
            <Search size={18} />
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-4">
            <ShoppingBag className="bg-white p-2 rounded-full shadow w-10 h-10" />
            <Heart className="bg-white p-2 rounded-full shadow w-10 h-10 text-red-500" />

            <div className="flex items-center gap-2 bg-white px-3 py-1 rounded-full shadow">
              <img src="https://i.pravatar.cc/40" className="w-8 h-8 rounded-full" />
              <span className="text-sm">Ryman Alex</span>
            </div>
          </div>
        </div>

        {/* ================= MAIN GRID ================= */}
        <div className="grid grid-cols-4 gap-6">

          {/* HERO */}
          <div className="col-span-3 bg-white/60 rounded-[30px] p-10 relative overflow-hidden">

            <span className="text-xs bg-gray-200 px-4 py-1 rounded-full text-gray-600">
              🎵 Music is Classic
            </span>

            <h1 className="text-[42px] font-bold mt-6 leading-tight">
              Sequoia Inspiring <br /> Musico.
            </h1>

            <div className="flex items-center gap-4 mt-6 text-gray-400">
              <span className="text-2xl">01</span>
              <div className="h-[1px] w-20 bg-gray-300"></div>
            </div>

            <div className="mt-4 max-w-md">
              <p className="font-semibold">Clear Sounds</p>
              <p className="text-sm text-gray-500">
                Making your dream music come true stay with Sequois Sounds!
              </p>
            </div>

            <button className="mt-6 bg-lime-400 px-6 py-3 rounded-full flex items-center gap-3 shadow hover:bg-lime-500 transition">
              View All Products
              <span className="bg-black text-white w-6 h-6 flex items-center justify-center rounded-full">
                →
              </span>
            </button>

            {/* IMAGE */}
            <img
              src="https://images.unsplash.com/photo-1580894908361-967195033215"
              className="absolute right-10 top-12 w-[320px] drop-shadow-xl"
            />

            {/* SOCIAL */}
            <div className="absolute bottom-6 left-10 flex gap-4 text-gray-400">
              <span>🐦</span>
              <span>🎵</span>
              <span>📷</span>
              <span>💼</span>
            </div>
          </div>

          {/* SIDEBAR */}
          <div className="flex flex-col gap-5">

            {/* COLORS */}
            <div className="bg-white/70 rounded-2xl p-4 shadow">
              <p className="text-sm font-semibold mb-3">Popular Colors</p>
              <div className="flex gap-3">
                {["bg-blue-500", "bg-orange-400", "bg-green-500", "bg-red-500", "bg-cyan-400"].map((c, i) => (
                  <span key={i} className={`w-5 h-5 rounded-full ${c}`}></span>
                ))}
              </div>
            </div>

            {/* SMALL CARD */}
            <div className="bg-white/70 rounded-2xl p-4 shadow">
              <p className="text-xs text-gray-400">{products[0].type}</p>
              <h3 className="font-semibold">{products[0].name}</h3>
              <img src={products[0].img} className="mt-2 rounded-xl" />
            </div>

            {/* BIG CARD */}
            <div className="bg-white/70 rounded-2xl p-4 shadow flex-1">
              <img src={products[1].img} className="rounded-xl mb-3" />
              <p className="font-semibold text-sm">{products[1].name}</p>
              <p className="text-xs text-gray-500">{products[1].desc}</p>
            </div>

          </div>
        </div>

        {/* ================= FOOTER CARDS ================= */}
        <div className="grid grid-cols-3 gap-6 mt-6">

          {/* CARD 1 */}
          <div className="bg-white/70 rounded-2xl p-4 shadow flex items-center gap-4">
            <img
              src="https://i.pinimg.com/736x/bd/5e/d1/bd5ed11e1b9363039297e0ca0c2d9864.jpg"
              className="w-16 h-16 rounded-xl"
            />
            <div>
              <p className="text-sm font-semibold">More Products</p>
              <p className="text-xs text-gray-500">460+ items</p>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="bg-white/70 rounded-2xl p-4 shadow text-center">
            <p className="text-2xl font-bold text-blue-500">5m+</p>
            <p className="text-sm text-gray-500">Downloads</p>
          </div>

          {/* CARD 3 */}
          <div className="bg-white/70 rounded-2xl p-4 shadow">
            <p className="text-sm font-semibold">
              Listening Has Been Released
            </p>
            <p className="text-xs text-gray-500 mt-1">⭐ 4.7 rating</p>
          </div>

        </div>

      </div>
    </div>
  );
}