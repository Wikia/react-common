Defaults:

```js
<StyledArticleTag tag="This is a default tag" />
```

With extra options

```js
<StyledArticleTag
    tag="This is a secondary/removable tag"
    removable
    secondary
    onRemove={() => console.log('Remove tag clicked')}
    onClick={() => console.log('Tag clicked')}
/>
```
