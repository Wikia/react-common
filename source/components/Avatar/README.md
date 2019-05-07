Defaults:

```js
<div>
    <Avatar />
    <Avatar
        linkBuilder={avatarImage => (
            <a className="my-custom-link" href="#">
                {avatarImage}
            </a>
        )}
    />
    <Avatar userId="9876017" />
</div>
```

Avatar with badges

```js
<div>
    <Avatar badge="sysop" />
    <Avatar badge="content-moderator" />
    <Avatar badge="discussion-moderator" />
    <Avatar badge="global-discussions-moderator" />
    <Avatar badge="helper" />
    <Avatar badge="staff" />
    <Avatar badge="vstf" />
</div>
```
