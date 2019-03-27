Defaults:

```js
<div>
    <AvatarStyled />
    <AvatarStyled src="https://vignette.wikia.nocookie.net/01fc6376-689b-4561-a3a7-68c387fd4dfc" />
    <AvatarStyled userId="9876017" />
    <AvatarStyled linkBuilder={(avatarImage) => (<a className="my-custom-link" href="#">{avatarImage}</a>)} />
</div>
```

Avatar with badges

```js
<div>
    <AvatarStyled badge="admin" />
    <AvatarStyled badge="content-moderator" />
    <AvatarStyled badge="discussion-moderator" />
    <AvatarStyled badge="global-discussions-moderator" />
    <AvatarStyled badge="helper" />
    <AvatarStyled badge="staff" />
    <AvatarStyled badge="vstf" />
</div>
```
