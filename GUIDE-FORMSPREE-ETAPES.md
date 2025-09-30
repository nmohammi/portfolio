# 📧 Guide Formspree - Étapes Détaillées

## 🎯 Objectif
Recevoir les messages de contact directement dans votre boîte Gmail au lieu d'ouvrir le client email.

## 📋 Étapes Détaillées

### 1. Créer un compte Formspree
1. Aller sur https://formspree.io
2. Cliquer sur **"Get Started"** ou **"Sign Up"**
3. S'inscrire avec votre email `nasr.mohammi@gmail.com`
4. Vérifier votre email

### 2. Créer un nouveau formulaire
1. Une fois connecté, cliquer sur **"New Form"**
2. Donner un nom : `Portfolio Contact Form`
3. Cliquer **"Create Form"**

### 3. Récupérer l'URL du formulaire
1. Après création, vous verrez une URL comme : `https://formspree.io/f/xpzgkqyn`
2. **Copier cette URL complète**

### 4. Configurer votre portfolio
1. Dans votre dossier `portfolio`, créer un fichier `.env.local`
2. Ajouter cette ligne (remplacer par votre URL) :
   ```
   NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/votre_id_ici
   ```

### 5. Redémarrer le serveur
```bash
cd /home/nmohammi/portfolio
npm run dev
```

### 6. Tester
1. Aller sur votre site
2. Remplir le formulaire de contact
3. Cliquer "Send message"
4. ✅ Le message devrait arriver dans votre Gmail !

## 🔧 Configuration Email (Optionnel)
1. Dans Formspree, aller dans **Settings**
2. Ajouter votre email de notification
3. Configurer les templates d'email si souhaité

## 🚨 Dépannage
- **Erreur 404** : Vérifier que l'URL Formspree est correcte
- **Pas d'email reçu** : Vérifier les spams
- **Formulaire ne fonctionne pas** : Vérifier la console du navigateur (F12)

## 📊 Limites Gratuites
- 50 soumissions/mois
- 1 formulaire
- Pas de reCAPTCHA (peut être ajouté)

## 💡 Alternative Premium
Si vous voulez plus de fonctionnalités, Formspree propose des plans payants avec plus de soumissions et de fonctionnalités.
