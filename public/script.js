let games = 
[
	"Monster Hunter", "Monster Hunter Freedom", "Monster Hunter 2", "Monster Hunter Freedom 2", "Monster Hunter 3", "Monster Hunter Portable 3rd", "Monster Hunter 4", "Monster Hunter Generations", "Monster Hunter Stories", "Monster Hunter World", "Monster Hunter Rise", "Monster Hunter Stories 2: Wings of Ruin", "Monster Hunter Wilds"
];

let monst_classes = 
[
	"Fanged Beast", "Flying Wyvern", "Construct", "Leviathan", "Amphibian", "Demi Elder", "Bird Wyvern", "Temnoceran", "Cephalopod", "Brute Wyvern"
];


let monsters = 
[
	{name: "Ajarakan", generation: 6, min_size: 1047.92, max_size: 1443.80, monster_class: monst_classes[0], game_introduced: games[12], icon_path: ""},
	{name: "Arkveld", generation: 6, min_size: 1483.22, max_size: 2083.17, monster_class: monst_classes[1], game_introduced: games[12], icon_path: ""},
	{name: "Guardian Arkveld", generation: 6, min_size: 1666.54, max_size: 1666.54, monster_class: monst_classes[2], game_introduced: games[12], icon_path: ""},
	{name: "Balahara", generation: 6, min_size: 1702.22, max_size: 2371.64, monster_class: monst_classes[3], game_introduced: games[12], icon_path: ""},
	{name: "Blangonga", generation: 2, min_size: 791.12, max_size: 1221.2, monster_class: monst_classes[0], game_introduced: games[2], icon_path: ""},
	{name: "Chatacabra", generation: 6, min_size: 443.48, max_size: 612.90, monster_class: monst_classes[4], game_introduced: games[12], icon_path: ""},
	{name: "Congalala", generation: 2, min_size: 491.40, max_size: 1670.76, monster_class: monst_classes[0], game_introduced: games[2], icon_path: ""},
	{name: "Doshaguma", generation: 6, min_size: 1237.51, max_size: 1807.61, monster_class: monst_classes[0], game_introduced: games[12], icon_path: ""},
	{name: "Guardian Doshaguma", generation: 6, min_size: 1251.42, max_size: 1724.18, monster_class: monst_classes[2], game_introduced: games[12], icon_path: ""},
	{name: "Gore Magala", generation: 4, min_size: 1549.59, max_size: 2201.12, monster_class: monst_classes[5], game_introduced: games[6], icon_path: ""},
	{name: "Gravios", generation: 1, min_size: 1049.35, max_size: 3065.9, monster_class: monst_classes[1], game_introduced: games[0], icon_path: ""},
	{name: "Guardian Ebony Odogaron", generation: 6, min_size: 1235.98, max_size: 1735.93, monster_class: monst_classes[2], game_introduced: games[12], icon_path: ""},
	{name: "Guardian Fulgur Anjanath", generation: 6, min_size: 1465.34, max_size: 2058.07, monster_class: monst_classes[2], game_introduced: games[12], icon_path: ""},
	{name: "Gypceros", generation: 1, min_size: 811.0, max_size: 1348.2, monster_class: monst_classes[6], game_introduced: games[0], icon_path: ""},
	{name: "Hirabami", generation: 6, min_size: 1476.81, max_size: 1908.24, monster_class: monst_classes[3], game_introduced: games[12], icon_path: ""},
	{name: "Jin Dahaad", generation: 6, min_size: 4560.89, max_size: 4560.89, monster_class: monst_classes[3], game_introduced: games[12], icon_path: ""},
	{name: "Lala Barina", generation: 6, min_size: 621.88, max_size: 866.44, monster_class: monst_classes[7], game_introduced: games[12], icon_path: ""},
	{name: "Mizutsune", generation: 4, min_size: 565.54, max_size: 2395.05, monster_class: monst_classes[3], game_introduced: games[7], icon_path: ""},
	{name: "Nerscylla", generation: 4, min_size: 651.63, max_size: 1126.57, monster_class: monst_classes[7], game_introduced: games[6], icon_path: ""},
	{name: "Nu Udra", generation: 6, min_size: 1884.32, max_size: 2365.88, monster_class: monst_classes[8], game_introduced: games[12], icon_path: ""},
	{name: "Quematrice", generation: 6, min_size: 1107.30, max_size: 1542.76, monster_class: monst_classes[9], game_introduced: games[12], icon_path: ""},
	{name: "Rathalos", generation: 1, min_size: 1140.6, max_size: 2248.6, monster_class: monst_classes[1], game_introduced: games[0], icon_path: ""},
	{name: "Guardian Rathalos", generation: 6, min_size: 1533.79, max_size: 2130.27, monster_class: monst_classes[2], game_introduced: games[12], icon_path: ""},
	{name: "Rathian", generation: 1, min_size: 1151.9, max_size: 2303.8, monster_class: monst_classes[1], game_introduced: games[0], icon_path: ""},
	{name: "Rey Dau", generation: 6, min_size: 1851.37, max_size: 2571.35, monster_class: monst_classes[1], game_introduced: games[12], icon_path: ""},
	{name: "Rompopolo", generation: 6, min_size: 1066.05, max_size: 1497.27, monster_class: monst_classes[9], game_introduced: games[12], icon_path: ""},
	{name: "Uth Duna", generation: 6, min_size: 2681.36, max_size: 3426.18, monster_class: monst_classes[3], game_introduced: games[12], icon_path: ""},
	{name: "Xu Wu", generation: 6, min_size: 1242.70, max_size: 1745.37, monster_class: monst_classes[8], game_introduced: games[12], icon_path: ""},
	{name: "Yian Kut-Ku", generation: 1, min_size: 449.3, max_size: 1233.23, monster_class: monst_classes[6], game_introduced: games[0], icon_path: ""},
	{name: "Zoh Shia", generation: 6, min_size: 4623.59, max_size: 4623.59, monster_class: monst_classes[2], game_introduced: games[12], icon_path: ""},
	//{name: "Legiacrus", generation: 3, min_size: 2330.7, max_size: 3310.6, monster_class: monst_classes[3], game_introduced: games[4], icon_path: ""},
];

// loads tables
function loadMonsters() {
	for (let i = 0; i < monsters.length; i++){
		monsters[i].icon_path = "img/" + monsters[i].name + "_icon.webp";
	}

	const monsterSelector = document.getElementById("monsters");
	for (let i = 0; i < monsters.length; i++){
		const newMonster = 	document.createElement("option");
		newMonster.innerHTML = monsters[i].name;
		monsterSelector.appendChild(newMonster);
	}
	
	changeSelectedMonster();
	addMonstersToTable();
	
	var coll = document.getElementsByClassName("collapsible");
	var i;

	for (i = 0; i < coll.length; i++) {
	  coll[i].addEventListener("click", function() {
		this.classList.toggle("active");
		var content = this.nextElementSibling;
		if (content.style.maxHeight){
		  content.style.maxHeight = null;
		} else {
		  content.style.maxHeight = content.scrollHeight + "px";
		}
	  });
	}
}

window.onload = loadMonsters;

// return monster object based on name
function getMonsterByName(name){
	let monster;
	for (let i = 0; i < monsters.length; i++){
		if (monsters[i].name == name){
			monster = monsters[i];
			break;
		}
	}
	return monster;
}

// Change monster table to show selected monster
function changeSelectedMonster(){
	currentMonster = getMonsterByName(document.getElementById("monsters").options[document.getElementById("monsters").selectedIndex].text);
	const headingsRow = document.getElementById("monsterSelectorHeadings");
	const monsterDataRow = document.getElementById("selectedMonsterData");
	headingsRow.innerHTML = "";
	monsterDataRow.innerHTML = "";
	
	const nameHeading = document.createElement("th"); nameHeading.innerHTML = "Name"; headingsRow.appendChild(nameHeading);
	const classHeading = document.createElement("th"); classHeading.innerHTML = "Class"; headingsRow.appendChild(classHeading);
	const minSizeHeading = document.createElement("th"); minSizeHeading.innerHTML = "Min Size"; headingsRow.appendChild(minSizeHeading);
	const maxSizeHeading = document.createElement("th"); maxSizeHeading.innerHTML = "Max Size"; headingsRow.appendChild(maxSizeHeading);
	const genHeading = document.createElement("th"); genHeading.innerHTML = "Generation"; headingsRow.appendChild(genHeading);
	const gameHeading = document.createElement("th"); gameHeading.innerHTML = "Game Introduced"; headingsRow.appendChild(gameHeading);
	
	const monName = document.createElement("td"); monName.innerHTML = currentMonster.name; monsterDataRow.appendChild(monName);
	const monClass = document.createElement("td"); monClass.innerHTML = currentMonster.monster_class; monsterDataRow.appendChild(monClass);
	const monMinSize = document.createElement("td"); monMinSize.innerHTML = currentMonster.min_size; monsterDataRow.appendChild(monMinSize);
	const monMaxSize = document.createElement("td"); monMaxSize.innerHTML = currentMonster.max_size; monsterDataRow.appendChild(monMaxSize);
	const monGen = document.createElement("td"); monGen.innerHTML = currentMonster.generation; monsterDataRow.appendChild(monGen);
	const monGame = document.createElement("td"); monGame.innerHTML = currentMonster.game_introduced; monsterDataRow.appendChild(monGame);
	
	let selectedMonsterImg = document.getElementById("selectedMonsterImg");
	selectedMonsterImg.src = currentMonster.icon_path;
	selectedMonsterImg.alt = currentMonster.name + " icon";
}


// Fill out Monsters table
function addMonstersToTable(){
	const monsterTableHeadingsRow = document.getElementById("monsterTableHeadings");
	const monsterTable = document.getElementById("monsterTable");
	
	const nameHeading = document.createElement("th"); nameHeading.innerHTML = "Name"; nameHeading.setAttribute('onclick', 'sortTable(0)'); monsterTableHeadingsRow.appendChild(nameHeading); 
	const classHeading = document.createElement("th"); classHeading.innerHTML = "Class"; classHeading.setAttribute('onclick', 'sortTable(1)'); monsterTableHeadingsRow.appendChild(classHeading);
	const minSizeHeading = document.createElement("th"); minSizeHeading.innerHTML = "Min Size"; minSizeHeading.setAttribute('onclick', 'sortTable(2)'); monsterTableHeadingsRow.appendChild(minSizeHeading);
	const maxSizeHeading = document.createElement("th"); maxSizeHeading.innerHTML = "Max Size"; maxSizeHeading.setAttribute('onclick', 'sortTable(3)'); monsterTableHeadingsRow.appendChild(maxSizeHeading);
	const genHeading = document.createElement("th"); genHeading.innerHTML = "Generation"; genHeading.setAttribute('onclick', 'sortTable(4)'); monsterTableHeadingsRow.appendChild(genHeading);
	const gameHeading = document.createElement("th"); gameHeading.innerHTML = "Game Introduced"; gameHeading.setAttribute('onclick', 'sortTable(5)'); monsterTableHeadingsRow.appendChild(gameHeading);
	const iconHeading = document.createElement("th"); iconHeading.innerHTML = "Icon"; monsterTableHeadingsRow.appendChild(iconHeading);
	
	for(let i = 0; i < monsters.length; i++){
		currentMonster = monsters[i];
		let monsterRow = document.createElement("tr");
		
		const monName = document.createElement("td"); monName.innerHTML = currentMonster.name; monsterRow.appendChild(monName);
		const monClass = document.createElement("td"); monClass.innerHTML = currentMonster.monster_class; monsterRow.appendChild(monClass);
		const monMinSize = document.createElement("td"); monMinSize.innerHTML = currentMonster.min_size; monsterRow.appendChild(monMinSize);
		const monMaxSize = document.createElement("td"); monMaxSize.innerHTML = currentMonster.max_size; monsterRow.appendChild(monMaxSize);
		const monGen = document.createElement("td"); monGen.innerHTML = currentMonster.generation; monsterRow.appendChild(monGen);
		const monGame = document.createElement("td"); monGame.innerHTML = currentMonster.game_introduced; monsterRow.appendChild(monGame);
		const monIcon = document.createElement("td");
		const monImage = document.createElement("img"); monImage.setAttribute('class', "small_icon");monImage.setAttribute('src', currentMonster.icon_path); monImage.setAttribute('alt', currentMonster.name + " icon"); monImage.setAttribute('onerror', "this.src='img/Unknown_icon.webp';this.onerror=null;");
		monIcon.appendChild(monImage); monsterRow.appendChild(monIcon);
		
		monsterTable.appendChild(monsterRow);
	}
}

// sort table based on which headign was clicked
function sortTable(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("monsterTable");
  switching = true;
  // Set the sorting direction to ascending:
  dir = "asc";
  /* Make a loop that will continue until
  no switching has been done: */
  while (switching) {
	// Start by saying: no switching is done:
	switching = false;
	rows = table.rows;
	/* Loop through all table rows (except the
	first, which contains table headers): */
	for (i = 1; i < (rows.length - 1); i++) {
	  // Start by saying there should be no switching:
	  shouldSwitch = false;
	  /* Get the two elements you want to compare,
	  one from current row and one from the next: */
	  x = rows[i].getElementsByTagName("TD")[n];
	  y = rows[i + 1].getElementsByTagName("TD")[n];
	  /* Check if the two rows should switch place,
	  based on the direction, asc or desc: */
	  if (dir == "asc") {
		if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
		  // If so, mark as a switch and break the loop:
		  shouldSwitch = true;
		  break;
		}
	  } else if (dir == "desc") {
		if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
		  // If so, mark as a switch and break the loop:
		  shouldSwitch = true;
		  break;
		}
	  }
	}
	if (shouldSwitch) {
	  /* If a switch has been marked, make the switch
	  and mark that a switch has been done: */
	  rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
	  switching = true;
	  // Each time a switch is done, increase this count by 1:
	  switchcount ++;
	} else {
	  /* If no switching has been done AND the direction is "asc",
	  set the direction to "desc" and run the while loop again. */
	  if (switchcount == 0 && dir == "asc") {
		dir = "desc";
		switching = true;
	  }
	}
  }
}

function toggleDarkMode(){
	document.body.classList.toggle("darkMode");
}
