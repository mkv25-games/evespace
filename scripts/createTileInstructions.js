const template = `{
    "asset": "../tiles/rendered/{{assetId}}.png",
    "template": "/tile-frame.html",
    "renderer": {
        "$ref": "/data/tile-renderer.json"
    },
    "data": {
        "$ref": "/data/tiles/{{assetId}}.json"
    }
}`;

const zp = (d) => (d < 10) ? `0${d}` : `${d}`;

const fs = require('fs');
const instructions = [];
for(var i=1; i<=24; i++) {
  const index = zp(i);
  const assetId = `tile-${index}`;
  const copy = template.replace(/{{assetId}}/g, assetId);
  const data = JSON.parse(copy);

  instructions.push(data);
}

fs.writeFileSync('instructions/01-tile-instructions.json', JSON.stringify(instructions, null, '  '), 'utf8');

console.log(instructions)
