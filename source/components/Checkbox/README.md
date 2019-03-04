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
