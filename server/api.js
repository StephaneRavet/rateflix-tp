import express from 'express';
import cors from 'cors';
import sequelize from './config/database.js';
import './config/customConsole.js';
import Movie from './models/movie.js';
import seedDatabase from './config/seed.js'
// Importation des routes

const app = express();

// Utilisation du middleware CORS
app.use(cors());

// Utilisation du middleware pour parser les JSON
app.use(express.json());

// Utilisation des routes

sequelize
  // Connexion à la base de données
  .authenticate()
  .then(() => {
    console.log('✅ Connection to the database has been established successfully.');
  })
  // Synchronisation des modèles avec la base de données
  .sync({ force: true })
  .then(async () => {
    console.log('✅ Database & tables created!');
    // Vérifier s'il y a 0 enregistrement dans la table movies
    const movieCount = await Movie.count();
    if (movieCount === 0) {
      console.log('No movies found, seeding database...');
      await seedDatabase();
    }
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

// Définir le port d'écoute
const PORT = process.env.PORT || 5000;

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`✅ API Server is running on port ${PORT}`);
});
