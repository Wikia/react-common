```js
class SwitchTest1 extends React.Component {
    constructor() {
        this.state = {
            value: 0,
        };
        this.onChange = this.onChange.bind(this);
    }

    onChange(value) {
        this.setState({value});
    }

    render() {
        return (
            <Switch.Wrapper>
                <Switch.Item onClick={() => this.onChange(0)} active={this.state.value === 0}>Item 0</Switch.Item>
                <Switch.Item onClick={() => this.onChange(1)} active={this.state.value === 1}>Item 1</Switch.Item>
                <Switch.Item onClick={() => this.onChange(2)} active={this.state.value === 2}>Item 2</Switch.Item>
            </Switch.Wrapper>
        );
    }
}

<SwitchTest1 />
```
