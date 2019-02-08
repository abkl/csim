const data = [
  {
    team_number: 228,
    nickname: "Letitia",
    city: "Cetronia",
    country: "U.S",
    state_prov: "Palau",
    address: "Seigel Court",
    website: "https://www.google.com",
    competition: "sfr",
  },
  {
    team_number: 152,
    nickname: "Williamson",
    city: "Mansfield",
    country: "U.S",
    state_prov: "Kansas",
    address: "Sapphire Street",
    website: "https://www.google.com",
    competition: "sfr",
  },
  {
    team_number: 1954,
    nickname: "Phyllis",
    city: "Alderpoint",
    country: "U.S",
    state_prov: "Puerto Rico",
    address: "Vanderbilt Avenue",
    website: "https://https://www.google.com",
    competition: "sfr",
  },
  {
    team_number: 1714,
    nickname: "Jill",
    city: "Gardiner",
    country: "U.S",
    state_prov: "Virgin Islands",
    address: "Heath Place",
    website: "https://www.google.com",
    competition: "sfr",
  },
  {
    team_number: 492,
    nickname: "Love",
    city: "Leeper",
    country: "U.S",
    state_prov: "Kentucky",
    address: "Hutchinson Court",
    website: "https://www.google.com",
    competition: "sfr",
  },
  {
    team_number: 482,
    nickname: "Young",
    city: "Katonah",
    country: "U.S",
    state_prov: "Georgia",
    address: "Bank Street",
    website: "https://www.google.com",
    competition: "sfr",
  },
  {
    team_number: 610,
    nickname: "Soto",
    city: "Accoville",
    country: "U.S",
    state_prov: "Idaho",
    address: "Bond Street",
    website: "https://www.google.com",
    competition: "sfr",
  },
  {
    team_number: 687,
    nickname: "Whitaker",
    city: "Succasunna",
    country: "U.S",
    state_prov: "Texas",
    address: "Division Place",
    website: "https://www.google.com",
    competition: "sfr",
  },
  {
    team_number: 684,
    nickname: "Fleming",
    city: "Wescosville",
    country: "U.S",
    state_prov: "North Carolina",
    address: "Lincoln Terrace",
    website: "https://www.google.com",
    competition: "sfr",
  },
  {
    team_number: 1011,
    nickname: "Park",
    city: "Watchtower",
    country: "U.S",
    state_prov: "Florida",
    address: "Batchelder Street",
    website: "https://https://www.google.com",
    competition: "sfr",
  },
]
/* @type {
  [key: string]: { mean: number; standardDeviation: number }
} */
const s = data.reduce(
  (pv, cv) => ({
    ...pv,
    [cv.team_number]: {
      matchData: [{ "Team Number": cv.team_number }],
      stats: {
        "Number of Balls": {
          mean: Math.floor(Math.random() * 60),
          standardDeviation: Math.floor(Math.floor(Math.random() * 60)),
        },
        "Number of Rings": {
          mean: Math.floor(Math.random() * 60),
          standardDeviation: Math.floor(Math.floor(Math.random() * 60)),
        },
        "Points Scored": {
          mean: Math.floor(Math.random() * 100),
          standardDeviation: Math.floor(Math.floor(Math.random() * 100)),
        },
      },
    },
  }),
  {}
)

console.log(s)
module.exports.teams = data
module.exports.data = s
