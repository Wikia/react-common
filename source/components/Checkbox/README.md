Defaults:
```js
initialState = {
    checkbox1: true,
    checkbox2: false,
};
<div>
<Checkbox isChecked={state.checkbox1} onChange={() => setState({checkbox1: !state.checkbox1})}>Default</Checkbox>
<Checkbox className="extra-class-name" isChecked={state.checkbox2} onChange={() => setState({checkbox2: !state.checkbox2})}>Default</Checkbox>
</div>
```
