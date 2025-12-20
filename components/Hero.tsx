import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 md:pt-24">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-black to-black" />

      <div className="relative max-w-5xl mx-auto text-center">
        {/* Main heading */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6 animate-fade-in uppercase">
          Para mentes
          <span className="block mt-2 text-white">
            Que Construyen
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-base sm:text-lg md:text-xl text-gray-400 font-medium mb-12 max-w-2xl mx-auto animate-slide-up normal-case">
          Tazas premium diseñadas para emprendedores que convierten café en empresas
          y ambición en logros.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
          <Link
            href="/products"
            className="px-8 py-4 bg-white text-black text-xs font-bold uppercase tracking-wider rounded-none hover:bg-gray-200 transition-all hover:scale-105 w-full sm:w-auto"
          >
            Ver Tienda
          </Link>
          <Link
            href="/about"
            className="px-8 py-4 border-2 border-white text-white text-xs font-bold uppercase tracking-wider rounded-none hover:bg-white hover:text-black transition-all w-full sm:w-auto"
          >
            Nuestra Historia
          </Link>
        </div>

        {/* Features */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div className="p-8 border-2 border-gray-800 bg-black hover:border-white transition-all">
            <h3 className="text-sm font-black mb-3 uppercase tracking-wider">Mentalidad Primero</h3>
            <p className="text-xs text-gray-400 font-medium normal-case leading-relaxed">
              Cada diseño creado para inspirar acción, enfoque y ejecución implacable.
            </p>
          </div>
          <div className="p-8 border-2 border-gray-800 bg-black hover:border-white transition-all">
            <h3 className="text-sm font-black mb-3 uppercase tracking-wider">Calidad Premium</h3>
            <p className="text-xs text-gray-400 font-medium normal-case leading-relaxed">
              Excelencia cerámica. Apta para lavavajillas. Hecha para durar tanto como tu ambición.
            </p>
          </div>
          <div className="p-8 border-2 border-gray-800 bg-black hover:border-white transition-all">
            <h3 className="text-sm font-black mb-3 uppercase tracking-wider">Para los Selectos</h3>
            <p className="text-xs text-gray-400 font-medium normal-case leading-relaxed">
              Ediciones limitadas para quienes se niegan a conformarse. Exclusividad y ejecución.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
