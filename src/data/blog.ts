export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  image: string;
  author: string;
  readTime: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "top-10-movies-2025",
    title: "Top 10 Movies of 2025: A Year in Review",
    excerpt: "From epic sci-fi to intimate dramas, we count down the best films that defined cinema in 2025.",
    content: `2025 was a remarkable year for cinema. As theaters returned to full capacity and audiences embraced the big screen experience once again, filmmakers delivered an extraordinary slate of films across every genre. Here are our top 10 movies of the year.

**10. The Batman: Dark Knight Returns**

Matt Reeves' noir-inspired sequel proved that superhero films can still surprise us. Robert Pattinson's tortured Batman faces his greatest challenge in a Gotham City on the brink of collapse.

**9. Poor Things**

Yorgos Lanthimos delivered his most accessible film yet, with Emma Stone giving the performance of a lifetime as Bella Baxter. Weird, wonderful, and utterly unique.

**8. Killers of the Flower Moon**

Martin Scorsese's epic examination of the Osage murders is a devastating indictment of American history. Lily Gladstone's performance is unforgettable.

**7. Spider-Man: Beyond**

Tom Holland's Spider-Man grew up in this emotionally resonant sequel that wasn't afraid to take risks with its beloved character.

**6. The Odyssey**

Christopher Nolan's adaptation of Homer's epic exceeded all expectations, combining blockbuster spectacle with genuine emotional depth.

**5. Dune: Messiah**

Denis Villeneuve concluded his trilogy with the darkest, most personal entry yet. A masterpiece of science fiction cinema.

**4. Oppenheimer**

Christopher Nolan's biographical epic dominated the cultural conversation and the Oscars. Cillian Murphy's performance is one for the ages.

**3. Dune: Part Two**

The middle chapter of Villeneuve's saga stands as the best blockbuster of the year. Visually stunning and emotionally powerful.

**2. Avengers: Doomsday**

The Russo Brothers returned to the MCU with a film that redefined what's possible in superhero cinema. Robert Downey Jr.'s villainous turn is legendary.

**1. Killers of the Flower Moon (Re-release)**

Scorsese's masterpiece only grew in stature with its extended re-release. The definitive film of 2025.

What were your favorite films of the year? Let us know in the comments!`,
    date: "December 28, 2025",
    category: "Year in Review",
    image: "/images/news-oscars.jpg",
    author: "Alex Thompson",
    readTime: "8 min read",
    tags: ["Best of 2025", "Top 10", "Year in Review"]
  },
  {
    id: "future-of-superhero-movies",
    title: "The Future of Superhero Movies: Where Do We Go From Here?",
    excerpt: "After a decade of dominance, the superhero genre faces new challenges. We explore what's next for capes and cowls on the big screen.",
    content: `The superhero movie has been the dominant force in Hollywood for over a decade. From Iron Man's surprise success in 2008 to the cultural phenomenon of Avengers: Endgame, comic book adaptations have redefined what blockbuster cinema looks like.

But as we move through 2025, questions about the genre's future are more pressing than ever. Box office numbers, while still strong, don't match the heights of the late 2010s. Audiences seem to be experiencing fatigue. And the sheer volume of content – between theaters and streaming – has made it harder for any single film to stand out.

So where does the superhero movie go from here?

**The Quality Over Quantity Approach**

Marvel Studios has already announced they're slowing down production, focusing on fewer projects with higher stakes. This is a smart move. The MCU's best phases were built on anticipation – the wait between films made each release feel like an event.

**Genre Blending**

The most successful recent superhero films have been those that blend the formula with other genres. The Batman was a noir thriller. Logan was a Western. Deadpool was a comedy. The future lies in these hybrid approaches that offer something fresh.

**Diverse Voices**

Audiences are hungry for stories that reflect the full diversity of the human experience. Films like Black Panther and Shang-Chi proved that superhero movies can be culturally specific while remaining universally appealing. We need more voices, more perspectives, more stories that haven't been told.

**Theatrical Experience**

Despite streaming's rise, superhero movies remain one of the genres that demands the big screen. The communal experience of watching Avengers: Doomsday with a packed theater is irreplaceable. Studios should lean into this, making theatrical releases true events.

**New Characters, New Stories**

We've seen Batman's origin story countless times. Spider-Man has been rebooted three times in twenty years. The future belongs to new characters – heroes and villains who haven't had their moment in the spotlight.

The superhero movie isn't dying. It's evolving. And the next phase could be the most exciting yet.`,
    date: "December 15, 2025",
    category: "Industry Analysis",
    image: "/images/news-avengers.jpg",
    author: "Michael Brooks",
    readTime: "6 min read",
    tags: ["Superhero Movies", "MCU", "DC", "Industry Trends"]
  },
  {
    id: "sci-fi-renaissance",
    title: "The Sci-Fi Renaissance: Why Science Fiction is Dominating 2025",
    excerpt: "From Dune to The Odyssey, science fiction has had an incredible year. We explore why audiences can't get enough of the genre.",
    content: `Science fiction is experiencing a golden age. In 2025, the genre has delivered some of the most critically acclaimed and commercially successful films, from Denis Villeneuve's Dune saga to Christopher Nolan's The Odyssey.

But this isn't just about big budgets and special effects. The best science fiction of 2025 has something important to say about our world today.

**Environmental Anxiety**

Dune's desert planet Arrakis, where water is more precious than gold, feels increasingly relevant as climate change accelerates. The film doesn't preach; it shows us a possible future and lets us draw our own conclusions.

**Technological Fear and Wonder**

From AI to space travel, technology is advancing faster than ever. Science fiction helps us process these changes, exploring both the utopian possibilities and the dystopian risks.

**The Search for Meaning**

In an increasingly complex world, science fiction offers stories about humanity's place in the universe. The Odyssey asks what it means to be a hero. Dune questions the nature of prophecy and power.

**Visual Spectacle**

Let's not underestimate the pure cinematic joy of science fiction. The sandworm sequences in Dune, the space battles in The Odyssey – these are moments that remind us why we go to the movies.

**Star Power**

The genre has attracted some of our biggest stars. Timothée Chalamet, Zendaya, Matt Damon, Anne Hathaway – these are actors who could work in any genre, but they've chosen science fiction.

The sci-fi renaissance shows no signs of slowing down. With Avatar sequels still coming and new adaptations of classics like Foundation finding audiences, the future of science fiction cinema looks brighter than ever.

And that's exactly what the genre is about – looking toward the future with hope, fear, and wonder.`,
    date: "November 30, 2025",
    category: "Genre Spotlight",
    image: "/images/featured-dune.jpg",
    author: "Sarah Mitchell",
    readTime: "5 min read",
    tags: ["Science Fiction", "Dune", "The Odyssey", "Genre Analysis"]
  },
  {
    id: "method-acting-extreme",
    title: "Method Acting Gone Extreme: When Preparation Becomes Dangerous",
    excerpt: "From weight loss to isolation, actors are pushing boundaries. But when does dedication become harmful?",
    content: `Christian Bale lost 60 pounds for The Machinist. Leonardo DiCaprio slept in animal carcasses for The Revenant. And now, reports suggest actors are taking preparation to even more extreme lengths.

Method acting – the technique of fully inhabiting a character, even off-camera – has produced some of cinema's most memorable performances. But as the practice becomes more extreme, questions about actor safety and wellbeing are being raised.

**The Physical Toll**

Rapid weight loss and gain can have serious health consequences. Actors who drastically change their bodies for roles often speak of lasting damage to their metabolism and overall health.

**The Mental Cost**

Immersing oneself in a dark character can take a psychological toll. Heath Ledger's tragic death following his portrayal of the Joker sparked conversations about the mental health risks of method acting.

**On-Set Safety**

When actors stay in character between takes, it can create a difficult working environment. Crew members report feeling intimidated or unsafe when working with actors who refuse to break character.

**The Alternative**

Many great actors reject method acting entirely. Anthony Hopkins famously learns his lines and shows up to perform. Meryl Streep transforms without losing herself in the process.

**Finding Balance**

The best actors find a middle ground – doing the research and preparation necessary while maintaining their own identity. Cillian Murphy's approach to Oppenheimer is a perfect example: extensive research, but no loss of self.

As audiences, we should celebrate great performances while being mindful of the cost. The best acting should never come at the expense of an actor's health and wellbeing.

The show must go on – but the actor must survive it.`,
    date: "November 15, 2025",
    category: "Acting",
    image: "/images/review-oppenheimer.jpg",
    author: "Jennifer Walsh",
    readTime: "7 min read",
    tags: ["Method Acting", "Acting Techniques", "Film Production"]
  },
  {
    id: "streaming-vs-theaters",
    title: "Streaming vs Theaters: The Battle for the Future of Cinema",
    excerpt: "With major studios releasing films on streaming platforms day-and-date, what does the future hold for movie theaters?",
    content: `The pandemic changed everything about how we watch movies. Forced to stay home, audiences embraced streaming in unprecedented numbers. Now, even as theaters have reopened, the landscape has fundamentally shifted.

Major studios are releasing films on streaming platforms either simultaneously with theatrical releases or within weeks. Audiences have grown accustomed to watching new releases from their couches. And theater chains are struggling to fill seats.

But reports of cinema's death have been greatly exaggerated.

**The Theatrical Experience**

There's something irreplaceable about watching a movie in a theater. The big screen, the surround sound, the collective experience of laughing, crying, and gasping with a room full of strangers – this is what cinema has always been about.

Barbenheimer proved that audiences will turn out for the right movies. When films feel like events, people want to experience them together.

**The Streaming Advantage**

Streaming offers convenience and choice. For smaller films, documentaries, and independent productions, streaming provides access to audiences who might never find these films in theaters.

**The Hybrid Future**

The most likely future is a hybrid model. Blockbusters and event films get exclusive theatrical windows. Smaller films go directly to streaming. And audiences choose how they want to watch.

**What This Means for Filmmakers**

Directors are already adapting. Christopher Nolan and Denis Villeneuve have become vocal advocates for theatrical exhibition, shooting their films specifically for the big screen experience.

Others are embracing streaming's possibilities – longer runtimes, serialized storytelling, and direct connection with audiences.

**The Bottom Line**

Cinema isn't dying. It's evolving. Theaters that survive will be those that offer something special – premium formats, curated experiences, events that can't be replicated at home.

And streaming will continue to grow, providing access to films that might never have found audiences in the theatrical model.

The future of cinema is both bigger and smaller than ever before. And that's exciting.`,
    date: "October 28, 2025",
    category: "Industry Analysis",
    image: "/images/hero-bg.jpg",
    author: "David Park",
    readTime: "6 min read",
    tags: ["Streaming", "Theaters", "Industry Trends", "Future of Cinema"]
  }
];

export const getBlogPostById = (id: string): BlogPost | undefined => {
  return blogPosts.find(post => post.id === id);
};

export const getBlogPostsByCategory = (category: string): BlogPost[] => {
  return blogPosts.filter(post => post.category === category);
};

export const getBlogPostsByTag = (tag: string): BlogPost[] => {
  return blogPosts.filter(post => post.tags.includes(tag));
};
