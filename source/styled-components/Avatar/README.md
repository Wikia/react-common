Defaults:
```js
// Avatar with known image path
<Avatar src="path/to/known/image.jpg" />

// Or pass user ID to fetch avatar src from service
<Avatar userId="1234" />

// Using a custom link builder
<Avatar linkBuilder={(avatarImage) => (<a className="my-custom-link" href="#">{avatarImage}</a>)} />
```

Avatar with badges

```js
<div>
    <Avatar badge="admin" />
    <Avatar badge="content-moderator" />
    <Avatar badge="discussion-moderator" />
    <Avatar badge="global-discussions-moderator" />
    <Avatar badge="helper" />
    <Avatar badge="staff" />
    <Avatar badge="vstf" />
</div>
```
