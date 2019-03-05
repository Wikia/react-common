
Theme values are provided in two different ways:

## Theme object

The main `theme` is just an object with values than can be easily used in plain JavaScript:

Can be used in plain JS

```js static
import theme from '@wikia/react-common/theme';

console.log(theme.color.fandom_aqua); // outputs '#00d6d6'
console.log(theme.color.font_size.l); // outputs '18px'
```

But it's also a [ThemeProvider](https://www.styled-components.com/docs/advanced#theming)-ready:

```js static

import theme from '@wikia/react-common/theme';

const AquaText = styled.span`
    color: ${props => props.theme.color.fandom_aqua};
    font-family: ${props => props.theme.font_family};
    font-size: ${props => props.theme.font_size.l};

    @media ${props => props.theme.media.large_up} {
        font-size: ${props => props.theme.font_size.xl}
    }
`;

export default () => (
    <ThemeProvider theme={theme}>
        <AquaText>O hai</AquaText>
    </ThemeProvider>
);
```

### Theme object structure

Here's how the object looks like (values omitted):

```js static
const theme = {
    breakpoint_values: /* .. */,
    breakpoint_available_width: /* .. */,
    breakpoint_available_width_values: /* ame as `breakpoint_available_width` without units */,
    color: /* .. */,
    color_theme: {
        light: /* .. */,
        dark: /* .. */,
    },
    font_family: /* .. */,
    font_size: /* .. */,
    font_size_value: /* same as `font_size` without units */,
    font_weight: /* ... */,
    line_heights: /* ... */,
    margin: {
        content_well: /* ... */,
        content_well_value: /* same as `content_well` without units */,
    },
    media: /* ... */,
};
```

You can see `theme`'s values in the [source](https://github.com/Wikia/react-common/blob/master/source/theme/index.js).


## Separate theme values

If you don't need the object, there are separate values available:

### Breakpoints

The [`@wikia/react-common/theme/breakpoints`](https://github.com/Wikia/react-common/blob/master/source/theme/breakpoints.js) exports the following consts:

- `BREAKPOINTS`
- `MEDIAQUERIES`
- `CONTENT_WELL_MARGIN`
- `CONTENT_WELL_MARGIN_PX`
- `BREAKPOINTS_AVAILABLE_WIDTH`
- `BREAKPOINTS_AVAILABLE_WIDTH_PX`

### Colors

The [`@wikia/react-common/theme/colors`](https://github.com/Wikia/react-common/blob/master/source/theme/colors.js) exports the following consts:

- `COLORS`
- `COLORS_LIGHT_THEME`
- `COLORS_DARK_THEME`

### Typography

The [`@wikia/react-common/theme/typography`](https://github.com/Wikia/react-common/blob/master/source/theme/typography.js) exports the following consts:

- `FONT_FAMILY`
- `LINE_HEIGHTS`
- `FONT_WEIGHTS`
- `FONT_SIZES`
- `FONT_SIZES_PX`
