export function isObjectEmpty(obj) {
  for(const prop in obj) {
    if(obj.hasOwnProperty(prop)) {
      return false;
    }
  }

  return true;
}

export function simplifyValue(f) {
  if (Math.abs(f) > 10) {
    return Math.round(f);
  } else {
    return f;
  }
}
