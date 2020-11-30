const projects = [
  {
    index: 0,
    title: "Arvo Beers",
    url: "https://github.com/PBillingsby/arvo-beers-api",
    about: "Personal Beer Database",
    description:
      "Made with Ruby on Rails, React and Redux. Arvo Beers is a database created to keep track of all the new beers you've tried and loved.",
    tech: ["React", "Redux", "JavaScript", "Ruby on Rails", "Bootstrap"],
    src: require("./images/ab-screenshot.png")
  },
  {
    index: 1,
    title: "The Daily Bump",
    url: "https://github.com/PBillingsby/the-daily-bump",
    about: "Tracking appointments, baby names, and images through a pregnancy.",
    description:
      "Made with Ruby on Rails and JavaScript. The Daily Bump is a pregnancy helper application that keeps track of appointments, progress images, and a name meaning scraper.",
    tech: ["JavaScript", "Ruby on Rails", "ActiveRecord", "Bootstrap"],
    src: require("./images/tdb-screenshot.png")
  },
  {
    index: 2,
    title: "Skate-Mate",
    url: "https://github.com/PBillingsby/skate-mate-project",
    about:
      "For skateboarders worldwide to store skatepark and spot photos and information.",
    description:
      "Made with Ruby on Rails. Skate-Mate is a place for skateboarders to share information and images about skate parks and spots all over the world.",
    tech: ["Ruby On Rails", "ActiveRecord", "HTML", "CSS"],
    src: require("./images/sm-screenshot.png")
  }
];
export default projects;
