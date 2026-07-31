import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

const figmaCourseData = {
  title: "Figma Avance",
  slug: "figma-avance",
  description: "Learn Figma, and AI tools with a unique 80% practice-based approach",
  price: 29000,
  duration: 4,
  videoCount: 24,
  published: true,
  image: "/courses/figma-avance.jpg",
};

const modulesData = [
  {
    moduleId: "figma-m1",
    title: "Figma Interface Overview",
    description: "Decouvre l'interface Figma comme un pro : Toolbar, Layers, Pages, Frames et Assets Panel.",
    duration: "45 min",
    order: 1,
    icon: "Monitor",
    color: "brand-blue",
    videoUrl: "https://www.youtube.com/embed/FTFaQWZBqQ8",
    status: "available",
    sections: [
      {
        order: 1,
        heading: "L'ecran d'accueil Figma",
        body: "Quand tu ouvres Figma, tu arrives sur l'ecran d'accueil. Voici ce que tu y trouves :\n\n**Recent Files** — Tes derniers projets, accessibles en un clic.\n**New Design File** — Cree un nouveau fichier de design (c'est ici que la magie opere).\n**New FigJam File** — Le tableau blanc collaboratif pour brainstormer.\n**Community** — Une mine d'or de templates, plugins et ressources gratuites.\n\n*Astuce pro :* Utilise le raccourci Ctrl/Cmd + O pour ouvrir rapidement un fichier.",
        videoUrl: "https://www.youtube.com/embed/FTFaQWZBqQ8?start=0",
      },
      {
        order: 2,
        heading: "La Toolbar (barre d'outils)",
        body: "La Toolbar est ta boite a outils principale. De gauche a droite :\n\n**Move (V)** — Selectionner et deplacer des elements. L'outil le plus utilise.\n**Frame (F)** — Cree des conteneurs responsives (equivalent des artboards).\n**Shape Tools (R, O, L)** — Rectangle, Ellipse, Ligne, Polygon, Star.\n**Pen (P)** — Dessine des vecteurs personnalises et des formes complexes.\n**Text (T)** — Ajoute du texte. Clique une fois pour du texte auto-width, deux fois pour une zone fixe.\n**Component (Ctrl/Cmd + Alt + K)** — Transforme un element en composant reutilisable.\n**Comment (C)** — Laisse des commentaires pour collaborer avec ton equipe.\n\n*Exercice rapide :* Ouvre un nouveau fichier et survole chaque outil de la toolbar pour voir son raccourci clavier.",
        videoUrl: "https://www.youtube.com/embed/FTFaQWZBqQ8?start=120",
      },
      {
        order: 3,
        heading: "Le Layers Panel",
        body: "Le panneau Layers (a gauche) montre la hierarchie de tous les elements de ton design.\n\n**Organisation cle :**\n- **Pages** — Separe ton travail (ex: Wireframes, UI Kit, Prototype)\n- **Frames** — Les conteneurs principaux (iPhone, Desktop, etc.)\n- **Groups** — Regroupent des elements sans contrainte de layout\n- **Layers** — Chaque element individuel\n\n**Raccourcis essentiels :**\n- Ctrl/Cmd + G — Grouper\n- Ctrl/Cmd + Shift + G — Degrouper\n- Ctrl/Cmd + ] — Monter d'un niveau\n- Ctrl/Cmd + [ — Descendre d'un niveau\n\n*Astuce :* Nomme tes layers de maniere descriptive (ex: btn-primary au lieu de Rectangle 47). C'est crucial pour le handoff aux developpeurs.",
        videoUrl: null,
      },
      {
        order: 4,
        heading: "Le Assets Panel & Properties",
        body: "Le panneau de droite change selon ce que tu selectionnes :\n\n**Design Tab** — Couleurs, typographie, effets, layout\n**Prototype Tab** — Cree des liens entre ecrans, ajoute des interactions\n**Inspect Tab** — Genere du code CSS/iOS/Android pour les devs\n\n**Le Assets Panel (en bas a gauche)** regroupe :\n- **Components** — Tes composants reutilisables\n- **Styles** — Color styles, Text styles, Effect styles, Grid styles\n- **Images** — Tes images importees\n\n*Pro tip :* Appuie sur I pour ouvrir rapidement le panneau Assets et glisser-deposer des composants.",
        videoUrl: "https://www.youtube.com/embed/FTFaQWZBqQ8?start=300",
      },
    ],
    keyTakeaways: [
      "L'interface Figma est divisee en 3 zones : Toolbar (haut), Layers (gauche), Properties (droite).",
      "Les Frames sont les conteneurs de base — pense 'artboards responsives'.",
      "Le Assets Panel centralise tes composants et styles pour un workflow efficace.",
      "Les raccourcis clavier (V, F, R, T, P) font gagner des heures chaque semaine.",
    ],
  },
  {
    moduleId: "figma-m2",
    title: "Frames, Objects & Basic Shapes",
    description: "Cree des frames responsives, maitrise les formes et les boolean operations.",
    duration: "50 min",
    order: 2,
    icon: "Shapes",
    color: "brand-purple",
    videoUrl: "https://www.youtube.com/embed/hzHT-5v1P3s",
    status: "locked",
    sections: [
      {
        order: 1,
        heading: "Creer des Frames Responsives",
        body: "Les Frames sont le coeur de Figma. Contrairement aux artboards statiques, elles sont dynamiques.\n\n**Presets rapides :**\n- Clique sur Frame (F) -> choisis un preset : iPhone 14, Desktop, Instagram Post, etc.\n- Ou definis des dimensions custom : 375x812 (mobile), 1440x900 (desktop)\n\n**Proprietes magiques des Frames :**\n- **Auto Layout** — Le contenu s'adapte automatiquement (on verra ca en Module 4)\n- **Constraints** — Definis comment les elements se comportent au redimensionnement\n- **Grids & Layouts** — Ajoute des colonnes, des lignes, ou une grille de 8pt\n\n**Constraints expliques :**\n- **Left/Top** — L'element reste colle au bord gauche/haut\n- **Right/Bottom** — Colle au bord droit/bas\n- **Left & Right** — L'element s'etire horizontalement\n- **Scale** — L'element scale proportionnellement avec la frame\n\n*Pratique :* Cree 3 frames : Mobile (375x812), Tablet (768x1024), Desktop (1440x900). Place un rectangle dans chacune et teste les differents constraints en redimensionnant.",
        videoUrl: "https://www.youtube.com/embed/hzHT-5v1P3s?start=0",
      },
      {
        order: 2,
        heading: "Basic Shapes & Path Editing",
        body: "Figma offre des outils de forme puissants et intuitifs.\n\n**Formes de base :**\n- **Rectangle (R)** — Clique-glisse. Maintiens Shift pour un carre parfait.\n- **Ellipse (O)** — Maintiens Shift pour un cercle parfait.\n- **Ligne (L)** — Maintiens Shift pour des angles a 45deg.\n- **Polygon & Star** — Dans la toolbar, clique longuement sur l'outil forme pour les decouvrir.\n\n**Path Editing (mode vecteur) :**\nDouble-clique sur une forme pour entrer en mode edition de path. Tu peux :\n- **Move points** — Deplace les noeuds\n- **Bezier curves** — Clique-glisse sur un point pour creer des courbes\n- **Add/Delete points** — Alt + clic sur un segment pour ajouter un point\n\n**Corner Radius avance :**\nSelectionne un rectangle -> dans le panneau de droite, clique sur l'icone de chaine pour delier les coins. Tu peux alors definir 4 rayons differents !",
        videoUrl: "https://www.youtube.com/embed/hzHT-5v1P3s?start=180",
      },
      {
        order: 3,
        heading: "Boolean Operations",
        body: "Les Boolean Operations permettent de combiner des formes pour creer des designs complexes. C'est l'outil secret des UI designers !\n\n**4 operations disponibles :**\n\n**1. Union Selection** — Fusionne toutes les formes en une seule\n**2. Subtract Selection** — Soustrait la forme du dessus de celle du dessous\n**3. Intersect Selection** — Garde uniquement la zone de chevauchement\n**4. Exclude Selection** — Garde tout sauf la zone de chevauchement\n\n**Cas d'usage concrets :**\n- **Icone de recherche** — Cercle + Ligne (Union)\n- **Icone de message** — Rectangle + Triangle (Union + Subtract)\n- **Loader circulaire** — Deux cercles (Subtract)\n- **Badge avec encoche** — Rectangle + Triangle (Subtract)\n\n**Raccourci :** Selectionne plusieurs formes -> Ctrl/Cmd + Alt + M -> choisis l'operation.\n\n*Pratique :* Cree une icone de coeur en utilisant 2 cercles et 1 carre + Boolean Union. Puis cree une icone d'etoile avec des triangles.",
        videoUrl: "https://www.youtube.com/embed/hzHT-5v1P3s?start=360",
      },
      {
        order: 4,
        heading: "Images & Masks",
        body: "Travailler avec des images est essentiel en UI design.\n\n**Importer une image :**\n- Glisse-depose depuis ton ordinateur\n- Ou Ctrl/Cmd + Shift + K pour importer\n- Ou copie-colle depuis le web\n\n**Masks (Masques) :**\nUn mask decoupe une image selon la forme d'un autre objet.\n\n**Etapes :**\n1. Place ton image\n2. Dessine une forme par-dessus (cercle, rectangle, etc.)\n3. Selectionne les deux elements\n4. Ctrl/Cmd + Alt + M -> Use as Mask\n\n**Image fills avances :**\n- **Fill** — L'image remplit la forme (peut etre deformee)\n- **Fit** — L'image s'adapte entierement sans deformation\n- **Crop** — Tu choisis la zone visible\n- **Tile** — Repete l'image en mosaique\n\n**Effets sur images :**\n- Drop Shadow, Inner Shadow\n- Layer Blur, Background Blur\n- Blend Modes (Multiply, Screen, Overlay...)",
        videoUrl: null,
      },
    ],
    keyTakeaways: [
      "Les Frames sont des conteneurs dynamiques avec constraints et grids.",
      "Les Boolean Operations (Union, Subtract, Intersect, Exclude) creent des formes complexes.",
      "Les Masks permettent de decouper des images dans n'importe quelle forme.",
      "Les Constraints definissent le comportement des elements au redimensionnement.",
    ],
  },
  {
    moduleId: "figma-m3",
    title: "Text, Colors & Styles",
    description: "Maitrise les typography styles, color styles et la gestion des variants.",
    duration: "55 min",
    order: 3,
    icon: "Palette",
    color: "brand-yellow",
    videoUrl: "https://www.youtube.com/embed/PNJxeD29ZTg",
    status: "locked",
    sections: [
      {
        order: 1,
        heading: "Typography Styles",
        body: "Les Text Styles te permettent de definir une typographie coherente et reutilisable.\n\n**Pourquoi utiliser des Text Styles ?**\n- Coherence garantie sur tous les ecrans\n- Mise a jour globale en un clic\n- Handoff clair aux developpeurs\n- Gain de temps enorme\n\n**Creer un Text Style :**\n1. Selectionne un bloc de texte\n2. Dans le panneau Text (droite), clique sur les 4 points a cote de Text\n3. Create Style -> nomme-le (ex: H1 / Bold / Dark)\n4. Applique ce style partout !\n\n**Echelle typographique recommandee :**\n- H1 : 32px Bold — Titres de page\n- H2 : 24px SemiBold — Sections\n- H3 : 18px Medium — Sous-sections\n- Body : 16px Regular — Texte principal\n- Caption : 14px Regular — Metadonnees\n- Small : 12px Medium — Tags, labels\n\n*Astuce :* Utilise une echelle basee sur le ratio 1.25 (Major Third) pour une harmonie parfaite.",
        videoUrl: "https://www.youtube.com/embed/PNJxeD29ZTg?start=0",
      },
      {
        order: 2,
        heading: "Color Styles",
        body: "Les Color Styles centralisent ta palette et la rendent facilement modifiable.\n\n**Types de Color Styles :**\n- **Primary** — Couleur principale de la marque (CTAs, liens)\n- **Secondary** — Couleur complementaire\n- **Neutrals** — Gris pour textes, bordures, fonds\n- **Semantic** — Success (vert), Error (rouge), Warning (jaune), Info (bleu)\n- **Backgrounds** — Couleurs de fond des surfaces\n\n**Creer un Color Style :**\n1. Selectionne un element avec la couleur souhaitee\n2. Dans le panneau Fill, clique sur les 4 points -> Create Style\n3. Nomme-le de maniere hierarchique : Primary/500, Neutral/100, Semantic/Error\n\n**Convention de nommage :**\nPrimary/\n  50 (lightest)\n  100\n  200\n  300\n  400\n  500 (main)\n  600\n  700\n  800\n  900 (darkest)\n\n**Mettre a jour un style :**\nClique droit sur le style dans le Assets Panel -> Edit Style. Tous les elements utilisant ce style se mettent a jour instantanement !",
        videoUrl: "https://www.youtube.com/embed/PNJxeD29ZTg?start=240",
      },
      {
        order: 3,
        heading: "Gestion des Variants",
        body: "Les Variants te permettent de regrouper plusieurs etats d'un meme composant en une seule entite.\n\n**Exemple concret — Bouton :**\nAu lieu d'avoir 4 composants separes :\n- btn-primary-default\n- btn-primary-hover\n- btn-primary-disabled\n- btn-secondary-default\n\nTu crees **1 seul composant** Button avec des variants :\n- **Type** : Primary / Secondary / Ghost\n- **State** : Default / Hover / Pressed / Disabled\n- **Size** : Small / Medium / Large\n\n**Creer des Variants :**\n1. Cree ton composant principal\n2. Duplique-le (Alt + drag) pour creer les differents etats\n3. Selectionne tous les elements -> Combine as Variants (Ctrl/Cmd + Alt + K)\n4. Dans le panneau de droite, definis les proprietes (Type, State, Size)\n\n**Avantages des Variants :**\n- 1 seul composant dans le Assets Panel\n- Switch facile entre etats dans le panneau de droite\n- Prototype plus intelligent (change d'etat automatiquement)\n- Design system ultra-propre\n\n*Pratique :* Cree un bouton avec 3 types (Primary, Secondary, Ghost) x 4 etats (Default, Hover, Pressed, Disabled) = 12 variants en 1 seul composant !",
        videoUrl: "https://www.youtube.com/embed/PNJxeD29ZTg?start=480",
      },
      {
        order: 4,
        heading: "Effect & Grid Styles",
        body: "Ne neglige pas les autres types de styles !\n\n**Effect Styles :**\n- **Drop Shadow** — Ombre portee (elevation)\n- **Inner Shadow** — Ombre interne (profondeur)\n- **Layer Blur** — Flou sur l'element lui-meme\n- **Background Blur** — Flou sur ce qui est derriere (effet glassmorphism)\n\n**Creer un Effect Style :**\n1. Selectionne un element avec un effet\n2. Dans le panneau Effects, clique sur les 4 points -> Create Style\n\n**Grid Styles :**\n- **Columns** — Grille de colonnes (12-col pour web)\n- **Rows** — Grille de lignes\n- **Grid** — Grille de points ou de lignes (8pt grid !)\n\n**Pourquoi les Grid Styles ?**\n- Alignement parfait sur tous les ecrans\n- Respect du 8-point grid system\n- Handoff precis aux developpeurs\n\n**Raccourci :** Ctrl/Cmd + G' (apostrophe) pour afficher/masquer les grids.",
        videoUrl: null,
      },
    ],
    keyTakeaways: [
      "Les Text Styles garantissent une typographie coherente et facilement maintenable.",
      "Les Color Styles centralisent ta palette avec une convention de nommage claire.",
      "Les Variants regroupent plusieurs etats d'un composant en une seule entite.",
      "Les Effect et Grid Styles completent ton design system pour un rendu pro.",
    ],
  },
  {
    moduleId: "figma-m4",
    title: "Components & Auto Layout",
    description: "Cree des composants reutilisables, maitrise les variants et l'auto layout pour le responsive.",
    duration: "60 min",
    order: 4,
    icon: "Component",
    color: "brand-turquoise",
    videoUrl: "https://www.youtube.com/embed/9V3hnMK5IIo",
    status: "locked",
    sections: [
      {
        order: 1,
        heading: "Creer des Composants Reutilisables",
        body: "Un Component est un element maitre que tu peux reutiliser a l'infini. Quand tu modifies le maitre, toutes les instances se mettent a jour.\n\n**Creer un composant :**\n1. Dessine ton element (ex: un bouton)\n2. Selectionne-le -> Ctrl/Cmd + Alt + K ou clic droit -> Create Component\n3. L'element devient violet — c'est ton Master Component\n\n**Utiliser une instance :**\n- Glisse le composant depuis le Assets Panel\n- Ou Alt + drag pour dupliquer une instance\n- Ou copie-colle une instance existante\n\n**Override (personnalisation d'instance) :**\nTu peux modifier une instance sans toucher au master :\n- Changer le texte\n- Changer une couleur (si ce n'est pas un style lie)\n- Changer une image\n- Masquer des layers (Ctrl/Cmd + Shift + H)\n\n**Ce qui ne peut PAS etre override :**\n- La structure (ajouter/supprimer des elements)\n- Les constraints\n- Les effets (sauf si detache)\n\n**Detacher une instance :**\nCtrl/Cmd + Alt + B — Transforme l'instance en groupe normal.\n\n*Pratique :* Cree un composant Card avec une image, un titre, un sous-titre et un bouton. Place 4 instances et change le texte de chacune. Modifie le master et observe la mise a jour magique !",
        videoUrl: "https://www.youtube.com/embed/9V3hnMK5IIo?start=0",
      },
      {
        order: 2,
        heading: "Auto Layout — Le Game Changer",
        body: "L'Auto Layout est LA fonctionnalite qui fait de Figma un outil de design moderne. Il permet aux elements de s'adapter automatiquement a leur contenu.\n\n**Concept de base :**\n- Un frame avec Auto Layout ajuste sa taille selon son contenu\n- Les elements enfants se reorganisent automatiquement\n- Padding, spacing, et alignment sont definis une fois pour toutes\n\n**Appliquer l'Auto Layout :**\n1. Selectionne un ou plusieurs elements\n2. Shift + A ou clic droit -> Add Auto Layout\n3. Regle les proprietes dans le panneau de droite\n\n**Proprietes de l'Auto Layout :**\n- **Direction** — Vertical ou Horizontal\n- **Spacing** — Espace entre les elements (utilise le 8pt grid !)\n- **Padding** — Espace interieur (Top, Right, Bottom, Left)\n- **Alignment** — Start, Center, End, Space Between\n- **Distribution** — Packed ou Space Between\n\n**Exemples concrets :**\n- **Bouton** — Texte + fond avec padding auto\n- **Card** — Image + titre + description avec spacing vertical\n- **Navigation** — Liens alignes horizontalement avec spacing\n- **Liste** — Items empiles avec separateurs\n\n*Astuce pro :* N'hesite pas a imbriquer les Auto Layouts ! Un frame horizontal (icone + texte) dans un frame vertical (liste d'items) dans un frame horizontal (sidebar).",
        videoUrl: "https://www.youtube.com/embed/9V3hnMK5IIo?start=300",
      },
      {
        order: 3,
        heading: "Auto Layout Avance & Responsive",
        body: "Maitrise les subtilites de l'Auto Layout pour des designs 100% responsive.\n\n**Resizing Options :**\nChaque element dans un Auto Layout a 2 proprietes de resizing :\n\n**Hug Contents** — Le conteneur s'adapte a la taille de son contenu\n**Fixed Width/Height** — Taille fixe, le contenu peut etre coupe\n**Fill Container** — L'element occupe tout l'espace disponible\n\n**Cas d'usage :**\n- **Input field** — Hug en hauteur, Fill en largeur\n- **Sidebar** — Fixed width (250px), Hug en hauteur\n- **Card grid** — Les cards en Fill, le container en Hug\n- **Button** — Hug sur les deux axes (s'adapte au texte)\n\n**Nesting (Imbrication) :**\n[Frame Auto Layout — Vertical]\n  ├── [Header — Hug]\n  │     └── [Logo + Nav — Horizontal Auto Layout]\n  ├── [Content — Fill]\n  │     └── [Card Grid — Horizontal Auto Layout, Wrap]\n  │           ├── [Card 1 — Vertical Auto Layout]\n  │           ├── [Card 2 — Vertical Auto Layout]\n  │           └── [Card 3 — Vertical Auto Layout]\n  └── [Footer — Hug]\n        └── [Links — Horizontal Auto Layout]\n\n**Bonus : Wrap (Nouveaute Figma)**\nL'option Wrap permet de passer a la ligne automatiquement — parfait pour les grids responsives !\n\n*Pratique :* Cree une card de produit (image + nom + prix + bouton) avec Auto Layout. Duplique-la 3 fois dans un container horizontal avec Wrap. Redimensionne le container et observe la magie !",
        videoUrl: "https://www.youtube.com/embed/9V3hnMK5IIo?start=600",
      },
      {
        order: 4,
        heading: "Components + Auto Layout = Coeur",
        body: "La combinaison des Composants et de l'Auto Layout cree des design systems ultra-puissants.\n\n**Creer un composant avec Auto Layout :**\n1. Construis ton element avec Auto Layout (ex: un bouton)\n2. Transforme-le en Component\n3. Toutes les instances heriteront de l'Auto Layout\n\n**Exemple — Design System complet :**\n\n**Button Component :**\n- Auto Layout : Hug x Hug\n- Padding : 16px horizontal, 12px vertical\n- Border radius : 8px\n- Variants : Type x State x Size\n\n**Card Component :**\n- Auto Layout : Fixed width x Hug\n- Padding : 24px\n- Spacing : 16px vertical\n- Variants : Default / Hover / Selected\n\n**Input Component :**\n- Auto Layout : Fill width x Hug\n- Padding : 12px 16px\n- Variants : Default / Focus / Error / Disabled\n\n**Avantages de cette approche :**\n- Le bouton s'adapte automatiquement au texte\n- La card s'etire si le contenu augmente\n- L'input occupe toute la largeur disponible\n- Une modification du master = mise a jour globale\n\n*Pro tip :* Utilise des Spacer components (rectangles transparents) pour creer des gaps precis dans tes layouts complexes.",
        videoUrl: null,
      },
    ],
    keyTakeaways: [
      "Les Components permettent de reutiliser et mettre a jour des elements globalement.",
      "L'Auto Layout adapte automatiquement la taille et la position des elements.",
      "Les proprietes Hug / Fixed / Fill permettent de controler le comportement responsive.",
      "Components + Auto Layout + Variants = Design System professionnel.",
    ],
  },
  {
    moduleId: "figma-m5",
    title: "Prototyping Basics",
    description: "Cree des liens entre ecrans, ajoute des transitions et des interactions simples.",
    duration: "50 min",
    order: 5,
    icon: "MousePointerClick",
    color: "brand-easter",
    videoUrl: "https://www.youtube.com/embed/5XfPj5nSui0",
    status: "locked",
    sections: [
      {
        order: 1,
        heading: "Liens entre Ecrans",
        body: "Le prototypage dans Figma est intuitif et puissant. Passons en mode Prototype !\n\n**Creer un lien de navigation :**\n1. Selectionne un element (bouton, icone, carte...)\n2. Clique sur l'onglet **Prototype** (en haut a droite)\n3. Clique et glisse le cercle bleu vers la frame de destination\n4. Configure l'interaction dans le panneau\n\n**Types de declencheurs (Triggers) :**\n- **On Click / On Tap** — Le plus courant\n- **While Hovering** — Au survol (desktop)\n- **While Pressing** — Au maintien du clic\n- **After Delay** — Automatique apres X ms\n- **Mouse Enter / Leave** — Entree/sortie de souris\n- **On Drag** — Glissement (swipe)\n\n**Types d'actions :**\n- **Navigate To** — Va vers une autre frame\n- **Open Overlay** — Ouvre une modale par-dessus\n- **Swap With** — Remplace le contenu actuel\n- **Back** — Revient a l'ecran precedent\n- **Close Overlay** — Ferme la modale\n\n*Pratique :* Cree 2 frames (Home et Profil). Lie le bouton Profil de la Home a la frame Profil avec un trigger On Click.",
        videoUrl: "https://www.youtube.com/embed/5XfPj5nSui0?start=0",
      },
      {
        order: 2,
        heading: "Transitions & Animations",
        body: "Les transitions donnent vie a ton prototype. Figma offre plusieurs types d'animations.\n\n**Types de transitions :**\n\n**Instant** — Changement immediat (pas d'animation)\n**Dissolve** — Fondu enchaine (fade)\n**Move** — L'element se deplace physiquement vers sa nouvelle position\n**Smart Animate** — Analyse les differences entre 2 frames et anime automatiquement\n**Slide In / Out** — Glissement depuis un bord\n**Push** — Pousse l'ecran actuel pour reveler le nouveau\n\n**Parametres d'animation :**\n- **Duration** — 0ms a 10 000ms (300-500ms est ideal)\n- **Easing** — La courbe d'acceleration :\n  - **Ease Out** — Rapide au debut, lent a la fin (recommande pour les entrees)\n  - **Ease In** — Lent au debut, rapide a la fin\n  - **Ease In Out** — Doux au debut et a la fin\n  - **Linear** — Vitesse constante\n  - **Spring** — Rebond physique (tres naturel)\n\n**Smart Animate — Le must :**\nSmart Animate compare 2 frames avec les memes noms de layers et anime :\n- La position (x, y)\n- La taille (width, height)\n- La rotation\n- L'opacite\n- La couleur de fond\n- Le contenu du texte\n\n*Astuce :* Pour que Smart Animate fonctionne, les layers doivent avoir **exactement le meme nom** sur les 2 frames.",
        videoUrl: "https://www.youtube.com/embed/5XfPj5nSui0?start=240",
      },
      {
        order: 3,
        heading: "Interactions Avancees",
        body: "Va au-dela du simple clic avec des interactions complexes.\n\n**Overlays (Modales & Popups) :**\n1. Cree ta modale sur une frame separee\n2. Dans le prototype, choisis Open Overlay\n3. Definis la position : Center, Top Left, Bottom Right, etc.\n4. Choisis le comportement de fond : None, Dimmed, or Blur\n\n**Scroll Behavior :**\n- **Scrolls** — Le contenu defile normalement\n- **Fixed** — L'element reste fixe (ex: navbar sticky)\n- **Sticky** — L'element se colle en haut quand tu scrolls (ex: header qui se reduit)\n\n**Scrollable Areas :**\n1. Selectionne une frame\n2. Dans Prototype -> Overflow Behavior : Horizontal / Vertical / Both\n3. Le contenu depasse la frame et devient scrollable\n\n**Interactive Components :**\nLes variants peuvent etre lies entre eux pour des interactions sans liens manuels :\n- Toggle switch (Off -> On)\n- Checkbox (Unchecked -> Checked)\n- Bouton favori (Vide -> Plein)\n- Accordeon (Ferme -> Ouvert)\n\n**Creer un Interactive Component :**\n1. Cree un composant avec 2 variants (ex: Toggle Off / Toggle On)\n2. Passe en mode Prototype\n3. Lie le variant Off au variant On avec trigger On Click\n4. Lie le variant On au variant Off avec trigger On Click\n5. Maintenant, chaque instance de ce toggle est interactive !",
        videoUrl: "https://www.youtube.com/embed/5XfPj5nSui0?start=480",
      },
      {
        order: 4,
        heading: "Tester ton Prototype",
        body: "Un prototype ne sert a rien s'il n'est pas teste !\n\n**Presenter le prototype :**\n- Ctrl/Cmd + Alt + Enter — Mode presentation\n- Ou clic sur l'icone play en haut a droite\n- Choisis la frame de depart et le device frame (iPhone, Desktop...)\n\n**Partager le prototype :**\n- Share -> Copy link — Envoie le lien a tes testeurs\n- Active Show hotspot hints pour montrer les zones cliquables\n- Active Show comments pour recevoir du feedback directement\n\n**Test sur mobile :**\n- **Figma Mirror** (app iOS/Android) — Scanne le QR code pour tester sur ton telephone\n- **Browser** — Le lien fonctionne sur tous les navigateurs\n\n**Conseils pour des prototypes reussis :**\n- Commence simple (navigation de base)\n- Ajoute les micro-interactions apres\n- Teste sur le device reel (mobile vs desktop)\n- Limite le nombre d'ecrans par flux (3-5 max pour un test)\n- Utilise du contenu realiste, pas du Lorem Ipsum\n\n*Pratique :* Cree un flux complet : Home -> Categorie -> Produit -> Panier. Ajoute des transitions Slide In avec Ease Out a 300ms.",
        videoUrl: null,
      },
    ],
    keyTakeaways: [
      "Le mode Prototype lie les elements entre frames avec des triggers et des actions.",
      "Smart Animate cree des animations fluides entre 2 frames avec les memes noms de layers.",
      "Les Overlays permettent de creer des modales sans dupliquer du contenu.",
      "Les Interactive Components rendent les elements (toggle, checkbox) cliquables nativement.",
    ],
  },
  {
    moduleId: "figma-m6",
    title: "AI Tools in Figma",
    description: "Plugins IA pour generation de contenu, mockups rapides et gain de temps en 80% pratique.",
    duration: "55 min",
    order: 6,
    icon: "Sparkles",
    color: "brand-soft",
    videoUrl: "https://www.youtube.com/embed/4NqYTN7j5qE",
    status: "locked",
    sections: [
      {
        order: 1,
        heading: "Magician (Diagram)",
        body: "Magician est LE plugin IA le plus populaire de Figma. Il peut tout faire !\n\n**Fonctionnalites :**\n- **Text to Icon** — Decris une icone, Magician la genere\n- **Text to Image** — Genere des images realistes ou illustrations\n- **Copywriting** — Redige du texte pour tes designs (titres, descriptions, CTA)\n- **SVG to Code** — Convertit des designs en code React, HTML, Swift...\n\n**Utilisation :**\n1. Installe le plugin : Community -> Plugins -> Magician\n2. Selectionne un element ou une frame\n3. Ouvre Magician -> choisis la fonctionnalite\n4. Decris ce que tu veux en langage naturel\n\n**Exemples pratiques :**\n- Genere une icone de panier de shopping style outline, couleur #333\n- Redige une description de produit pour une montre connectee, ton elegant\n- Transforme ce bouton en composant React avec Tailwind\n\n*Gain de temps :* Ce qui prenait 30 min (creer une icone custom) prend maintenant 30 secondes.",
        videoUrl: "https://www.youtube.com/embed/4NqYTN7j5qE?start=0",
      },
      {
        order: 2,
        heading: "Plugins IA pour le Contenu",
        body: "Plusieurs plugins IA specialises existent pour enrichir tes designs avec du contenu realiste.\n\n**Image Fillers :**\n- **Unsplash** — Images HD gratuites directement dans Figma\n- **Pexels** — Banque d'images libres de droits\n- **AI Image Generator** — Genere des images uniques avec Stable Diffusion\n\n**Text & Copy :**\n- **ChatGPT for Figma** — Integre ChatGPT pour rediger du contenu\n- **Lorem Ipsum... but AI** — Genere du faux contenu realiste (noms, adresses, emails)\n- **Frontitude** — Gestion de contenu multilingue avec IA\n\n**Avatars & Personas :**\n- **Avataaars Generator** — Cree des avatars uniques\n- **This Person Does Not Exist** — Avatars generes par IA (100% uniques)\n- **Humaaans** — Illustrations de personnages customisables\n\n**Workflow pratique :**\n1. Cree ta structure de page avec du faux texte\n2. Utilise ChatGPT for Figma pour generer du vrai contenu\n3. Remplace les placeholders par des images Unsplash\n4. Genere des avatars uniques pour tes personas\n\n*Astuce :* Utilise toujours du contenu realiste dans tes maquettes. Ca change tout pour les tests utilisateurs et les presentations clients.",
        videoUrl: "https://www.youtube.com/embed/4NqYTN7j5qE?start=240",
      },
      {
        order: 3,
        heading: "Plugins IA pour la Productivite",
        body: "L'IA ne se limite pas au contenu — elle optimise tout ton workflow.\n\n**Cleanup & Organisation :**\n- **Autoflow** — Genere automatiquement des fleches de user flow\n- **Rename It** — Renomme tes layers intelligemment avec l'IA\n- **Similayer** — Selectionne tous les layers similaires en un clic\n\n**Design Assistants :**\n- **Fig3D** — Transforme des designs 2D en mockups 3D realistes\n- **Mockuuups Studio** — Place tes designs dans des mockups de devices\n- **Angle Mockups** — Mockups avec perspectives realistes\n\n**Analyse & Feedback :**\n- **Stark** — Verifie l'accessibilite (contraste, daltonisme) — ESSENTIEL\n- **Contrast** — Analyse les ratios de contraste WCAG\n- **A11y - Color Contrast Checker** — Alternative gratuite\n\n**Workflow 80% pratique :**\n1. **Wireframe** (20%) — Structure rapide avec Auto Layout\n2. **Content** (30%) — Remplis avec l'IA (texte + images)\n3. **Polish** (30%) — Applique tes styles, ajuste les espacements\n4. **Prototype** (15%) — Liens et transitions\n5. **Review** (5%) — Stark pour l'accessibilite\n\n**Avant IA :** 8 heures pour une landing page\n**Avec IA :** 2 heures pour une landing page de meilleure qualite\n\n*Pratique :* Cree une landing page complete en 30 minutes :\n- Structure avec Auto Layout (5 min)\n- Genere le copy avec ChatGPT for Figma (5 min)\n- Images avec Unsplash + AI Image Generator (5 min)\n- Styles et polish (10 min)\n- Prototype basique (5 min)",
        videoUrl: "https://www.youtube.com/embed/4NqYTN7j5qE?start=480",
      },
      {
        order: 4,
        heading: "Integrer l'IA dans ton Workflow",
        body: "L'IA est un outil, pas un remplacant. Voici comment l'integrer intelligemment.\n\n**Faire avec l'IA :**\n- Generer du contenu placeholder realiste\n- Creer des variations rapides d'icones\n- Generer des descriptions et copywriting\n- Tester des palettes de couleurs alternatives\n- Creer des mockups pour les presentations\n\n**NE PAS faire avec l'IA :**\n- Remplacer la recherche utilisateur\n- Ignorer l'accessibilite (l'IA ne pense pas aux utilisateurs reels)\n- Creer des designs sans comprendre le contexte metier\n- Copier-coller du code genere sans verification\n\n**L'equilibre parfait :**\n| Tache | Avant IA | Avec IA | Gain |\n|-------|----------|---------|------|\n| Wireframe | 2h | 1h | 50% |\n| Copywriting | 1h | 10min | 83% |\n| Images | 1h | 10min | 83% |\n| Icones | 45min | 5min | 89% |\n| Mockups | 30min | 5min | 83% |\n| **Total** | **5h15** | **1h30** | **71%** |\n\n**Prochaines etapes :**\n- Explore la Figma Community chaque semaine pour decouvrir les nouveaux plugins\n- Cree ta propre liste de plugins favoris\n- Partage tes decouvertes avec la communaute UXLoop\n\n*Felicitations !* Tu as termine le module 6. Tu maitrises maintenant les outils IA pour accelerer ton workflow de 70-80%.",
        videoUrl: null,
      },
    ],
    keyTakeaways: [
      "Magician genere icones, images, copywriting et code a partir de descriptions textuelles.",
      "Les plugins de contenu (Unsplash, ChatGPT, avatars) enrichissent tes designs en minutes.",
      "Stark et les checkers de contraste garantissent l'accessibilite de tes designs.",
      "L'IA accelere le workflow de 70-80%, mais ne remplace pas la pensee UX et la recherche utilisateur.",
    ],
  },
];

const quizData = {
  title: "Figma Fundamentals — Quiz Final",
  description: "Teste ta maitrise de l'interface Figma, des composants, de l'Auto Layout, du prototypage et des outils IA.",
  timeLimit: "20 minutes",
  passingScore: 80,
  questions: [
    {
      questionId: "fq1",
      question: "Quel raccourci clavier ouvre l'outil Frame dans Figma ?",
      options: ["R", "F", "V", "T"],
      correctAnswer: 1,
      explanation: "Le raccourci F cree un Frame. R est pour Rectangle, V pour Move, et T pour Text.",
    },
    {
      questionId: "fq2",
      question: "Dans l'Auto Layout, que signifie l'option 'Hug Contents' ?",
      options: [
        "L'element occupe tout l'espace disponible",
        "Le conteneur s'adapte a la taille de son contenu",
        "L'element est verrouille et ne peut pas etre modifie",
        "Le contenu est masque par defaut",
      ],
      correctAnswer: 1,
      explanation: "'Hug Contents' signifie que le conteneur ajuste automatiquement sa taille pour s'adapter a son contenu. C'est l'option par defaut ideale pour les boutons et les badges.",
    },
    {
      questionId: "fq3",
      question: "Quelle est la condition ESSENTIELLE pour que Smart Animate fonctionne correctement ?",
      options: [
        "Les deux frames doivent avoir la meme taille",
        "Les layers doivent avoir exactement le meme nom sur les deux frames",
        "Les couleurs de fond doivent etre identiques",
        "Les frames doivent etre sur la meme page",
      ],
      correctAnswer: 1,
      explanation: "Smart Animate compare les layers par leur nom. Si les noms correspondent exactement entre les deux frames, Figma peut animer leurs proprietes (position, taille, opacite, etc.).",
    },
    {
      questionId: "fq4",
      question: "Quel plugin est ESSENTIEL pour verifier l'accessibilite (contraste WCAG) dans Figma ?",
      options: ["Magician", "Unsplash", "Stark", "Autoflow"],
      correctAnswer: 2,
      explanation: "Stark est le plugin de reference pour l'accessibilite. Il verifie les ratios de contraste, simule le daltonisme, et suggere des corrections pour respecter les standards WCAG.",
    },
    {
      questionId: "fq5",
      question: "Quel est l'avantage principal de combiner Components + Auto Layout + Variants ?",
      options: [
        "Ca rend le fichier Figma plus lourd mais plus joli",
        "Ca cree un Design System responsive, maintenable et scalable",
        "Ca empeche les autres designers de modifier le fichier",
        "Ca supprime automatiquement les elements inutilises",
      ],
      correctAnswer: 1,
      explanation: "La combinaison Components + Auto Layout + Variants forme la base d'un Design System professionnel : reutilisable (Components), adaptable (Auto Layout), et flexible (Variants).",
    },
  ],
};

const deliverableData = {
  title: "Livrable Pratique — Recree ton App Favorite",
  description: "Mets en pratique les 6 modules en recreant l'ecran principal d'une app que tu utilises frequemment.",
  instructions: "En reprenant l'exemple de la capture d'ecran (analyse d'une app) de la Week 1 Foundations, recree dans Figma l'ecran principal d'une app que tu utilises frequemment.",
  format: "Figma file (partage le lien) + export PNG des 2 ecrans + video GIF du prototype (optionnel)",
  deadline: "Fin du cours Figma Fundamentals",
  evaluationCriteria: [
    "Maitrise de l'interface Figma (frames, shapes, constraints)",
    "Utilisation correcte des Composants et de l'Auto Layout",
    "Coherence des Color Styles et Text Styles",
    "Qualite du prototype (transitions fluides, liens logiques)",
    "Attention aux details (spacing, alignment, icones, typographie)",
  ],
  requirements: [
    {
      heading: "Ecran Principal",
      points: [
        "Recree fidelement l'ecran principal d'une app que tu utilises quotidiennement (Instagram, Spotify, Uber, WhatsApp, ou ton app bancaire)",
        "Respecte la structure visuelle : header, contenu principal, navigation bar",
        "Utilise une frame avec les dimensions correctes (ex: iPhone 14 Pro : 393x852)",
      ],
    },
    {
      heading: "Composants Reutilisables (minimum 2)",
      points: [
        "Cree au moins 2 composants reutilisables avec Auto Layout (ex: Card de produit, Bouton, Input field, Item de liste)",
        "Chaque composant doit utiliser l'Auto Layout (Hug ou Fill adapte au contenu)",
        "Les composants doivent etre nommes de maniere descriptive",
      ],
    },
    {
      heading: "Color Style & Typography Style",
      points: [
        "Cree au moins 3 Color Styles coherents (Primary, Secondary, Neutral) avec une convention de nommage claire",
        "Cree au moins 3 Text Styles (H1, Body, Caption) avec une echelle typographique harmonieuse",
        "Applique ces styles de maniere coherente sur tous les elements de ton design",
      ],
    },
    {
      heading: "Prototype Cliquable",
      points: [
        "Cree un minimum de 2 ecrans (ex: Home -> Detail / Home -> Profil)",
        "Ajoute des liens de navigation avec des transitions (Slide In, Dissolve, ou Smart Animate)",
        "Teste ton prototype en mode Presentation (Ctrl/Cmd + Alt + Enter)",
      ],
    },
  ],
};

export async function POST(req: NextRequest) {
  try {
    let course = await prisma.course.findUnique({
      where: { slug: "figma-avance" },
    });

    if (course) {
      return NextResponse.json(
        { message: "Le cours Figma Avance existe deja.", courseId: course.id },
        { status: 200 }
      );
    }

    course = await prisma.course.create({
      data: {
        title: figmaCourseData.title,
        slug: figmaCourseData.slug,
        description: figmaCourseData.description,
        price: figmaCourseData.price,
        duration: figmaCourseData.duration,
        videoCount: figmaCourseData.videoCount,
        published: figmaCourseData.published,
        image: figmaCourseData.image,
      },
    });

    for (const mod of modulesData) {
      await prisma.courseModule.create({
        data: {
          courseId: course.id,
          moduleId: mod.moduleId,
          title: mod.title,
          description: mod.description,
          duration: mod.duration,
          order: mod.order,
          icon: mod.icon,
          color: mod.color,
          videoUrl: mod.videoUrl,
          status: mod.status,
          keyTakeaways: mod.keyTakeaways,
          sections: {
            create: mod.sections.map((s) => ({
              order: s.order,
              heading: s.heading,
              body: s.body,
              videoUrl: s.videoUrl,
            })),
          },
        },
      });
    }

    await prisma.courseQuiz.create({
      data: {
        courseId: course.id,
        title: quizData.title,
        description: quizData.description,
        timeLimit: quizData.timeLimit,
        passingScore: quizData.passingScore,
        questions: {
          create: quizData.questions.map((q) => ({
            questionId: q.questionId,
            question: q.question,
            options: q.options,
            correctAnswer: q.correctAnswer,
            explanation: q.explanation,
          })),
        },
      },
    });

    await prisma.courseDeliverable.create({
      data: {
        courseId: course.id,
        title: deliverableData.title,
        description: deliverableData.description,
        instructions: deliverableData.instructions,
        format: deliverableData.format,
        deadline: deliverableData.deadline,
        evaluationCriteria: deliverableData.evaluationCriteria,
        requirements: {
          create: deliverableData.requirements.map((r) => ({
            heading: r.heading,
            points: r.points,
          })),
        },
      },
    });

    return NextResponse.json(
      {
        message: "Cours Figma Avance cree avec succes !",
        courseId: course.id,
        modulesCount: modulesData.length,
        quizQuestions: quizData.questions.length,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Erreur seed Figma:", error);
    return NextResponse.json(
      { error: "Erreur lors de la creation du cours", details: (error as Error).message },
      { status: 500 }
    );
  }
}
