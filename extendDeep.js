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

// const a = {a: 1, c: {d:2, c: 4, dd: {a: 1, b: 2, c: [2, 3, 4, 1, 1]}}};
// const b = {b: 2, f: 1, c: {d:3, g: 4, dd: {be: 1, b: 3, c: [1, 2, 5, 4]}}};
// const c = mergeDeepImmutable(a, b);
// console.log(a, b, c);
