"use strict";

const dex = require('./dex');
const formats = {
	"pokesho": ["http://www.pokestadium.com/assets/img/sprites/misc/pokesho/", ".gif"],
	"icons": ["http://www.pokestadium.com/assets/img/sprites/misc/icons/", ".png"],
	"shuffle": ["http://media.pldh.net/pokemon/shuffle/", ".png", true],
	"xyanimated": ["http://play.pokemonshowdown.com/sprites/xyani/", ".gif"],
	"xy": ["http://play.pokemonshowdown.com/sprites/xy/", ".png"],
	"smd": ["http://www.serebii.net/supermysterydungeon/pokemon/", ".png", true],
};

function hash (pokemon) {//gets dex number. eventually add support for megas
	if (dex[pokemon]) return dex[pokemon];
	if (~pokemon.indexOf("-")) {
		return dex[pokemon.substr(0, pokemon.indexOf("-")).trim()];
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
	let output = '[img]' + fdata[0] + (fdata[2] ? hash(pokemon) : pokemon) + fdata[1] + '[/img]';
	return output;
}
function buildingProcess (format, pokemon) {
	let output = ["","","","","",""];
	for (let i = 0; i < pokemon.length; i++) {
		let img = getImg(format, pokemon[i].toLowerCase());
		for (let j = i; j < pokemon.length; j++) {
			output[j] += img;
		}
	}
	for (let k = 0; k < output.length; k++) {
		output[k] += "\n**Why did you choose this pokemon?**\n";
	}
	return output.join();
}

function removeNick (line) {
	if (!~line.indexOf('(')) return line.trim();
	let start = line.indexOf('(') + 1;
	let len = line.indexOf(')') - start;
	line = line.substr(start, len).trim();
	return line;
}

function rmt (team, options) {
	let data = packTeam(team);
	let output = "[center]" + getImgs(options.imgFormat, data) + "[/center]\n\n" +
		"[SIZE=6]Introduction[/SIZE]\n\n**Introduction goes here**\n\n";
	if (options.process) output+= "[SIZE=6]Teambuilding Process[/SIZE]\n\n" +
		buildingProcess(options.processFormat, data.pokemon) + "\n" +
		"\n[SIZE=6]The Team[/SIZE]\n\n";
	for (let i = 0; i < data.pokemon.length; i++) {
		output += getImg(options.imgFormat, data.pokemon[i].toLowerCase()) + "\n" +
			data.pokenames[i] + " @ " + data.items[i] + "\n" +
			"Ability: " + data.abilities[i] + "\n" +
			"EVs: " + data.evs[i] + "\n" +
			data.natures[i] + " Nature \n";
		for (let k = 0; k < data.moves[i].length; k++) {
			output += "- " + data.moves[i][k] + "\n";
		}
		output += "\n**Why did you choose this pokemon? What does it do for your team?**\n\n";
	}
	output += "[SIZE=6]Conclusion[/SIZE]\n\n**Conclusion goes here**\n\n" +
		"[hide=importable]" + data.importable + "[/hide]";
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
		"moves": []
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
				let line = l.split(" @ ");
				team.pokemon.push(removeNick(line[0]));
				team.pokenames.push(line[0]);
				line[1] ? team.items.push(line[1].trim()) : team.items.push("No Item");
			} else if (~l.indexOf("EVs: ")) {
				team.evs.push(l.substr(l.indexOf(' ')).trim());
			} else if (~l.indexOf("Ability: ")) {
				team.abilities.push(l.substr(l.indexOf(' ')).trim());
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
		}
	}
	return team;
}

module.exports.rmt = rmt;
