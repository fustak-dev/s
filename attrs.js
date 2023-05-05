/**
 * Map of HTML elements to allowed attributes.
 * @see: https://github.com/wooorm/html-element-attributes/blob/2dc9aa2bc1a8080d1608c13a919d0c52b582f243/index.js
 * @type {Record<string, Array<string>>}
 */
export const globalAttributes = [
	"accesskey",
	"autocapitalize",
	"autofocus",
	"class",
	"contenteditable",
	"dir",
	"draggable",
	"enterkeyhint",
	"hidden",
	"id",
	"inert",
	"inputmode",
	"is",
	"itemid",
	"itemprop",
	"itemref",
	"itemscope",
	"itemtype",
	"lang",
	"nonce",
	"popover",
	"slot",
	"spellcheck",
	// "style", it's used to specify pseudo-classes
	"tabindex",
	"title",
	"translate",
];
export const a = [
	"charset",
	"coords",
	"download",
	"href",
	"hreflang",
	"name",
	"ping",
	"referrerpolicy",
	"rel",
	"rev",
	"shape",
	"target",
	"type",
];
export const applet = [
	"align",
	"alt",
	"archive",
	"code",
	"codebase",
	"height",
	"hspace",
	"name",
	"object",
	"vspace",
	"width",
];
export const area = [
	"alt",
	"coords",
	"download",
	"href",
	"hreflang",
	"nohref",
	"ping",
	"referrerpolicy",
	"rel",
	"shape",
	"target",
	"type",
];
export const audio = [
	"autoplay",
	"controls",
	"crossorigin",
	"loop",
	"muted",
	"preload",
	"src",
];
export const base = ["href", "target"];
export const basefont = ["color", "face", "size"];
export const blockquote = ["cite"];
export const body = ["alink", "background", "bgcolor", "link", "text", "vlink"];
export const br = ["clear"];
export const button = [
	"disabled",
	"form",
	"formaction",
	"formenctype",
	"formmethod",
	"formnovalidate",
	"formtarget",
	"name",
	"popovertarget",
	"popovertargetaction",
	"type",
	"value",
];
export const canvas = ["height", "width"];
export const caption = ["align"];
export const col = ["align", "char", "charoff", "span", "valign", "width"];
export const colgroup = ["align", "char", "charoff", "span", "valign", "width"];
export const data = ["value"];
export const del = ["cite", "datetime"];
export const details = ["open"];
export const dialog = ["open"];
export const dir = ["compact"];
export const div = ["align"];
export const dl = ["compact"];
export const embed = ["height", "src", "type", "width"];
export const fieldset = ["disabled", "form", "name"];
export const font = ["color", "face", "size"];
export const form = [
	"accept",
	"accept-charset",
	"action",
	"autocomplete",
	"enctype",
	"method",
	"name",
	"novalidate",
	"target",
];
export const frame = [
	"frameborder",
	"longdesc",
	"marginheight",
	"marginwidth",
	"name",
	"noresize",
	"scrolling",
	"src",
];
export const frameset = ["cols", "rows"];
export const h1 = ["align"];
export const h2 = ["align"];
export const h3 = ["align"];
export const h4 = ["align"];
export const h5 = ["align"];
export const h6 = ["align"];
export const head = ["profile"];
export const hr = ["align", "noshade", "size", "width"];
export const html = ["manifest", "version"];
export const iframe = [
	"align",
	"allow",
	"allowfullscreen",
	"allowpaymentrequest",
	"allowusermedia",
	"frameborder",
	"height",
	"loading",
	"longdesc",
	"marginheight",
	"marginwidth",
	"name",
	"referrerpolicy",
	"sandbox",
	"scrolling",
	"src",
	"srcdoc",
	"width",
];
export const img = [
	"align",
	"alt",
	"border",
	"crossorigin",
	"decoding",
	"fetchpriority",
	"height",
	"hspace",
	"ismap",
	"loading",
	"longdesc",
	"name",
	"referrerpolicy",
	"sizes",
	"src",
	"srcset",
	"usemap",
	"vspace",
	"width",
];
export const input = [
	"accept",
	"align",
	"alt",
	"autocomplete",
	"checked",
	"dirname",
	"disabled",
	"form",
	"formaction",
	"formenctype",
	"formmethod",
	"formnovalidate",
	"formtarget",
	"height",
	"ismap",
	"list",
	"max",
	"maxlength",
	"min",
	"minlength",
	"multiple",
	"name",
	"pattern",
	"placeholder",
	"popovertarget",
	"popovertargetaction",
	"readonly",
	"required",
	"size",
	"src",
	"step",
	"type",
	"usemap",
	"value",
	"width",
];
export const ins = ["cite", "datetime"];
export const isindex = ["prompt"];
export const label = ["for", "form"];
export const legend = ["align"];
export const li = ["type", "value"];
export const link = [
	"as",
	"blocking",
	"charset",
	"color",
	"crossorigin",
	"disabled",
	"fetchpriority",
	"href",
	"hreflang",
	"imagesizes",
	"imagesrcset",
	"integrity",
	"media",
	"referrerpolicy",
	"rel",
	"rev",
	"sizes",
	"target",
	"type",
];
export const map = ["name"];
export const menu = ["compact"];
export const meta = [
	"charset",
	"content",
	"http-equiv",
	"media",
	"name",
	"scheme",
];
export const meter = ["high", "low", "max", "min", "optimum", "value"];
export const object = [
	"align",
	"archive",
	"border",
	"classid",
	"codebase",
	"codetype",
	"data",
	"declare",
	"form",
	"height",
	"hspace",
	"name",
	"standby",
	"type",
	"typemustmatch",
	"usemap",
	"vspace",
	"width",
];
export const ol = ["compact", "reversed", "start", "type"];
export const optgroup = ["disabled", "label"];
export const option = ["disabled", "label", "selected", "value"];
export const output = ["for", "form", "name"];
export const p = ["align"];
export const param = ["name", "type", "value", "valuetype"];
export const pre = ["width"];
export const progress = ["max", "value"];
export const q = ["cite"];
export const script = [
	"async",
	"blocking",
	"charset",
	"crossorigin",
	"defer",
	"fetchpriority",
	"integrity",
	"language",
	"nomodule",
	"referrerpolicy",
	"src",
	"type",
];
export const select = [
	"autocomplete",
	"disabled",
	"form",
	"multiple",
	"name",
	"required",
	"size",
];
export const slot = ["name"];
export const source = [
	"height",
	"media",
	"sizes",
	"src",
	"srcset",
	"type",
	"width",
];
export const style = ["blocking", "media", "type"];
export const table = [
	"align",
	"bgcolor",
	"border",
	"cellpadding",
	"cellspacing",
	"frame",
	"rules",
	"summary",
	"width",
];
export const tbody = ["align", "char", "charoff", "valign"];
export const td = [
	"abbr",
	"align",
	"axis",
	"bgcolor",
	"char",
	"charoff",
	"colspan",
	"headers",
	"height",
	"nowrap",
	"rowspan",
	"scope",
	"valign",
	"width",
];
export const textarea = [
	"autocomplete",
	"cols",
	"dirname",
	"disabled",
	"form",
	"maxlength",
	"minlength",
	"name",
	"placeholder",
	"readonly",
	"required",
	"rows",
	"wrap",
];
export const tfoot = ["align", "char", "charoff", "valign"];
export const th = [
	"abbr",
	"align",
	"axis",
	"bgcolor",
	"char",
	"charoff",
	"colspan",
	"headers",
	"height",
	"nowrap",
	"rowspan",
	"scope",
	"valign",
	"width",
];
export const thead = ["align", "char", "charoff", "valign"];
export const time = ["datetime"];
export const tr = ["align", "bgcolor", "char", "charoff", "valign"];
export const track = ["default", "kind", "label", "src", "srclang"];
export const ul = ["compact", "type"];
export const video = [
	"autoplay",
	"controls",
	"crossorigin",
	"height",
	"loop",
	"muted",
	"playsinline",
	"poster",
	"preload",
	"src",
	"width",
];
