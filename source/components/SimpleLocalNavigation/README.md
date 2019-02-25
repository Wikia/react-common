Open this example in the new page to see the difference:

```js
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
                    className={this.state.value === 0 ? SimpleLocalNavigation.ACTIVE_CLASS_NAME : ''}
                    onClick={() => this.onChange(0)}
                >
                    Foo
                </span>
                <span
                    className={this.state.value === 1 ? SimpleLocalNavigation.ACTIVE_CLASS_NAME : ''}
                    onClick={() => this.onChange(1)}
                >
                    Bar
                </span>
                <span
                    className={this.state.value === 2 ? SimpleLocalNavigation.ACTIVE_CLASS_NAME : ''}
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
