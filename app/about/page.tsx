import Link from 'next/link';

export const metadata = {
  title: 'Nosotros - MindsetMugs',
  description: 'Nuestra historia y misión de empoderar constructores, fundadores y emprendedores.',
};

export default function AboutPage() {
  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Construido por constructores,
            <br />
            para constructores.
          </h1>
          <p className="text-xl text-gray-400">
            Creemos que cada mañana es una oportunidad para ejecutar.
          </p>
        </div>

        {/* Story Section */}
        <div className="prose prose-invert prose-lg max-w-none mb-16">
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <p>
              MindsetMugs nació de una observación simple: los mejores emprendedores
              no esperan motivación. Construyen rituales. Se presentan. Ejecutan.
            </p>
            <p>
              Tu café matutino no es solo cafeína—es una declaración. Un momento
              para recordarte quién eres y qué estás construyendo. Por eso cada
              taza que diseñamos lleva un mensaje. No inspiración vacía, sino
              principios reales que generan resultados.
            </p>
            <p>
              No estamos aquí para venderte productos. Estamos aquí para impulsar
              al tipo de personas que se niegan a pensar en pequeño. Los fundadores
              que lanzan. Los constructores que iteran. Los cerradores que ganan.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Lo Que Defendemos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 border border-gray-900 rounded-lg bg-gray-950/50">
              <h3 className="text-xl font-semibold mb-3">Ejecución Sobre Todo</h3>
              <p className="text-gray-400">
                Las ideas no valen nada sin acción. Celebramos a los que hacen,
                a los que lanzan, a los que lo logran.
              </p>
            </div>
            <div className="p-6 border border-gray-900 rounded-lg bg-gray-950/50">
              <h3 className="text-xl font-semibold mb-3">Calidad Ante Todo</h3>
              <p className="text-gray-400">
                Materiales premium, diseño atemporal, hecho para durar. No cortamos
                atajos, y tú tampoco deberías hacerlo.
              </p>
            </div>
            <div className="p-6 border border-gray-900 rounded-lg bg-gray-950/50">
              <h3 className="text-xl font-semibold mb-3">Sin Relleno, Sin Tonterías</h3>
              <p className="text-gray-400">
                Diseño limpio. Mensaje claro. Sin clichés motivacionales. Solo
                principios reales para constructores reales.
              </p>
            </div>
            <div className="p-6 border border-gray-900 rounded-lg bg-gray-950/50">
              <h3 className="text-xl font-semibold mb-3">Comunidad Primero</h3>
              <p className="text-gray-400">
                Estamos construyendo una tribu de personas ambiciosas que se apoyan
                mutuamente. No solo compras una taza.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center py-12 border-t border-gray-900">
          <h2 className="text-3xl font-bold mb-4">
            ¿Listo para elevar tus mañanas?
          </h2>
          <p className="text-gray-400 mb-8">
            Únete a miles de emprendedores que empiezan su día con intención.
          </p>
          <Link
            href="/products"
            className="inline-flex px-8 py-4 bg-white text-black text-base font-semibold rounded-md hover:bg-gray-200 transition-all hover:scale-105"
          >
            Ver la Colección
          </Link>
        </div>
      </div>
    </div>
  );
}
