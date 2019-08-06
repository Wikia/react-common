import get from 'lodash/get';

export default function getAccentColor(theme) {
    return get(theme, 'site.accent') || get(theme, 'color.fandom_aqua');
}
