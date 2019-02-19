export function convertToIsoString(timestamp) {
    return new Date(timestamp * 1000).toISOString();
}

export function convertToTimestamp(date) {
    return typeof date === 'string' ? (new Date(date)).getTime() / 1000 : date.epochSecond;
}
