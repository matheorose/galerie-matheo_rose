# Structure du projet

## Racine
- `package.json` / `package-lock.json` : dépendance unique `astro@^5.15.4` avec scripts `dev`, `build`, `preview`, `astro`.
- `astro.config.mjs` : configuration par défaut générée (non modifiée jusqu'ici).
- `tsconfig.json` : configuration TypeScript par défaut d'Astro.
- `README.md` : documentation de base issue du starter Astro Basics.

## Dossiers
- `public/`
  - `favicon.svg`: icône de base.
- `src/`
  - `assets/`
    - `astro.svg`, `background.svg`: assets statiques supplémentaires.
  - `components/`
    - `LightCurtain.astro`: rideau noir qui gère les transitions de navigation en full screen.
    - `ArrowNav.astro`: boutons ←/→ fixés en bas pour naviguer entre les pages via `startTransition`.
    - `ProjectRoom.astro`: affiche l'œuvre (visuel, méta, modal de détails) pour un projet donné.
    - `Welcome.astro`: composant starter non utilisé dans l'UI actuelle.
  - `data/`
    - `projects.ts`: définition du type `Project` et liste des projets (slug, titre, année, rôle, tagline, cover, href optionnel).
  - `layouts/`
    - `BaseLayout.astro`: applique `global.css`, charge `/fonts.css`, fixe le `<title>` et rend un `<slot>` dans `<body>`.
  - `pages/`
    - `index.astro`: landing page statique qui affiche le header principal, un CTA vers le premier projet et `ArrowNav`.
    - `[slug].astro` (non présent, page1 en fait office de brouillon) : devrait afficher une salle par projet via `ProjectRoom`. Actuellement `page1.astro` contient la logique de slug.
  - `styles/`
    - `global.css`: variables CSS (bg/fg), layout plein écran, typographies, header, CTA, meta, nav boutons, media container, modal `<dialog>`, rideau `.light-curtain`.

## Flux d’expérience
1. L’utilisateur arrive sur `/`, voit `LightCurtain` (rideau éteint), le header et un CTA « Visiter la galerie ». `ArrowNav` fournit aussi la flèche droite vers la première salle.
2. Les flèches ou le CTA déclenchent `startTransition(url)` qui allume le rideau puis navigue vers la page projet correspondante.
3. La page projet charge `ProjectRoom` qui montre l’image, les infos, et un lien « Voir plus » ouvrant un `<dialog>` minimaliste avec description additionnelle et lien externe.
4. `ArrowNav` sur la page projet permet de revenir au projet précédent ou suivant; retour vers `/` quand il n’y a pas de précédent.

## Points à surveiller
- `LightCurtain.astro` doit enregistrer les handlers côté client seulement (pas pendant SSR) pour éviter les erreurs.
- `ArrowNav.astro` doit s’assurer que `startTransition` existe avant d’attacher l’événement (sinon fallback).
- `ProjectRoom.astro` doit gérer proprement l’ouverture/fermeture du `<dialog>` sans erreurs côté serveur.
- La page dynamique par slug devra être renommée en `[slug].astro` pour qu’Astro génère une route par projet.
