# Configuration Email pour le Portfolio

## Problème actuel
Le formulaire de contact utilise actuellement des liens `mailto:` qui ouvrent le client email par défaut de l'utilisateur.

## Solutions recommandées

### Option 1: Formspree (Recommandé - Gratuit et simple)
1. Aller sur https://formspree.io
2. Créer un compte gratuit
3. Créer un nouveau formulaire
4. Récupérer l'URL du formulaire (ex: https://formspree.io/f/xpzgkqyn)
5. Ajouter cette URL dans le fichier `.env.local`:
   ```
   NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/votre_id
   ```

### Option 2: EmailJS (Plus avancé)
1. Aller sur https://emailjs.com
2. Créer un compte
3. Configurer un service email (Gmail, Outlook, etc.)
4. Créer un template d'email
5. Récupérer les IDs et les ajouter dans `.env.local`

### Option 3: Netlify Forms (Si déployé sur Netlify)
Ajouter `data-netlify="true"` au formulaire et configurer les notifications.

## Instructions pour Formspree
1. Créer un compte sur formspree.io
2. Créer un nouveau formulaire
3. Copier l'URL du formulaire
4. Créer le fichier `.env.local` avec:
   ```
   NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/votre_id
   ```
5. Redémarrer le serveur de développement
