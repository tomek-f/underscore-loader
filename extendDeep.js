const isObject = item => item && typeof item === 'object' && !Array.isArray(item);

function extendObject(target, source, output, key) {
  if (!(key in target)) {
    Object.assign(output, { [key]: source[key] });
  } else {
    output[key] = extendDeepImmutable(target[key], source[key]);
  }
}

function extendFirstLevel(target, source, output, key) {
  if (isObject(source[key])) {
    extendObject(...arguments);
  } else {
    Object.assign(output, { [key]: source[key] });
  }
}

function extendDeepImmutable(target, source) {
  const output = Object.assign({}, target);
  if (!isObject(source) || !isObject(source)) return output;
  Object.keys(source).forEach(key => extendFirstLevel(target, source, output, key));
  return output;
}

module.exports = extendDeepImmutable;

// const a = {a: 1, c: {d:2, c: 4, dd: {a: 1, b: 2, c: [2, 3, 4, 1, 1]}}};
// const b = {b: 2, f: 1, c: {d:3, g: 4, dd: {be: 1, b: 3, c: [1, 2, 5, 4]}}};
// const c = extendDeepImmutable(a, b);
// console.log(a, b, c);
