export interface TopList {
  id: string;
  title: string;
  description: string;
  image: string;
  movies: {
    rank: number;
    title: string;
    year: number;
    rating: number;
    reason: string;
  }[];
}

export const topLists: TopList[] = [
  {
    id: "best-movies-2025",
    title: "Top 10 Movies of 2025",
    description: "The best films that defined cinema in 2025, from blockbusters to indie gems.",
    image: "/images/news-oscars.jpg",
    movies: [
      { rank: 1, title: "Dune: Part Two", year: 2024, rating: 5, reason: "A masterpiece of science fiction cinema" },
      { rank: 2, title: "Oppenheimer", year: 2023, rating: 4.5, reason: "Nolan's magnum opus" },
      { rank: 3, title: "Killers of the Flower Moon", year: 2023, rating: 4.5, reason: "Scorsese's devastating epic" },
      { rank: 4, title: "Poor Things", year: 2023, rating: 4, reason: "A whimsical masterpiece" },
      { rank: 5, title: "The Batman: Dark Knight Returns", year: 2025, rating: 5, reason: "Noir perfection" },
      { rank: 6, title: "Spider-Man: Beyond", year: 2025, rating: 4, reason: "Most ambitious Spidey adventure" },
      { rank: 7, title: "Past Lives", year: 2023, rating: 4.5, reason: "A beautiful meditation on love" },
      { rank: 8, title: "The Holdovers", year: 2023, rating: 4, reason: "Heartwarming and hilarious" },
      { rank: 9, title: "Anatomy of a Fall", year: 2023, rating: 4.5, reason: "A gripping courtroom drama" },
      { rank: 10, title: "American Fiction", year: 2023, rating: 4, reason: "Sharp social satire" },
    ]
  },
  {
    id: "best-action-movies",
    title: "Top 10 Action Movies of All Time",
    description: "The most thrilling, adrenaline-pumping action films ever made.",
    image: "/images/review-batman.jpg",
    movies: [
      { rank: 1, title: "Mad Max: Fury Road", year: 2015, rating: 5, reason: "Pure cinematic adrenaline" },
      { rank: 2, title: "The Dark Knight", year: 2008, rating: 5, reason: "The perfect superhero film" },
      { rank: 3, title: "Die Hard", year: 1988, rating: 5, reason: "The definitive action movie" },
      { rank: 4, title: "Terminator 2: Judgment Day", year: 1991, rating: 5, reason: "Revolutionary effects" },
      { rank: 5, title: "John Wick", year: 2014, rating: 4.5, reason: "Gun-fu perfection" },
      { rank: 6, title: "The Matrix", year: 1999, rating: 5, reason: "Changed action cinema forever" },
      { rank: 7, title: "Raiders of the Lost Ark", year: 1981, rating: 5, reason: "Adventure perfected" },
      { rank: 8, title: "Mission: Impossible - Fallout", year: 2018, rating: 4.5, reason: "Stunt work masterpiece" },
      { rank: 9, title: "Aliens", year: 1986, rating: 5, reason: "Action-horror excellence" },
      { rank: 10, title: "Kill Bill: Vol. 1", year: 2003, rating: 4.5, reason: "Stylish violence" },
    ]
  },
  {
    id: "best-sci-fi-movies",
    title: "Top 10 Sci-Fi Movies Ever Made",
    description: "Mind-bending journeys through space, time, and imagination.",
    image: "/images/featured-dune.jpg",
    movies: [
      { rank: 1, title: "2001: A Space Odyssey", year: 1968, rating: 5, reason: "The ultimate sci-fi film" },
      { rank: 2, title: "Blade Runner", year: 1982, rating: 5, reason: "Atmospheric masterpiece" },
      { rank: 3, title: "The Matrix", year: 1999, rating: 5, reason: "Philosophy meets action" },
      { rank: 4, title: "Interstellar", year: 2014, rating: 5, reason: "Emotional space epic" },
      { rank: 5, title: "Dune: Part Two", year: 2024, rating: 5, reason: "Modern sci-fi perfection" },
      { rank: 6, title: "Star Wars: A New Hope", year: 1977, rating: 5, reason: "Changed cinema forever" },
      { rank: 7, title: "Inception", year: 2010, rating: 4.5, reason: "Mind-bending brilliance" },
      { rank: 8, title: "Arrival", year: 2016, rating: 4.5, reason: "Intelligent alien contact" },
      { rank: 9, title: "Ex Machina", year: 2014, rating: 4.5, reason: "AI thriller perfection" },
      { rank: 10, title: "The Terminator", year: 1984, rating: 4.5, reason: "Time travel classic" },
    ]
  },
  {
    id: "best-horror-movies",
    title: "Top 10 Horror Movies to Watch",
    description: "The scariest, most terrifying films that will keep you up at night.",
    image: "/images/review-oppenheimer.jpg",
    movies: [
      { rank: 1, title: "The Exorcist", year: 1973, rating: 5, reason: "The scariest movie ever" },
      { rank: 2, title: "The Shining", year: 1980, rating: 5, reason: "Atmospheric terror" },
      { rank: 3, title: "Hereditary", year: 2018, rating: 4.5, reason: "Family trauma horror" },
      { rank: 4, title: "Get Out", year: 2017, rating: 5, reason: "Social horror masterpiece" },
      { rank: 5, title: "The Silence of the Lambs", year: 1991, rating: 5, reason: "Psychological horror" },
      { rank: 6, title: "A Nightmare on Elm Street", year: 1984, rating: 4.5, reason: "Iconic villain" },
      { rank: 7, title: "The Conjuring", year: 2013, rating: 4, reason: "Modern haunted house" },
      { rank: 8, title: "Halloween", year: 1978, rating: 4.5, reason: "Slasher origin" },
      { rank: 9, title: "It Follows", year: 2014, rating: 4, reason: "Unique concept" },
      { rank: 10, title: "The Witch", year: 2015, rating: 4, reason: "Folk horror gem" },
    ]
  },
  {
    id: "best-romance-movies",
    title: "Top 10 Romance Movies for Date Night",
    description: "Heartwarming love stories perfect for a romantic evening.",
    image: "/images/review-poorthings.jpg",
    movies: [
      { rank: 1, title: "The Notebook", year: 2004, rating: 4, reason: "Modern romance classic" },
      { rank: 2, title: "Titanic", year: 1997, rating: 4, reason: "Epic love story" },
      { rank: 3, title: "La La Land", year: 2016, rating: 4.5, reason: "Musical romance" },
      { rank: 4, title: "Before Sunrise", year: 1995, rating: 4.5, reason: "Conversational romance" },
      { rank: 5, title: "Eternal Sunshine", year: 2004, rating: 5, reason: "Unique love story" },
      { rank: 6, title: "Pride & Prejudice", year: 2005, rating: 4, reason: "Period romance" },
      { rank: 7, title: "Crazy Rich Asians", year: 2018, rating: 4, reason: "Modern fairy tale" },
      { rank: 8, title: "About Time", year: 2013, rating: 4, reason: "Time travel romance" },
      { rank: 9, title: "The Princess Bride", year: 1987, rating: 5, reason: "Adventure romance" },
      { rank: 10, title: "Past Lives", year: 2023, rating: 4.5, reason: "Bittersweet love" },
    ]
  }
];

export const getTopListById = (id: string): TopList | undefined => {
  return topLists.find(list => list.id === id);
};
