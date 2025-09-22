# 🚀 Guide de déploiement - Akira Design Portfolio

## GitHub Pages (Méthode recommandée)

### 1. Préparation
```bash
# Assurez-vous d'être dans le dossier du projet
cd akira-design-react

# Installez les dépendances
npm install

# Testez la build
npm run build
```

### 2. Configuration GitHub
1. **Créez un repository** sur GitHub (ex: `akira-design-react`)
2. **Poussez le code** :
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Portfolio React"
   git branch -M main
   git remote add origin https://github.com/VOTRE_USERNAME/akira-design-react.git
   git push -u origin main
   ```

### 3. Activation de GitHub Pages
1. Allez sur votre repository GitHub
2. Cliquez sur **Settings** (⚙️)
3. Dans la sidebar gauche, cliquez sur **Pages**
4. Sous **Source**, sélectionnez **"Deploy from a branch"**
5. Sélectionnez la branche **main** et le dossier **`/root`** (ou **gh-pages** si configuré)
6. Cliquez sur **Save**

### 4. Workflow automatique
Le projet contient déjà un workflow GitHub Actions qui :
- Se déclenche à chaque push sur la branche `main`
- Build automatiquement l'application
- Déploie sur GitHub Pages

## Autres plateformes de déploiement

### Vercel (Alternative recommandée)
1. Créez un compte sur [vercel.com](https://vercel.com)
2. Connectez votre repository GitHub
3. Cliquez sur **"New Project"**
4. Importez votre repository
5. Vercel détectera automatiquement que c'est un projet Vite
6. Cliquez sur **"Deploy"**

### Netlify
1. Créez un compte sur [netlify.com](https://netlify.com)
2. Cliquez sur **"New site from Git"**
3. Connectez GitHub et sélectionnez votre repository
4. Build settings :
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Cliquez sur **"Deploy site"**

## Vérification du déploiement

### Test local
```bash
npm run build
npm run preview
```

### URLs de déploiement
- **GitHub Pages** : `https://VOTRE_USERNAME.github.io/akira-design-react/`
- **Vercel** : `https://akira-design-react-VOTRE_USERNAME.vercel.app/`
- **Netlify** : `https://amazing-name-123456.netlify.app/`

## Dépannage

### Problème : Images ne se chargent pas
- Vérifiez que les images sont dans `public/images/`
- Les chemins doivent commencer par `/` (ex: `/images/logo.png`)

### Problème : 404 sur les routes
- Le projet utilise du routing côté client
- Pour GitHub Pages, assurez-vous que `base: '/akira-design-react/'` est configuré dans `vite.config.js`

### Problème : Build échoue
```bash
# Nettoyer et réessayer
rm -rf node_modules package-lock.json
npm install
npm run build
```

## Support

En cas de problème :
1. Vérifiez les logs de build dans GitHub Actions
2. Testez localement avec `npm run build`
3. Consultez la [documentation Vite](https://vitejs.dev/guide/)

---

**🎉 Votre portfolio sera bientôt en ligne !**
