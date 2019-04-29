Defaults:

```js
<div>
    <StyledAvatar />
    <StyledAvatar src="https://static.wikia.nocookie.net/438f6e23-1a0f-4351-a34d-6f8fa734a246" />
    <StyledAvatar userId="9876017" />
    <StyledAvatar
        linkBuilder={avatarImage => (
            <a className="my-custom-link" href="#">
                {avatarImage}
            </a>
        )}
    />
</div>
```

Different sizes:

```js
<div>
    <StyledAvatar size={16} />
    <StyledAvatar size={24} />
    <StyledAvatar size={48} />
    <StyledAvatar size={16} userId="9876017" />
    <StyledAvatar size={24} userId="9876017" />
    <StyledAvatar size={48} userId="9876017" />
</div>
```

With hover effect:

```js
<div>
    <StyledAvatar href="https://fandom.com" className="extra-class-name" />
    <StyledAvatar href="https://fandom.com" className="extra-class-name" userId="9876017" />
</div>
```

Avatar with badges

```js
<div>
    <StyledAvatar badge="sysop" />
    <StyledAvatar badge="content-moderator" />
    <StyledAvatar badge="discussion-moderator" />
    <StyledAvatar badge="global-discussions-moderator" />
    <StyledAvatar badge="helper" />
    <StyledAvatar badge="staff" />
    <StyledAvatar badge="vstf" />
</div>
```
