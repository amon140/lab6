var palettes = require('../palettes.json');

exports.randomPalette = function(req, res) {
	// get a random palette from the top ones
	var paletteID = req.params.id;
	var randomPalette = palettes[Math.floor(palettes.length * Math.random())];
	var palette = palettes[paletteID-1];
	res.json(palette);
}