By default it renders nothing:
```js
<BannerNotifications messages={[]} onClick={() => {}} />
```

But with proper data it can display all the messages:
```js
const messages4 = [
  {
    type: 'message',
    message: 'this is a message',
    id: '1',
  },
  {
    type: 'success',
    message: 'this is a success',
    id: '2',
  },
  {
    type: 'warning',
    message: 'this is a warning',
    id: '3',
  },
  {
    type: 'alert',
    message: 'this is an alert',
    id: '4',
  },
];<BannerNotifications messages={messages4} onClose={() => {}} />
```
