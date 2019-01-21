Defaults:

```js
<Dropdown toggle="Toggle dropdown" canFlip>
    <p style={{padding: '12px'}}>I am a text inside dropdown!</p>
</Dropdown>
```

Nested dropdown:

```js
<Dropdown toggle="Toggle dropdown">
    <p>I am a text inside dropdown!</p>
    <Dropdown toggle="Toggle dropdown" isLevel2>
        <p>I am a text inside dropdown!</p>
        <p>I am a text inside dropdown!</p>
    </Dropdown>
    <p>I am a text inside dropdown!</p>
</Dropdown>
```
