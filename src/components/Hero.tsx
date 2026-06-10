export default function Hero() {
  return (
    <section id="home" className="relative h-[80vh] flex items-center justify-center">
      {/* Background Image Overlay - Placeholder for actual clay court image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
          Kathmandu's Premier <br/> <span className="text-[var(--color-clay-red-light)]">Clay Court</span> Tennis Academy
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
          Professional coaching, top-tier clay courts, and a thriving community for players of all levels in Budhanilkantha.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="#contact" 
            className="bg-[var(--color-clay-red)] hover:bg-[var(--color-clay-red-light)] text-white px-8 py-3 rounded-full font-semibold text-lg transition-colors"
          >
            Join the Academy
          </a>
          <a 
            href="#programs" 
            className="bg-white/10 hover:bg-white/20 backdrop-blur text-white px-8 py-3 rounded-full font-semibold text-lg transition-colors border border-white/30"
          >
            View Programs
          </a>
        </div>
      </div>
    </section>
  );
}
