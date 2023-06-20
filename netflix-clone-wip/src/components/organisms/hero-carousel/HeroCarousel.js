import HeroSlide from "../../molecules/hero-slide/HeroSlide";
import { Swiper, SwiperSlide}  from "swiper/react";
import { Autoplay, Navigation } from "swiper";

import "swiper/swiper.min.css";
import "swiper/css";
import "swiper/css/navigation";

function HeroCarousel({randomMovies}) {

  return (
    <section className="hero-carousel">
      <Swiper
        style={{
          "--swiper-navigation-color": "#9D0000",
          "--swiper-pagination-color": "#9D0000",
        }}
        autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
        slidesPerView={1}
        navigation={true}
        loop={true}
        modules={[ Autoplay, Navigation ]}
      >
        {randomMovies.map((movie) => (
          <SwiperSlide>
            <HeroSlide
              key={movie.title}
              title={movie.title}
              genres={movie.genres}
              thumbnail={movie.thumbnail}
              description={movie.extract}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default HeroCarousel;
