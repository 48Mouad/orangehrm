
# 🧪 OrangeHRM - Test Automatisé avec Playwright

Ce projet contient une suite de tests automatisés pour [OrangeHRM Demo](https://opensource-demo.orangehrmlive.com/) réalisée avec **Playwright** et **TypeScript**.  
Il couvre les scénarios de connexion, gestion des employés, demandes de congés et déconnexion.

---

## 🚀 Lancer les tests en local
<!--  -->
### 1. Installer les dépendances

```bash
npm install
npx playwright install
```

### 2. Lancer tous les tests

```bash
npx playwright test
```

### 3. Ouvrir le rapport HTML

```bash
npx playwright show-report
```

### 4. Interface visuelle (UI Playwright)

```bash
npx playwright test --ui
```

> Ouvre une interface interactive pour exécuter les tests manuellement.

---

## 🐳 Exécuter avec Docker

### 1. Construire l'image Docker

```bash
docker build -t orangehrm-playwright .
```

### 2. Lancer les tests dans le conteneur

```bash
docker run --rm -v $(pwd)/test-results:/usr/src/app/test-results orangehrm-playwright
```

> Les résultats (captures, vidéos) seront disponibles dans `./test-results`

---

## ✅ Cas de test couverts

- TC001 : Connexion avec identifiants valides
- TC002 : Connexion avec mot de passe incorrect
- TC003 : Accès au tableau de bord
- TC004 : Navigation vers le module PIM
- TC005 : Ajout d'un employé avec données valides
- TC006 : Échec d'ajout sans prénom
- TC007 : Demande de congé
- TC008 : Ajout de candidat dans le module recrutement
- TC009 : Recherche d'un employé
- TC010 : Déconnexion utilisateur

---

## 📁 Structure simplifiée

```
.
├── tests/                  # Fichiers de tests Playwright
├── test-results/           # Résultats des tests
├── playwright.config.ts    # Configuration de test
├── Dockerfile              # Dockerisation du projet
└── README.md               # Ce fichier
```

---

## 🧑‍💻 Auteur

Projet réalisé par **Mouad ALAOUI MHAMMEDI** dans un objectif de pratique QA automatisée avec Playwright.