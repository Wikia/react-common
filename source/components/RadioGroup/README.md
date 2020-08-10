Defaults:
```jsx
initialState = {
    value: 'dog'
};
<RadioGroup title="Cats or dogs?">
    <Radio value="cat" checked={state.value === 'cat'} onChange={() => setState({ value: 'cat' })}>Cat</Radio>
    <Radio value="dog" checked={state.value === 'dog'} onChange={() => setState({ value: 'dog' })}>Dog</Radio>
</RadioGroup>
```
