const teams = [
	{
		name: "Arizona Cardinals",
		city: "Glendale",
		founded: 1898,
		site: "https://www.azcardinals.com/",
		players: ["Jacoby Brissett", "Trey McBride", "Budda Baker"]
	},
	{
		name: "Atlanta Falcons",
		city: "Atlanta",
		founded: 1965,
		site: "https://www.atlantafalcons.com/",
		players: ["Bijan Robinson", "Kyle Pitts", "Drake London"]
	},
	{
		name: "Baltimore Ravens",
		city: "Baltimore",
		founded: 1996,
		site: "https://www.baltimoreravens.com/",
		players: ["Lamar Jackson", "Mark Andrews", "Marlon Humphrey"]
	},
	{
		name: "Buffalo Bills",
		city: "Buffalo",
		founded: 1960,
		site: "https://www.buffalobills.com/",
		players: ["Josh Allen", "Dalton Kincaid", "James Cook"]
	},
	{
		name: "Carolina Panthers",
		city: "Charlotte",
		founded: 1995,
		site: "https://www.panthers.com/",
		players: ["Bryce Young", "Eddy Pinero", "Monroe Feeling"]
	},
	{
		name: "Chicago Bears",
		city: "Chicago",
		founded: 1919,
		site: "https://www.chicagobears.com/",
		players: ["Caleb Williams", "Colston Loveland", "DJ Moore"]
	},
	{
		name: "Cincinnati Bengals",
		city: "Cincinnati",
		founded: 1968,
		site: "https://www.bengals.com/",
		players: ["Joe Burrow", "Ja'Marr Chase", "Tee Higgins"]
	},
	{
		name: "Cleveland Browns",
		city: "Cleveland",
		founded: 1946,
		site: "https://www.clevelandbrowns.com/",
		players: ["Sheuder Sanders", "Carson Schwesinger", "Myles Garrett"]
	},
	{
		name: "Dallas Cowboys",
		city: "Dallas",
		founded: 1960,
		site: "https://www.dallascowboys.com/",
		players: ["Dak Prescott", "CeeDee Lamb", "Brandon Aubrey"]
	},
	{
		name: "Denver Broncos",
		city: "Denver",
		founded: 1960,
		site: "https://www.denverbroncos.com/",
		players: ["Bo Nix", "Courtland Sutton", "Pat Surtain II"]
	},
	{
		name: "Detroit Lions",
		city: "Detroit",
		founded: 1930,
		site: "https://www.detroitlions.com/",
		players: ["Jared Goff", "Amon-Ra St. Brown", "Aidan Hutchinson"]
	},
	{
		name: "Green Bay Packers",
		city: "Green Bay",
		founded: 1919,
		site: "https://www.packers.com/",
		players: ["Jordan Love", "Micah Parsons", "Romeo Doubs"]
	},
	{
		name: "Houston Texans",
		city: "Houston",
		founded: 2002,
		site: "https://www.houstontexans.com/",
		players: ["C.J. Stroud", "Brandin Cooks", "Derek Stingley Jr."]
	},
	{
		name: "Indianapolis Colts",
		city: "Indianapolis",
		founded: 1953,
		site: "https://www.colts.com/",
		players: ["Sauce Gardener", "Jonathan Taylor", "Quenton Nelson"]
	},
	{
		name: "Jacksonville Jaguars",
		city: "Jacksonville",
		founded: 1995,
		site: "https://www.jaguars.com/",
		players: ["Trevor Lawrence", "Travis Etienne", "Travis Hunter"]
	},
	{
		name: "Kansas City Chiefs",
		city: "Kansas City",
		founded: 1960,
		site: "https://www.chiefs.com/",
		players: ["Patrick Mahomes", "Travis Kelce", "Chris Jones"]
	},
	{
		name: "Las Vegas Raiders",
		city: "Las Vegas",
		founded: 1960,
		site: "https://www.raiders.com/",
		players: ["Fernando Mendoza", "Ashton Jeanty", "Maxx Crosby"]
	},
	{
		name: "Los Angeles Chargers",
		city: "Los Angeles",
		founded: 1960,
		site: "https://www.chargers.com/",
		players: ["Justin Herbert", "Khalil Mack", "Derwin James"]
	},
	{
		name: "Los Angeles Rams",
		city: "Los Angeles",
		founded: 1936,
		site: "https://www.therams.com/",
		players: ["Matthew Stafford", "Davante Adams", "Puka Nacua"]
	},
	{
		name: "Miami Dolphins",
		city: "Miami",
		founded: 1966,
		site: "https://www.miamidolphins.com/",
		players: ["Tua Tagovailoa", "Tyreek Hill", "Xavien Howard"]
	},
	{
		name: "Minnesota Vikings",
		city: "Minneapolis",
		founded: 1961,
		site: "https://www.vikings.com/",
		players: ["Kyler Murray", "Justin Jefferson", "Dalvin Cook"]
	},
	{
		name: "New England Patriots",
		city: "Foxborough",
		founded: 1959,
		site: "https://www.patriots.com/",
		players: ["Drake Maye", "Matthew Judon", "Hunter Henry"]
	},
	{
		name: "New Orleans Saints",
		city: "New Orleans",
		founded: 1967,
		site: "https://www.neworleanssaints.com/",
		players: ["Jordan Tyson", "Alvin Kamara", "Cameron Jordan"]
	},
	{
		name: "New York Giants",
		city: "East Rutherford",
		founded: 1925,
		site: "https://www.giants.com/",
		players: ["Jaxon Dart", "Brian Burns", "Dexter Lawrence II"]
	},
	{
		name: "New York Jets",
		city: "East Rutherford",
		founded: 1959,
		site: "https://www.newyorkjets.com/",
		players: ["Garret Wilson", "Breece Hall", "Quinnen Williams"]
	},
	{
		name: "Philadelphia Eagles",
		city: "Philadelphia",
		founded: 1933,
		site: "https://www.philadelphiaeagles.com/",
		players: ["Jalen Hurts", "A.J. Brown", "Saquon Barkley"]
	},
	{
		name: "Pittsburgh Steelers",
		city: "Pittsburgh",
		founded: 1933,
		site: "https://www.steelers.com/",
		players: ["Aaron Rodgers", "TJ Watt", "Cameron Howard"]
	},
	{
		name: "San Francisco 49ers",
		city: "San Francisco",
		founded: 1946,
		site: "https://www.49ers.com/",
		players: ["Brock Purdy", "Ricky Pearsall", "Nick Bosa"]
	},
	{
		name: "Seattle Seahawks",
		city: "Seattle",
		founded: 1976,
		site: "https://www.seahawks.com/",
		players: ["Sam Darnold", "Jaxon Smith-Njigba", "Cooper Kupp"]
	},
	{
		name: "Tampa Bay Buccaneers",
		city: "Tampa",
		founded: 1976,
		site: "https://www.buccaneers.com/",
		players: ["Baker Mayfield", "Mike Evans", "Chris Godwin"]
	},
	{
		name: "Tennessee Titans",
		city: "Nashville",
		founded: 1960,
		site: "https://www.tennesseetitans.com/",
		players: ["Cam Ward", "Kendell Brooks", "Johnny Hekker"]
	},
	{
		name: "Washington Commanders",
		city: "Washington D.C.",
		founded: 1932,
		site: "https://www.commanders.com/",
		players: ["Jaylen Daniels", "Terry McLaurin", "Jonathan Allen"]
	}
];

// 25 updated 2025 NFL Rules
const rules = [
	"Each team has 11 players on the field.",
	"The field is 100 yards long with 10-yard end zones.",
	"A touchdown is worth 6 points.",
	"A field goal is worth 3 points.",
	"Extra points can be 1 or 2 points.",
	"The game is divided into four 15-minute quarters.",
	"Kickoffs start each half and after scoring plays.",
	"The play clock is 40 seconds between plays.",
	"Offside results in a 5-yard penalty.",
	"Holding results in a 10-yard penalty.",
	"Pass interference results in a spot foul.",
	"A fumble can be recovered by either team.",
	"A sack occurs when a QB is tackled behind the line of scrimmage.",
	"A safety scores 2 points for the defense.",
	"Teams switch sides after each quarter.",
	"Overtime is sudden death with modified rules.",
	"A 3rd and/or 4th down conversion is critical for 1st down.",
	"Incomplete passes stop the clock.",
	"Interceptions can be returned for a touchdown.",
	"Punts are used to give away the ball on 4th down.",
	"Touchbacks occur if during a kickoff the ball lands in the endzone.",
	"Challenges allow coaches to contest calls, but can't be used during 2-minute warnings.",
	"Two-minute warnings occur in each half.",
	"End zones are 10 yards deep.",
	"Extra point kicks are snapped from the 15-yard line."
];

// ===========================
// DOM ELEMENTS
// ===========================
const teamGrid = document.getElementById("teamGrid");
const teamSearch = document.getElementById("teamSearch");
const playersContainer = document.getElementById("playersContainer");
const rulesList = document.getElementById("rulesList");
const ruleSearch = document.getElementById("ruleSearch");

// ===========================
// BACK TO TOP BUTTON
// ===========================
const backToTopBtn = document.createElement("button");
backToTopBtn.id = "backToTop";
backToTopBtn.textContent = "↑ Top";
document.body.appendChild(backToTopBtn);

backToTopBtn.addEventListener("click", () =>
	window.scrollTo({ top: 0, behavior: "smooth" })
);

window.addEventListener("scroll", () => {
	backToTopBtn.style.display = window.scrollY > 400 ? "block" : "none";
});

// ===========================
// DISPLAY TEAMS
// ===========================
function displayTeams(filteredTeams) {
	teamGrid.innerHTML = "";
	filteredTeams.forEach((team) => {
		const card = document.createElement("a");
		card.classList.add("team-card");
		card.href = team.site;
		card.target = "_blank";
		card.innerHTML = `
      <h3>${team.name}</h3>
      <p>City: ${team.city}</p>
      <p>Founded: ${team.founded}</p>
    `;
		teamGrid.appendChild(card);
	});
}
displayTeams(teams);

// Team search
teamSearch.addEventListener("input", (e) => {
	const searchTerm = e.target.value.toLowerCase();
	displayTeams(teams.filter((t) => t.name.toLowerCase().includes(searchTerm)));
});

// ===========================
// DISPLAY PLAYERS
// ===========================
function displayPlayers() {
	playersContainer.innerHTML = "";
	teams.forEach((team) => {
		const block = document.createElement("div");
		block.classList.add("player-block");
		const playerList = team.players.map((p) => `<li>${p}</li>`).join("");
		block.innerHTML = `<h3>${team.name}</h3><ul class="player-list">${playerList}</ul>`;
		playersContainer.appendChild(block);
	});
}
displayPlayers();

// ===========================
// DISPLAY RULES
// ===========================
function displayRules(filteredRules) {
	rulesList.innerHTML = "";
	filteredRules.forEach((rule) => {
		const li = document.createElement("li");
		li.textContent = rule;
		rulesList.appendChild(li);
	});
}
displayRules(rules);

ruleSearch.addEventListener("input", (e) => {
	const searchTerm = e.target.value.toLowerCase();
	displayRules(rules.filter((r) => r.toLowerCase().includes(searchTerm)));
});

// ===========================
// FAQ TOGGLE
// ===========================
document.querySelectorAll(".faq-question").forEach((btn) => {
	btn.addEventListener("click", () => {
		const ans = btn.nextElementSibling;
		ans.style.display = ans.style.display === "block" ? "none" : "block";
	});
});