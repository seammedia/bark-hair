import React from 'react';

const reviews = [
  {
    name: 'Alisha Doughman',
    rating: 5,
    date: 'September 2024',
    text: "I'm absolutely in love with Bark Hair! From the moment you walk in, you're greeted with such a warm, friendly vibe from Emma and the staff. I got a bob haircut and extensions, and I couldn't be happier with the results. The attention to detail and the care they put into their work is truly remarkable. The salon itself is beautifully decorated, creating such a relaxing and welcoming atmosphere. If you're looking for a place that combines exceptional skill with a fantastic experience, look no further. Highly recommend!"
  },
  {
    name: 'Michelle Stone',
    rating: 5,
    date: 'September 2024',
    text: "These ladies at Bark Hair in Canberra know what they're doing. If you want beautiful straight hair you don't have to spend hours to straighten these ladies are who you should go to - nanoplasty is fantastic and so is their colour correction. Great value salon, these girls work so hard and they deserve every cent. Will be back."
  },
  {
    name: 'Taaliyah Foster',
    rating: 5,
    date: 'November 2024',
    text: "I could not recommend this place enough! Everyone took such good care of my hair on my birthday, and I left feeling even better than when I walked in! I had a nanoplasty done and my hair has never felt softer. Absolutely love this salon and will definitely be returning!"
  },
  {
    name: 'Jenny Blair',
    rating: 5,
    date: 'October 2024',
    text: "Always look forward to my time at Bark Hair salon - Em and her team are the best in town for their service, professionalism, advice and consistent results. Would not go anywhere else."
  },
  {
    name: 'Ryan Kellow',
    rating: 5,
    date: 'October 2024',
    text: "I had an genuinely incredible experience where I felt heard and seen. I came in not knowing exactly what I wanted, but through a thorough and thoughtful consultation, Ally absolutely nailed a hairstyle that matched my inspiration with who I am as a person. This is what sets the standard for hairdressing."
  }
];

const StarRating: React.FC<{ rating: number }> = ({ rating }) => (
  <div className="flex gap-0.5">
    {[1, 2, 3, 4, 5].map((star) => (
      <svg
        key={star}
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill={star <= rating ? '#421D06' : 'none'}
        stroke={star <= rating ? '#421D06' : '#d1d5db'}
        strokeWidth="1.5"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ))}
  </div>
);

const Reviews: React.FC = () => {
  return (
    <section className="py-24 bg-bark-cream/30">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="text-sm font-bold tracking-[0.3em] uppercase text-bark-copper">Google Reviews</span>
          <h2 className="text-4xl md:text-5xl font-serif text-neutral-900">
            What our clients <span className="italic">say</span>
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <StarRating rating={5} />
            <span className="text-lg font-serif text-neutral-700">5.0</span>
            <a
              href="https://www.google.com/maps/place/Bark+Hair/data=!4m2!3m1!1s0x0:0xf5fe7ecc4af3e1bd"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-bark-copper underline underline-offset-2 hover:text-bark-copper/70 transition-colors"
            >
              View on Google
            </a>
          </div>
        </div>

        {/* Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className={`bg-white p-8 rounded-3xl shadow-sm flex flex-col gap-5 ${
                index === 0 ? 'lg:col-span-1' : ''
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="w-10 h-10 rounded-full bg-bark-purple/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold text-bark-copper">{review.name[0]}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-neutral-900 text-sm">{review.name}</p>
                  <p className="text-xs text-neutral-400 mt-0.5">{review.date}</p>
                </div>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="flex-shrink-0 opacity-30">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
              </div>

              <StarRating rating={review.rating} />

              <p className="text-neutral-500 leading-relaxed text-sm italic">
                "{review.text}"
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="https://www.google.com/maps/place/Bark+Hair/data=!4m2!3m1!1s0x0:0xf5fe7ecc4af3e1bd"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-bold uppercase tracking-widest border-b-2 border-neutral-900 pb-2 hover:text-bark-copper hover:border-bark-copper transition-all"
          >
            Read all reviews on Google
          </a>
        </div>

      </div>
    </section>
  );
};

export default Reviews;
