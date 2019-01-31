# Installation

## 1. Add it to your project

### Artifactory Setup
This setup will work for both `yarn` and `npm`. If you run into issues consult [Artifactory NPM Docs](https://www.jfrog.com/confluence/display/RTF/Npm+Registry) first

1. Verify you can login to [Artifactory Wikia](https://artifactory.wikia-inc.com/artifactory/webapp/#/home)
2. Change wikia scoped packages to use artifactory `npm config set @wikia:registry https://artifactory.wikia-inc.com/artifactory/api/npm/npm-source/`
3. Run `npm login --scope=@wikia` 
    * Use artifactory login and artifactory API key for password by going to "Edit Profile" in artifactory web ui

## 2. Use it in the code

```js static
import Button from '@wikia/react-common/components/Button';
import Icon from '@wikia/react-common/components/Button';


...


<div>
    <Button>
        <Icon name="camera" />
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
