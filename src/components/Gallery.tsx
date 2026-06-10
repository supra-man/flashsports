export default function Gallery() {
  const images = [
    { src: 'https://images.unsplash.com/photo-1588661609100-3ca1dfc0b898?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', alt: 'Clay court baseline' },
    { src: 'https://images.unsplash.com/photo-1599586120429-48281b6f0ece?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', alt: 'Tennis balls in basket' },
    { src: 'https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', alt: 'Racket on court' },
    { src: 'https://images.unsplash.com/photo-1579207038148-de18f7a60216?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', alt: 'Tennis match action' },
    { src: 'https://images.unsplash.com/photo-1554068865-24cecd4e34d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', alt: 'Court view' },
    { src: 'https://images.unsplash.com/photo-1560012057-4372e14c5085?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', alt: 'Tennis serve' },
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-dark-gray)] mb-4">Academy Life</h2>
          <div className="w-24 h-1 bg-[var(--color-clay-red)] mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Glimpses of our well-maintained clay courts and the vibrant community at Flash Sports Nepal.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, idx) => (
            <div key={idx} className="overflow-hidden rounded-lg group aspect-square">
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://www.instagram.com/flash_sports10/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[var(--color-clay-red)] hover:text-[var(--color-clay-red-light)] font-semibold text-lg"
          >
            See more on Instagram 
            <span>&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}
