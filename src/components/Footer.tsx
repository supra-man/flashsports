export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="w-8 h-8 bg-[var(--color-tennis-green)] rounded-full flex items-center justify-center text-white font-bold text-sm">
            FS
          </div>
          <span className="font-bold text-xl text-white tracking-tight">Flash Sports Nepal</span>
        </div>
        <p className="mb-6 max-w-md mx-auto">
          Elevating the standard of tennis and racket sports in Kathmandu through premium facilities and expert coaching.
        </p>
        <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} Flash Sports Nepal. All rights reserved.</p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
