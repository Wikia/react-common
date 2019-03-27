Defaults:

```js
<div>
    <AvatarStyled />
    <AvatarStyled src="https://static.wikia.nocookie.net/438f6e23-1a0f-4351-a34d-6f8fa734a246" />
    <AvatarStyled userId="9876017" />
    <AvatarStyled linkBuilder={(avatarImage) => (<a className="my-custom-link" href="#">{avatarImage}</a>)} />
</div>
```

With hover effect:

```js
<div>
    <AvatarStyled href="https://fandom.com" className="extra-class-name" />
    <AvatarStyled href="https://fandom.com" className="extra-class-name" userId="9876017" />
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
