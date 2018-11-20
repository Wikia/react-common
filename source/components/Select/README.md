A select input. For post-interaction events (`onBlur`, `onChange`) the signature is `onX(value, label)`
for single-value selects, and `onX([{value, label}, ...])` for multi-select

Basic usage:
```js
<Select
    options={[
        // use createOption(val, label) for these
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
        // use createOption(val, label) for these
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
        // use createOption(val, label) for these
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
<Select
    multi
    value={[1, 2, "five"]}
    options={[
        // use createOption(val, label) for these
        {value: 1, label: "label 1"},
        {value: 2, label: "label 2"},
        {value: 3, label: "label 3"},
        {value: 4, label: "label 4"},
        {value: "five", label: "label 5"},
    ]}
/>
```

Controlled single-input
```js
<Select
    value={1}
    options={[
        // use createOption(val, label) for these
        {value: 1, label: "label 1"},
        {value: 2, label: "label 2"},
        {value: 3, label: "label 3"},
    ]}
/>
```
