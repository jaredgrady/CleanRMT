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

var importTeam = function(text, format, templateType) {
	if (!formats[format] || !text) return format + "///" + text;
	let lines = text.split('\n');
	let data = [];
	let pokemon = [];
	let output = '';
	for (let i = 0; i < lines.length; i++) {
		if (i === 0 || lines[i - 1].length < 2) {
			let line = lines[i];
			if (~line.indexOf('(')) { //nickname
			    let start = line.indexOf('(') + 1;
			    let len = line.indexOf(')') - start;
				line = line.substr(start, len) + ' ' + line.substr(line.indexOf('@'));
			}
			data.push(line.trim().split(' @ '));
		}
	}
	pokemon = checkMega(data);
	let fdata = formats[format];
	for (let j = 0; j < pokemon.length; j++) {
		output += '[img]' + fdata[0] +
			(fdata[2] ? hash(pokemon[j]) : pokemon[j].toLowerCase()) +
			fdata[1] + '[/img]';
	}
	return output;
}

function checkMega(team) {//at the moment just a compiler
	let result = [];
	for (let i = 0; i < team.length; i++) {
		result.push(team[i][0]);
	}
	return result;
}

module.exports.importTeam = importTeam;
