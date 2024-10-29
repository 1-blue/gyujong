import { Carousel, CarouselContent, CarouselItem } from "#/components/ui";

const books = [
  {
    title: "2024 상산고1 여름방학 특강 수능 필수 어휘 매일 80",
    path: "/images/books/1.png",
  },
  { title: "FLASH UP 2024 고1 6월", path: "/images/books/2.png" },
  {
    title: "고2 정시파이터를 위한 수능 영어 HOLD UP",
    path: "/images/books/3.png",
  },
  { title: "SANGSAN 2024 1-FINAL (그레이)", path: "/images/books/4.png" },
  { title: "SANSAN 2024 1-FINAL (블랙)", path: "/images/books/5.png" },
];

const BookCarousel = () => {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-5xl lg:mx-auto"
    >
      <CarouselContent className="mx-20 lg:mx-0">
        {books.map((book) => (
          <CarouselItem
            key={book.title}
            className="relative basis-1/2 lg:basis-1/3"
          >
            <figure className="group relative">
              <img src={book.path} alt={book.title} />
              <div className="absolute inset-0 flex items-center justify-center gap-4 bg-black/50 p-14 opacity-0 transition-all group-hover:opacity-100">
                <span className="font-bold text-white lg:text-2xl">
                  {book.title}
                </span>
              </div>
            </figure>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default BookCarousel;
