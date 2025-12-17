# Tailwind CSS v4 Migration - MindsetMugs

## ✅ Cambios Aplicados

El proyecto usa **Tailwind CSS 4** que tiene una configuración completamente diferente a v3.

### Cambios Principales

#### 1. `app/globals.css` (Nueva sintaxis)

**Antes (v3):**
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

**Ahora (v4):**
```css
@import "tailwindcss";

@theme {
  --color-background: #000000;
  --color-foreground: #ffffff;
  --color-gray-950: #0a0a0a;
  --color-gray-900: #141414;
  --color-gray-800: #1f1f1f;
}
```

#### 2. `tailwind.config.ts` (Simplificado)

**Antes (v3):**
```typescript
theme: {
  extend: {
    colors: { ... },
    animations: { ... },
    keyframes: { ... }
  }
}
```

**Ahora (v4):**
```typescript
// Solo content paths
content: [
  './app/**/*.{js,ts,jsx,tsx,mdx}',
]
```

#### 3. `postcss.config.js` (Plugin actualizado)

**Antes:**
```javascript
plugins: {
  tailwindcss: {},
}
```

**Ahora:**
```javascript
plugins: {
  '@tailwindcss/postcss': {},
}
```

---

## 📦 Dependencias

```json
"@tailwindcss/postcss": "^4.1.18",
"tailwindcss": "^4.1.18"
```

---

## 🎨 Cómo Definir Colores Personalizados

En Tailwind v4, los colores se definen en `@theme` dentro del CSS:

```css
@theme {
  /* Nombre: --color-{nombre} */
  --color-primary: #000000;
  --color-secondary: #ffffff;

  /* Usar como: bg-primary, text-secondary */
}
```

**Colores disponibles en el proyecto:**
- `bg-background` → #000000
- `text-foreground` → #ffffff
- `bg-gray-950` → #0a0a0a
- `bg-gray-900` → #141414
- `bg-gray-800` → #1f1f1f

---

## 🎭 Animaciones

Las animaciones ahora se definen directamente en el CSS:

```css
@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

.animate-fade-in {
  animation: fadeIn 0.5s ease-in;
}
```

**Animaciones disponibles:**
- `animate-fade-in`
- `animate-slide-up`

---

## 🔧 Troubleshooting

### Error: "Cannot apply unknown utility class"

**Solución:** Asegúrate de que `app/globals.css` use:
```css
@import "tailwindcss";
```

NO uses:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Error: "tailwindcss is not a PostCSS plugin"

**Solución:** Instala el plugin correcto:
```bash
npm install @tailwindcss/postcss@latest
```

Y actualiza `postcss.config.js`:
```javascript
plugins: {
  '@tailwindcss/postcss': {},
}
```

---

## 📚 Recursos

- [Tailwind CSS v4 Docs](https://tailwindcss.com/docs/v4-beta)
- [Migration Guide](https://tailwindcss.com/docs/upgrade-guide)
- [@theme directive](https://tailwindcss.com/docs/adding-custom-styles#using-css-and-layer)

---

## ✨ Beneficios de v4

1. **Más rápido** - 10x más rápido que v3
2. **Sintaxis CSS nativa** - No más JS config gigante
3. **Better DX** - Definiciones en CSS = mejor IDE support
4. **Menor bundle** - Optimizaciones internas

---

**El proyecto ya está configurado correctamente para Tailwind CSS v4.**
