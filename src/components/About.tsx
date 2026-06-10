import { MapPin, Trophy, Users } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-dark-gray)] mb-4">About Flash Sports Nepal</h2>
          <div className="w-24 h-1 bg-[var(--color-clay-red)] mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Tennis rackets and balls on clay court" 
              className="rounded-lg shadow-xl object-cover h-[400px] w-full"
            />
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-[var(--color-dark-gray)]">
              Elevating Racket Sports in Kathmandu
            </h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              Flash Sports Tennis Academy is recognized as a premier destination for tennis enthusiasts in the Budhanilkantha (Mandikhatar/Hattigauda) area. We pride ourselves on offering meticulously maintained clay courts that provide an authentic and professional playing experience.
            </p>
            
            <div className="space-y-4 mt-8">
              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-full text-[var(--color-tennis-green)]">
                  <Trophy size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-lg">Premium Clay Courts</h4>
                  <p className="text-gray-600">Rated among the best-maintained courts in the city, perfect for reducing joint stress and improving game tactics.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-orange-100 p-3 rounded-full text-[var(--color-clay-red)]">
                  <Users size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-lg">Expert Coaching</h4>
                  <p className="text-gray-600">Dedicated programs for all ages and skill levels, from complete beginners to advanced tournament players.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-lg">Prime Location</h4>
                  <p className="text-gray-600">Conveniently situated in Budhanilkantha Municipality, Ward 6, offering a peaceful environment away from the city chaos.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
