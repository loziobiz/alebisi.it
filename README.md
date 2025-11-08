# alebisi.it

Sito web personale basato su [Astro](https://astro.build).

## 🚀 Struttura del Progetto

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── BaseLayout.astro
│   └── pages/
│       ├── index.astro      # Homepage
│       ├── whoami.astro     # Chi sono
│       └── prj.astro        # Progetti
├── astro.config.mjs
├── package.json
├── tsconfig.json
└── README.md
```

## 📦 Installazione

Il progetto utilizza [pnpm](https://pnpm.io) come gestore di pacchetti.

```bash
# Installa le dipendenze
pnpm install

# Avvia il server di sviluppo
pnpm dev

# Build per produzione
pnpm build

# Preview della build
pnpm preview
```

## 🛣️ Rotte

- `/` - Homepage
- `/whoami` - Chi sono
- `/prj` - Progetti

## 📝 Note

Tutte le pagine sono attualmente in fase di sviluppo (Work in Progress).

## 📄 Licenza

Vedi il file [LICENSE](LICENSE) per i dettagli.
