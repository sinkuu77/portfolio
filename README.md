# GWON Minyoung portfolio frontend developer

<p>Voici mon site portfolio de développeur frontend.</p>
<p> Vous pouvez trouver le lien vers le site ci-dessous 👇 : </p>
<a href="https://minyounggwon-frontend.com/">https://minyounggwon-frontend.com/</a>

## Preview

<img src=https://i.ibb.co/hBrRfWP/1.png />

## le délai de production du site
06.09.23 - 21.09.23

## Stack utilisé
Next.js, TypeScript, Tailwind CSS

## Point
Le concept de ce site est basé sur la grande roue. Pour cela, j'ai créé une application monopage qui permet aux utilisateurs de naviguer via l'animation de défilement en utilisant react-scroll.

## Problème en réalisant ce projet
1. 😱**Pendant le déploiement**,
<p> j'ai rencontré des difficultés liées aux  composants côté client. J'étais conscient que, dans Next.js, il est essentiel de signaler 'use client' en haut du fichier lors de l'utilisation d'éléments interactifs avec les utilisateurs, tels que les eventListener, use State. Malheureusement, j'ai omis cette déclaration pour quelques composants, et bien que mon projet fonctionnait correctement localement avec npm, des erreurs sont apparues lors du déploiement sur Vercel. </p>
<p>Cela souligne l'importance de rester attentif à ce problème lors de l'utilisation de Next.js, car l'omission de la déclaration 'use client' pour les composants côté client peut entraîner des erreurs spécifiques au moment du déploiement.</p>

2. 😱**À plusieurs reprises au cours de ce projet, j'ai dû ajuster la structure du site par rapport à la maquette initiale.**
<p>Par exemple, pour la version mobile, j'avais initialement créé une maquette avec une navigation basée sur des icônes. Cependant, en utilisant React-scroll, je me suis rendu compte que modifier la structure pour la version mobile tout en conservant la navigation via l'animation de défilement était plus complexe que prévu.</p>
<p>Enfin, j'ai pris la décision de maintenir la navigation via l'animation de défilement pour la version mobile.</p>
<p>Cela m'a conduit à comprendre l'importance de la communication en tant que développeur. Cette expérience m'a montré que la capacité à expliquer et à justifier ses choix est cruciale. </p>
