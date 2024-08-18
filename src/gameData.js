const versions = {
	kanto: ["red", "blue", "yellow", "fireRed", "leafGreen"],
	originalJohto: ["gold", "silver", "crystal"],
	hoenn: ["ruby", "sapphire", "emerald"],
	originalSinnoh: ["diamond", "pearl", "platinum"],
	updatedJohto: ["heartgold", "soulsilver"],
	originalUnova: ["black", "white"],
	updatedUnova: ["blackTwo", "whiteTwo"],
	kalosMountain: ["x", "y"],
	updatedHoenn: ["omegaRuby", "alphaSapphire"],
	originallola: ["sun", "moon"],
	updatedAlola: ["ultraSun", "ultraMoon"],
	letsgoKanto: ["letsGoPikachu", "letsGoEevee"], 
	galar: ["sword", "shield"],
	extendedSinnoh: ["brilliantDiamond", "shiningPearl"],
	hisui: ["legendsArceus"],
	paldea: ["scarlet", "violet"]
}

export const expansions = {
	genEight: ["theIsleOfArmor", "theCrownTundra"],
	genNine: ["theTealMask", "theIndigoDisk"]
}

export const legendaries = {
	red: ["articuno", "zapdos", "moltres", "mewtwo"],
	blue: ["articuno", "zapdos", "moltres", "mewtwo"],
	yellow: ["articuno", "zapdos", "moltres", "mewtwo"],
	gold: ["raikou", "entei", "suicune", "lugia", "ho-oh"],
	silver: ["raikou", "entei", "suicune", "lugia", "ho-oh"],
	crystal: ["raikou", "entei", "suicune", "lugia", "ho-oh", "celebi"],
	ruby: ["regirock", "regice", "registeel", "latios", "groudon", "rayquaza"],
	sapphire: ["regirock", "regice", "registeel", "latias", "kyogre", "rayquaza"],
	emerald: ["regirock", "regice", "registeel", "latias", "latios", "kyogre", "groudon", "rayquaza"],
	fireRed: ["articuno", "zapdos", "moltres", "mewtwo", "raikou", "entei", "suicune"],
	leafGreen: ["articuno", "zapdos", "moltres", "mewtwo", "raikou", "entei", "suicune"],
	diamond: ["dialga", "heatran", "regigigas", "giratina", "cresselia", "mesprit", "uxie", "azelf"],
	pearl: ["palkia", "heatran", "regigigas", "giratina", "cresselia", "mesprit", "uxie", "azelf"],
	platinum: ["articuno", "zapdos", "moltres", "dialga", "palkia", "heatran", "regigigas", "giratina", "cresselia", "mesprit", "uxie", "azelf"],
	heartGold: ["articuno", "zapdos", "moltres", "mewtwo", "raikou", "entei", "suicune", "lugia", "ho-oh", "latias", "kyogre", "rayquaza"],
	soulSilver: ["articuno", "zapdos", "moltres", "mewtwo", "raikou", "entei", "suicune", "lugia", "ho-oh", "latios", "groudon", "rayquaza"],
	black: ["cobalion", "terrakion", "virizion", "tornadus", "reshiram", "landorus", "kyurem"],
	white: ["cobalion", "terrakion", "virizion", "thundurus", "zekrom", "landorus", "kyurem"],
	blackTwo: ["regirock", "regice", "registeel", "latios", "mesprit", "uxie", "azelf", "heatran", "regigigas", "cresselia", "cobalion", "terrakion", "virizion", "tornadus", "thundurus", "zekrom", "landorus", "kyurem"],
	whiteTwo: ["regirock", "regice", "registeel", "latias", "mesprit", "uxie", "azelf", "heatran", "regigigas", "cresselia", "cobalion", "terrakion", "virizion", "tornadus", "thundurus", "reshiram", "landorus", "kyurem"],
	x: ["articuno", "zapdos", "moltres", "mewtwo", "xerneas", "zygarde"],
	y: ["articuno", "zapdos", "moltres", "mewtwo", "yveltal", "zygarde"],
	omegaRuby: ["raikou", "entei", "suicune", "ho-oh", "regirock", "regice", "registeel", "latios", "latias", "groudon", "rayquaza", "deoxys", "mesprit", "uxie", "azelf", "palkia", "heatran", "regigigas", "cresselia", "giratina", "cobalion", "terrakion", "virizion", "tornadus", "reshiram", "landorus", "kyurem"],
	alphaSapphire: ["raikou", "entei", "suicune", "lugia", "regirock", "regice", "registeel", "latios", "latias", "kyogre", "rayquaza", "deoxys", "mesprit", "uxie", "azelf", "palkia", "heatran", "regigigas", "cresselia", "giratina", "cobalion", "terrakion", "virizion", "thundurus", "zekrom", "landorus", "kyurem"],
	sun: ["zygarde", "type:null", "tapu-koko", "tapu-lele", "tapu-bulu", "tapu-fini", "cosmog", "solgaleo", "necrozma"],
	moon: ["zygarde", "type:null", "tapu-koko", "tapu-lele", "tapu-bulu", "tapu-fini", "cosmog", "lunala", "necrozma"],
	ultraSun: ["articuno", "zapdos", "moltres", "mewtwo", "raikou", "entei", "suicune", "ho-oh", "regirock", "regice", "registeel", "latios", "groudon", "rayquaza", "mesprit", "uxie", "azelf", "dialga", "heatran", "giratina", "cresselia", "cobalion", "terrakion", "virizion", "tornadus", "reshiram", "landorus", "kyurem", "xerneas", "zygarde", "type:null", "tapu-koko", "tapu-lele", "tapu-bulu", "tapu-fini", "cosmog", "solgaleo", "necrozma"],
	ultraMoon: ["articuno", "zapdos", "moltres", "mewtwo", "raikou", "entei", "suicune", "lugia", "regirock", "regice", "registeel", "latias", "kyogre", "rayquaza", "mesprit", "uxie", "azelf", "palkia", "regigigas", "giratina", "cresselia", "cobalion", "terrakion", "virizion", "thundurus", "zekrom", "landorus", "kyurem", "yvetal", "zygarde", "type:null", "tapu-koko", "tapu-lele", "tapu-bulu", "tapu-fini", "cosmog", "lunala", "necrozma"],
	letsGoPikachu: ["articuno", "zapdos", "moltres", "mewtwo"],
	letsGoEevee: ["articuno", "zapdos", "moltres", "mewtwo"],
	sword: ["type:null", "zacian", "eternatus"],
	shield: ["type:null", "zamazenta", "eternatus"],
	isleOfArmor: ["kubfu"],
	crownOfTundra: {
		sword: ["articuno-g", "zapdos-g", "moltres-g", "mewtwo", "raikou", "entei", "suicune", "ho-oh", "regirock", "regice", "registeel", "latios", "groudon", "rayquaza", "mesprit", "uxie", "azelf", "dialga", "heatran", "giratina", "regigigas", "giratina", "cresselia", "cobalion", "terrakion", "virizion", "tornadus", "landorus", "reshiram", "kyurem", "keldeo", "xerneas", "zygarde", "solgaleo", "tapu-koko", "tapu-lele", "tapu-bulu", "tapu-fini", "cosmog", "regieleki", "regidrago", "glastrier", "spectrier", "calyrex"],
		shield: ["articuno-g", "zapdos-g", "moltres-g", "mewtwo", "raikou", "entei", "suicune", "lugia", "regirock", "regice", "registeel", "latias", "kyogre", "rayquaza", "mesprit", "uxie", "azelf", "palkia", "heatran", "giratina", "regigigas", "giratina", "cresselia", "cobalion", "terrakion", "virizion", "thundurus", "landorus", "zekrom", "kyurem", "keldeo", "yvetal", "zygarde", "lunala", "tapu-koko", "tapu-lele", "tapu-bulu", "tapu-fini", "cosmog", "regieleki", "regidrago", "glastrier", "spectrier", "calyrex"]
	},
	brilliantDiamond: ["mewtwo", "mew", "raikou", "entei", "suicune", "ho-oh", "regirock", "regice", "registeel", "latias", "latios", "groudon", "kyogre", "rayquaza", "jirachi", "mesprit", "uxie", "azelf", "dialga", "heatran", "regigigas", "giratina", "cresselia", "arceus"],
	shiningPearl: ["articuno", "zapdos", "moltres", "mewtwo", "mew", "raikou", "entei", "suicune", "lugia", "regirock", "regice", "registeel", "latias", "latios", "groudon", "kyogre", "rayquaza", "jirachi", "mesprit", "uxie", "azelf", "palkia", "heatran", "regigigas", "giratina", "cresselia", "arceus"],
	legendsArceus: ["mesprit", "uxie", "azelf", "dialga", "heatran", "regigigas", "giratina", "cresselia", "manaphy", "darkrai", "shaymin", "arceus", "tornadus", "thundurus", "landorus", "enamorus"],
	scarlet: ["koraidon", "wo-chien", "chien-pao", "ting-lu", "chi-yu"],
	violet: ["miraidon", "wo-chien", "chien-pao", "ting-lu", "chi-yu"],
	theTealMask: ["okidogi", "munkidori", "fezandipiti", "ogrepon"],
	theIndigoDisk: ["terapagos", "pecharunt"]
}

export const pokemonPerVersion = {
	red: ["venusaur", "charizard", "blastoise", "butterfree", "beedrill", "pidgeot", "raticate", "fearow", "arbok", "raichu", "nidoqueen", "nidoking", "clefable", "wigglytuff", "golbat", "vileplume", "parasect", "venomoth", "dugtrio", "golduck", "primeape", "arcanine", "poliwrath", "alakazam", "machamp", "tentacruel", "golem", "rapidash", "slowbro", "magneton", "farfetchd", "dodrio", "dewgong", "muk", "cloyster", "gengar", "onix", "hypno", "kingler", "electrode", "exeggutor", "marowak", "hitmonlee", "hitmonchan", "lickitung", "weezing", "rhydon", "chansey", "tangela", "kangaskhan", "seadra", "seaking", "starmie", "mr.mime", "scyther", "jynx", "electabuzz", "tauros", "gyarados", "lapras", "ditto", "vaporeon", "jolteon", "flareon", "porygon", "omastar", "kabutops", "aerodactyl", "snorlax", "dragonite", ...legendaries.red],
	blue: ["venusaur", "charizard", "blastoise", "butterfree", "beedrill", "pidgeot", "raticate", "fearow", "raichu", "sandslash", "nidoqueen", "nidoking", "clefable", "ninetales", "wigglytuff", "golbat", "parasect", "venomoth", "dugtrio", "persian", "golduck", "poliwrath", "alakazam", "machamp", "victreebel", "tentacruel", "golem", "rapidash", "slowbro", "magneton", "farfetchd", "dodrio", "dewgong", "muk", "cloyster", "gengar", "onix", "hypno", "kingler", "electrode", "exeggutor", "marowak", "hitmonlee", "hitmonchan", "lickitung", "weezing", "rhydon", "chansey", "tangela", "kangaskhan", "seadra", "seaking", "starmie", "mr.mime", "jynx", "magmar", "pinsir", "tauros", "gyarados", "lapras", "ditto", "vaporeon", "jolteon", "flareon", "porygon", "omastar", "kabutops", "aerodactyl", "snorlax", "dragonite", ...legendaries.blue],
	yellow: ["venusaur", "charizard", "blastoise", "butterfree", "pidgeot", "raticate", "fearow", "pikachu", "sandslash", "nidoqueen", "nidoking", "clefable", "ninetales", "wigglytuff", "golbat", "vileplume", "parasect", "venomoth", "dugtrio", "golduck", "primeape", "arcanine", "poliwrath", "alakazam", "machamp", "victreebel", "tentacruel", "golem", "rapidash", "slowbro", "magneton", "farfetchd", "dodrio", "dewgong", "muk", "cloyster", "gengar", "onix", "hypno", "kingler", "electrode", "exeggutor", "marowak", "hitmonlee", "hitmonchan", "lickitung", "rhydon", "chansey", "tangela", "kangaskhan", "seadra", "seaking", "starmie", "mr.mime", "scyther", "pinsir", "tauros", "gyarados", "lapras", "ditto", "vaporeon", "jolteon", "flareon", "porygon", "omastar", "kabutops", "aerodactyl", "snorlax", "dragonite", ...legendaries.yellow],
	gold: ["meganium", "typhlosion", "feraligatr", "pidgeot", "fearow", "noctowl", "raticate", "furret", "raichu", "butterfree", "beedrill", "ariados", "golem", "crobat", "clefable", "wigglytuff", "togetic", "sandslash", "arbok", "dunsparce", "ampharos", "quagsire", "gengar", "unown", "steelix", "victreebel", "jumpluff", "parasect", "poliwrath", "politoed", "gyarados", "seaking", "slowbro", "slowking", "vileplume", "bellossom", "hypno", "alakazam", "ditto", "forretress", "nidoqueen", "nidoking", "yanma", "sunflora", "exeggutor", "sudowoodo", "wobbuffet", "venomoth", "scizor", "pinsir", "heracross", "weezing", "muk", "magneton", "electrode", "aipom", "granbull", "arcanine", "stantler", "azumarill", "dugtrio", "primeape", "golduck", "machamp", "hitmonlee", "hitmonchan", "hitmontop", "girafarig", "tauros", "miltank", "magmar", "jynx", "electabuzz", "mr-mime", "smeargle", "farfetchd", "xatu", "qwilfish", "tentacruel", "kingler", "shuckle", "starmie", "cloyster", "corsola", "octillery", "lanturn", "dewgong", "lickitung", "tangela", "vaporeon", "jolteon", "flareon", "espeon", "umbreon", "kingdra", "gligar", "piloswine", "ursaring", "mantine", "dodrio", "rapidash", "marowak", "kangaskhan", "rhydon", "murkrow", "houndoom", "magcargo", "sneasel", "misdreavus", "porygon2", "blissey", "lapras", "omastar", "kabutops", "aerodactyl", "snorlax", "venusaur", "charizard", "blastoise", "dragonite", "tyranitar", ...legendaries.gold],
	silver: ["meganium", "typhlosion", "feraligatr", "pidgeot", "fearow", "noctowl", "raticate", "furret", "raichu", "butterfree", "beedrill", "ledian", "golem", "crobat", "clefable", "wigglytuff", "togetic", "sandslash", "arbok", "dunsparce", "ampharos", "quagsire", "gengar", "unown", "steelix", "victreebel", "jumpluff", "parasect", "poliwrath", "politoed", "gyarados", "seaking", "slowbro", "slowking", "vileplume", "bellossom", "hypno", "alakazam", "ditto", "forretress", "nidoqueen", "nidoking", "yanma", "sunflora", "exeggutor", "sudowoodo", "wobbuffet", "venomoth", "scizor", "pinsir", "heracross", "weezing", "muk", "magneton", "electrode", "aipom", "granbull", "ninetales", "stantler", "azumarill", "dugtrio", "persian", "golduck", "machamp", "hitmonlee", "hitmonchan", "hitmontop", "girafarig", "tauros", "miltank", "magmar", "jynx", "electabuzz", "mr-mime", "smeargle", "farfetchd", "xatu", "qwilfish", "tentacruel", "kingler", "shuckle", "starmie", "cloyster", "corsola", "octillery", "lanturn", "dewgong", "lickitung", "tangela", "vaporeon", "jolteon", "flareon", "espeon", "umbreon", "kingdra", "delibird", "piloswine", "donphan", "skarmory", "dodrio", "rapidash", "marowak", "kangaskhan", "rhydon", "murkrow", "houndoom", "magcargo", "sneasel", "misdreavus", "porygon2", "blissey", "lapras", "omastar", "kabutops", "aerodactyl", "snorlax", "venusaur", "charizard", "blastoise", "dragonite", "tyranitar", ...legendaries.silver],
	crystal: ["meganium", "typhlosion", "feraligatr", "pidgeot", "fearow", "noctowl", "raticate", "furret", "raichu", "butterfree", "beedrill", "ariados", "ledian", "golem", "crobat", "clefable", "wigglytuff", "togetic", "sandslash", "arbok", "dunsparce", "quagsire", "gengar", "unown", "steelix", "victreebel", "jumpluff", "parasect", "poliwrath", "politoed", "gyarados", "seaking", "slowbro", "slowking", "vileplume", "bellossom", "hypno", "alakazam", "ditto", "forretress", "nidoqueen", "nidoking", "yanma", "sunflora", "exeggutor", "sudowoodo", "wobbuffet", "venomoth", "scizor", "pinsir", "heracross", "weezing", "muk", "magneton", "electrode", "aipom", "granbull", "arcanine", "stantler", "azumarill", "dugtrio", "persian", "golduck", "machamp", "hitmonlee", "hitmonchan", "hitmontop", "tauros", "miltank", "magmar", "jynx", "electabuzz", "mr-mime", "smeargle", "farfetchd", "xatu", "qwilfish", "tentacruel", "kingler", "shuckle", "starmie", "cloyster", "corsola", "lanturn", "dewgong", "lickitung", "tangela", "vaporeon", "jolteon", "flareon", "espeon", "umbreon", "kingdra", "gligar", "delibird", "piloswine", "ursaring", "donphan", "mantine", "skarmory", "dodrio", "rapidash", "marowak", "kangaskhan", "rhydon", "murkrow", "houndoom", "magcargo", "sneasel", "misdreavus", "porygon2", "blissey", "lapras", "omastar", "kabutops", "aerodactyl", "snorlax", "venusaur", "charizard", "blastoise", "dragonite", "tyranitar", ...legendaries.crystal],
	ruby: ["sceptile", "blaziken", "swampert", "mightyena", "linoone", "beautifly", "dustox","shiftry", "swellow", "pelipper", "gardevoir", "masquerain", "breloom", "slaking", "alakazam", "ninjask", "shedinja", "exploud", "hariyama", "seaking", "gyarados", "azumarill", "golem", "nosepass", "delcatty", "crobat", "tentacruel", "mawile", "aggron", "machamp", "medicham", "manectric", "plusle", "minun", "magneton", "electrode", "volbeat", "illumise", "vileplume", "bellossom", "dodrio", "roselia", "swalot", "sharpedo", "wailord", "camerupt", "magcargo", "torkoal", "muk", "weezing", "grumpig", "sandslash", "spinda", "skarmory", "flygon", "cacturne", "altaria", "zangoose", "solrock", "whiscash", "crawdaunt", "claydol", "cradily", "armaldo", "wigglytuff", "milotic", "castform", "starmie", "kecleon", "banette", "dusclops", "tropius", "chimecho", "absol", "ninetales", "raichu", "golduck", "wobbuffet", "xatu", "girafarig", "donphan", "pinsir", "heracross", "rhydon", "glalie", "walrein", "huntail", "gorebyss", "relicanth", "corsola", "lanturn", "luvdisc", "kingdra", "salamence", "metagross", ...legendaries.ruby],
	sapphire: ["sceptile", "blaziken", "swampert", "mightyena", "linoone", "beautifly", "dustox", "ludicolo", "swellow", "pelipper", "gardevoir", "masquerain", "breloom", "slaking", "alakazam", "ninjask", "shedinja", "exploud", "hariyama", "seaking", "gyarados", "azumarill", "golem", "nosepass", "delcatty", "crobat", "tentacruel", "sableye", "aggron", "machamp", "medicham", "manectric", "plusle", "minun", "magneton", "electrode", "volbeat", "illumise", "vileplume", "bellossom", "dodrio", "roselia", "swalot", "sharpedo", "wailord", "camerupt", "magcargo", "torkoal", "muk", "weezing", "grumpig", "sandslash", "spinda", "skarmory", "flygon", "cacturne", "altaria", "seviper", "lunatone", "whiscash", "crawdaunt", "claydol", "cradily", "armaldo", "wigglytuff", "milotic", "castform", "starmie", "kecleon", "banette", "dusclops", "tropius", "chimecho", "absol", "ninetales", "raichu", "golduck", "wobbuffet", "xatu", "girafarig", "donphan", "pinsir", "heracross", "rhydon", "glalie", "walrein", "huntail", "gorebyss", "relicanth", "corsola", "lanturn", "luvdisc", "kingdra", "salamence", "metagross", ...legendaries.sapphire],
	emerald: ["sceptile", "blaziken", "swampert", "mightyena", "linoone", "beautifly", "dustox", "ludicolo","shiftry", "swellow", "pelipper", "gardevoir", "breloom", "slaking", "alakazam", "ninjask", "shedinja", "exploud", "hariyama", "seaking", "gyarados", "azumarill", "golem", "nosepass", "delcatty", "crobat", "tentacruel", "sableye", "mawile", "aggron", "machamp", "manectric", "plusle", "minun", "magneton", "electrode", "volbeat", "illumise", "vileplume", "bellossom", "dodrio", "swalot", "sharpedo", "wailord", "camerupt", "magcargo", "torkoal", "muk", "weezing", "grumpig", "sandslash", "spinda", "skarmory", "flygon", "cacturne", "altaria", "seviper", "solrock", "whiscash", "crawdaunt", "claydol", "cradily", "armaldo", "wigglytuff", "milotic", "castform", "starmie", "kecleon", "banette", "dusclops", "tropius", "chimecho", "absol", "ninetales", "raichu", "golduck", "wobbuffet", "xatu", "girafarig", "donphan", "pinsir", "heracross", "rhydon", "glalie", "walrein", "huntail", "gorebyss", "relicanth", "corsola", "lanturn", "luvdisc", "kingdra", "salamence", "metagross", ...legendaries.emerald],
	fireRed: ["venusaur", "charizard", "blastoise", "butterfree", "beedrill", "pidgeot", "raticate", "fearow", "arbok", "raichu", "nidoqueen", "nidoking", "clefable", "wigglytuff", "golbat", "vileplume", "parasect", "venomoth", "dugtrio", "golduck", "primeape", "arcanine", "poliwrath", "alakazam", "machamp", "tentacruel", "golem", "rapidash", "slowbro", "magneton", "farfetchd", "dodrio", "dewgong", "muk", "cloyster", "gengar", "onix", "hypno", "kingler", "electrode", "exeggutor", "marowak", "hitmonlee", "hitmonchan", "lickitung", "weezing", "rhydon", "chansey", "tangela", "kangaskhan", "seadra", "seaking", "starmie", "mr.mime", "scyther", "jynx", "electabuzz", "tauros", "gyarados", "lapras", "ditto", "vaporeon", "jolteon", "flareon", "porygon", "omastar", "kabutops", "aerodactyl", "snorlax", "dragonite", ...legendaries.fireRed],
	leafGreen: [], // need to update the above array with FR version exclusives (different to R)
	diamond: [],
	pearl: [],
	platinum: [],
	heartGold: [],
	soulSilver: [],
	black: [],
	white: [],
	blackTwo: [],
	whiteTwo: [],
	x: [],
	y: [],
	omegaRuby: [],
	alphaSapphire: [],
	sun: [],
	moon: [],
	ultraSun: [],
	ultraMoon: [],
	letsGoPikachu: [],
	letsGoEevee: [],
	sword: [],
	shield: [],
	isleOfArmor: [],
	crownOfTundra: {
		sword: [],
		shield: []
	},
	brilliantDiamond: [],
	shiningPearl: [],
	legendsArceus: [],
	scarlet: [],
	violet: [],
	theTealMask: [],
	theIndigoDisk: []
}

export default versions;



