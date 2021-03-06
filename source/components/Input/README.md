An empty input:
```js
<Input label="An empty input" />
```

An empty `email` input with hint:
```js
<Input label="E-mail" type="email" hint="Type your e-mail" />
```

Other available types are: `text` (default), `number`, `email`, `search`, `tel`, `url` and `password`.


An empty email input with hint (node):
```js
<Input label="Text" hint={<strong>STRONG hint</strong>} />
```

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

Input with placeholder:
```js
<Input placeholder="lorem ipsum" />
```

A non-empty input with the error state:
```js
<Input label="Some input" value="lorem ipsum" status="error" hint="Need something else" />
```

An non-empty textarea:
```js
<Input label="Multiline input" value="This is a value" type="multiline" rows={3} />
```

An resizeable textarea:
```js
<Input label="Multiline resizeable textarea" value="This is a value" type="multiline" rows={3} resize />
```

An autoresizeable textarea:
```js
<Input label="Multiline autoresizeable textarea" value="This is a value" type="multiline" resize="auto" />
```

An autoresizeable textarea with custom initial number of rows:
```js
<Input label="Multiline autoresizeable textarea" value="This is a value" type="multiline" resize="auto" rows={1} />
```
