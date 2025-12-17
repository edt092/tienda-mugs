# Quick Start Guide

## Instalación y Ejecución

```bash
# Ya instalado, pero si necesitas reinstalar:
npm install

# Desarrollo (puerto 3000)
npm run dev

# Build producción
npm run build

# Servidor producción
npm start
```

## Estructura de Rutas

```
http://localhost:3000/                    → Home (Hero + Featured)
http://localhost:3000/products            → Catálogo completo
http://localhost:3000/products/the-founder → Detalle de producto
http://localhost:3000/about               → Historia de marca
http://localhost:3000/checkout            → Checkout (demo)
```

## Arquitectura de Componentes

```
app/layout.tsx
├── Navbar (fixed top)
├── main
│   └── {children}
└── Footer

Home (/)
├── Hero
│   ├── Headline gigante
│   ├── Doble CTA
│   └── 3 Feature cards
├── Featured Products
│   └── 3x ProductCard
└── Philosophy Section

Products (/products)
├── Header + filtros
└── Grid de ProductCard

Product Detail (/products/[slug])
├── Back button
├── Image + Info (2 columns)
└── Features list

About (/about)
├── Story
├── Values (4 cards)
└── CTA

Checkout (/checkout)
├── Form (2 columns)
└── Order summary
```

## Modificar Productos

Editar: `lib/products.ts`

```typescript
{
  id: '7',
  name: 'Tu Nuevo Mug',
  slug: 'tu-nuevo-mug',
  tagline: 'Tagline potente',
  description: 'Descripción larga...',
  price: 29.99,
  image: '/images/mug-nuevo.jpg',
  category: 'mindset', // mindset | productivity | sales
}
```

## Personalizar Colores

**Nota:** Este proyecto usa **Tailwind CSS v4** con sintaxis diferente.

Editar: `app/globals.css`

```css
@theme {
  --color-background: #000000;    /* bg-background */
  --color-foreground: #ffffff;    /* text-foreground */
  --color-gray-950: #0a0a0a;      /* bg-gray-950 */
  --color-gray-900: #141414;      /* bg-gray-900 */
  --color-gray-800: #1f1f1f;      /* bg-gray-800 */
}
```

Ver `TAILWIND-V4-MIGRATION.md` para más detalles.

## Agregar Nuevas Páginas

```bash
# Crear carpeta
mkdir app/nueva-pagina

# Crear page.tsx
touch app/nueva-pagina/page.tsx
```

```typescript
export default function NuevaPagina() {
  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">
          Nueva Página
        </h1>
        {/* Contenido */}
      </div>
    </div>
  );
}
```

## Componentes Reutilizables

### Button Primary
```tsx
<button className="px-8 py-4 bg-white text-black text-sm font-semibold rounded-md hover:bg-gray-200 transition-all hover:scale-105">
  Text
</button>
```

### Button Secondary
```tsx
<button className="px-8 py-4 border border-gray-800 text-white text-sm font-semibold rounded-md hover:bg-gray-900 transition-all">
  Text
</button>
```

### Section Container
```tsx
<section className="py-24 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
    {/* Contenido */}
  </div>
</section>
```

### Card
```tsx
<div className="p-6 rounded-lg border border-gray-900 bg-gray-950/50 backdrop-blur hover:border-gray-800 transition-colors">
  <h3 className="text-lg font-semibold mb-2">Título</h3>
  <p className="text-sm text-gray-400">Descripción</p>
</div>
```

## Testing Responsive

```bash
# Mobile
# Abrir DevTools → Toggle device toolbar
# iPhone SE: 375x667
# iPhone 12 Pro: 390x844

# Tablet
# iPad Air: 820x1180

# Desktop
# Laptop: 1280x720
# Desktop: 1920x1080
```

## Deploy a Vercel (Recomendado)

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel

# Producción
vercel --prod
```

## Tips de Desarrollo

1. **Hot reload:** Cambios se reflejan automáticamente
2. **TypeScript:** El editor te avisará de errores
3. **Tailwind IntelliSense:** Instala la extensión de VS Code
4. **Prettier:** Formateo automático recomendado

## Troubleshooting

### "Module not found"
```bash
rm -rf .next node_modules
npm install
npm run dev
```

### Puerto 3000 ocupado

**Opción 1: Script automático (Git Bash en Windows)**
```bash
./kill-port.sh
```

**Opción 2: Manual (Windows)**
```bash
# 1. Encontrar el PID
netstat -ano | findstr :3000

# 2. Matar el proceso (PowerShell)
powershell -Command "Stop-Process -Id [PID] -Force"

# Ejemplo: Si PID es 3664
powershell -Command "Stop-Process -Id 3664 -Force"
```

**Opción 3: Task Manager**
1. `Ctrl + Shift + Esc`
2. Pestaña "Detalles" / "Details"
3. Buscar PID
4. Click derecho → "Finalizar tarea"

**Mac/Linux:**
```bash
lsof -ti:3000 | xargs kill -9
```

### TypeScript errors
```bash
# Regenerar tipos
rm -rf .next
npm run dev
```

### Tailwind CSS errors ("Cannot apply unknown utility class")
```bash
# 1. Verificar que globals.css use la sintaxis v4
# Debe tener: @import "tailwindcss";
# NO: @tailwind base;

# 2. Limpiar cache
rm -rf .next

# 3. Reinstalar dependencias si es necesario
npm install @tailwindcss/postcss@latest

# Ver TAILWIND-V4-MIGRATION.md para más detalles
```

## Recursos

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [React Docs](https://react.dev)

## Contacto y Soporte

Para preguntas sobre implementación:
1. Revisar `README.md` para arquitectura
2. Revisar `DESIGN-DECISIONS.md` para UX/UI
3. Abrir issue en el repo si es open source
