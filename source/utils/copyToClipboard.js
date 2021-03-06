// see https://stackoverflow.com/questions/45071353/copy-text-string-on-click/45071469#45071469
// copy any string to a clipboard only when a click action is triggered
export default function copyToClipboard(str) {
    const el = document.createElement('textarea');
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
}
