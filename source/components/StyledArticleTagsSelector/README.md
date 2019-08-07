Defaults:

```js
const faker = require('faker');
let searchResults = null;

function generateEntry (q) {
    return ({
        id: faker.random.number(100).toString(),
        title: `${q}${faker.random.words(faker.random.number(2) + 1)}`,
    });
}

function setSearchResults(query) {
    if (!query) {
        searchResults = null;
    }

    const count = Math.floor(Math.random() * 3 + 3);
    searchResults = (new Array(count)).fill(null).map(() => generateEntry(query));

    console.log('searchResults', searchResults);
}

<StyledArticleTagsSelector
    communityName="testCommunity"
    tags={[
        { id: '106', title: 'Ardvark' },
        { id: '108', title: 'ArdvarkApple' },
    ]}
    maxAllowed={10}
    suggestedTags={[
        { id: '1', title: 'Battle Pass Season 7' },
        { id: '2', title: 'Add Ons' },
    ]}
    searchResults={searchResults}
    onSearch={(q) => { console.log('onSearch', q); setSearchResults(q); }}
    onAddTag={(tag) => console.log('onAddTag', tag)}
    onRemoveTag={(tag) => console.log('onRemoveTag', tag)}
    onSuggestedTag={(tag) => console.log('onSuggestedTag', tag)}
/>
```
