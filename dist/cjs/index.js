var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// index.js
var s_exports = {};
__export(s_exports, {
  s: () => s
});
module.exports = __toCommonJS(s_exports);
var stylesheet;
var cache = {
  classesNames: {}
};
function parse(obj, children = "", media = "") {
  return Object.keys(obj).map((key) => {
    const value = obj[key];
    if (value === null)
      return "";
    if (typeof value === "object") {
      const isMedia = /^@m/.test(key);
      return parse(
        value,
        isMedia ? children : (children + key).replace(" ", ""),
        isMedia ? key : media
      );
    }
    const id = key + value + children + (media || "");
    if (cache.classesNames[id])
      return cache.classesNames[id];
    const className = `c${id.split("").reduce((out, i) => 101 * out + i.charCodeAt(0) >>> 0, 11)}`;
    insert(createRule(className, key, value, children, media));
    cache.classesNames[id] = className;
    return className;
  }).join(" ");
}
function insert(rule) {
  if (!stylesheet && !document.getElementById("fustak-s")) {
    stylesheet = document.createElement("style");
    stylesheet.setAttribute("id", "fustak-s");
    document.body.appendChild(stylesheet);
  } else if (!stylesheet) {
    stylesheet = document.getElementById("fustak-s");
  }
  stylesheet.appendChild(document.createTextNode(rule));
}
function createRule(className, key, value, children, media) {
  const selector = `.${className}${children}`;
  const rule = `${selector}{${key.replace(/[A-Z]|^ms/g, "-$&").toLowerCase()}:${value}}`;
  if (!media)
    return rule;
  return `${media}{${rule}}`;
}
var globalAttributes = [
  "accesskey",
  "autocapitalize",
  "autofocus",
  "contenteditable",
  "dir",
  "draggable",
  "enterkeyhint",
  "hidden",
  "id",
  "inputmode",
  "is",
  "itemid",
  "itemprop",
  "itemref",
  "itemscope",
  "itemtype",
  "lang",
  "nonce",
  "part",
  "role",
  "slot",
  "spellcheck",
  "tabindex",
  "title",
  "translate"
];
function propsToCss({ props = {}, attributes = [] }) {
  let i = 0;
  const attr = [...attributes, ...globalAttributes];
  const {
    tag,
    ref,
    children,
    className: hasPropsClassName,
    style: hasStyle,
    ...rest
  } = props || {};
  const keys = Object.keys(rest);
  const length = keys.length;
  const acc = {};
  while (i < length) {
    const key = keys[i];
    if (attr.includes(key) || /^on|^data-|^data[A-Z0-9]+|^aria-|^aria[A-Z0-9]+|^key$/.test(key)) {
      acc.attributes = acc.attributes || {};
      acc.attributes[keys[i]] = rest[key];
    } else {
      acc.styles = acc.styles || {};
      acc.styles[key] = rest[key];
    }
    i++;
  }
  const propsClassName = props.className;
  const styles = acc.styles;
  const className = hasStyle || hasPropsClassName || styles ? {
    className: parse({
      ...hasStyle ? props.style : {},
      ...styles || {}
    }) + (propsClassName ? (hasStyle || styles ? " " : "") + propsClassName : "")
  } : {};
  return {
    ...acc.attributes || {},
    ...className,
    ...ref ? { ref } : {}
  };
}
var s = propsToCss;
