export type Idea = {
  name: string;
  shortDescription: string;
  status?: boolean;
  tier: Tier;
  href?: string;
};

export type Tier = "Beginner" | "Intermediate" | "Advanced";

export const ideaList: Idea[] = [
  {
    name: "Bin2Dec",
    shortDescription: "Binary-to-Decimal number converter",
    status: true,
    tier: "Beginner",
    href: "bin2dec",
  },
  {
    name: "Border Radius Previewer",
    shortDescription: "Preview how CSS3 border-radius values affect an element",
    status: true,
    tier: "Beginner",
    href: "border-radius-previewer",
  },
  {
    name: "Calculator",
    shortDescription: "Calculator",
    tier: "Beginner",
    href: "calculator",
    status: true,
  },
  {
    name: "Christmas Lights",
    shortDescription: "Simulate a string of Christmas lights",
    tier: "Beginner",
    href: "christmas-lights",
    status: true,
  },
  {
    name: "Cause Effect App",
    shortDescription: "Click list item to display item details",
    tier: "Beginner",
    href: "cause-effect-app",
    status: true,
  },
  {
    name: "Color Cycle",
    shortDescription: "Cycle a color value through incremental changes",
    tier: "Beginner",
  },
  {
    name: "Countdown Timer",
    shortDescription: "Event Countdown timer",
    tier: "Beginner",
    status: true,
  },
  {
    name: "CSV2JSON App",
    shortDescription: "CSV to JSON converter",
    tier: "Beginner",
  },
  {
    name: "Dollars to Cents",
    shortDescription: "Convert dollars to cents",
    tier: "Beginner",
  },
  {
    name: "Dynamic CSS Variables",
    shortDescription: "Dynamically change CSS variable settings",
    tier: "Beginner",
  },
  {
    name: "First DB App",
    shortDescription: "Your first Database app!",
    tier: "Beginner",
  },
  {
    name: "Flip Image",
    shortDescription: "Change the orientation of images across two axes",
    tier: "Beginner",
  },
  {
    name: "GitHub Status",
    shortDescription: "Display Current GitHub Status",
    tier: "Beginner",
  },
  {
    name: "Hello",
    shortDescription: "User native language greeting",
    tier: "Beginner",
  },
  {
    name: "IOT Mailbox Simulator",
    shortDescription: "Use callbacks to check your snail mail",
    tier: "Beginner",
  },
  {
    name: "JS Input Validation",
    shortDescription: "Script to validate inputs entered by a user using RegEx",
    tier: "Beginner",
  },
  {
    name: "JSON2CSV App",
    shortDescription: "JSON to CSV converter",
    tier: "Beginner",
  },
  {
    name: "Key Value",
    shortDescription: "Keyboard Event Values",
    tier: "Beginner",
  },
  {
    name: "Lorem Ipsum Generator",
    shortDescription: "Generate lorem ipsum placeholder text",
    tier: "Beginner",
  },
  {
    name: "Notes App",
    shortDescription: "Create an online note pad",
    tier: "Beginner",
  },
  {
    name: "Pearson Regression",
    shortDescription:
      "Calculate the correlation coefficient for two sets of data",
    tier: "Beginner",
  },
  {
    name: "Pomodoro Clock",
    shortDescription: "Task timer to aid personal productivity",
    tier: "Beginner",
  },
  {
    name: "Product Landing Page",
    shortDescription: "Showcase product details for possible buyers",
    tier: "Beginner",
  },
  {
    name: "Quiz App",
    shortDescription: "Test your knowledge by answering questions",
    tier: "Beginner",
  },
  {
    name: "Recipe App",
    shortDescription: "Recipe",
    tier: "Beginner",
  },
  {
    name: "Random Meal Generator",
    shortDescription: "Generate random meals",
    tier: "Beginner",
  },
  {
    name: "Random Number Generator",
    shortDescription: "Generate random number between range.",
    tier: "Beginner",
  },
  {
    name: "Roman to Decimal Converter",
    shortDescription: "Convert Roman to Decimal numbers",
    tier: "Beginner",
  },
  {
    name: "Slider Design",
    shortDescription: "Display images using a slider control",
    tier: "Beginner",
  },
  {
    name: "Stopwatch App",
    shortDescription: "Count time spent on activities",
    tier: "Beginner",
  },
  {
    name: "TrueOrFalse",
    shortDescription: "Identify the result of a conditional comparison",
    tier: "Beginner",
  },
  {
    name: "Vigenere Cipher",
    shortDescription: "Encrypt text using the Vigenere Cypher",
    tier: "Beginner",
  },
  {
    name: "Wind Chill",
    shortDescription:
      "Calculate the windchill factor from an actual temperature",
    tier: "Beginner",
  },
  {
    name: "Word Frequency",
    shortDescription: "Calculate word frequency in a block of text",
    tier: "Beginner",
  },
  {
    name: "Weather App",
    shortDescription: "Get the temperature, weather condition of a city.",
    tier: "Beginner",
  },
  {
    name: "Bit Masks",
    shortDescription: "Using Bit Masks for Conditions",
    tier: "Intermediate",
  },
  {
    name: "Book Finder App",
    shortDescription: "Search for books by multiple criteria",
    tier: "Intermediate",
  },
  {
    name: "Calculator CLI",
    shortDescription: "Create a basic calculator cli.",
    tier: "Intermediate",
  },
  {
    name: "Card Memory Game",
    shortDescription: "Memorize and match hidden images",
    tier: "Intermediate",
  },
  {
    name: "Charity Finder App",
    shortDescription: "Find a Global Charity to donate to",
    tier: "Intermediate",
  },
  {
    name: "Chrome Theme Extension",
    shortDescription: "Build your own chrome theme extention.",
    tier: "Intermediate",
  },
  {
    name: "Currency Converter",
    shortDescription: "Convert one currency to another.",
    tier: "Intermediate",
  },
  {
    name: "Drawing App",
    shortDescription: "Create digital artwork on the web",
    tier: "Intermediate",
  },
  {
    name: "Emoji Translator App",
    shortDescription: "Translate sentences into Emoji",
    tier: "Intermediate",
  },
  {
    name: "Flashcards App",
    shortDescription: "Review and test your knowledge through Flash Cards",
    tier: "Intermediate",
  },
  {
    name: "Flip Art App",
    shortDescription: "Animate a set of images",
    tier: "Intermediate",
  },
  {
    name: "Game Suggestion App",
    shortDescription: "Create polls to decide what games to play",
    tier: "Intermediate",
  },
  {
    name: "GitHub Profiles",
    shortDescription: "A GitHub user search App",
    tier: "Intermediate",
  },
  {
    name: "HighStriker Game",
    shortDescription: "Highstriker strongman carnival game",
    tier: "Intermediate",
  },
  {
    name: "Image Scanner",
    shortDescription: "Image Scanner App",
    tier: "Intermediate",
  },
  {
    name: "Markdown Previewer",
    shortDescription: "Preview text formatted in GitHub flavored markdown",
    tier: "Intermediate",
  },
  {
    name: "Markdown Table Generator",
    shortDescription: "Convert a table into Markdown-formatted text",
    tier: "Intermediate",
  },
  {
    name: "Math Editor",
    shortDescription: "A math editor for students to use",
    tier: "Intermediate",
  },
  {
    name: "Meme Generator App",
    shortDescription: "Create custom memes",
    tier: "Intermediate",
  },
  {
    name: "Name Generation using RNNs",
    shortDescription: "Generate names using names dataset",
    tier: "Intermediate",
  },
  {
    name: "Password Generator",
    shortDescription: "Generate random passwords",
    tier: "Intermediate",
  },
  {
    name: "Podcast Directory",
    shortDescription: "Directory of favorite podcasts",
    tier: "Intermediate",
  },
  {
    name: "QR Code Badge Generator",
    shortDescription: "Encode badge info in a QRcode",
    tier: "Intermediate",
  },
  {
    name: "Regular Expression Helper",
    shortDescription: "Test Regular Expressions",
    tier: "Intermediate",
  },
  {
    name: "Sales Reciepts App",
    shortDescription: "Record Sales Receipts in a DB",
    tier: "Intermediate",
  },
  {
    name: "Simple Online Store",
    shortDescription: "Simple Online Store",
    tier: "Intermediate",
  },
  {
    name: "Sports Bracket Generator",
    shortDescription: "Generate a sports bracket diagram",
    tier: "Intermediate",
  },
  {
    name: "String Art",
    shortDescription: "An animation of moving, colored strings",
    tier: "Intermediate",
  },
  {
    name: "This or That Game",
    shortDescription: "This or That Game",
    tier: "Intermediate",
  },
  {
    name: "Timezone Slackbot",
    shortDescription: "Display Team Timezones",
    tier: "Intermediate",
  },
  {
    name: "To-Do App",
    shortDescription: "Manage personal to-do tasks",
    tier: "Intermediate",
  },
  {
    name: "Typing Practice",
    shortDescription: "Typing Practice",
    tier: "Intermediate",
  },
  {
    name: "Voting App",
    shortDescription: "Voting App",
    tier: "Intermediate",
  },
  {
    name: "Battleship Bot",
    shortDescription: "Create a Discord bot that plays Battleship",
    tier: "Advanced",
  },
  {
    name: "Battleship Game Engine",
    shortDescription: "Create a callable engine to play the Battleship game",
    tier: "Advanced",
  },
  {
    name: "Boole Bots Game",
    shortDescription: "Battling Bots driven by Boolean algebra",
    tier: "Advanced",
  },
  {
    name: "Calendar",
    shortDescription: "Create your own Calendar",
    tier: "Advanced",
  },
  {
    name: "Calorie Counter",
    shortDescription: "Calorie Counter Nutrition App",
    tier: "Advanced",
  },
  {
    name: "Chat App",
    shortDescription: "Real-time chat interface",
    tier: "Advanced",
  },
  {
    name: "Contribution Tracker App",
    shortDescription: "Track funds donated to charity",
    tier: "Advanced",
  },
  {
    name: "Elevator",
    shortDescription: "Elevator simulator",
    tier: "Advanced",
  },
  {
    name: "Fast Food Simulator",
    shortDescription: "Fast Food Restaurant Simulator",
    tier: "Advanced",
  },
  {
    name: "Instagram Clone",
    shortDescription: "A clone of Facebook's Instagram app",
    tier: "Advanced",
  },
  {
    name: "GitHub Timeline",
    shortDescription: "Generate a timeline of a users GitHub Repos",
    tier: "Advanced",
  },
  {
    name: "Kudos Slackbot",
    shortDescription: "Give recognition to a deserving peer",
    tier: "Advanced",
  },
  {
    name: "Movie App",
    shortDescription:
      "Browse, Find Ratings, Check Actors and Find you next movie to watch",
    tier: "Advanced",
  },
  {
    name: "MyPodcast Library",
    shortDescription: "Create a library of favorite podcasts",
    tier: "Advanced",
  },
  {
    name: "NASA Exoplanet Query",
    shortDescription: "Query NASA's Exoplanet Archive",
    tier: "Advanced",
  },
  {
    name: "Shell Game",
    shortDescription: "Animated shell game",
    tier: "Advanced",
  },
  {
    name: "Shuffle Deck",
    shortDescription: "Evaluate different algorithms for shuffling a card deck",
    tier: "Advanced",
  },
  {
    name: "Slack Archiver",
    shortDescription: "Archive Slack Messages",
    tier: "Advanced",
  },
  {
    name: "Spell-It App",
    shortDescription: "A twist on the classic Speak N Spell game",
    tier: "Advanced",
  },
  {
    name: "Survey App",
    shortDescription: "Define, conduct, and view a survey",
    tier: "Advanced",
  },
];
