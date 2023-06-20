import HeroSlide from "../../molecules/hero-slide/HeroSlide";

function HeroCarousel({ randomMovies }) {


  return (
    <section className="hero-carousel">
        {randomMovies.map((movie) => (
            <HeroSlide 
            key={movie.title}
            title={movie.title}
            genres={movie.genres}
            thumbnail={movie.thumbnail}
            description={movie.extract}
            />
        ))}
    </section>
  );
}

export default HeroCarousel;
