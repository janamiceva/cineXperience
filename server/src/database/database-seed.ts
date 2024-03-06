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
  //    videoId: 'I7c1etV7D7g',
  //    genre: ['Romance', 'Drama', 'Historical', 'Disaster'],
  //    image: 'https://media.npr.org/assets/img/2012/03/29/titanic_custom-fc6a03aedd8e562d780ecf9b9a8a947d4dcbf163-s1100-c50.jpg'
  //   }
  // })

  // await prisma.movie.update({
  //   where: {
  //     id: 3
  //   },
  //   data: {
  //     videoId: 'I7c1etV7D7g'
  //   }
  // })
  // await prisma.movie.update({
  //   where: {
  //     id: 2
  //   },
  //   data: {
  //     videoId: 'PLl99DlL6b4'
  //   }
  // })
  // await prisma.movie.update({
  //   where: {
  //     id: 3
  //   },
  //   data: {
  //     videoId: 'YoHD9XEInc0'
  //   }
  // })
  // await prisma.movie.update({
  //   where: {
  //     id: 4
  //   },
  //   data: {
  //     videoId: 'd9MyW72ELq0'
  //   }
  // })
  // await prisma.movie.update({
  //   where: {
  //     id: 5
  //   },
  //   data: {
  //     videoId: 'UaVTIH8mujA'
  //   }
  // })
  // await prisma.movie.update({
  //   where: {
  //     id: 6
  //   },
  //   data: {
  //     videoId: 'XHhAG-YLdk8'
  //   }
  // })
  // await prisma.movie.update({
  //   where: {
  //     id: 7
  //   },
  //   data: {
  //     videoId: 'tGpTpVyI_OQ'
  //   }
  // })
  // await prisma.movie.update({
  //   where: {
  //     id: 8
  //   },
  //   data: {
  //     videoId: 'EXeTwQWrcwY'
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
  //     image: 'https://media.vanityfair.com/photos/5d8535de6879fa00082e6ed9/16:9/w_2000,h_1124,c_limit/the-Shawshank-Redemption-movie-lede.png/width=1200&height=630'
  //   }
  // });

  // const movie3 = await prisma.movie.create({
  //   data: {
  //     name: 'Inception',
  //     description: 'A thief who enters the dreams of others to steal their secrets embarks on a mind-bending journey.',
  //     rating: 8.8,
  //     videoId: 'YoHD9XEInc0',
  //     director: 'Christopher Nolan',
  //     cast: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt', 'Ellen Page', 'Tom Hardy'],
  //     duration: 148,
  //     genre: ['Science Fiction', 'Action', 'Thriller'],
  //     image: 'https://miro.medium.com/v2/resize:fit:1400/1*8Zbd3iNhIquius0T80ympw.jpeg'
  //   }
  // });

  // const movie4 = await prisma.movie.create({
  //   data: {
  //     name: 'Avatar',
  //     description: 'A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following orders and protecting an alien civilization.',
  //     rating: 7.8,
  //     videoId: 'd9MyW72ELq0',
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
  //     videoId: 'UaVTIH8mujA',
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
  //     videoId: 'XHhAG-YLdk8',
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
  //     videoId: 'tGpTpVyI_OQ',
  //     genre: ['Crime', 'Drama', 'Thriller'],
  //     image: 'https://ychef.files.bbci.co.uk/1280x720/p01z199k.jpg'
  //   }
  // });

  // const movie8 = await prisma.movie.create({
  //   data: {
  //     name: 'The Dark Knight',
  //     description: 'When the menace known as The Joker emerges, Batman must confront one of the greatest psychological and physical tests of his ability to fight injustice.',
  //     rating: 9.0,
  //     videoId: 'EXeTwQWrcwY',
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

  // const movieScreening2 = await prisma.movieScreening.create({
  //   data: {
  //     movieId: 4,
  //     cinemaHallId: 3,
  //     price: 20.5,
  //     dateAndTimeOfScreening: '2024-03-15T13:00:00Z'

  //   }
  // })


  // await prisma.movieScreening.create({
  //   data: {
  //     movieId: 139,
  //     cinemaHallId: 2,
  //     price: 17.5,
  //     dateAndTimeOfScreening: '2024-04-10T19:00:00Z'
  //   }
  // })

    for(let i=1; i <=40; i++){
      await prisma.seatInMovieScreening.create({
        data: {
          seatId: i,
          movieScreeningId: 32,
        }
      })
  }


  //  await prisma.movieScreening.update({
  //   where: {
  //     id: 6
  //   },
  //   data: {
  //     movieId: 1,
  //     cinemaHallId: 2,
  //     price: 20.5,
  //     dateAndTimeOfScreening: '2024-02-12T20:00:00Z'
  //   }
  // })

  //  await prisma.movieScreening.create({
  //   data: {
  //     movieId: 8,
  //     cinemaHallId: 1,
  //     price: 20.5,
  //     dateAndTimeOfScreening: '2024-02-01T19:00:00Z'
  //   }
  // })

  // const movieScreening1 = await prisma.movieScreening.create({
  //   data: {
  //     movieId: 111,
  //     cinemaHallId: 3,
  //     price: 18,
  //     dateAndTimeOfScreening: '2024-03-18T15:00:00Z',
  //   }
  // })

  // for(let i=1; i <=40; i++){
  //     await prisma.seatInMovieScreening.create({
  //       data: {
  //         seatId: i,
  //         movieScreeningId: 12,
  //       }
  //     })
  // }

  // for (let i = 1; i <= 40; i++) {
  //   await prisma.seatInMovieScreening.create({
  //     data: {
  //       seatId: i,
  //       movieScreeningId: 6,
  //     }
  //   })
  // }

  // await prisma.seatInMovieScreening.delete({
  //   where: {
  //     id: 1
  //   },
  // })
  // await prisma.user.update({
  //   where: {
  //     id: 'VqDZMfnu35NoaAq93xotJDmR6qs1'
  //   }, 
  //   data: {
  //     role: 'ADMIN'
  //   }
  // })

  // await prisma.commingSoonMovies.create({
  //   data: {
  //     "name": "Inglourious Basterds",
  //     "description": "In Nazi-occupied France during World War II, a plan to assassinate Nazi leaders by a group of Jewish U.S. soldiers coincides with a theatre owner's vengeful plans for the same.",
  //     "rating": 8.3,
  //     "director": "Quentin Tarantino",
  //     "cast": ["Brad Pitt", "Diane Kruger", "Christoph Waltz"],
  //     "duration": 153.0,
  //     "genre": ["Adventure", "Drama", "War"],
  //     "image": "https://m.media-amazon.com/images/M/MV5BMjIxNTE5MjEzM15BMl5BanBnXkFtZTgwMDgyNzk3MTI@._V1_.jpg",
  //     "videoId": "KnrRy6kSFF0"
  //   }
  // })


  // await prisma.commingSoonMovies.create({
  //   data: {
  //     "name": "Schindler's List",
  //     "description": "In German-occupied Poland during World War II, Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
  //     "rating": 8.9,
  //     "director": "Steven Spielberg",
  //     "cast": ["Liam Neeson", "Ben Kingsley", "Ralph Fiennes"],
  //     "duration": 195.0,
  //     "genre": ["Biography", "Drama", "History"],
  //     "image": "https://i.guim.co.uk/img/media/c9724099ae63347116a702312830beaca12b277d/0_30_3504_2104/500.jpg?quality=85&auto=format&fit=max&s=f58eb506b385abffd07b8b731005f956",
  //     "videoId": "gG22XNhtnoY"
  //   }
  // })

  // await prisma.commingSoonMovies.create({
  //   data: {
  //     "name": "The Matrix",
  //     "description": "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
  //     "rating": 8.7,
  //     "director": "Lana Wachowski, Lilly Wachowski",
  //     "cast": ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
  //     "duration": 136.0,
  //     "genre": ["Action", "Sci-Fi"],
  //     "image": "https://images.bauerhosting.com/legacy/empire-tmdb/films/603/images/7u3pxc0K1wx32IleAkLv78MKgrw.jpg?ar=16%3A9&fit=crop&crop=top&auto=format&w=1440&q=80",
  //     "videoId": "vKQi3bBA1y8"
  //   }
  // })

  // await prisma.commingSoonMovies.create({
  //   data: {
  //     "name": "The Silence of the Lambs",
  //     "description": "A young FBI cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.",
  //     "rating": 8.6,
  //     "director": "Jonathan Demme",
  //     "cast": ["Jodie Foster", "Anthony Hopkins", "Lawrence A. Bonney"],
  //     "duration": 118.0,
  //     "genre": ["Crime", "Drama", "Thriller"],
  //     "image": "https://savethecat.com/wp-content/uploads/2017/05/silence-of-the-lambs-logo.jpg",
  //     "videoId": "W6Mm8Sbe__o"
  //   }
  // })
  // await prisma.commingSoonMovies.create({
  //   data: {
  //     "name": "Fight Club",
  //     "description": "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.",
  //     "rating": 8.8,
  //     "director": "David Fincher",
  //     "cast": ["Brad Pitt", "Edward Norton", "Helena Bonham Carter"],
  //     "duration": 139.0,
  //     "genre": ["Drama"],
  //     "image": "https://media.newyorker.com/photos/5dbafcc91b4a6700085a7a9b/master/pass/Baker-FightClub.jpg",
  //     "videoId": "BdJKm16Co6M"
  //   }
  // })

}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    await prisma.$disconnect()
    process.exit(1)
  })