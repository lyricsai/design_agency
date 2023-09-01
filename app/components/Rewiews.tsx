import { SectionTop } from "../shared/ui/SectionTop/SectionTop";

const reviews = [
  {
    id: 1,
    name: "Lexie Johnes",
    company: "Lex & Co",
    quote: `AD focuses on the end-user and helps improve retention and
                excel in user experience and big-picture thinking.`,
  },
  {
    id: 2,
    name: "Alex Smith",
    company: "Cottles",
    quote: `They’re experts at what they do. Excellency in everything, including visuals and functionality`,
  },
  {
    id: 3,
    name: "John Allen",
    company: "Rect Path",
    quote: `The team focuses on quality, speed, and consistency while provideing their services`,
  },
];

export const Reviews = () => {
  return (
    <section id="reviews">
      <SectionTop order={4} title={"What Our Clients Say"} />
      <div>
        {reviews.map((review) => {
          return (
            <>
              <blockquote>{review.quote}</blockquote>
              <hr />
              <div>
                <span>{review.name}</span>
                <br />
                <span>{review.company}</span>
              </div>{" "}
              <hr />
            </>
          );
        })}
      </div>
      <div className="reviews_controls">
        <button className="reviews_controls_PrevBtn">
          <svg
            viewBox="0 0 27 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 9.5H26M26 9.5L18 1.5M26 9.5L18 17.5"
              data-stroke="true"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </button>
        <button className="reviews_controls_nextBtn">
          <svg
            viewBox="0 0 27 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 9.5H26M26 9.5L18 1.5M26 9.5L18 17.5"
              data-stroke="true"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </button>
      </div>
    </section>
  );
};
