Click the theme buttons to re-initialize examples.

```js
<StyledCountdown onTick={value => console.log("Countdown: ", value)} />
```

This timer is always stopped:

```js
<StyledCountdown stop onTick={value => console.log("Stopped countdown: ", value)} />
```
