export interface Movie {
  id: string;
  title: string;
  genre: string;
  rating: number;
  year: number;
  duration: string;
  director: string;
  cast: string[];
  image: string;
  trailerUrl: string;
  synopsis: string;
  review: string;
  excerpt: string;
  releaseDate: string;
}

export const movies: Movie[] = [
  {
    id: "batman-dark-knight-returns",
    title: "The Batman: Dark Knight Returns",
    genre: "Action",
    rating: 5,
    year: 2025,
    duration: "2h 56m",
    director: "Matt Reeves",
    cast: ["Robert Pattinson", "Zoe Kravitz", "Jeffrey Wright", "Colin Farrell"],
    image: "/images/review-batman.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=mqqft2x_Aa4",
    synopsis: "In this gritty continuation of The Batman saga, Bruce Wayne faces his most challenging adversary yet as Gotham City descends into chaos. With new threats emerging from the shadows, the Dark Knight must confront his own demons while protecting the city he loves.",
    review: `Matt Reeves delivers a masterpiece that transcends the superhero genre. 'The Batman: Dark Knight Returns' is a noir-inspired epic that redefines what a comic book movie can be.

Robert Pattinson's portrayal of Bruce Wayne continues to evolve, showing a more vulnerable yet determined Batman. The film's cinematography is breathtaking, with every frame feeling like a painted panel from a graphic novel.

The action sequences are brutal and visceral, grounding the superhero in reality while maintaining the comic's essence. The Batmobile chase through Gotham's rain-soaked streets is already being hailed as one of the greatest action sequences in cinema history.

What sets this film apart is its exploration of Batman's psychology. We see a hero who is not just fighting criminals, but fighting the very concept of fear itself. The supporting cast delivers stellar performances, with Zoe Kravitz's Catwoman bringing complexity and moral ambiguity to every scene she graces.

The film's pacing is deliberate, allowing moments of quiet introspection between the explosive set pieces. This is not a film that rushes to the next action beat; it takes its time, letting the tension build naturally.

For fans of the character and newcomers alike, this is essential viewing. It's dark, it's complex, and it's utterly compelling.`,
    excerpt: "A gritty, noir-inspired return to Gotham that redefines the caped crusader.",
    releaseDate: "March 15, 2025"
  },
  {
    id: "dune-part-two",
    title: "Dune: Part Two",
    genre: "Sci-Fi",
    rating: 5,
    year: 2024,
    duration: "2h 46m",
    director: "Denis Villeneuve",
    cast: ["Timothée Chalamet", "Zendaya", "Rebecca Ferguson", "Josh Brolin", "Austin Butler"],
    image: "/images/featured-dune.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=Way9Dexny3w",
    synopsis: "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the known universe, he must prevent a terrible future only he can foresee.",
    review: `Denis Villeneuve's monumental conclusion to the Dune saga delivers breathtaking visuals, stellar performances, and a deeply satisfying narrative that redefines science fiction cinema.

From the opening frames, it's clear that this is a labor of love. The desert landscapes of Arrakis have never looked more stunning, with cinematographer Greig Fraser capturing the golden dunes in ways that make them feel both alien and achingly beautiful.

Timothée Chalamet delivers a career-defining performance as Paul Atreides. We watch him transform from a reluctant hero to a leader embracing his destiny, and Chalamet makes every step of that journey feel earned and authentic.

Zendaya's expanded role as Chani brings heart and humanity to the epic scope. Their chemistry is palpable, making the central romance feel genuine rather than obligatory.

The action sequences are spectacular without being overwhelming. The sandworm riding scene alone is worth the price of admission – a moment of pure cinematic magic that will be remembered for decades.

Hans Zimmer's score is another character in the film, weaving Middle Eastern influences with his signature sonic landscapes to create something truly otherworldly.

This is not just a great sequel; it's a masterpiece that stands on its own. Villeneuve has crafted the definitive adaptation of Herbert's novel, one that honors the source material while making it accessible to modern audiences.`,
    excerpt: "An epic conclusion that surpasses all expectations with stunning visuals.",
    releaseDate: "March 1, 2024"
  },
  {
    id: "oppenheimer",
    title: "Oppenheimer",
    genre: "Drama",
    rating: 4.5,
    year: 2023,
    duration: "3h",
    director: "Christopher Nolan",
    cast: ["Cillian Murphy", "Emily Blunt", "Matt Damon", "Robert Downey Jr."],
    image: "/images/review-oppenheimer.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=bK6ldnjE3Y0",
    synopsis: "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb. A gripping exploration of genius, conscience, and the weight of creation.",
    review: `Christopher Nolan's Oppenheimer is a towering achievement – a biographical epic that manages to be both intellectually stimulating and emotionally devastating.

Cillian Murphy's performance as J. Robert Oppenheimer is nothing short of extraordinary. He captures the physicist's brilliance, his arrogance, his vulnerability, and ultimately his guilt with a nuance that few actors could achieve.

Nolan's decision to tell this story through multiple timelines and perspectives pays off brilliantly. We're not just watching history unfold; we're experiencing the fragmented nature of memory and consequence.

The Trinity test sequence is cinema at its most powerful. Without showing the explosion in traditional terms, Nolan creates an atmosphere of dread and awe that lingers long after the scene ends.

The supporting cast is uniformly excellent. Robert Downey Jr. delivers one of his finest performances as Lewis Strauss, while Emily Blunt brings depth and dignity to Kitty Oppenheimer.

This is a film about the burden of genius, the cost of progress, and the moral weight of creation. It's heavy subject matter, handled with the gravity it deserves.

Oppenheimer is not an easy watch, but it's an essential one. It's a film that demands discussion and reflection, proving that cinema can still tackle the biggest questions while entertaining millions.`,
    excerpt: "Nolan's masterpiece explores the weight of genius and consequence.",
    releaseDate: "July 21, 2023"
  },
  {
    id: "poor-things",
    title: "Poor Things",
    genre: "Comedy-Drama",
    rating: 4,
    year: 2023,
    duration: "2h 21m",
    director: "Yorgos Lanthimos",
    cast: ["Emma Stone", "Willem Dafoe", "Mark Ruffalo", "Ramy Youssef"],
    image: "/images/review-poorthings.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=ZFu7ZH4y8Yw",
    synopsis: "The incredible tale and fantastical evolution of Bella Baxter, a young woman brought back to life by the brilliant and unorthodox scientist Dr. Godwin Baxter.",
    review: `Yorgos Lanthimos delivers his most accessible and emotionally resonant film yet with Poor Things, a whimsical journey of self-discovery that defies easy categorization.

Emma Stone gives the performance of a lifetime as Bella Baxter, a woman with the brain of an infant in an adult body. Her physical comedy is matched by genuine emotional depth as Bella discovers the world and her place in it.

The film's visual style is extraordinary – a steampunk fever dream that feels both Victorian and futuristic. The production design creates a world that is simultaneously familiar and utterly strange.

Willem Dafoe brings surprising warmth to the role of Dr. Godwin Baxter, Bella's creator and father figure. His performance grounds the film's more outlandish elements in genuine emotion.

Mark Ruffalo is hilarious as Duncan Wedderburn, the lawyer who becomes Bella's lover and unwitting traveling companion. His comic timing is impeccable, providing many of the film's biggest laughs.

At its heart, Poor Things is a feminist fable about a woman discovering her own agency in a world that wants to control her. It's provocative, funny, and ultimately deeply moving.

This is cinema as pure imagination – a reminder that film can still surprise and delight in ways we never expected.`,
    excerpt: "A whimsical journey of self-discovery with stunning performances.",
    releaseDate: "December 8, 2023"
  },
  {
    id: "killers-flower-moon",
    title: "Killers of the Flower Moon",
    genre: "Crime",
    rating: 4.5,
    year: 2023,
    duration: "3h 26m",
    director: "Martin Scorsese",
    cast: ["Leonardo DiCaprio", "Robert De Niro", "Lily Gladstone", "Jesse Plemons"],
    image: "/images/review-killers.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=EP34YoxW3cc",
    synopsis: "Real-life murders of Osage Native Americans in 1920s Oklahoma that occurred after oil was discovered on their land, and the FBI's investigation into the crimes.",
    review: `Martin Scorsese delivers a haunting masterpiece with Killers of the Flower Moon, a film that confronts America's original sins with unflinching honesty and devastating emotional power.

Leonardo DiCaprio gives one of his most complex performances as Ernest Burkhart, a man torn between love and greed, loyalty and complicity. It's a portrait of moral weakness that is both repulsive and tragically human.

But the film belongs to Lily Gladstone as Mollie Burkhart. Her performance is quiet, dignified, and absolutely devastating. She conveys worlds of pain with a single look, making Mollie's suffering feel both personal and representative of her people's tragedy.

Robert De Niro is chilling as William Hale, the mastermind behind the murders. He plays evil not as monstrous but as banal – a man who sees murder as just another business transaction.

Scorsese's direction is masterful, using the epic runtime to immerse us in this world rather than simply tell a story. The Oklahoma landscapes are both beautiful and oppressive, a reminder of the wealth that fueled such evil.

This is not an easy film to watch, nor should it be. It's a necessary confrontation with history that America has too long ignored. Scorsese has made a film that will be studied and discussed for generations.

Killers of the Flower Moon is essential cinema – a reminder of the power of film to illuminate the darkest corners of our history.`,
    excerpt: "Scorsese delivers a haunting tale of greed and injustice.",
    releaseDate: "October 20, 2023"
  },
  {
    id: "spiderman-beyond",
    title: "Spider-Man: Beyond",
    genre: "Action",
    rating: 4,
    year: 2025,
    duration: "2h 28m",
    director: "Jon Watts",
    cast: ["Tom Holland", "Zendaya", "Jacob Batalon", "Marisa Tomei"],
    image: "/images/review-spiderman.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=JfVOs4VSpmA",
    synopsis: "Peter Parker faces his greatest challenge yet as new threats emerge in New York City. With his identity now public, Spider-Man must navigate a world that knows his secret while protecting those he loves.",
    review: `Spider-Man: Beyond represents a bold new direction for the web-slinger, taking risks that pay off in unexpected ways while delivering the action and heart fans have come to expect.

Tom Holland continues to grow into the role, showing a more mature Peter Parker who has learned from his mistakes but still struggles with the weight of responsibility. His chemistry with Zendaya remains one of the franchise's greatest strengths.

The action sequences are spectacular, with the opening bridge rescue already ranking among the best Spider-Man set pieces. The web-swinging through New York has never felt more visceral and thrilling.

What sets this film apart is its willingness to embrace consequences. Peter's public identity creates genuine problems that can't be solved with a quip or a web-shooter. The film takes its premise seriously and explores it with surprising depth.

The villain is a revelation – complex, sympathetic, and genuinely threatening in ways that transcend the typical superhero antagonist. Their motivations make sense, making the conflict feel personal rather than obligatory.

Jon Watts proves once again that he understands what makes Spider-Man special. This isn't just about powers and costumes; it's about a kid from Queens trying to do the right thing in an impossible situation.

Spider-Man: Beyond sets up exciting possibilities for the future while delivering a satisfying standalone story. It's everything you want from a Spider-Man movie and more.`,
    excerpt: "The web-slinger returns in his most ambitious adventure yet.",
    releaseDate: "July 11, 2025"
  }
];

export const getMovieById = (id: string): Movie | undefined => {
  return movies.find(movie => movie.id === id);
};

export const getMoviesByGenre = (genre: string): Movie[] => {
  return movies.filter(movie => movie.genre.toLowerCase() === genre.toLowerCase());
};
