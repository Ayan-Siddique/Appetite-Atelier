import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* ABOUT */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">
            Appetite Atelier
          </h2>

          <p>NH-19, Jubilee Crossing Road</p>
          <p>Asansol, West Bengal</p>

          <p className="mt-3">
            <strong>Phone:</strong> +91 8392045968
          </p>
            <strong>Email:</strong> 26sidaya@gmail.com
          <p className="mt-2">
            <strong>Open:</strong> 1:00 PM – 11:00 PM
          </p>

          {/* Social */}
          <div className="flex gap-4 mt-4 text-xl">
            <a href="#" className="hover:text-white">
              📘
            </a>
            <a
              href="https://www.instagram.com/thebrickhouse.asansol"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white"
            >
              📸
            </a>
            <a href="#" className="hover:text-white">
              🌐
            </a>
          </div>
        </div>

        {/* LINKS */}
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#menu">Menu</a>
            </li>
            <li>
              <a href="#gallery">Gallery</a>
            </li>
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h4 className="text-white font-semibold mb-4">What We Offer</h4>
          <ul className="space-y-2">
            <li>Dine-In Experience</li>
            <li>Private Events</li>
            <li>Birthday Celebrations</li>
            <li>Couple Dining</li>
            <li>Group Bookings</li>
          </ul>
        </div>

        {/* NEWSLETTER */}
        <div>
          <h4 className="text-white font-semibold mb-4">Stay Updated</h4>
          <p className="mb-4">Get updates on offers & events 🍽️</p>

          <div className="flex">
            <input
              type="email"
              placeholder="Enter email"
              className="px-3 py-2 w-full text-[var(--heading)] rounded-l"
            />
            <button className="bg-[var(--primary)] px-4 py-2 text-white rounded-r hover:bg-red-600">
              Go
            </button>
          </div>

          <p className="mt-4 text-sm">
            🍸 Ready for a great evening?{" "}
            <Link to="/reservation" className="text-red-400">
              Book now
            </Link>
          </p>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="text-center mt-10 text-sm text-gray-500">
        <p>© 2026 Appetite Atelier Café & Bar. All Rights Reserved</p>
        <p>Built with ❤️ by Sid Ayan</p>
      </div>
    </footer>
  );
}
