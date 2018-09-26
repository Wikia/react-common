By default it renders nothing:
```js
<IconSprite />{ /* add sprite so we can see icons in this example */ }
<BannerNotifications messages={[]} onClick={() => {}} />
```

But with proper data it can display all the messages:
```js
const messages4 = [
  {
    type: 'message',
    text: 'this is a permanent message',
    id: '1',
    permanent: true,
  },
  {
    type: 'success',
    text: 'this is a success',
    id: '2',
  },
  {
    type: 'warning',
    text: 'this is a warning',
    id: '3',
  },
  {
    type: 'alert',
    text: 'this is an alert',
    id: '4',
  },
];<div>
	<IconSprite />{ /* add sprite so we can see icons in this example */ }
	<BannerNotifications messages={messages4} onClose={() => {}} />
</div>
```