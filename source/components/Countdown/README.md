Click the theme buttons to re-initialize examples.

```js
<Countdown onTick={value => console.log("Countdown: ", value)} />
```

This timer is always stopped:

```js
<Countdown stop onTick={value => console.log("Stopped countdown: ", value)} />
```
