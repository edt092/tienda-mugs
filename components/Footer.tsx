import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-gray-900 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-base font-black mb-4 uppercase tracking-tight">MindsetMugs</h3>
            <p className="text-gray-400 text-xs font-medium max-w-md normal-case leading-relaxed">
              Tazas premium diseñadas para emprendedores, fundadores y constructores.
              Impulsa tu ambición, un sorbo a la vez.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-black mb-4 uppercase tracking-wider">Tienda</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/products" className="text-xs text-gray-400 font-medium hover:text-white transition-colors">
                  Todos los Productos
                </Link>
              </li>
              <li>
                <Link href="/products?category=mentalidad" className="text-xs text-gray-400 font-medium hover:text-white transition-colors">
                  Mentalidad
                </Link>
              </li>
              <li>
                <Link href="/products?category=tumblers" className="text-xs text-gray-400 font-medium hover:text-white transition-colors">
                  Tumblers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black mb-4 uppercase tracking-wider">Empresa</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-xs text-gray-400 font-medium hover:text-white transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <a
                  href="https://wa.me/593967479210?text=Hola!%20Tengo%20una%20consulta%20sobre%20MindsetMugs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-gray-400 font-medium hover:text-white transition-colors"
                >
                  Contacto
                </a>
              </li>
              <li>
                <span className="text-xs text-gray-400 font-medium">
                  Envío gratis en Quito
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-900">
          <p className="text-xs text-gray-400 font-medium text-center">
            © {new Date().getFullYear()} MindsetMugs. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
