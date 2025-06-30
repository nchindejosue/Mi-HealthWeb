module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Design System Colors
        "project-blue": "#05a5ce",
        "project-blue-light": "#46d5fa", 
        "project-blue-dark": "#0491b4",
        "project-green": "#5dbbad",
        "project-green-light": "#7dd3c0",
        "project-green-dark": "#4a9d91",
        "project-primary-dark": "#052831",
        
        // Neutral Colors
        "neutral-50": "#f8fafc",
        "neutral-100": "#f1f5f9",
        "neutral-200": "#e2e8f0",
        "neutral-300": "#cbd5e1",
        "neutral-400": "#94a3b8",
        "neutral-500": "#64748b",
        "neutral-600": "#475569",
        "neutral-700": "#334155",
        "neutral-800": "#1e293b",
        "neutral-900": "#0f172a",
        
        // Legacy colors for compatibility
        "colorsmint": "var(--colorsmint)",
        "colorsorange": "var(--colorsorange)",
        "colorsteal": "var(--colorsteal)",
        "dark-modedark-mode-50": "var(--dark-modedark-mode-50)",
        "errorred-400": "var(--errorred-400)",
        "errorred-600": "var(--errorred-600)",
        "light-green": "var(--light-green)",
        "neutral-gray-100": "#f1f5f9",
        "neutral-gray-300": "#cbd5e1",
        "neutral-gray-400": "#94a3b8",
        "neutral-gray-50": "#f8fafc",
        "neutral-gray-500": "#64748b",
        "neutral-gray-600": "#475569",
        "neutral-gray-700": "#334155",
        "neutral-gray-900": "#0f172a",
        "neutralgray-200": "#e2e8f0",
        "primaryblue-100": "#bbcaf3",
        "primaryblue-50": "#e8edfb",
        "shade-project-blue": "#0491b4",
        shadesblack: "#000000",
        shadeswhite: "#ffffff",
        "tint-project-blue": "#46d5fa",
        
        // Shadcn colors
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        // Legacy font families for compatibility
        "caption-semi-bold": "var(--caption-semi-bold-font-family)",
        "footer-CAP": "var(--footer-CAP-font-family)",
        "heading-h1-semi-bold": "var(--heading-h1-semi-bold-font-family)",
        "heading-h2-bold": "var(--heading-h2-bold-font-family)",
        "heading-h2-small-bold": "var(--heading-h2-small-bold-font-family)",
        "heading-h2-small-semi-bold": "var(--heading-h2-small-semi-bold-font-family)",
        "heading-h3-semi-bold": "var(--heading-h3-semi-bold-font-family)",
        "heading-h3-small-bold": "var(--heading-h3-small-bold-font-family)",
        "heading-h3-small-semi-bold": "var(--heading-h3-small-semi-bold-font-family)",
        "heading-h4-bold": "var(--heading-h4-bold-font-family)",
        "heading-h4-semi-bold": "var(--heading-h4-semi-bold-font-family)",
        "heading-h4-small-semi-bold": "var(--heading-h4-small-semi-bold-font-family)",
        "heading-h5-bold": "var(--heading-h5-bold-font-family)",
        "heading-h5-semi-bold": "var(--heading-h5-semi-bold-font-family)",
        "heading-h6-semi-bold": "var(--heading-h6-semi-bold-font-family)",
        "paragraph-p1-regular": "var(--paragraph-p1-regular-font-family)",
        "paragraph-p2-regular": "var(--paragraph-p2-regular-font-family)",
        "paragraph-p2-semi-bold": "var(--paragraph-p2-semi-bold-font-family)",
        "paragraph-p3-regular": "var(--paragraph-p3-regular-font-family)",
        "paragraph-p3-semi-bold": "var(--paragraph-p3-semi-bold-font-family)",
        "subheading-semi-bold": "var(--subheading-semi-bold-font-family)",
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      boxShadow: { 
        "shadow-XS": "var(--shadow-XS)",
        'sm': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        'md': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        'lg': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        'xl': '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in-left": {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "slide-in-right": {
          "0%": { opacity: "0", transform: "translateX(30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.8" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out",
        "slide-up": "slide-up 0.6s ease-out",
        "slide-in-left": "slide-in-left 0.6s ease-out",
        "slide-in-right": "slide-in-right 0.6s ease-out",
        "float": "float 3s ease-in-out infinite",
        "pulse": "pulse 2s ease-in-out infinite",
      },
      transitionDuration: {
        '400': '400ms',
      },
    },
    container: { 
      center: true, 
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        lg: '2rem',
        xl: '2.5rem',
        '2xl': '3rem',
      }, 
      screens: { 
        "2xl": "1400px" 
      } 
    },
  },
  plugins: [],
  darkMode: ["class"],
};