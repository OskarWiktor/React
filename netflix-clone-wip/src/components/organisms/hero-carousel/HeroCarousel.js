import HeroSlide from "../../molecules/hero-slide/HeroSlide";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper";

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
        slidesPerView={1}
        navigation={true}
        modules={[Navigation]}
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
