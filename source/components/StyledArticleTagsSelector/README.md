Non-empty state:

```js
<StyledArticleTagsSelector
    communityName="testCommunity"
    accentColor="blue"
    tags={[
        { id: '106', title: 'Ardvark' },
        { id: '108', title: 'ArdvarkApple' },
    ]}
    maxAllowed={10}
    suggestedTags={[
        { id: '1', title: 'Battle Pass Season 7' },
        { id: '2', title: 'Add Ons' },
    ]}
    searchResults={[
        { id: '107', title: 'ArdvarkArmy', url: 'http://xkxd02.fandom.com/wiki/ArdvarkArmy' },
        { id: '108', title: 'ArdvarkAnarchy', url: 'http://xkxd02.fandom.com/wiki/ArdvarkAnarchy' },
    ]}
    onSearch={(q) => console.log('onSearch', q)}
    onAddTag={(tag) => console.log('onAddTag', tag)}
    onRemoveTag={(tag) => console.log('onRemoveTag', tag)}
    onSuggestedTag={(tag) => console.log('onSuggestedTag', tag)}
/>
```

Empty state:
```js
<StyledArticleTagsSelector
    communityName="testCommunity"
    maxAllowed={10}
    onSearch={(q) => console.log('onSearch', q)}
    onAddTag={(tag) => console.log('onAddTag', tag)}
    onRemoveTag={(tag) => console.log('onRemoveTag', tag)}
    onSuggestedTag={(tag) => console.log('onSuggestedTag', tag)}
/>
```

Too many tags state:
```js
<StyledArticleTagsSelector
    communityName="testCommunity"
    tags={[
        { id: '106', title: 'Ardvark' },
        { id: '108', title: 'ArdvarkApple' },
    ]}
    maxAllowed={1}
    suggestedTags={[
        { id: '1', title: 'Battle Pass Season 7' },
        { id: '2', title: 'Add Ons' },
    ]}
    onSearch={(q) => console.log('onSearch', q)}
    onAddTag={(tag) => console.log('onAddTag', tag)}
    onRemoveTag={(tag) => console.log('onRemoveTag', tag)}
    onSuggestedTag={(tag) => console.log('onSuggestedTag', tag)}
/>
```
