Each radio must have a value assigned to it.

Defaults:
```jsx
initialState = {
    checked: undefined
};

<div>
    <Radio
        value="one"
        checked={state.checked === "one"}
        onChange={() => setState({ checked: 'one' })}
     >
        One
    </Radio>
    <Radio
        value="two"
        checked={state.checked === 'two'}
        onChange={() => setState({ checked: 'two' })}
     >
        Two
    </Radio>
</div>
```

Disabled:
```jsx
<div>
    <Radio
        value="one"
        disabled
        checked={false}
        onChange={() => {}}
     >
        Disabled
    </Radio>
</div>
```

