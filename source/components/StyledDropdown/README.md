Defaults:

```js
<StyledDropdown canFlip toggle="Toggle dropdown">
    <p style={{padding: '12px'}}>I am a text inside dropdown!</p>
</StyledDropdown>
```

Dropdown using dropdown-tiny chevron:
```js
<StyledDropdown canFlip toggle="Toggle dropdown" iconName="dropdown-tiny">
    <p style={{padding: '12px'}}>I am a text inside dropdown!</p>
</StyledDropdown>
```

Nested dropdown:

```js
<StyledDropdown canFlip toggle="Toggle dropdown">
    <p>I am a text inside dropdown!</p>
    <StyledDropdown toggle="Toggle dropdown" isLevel2>
        <p>I am a text inside dropdown!</p>
        <p>I am a text inside dropdown!</p>
    </StyledDropdown>
    <p>I am a text inside dropdown!</p>
</StyledDropdown>
```
