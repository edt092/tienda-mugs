# Decisiones de Diseño UX/UI

## Filosofía Visual

### Dark Premium Aesthetic
El diseño se basa en un **fondo negro puro** con tipografía blanca, inspirado en marcas premium como:
- **entrepreneur.com**: Contenido denso pero elegante
- **Apple**: Minimalismo extremo, espaciado generoso
- **Stripe**: Claridad técnica, animaciones sutiles

**Por qué funciona para emprendedores:**
- Negro = poder, sofisticación, seriedad
- Alta legibilidad (contraste máximo)
- Reduce fatiga visual para usuarios que pasan horas en pantalla
- Diferenciación de e-commerce tradicional (blancos/colores)

---

## Decisiones de Componentes

### Hero Section
**Objetivo:** Impactar en 3 segundos y comunicar valor único.

**Implementación:**
- Headline gigante (8xl en desktop) con gradiente sutil
- Claim aspiracional: "Built for Builders" (eco con target audience)
- Doble CTA: Primary (Shop) + Secondary (Story) para diferentes intenciones
- 3 feature cards en grid para reforzar propuesta de valor

**UX:**
- Min-height 100vh para impacto full-screen
- Animaciones fade-in/slide-up para entrada dramática
- Spacing generoso (mb-6, mb-12) para breathing room

---

### Product Card
**Objetivo:** Mostrar producto sin ruido visual.

**Implementación:**
```
┌─────────────────┐
│                 │
│   [Imagen]      │  ← Aspect square, hover overlay sutil
│                 │
├─────────────────┤
│ Category        │  ← Micro, uppercase, gray-500
│ Product Name    │  ← Bold, hover:gray-300
│ Tagline         │  ← Gray-400, 2 lines max
│ $29.99  →       │  ← Precio bold + CTA visual
└─────────────────┘
```

**UX:**
- Hover effects: border-gray-700 + text transition
- Category tag para filtrado visual
- "View Details →" en vez de botón (menos agresivo)
- Consistencia en ratios para grid perfecto

---

### Navbar
**Objetivo:** No interrumpir, siempre accesible.

**Implementación:**
- Fixed top con backdrop-blur (glassmorphism moderno)
- Border-bottom sutil para separación
- Cart button con bg-white para máximo contraste (CTA primario)

**Mobile UX:**
- Hamburger animado (3 líneas → X)
- Menú dropdown en vez de drawer (menos disruptivo)
- Touch targets 44px+ para accesibilidad

---

## Jerarquía Tipográfica

```
H1 (Home Hero):     text-8xl (96px)  - Máximo impacto
H1 (Pages):         text-6xl (60px)  - Importante pero no abrumador
H2 (Sections):      text-4xl (36px)  - Secciones principales
H3 (Cards):         text-lg (18px)   - Contenido secundario
Body:               text-base (16px) - Lectura cómoda
Small/Labels:       text-sm (14px)   - Metadata, categorías
```

**Peso:**
- Headlines: font-bold (700)
- Subheads: font-semibold (600)
- Body: font-normal (400)
- Labels: font-medium (500)

**Tracking:**
- Headlines: tracking-tight (-0.025em) para compactness premium
- Body: default (legibilidad)

---

## Paleta de Colores Extendida

```css
/* Backgrounds */
--background:     #000000  /* Pure black */
--gray-950:       #0a0a0a  /* Near black para contraste */
--gray-900:       #141414  /* Cards background */
--gray-800:       #1f1f1f  /* Elevated elements */

/* Borders */
--gray-900:       #141414  /* Borders sutiles */
--gray-800:       #1f1f1f  /* Hover borders */
--gray-700:       #2a2a2a  /* Active borders */

/* Text */
--foreground:     #FFFFFF  /* Primary text */
--gray-300:       #d4d4d4  /* Secondary text */
--gray-400:       #a3a3a3  /* Tertiary text */
--gray-500:       #737373  /* Labels, metadata */
```

**No se usan colores de acento** (rojo, azul, verde) excepto:
- White para CTAs primarios (máximo contraste)
- Gradientes sutiles en headlines (white → gray)

---

## Espaciado Sistema

Basado en múltiplos de 4px (sistema de Tailwind):

```
xs:  8px  (py-2)   - Padding interno botones secundarios
sm:  12px (py-3)   - Input fields
md:  16px (py-4)   - Botones primarios
lg:  24px (py-6)   - Cards internas
xl:  32px (py-8)   - Entre bloques
2xl: 48px (py-12)  - Entre secciones menores
3xl: 96px (py-24)  - Entre secciones principales
```

**Regla:** Más espacio = más premium. Nunca apretar.

---

## Interacciones & Microanimaciones

### Hover States
- **Botones primarios:** scale(1.05) + bg-gray-200
- **Botones secundarios:** bg-gray-900
- **Links:** text-gray-300
- **Cards:** border-gray-700

**Timing:** Todas las transitions 300ms (estándar UX)

### Animaciones de entrada
```css
@keyframes fadeIn {
  0%   { opacity: 0 }
  100% { opacity: 1 }
}

@keyframes slideUp {
  0%   { transform: translateY(20px); opacity: 0 }
  100% { transform: translateY(0); opacity: 1 }
}
```

**Duración:** 500ms (ni muy rápido ni muy lento)

---

## Responsive Breakpoints

```
Mobile:      < 640px   (sm)
Tablet:      640-1024px (sm-lg)
Desktop:     > 1024px   (lg+)
Wide:        > 1280px   (xl+)
```

**Mobile-first approach:**
1. Diseñar para 375px primero
2. Expandir hacia desktop
3. Grid: 1 col → 2 cols → 3 cols

---

## Accesibilidad (A11y)

### Contraste
- Blanco sobre negro: **21:1** (AAA máximo)
- Gray-400 sobre negro: **7:1** (AA para texto grande)

### Focus States
- Ring-2 ring-white en todos los interactivos
- Outline visible al navegar con teclado

### Semántica
- `<nav>` para navegación
- `<main>` para contenido principal
- `<section>` con headings correctos
- `<button>` vs `<a>` según contexto

### Forms
- Labels visibles siempre
- Placeholder como hint, no como label
- Error states (red-500) con mensajes claros

---

## Performance

### Core Web Vitals Target
- **LCP:** < 2.5s (Next.js Image optimization)
- **FID:** < 100ms (minimal JavaScript)
- **CLS:** < 0.1 (aspect ratios definidos)

### Optimizaciones
1. Static generation donde sea posible
2. next/font para font optimization
3. Lazy loading de imágenes
4. Minimal client-side JS (solo interacciones)

---

## Filosofía: Menos es Más

**Lo que NO hacemos:**
- ❌ Carousels (mala UX móvil)
- ❌ Modals invasivos (popups, newsletters forced)
- ❌ Animaciones complejas (distracciones)
- ❌ Colores llamativos (ruido visual)
- ❌ Over-explanation (el usuario es inteligente)

**Lo que SÍ hacemos:**
- ✅ Claridad absoluta en jerarquía
- ✅ Espacio para respirar
- ✅ Consistencia en patterns
- ✅ Performance primero
- ✅ Confianza en el producto (sin presión)

---

## Copywriting Principles

- **Headlines:** Cortos, potentes, aspiracionales
- **Body:** Directo, sin fluff, orientado a acción
- **CTAs:** Verbos de acción ("Shop Now", "View Collection")
- **Producto:** Foco en beneficio emocional, no características

**Tono:** Confiado, directo, sin motivación barata. Para gente que ejecuta.

---

## Próximas Mejoras UX

1. **Carrito persistente** con Context API
2. **Quick view** de productos (modal limpio)
3. **Filtros avanzados** (precio, disponibilidad)
4. **Product comparison** (lado a lado)
5. **Wishlist** para guardar favoritos
6. **Reviews visuales** (solo 5 estrellas + texto)
7. **Loading states** con skeleton screens
8. **Error boundaries** para fallos graceful
