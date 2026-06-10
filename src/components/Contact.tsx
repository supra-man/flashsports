import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-dark-gray)] mb-4">Get in Touch</h2>
          <div className="w-24 h-1 bg-[var(--color-clay-red)] mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to hit the courts? Contact us to book a session, ask about memberships, or schedule a tour of our facilities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 bg-white rounded-2xl shadow-xl overflow-hidden">
          
          {/* Contact Info & Socials */}
          <div className="bg-[var(--color-dark-gray)] text-white p-10 md:p-12">
            <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="text-[var(--color-clay-red-light)] mt-1 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-semibold text-lg">Location</h4>
                  <p className="text-gray-300">Mandikhatar/Hattigauda area<br/>Budhanilkantha Municipality, Ward 6<br/>Kathmandu, Nepal</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Phone className="text-[var(--color-clay-red-light)] mt-1 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-semibold text-lg">Phone</h4>
                  <p className="text-gray-300">+977 9851117476</p>
                  <p className="text-gray-400 text-sm mt-1">Call us during operating hours</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="text-[var(--color-clay-red-light)] mt-1 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-semibold text-lg">Email</h4>
                  <p className="text-gray-300">info@flashsportsnepal.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="text-[var(--color-clay-red-light)] mt-1 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-semibold text-lg">Operating Hours</h4>
                  <p className="text-gray-300">Mon - Sun: 6:00 AM - 8:00 PM</p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-700">
              <h4 className="font-semibold text-lg mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a href="https://www.facebook.com/flashsportsnepal/" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-3 rounded-full hover:bg-[var(--color-clay-red)] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
                <a href="https://www.instagram.com/flash_sports10/" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-3 rounded-full hover:bg-[var(--color-clay-red)] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
                </a>
              </div>
            </div>
          </div>

          {/* Form / Map Area */}
          <div className="p-10 md:p-12 bg-white">
            <h3 className="text-2xl font-bold text-[var(--color-dark-gray)] mb-8">Send us a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--color-clay-red)] focus:border-transparent outline-none transition-all" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--color-clay-red)] focus:border-transparent outline-none transition-all" placeholder="Doe" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--color-clay-red)] focus:border-transparent outline-none transition-all" placeholder="john@example.com" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Inquiry Type</label>
                <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--color-clay-red)] focus:border-transparent outline-none transition-all bg-white">
                  <option>Court Booking</option>
                  <option>Academy Membership</option>
                  <option>Coaching Programs</option>
                  <option>Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--color-clay-red)] focus:border-transparent outline-none transition-all resize-none" placeholder="How can we help you?"></textarea>
              </div>
              
              <button type="button" className="w-full bg-[var(--color-clay-red)] hover:bg-[var(--color-clay-red-light)] text-white py-4 rounded-lg font-bold text-lg transition-colors">
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
