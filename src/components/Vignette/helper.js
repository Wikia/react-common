export function getUuid(urlOrUuid) {
  const matches = urlOrUuid.match(/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/);

  if (matches) {
    // UUID found in `urlOrUuid`
    return matches[0];
  }

  return false;
}

function getVignetteParamsTopCrop(width, height) {
  return `/top-crop/width/${width}/height/${height}`;
}

function getVignetteParamsThumbnail(width, height, allowUpscaling) {
  if (allowUpscaling) {
    return `/thumbnail/width/${width}/height/${height}`;
  }
  return `/thumbnail-down/width/${width}/height/${height}`;
}

function getVignetteParamsScale(width, height, allowUpscaling) {
  if (width) {
    if (allowUpscaling) {
      return `/scale-to-width/${width}`;
    }
    return `/scale-to-width-down/${width}`;
  }

  if (height) {
    return `/scale-to-height-down/${height}`;
  }

  return '';
}

export function getVignetteParams({width, height, method, allowUpscaling}) {
  switch (method) {
    case 'top-crop':
      return getVignetteParamsTopCrop(width, height);
    case 'thumbnail':
      return getVignetteParamsThumbnail(width, height, allowUpscaling);
    case 'scale':
      return getVignetteParamsScale(width, height, allowUpscaling);
    default:
      // auto
      if (width && height) {
        return getVignetteParamsThumbnail(width, height, allowUpscaling);
      }
      return getVignetteParamsScale(width, height, allowUpscaling);
  }
}
