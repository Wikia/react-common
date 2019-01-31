This component uses the Design System icons listed at [https://fandomdesignsystem.com/#/components/assets]()

The `name` attribute of the component refers to the icon's DS name.

**NOTICE**: This component requires `<IconSprite />` to work.

## Example usage

Standard icon:

```
<div>
	<IconSprite />
	<Icon name="menu" />
</div>
```

Small or tiny icon:

```
<div>
	<Icon name="cross-tiny" />
	<Icon name="camera" tiny />
</div>
```

Add your own CSS class for styling:

```
<Icon name="magnifying-glass" className="search-icon" />
```

Other props are just passed to the SVG:

```
<Icon name="error" onClick={() => alert('click!')} style={{cursor: 'pointer'}}/>
```
