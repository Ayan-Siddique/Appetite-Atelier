import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Priobrata Biswas",
    role: "Local Guide Level 7",
    image:
      "https://lh3.googleusercontent.com/a-/ALV-UjXTcNgC6rjPflbhSAro1xvX4h_ZMOzDnDUIYcCTp8Hi5G5c0Swz=w90-h90-p-rp-mo-ba5-br100",
    text: "This is one of the best premium restaurant in Asansol city...",
  },
  {
    name: "Manidipa Pan",
    role: "Local Guide Level 7",
    image:
      "https://lh3.googleusercontent.com/a-/ALV-UjVE3OXCP7fTlFF2QgBGTtRGl_X4CrazVq86AV38s725VatWHmS0=w90-h90-p-rp-mo-ba4-br100",
    text: "Will definitely come to this place for the food and service...",
  },
  {
    name: "Ankita Dhelia",
    role: "Local Guide Level 7",
    image:
      "https://lh3.googleusercontent.com/a-/ALV-UjWrB-iyZkfI8gv6bShBYAtsC4Nh1VoJFF4WmhRCNYrJ76LuByDb=w90-h90-p-rp-mo-ba5-br100",
    text: "The service is really good. The staff is hospitable...",
  },
  {
    name: "Priyanka Bhandari",
    role: "Local Guide Level 4",
    image:
      "https://lh3.googleusercontent.com/a-/ALV-UjXOwLdfNw1XMF6YgcLChqmk8LVcoSZqF8iT5mZsznn8XSM3mY3k=w90-h90-p-rp-mo-ba2-br100",
    text: "Absolutely loved this place! The ambience is cozy...",
  },
  {
    name: "Pujita Makireddy",
    role: "Local Guide Level 3",
    image:
      "https://lh3.googleusercontent.com/a-/ALV-UjWvEobf0S7jVNmS2_9fROa5GO4OPJxXrqfDAjZtdvPxaCWhN2Ji=w90-h90-p-rp-mo-br100",
    text: "Amazing vibe, fantastic food, and mocktails...",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-20 bg-[var(--bg)] text-[var(--text)]"
    >
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-sm tracking-widest uppercase text-[var(--text)] font-[var(--font-nav)]">
          Testimonials
        </h2>
        <p className="text-4xl md:text-4xl text-[var(--primary)]"
        style={{fontFamily:"var(--font-heading)"}}>
          What they're saying about us
        </p>
      </div>

      {/* Slider */}
      <div className="max-w-6xl mx-auto px-4">
        <Swiper
          modules={[Autoplay, Pagination]}
          loop={true}
          autoplay={{ delay: 5000 }}
          speed={600}
          pagination={{ clickable: true }}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 30 },
            1200: { slidesPerView: 3, spaceBetween: 20 },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-[var(--surface)] p-6 rounded-lg h-full flex flex-col justify-between transition duration-300 hover:scale-105">
                {/* Text */}
                <p className="italic text-sm leading-relaxed">
                  <span className="text-[var(--primary)] text-xl">“</span>
                  {item.text}
                  <span className="text-[var(--primary)] text-xl">”</span>
                </p>

                {/* User */}
                <div className="mt-6 flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-14 h-14 rounded-full border-2 border-[var(--primary)]"
                  />
                  <div>
                    <h3 className="font-[var(--font-heading)] text-[var(--heading)] text-lg">
                      {item.name}
                    </h3>
                    <h4 className="text-xs text-[var(--text)]">{item.role}</h4>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
