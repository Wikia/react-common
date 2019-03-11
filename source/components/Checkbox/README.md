Defaults:
```js
initialState = {
    checkbox1: true,
    checkbox2: false,
};
<div>
    <Checkbox checked={state.checkbox1} onChange={() => setState({checkbox1: !state.checkbox1})}>Default checkbox</Checkbox>
    <Checkbox className="extra-class-name" checked={state.checkbox2} onChange={() => setState({checkbox2: !state.checkbox2})}>Extra className</Checkbox>
</div>
```

Disabled checkbox:
```js
initialState = {
    checkbox3: false,
    checkbox4: true,
};

<div>
    <Checkbox disabled checked={state.checkbox3} onChange={() => setState({checkbox3: !state.checkbox3})}>Disabled unchecked checkbox</Checkbox>
    <Checkbox disabled checked={state.checkbox4} onChange={() => setState({checkbox4: !state.checkbox4})}>Disabled checked checkbox</Checkbox>
</div>
```

