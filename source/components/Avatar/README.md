Defaults:
```js
<div>
    <Avatar />
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
