Defaults:
```jsx
<div>
    <StyledAvatar src="https://vignette.wikia.nocookie.net/01fc6376-689b-4561-a3a7-68c387fd4dfc" />
    <StyledAvatar userId="9876017" />
    <StyledAvatar linkBuilder={(avatarImage) => (<a className="my-custom-link" href="#">{avatarImage}</a>)} />
</div>
```

Avatar with badges

```jsx
<div>
    <StyledAvatar badge="admin" />
    <StyledAvatar badge="content-moderator" />
    <StyledAvatar badge="discussion-moderator" />
    <StyledAvatar badge="global-discussions-moderator" />
    <StyledAvatar badge="helper" />
    <StyledAvatar badge="staff" />
    <StyledAvatar badge="vstf" />
</div>
```
