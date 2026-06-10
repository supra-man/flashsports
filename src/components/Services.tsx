import { Check } from 'lucide-react';

export default function Services() {
  const programs = [
    {
      title: 'Academy Membership',
      price: 'Contact for pricing',
      description: 'Full access to courts during operating hours, subject to availability.',
      features: ['Unlimited monthly play', 'Locker room access', 'Discounted private lessons', 'Invitations to member tournaments']
    },
    {
      title: 'Professional Coaching',
      price: 'All Levels',
      description: 'Structured training blocks focusing on technique, fitness, and match play.',
      features: ['ITF certified coaches', 'Beginner to advanced classes', 'Group and private sessions', 'Video analysis available']
    },
    {
      title: 'Court Rentals',
      price: 'Hourly Rates',
      description: 'Book a court for casual play with friends or family.',
      features: ['Well-maintained clay courts', 'Equipment rental available', 'Evening floodlights', 'Refreshment area access']
    }
  ];

  return (
    <section id="programs" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-dark-gray)] mb-4">Programs & Memberships</h2>
          <div className="w-24 h-1 bg-[var(--color-clay-red)] mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Whether you want to train competitively, stay fit, or just enjoy a weekend game, we have a program for you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:-translate-y-1 transition-transform duration-300">
              <h3 className="text-2xl font-bold text-[var(--color-dark-gray)] mb-2">{program.title}</h3>
              <p className="text-xl text-[var(--color-clay-red)] font-semibold mb-4">{program.price}</p>
              <p className="text-gray-600 mb-6 min-h-[48px]">{program.description}</p>
              
              <ul className="space-y-3 mb-8">
                {program.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3">
                    <Check className="text-[var(--color-tennis-green)] mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a 
                href="#contact"
                className="block w-full text-center bg-gray-900 hover:bg-gray-800 text-white py-3 rounded-lg font-medium transition-colors"
              >
                Inquire Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
