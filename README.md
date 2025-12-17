# MindsetMugs - E-commerce Premium

Tienda online de mugs para emprendedores con diseño minimalista y elegante, inspirado en entrepreneur.com, Apple y Stripe.

## Stack Técnico

- **Next.js 16** (App Router con Turbopack)
- **TypeScript 5.9**
- **Tailwind CSS 4** (con @tailwindcss/postcss)
- **React 19**

## Estructura del Proyecto

```
tienda-mugs/
├── app/
│   ├── layout.tsx          # Layout raíz con Navbar y Footer
│   ├── page.tsx            # Home page con Hero y productos destacados
│   ├── globals.css         # Estilos globales de Tailwind
│   ├── products/
│   │   ├── page.tsx        # Catálogo de productos con filtros
│   │   └── [slug]/
│   │       └── page.tsx    # Detalle de producto (dynamic route)
│   ├── about/
│   │   └── page.tsx        # Página About con historia de marca
│   └── checkout/
│       └── page.tsx        # Página de checkout (sin pagos reales)
├── components/
│   ├── Navbar.tsx          # Navegación responsive con menú mobile
│   ├── Footer.tsx          # Footer con links esenciales
│   ├── Hero.tsx            # Hero section con CTA y features
│   └── ProductCard.tsx     # Card de producto reutilizable
├── types/
│   └── product.ts          # Tipos TypeScript para productos
├── lib/
│   └── products.ts         # Data mock de productos
└── public/
    └── images/             # Imágenes de productos
```

## Decisiones de Diseño UX/UI

### Paleta de Colores
- **Background**: Negro puro (#000000) y near-black (#0a0a0a)
- **Foreground**: Blanco puro (#FFFFFF)
- **Grays**: Escala de grises sutiles (#141414, #1f1f1f) para bordes y cards
- **Inspiración**: Estética premium dark-mode como Apple, Stripe, entrepreneur.com

### Tipografía
- **Font**: Inter (sistema de Google Fonts)
- **Jerarquía clara**: Títulos grandes y bold, cuerpo legible
- **Tracking tight**: Para headings (-0.025em) que da sensación premium

### Layout & Espaciado
- **Mobile-first**: Diseño responsive desde 320px
- **Max-width**: 1280px para contenido (7xl de Tailwind)
- **Espaciado generoso**: py-24 entre secciones para breathing room
- **Grid**: 1-2-3 columnas según breakpoint para productos

### Componentes Clave

#### Hero Section
- Full viewport height con gradiente sutil
- Headline grande y bold con gradient text
- Doble CTA (primary + secondary)
- 3 features cards con hover effects

#### Product Card
- Aspect ratio square para consistencia
- Hover effects sutiles (border + overlay)
- Categoría, nombre, tagline y precio
- Link a página de detalle

#### Navbar
- Fixed top con backdrop blur
- Responsive con hamburger menu en mobile
- Cart button destacado (white bg)

#### Footer
- Grid de links organizados por categorías
- Mínimo y funcional
- Copyright dinámico

### Animaciones
- **fade-in**: Entrada suave de elementos (0.5s)
- **slide-up**: Elementos suben 20px al aparecer
- **hover transitions**: 300ms para todos los hovers
- **scale on hover**: Botones principales hacen scale(1.05)

### Accesibilidad
- Contraste AAA (blanco sobre negro)
- Focus states visibles (ring-2 ring-white)
- Labels en todos los inputs
- Semántica HTML correcta (nav, main, footer, section)

### SEO
- Metadata en layout y páginas
- generateStaticParams para pre-render de productos
- Semantic HTML
- Alt text ready (cuando se agreguen imágenes reales)

## Cómo Ejecutar

```bash
# Instalar dependencias
npm install

# Modo desarrollo
npm run dev

# Build para producción
npm run build

# Iniciar servidor de producción
npm start
```

Visitar: [http://localhost:3000](http://localhost:3000)

## Páginas Implementadas

- **/** - Home con hero, productos destacados y filosofía
- **/products** - Catálogo completo con filtros por categoría
- **/products/[slug]** - Detalle de producto individual
- **/about** - Historia de marca y valores
- **/checkout** - Formulario de checkout (estructura básica)

## Data de Productos

6 productos de ejemplo en `lib/products.ts`:
- The Founder - "Built for those who build"
- The Executor - "Action over perfection"
- The Strategist - "Think deep, move fast"
- The Closer - "Always Be Closing"
- The Disruptor - "Break rules, make waves"
- The Grinder - "Outwork your excuses"

Categorías: mindset, productivity, sales

## Próximos Pasos

- [ ] Agregar sistema de carrito (Context API o Zustand)
- [ ] Integrar imágenes reales de productos
- [ ] Implementar pasarela de pago (Stripe)
- [ ] Agregar página de política de devoluciones
- [ ] Sistema de reviews de productos
- [ ] Newsletter signup
- [ ] Analytics (GA4 o Plausible)

## Performance

Configuración optimizada para Lighthouse 90+:
- Next.js Image optimization ready
- Font optimization con next/font
- Static generation donde sea posible
- Minimal JavaScript client-side

## Licencia

MIT
