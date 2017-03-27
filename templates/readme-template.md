# {{title}}
## {{author}}
{{#each summary}}

{{this}}
{{/each}}

## Tile Data
{{#each tiles}}

### {{name}}
<img src="tiles/rendered/{{assetId}}.png" width="200px"/>
{{#if shield}}
- **Shield Zone**: Double points if controlling this tile as part of a region
{{/if}}
{{/each}}
