A select input. For post-interaction events (`onBlur`, `onChange`) the signature is `onX(value, label)`
for single-value selects, and `onX([{value, label}, ...])` for multi-select.

Use `Select.createOption` to create options to feed to the `options` prop.

Basic usage:
```js
<Select
    onBlur={(val, label) => console.log(val, label) }
    options={[
        {value: 1, label: "label 1"},
        {value: 2, label: "label 2"},
        {value: 3, label: "label 3"},
    ]}
/>
```

Non-searchable:
```js
<Select
    searchable={false}
    options={[
        {value: 1, label: "label 1"},
        {value: 2, label: "label 2"},
        {value: 3, label: "label 3"},
    ]}
/>
```

Loading indicator:
```js
<Select
    placeholder="Loading..."
    loading
/>
```

Multi-select
```js
<Select
    multi
    options={[
        {value: 1, label: "label 1"},
        {value: 2, label: "label 2"},
        {value: 3, label: "label 3"},
        {value: 4, label: "label 4"},
        {value: 5, label: "label 5"},
    ]}
/>
```

Controlled multi-input
```js
class ControlledMultiInput extends React.Component {
    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);
        this.state = {
            values: [1, 2, "five"],
        };
    }

    onChange(values) {
        this.setState({ values });
    }

    render() {
        return (
            <Select
                multi
                onChange={this.onChange}
                value={this.state.values}
                options={[
                    {value: 1, label: "label 1"},
                    {value: 2, label: "label 2"},
                    {value: 3, label: "label 3"},
                    {value: 4, label: "label 4"},
                    {value: "five", label: "label 5"},
                ]}
            />
        );
    }
}

<ControlledMultiInput />
```

Controlled single-input
```js
class ControlledSingleInput extends React.Component {
    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);
        this.state = {
            value: 1,
        };
    }

    onChange(value) {
        this.setState({ value });
    }

    render() {
        return (
            <Select
                onChange={this.onChange}
                value={this.state.value}
                options={[
                    {value: 1, label: "label 1"},
                    {value: 2, label: "label 2"},
                    {value: 3, label: "label 3"},
                ]}
            />
        );
    }
}

<ControlledSingleInput />
```
