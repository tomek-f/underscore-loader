const isObject = item => item && typeof item === 'object' && !Array.isArray(item);

function mergeKeysObject(target, source, output, key) {
  if (!(key in target)) {
    Object.assign(output, { [key]: source[key] });
  } else {
    output[key] = mergeDeepImmutable(target[key], source[key]);
  }
}

function margeKeys(target, source, output, key) {
  if (isObject(source[key])) {
    mergeKeysObject(...arguments);
  } else {
    Object.assign(output, { [key]: source[key] });
  }
}

function mergeDeepImmutable(target, source) {
  const output = Object.assign({}, target);
  if (!isObject(source) || !isObject(source)) return output;
  Object.keys(source).forEach(key => margeKeys(target, source, output, key));
  return output;
}

module.exports = mergeDeepImmutable;
