const rawProgrammingJokes = [
  "BREAKING: Developer spends 5 hours debugging only to find missing semicolon",
  "URGENT: Man loses will to live after Git merge conflict in production",
  "ALERT: Study shows talking to rubber ducks improves code quality by 73%",
  "NEWS FLASH: JavaScript developer finally understands 'this' keyword, immediately forgets",
  "JUST IN: CSS specificity wars leave thousands of divs unstyled",
  "TRENDING: Local programmer's 'temporary fix' enters 7th year in production",
  "UPDATE: Stack Overflow goes down for 10 minutes, global productivity collapses",
  "REPORT: Dev describes bug as 'impossible' moments before finding own typo",
  "EXCLUSIVE: 'It works on my machine' now acceptable defense in coding courts",
  "ALERT: Programmer's coffee intake directly correlated to lines of code written",
  "SHOCKING: Developer writes perfect code on first try, immediately suspects black magic",
  "EMERGENCY: Entire team paralyzed after PM asks for 'quick change' in legacy code",
  "LATEST: Programmer's 'final commit' message proven to be a lie for the 47th time",
  "DEVELOPING: AI writes flawless code, developers now questioning their life choices",
  "WARNING: Recursive function accidentally summons demon, IT working on fix",
  "CRITICAL: Developer discovers they've been using tabs instead of spaces, identity crisis ensues",
  "HOT OFF THE PRESSES: 'Hello, World!' program crashes, imposter syndrome confirmed",
  "BREAKING NEWS: Programmer successfully rebases branch, immediately buys lottery ticket",
  "URGENT UPDATE: 'Just one more feature' leads to 3-week delay, team morale at all-time low",
  "ALERT: Developer finds out their favorite API is deprecated, stages silent protest",
  "EXCLUSIVE: 'I'll document it later' revealed as biggest lie in software development",
  "JUST IN: Programmer spends 4 hours optimizing code that runs once a year",
  "REPORT: 'It's not a bug, it's a feature' officially added to developer dictionary",
  "SHOCKING DISCOVERY: 90% of meetings could have been an email, other 10% could have been a Slack message",
  "BREAKING: Developer successfully deploys to production on Friday, chaos ensues",
  "URGENT: 'I'll just Google it' becomes most used phrase in tech industry",
  "ALERT: Programmer's cat walks on keyboard, accidentally fixes critical bug",
  "NEWS FLASH: 'I'll do it tomorrow' now recognized as a universal developer constant",
  "JUST IN: Developer tries to explain async/await to non-tech friend, gives up after 5 minutes",
  "TRENDING: 'Why is this not working?' replaced by 'Why is this working?' as most common developer question",
];

function shuffleArray(array: string[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function multipleShuffle(array: string[], times: number) {
  let shuffledArray = array;
  for (let i = 0; i < times; i++) {
    shuffledArray = shuffleArray(shuffledArray);
  }
  return shuffledArray;
}

export const programmingJokes = multipleShuffle(rawProgrammingJokes, 5);
