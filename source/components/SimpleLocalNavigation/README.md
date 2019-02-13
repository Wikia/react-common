Open this example in the new page to see the difference:

```js
const { default: SimpleLocalNavigation, ACTIVE_CLASS_NAME } = require('./index');

class SimpleLocalNavigationTest1 extends React.Component {
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
            <SimpleLocalNavigation>
                <span
                    className={this.state.value === 0 ? ACTIVE_CLASS_NAME : ''}
                    onClick={() => this.onChange(0)}
                >
                    Foo
                </span>
                <span
                    className={this.state.value === 1 ? ACTIVE_CLASS_NAME : ''}
                    onClick={() => this.onChange(1)}
                >
                    Bar
                </span>
                <span
                    className={this.state.value === 2 ? ACTIVE_CLASS_NAME : ''}
                    onClick={() => this.onChange(2)}
                >
                    Third option
                </span>
            </SimpleLocalNavigation>
        );
    }
}

<SimpleLocalNavigationTest1 />
```
