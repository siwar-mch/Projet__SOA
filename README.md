# 📋 SOA Project – Person Management Application

## 📌 Description du projet  
Ce projet est une **application web** développée dans le cadre du cours d’**Architecture Orientée Services (SOA)**.  
Il illustre la conception, l’implémentation et la consommation de **services web RESTful** en utilisant une interface frontend moderne (React.js) et un backend Java (JAX-RS).  

L’application permet de **gérer des personnes** via une interface intuitive avec toutes les opérations CRUD :  
- Affichage de la liste des personnes  
- Ajout d’une nouvelle personne  
- Modification d’une personne existante  
- Suppression d’une personne  
- Recherche par nom ou ID  

---

## 🏗️ Architecture globale  
Le projet suit une **architecture client–serveur** :  

- **Frontend** : React.js (interface utilisateur)  
- **Backend** : Java – JAX-RS (services REST)  
- **Serveur d’application** : Apache Tomcat  
- **Format d’échange** : JSON  
- **Communication** : HTTP

---

## 🔧 Technologies utilisées  

- **Frontend** : React.js, Axios, CSS  
- **Backend** : Java (JAX-RS / Jakarta EE), Maven  
- **Serveur** : Apache Tomcat 10+  
- **API** : RESTful, JSON  
- **Gestion de code** : Git, GitHub  
- **Outils** : Postman (test des API), IDE (IntelliJ/Eclipse)  

---

## ▶️ Instructions pour exécuter le projet  

### Prérequis  
- Java JDK 1.8  
- Apache Tomcat v9.0  
- Node.js et npm (pour le frontend)  
- Maven (pour le backend)  
- Un IDE (IntelliJ, Eclipse, ou VS Code)  

### 1. Cloner le dépôt  
```bash
git clone git@github.com:siwar-mch/Projet__SOA.git
cd Projet__SOA
```

### 2. Backend (Services REST)  
1. Importer le projet Maven dans votre IDE  
2. Configurer Tomcat comme serveur d’application  
3. Déployer le module backend sur Tomcat  
4. Lancer le serveur – les API seront accessibles sur :  
   `http://localhost:8080/projet_soa/projet/`

### 3. Frontend (React)  
1. Ouvrir un terminal dans le dossier `frontend/`  
2. Installer les dépendances :  
   ```bash
   npm install
   ```  
3. Démarrer l’application React :  
   ```bash
   npm start
   ```  
4. L’interface sera accessible sur :  
   `http://localhost:3000`

### 4. Vérification  
- Backend : Accéder à `http://localhost:8080/projet_soa/projet/persons` (doit retourner un JSON vide ou une liste)  
- Frontend : Ouvrir `http://localhost:3000` et interagir avec l’interface  

---

## 🎥 Lien vers la vidéo de démonstration  
🔗 [Cliquez ici pour voir la démonstration vidéo du projet](https://drive.google.com/file/d/1S7PJ3PZBLkTV_BD-Au4SUgWdovAXD8dJ/view?usp=sharing)

La vidéo montre :  
- La structure du backend  
- La structure du frontend  
- Les fonctionnalités CRUD en action  

---

## 📚 Objectifs pédagogiques  
Ce projet met en pratique les concepts vus en cours :  
- Conception de services RESTful  
- Utilisation des méthodes HTTP (GET, POST, PUT, DELETE)  
- Intégration frontend–backend  
- Architecture modulaire et séparation des couches  

---

## 👩‍💻 Auteur  
**Siwar Mchirgui**  
Étudiante en informatique  
Projet SOA – Année universitaire 2025–2026  

