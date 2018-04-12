An empty input:
```js
<Input label="An empty input" />
```

An empty email input with hint:
```js
<Input label="E-mail" type="email" hint="Type your e-mail" />
```
Other available types are: `text` (default), `number`, `email`, `search`, `tel`, `url` and `password`.

A non-empty input:
```js
<Input label="A non-empty input" value="lorem ipsum" />
```

Disabled input:
```js
<Input label="Disabled input" value="lorem ipsum" disabled />
```

Readonly input:
```js
<Input label="Readonly input" value="lorem ipsum" readonly />
```

A non-empty input with the error state:
```js
<Input label="Some input" value="lorem ipsum" status="error" hint="Need something else" />
```
