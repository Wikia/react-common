A select input. For post-interaction events (`onBlur`, `onChange`) the signature is `onX(value, label)`
for single-value selects, and `onX([{value, label}, ...])` for multi-select.

Use `Select.createOption` to create options to feed to the `options` prop.

Basic usage:
```js
<Select
    options={[
        Select.createOption(1, "label 1"),
        Select.createOption(2, "label 2"),
        Select.createOption(3, "label 3"),
    ]}
/>
```

Non-searchable:
```js
<Select
    searchable={false}
    options={[
        Select.createOption(1, "label 1"),
        Select.createOption(2, "label 2"),
        Select.createOption(3, "label 3"),
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
        Select.createOption(1, "label 1"),
        Select.createOption(2, "label 2"),
        Select.createOption(3, "label 3"),
        Select.createOption(4, "label 4"),
        Select.createOption(5, "label 5"),
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
                    Select.createOption(1, "label 1"),
                    Select.createOption(2, "label 2"),
                    Select.createOption(3, "label 3"),
                    Select.createOption(4, "label 4"),
                    Select.createOption("five", "label 5"),
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
                    Select.createOption(1, "label 1"),
                    Select.createOption(2, "label 2"),
                    Select.createOption(3, "label 3"),
                ]}
            />
        );
    }
}

<ControlledSingleInput />
```
