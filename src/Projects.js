const projects = [
  {
    index: 0,
    title: "Arvo Beers",
    url: "https://github.com/PBillingsby/arvo-beers-api",
    about: "Personal Beer Database",
    description:
      "Made with Ruby on Rails, React and Redux. Arvo Beers is a database created to keep track of all the new beers you've tried and loved.",
    strategies:
      "Implemented Thunk middleware to dispatch synchronous actions inside functions body once the asyncrhonous calls have completed.",
    tech: ["React", "Redux", "JavaScript", "Ruby on Rails", "Bootstrap"]
  },
  {
    index: 1,
    title: "The Daily Bump",
    url: "https://github.com/PBillingsby/the-daily-bump",
    about: "Tracking appointments, baby names, and images through a pregnancy.",
    description:
      "Made with Ruby on Rails and JavaScript. The Daily Bump is a pregnancy helper application that keeps track of appointments, progress images, and names with meanings.",
    strategies:
      "Uses scraper for finding name meanings using HTTParty and nokogiri.",
    tech: ["JavaScript", "Ruby on Rails", "ActiveRecord", "Bootstrap"]
  },
  {
    index: 2,
    title: "Skate-Mate",
    url: "https://github.com/PBillingsby/skate-mate-project",
    about:
      "For skateboarders worldwide to store skatepark and spot photos and information.",
    description:
      "Made with Ruby on Rails. Skate-Mate is a place for skateboarders to share information and images about skate parks and spots all over the world.",
    strategies:
      "Use of GeoCoder gem to handle User location using IP address geocoding. Implements Oauth2 for Facebook login.",
    tech: ["Ruby On Rails", "ActiveRecord", "HTML", "CSS"]
  }
];
export default projects;
