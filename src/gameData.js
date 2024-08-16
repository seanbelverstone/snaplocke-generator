const versions = {
	kanto: ["red", "blue", "yellow", "fireRed", "leafGreen"],
	originalJohto: ["gold", "silver", "crystal"],
	hoenn: ["ruby", "sapphire", "emerald"],
	originalSinnoh: ["diamond", "pearl", "platinum"],
	updatedJohto: ["heartgold", "soulsilver"],
	originalUnova: ["black", "white"],
	updatedUnova: ["blackTwo", "whiteTwo"],
	kalos: ["x", "y"],
	updatedHoenn: ["omegaRuby", "alphaSapphire"],
	alola: ["sun", "moon"],
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
	red: ["articuno", "zapdos", "moltres", "mewtwo", "mew"],
	blue: ["articuno", "zapdos", "moltres", "mewtwo", "mew"],
	yellow: ["articuno", "zapdos", "moltres", "mewtwo", "mew"],
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

export const pokemonNoEvo = {
	kanto: ["onix", "lickitung", "tangela", "scyther", "electabuzz", "magmar", "porygon", "chansey", "kangaskhan", "pinsir", "tauros", "lapras", "ditto", "aerodactyl", ...legendaries.red],
	originalJohto: ["unown", "shuckle", "heracross", "delibird", "skarmory", "smeargle", "miltank", "aipom", "yanma", "murkrow", "misdreavus", "gligar", "sneasel", ...legendaries.crystal],
	hoenn: ["nosepass", "roselia", "sableye", "mawile", "plusle", "minun", "volbeat", "illumise", "torkoal", "spinda", "zangoose", "seviper", "lunatone", "solrock", "castform", "kecleon", "tropius", "absol", "relicanth", "luvdisc", ...legendaries.emerald, "jirachi", "deoxys"],
	updatedKanto: ["kangaskhan", "pinsir", "tauros", "lapras", "ditto", "aerodactyl", ...legendaries.red],
	originalSinnoh: ["pachirisu", "chatot", "spiritomb", "carnivine", "rotom", ...legendaries.platinum, "phione", "manaphy", "darkrai", "shaymin", "arceus"],
	updatedJohto: ["victini", "audino", "throh", "sawk", "maractus", "sigilyph", "emolga", "alomomola", "cryogonal", "stunfisk", "druddigon", "bouffalant", "heatmor", "durant", ...legendaries.black, "thundurus", "zekrom", "keldeo", "meloetta", "genesect"],
	originalUnova: [],
	updatedUnova: [],
	kalos: [],
	updatedHoenn: [],
	alola: [],
	updatedAlola: [],
	letsgoKanto: [], 
	galar: [],
	extendedSinnoh: [],
	hisui: [],
	paldea: []
}

// do i need this?

export default versions;