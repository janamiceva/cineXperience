import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // const movie1 = await prisma.movie.create({
  //   data: {
  //    name: 'Titanic', 
  //    description: 'A 1997 American epic romance and disaster film directed, written, co-produced, and co-edited by James Cameron.',
  //    rating: 8.4,
  //    director: 'James Cameron',
  //    cast: ['Leonardo DiCaprio', 'Kate Winslet', 'Billy Zane', 'Kathy Bates'],
  //    duration: 195, 
  //    genre: ['Romance', 'Drama', 'Historical', 'Disaster'],
  //    image: 'https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_FMjpg_UX1000_.jpg'
  //   }
  // })

  // const movie2 = await prisma.movie.create({
  //   data: {
  //     name: 'The Shawshank Redemption',
  //     description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
  //     rating: 9.3,
  //     director: 'Frank Darabont',
  //     cast: ['Tim Robbins', 'Morgan Freeman', 'Bob Gunton', 'William Sadler'],
  //     duration: 142,
  //     genre: ['Drama', 'Crime'],
  //     image: 'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg'
  //   }
  // });

  // const movie3 = await prisma.movie.create({
  //   data: {
  //     name: 'Inception',
  //     description: 'A thief who enters the dreams of others to steal their secrets embarks on a mind-bending journey.',
  //     rating: 8.8,
  //     director: 'Christopher Nolan',
  //     cast: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt', 'Ellen Page', 'Tom Hardy'],
  //     duration: 148,
  //     genre: ['Science Fiction', 'Action', 'Thriller'],
  //     image: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg'
  //   }
  // });

  // const movie4 = await prisma.movie.create({
  //   data: {
  //     name: 'Avatar',
  //     description: 'A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following orders and protecting an alien civilization.',
  //     rating: 7.8,
  //     director: 'James Cameron',
  //     cast: ['Sam Worthington', 'Zoe Saldana', 'Sigourney Weaver', 'Stephen Lang'],
  //     duration: 162,
  //     genre: ['Science Fiction', 'Action', 'Adventure'],
  //     image: 'https://variety.com/wp-content/uploads/2021/04/Avatar.jpg'
  //   }
  // });
  // const movie5 = await prisma.movie.create({
  //   data: {
  //     name: 'The Godfather',
  //     description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
  //     rating: 9.2,
  //     director: 'Francis Ford Coppola',
  //     cast: ['Marlon Brando', 'Al Pacino', 'James Caan', 'Robert Duvall'],
  //     duration: 175,
  //     genre: ['Crime', 'Drama'],
  //     image: 'https://media.vanityfair.com/photos/615dcfaf3aae1b3c1f41b920/master/pass/the-godfather-site-story.jpg'
  //   }
  // });

  // const movie6 = await prisma.movie.create({
  //   data: {
  //     name: 'Forrest Gump',
  //     description: 'The life story of a man with a low IQ who witnesses and unwittingly influences historical events in the 20th century.',
  //     rating: 8.8,
  //     director: 'Robert Zemeckis',
  //     cast: ['Tom Hanks', 'Robin Wright', 'Gary Sinise', 'Sally Field'],
  //     duration: 142,
  //     genre: ['Drama', 'Romance', 'Comedy'],
  //     image: 'https://sumo.cdn.tv2.no/imageapi/v3/img/602556e2498e968b6a711f64-1641467533539?location=list&width=1200&height=630'
  //   }
  // });

  // const movie7 = await prisma.movie.create({
  //   data: {
  //     name: 'Pulp Fiction',
  //     description: 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
  //     rating: 8.9,
  //     director: 'Quentin Tarantino',
  //     cast: ['John Travolta', 'Samuel L. Jackson', 'Uma Thurman', 'Bruce Willis'],
  //     duration: 154,
  //     genre: ['Crime', 'Drama', 'Thriller'],
  //     image: 'https://m.media-amazon.com/images/S/pv-target-images/dbb9aff6fc5fcd726e2c19c07f165d40aa7716d1dee8974aae8a0dad9128d392.jpg'
  //   }
  // });

  // const movie8 = await prisma.movie.create({
  //   data: {
  //     name: 'The Dark Knight',
  //     description: 'When the menace known as The Joker emerges, Batman must confront one of the greatest psychological and physical tests of his ability to fight injustice.',
  //     rating: 9.0,
  //     director: 'Christopher Nolan',
  //     cast: ['Christian Bale', 'Heath Ledger', 'Aaron Eckhart', 'Maggie Gyllenhaal'],
  //     duration: 152,
  //     genre: ['Action', 'Crime', 'Drama'],
  //     image: 'https://images.tntdrama.com/tnt/$dyna_params/https%3A%2F%2Fi.cdn.tntdrama.com%2Fassets%2Fimages%2F2018%2F03%2FDarkKnightRises-1600x900.jpg'
  //   }
  // });    

  // const hall1 = await prisma.cinemaHall.create({
  //   data: {
  //     name: 'Hall 1'
  //   }
  // })

  // const hall2 = await prisma.cinemaHall.create({
  //   data: {
  //     name: 'Hall 2'
  //   }
  // })

  // const hall3 = await prisma.cinemaHall.create({
  //   data: {
  //     name: 'Hall 3'
  //   }
  // })

  const movieScreening1 = await prisma.movieScreening.create({
    data: {
      movieId: 20,
      cinemaHallId: 1,
      price: 20.5,
      dateAndTimeOfScreening: '2024-01-15T12:00:00Z',
    }
  })

  const movieScreening2 = await prisma.movieScreening.create({
    data: {
      movieId: 20,
      cinemaHallId: 3,
      price: 20.5,
      dateAndTimeOfScreening: '2024-01-16T12:00:00Z'
    }
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    await prisma.$disconnect()
    process.exit(1)
  })