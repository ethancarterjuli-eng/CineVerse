export interface UpcomingMovie {
  id: string;
  title: string;
  releaseDate: string;
  genre: string;
  director: string;
  cast: string[];
  synopsis: string;
  poster: string;
  trailerUrl: string;
  hype: number; // 1-10 excitement level
}

export const upcomingMovies: UpcomingMovie[] = [
  {
    id: "avengers-doomsday",
    title: "Avengers: Doomsday",
    releaseDate: "May 1, 2026",
    genre: "Action",
    director: "Anthony & Joe Russo",
    cast: ["Robert Downey Jr.", "Chris Evans", "Tom Holland", "Florence Pugh"],
    synopsis: "The Avengers face their greatest threat yet as Doctor Doom emerges with a plan that could destroy the entire multiverse. The Russo Brothers return to direct this epic conclusion to the Multiverse Saga.",
    poster: "/images/news-avengers.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=example",
    hype: 10
  },
  {
    id: "superman-legacy",
    title: "Superman: Legacy",
    releaseDate: "July 11, 2025",
    genre: "Action",
    director: "James Gunn",
    cast: ["David Corenswet", "Rachel Brosnahan", "Nicholas Hoult"],
    synopsis: "James Gunn's vision of the Man of Steel begins a new era for the DC Universe. Follow the early days of Clark Kent as he balances his Kryptonian heritage with his human upbringing.",
    poster: "/images/review-spiderman.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=example",
    hype: 9
  },
  {
    id: "mission-impossible-8",
    title: "Mission: Impossible - The Final Reckoning",
    releaseDate: "May 23, 2025",
    genre: "Action",
    director: "Christopher McQuarrie",
    cast: ["Tom Cruise", "Hayley Atwell", "Ving Rhames", "Simon Pegg"],
    synopsis: "Ethan Hunt faces his most dangerous mission yet as he confronts the mysterious Entity. Tom Cruise performs his most daring stunts in what may be his final outing as the legendary spy.",
    poster: "/images/review-batman.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=example",
    hype: 9
  },
  {
    id: "jurassic-world-rebirth",
    title: "Jurassic World Rebirth",
    releaseDate: "July 2, 2025",
    genre: "Sci-Fi",
    director: "Gareth Edwards",
    cast: ["Scarlett Johansson", "Mahershala Ali", "Jonathan Bailey"],
    synopsis: "A new chapter in the Jurassic saga takes place five years after Dominion. A team ventures into dinosaur territory to retrieve DNA that could change medicine forever.",
    poster: "/images/featured-dune.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=example",
    hype: 7
  },
  {
    id: "the-bride",
    title: "The Bride!",
    releaseDate: "March 6, 2026",
    genre: "Horror",
    director: "Maggie Gyllenhaal",
    cast: ["Christian Bale", "Jessie Buckley", "Penelope Cruz"],
    synopsis: "A lonely Frankenstein travels to 1930s Chicago to seek the help of a mad scientist in creating a companion. Maggie Gyllenhaal's ambitious reimagining of the classic tale.",
    poster: "/images/review-poorthings.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=example",
    hype: 8
  },
  {
    id: "avatar-fire-and-ash",
    title: "Avatar: Fire and Ash",
    releaseDate: "December 19, 2025",
    genre: "Sci-Fi",
    director: "James Cameron",
    cast: ["Sam Worthington", "Zoe Saldana", "Sigourney Weaver"],
    synopsis: "The third chapter in James Cameron's epic saga explores new regions of Pandora and introduces the Ash People, a fire-dwelling Na'vi clan with a darker nature.",
    poster: "/images/featured-dune.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=example",
    hype: 9
  },
  {
    id: "mortal-kombat-2",
    title: "Mortal Kombat 2",
    releaseDate: "October 24, 2025",
    genre: "Action",
    director: "Simon McQuoid",
    cast: ["Karl Urban", "Jessica McNamee", "Josh Lawson"],
    synopsis: "The tournament begins as Earthrealm's champions face off against Outworld's deadliest warriors. Johnny Cage joins the fight in this action-packed sequel.",
    poster: "/images/review-batman.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=example",
    hype: 7
  },
  {
    id: "wicked-part-two",
    title: "Wicked: Part Two",
    releaseDate: "November 21, 2025",
    genre: "Musical",
    director: "Jon M. Chu",
    cast: ["Cynthia Erivo", "Ariana Grande", "Jonathan Bailey"],
    synopsis: "The conclusion of the beloved musical follows Elphaba's transformation into the Wicked Witch of the West and her fateful encounter with Dorothy.",
    poster: "/images/review-poorthings.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=example",
    hype: 8
  }
];

export const getUpcomingById = (id: string): UpcomingMovie | undefined => {
  return upcomingMovies.find(movie => movie.id === id);
};
