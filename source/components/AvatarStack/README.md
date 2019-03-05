Defaults:
```js
<AvatarStack
    avatars={[{ src: 'https://static.wikia.nocookie.net/438f6e23-1a0f-4351-a34d-6f8fa734a246', alt: 'Image', link: 'some://valid.url', badge: 'admin' }, { src: 'https://static.wikia.nocookie.net/438f6e23-1a0f-4351-a34d-6f8fa734a246', alt: 'Image', link: 'some://valid.url', badge: 'staff' }, { src: 'https://static.wikia.nocookie.net/fcdbab4c-8838-487e-89fd-5f0782974edf', alt: 'Image', link: 'some://valid.url', badge: 'vstf' }]}
/>
```

With maxStackSize

```js
<AvatarStack
    avatars={[{ src: 'https://static.wikia.nocookie.net/438f6e23-1a0f-4351-a34d-6f8fa734a246', alt: 'Image', link: 'some://valid.url', badge: 'admin' }, { src: 'https://static.wikia.nocookie.net/438f6e23-1a0f-4351-a34d-6f8fa734a246', alt: 'Image', link: 'some://valid.url', badge: 'staff' }, { src: 'https://static.wikia.nocookie.net/fcdbab4c-8838-487e-89fd-5f0782974edf', alt: 'Image', link: 'some://valid.url', badge: 'vstf' }]}
    maxStackSize={2}
/>
```

With hidden overflow

```js
<AvatarStack
    avatars={[{ src: 'https://static.wikia.nocookie.net/438f6e23-1a0f-4351-a34d-6f8fa734a246', alt: 'Image', link: 'some://valid.url', badge: 'admin' }, { src: 'https://static.wikia.nocookie.net/438f6e23-1a0f-4351-a34d-6f8fa734a246', alt: 'Image', link: 'some://valid.url', badge: 'staff' }, { src: 'https://static.wikia.nocookie.net/fcdbab4c-8838-487e-89fd-5f0782974edf', alt: 'Image', link: 'some://valid.url', badge: 'vstf' }]}
    maxStackSize={2}
    hideOverflow
/>
```

With overridden counter

```js
<AvatarStack
    avatars={[{ src: 'https://static.wikia.nocookie.net/438f6e23-1a0f-4351-a34d-6f8fa734a246', alt: 'Image', link: 'some://valid.url', badge: 'admin' }, { src: 'https://static.wikia.nocookie.net/438f6e23-1a0f-4351-a34d-6f8fa734a246', alt: 'Image', link: 'some://valid.url', badge: 'staff' }, { src: 'https://static.wikia.nocookie.net/fcdbab4c-8838-487e-89fd-5f0782974edf', alt: 'Image', link: 'some://valid.url', badge: 'vstf' }]}
    maxStackSize={2}
    overrideCount={6}
/>
```
