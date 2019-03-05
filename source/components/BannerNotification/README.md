By default its rendered without close button:
```js
<BannerNotification type={'message'} text={'lorem ipsum - messge'} />
```

But it can be rendered with close buttton:
```js
<BannerNotification type={'alert'} text={'lorem ipsum - alert'} onClose={() => alert('Click')} />
```

Or with extra HTML:
```js
<BannerNotification type={'alert'} onClose={() => alert('Click')}>
    This is a text <a href="http://example.com">with a link</a>
</BannerNotification>
```
