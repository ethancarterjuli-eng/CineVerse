export interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  image: string;
  author: string;
  readTime: string;
}

export const newsArticles: NewsArticle[] = [
  {
    id: "avengers-doomsday-first-look",
    title: "Avengers: Doomsday - First Look Reveals Epic Return",
    excerpt: "Marvel Studios drops explosive first trailer showing Robert Downey Jr. as Doctor Doom. The Russo Brothers return to direct what promises to be the biggest MCU event yet.",
    content: `Marvel Studios has officially unveiled the first trailer for Avengers: Doomsday, and it's already breaking the internet. The footage reveals Robert Downey Jr.'s shocking return to the MCU – not as Iron Man, but as the villainous Doctor Doom.

The trailer opens with a devastated New York City, buildings crumbling as a mysterious figure in green armor descends from the sky. When the helmet comes off, revealing Downey Jr.'s face, fans worldwide gasped in unison.

"This is the endgame," Doom declares, his voice carrying the weight of infinite worlds. "And I am the only one who can save us all."

The Russo Brothers, who directed Avengers: Infinity War and Endgame, return to helm this ambitious project. In a statement, Joe Russo said: "This is the story we've been building toward for years. The stakes have never been higher."

The trailer also teases the return of familiar faces – Chris Evans' Captain America, Scarlett Johansson's Black Widow (in flashback form), and Tom Holland's Spider-Man all make brief appearances. But it's the new characters who steal the show, including Florence Pugh's Yelena Belova taking center stage as the new Black Widow.

The action sequences are breathtaking, with Doom's mastery of magic and technology on full display. One scene shows him single-handedly taking on the entire Avengers roster, his power seemingly limitless.

Fan theories are already running wild. Is this the same Tony Stark from another universe? A clone? Or something else entirely? Marvel is keeping tight-lipped, promising answers when the film hits theaters.

Avengers: Doomsday arrives in theaters May 1, 2026.`,
    date: "February 2, 2026",
    category: "Breaking News",
    image: "/images/news-avengers.jpg",
    author: "Sarah Mitchell",
    readTime: "5 min read"
  },
  {
    id: "nolan-odyssey-cast-announced",
    title: "Christopher Nolan's The Odyssey: Cast Announced",
    excerpt: "The star-studded ensemble includes Matt Damon, Tom Holland, Anne Hathaway, and Zendaya in Nolan's adaptation of Homer's epic.",
    content: `Christopher Nolan has assembled an all-star cast for his next epic, The Odyssey, based on Homer's ancient Greek poem. The announcement sent shockwaves through Hollywood as one A-list name after another was revealed.

Matt Damon will star as Odysseus, the legendary Greek hero whose journey home from the Trojan War forms the basis of the epic. Damon previously worked with Nolan on Interstellar, and their reunion promises another memorable collaboration.

Tom Holland joins the cast as Telemachus, Odysseus' son who searches for his father while fending off suitors vying for his mother's hand. Holland expressed his excitement on social media: "Dream come true. Thank you, Chris!"

Anne Hathaway, another Nolan veteran from The Dark Knight Rises and Interstellar, will play Penelope, Odysseus' faithful wife who waits twenty years for his return. Her casting brings emotional depth to the role.

Zendaya rounds out the principal cast as Athena, the goddess who aids Odysseus throughout his journey. Her ethereal presence is perfect for the divine character.

Nolan is writing and directing, with filming set to begin in Greece this summer. The production will utilize IMAX cameras to capture the epic scale of the ancient world.

"The Odyssey is the original adventure story," Nolan said in a statement. "Its themes of home, loyalty, and perseverance are as relevant today as they were three thousand years ago."

The film is scheduled for release on July 17, 2026.`,
    date: "February 1, 2026",
    category: "Production",
    image: "/images/news-odyssey.jpg",
    author: "James Chen",
    readTime: "4 min read"
  },
  {
    id: "dune-messiah-wraps-production",
    title: "Dune: Messiah Wraps Production",
    excerpt: "Denis Villeneuve completes filming on the third installment of his Dune saga, with Timothée Chalamet and Zendaya returning.",
    content: `Denis Villeneuve has officially wrapped production on Dune: Messiah, the third film in his epic adaptation of Frank Herbert's science fiction masterpiece. The announcement came via a social media post showing Villeneuve and star Timothée Chalamet on set.

"That's a wrap on Dune: Messiah," Villeneuve wrote. "Thank you to the incredible cast and crew who made this journey possible. Arrakis awaits."

The film continues the story of Paul Atreides, now Emperor of the Known Universe, as he faces the consequences of his actions and the jihad carried out in his name. Based on Herbert's second novel, Messiah is considered by many fans to be the darkest entry in the series.

Timothée Chalamet returns as Paul, with Zendaya's Chani playing an even more central role. Rebecca Ferguson, Josh Brolin, and Stellan Skarsgård also reprise their roles from the previous films.

New cast members include Florence Pugh as Princess Irulan, Paul's wife in name only, and Austin Butler returning as Feyd-Rautha in flashback sequences.

The production spent six months filming in Jordan, Abu Dhabi, and Hungary, utilizing the same stunning locations that made Dune: Part Two visually spectacular.

"This is the conclusion of Paul's story," Villeneuve revealed in a recent interview. "It's darker, more intimate, and ultimately more tragic than what came before."

Hans Zimmer is once again composing the score, promising to expand on the sonic landscapes he created for the previous films.

Dune: Messiah is scheduled for release on December 18, 2026.`,
    date: "January 30, 2026",
    category: "Production",
    image: "/images/featured-dune.jpg",
    author: "Maria Rodriguez",
    readTime: "3 min read"
  },
  {
    id: "spiderman-4-holland-returns",
    title: "Spider-Man 4: Tom Holland Returns",
    excerpt: "Marvel and Sony confirm Tom Holland will don the suit once more in the next Spider-Man adventure, set to begin filming this year.",
    content: `Tom Holland is officially returning as Spider-Man in the fourth installment of the beloved franchise. Marvel Studios and Sony Pictures made the joint announcement, ending months of speculation about the future of the web-slinger.

"I'm so grateful to continue playing this character," Holland said in a statement. "Spider-Man means everything to me, and I can't wait to show fans what's next for Peter."

Jon Watts, who directed the previous three Holland Spider-Man films, is in talks to return, though no deal has been finalized. The script is being written by Chris McKenna and Erik Sommers, who penned the previous entries.

Plot details are being kept under wraps, but sources suggest the film will pick up after the events of Spider-Man: No Way Home, with Peter Parker navigating a world where no one remembers his identity.

Zendaya is expected to return as MJ, though her character's memory of Peter was erased in the previous film. The story will reportedly explore their relationship from a fresh perspective.

"We're taking Peter in a new direction," Marvel President Kevin Feige teased. "The multiverse opened up possibilities, but this story is grounded in Peter's world and his challenges."

The film is expected to begin production in late summer, with a target release date of July 2027.

Rumors suggest a new villain will be introduced, with names like Scorpion, Kingpin, and even a new Green Goblin being floated by industry insiders.

One thing is certain: Spider-Man's future in the MCU is brighter than ever.`,
    date: "January 28, 2026",
    category: "Casting",
    image: "/images/review-spiderman.jpg",
    author: "David Park",
    readTime: "4 min read"
  },
  {
    id: "oscars-2026-early-predictions",
    title: "Oscars 2026: Early Predictions",
    excerpt: "With the awards season approaching, we break down the frontrunners for Best Picture, Director, and the acting categories.",
    content: `The 98th Academy Awards may be months away, but the race is already taking shape. With major contenders having premiered at fall festivals, we can begin to map out the likely nominees and winners.

**Best Picture**

The frontrunner is undoubtedly Christopher Nolan's Oppenheimer follow-up, The Odyssey. Early buzz suggests it's another technical masterpiece with emotional depth. Close behind is Denis Villeneuve's Dune: Messiah, which could become the first science fiction film to win the top prize.

Don't count out smaller films like Poor Things, which continues to build momentum, or Killers of the Flower Moon, which may benefit from a late-season re-release.

**Best Director**

Christopher Nolan is the man to beat. After finally winning his first Oscar for Oppenheimer, Academy voters may be ready to reward him again. Denis Villeneuve and Martin Scorsese are also strong contenders.

**Best Actor**

Cillian Murphy's transformative performance in Oppenheimer set the bar high, but Matt Damon's Odysseus could challenge him. Leonardo DiCaprio's work in Killers of the Flower Moon shouldn't be underestimated either.

**Best Actress**

This category is wide open. Emma Stone's bold performance in Poor Things has many supporters, but Lily Gladstone's devastating work in Killers of the Flower Moon could make history as the first Native American winner in the category.

**Best Supporting Actor**

Robert Downey Jr.'s villainous turn in Avengers: Doomsday, if it qualifies, could be irresistible to voters. Robert De Niro's chilling performance in Killers of the Flower Moon is also a major contender.

**Best Supporting Actress**

Zendaya's expanded role in Dune: Part Two has generated significant buzz. Emily Blunt's work in Oppenheimer and Florence Pugh's scene-stealing turn in the same film are also in the mix.

The race is far from settled, but one thing is clear: 2025 was an exceptional year for cinema.`,
    date: "January 25, 2026",
    category: "Awards",
    image: "/images/news-oscars.jpg",
    author: "Rachel Kim",
    readTime: "6 min read"
  }
];

export const getNewsById = (id: string): NewsArticle | undefined => {
  return newsArticles.find(article => article.id === id);
};

export const getNewsByCategory = (category: string): NewsArticle[] => {
  return newsArticles.filter(article => article.category === category);
};
