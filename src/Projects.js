const projects = [
  {
    index: 0,
    title: "Arvo Beers",
    url: "https://github.com/PBillingsby/arvo-beers-api",
    about: "Personal Beer Database",
    description: "Made with Ruby on Rails back-end, React/Redux front-end.",
    tech: ["React", "Redux", "JavaScript", "Ruby on Rails", "Bootstrap"],
    src: require("./images/ab-screenshot.png")
  },
  {
    index: 1,
    title: "The Daily Bump",
    url: "https://github.com/PBillingsby/the-daily-bump",
    about: "Tracking appointments, baby names, and images through a pregnancy.",
    tech: ["JavaScript", "Ruby on Rails", "ActiveRecord", "Bootstrap"],
    src: require("./images/tdb-screenshot.png")
  },
  {
    index: 2,
    title: "Skate-Mate",
    url: "https://github.com/PBillingsby/skate-mate-project",
    about:
      "For skateboarders worldwide to store skatepark and spot photos and information.",
    tech: ["Ruby On Rails", "ActiveRecord", "HTML", "CSS"],
    src: require("./images/sm-screenshot.png")
  }
];
export default projects;
