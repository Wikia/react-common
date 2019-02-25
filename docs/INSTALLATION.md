## 1. Add it to your project

### 1.1. Change wikia scoped packages to use artifactory

This setup will work for both `yarn` and `npm`. If you run into issues consult [Artifactory NPM Docs](https://www.jfrog.com/confluence/display/RTF/Npm+Registry) first

```js static
$> npm config set @wikia:registry https://artifactory.wikia-inc.com/artifactory/api/npm/wikia-npm/
```

### 1.2. Add the package to `package.json`

```js static
$> yarn add @wikia/react-common
```

or

```js static
$> npm i @wikia/react-common
```

## 2. Use it in the code

```js static
import Button from '@wikia/react-common/components/Button';
import IconAdd from '@wikia/react-common/icons/IconAdd';

...

<div>
    <Button>
        <IconAdd />
        Camera
    </Button>
</div>
```

## 3. Add the CSS to your build

Make sure you include the CSS in your styles.

```scss static
@import "~@wikia/react-common/components/Icon.css";
@import "~@wikia/react-common/components/Button.css";
```
