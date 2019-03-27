Defaults:
```js
<div>
    <Avatar src="https://vignette.wikia.nocookie.net/01fc6376-689b-4561-a3a7-68c387fd4dfc" />
    <Avatar userId="9876017" />
    <Avatar linkBuilder={(avatarImage) => (<a className="my-custom-link" href="#">{avatarImage}</a>)} />
</div>
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
