"use strict";

const dex = require('./dex.js').dex;
const megas = require('./dex.js').megas;

const formats = {
	"pokesho": ["http://www.pokestadium.com/assets/img/sprites/misc/pokesho/", ".gif"],
	"icons": ["http://www.pokestadium.com/assets/img/sprites/misc/icons/", ".png"],
	"shuffle": ["http://www.pkparaiso.com/imagenes/shuffle/sprites/", ".png", "paraiso"],
	"xyanimated": ["http://play.pokemonshowdown.com/sprites/xyani/", ".gif"],
	"xy": ["http://play.pokemonshowdown.com/sprites/xy/", ".png"],
	"smd": ["http://www.serebii.net/supermysterydungeon/pokemon/", ".png", "serebii"],
};

function hash (pokemon, format) {//gets dex number. eventually add support for megas
	pokemon = pokemon[0].toUpperCase() + pokemon.substr(1);
	if (dex[pokemon]) return dex[pokemon];
	if (~pokemon.indexOf("-")) {
		let data = dex[pokemon.substr(0, pokemon.indexOf("-")).trim()];
		console.log(pokemon[pokemon.indexOf("-") + 1]);
		if (format === "serebii") data += "-" + pokemon[pokemon.indexOf("-") + 1];
		if (format === "paraiso" && ~pokemon.indexOf("mega")) data += "-mega"; //todo: add support for formes
		return data;
	}
	return pokemon;
}

function getImgs (format, team) {
	let output = "";
	if (typeof(team) !== "object") team = packTeam(team);
	let pokemon = team.pokemon;
	for (let j = 0; j < pokemon.length; j++) {
		output += getImg (format, pokemon[j].toLowerCase());
	}
	return output;
}

function getImg (format, pokemon) {
	if (!formats[format]) return;
	let fdata= formats[format];
	let output = '[img]' + fdata[0] + (fdata[2] ? hash(pokemon, fdata[2]) : pokemon) + fdata[1] + '[/img]';
	return output;
}

function buildingProcess (format, pokemon, f, fe) {
	let output = ["","","","","",""];
	console.log(output);
	for (let i = 0; i < pokemon.length; i++) {
		let img = getImg(format, pokemon[i].toLowerCase());
		for (let j = i; j < pokemon.length; j++) {
			output[j] += img;
		}
	}
	for (let k = 0; k < output.length; k++) {
		output[k] += "\n" + f + "**Why did you choose this pokemon?**" + fe + "\n";
	}
	return output.join("");
}

function removeNick (line) {
	if (!~line.indexOf('(')) return line.trim();
	let start = line.indexOf('(') + 1;
	let len = line.indexOf(')') - start;
	line = line.substr(start, len).trim();
	return line;
}

function checkMega (line) {
	let pokemon = line[0].toLowerCase();
	let item = line[1].toLowerCase().trim();
	console.log(line[0])
	if (!megas[pokemon]) return line[0];
	if (megas[pokemon]) {
		if (typeof(megas[pokemon]) !== "object" && megas[pokemon] === item) {
			return line[0] + '-Mega';
		} else if (typeof(megas[pokemon]) === "object") {
			if (megas[pokemon][0] === item) return line[0] + '-Mega-X';
			else if (megas[pokemon][1] === item) return line[0] + '-Mega-Y';
		} else {
			return line[0];
		}
	}
}

function toTitle (text, options) { //This function is a disaster lol
	let output = "[" + options.align + "][FONT=" + options.tfont + "][SIZE=" + options.size + "]";
	if (options.bold) output += "[B]";
	if (options.underlined) output += "[U]";
	if (options.bold === "first") text = text[0] + "[/B]" + text.substr(1);
	output += text;
	if (options.bold && options.bold !== "first") output += "[/B]";
	if (options.underlined) output += "[/U]";
	output += "[/SIZE][/FONT][/" + options.align + "]";
	return output;
}

function rmt (team, options) {
	console.log(options);
	let data = packTeam(team);
	let f = "[FONT=" + options.font + "]";
	let fe = "[/FONT]";
	let output = "";
	output += "[center]" + getImgs(options.imgFormat, data) + "[/center]\n\n" +
		toTitle("Introduction", options) + "\n\n" + f + "**Introduction goes here**" + fe + "\n\n";
	if (options.process) output+= toTitle("Teambuilding Process", options) + "\n\n" +
		"[hide]" + buildingProcess(options.processFormat, data.pokemon, f, fe) + "[/hide]\n" +
		"\n" +  toTitle("The Team", options) + "\n\n";
	output += buildSets(data, options, f, fe);
	output += toTitle("Conclusion", options) + "\n\n" + f + "**Conclusion goes here**" + fe + "\n\n" +
		"[hide=Importable]" + data.importable + "[/hide]";
	return output;
}

function buildSets (data, options, f, fe) {
	let output = "";
	console.log(options.setFormat);
	switch (options.setFormat) {
	case 0: //default
		for (let i = 0; i < data.pokemon.length; i++) {
			output += "[" + options. align + "]" + getImg(options.imgFormat, data.pokemon[i].toLowerCase()) + "\n" +
				data.pokenames[i] + " @ " + data.items[i] + "\n" +
				"Ability: " + data.abilities[i] + "\n" +
				"EVs: " + data.evs[i] + "\n" +
				data.natures[i] + " Nature \n" +
				(data.ivs[i] ? "IVs: " + data.ivs[i] + "\n" : "");
			for (let k = 0; k < data.moves[i].length; k++) {
				output += "- " + data.moves[i][k] + "\n";
			}
		output += "[/" + options.align + "]\n" + f + "" + f + "**Why did you choose this pokemon? What does it do for your team?**" + fe + "" + fe + "\n\n";
		}
	break;
	case 1: //default with bold
		for (let i = 0; i < data.pokemon.length; i++) {
			output += "[LEFT]" + getImg(options.imgFormat, data.pokemon[i].toLowerCase()) + "\n" +
				"[B]" + data.pokenames[i] + "[/B]" + (data.items[i] ? " @ " + data.items[i] : "") + "\n" +
				"[B]Ability:[/B] " + data.abilities[i] + "\n" +
				"[B]Nature:[/B] " + data.natures[i] + "\n" +
				"[B]EVs:[/B] " + data.evs[i] + "\n" +
				(data.ivs[i] ? "[B]IVs:[/B] " + data.ivs[i] + "\n" : "") +
				"[B]Moves:[/B] ";
			for (let k = 0; k < data.moves[i].length; k++) {
				if (k !== 0) output+= " | ";
				output += data.moves[i][k];
			}
		output += "[/LEFT]\n\n" + f + "**Why did you choose this pokemon? What does it do for your team?**" + fe + "\n\n";
		}
	break;
	case 2: //trinitrotoluene
		for (let i = 0; i < data.pokemon.length; i++) {
			output += "[B][SIZE=2][LEFT][INDENT]" + getImg(options.imgFormat, data.pokemon[i].toLowerCase()) + "[/INDENT]\n" +
				data.pokenames[i] + (data.items[i] ? " @ " + data.items[i] : "") + " | " +
				data.abilities[i] + "\n" +
				data.natures[i] + " | " +
				data.evs[i] + "\n" +
				(data.ivs[i] ? "IVs: " + data.ivs[i] + "\n" : "");
			for (let k = 0; k < data.moves[i].length; k++) {
				output += "• " + data.moves[i][k] + "\n";
			}
		output += "[/B][/SIZE][/LEFT]" + f + "**Why did you choose this pokemon? What does it do for your team?**" + fe + "\n\n";
		}
	break;
	case 3: //Pearl
		for (let i = 0; i < data.pokemon.length; i++) {
			output += "[SIZE=2][CENTER]" + getImg(options.imgFormat, data.pokemon[i].toLowerCase()) + "\n" +
				(data.items[i] ?
					"@ [IMG]http://www.serebii.net/itemdex/sprites/" + data.items[i].toLowerCase().split(" ").join("") + ".png[/IMG]" :
					"") + "\n" +
				"[B]Ability-[/B] " + data.abilities[i] + "\n" +
				"[B]EVs-[/B] " + data.evs[i].split(' / ').join(' | ') + "\n" +
				(data.ivs[i] ? "[B]IVs-[/B] " + data.ivs[i] + "\n" : "") +
				"[B]Nature- [/B]" + data.natures[i] + "\n\n";
			for (let k = 0; k < data.moves[i].length; k++) {
				if (k !== 0) output+= " | ";
				output += data.moves[i][k];
			}
		output += "[/SIZE][/CENTER]\n" + f + "**Why did you choose this pokemon? What does it do for your team?**" + fe + "\n\n";
		}
	break;
	}
	return output;
}

function packTeam (importable) {
	let team = {
		"pokemon": [],
		"pokenames": [],
		"items": [],
		"evs": [],
		"abilities": [],
		"natures": [],
		"moves": [],
		"ivs": []
	};
	team.importable = importable;
	let lines = importable.split('\n');
	let data = [];
	let dataIndex = 0;
	data.push([lines[0]]);
	for (let i = 1; i < lines.length; i++) {
		if (lines[i].length < 2) continue;
		if (lines[i-1].length < 2) {
			dataIndex++;
			data.push([lines[i]]);
		} else {
			data[dataIndex].push(lines[i].trim());
		}
	}
	for (let j = 0; j < data.length; j++) {
		for (let k = 0; k < data[j].length; k++) {
			let l = data[j][k];
			if (k === 0) {
				let pokeno = team.pokemon.length;
				if (pokeno > team.evs.length) team.evs.push("No EVs");
				if (pokeno > team.abilities.length) team.abilities.push("No Ability");
				if (pokeno > team.natures.length) team.natures.push("No Nature");
				if (pokeno > team.ivs.length) team.ivs.push(false);
				let line = l.split(" @ ");
				team.pokenames.push(line[0]);
				//team.pokemon.push();
				line [0] = removeNick(line[0]);
				team.pokemon.push(checkMega(line));
				line[1] ? team.items.push(line[1].trim()) : team.items.push(false);
			} else if (~l.indexOf("EVs: ")) {
				team.evs.push(l.substr(l.indexOf(' ')).trim());
			} else if (~l.indexOf("Ability: ")) {
				team.abilities.push(l.substr(l.indexOf(' ')).trim());
			} else if (~l.indexOf("IVs: ")) {
				team.ivs.push(l.substr(l.indexOf(' ')).trim());
			} else if (~l.indexOf("Nature")) {
				team.natures.push(l.substr(0, l.indexOf(' ')).trim());
			} else if (~l.indexOf("- ")) {
				let pokeno = team.pokemon.length -1;
				if (team.moves[pokeno]) {
					team.moves[pokeno].push(l.substr(l.indexOf(" ")).trim());
				} else {
					team.moves.push([l.substr(l.indexOf(" ")).trim()]);
				}
			}
			let pokeno = team.pokemon.length;
			if (pokeno > team.evs.length) team.evs.push("No EVs");
			if (pokeno > team.abilities.length) team.abilities.push("No Ability");
			if (pokeno > team.natures.length) team.natures.push("No Nature");
			if (pokeno > team.ivs.length) team.ivs.push(false);
		}
	}
	return team;
}

module.exports.rmt = rmt; //fender sucks
