// scripts/seed.js
import sequelize from './database.js';
import Movie from '../models/movie.js';
import './customConsole.js';

const moviesData = [
  {
    type: 'movie',
    title: 'The Shawshank Redemption',
    genre: 'Drama',
    release_date: '1994-09-23',
    rating: 9.3,
    imageUrl: 'https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg'
  },
  {
    type: 'movie',
    title: 'The Godfather',
    genre: 'Crime, Drama',
    release_date: '1972-03-14',
    rating: 9.2,
    imageUrl: 'https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg'
  },
  {
    type: 'movie',
    title: 'The Dark Knight',
    genre: 'Action, Crime, Drama',
    release_date: '2008-07-16',
    rating: 9.0,
    imageUrl: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg'
  },
  {
    type: 'movie',
    title: 'Schindler\'s List',
    genre: 'Drama, History, War',
    release_date: '1993-12-15',
    rating: 9.0,
    imageUrl: 'https://image.tmdb.org/t/p/w500/c8Ass7acuOe4za6DhSattE359gr.jpg'
  },
  {
    type: 'serie',
    title: 'Breaking Bad',
    genre: 'Crime, Drama, Thriller',
    release_date: '2008-01-20',
    rating: 9.5,
    imageUrl: 'https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg'
  },
  {
    type: 'serie',
    title: 'Game of Thrones',
    genre: 'Sci-Fi & Fantasy, Drama, Action & Adventure',
    release_date: '2011-04-17',
    rating: 8.4,
    imageUrl: 'https://image.tmdb.org/t/p/w500/u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg'
  },
  {
    type: 'movie',
    title: 'Inception',
    genre: 'Action, Science Fiction, Adventure',
    release_date: '2010-07-16',
    rating: 8.8,
    imageUrl: 'https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg'
  },
  {
    type: 'movie',
    title: 'Parasite',
    genre: 'Drama, Thriller, Comedy',
    release_date: '2019-05-30',
    rating: 8.6,
    imageUrl: 'https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg'
  },
  {
    type: 'movie',
    title: 'Forrest Gump',
    genre: 'Comedy, Drama, Romance',
    release_date: '1994-06-23',
    rating: 8.8,
    imageUrl: 'https://image.tmdb.org/t/p/w500/yE5d3BUhE8hCnkMUJOo1QDoOGNz.jpg'
  },
  {
    type: 'movie',
    title: 'The Matrix',
    genre: 'Action, Science Fiction',
    release_date: '1999-03-30',
    rating: 8.7,
    imageUrl: 'https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg'
  }
];

const seedDatabase = async () => {
  try {
    await Movie.bulkCreate(moviesData);
    console.info('✅ Database seeded!');
  } catch (error) {
    console.error('Failed to seed database:', error);
  }
};

export default seedDatabase;
