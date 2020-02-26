Defaults:

```js
<Dropdown toggle="Toggle dropdown">
    <p style={{padding: '12px'}}>I am a text inside dropdown!</p>
</Dropdown>
```

Dropdown using dropdown-tiny chevron:
```js
<Dropdown toggle="Toggle dropdown" iconName="dropdown-tiny">
    <p style={{padding: '12px'}}>I am a text inside dropdown!</p>
</Dropdown>
```

Dropdown using more-small button:
```js
<Dropdown toggle="More button" iconName="more">
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
