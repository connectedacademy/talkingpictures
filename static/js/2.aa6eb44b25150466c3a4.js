webpackJsonp([2,10],{

/***/ 1028:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.isRegistered) ? _c('div', {
    staticClass: "feedback-submission-wrapper"
  }, [_c('div', {
    staticClass: "feedback-submission feedback-submission-submit"
  }, [_c('label', [_vm._v("Search your site for a FourCorners image")]), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.submissionLink),
      expression: "submissionLink"
    }],
    attrs: {
      "type": "text",
      "name": "text",
      "placeholder": "E.g. https://example.com/page"
    },
    domProps: {
      "value": (_vm.submissionLink)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.submissionLink = $event.target.value
      }
    }
  }), _c('p', {
    staticClass: "pull-left"
  }, [_vm._v(_vm._s(_vm.resultsText))]), _c('div', {
    staticClass: "pure-button pure-button-primary pull-right",
    on: {
      "click": _vm.postSubmission
    }
  }, [_vm._v("Begin Search")]), _c('div', {
    staticClass: "clearfix"
  })]), (_vm.submissions.length > 0) ? _c('ul', {
    staticClass: "submission-selector"
  }, [_vm._l((_vm.submissions), function(submission, index) {
    return _c('li', {
      key: index,
      style: ({
        'background-image': _vm.submissionSrc(submission.id)
      }),
      on: {
        "click": function($event) {
          _vm.verifySubmission(submission.id)
        }
      }
    })
  }), _c('div', {
    staticClass: "clearfix"
  })], 2) : _vm._e()]) : _vm._e()
},staticRenderFns: []}

/***/ }),

/***/ 1040:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "feedback-tile",
    on: {
      "click": _vm.viewFeedback
    }
  }, [(_vm.content.messages) ? _c('div', {
    staticClass: "message-count animated fadeInUp"
  }, [_vm._v(_vm._s(_vm.content.messages))]) : _vm._e(), (_vm.content.unread) ? _c('div', {
    staticClass: "unread-count animated tada"
  }, [_vm._v(_vm._s(_vm.content.unread) + " New")]) : _vm._e(), _c('div', {
    staticClass: "thumbnail-image",
    style: ({
      'background-image': 'url(' + _vm.content.thumbnail + ')'
    })
  }), _c('div', {
    staticClass: "user-strip"
  }, [_c('img', {
    staticClass: "user-profile-image",
    attrs: {
      "src": _vm.content.user.profile
    }
  }), _c('h5', {
    staticClass: "user-profile-name"
  }, [_vm._v(_vm._s(_vm.content.user.name))])])])
},staticRenderFns: []}

/***/ }),

/***/ 1041:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "feedback-row",
    class: {
      active: _vm.active
    }
  }, [_c('div', {
    staticClass: "user-strip"
  }, [_c('img', {
    staticClass: "user-profile-image",
    attrs: {
      "src": _vm.content.user.profile
    }
  }), _c('h5', {
    staticClass: "user-profile-name"
  }, [_vm._v(_vm._s(_vm.content.user.name))]), _c('p', {
    staticClass: "message-count"
  }, [_vm._v(_vm._s(_vm.content.message ? _vm.content.message : 'no') + " messages")])]), (_vm.content.unread) ? _c('div', {
    staticClass: "unread-count animated tada"
  }, [_vm._v(_vm._s(_vm.content.unread))]) : _vm._e()])
},staticRenderFns: []}

/***/ }),

/***/ 1052:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "four-corners-link"
  }, [_vm._m(0), _c('div', {
    staticClass: "four-corners-link--footer"
  }, [_c('p', [_vm._v(_vm._s(_vm.message))]), _c('router-link', {
    staticClass: "pure-button pure-button-subtle pull-right",
    attrs: {
      "to": "/fourcorners"
    }
  }, [_vm._v("Learn More")]), _c('div', {
    staticClass: "clearfix"
  })], 1)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "four-corners-link--body"
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(603)
    }
  })])
}]}

/***/ }),

/***/ 414:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(572)

var Component = __webpack_require__(3)(
  /* script */
  __webpack_require__(536),
  /* template */
  __webpack_require__(626),
  /* scopeId */
  "data-v-75241529",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 418:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(805)

var Component = __webpack_require__(3)(
  /* script */
  __webpack_require__(689),
  /* template */
  __webpack_require__(995),
  /* scopeId */
  "data-v-0c255238",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 427:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Utilities
//



function _class(obj) { return Object.prototype.toString.call(obj); }

function isString(obj) { return _class(obj) === '[object String]'; }

var _hasOwnProperty = Object.prototype.hasOwnProperty;

function has(object, key) {
  return _hasOwnProperty.call(object, key);
}

// Merge objects
//
function assign(obj /*from1, from2, from3, ...*/) {
  var sources = Array.prototype.slice.call(arguments, 1);

  sources.forEach(function (source) {
    if (!source) { return; }

    if (typeof source !== 'object') {
      throw new TypeError(source + 'must be object');
    }

    Object.keys(source).forEach(function (key) {
      obj[key] = source[key];
    });
  });

  return obj;
}

// Remove element from array and put another array at those position.
// Useful for some operations with tokens
function arrayReplaceAt(src, pos, newElements) {
  return [].concat(src.slice(0, pos), newElements, src.slice(pos + 1));
}

////////////////////////////////////////////////////////////////////////////////

function isValidEntityCode(c) {
  /*eslint no-bitwise:0*/
  // broken sequence
  if (c >= 0xD800 && c <= 0xDFFF) { return false; }
  // never used
  if (c >= 0xFDD0 && c <= 0xFDEF) { return false; }
  if ((c & 0xFFFF) === 0xFFFF || (c & 0xFFFF) === 0xFFFE) { return false; }
  // control codes
  if (c >= 0x00 && c <= 0x08) { return false; }
  if (c === 0x0B) { return false; }
  if (c >= 0x0E && c <= 0x1F) { return false; }
  if (c >= 0x7F && c <= 0x9F) { return false; }
  // out of range
  if (c > 0x10FFFF) { return false; }
  return true;
}

function fromCodePoint(c) {
  /*eslint no-bitwise:0*/
  if (c > 0xffff) {
    c -= 0x10000;
    var surrogate1 = 0xd800 + (c >> 10),
        surrogate2 = 0xdc00 + (c & 0x3ff);

    return String.fromCharCode(surrogate1, surrogate2);
  }
  return String.fromCharCode(c);
}


var UNESCAPE_MD_RE  = /\\([!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~])/g;
var ENTITY_RE       = /&([a-z#][a-z0-9]{1,31});/gi;
var UNESCAPE_ALL_RE = new RegExp(UNESCAPE_MD_RE.source + '|' + ENTITY_RE.source, 'gi');

var DIGITAL_ENTITY_TEST_RE = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))/i;

var entities = __webpack_require__(434);

function replaceEntityPattern(match, name) {
  var code = 0;

  if (has(entities, name)) {
    return entities[name];
  }

  if (name.charCodeAt(0) === 0x23/* # */ && DIGITAL_ENTITY_TEST_RE.test(name)) {
    code = name[1].toLowerCase() === 'x' ?
      parseInt(name.slice(2), 16)
    :
      parseInt(name.slice(1), 10);
    if (isValidEntityCode(code)) {
      return fromCodePoint(code);
    }
  }

  return match;
}

/*function replaceEntities(str) {
  if (str.indexOf('&') < 0) { return str; }

  return str.replace(ENTITY_RE, replaceEntityPattern);
}*/

function unescapeMd(str) {
  if (str.indexOf('\\') < 0) { return str; }
  return str.replace(UNESCAPE_MD_RE, '$1');
}

function unescapeAll(str) {
  if (str.indexOf('\\') < 0 && str.indexOf('&') < 0) { return str; }

  return str.replace(UNESCAPE_ALL_RE, function (match, escaped, entity) {
    if (escaped) { return escaped; }
    return replaceEntityPattern(match, entity);
  });
}

////////////////////////////////////////////////////////////////////////////////

var HTML_ESCAPE_TEST_RE = /[&<>"]/;
var HTML_ESCAPE_REPLACE_RE = /[&<>"]/g;
var HTML_REPLACEMENTS = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;'
};

function replaceUnsafeChar(ch) {
  return HTML_REPLACEMENTS[ch];
}

function escapeHtml(str) {
  if (HTML_ESCAPE_TEST_RE.test(str)) {
    return str.replace(HTML_ESCAPE_REPLACE_RE, replaceUnsafeChar);
  }
  return str;
}

////////////////////////////////////////////////////////////////////////////////

var REGEXP_ESCAPE_RE = /[.?*+^$[\]\\(){}|-]/g;

function escapeRE(str) {
  return str.replace(REGEXP_ESCAPE_RE, '\\$&');
}

////////////////////////////////////////////////////////////////////////////////

function isSpace(code) {
  switch (code) {
    case 0x09:
    case 0x20:
      return true;
  }
  return false;
}

// Zs (unicode class) || [\t\f\v\r\n]
function isWhiteSpace(code) {
  if (code >= 0x2000 && code <= 0x200A) { return true; }
  switch (code) {
    case 0x09: // \t
    case 0x0A: // \n
    case 0x0B: // \v
    case 0x0C: // \f
    case 0x0D: // \r
    case 0x20:
    case 0xA0:
    case 0x1680:
    case 0x202F:
    case 0x205F:
    case 0x3000:
      return true;
  }
  return false;
}

////////////////////////////////////////////////////////////////////////////////

/*eslint-disable max-len*/
var UNICODE_PUNCT_RE = __webpack_require__(431);

// Currently without astral characters support.
function isPunctChar(ch) {
  return UNICODE_PUNCT_RE.test(ch);
}


// Markdown ASCII punctuation characters.
//
// !, ", #, $, %, &, ', (, ), *, +, ,, -, ., /, :, ;, <, =, >, ?, @, [, \, ], ^, _, `, {, |, }, or ~
// http://spec.commonmark.org/0.15/#ascii-punctuation-character
//
// Don't confuse with unicode punctuation !!! It lacks some chars in ascii range.
//
function isMdAsciiPunct(ch) {
  switch (ch) {
    case 0x21/* ! */:
    case 0x22/* " */:
    case 0x23/* # */:
    case 0x24/* $ */:
    case 0x25/* % */:
    case 0x26/* & */:
    case 0x27/* ' */:
    case 0x28/* ( */:
    case 0x29/* ) */:
    case 0x2A/* * */:
    case 0x2B/* + */:
    case 0x2C/* , */:
    case 0x2D/* - */:
    case 0x2E/* . */:
    case 0x2F/* / */:
    case 0x3A/* : */:
    case 0x3B/* ; */:
    case 0x3C/* < */:
    case 0x3D/* = */:
    case 0x3E/* > */:
    case 0x3F/* ? */:
    case 0x40/* @ */:
    case 0x5B/* [ */:
    case 0x5C/* \ */:
    case 0x5D/* ] */:
    case 0x5E/* ^ */:
    case 0x5F/* _ */:
    case 0x60/* ` */:
    case 0x7B/* { */:
    case 0x7C/* | */:
    case 0x7D/* } */:
    case 0x7E/* ~ */:
      return true;
    default:
      return false;
  }
}

// Hepler to unify [reference labels].
//
function normalizeReference(str) {
  // use .toUpperCase() instead of .toLowerCase()
  // here to avoid a conflict with Object.prototype
  // members (most notably, `__proto__`)
  return str.trim().replace(/\s+/g, ' ').toUpperCase();
}

////////////////////////////////////////////////////////////////////////////////

// Re-export libraries commonly used in both markdown-it and its plugins,
// so plugins won't have to depend on them explicitly, which reduces their
// bundled size (e.g. a browser build).
//
exports.lib                 = {};
exports.lib.mdurl           = __webpack_require__(438);
exports.lib.ucmicro         = __webpack_require__(499);

exports.assign              = assign;
exports.isString            = isString;
exports.has                 = has;
exports.unescapeMd          = unescapeMd;
exports.unescapeAll         = unescapeAll;
exports.isValidEntityCode   = isValidEntityCode;
exports.fromCodePoint       = fromCodePoint;
// exports.replaceEntities     = replaceEntities;
exports.escapeHtml          = escapeHtml;
exports.arrayReplaceAt      = arrayReplaceAt;
exports.isSpace             = isSpace;
exports.isWhiteSpace        = isWhiteSpace;
exports.isMdAsciiPunct      = isMdAsciiPunct;
exports.isPunctChar         = isPunctChar;
exports.escapeRE            = escapeRE;
exports.normalizeReference  = normalizeReference;


/***/ }),

/***/ 429:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * class Ruler
 *
 * Helper class, used by [[MarkdownIt#core]], [[MarkdownIt#block]] and
 * [[MarkdownIt#inline]] to manage sequences of functions (rules):
 *
 * - keep rules in defined order
 * - assign the name to each rule
 * - enable/disable rules
 * - add/replace rules
 * - allow assign rules to additional named chains (in the same)
 * - cacheing lists of active rules
 *
 * You will not need use this class directly until write plugins. For simple
 * rules control use [[MarkdownIt.disable]], [[MarkdownIt.enable]] and
 * [[MarkdownIt.use]].
 **/



/**
 * new Ruler()
 **/
function Ruler() {
  // List of added rules. Each element is:
  //
  // {
  //   name: XXX,
  //   enabled: Boolean,
  //   fn: Function(),
  //   alt: [ name2, name3 ]
  // }
  //
  this.__rules__ = [];

  // Cached rule chains.
  //
  // First level - chain name, '' for default.
  // Second level - diginal anchor for fast filtering by charcodes.
  //
  this.__cache__ = null;
}

////////////////////////////////////////////////////////////////////////////////
// Helper methods, should not be used directly


// Find rule index by name
//
Ruler.prototype.__find__ = function (name) {
  for (var i = 0; i < this.__rules__.length; i++) {
    if (this.__rules__[i].name === name) {
      return i;
    }
  }
  return -1;
};


// Build rules lookup cache
//
Ruler.prototype.__compile__ = function () {
  var self = this;
  var chains = [ '' ];

  // collect unique names
  self.__rules__.forEach(function (rule) {
    if (!rule.enabled) { return; }

    rule.alt.forEach(function (altName) {
      if (chains.indexOf(altName) < 0) {
        chains.push(altName);
      }
    });
  });

  self.__cache__ = {};

  chains.forEach(function (chain) {
    self.__cache__[chain] = [];
    self.__rules__.forEach(function (rule) {
      if (!rule.enabled) { return; }

      if (chain && rule.alt.indexOf(chain) < 0) { return; }

      self.__cache__[chain].push(rule.fn);
    });
  });
};


/**
 * Ruler.at(name, fn [, options])
 * - name (String): rule name to replace.
 * - fn (Function): new rule function.
 * - options (Object): new rule options (not mandatory).
 *
 * Replace rule by name with new function & options. Throws error if name not
 * found.
 *
 * ##### Options:
 *
 * - __alt__ - array with names of "alternate" chains.
 *
 * ##### Example
 *
 * Replace existing typorgapher replacement rule with new one:
 *
 * ```javascript
 * var md = require('markdown-it')();
 *
 * md.core.ruler.at('replacements', function replace(state) {
 *   //...
 * });
 * ```
 **/
Ruler.prototype.at = function (name, fn, options) {
  var index = this.__find__(name);
  var opt = options || {};

  if (index === -1) { throw new Error('Parser rule not found: ' + name); }

  this.__rules__[index].fn = fn;
  this.__rules__[index].alt = opt.alt || [];
  this.__cache__ = null;
};


/**
 * Ruler.before(beforeName, ruleName, fn [, options])
 * - beforeName (String): new rule will be added before this one.
 * - ruleName (String): name of added rule.
 * - fn (Function): rule function.
 * - options (Object): rule options (not mandatory).
 *
 * Add new rule to chain before one with given name. See also
 * [[Ruler.after]], [[Ruler.push]].
 *
 * ##### Options:
 *
 * - __alt__ - array with names of "alternate" chains.
 *
 * ##### Example
 *
 * ```javascript
 * var md = require('markdown-it')();
 *
 * md.block.ruler.before('paragraph', 'my_rule', function replace(state) {
 *   //...
 * });
 * ```
 **/
Ruler.prototype.before = function (beforeName, ruleName, fn, options) {
  var index = this.__find__(beforeName);
  var opt = options || {};

  if (index === -1) { throw new Error('Parser rule not found: ' + beforeName); }

  this.__rules__.splice(index, 0, {
    name: ruleName,
    enabled: true,
    fn: fn,
    alt: opt.alt || []
  });

  this.__cache__ = null;
};


/**
 * Ruler.after(afterName, ruleName, fn [, options])
 * - afterName (String): new rule will be added after this one.
 * - ruleName (String): name of added rule.
 * - fn (Function): rule function.
 * - options (Object): rule options (not mandatory).
 *
 * Add new rule to chain after one with given name. See also
 * [[Ruler.before]], [[Ruler.push]].
 *
 * ##### Options:
 *
 * - __alt__ - array with names of "alternate" chains.
 *
 * ##### Example
 *
 * ```javascript
 * var md = require('markdown-it')();
 *
 * md.inline.ruler.after('text', 'my_rule', function replace(state) {
 *   //...
 * });
 * ```
 **/
Ruler.prototype.after = function (afterName, ruleName, fn, options) {
  var index = this.__find__(afterName);
  var opt = options || {};

  if (index === -1) { throw new Error('Parser rule not found: ' + afterName); }

  this.__rules__.splice(index + 1, 0, {
    name: ruleName,
    enabled: true,
    fn: fn,
    alt: opt.alt || []
  });

  this.__cache__ = null;
};

/**
 * Ruler.push(ruleName, fn [, options])
 * - ruleName (String): name of added rule.
 * - fn (Function): rule function.
 * - options (Object): rule options (not mandatory).
 *
 * Push new rule to the end of chain. See also
 * [[Ruler.before]], [[Ruler.after]].
 *
 * ##### Options:
 *
 * - __alt__ - array with names of "alternate" chains.
 *
 * ##### Example
 *
 * ```javascript
 * var md = require('markdown-it')();
 *
 * md.core.ruler.push('my_rule', function replace(state) {
 *   //...
 * });
 * ```
 **/
Ruler.prototype.push = function (ruleName, fn, options) {
  var opt = options || {};

  this.__rules__.push({
    name: ruleName,
    enabled: true,
    fn: fn,
    alt: opt.alt || []
  });

  this.__cache__ = null;
};


/**
 * Ruler.enable(list [, ignoreInvalid]) -> Array
 * - list (String|Array): list of rule names to enable.
 * - ignoreInvalid (Boolean): set `true` to ignore errors when rule not found.
 *
 * Enable rules with given names. If any rule name not found - throw Error.
 * Errors can be disabled by second param.
 *
 * Returns list of found rule names (if no exception happened).
 *
 * See also [[Ruler.disable]], [[Ruler.enableOnly]].
 **/
Ruler.prototype.enable = function (list, ignoreInvalid) {
  if (!Array.isArray(list)) { list = [ list ]; }

  var result = [];

  // Search by name and enable
  list.forEach(function (name) {
    var idx = this.__find__(name);

    if (idx < 0) {
      if (ignoreInvalid) { return; }
      throw new Error('Rules manager: invalid rule name ' + name);
    }
    this.__rules__[idx].enabled = true;
    result.push(name);
  }, this);

  this.__cache__ = null;
  return result;
};


/**
 * Ruler.enableOnly(list [, ignoreInvalid])
 * - list (String|Array): list of rule names to enable (whitelist).
 * - ignoreInvalid (Boolean): set `true` to ignore errors when rule not found.
 *
 * Enable rules with given names, and disable everything else. If any rule name
 * not found - throw Error. Errors can be disabled by second param.
 *
 * See also [[Ruler.disable]], [[Ruler.enable]].
 **/
Ruler.prototype.enableOnly = function (list, ignoreInvalid) {
  if (!Array.isArray(list)) { list = [ list ]; }

  this.__rules__.forEach(function (rule) { rule.enabled = false; });

  this.enable(list, ignoreInvalid);
};


/**
 * Ruler.disable(list [, ignoreInvalid]) -> Array
 * - list (String|Array): list of rule names to disable.
 * - ignoreInvalid (Boolean): set `true` to ignore errors when rule not found.
 *
 * Disable rules with given names. If any rule name not found - throw Error.
 * Errors can be disabled by second param.
 *
 * Returns list of found rule names (if no exception happened).
 *
 * See also [[Ruler.enable]], [[Ruler.enableOnly]].
 **/
Ruler.prototype.disable = function (list, ignoreInvalid) {
  if (!Array.isArray(list)) { list = [ list ]; }

  var result = [];

  // Search by name and disable
  list.forEach(function (name) {
    var idx = this.__find__(name);

    if (idx < 0) {
      if (ignoreInvalid) { return; }
      throw new Error('Rules manager: invalid rule name ' + name);
    }
    this.__rules__[idx].enabled = false;
    result.push(name);
  }, this);

  this.__cache__ = null;
  return result;
};


/**
 * Ruler.getRules(chainName) -> Array
 *
 * Return array of active functions (rules) for given chain name. It analyzes
 * rules configuration, compiles caches if not exists and returns result.
 *
 * Default chain name is `''` (empty string). It can't be skipped. That's
 * done intentionally, to keep signature monomorphic for high speed.
 **/
Ruler.prototype.getRules = function (chainName) {
  if (this.__cache__ === null) {
    this.__compile__();
  }

  // Chain can be empty, if rules disabled. But we still have to return Array.
  return this.__cache__[chainName] || [];
};

module.exports = Ruler;


/***/ }),

/***/ 430:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Token class




/**
 * class Token
 **/

/**
 * new Token(type, tag, nesting)
 *
 * Create new token and fill passed properties.
 **/
function Token(type, tag, nesting) {
  /**
   * Token#type -> String
   *
   * Type of the token (string, e.g. "paragraph_open")
   **/
  this.type     = type;

  /**
   * Token#tag -> String
   *
   * html tag name, e.g. "p"
   **/
  this.tag      = tag;

  /**
   * Token#attrs -> Array
   *
   * Html attributes. Format: `[ [ name1, value1 ], [ name2, value2 ] ]`
   **/
  this.attrs    = null;

  /**
   * Token#map -> Array
   *
   * Source map info. Format: `[ line_begin, line_end ]`
   **/
  this.map      = null;

  /**
   * Token#nesting -> Number
   *
   * Level change (number in {-1, 0, 1} set), where:
   *
   * -  `1` means the tag is opening
   * -  `0` means the tag is self-closing
   * - `-1` means the tag is closing
   **/
  this.nesting  = nesting;

  /**
   * Token#level -> Number
   *
   * nesting level, the same as `state.level`
   **/
  this.level    = 0;

  /**
   * Token#children -> Array
   *
   * An array of child nodes (inline and img tokens)
   **/
  this.children = null;

  /**
   * Token#content -> String
   *
   * In a case of self-closing tag (code, html, fence, etc.),
   * it has contents of this tag.
   **/
  this.content  = '';

  /**
   * Token#markup -> String
   *
   * '*' or '_' for emphasis, fence string for fence, etc.
   **/
  this.markup   = '';

  /**
   * Token#info -> String
   *
   * fence infostring
   **/
  this.info     = '';

  /**
   * Token#meta -> Object
   *
   * A place for plugins to store an arbitrary data
   **/
  this.meta     = null;

  /**
   * Token#block -> Boolean
   *
   * True for block-level tokens, false for inline tokens.
   * Used in renderer to calculate line breaks
   **/
  this.block    = false;

  /**
   * Token#hidden -> Boolean
   *
   * If it's true, ignore this element when rendering. Used for tight lists
   * to hide paragraphs.
   **/
  this.hidden   = false;
}


/**
 * Token.attrIndex(name) -> Number
 *
 * Search attribute index by name.
 **/
Token.prototype.attrIndex = function attrIndex(name) {
  var attrs, i, len;

  if (!this.attrs) { return -1; }

  attrs = this.attrs;

  for (i = 0, len = attrs.length; i < len; i++) {
    if (attrs[i][0] === name) { return i; }
  }
  return -1;
};


/**
 * Token.attrPush(attrData)
 *
 * Add `[ name, value ]` attribute to list. Init attrs if necessary
 **/
Token.prototype.attrPush = function attrPush(attrData) {
  if (this.attrs) {
    this.attrs.push(attrData);
  } else {
    this.attrs = [ attrData ];
  }
};


/**
 * Token.attrSet(name, value)
 *
 * Set `name` attribute to `value`. Override old value if exists.
 **/
Token.prototype.attrSet = function attrSet(name, value) {
  var idx = this.attrIndex(name),
      attrData = [ name, value ];

  if (idx < 0) {
    this.attrPush(attrData);
  } else {
    this.attrs[idx] = attrData;
  }
};


/**
 * Token.attrGet(name)
 *
 * Get the value of attribute `name`, or null if it does not exist.
 **/
Token.prototype.attrGet = function attrGet(name) {
  var idx = this.attrIndex(name), value = null;
  if (idx >= 0) {
    value = this.attrs[idx][1];
  }
  return value;
};


/**
 * Token.attrJoin(name, value)
 *
 * Join value to existing attribute via space. Or create new attribute if not
 * exists. Useful to operate with token classes.
 **/
Token.prototype.attrJoin = function attrJoin(name, value) {
  var idx = this.attrIndex(name);

  if (idx < 0) {
    this.attrPush([ name, value ]);
  } else {
    this.attrs[idx][1] = this.attrs[idx][1] + ' ' + value;
  }
};


module.exports = Token;


/***/ }),

/***/ 431:
/***/ (function(module, exports) {

module.exports=/[!-#%-\*,-/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E49\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC9\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD806[\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/

/***/ }),

/***/ 432:
/***/ (function(module, exports) {

/**
 * The base implementation of `_.clamp` which doesn't coerce arguments.
 *
 * @private
 * @param {number} number The number to clamp.
 * @param {number} [lower] The lower bound.
 * @param {number} upper The upper bound.
 * @returns {number} Returns the clamped number.
 */
function baseClamp(number, lower, upper) {
  if (number === number) {
    if (upper !== undefined) {
      number = number <= upper ? number : upper;
    }
    if (lower !== undefined) {
      number = number >= lower ? number : lower;
    }
  }
  return number;
}

module.exports = baseClamp;


/***/ }),

/***/ 433:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    next(function (vm) {
      var root = document.getElementsByTagName('html')[0];
      root.setAttribute('class', vm.pageStyle.type);
      vm.$store.commit('SET_NAV_STATE', { visible: vm.pageStyle.visible, minimized: vm.pageStyle.minimized });
      vm.$store.commit('SET_PAGE_STYLE', vm.pageStyle.type);
    });
  },
  beforeRouteLeave: function beforeRouteLeave(to, from, next) {
    var root = document.getElementsByTagName('html')[0];
    root.setAttribute('class', '');

    this.$store.commit('SET_PAGE_STYLE', undefined);
    next();
  }
});

/***/ }),

/***/ 434:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// HTML5 entities map: { name -> utf16string }
//


/*eslint quotes:0*/
module.exports = __webpack_require__(446);


/***/ }),

/***/ 435:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Regexps to match html elements



var attr_name     = '[a-zA-Z_:][a-zA-Z0-9:._-]*';

var unquoted      = '[^"\'=<>`\\x00-\\x20]+';
var single_quoted = "'[^']*'";
var double_quoted = '"[^"]*"';

var attr_value  = '(?:' + unquoted + '|' + single_quoted + '|' + double_quoted + ')';

var attribute   = '(?:\\s+' + attr_name + '(?:\\s*=\\s*' + attr_value + ')?)';

var open_tag    = '<[A-Za-z][A-Za-z0-9\\-]*' + attribute + '*\\s*\\/?>';

var close_tag   = '<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>';
var comment     = '<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->';
var processing  = '<[?].*?[?]>';
var declaration = '<![A-Z]+\\s+[^>]*>';
var cdata       = '<!\\[CDATA\\[[\\s\\S]*?\\]\\]>';

var HTML_TAG_RE = new RegExp('^(?:' + open_tag + '|' + close_tag + '|' + comment +
                        '|' + processing + '|' + declaration + '|' + cdata + ')');
var HTML_OPEN_CLOSE_TAG_RE = new RegExp('^(?:' + open_tag + '|' + close_tag + ')');

module.exports.HTML_TAG_RE = HTML_TAG_RE;
module.exports.HTML_OPEN_CLOSE_TAG_RE = HTML_OPEN_CLOSE_TAG_RE;


/***/ }),

/***/ 436:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Process *this* and _that_
//



// Insert each marker as a separate text token, and add it to delimiter list
//
module.exports.tokenize = function emphasis(state, silent) {
  var i, scanned, token,
      start = state.pos,
      marker = state.src.charCodeAt(start);

  if (silent) { return false; }

  if (marker !== 0x5F /* _ */ && marker !== 0x2A /* * */) { return false; }

  scanned = state.scanDelims(state.pos, marker === 0x2A);

  for (i = 0; i < scanned.length; i++) {
    token         = state.push('text', '', 0);
    token.content = String.fromCharCode(marker);

    state.delimiters.push({
      // Char code of the starting marker (number).
      //
      marker: marker,

      // Total length of these series of delimiters.
      //
      length: scanned.length,

      // An amount of characters before this one that's equivalent to
      // current one. In plain English: if this delimiter does not open
      // an emphasis, neither do previous `jump` characters.
      //
      // Used to skip sequences like "*****" in one step, for 1st asterisk
      // value will be 0, for 2nd it's 1 and so on.
      //
      jump:   i,

      // A position of the token this delimiter corresponds to.
      //
      token:  state.tokens.length - 1,

      // Token level.
      //
      level:  state.level,

      // If this delimiter is matched as a valid opener, `end` will be
      // equal to its position, otherwise it's `-1`.
      //
      end:    -1,

      // Boolean flags that determine if this delimiter could open or close
      // an emphasis.
      //
      open:   scanned.can_open,
      close:  scanned.can_close
    });
  }

  state.pos += scanned.length;

  return true;
};


// Walk through delimiter list and replace text tokens with tags
//
module.exports.postProcess = function emphasis(state) {
  var i,
      startDelim,
      endDelim,
      token,
      ch,
      isStrong,
      delimiters = state.delimiters,
      max = state.delimiters.length;

  for (i = max - 1; i >= 0; i--) {
    startDelim = delimiters[i];

    if (startDelim.marker !== 0x5F/* _ */ && startDelim.marker !== 0x2A/* * */) {
      continue;
    }

    // Process only opening markers
    if (startDelim.end === -1) {
      continue;
    }

    endDelim = delimiters[startDelim.end];

    // If the previous delimiter has the same marker and is adjacent to this one,
    // merge those into one strong delimiter.
    //
    // `<em><em>whatever</em></em>` -> `<strong>whatever</strong>`
    //
    isStrong = i > 0 &&
               delimiters[i - 1].end === startDelim.end + 1 &&
               delimiters[i - 1].token === startDelim.token - 1 &&
               delimiters[startDelim.end + 1].token === endDelim.token + 1 &&
               delimiters[i - 1].marker === startDelim.marker;

    ch = String.fromCharCode(startDelim.marker);

    token         = state.tokens[startDelim.token];
    token.type    = isStrong ? 'strong_open' : 'em_open';
    token.tag     = isStrong ? 'strong' : 'em';
    token.nesting = 1;
    token.markup  = isStrong ? ch + ch : ch;
    token.content = '';

    token         = state.tokens[endDelim.token];
    token.type    = isStrong ? 'strong_close' : 'em_close';
    token.tag     = isStrong ? 'strong' : 'em';
    token.nesting = -1;
    token.markup  = isStrong ? ch + ch : ch;
    token.content = '';

    if (isStrong) {
      state.tokens[delimiters[i - 1].token].content = '';
      state.tokens[delimiters[startDelim.end + 1].token].content = '';
      i--;
    }
  }
};


/***/ }),

/***/ 437:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// ~~strike through~~
//



// Insert each marker as a separate text token, and add it to delimiter list
//
module.exports.tokenize = function strikethrough(state, silent) {
  var i, scanned, token, len, ch,
      start = state.pos,
      marker = state.src.charCodeAt(start);

  if (silent) { return false; }

  if (marker !== 0x7E/* ~ */) { return false; }

  scanned = state.scanDelims(state.pos, true);
  len = scanned.length;
  ch = String.fromCharCode(marker);

  if (len < 2) { return false; }

  if (len % 2) {
    token         = state.push('text', '', 0);
    token.content = ch;
    len--;
  }

  for (i = 0; i < len; i += 2) {
    token         = state.push('text', '', 0);
    token.content = ch + ch;

    state.delimiters.push({
      marker: marker,
      jump:   i,
      token:  state.tokens.length - 1,
      level:  state.level,
      end:    -1,
      open:   scanned.can_open,
      close:  scanned.can_close
    });
  }

  state.pos += scanned.length;

  return true;
};


// Walk through delimiter list and replace text tokens with tags
//
module.exports.postProcess = function strikethrough(state) {
  var i, j,
      startDelim,
      endDelim,
      token,
      loneMarkers = [],
      delimiters = state.delimiters,
      max = state.delimiters.length;

  for (i = 0; i < max; i++) {
    startDelim = delimiters[i];

    if (startDelim.marker !== 0x7E/* ~ */) {
      continue;
    }

    if (startDelim.end === -1) {
      continue;
    }

    endDelim = delimiters[startDelim.end];

    token         = state.tokens[startDelim.token];
    token.type    = 's_open';
    token.tag     = 's';
    token.nesting = 1;
    token.markup  = '~~';
    token.content = '';

    token         = state.tokens[endDelim.token];
    token.type    = 's_close';
    token.tag     = 's';
    token.nesting = -1;
    token.markup  = '~~';
    token.content = '';

    if (state.tokens[endDelim.token - 1].type === 'text' &&
        state.tokens[endDelim.token - 1].content === '~') {

      loneMarkers.push(endDelim.token - 1);
    }
  }

  // If a marker sequence has an odd number of characters, it's splitted
  // like this: `~~~~~` -> `~` + `~~` + `~~`, leaving one marker at the
  // start of the sequence.
  //
  // So, we have to move all those markers after subsequent s_close tags.
  //
  while (loneMarkers.length) {
    i = loneMarkers.pop();
    j = i + 1;

    while (j < state.tokens.length && state.tokens[j].type === 's_close') {
      j++;
    }

    j--;

    if (i !== j) {
      token = state.tokens[j];
      state.tokens[j] = state.tokens[i];
      state.tokens[i] = token;
    }
  }
};


/***/ }),

/***/ 438:
/***/ (function(module, exports, __webpack_require__) {

"use strict";



module.exports.encode = __webpack_require__(495);
module.exports.decode = __webpack_require__(494);
module.exports.format = __webpack_require__(496);
module.exports.parse  = __webpack_require__(497);


/***/ }),

/***/ 439:
/***/ (function(module, exports) {

module.exports=/[\0-\x1F\x7F-\x9F]/

/***/ }),

/***/ 440:
/***/ (function(module, exports) {

module.exports=/[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/

/***/ }),

/***/ 441:
/***/ (function(module, exports) {

module.exports=/[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/

/***/ }),

/***/ 442:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, global) {var __WEBPACK_AMD_DEFINE_RESULT__;/*! https://mths.be/punycode v1.4.1 by @mathias */
;(function(root) {

	/** Detect free variables */
	var freeExports = typeof exports == 'object' && exports &&
		!exports.nodeType && exports;
	var freeModule = typeof module == 'object' && module &&
		!module.nodeType && module;
	var freeGlobal = typeof global == 'object' && global;
	if (
		freeGlobal.global === freeGlobal ||
		freeGlobal.window === freeGlobal ||
		freeGlobal.self === freeGlobal
	) {
		root = freeGlobal;
	}

	/**
	 * The `punycode` object.
	 * @name punycode
	 * @type Object
	 */
	var punycode,

	/** Highest positive signed 32-bit float value */
	maxInt = 2147483647, // aka. 0x7FFFFFFF or 2^31-1

	/** Bootstring parameters */
	base = 36,
	tMin = 1,
	tMax = 26,
	skew = 38,
	damp = 700,
	initialBias = 72,
	initialN = 128, // 0x80
	delimiter = '-', // '\x2D'

	/** Regular expressions */
	regexPunycode = /^xn--/,
	regexNonASCII = /[^\x20-\x7E]/, // unprintable ASCII chars + non-ASCII chars
	regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g, // RFC 3490 separators

	/** Error messages */
	errors = {
		'overflow': 'Overflow: input needs wider integers to process',
		'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
		'invalid-input': 'Invalid input'
	},

	/** Convenience shortcuts */
	baseMinusTMin = base - tMin,
	floor = Math.floor,
	stringFromCharCode = String.fromCharCode,

	/** Temporary variable */
	key;

	/*--------------------------------------------------------------------------*/

	/**
	 * A generic error utility function.
	 * @private
	 * @param {String} type The error type.
	 * @returns {Error} Throws a `RangeError` with the applicable error message.
	 */
	function error(type) {
		throw new RangeError(errors[type]);
	}

	/**
	 * A generic `Array#map` utility function.
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} callback The function that gets called for every array
	 * item.
	 * @returns {Array} A new array of values returned by the callback function.
	 */
	function map(array, fn) {
		var length = array.length;
		var result = [];
		while (length--) {
			result[length] = fn(array[length]);
		}
		return result;
	}

	/**
	 * A simple `Array#map`-like wrapper to work with domain name strings or email
	 * addresses.
	 * @private
	 * @param {String} domain The domain name or email address.
	 * @param {Function} callback The function that gets called for every
	 * character.
	 * @returns {Array} A new string of characters returned by the callback
	 * function.
	 */
	function mapDomain(string, fn) {
		var parts = string.split('@');
		var result = '';
		if (parts.length > 1) {
			// In email addresses, only the domain name should be punycoded. Leave
			// the local part (i.e. everything up to `@`) intact.
			result = parts[0] + '@';
			string = parts[1];
		}
		// Avoid `split(regex)` for IE8 compatibility. See #17.
		string = string.replace(regexSeparators, '\x2E');
		var labels = string.split('.');
		var encoded = map(labels, fn).join('.');
		return result + encoded;
	}

	/**
	 * Creates an array containing the numeric code points of each Unicode
	 * character in the string. While JavaScript uses UCS-2 internally,
	 * this function will convert a pair of surrogate halves (each of which
	 * UCS-2 exposes as separate characters) into a single code point,
	 * matching UTF-16.
	 * @see `punycode.ucs2.encode`
	 * @see <https://mathiasbynens.be/notes/javascript-encoding>
	 * @memberOf punycode.ucs2
	 * @name decode
	 * @param {String} string The Unicode input string (UCS-2).
	 * @returns {Array} The new array of code points.
	 */
	function ucs2decode(string) {
		var output = [],
		    counter = 0,
		    length = string.length,
		    value,
		    extra;
		while (counter < length) {
			value = string.charCodeAt(counter++);
			if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
				// high surrogate, and there is a next character
				extra = string.charCodeAt(counter++);
				if ((extra & 0xFC00) == 0xDC00) { // low surrogate
					output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
				} else {
					// unmatched surrogate; only append this code unit, in case the next
					// code unit is the high surrogate of a surrogate pair
					output.push(value);
					counter--;
				}
			} else {
				output.push(value);
			}
		}
		return output;
	}

	/**
	 * Creates a string based on an array of numeric code points.
	 * @see `punycode.ucs2.decode`
	 * @memberOf punycode.ucs2
	 * @name encode
	 * @param {Array} codePoints The array of numeric code points.
	 * @returns {String} The new Unicode string (UCS-2).
	 */
	function ucs2encode(array) {
		return map(array, function(value) {
			var output = '';
			if (value > 0xFFFF) {
				value -= 0x10000;
				output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
				value = 0xDC00 | value & 0x3FF;
			}
			output += stringFromCharCode(value);
			return output;
		}).join('');
	}

	/**
	 * Converts a basic code point into a digit/integer.
	 * @see `digitToBasic()`
	 * @private
	 * @param {Number} codePoint The basic numeric code point value.
	 * @returns {Number} The numeric value of a basic code point (for use in
	 * representing integers) in the range `0` to `base - 1`, or `base` if
	 * the code point does not represent a value.
	 */
	function basicToDigit(codePoint) {
		if (codePoint - 48 < 10) {
			return codePoint - 22;
		}
		if (codePoint - 65 < 26) {
			return codePoint - 65;
		}
		if (codePoint - 97 < 26) {
			return codePoint - 97;
		}
		return base;
	}

	/**
	 * Converts a digit/integer into a basic code point.
	 * @see `basicToDigit()`
	 * @private
	 * @param {Number} digit The numeric value of a basic code point.
	 * @returns {Number} The basic code point whose value (when used for
	 * representing integers) is `digit`, which needs to be in the range
	 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
	 * used; else, the lowercase form is used. The behavior is undefined
	 * if `flag` is non-zero and `digit` has no uppercase form.
	 */
	function digitToBasic(digit, flag) {
		//  0..25 map to ASCII a..z or A..Z
		// 26..35 map to ASCII 0..9
		return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
	}

	/**
	 * Bias adaptation function as per section 3.4 of RFC 3492.
	 * https://tools.ietf.org/html/rfc3492#section-3.4
	 * @private
	 */
	function adapt(delta, numPoints, firstTime) {
		var k = 0;
		delta = firstTime ? floor(delta / damp) : delta >> 1;
		delta += floor(delta / numPoints);
		for (/* no initialization */; delta > baseMinusTMin * tMax >> 1; k += base) {
			delta = floor(delta / baseMinusTMin);
		}
		return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
	}

	/**
	 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
	 * symbols.
	 * @memberOf punycode
	 * @param {String} input The Punycode string of ASCII-only symbols.
	 * @returns {String} The resulting string of Unicode symbols.
	 */
	function decode(input) {
		// Don't use UCS-2
		var output = [],
		    inputLength = input.length,
		    out,
		    i = 0,
		    n = initialN,
		    bias = initialBias,
		    basic,
		    j,
		    index,
		    oldi,
		    w,
		    k,
		    digit,
		    t,
		    /** Cached calculation results */
		    baseMinusT;

		// Handle the basic code points: let `basic` be the number of input code
		// points before the last delimiter, or `0` if there is none, then copy
		// the first basic code points to the output.

		basic = input.lastIndexOf(delimiter);
		if (basic < 0) {
			basic = 0;
		}

		for (j = 0; j < basic; ++j) {
			// if it's not a basic code point
			if (input.charCodeAt(j) >= 0x80) {
				error('not-basic');
			}
			output.push(input.charCodeAt(j));
		}

		// Main decoding loop: start just after the last delimiter if any basic code
		// points were copied; start at the beginning otherwise.

		for (index = basic > 0 ? basic + 1 : 0; index < inputLength; /* no final expression */) {

			// `index` is the index of the next character to be consumed.
			// Decode a generalized variable-length integer into `delta`,
			// which gets added to `i`. The overflow checking is easier
			// if we increase `i` as we go, then subtract off its starting
			// value at the end to obtain `delta`.
			for (oldi = i, w = 1, k = base; /* no condition */; k += base) {

				if (index >= inputLength) {
					error('invalid-input');
				}

				digit = basicToDigit(input.charCodeAt(index++));

				if (digit >= base || digit > floor((maxInt - i) / w)) {
					error('overflow');
				}

				i += digit * w;
				t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);

				if (digit < t) {
					break;
				}

				baseMinusT = base - t;
				if (w > floor(maxInt / baseMinusT)) {
					error('overflow');
				}

				w *= baseMinusT;

			}

			out = output.length + 1;
			bias = adapt(i - oldi, out, oldi == 0);

			// `i` was supposed to wrap around from `out` to `0`,
			// incrementing `n` each time, so we'll fix that now:
			if (floor(i / out) > maxInt - n) {
				error('overflow');
			}

			n += floor(i / out);
			i %= out;

			// Insert `n` at position `i` of the output
			output.splice(i++, 0, n);

		}

		return ucs2encode(output);
	}

	/**
	 * Converts a string of Unicode symbols (e.g. a domain name label) to a
	 * Punycode string of ASCII-only symbols.
	 * @memberOf punycode
	 * @param {String} input The string of Unicode symbols.
	 * @returns {String} The resulting Punycode string of ASCII-only symbols.
	 */
	function encode(input) {
		var n,
		    delta,
		    handledCPCount,
		    basicLength,
		    bias,
		    j,
		    m,
		    q,
		    k,
		    t,
		    currentValue,
		    output = [],
		    /** `inputLength` will hold the number of code points in `input`. */
		    inputLength,
		    /** Cached calculation results */
		    handledCPCountPlusOne,
		    baseMinusT,
		    qMinusT;

		// Convert the input in UCS-2 to Unicode
		input = ucs2decode(input);

		// Cache the length
		inputLength = input.length;

		// Initialize the state
		n = initialN;
		delta = 0;
		bias = initialBias;

		// Handle the basic code points
		for (j = 0; j < inputLength; ++j) {
			currentValue = input[j];
			if (currentValue < 0x80) {
				output.push(stringFromCharCode(currentValue));
			}
		}

		handledCPCount = basicLength = output.length;

		// `handledCPCount` is the number of code points that have been handled;
		// `basicLength` is the number of basic code points.

		// Finish the basic string - if it is not empty - with a delimiter
		if (basicLength) {
			output.push(delimiter);
		}

		// Main encoding loop:
		while (handledCPCount < inputLength) {

			// All non-basic code points < n have been handled already. Find the next
			// larger one:
			for (m = maxInt, j = 0; j < inputLength; ++j) {
				currentValue = input[j];
				if (currentValue >= n && currentValue < m) {
					m = currentValue;
				}
			}

			// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
			// but guard against overflow
			handledCPCountPlusOne = handledCPCount + 1;
			if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
				error('overflow');
			}

			delta += (m - n) * handledCPCountPlusOne;
			n = m;

			for (j = 0; j < inputLength; ++j) {
				currentValue = input[j];

				if (currentValue < n && ++delta > maxInt) {
					error('overflow');
				}

				if (currentValue == n) {
					// Represent delta as a generalized variable-length integer
					for (q = delta, k = base; /* no condition */; k += base) {
						t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
						if (q < t) {
							break;
						}
						qMinusT = q - t;
						baseMinusT = base - t;
						output.push(
							stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0))
						);
						q = floor(qMinusT / baseMinusT);
					}

					output.push(stringFromCharCode(digitToBasic(q, 0)));
					bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
					delta = 0;
					++handledCPCount;
				}
			}

			++delta;
			++n;

		}
		return output.join('');
	}

	/**
	 * Converts a Punycode string representing a domain name or an email address
	 * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
	 * it doesn't matter if you call it on a string that has already been
	 * converted to Unicode.
	 * @memberOf punycode
	 * @param {String} input The Punycoded domain name or email address to
	 * convert to Unicode.
	 * @returns {String} The Unicode representation of the given Punycode
	 * string.
	 */
	function toUnicode(input) {
		return mapDomain(input, function(string) {
			return regexPunycode.test(string)
				? decode(string.slice(4).toLowerCase())
				: string;
		});
	}

	/**
	 * Converts a Unicode string representing a domain name or an email address to
	 * Punycode. Only the non-ASCII parts of the domain name will be converted,
	 * i.e. it doesn't matter if you call it with a domain that's already in
	 * ASCII.
	 * @memberOf punycode
	 * @param {String} input The domain name or email address to convert, as a
	 * Unicode string.
	 * @returns {String} The Punycode representation of the given domain name or
	 * email address.
	 */
	function toASCII(input) {
		return mapDomain(input, function(string) {
			return regexNonASCII.test(string)
				? 'xn--' + encode(string)
				: string;
		});
	}

	/*--------------------------------------------------------------------------*/

	/** Define the public API */
	punycode = {
		/**
		 * A string representing the current Punycode.js version number.
		 * @memberOf punycode
		 * @type String
		 */
		'version': '1.4.1',
		/**
		 * An object of methods to convert from JavaScript's internal character
		 * representation (UCS-2) to Unicode code points, and back.
		 * @see <https://mathiasbynens.be/notes/javascript-encoding>
		 * @memberOf punycode
		 * @type Object
		 */
		'ucs2': {
			'decode': ucs2decode,
			'encode': ucs2encode
		},
		'decode': decode,
		'encode': encode,
		'toASCII': toASCII,
		'toUnicode': toUnicode
	};

	/** Expose `punycode` */
	// Some AMD build optimizers, like r.js, check for specific condition patterns
	// like the following:
	if (
		true
	) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
			return punycode;
		}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else if (freeExports && freeModule) {
		if (module.exports == freeExports) {
			// in Node.js, io.js, or RingoJS v0.8.0+
			freeModule.exports = punycode;
		} else {
			// in Narwhal or RingoJS v0.7.0-
			for (key in punycode) {
				punycode.hasOwnProperty(key) && (freeExports[key] = punycode[key]);
			}
		}
	} else {
		// in Rhino or a web browser
		root.punycode = punycode;
	}

}(this));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(20)(module), __webpack_require__(1)))

/***/ }),

/***/ 443:
/***/ (function(module, exports, __webpack_require__) {

"use strict";



module.exports = __webpack_require__(455);


/***/ }),

/***/ 444:
/***/ (function(module, exports, __webpack_require__) {

var require;var require;/*! fourcorners 28-09-2017 */

!function(a){if(true)module.exports=a();else if("function"==typeof define&&define.amd)define([],a);else{var b;b="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,b.fourcorners=a()}}(function(){var a;return function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return require(g,!0);if(f)return f(g,!0);var j=new Error("Cannot find module '"+g+"'");throw j.code="MODULE_NOT_FOUND",j}var k=c[g]={exports:{}};b[g][0].call(k.exports,function(a){var c=b[g][1][a];return e(c||a)},k,k.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(a,b,c){},{}],2:[function(a,b,c){arguments[4][1][0].apply(c,arguments)},{dup:1}],3:[function(b,c,d){!function(b,d,e,f){"use strict";function g(a,b,c){return setTimeout(l(a,c),b)}function h(a,b,c){return!!Array.isArray(a)&&(i(a,c[b],c),!0)}function i(a,b,c){var d;if(a)if(a.forEach)a.forEach(b,c);else if(a.length!==f)for(d=0;d<a.length;)b.call(c,a[d],d,a),d++;else for(d in a)a.hasOwnProperty(d)&&b.call(c,a[d],d,a)}function j(a,c,d){var e="DEPRECATED METHOD: "+c+"\n"+d+" AT \n";return function(){var c=new Error("get-stack-trace"),d=c&&c.stack?c.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",f=b.console&&(b.console.warn||b.console.log);return f&&f.call(b.console,e,d),a.apply(this,arguments)}}function k(a,b,c){var d,e=b.prototype;d=a.prototype=Object.create(e),d.constructor=a,d._super=e,c&&ma(d,c)}function l(a,b){return function(){return a.apply(b,arguments)}}function m(a,b){return typeof a==pa?a.apply(b?b[0]||f:f,b):a}function n(a,b){return a===f?b:a}function o(a,b,c){i(s(b),function(b){a.addEventListener(b,c,!1)})}function p(a,b,c){i(s(b),function(b){a.removeEventListener(b,c,!1)})}function q(a,b){for(;a;){if(a==b)return!0;a=a.parentNode}return!1}function r(a,b){return a.indexOf(b)>-1}function s(a){return a.trim().split(/\s+/g)}function t(a,b,c){if(a.indexOf&&!c)return a.indexOf(b);for(var d=0;d<a.length;){if(c&&a[d][c]==b||!c&&a[d]===b)return d;d++}return-1}function u(a){return Array.prototype.slice.call(a,0)}function v(a,b,c){for(var d=[],e=[],f=0;f<a.length;){var g=b?a[f][b]:a[f];t(e,g)<0&&d.push(a[f]),e[f]=g,f++}return c&&(d=b?d.sort(function(a,c){return a[b]>c[b]}):d.sort()),d}function w(a,b){for(var c,d,e=b[0].toUpperCase()+b.slice(1),g=0;g<na.length;){if(c=na[g],(d=c?c+e:b)in a)return d;g++}return f}function x(){return va++}function y(a){var c=a.ownerDocument||a;return c.defaultView||c.parentWindow||b}function z(a,b){var c=this;this.manager=a,this.callback=b,this.element=a.element,this.target=a.options.inputTarget,this.domHandler=function(b){m(a.options.enable,[a])&&c.handler(b)},this.init()}function A(a){var b=a.options.inputClass;return new(b||(ya?O:za?R:xa?T:N))(a,B)}function B(a,b,c){var d=c.pointers.length,e=c.changedPointers.length,f=b&Ba&&d-e==0,g=b&(Da|Ea)&&d-e==0;c.isFirst=!!f,c.isFinal=!!g,f&&(a.session={}),c.eventType=b,C(a,c),a.emit("hammer.input",c),a.recognize(c),a.session.prevInput=c}function C(a,b){var c=a.session,d=b.pointers,e=d.length;c.firstInput||(c.firstInput=F(b)),e>1&&!c.firstMultiple?c.firstMultiple=F(b):1===e&&(c.firstMultiple=!1);var f=c.firstInput,g=c.firstMultiple,h=g?g.center:f.center,i=b.center=G(d);b.timeStamp=sa(),b.deltaTime=b.timeStamp-f.timeStamp,b.angle=K(h,i),b.distance=J(h,i),D(c,b),b.offsetDirection=I(b.deltaX,b.deltaY);var j=H(b.deltaTime,b.deltaX,b.deltaY);b.overallVelocityX=j.x,b.overallVelocityY=j.y,b.overallVelocity=ra(j.x)>ra(j.y)?j.x:j.y,b.scale=g?M(g.pointers,d):1,b.rotation=g?L(g.pointers,d):0,b.maxPointers=c.prevInput?b.pointers.length>c.prevInput.maxPointers?b.pointers.length:c.prevInput.maxPointers:b.pointers.length,E(c,b);var k=a.element;q(b.srcEvent.target,k)&&(k=b.srcEvent.target),b.target=k}function D(a,b){var c=b.center,d=a.offsetDelta||{},e=a.prevDelta||{},f=a.prevInput||{};b.eventType!==Ba&&f.eventType!==Da||(e=a.prevDelta={x:f.deltaX||0,y:f.deltaY||0},d=a.offsetDelta={x:c.x,y:c.y}),b.deltaX=e.x+(c.x-d.x),b.deltaY=e.y+(c.y-d.y)}function E(a,b){var c,d,e,g,h=a.lastInterval||b,i=b.timeStamp-h.timeStamp;if(b.eventType!=Ea&&(i>Aa||h.velocity===f)){var j=b.deltaX-h.deltaX,k=b.deltaY-h.deltaY,l=H(i,j,k);d=l.x,e=l.y,c=ra(l.x)>ra(l.y)?l.x:l.y,g=I(j,k),a.lastInterval=b}else c=h.velocity,d=h.velocityX,e=h.velocityY,g=h.direction;b.velocity=c,b.velocityX=d,b.velocityY=e,b.direction=g}function F(a){for(var b=[],c=0;c<a.pointers.length;)b[c]={clientX:qa(a.pointers[c].clientX),clientY:qa(a.pointers[c].clientY)},c++;return{timeStamp:sa(),pointers:b,center:G(b),deltaX:a.deltaX,deltaY:a.deltaY}}function G(a){var b=a.length;if(1===b)return{x:qa(a[0].clientX),y:qa(a[0].clientY)};for(var c=0,d=0,e=0;e<b;)c+=a[e].clientX,d+=a[e].clientY,e++;return{x:qa(c/b),y:qa(d/b)}}function H(a,b,c){return{x:b/a||0,y:c/a||0}}function I(a,b){return a===b?Fa:ra(a)>=ra(b)?a<0?Ga:Ha:b<0?Ia:Ja}function J(a,b,c){c||(c=Na);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return Math.sqrt(d*d+e*e)}function K(a,b,c){c||(c=Na);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return 180*Math.atan2(e,d)/Math.PI}function L(a,b){return K(b[1],b[0],Oa)+K(a[1],a[0],Oa)}function M(a,b){return J(b[0],b[1],Oa)/J(a[0],a[1],Oa)}function N(){this.evEl=Qa,this.evWin=Ra,this.pressed=!1,z.apply(this,arguments)}function O(){this.evEl=Ua,this.evWin=Va,z.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}function P(){this.evTarget=Xa,this.evWin=Ya,this.started=!1,z.apply(this,arguments)}function Q(a,b){var c=u(a.touches),d=u(a.changedTouches);return b&(Da|Ea)&&(c=v(c.concat(d),"identifier",!0)),[c,d]}function R(){this.evTarget=$a,this.targetIds={},z.apply(this,arguments)}function S(a,b){var c=u(a.touches),d=this.targetIds;if(b&(Ba|Ca)&&1===c.length)return d[c[0].identifier]=!0,[c,c];var e,f,g=u(a.changedTouches),h=[],i=this.target;if(f=c.filter(function(a){return q(a.target,i)}),b===Ba)for(e=0;e<f.length;)d[f[e].identifier]=!0,e++;for(e=0;e<g.length;)d[g[e].identifier]&&h.push(g[e]),b&(Da|Ea)&&delete d[g[e].identifier],e++;return h.length?[v(f.concat(h),"identifier",!0),h]:void 0}function T(){z.apply(this,arguments);var a=l(this.handler,this);this.touch=new R(this.manager,a),this.mouse=new N(this.manager,a),this.primaryTouch=null,this.lastTouches=[]}function U(a,b){a&Ba?(this.primaryTouch=b.changedPointers[0].identifier,V.call(this,b)):a&(Da|Ea)&&V.call(this,b)}function V(a){var b=a.changedPointers[0];if(b.identifier===this.primaryTouch){var c={x:b.clientX,y:b.clientY};this.lastTouches.push(c);var d=this.lastTouches,e=function(){var a=d.indexOf(c);a>-1&&d.splice(a,1)};setTimeout(e,_a)}}function W(a){for(var b=a.srcEvent.clientX,c=a.srcEvent.clientY,d=0;d<this.lastTouches.length;d++){var e=this.lastTouches[d],f=Math.abs(b-e.x),g=Math.abs(c-e.y);if(f<=ab&&g<=ab)return!0}return!1}function X(a,b){this.manager=a,this.set(b)}function Y(a){if(r(a,fb))return fb;var b=r(a,gb),c=r(a,hb);return b&&c?fb:b||c?b?gb:hb:r(a,eb)?eb:db}function Z(a){this.options=ma({},this.defaults,a||{}),this.id=x(),this.manager=null,this.options.enable=n(this.options.enable,!0),this.state=jb,this.simultaneous={},this.requireFail=[]}function $(a){return a&ob?"cancel":a&mb?"end":a&lb?"move":a&kb?"start":""}function _(a){return a==Ja?"down":a==Ia?"up":a==Ga?"left":a==Ha?"right":""}function aa(a,b){var c=b.manager;return c?c.get(a):a}function ba(){Z.apply(this,arguments)}function ca(){ba.apply(this,arguments),this.pX=null,this.pY=null}function da(){ba.apply(this,arguments)}function ea(){Z.apply(this,arguments),this._timer=null,this._input=null}function fa(){ba.apply(this,arguments)}function ga(){ba.apply(this,arguments)}function ha(){Z.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function ia(a,b){return b=b||{},b.recognizers=n(b.recognizers,ia.defaults.preset),new ja(a,b)}function ja(a,b){this.options=ma({},ia.defaults,b||{}),this.options.inputTarget=this.options.inputTarget||a,this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=a,this.input=A(this),this.touchAction=new X(this,this.options.touchAction),ka(this,!0),i(this.options.recognizers,function(a){var b=this.add(new a[0](a[1]));a[2]&&b.recognizeWith(a[2]),a[3]&&b.requireFailure(a[3])},this)}function ka(a,b){var c=a.element;if(c.style){var d;i(a.options.cssProps,function(e,f){d=w(c.style,f),b?(a.oldCssProps[d]=c.style[d],c.style[d]=e):c.style[d]=a.oldCssProps[d]||""}),b||(a.oldCssProps={})}}function la(a,b){var c=d.createEvent("Event");c.initEvent(a,!0,!0),c.gesture=b,b.target.dispatchEvent(c)}var ma,na=["","webkit","Moz","MS","ms","o"],oa=d.createElement("div"),pa="function",qa=Math.round,ra=Math.abs,sa=Date.now;ma="function"!=typeof Object.assign?function(a){if(a===f||null===a)throw new TypeError("Cannot convert undefined or null to object");for(var b=Object(a),c=1;c<arguments.length;c++){var d=arguments[c];if(d!==f&&null!==d)for(var e in d)d.hasOwnProperty(e)&&(b[e]=d[e])}return b}:Object.assign;var ta=j(function(a,b,c){for(var d=Object.keys(b),e=0;e<d.length;)(!c||c&&a[d[e]]===f)&&(a[d[e]]=b[d[e]]),e++;return a},"extend","Use `assign`."),ua=j(function(a,b){return ta(a,b,!0)},"merge","Use `assign`."),va=1,wa=/mobile|tablet|ip(ad|hone|od)|android/i,xa="ontouchstart"in b,ya=w(b,"PointerEvent")!==f,za=xa&&wa.test(navigator.userAgent),Aa=25,Ba=1,Ca=2,Da=4,Ea=8,Fa=1,Ga=2,Ha=4,Ia=8,Ja=16,Ka=Ga|Ha,La=Ia|Ja,Ma=Ka|La,Na=["x","y"],Oa=["clientX","clientY"];z.prototype={handler:function(){},init:function(){this.evEl&&o(this.element,this.evEl,this.domHandler),this.evTarget&&o(this.target,this.evTarget,this.domHandler),this.evWin&&o(y(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&p(this.element,this.evEl,this.domHandler),this.evTarget&&p(this.target,this.evTarget,this.domHandler),this.evWin&&p(y(this.element),this.evWin,this.domHandler)}};var Pa={mousedown:Ba,mousemove:Ca,mouseup:Da},Qa="mousedown",Ra="mousemove mouseup";k(N,z,{handler:function(a){var b=Pa[a.type];b&Ba&&0===a.button&&(this.pressed=!0),b&Ca&&1!==a.which&&(b=Da),this.pressed&&(b&Da&&(this.pressed=!1),this.callback(this.manager,b,{pointers:[a],changedPointers:[a],pointerType:"mouse",srcEvent:a}))}});var Sa={pointerdown:Ba,pointermove:Ca,pointerup:Da,pointercancel:Ea,pointerout:Ea},Ta={2:"touch",3:"pen",4:"mouse",5:"kinect"},Ua="pointerdown",Va="pointermove pointerup pointercancel";b.MSPointerEvent&&!b.PointerEvent&&(Ua="MSPointerDown",Va="MSPointerMove MSPointerUp MSPointerCancel"),k(O,z,{handler:function(a){var b=this.store,c=!1,d=a.type.toLowerCase().replace("ms",""),e=Sa[d],f=Ta[a.pointerType]||a.pointerType,g="touch"==f,h=t(b,a.pointerId,"pointerId");e&Ba&&(0===a.button||g)?h<0&&(b.push(a),h=b.length-1):e&(Da|Ea)&&(c=!0),h<0||(b[h]=a,this.callback(this.manager,e,{pointers:b,changedPointers:[a],pointerType:f,srcEvent:a}),c&&b.splice(h,1))}});var Wa={touchstart:Ba,touchmove:Ca,touchend:Da,touchcancel:Ea},Xa="touchstart",Ya="touchstart touchmove touchend touchcancel";k(P,z,{handler:function(a){var b=Wa[a.type];if(b===Ba&&(this.started=!0),this.started){var c=Q.call(this,a,b);b&(Da|Ea)&&c[0].length-c[1].length==0&&(this.started=!1),this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:"touch",srcEvent:a})}}});var Za={touchstart:Ba,touchmove:Ca,touchend:Da,touchcancel:Ea},$a="touchstart touchmove touchend touchcancel";k(R,z,{handler:function(a){var b=Za[a.type],c=S.call(this,a,b);c&&this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:"touch",srcEvent:a})}});var _a=2500,ab=25;k(T,z,{handler:function(a,b,c){var d="touch"==c.pointerType,e="mouse"==c.pointerType;if(!(e&&c.sourceCapabilities&&c.sourceCapabilities.firesTouchEvents)){if(d)U.call(this,b,c);else if(e&&W.call(this,c))return;this.callback(a,b,c)}},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var bb=w(oa.style,"touchAction"),cb=bb!==f,db="auto",eb="manipulation",fb="none",gb="pan-x",hb="pan-y",ib=function(){if(!cb)return!1;var a={},c=b.CSS&&b.CSS.supports;return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach(function(d){a[d]=!c||b.CSS.supports("touch-action",d)}),a}();X.prototype={set:function(a){"compute"==a&&(a=this.compute()),cb&&this.manager.element.style&&ib[a]&&(this.manager.element.style[bb]=a),this.actions=a.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var a=[];return i(this.manager.recognizers,function(b){m(b.options.enable,[b])&&(a=a.concat(b.getTouchAction()))}),Y(a.join(" "))},preventDefaults:function(a){var b=a.srcEvent,c=a.offsetDirection;if(this.manager.session.prevented)return void b.preventDefault();var d=this.actions,e=r(d,fb)&&!ib[fb],f=r(d,hb)&&!ib[hb],g=r(d,gb)&&!ib[gb];if(e){var h=1===a.pointers.length,i=a.distance<2,j=a.deltaTime<250;if(h&&i&&j)return}return g&&f?void 0:e||f&&c&Ka||g&&c&La?this.preventSrc(b):void 0},preventSrc:function(a){this.manager.session.prevented=!0,a.preventDefault()}};var jb=1,kb=2,lb=4,mb=8,nb=mb,ob=16;Z.prototype={defaults:{},set:function(a){return ma(this.options,a),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(a){if(h(a,"recognizeWith",this))return this;var b=this.simultaneous;return a=aa(a,this),b[a.id]||(b[a.id]=a,a.recognizeWith(this)),this},dropRecognizeWith:function(a){return h(a,"dropRecognizeWith",this)?this:(a=aa(a,this),delete this.simultaneous[a.id],this)},requireFailure:function(a){if(h(a,"requireFailure",this))return this;var b=this.requireFail;return a=aa(a,this),-1===t(b,a)&&(b.push(a),a.requireFailure(this)),this},dropRequireFailure:function(a){if(h(a,"dropRequireFailure",this))return this;a=aa(a,this);var b=t(this.requireFail,a);return b>-1&&this.requireFail.splice(b,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(a){return!!this.simultaneous[a.id]},emit:function(a){function b(b){c.manager.emit(b,a)}var c=this,d=this.state;d<mb&&b(c.options.event+$(d)),b(c.options.event),a.additionalEvent&&b(a.additionalEvent),d>=mb&&b(c.options.event+$(d))},tryEmit:function(a){if(this.canEmit())return this.emit(a);this.state=32},canEmit:function(){for(var a=0;a<this.requireFail.length;){if(!(this.requireFail[a].state&(32|jb)))return!1;a++}return!0},recognize:function(a){var b=ma({},a);if(!m(this.options.enable,[this,b]))return this.reset(),void(this.state=32);this.state&(nb|ob|32)&&(this.state=jb),this.state=this.process(b),this.state&(kb|lb|mb|ob)&&this.tryEmit(b)},process:function(a){},getTouchAction:function(){},reset:function(){}},k(ba,Z,{defaults:{pointers:1},attrTest:function(a){var b=this.options.pointers;return 0===b||a.pointers.length===b},process:function(a){var b=this.state,c=a.eventType,d=b&(kb|lb),e=this.attrTest(a);return d&&(c&Ea||!e)?b|ob:d||e?c&Da?b|mb:b&kb?b|lb:kb:32}}),k(ca,ba,{defaults:{event:"pan",threshold:10,pointers:1,direction:Ma},getTouchAction:function(){var a=this.options.direction,b=[];return a&Ka&&b.push(hb),a&La&&b.push(gb),b},directionTest:function(a){var b=this.options,c=!0,d=a.distance,e=a.direction,f=a.deltaX,g=a.deltaY;return e&b.direction||(b.direction&Ka?(e=0===f?Fa:f<0?Ga:Ha,c=f!=this.pX,d=Math.abs(a.deltaX)):(e=0===g?Fa:g<0?Ia:Ja,c=g!=this.pY,d=Math.abs(a.deltaY))),a.direction=e,c&&d>b.threshold&&e&b.direction},attrTest:function(a){return ba.prototype.attrTest.call(this,a)&&(this.state&kb||!(this.state&kb)&&this.directionTest(a))},emit:function(a){this.pX=a.deltaX,this.pY=a.deltaY;var b=_(a.direction);b&&(a.additionalEvent=this.options.event+b),this._super.emit.call(this,a)}}),k(da,ba,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[fb]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.scale-1)>this.options.threshold||this.state&kb)},emit:function(a){if(1!==a.scale){var b=a.scale<1?"in":"out";a.additionalEvent=this.options.event+b}this._super.emit.call(this,a)}}),k(ea,Z,{defaults:{event:"press",pointers:1,time:251,threshold:9},getTouchAction:function(){return[db]},process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,e=a.deltaTime>b.time;if(this._input=a,!d||!c||a.eventType&(Da|Ea)&&!e)this.reset();else if(a.eventType&Ba)this.reset(),this._timer=g(function(){this.state=nb,this.tryEmit()},b.time,this);else if(a.eventType&Da)return nb;return 32},reset:function(){clearTimeout(this._timer)},emit:function(a){this.state===nb&&(a&&a.eventType&Da?this.manager.emit(this.options.event+"up",a):(this._input.timeStamp=sa(),this.manager.emit(this.options.event,this._input)))}}),k(fa,ba,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[fb]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.rotation)>this.options.threshold||this.state&kb)}}),k(ga,ba,{defaults:{event:"swipe",threshold:10,velocity:.3,direction:Ka|La,pointers:1},getTouchAction:function(){return ca.prototype.getTouchAction.call(this)},attrTest:function(a){var b,c=this.options.direction;return c&(Ka|La)?b=a.overallVelocity:c&Ka?b=a.overallVelocityX:c&La&&(b=a.overallVelocityY),this._super.attrTest.call(this,a)&&c&a.offsetDirection&&a.distance>this.options.threshold&&a.maxPointers==this.options.pointers&&ra(b)>this.options.velocity&&a.eventType&Da},emit:function(a){var b=_(a.offsetDirection);b&&this.manager.emit(this.options.event+b,a),this.manager.emit(this.options.event,a)}}),k(ha,Z,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},getTouchAction:function(){return[eb]},process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,e=a.deltaTime<b.time;if(this.reset(),a.eventType&Ba&&0===this.count)return this.failTimeout();if(d&&e&&c){if(a.eventType!=Da)return this.failTimeout();var f=!this.pTime||a.timeStamp-this.pTime<b.interval,h=!this.pCenter||J(this.pCenter,a.center)<b.posThreshold;this.pTime=a.timeStamp,this.pCenter=a.center,h&&f?this.count+=1:this.count=1,this._input=a;if(0===this.count%b.taps)return this.hasRequireFailures()?(this._timer=g(function(){this.state=nb,this.tryEmit()},b.interval,this),kb):nb}return 32},failTimeout:function(){return this._timer=g(function(){this.state=32},this.options.interval,this),32},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==nb&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),ia.VERSION="2.0.7",ia.defaults={domEvents:!1,touchAction:"compute",enable:!0,inputTarget:null,inputClass:null,preset:[[fa,{enable:!1}],[da,{enable:!1},["rotate"]],[ga,{direction:Ka}],[ca,{direction:Ka},["swipe"]],[ha],[ha,{event:"doubletap",taps:2},["tap"]],[ea]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};ja.prototype={set:function(a){return ma(this.options,a),a.touchAction&&this.touchAction.update(),a.inputTarget&&(this.input.destroy(),this.input.target=a.inputTarget,this.input.init()),this},stop:function(a){this.session.stopped=a?2:1},recognize:function(a){var b=this.session;if(!b.stopped){this.touchAction.preventDefaults(a);var c,d=this.recognizers,e=b.curRecognizer;(!e||e&&e.state&nb)&&(e=b.curRecognizer=null);for(var f=0;f<d.length;)c=d[f],2===b.stopped||e&&c!=e&&!c.canRecognizeWith(e)?c.reset():c.recognize(a),!e&&c.state&(kb|lb|mb)&&(e=b.curRecognizer=c),f++}},get:function(a){if(a instanceof Z)return a;for(var b=this.recognizers,c=0;c<b.length;c++)if(b[c].options.event==a)return b[c];return null},add:function(a){if(h(a,"add",this))return this;var b=this.get(a.options.event);return b&&this.remove(b),this.recognizers.push(a),a.manager=this,this.touchAction.update(),a},remove:function(a){if(h(a,"remove",this))return this;if(a=this.get(a)){var b=this.recognizers,c=t(b,a);-1!==c&&(b.splice(c,1),this.touchAction.update())}return this},on:function(a,b){if(a!==f&&b!==f){var c=this.handlers;return i(s(a),function(a){c[a]=c[a]||[],c[a].push(b)}),this}},off:function(a,b){if(a!==f){var c=this.handlers;return i(s(a),function(a){b?c[a]&&c[a].splice(t(c[a],b),1):delete c[a]}),this}},emit:function(a,b){this.options.domEvents&&la(a,b);var c=this.handlers[a]&&this.handlers[a].slice();if(c&&c.length){b.type=a,b.preventDefault=function(){b.srcEvent.preventDefault()};for(var d=0;d<c.length;)c[d](b),d++}},destroy:function(){this.element&&ka(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},ma(ia,{INPUT_START:Ba,INPUT_MOVE:Ca,INPUT_END:Da,INPUT_CANCEL:Ea,STATE_POSSIBLE:jb,STATE_BEGAN:kb,STATE_CHANGED:lb,STATE_ENDED:mb,STATE_RECOGNIZED:nb,STATE_CANCELLED:ob,STATE_FAILED:32,DIRECTION_NONE:Fa,DIRECTION_LEFT:Ga,DIRECTION_RIGHT:Ha,DIRECTION_UP:Ia,DIRECTION_DOWN:Ja,DIRECTION_HORIZONTAL:Ka,DIRECTION_VERTICAL:La,DIRECTION_ALL:Ma,Manager:ja,Input:z,TouchAction:X,TouchInput:R,MouseInput:N,PointerEventInput:O,TouchMouseInput:T,SingleTouchInput:P,Recognizer:Z,AttrRecognizer:ba,Tap:ha,Pan:ca,Swipe:ga,Pinch:da,Rotate:fa,Press:ea,on:o,off:p,each:i,merge:ua,extend:ta,assign:ma,inherit:k,bindFn:l,prefixed:w}),(void 0!==b?b:"undefined"!=typeof self?self:{}).Hammer=ia,"function"==typeof a&&a.amd?a(function(){return ia}):void 0!==c&&c.exports?c.exports=ia:b.Hammer=ia}(window,document)},{}],4:[function(a,b,c){"use strict";function d(a,b){if(1===arguments.length){for(var c=a[0],e=1;e<a.length;e++)c=d(c,a[e]);return c}for(var f in b)if("class"===f){var g=a[f]||[];a[f]=(Array.isArray(g)?g:[g]).concat(b[f]||[])}else if("style"===f){var g=h(a[f]),i=h(b[f]);a[f]=g+i}else a[f]=b[f];return a}function e(a,b){for(var c,d="",e="",f=Array.isArray(b),h=0;h<a.length;h++)(c=g(a[h]))&&(f&&b[h]&&(c=k(c)),d=d+e+c,e=" ");return d}function f(a){var b="",c="";for(var d in a)d&&a[d]&&m.call(a,d)&&(b=b+c+d,c=" ");return b}function g(a,b){return Array.isArray(a)?e(a,b):a&&"object"==typeof a?f(a):a||""}function h(a){if(!a)return"";if("object"==typeof a){var b="";for(var c in a)m.call(a,c)&&(b=b+c+":"+a[c]+";");return b}return a+="",";"!==a[a.length-1]?a+";":a}function i(a,b,c,d){return!1!==b&&null!=b&&(b||"class"!==a&&"style"!==a)?!0===b?" "+(d?a:a+'="'+a+'"'):("function"==typeof b.toJSON&&(b=b.toJSON()),"string"==typeof b||(b=JSON.stringify(b),c||-1===b.indexOf('"'))?(c&&(b=k(b))," "+a+'="'+b+'"'):" "+a+"='"+b.replace(/'/g,"&#39;")+"'"):""}function j(a,b){var c="";for(var d in a)if(m.call(a,d)){var e=a[d];if("class"===d){e=g(e),c=i(d,e,!1,b)+c;continue}"style"===d&&(e=h(e)),c+=i(d,e,!1,b)}return c}function k(a){var b=""+a,c=n.exec(b);if(!c)return a;var d,e,f,g="";for(d=c.index,e=0;d<b.length;d++){switch(b.charCodeAt(d)){case 34:f="&quot;";break;case 38:f="&amp;";break;case 60:f="&lt;";break;case 62:f="&gt;";break;default:continue}e!==d&&(g+=b.substring(e,d)),e=d+1,g+=f}return e!==d?g+b.substring(e,d):g}function l(b,c,d,e){if(!(b instanceof Error))throw b;if(!("undefined"==typeof window&&c||e))throw b.message+=" on line "+d,b;try{e=e||a("fs").readFileSync(c,"utf8")}catch(a){l(b,null,d)}var f=3,g=e.split("\n"),h=Math.max(d-f,0),i=Math.min(g.length,d+f),f=g.slice(h,i).map(function(a,b){var c=b+h+1;return(c==d?"  > ":"    ")+c+"| "+a}).join("\n");throw b.path=c,b.message=(c||"Pug")+":"+d+"\n"+f+"\n\n"+b.message,b}var m=Object.prototype.hasOwnProperty;c.merge=d,c.classes=g,c.style=h,c.attr=i,c.attrs=j;var n=/["&<>]/;c.escape=k,c.rethrow=l},{fs:1}],5:[function(a,b,c){"use strict";function d(a){f(a.context),g(a.links),h(a.backStory),e(a.creativeCommons)}function e(a){if(a){var b=[];a.credit&&b.push(a.credit),a.year&&b.push(a.year),a.copyright&&b.push(a.copyright),a.formattedCopyright=b.length?"© "+b.join(", "):""}}function f(a){a&&a.forEach(function(a){a.credit&&(a.credit=i(a.credit,j))})}function g(a){a&&a.forEach(function(a){a.title?a.title=i(a.title,k):a.title=i(a.url,k)})}function h(a){a&&(a.author&&(a.author=i(a.author,l)),a.publication&&(a.publication=i(a.publication,m)))}var i=a("./helpers/shorten-text"),j=50,k=50,l=50,m=50;b.exports=function(a){d(a)}},{"./helpers/shorten-text":17}],6:[function(a,b,c){function d(a){var b=""+a,c=f.exec(b);if(!c)return a;var d,e,g,h="";for(d=c.index,e=0;d<b.length;d++){switch(b.charCodeAt(d)){case 34:g="&quot;";break;case 38:g="&amp;";break;case 60:g="&lt;";break;case 62:g="&gt;";break;default:continue}e!==d&&(h+=b.substring(e,d)),e=d+1,h+=g}return e!==d?h+b.substring(e,d):h}function e(a){var b,c="",e=a||{};return function(a){c+="\x3c!--",c+="Created by Tim Osadchiy on 06/09/2016.",c+="\n",c+="--\x3e",c+='<div class="fc-gallery-failed-image">',c+='<div class="fc-gallery-failed-image-caption" title="Failed to load image from: #{fullSrc}">',c+='<span class="fc-image-typo">',c+="Failed to load image from: ",c=c+d(null==(b=a)?"":b)+"</span></div></div>"}.call(this,"shortSrc"in e?e.shortSrc:"undefined"!=typeof shortSrc?shortSrc:void 0),c}a("pug-runtime");b.exports=e;var f=/["&<>]/},{fs:2,"pug-runtime":4}],7:[function(a,b,c){"use strict";function d(a,b,c){var d=[e,f,h,g],i=function(){var e=d.shift();e?e(a,function(a){a?b(a):i()}):c&&c()};i()}function e(a,b){var c=a.getAttribute(m)||a.src,d=l(n);if(0==d.length)b();else{for(var e=0,f=d.length;e<f;e++){var g=d[e],h=document.createElement("img"),i=g.getAttribute(n);if(h.src=i,i==c||h.src==c){return void b(j(g.innerHTML,g.type.replace("text/","")))}}b()}}function f(a,b){var c=a.getAttribute(m),d=c.match(/\.(yaml|json)$/),e=d?d[1]:d;if(!e)return void b();i(c,e,b)}function g(a,b){i(a.src.substr(0,a.src.lastIndexOf("."))+".yaml","yaml",b)}function h(a,b){i(a.src.substr(0,a.src.lastIndexOf("."))+".json","json",b)}function i(a,b,c){k(a,function(a){var d=j(a.responseText,b);c(d)},function(){c()})}function j(a,b){return"json"==b?JSON.parse(a):"yaml"==b?void console.warn("Four Corners:","YAML files are deprecated.","You can create new meta data files on","https://digitalinteraction.github.io/fourcorners-editor/"):void 0}function k(a,b,c){c=c||function(){};var d=new XMLHttpRequest;d.onreadystatechange=function(){d.readyState===XMLHttpRequest.DONE&&(200===d.status?b(d,a):c(d,a))},d.open("GET",a,!0),d.send()}var l=a("./helpers/get-all-elements-with-attribute"),m=(a("./helpers/xml-to-json"),"data-4c"),n=m+"-meta";b.exports=function(a,b){d(this,a,b)}},{"./helpers/get-all-elements-with-attribute":12,"./helpers/xml-to-json":18}],8:[function(a,b,c){"use strict";b.exports=function(a,b){a.classList?a.classList.add(b):a.className+=" "+b}},{}],9:[function(a,b,c){"use strict";b.exports=function(a,b,c){a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent?a.attachEvent("on"+b,c):a["on"+b]=c}},{}],10:[function(a,b,c){"use strict";b.exports=function(){!function(a){var b=function(a,b){var c=document.createEvent("CustomEvent");return c.initCustomEvent(b,!0,!0,a.target),a.target.dispatchEvent(c),c=null,!1},c=!0,d={x:0,y:0},e={x:0,y:0},f={touchstart:function(a){d={x:a.touches[0].pageX,y:a.touches[0].pageY}},touchmove:function(a){c=!1,e={x:a.touches[0].pageX,y:a.touches[0].pageY}},touchend:function(a){if(c)b(a,"fc");else{var f=e.x-d.x,g=Math.abs(f),h=e.y-d.y,i=Math.abs(h);Math.max(g,i)>20&&b(a,g>i?f<0?"swipeLeft":"swipeRight":h<0?"swipeUp":"swipeDown")}c=!0},touchcancel:function(a){c=!1}};for(var g in f)a.addEventListener(g,f[g],!1)}(document)}},{}],11:[function(a,b,c){"use strict";var d=a("./get-element-style");b.exports=function(a,b){var c=d(a);for(var e in c)c.hasOwnProperty(e)&&(b.style[e]=c[e])}},{"./get-element-style":13}],12:[function(a,b,c){"use strict";b.exports=function(a,b){void 0==b&&(b=document);var c=[],d=b.getElementsByTagName("*");return Array.prototype.forEach.call(d,function(b){null!==b.getAttribute(a)&&c.push(b)}),c}},{}],13:[function(a,b,c){"use strict";function d(a){var b,c,d;if(window.getComputedStyle){b=window.getComputedStyle(a,null),c={};for(var f=0,g=b.length;f<g;f++){var h=b[f],i=k(h),j=b.getPropertyValue(h);c[i]=j}}else if(b=a.currentStyle){c={};for(var h in b)c[h]=b[h]}if(c){d=e(a);for(var f in d)c[f]=d[f]}return c}function e(a){var b=document.styleSheets,c=a.getAttribute("style"),d={};a.matches=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.msMatchesSelector||a.oMatchesSelector;for(var e in b){try{var i=b[e].rules||b[e].cssRules}catch(a){continue}for(var j in i){var k=i[j].selectorText,l=i[j].cssText;try{if(!a.matches(k)||null==l.match("margin"))continue}catch(a){continue}var m=g(l);f(d,m)}}if(c){var m=h(c);f(d,m)}return d}function f(a,b){b.forEach(function(b){if(b[0].match("margin")){var c={};"margin"==b[0]?c=j(b[1]):c[b[0]]=b[1];for(var d in c)a[d]=c[d]}})}function g(a){return h(i(a))}function h(a){var b=a.split(/;/g);return b=b.filter(function(a){return a&&a.replace(/\s+/g,"")}),b.map(function(a){var b=a.split(":");return b[0]=k(b[0].replace(/\s+/g,"")),b[1]=b[1].replace(/\s\s+/g," ").replace(/(^\s+|\s+$)/g,""),b})}function i(a){return a.match(/{(.*?)}/g).map(function(a){return a.replace(/({|}|\s+)/g,"")})[0]}function j(a){var b=a.split(" ");return 1==b.length&&b.concat([b[0],b[0],b[0]]),2==b.length&&b.concat(b),3==b.length&&b.push(b[1]),{marginTop:b[0],marginRight:b[1],marginBottom:b[2],marginLeft:b[3]}}function k(a){return a.replace(/\-([a-z])/g,function(a,b){return b.toUpperCase()})}b.exports=function(a){return d(a)}},{}],14:[function(a,b,c){"use strict";b.exports=function(){return"ontouchstart"in window||navigator.maxTouchPoints}},{}],15:[function(a,b,c){"use strict";b.exports=function(a,b){a.classList?a.classList.remove(b):a.className=a.className.replace(new RegExp("(^|\\b)"+b.split(" ").join("|")+"(\\b|$)","gi")," ")}},{}],16:[function(a,b,c){"use strict";b.exports=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent?a.detachEvent("on"+b,c):a["on"+b]=null}},{}],17:[function(a,b,c){"use strict";b.exports=function(a,b,c){return a.length<b?a:c?"..."+a.substr(a.length-b,a.length).replace(/^\s+/,""):a.substr(0,b).replace(/\s+$/,"")+"..."}},{}],18:[function(a,b,c){"use strict";function d(a,b){var c={};if(1==a.nodeType){if(a.attributes.length>0){c["@attributes"]={};for(var e=0;e<a.attributes.length;e++){var f=a.attributes.item(e);c["@attributes"][f.nodeName]=f.nodeValue}}}else 3==a.nodeType&&(c=a.nodeValue);if(a.hasChildNodes())for(var g=0;g<a.childNodes.length;g++){var h=a.childNodes.item(g),i=h.nodeName;if(void 0===c[i])c[i]=d(h);else{if(void 0===c[i].push){var j=c[i];c[i]=[],c[i].push(j)}c[i].push(d(h))}}return c}function e(a){if(document.implementation&&document.implementation.createDocument)var b=(new DOMParser).parseFromString(a,"text/xml");else{if(!window.ActiveXObject)return null;var b=new ActiveXObject("Microsoft.XMLDOM");b.loadXML(a)}return b}b.exports=function(a){return d(e(a))}},{}],19:[function(a,b,c){"use strict";function d(a,b){if(b.context||console.warn(a,": 'context' is not defined"),b.context&&"[object Array]"!=Object.prototype.toString.call(b.context))throw a+": 'context' must be a list";if(b.context){var c=[];b.context.forEach(function(b,d){b.src||b.youtube_id||b.vimeo_id||(console.warn(a,": 'context', element number",String(d+1)," - one of 'src', 'youtube_id' or 'vimeo_id' are not defined"),c.push(b))}),c.forEach(function(a){var c=b.context.indexOf(a);b.context.splice(c,1)})}return!0}function e(a,b){if(b.links||console.warn(a,": 'links' are not defined"),b.links&&"[object Array]"!=Object.prototype.toString.call(b.links))throw a+": 'links' must be a list";if(b.links){var c=[];b.links.forEach(function(b,d){b.url||(console.warn(a,": 'links', element number",String(d+1)," - 'url' is not defined"),c.push(b))}),c.forEach(function(a){var c=b.links.indexOf(a);b.links.splice(c,1)})}return!0}function f(a,b){return b.backStory||console.warn(a,": 'backStory' is not defined"),!(b.backStory&&!b.backStory.text)||(console.warn(a,": 'backStory' has no text"),!0)}function g(a,b){return b.creativeCommons||console.warn(a,": 'rights' are not defined"),!(b.creativeCommons&&!b.creativeCommons.credit)||(console.warn(a,": 'rights' - credit is not defined"),!0)}b.exports=function(a,b){return d(a,b)&&e(a,b)&&f(a,b)&&g(a,b)}},{}],20:[function(a,b,c){
"use strict";function d(a){this.touched=!1,this.topLeftCorner=f(a),this.topRightCorner=new e,this.bottomLeftCorner=new e,this.bottomRightCorner=new g}function e(){this.visible=!1,this.pinned=!1}function f(a){function b(){e.call(this),this.selectedIndex=0,this.preselectedItem=void 0,d.call(this)}function c(a){var b=[];return a.forEach(function(a){b.push(a.offsetLeft)}),b}function d(){if(f){var a=this.selectedIndex,b=c(g);g.forEach(function(b,c){c==a?k(b,"selected"):m(b,"selected")}),f.style.marginLeft=.8*-b[a]+"px"}}var f=j(i+"-gallery-list",a)[0],g=j(i+"-gallery-item",f),l=j(i+"-gallery-yt",f),n=j(i+"-gallery-caption",a);return b.prototype=Object.create(e.prototype),b.prototype.hide=function(){e.prototype.hide.call(this),l.forEach(h)},b.prototype.selectItem=function(a,b){this.selectedIndex=g.indexOf(b),d.call(this)},b.prototype.selectNext=function(){this.selectedIndex<g.length-1&&(this.selectedIndex++,d.call(this))},b.prototype.selectPrevious=function(){0!=this.selectedIndex&&(this.selectedIndex--,d.call(this))},b.prototype.preselectPrevious=function(){this.preselectedItem=g[this.selectedIndex-1]},b.prototype.preselectNext=function(){this.preselectedItem=g[this.selectedIndex+1]},b.prototype.clearPreselect=function(){this.preselectedItem=void 0},b.prototype.getPrevControllerHidden=function(){return this.selectedIndex<=0},b.prototype.getNextControllerHidden=function(){return this.selectedIndex>=g.length-1},b.prototype.getItemIsPreselected=function(a){return a==this.preselectedItem},b.prototype.getCaptionVisible=function(a){return a==n[this.selectedIndex]},new b}function g(){e.call(this)}function h(a){a.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*")}var i="data-4c",j=a("./helpers/get-all-elements-with-attribute"),k=a("./helpers/add-class"),l=a("./helpers/is-touch-screen"),m=a("./helpers/remove-class");b.exports=function(a){return new d(a)},d.prototype.toolsHidden=function(){return this.topLeftCorner.visible||this.topRightCorner.visible||this.bottomLeftCorner.visible||this.bottomRightCorner.visible},d.prototype.showTools=function(){this.touched=l()},d.prototype.hideTools=function(){this.touched=!1},e.prototype.show=function(a){a&&this.stopEventPropagation(a),this.visible=!0},e.prototype.hide=function(){this.pinned||(this.visible=!1)},e.prototype.stopEventPropagation=function(a){a.stopPropagation?a.stopPropagation():a.srcEvent.stopPropagation()},e.prototype.forceHide=function(a){this.stopEventPropagation(a),this.pin(!1)},e.prototype.pin=function(a){this.pinned=null!=a?a:!this.pinned,this.pinned?this.show():this.hide()},g.prototype=Object.create(e.prototype)},{"./helpers/add-class":8,"./helpers/get-all-elements-with-attribute":12,"./helpers/is-touch-screen":14,"./helpers/remove-class":15}],21:[function(a,b,c){"use strict";a("./polyfills/index")(),a("./helpers/add-swipe-events")(),c.init=a("./wrap-all-img-elements-on-page"),c.wrapImgElementWithJson=a("./wrap-img-element-with-json"),c.wrapImgElement=a("./wrap-img-element")},{"./helpers/add-swipe-events":10,"./polyfills/index":25,"./wrap-all-img-elements-on-page":29,"./wrap-img-element":32,"./wrap-img-element-with-json":31}],22:[function(a,b,c){"use strict";b.exports=function(){if(Event.prototype.preventDefault||(Event.prototype.preventDefault=function(){this.returnValue=!1}),Event.prototype.stopPropagation||(Event.prototype.stopPropagation=function(){this.cancelBubble=!0}),!Element.prototype.addEventListener){var a=[],b=function(b,c){var d=this,e=function(a){a.target=a.srcElement,a.currentTarget=d,void 0!==c.handleEvent?c.handleEvent(a):c.call(d,a)};if("DOMContentLoaded"==b){var f=function(a){"complete"==document.readyState&&e(a)};if(document.attachEvent("onreadystatechange",f),a.push({object:this,type:b,listener:c,wrapper:f}),"complete"==document.readyState){var g=new Event;g.srcElement=window,f(g)}}else this.attachEvent("on"+b,e),a.push({object:this,type:b,listener:c,wrapper:e})},c=function(b,c){for(var d=0;d<a.length;){var e=a[d];if(e.object==this&&e.type==b&&e.listener==c){"DOMContentLoaded"==b?this.detachEvent("onreadystatechange",e.wrapper):this.detachEvent("on"+b,e.wrapper),a.splice(d,1);break}++d}};Element.prototype.addEventListener=b,Element.prototype.removeEventListener=c,HTMLDocument&&(HTMLDocument.prototype.addEventListener=b,HTMLDocument.prototype.removeEventListener=c),Window&&(Window.prototype.addEventListener=b,Window.prototype.removeEventListener=c)}}},{}],23:[function(a,b,c){"use strict";b.exports=function(){Array.prototype.filter||(Array.prototype.filter=function(a){if(void 0===this||null===this)throw new TypeError;var b=Object(this),c=b.length>>>0;if("function"!=typeof a)throw new TypeError;for(var d=[],e=arguments.length>=2?arguments[1]:void 0,f=0;f<c;f++)if(f in b){var g=b[f];a.call(e,g,f,b)&&d.push(g)}return d})}},{}],24:[function(a,b,c){"use strict";b.exports=function(){Array.prototype.forEach||(Array.prototype.forEach=function(a,b){var c,d;if(null===this)throw new TypeError(" this is null or not defined");var e=Object(this),f=e.length>>>0;if("function"!=typeof a)throw new TypeError(a+" is not a function");for(arguments.length>1&&(c=b),d=0;d<f;){var g;d in e&&(g=e[d],a.call(c,g,d,e)),d++}})}},{}],25:[function(a,b,c){"use strict";b.exports=function(){a("./for-each")(),a("./filter")(),a("./map")(),a("./add-event-listener")()}},{"./add-event-listener":22,"./filter":23,"./for-each":24,"./map":26}],26:[function(a,b,c){"use strict";b.exports=function(){Array.prototype.map||(Array.prototype.map=function(a,b){var c,d,e;if(null==this)throw new TypeError(" this is null or not defined");var f=Object(this),g=f.length>>>0;if("function"!=typeof a)throw new TypeError(a+" is not a function");for(arguments.length>1&&(c=b),d=new Array(g),e=0;e<g;){var h,i;e in f&&(h=f[e],i=a.call(c,h,e,f),d[e]=i),e++}return d})}},{}],27:[function(a,b,c){"use strict";var d="data-4c",e=a("./helpers/get-all-elements-with-attribute"),f=a("./helpers/add-class"),g=a("./helpers/remove-class"),h=a("./helpers/add-event-listener"),i=a("./helpers/remove-event-listener"),j=a("hammerjs");b.exports=function(b,c){function k(){var a=d+"-on",c=e(a,b);A=c.map(function(b){return l(b,b.getAttribute(a))})}function l(a,b){var d=r(b),e=[];for(var f in d){var g=v(a,c,d[f]),k=function(){};if(B)if(["click","mouseover"].indexOf(f)>-1){var l=new j(a);l.on("tap",g),k=function(){l.destroy()}}else if("clickOutside"==f){var m=w(a,g),n="click";h(document,n,m),k=function(){i(document,n,m)}}else h(a,f,g),k=function(){i(a,f,g)};else if("clickOutside"==f){var m=w(a,g),n="click";h(document,n,m),k=function(){i(document,n,m)}}else h(a,f,g),k=function(){i(document,f,g)};e.push(k)}return function(){e.forEach(function(a){a()})}}function m(){var a=d+"-class";e(a,b).forEach(function(b){var c=o(b,b.getAttribute(a));z.push.apply(z,c)})}function n(){var a=d+"-text";e(a,b).forEach(function(b){var c=q(b,b.getAttribute(a));z.push(c)})}function o(a,b){var c=[],d=r(b);for(var e in d)c.push(p(a,e,d[e]));return c}function p(a,b,d){return function(){t(a,c,d)?f(a,b):g(a,b)}}function q(a,b){return function(){a.textContent=u(a,c,b)}}function r(a){var b=a.split(/,\s*/),c={};return b.forEach(function(a){var b=a.split(/:\s*/);c[b[0]]=b[1]}),c}function s(a){return{opposite:null!=a.match(/^!/),properties:a.replace(/^!/g,"").split(".")}}function t(a,b,c){for(var d,e=s(c),f=e.properties,g=e.opposite,h=b,i=f.pop(),j=f.shift();void 0!=j;)h=h[j],j=f.shift();return d="function"==typeof h[i]?h[i].call(h,a):h[i],g?!d:d}function u(a,b,c){for(var d=c.split("."),e=b,f=d.pop(),g=d.shift();void 0!=g;)e=e[g],g=d.shift();return"function"==typeof e[f]?e[f].call(e,a):e[f]}function v(a,b,c){for(var d=c.split("."),e=b,f=d.pop(),g=d.shift();void 0!=g;)e=e[g],g=d.shift();return function(b){b.preventDefault(),setTimeout(function(){e[f].call(e,b,a),x()},100)}}function w(a,b){return function(c){a.contains(c.target)||b(c)}}function x(){z.forEach(function(a){a()})}function y(){z=null,A.forEach(function(a){a()})}var z=[],A=[],B=a("./helpers/is-touch-screen")();return function(){m(),n(),k(),x()}(),{executeWatchers:x,destroy:y}}},{"./helpers/add-class":8,"./helpers/add-event-listener":9,"./helpers/get-all-elements-with-attribute":12,"./helpers/is-touch-screen":14,"./helpers/remove-class":15,"./helpers/remove-event-listener":16,hammerjs:3}],28:[function(a,b,c){function d(a,b,c,d){return!1!==b&&null!=b&&(b||"class"!==a&&"style"!==a)?!0===b?" "+(d?a:a+'="'+a+'"'):("function"==typeof b.toJSON&&(b=b.toJSON()),"string"==typeof b||(b=JSON.stringify(b),c||-1===b.indexOf('"'))?(c&&(b=e(b))," "+a+'="'+b+'"'):" "+a+"='"+b.replace(/'/g,"&#39;")+"'"):""}function e(a){var b=""+a,c=g.exec(b);if(!c)return a;var d,e,f,h="";for(d=c.index,e=0;d<b.length;d++){switch(b.charCodeAt(d)){case 34:f="&quot;";break;case 38:f="&amp;";break;case 60:f="&lt;";break;case 62:f="&gt;";break;default:continue}e!==d&&(h+=b.substring(e,d)),e=d+1,h+=f}return e!==d?h+b.substring(e,d):h}function f(a){var b,c="",f=a||{};return function(a,f,g,h,i){c+='<div class="fc-image" data-4c-class="touch-screen: touched" data-4c-on="click: showTools, clickOutside: hideTools">',c=c+"<img"+d("src",i,!0,!1)+"/>",c+='<div class="fc-tools" data-4c-class="collapsed: toolsHidden">',f&&f.length&&(c+='<button class="fc-btn fc-btn-corner fc-btn-top-left" data-4c-on="click: topLeftCorner.show">',c+='<i class="fc-icon fc-icon-context"></i></button>'),h&&h.length&&(c+='<button class="fc-btn fc-btn-corner fc-btn-top-right" data-4c-on="click: topRightCorner.show">',c+='<i class="fc-icon fc-icon-links"></i></button>'),a&&a.text&&(c+='<button class="fc-btn fc-btn-corner fc-btn-bottom-left" data-4c-on="click: bottomLeftCorner.show">',c+='<i class="fc-icon fc-icon-info"></i></button>'),g&&g.formattedCopyright&&(c+='<button class="fc-btn fc-btn-corner fc-btn-bottom-right" data-4c-on="click: bottomRightCorner.show">',c+='<i class="fc-icon fc-icon-copyright"></i></button>'),c+="</div>",c+='<div class="fc-content">',f&&f.length&&(c+='<div class="fc-content-container fc-content-fill" data-4c-on="swipeLeft: topLeftCorner.selectNext, swipeRight: topLeftCorner.selectPrevious" data-4c-class="visible: topLeftCorner.visible, pinned: topLeftCorner.pinned">',c+='<div class="fc-gallery" data-4c-class="expanded: !topLeftCorner.visible">',f.length>1&&(c+='<a class="fc-gallery-controls fc-gallery-prev" data-4c-on="click: topLeftCorner.selectPrevious, mouseover: topLeftCorner.preselectPrevious, mouseleave: topLeftCorner.clearPreselect" data-4c-class="transparent: getPrevControllerHidden">',c+='<i class="fc-icon fc-icon-angle-left"></i></a>'),c+='<ul data-4c-gallery-list="data-4c-gallery-list">',function(){var a=f;if("number"==typeof a.length)for(var b=0,e=a.length;b<e;b++){var g=a[b];c+='<li data-4c-on="click: topLeftCorner.selectItem" data-4c-class="hover: topLeftCorner.getItemIsPreselected" data-4c-gallery-item="data-4c-gallery-item">',c+='<span class="fc-center-helper"></span>',g.src&&(c=c+"<img"+d("src",g.src,!0,!1)+"/>"),g.youtube_id&&(c=c+'<iframe width="100%" height="100%"'+d("src","//www.youtube.com/embed/"+g.youtube_id+"?enablejsapi=1",!0,!1)+' data-4c-gallery-yt="data-4c-gallery-yt" style="border:none;"></iframe>'),g.vimeo_id&&(c=c+'<iframe width="100%" height="100%"'+d("src","//player.vimeo.com/video/"+g.vimeo_id,!0,!1)+' data-4c-gallery-yt="data-4c-gallery-yt" style="border:none;"></iframe>'),c+="</li>"}else{var e=0;for(var b in a){e++;var g=a[b];c+='<li data-4c-on="click: topLeftCorner.selectItem" data-4c-class="hover: topLeftCorner.getItemIsPreselected" data-4c-gallery-item="data-4c-gallery-item">',c+='<span class="fc-center-helper"></span>',g.src&&(c=c+"<img"+d("src",g.src,!0,!1)+"/>"),g.youtube_id&&(c=c+'<iframe width="100%" height="100%"'+d("src","//www.youtube.com/embed/"+g.youtube_id+"?enablejsapi=1",!0,!1)+' data-4c-gallery-yt="data-4c-gallery-yt" style="border:none;"></iframe>'),g.vimeo_id&&(c=c+'<iframe width="100%" height="100%"'+d("src","//player.vimeo.com/video/"+g.vimeo_id,!0,!1)+' data-4c-gallery-yt="data-4c-gallery-yt" style="border:none;"></iframe>'),c+="</li>"}}}.call(this),c+="</ul>",f.length>1&&(c+='<a class="fc-gallery-controls fc-gallery-next" data-4c-on="click: topLeftCorner.selectNext, mouseover: topLeftCorner.preselectNext, mouseleave: topLeftCorner.clearPreselect" data-4c-class="transparent: getNextControllerHidden">',c+='<i class="fc-icon fc-icon-angle-right"></i></a>'),function(){var a=f;if("number"==typeof a.length)for(var d=0,g=a.length;d<g;d++){var h=a[d];h.credit?(c+='<div class="fc-gallery-caption" data-4c-gallery-caption="data-4c-gallery-caption" data-4c-class="visible: topLeftCorner.getCaptionVisible">',c+='<div class="fc-gallery-caption-text">',c=c+e(null==(b=h.credit)?"":b)+"</div></div>"):c+='<div data-4c-gallery-caption="data-4c-gallery-caption" data-4c-class="visible: topLeftCorner.getCaptionVisible"></div>'}else{var g=0;for(var d in a){g++;var h=a[d];h.credit?(c+='<div class="fc-gallery-caption" data-4c-gallery-caption="data-4c-gallery-caption" data-4c-class="visible: topLeftCorner.getCaptionVisible">',c+='<div class="fc-gallery-caption-text">',c=c+e(null==(b=h.credit)?"":b)+"</div></div>"):c+='<div data-4c-gallery-caption="data-4c-gallery-caption" data-4c-class="visible: topLeftCorner.getCaptionVisible"></div>'}}}.call(this),c+="</div>",c+='<button class="fc-btn fc-btn-corner fc-btn-top-right fc-gallery-close fc-btn-close" data-4c-on="click: topLeftCorner.forceHide" data-4c-class="visible: topLeftCorner.visible">',c+="&times;</button></div>"),h&&h.length&&(c+='<div class="fc-content-container fc-content-top-right" data-4c-class="visible: topRightCorner.visible">',c+='<div class="fc-content-body">',c+='<div class="fc-content-text">',c+='<div class="fc-content-header">',c+='<h1 class="fc-content-header-cell fc-content-header-title">',c+="Links</h1>",c+='<div class="fc-content-header-cell">',c+='<button class="fc-btn fc-btn-close" data-4c-on="click: topRightCorner.forceHide" data-4c-class="visible: topRightCorner.visible">',c+="&times;</button></div></div>",function(){var a=h;if("number"==typeof a.length)for(var f=0,g=a.length;f<g;f++){var i=a[f];c+="<p>",c=c+'<a class="fc-image-a"'+d("href",i.url,!0,!1)+' target="_blank">',c=c+e(null==(b=i.title)?"":b)+"</a></p>"}else{var g=0;for(var f in a){g++;var i=a[f];c+="<p>",c=c+'<a class="fc-image-a"'+d("href",i.url,!0,!1)+' target="_blank">',c=c+e(null==(b=i.title)?"":b)+"</a></p>"}}}.call(this),c+="</div></div></div>"),a&&a.text&&(c+='<div class="fc-content-container fc-content-bottom-left" data-4c-class="visible: bottomLeftCorner.visible">',c+='<div class="fc-content-body">',c+='<div class="fc-content-text">',c+='<div class="fc-content-header">',c+='<h1 class="fc-content-header-cell fc-content-header-title">',c+="Backstory</h1>",c+='<div class="fc-content-header-cell">',c+='<button class="fc-btn fc-btn-close" data-4c-on="click: bottomLeftCorner.forceHide" data-4c-class="visible: bottomLeftCorner.visible">',c+="&times;</button></div></div>",c+="<p>",c=c+e(null==(b=a.text)?"":b)+"</p>",c+='<p class="fc-content-subtitle">',a.author&&(c+=e(null==(b=a.author+(a.publication||a.date?", ":""))?"":b)),a.publication&&(a.publicationUrl?(c=c+'<a class="fc-image-a"'+d("href",a.publicationUrl,!0,!1)+' target="_blank">',c=c+e(null==(b=a.publication)?"":b)+"</a>"):c+=e(null==(b=a.publication)?"":b),c+=e(null==(b=a.date?", ":"")?"":b)),a.date&&(c+=e(null==(b=a.date)?"":b)),c+="</p></div></div></div>"),g&&g.formattedCopyright&&(c+='<div class="fc-content-container fc-content-bottom-right" data-4c-class="visible: bottomRightCorner.visible">',c+='<div class="fc-content-body">',c+='<div class="fc-content-text">',c+='<div class="fc-content-header">',c+='<h1 class="fc-content-header-cell fc-content-header-title">',c+="Information</h1>",c+='<div class="fc-content-header-cell">',c+='<button class="fc-btn fc-btn-close" data-4c-on="click: bottomRightCorner.forceHide" data-4c-class="visible: bottomRightCorner.visible">',c+="&times;</button></div></div>",c+="<p>",c=c+e(null==(b=g.description)?"":b)+"</p>",c+='<p class="fc-content-copyright">',c=c+e(null==(b=g.formattedCopyright)?"":b)+"</p>",g.codeOfEthics&&(c+="\x3c!--p.fc-code-of-ethics--\x3e",c+='<p class="fc-content-header-cell fc-content-coe">',c+='<span class="fc-content-header-cell fc-content-coetitle">',c+="Code of Ethics: </span>",c+="<span>",c=c+e(null==(b=g.codeOfEthics)?"":b)+"</span></p>"),c+="</div></div></div>"),c+="</div></div>",c+='<div class="fc-footer" data-4c-footer="data-4c-footer">',c+='<a href="https://fourcorners.io/" target="_blank">',c+='<i class="fc-icon fc-icon-brand"></i></a></div>'}.call(this,"backStory"in f?f.backStory:"undefined"!=typeof backStory?backStory:void 0,"context"in f?f.context:"undefined"!=typeof context?context:void 0,"creativeCommons"in f?f.creativeCommons:"undefined"!=typeof creativeCommons?creativeCommons:void 0,"links"in f?f.links:"undefined"!=typeof links?links:void 0,"src"in f?f.src:"undefined"!=typeof src?src:void 0),c}a("pug-runtime");b.exports=f;var g=/["&<>]/},{fs:2,"pug-runtime":4}],29:[function(a,b,c){"use strict";function d(){e(g).forEach(function(a){a.complete?f(a):a.onload=function(){f(a)}})}var e=a("./helpers/get-all-elements-with-attribute"),f=a("./wrap-img-element"),g="data-4c";b.exports=d},{"./helpers/get-all-elements-with-attribute":12,"./wrap-img-element":32}],30:[function(a,b,c){"use strict";function d(a,b,c){var d,e=b.parentNode,g=function(){clearTimeout(d),d=setTimeout(function(){e.appendChild(a),h(a,b),e.removeChild(a),f(c,b)},500)};return p(window,"resize",g),function(){q(window,"resize",g)}}function e(){var a=document.createElement("style");return a.type="text/css",a.innerHTML=r,a}function f(a,b){var c=n(m+"-footer",a.contentWindow.document)[0];b.style.height=b.offsetHeight+c.offsetHeight+"px"}function g(a){a.style.width="100%",a.style.height="100%",a.style.border="none"}function h(a,b){l(a,b),b.style.overflow="hidden",b.style.border="1px solid #ddd"}function i(a){var b=n(m+"-gallery-list",a)[0];n(m+"-gallery-item",b).forEach(function(a){var b=a.getElementsByTagName("img")[0];b&&(b.onerror=function(b){var c=k({shortSrc:o(b.srcElement.currentSrc,30,!0),fullSrc:b.srcElement.currentSrc});a.innerHTML=c})})}var j=a("./template.pug"),k=a("./failed-image.pug"),l=a("./helpers/copy-style"),m="data-4c",n=a("./helpers/get-all-elements-with-attribute"),o=a("./helpers/shorten-text"),p=a("./helpers/add-event-listener"),q=a("./helpers/remove-event-listener"),r=a("../scss/main.scss");b.exports=function(a){var b=document.createElement("div"),c=document.createElement("iframe"),k=this.parentNode,l=this;h(l,b),g(c),b.appendChild(c),"inline"===b.style.getPropertyValue("display")&&(b.style.display="inline-block"),k.replaceChild(b,l);var m=c.contentWindow.document;m.open(),a.src=this.src,m.write(j(a)),m.head.appendChild(e()),m.close(),i(m.body),f(c,b);var n=d(l,b,c);return{element:m.body,destroy:function(){n(),b.parentNode==k&&k.replaceChild(l,b)}}}},{"../scss/main.scss":33,"./failed-image.pug":6,"./helpers/add-event-listener":9,"./helpers/copy-style":11,"./helpers/get-all-elements-with-attribute":12,"./helpers/remove-event-listener":16,"./helpers/shorten-text":17,"./template.pug":28}],31:[function(a,b,c){"use strict";function d(a,b,c){if(h(c||"Four Corners - JSON",b)){l(b);var d=i.call(a,b),f=d.destroy,g=d.element,m=j(g),n=k(g,m);return e(m,n,function(){n.destroy(),f()})}}function e(a,b,c){var b=b,a=a;return{topLeft:new f(a.topLeftCorner,b),topRight:new f(a.topRightCorner,b),bottomLeft:new f(a.bottomLeftCorner,b),bottomRight:new g(a.bottomRightCorner,b),destroy:c}}function f(a,b){var b=b,a=a;this.pin=function(c){a.pin(c),b.executeWatchers()}}function g(a,b){var b=b,a=a;this.pin=function(c){a.pin(c),b.executeWatchers()}}var h=a("./image-data-is-valid"),i=a("./wrap-image"),j=a("./image-model"),k=a("./set-main-controller"),l=a("./amend-image-data");b.exports=d},{"./amend-image-data":5,"./image-data-is-valid":19,"./image-model":20,"./set-main-controller":27,"./wrap-image":30}],32:[function(a,b,c){"use strict";function d(a){e.call(a,function(b,c){setTimeout(function(){f(a,b,c)})})}var e=a("./get-image-data"),e=a("./get-image-data"),f=a("./wrap-img-element-with-json");b.exports=d},{"./get-image-data":7,"./wrap-img-element-with-json":31}],33:[function(a,b,c){
b.exports='body {\n  margin: 0;\n  overflow: hidden; }\n\nul {\n  margin-top: 0; }\n\n.fc-image {\n  position: relative;\n  overflow: hidden;\n  height: auto; }\n  .fc-image * {\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box; }\n  .fc-image > img {\n    display: block;\n    width: 100%; }\n  .fc-image a {\n    color: #666666; }\n  .fc-image a:hover {\n    color: black; }\n\n.fc-footer {\n  text-align: right;\n  padding: 6px; }\n\n.fc-center-helper {\n  display: inline-block;\n  height: 100%;\n  vertical-align: middle; }\n\nbody {\n  font-size: 13px;\n  font-weight: 400;\n  line-height: 1.5;\n  -webkit-text-emphasis: initial;\n  -webkit-text-fill-color: initial;\n  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; }\n\nh1 {\n  font-size: 20px;\n  font-weight: 300;\n  margin: 0 0 4px 0; }\n\np {\n  margin: 0 0 4px;\n  text-align: justify; }\n\na {\n  color: #333;\n  opacity: 1;\n  -webkit-transition: opacity 0.1s linear;\n  -moz-transition: opacity 0.1s linear;\n  -ms-transition: opacity 0.1s linear;\n  -o-transition: opacity 0.1s linear;\n  transition: opacity 0.1s linear; }\n  a:hover, a:active, a:focus {\n    opacity: 1; }\n\n.fc-image {\n  color: #333; }\n\n.text-right {\n  text-align: right; }\n\n.fc-tools {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  -webkit-transform: scale(1.5);\n  -moz-transform: scale(1.5);\n  -ms-transform: scale(1.5);\n  transform: scale(1.5);\n  opacity: 0;\n  -webkit-transition: opacity 0.3s linear, transform 0.2s linear;\n  -moz-transition: opacity 0.3s linear, transform 0.2s linear;\n  -ms-transition: opacity 0.3s linear, transform 0.2s linear;\n  -o-transition: opacity 0.3s linear, transform 0.2s linear;\n  transition: opacity 0.3s linear, transform 0.2s linear; }\n  .fc-tools:hover {\n    -webkit-transform: scale(1);\n    -moz-transform: scale(1);\n    -ms-transform: scale(1);\n    transform: scale(1);\n    opacity: 1; }\n  .touch-screen .fc-tools {\n    -webkit-transform: scale(1);\n    -moz-transform: scale(1);\n    -ms-transform: scale(1);\n    transform: scale(1);\n    opacity: 1; }\n  .fc-tools.collapsed {\n    -webkit-transform: scale(1.5);\n    -moz-transform: scale(1.5);\n    -ms-transform: scale(1.5);\n    transform: scale(1.5);\n    opacity: 0; }\n\n.fc-btn {\n  display: inline-block;\n  margin: 0;\n  text-align: center;\n  white-space: nowrap;\n  cursor: pointer;\n  color: #333;\n  background: #fff;\n  border: 1px solid transparent;\n  box-sizing: border-box;\n  border-radius: 50%;\n  font-size: 22px;\n  height: 35px;\n  width: 35px;\n  outline: none;\n  padding: 0;\n  opacity: 1;\n  -webkit-transition: opacity 0.1s linear;\n  -moz-transition: opacity 0.1s linear;\n  -ms-transition: opacity 0.1s linear;\n  -o-transition: opacity 0.1s linear;\n  transition: opacity 0.1s linear; }\n  .fc-btn:hover, .fc-btn:active, .fc-btn:focus {\n    opacity: 1; }\n  .fc-btn-corner {\n    z-index: 2;\n    position: absolute; }\n  .fc-btn-top-left {\n    top: 10px;\n    left: 10px; }\n  .fc-btn-top-right {\n    top: 10px;\n    right: 10px; }\n  .fc-btn-bottom-left {\n    bottom: 10px;\n    left: 10px; }\n  .fc-btn-bottom-right {\n    bottom: 10px;\n    right: 10px; }\n  .fc-btn-close {\n    z-index: 2;\n    border: none;\n    background: transparent;\n    font-size: 30px;\n    padding: 0 0 5px;\n    line-height: 1em;\n    vertical-align: top;\n    position: relative;\n    top: -5px;\n    right: -5px; }\n\n.fc-content {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%; }\n  .fc-content ::-webkit-scrollbar {\n    width: 0.5em;\n    height: 0.5em; }\n  .fc-content ::-webkit-scrollbar-thumb {\n    background: silver;\n    border-radius: 0.25em; }\n  .fc-content ::-webkit-scrollbar-track {\n    background: #e0e0e0; }\n  .fc-content body {\n    scrollbar-face-color: silver;\n    scrollbar-track-color: #e0e0e0; }\n  .fc-content-container {\n    position: absolute;\n    width: 100%;\n    max-width: 260px;\n    max-height: 100%;\n    opacity: 0;\n    color: #333;\n    overflow-y: auto;\n    overflow-x: hidden;\n    background: white;\n    -webkit-transition: opacity 0.1s linear;\n    -moz-transition: opacity 0.1s linear;\n    -ms-transition: opacity 0.1s linear;\n    -o-transition: opacity 0.1s linear;\n    transition: opacity 0.1s linear; }\n    .fc-content-container.visible, .fc-content-container.pinned {\n      opacity: 1;\n      z-index: 2; }\n  .fc-content-subtitle {\n    margin-top: 10px;\n    color: #888888; }\n  .fc-content-header {\n    display: table;\n    width: 100%;\n    border-bottom: 1px solid #efefef;\n    margin-bottom: 8px;\n    clear: both; }\n    .fc-content-header h1 {\n      float: left;\n      margin-top: -6px; }\n    .fc-content-header button {\n      float: right;\n      margin-bottom: -6px; }\n  .fc-content-body {\n    height: 100%;\n    width: 100%;\n    position: relative; }\n  .fc-content-text {\n    padding: 15px 15px 15px 10px;\n    position: relative;\n    z-index: 2;\n    text-align: left;\n    word-wrap: break-word; }\n  .fc-content-fill {\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    max-width: 100%; }\n  .fc-content-top-right {\n    top: 0;\n    right: 0; }\n  .fc-content-bottom-left {\n    bottom: 0;\n    left: 0; }\n  .fc-content-bottom-right {\n    bottom: 0;\n    right: 0; }\n  .fc-content-copyright {\n    display: inline-block;\n    color: #888888; }\n  .fc-content-coetitle {\n    font-variant: small-caps;\n    display: inline;\n    font-size: 13px; }\n  .fc-content-coe {\n    color: #888888; }\n\n.fc-tools {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  -webkit-transform: scale(1.5);\n  -moz-transform: scale(1.5);\n  -ms-transform: scale(1.5);\n  transform: scale(1.5);\n  opacity: 0;\n  -webkit-transition: opacity 0.3s linear, transform 0.2s linear;\n  -moz-transition: opacity 0.3s linear, transform 0.2s linear;\n  -ms-transition: opacity 0.3s linear, transform 0.2s linear;\n  -o-transition: opacity 0.3s linear, transform 0.2s linear;\n  transition: opacity 0.3s linear, transform 0.2s linear; }\n  .fc-tools:hover {\n    -webkit-transform: scale(1);\n    -moz-transform: scale(1);\n    -ms-transform: scale(1);\n    transform: scale(1);\n    opacity: 1; }\n  .touch-screen .fc-tools {\n    -webkit-transform: scale(1);\n    -moz-transform: scale(1);\n    -ms-transform: scale(1);\n    transform: scale(1);\n    opacity: 1; }\n  .fc-tools.collapsed {\n    -webkit-transform: scale(1.5);\n    -moz-transform: scale(1.5);\n    -ms-transform: scale(1.5);\n    transform: scale(1.5);\n    opacity: 0; }\n\n.fc-btn {\n  display: inline-block;\n  margin: 0;\n  text-align: center;\n  white-space: nowrap;\n  cursor: pointer;\n  color: #333;\n  background: #fff;\n  border: 1px solid transparent;\n  box-sizing: border-box;\n  border-radius: 50%;\n  font-size: 22px;\n  height: 35px;\n  width: 35px;\n  outline: none;\n  padding: 0;\n  opacity: 1;\n  -webkit-transition: opacity 0.1s linear;\n  -moz-transition: opacity 0.1s linear;\n  -ms-transition: opacity 0.1s linear;\n  -o-transition: opacity 0.1s linear;\n  transition: opacity 0.1s linear; }\n  .fc-btn:hover, .fc-btn:active, .fc-btn:focus {\n    opacity: 1; }\n  .fc-btn-corner {\n    z-index: 2;\n    position: absolute; }\n  .fc-btn-top-left {\n    top: 10px;\n    left: 10px; }\n  .fc-btn-top-right {\n    top: 10px;\n    right: 10px; }\n  .fc-btn-bottom-left {\n    bottom: 10px;\n    left: 10px; }\n  .fc-btn-bottom-right {\n    bottom: 10px;\n    right: 10px; }\n  .fc-btn-close {\n    z-index: 2;\n    border: none;\n    background: transparent;\n    font-size: 30px;\n    padding: 0 0 5px;\n    line-height: 1em;\n    vertical-align: top;\n    position: relative;\n    top: -5px;\n    right: -5px; }\n\n.fc-gallery {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  overflow: hidden; }\n  .fc-gallery-failed-image {\n    width: 100%;\n    height: 100%;\n    background: #000;\n    position: relative;\n    display: table; }\n    .fc-gallery-failed-image-caption {\n      display: table-cell;\n      vertical-align: middle;\n      font-size: 16px;\n      white-space: normal;\n      padding: 10px; }\n  .fc-gallery ul {\n    position: relative;\n    width: 100%;\n    height: 100%;\n    white-space: nowrap;\n    display: block;\n    margin: 0;\n    padding: 0;\n    -webkit-transform: scale(0.8);\n    -moz-transform: scale(0.8);\n    -ms-transform: scale(0.8);\n    transform: scale(0.8);\n    -webkit-transition: margin-left 0.15s linear;\n    -moz-transition: margin-left 0.15s linear;\n    -ms-transition: margin-left 0.15s linear;\n    -o-transition: margin-left 0.15s linear;\n    transition: margin-left 0.15s linear; }\n    .fc-gallery ul li {\n      display: inline-block;\n      vertical-align: middle;\n      cursor: pointer;\n      width: 100%;\n      height: 100%;\n      text-align: center; }\n      .fc-gallery ul li img,\n      .fc-gallery ul li iframe,\n      .fc-gallery ul li .fc-gallery-failed-image {\n        vertical-align: middle;\n        opacity: 0.7;\n        -webkit-transform: scale(0.9);\n        -moz-transform: scale(0.9);\n        -ms-transform: scale(0.9);\n        transform: scale(0.9);\n        -webkit-transition: transform 0.15s linear, opacity 0.15s linear;\n        -moz-transition: transform 0.15s linear, opacity 0.15s linear;\n        -ms-transition: transform 0.15s linear, opacity 0.15s linear;\n        -o-transition: transform 0.15s linear, opacity 0.15s linear;\n        transition: transform 0.15s linear, opacity 0.15s linear; }\n      .fc-gallery ul li img {\n        max-width: 100%;\n        max-height: 100%;\n        vertical-align: middle; }\n      .fc-gallery ul li.hover img,\n      .fc-gallery ul li.hover iframe,\n      .fc-gallery ul li.hover .fc-gallery-failed-image, .fc-gallery ul li:hover img,\n      .fc-gallery ul li:hover iframe,\n      .fc-gallery ul li:hover .fc-gallery-failed-image {\n        opacity: 0.85;\n        -webkit-transform: scale(0.92);\n        -moz-transform: scale(0.92);\n        -ms-transform: scale(0.92);\n        transform: scale(0.92); }\n      .fc-gallery ul li.hover .fc-gallery-failed-image, .fc-gallery ul li:hover .fc-gallery-failed-image {\n        opacity: 0.7; }\n      .fc-gallery ul li.selected {\n        cursor: default; }\n        .fc-gallery ul li.selected img,\n        .fc-gallery ul li.selected iframe,\n        .fc-gallery ul li.selected .fc-gallery-failed-image {\n          opacity: 1;\n          -webkit-transform: scale(1);\n          -moz-transform: scale(1);\n          -ms-transform: scale(1);\n          transform: scale(1); }\n      .fc-gallery ul li.selected .fc-gallery-failed-image {\n        opacity: 0.7; }\n  .fc-gallery.expanded ul li img,\n  .fc-gallery.expanded ul li iframe {\n    -webkit-transform: scale(1.25);\n    -moz-transform: scale(1.25);\n    -ms-transform: scale(1.25);\n    transform: scale(1.25); }\n  .fc-gallery-caption {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    text-align: center;\n    width: 100%;\n    display: none;\n    -webkit-transition: opacity 0.1s linear;\n    -moz-transition: opacity 0.1s linear;\n    -ms-transition: opacity 0.1s linear;\n    -o-transition: opacity 0.1s linear;\n    transition: opacity 0.1s linear; }\n    .fc-gallery-caption.visible {\n      display: block; }\n    .fc-gallery-caption-background {\n      width: 100%;\n      height: 100%;\n      position: absolute;\n      top: 0;\n      left: 0;\n      background: #fff;\n      opacity: 0.4; }\n    .fc-gallery-caption-text {\n      position: relative;\n      height: 100%;\n      width: 100%;\n      font-variant: small-caps; }\n  .fc-gallery-close {\n    display: none;\n    top: 0;\n    right: 0;\n    position: absolute; }\n    .fc-gallery-close.visible {\n      display: inline-block; }\n\na.fc-gallery-controls {\n  height: 100%;\n  width: 35px;\n  position: absolute;\n  top: 0;\n  z-index: 1;\n  display: block;\n  cursor: pointer;\n  color: #333;\n  opacity: 0.5;\n  -webkit-transition: opacity 0.1s linear;\n  -moz-transition: opacity 0.1s linear;\n  -ms-transition: opacity 0.1s linear;\n  -o-transition: opacity 0.1s linear;\n  transition: opacity 0.1s linear; }\n  a.fc-gallery-controls:hover, a.fc-gallery-controls:active, a.fc-gallery-controls:focus {\n    opacity: 0.8; }\n  a.fc-gallery-controls.transparent {\n    opacity: 0; }\n  a.fc-gallery-controls i {\n    position: absolute;\n    top: 50%;\n    left: 0;\n    margin-top: -35px;\n    font-size: 70px; }\n\na.fc-gallery-prev {\n  left: 0; }\n\na.fc-gallery-next {\n  right: 0; }\n\n.fc-image .fc-code-of-ethics {\n  background: #fff;\n  padding: 5px 10px; }\n  .fc-image .fc-code-of-ethics.visible {\n    display: block; }\n  .fc-image .fc-code-of-ethics-show {\n    text-decoration: none;\n    border-bottom: 1px dashed;\n    cursor: pointer;\n    -webkit-transition: color 0.1s linear;\n    -moz-transition: color 0.1s linear;\n    -ms-transition: color 0.1s linear;\n    -o-transition: color 0.1s linear;\n    transition: color 0.1s linear; }\n    .fc-image .fc-code-of-ethics-show.fc-image-a {\n      text-decoration: none; }\n\n.fc-icon {\n  vertical-align: middle;\n  display: inline-block;\n  height: 1em;\n  width: 1em;\n  background-repeat: no-repeat;\n  background-position: center; }\n  .fc-icon-brand {\n    background-image: url(data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MDYuMzYgODUuMzMiPjx0aXRsZT5CcmFuZCBJY29uIGZvciB3ZWI8L3RpdGxlPjxwb2x5bGluZSBwb2ludHM9IjYwMi44NyA0OS4wOCA2MDIuODcgODEuODUgNTcwLjA5IDgxLjg1IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojM2ZhOWY1O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo2Ljk3MzUzMzE1MzUzMzkzNTVweCIvPjxwb2x5bGluZSBwb2ludHM9IjU3MC4wOSAzLjQ5IDYwMi44NyAzLjQ5IDYwMi44NyAzNi4yNiIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzAwMDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6Ni45NzM1MzMxNTM1MzM5MzU1cHgiLz48cG9seWxpbmUgcG9pbnRzPSI1NTcuNDEgODEuODUgNTI0LjYzIDgxLjg1IDUyNC42MyA0OS4wOCIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzAwMDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6Ni45NzM1MzMxNTM1MzM5MzU1cHgiLz48cG9seWxpbmUgcG9pbnRzPSI1MjQuNjMgMzYuMjYgNTI0LjYzIDMuNDkgNTU3LjQxIDMuNDkiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMwMDA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjYuOTczNTMzMTUzNTMzOTM1NXB4Ii8+PHBhdGggZD0iTTU0LjU2LDM4Ljd2NC43MkgzMi40OHYxMy40SDUxLjg0djQuNzJIMzIuNDhWODAuODZIMjYuODdWMzguN0g1NC41NloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yNi44NyAtMTcuMDgpIi8+PHBhdGggZD0iTTY1LjU3LDUxLjQ4YTIwLjksMjAuOSwwLDAsMSwzLjgxLTcuMDYsMTguNiwxOC42LDAsMCwxLDYuMzItNC45LDIwLDIwLDAsMCwxLDguOC0xLjgzLDIwLDIwLDAsMCwxLDguOCwxLjgzLDE4LjYxLDE4LjYxLDAsMCwxLDYuMzIsNC45LDIwLjk0LDIwLjk0LDAsMCwxLDMuODEsNy4wNiwyNy43NCwyNy43NCwwLDAsMSwwLDE2LjU5LDIwLjkzLDIwLjkzLDAsMCwxLTMuODEsNy4wNkExOC4yOCwxOC4yOCwwLDAsMSw5My4zLDgwYTIwLjI0LDIwLjI0LDAsMCwxLTguOCwxLjhBMjAuMjQsMjAuMjQsMCwwLDEsNzUuNyw4MGExOC4yNiwxOC4yNiwwLDAsMS02LjMyLTQuODcsMjAuOSwyMC45LDAsMCwxLTMuODEtNy4wNkEyNy43NCwyNy43NCwwLDAsMSw2NS41Nyw1MS40OFptNS4xNywxNC41OWExNy4wNywxNy4wNywwLDAsMCwyLjYsNS41OCwxMy4yOCwxMy4yOCwwLDAsMCw0LjU1LDQsMTUuMjgsMTUuMjgsMCwwLDAsMTMuMjMsMCwxMy4yOSwxMy4yOSwwLDAsMCw0LjU1LTQsMTcuMDksMTcuMDksMCwwLDAsMi42LTUuNTgsMjQuMzMsMjQuMzMsMCwwLDAsMC0xMi41OCwxNy4wOSwxNy4wOSwwLDAsMC0yLjYtNS41OCwxMy4yOSwxMy4yOSwwLDAsMC00LjU1LTQsMTUuMjgsMTUuMjgsMCwwLDAtMTMuMjMsMCwxMy4yOCwxMy4yOCwwLDAsMC00LjU1LDQsMTcuMDcsMTcuMDcsMCwwLDAtMi42LDUuNThBMjQuMzMsMjQuMzMsMCwwLDAsNzAuNzQsNjYuMDdaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjYuODcgLTE3LjA4KSIvPjxwYXRoIGQ9Ik0xNDYuOCw3Ny43NnEtNC4zMSw0LTEyLjI4LDQtOC4xNSwwLTEyLjczLTMuODd0LTQuNTgtMTIuMzFWMzguN2g1LjYxVjY1LjYzcTAsNS42NywzLDguNTl0OC42OCwyLjkycTUuMzcsMCw4LjE4LTIuOTJ0Mi44MS04LjU5VjM4LjdoNS42MVY2NS42M1ExNTEuMTEsNzMuNzIsMTQ2LjgsNzcuNzZaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjYuODcgLTE3LjA4KSIvPjxwYXRoIGQ9Ik0xODUuODMsMzguN3E2LDAsOS40MiwzYTEwLjE2LDEwLjE2LDAsMCwxLDMuNCw4LjA5LDEyLjgsMTIuOCwwLDAsMS0xLjc0LDYuNzMsOSw5LDAsMCwxLTUuNTgsNHYwLjEyYTcuNTEsNy41MSwwLDAsMSwzLDEuMTgsNi40OSw2LjQ5LDAsMCwxLDEuODMsMiw5LDksMCwwLDEsMSwyLjU3LDI3LjM0LDI3LjM0LDAsMCwxLC41LDNxMC4xMiwxLjU0LjE4LDMuMTNhMjYuODUsMjYuODUsMCwwLDAsLjMsMy4xMywxOS4xMiwxOS4xMiwwLDAsMCwuNjgsMi45MkE3LjIsNy4yLDAsMCwwLDIwMC4xNSw4MWgtNi4yNmEzLjUxLDMuNTEsMCwwLDEtLjgtMS43NywxOCwxOCwwLDAsMS0uMjctMi41MXEtMC4wNi0xLjM5LS4xMi0zYTIwLjY5LDIwLjY5LDAsMCwwLS4zNS0zLjEzcS0wLjI0LTEuNTMtLjU5LTIuOTJhNi44Nyw2Ljg3LDAsMCwwLTEuMTItMi40Miw1LjU1LDUuNTUsMCwwLDAtMi0xLjY1LDcuNDUsNy40NSwwLDAsMC0zLjMxLS42MkgxNzEuNlY4MUgxNjZWMzguN2gxOS44M1pNMTg3LDU3LjgzYTguMTEsOC4xMSwwLDAsMCwzLjEtMS4xNSw2LjI5LDYuMjksMCwwLDAsMi4xMy0yLjMsNy43Myw3LjczLDAsMCwwLC44LTMuNzUsNy41Niw3LjU2LDAsMCwwLTEuNzctNS4ycS0xLjc3LTItNS43My0ySDE3MS42djE0LjdoMTEuNjlBMjIuNTcsMjIuNTcsMCwwLDAsMTg3LDU3LjgzWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTI2Ljg3IC0xNy4wOCkiLz48cGF0aCBkPSJNMjM3LjgyLDQ0LjY2YTEzLDEzLDAsMCwwLTcuNjUtMi4yNCwxMy43LDEzLjcsMCwwLDAtNi40NywxLjQyLDEyLjc0LDEyLjc0LDAsMCwwLTQuNDMsMy44MSwxNi40MiwxNi40MiwwLDAsMC0yLjU3LDUuNDYsMjQuNCwyNC40LDAsMCwwLS44Myw2LjM4LDI3LjI5LDI3LjI5LDAsMCwwLC44Myw2LjgyLDE2LjI5LDE2LjI5LDAsMCwwLDIuNTcsNS42MSwxMi42NywxMi42NywwLDAsMCw0LjQ2LDMuODEsMTMuODgsMTMuODgsMCwwLDAsNi41LDEuNDIsMTIuNTEsMTIuNTEsMCwwLDAsNC45My0uOTIsMTEuMTUsMTEuMTUsMCwwLDAsMy43Mi0yLjU0LDExLjY3LDExLjY3LDAsMCwwLDIuNDUtMy44N0ExNi4wNywxNi4wNywwLDAsMCwyNDIuNCw2NUgyNDhxLTAuODMsOC01LjQ5LDEyLjR0LTEyLjc2LDQuNDNhMjAuMzIsMjAuMzIsMCwwLDEtOC41Ni0xLjY4LDE2LjgsMTYuOCwwLDAsMS02LjA4LTQuNjQsMTkuODgsMTkuODgsMCwwLDEtMy42My03LDI5LjcxLDI5LjcxLDAsMCwxLTEuMjEtOC42MiwyOC4xMywyOC4xMywwLDAsMSwxLjMtOC42NSwyMC44MywyMC44MywwLDAsMSwzLjgxLTcuMDYsMTcuNzUsMTcuNzUsMCwwLDEsNi4yNi00Ljc1LDIwLjE5LDIwLjE5LDAsMCwxLDguNTktMS43NCwyMS42OCwyMS42OCwwLDAsMSw2LjI2Ljg5LDE2Ljg1LDE2Ljg1LDAsMCwxLDUuMjYsMi42LDE0LjYzLDE0LjYzLDAsMCwxLDMuODQsNC4yOCwxNS43MiwxNS43MiwwLDAsMSwyLDUuOTRIMjQyQTEwLjQ0LDEwLjQ0LDAsMCwwLDIzNy44Miw0NC42NloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yNi44NyAtMTcuMDgpIi8+PHBhdGggZD0iTTI1OS43OSw1MS40OGEyMC44OSwyMC44OSwwLDAsMSwzLjgxLTcuMDYsMTguNiwxOC42LDAsMCwxLDYuMzItNC45LDIyLjA2LDIyLjA2LDAsMCwxLDE3LjYsMCwxOC42MiwxOC42MiwwLDAsMSw2LjMyLDQuOSwyMC45MiwyMC45MiwwLDAsMSwzLjgxLDcuMDYsMjcuNzQsMjcuNzQsMCwwLDEsMCwxNi41OSwyMC45MSwyMC45MSwwLDAsMS0zLjgxLDcuMDZBMTguMjgsMTguMjgsMCwwLDEsMjg3LjUyLDgwYTIyLjM5LDIyLjM5LDAsMCwxLTE3LjYsMCwxOC4yNiwxOC4yNiwwLDAsMS02LjMyLTQuODcsMjAuODgsMjAuODgsMCwwLDEtMy44MS03LjA2QTI3LjcyLDI3LjcyLDAsMCwxLDI1OS43OSw1MS40OFpNMjY1LDY2LjA3YTE3LjA4LDE3LjA4LDAsMCwwLDIuNiw1LjU4LDEzLjI4LDEzLjI4LDAsMCwwLDQuNTUsNCwxNS4yNywxNS4yNywwLDAsMCwxMy4yMywwLDEzLjI4LDEzLjI4LDAsMCwwLDQuNTUtNCwxNy4wOCwxNy4wOCwwLDAsMCwyLjYtNS41OCwyNC4zMiwyNC4zMiwwLDAsMCwwLTEyLjU4LDE3LjA4LDE3LjA4LDAsMCwwLTIuNi01LjU4LDEzLjI4LDEzLjI4LDAsMCwwLTQuNTUtNCwxNS4yNywxNS4yNywwLDAsMC0xMy4yMywwLDEzLjI4LDEzLjI4LDAsMCwwLTQuNTUsNCwxNy4wOCwxNy4wOCwwLDAsMC0yLjYsNS41OEEyNC4zMiwyNC4zMiwwLDAsMCwyNjUsNjYuMDdaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjYuODcgLTE3LjA4KSIvPjxwYXRoIGQ9Ik0zMzEuNTEsMzguN3E2LDAsOS40MiwzYTEwLjE3LDEwLjE3LDAsMCwxLDMuNCw4LjA5LDEyLjgsMTIuOCwwLDAsMS0xLjc0LDYuNzMsOSw5LDAsMCwxLTUuNTgsNHYwLjEyYTcuNTIsNy41MiwwLDAsMSwzLDEuMTgsNi40OSw2LjQ5LDAsMCwxLDEuODMsMiw5LDksMCwwLDEsMSwyLjU3LDI3LjM0LDI3LjM0LDAsMCwxLC41LDNxMC4xMiwxLjU0LjE4LDMuMTNhMjcuMTcsMjcuMTcsMCwwLDAsLjI5LDMuMTMsMTkuMDcsMTkuMDcsMCwwLDAsLjY4LDIuOTJBNy4yMSw3LjIxLDAsMCwwLDM0NS44Miw4MWgtNi4yNmEzLjUxLDMuNTEsMCwwLDEtLjgtMS43NywxOC4xNiwxOC4xNiwwLDAsMS0uMjctMi41MXEtMC4wNi0xLjM5LS4xMi0zYTIwLjUsMjAuNSwwLDAsMC0uMzUtMy4xM3EtMC4yNC0xLjUzLS41OS0yLjkyYTYuODgsNi44OCwwLDAsMC0xLjEyLTIuNDIsNS41Niw1LjU2LDAsMCwwLTItMS42NUE3LjQ1LDcuNDUsMCwwLDAsMzMxLDYzSDMxNy4zVjgxaC01LjYxVjM4LjdoMTkuODJabTEuMTgsMTkuMTNhOC4xMSw4LjExLDAsMCwwLDMuMS0xLjE1LDYuMyw2LjMsMCwwLDAsMi4xMy0yLjMsNy43NCw3Ljc0LDAsMCwwLC44LTMuNzUsNy41Nyw3LjU3LDAsMCwwLTEuNzctNS4ycS0xLjc3LTItNS43My0ySDMxNy4yOHYxNC43SDMyOUEyMi41NiwyMi41NiwwLDAsMCwzMzIuNjksNTcuODNaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjYuODcgLTE3LjA4KSIvPjxwYXRoIGQ9Ik0zNjMuOTMsMzguN2wyMi4yLDM0LjE5aDAuMTJWMzguN2g1LjMyVjgwLjg2aC02LjE0TDM2My40LDQ3aC0wLjEyVjgwLjg2SDM1OFYzOC43aDUuOTNaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjYuODcgLTE3LjA4KSIvPjxwYXRoIGQ9Ik00MzUuNjcsMzguN3Y0LjcyaC0yMy41djEzLjRoMjEuOTF2NC43Mkg0MTIuMTd2MTQuNmgyMy42OHY0LjcySDQwNi41NlYzOC43aDI5LjExWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTI2Ljg3IC0xNy4wOCkiLz48cGF0aCBkPSJNNDY4LjM5LDM4LjdxNiwwLDkuNDIsM2ExMC4xNywxMC4xNywwLDAsMSwzLjQsOC4wOSwxMi44LDEyLjgsMCwwLDEtMS43NCw2LjczLDksOSwwLDAsMS01LjU4LDR2MC4xMmE3LjUyLDcuNTIsMCwwLDEsMywxLjE4LDYuNDksNi40OSwwLDAsMSwxLjgzLDIsOSw5LDAsMCwxLDEsMi41NywyNy4zNCwyNy4zNCwwLDAsMSwuNSwzcTAuMTIsMS41NC4xOCwzLjEzYTI3LjE3LDI3LjE3LDAsMCwwLC4yOSwzLjEzLDE5LjA3LDE5LjA3LDAsMCwwLC42OCwyLjkyQTcuMjEsNy4yMSwwLDAsMCw0ODIuNyw4MWgtNi4yNmEzLjUxLDMuNTEsMCwwLDEtLjgtMS43NywxOC4xNiwxOC4xNiwwLDAsMS0uMjctMi41MXEtMC4wNi0xLjM5LS4xMi0zYTIwLjUsMjAuNSwwLDAsMC0uMzUtMy4xM3EtMC4yNC0xLjUzLS41OS0yLjkyYTYuODgsNi44OCwwLDAsMC0xLjEyLTIuNDIsNS41Niw1LjU2LDAsMCwwLTItMS42NSw3LjQ1LDcuNDUsMCwwLDAtMy4zMS0uNjJoLTEzLjdWODFoLTUuNjFWMzguN2gxOS44MlptMS4xOCwxOS4xM2E4LjExLDguMTEsMCwwLDAsMy4xLTEuMTUsNi4zLDYuMywwLDAsMCwyLjEzLTIuMyw3Ljc0LDcuNzQsMCwwLDAsLjgtMy43NSw3LjU3LDcuNTcsMCwwLDAtMS43Ny01LjJxLTEuNzctMi01LjczLTJINDU0LjE2djE0LjdoMTEuNjlBMjIuNTYsMjIuNTYsMCwwLDAsNDY5LjU3LDU3LjgzWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTI2Ljg3IC0xNy4wOCkiLz48cGF0aCBkPSJNNTE2LDQ0LjQ2YTExLjksMTEuOSwwLDAsMC03LjE3LTIsMTcuMTUsMTcuMTUsMCwwLDAtMy40OC4zNSw5LjI1LDkuMjUsMCwwLDAtMywxLjE4LDYuMjEsNi4yMSwwLDAsMC0yLjEzLDIuMjEsNi44NSw2Ljg1LDAsMCwwLS44LDMuNDUsNC4zOSw0LjM5LDAsMCwwLDEuMTUsMy4xNiw4LjUyLDguNTIsMCwwLDAsMy4wNywyQTI1LjY4LDI1LjY4LDAsMCwwLDUwOCw1NnEyLjQyLDAuNSw0LjkzLDEuMDl0NC45MywxLjM5YTE2LjI5LDE2LjI5LDAsMCwxLDQuMzQsMi4xNiwxMC4yNywxMC4yNywwLDAsMSwzLjA3LDMuNDIsMTIsMTIsMCwwLDEtLjM1LDExLDEyLjQxLDEyLjQxLDAsMCwxLTMuODcsMy45LDE2Ljg0LDE2Ljg0LDAsMCwxLTUuMjksMi4xOCwyNS42OCwyNS42OCwwLDAsMS01LjgyLjY4LDI0LjczLDI0LjczLDAsMCwxLTYuNy0uODksMTYuNTMsMTYuNTMsMCwwLDEtNS41NS0yLjY5LDEyLjczLDEyLjczLDAsMCwxLTMuNzgtNC42MUExNC44MywxNC44MywwLDAsMSw0OTIuNDgsNjdoNS4zMWE5LjUxLDkuNTEsMCwwLDAsMSw0LjU4LDkuMzksOS4zOSwwLDAsMCwyLjcyLDMuMTYsMTEuNDUsMTEuNDUsMCwwLDAsMy45MywxLjgzLDE4LDE4LDAsMCwwLDQuNjEuNTksMjAuOTMsMjAuOTMsMCwwLDAsMy44MS0uMzUsMTEuMiwxMS4yLDAsMCwwLDMuNDUtMS4yMSw2LjQ4LDYuNDgsMCwwLDAsMy40My02LjExQTUuMjksNS4yOSwwLDAsMCw1MTkuNTksNjZhOC40OCw4LjQ4LDAsMCwwLTMuMDctMi4yMSwyMi41NCwyMi41NCwwLDAsMC00LjM0LTEuMzlsLTQuOTMtMS4wOXEtMi41MS0uNTYtNC45My0xLjNBMTcuODEsMTcuODEsMCwwLDEsNDk4LDU4YTkuMzIsOS4zMiwwLDAsMS0zLjA3LTMuMTNBOS4yMiw5LjIyLDAsMCwxLDQ5My43OCw1MGExMS4xNywxMS4xNywwLDAsMSwxLjMtNS41MiwxMS4zNCwxMS4zNCwwLDAsMSwzLjQ1LTMuODQsMTUuNTIsMTUuNTIsMCwwLDEsNC45LTIuMjQsMjEuNjUsMjEuNjUsMCwwLDEsNS42NC0uNzQsMjIuNTksMjIuNTksMCwwLDEsNiwuNzdBMTMuNjYsMTMuNjYsMCwwLDEsNTIwLDQwLjg4LDExLjY5LDExLjY5LDAsMCwxLDUyMy4yOCw0NWExNC45LDE0LjksMCwwLDEsMS4zMyw2SDUxOS4zUTUxOC44Miw0Ni40OSw1MTYsNDQuNDZaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjYuODcgLTE3LjA4KSIvPjwvc3ZnPg==);\n    width: 121px;\n    height: 17px; }\n  .fc-icon-context {\n    background-image: url(data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMDAgMjAwIj48dGl0bGU+ZmMtaWNvbi1jb250ZXh0PC90aXRsZT48cGF0aCBkPSJNMTAuMjYsNzB2NjBILTE1LjFWNzBIMTAuMjZtMTAtMTBILTI1LjF2ODBIMjAuMjZWNjBoMFoiLz48cGF0aCBkPSJNMjE1LjE2LDY5Ljk0djYwLjEySDE4OS42OFY2OS45NGgyNS40OE0yMjUuMSw2MEgxNzkuNzR2ODBIMjI1LjFWNjBoMFoiLz48cGF0aCBkPSJNMTU4Ljc0LDU3djg2SDQxLjI4VjU3SDE1OC43NG0xMi0xMkgyOS4yOFYxNTVIMTcwLjc0VjQ1aDBaIi8+PGNpcmNsZSBjeD0iNjUuNjkiIGN5PSI4My4wMyIgcj0iMTEuMTgiLz48cG9seWdvbiBwb2ludHM9IjU0LjUxIDEzMyAxNDUuNTEgMTMzIDEzMy4xOCA5Mi4zMyAxMjQuNjggOTUuMzMgMTE2LjAxIDgwLjE3IDkwLjM0IDExNi4zMyA3Ni42IDEwOC44MyA1NC41MSAxMzMiLz48L3N2Zz4=); }\n  .fc-icon-info {\n    background-image: url(data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NyAxMzYuMzIiPjx0aXRsZT5Db250ZXh0IGljb24gZm9yIHdlYjwvdGl0bGU+PHBhdGggZD0iTTExNC4zMSwxNTMuMzdjLTAuMiwyLjMtLjQsNC43NC0wLjY0LDcuMTZhMS4xLDEuMSwwLDAsMS0uNDQuNjljLTYuNDUsNC40Mi0xMy40Myw3LjMyLTIxLjQxLDcuMDlhMTUuNzIsMTUuNzIsMCwwLDEtMTAuMjYtMy43M2MtMy4zMS0yLjkxLTQuNjktNi43NC01LTExLTAuNDYtNi43OSwxLjIyLTEzLjIsMy44NC0xOS4zN3M1LjYtMTIuMzksOC4zMy0xOC42MkE3Mi44LDcyLjgsMCwwLDAsOTQsOTkuNGEyMy43MSwyMy43MSwwLDAsMCwuMDktOS4zMmMtMC45Mi00LjI5LTMuODctNi40NS04LjI0LTUuOUE0OC4yNiw0OC4yNiwwLDAsMCw4MSw4NS4yNGMtMC4yNS4wNi0uNDksMC4xNC0wLjg4LDAuMjZsMC4zNy00LjE0YTIuNTEsMi41MSwwLDAsMCwuMDYtMC40OGMtMC4yNC0yLjA2LjktMy4yLDIuNTEtNC4yNkM4OCw3My40OCw5Myw3MSw5OC43Nyw3MC4wOUEyMCwyMCwwLDAsMSwxMTAsNzEuMzRhMTMuNTgsMTMuNTgsMCwwLDEsOC40NSwxMS4xMmMwLjgyLDUuMzIsMCwxMC41Mi0xLjI4LDE1LjY3LTIuMjgsOS4yNy02LDE4LTkuOTQsMjYuNjYtMS45NSw0LjMzLTQuMjMsOC41Mi01LjQ2LDEzLjE0YTI1LjY4LDI1LjY4LDAsMCwwLTEuMTMsOS4zNWMwLjQzLDQuMTksMy4wOCw2Ljc5LDcuMjcsNi43N0E2Mi4wOSw2Mi4wOSwwLDAsMCwxMTQuMzEsMTUzLjM3WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTc2LjQ4IC0zMikiLz48cGF0aCBkPSJNMTIzLjQ4LDQ0Ljg0QTEyLjgxLDEyLjgxLDAsMSwxLDExMC43LDMyaDAuMDZhMTIuNzUsMTIuNzUsMCwwLDEsMTIuNzIsMTIuNzh2MC4wNloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC03Ni40OCAtMzIpIi8+PC9zdmc+); }\n  .fc-icon-links {\n    background-image: url(data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMzYuMzQgMTM2LjM2Ij48dGl0bGU+ZmMtaWNvbi1saW5rczwvdGl0bGU+PHBhdGggZD0iTTg4LjI2LDUyLjlsNy4xNiw3LjE2YTIxLjE5LDIxLjE5LDAsMCwxLDAsMjkuODhMNTQuNTksMTMwLjc3YTIxLjE5LDIxLjE5LDAsMCwxLTI5Ljg4LDBsLTUuNDctNS40N2EyMS4xOSwyMS4xOSwwLDAsMSwwLTI5Ljg4TDMwLjgyLDgzLjg0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNi44MyAtNi44MikiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMwMDA7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjEyLjQ5NjAwMDI4OTkxNjk5MnB4Ii8+PHBhdGggZD0iTTYxLjc0LDk3LjFsLTcuMTYtNy4xNmEyMS4xOSwyMS4xOSwwLDAsMSwwLTI5Ljg4TDk1LjQxLDE5LjIzYTIxLjE5LDIxLjE5LDAsMCwxLDI5Ljg4LDBsNS40Nyw1LjQ3YTIxLjE5LDIxLjE5LDAsMCwxLDAsMjkuODhMMTE5LjE5LDY2LjE2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNi44MyAtNi44MikiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMwMDA7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjEyLjQ5NjAwMDI4OTkxNjk5MnB4Ii8+PC9zdmc+); }\n  .fc-icon-copyright {\n    background-image: url(data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNTIgMTUyIj48dGl0bGU+ZmMtaWNvbi1jb3B5cmlnaHQ8L3RpdGxlPjxjaXJjbGUgY3g9Ijc2IiBjeT0iNzYiIHI9IjcwIiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMDAwO3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDoxMnB4Ii8+PHBhdGggZD0iTTExOC4zNyw4Mi41M2ExNi43NCwxNi43NCwwLDAsMC02LjE3LTQuNjksMjAuNTMsMjAuNTMsMCwwLDAtOC40Ni0xLjY0LDIxLjE3LDIxLjE3LDAsMCwwLTE2LDcsMjQuMTcsMjQuMTcsMCwwLDAtNC43NCw4LDMwLjE3LDMwLjE3LDAsMCwwLDAsMTkuOTIsMjQuNzksMjQuNzksMCwwLDAsNC42NCw3Ljg2LDIxLDIxLDAsMCwwLDYuOTMsNS4xOSwyMCwyMCwwLDAsMCw4LjU3LDEuODYsMTkuMiwxOS4yLDAsMCwwLDkuMjgtMi4xOCwxOC40OCwxOC40OCwwLDAsMCw2LjY2LTYuMTFsMTQuMTksMTAuNTlhMjkuNTUsMjkuNTUsMCwwLDEtMTIuNDUsMTAuMTUsMzguNTIsMzguNTIsMCwwLDEtMTUuNSwzLjI4LDQ3LjYyLDQ3LjYyLDAsMCwxLTE2LjctMi44NCwzOC4yLDM4LjIsMCwwLDEtMTMuMjEtOC4xMywzNi44NywzNi44NywwLDAsMS04LjY4LTEyLjgzLDQzLjY2LDQzLjY2LDAsMCwxLTMuMTEtMTYuODFBNDMuNjYsNDMuNjYsMCwwLDEsNjYuNzMsODQuM2EzNi44OCwzNi44OCwwLDAsMSw4LjY4LTEyLjgzLDM4LjI2LDM4LjI2LDAsMCwxLDEzLjIxLTguMTMsNDcuNjIsNDcuNjIsMCwwLDEsMTYuNy0yLjg0LDQxLDQxLDAsMCwxLDYuODIuNiwzNi45MywzNi45MywwLDAsMSw3LDEuOTEsMzEuMjEsMzEuMjEsMCwwLDEsNi42MSwzLjQ5LDI2LjMzLDI2LjMzLDAsMCwxLDUuNjgsNS4zNVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yNCAtMjQpIi8+PC9zdmc+); }\n  .fc-icon-angle-right {\n    width: 0.5em;\n    background-image: url(data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA5MS4zIDI5NS44OCI+PHRpdGxlPkNoZXZyb24gcmlnaHQgaWNvbiBmb3Igd2ViPC90aXRsZT48cG9seWxpbmUgcG9pbnRzPSI4LjUzIDQuMjggODAuNjMgMTQ3Ljk0IDguNTMgMjkxLjYiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMwMDA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjE5LjA4MzgzNzUwOTE1NTI3M3B4Ii8+PC9zdmc+); }\n  .fc-icon-angle-left {\n    width: 0.5em;\n    background-image: url(data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA5MS4zIDI5NS44OCI+PHRpdGxlPkNoZXZyb24gbGVmdCBpY29uIGZvciB3ZWI8L3RpdGxlPjxwb2x5bGluZSBwb2ludHM9IjgyLjc4IDI5MS42IDEwLjY4IDE0Ny45NCA4Mi43OCA0LjI4IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMDAwO3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDoxOS4wODM4Mzc1MDkxNTUyNzNweCIvPjwvc3ZnPg==); }\n\n/*# sourceMappingURL=main.scss.map */'},{}]},{},[21])(21)});

/***/ }),

/***/ 445:
/***/ (function(module, exports, __webpack_require__) {

var baseClamp = __webpack_require__(432),
    baseToString = __webpack_require__(134),
    toInteger = __webpack_require__(66),
    toString = __webpack_require__(135);

/**
 * Checks if `string` starts with the given target string.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to inspect.
 * @param {string} [target] The string to search for.
 * @param {number} [position=0] The position to search from.
 * @returns {boolean} Returns `true` if `string` starts with `target`,
 *  else `false`.
 * @example
 *
 * _.startsWith('abc', 'a');
 * // => true
 *
 * _.startsWith('abc', 'b');
 * // => false
 *
 * _.startsWith('abc', 'b', 1);
 * // => true
 */
function startsWith(string, target, position) {
  string = toString(string);
  position = position == null
    ? 0
    : baseClamp(toInteger(position), 0, string.length);

  target = baseToString(target);
  return string.slice(position, position + target.length) == target;
}

module.exports = startsWith;


/***/ }),

/***/ 446:
/***/ (function(module, exports) {

module.exports = {"Aacute":"Á","aacute":"á","Abreve":"Ă","abreve":"ă","ac":"∾","acd":"∿","acE":"∾̳","Acirc":"Â","acirc":"â","acute":"´","Acy":"А","acy":"а","AElig":"Æ","aelig":"æ","af":"⁡","Afr":"𝔄","afr":"𝔞","Agrave":"À","agrave":"à","alefsym":"ℵ","aleph":"ℵ","Alpha":"Α","alpha":"α","Amacr":"Ā","amacr":"ā","amalg":"⨿","amp":"&","AMP":"&","andand":"⩕","And":"⩓","and":"∧","andd":"⩜","andslope":"⩘","andv":"⩚","ang":"∠","ange":"⦤","angle":"∠","angmsdaa":"⦨","angmsdab":"⦩","angmsdac":"⦪","angmsdad":"⦫","angmsdae":"⦬","angmsdaf":"⦭","angmsdag":"⦮","angmsdah":"⦯","angmsd":"∡","angrt":"∟","angrtvb":"⊾","angrtvbd":"⦝","angsph":"∢","angst":"Å","angzarr":"⍼","Aogon":"Ą","aogon":"ą","Aopf":"𝔸","aopf":"𝕒","apacir":"⩯","ap":"≈","apE":"⩰","ape":"≊","apid":"≋","apos":"'","ApplyFunction":"⁡","approx":"≈","approxeq":"≊","Aring":"Å","aring":"å","Ascr":"𝒜","ascr":"𝒶","Assign":"≔","ast":"*","asymp":"≈","asympeq":"≍","Atilde":"Ã","atilde":"ã","Auml":"Ä","auml":"ä","awconint":"∳","awint":"⨑","backcong":"≌","backepsilon":"϶","backprime":"‵","backsim":"∽","backsimeq":"⋍","Backslash":"∖","Barv":"⫧","barvee":"⊽","barwed":"⌅","Barwed":"⌆","barwedge":"⌅","bbrk":"⎵","bbrktbrk":"⎶","bcong":"≌","Bcy":"Б","bcy":"б","bdquo":"„","becaus":"∵","because":"∵","Because":"∵","bemptyv":"⦰","bepsi":"϶","bernou":"ℬ","Bernoullis":"ℬ","Beta":"Β","beta":"β","beth":"ℶ","between":"≬","Bfr":"𝔅","bfr":"𝔟","bigcap":"⋂","bigcirc":"◯","bigcup":"⋃","bigodot":"⨀","bigoplus":"⨁","bigotimes":"⨂","bigsqcup":"⨆","bigstar":"★","bigtriangledown":"▽","bigtriangleup":"△","biguplus":"⨄","bigvee":"⋁","bigwedge":"⋀","bkarow":"⤍","blacklozenge":"⧫","blacksquare":"▪","blacktriangle":"▴","blacktriangledown":"▾","blacktriangleleft":"◂","blacktriangleright":"▸","blank":"␣","blk12":"▒","blk14":"░","blk34":"▓","block":"█","bne":"=⃥","bnequiv":"≡⃥","bNot":"⫭","bnot":"⌐","Bopf":"𝔹","bopf":"𝕓","bot":"⊥","bottom":"⊥","bowtie":"⋈","boxbox":"⧉","boxdl":"┐","boxdL":"╕","boxDl":"╖","boxDL":"╗","boxdr":"┌","boxdR":"╒","boxDr":"╓","boxDR":"╔","boxh":"─","boxH":"═","boxhd":"┬","boxHd":"╤","boxhD":"╥","boxHD":"╦","boxhu":"┴","boxHu":"╧","boxhU":"╨","boxHU":"╩","boxminus":"⊟","boxplus":"⊞","boxtimes":"⊠","boxul":"┘","boxuL":"╛","boxUl":"╜","boxUL":"╝","boxur":"└","boxuR":"╘","boxUr":"╙","boxUR":"╚","boxv":"│","boxV":"║","boxvh":"┼","boxvH":"╪","boxVh":"╫","boxVH":"╬","boxvl":"┤","boxvL":"╡","boxVl":"╢","boxVL":"╣","boxvr":"├","boxvR":"╞","boxVr":"╟","boxVR":"╠","bprime":"‵","breve":"˘","Breve":"˘","brvbar":"¦","bscr":"𝒷","Bscr":"ℬ","bsemi":"⁏","bsim":"∽","bsime":"⋍","bsolb":"⧅","bsol":"\\","bsolhsub":"⟈","bull":"•","bullet":"•","bump":"≎","bumpE":"⪮","bumpe":"≏","Bumpeq":"≎","bumpeq":"≏","Cacute":"Ć","cacute":"ć","capand":"⩄","capbrcup":"⩉","capcap":"⩋","cap":"∩","Cap":"⋒","capcup":"⩇","capdot":"⩀","CapitalDifferentialD":"ⅅ","caps":"∩︀","caret":"⁁","caron":"ˇ","Cayleys":"ℭ","ccaps":"⩍","Ccaron":"Č","ccaron":"č","Ccedil":"Ç","ccedil":"ç","Ccirc":"Ĉ","ccirc":"ĉ","Cconint":"∰","ccups":"⩌","ccupssm":"⩐","Cdot":"Ċ","cdot":"ċ","cedil":"¸","Cedilla":"¸","cemptyv":"⦲","cent":"¢","centerdot":"·","CenterDot":"·","cfr":"𝔠","Cfr":"ℭ","CHcy":"Ч","chcy":"ч","check":"✓","checkmark":"✓","Chi":"Χ","chi":"χ","circ":"ˆ","circeq":"≗","circlearrowleft":"↺","circlearrowright":"↻","circledast":"⊛","circledcirc":"⊚","circleddash":"⊝","CircleDot":"⊙","circledR":"®","circledS":"Ⓢ","CircleMinus":"⊖","CirclePlus":"⊕","CircleTimes":"⊗","cir":"○","cirE":"⧃","cire":"≗","cirfnint":"⨐","cirmid":"⫯","cirscir":"⧂","ClockwiseContourIntegral":"∲","CloseCurlyDoubleQuote":"”","CloseCurlyQuote":"’","clubs":"♣","clubsuit":"♣","colon":":","Colon":"∷","Colone":"⩴","colone":"≔","coloneq":"≔","comma":",","commat":"@","comp":"∁","compfn":"∘","complement":"∁","complexes":"ℂ","cong":"≅","congdot":"⩭","Congruent":"≡","conint":"∮","Conint":"∯","ContourIntegral":"∮","copf":"𝕔","Copf":"ℂ","coprod":"∐","Coproduct":"∐","copy":"©","COPY":"©","copysr":"℗","CounterClockwiseContourIntegral":"∳","crarr":"↵","cross":"✗","Cross":"⨯","Cscr":"𝒞","cscr":"𝒸","csub":"⫏","csube":"⫑","csup":"⫐","csupe":"⫒","ctdot":"⋯","cudarrl":"⤸","cudarrr":"⤵","cuepr":"⋞","cuesc":"⋟","cularr":"↶","cularrp":"⤽","cupbrcap":"⩈","cupcap":"⩆","CupCap":"≍","cup":"∪","Cup":"⋓","cupcup":"⩊","cupdot":"⊍","cupor":"⩅","cups":"∪︀","curarr":"↷","curarrm":"⤼","curlyeqprec":"⋞","curlyeqsucc":"⋟","curlyvee":"⋎","curlywedge":"⋏","curren":"¤","curvearrowleft":"↶","curvearrowright":"↷","cuvee":"⋎","cuwed":"⋏","cwconint":"∲","cwint":"∱","cylcty":"⌭","dagger":"†","Dagger":"‡","daleth":"ℸ","darr":"↓","Darr":"↡","dArr":"⇓","dash":"‐","Dashv":"⫤","dashv":"⊣","dbkarow":"⤏","dblac":"˝","Dcaron":"Ď","dcaron":"ď","Dcy":"Д","dcy":"д","ddagger":"‡","ddarr":"⇊","DD":"ⅅ","dd":"ⅆ","DDotrahd":"⤑","ddotseq":"⩷","deg":"°","Del":"∇","Delta":"Δ","delta":"δ","demptyv":"⦱","dfisht":"⥿","Dfr":"𝔇","dfr":"𝔡","dHar":"⥥","dharl":"⇃","dharr":"⇂","DiacriticalAcute":"´","DiacriticalDot":"˙","DiacriticalDoubleAcute":"˝","DiacriticalGrave":"`","DiacriticalTilde":"˜","diam":"⋄","diamond":"⋄","Diamond":"⋄","diamondsuit":"♦","diams":"♦","die":"¨","DifferentialD":"ⅆ","digamma":"ϝ","disin":"⋲","div":"÷","divide":"÷","divideontimes":"⋇","divonx":"⋇","DJcy":"Ђ","djcy":"ђ","dlcorn":"⌞","dlcrop":"⌍","dollar":"$","Dopf":"𝔻","dopf":"𝕕","Dot":"¨","dot":"˙","DotDot":"⃜","doteq":"≐","doteqdot":"≑","DotEqual":"≐","dotminus":"∸","dotplus":"∔","dotsquare":"⊡","doublebarwedge":"⌆","DoubleContourIntegral":"∯","DoubleDot":"¨","DoubleDownArrow":"⇓","DoubleLeftArrow":"⇐","DoubleLeftRightArrow":"⇔","DoubleLeftTee":"⫤","DoubleLongLeftArrow":"⟸","DoubleLongLeftRightArrow":"⟺","DoubleLongRightArrow":"⟹","DoubleRightArrow":"⇒","DoubleRightTee":"⊨","DoubleUpArrow":"⇑","DoubleUpDownArrow":"⇕","DoubleVerticalBar":"∥","DownArrowBar":"⤓","downarrow":"↓","DownArrow":"↓","Downarrow":"⇓","DownArrowUpArrow":"⇵","DownBreve":"̑","downdownarrows":"⇊","downharpoonleft":"⇃","downharpoonright":"⇂","DownLeftRightVector":"⥐","DownLeftTeeVector":"⥞","DownLeftVectorBar":"⥖","DownLeftVector":"↽","DownRightTeeVector":"⥟","DownRightVectorBar":"⥗","DownRightVector":"⇁","DownTeeArrow":"↧","DownTee":"⊤","drbkarow":"⤐","drcorn":"⌟","drcrop":"⌌","Dscr":"𝒟","dscr":"𝒹","DScy":"Ѕ","dscy":"ѕ","dsol":"⧶","Dstrok":"Đ","dstrok":"đ","dtdot":"⋱","dtri":"▿","dtrif":"▾","duarr":"⇵","duhar":"⥯","dwangle":"⦦","DZcy":"Џ","dzcy":"џ","dzigrarr":"⟿","Eacute":"É","eacute":"é","easter":"⩮","Ecaron":"Ě","ecaron":"ě","Ecirc":"Ê","ecirc":"ê","ecir":"≖","ecolon":"≕","Ecy":"Э","ecy":"э","eDDot":"⩷","Edot":"Ė","edot":"ė","eDot":"≑","ee":"ⅇ","efDot":"≒","Efr":"𝔈","efr":"𝔢","eg":"⪚","Egrave":"È","egrave":"è","egs":"⪖","egsdot":"⪘","el":"⪙","Element":"∈","elinters":"⏧","ell":"ℓ","els":"⪕","elsdot":"⪗","Emacr":"Ē","emacr":"ē","empty":"∅","emptyset":"∅","EmptySmallSquare":"◻","emptyv":"∅","EmptyVerySmallSquare":"▫","emsp13":" ","emsp14":" ","emsp":" ","ENG":"Ŋ","eng":"ŋ","ensp":" ","Eogon":"Ę","eogon":"ę","Eopf":"𝔼","eopf":"𝕖","epar":"⋕","eparsl":"⧣","eplus":"⩱","epsi":"ε","Epsilon":"Ε","epsilon":"ε","epsiv":"ϵ","eqcirc":"≖","eqcolon":"≕","eqsim":"≂","eqslantgtr":"⪖","eqslantless":"⪕","Equal":"⩵","equals":"=","EqualTilde":"≂","equest":"≟","Equilibrium":"⇌","equiv":"≡","equivDD":"⩸","eqvparsl":"⧥","erarr":"⥱","erDot":"≓","escr":"ℯ","Escr":"ℰ","esdot":"≐","Esim":"⩳","esim":"≂","Eta":"Η","eta":"η","ETH":"Ð","eth":"ð","Euml":"Ë","euml":"ë","euro":"€","excl":"!","exist":"∃","Exists":"∃","expectation":"ℰ","exponentiale":"ⅇ","ExponentialE":"ⅇ","fallingdotseq":"≒","Fcy":"Ф","fcy":"ф","female":"♀","ffilig":"ﬃ","fflig":"ﬀ","ffllig":"ﬄ","Ffr":"𝔉","ffr":"𝔣","filig":"ﬁ","FilledSmallSquare":"◼","FilledVerySmallSquare":"▪","fjlig":"fj","flat":"♭","fllig":"ﬂ","fltns":"▱","fnof":"ƒ","Fopf":"𝔽","fopf":"𝕗","forall":"∀","ForAll":"∀","fork":"⋔","forkv":"⫙","Fouriertrf":"ℱ","fpartint":"⨍","frac12":"½","frac13":"⅓","frac14":"¼","frac15":"⅕","frac16":"⅙","frac18":"⅛","frac23":"⅔","frac25":"⅖","frac34":"¾","frac35":"⅗","frac38":"⅜","frac45":"⅘","frac56":"⅚","frac58":"⅝","frac78":"⅞","frasl":"⁄","frown":"⌢","fscr":"𝒻","Fscr":"ℱ","gacute":"ǵ","Gamma":"Γ","gamma":"γ","Gammad":"Ϝ","gammad":"ϝ","gap":"⪆","Gbreve":"Ğ","gbreve":"ğ","Gcedil":"Ģ","Gcirc":"Ĝ","gcirc":"ĝ","Gcy":"Г","gcy":"г","Gdot":"Ġ","gdot":"ġ","ge":"≥","gE":"≧","gEl":"⪌","gel":"⋛","geq":"≥","geqq":"≧","geqslant":"⩾","gescc":"⪩","ges":"⩾","gesdot":"⪀","gesdoto":"⪂","gesdotol":"⪄","gesl":"⋛︀","gesles":"⪔","Gfr":"𝔊","gfr":"𝔤","gg":"≫","Gg":"⋙","ggg":"⋙","gimel":"ℷ","GJcy":"Ѓ","gjcy":"ѓ","gla":"⪥","gl":"≷","glE":"⪒","glj":"⪤","gnap":"⪊","gnapprox":"⪊","gne":"⪈","gnE":"≩","gneq":"⪈","gneqq":"≩","gnsim":"⋧","Gopf":"𝔾","gopf":"𝕘","grave":"`","GreaterEqual":"≥","GreaterEqualLess":"⋛","GreaterFullEqual":"≧","GreaterGreater":"⪢","GreaterLess":"≷","GreaterSlantEqual":"⩾","GreaterTilde":"≳","Gscr":"𝒢","gscr":"ℊ","gsim":"≳","gsime":"⪎","gsiml":"⪐","gtcc":"⪧","gtcir":"⩺","gt":">","GT":">","Gt":"≫","gtdot":"⋗","gtlPar":"⦕","gtquest":"⩼","gtrapprox":"⪆","gtrarr":"⥸","gtrdot":"⋗","gtreqless":"⋛","gtreqqless":"⪌","gtrless":"≷","gtrsim":"≳","gvertneqq":"≩︀","gvnE":"≩︀","Hacek":"ˇ","hairsp":" ","half":"½","hamilt":"ℋ","HARDcy":"Ъ","hardcy":"ъ","harrcir":"⥈","harr":"↔","hArr":"⇔","harrw":"↭","Hat":"^","hbar":"ℏ","Hcirc":"Ĥ","hcirc":"ĥ","hearts":"♥","heartsuit":"♥","hellip":"…","hercon":"⊹","hfr":"𝔥","Hfr":"ℌ","HilbertSpace":"ℋ","hksearow":"⤥","hkswarow":"⤦","hoarr":"⇿","homtht":"∻","hookleftarrow":"↩","hookrightarrow":"↪","hopf":"𝕙","Hopf":"ℍ","horbar":"―","HorizontalLine":"─","hscr":"𝒽","Hscr":"ℋ","hslash":"ℏ","Hstrok":"Ħ","hstrok":"ħ","HumpDownHump":"≎","HumpEqual":"≏","hybull":"⁃","hyphen":"‐","Iacute":"Í","iacute":"í","ic":"⁣","Icirc":"Î","icirc":"î","Icy":"И","icy":"и","Idot":"İ","IEcy":"Е","iecy":"е","iexcl":"¡","iff":"⇔","ifr":"𝔦","Ifr":"ℑ","Igrave":"Ì","igrave":"ì","ii":"ⅈ","iiiint":"⨌","iiint":"∭","iinfin":"⧜","iiota":"℩","IJlig":"Ĳ","ijlig":"ĳ","Imacr":"Ī","imacr":"ī","image":"ℑ","ImaginaryI":"ⅈ","imagline":"ℐ","imagpart":"ℑ","imath":"ı","Im":"ℑ","imof":"⊷","imped":"Ƶ","Implies":"⇒","incare":"℅","in":"∈","infin":"∞","infintie":"⧝","inodot":"ı","intcal":"⊺","int":"∫","Int":"∬","integers":"ℤ","Integral":"∫","intercal":"⊺","Intersection":"⋂","intlarhk":"⨗","intprod":"⨼","InvisibleComma":"⁣","InvisibleTimes":"⁢","IOcy":"Ё","iocy":"ё","Iogon":"Į","iogon":"į","Iopf":"𝕀","iopf":"𝕚","Iota":"Ι","iota":"ι","iprod":"⨼","iquest":"¿","iscr":"𝒾","Iscr":"ℐ","isin":"∈","isindot":"⋵","isinE":"⋹","isins":"⋴","isinsv":"⋳","isinv":"∈","it":"⁢","Itilde":"Ĩ","itilde":"ĩ","Iukcy":"І","iukcy":"і","Iuml":"Ï","iuml":"ï","Jcirc":"Ĵ","jcirc":"ĵ","Jcy":"Й","jcy":"й","Jfr":"𝔍","jfr":"𝔧","jmath":"ȷ","Jopf":"𝕁","jopf":"𝕛","Jscr":"𝒥","jscr":"𝒿","Jsercy":"Ј","jsercy":"ј","Jukcy":"Є","jukcy":"є","Kappa":"Κ","kappa":"κ","kappav":"ϰ","Kcedil":"Ķ","kcedil":"ķ","Kcy":"К","kcy":"к","Kfr":"𝔎","kfr":"𝔨","kgreen":"ĸ","KHcy":"Х","khcy":"х","KJcy":"Ќ","kjcy":"ќ","Kopf":"𝕂","kopf":"𝕜","Kscr":"𝒦","kscr":"𝓀","lAarr":"⇚","Lacute":"Ĺ","lacute":"ĺ","laemptyv":"⦴","lagran":"ℒ","Lambda":"Λ","lambda":"λ","lang":"⟨","Lang":"⟪","langd":"⦑","langle":"⟨","lap":"⪅","Laplacetrf":"ℒ","laquo":"«","larrb":"⇤","larrbfs":"⤟","larr":"←","Larr":"↞","lArr":"⇐","larrfs":"⤝","larrhk":"↩","larrlp":"↫","larrpl":"⤹","larrsim":"⥳","larrtl":"↢","latail":"⤙","lAtail":"⤛","lat":"⪫","late":"⪭","lates":"⪭︀","lbarr":"⤌","lBarr":"⤎","lbbrk":"❲","lbrace":"{","lbrack":"[","lbrke":"⦋","lbrksld":"⦏","lbrkslu":"⦍","Lcaron":"Ľ","lcaron":"ľ","Lcedil":"Ļ","lcedil":"ļ","lceil":"⌈","lcub":"{","Lcy":"Л","lcy":"л","ldca":"⤶","ldquo":"“","ldquor":"„","ldrdhar":"⥧","ldrushar":"⥋","ldsh":"↲","le":"≤","lE":"≦","LeftAngleBracket":"⟨","LeftArrowBar":"⇤","leftarrow":"←","LeftArrow":"←","Leftarrow":"⇐","LeftArrowRightArrow":"⇆","leftarrowtail":"↢","LeftCeiling":"⌈","LeftDoubleBracket":"⟦","LeftDownTeeVector":"⥡","LeftDownVectorBar":"⥙","LeftDownVector":"⇃","LeftFloor":"⌊","leftharpoondown":"↽","leftharpoonup":"↼","leftleftarrows":"⇇","leftrightarrow":"↔","LeftRightArrow":"↔","Leftrightarrow":"⇔","leftrightarrows":"⇆","leftrightharpoons":"⇋","leftrightsquigarrow":"↭","LeftRightVector":"⥎","LeftTeeArrow":"↤","LeftTee":"⊣","LeftTeeVector":"⥚","leftthreetimes":"⋋","LeftTriangleBar":"⧏","LeftTriangle":"⊲","LeftTriangleEqual":"⊴","LeftUpDownVector":"⥑","LeftUpTeeVector":"⥠","LeftUpVectorBar":"⥘","LeftUpVector":"↿","LeftVectorBar":"⥒","LeftVector":"↼","lEg":"⪋","leg":"⋚","leq":"≤","leqq":"≦","leqslant":"⩽","lescc":"⪨","les":"⩽","lesdot":"⩿","lesdoto":"⪁","lesdotor":"⪃","lesg":"⋚︀","lesges":"⪓","lessapprox":"⪅","lessdot":"⋖","lesseqgtr":"⋚","lesseqqgtr":"⪋","LessEqualGreater":"⋚","LessFullEqual":"≦","LessGreater":"≶","lessgtr":"≶","LessLess":"⪡","lesssim":"≲","LessSlantEqual":"⩽","LessTilde":"≲","lfisht":"⥼","lfloor":"⌊","Lfr":"𝔏","lfr":"𝔩","lg":"≶","lgE":"⪑","lHar":"⥢","lhard":"↽","lharu":"↼","lharul":"⥪","lhblk":"▄","LJcy":"Љ","ljcy":"љ","llarr":"⇇","ll":"≪","Ll":"⋘","llcorner":"⌞","Lleftarrow":"⇚","llhard":"⥫","lltri":"◺","Lmidot":"Ŀ","lmidot":"ŀ","lmoustache":"⎰","lmoust":"⎰","lnap":"⪉","lnapprox":"⪉","lne":"⪇","lnE":"≨","lneq":"⪇","lneqq":"≨","lnsim":"⋦","loang":"⟬","loarr":"⇽","lobrk":"⟦","longleftarrow":"⟵","LongLeftArrow":"⟵","Longleftarrow":"⟸","longleftrightarrow":"⟷","LongLeftRightArrow":"⟷","Longleftrightarrow":"⟺","longmapsto":"⟼","longrightarrow":"⟶","LongRightArrow":"⟶","Longrightarrow":"⟹","looparrowleft":"↫","looparrowright":"↬","lopar":"⦅","Lopf":"𝕃","lopf":"𝕝","loplus":"⨭","lotimes":"⨴","lowast":"∗","lowbar":"_","LowerLeftArrow":"↙","LowerRightArrow":"↘","loz":"◊","lozenge":"◊","lozf":"⧫","lpar":"(","lparlt":"⦓","lrarr":"⇆","lrcorner":"⌟","lrhar":"⇋","lrhard":"⥭","lrm":"‎","lrtri":"⊿","lsaquo":"‹","lscr":"𝓁","Lscr":"ℒ","lsh":"↰","Lsh":"↰","lsim":"≲","lsime":"⪍","lsimg":"⪏","lsqb":"[","lsquo":"‘","lsquor":"‚","Lstrok":"Ł","lstrok":"ł","ltcc":"⪦","ltcir":"⩹","lt":"<","LT":"<","Lt":"≪","ltdot":"⋖","lthree":"⋋","ltimes":"⋉","ltlarr":"⥶","ltquest":"⩻","ltri":"◃","ltrie":"⊴","ltrif":"◂","ltrPar":"⦖","lurdshar":"⥊","luruhar":"⥦","lvertneqq":"≨︀","lvnE":"≨︀","macr":"¯","male":"♂","malt":"✠","maltese":"✠","Map":"⤅","map":"↦","mapsto":"↦","mapstodown":"↧","mapstoleft":"↤","mapstoup":"↥","marker":"▮","mcomma":"⨩","Mcy":"М","mcy":"м","mdash":"—","mDDot":"∺","measuredangle":"∡","MediumSpace":" ","Mellintrf":"ℳ","Mfr":"𝔐","mfr":"𝔪","mho":"℧","micro":"µ","midast":"*","midcir":"⫰","mid":"∣","middot":"·","minusb":"⊟","minus":"−","minusd":"∸","minusdu":"⨪","MinusPlus":"∓","mlcp":"⫛","mldr":"…","mnplus":"∓","models":"⊧","Mopf":"𝕄","mopf":"𝕞","mp":"∓","mscr":"𝓂","Mscr":"ℳ","mstpos":"∾","Mu":"Μ","mu":"μ","multimap":"⊸","mumap":"⊸","nabla":"∇","Nacute":"Ń","nacute":"ń","nang":"∠⃒","nap":"≉","napE":"⩰̸","napid":"≋̸","napos":"ŉ","napprox":"≉","natural":"♮","naturals":"ℕ","natur":"♮","nbsp":" ","nbump":"≎̸","nbumpe":"≏̸","ncap":"⩃","Ncaron":"Ň","ncaron":"ň","Ncedil":"Ņ","ncedil":"ņ","ncong":"≇","ncongdot":"⩭̸","ncup":"⩂","Ncy":"Н","ncy":"н","ndash":"–","nearhk":"⤤","nearr":"↗","neArr":"⇗","nearrow":"↗","ne":"≠","nedot":"≐̸","NegativeMediumSpace":"​","NegativeThickSpace":"​","NegativeThinSpace":"​","NegativeVeryThinSpace":"​","nequiv":"≢","nesear":"⤨","nesim":"≂̸","NestedGreaterGreater":"≫","NestedLessLess":"≪","NewLine":"\n","nexist":"∄","nexists":"∄","Nfr":"𝔑","nfr":"𝔫","ngE":"≧̸","nge":"≱","ngeq":"≱","ngeqq":"≧̸","ngeqslant":"⩾̸","nges":"⩾̸","nGg":"⋙̸","ngsim":"≵","nGt":"≫⃒","ngt":"≯","ngtr":"≯","nGtv":"≫̸","nharr":"↮","nhArr":"⇎","nhpar":"⫲","ni":"∋","nis":"⋼","nisd":"⋺","niv":"∋","NJcy":"Њ","njcy":"њ","nlarr":"↚","nlArr":"⇍","nldr":"‥","nlE":"≦̸","nle":"≰","nleftarrow":"↚","nLeftarrow":"⇍","nleftrightarrow":"↮","nLeftrightarrow":"⇎","nleq":"≰","nleqq":"≦̸","nleqslant":"⩽̸","nles":"⩽̸","nless":"≮","nLl":"⋘̸","nlsim":"≴","nLt":"≪⃒","nlt":"≮","nltri":"⋪","nltrie":"⋬","nLtv":"≪̸","nmid":"∤","NoBreak":"⁠","NonBreakingSpace":" ","nopf":"𝕟","Nopf":"ℕ","Not":"⫬","not":"¬","NotCongruent":"≢","NotCupCap":"≭","NotDoubleVerticalBar":"∦","NotElement":"∉","NotEqual":"≠","NotEqualTilde":"≂̸","NotExists":"∄","NotGreater":"≯","NotGreaterEqual":"≱","NotGreaterFullEqual":"≧̸","NotGreaterGreater":"≫̸","NotGreaterLess":"≹","NotGreaterSlantEqual":"⩾̸","NotGreaterTilde":"≵","NotHumpDownHump":"≎̸","NotHumpEqual":"≏̸","notin":"∉","notindot":"⋵̸","notinE":"⋹̸","notinva":"∉","notinvb":"⋷","notinvc":"⋶","NotLeftTriangleBar":"⧏̸","NotLeftTriangle":"⋪","NotLeftTriangleEqual":"⋬","NotLess":"≮","NotLessEqual":"≰","NotLessGreater":"≸","NotLessLess":"≪̸","NotLessSlantEqual":"⩽̸","NotLessTilde":"≴","NotNestedGreaterGreater":"⪢̸","NotNestedLessLess":"⪡̸","notni":"∌","notniva":"∌","notnivb":"⋾","notnivc":"⋽","NotPrecedes":"⊀","NotPrecedesEqual":"⪯̸","NotPrecedesSlantEqual":"⋠","NotReverseElement":"∌","NotRightTriangleBar":"⧐̸","NotRightTriangle":"⋫","NotRightTriangleEqual":"⋭","NotSquareSubset":"⊏̸","NotSquareSubsetEqual":"⋢","NotSquareSuperset":"⊐̸","NotSquareSupersetEqual":"⋣","NotSubset":"⊂⃒","NotSubsetEqual":"⊈","NotSucceeds":"⊁","NotSucceedsEqual":"⪰̸","NotSucceedsSlantEqual":"⋡","NotSucceedsTilde":"≿̸","NotSuperset":"⊃⃒","NotSupersetEqual":"⊉","NotTilde":"≁","NotTildeEqual":"≄","NotTildeFullEqual":"≇","NotTildeTilde":"≉","NotVerticalBar":"∤","nparallel":"∦","npar":"∦","nparsl":"⫽⃥","npart":"∂̸","npolint":"⨔","npr":"⊀","nprcue":"⋠","nprec":"⊀","npreceq":"⪯̸","npre":"⪯̸","nrarrc":"⤳̸","nrarr":"↛","nrArr":"⇏","nrarrw":"↝̸","nrightarrow":"↛","nRightarrow":"⇏","nrtri":"⋫","nrtrie":"⋭","nsc":"⊁","nsccue":"⋡","nsce":"⪰̸","Nscr":"𝒩","nscr":"𝓃","nshortmid":"∤","nshortparallel":"∦","nsim":"≁","nsime":"≄","nsimeq":"≄","nsmid":"∤","nspar":"∦","nsqsube":"⋢","nsqsupe":"⋣","nsub":"⊄","nsubE":"⫅̸","nsube":"⊈","nsubset":"⊂⃒","nsubseteq":"⊈","nsubseteqq":"⫅̸","nsucc":"⊁","nsucceq":"⪰̸","nsup":"⊅","nsupE":"⫆̸","nsupe":"⊉","nsupset":"⊃⃒","nsupseteq":"⊉","nsupseteqq":"⫆̸","ntgl":"≹","Ntilde":"Ñ","ntilde":"ñ","ntlg":"≸","ntriangleleft":"⋪","ntrianglelefteq":"⋬","ntriangleright":"⋫","ntrianglerighteq":"⋭","Nu":"Ν","nu":"ν","num":"#","numero":"№","numsp":" ","nvap":"≍⃒","nvdash":"⊬","nvDash":"⊭","nVdash":"⊮","nVDash":"⊯","nvge":"≥⃒","nvgt":">⃒","nvHarr":"⤄","nvinfin":"⧞","nvlArr":"⤂","nvle":"≤⃒","nvlt":"<⃒","nvltrie":"⊴⃒","nvrArr":"⤃","nvrtrie":"⊵⃒","nvsim":"∼⃒","nwarhk":"⤣","nwarr":"↖","nwArr":"⇖","nwarrow":"↖","nwnear":"⤧","Oacute":"Ó","oacute":"ó","oast":"⊛","Ocirc":"Ô","ocirc":"ô","ocir":"⊚","Ocy":"О","ocy":"о","odash":"⊝","Odblac":"Ő","odblac":"ő","odiv":"⨸","odot":"⊙","odsold":"⦼","OElig":"Œ","oelig":"œ","ofcir":"⦿","Ofr":"𝔒","ofr":"𝔬","ogon":"˛","Ograve":"Ò","ograve":"ò","ogt":"⧁","ohbar":"⦵","ohm":"Ω","oint":"∮","olarr":"↺","olcir":"⦾","olcross":"⦻","oline":"‾","olt":"⧀","Omacr":"Ō","omacr":"ō","Omega":"Ω","omega":"ω","Omicron":"Ο","omicron":"ο","omid":"⦶","ominus":"⊖","Oopf":"𝕆","oopf":"𝕠","opar":"⦷","OpenCurlyDoubleQuote":"“","OpenCurlyQuote":"‘","operp":"⦹","oplus":"⊕","orarr":"↻","Or":"⩔","or":"∨","ord":"⩝","order":"ℴ","orderof":"ℴ","ordf":"ª","ordm":"º","origof":"⊶","oror":"⩖","orslope":"⩗","orv":"⩛","oS":"Ⓢ","Oscr":"𝒪","oscr":"ℴ","Oslash":"Ø","oslash":"ø","osol":"⊘","Otilde":"Õ","otilde":"õ","otimesas":"⨶","Otimes":"⨷","otimes":"⊗","Ouml":"Ö","ouml":"ö","ovbar":"⌽","OverBar":"‾","OverBrace":"⏞","OverBracket":"⎴","OverParenthesis":"⏜","para":"¶","parallel":"∥","par":"∥","parsim":"⫳","parsl":"⫽","part":"∂","PartialD":"∂","Pcy":"П","pcy":"п","percnt":"%","period":".","permil":"‰","perp":"⊥","pertenk":"‱","Pfr":"𝔓","pfr":"𝔭","Phi":"Φ","phi":"φ","phiv":"ϕ","phmmat":"ℳ","phone":"☎","Pi":"Π","pi":"π","pitchfork":"⋔","piv":"ϖ","planck":"ℏ","planckh":"ℎ","plankv":"ℏ","plusacir":"⨣","plusb":"⊞","pluscir":"⨢","plus":"+","plusdo":"∔","plusdu":"⨥","pluse":"⩲","PlusMinus":"±","plusmn":"±","plussim":"⨦","plustwo":"⨧","pm":"±","Poincareplane":"ℌ","pointint":"⨕","popf":"𝕡","Popf":"ℙ","pound":"£","prap":"⪷","Pr":"⪻","pr":"≺","prcue":"≼","precapprox":"⪷","prec":"≺","preccurlyeq":"≼","Precedes":"≺","PrecedesEqual":"⪯","PrecedesSlantEqual":"≼","PrecedesTilde":"≾","preceq":"⪯","precnapprox":"⪹","precneqq":"⪵","precnsim":"⋨","pre":"⪯","prE":"⪳","precsim":"≾","prime":"′","Prime":"″","primes":"ℙ","prnap":"⪹","prnE":"⪵","prnsim":"⋨","prod":"∏","Product":"∏","profalar":"⌮","profline":"⌒","profsurf":"⌓","prop":"∝","Proportional":"∝","Proportion":"∷","propto":"∝","prsim":"≾","prurel":"⊰","Pscr":"𝒫","pscr":"𝓅","Psi":"Ψ","psi":"ψ","puncsp":" ","Qfr":"𝔔","qfr":"𝔮","qint":"⨌","qopf":"𝕢","Qopf":"ℚ","qprime":"⁗","Qscr":"𝒬","qscr":"𝓆","quaternions":"ℍ","quatint":"⨖","quest":"?","questeq":"≟","quot":"\"","QUOT":"\"","rAarr":"⇛","race":"∽̱","Racute":"Ŕ","racute":"ŕ","radic":"√","raemptyv":"⦳","rang":"⟩","Rang":"⟫","rangd":"⦒","range":"⦥","rangle":"⟩","raquo":"»","rarrap":"⥵","rarrb":"⇥","rarrbfs":"⤠","rarrc":"⤳","rarr":"→","Rarr":"↠","rArr":"⇒","rarrfs":"⤞","rarrhk":"↪","rarrlp":"↬","rarrpl":"⥅","rarrsim":"⥴","Rarrtl":"⤖","rarrtl":"↣","rarrw":"↝","ratail":"⤚","rAtail":"⤜","ratio":"∶","rationals":"ℚ","rbarr":"⤍","rBarr":"⤏","RBarr":"⤐","rbbrk":"❳","rbrace":"}","rbrack":"]","rbrke":"⦌","rbrksld":"⦎","rbrkslu":"⦐","Rcaron":"Ř","rcaron":"ř","Rcedil":"Ŗ","rcedil":"ŗ","rceil":"⌉","rcub":"}","Rcy":"Р","rcy":"р","rdca":"⤷","rdldhar":"⥩","rdquo":"”","rdquor":"”","rdsh":"↳","real":"ℜ","realine":"ℛ","realpart":"ℜ","reals":"ℝ","Re":"ℜ","rect":"▭","reg":"®","REG":"®","ReverseElement":"∋","ReverseEquilibrium":"⇋","ReverseUpEquilibrium":"⥯","rfisht":"⥽","rfloor":"⌋","rfr":"𝔯","Rfr":"ℜ","rHar":"⥤","rhard":"⇁","rharu":"⇀","rharul":"⥬","Rho":"Ρ","rho":"ρ","rhov":"ϱ","RightAngleBracket":"⟩","RightArrowBar":"⇥","rightarrow":"→","RightArrow":"→","Rightarrow":"⇒","RightArrowLeftArrow":"⇄","rightarrowtail":"↣","RightCeiling":"⌉","RightDoubleBracket":"⟧","RightDownTeeVector":"⥝","RightDownVectorBar":"⥕","RightDownVector":"⇂","RightFloor":"⌋","rightharpoondown":"⇁","rightharpoonup":"⇀","rightleftarrows":"⇄","rightleftharpoons":"⇌","rightrightarrows":"⇉","rightsquigarrow":"↝","RightTeeArrow":"↦","RightTee":"⊢","RightTeeVector":"⥛","rightthreetimes":"⋌","RightTriangleBar":"⧐","RightTriangle":"⊳","RightTriangleEqual":"⊵","RightUpDownVector":"⥏","RightUpTeeVector":"⥜","RightUpVectorBar":"⥔","RightUpVector":"↾","RightVectorBar":"⥓","RightVector":"⇀","ring":"˚","risingdotseq":"≓","rlarr":"⇄","rlhar":"⇌","rlm":"‏","rmoustache":"⎱","rmoust":"⎱","rnmid":"⫮","roang":"⟭","roarr":"⇾","robrk":"⟧","ropar":"⦆","ropf":"𝕣","Ropf":"ℝ","roplus":"⨮","rotimes":"⨵","RoundImplies":"⥰","rpar":")","rpargt":"⦔","rppolint":"⨒","rrarr":"⇉","Rrightarrow":"⇛","rsaquo":"›","rscr":"𝓇","Rscr":"ℛ","rsh":"↱","Rsh":"↱","rsqb":"]","rsquo":"’","rsquor":"’","rthree":"⋌","rtimes":"⋊","rtri":"▹","rtrie":"⊵","rtrif":"▸","rtriltri":"⧎","RuleDelayed":"⧴","ruluhar":"⥨","rx":"℞","Sacute":"Ś","sacute":"ś","sbquo":"‚","scap":"⪸","Scaron":"Š","scaron":"š","Sc":"⪼","sc":"≻","sccue":"≽","sce":"⪰","scE":"⪴","Scedil":"Ş","scedil":"ş","Scirc":"Ŝ","scirc":"ŝ","scnap":"⪺","scnE":"⪶","scnsim":"⋩","scpolint":"⨓","scsim":"≿","Scy":"С","scy":"с","sdotb":"⊡","sdot":"⋅","sdote":"⩦","searhk":"⤥","searr":"↘","seArr":"⇘","searrow":"↘","sect":"§","semi":";","seswar":"⤩","setminus":"∖","setmn":"∖","sext":"✶","Sfr":"𝔖","sfr":"𝔰","sfrown":"⌢","sharp":"♯","SHCHcy":"Щ","shchcy":"щ","SHcy":"Ш","shcy":"ш","ShortDownArrow":"↓","ShortLeftArrow":"←","shortmid":"∣","shortparallel":"∥","ShortRightArrow":"→","ShortUpArrow":"↑","shy":"­","Sigma":"Σ","sigma":"σ","sigmaf":"ς","sigmav":"ς","sim":"∼","simdot":"⩪","sime":"≃","simeq":"≃","simg":"⪞","simgE":"⪠","siml":"⪝","simlE":"⪟","simne":"≆","simplus":"⨤","simrarr":"⥲","slarr":"←","SmallCircle":"∘","smallsetminus":"∖","smashp":"⨳","smeparsl":"⧤","smid":"∣","smile":"⌣","smt":"⪪","smte":"⪬","smtes":"⪬︀","SOFTcy":"Ь","softcy":"ь","solbar":"⌿","solb":"⧄","sol":"/","Sopf":"𝕊","sopf":"𝕤","spades":"♠","spadesuit":"♠","spar":"∥","sqcap":"⊓","sqcaps":"⊓︀","sqcup":"⊔","sqcups":"⊔︀","Sqrt":"√","sqsub":"⊏","sqsube":"⊑","sqsubset":"⊏","sqsubseteq":"⊑","sqsup":"⊐","sqsupe":"⊒","sqsupset":"⊐","sqsupseteq":"⊒","square":"□","Square":"□","SquareIntersection":"⊓","SquareSubset":"⊏","SquareSubsetEqual":"⊑","SquareSuperset":"⊐","SquareSupersetEqual":"⊒","SquareUnion":"⊔","squarf":"▪","squ":"□","squf":"▪","srarr":"→","Sscr":"𝒮","sscr":"𝓈","ssetmn":"∖","ssmile":"⌣","sstarf":"⋆","Star":"⋆","star":"☆","starf":"★","straightepsilon":"ϵ","straightphi":"ϕ","strns":"¯","sub":"⊂","Sub":"⋐","subdot":"⪽","subE":"⫅","sube":"⊆","subedot":"⫃","submult":"⫁","subnE":"⫋","subne":"⊊","subplus":"⪿","subrarr":"⥹","subset":"⊂","Subset":"⋐","subseteq":"⊆","subseteqq":"⫅","SubsetEqual":"⊆","subsetneq":"⊊","subsetneqq":"⫋","subsim":"⫇","subsub":"⫕","subsup":"⫓","succapprox":"⪸","succ":"≻","succcurlyeq":"≽","Succeeds":"≻","SucceedsEqual":"⪰","SucceedsSlantEqual":"≽","SucceedsTilde":"≿","succeq":"⪰","succnapprox":"⪺","succneqq":"⪶","succnsim":"⋩","succsim":"≿","SuchThat":"∋","sum":"∑","Sum":"∑","sung":"♪","sup1":"¹","sup2":"²","sup3":"³","sup":"⊃","Sup":"⋑","supdot":"⪾","supdsub":"⫘","supE":"⫆","supe":"⊇","supedot":"⫄","Superset":"⊃","SupersetEqual":"⊇","suphsol":"⟉","suphsub":"⫗","suplarr":"⥻","supmult":"⫂","supnE":"⫌","supne":"⊋","supplus":"⫀","supset":"⊃","Supset":"⋑","supseteq":"⊇","supseteqq":"⫆","supsetneq":"⊋","supsetneqq":"⫌","supsim":"⫈","supsub":"⫔","supsup":"⫖","swarhk":"⤦","swarr":"↙","swArr":"⇙","swarrow":"↙","swnwar":"⤪","szlig":"ß","Tab":"\t","target":"⌖","Tau":"Τ","tau":"τ","tbrk":"⎴","Tcaron":"Ť","tcaron":"ť","Tcedil":"Ţ","tcedil":"ţ","Tcy":"Т","tcy":"т","tdot":"⃛","telrec":"⌕","Tfr":"𝔗","tfr":"𝔱","there4":"∴","therefore":"∴","Therefore":"∴","Theta":"Θ","theta":"θ","thetasym":"ϑ","thetav":"ϑ","thickapprox":"≈","thicksim":"∼","ThickSpace":"  ","ThinSpace":" ","thinsp":" ","thkap":"≈","thksim":"∼","THORN":"Þ","thorn":"þ","tilde":"˜","Tilde":"∼","TildeEqual":"≃","TildeFullEqual":"≅","TildeTilde":"≈","timesbar":"⨱","timesb":"⊠","times":"×","timesd":"⨰","tint":"∭","toea":"⤨","topbot":"⌶","topcir":"⫱","top":"⊤","Topf":"𝕋","topf":"𝕥","topfork":"⫚","tosa":"⤩","tprime":"‴","trade":"™","TRADE":"™","triangle":"▵","triangledown":"▿","triangleleft":"◃","trianglelefteq":"⊴","triangleq":"≜","triangleright":"▹","trianglerighteq":"⊵","tridot":"◬","trie":"≜","triminus":"⨺","TripleDot":"⃛","triplus":"⨹","trisb":"⧍","tritime":"⨻","trpezium":"⏢","Tscr":"𝒯","tscr":"𝓉","TScy":"Ц","tscy":"ц","TSHcy":"Ћ","tshcy":"ћ","Tstrok":"Ŧ","tstrok":"ŧ","twixt":"≬","twoheadleftarrow":"↞","twoheadrightarrow":"↠","Uacute":"Ú","uacute":"ú","uarr":"↑","Uarr":"↟","uArr":"⇑","Uarrocir":"⥉","Ubrcy":"Ў","ubrcy":"ў","Ubreve":"Ŭ","ubreve":"ŭ","Ucirc":"Û","ucirc":"û","Ucy":"У","ucy":"у","udarr":"⇅","Udblac":"Ű","udblac":"ű","udhar":"⥮","ufisht":"⥾","Ufr":"𝔘","ufr":"𝔲","Ugrave":"Ù","ugrave":"ù","uHar":"⥣","uharl":"↿","uharr":"↾","uhblk":"▀","ulcorn":"⌜","ulcorner":"⌜","ulcrop":"⌏","ultri":"◸","Umacr":"Ū","umacr":"ū","uml":"¨","UnderBar":"_","UnderBrace":"⏟","UnderBracket":"⎵","UnderParenthesis":"⏝","Union":"⋃","UnionPlus":"⊎","Uogon":"Ų","uogon":"ų","Uopf":"𝕌","uopf":"𝕦","UpArrowBar":"⤒","uparrow":"↑","UpArrow":"↑","Uparrow":"⇑","UpArrowDownArrow":"⇅","updownarrow":"↕","UpDownArrow":"↕","Updownarrow":"⇕","UpEquilibrium":"⥮","upharpoonleft":"↿","upharpoonright":"↾","uplus":"⊎","UpperLeftArrow":"↖","UpperRightArrow":"↗","upsi":"υ","Upsi":"ϒ","upsih":"ϒ","Upsilon":"Υ","upsilon":"υ","UpTeeArrow":"↥","UpTee":"⊥","upuparrows":"⇈","urcorn":"⌝","urcorner":"⌝","urcrop":"⌎","Uring":"Ů","uring":"ů","urtri":"◹","Uscr":"𝒰","uscr":"𝓊","utdot":"⋰","Utilde":"Ũ","utilde":"ũ","utri":"▵","utrif":"▴","uuarr":"⇈","Uuml":"Ü","uuml":"ü","uwangle":"⦧","vangrt":"⦜","varepsilon":"ϵ","varkappa":"ϰ","varnothing":"∅","varphi":"ϕ","varpi":"ϖ","varpropto":"∝","varr":"↕","vArr":"⇕","varrho":"ϱ","varsigma":"ς","varsubsetneq":"⊊︀","varsubsetneqq":"⫋︀","varsupsetneq":"⊋︀","varsupsetneqq":"⫌︀","vartheta":"ϑ","vartriangleleft":"⊲","vartriangleright":"⊳","vBar":"⫨","Vbar":"⫫","vBarv":"⫩","Vcy":"В","vcy":"в","vdash":"⊢","vDash":"⊨","Vdash":"⊩","VDash":"⊫","Vdashl":"⫦","veebar":"⊻","vee":"∨","Vee":"⋁","veeeq":"≚","vellip":"⋮","verbar":"|","Verbar":"‖","vert":"|","Vert":"‖","VerticalBar":"∣","VerticalLine":"|","VerticalSeparator":"❘","VerticalTilde":"≀","VeryThinSpace":" ","Vfr":"𝔙","vfr":"𝔳","vltri":"⊲","vnsub":"⊂⃒","vnsup":"⊃⃒","Vopf":"𝕍","vopf":"𝕧","vprop":"∝","vrtri":"⊳","Vscr":"𝒱","vscr":"𝓋","vsubnE":"⫋︀","vsubne":"⊊︀","vsupnE":"⫌︀","vsupne":"⊋︀","Vvdash":"⊪","vzigzag":"⦚","Wcirc":"Ŵ","wcirc":"ŵ","wedbar":"⩟","wedge":"∧","Wedge":"⋀","wedgeq":"≙","weierp":"℘","Wfr":"𝔚","wfr":"𝔴","Wopf":"𝕎","wopf":"𝕨","wp":"℘","wr":"≀","wreath":"≀","Wscr":"𝒲","wscr":"𝓌","xcap":"⋂","xcirc":"◯","xcup":"⋃","xdtri":"▽","Xfr":"𝔛","xfr":"𝔵","xharr":"⟷","xhArr":"⟺","Xi":"Ξ","xi":"ξ","xlarr":"⟵","xlArr":"⟸","xmap":"⟼","xnis":"⋻","xodot":"⨀","Xopf":"𝕏","xopf":"𝕩","xoplus":"⨁","xotime":"⨂","xrarr":"⟶","xrArr":"⟹","Xscr":"𝒳","xscr":"𝓍","xsqcup":"⨆","xuplus":"⨄","xutri":"△","xvee":"⋁","xwedge":"⋀","Yacute":"Ý","yacute":"ý","YAcy":"Я","yacy":"я","Ycirc":"Ŷ","ycirc":"ŷ","Ycy":"Ы","ycy":"ы","yen":"¥","Yfr":"𝔜","yfr":"𝔶","YIcy":"Ї","yicy":"ї","Yopf":"𝕐","yopf":"𝕪","Yscr":"𝒴","yscr":"𝓎","YUcy":"Ю","yucy":"ю","yuml":"ÿ","Yuml":"Ÿ","Zacute":"Ź","zacute":"ź","Zcaron":"Ž","zcaron":"ž","Zcy":"З","zcy":"з","Zdot":"Ż","zdot":"ż","zeetrf":"ℨ","ZeroWidthSpace":"​","Zeta":"Ζ","zeta":"ζ","zfr":"𝔷","Zfr":"ℨ","ZHcy":"Ж","zhcy":"ж","zigrarr":"⇝","zopf":"𝕫","Zopf":"ℤ","Zscr":"𝒵","zscr":"𝓏","zwj":"‍","zwnj":"‌"}

/***/ }),

/***/ 447:
/***/ (function(module, exports, __webpack_require__) {

"use strict";



////////////////////////////////////////////////////////////////////////////////
// Helpers

// Merge objects
//
function assign(obj /*from1, from2, from3, ...*/) {
  var sources = Array.prototype.slice.call(arguments, 1);

  sources.forEach(function (source) {
    if (!source) { return; }

    Object.keys(source).forEach(function (key) {
      obj[key] = source[key];
    });
  });

  return obj;
}

function _class(obj) { return Object.prototype.toString.call(obj); }
function isString(obj) { return _class(obj) === '[object String]'; }
function isObject(obj) { return _class(obj) === '[object Object]'; }
function isRegExp(obj) { return _class(obj) === '[object RegExp]'; }
function isFunction(obj) { return _class(obj) === '[object Function]'; }


function escapeRE(str) { return str.replace(/[.?*+^$[\]\\(){}|-]/g, '\\$&'); }

////////////////////////////////////////////////////////////////////////////////


var defaultOptions = {
  fuzzyLink: true,
  fuzzyEmail: true,
  fuzzyIP: false
};


function isOptionsObj(obj) {
  return Object.keys(obj || {}).reduce(function (acc, k) {
    return acc || defaultOptions.hasOwnProperty(k);
  }, false);
}


var defaultSchemas = {
  'http:': {
    validate: function (text, pos, self) {
      var tail = text.slice(pos);

      if (!self.re.http) {
        // compile lazily, because "host"-containing variables can change on tlds update.
        self.re.http =  new RegExp(
          '^\\/\\/' + self.re.src_auth + self.re.src_host_port_strict + self.re.src_path, 'i'
        );
      }
      if (self.re.http.test(tail)) {
        return tail.match(self.re.http)[0].length;
      }
      return 0;
    }
  },
  'https:':  'http:',
  'ftp:':    'http:',
  '//':      {
    validate: function (text, pos, self) {
      var tail = text.slice(pos);

      if (!self.re.no_http) {
      // compile lazily, because "host"-containing variables can change on tlds update.
        self.re.no_http =  new RegExp(
          '^' +
          self.re.src_auth +
          // Don't allow single-level domains, because of false positives like '//test'
          // with code comments
          '(?:localhost|(?:(?:' + self.re.src_domain + ')\\.)+' + self.re.src_domain_root + ')' +
          self.re.src_port +
          self.re.src_host_terminator +
          self.re.src_path,

          'i'
        );
      }

      if (self.re.no_http.test(tail)) {
        // should not be `://` & `///`, that protects from errors in protocol name
        if (pos >= 3 && text[pos - 3] === ':') { return 0; }
        if (pos >= 3 && text[pos - 3] === '/') { return 0; }
        return tail.match(self.re.no_http)[0].length;
      }
      return 0;
    }
  },
  'mailto:': {
    validate: function (text, pos, self) {
      var tail = text.slice(pos);

      if (!self.re.mailto) {
        self.re.mailto =  new RegExp(
          '^' + self.re.src_email_name + '@' + self.re.src_host_strict, 'i'
        );
      }
      if (self.re.mailto.test(tail)) {
        return tail.match(self.re.mailto)[0].length;
      }
      return 0;
    }
  }
};

/*eslint-disable max-len*/

// RE pattern for 2-character tlds (autogenerated by ./support/tlds_2char_gen.js)
var tlds_2ch_src_re = 'a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]';

// DON'T try to make PRs with changes. Extend TLDs with LinkifyIt.tlds() instead
var tlds_default = 'biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф'.split('|');

/*eslint-enable max-len*/

////////////////////////////////////////////////////////////////////////////////

function resetScanCache(self) {
  self.__index__ = -1;
  self.__text_cache__   = '';
}

function createValidator(re) {
  return function (text, pos) {
    var tail = text.slice(pos);

    if (re.test(tail)) {
      return tail.match(re)[0].length;
    }
    return 0;
  };
}

function createNormalizer() {
  return function (match, self) {
    self.normalize(match);
  };
}

// Schemas compiler. Build regexps.
//
function compile(self) {

  // Load & clone RE patterns.
  var re = self.re = __webpack_require__(448)(self.__opts__);

  // Define dynamic patterns
  var tlds = self.__tlds__.slice();

  self.onCompile();

  if (!self.__tlds_replaced__) {
    tlds.push(tlds_2ch_src_re);
  }
  tlds.push(re.src_xn);

  re.src_tlds = tlds.join('|');

  function untpl(tpl) { return tpl.replace('%TLDS%', re.src_tlds); }

  re.email_fuzzy      = RegExp(untpl(re.tpl_email_fuzzy), 'i');
  re.link_fuzzy       = RegExp(untpl(re.tpl_link_fuzzy), 'i');
  re.link_no_ip_fuzzy = RegExp(untpl(re.tpl_link_no_ip_fuzzy), 'i');
  re.host_fuzzy_test  = RegExp(untpl(re.tpl_host_fuzzy_test), 'i');

  //
  // Compile each schema
  //

  var aliases = [];

  self.__compiled__ = {}; // Reset compiled data

  function schemaError(name, val) {
    throw new Error('(LinkifyIt) Invalid schema "' + name + '": ' + val);
  }

  Object.keys(self.__schemas__).forEach(function (name) {
    var val = self.__schemas__[name];

    // skip disabled methods
    if (val === null) { return; }

    var compiled = { validate: null, link: null };

    self.__compiled__[name] = compiled;

    if (isObject(val)) {
      if (isRegExp(val.validate)) {
        compiled.validate = createValidator(val.validate);
      } else if (isFunction(val.validate)) {
        compiled.validate = val.validate;
      } else {
        schemaError(name, val);
      }

      if (isFunction(val.normalize)) {
        compiled.normalize = val.normalize;
      } else if (!val.normalize) {
        compiled.normalize = createNormalizer();
      } else {
        schemaError(name, val);
      }

      return;
    }

    if (isString(val)) {
      aliases.push(name);
      return;
    }

    schemaError(name, val);
  });

  //
  // Compile postponed aliases
  //

  aliases.forEach(function (alias) {
    if (!self.__compiled__[self.__schemas__[alias]]) {
      // Silently fail on missed schemas to avoid errons on disable.
      // schemaError(alias, self.__schemas__[alias]);
      return;
    }

    self.__compiled__[alias].validate =
      self.__compiled__[self.__schemas__[alias]].validate;
    self.__compiled__[alias].normalize =
      self.__compiled__[self.__schemas__[alias]].normalize;
  });

  //
  // Fake record for guessed links
  //
  self.__compiled__[''] = { validate: null, normalize: createNormalizer() };

  //
  // Build schema condition
  //
  var slist = Object.keys(self.__compiled__)
                      .filter(function (name) {
                        // Filter disabled & fake schemas
                        return name.length > 0 && self.__compiled__[name];
                      })
                      .map(escapeRE)
                      .join('|');
  // (?!_) cause 1.5x slowdown
  self.re.schema_test   = RegExp('(^|(?!_)(?:[><\uff5c]|' + re.src_ZPCc + '))(' + slist + ')', 'i');
  self.re.schema_search = RegExp('(^|(?!_)(?:[><\uff5c]|' + re.src_ZPCc + '))(' + slist + ')', 'ig');

  self.re.pretest       = RegExp(
                            '(' + self.re.schema_test.source + ')|' +
                            '(' + self.re.host_fuzzy_test.source + ')|' +
                            '@',
                            'i');

  //
  // Cleanup
  //

  resetScanCache(self);
}

/**
 * class Match
 *
 * Match result. Single element of array, returned by [[LinkifyIt#match]]
 **/
function Match(self, shift) {
  var start = self.__index__,
      end   = self.__last_index__,
      text  = self.__text_cache__.slice(start, end);

  /**
   * Match#schema -> String
   *
   * Prefix (protocol) for matched string.
   **/
  this.schema    = self.__schema__.toLowerCase();
  /**
   * Match#index -> Number
   *
   * First position of matched string.
   **/
  this.index     = start + shift;
  /**
   * Match#lastIndex -> Number
   *
   * Next position after matched string.
   **/
  this.lastIndex = end + shift;
  /**
   * Match#raw -> String
   *
   * Matched string.
   **/
  this.raw       = text;
  /**
   * Match#text -> String
   *
   * Notmalized text of matched string.
   **/
  this.text      = text;
  /**
   * Match#url -> String
   *
   * Normalized url of matched string.
   **/
  this.url       = text;
}

function createMatch(self, shift) {
  var match = new Match(self, shift);

  self.__compiled__[match.schema].normalize(match, self);

  return match;
}


/**
 * class LinkifyIt
 **/

/**
 * new LinkifyIt(schemas, options)
 * - schemas (Object): Optional. Additional schemas to validate (prefix/validator)
 * - options (Object): { fuzzyLink|fuzzyEmail|fuzzyIP: true|false }
 *
 * Creates new linkifier instance with optional additional schemas.
 * Can be called without `new` keyword for convenience.
 *
 * By default understands:
 *
 * - `http(s)://...` , `ftp://...`, `mailto:...` & `//...` links
 * - "fuzzy" links and emails (example.com, foo@bar.com).
 *
 * `schemas` is an object, where each key/value describes protocol/rule:
 *
 * - __key__ - link prefix (usually, protocol name with `:` at the end, `skype:`
 *   for example). `linkify-it` makes shure that prefix is not preceeded with
 *   alphanumeric char and symbols. Only whitespaces and punctuation allowed.
 * - __value__ - rule to check tail after link prefix
 *   - _String_ - just alias to existing rule
 *   - _Object_
 *     - _validate_ - validator function (should return matched length on success),
 *       or `RegExp`.
 *     - _normalize_ - optional function to normalize text & url of matched result
 *       (for example, for @twitter mentions).
 *
 * `options`:
 *
 * - __fuzzyLink__ - recognige URL-s without `http(s):` prefix. Default `true`.
 * - __fuzzyIP__ - allow IPs in fuzzy links above. Can conflict with some texts
 *   like version numbers. Default `false`.
 * - __fuzzyEmail__ - recognize emails without `mailto:` prefix.
 *
 **/
function LinkifyIt(schemas, options) {
  if (!(this instanceof LinkifyIt)) {
    return new LinkifyIt(schemas, options);
  }

  if (!options) {
    if (isOptionsObj(schemas)) {
      options = schemas;
      schemas = {};
    }
  }

  this.__opts__           = assign({}, defaultOptions, options);

  // Cache last tested result. Used to skip repeating steps on next `match` call.
  this.__index__          = -1;
  this.__last_index__     = -1; // Next scan position
  this.__schema__         = '';
  this.__text_cache__     = '';

  this.__schemas__        = assign({}, defaultSchemas, schemas);
  this.__compiled__       = {};

  this.__tlds__           = tlds_default;
  this.__tlds_replaced__  = false;

  this.re = {};

  compile(this);
}


/** chainable
 * LinkifyIt#add(schema, definition)
 * - schema (String): rule name (fixed pattern prefix)
 * - definition (String|RegExp|Object): schema definition
 *
 * Add new rule definition. See constructor description for details.
 **/
LinkifyIt.prototype.add = function add(schema, definition) {
  this.__schemas__[schema] = definition;
  compile(this);
  return this;
};


/** chainable
 * LinkifyIt#set(options)
 * - options (Object): { fuzzyLink|fuzzyEmail|fuzzyIP: true|false }
 *
 * Set recognition options for links without schema.
 **/
LinkifyIt.prototype.set = function set(options) {
  this.__opts__ = assign(this.__opts__, options);
  return this;
};


/**
 * LinkifyIt#test(text) -> Boolean
 *
 * Searches linkifiable pattern and returns `true` on success or `false` on fail.
 **/
LinkifyIt.prototype.test = function test(text) {
  // Reset scan cache
  this.__text_cache__ = text;
  this.__index__      = -1;

  if (!text.length) { return false; }

  var m, ml, me, len, shift, next, re, tld_pos, at_pos;

  // try to scan for link with schema - that's the most simple rule
  if (this.re.schema_test.test(text)) {
    re = this.re.schema_search;
    re.lastIndex = 0;
    while ((m = re.exec(text)) !== null) {
      len = this.testSchemaAt(text, m[2], re.lastIndex);
      if (len) {
        this.__schema__     = m[2];
        this.__index__      = m.index + m[1].length;
        this.__last_index__ = m.index + m[0].length + len;
        break;
      }
    }
  }

  if (this.__opts__.fuzzyLink && this.__compiled__['http:']) {
    // guess schemaless links
    tld_pos = text.search(this.re.host_fuzzy_test);
    if (tld_pos >= 0) {
      // if tld is located after found link - no need to check fuzzy pattern
      if (this.__index__ < 0 || tld_pos < this.__index__) {
        if ((ml = text.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) !== null) {

          shift = ml.index + ml[1].length;

          if (this.__index__ < 0 || shift < this.__index__) {
            this.__schema__     = '';
            this.__index__      = shift;
            this.__last_index__ = ml.index + ml[0].length;
          }
        }
      }
    }
  }

  if (this.__opts__.fuzzyEmail && this.__compiled__['mailto:']) {
    // guess schemaless emails
    at_pos = text.indexOf('@');
    if (at_pos >= 0) {
      // We can't skip this check, because this cases are possible:
      // 192.168.1.1@gmail.com, my.in@example.com
      if ((me = text.match(this.re.email_fuzzy)) !== null) {

        shift = me.index + me[1].length;
        next  = me.index + me[0].length;

        if (this.__index__ < 0 || shift < this.__index__ ||
            (shift === this.__index__ && next > this.__last_index__)) {
          this.__schema__     = 'mailto:';
          this.__index__      = shift;
          this.__last_index__ = next;
        }
      }
    }
  }

  return this.__index__ >= 0;
};


/**
 * LinkifyIt#pretest(text) -> Boolean
 *
 * Very quick check, that can give false positives. Returns true if link MAY BE
 * can exists. Can be used for speed optimization, when you need to check that
 * link NOT exists.
 **/
LinkifyIt.prototype.pretest = function pretest(text) {
  return this.re.pretest.test(text);
};


/**
 * LinkifyIt#testSchemaAt(text, name, position) -> Number
 * - text (String): text to scan
 * - name (String): rule (schema) name
 * - position (Number): text offset to check from
 *
 * Similar to [[LinkifyIt#test]] but checks only specific protocol tail exactly
 * at given position. Returns length of found pattern (0 on fail).
 **/
LinkifyIt.prototype.testSchemaAt = function testSchemaAt(text, schema, pos) {
  // If not supported schema check requested - terminate
  if (!this.__compiled__[schema.toLowerCase()]) {
    return 0;
  }
  return this.__compiled__[schema.toLowerCase()].validate(text, pos, this);
};


/**
 * LinkifyIt#match(text) -> Array|null
 *
 * Returns array of found link descriptions or `null` on fail. We strongly
 * recommend to use [[LinkifyIt#test]] first, for best speed.
 *
 * ##### Result match description
 *
 * - __schema__ - link schema, can be empty for fuzzy links, or `//` for
 *   protocol-neutral  links.
 * - __index__ - offset of matched text
 * - __lastIndex__ - index of next char after mathch end
 * - __raw__ - matched text
 * - __text__ - normalized text
 * - __url__ - link, generated from matched text
 **/
LinkifyIt.prototype.match = function match(text) {
  var shift = 0, result = [];

  // Try to take previous element from cache, if .test() called before
  if (this.__index__ >= 0 && this.__text_cache__ === text) {
    result.push(createMatch(this, shift));
    shift = this.__last_index__;
  }

  // Cut head if cache was used
  var tail = shift ? text.slice(shift) : text;

  // Scan string until end reached
  while (this.test(tail)) {
    result.push(createMatch(this, shift));

    tail = tail.slice(this.__last_index__);
    shift += this.__last_index__;
  }

  if (result.length) {
    return result;
  }

  return null;
};


/** chainable
 * LinkifyIt#tlds(list [, keepOld]) -> this
 * - list (Array): list of tlds
 * - keepOld (Boolean): merge with current list if `true` (`false` by default)
 *
 * Load (or merge) new tlds list. Those are user for fuzzy links (without prefix)
 * to avoid false positives. By default this algorythm used:
 *
 * - hostname with any 2-letter root zones are ok.
 * - biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф
 *   are ok.
 * - encoded (`xn--...`) root zones are ok.
 *
 * If list is replaced, then exact match for 2-chars root zones will be checked.
 **/
LinkifyIt.prototype.tlds = function tlds(list, keepOld) {
  list = Array.isArray(list) ? list : [ list ];

  if (!keepOld) {
    this.__tlds__ = list.slice();
    this.__tlds_replaced__ = true;
    compile(this);
    return this;
  }

  this.__tlds__ = this.__tlds__.concat(list)
                                  .sort()
                                  .filter(function (el, idx, arr) {
                                    return el !== arr[idx - 1];
                                  })
                                  .reverse();

  compile(this);
  return this;
};

/**
 * LinkifyIt#normalize(match)
 *
 * Default normalizer (if schema does not define it's own).
 **/
LinkifyIt.prototype.normalize = function normalize(match) {

  // Do minimal possible changes by default. Need to collect feedback prior
  // to move forward https://github.com/markdown-it/linkify-it/issues/1

  if (!match.schema) { match.url = 'http://' + match.url; }

  if (match.schema === 'mailto:' && !/^mailto:/i.test(match.url)) {
    match.url = 'mailto:' + match.url;
  }
};


/**
 * LinkifyIt#onCompile()
 *
 * Override to modify basic RegExp-s.
 **/
LinkifyIt.prototype.onCompile = function onCompile() {
};


module.exports = LinkifyIt;


/***/ }),

/***/ 448:
/***/ (function(module, exports, __webpack_require__) {

"use strict";



module.exports = function (opts) {
  var re = {};

  // Use direct extract instead of `regenerate` to reduse browserified size
  re.src_Any = __webpack_require__(441).source;
  re.src_Cc  = __webpack_require__(439).source;
  re.src_Z   = __webpack_require__(440).source;
  re.src_P   = __webpack_require__(431).source;

  // \p{\Z\P\Cc\CF} (white spaces + control + format + punctuation)
  re.src_ZPCc = [ re.src_Z, re.src_P, re.src_Cc ].join('|');

  // \p{\Z\Cc} (white spaces + control)
  re.src_ZCc = [ re.src_Z, re.src_Cc ].join('|');

  // Experimental. List of chars, completely prohibited in links
  // because can separate it from other part of text
  var text_separators = '[><\uff5c]';

  // All possible word characters (everything without punctuation, spaces & controls)
  // Defined via punctuation & spaces to save space
  // Should be something like \p{\L\N\S\M} (\w but without `_`)
  re.src_pseudo_letter       = '(?:(?!' + text_separators + '|' + re.src_ZPCc + ')' + re.src_Any + ')';
  // The same as abothe but without [0-9]
  // var src_pseudo_letter_non_d = '(?:(?![0-9]|' + src_ZPCc + ')' + src_Any + ')';

  ////////////////////////////////////////////////////////////////////////////////

  re.src_ip4 =

    '(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)';

  // Prohibit any of "@/[]()" in user/pass to avoid wrong domain fetch.
  re.src_auth    = '(?:(?:(?!' + re.src_ZCc + '|[@/\\[\\]()]).)+@)?';

  re.src_port =

    '(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?';

  re.src_host_terminator =

    '(?=$|' + text_separators + '|' + re.src_ZPCc + ')(?!-|_|:\\d|\\.-|\\.(?!$|' + re.src_ZPCc + '))';

  re.src_path =

    '(?:' +
      '[/?#]' +
        '(?:' +
          '(?!' + re.src_ZCc + '|' + text_separators + '|[()[\\]{}.,"\'?!\\-]).|' +
          '\\[(?:(?!' + re.src_ZCc + '|\\]).)*\\]|' +
          '\\((?:(?!' + re.src_ZCc + '|[)]).)*\\)|' +
          '\\{(?:(?!' + re.src_ZCc + '|[}]).)*\\}|' +
          '\\"(?:(?!' + re.src_ZCc + '|["]).)+\\"|' +
          "\\'(?:(?!" + re.src_ZCc + "|[']).)+\\'|" +
          "\\'(?=" + re.src_pseudo_letter + '|[-]).|' +  // allow `I'm_king` if no pair found
          '\\.{2,3}[a-zA-Z0-9%/]|' + // github has ... in commit range links. Restrict to
                                     // - english
                                     // - percent-encoded
                                     // - parts of file path
                                     // until more examples found.
          '\\.(?!' + re.src_ZCc + '|[.]).|' +
          (opts && opts['---'] ?
            '\\-(?!--(?:[^-]|$))(?:-*)|' // `---` => long dash, terminate
          :
            '\\-+|'
          ) +
          '\\,(?!' + re.src_ZCc + ').|' +      // allow `,,,` in paths
          '\\!(?!' + re.src_ZCc + '|[!]).|' +
          '\\?(?!' + re.src_ZCc + '|[?]).' +
        ')+' +
      '|\\/' +
    ')?';

  re.src_email_name =

    '[\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]+';

  re.src_xn =

    'xn--[a-z0-9\\-]{1,59}';

  // More to read about domain names
  // http://serverfault.com/questions/638260/

  re.src_domain_root =

    // Allow letters & digits (http://test1)
    '(?:' +
      re.src_xn +
      '|' +
      re.src_pseudo_letter + '{1,63}' +
    ')';

  re.src_domain =

    '(?:' +
      re.src_xn +
      '|' +
      '(?:' + re.src_pseudo_letter + ')' +
      '|' +
      // don't allow `--` in domain names, because:
      // - that can conflict with markdown &mdash; / &ndash;
      // - nobody use those anyway
      '(?:' + re.src_pseudo_letter + '(?:-(?!-)|' + re.src_pseudo_letter + '){0,61}' + re.src_pseudo_letter + ')' +
    ')';

  re.src_host =

    '(?:' +
    // Don't need IP check, because digits are already allowed in normal domain names
    //   src_ip4 +
    // '|' +
      '(?:(?:(?:' + re.src_domain + ')\\.)*' + re.src_domain/*_root*/ + ')' +
    ')';

  re.tpl_host_fuzzy =

    '(?:' +
      re.src_ip4 +
    '|' +
      '(?:(?:(?:' + re.src_domain + ')\\.)+(?:%TLDS%))' +
    ')';

  re.tpl_host_no_ip_fuzzy =

    '(?:(?:(?:' + re.src_domain + ')\\.)+(?:%TLDS%))';

  re.src_host_strict =

    re.src_host + re.src_host_terminator;

  re.tpl_host_fuzzy_strict =

    re.tpl_host_fuzzy + re.src_host_terminator;

  re.src_host_port_strict =

    re.src_host + re.src_port + re.src_host_terminator;

  re.tpl_host_port_fuzzy_strict =

    re.tpl_host_fuzzy + re.src_port + re.src_host_terminator;

  re.tpl_host_port_no_ip_fuzzy_strict =

    re.tpl_host_no_ip_fuzzy + re.src_port + re.src_host_terminator;


  ////////////////////////////////////////////////////////////////////////////////
  // Main rules

  // Rude test fuzzy links by host, for quick deny
  re.tpl_host_fuzzy_test =

    'localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:' + re.src_ZPCc + '|>|$))';

  re.tpl_email_fuzzy =

      '(^|' + text_separators + '|\\(|' + re.src_ZCc + ')(' + re.src_email_name + '@' + re.tpl_host_fuzzy_strict + ')';

  re.tpl_link_fuzzy =
      // Fuzzy link can't be prepended with .:/\- and non punctuation.
      // but can start with > (markdown blockquote)
      '(^|(?![.:/\\-_@])(?:[$+<=>^`|\uff5c]|' + re.src_ZPCc + '))' +
      '((?![$+<=>^`|\uff5c])' + re.tpl_host_port_fuzzy_strict + re.src_path + ')';

  re.tpl_link_no_ip_fuzzy =
      // Fuzzy link can't be prepended with .:/\- and non punctuation.
      // but can start with > (markdown blockquote)
      '(^|(?![.:/\\-_@])(?:[$+<=>^`|\uff5c]|' + re.src_ZPCc + '))' +
      '((?![$+<=>^`|\uff5c])' + re.tpl_host_port_no_ip_fuzzy_strict + re.src_path + ')';

  return re;
};


/***/ }),

/***/ 449:
/***/ (function(module, exports) {

const embedRE = /@\[([\w-]+)\]\((.+)\)/im

module.exports = function plugin (md, options) {
  md.renderer.rules.custom = function tokenizeBlock (tokens, idx) {
    const { tag, arg } = tokens[idx].info
    if (!tag) return ''
    return options[tag](arg) + '\n'
  }

  md.block.ruler.before(
    'fence',
    'custom',
    function customEmbed (state, startLine, endLine, silent) {
      let startPos = state.bMarks[startLine] + state.tShift[startLine]
      let maxPos = state.eMarks[startLine]
      const block = state.src.slice(startPos, maxPos)
      let pointer = { line: startLine, pos: startPos }

      // XXX wtf
      if (startLine !== 0) {
        let prevLineStartPos = state.bMarks[startLine - 1] +
              state.tShift[startLine - 1]
        let prevLineMaxPos = state.eMarks[startLine - 1]
        if (prevLineMaxPos > prevLineStartPos) return false
      }

      // Check if it's @[tag](arg)
      if (state.src.charCodeAt(pointer.pos) !== 0x40/* @ */ ||
          state.src.charCodeAt(pointer.pos + 1) !== 0x5B/* [ */) {
        return false
      }

      const match = embedRE.exec(block)

      if (!match || match.length < 3) {
        return false
      }

      const [all, tag, arg] = match

      pointer.pos += all.length

      // Block embed must be at end of input or the next line must be blank.
      // TODO something can be done here to make it work without blank lines
      if (endLine !== pointer.line + 1) {
        let nextLineStartPos = state.bMarks[pointer.line + 1] + state.tShift[pointer.line + 1]
        let nextLineMaxPos = state.eMarks[pointer.line + 1]
        if (nextLineMaxPos > nextLineStartPos) return false
      }

      if (pointer.line >= endLine) return false

      if (!silent) {
        let token = state.push('custom', 'div', 0)
        token.markup = state.src.slice(startPos, pointer.pos)
        token.info = { arg, tag }
        token.block = true
        token.map = [ startLine, pointer.line + 1 ]
        state.line = pointer.line + 1
      }

      return true
    },
    { alt: [ 'paragraph', 'reference', 'blockquote', 'list' ] }
  )
}


/***/ }),

/***/ 450:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// List of valid html blocks names, accorting to commonmark spec
// http://jgm.github.io/CommonMark/spec.html#html-blocks




module.exports = [
  'address',
  'article',
  'aside',
  'base',
  'basefont',
  'blockquote',
  'body',
  'caption',
  'center',
  'col',
  'colgroup',
  'dd',
  'details',
  'dialog',
  'dir',
  'div',
  'dl',
  'dt',
  'fieldset',
  'figcaption',
  'figure',
  'footer',
  'form',
  'frame',
  'frameset',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'head',
  'header',
  'hr',
  'html',
  'iframe',
  'legend',
  'li',
  'link',
  'main',
  'menu',
  'menuitem',
  'meta',
  'nav',
  'noframes',
  'ol',
  'optgroup',
  'option',
  'p',
  'param',
  'section',
  'source',
  'summary',
  'table',
  'tbody',
  'td',
  'tfoot',
  'th',
  'thead',
  'title',
  'tr',
  'track',
  'ul'
];


/***/ }),

/***/ 451:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Just a shortcut for bulk export



exports.parseLinkLabel       = __webpack_require__(453);
exports.parseLinkDestination = __webpack_require__(452);
exports.parseLinkTitle       = __webpack_require__(454);


/***/ }),

/***/ 452:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Parse link destination
//



var isSpace     = __webpack_require__(427).isSpace;
var unescapeAll = __webpack_require__(427).unescapeAll;


module.exports = function parseLinkDestination(str, pos, max) {
  var code, level,
      lines = 0,
      start = pos,
      result = {
        ok: false,
        pos: 0,
        lines: 0,
        str: ''
      };

  if (str.charCodeAt(pos) === 0x3C /* < */) {
    pos++;
    while (pos < max) {
      code = str.charCodeAt(pos);
      if (code === 0x0A /* \n */ || isSpace(code)) { return result; }
      if (code === 0x3E /* > */) {
        result.pos = pos + 1;
        result.str = unescapeAll(str.slice(start + 1, pos));
        result.ok = true;
        return result;
      }
      if (code === 0x5C /* \ */ && pos + 1 < max) {
        pos += 2;
        continue;
      }

      pos++;
    }

    // no closing '>'
    return result;
  }

  // this should be ... } else { ... branch

  level = 0;
  while (pos < max) {
    code = str.charCodeAt(pos);

    if (code === 0x20) { break; }

    // ascii control characters
    if (code < 0x20 || code === 0x7F) { break; }

    if (code === 0x5C /* \ */ && pos + 1 < max) {
      pos += 2;
      continue;
    }

    if (code === 0x28 /* ( */) {
      level++;
    }

    if (code === 0x29 /* ) */) {
      if (level === 0) { break; }
      level--;
    }

    pos++;
  }

  if (start === pos) { return result; }
  if (level !== 0) { return result; }

  result.str = unescapeAll(str.slice(start, pos));
  result.lines = lines;
  result.pos = pos;
  result.ok = true;
  return result;
};


/***/ }),

/***/ 453:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Parse link label
//
// this function assumes that first character ("[") already matches;
// returns the end of the label
//


module.exports = function parseLinkLabel(state, start, disableNested) {
  var level, found, marker, prevPos,
      labelEnd = -1,
      max = state.posMax,
      oldPos = state.pos;

  state.pos = start + 1;
  level = 1;

  while (state.pos < max) {
    marker = state.src.charCodeAt(state.pos);
    if (marker === 0x5D /* ] */) {
      level--;
      if (level === 0) {
        found = true;
        break;
      }
    }

    prevPos = state.pos;
    state.md.inline.skipToken(state);
    if (marker === 0x5B /* [ */) {
      if (prevPos === state.pos - 1) {
        // increase level if we find text `[`, which is not a part of any token
        level++;
      } else if (disableNested) {
        state.pos = oldPos;
        return -1;
      }
    }
  }

  if (found) {
    labelEnd = state.pos;
  }

  // restore old state
  state.pos = oldPos;

  return labelEnd;
};


/***/ }),

/***/ 454:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Parse link title
//



var unescapeAll = __webpack_require__(427).unescapeAll;


module.exports = function parseLinkTitle(str, pos, max) {
  var code,
      marker,
      lines = 0,
      start = pos,
      result = {
        ok: false,
        pos: 0,
        lines: 0,
        str: ''
      };

  if (pos >= max) { return result; }

  marker = str.charCodeAt(pos);

  if (marker !== 0x22 /* " */ && marker !== 0x27 /* ' */ && marker !== 0x28 /* ( */) { return result; }

  pos++;

  // if opening marker is "(", switch it to closing marker ")"
  if (marker === 0x28) { marker = 0x29; }

  while (pos < max) {
    code = str.charCodeAt(pos);
    if (code === marker) {
      result.pos = pos + 1;
      result.lines = lines;
      result.str = unescapeAll(str.slice(start + 1, pos));
      result.ok = true;
      return result;
    } else if (code === 0x0A) {
      lines++;
    } else if (code === 0x5C /* \ */ && pos + 1 < max) {
      pos++;
      if (str.charCodeAt(pos) === 0x0A) {
        lines++;
      }
    }

    pos++;
  }

  return result;
};


/***/ }),

/***/ 455:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Main parser class




var utils        = __webpack_require__(427);
var helpers      = __webpack_require__(451);
var Renderer     = __webpack_require__(462);
var ParserCore   = __webpack_require__(457);
var ParserBlock  = __webpack_require__(456);
var ParserInline = __webpack_require__(458);
var LinkifyIt    = __webpack_require__(447);
var mdurl        = __webpack_require__(438);
var punycode     = __webpack_require__(442);


var config = {
  'default': __webpack_require__(460),
  zero: __webpack_require__(461),
  commonmark: __webpack_require__(459)
};

////////////////////////////////////////////////////////////////////////////////
//
// This validator can prohibit more than really needed to prevent XSS. It's a
// tradeoff to keep code simple and to be secure by default.
//
// If you need different setup - override validator method as you wish. Or
// replace it with dummy function and use external sanitizer.
//

var BAD_PROTO_RE = /^(vbscript|javascript|file|data):/;
var GOOD_DATA_RE = /^data:image\/(gif|png|jpeg|webp);/;

function validateLink(url) {
  // url should be normalized at this point, and existing entities are decoded
  var str = url.trim().toLowerCase();

  return BAD_PROTO_RE.test(str) ? (GOOD_DATA_RE.test(str) ? true : false) : true;
}

////////////////////////////////////////////////////////////////////////////////


var RECODE_HOSTNAME_FOR = [ 'http:', 'https:', 'mailto:' ];

function normalizeLink(url) {
  var parsed = mdurl.parse(url, true);

  if (parsed.hostname) {
    // Encode hostnames in urls like:
    // `http://host/`, `https://host/`, `mailto:user@host`, `//host/`
    //
    // We don't encode unknown schemas, because it's likely that we encode
    // something we shouldn't (e.g. `skype:name` treated as `skype:host`)
    //
    if (!parsed.protocol || RECODE_HOSTNAME_FOR.indexOf(parsed.protocol) >= 0) {
      try {
        parsed.hostname = punycode.toASCII(parsed.hostname);
      } catch (er) { /**/ }
    }
  }

  return mdurl.encode(mdurl.format(parsed));
}

function normalizeLinkText(url) {
  var parsed = mdurl.parse(url, true);

  if (parsed.hostname) {
    // Encode hostnames in urls like:
    // `http://host/`, `https://host/`, `mailto:user@host`, `//host/`
    //
    // We don't encode unknown schemas, because it's likely that we encode
    // something we shouldn't (e.g. `skype:name` treated as `skype:host`)
    //
    if (!parsed.protocol || RECODE_HOSTNAME_FOR.indexOf(parsed.protocol) >= 0) {
      try {
        parsed.hostname = punycode.toUnicode(parsed.hostname);
      } catch (er) { /**/ }
    }
  }

  return mdurl.decode(mdurl.format(parsed));
}


/**
 * class MarkdownIt
 *
 * Main parser/renderer class.
 *
 * ##### Usage
 *
 * ```javascript
 * // node.js, "classic" way:
 * var MarkdownIt = require('markdown-it'),
 *     md = new MarkdownIt();
 * var result = md.render('# markdown-it rulezz!');
 *
 * // node.js, the same, but with sugar:
 * var md = require('markdown-it')();
 * var result = md.render('# markdown-it rulezz!');
 *
 * // browser without AMD, added to "window" on script load
 * // Note, there are no dash.
 * var md = window.markdownit();
 * var result = md.render('# markdown-it rulezz!');
 * ```
 *
 * Single line rendering, without paragraph wrap:
 *
 * ```javascript
 * var md = require('markdown-it')();
 * var result = md.renderInline('__markdown-it__ rulezz!');
 * ```
 **/

/**
 * new MarkdownIt([presetName, options])
 * - presetName (String): optional, `commonmark` / `zero`
 * - options (Object)
 *
 * Creates parser instanse with given config. Can be called without `new`.
 *
 * ##### presetName
 *
 * MarkdownIt provides named presets as a convenience to quickly
 * enable/disable active syntax rules and options for common use cases.
 *
 * - ["commonmark"](https://github.com/markdown-it/markdown-it/blob/master/lib/presets/commonmark.js) -
 *   configures parser to strict [CommonMark](http://commonmark.org/) mode.
 * - [default](https://github.com/markdown-it/markdown-it/blob/master/lib/presets/default.js) -
 *   similar to GFM, used when no preset name given. Enables all available rules,
 *   but still without html, typographer & autolinker.
 * - ["zero"](https://github.com/markdown-it/markdown-it/blob/master/lib/presets/zero.js) -
 *   all rules disabled. Useful to quickly setup your config via `.enable()`.
 *   For example, when you need only `bold` and `italic` markup and nothing else.
 *
 * ##### options:
 *
 * - __html__ - `false`. Set `true` to enable HTML tags in source. Be careful!
 *   That's not safe! You may need external sanitizer to protect output from XSS.
 *   It's better to extend features via plugins, instead of enabling HTML.
 * - __xhtmlOut__ - `false`. Set `true` to add '/' when closing single tags
 *   (`<br />`). This is needed only for full CommonMark compatibility. In real
 *   world you will need HTML output.
 * - __breaks__ - `false`. Set `true` to convert `\n` in paragraphs into `<br>`.
 * - __langPrefix__ - `language-`. CSS language class prefix for fenced blocks.
 *   Can be useful for external highlighters.
 * - __linkify__ - `false`. Set `true` to autoconvert URL-like text to links.
 * - __typographer__  - `false`. Set `true` to enable [some language-neutral
 *   replacement](https://github.com/markdown-it/markdown-it/blob/master/lib/rules_core/replacements.js) +
 *   quotes beautification (smartquotes).
 * - __quotes__ - `“”‘’`, String or Array. Double + single quotes replacement
 *   pairs, when typographer enabled and smartquotes on. For example, you can
 *   use `'«»„“'` for Russian, `'„“‚‘'` for German, and
 *   `['«\xA0', '\xA0»', '‹\xA0', '\xA0›']` for French (including nbsp).
 * - __highlight__ - `null`. Highlighter function for fenced code blocks.
 *   Highlighter `function (str, lang)` should return escaped HTML. It can also
 *   return empty string if the source was not changed and should be escaped
 *   externaly. If result starts with <pre... internal wrapper is skipped.
 *
 * ##### Example
 *
 * ```javascript
 * // commonmark mode
 * var md = require('markdown-it')('commonmark');
 *
 * // default mode
 * var md = require('markdown-it')();
 *
 * // enable everything
 * var md = require('markdown-it')({
 *   html: true,
 *   linkify: true,
 *   typographer: true
 * });
 * ```
 *
 * ##### Syntax highlighting
 *
 * ```js
 * var hljs = require('highlight.js') // https://highlightjs.org/
 *
 * var md = require('markdown-it')({
 *   highlight: function (str, lang) {
 *     if (lang && hljs.getLanguage(lang)) {
 *       try {
 *         return hljs.highlight(lang, str, true).value;
 *       } catch (__) {}
 *     }
 *
 *     return ''; // use external default escaping
 *   }
 * });
 * ```
 *
 * Or with full wrapper override (if you need assign class to `<pre>`):
 *
 * ```javascript
 * var hljs = require('highlight.js') // https://highlightjs.org/
 *
 * // Actual default values
 * var md = require('markdown-it')({
 *   highlight: function (str, lang) {
 *     if (lang && hljs.getLanguage(lang)) {
 *       try {
 *         return '<pre class="hljs"><code>' +
 *                hljs.highlight(lang, str, true).value +
 *                '</code></pre>';
 *       } catch (__) {}
 *     }
 *
 *     return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
 *   }
 * });
 * ```
 *
 **/
function MarkdownIt(presetName, options) {
  if (!(this instanceof MarkdownIt)) {
    return new MarkdownIt(presetName, options);
  }

  if (!options) {
    if (!utils.isString(presetName)) {
      options = presetName || {};
      presetName = 'default';
    }
  }

  /**
   * MarkdownIt#inline -> ParserInline
   *
   * Instance of [[ParserInline]]. You may need it to add new rules when
   * writing plugins. For simple rules control use [[MarkdownIt.disable]] and
   * [[MarkdownIt.enable]].
   **/
  this.inline = new ParserInline();

  /**
   * MarkdownIt#block -> ParserBlock
   *
   * Instance of [[ParserBlock]]. You may need it to add new rules when
   * writing plugins. For simple rules control use [[MarkdownIt.disable]] and
   * [[MarkdownIt.enable]].
   **/
  this.block = new ParserBlock();

  /**
   * MarkdownIt#core -> Core
   *
   * Instance of [[Core]] chain executor. You may need it to add new rules when
   * writing plugins. For simple rules control use [[MarkdownIt.disable]] and
   * [[MarkdownIt.enable]].
   **/
  this.core = new ParserCore();

  /**
   * MarkdownIt#renderer -> Renderer
   *
   * Instance of [[Renderer]]. Use it to modify output look. Or to add rendering
   * rules for new token types, generated by plugins.
   *
   * ##### Example
   *
   * ```javascript
   * var md = require('markdown-it')();
   *
   * function myToken(tokens, idx, options, env, self) {
   *   //...
   *   return result;
   * };
   *
   * md.renderer.rules['my_token'] = myToken
   * ```
   *
   * See [[Renderer]] docs and [source code](https://github.com/markdown-it/markdown-it/blob/master/lib/renderer.js).
   **/
  this.renderer = new Renderer();

  /**
   * MarkdownIt#linkify -> LinkifyIt
   *
   * [linkify-it](https://github.com/markdown-it/linkify-it) instance.
   * Used by [linkify](https://github.com/markdown-it/markdown-it/blob/master/lib/rules_core/linkify.js)
   * rule.
   **/
  this.linkify = new LinkifyIt();

  /**
   * MarkdownIt#validateLink(url) -> Boolean
   *
   * Link validation function. CommonMark allows too much in links. By default
   * we disable `javascript:`, `vbscript:`, `file:` schemas, and almost all `data:...` schemas
   * except some embedded image types.
   *
   * You can change this behaviour:
   *
   * ```javascript
   * var md = require('markdown-it')();
   * // enable everything
   * md.validateLink = function () { return true; }
   * ```
   **/
  this.validateLink = validateLink;

  /**
   * MarkdownIt#normalizeLink(url) -> String
   *
   * Function used to encode link url to a machine-readable format,
   * which includes url-encoding, punycode, etc.
   **/
  this.normalizeLink = normalizeLink;

  /**
   * MarkdownIt#normalizeLinkText(url) -> String
   *
   * Function used to decode link url to a human-readable format`
   **/
  this.normalizeLinkText = normalizeLinkText;


  // Expose utils & helpers for easy acces from plugins

  /**
   * MarkdownIt#utils -> utils
   *
   * Assorted utility functions, useful to write plugins. See details
   * [here](https://github.com/markdown-it/markdown-it/blob/master/lib/common/utils.js).
   **/
  this.utils = utils;

  /**
   * MarkdownIt#helpers -> helpers
   *
   * Link components parser functions, useful to write plugins. See details
   * [here](https://github.com/markdown-it/markdown-it/blob/master/lib/helpers).
   **/
  this.helpers = utils.assign({}, helpers);


  this.options = {};
  this.configure(presetName);

  if (options) { this.set(options); }
}


/** chainable
 * MarkdownIt.set(options)
 *
 * Set parser options (in the same format as in constructor). Probably, you
 * will never need it, but you can change options after constructor call.
 *
 * ##### Example
 *
 * ```javascript
 * var md = require('markdown-it')()
 *             .set({ html: true, breaks: true })
 *             .set({ typographer, true });
 * ```
 *
 * __Note:__ To achieve the best possible performance, don't modify a
 * `markdown-it` instance options on the fly. If you need multiple configurations
 * it's best to create multiple instances and initialize each with separate
 * config.
 **/
MarkdownIt.prototype.set = function (options) {
  utils.assign(this.options, options);
  return this;
};


/** chainable, internal
 * MarkdownIt.configure(presets)
 *
 * Batch load of all options and compenent settings. This is internal method,
 * and you probably will not need it. But if you with - see available presets
 * and data structure [here](https://github.com/markdown-it/markdown-it/tree/master/lib/presets)
 *
 * We strongly recommend to use presets instead of direct config loads. That
 * will give better compatibility with next versions.
 **/
MarkdownIt.prototype.configure = function (presets) {
  var self = this, presetName;

  if (utils.isString(presets)) {
    presetName = presets;
    presets = config[presetName];
    if (!presets) { throw new Error('Wrong `markdown-it` preset "' + presetName + '", check name'); }
  }

  if (!presets) { throw new Error('Wrong `markdown-it` preset, can\'t be empty'); }

  if (presets.options) { self.set(presets.options); }

  if (presets.components) {
    Object.keys(presets.components).forEach(function (name) {
      if (presets.components[name].rules) {
        self[name].ruler.enableOnly(presets.components[name].rules);
      }
      if (presets.components[name].rules2) {
        self[name].ruler2.enableOnly(presets.components[name].rules2);
      }
    });
  }
  return this;
};


/** chainable
 * MarkdownIt.enable(list, ignoreInvalid)
 * - list (String|Array): rule name or list of rule names to enable
 * - ignoreInvalid (Boolean): set `true` to ignore errors when rule not found.
 *
 * Enable list or rules. It will automatically find appropriate components,
 * containing rules with given names. If rule not found, and `ignoreInvalid`
 * not set - throws exception.
 *
 * ##### Example
 *
 * ```javascript
 * var md = require('markdown-it')()
 *             .enable(['sub', 'sup'])
 *             .disable('smartquotes');
 * ```
 **/
MarkdownIt.prototype.enable = function (list, ignoreInvalid) {
  var result = [];

  if (!Array.isArray(list)) { list = [ list ]; }

  [ 'core', 'block', 'inline' ].forEach(function (chain) {
    result = result.concat(this[chain].ruler.enable(list, true));
  }, this);

  result = result.concat(this.inline.ruler2.enable(list, true));

  var missed = list.filter(function (name) { return result.indexOf(name) < 0; });

  if (missed.length && !ignoreInvalid) {
    throw new Error('MarkdownIt. Failed to enable unknown rule(s): ' + missed);
  }

  return this;
};


/** chainable
 * MarkdownIt.disable(list, ignoreInvalid)
 * - list (String|Array): rule name or list of rule names to disable.
 * - ignoreInvalid (Boolean): set `true` to ignore errors when rule not found.
 *
 * The same as [[MarkdownIt.enable]], but turn specified rules off.
 **/
MarkdownIt.prototype.disable = function (list, ignoreInvalid) {
  var result = [];

  if (!Array.isArray(list)) { list = [ list ]; }

  [ 'core', 'block', 'inline' ].forEach(function (chain) {
    result = result.concat(this[chain].ruler.disable(list, true));
  }, this);

  result = result.concat(this.inline.ruler2.disable(list, true));

  var missed = list.filter(function (name) { return result.indexOf(name) < 0; });

  if (missed.length && !ignoreInvalid) {
    throw new Error('MarkdownIt. Failed to disable unknown rule(s): ' + missed);
  }
  return this;
};


/** chainable
 * MarkdownIt.use(plugin, params)
 *
 * Load specified plugin with given params into current parser instance.
 * It's just a sugar to call `plugin(md, params)` with curring.
 *
 * ##### Example
 *
 * ```javascript
 * var iterator = require('markdown-it-for-inline');
 * var md = require('markdown-it')()
 *             .use(iterator, 'foo_replace', 'text', function (tokens, idx) {
 *               tokens[idx].content = tokens[idx].content.replace(/foo/g, 'bar');
 *             });
 * ```
 **/
MarkdownIt.prototype.use = function (plugin /*, params, ... */) {
  var args = [ this ].concat(Array.prototype.slice.call(arguments, 1));
  plugin.apply(plugin, args);
  return this;
};


/** internal
 * MarkdownIt.parse(src, env) -> Array
 * - src (String): source string
 * - env (Object): environment sandbox
 *
 * Parse input string and returns list of block tokens (special token type
 * "inline" will contain list of inline tokens). You should not call this
 * method directly, until you write custom renderer (for example, to produce
 * AST).
 *
 * `env` is used to pass data between "distributed" rules and return additional
 * metadata like reference info, needed for the renderer. It also can be used to
 * inject data in specific cases. Usually, you will be ok to pass `{}`,
 * and then pass updated object to renderer.
 **/
MarkdownIt.prototype.parse = function (src, env) {
  if (typeof src !== 'string') {
    throw new Error('Input data should be a String');
  }

  var state = new this.core.State(src, this, env);

  this.core.process(state);

  return state.tokens;
};


/**
 * MarkdownIt.render(src [, env]) -> String
 * - src (String): source string
 * - env (Object): environment sandbox
 *
 * Render markdown string into html. It does all magic for you :).
 *
 * `env` can be used to inject additional metadata (`{}` by default).
 * But you will not need it with high probability. See also comment
 * in [[MarkdownIt.parse]].
 **/
MarkdownIt.prototype.render = function (src, env) {
  env = env || {};

  return this.renderer.render(this.parse(src, env), this.options, env);
};


/** internal
 * MarkdownIt.parseInline(src, env) -> Array
 * - src (String): source string
 * - env (Object): environment sandbox
 *
 * The same as [[MarkdownIt.parse]] but skip all block rules. It returns the
 * block tokens list with the single `inline` element, containing parsed inline
 * tokens in `children` property. Also updates `env` object.
 **/
MarkdownIt.prototype.parseInline = function (src, env) {
  var state = new this.core.State(src, this, env);

  state.inlineMode = true;
  this.core.process(state);

  return state.tokens;
};


/**
 * MarkdownIt.renderInline(src [, env]) -> String
 * - src (String): source string
 * - env (Object): environment sandbox
 *
 * Similar to [[MarkdownIt.render]] but for single paragraph content. Result
 * will NOT be wrapped into `<p>` tags.
 **/
MarkdownIt.prototype.renderInline = function (src, env) {
  env = env || {};

  return this.renderer.render(this.parseInline(src, env), this.options, env);
};


module.exports = MarkdownIt;


/***/ }),

/***/ 456:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** internal
 * class ParserBlock
 *
 * Block-level tokenizer.
 **/



var Ruler           = __webpack_require__(429);


var _rules = [
  // First 2 params - rule name & source. Secondary array - list of rules,
  // which can be terminated by this one.
  [ 'table',      __webpack_require__(474),      [ 'paragraph', 'reference' ] ],
  [ 'code',       __webpack_require__(464) ],
  [ 'fence',      __webpack_require__(465),      [ 'paragraph', 'reference', 'blockquote', 'list' ] ],
  [ 'blockquote', __webpack_require__(463), [ 'paragraph', 'reference', 'blockquote', 'list' ] ],
  [ 'hr',         __webpack_require__(467),         [ 'paragraph', 'reference', 'blockquote', 'list' ] ],
  [ 'list',       __webpack_require__(470),       [ 'paragraph', 'reference', 'blockquote' ] ],
  [ 'reference',  __webpack_require__(472) ],
  [ 'heading',    __webpack_require__(466),    [ 'paragraph', 'reference', 'blockquote' ] ],
  [ 'lheading',   __webpack_require__(469) ],
  [ 'html_block', __webpack_require__(468), [ 'paragraph', 'reference', 'blockquote' ] ],
  [ 'paragraph',  __webpack_require__(471) ]
];


/**
 * new ParserBlock()
 **/
function ParserBlock() {
  /**
   * ParserBlock#ruler -> Ruler
   *
   * [[Ruler]] instance. Keep configuration of block rules.
   **/
  this.ruler = new Ruler();

  for (var i = 0; i < _rules.length; i++) {
    this.ruler.push(_rules[i][0], _rules[i][1], { alt: (_rules[i][2] || []).slice() });
  }
}


// Generate tokens for input range
//
ParserBlock.prototype.tokenize = function (state, startLine, endLine) {
  var ok, i,
      rules = this.ruler.getRules(''),
      len = rules.length,
      line = startLine,
      hasEmptyLines = false,
      maxNesting = state.md.options.maxNesting;

  while (line < endLine) {
    state.line = line = state.skipEmptyLines(line);
    if (line >= endLine) { break; }

    // Termination condition for nested calls.
    // Nested calls currently used for blockquotes & lists
    if (state.sCount[line] < state.blkIndent) { break; }

    // If nesting level exceeded - skip tail to the end. That's not ordinary
    // situation and we should not care about content.
    if (state.level >= maxNesting) {
      state.line = endLine;
      break;
    }

    // Try all possible rules.
    // On success, rule should:
    //
    // - update `state.line`
    // - update `state.tokens`
    // - return true

    for (i = 0; i < len; i++) {
      ok = rules[i](state, line, endLine, false);
      if (ok) { break; }
    }

    // set state.tight if we had an empty line before current tag
    // i.e. latest empty line should not count
    state.tight = !hasEmptyLines;

    // paragraph might "eat" one newline after it in nested lists
    if (state.isEmpty(state.line - 1)) {
      hasEmptyLines = true;
    }

    line = state.line;

    if (line < endLine && state.isEmpty(line)) {
      hasEmptyLines = true;
      line++;
      state.line = line;
    }
  }
};


/**
 * ParserBlock.parse(str, md, env, outTokens)
 *
 * Process input string and push block tokens into `outTokens`
 **/
ParserBlock.prototype.parse = function (src, md, env, outTokens) {
  var state;

  if (!src) { return; }

  state = new this.State(src, md, env, outTokens);

  this.tokenize(state, state.line, state.lineMax);
};


ParserBlock.prototype.State = __webpack_require__(473);


module.exports = ParserBlock;


/***/ }),

/***/ 457:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** internal
 * class Core
 *
 * Top-level rules executor. Glues block/inline parsers and does intermediate
 * transformations.
 **/



var Ruler  = __webpack_require__(429);


var _rules = [
  [ 'normalize',      __webpack_require__(478)      ],
  [ 'block',          __webpack_require__(475)          ],
  [ 'inline',         __webpack_require__(476)         ],
  [ 'linkify',        __webpack_require__(477)        ],
  [ 'replacements',   __webpack_require__(479)   ],
  [ 'smartquotes',    __webpack_require__(480)    ]
];


/**
 * new Core()
 **/
function Core() {
  /**
   * Core#ruler -> Ruler
   *
   * [[Ruler]] instance. Keep configuration of core rules.
   **/
  this.ruler = new Ruler();

  for (var i = 0; i < _rules.length; i++) {
    this.ruler.push(_rules[i][0], _rules[i][1]);
  }
}


/**
 * Core.process(state)
 *
 * Executes core chain rules.
 **/
Core.prototype.process = function (state) {
  var i, l, rules;

  rules = this.ruler.getRules('');

  for (i = 0, l = rules.length; i < l; i++) {
    rules[i](state);
  }
};

Core.prototype.State = __webpack_require__(481);


module.exports = Core;


/***/ }),

/***/ 458:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** internal
 * class ParserInline
 *
 * Tokenizes paragraph content.
 **/



var Ruler           = __webpack_require__(429);


////////////////////////////////////////////////////////////////////////////////
// Parser rules

var _rules = [
  [ 'text',            __webpack_require__(492) ],
  [ 'newline',         __webpack_require__(490) ],
  [ 'escape',          __webpack_require__(486) ],
  [ 'backticks',       __webpack_require__(483) ],
  [ 'strikethrough',   __webpack_require__(437).tokenize ],
  [ 'emphasis',        __webpack_require__(436).tokenize ],
  [ 'link',            __webpack_require__(489) ],
  [ 'image',           __webpack_require__(488) ],
  [ 'autolink',        __webpack_require__(482) ],
  [ 'html_inline',     __webpack_require__(487) ],
  [ 'entity',          __webpack_require__(485) ]
];

var _rules2 = [
  [ 'balance_pairs',   __webpack_require__(484) ],
  [ 'strikethrough',   __webpack_require__(437).postProcess ],
  [ 'emphasis',        __webpack_require__(436).postProcess ],
  [ 'text_collapse',   __webpack_require__(493) ]
];


/**
 * new ParserInline()
 **/
function ParserInline() {
  var i;

  /**
   * ParserInline#ruler -> Ruler
   *
   * [[Ruler]] instance. Keep configuration of inline rules.
   **/
  this.ruler = new Ruler();

  for (i = 0; i < _rules.length; i++) {
    this.ruler.push(_rules[i][0], _rules[i][1]);
  }

  /**
   * ParserInline#ruler2 -> Ruler
   *
   * [[Ruler]] instance. Second ruler used for post-processing
   * (e.g. in emphasis-like rules).
   **/
  this.ruler2 = new Ruler();

  for (i = 0; i < _rules2.length; i++) {
    this.ruler2.push(_rules2[i][0], _rules2[i][1]);
  }
}


// Skip single token by running all rules in validation mode;
// returns `true` if any rule reported success
//
ParserInline.prototype.skipToken = function (state) {
  var ok, i, pos = state.pos,
      rules = this.ruler.getRules(''),
      len = rules.length,
      maxNesting = state.md.options.maxNesting,
      cache = state.cache;


  if (typeof cache[pos] !== 'undefined') {
    state.pos = cache[pos];
    return;
  }

  if (state.level < maxNesting) {
    for (i = 0; i < len; i++) {
      // Increment state.level and decrement it later to limit recursion.
      // It's harmless to do here, because no tokens are created. But ideally,
      // we'd need a separate private state variable for this purpose.
      //
      state.level++;
      ok = rules[i](state, true);
      state.level--;

      if (ok) { break; }
    }
  } else {
    // Too much nesting, just skip until the end of the paragraph.
    //
    // NOTE: this will cause links to behave incorrectly in the following case,
    //       when an amount of `[` is exactly equal to `maxNesting + 1`:
    //
    //       [[[[[[[[[[[[[[[[[[[[[foo]()
    //
    // TODO: remove this workaround when CM standard will allow nested links
    //       (we can replace it by preventing links from being parsed in
    //       validation mode)
    //
    state.pos = state.posMax;
  }

  if (!ok) { state.pos++; }
  cache[pos] = state.pos;
};


// Generate tokens for input range
//
ParserInline.prototype.tokenize = function (state) {
  var ok, i,
      rules = this.ruler.getRules(''),
      len = rules.length,
      end = state.posMax,
      maxNesting = state.md.options.maxNesting;

  while (state.pos < end) {
    // Try all possible rules.
    // On success, rule should:
    //
    // - update `state.pos`
    // - update `state.tokens`
    // - return true

    if (state.level < maxNesting) {
      for (i = 0; i < len; i++) {
        ok = rules[i](state, false);
        if (ok) { break; }
      }
    }

    if (ok) {
      if (state.pos >= end) { break; }
      continue;
    }

    state.pending += state.src[state.pos++];
  }

  if (state.pending) {
    state.pushPending();
  }
};


/**
 * ParserInline.parse(str, md, env, outTokens)
 *
 * Process input string and push inline tokens into `outTokens`
 **/
ParserInline.prototype.parse = function (str, md, env, outTokens) {
  var i, rules, len;
  var state = new this.State(str, md, env, outTokens);

  this.tokenize(state);

  rules = this.ruler2.getRules('');
  len = rules.length;

  for (i = 0; i < len; i++) {
    rules[i](state);
  }
};


ParserInline.prototype.State = __webpack_require__(491);


module.exports = ParserInline;


/***/ }),

/***/ 459:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Commonmark default options




module.exports = {
  options: {
    html:         true,         // Enable HTML tags in source
    xhtmlOut:     true,         // Use '/' to close single tags (<br />)
    breaks:       false,        // Convert '\n' in paragraphs into <br>
    langPrefix:   'language-',  // CSS language prefix for fenced blocks
    linkify:      false,        // autoconvert URL-like texts to links

    // Enable some language-neutral replacements + quotes beautification
    typographer:  false,

    // Double + single quotes replacement pairs, when typographer enabled,
    // and smartquotes on. Could be either a String or an Array.
    //
    // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
    // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
    quotes: '\u201c\u201d\u2018\u2019', /* “”‘’ */

    // Highlighter function. Should return escaped HTML,
    // or '' if the source string is not changed and should be escaped externaly.
    // If result starts with <pre... internal wrapper is skipped.
    //
    // function (/*str, lang*/) { return ''; }
    //
    highlight: null,

    maxNesting:   20            // Internal protection, recursion limit
  },

  components: {

    core: {
      rules: [
        'normalize',
        'block',
        'inline'
      ]
    },

    block: {
      rules: [
        'blockquote',
        'code',
        'fence',
        'heading',
        'hr',
        'html_block',
        'lheading',
        'list',
        'reference',
        'paragraph'
      ]
    },

    inline: {
      rules: [
        'autolink',
        'backticks',
        'emphasis',
        'entity',
        'escape',
        'html_inline',
        'image',
        'link',
        'newline',
        'text'
      ],
      rules2: [
        'balance_pairs',
        'emphasis',
        'text_collapse'
      ]
    }
  }
};


/***/ }),

/***/ 460:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// markdown-it default options




module.exports = {
  options: {
    html:         false,        // Enable HTML tags in source
    xhtmlOut:     false,        // Use '/' to close single tags (<br />)
    breaks:       false,        // Convert '\n' in paragraphs into <br>
    langPrefix:   'language-',  // CSS language prefix for fenced blocks
    linkify:      false,        // autoconvert URL-like texts to links

    // Enable some language-neutral replacements + quotes beautification
    typographer:  false,

    // Double + single quotes replacement pairs, when typographer enabled,
    // and smartquotes on. Could be either a String or an Array.
    //
    // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
    // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
    quotes: '\u201c\u201d\u2018\u2019', /* “”‘’ */

    // Highlighter function. Should return escaped HTML,
    // or '' if the source string is not changed and should be escaped externaly.
    // If result starts with <pre... internal wrapper is skipped.
    //
    // function (/*str, lang*/) { return ''; }
    //
    highlight: null,

    maxNesting:   100            // Internal protection, recursion limit
  },

  components: {

    core: {},
    block: {},
    inline: {}
  }
};


/***/ }),

/***/ 461:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// "Zero" preset, with nothing enabled. Useful for manual configuring of simple
// modes. For example, to parse bold/italic only.




module.exports = {
  options: {
    html:         false,        // Enable HTML tags in source
    xhtmlOut:     false,        // Use '/' to close single tags (<br />)
    breaks:       false,        // Convert '\n' in paragraphs into <br>
    langPrefix:   'language-',  // CSS language prefix for fenced blocks
    linkify:      false,        // autoconvert URL-like texts to links

    // Enable some language-neutral replacements + quotes beautification
    typographer:  false,

    // Double + single quotes replacement pairs, when typographer enabled,
    // and smartquotes on. Could be either a String or an Array.
    //
    // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
    // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
    quotes: '\u201c\u201d\u2018\u2019', /* “”‘’ */

    // Highlighter function. Should return escaped HTML,
    // or '' if the source string is not changed and should be escaped externaly.
    // If result starts with <pre... internal wrapper is skipped.
    //
    // function (/*str, lang*/) { return ''; }
    //
    highlight: null,

    maxNesting:   20            // Internal protection, recursion limit
  },

  components: {

    core: {
      rules: [
        'normalize',
        'block',
        'inline'
      ]
    },

    block: {
      rules: [
        'paragraph'
      ]
    },

    inline: {
      rules: [
        'text'
      ],
      rules2: [
        'balance_pairs',
        'text_collapse'
      ]
    }
  }
};


/***/ }),

/***/ 462:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * class Renderer
 *
 * Generates HTML from parsed token stream. Each instance has independent
 * copy of rules. Those can be rewritten with ease. Also, you can add new
 * rules if you create plugin and adds new token types.
 **/



var assign          = __webpack_require__(427).assign;
var unescapeAll     = __webpack_require__(427).unescapeAll;
var escapeHtml      = __webpack_require__(427).escapeHtml;


////////////////////////////////////////////////////////////////////////////////

var default_rules = {};


default_rules.code_inline = function (tokens, idx, options, env, slf) {
  var token = tokens[idx];

  return  '<code' + slf.renderAttrs(token) + '>' +
          escapeHtml(tokens[idx].content) +
          '</code>';
};


default_rules.code_block = function (tokens, idx, options, env, slf) {
  var token = tokens[idx];

  return  '<pre' + slf.renderAttrs(token) + '><code>' +
          escapeHtml(tokens[idx].content) +
          '</code></pre>\n';
};


default_rules.fence = function (tokens, idx, options, env, slf) {
  var token = tokens[idx],
      info = token.info ? unescapeAll(token.info).trim() : '',
      langName = '',
      highlighted, i, tmpAttrs, tmpToken;

  if (info) {
    langName = info.split(/\s+/g)[0];
  }

  if (options.highlight) {
    highlighted = options.highlight(token.content, langName) || escapeHtml(token.content);
  } else {
    highlighted = escapeHtml(token.content);
  }

  if (highlighted.indexOf('<pre') === 0) {
    return highlighted + '\n';
  }

  // If language exists, inject class gently, without modifying original token.
  // May be, one day we will add .clone() for token and simplify this part, but
  // now we prefer to keep things local.
  if (info) {
    i        = token.attrIndex('class');
    tmpAttrs = token.attrs ? token.attrs.slice() : [];

    if (i < 0) {
      tmpAttrs.push([ 'class', options.langPrefix + langName ]);
    } else {
      tmpAttrs[i][1] += ' ' + options.langPrefix + langName;
    }

    // Fake token just to render attributes
    tmpToken = {
      attrs: tmpAttrs
    };

    return  '<pre><code' + slf.renderAttrs(tmpToken) + '>'
          + highlighted
          + '</code></pre>\n';
  }


  return  '<pre><code' + slf.renderAttrs(token) + '>'
        + highlighted
        + '</code></pre>\n';
};


default_rules.image = function (tokens, idx, options, env, slf) {
  var token = tokens[idx];

  // "alt" attr MUST be set, even if empty. Because it's mandatory and
  // should be placed on proper position for tests.
  //
  // Replace content with actual value

  token.attrs[token.attrIndex('alt')][1] =
    slf.renderInlineAsText(token.children, options, env);

  return slf.renderToken(tokens, idx, options);
};


default_rules.hardbreak = function (tokens, idx, options /*, env */) {
  return options.xhtmlOut ? '<br />\n' : '<br>\n';
};
default_rules.softbreak = function (tokens, idx, options /*, env */) {
  return options.breaks ? (options.xhtmlOut ? '<br />\n' : '<br>\n') : '\n';
};


default_rules.text = function (tokens, idx /*, options, env */) {
  return escapeHtml(tokens[idx].content);
};


default_rules.html_block = function (tokens, idx /*, options, env */) {
  return tokens[idx].content;
};
default_rules.html_inline = function (tokens, idx /*, options, env */) {
  return tokens[idx].content;
};


/**
 * new Renderer()
 *
 * Creates new [[Renderer]] instance and fill [[Renderer#rules]] with defaults.
 **/
function Renderer() {

  /**
   * Renderer#rules -> Object
   *
   * Contains render rules for tokens. Can be updated and extended.
   *
   * ##### Example
   *
   * ```javascript
   * var md = require('markdown-it')();
   *
   * md.renderer.rules.strong_open  = function () { return '<b>'; };
   * md.renderer.rules.strong_close = function () { return '</b>'; };
   *
   * var result = md.renderInline(...);
   * ```
   *
   * Each rule is called as independent static function with fixed signature:
   *
   * ```javascript
   * function my_token_render(tokens, idx, options, env, renderer) {
   *   // ...
   *   return renderedHTML;
   * }
   * ```
   *
   * See [source code](https://github.com/markdown-it/markdown-it/blob/master/lib/renderer.js)
   * for more details and examples.
   **/
  this.rules = assign({}, default_rules);
}


/**
 * Renderer.renderAttrs(token) -> String
 *
 * Render token attributes to string.
 **/
Renderer.prototype.renderAttrs = function renderAttrs(token) {
  var i, l, result;

  if (!token.attrs) { return ''; }

  result = '';

  for (i = 0, l = token.attrs.length; i < l; i++) {
    result += ' ' + escapeHtml(token.attrs[i][0]) + '="' + escapeHtml(token.attrs[i][1]) + '"';
  }

  return result;
};


/**
 * Renderer.renderToken(tokens, idx, options) -> String
 * - tokens (Array): list of tokens
 * - idx (Numbed): token index to render
 * - options (Object): params of parser instance
 *
 * Default token renderer. Can be overriden by custom function
 * in [[Renderer#rules]].
 **/
Renderer.prototype.renderToken = function renderToken(tokens, idx, options) {
  var nextToken,
      result = '',
      needLf = false,
      token = tokens[idx];

  // Tight list paragraphs
  if (token.hidden) {
    return '';
  }

  // Insert a newline between hidden paragraph and subsequent opening
  // block-level tag.
  //
  // For example, here we should insert a newline before blockquote:
  //  - a
  //    >
  //
  if (token.block && token.nesting !== -1 && idx && tokens[idx - 1].hidden) {
    result += '\n';
  }

  // Add token name, e.g. `<img`
  result += (token.nesting === -1 ? '</' : '<') + token.tag;

  // Encode attributes, e.g. `<img src="foo"`
  result += this.renderAttrs(token);

  // Add a slash for self-closing tags, e.g. `<img src="foo" /`
  if (token.nesting === 0 && options.xhtmlOut) {
    result += ' /';
  }

  // Check if we need to add a newline after this tag
  if (token.block) {
    needLf = true;

    if (token.nesting === 1) {
      if (idx + 1 < tokens.length) {
        nextToken = tokens[idx + 1];

        if (nextToken.type === 'inline' || nextToken.hidden) {
          // Block-level tag containing an inline tag.
          //
          needLf = false;

        } else if (nextToken.nesting === -1 && nextToken.tag === token.tag) {
          // Opening tag + closing tag of the same type. E.g. `<li></li>`.
          //
          needLf = false;
        }
      }
    }
  }

  result += needLf ? '>\n' : '>';

  return result;
};


/**
 * Renderer.renderInline(tokens, options, env) -> String
 * - tokens (Array): list on block tokens to renter
 * - options (Object): params of parser instance
 * - env (Object): additional data from parsed input (references, for example)
 *
 * The same as [[Renderer.render]], but for single token of `inline` type.
 **/
Renderer.prototype.renderInline = function (tokens, options, env) {
  var type,
      result = '',
      rules = this.rules;

  for (var i = 0, len = tokens.length; i < len; i++) {
    type = tokens[i].type;

    if (typeof rules[type] !== 'undefined') {
      result += rules[type](tokens, i, options, env, this);
    } else {
      result += this.renderToken(tokens, i, options);
    }
  }

  return result;
};


/** internal
 * Renderer.renderInlineAsText(tokens, options, env) -> String
 * - tokens (Array): list on block tokens to renter
 * - options (Object): params of parser instance
 * - env (Object): additional data from parsed input (references, for example)
 *
 * Special kludge for image `alt` attributes to conform CommonMark spec.
 * Don't try to use it! Spec requires to show `alt` content with stripped markup,
 * instead of simple escaping.
 **/
Renderer.prototype.renderInlineAsText = function (tokens, options, env) {
  var result = '';

  for (var i = 0, len = tokens.length; i < len; i++) {
    if (tokens[i].type === 'text') {
      result += tokens[i].content;
    } else if (tokens[i].type === 'image') {
      result += this.renderInlineAsText(tokens[i].children, options, env);
    }
  }

  return result;
};


/**
 * Renderer.render(tokens, options, env) -> String
 * - tokens (Array): list on block tokens to renter
 * - options (Object): params of parser instance
 * - env (Object): additional data from parsed input (references, for example)
 *
 * Takes token stream and generates HTML. Probably, you will never need to call
 * this method directly.
 **/
Renderer.prototype.render = function (tokens, options, env) {
  var i, len, type,
      result = '',
      rules = this.rules;

  for (i = 0, len = tokens.length; i < len; i++) {
    type = tokens[i].type;

    if (type === 'inline') {
      result += this.renderInline(tokens[i].children, options, env);
    } else if (typeof rules[type] !== 'undefined') {
      result += rules[tokens[i].type](tokens, i, options, env, this);
    } else {
      result += this.renderToken(tokens, i, options, env);
    }
  }

  return result;
};

module.exports = Renderer;


/***/ }),

/***/ 463:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Block quotes



var isSpace = __webpack_require__(427).isSpace;


module.exports = function blockquote(state, startLine, endLine, silent) {
  var adjustTab,
      ch,
      i,
      initial,
      l,
      lastLineEmpty,
      lines,
      nextLine,
      offset,
      oldBMarks,
      oldBSCount,
      oldIndent,
      oldParentType,
      oldSCount,
      oldTShift,
      spaceAfterMarker,
      terminate,
      terminatorRules,
      token,
      wasOutdented,
      oldLineMax = state.lineMax,
      pos = state.bMarks[startLine] + state.tShift[startLine],
      max = state.eMarks[startLine];

  // if it's indented more than 3 spaces, it should be a code block
  if (state.sCount[startLine] - state.blkIndent >= 4) { return false; }

  // check the block quote marker
  if (state.src.charCodeAt(pos++) !== 0x3E/* > */) { return false; }

  // we know that it's going to be a valid blockquote,
  // so no point trying to find the end of it in silent mode
  if (silent) { return true; }

  // skip spaces after ">" and re-calculate offset
  initial = offset = state.sCount[startLine] + pos - (state.bMarks[startLine] + state.tShift[startLine]);

  // skip one optional space after '>'
  if (state.src.charCodeAt(pos) === 0x20 /* space */) {
    // ' >   test '
    //     ^ -- position start of line here:
    pos++;
    initial++;
    offset++;
    adjustTab = false;
    spaceAfterMarker = true;
  } else if (state.src.charCodeAt(pos) === 0x09 /* tab */) {
    spaceAfterMarker = true;

    if ((state.bsCount[startLine] + offset) % 4 === 3) {
      // '  >\t  test '
      //       ^ -- position start of line here (tab has width===1)
      pos++;
      initial++;
      offset++;
      adjustTab = false;
    } else {
      // ' >\t  test '
      //    ^ -- position start of line here + shift bsCount slightly
      //         to make extra space appear
      adjustTab = true;
    }
  } else {
    spaceAfterMarker = false;
  }

  oldBMarks = [ state.bMarks[startLine] ];
  state.bMarks[startLine] = pos;

  while (pos < max) {
    ch = state.src.charCodeAt(pos);

    if (isSpace(ch)) {
      if (ch === 0x09) {
        offset += 4 - (offset + state.bsCount[startLine] + (adjustTab ? 1 : 0)) % 4;
      } else {
        offset++;
      }
    } else {
      break;
    }

    pos++;
  }

  oldBSCount = [ state.bsCount[startLine] ];
  state.bsCount[startLine] = state.sCount[startLine] + 1 + (spaceAfterMarker ? 1 : 0);

  lastLineEmpty = pos >= max;

  oldSCount = [ state.sCount[startLine] ];
  state.sCount[startLine] = offset - initial;

  oldTShift = [ state.tShift[startLine] ];
  state.tShift[startLine] = pos - state.bMarks[startLine];

  terminatorRules = state.md.block.ruler.getRules('blockquote');

  oldParentType = state.parentType;
  state.parentType = 'blockquote';
  wasOutdented = false;

  // Search the end of the block
  //
  // Block ends with either:
  //  1. an empty line outside:
  //     ```
  //     > test
  //
  //     ```
  //  2. an empty line inside:
  //     ```
  //     >
  //     test
  //     ```
  //  3. another tag:
  //     ```
  //     > test
  //      - - -
  //     ```
  for (nextLine = startLine + 1; nextLine < endLine; nextLine++) {
    // check if it's outdented, i.e. it's inside list item and indented
    // less than said list item:
    //
    // ```
    // 1. anything
    //    > current blockquote
    // 2. checking this line
    // ```
    if (state.sCount[nextLine] < state.blkIndent) wasOutdented = true;

    pos = state.bMarks[nextLine] + state.tShift[nextLine];
    max = state.eMarks[nextLine];

    if (pos >= max) {
      // Case 1: line is not inside the blockquote, and this line is empty.
      break;
    }

    if (state.src.charCodeAt(pos++) === 0x3E/* > */ && !wasOutdented) {
      // This line is inside the blockquote.

      // skip spaces after ">" and re-calculate offset
      initial = offset = state.sCount[nextLine] + pos - (state.bMarks[nextLine] + state.tShift[nextLine]);

      // skip one optional space after '>'
      if (state.src.charCodeAt(pos) === 0x20 /* space */) {
        // ' >   test '
        //     ^ -- position start of line here:
        pos++;
        initial++;
        offset++;
        adjustTab = false;
        spaceAfterMarker = true;
      } else if (state.src.charCodeAt(pos) === 0x09 /* tab */) {
        spaceAfterMarker = true;

        if ((state.bsCount[nextLine] + offset) % 4 === 3) {
          // '  >\t  test '
          //       ^ -- position start of line here (tab has width===1)
          pos++;
          initial++;
          offset++;
          adjustTab = false;
        } else {
          // ' >\t  test '
          //    ^ -- position start of line here + shift bsCount slightly
          //         to make extra space appear
          adjustTab = true;
        }
      } else {
        spaceAfterMarker = false;
      }

      oldBMarks.push(state.bMarks[nextLine]);
      state.bMarks[nextLine] = pos;

      while (pos < max) {
        ch = state.src.charCodeAt(pos);

        if (isSpace(ch)) {
          if (ch === 0x09) {
            offset += 4 - (offset + state.bsCount[nextLine] + (adjustTab ? 1 : 0)) % 4;
          } else {
            offset++;
          }
        } else {
          break;
        }

        pos++;
      }

      lastLineEmpty = pos >= max;

      oldBSCount.push(state.bsCount[nextLine]);
      state.bsCount[nextLine] = state.sCount[nextLine] + 1 + (spaceAfterMarker ? 1 : 0);

      oldSCount.push(state.sCount[nextLine]);
      state.sCount[nextLine] = offset - initial;

      oldTShift.push(state.tShift[nextLine]);
      state.tShift[nextLine] = pos - state.bMarks[nextLine];
      continue;
    }

    // Case 2: line is not inside the blockquote, and the last line was empty.
    if (lastLineEmpty) { break; }

    // Case 3: another tag found.
    terminate = false;
    for (i = 0, l = terminatorRules.length; i < l; i++) {
      if (terminatorRules[i](state, nextLine, endLine, true)) {
        terminate = true;
        break;
      }
    }

    if (terminate) {
      // Quirk to enforce "hard termination mode" for paragraphs;
      // normally if you call `tokenize(state, startLine, nextLine)`,
      // paragraphs will look below nextLine for paragraph continuation,
      // but if blockquote is terminated by another tag, they shouldn't
      state.lineMax = nextLine;

      if (state.blkIndent !== 0) {
        // state.blkIndent was non-zero, we now set it to zero,
        // so we need to re-calculate all offsets to appear as
        // if indent wasn't changed
        oldBMarks.push(state.bMarks[nextLine]);
        oldBSCount.push(state.bsCount[nextLine]);
        oldTShift.push(state.tShift[nextLine]);
        oldSCount.push(state.sCount[nextLine]);
        state.sCount[nextLine] -= state.blkIndent;
      }

      break;
    }

    oldBMarks.push(state.bMarks[nextLine]);
    oldBSCount.push(state.bsCount[nextLine]);
    oldTShift.push(state.tShift[nextLine]);
    oldSCount.push(state.sCount[nextLine]);

    // A negative indentation means that this is a paragraph continuation
    //
    state.sCount[nextLine] = -1;
  }

  oldIndent = state.blkIndent;
  state.blkIndent = 0;

  token        = state.push('blockquote_open', 'blockquote', 1);
  token.markup = '>';
  token.map    = lines = [ startLine, 0 ];

  state.md.block.tokenize(state, startLine, nextLine);

  token        = state.push('blockquote_close', 'blockquote', -1);
  token.markup = '>';

  state.lineMax = oldLineMax;
  state.parentType = oldParentType;
  lines[1] = state.line;

  // Restore original tShift; this might not be necessary since the parser
  // has already been here, but just to make sure we can do that.
  for (i = 0; i < oldTShift.length; i++) {
    state.bMarks[i + startLine] = oldBMarks[i];
    state.tShift[i + startLine] = oldTShift[i];
    state.sCount[i + startLine] = oldSCount[i];
    state.bsCount[i + startLine] = oldBSCount[i];
  }
  state.blkIndent = oldIndent;

  return true;
};


/***/ }),

/***/ 464:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Code block (4 spaces padded)




module.exports = function code(state, startLine, endLine/*, silent*/) {
  var nextLine, last, token;

  if (state.sCount[startLine] - state.blkIndent < 4) { return false; }

  last = nextLine = startLine + 1;

  while (nextLine < endLine) {
    if (state.isEmpty(nextLine)) {
      nextLine++;
      continue;
    }

    if (state.sCount[nextLine] - state.blkIndent >= 4) {
      nextLine++;
      last = nextLine;
      continue;
    }
    break;
  }

  state.line = last;

  token         = state.push('code_block', 'code', 0);
  token.content = state.getLines(startLine, last, 4 + state.blkIndent, true);
  token.map     = [ startLine, state.line ];

  return true;
};


/***/ }),

/***/ 465:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// fences (``` lang, ~~~ lang)




module.exports = function fence(state, startLine, endLine, silent) {
  var marker, len, params, nextLine, mem, token, markup,
      haveEndMarker = false,
      pos = state.bMarks[startLine] + state.tShift[startLine],
      max = state.eMarks[startLine];

  // if it's indented more than 3 spaces, it should be a code block
  if (state.sCount[startLine] - state.blkIndent >= 4) { return false; }

  if (pos + 3 > max) { return false; }

  marker = state.src.charCodeAt(pos);

  if (marker !== 0x7E/* ~ */ && marker !== 0x60 /* ` */) {
    return false;
  }

  // scan marker length
  mem = pos;
  pos = state.skipChars(pos, marker);

  len = pos - mem;

  if (len < 3) { return false; }

  markup = state.src.slice(mem, pos);
  params = state.src.slice(pos, max);

  if (params.indexOf(String.fromCharCode(marker)) >= 0) { return false; }

  // Since start is found, we can report success here in validation mode
  if (silent) { return true; }

  // search end of block
  nextLine = startLine;

  for (;;) {
    nextLine++;
    if (nextLine >= endLine) {
      // unclosed block should be autoclosed by end of document.
      // also block seems to be autoclosed by end of parent
      break;
    }

    pos = mem = state.bMarks[nextLine] + state.tShift[nextLine];
    max = state.eMarks[nextLine];

    if (pos < max && state.sCount[nextLine] < state.blkIndent) {
      // non-empty line with negative indent should stop the list:
      // - ```
      //  test
      break;
    }

    if (state.src.charCodeAt(pos) !== marker) { continue; }

    if (state.sCount[nextLine] - state.blkIndent >= 4) {
      // closing fence should be indented less than 4 spaces
      continue;
    }

    pos = state.skipChars(pos, marker);

    // closing code fence must be at least as long as the opening one
    if (pos - mem < len) { continue; }

    // make sure tail has spaces only
    pos = state.skipSpaces(pos);

    if (pos < max) { continue; }

    haveEndMarker = true;
    // found!
    break;
  }

  // If a fence has heading spaces, they should be removed from its inner block
  len = state.sCount[startLine];

  state.line = nextLine + (haveEndMarker ? 1 : 0);

  token         = state.push('fence', 'code', 0);
  token.info    = params;
  token.content = state.getLines(startLine + 1, nextLine, len, true);
  token.markup  = markup;
  token.map     = [ startLine, state.line ];

  return true;
};


/***/ }),

/***/ 466:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// heading (#, ##, ...)



var isSpace = __webpack_require__(427).isSpace;


module.exports = function heading(state, startLine, endLine, silent) {
  var ch, level, tmp, token,
      pos = state.bMarks[startLine] + state.tShift[startLine],
      max = state.eMarks[startLine];

  // if it's indented more than 3 spaces, it should be a code block
  if (state.sCount[startLine] - state.blkIndent >= 4) { return false; }

  ch  = state.src.charCodeAt(pos);

  if (ch !== 0x23/* # */ || pos >= max) { return false; }

  // count heading level
  level = 1;
  ch = state.src.charCodeAt(++pos);
  while (ch === 0x23/* # */ && pos < max && level <= 6) {
    level++;
    ch = state.src.charCodeAt(++pos);
  }

  if (level > 6 || (pos < max && !isSpace(ch))) { return false; }

  if (silent) { return true; }

  // Let's cut tails like '    ###  ' from the end of string

  max = state.skipSpacesBack(max, pos);
  tmp = state.skipCharsBack(max, 0x23, pos); // #
  if (tmp > pos && isSpace(state.src.charCodeAt(tmp - 1))) {
    max = tmp;
  }

  state.line = startLine + 1;

  token        = state.push('heading_open', 'h' + String(level), 1);
  token.markup = '########'.slice(0, level);
  token.map    = [ startLine, state.line ];

  token          = state.push('inline', '', 0);
  token.content  = state.src.slice(pos, max).trim();
  token.map      = [ startLine, state.line ];
  token.children = [];

  token        = state.push('heading_close', 'h' + String(level), -1);
  token.markup = '########'.slice(0, level);

  return true;
};


/***/ }),

/***/ 467:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Horizontal rule



var isSpace = __webpack_require__(427).isSpace;


module.exports = function hr(state, startLine, endLine, silent) {
  var marker, cnt, ch, token,
      pos = state.bMarks[startLine] + state.tShift[startLine],
      max = state.eMarks[startLine];

  // if it's indented more than 3 spaces, it should be a code block
  if (state.sCount[startLine] - state.blkIndent >= 4) { return false; }

  marker = state.src.charCodeAt(pos++);

  // Check hr marker
  if (marker !== 0x2A/* * */ &&
      marker !== 0x2D/* - */ &&
      marker !== 0x5F/* _ */) {
    return false;
  }

  // markers can be mixed with spaces, but there should be at least 3 of them

  cnt = 1;
  while (pos < max) {
    ch = state.src.charCodeAt(pos++);
    if (ch !== marker && !isSpace(ch)) { return false; }
    if (ch === marker) { cnt++; }
  }

  if (cnt < 3) { return false; }

  if (silent) { return true; }

  state.line = startLine + 1;

  token        = state.push('hr', 'hr', 0);
  token.map    = [ startLine, state.line ];
  token.markup = Array(cnt + 1).join(String.fromCharCode(marker));

  return true;
};


/***/ }),

/***/ 468:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// HTML block




var block_names = __webpack_require__(450);
var HTML_OPEN_CLOSE_TAG_RE = __webpack_require__(435).HTML_OPEN_CLOSE_TAG_RE;

// An array of opening and corresponding closing sequences for html tags,
// last argument defines whether it can terminate a paragraph or not
//
var HTML_SEQUENCES = [
  [ /^<(script|pre|style)(?=(\s|>|$))/i, /<\/(script|pre|style)>/i, true ],
  [ /^<!--/,        /-->/,   true ],
  [ /^<\?/,         /\?>/,   true ],
  [ /^<![A-Z]/,     />/,     true ],
  [ /^<!\[CDATA\[/, /\]\]>/, true ],
  [ new RegExp('^</?(' + block_names.join('|') + ')(?=(\\s|/?>|$))', 'i'), /^$/, true ],
  [ new RegExp(HTML_OPEN_CLOSE_TAG_RE.source + '\\s*$'),  /^$/, false ]
];


module.exports = function html_block(state, startLine, endLine, silent) {
  var i, nextLine, token, lineText,
      pos = state.bMarks[startLine] + state.tShift[startLine],
      max = state.eMarks[startLine];

  // if it's indented more than 3 spaces, it should be a code block
  if (state.sCount[startLine] - state.blkIndent >= 4) { return false; }

  if (!state.md.options.html) { return false; }

  if (state.src.charCodeAt(pos) !== 0x3C/* < */) { return false; }

  lineText = state.src.slice(pos, max);

  for (i = 0; i < HTML_SEQUENCES.length; i++) {
    if (HTML_SEQUENCES[i][0].test(lineText)) { break; }
  }

  if (i === HTML_SEQUENCES.length) { return false; }

  if (silent) {
    // true if this sequence can be a terminator, false otherwise
    return HTML_SEQUENCES[i][2];
  }

  nextLine = startLine + 1;

  // If we are here - we detected HTML block.
  // Let's roll down till block end.
  if (!HTML_SEQUENCES[i][1].test(lineText)) {
    for (; nextLine < endLine; nextLine++) {
      if (state.sCount[nextLine] < state.blkIndent) { break; }

      pos = state.bMarks[nextLine] + state.tShift[nextLine];
      max = state.eMarks[nextLine];
      lineText = state.src.slice(pos, max);

      if (HTML_SEQUENCES[i][1].test(lineText)) {
        if (lineText.length !== 0) { nextLine++; }
        break;
      }
    }
  }

  state.line = nextLine;

  token         = state.push('html_block', '', 0);
  token.map     = [ startLine, nextLine ];
  token.content = state.getLines(startLine, nextLine, state.blkIndent, true);

  return true;
};


/***/ }),

/***/ 469:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// lheading (---, ===)




module.exports = function lheading(state, startLine, endLine/*, silent*/) {
  var content, terminate, i, l, token, pos, max, level, marker,
      nextLine = startLine + 1, oldParentType,
      terminatorRules = state.md.block.ruler.getRules('paragraph');

  // if it's indented more than 3 spaces, it should be a code block
  if (state.sCount[startLine] - state.blkIndent >= 4) { return false; }

  oldParentType = state.parentType;
  state.parentType = 'paragraph'; // use paragraph to match terminatorRules

  // jump line-by-line until empty one or EOF
  for (; nextLine < endLine && !state.isEmpty(nextLine); nextLine++) {
    // this would be a code block normally, but after paragraph
    // it's considered a lazy continuation regardless of what's there
    if (state.sCount[nextLine] - state.blkIndent > 3) { continue; }

    //
    // Check for underline in setext header
    //
    if (state.sCount[nextLine] >= state.blkIndent) {
      pos = state.bMarks[nextLine] + state.tShift[nextLine];
      max = state.eMarks[nextLine];

      if (pos < max) {
        marker = state.src.charCodeAt(pos);

        if (marker === 0x2D/* - */ || marker === 0x3D/* = */) {
          pos = state.skipChars(pos, marker);
          pos = state.skipSpaces(pos);

          if (pos >= max) {
            level = (marker === 0x3D/* = */ ? 1 : 2);
            break;
          }
        }
      }
    }

    // quirk for blockquotes, this line should already be checked by that rule
    if (state.sCount[nextLine] < 0) { continue; }

    // Some tags can terminate paragraph without empty line.
    terminate = false;
    for (i = 0, l = terminatorRules.length; i < l; i++) {
      if (terminatorRules[i](state, nextLine, endLine, true)) {
        terminate = true;
        break;
      }
    }
    if (terminate) { break; }
  }

  if (!level) {
    // Didn't find valid underline
    return false;
  }

  content = state.getLines(startLine, nextLine, state.blkIndent, false).trim();

  state.line = nextLine + 1;

  token          = state.push('heading_open', 'h' + String(level), 1);
  token.markup   = String.fromCharCode(marker);
  token.map      = [ startLine, state.line ];

  token          = state.push('inline', '', 0);
  token.content  = content;
  token.map      = [ startLine, state.line - 1 ];
  token.children = [];

  token          = state.push('heading_close', 'h' + String(level), -1);
  token.markup   = String.fromCharCode(marker);

  state.parentType = oldParentType;

  return true;
};


/***/ }),

/***/ 470:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Lists



var isSpace = __webpack_require__(427).isSpace;


// Search `[-+*][\n ]`, returns next pos after marker on success
// or -1 on fail.
function skipBulletListMarker(state, startLine) {
  var marker, pos, max, ch;

  pos = state.bMarks[startLine] + state.tShift[startLine];
  max = state.eMarks[startLine];

  marker = state.src.charCodeAt(pos++);
  // Check bullet
  if (marker !== 0x2A/* * */ &&
      marker !== 0x2D/* - */ &&
      marker !== 0x2B/* + */) {
    return -1;
  }

  if (pos < max) {
    ch = state.src.charCodeAt(pos);

    if (!isSpace(ch)) {
      // " -test " - is not a list item
      return -1;
    }
  }

  return pos;
}

// Search `\d+[.)][\n ]`, returns next pos after marker on success
// or -1 on fail.
function skipOrderedListMarker(state, startLine) {
  var ch,
      start = state.bMarks[startLine] + state.tShift[startLine],
      pos = start,
      max = state.eMarks[startLine];

  // List marker should have at least 2 chars (digit + dot)
  if (pos + 1 >= max) { return -1; }

  ch = state.src.charCodeAt(pos++);

  if (ch < 0x30/* 0 */ || ch > 0x39/* 9 */) { return -1; }

  for (;;) {
    // EOL -> fail
    if (pos >= max) { return -1; }

    ch = state.src.charCodeAt(pos++);

    if (ch >= 0x30/* 0 */ && ch <= 0x39/* 9 */) {

      // List marker should have no more than 9 digits
      // (prevents integer overflow in browsers)
      if (pos - start >= 10) { return -1; }

      continue;
    }

    // found valid marker
    if (ch === 0x29/* ) */ || ch === 0x2e/* . */) {
      break;
    }

    return -1;
  }


  if (pos < max) {
    ch = state.src.charCodeAt(pos);

    if (!isSpace(ch)) {
      // " 1.test " - is not a list item
      return -1;
    }
  }
  return pos;
}

function markTightParagraphs(state, idx) {
  var i, l,
      level = state.level + 2;

  for (i = idx + 2, l = state.tokens.length - 2; i < l; i++) {
    if (state.tokens[i].level === level && state.tokens[i].type === 'paragraph_open') {
      state.tokens[i + 2].hidden = true;
      state.tokens[i].hidden = true;
      i += 2;
    }
  }
}


module.exports = function list(state, startLine, endLine, silent) {
  var ch,
      contentStart,
      i,
      indent,
      indentAfterMarker,
      initial,
      isOrdered,
      itemLines,
      l,
      listLines,
      listTokIdx,
      markerCharCode,
      markerValue,
      max,
      nextLine,
      offset,
      oldIndent,
      oldLIndent,
      oldParentType,
      oldTShift,
      oldTight,
      pos,
      posAfterMarker,
      prevEmptyEnd,
      start,
      terminate,
      terminatorRules,
      token,
      isTerminatingParagraph = false,
      tight = true;

  // if it's indented more than 3 spaces, it should be a code block
  if (state.sCount[startLine] - state.blkIndent >= 4) { return false; }

  // limit conditions when list can interrupt
  // a paragraph (validation mode only)
  if (silent && state.parentType === 'paragraph') {
    // Next list item should still terminate previous list item;
    //
    // This code can fail if plugins use blkIndent as well as lists,
    // but I hope the spec gets fixed long before that happens.
    //
    if (state.tShift[startLine] >= state.blkIndent) {
      isTerminatingParagraph = true;
    }
  }

  // Detect list type and position after marker
  if ((posAfterMarker = skipOrderedListMarker(state, startLine)) >= 0) {
    isOrdered = true;
    start = state.bMarks[startLine] + state.tShift[startLine];
    markerValue = Number(state.src.substr(start, posAfterMarker - start - 1));

    // If we're starting a new ordered list right after
    // a paragraph, it should start with 1.
    if (isTerminatingParagraph && markerValue !== 1) return false;

  } else if ((posAfterMarker = skipBulletListMarker(state, startLine)) >= 0) {
    isOrdered = false;

  } else {
    return false;
  }

  // If we're starting a new unordered list right after
  // a paragraph, first line should not be empty.
  if (isTerminatingParagraph) {
    if (state.skipSpaces(posAfterMarker) >= state.eMarks[startLine]) return false;
  }

  // We should terminate list on style change. Remember first one to compare.
  markerCharCode = state.src.charCodeAt(posAfterMarker - 1);

  // For validation mode we can terminate immediately
  if (silent) { return true; }

  // Start list
  listTokIdx = state.tokens.length;

  if (isOrdered) {
    token       = state.push('ordered_list_open', 'ol', 1);
    if (markerValue !== 1) {
      token.attrs = [ [ 'start', markerValue ] ];
    }

  } else {
    token       = state.push('bullet_list_open', 'ul', 1);
  }

  token.map    = listLines = [ startLine, 0 ];
  token.markup = String.fromCharCode(markerCharCode);

  //
  // Iterate list items
  //

  nextLine = startLine;
  prevEmptyEnd = false;
  terminatorRules = state.md.block.ruler.getRules('list');

  oldParentType = state.parentType;
  state.parentType = 'list';

  while (nextLine < endLine) {
    pos = posAfterMarker;
    max = state.eMarks[nextLine];

    initial = offset = state.sCount[nextLine] + posAfterMarker - (state.bMarks[startLine] + state.tShift[startLine]);

    while (pos < max) {
      ch = state.src.charCodeAt(pos);

      if (ch === 0x09) {
        offset += 4 - (offset + state.bsCount[nextLine]) % 4;
      } else if (ch === 0x20) {
        offset++;
      } else {
        break;
      }

      pos++;
    }

    contentStart = pos;

    if (contentStart >= max) {
      // trimming space in "-    \n  3" case, indent is 1 here
      indentAfterMarker = 1;
    } else {
      indentAfterMarker = offset - initial;
    }

    // If we have more than 4 spaces, the indent is 1
    // (the rest is just indented code block)
    if (indentAfterMarker > 4) { indentAfterMarker = 1; }

    // "  -  test"
    //  ^^^^^ - calculating total length of this thing
    indent = initial + indentAfterMarker;

    // Run subparser & write tokens
    token        = state.push('list_item_open', 'li', 1);
    token.markup = String.fromCharCode(markerCharCode);
    token.map    = itemLines = [ startLine, 0 ];

    oldIndent = state.blkIndent;
    oldTight = state.tight;
    oldTShift = state.tShift[startLine];
    oldLIndent = state.sCount[startLine];
    state.blkIndent = indent;
    state.tight = true;
    state.tShift[startLine] = contentStart - state.bMarks[startLine];
    state.sCount[startLine] = offset;

    if (contentStart >= max && state.isEmpty(startLine + 1)) {
      // workaround for this case
      // (list item is empty, list terminates before "foo"):
      // ~~~~~~~~
      //   -
      //
      //     foo
      // ~~~~~~~~
      state.line = Math.min(state.line + 2, endLine);
    } else {
      state.md.block.tokenize(state, startLine, endLine, true);
    }

    // If any of list item is tight, mark list as tight
    if (!state.tight || prevEmptyEnd) {
      tight = false;
    }
    // Item become loose if finish with empty line,
    // but we should filter last element, because it means list finish
    prevEmptyEnd = (state.line - startLine) > 1 && state.isEmpty(state.line - 1);

    state.blkIndent = oldIndent;
    state.tShift[startLine] = oldTShift;
    state.sCount[startLine] = oldLIndent;
    state.tight = oldTight;

    token        = state.push('list_item_close', 'li', -1);
    token.markup = String.fromCharCode(markerCharCode);

    nextLine = startLine = state.line;
    itemLines[1] = nextLine;
    contentStart = state.bMarks[startLine];

    if (nextLine >= endLine) { break; }

    //
    // Try to check if list is terminated or continued.
    //
    if (state.sCount[nextLine] < state.blkIndent) { break; }

    // fail if terminating block found
    terminate = false;
    for (i = 0, l = terminatorRules.length; i < l; i++) {
      if (terminatorRules[i](state, nextLine, endLine, true)) {
        terminate = true;
        break;
      }
    }
    if (terminate) { break; }

    // fail if list has another type
    if (isOrdered) {
      posAfterMarker = skipOrderedListMarker(state, nextLine);
      if (posAfterMarker < 0) { break; }
    } else {
      posAfterMarker = skipBulletListMarker(state, nextLine);
      if (posAfterMarker < 0) { break; }
    }

    if (markerCharCode !== state.src.charCodeAt(posAfterMarker - 1)) { break; }
  }

  // Finalize list
  if (isOrdered) {
    token = state.push('ordered_list_close', 'ol', -1);
  } else {
    token = state.push('bullet_list_close', 'ul', -1);
  }
  token.markup = String.fromCharCode(markerCharCode);

  listLines[1] = nextLine;
  state.line = nextLine;

  state.parentType = oldParentType;

  // mark paragraphs tight if needed
  if (tight) {
    markTightParagraphs(state, listTokIdx);
  }

  return true;
};


/***/ }),

/***/ 471:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Paragraph




module.exports = function paragraph(state, startLine/*, endLine*/) {
  var content, terminate, i, l, token, oldParentType,
      nextLine = startLine + 1,
      terminatorRules = state.md.block.ruler.getRules('paragraph'),
      endLine = state.lineMax;

  oldParentType = state.parentType;
  state.parentType = 'paragraph';

  // jump line-by-line until empty one or EOF
  for (; nextLine < endLine && !state.isEmpty(nextLine); nextLine++) {
    // this would be a code block normally, but after paragraph
    // it's considered a lazy continuation regardless of what's there
    if (state.sCount[nextLine] - state.blkIndent > 3) { continue; }

    // quirk for blockquotes, this line should already be checked by that rule
    if (state.sCount[nextLine] < 0) { continue; }

    // Some tags can terminate paragraph without empty line.
    terminate = false;
    for (i = 0, l = terminatorRules.length; i < l; i++) {
      if (terminatorRules[i](state, nextLine, endLine, true)) {
        terminate = true;
        break;
      }
    }
    if (terminate) { break; }
  }

  content = state.getLines(startLine, nextLine, state.blkIndent, false).trim();

  state.line = nextLine;

  token          = state.push('paragraph_open', 'p', 1);
  token.map      = [ startLine, state.line ];

  token          = state.push('inline', '', 0);
  token.content  = content;
  token.map      = [ startLine, state.line ];
  token.children = [];

  token          = state.push('paragraph_close', 'p', -1);

  state.parentType = oldParentType;

  return true;
};


/***/ }),

/***/ 472:
/***/ (function(module, exports, __webpack_require__) {

"use strict";



var normalizeReference   = __webpack_require__(427).normalizeReference;
var isSpace              = __webpack_require__(427).isSpace;


module.exports = function reference(state, startLine, _endLine, silent) {
  var ch,
      destEndPos,
      destEndLineNo,
      endLine,
      href,
      i,
      l,
      label,
      labelEnd,
      oldParentType,
      res,
      start,
      str,
      terminate,
      terminatorRules,
      title,
      lines = 0,
      pos = state.bMarks[startLine] + state.tShift[startLine],
      max = state.eMarks[startLine],
      nextLine = startLine + 1;

  // if it's indented more than 3 spaces, it should be a code block
  if (state.sCount[startLine] - state.blkIndent >= 4) { return false; }

  if (state.src.charCodeAt(pos) !== 0x5B/* [ */) { return false; }

  // Simple check to quickly interrupt scan on [link](url) at the start of line.
  // Can be useful on practice: https://github.com/markdown-it/markdown-it/issues/54
  while (++pos < max) {
    if (state.src.charCodeAt(pos) === 0x5D /* ] */ &&
        state.src.charCodeAt(pos - 1) !== 0x5C/* \ */) {
      if (pos + 1 === max) { return false; }
      if (state.src.charCodeAt(pos + 1) !== 0x3A/* : */) { return false; }
      break;
    }
  }

  endLine = state.lineMax;

  // jump line-by-line until empty one or EOF
  terminatorRules = state.md.block.ruler.getRules('reference');

  oldParentType = state.parentType;
  state.parentType = 'reference';

  for (; nextLine < endLine && !state.isEmpty(nextLine); nextLine++) {
    // this would be a code block normally, but after paragraph
    // it's considered a lazy continuation regardless of what's there
    if (state.sCount[nextLine] - state.blkIndent > 3) { continue; }

    // quirk for blockquotes, this line should already be checked by that rule
    if (state.sCount[nextLine] < 0) { continue; }

    // Some tags can terminate paragraph without empty line.
    terminate = false;
    for (i = 0, l = terminatorRules.length; i < l; i++) {
      if (terminatorRules[i](state, nextLine, endLine, true)) {
        terminate = true;
        break;
      }
    }
    if (terminate) { break; }
  }

  str = state.getLines(startLine, nextLine, state.blkIndent, false).trim();
  max = str.length;

  for (pos = 1; pos < max; pos++) {
    ch = str.charCodeAt(pos);
    if (ch === 0x5B /* [ */) {
      return false;
    } else if (ch === 0x5D /* ] */) {
      labelEnd = pos;
      break;
    } else if (ch === 0x0A /* \n */) {
      lines++;
    } else if (ch === 0x5C /* \ */) {
      pos++;
      if (pos < max && str.charCodeAt(pos) === 0x0A) {
        lines++;
      }
    }
  }

  if (labelEnd < 0 || str.charCodeAt(labelEnd + 1) !== 0x3A/* : */) { return false; }

  // [label]:   destination   'title'
  //         ^^^ skip optional whitespace here
  for (pos = labelEnd + 2; pos < max; pos++) {
    ch = str.charCodeAt(pos);
    if (ch === 0x0A) {
      lines++;
    } else if (isSpace(ch)) {
      /*eslint no-empty:0*/
    } else {
      break;
    }
  }

  // [label]:   destination   'title'
  //            ^^^^^^^^^^^ parse this
  res = state.md.helpers.parseLinkDestination(str, pos, max);
  if (!res.ok) { return false; }

  href = state.md.normalizeLink(res.str);
  if (!state.md.validateLink(href)) { return false; }

  pos = res.pos;
  lines += res.lines;

  // save cursor state, we could require to rollback later
  destEndPos = pos;
  destEndLineNo = lines;

  // [label]:   destination   'title'
  //                       ^^^ skipping those spaces
  start = pos;
  for (; pos < max; pos++) {
    ch = str.charCodeAt(pos);
    if (ch === 0x0A) {
      lines++;
    } else if (isSpace(ch)) {
      /*eslint no-empty:0*/
    } else {
      break;
    }
  }

  // [label]:   destination   'title'
  //                          ^^^^^^^ parse this
  res = state.md.helpers.parseLinkTitle(str, pos, max);
  if (pos < max && start !== pos && res.ok) {
    title = res.str;
    pos = res.pos;
    lines += res.lines;
  } else {
    title = '';
    pos = destEndPos;
    lines = destEndLineNo;
  }

  // skip trailing spaces until the rest of the line
  while (pos < max) {
    ch = str.charCodeAt(pos);
    if (!isSpace(ch)) { break; }
    pos++;
  }

  if (pos < max && str.charCodeAt(pos) !== 0x0A) {
    if (title) {
      // garbage at the end of the line after title,
      // but it could still be a valid reference if we roll back
      title = '';
      pos = destEndPos;
      lines = destEndLineNo;
      while (pos < max) {
        ch = str.charCodeAt(pos);
        if (!isSpace(ch)) { break; }
        pos++;
      }
    }
  }

  if (pos < max && str.charCodeAt(pos) !== 0x0A) {
    // garbage at the end of the line
    return false;
  }

  label = normalizeReference(str.slice(1, labelEnd));
  if (!label) {
    // CommonMark 0.20 disallows empty labels
    return false;
  }

  // Reference can not terminate anything. This check is for safety only.
  /*istanbul ignore if*/
  if (silent) { return true; }

  if (typeof state.env.references === 'undefined') {
    state.env.references = {};
  }
  if (typeof state.env.references[label] === 'undefined') {
    state.env.references[label] = { title: title, href: href };
  }

  state.parentType = oldParentType;

  state.line = startLine + lines + 1;
  return true;
};


/***/ }),

/***/ 473:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Parser state class



var Token = __webpack_require__(430);
var isSpace = __webpack_require__(427).isSpace;


function StateBlock(src, md, env, tokens) {
  var ch, s, start, pos, len, indent, offset, indent_found;

  this.src = src;

  // link to parser instance
  this.md     = md;

  this.env = env;

  //
  // Internal state vartiables
  //

  this.tokens = tokens;

  this.bMarks = [];  // line begin offsets for fast jumps
  this.eMarks = [];  // line end offsets for fast jumps
  this.tShift = [];  // offsets of the first non-space characters (tabs not expanded)
  this.sCount = [];  // indents for each line (tabs expanded)

  // An amount of virtual spaces (tabs expanded) between beginning
  // of each line (bMarks) and real beginning of that line.
  //
  // It exists only as a hack because blockquotes override bMarks
  // losing information in the process.
  //
  // It's used only when expanding tabs, you can think about it as
  // an initial tab length, e.g. bsCount=21 applied to string `\t123`
  // means first tab should be expanded to 4-21%4 === 3 spaces.
  //
  this.bsCount = [];

  // block parser variables
  this.blkIndent  = 0; // required block content indent
                       // (for example, if we are in list)
  this.line       = 0; // line index in src
  this.lineMax    = 0; // lines count
  this.tight      = false;  // loose/tight mode for lists
  this.ddIndent   = -1; // indent of the current dd block (-1 if there isn't any)

  // can be 'blockquote', 'list', 'root', 'paragraph' or 'reference'
  // used in lists to determine if they interrupt a paragraph
  this.parentType = 'root';

  this.level = 0;

  // renderer
  this.result = '';

  // Create caches
  // Generate markers.
  s = this.src;
  indent_found = false;

  for (start = pos = indent = offset = 0, len = s.length; pos < len; pos++) {
    ch = s.charCodeAt(pos);

    if (!indent_found) {
      if (isSpace(ch)) {
        indent++;

        if (ch === 0x09) {
          offset += 4 - offset % 4;
        } else {
          offset++;
        }
        continue;
      } else {
        indent_found = true;
      }
    }

    if (ch === 0x0A || pos === len - 1) {
      if (ch !== 0x0A) { pos++; }
      this.bMarks.push(start);
      this.eMarks.push(pos);
      this.tShift.push(indent);
      this.sCount.push(offset);
      this.bsCount.push(0);

      indent_found = false;
      indent = 0;
      offset = 0;
      start = pos + 1;
    }
  }

  // Push fake entry to simplify cache bounds checks
  this.bMarks.push(s.length);
  this.eMarks.push(s.length);
  this.tShift.push(0);
  this.sCount.push(0);
  this.bsCount.push(0);

  this.lineMax = this.bMarks.length - 1; // don't count last fake line
}

// Push new token to "stream".
//
StateBlock.prototype.push = function (type, tag, nesting) {
  var token = new Token(type, tag, nesting);
  token.block = true;

  if (nesting < 0) { this.level--; }
  token.level = this.level;
  if (nesting > 0) { this.level++; }

  this.tokens.push(token);
  return token;
};

StateBlock.prototype.isEmpty = function isEmpty(line) {
  return this.bMarks[line] + this.tShift[line] >= this.eMarks[line];
};

StateBlock.prototype.skipEmptyLines = function skipEmptyLines(from) {
  for (var max = this.lineMax; from < max; from++) {
    if (this.bMarks[from] + this.tShift[from] < this.eMarks[from]) {
      break;
    }
  }
  return from;
};

// Skip spaces from given position.
StateBlock.prototype.skipSpaces = function skipSpaces(pos) {
  var ch;

  for (var max = this.src.length; pos < max; pos++) {
    ch = this.src.charCodeAt(pos);
    if (!isSpace(ch)) { break; }
  }
  return pos;
};

// Skip spaces from given position in reverse.
StateBlock.prototype.skipSpacesBack = function skipSpacesBack(pos, min) {
  if (pos <= min) { return pos; }

  while (pos > min) {
    if (!isSpace(this.src.charCodeAt(--pos))) { return pos + 1; }
  }
  return pos;
};

// Skip char codes from given position
StateBlock.prototype.skipChars = function skipChars(pos, code) {
  for (var max = this.src.length; pos < max; pos++) {
    if (this.src.charCodeAt(pos) !== code) { break; }
  }
  return pos;
};

// Skip char codes reverse from given position - 1
StateBlock.prototype.skipCharsBack = function skipCharsBack(pos, code, min) {
  if (pos <= min) { return pos; }

  while (pos > min) {
    if (code !== this.src.charCodeAt(--pos)) { return pos + 1; }
  }
  return pos;
};

// cut lines range from source.
StateBlock.prototype.getLines = function getLines(begin, end, indent, keepLastLF) {
  var i, lineIndent, ch, first, last, queue, lineStart,
      line = begin;

  if (begin >= end) {
    return '';
  }

  queue = new Array(end - begin);

  for (i = 0; line < end; line++, i++) {
    lineIndent = 0;
    lineStart = first = this.bMarks[line];

    if (line + 1 < end || keepLastLF) {
      // No need for bounds check because we have fake entry on tail.
      last = this.eMarks[line] + 1;
    } else {
      last = this.eMarks[line];
    }

    while (first < last && lineIndent < indent) {
      ch = this.src.charCodeAt(first);

      if (isSpace(ch)) {
        if (ch === 0x09) {
          lineIndent += 4 - (lineIndent + this.bsCount[line]) % 4;
        } else {
          lineIndent++;
        }
      } else if (first - lineStart < this.tShift[line]) {
        // patched tShift masked characters to look like spaces (blockquotes, list markers)
        lineIndent++;
      } else {
        break;
      }

      first++;
    }

    if (lineIndent > indent) {
      // partially expanding tabs in code blocks, e.g '\t\tfoobar'
      // with indent=2 becomes '  \tfoobar'
      queue[i] = new Array(lineIndent - indent + 1).join(' ') + this.src.slice(first, last);
    } else {
      queue[i] = this.src.slice(first, last);
    }
  }

  return queue.join('');
};

// re-export Token class to use in block rules
StateBlock.prototype.Token = Token;


module.exports = StateBlock;


/***/ }),

/***/ 474:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// GFM table, non-standard



var isSpace = __webpack_require__(427).isSpace;


function getLine(state, line) {
  var pos = state.bMarks[line] + state.blkIndent,
      max = state.eMarks[line];

  return state.src.substr(pos, max - pos);
}

function escapedSplit(str) {
  var result = [],
      pos = 0,
      max = str.length,
      ch,
      escapes = 0,
      lastPos = 0,
      backTicked = false,
      lastBackTick = 0;

  ch  = str.charCodeAt(pos);

  while (pos < max) {
    if (ch === 0x60/* ` */) {
      if (backTicked) {
        // make \` close code sequence, but not open it;
        // the reason is: `\` is correct code block
        backTicked = false;
        lastBackTick = pos;
      } else if (escapes % 2 === 0) {
        backTicked = true;
        lastBackTick = pos;
      }
    } else if (ch === 0x7c/* | */ && (escapes % 2 === 0) && !backTicked) {
      result.push(str.substring(lastPos, pos));
      lastPos = pos + 1;
    }

    if (ch === 0x5c/* \ */) {
      escapes++;
    } else {
      escapes = 0;
    }

    pos++;

    // If there was an un-closed backtick, go back to just after
    // the last backtick, but as if it was a normal character
    if (pos === max && backTicked) {
      backTicked = false;
      pos = lastBackTick + 1;
    }

    ch = str.charCodeAt(pos);
  }

  result.push(str.substring(lastPos));

  return result;
}


module.exports = function table(state, startLine, endLine, silent) {
  var ch, lineText, pos, i, nextLine, columns, columnCount, token,
      aligns, t, tableLines, tbodyLines;

  // should have at least two lines
  if (startLine + 2 > endLine) { return false; }

  nextLine = startLine + 1;

  if (state.sCount[nextLine] < state.blkIndent) { return false; }

  // if it's indented more than 3 spaces, it should be a code block
  if (state.sCount[nextLine] - state.blkIndent >= 4) { return false; }

  // first character of the second line should be '|', '-', ':',
  // and no other characters are allowed but spaces;
  // basically, this is the equivalent of /^[-:|][-:|\s]*$/ regexp

  pos = state.bMarks[nextLine] + state.tShift[nextLine];
  if (pos >= state.eMarks[nextLine]) { return false; }

  ch = state.src.charCodeAt(pos++);
  if (ch !== 0x7C/* | */ && ch !== 0x2D/* - */ && ch !== 0x3A/* : */) { return false; }

  while (pos < state.eMarks[nextLine]) {
    ch = state.src.charCodeAt(pos);

    if (ch !== 0x7C/* | */ && ch !== 0x2D/* - */ && ch !== 0x3A/* : */ && !isSpace(ch)) { return false; }

    pos++;
  }

  lineText = getLine(state, startLine + 1);

  columns = lineText.split('|');
  aligns = [];
  for (i = 0; i < columns.length; i++) {
    t = columns[i].trim();
    if (!t) {
      // allow empty columns before and after table, but not in between columns;
      // e.g. allow ` |---| `, disallow ` ---||--- `
      if (i === 0 || i === columns.length - 1) {
        continue;
      } else {
        return false;
      }
    }

    if (!/^:?-+:?$/.test(t)) { return false; }
    if (t.charCodeAt(t.length - 1) === 0x3A/* : */) {
      aligns.push(t.charCodeAt(0) === 0x3A/* : */ ? 'center' : 'right');
    } else if (t.charCodeAt(0) === 0x3A/* : */) {
      aligns.push('left');
    } else {
      aligns.push('');
    }
  }

  lineText = getLine(state, startLine).trim();
  if (lineText.indexOf('|') === -1) { return false; }
  if (state.sCount[startLine] - state.blkIndent >= 4) { return false; }
  columns = escapedSplit(lineText.replace(/^\||\|$/g, ''));

  // header row will define an amount of columns in the entire table,
  // and align row shouldn't be smaller than that (the rest of the rows can)
  columnCount = columns.length;
  if (columnCount > aligns.length) { return false; }

  if (silent) { return true; }

  token     = state.push('table_open', 'table', 1);
  token.map = tableLines = [ startLine, 0 ];

  token     = state.push('thead_open', 'thead', 1);
  token.map = [ startLine, startLine + 1 ];

  token     = state.push('tr_open', 'tr', 1);
  token.map = [ startLine, startLine + 1 ];

  for (i = 0; i < columns.length; i++) {
    token          = state.push('th_open', 'th', 1);
    token.map      = [ startLine, startLine + 1 ];
    if (aligns[i]) {
      token.attrs  = [ [ 'style', 'text-align:' + aligns[i] ] ];
    }

    token          = state.push('inline', '', 0);
    token.content  = columns[i].trim();
    token.map      = [ startLine, startLine + 1 ];
    token.children = [];

    token          = state.push('th_close', 'th', -1);
  }

  token     = state.push('tr_close', 'tr', -1);
  token     = state.push('thead_close', 'thead', -1);

  token     = state.push('tbody_open', 'tbody', 1);
  token.map = tbodyLines = [ startLine + 2, 0 ];

  for (nextLine = startLine + 2; nextLine < endLine; nextLine++) {
    if (state.sCount[nextLine] < state.blkIndent) { break; }

    lineText = getLine(state, nextLine).trim();
    if (lineText.indexOf('|') === -1) { break; }
    if (state.sCount[nextLine] - state.blkIndent >= 4) { break; }
    columns = escapedSplit(lineText.replace(/^\||\|$/g, ''));

    token = state.push('tr_open', 'tr', 1);
    for (i = 0; i < columnCount; i++) {
      token          = state.push('td_open', 'td', 1);
      if (aligns[i]) {
        token.attrs  = [ [ 'style', 'text-align:' + aligns[i] ] ];
      }

      token          = state.push('inline', '', 0);
      token.content  = columns[i] ? columns[i].trim() : '';
      token.children = [];

      token          = state.push('td_close', 'td', -1);
    }
    token = state.push('tr_close', 'tr', -1);
  }
  token = state.push('tbody_close', 'tbody', -1);
  token = state.push('table_close', 'table', -1);

  tableLines[1] = tbodyLines[1] = nextLine;
  state.line = nextLine;
  return true;
};


/***/ }),

/***/ 475:
/***/ (function(module, exports, __webpack_require__) {

"use strict";



module.exports = function block(state) {
  var token;

  if (state.inlineMode) {
    token          = new state.Token('inline', '', 0);
    token.content  = state.src;
    token.map      = [ 0, 1 ];
    token.children = [];
    state.tokens.push(token);
  } else {
    state.md.block.parse(state.src, state.md, state.env, state.tokens);
  }
};


/***/ }),

/***/ 476:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function inline(state) {
  var tokens = state.tokens, tok, i, l;

  // Parse inlines
  for (i = 0, l = tokens.length; i < l; i++) {
    tok = tokens[i];
    if (tok.type === 'inline') {
      state.md.inline.parse(tok.content, state.md, state.env, tok.children);
    }
  }
};


/***/ }),

/***/ 477:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Replace link-like texts with link nodes.
//
// Currently restricted by `md.validateLink()` to http/https/ftp
//



var arrayReplaceAt = __webpack_require__(427).arrayReplaceAt;


function isLinkOpen(str) {
  return /^<a[>\s]/i.test(str);
}
function isLinkClose(str) {
  return /^<\/a\s*>/i.test(str);
}


module.exports = function linkify(state) {
  var i, j, l, tokens, token, currentToken, nodes, ln, text, pos, lastPos,
      level, htmlLinkLevel, url, fullUrl, urlText,
      blockTokens = state.tokens,
      links;

  if (!state.md.options.linkify) { return; }

  for (j = 0, l = blockTokens.length; j < l; j++) {
    if (blockTokens[j].type !== 'inline' ||
        !state.md.linkify.pretest(blockTokens[j].content)) {
      continue;
    }

    tokens = blockTokens[j].children;

    htmlLinkLevel = 0;

    // We scan from the end, to keep position when new tags added.
    // Use reversed logic in links start/end match
    for (i = tokens.length - 1; i >= 0; i--) {
      currentToken = tokens[i];

      // Skip content of markdown links
      if (currentToken.type === 'link_close') {
        i--;
        while (tokens[i].level !== currentToken.level && tokens[i].type !== 'link_open') {
          i--;
        }
        continue;
      }

      // Skip content of html tag links
      if (currentToken.type === 'html_inline') {
        if (isLinkOpen(currentToken.content) && htmlLinkLevel > 0) {
          htmlLinkLevel--;
        }
        if (isLinkClose(currentToken.content)) {
          htmlLinkLevel++;
        }
      }
      if (htmlLinkLevel > 0) { continue; }

      if (currentToken.type === 'text' && state.md.linkify.test(currentToken.content)) {

        text = currentToken.content;
        links = state.md.linkify.match(text);

        // Now split string to nodes
        nodes = [];
        level = currentToken.level;
        lastPos = 0;

        for (ln = 0; ln < links.length; ln++) {

          url = links[ln].url;
          fullUrl = state.md.normalizeLink(url);
          if (!state.md.validateLink(fullUrl)) { continue; }

          urlText = links[ln].text;

          // Linkifier might send raw hostnames like "example.com", where url
          // starts with domain name. So we prepend http:// in those cases,
          // and remove it afterwards.
          //
          if (!links[ln].schema) {
            urlText = state.md.normalizeLinkText('http://' + urlText).replace(/^http:\/\//, '');
          } else if (links[ln].schema === 'mailto:' && !/^mailto:/i.test(urlText)) {
            urlText = state.md.normalizeLinkText('mailto:' + urlText).replace(/^mailto:/, '');
          } else {
            urlText = state.md.normalizeLinkText(urlText);
          }

          pos = links[ln].index;

          if (pos > lastPos) {
            token         = new state.Token('text', '', 0);
            token.content = text.slice(lastPos, pos);
            token.level   = level;
            nodes.push(token);
          }

          token         = new state.Token('link_open', 'a', 1);
          token.attrs   = [ [ 'href', fullUrl ] ];
          token.level   = level++;
          token.markup  = 'linkify';
          token.info    = 'auto';
          nodes.push(token);

          token         = new state.Token('text', '', 0);
          token.content = urlText;
          token.level   = level;
          nodes.push(token);

          token         = new state.Token('link_close', 'a', -1);
          token.level   = --level;
          token.markup  = 'linkify';
          token.info    = 'auto';
          nodes.push(token);

          lastPos = links[ln].lastIndex;
        }
        if (lastPos < text.length) {
          token         = new state.Token('text', '', 0);
          token.content = text.slice(lastPos);
          token.level   = level;
          nodes.push(token);
        }

        // replace current node
        blockTokens[j].children = tokens = arrayReplaceAt(tokens, i, nodes);
      }
    }
  }
};


/***/ }),

/***/ 478:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Normalize input string




var NEWLINES_RE  = /\r[\n\u0085]?|[\u2424\u2028\u0085]/g;
var NULL_RE      = /\u0000/g;


module.exports = function inline(state) {
  var str;

  // Normalize newlines
  str = state.src.replace(NEWLINES_RE, '\n');

  // Replace NULL characters
  str = str.replace(NULL_RE, '\uFFFD');

  state.src = str;
};


/***/ }),

/***/ 479:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Simple typographyc replacements
//
// (c) (C) → ©
// (tm) (TM) → ™
// (r) (R) → ®
// +- → ±
// (p) (P) -> §
// ... → … (also ?.... → ?.., !.... → !..)
// ???????? → ???, !!!!! → !!!, `,,` → `,`
// -- → &ndash;, --- → &mdash;
//


// TODO:
// - fractionals 1/2, 1/4, 3/4 -> ½, ¼, ¾
// - miltiplication 2 x 4 -> 2 × 4

var RARE_RE = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/;

// Workaround for phantomjs - need regex without /g flag,
// or root check will fail every second time
var SCOPED_ABBR_TEST_RE = /\((c|tm|r|p)\)/i;

var SCOPED_ABBR_RE = /\((c|tm|r|p)\)/ig;
var SCOPED_ABBR = {
  c: '©',
  r: '®',
  p: '§',
  tm: '™'
};

function replaceFn(match, name) {
  return SCOPED_ABBR[name.toLowerCase()];
}

function replace_scoped(inlineTokens) {
  var i, token, inside_autolink = 0;

  for (i = inlineTokens.length - 1; i >= 0; i--) {
    token = inlineTokens[i];

    if (token.type === 'text' && !inside_autolink) {
      token.content = token.content.replace(SCOPED_ABBR_RE, replaceFn);
    }

    if (token.type === 'link_open' && token.info === 'auto') {
      inside_autolink--;
    }

    if (token.type === 'link_close' && token.info === 'auto') {
      inside_autolink++;
    }
  }
}

function replace_rare(inlineTokens) {
  var i, token, inside_autolink = 0;

  for (i = inlineTokens.length - 1; i >= 0; i--) {
    token = inlineTokens[i];

    if (token.type === 'text' && !inside_autolink) {
      if (RARE_RE.test(token.content)) {
        token.content = token.content
                    .replace(/\+-/g, '±')
                    // .., ..., ....... -> …
                    // but ?..... & !..... -> ?.. & !..
                    .replace(/\.{2,}/g, '…').replace(/([?!])…/g, '$1..')
                    .replace(/([?!]){4,}/g, '$1$1$1').replace(/,{2,}/g, ',')
                    // em-dash
                    .replace(/(^|[^-])---([^-]|$)/mg, '$1\u2014$2')
                    // en-dash
                    .replace(/(^|\s)--(\s|$)/mg, '$1\u2013$2')
                    .replace(/(^|[^-\s])--([^-\s]|$)/mg, '$1\u2013$2');
      }
    }

    if (token.type === 'link_open' && token.info === 'auto') {
      inside_autolink--;
    }

    if (token.type === 'link_close' && token.info === 'auto') {
      inside_autolink++;
    }
  }
}


module.exports = function replace(state) {
  var blkIdx;

  if (!state.md.options.typographer) { return; }

  for (blkIdx = state.tokens.length - 1; blkIdx >= 0; blkIdx--) {

    if (state.tokens[blkIdx].type !== 'inline') { continue; }

    if (SCOPED_ABBR_TEST_RE.test(state.tokens[blkIdx].content)) {
      replace_scoped(state.tokens[blkIdx].children);
    }

    if (RARE_RE.test(state.tokens[blkIdx].content)) {
      replace_rare(state.tokens[blkIdx].children);
    }

  }
};


/***/ }),

/***/ 480:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Convert straight quotation marks to typographic ones
//



var isWhiteSpace   = __webpack_require__(427).isWhiteSpace;
var isPunctChar    = __webpack_require__(427).isPunctChar;
var isMdAsciiPunct = __webpack_require__(427).isMdAsciiPunct;

var QUOTE_TEST_RE = /['"]/;
var QUOTE_RE = /['"]/g;
var APOSTROPHE = '\u2019'; /* ’ */


function replaceAt(str, index, ch) {
  return str.substr(0, index) + ch + str.substr(index + 1);
}

function process_inlines(tokens, state) {
  var i, token, text, t, pos, max, thisLevel, item, lastChar, nextChar,
      isLastPunctChar, isNextPunctChar, isLastWhiteSpace, isNextWhiteSpace,
      canOpen, canClose, j, isSingle, stack, openQuote, closeQuote;

  stack = [];

  for (i = 0; i < tokens.length; i++) {
    token = tokens[i];

    thisLevel = tokens[i].level;

    for (j = stack.length - 1; j >= 0; j--) {
      if (stack[j].level <= thisLevel) { break; }
    }
    stack.length = j + 1;

    if (token.type !== 'text') { continue; }

    text = token.content;
    pos = 0;
    max = text.length;

    /*eslint no-labels:0,block-scoped-var:0*/
    OUTER:
    while (pos < max) {
      QUOTE_RE.lastIndex = pos;
      t = QUOTE_RE.exec(text);
      if (!t) { break; }

      canOpen = canClose = true;
      pos = t.index + 1;
      isSingle = (t[0] === "'");

      // Find previous character,
      // default to space if it's the beginning of the line
      //
      lastChar = 0x20;

      if (t.index - 1 >= 0) {
        lastChar = text.charCodeAt(t.index - 1);
      } else {
        for (j = i - 1; j >= 0; j--) {
          if (tokens[j].type === 'softbreak' || tokens[j].type === 'hardbreak') break; // lastChar defaults to 0x20
          if (tokens[j].type !== 'text') continue;

          lastChar = tokens[j].content.charCodeAt(tokens[j].content.length - 1);
          break;
        }
      }

      // Find next character,
      // default to space if it's the end of the line
      //
      nextChar = 0x20;

      if (pos < max) {
        nextChar = text.charCodeAt(pos);
      } else {
        for (j = i + 1; j < tokens.length; j++) {
          if (tokens[j].type === 'softbreak' || tokens[j].type === 'hardbreak') break; // nextChar defaults to 0x20
          if (tokens[j].type !== 'text') continue;

          nextChar = tokens[j].content.charCodeAt(0);
          break;
        }
      }

      isLastPunctChar = isMdAsciiPunct(lastChar) || isPunctChar(String.fromCharCode(lastChar));
      isNextPunctChar = isMdAsciiPunct(nextChar) || isPunctChar(String.fromCharCode(nextChar));

      isLastWhiteSpace = isWhiteSpace(lastChar);
      isNextWhiteSpace = isWhiteSpace(nextChar);

      if (isNextWhiteSpace) {
        canOpen = false;
      } else if (isNextPunctChar) {
        if (!(isLastWhiteSpace || isLastPunctChar)) {
          canOpen = false;
        }
      }

      if (isLastWhiteSpace) {
        canClose = false;
      } else if (isLastPunctChar) {
        if (!(isNextWhiteSpace || isNextPunctChar)) {
          canClose = false;
        }
      }

      if (nextChar === 0x22 /* " */ && t[0] === '"') {
        if (lastChar >= 0x30 /* 0 */ && lastChar <= 0x39 /* 9 */) {
          // special case: 1"" - count first quote as an inch
          canClose = canOpen = false;
        }
      }

      if (canOpen && canClose) {
        // treat this as the middle of the word
        canOpen = false;
        canClose = isNextPunctChar;
      }

      if (!canOpen && !canClose) {
        // middle of word
        if (isSingle) {
          token.content = replaceAt(token.content, t.index, APOSTROPHE);
        }
        continue;
      }

      if (canClose) {
        // this could be a closing quote, rewind the stack to get a match
        for (j = stack.length - 1; j >= 0; j--) {
          item = stack[j];
          if (stack[j].level < thisLevel) { break; }
          if (item.single === isSingle && stack[j].level === thisLevel) {
            item = stack[j];

            if (isSingle) {
              openQuote = state.md.options.quotes[2];
              closeQuote = state.md.options.quotes[3];
            } else {
              openQuote = state.md.options.quotes[0];
              closeQuote = state.md.options.quotes[1];
            }

            // replace token.content *before* tokens[item.token].content,
            // because, if they are pointing at the same token, replaceAt
            // could mess up indices when quote length != 1
            token.content = replaceAt(token.content, t.index, closeQuote);
            tokens[item.token].content = replaceAt(
              tokens[item.token].content, item.pos, openQuote);

            pos += closeQuote.length - 1;
            if (item.token === i) { pos += openQuote.length - 1; }

            text = token.content;
            max = text.length;

            stack.length = j;
            continue OUTER;
          }
        }
      }

      if (canOpen) {
        stack.push({
          token: i,
          pos: t.index,
          single: isSingle,
          level: thisLevel
        });
      } else if (canClose && isSingle) {
        token.content = replaceAt(token.content, t.index, APOSTROPHE);
      }
    }
  }
}


module.exports = function smartquotes(state) {
  /*eslint max-depth:0*/
  var blkIdx;

  if (!state.md.options.typographer) { return; }

  for (blkIdx = state.tokens.length - 1; blkIdx >= 0; blkIdx--) {

    if (state.tokens[blkIdx].type !== 'inline' ||
        !QUOTE_TEST_RE.test(state.tokens[blkIdx].content)) {
      continue;
    }

    process_inlines(state.tokens[blkIdx].children, state);
  }
};


/***/ }),

/***/ 481:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Core state object
//


var Token = __webpack_require__(430);


function StateCore(src, md, env) {
  this.src = src;
  this.env = env;
  this.tokens = [];
  this.inlineMode = false;
  this.md = md; // link to parser instance
}

// re-export Token class to use in core rules
StateCore.prototype.Token = Token;


module.exports = StateCore;


/***/ }),

/***/ 482:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Process autolinks '<protocol:...>'




/*eslint max-len:0*/
var EMAIL_RE    = /^<([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)>/;
var AUTOLINK_RE = /^<([a-zA-Z][a-zA-Z0-9+.\-]{1,31}):([^<>\x00-\x20]*)>/;


module.exports = function autolink(state, silent) {
  var tail, linkMatch, emailMatch, url, fullUrl, token,
      pos = state.pos;

  if (state.src.charCodeAt(pos) !== 0x3C/* < */) { return false; }

  tail = state.src.slice(pos);

  if (tail.indexOf('>') < 0) { return false; }

  if (AUTOLINK_RE.test(tail)) {
    linkMatch = tail.match(AUTOLINK_RE);

    url = linkMatch[0].slice(1, -1);
    fullUrl = state.md.normalizeLink(url);
    if (!state.md.validateLink(fullUrl)) { return false; }

    if (!silent) {
      token         = state.push('link_open', 'a', 1);
      token.attrs   = [ [ 'href', fullUrl ] ];
      token.markup  = 'autolink';
      token.info    = 'auto';

      token         = state.push('text', '', 0);
      token.content = state.md.normalizeLinkText(url);

      token         = state.push('link_close', 'a', -1);
      token.markup  = 'autolink';
      token.info    = 'auto';
    }

    state.pos += linkMatch[0].length;
    return true;
  }

  if (EMAIL_RE.test(tail)) {
    emailMatch = tail.match(EMAIL_RE);

    url = emailMatch[0].slice(1, -1);
    fullUrl = state.md.normalizeLink('mailto:' + url);
    if (!state.md.validateLink(fullUrl)) { return false; }

    if (!silent) {
      token         = state.push('link_open', 'a', 1);
      token.attrs   = [ [ 'href', fullUrl ] ];
      token.markup  = 'autolink';
      token.info    = 'auto';

      token         = state.push('text', '', 0);
      token.content = state.md.normalizeLinkText(url);

      token         = state.push('link_close', 'a', -1);
      token.markup  = 'autolink';
      token.info    = 'auto';
    }

    state.pos += emailMatch[0].length;
    return true;
  }

  return false;
};


/***/ }),

/***/ 483:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Parse backticks



module.exports = function backtick(state, silent) {
  var start, max, marker, matchStart, matchEnd, token,
      pos = state.pos,
      ch = state.src.charCodeAt(pos);

  if (ch !== 0x60/* ` */) { return false; }

  start = pos;
  pos++;
  max = state.posMax;

  while (pos < max && state.src.charCodeAt(pos) === 0x60/* ` */) { pos++; }

  marker = state.src.slice(start, pos);

  matchStart = matchEnd = pos;

  while ((matchStart = state.src.indexOf('`', matchEnd)) !== -1) {
    matchEnd = matchStart + 1;

    while (matchEnd < max && state.src.charCodeAt(matchEnd) === 0x60/* ` */) { matchEnd++; }

    if (matchEnd - matchStart === marker.length) {
      if (!silent) {
        token         = state.push('code_inline', 'code', 0);
        token.markup  = marker;
        token.content = state.src.slice(pos, matchStart)
                                 .replace(/[ \n]+/g, ' ')
                                 .trim();
      }
      state.pos = matchEnd;
      return true;
    }
  }

  if (!silent) { state.pending += marker; }
  state.pos += marker.length;
  return true;
};


/***/ }),

/***/ 484:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// For each opening emphasis-like marker find a matching closing one
//



module.exports = function link_pairs(state) {
  var i, j, lastDelim, currDelim,
      delimiters = state.delimiters,
      max = state.delimiters.length;

  for (i = 0; i < max; i++) {
    lastDelim = delimiters[i];

    if (!lastDelim.close) { continue; }

    j = i - lastDelim.jump - 1;

    while (j >= 0) {
      currDelim = delimiters[j];

      if (currDelim.open &&
          currDelim.marker === lastDelim.marker &&
          currDelim.end < 0 &&
          currDelim.level === lastDelim.level) {

        // typeofs are for backward compatibility with plugins
        var odd_match = (currDelim.close || lastDelim.open) &&
                        typeof currDelim.length !== 'undefined' &&
                        typeof lastDelim.length !== 'undefined' &&
                        (currDelim.length + lastDelim.length) % 3 === 0;

        if (!odd_match) {
          lastDelim.jump = i - j;
          lastDelim.open = false;
          currDelim.end  = i;
          currDelim.jump = 0;
          break;
        }
      }

      j -= currDelim.jump + 1;
    }
  }
};


/***/ }),

/***/ 485:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Process html entity - &#123;, &#xAF;, &quot;, ...



var entities          = __webpack_require__(434);
var has               = __webpack_require__(427).has;
var isValidEntityCode = __webpack_require__(427).isValidEntityCode;
var fromCodePoint     = __webpack_require__(427).fromCodePoint;


var DIGITAL_RE = /^&#((?:x[a-f0-9]{1,8}|[0-9]{1,8}));/i;
var NAMED_RE   = /^&([a-z][a-z0-9]{1,31});/i;


module.exports = function entity(state, silent) {
  var ch, code, match, pos = state.pos, max = state.posMax;

  if (state.src.charCodeAt(pos) !== 0x26/* & */) { return false; }

  if (pos + 1 < max) {
    ch = state.src.charCodeAt(pos + 1);

    if (ch === 0x23 /* # */) {
      match = state.src.slice(pos).match(DIGITAL_RE);
      if (match) {
        if (!silent) {
          code = match[1][0].toLowerCase() === 'x' ? parseInt(match[1].slice(1), 16) : parseInt(match[1], 10);
          state.pending += isValidEntityCode(code) ? fromCodePoint(code) : fromCodePoint(0xFFFD);
        }
        state.pos += match[0].length;
        return true;
      }
    } else {
      match = state.src.slice(pos).match(NAMED_RE);
      if (match) {
        if (has(entities, match[1])) {
          if (!silent) { state.pending += entities[match[1]]; }
          state.pos += match[0].length;
          return true;
        }
      }
    }
  }

  if (!silent) { state.pending += '&'; }
  state.pos++;
  return true;
};


/***/ }),

/***/ 486:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Process escaped chars and hardbreaks



var isSpace = __webpack_require__(427).isSpace;

var ESCAPED = [];

for (var i = 0; i < 256; i++) { ESCAPED.push(0); }

'\\!"#$%&\'()*+,./:;<=>?@[]^_`{|}~-'
  .split('').forEach(function (ch) { ESCAPED[ch.charCodeAt(0)] = 1; });


module.exports = function escape(state, silent) {
  var ch, pos = state.pos, max = state.posMax;

  if (state.src.charCodeAt(pos) !== 0x5C/* \ */) { return false; }

  pos++;

  if (pos < max) {
    ch = state.src.charCodeAt(pos);

    if (ch < 256 && ESCAPED[ch] !== 0) {
      if (!silent) { state.pending += state.src[pos]; }
      state.pos += 2;
      return true;
    }

    if (ch === 0x0A) {
      if (!silent) {
        state.push('hardbreak', 'br', 0);
      }

      pos++;
      // skip leading whitespaces from next line
      while (pos < max) {
        ch = state.src.charCodeAt(pos);
        if (!isSpace(ch)) { break; }
        pos++;
      }

      state.pos = pos;
      return true;
    }
  }

  if (!silent) { state.pending += '\\'; }
  state.pos++;
  return true;
};


/***/ }),

/***/ 487:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Process html tags




var HTML_TAG_RE = __webpack_require__(435).HTML_TAG_RE;


function isLetter(ch) {
  /*eslint no-bitwise:0*/
  var lc = ch | 0x20; // to lower case
  return (lc >= 0x61/* a */) && (lc <= 0x7a/* z */);
}


module.exports = function html_inline(state, silent) {
  var ch, match, max, token,
      pos = state.pos;

  if (!state.md.options.html) { return false; }

  // Check start
  max = state.posMax;
  if (state.src.charCodeAt(pos) !== 0x3C/* < */ ||
      pos + 2 >= max) {
    return false;
  }

  // Quick fail on second char
  ch = state.src.charCodeAt(pos + 1);
  if (ch !== 0x21/* ! */ &&
      ch !== 0x3F/* ? */ &&
      ch !== 0x2F/* / */ &&
      !isLetter(ch)) {
    return false;
  }

  match = state.src.slice(pos).match(HTML_TAG_RE);
  if (!match) { return false; }

  if (!silent) {
    token         = state.push('html_inline', '', 0);
    token.content = state.src.slice(pos, pos + match[0].length);
  }
  state.pos += match[0].length;
  return true;
};


/***/ }),

/***/ 488:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Process ![image](<src> "title")



var normalizeReference   = __webpack_require__(427).normalizeReference;
var isSpace              = __webpack_require__(427).isSpace;


module.exports = function image(state, silent) {
  var attrs,
      code,
      content,
      label,
      labelEnd,
      labelStart,
      pos,
      ref,
      res,
      title,
      token,
      tokens,
      start,
      href = '',
      oldPos = state.pos,
      max = state.posMax;

  if (state.src.charCodeAt(state.pos) !== 0x21/* ! */) { return false; }
  if (state.src.charCodeAt(state.pos + 1) !== 0x5B/* [ */) { return false; }

  labelStart = state.pos + 2;
  labelEnd = state.md.helpers.parseLinkLabel(state, state.pos + 1, false);

  // parser failed to find ']', so it's not a valid link
  if (labelEnd < 0) { return false; }

  pos = labelEnd + 1;
  if (pos < max && state.src.charCodeAt(pos) === 0x28/* ( */) {
    //
    // Inline link
    //

    // [link](  <href>  "title"  )
    //        ^^ skipping these spaces
    pos++;
    for (; pos < max; pos++) {
      code = state.src.charCodeAt(pos);
      if (!isSpace(code) && code !== 0x0A) { break; }
    }
    if (pos >= max) { return false; }

    // [link](  <href>  "title"  )
    //          ^^^^^^ parsing link destination
    start = pos;
    res = state.md.helpers.parseLinkDestination(state.src, pos, state.posMax);
    if (res.ok) {
      href = state.md.normalizeLink(res.str);
      if (state.md.validateLink(href)) {
        pos = res.pos;
      } else {
        href = '';
      }
    }

    // [link](  <href>  "title"  )
    //                ^^ skipping these spaces
    start = pos;
    for (; pos < max; pos++) {
      code = state.src.charCodeAt(pos);
      if (!isSpace(code) && code !== 0x0A) { break; }
    }

    // [link](  <href>  "title"  )
    //                  ^^^^^^^ parsing link title
    res = state.md.helpers.parseLinkTitle(state.src, pos, state.posMax);
    if (pos < max && start !== pos && res.ok) {
      title = res.str;
      pos = res.pos;

      // [link](  <href>  "title"  )
      //                         ^^ skipping these spaces
      for (; pos < max; pos++) {
        code = state.src.charCodeAt(pos);
        if (!isSpace(code) && code !== 0x0A) { break; }
      }
    } else {
      title = '';
    }

    if (pos >= max || state.src.charCodeAt(pos) !== 0x29/* ) */) {
      state.pos = oldPos;
      return false;
    }
    pos++;
  } else {
    //
    // Link reference
    //
    if (typeof state.env.references === 'undefined') { return false; }

    if (pos < max && state.src.charCodeAt(pos) === 0x5B/* [ */) {
      start = pos + 1;
      pos = state.md.helpers.parseLinkLabel(state, pos);
      if (pos >= 0) {
        label = state.src.slice(start, pos++);
      } else {
        pos = labelEnd + 1;
      }
    } else {
      pos = labelEnd + 1;
    }

    // covers label === '' and label === undefined
    // (collapsed reference link and shortcut reference link respectively)
    if (!label) { label = state.src.slice(labelStart, labelEnd); }

    ref = state.env.references[normalizeReference(label)];
    if (!ref) {
      state.pos = oldPos;
      return false;
    }
    href = ref.href;
    title = ref.title;
  }

  //
  // We found the end of the link, and know for a fact it's a valid link;
  // so all that's left to do is to call tokenizer.
  //
  if (!silent) {
    content = state.src.slice(labelStart, labelEnd);

    state.md.inline.parse(
      content,
      state.md,
      state.env,
      tokens = []
    );

    token          = state.push('image', 'img', 0);
    token.attrs    = attrs = [ [ 'src', href ], [ 'alt', '' ] ];
    token.children = tokens;
    token.content  = content;

    if (title) {
      attrs.push([ 'title', title ]);
    }
  }

  state.pos = pos;
  state.posMax = max;
  return true;
};


/***/ }),

/***/ 489:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Process [link](<to> "stuff")



var normalizeReference   = __webpack_require__(427).normalizeReference;
var isSpace              = __webpack_require__(427).isSpace;


module.exports = function link(state, silent) {
  var attrs,
      code,
      label,
      labelEnd,
      labelStart,
      pos,
      res,
      ref,
      title,
      token,
      href = '',
      oldPos = state.pos,
      max = state.posMax,
      start = state.pos,
      parseReference = true;

  if (state.src.charCodeAt(state.pos) !== 0x5B/* [ */) { return false; }

  labelStart = state.pos + 1;
  labelEnd = state.md.helpers.parseLinkLabel(state, state.pos, true);

  // parser failed to find ']', so it's not a valid link
  if (labelEnd < 0) { return false; }

  pos = labelEnd + 1;
  if (pos < max && state.src.charCodeAt(pos) === 0x28/* ( */) {
    //
    // Inline link
    //

    // might have found a valid shortcut link, disable reference parsing
    parseReference = false;

    // [link](  <href>  "title"  )
    //        ^^ skipping these spaces
    pos++;
    for (; pos < max; pos++) {
      code = state.src.charCodeAt(pos);
      if (!isSpace(code) && code !== 0x0A) { break; }
    }
    if (pos >= max) { return false; }

    // [link](  <href>  "title"  )
    //          ^^^^^^ parsing link destination
    start = pos;
    res = state.md.helpers.parseLinkDestination(state.src, pos, state.posMax);
    if (res.ok) {
      href = state.md.normalizeLink(res.str);
      if (state.md.validateLink(href)) {
        pos = res.pos;
      } else {
        href = '';
      }
    }

    // [link](  <href>  "title"  )
    //                ^^ skipping these spaces
    start = pos;
    for (; pos < max; pos++) {
      code = state.src.charCodeAt(pos);
      if (!isSpace(code) && code !== 0x0A) { break; }
    }

    // [link](  <href>  "title"  )
    //                  ^^^^^^^ parsing link title
    res = state.md.helpers.parseLinkTitle(state.src, pos, state.posMax);
    if (pos < max && start !== pos && res.ok) {
      title = res.str;
      pos = res.pos;

      // [link](  <href>  "title"  )
      //                         ^^ skipping these spaces
      for (; pos < max; pos++) {
        code = state.src.charCodeAt(pos);
        if (!isSpace(code) && code !== 0x0A) { break; }
      }
    } else {
      title = '';
    }

    if (pos >= max || state.src.charCodeAt(pos) !== 0x29/* ) */) {
      // parsing a valid shortcut link failed, fallback to reference
      parseReference = true;
    }
    pos++;
  }

  if (parseReference) {
    //
    // Link reference
    //
    if (typeof state.env.references === 'undefined') { return false; }

    if (pos < max && state.src.charCodeAt(pos) === 0x5B/* [ */) {
      start = pos + 1;
      pos = state.md.helpers.parseLinkLabel(state, pos);
      if (pos >= 0) {
        label = state.src.slice(start, pos++);
      } else {
        pos = labelEnd + 1;
      }
    } else {
      pos = labelEnd + 1;
    }

    // covers label === '' and label === undefined
    // (collapsed reference link and shortcut reference link respectively)
    if (!label) { label = state.src.slice(labelStart, labelEnd); }

    ref = state.env.references[normalizeReference(label)];
    if (!ref) {
      state.pos = oldPos;
      return false;
    }
    href = ref.href;
    title = ref.title;
  }

  //
  // We found the end of the link, and know for a fact it's a valid link;
  // so all that's left to do is to call tokenizer.
  //
  if (!silent) {
    state.pos = labelStart;
    state.posMax = labelEnd;

    token        = state.push('link_open', 'a', 1);
    token.attrs  = attrs = [ [ 'href', href ] ];
    if (title) {
      attrs.push([ 'title', title ]);
    }

    state.md.inline.tokenize(state);

    token        = state.push('link_close', 'a', -1);
  }

  state.pos = pos;
  state.posMax = max;
  return true;
};


/***/ }),

/***/ 490:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Proceess '\n'



var isSpace = __webpack_require__(427).isSpace;


module.exports = function newline(state, silent) {
  var pmax, max, pos = state.pos;

  if (state.src.charCodeAt(pos) !== 0x0A/* \n */) { return false; }

  pmax = state.pending.length - 1;
  max = state.posMax;

  // '  \n' -> hardbreak
  // Lookup in pending chars is bad practice! Don't copy to other rules!
  // Pending string is stored in concat mode, indexed lookups will cause
  // convertion to flat mode.
  if (!silent) {
    if (pmax >= 0 && state.pending.charCodeAt(pmax) === 0x20) {
      if (pmax >= 1 && state.pending.charCodeAt(pmax - 1) === 0x20) {
        state.pending = state.pending.replace(/ +$/, '');
        state.push('hardbreak', 'br', 0);
      } else {
        state.pending = state.pending.slice(0, -1);
        state.push('softbreak', 'br', 0);
      }

    } else {
      state.push('softbreak', 'br', 0);
    }
  }

  pos++;

  // skip heading spaces for next line
  while (pos < max && isSpace(state.src.charCodeAt(pos))) { pos++; }

  state.pos = pos;
  return true;
};


/***/ }),

/***/ 491:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Inline parser state




var Token          = __webpack_require__(430);
var isWhiteSpace   = __webpack_require__(427).isWhiteSpace;
var isPunctChar    = __webpack_require__(427).isPunctChar;
var isMdAsciiPunct = __webpack_require__(427).isMdAsciiPunct;


function StateInline(src, md, env, outTokens) {
  this.src = src;
  this.env = env;
  this.md = md;
  this.tokens = outTokens;

  this.pos = 0;
  this.posMax = this.src.length;
  this.level = 0;
  this.pending = '';
  this.pendingLevel = 0;

  this.cache = {};        // Stores { start: end } pairs. Useful for backtrack
                          // optimization of pairs parse (emphasis, strikes).

  this.delimiters = [];   // Emphasis-like delimiters
}


// Flush pending text
//
StateInline.prototype.pushPending = function () {
  var token = new Token('text', '', 0);
  token.content = this.pending;
  token.level = this.pendingLevel;
  this.tokens.push(token);
  this.pending = '';
  return token;
};


// Push new token to "stream".
// If pending text exists - flush it as text token
//
StateInline.prototype.push = function (type, tag, nesting) {
  if (this.pending) {
    this.pushPending();
  }

  var token = new Token(type, tag, nesting);

  if (nesting < 0) { this.level--; }
  token.level = this.level;
  if (nesting > 0) { this.level++; }

  this.pendingLevel = this.level;
  this.tokens.push(token);
  return token;
};


// Scan a sequence of emphasis-like markers, and determine whether
// it can start an emphasis sequence or end an emphasis sequence.
//
//  - start - position to scan from (it should point at a valid marker);
//  - canSplitWord - determine if these markers can be found inside a word
//
StateInline.prototype.scanDelims = function (start, canSplitWord) {
  var pos = start, lastChar, nextChar, count, can_open, can_close,
      isLastWhiteSpace, isLastPunctChar,
      isNextWhiteSpace, isNextPunctChar,
      left_flanking = true,
      right_flanking = true,
      max = this.posMax,
      marker = this.src.charCodeAt(start);

  // treat beginning of the line as a whitespace
  lastChar = start > 0 ? this.src.charCodeAt(start - 1) : 0x20;

  while (pos < max && this.src.charCodeAt(pos) === marker) { pos++; }

  count = pos - start;

  // treat end of the line as a whitespace
  nextChar = pos < max ? this.src.charCodeAt(pos) : 0x20;

  isLastPunctChar = isMdAsciiPunct(lastChar) || isPunctChar(String.fromCharCode(lastChar));
  isNextPunctChar = isMdAsciiPunct(nextChar) || isPunctChar(String.fromCharCode(nextChar));

  isLastWhiteSpace = isWhiteSpace(lastChar);
  isNextWhiteSpace = isWhiteSpace(nextChar);

  if (isNextWhiteSpace) {
    left_flanking = false;
  } else if (isNextPunctChar) {
    if (!(isLastWhiteSpace || isLastPunctChar)) {
      left_flanking = false;
    }
  }

  if (isLastWhiteSpace) {
    right_flanking = false;
  } else if (isLastPunctChar) {
    if (!(isNextWhiteSpace || isNextPunctChar)) {
      right_flanking = false;
    }
  }

  if (!canSplitWord) {
    can_open  = left_flanking  && (!right_flanking || isLastPunctChar);
    can_close = right_flanking && (!left_flanking  || isNextPunctChar);
  } else {
    can_open  = left_flanking;
    can_close = right_flanking;
  }

  return {
    can_open:  can_open,
    can_close: can_close,
    length:    count
  };
};


// re-export Token class to use in block rules
StateInline.prototype.Token = Token;


module.exports = StateInline;


/***/ }),

/***/ 492:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Skip text characters for text token, place those to pending buffer
// and increment current pos




// Rule to skip pure text
// '{}$%@~+=:' reserved for extentions

// !, ", #, $, %, &, ', (, ), *, +, ,, -, ., /, :, ;, <, =, >, ?, @, [, \, ], ^, _, `, {, |, }, or ~

// !!!! Don't confuse with "Markdown ASCII Punctuation" chars
// http://spec.commonmark.org/0.15/#ascii-punctuation-character
function isTerminatorChar(ch) {
  switch (ch) {
    case 0x0A/* \n */:
    case 0x21/* ! */:
    case 0x23/* # */:
    case 0x24/* $ */:
    case 0x25/* % */:
    case 0x26/* & */:
    case 0x2A/* * */:
    case 0x2B/* + */:
    case 0x2D/* - */:
    case 0x3A/* : */:
    case 0x3C/* < */:
    case 0x3D/* = */:
    case 0x3E/* > */:
    case 0x40/* @ */:
    case 0x5B/* [ */:
    case 0x5C/* \ */:
    case 0x5D/* ] */:
    case 0x5E/* ^ */:
    case 0x5F/* _ */:
    case 0x60/* ` */:
    case 0x7B/* { */:
    case 0x7D/* } */:
    case 0x7E/* ~ */:
      return true;
    default:
      return false;
  }
}

module.exports = function text(state, silent) {
  var pos = state.pos;

  while (pos < state.posMax && !isTerminatorChar(state.src.charCodeAt(pos))) {
    pos++;
  }

  if (pos === state.pos) { return false; }

  if (!silent) { state.pending += state.src.slice(state.pos, pos); }

  state.pos = pos;

  return true;
};

// Alternative implementation, for memory.
//
// It costs 10% of performance, but allows extend terminators list, if place it
// to `ParcerInline` property. Probably, will switch to it sometime, such
// flexibility required.

/*
var TERMINATOR_RE = /[\n!#$%&*+\-:<=>@[\\\]^_`{}~]/;

module.exports = function text(state, silent) {
  var pos = state.pos,
      idx = state.src.slice(pos).search(TERMINATOR_RE);

  // first char is terminator -> empty text
  if (idx === 0) { return false; }

  // no terminator -> text till end of string
  if (idx < 0) {
    if (!silent) { state.pending += state.src.slice(pos); }
    state.pos = state.src.length;
    return true;
  }

  if (!silent) { state.pending += state.src.slice(pos, pos + idx); }

  state.pos += idx;

  return true;
};*/


/***/ }),

/***/ 493:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Merge adjacent text nodes into one, and re-calculate all token levels
//



module.exports = function text_collapse(state) {
  var curr, last,
      level = 0,
      tokens = state.tokens,
      max = state.tokens.length;

  for (curr = last = 0; curr < max; curr++) {
    // re-calculate levels
    level += tokens[curr].nesting;
    tokens[curr].level = level;

    if (tokens[curr].type === 'text' &&
        curr + 1 < max &&
        tokens[curr + 1].type === 'text') {

      // collapse two adjacent text nodes
      tokens[curr + 1].content = tokens[curr].content + tokens[curr + 1].content;
    } else {
      if (curr !== last) { tokens[last] = tokens[curr]; }

      last++;
    }
  }

  if (curr !== last) {
    tokens.length = last;
  }
};


/***/ }),

/***/ 494:
/***/ (function(module, exports, __webpack_require__) {

"use strict";




/* eslint-disable no-bitwise */

var decodeCache = {};

function getDecodeCache(exclude) {
  var i, ch, cache = decodeCache[exclude];
  if (cache) { return cache; }

  cache = decodeCache[exclude] = [];

  for (i = 0; i < 128; i++) {
    ch = String.fromCharCode(i);
    cache.push(ch);
  }

  for (i = 0; i < exclude.length; i++) {
    ch = exclude.charCodeAt(i);
    cache[ch] = '%' + ('0' + ch.toString(16).toUpperCase()).slice(-2);
  }

  return cache;
}


// Decode percent-encoded string.
//
function decode(string, exclude) {
  var cache;

  if (typeof exclude !== 'string') {
    exclude = decode.defaultChars;
  }

  cache = getDecodeCache(exclude);

  return string.replace(/(%[a-f0-9]{2})+/gi, function(seq) {
    var i, l, b1, b2, b3, b4, chr,
        result = '';

    for (i = 0, l = seq.length; i < l; i += 3) {
      b1 = parseInt(seq.slice(i + 1, i + 3), 16);

      if (b1 < 0x80) {
        result += cache[b1];
        continue;
      }

      if ((b1 & 0xE0) === 0xC0 && (i + 3 < l)) {
        // 110xxxxx 10xxxxxx
        b2 = parseInt(seq.slice(i + 4, i + 6), 16);

        if ((b2 & 0xC0) === 0x80) {
          chr = ((b1 << 6) & 0x7C0) | (b2 & 0x3F);

          if (chr < 0x80) {
            result += '\ufffd\ufffd';
          } else {
            result += String.fromCharCode(chr);
          }

          i += 3;
          continue;
        }
      }

      if ((b1 & 0xF0) === 0xE0 && (i + 6 < l)) {
        // 1110xxxx 10xxxxxx 10xxxxxx
        b2 = parseInt(seq.slice(i + 4, i + 6), 16);
        b3 = parseInt(seq.slice(i + 7, i + 9), 16);

        if ((b2 & 0xC0) === 0x80 && (b3 & 0xC0) === 0x80) {
          chr = ((b1 << 12) & 0xF000) | ((b2 << 6) & 0xFC0) | (b3 & 0x3F);

          if (chr < 0x800 || (chr >= 0xD800 && chr <= 0xDFFF)) {
            result += '\ufffd\ufffd\ufffd';
          } else {
            result += String.fromCharCode(chr);
          }

          i += 6;
          continue;
        }
      }

      if ((b1 & 0xF8) === 0xF0 && (i + 9 < l)) {
        // 111110xx 10xxxxxx 10xxxxxx 10xxxxxx
        b2 = parseInt(seq.slice(i + 4, i + 6), 16);
        b3 = parseInt(seq.slice(i + 7, i + 9), 16);
        b4 = parseInt(seq.slice(i + 10, i + 12), 16);

        if ((b2 & 0xC0) === 0x80 && (b3 & 0xC0) === 0x80 && (b4 & 0xC0) === 0x80) {
          chr = ((b1 << 18) & 0x1C0000) | ((b2 << 12) & 0x3F000) | ((b3 << 6) & 0xFC0) | (b4 & 0x3F);

          if (chr < 0x10000 || chr > 0x10FFFF) {
            result += '\ufffd\ufffd\ufffd\ufffd';
          } else {
            chr -= 0x10000;
            result += String.fromCharCode(0xD800 + (chr >> 10), 0xDC00 + (chr & 0x3FF));
          }

          i += 9;
          continue;
        }
      }

      result += '\ufffd';
    }

    return result;
  });
}


decode.defaultChars   = ';/?:@&=+$,#';
decode.componentChars = '';


module.exports = decode;


/***/ }),

/***/ 495:
/***/ (function(module, exports, __webpack_require__) {

"use strict";




var encodeCache = {};


// Create a lookup array where anything but characters in `chars` string
// and alphanumeric chars is percent-encoded.
//
function getEncodeCache(exclude) {
  var i, ch, cache = encodeCache[exclude];
  if (cache) { return cache; }

  cache = encodeCache[exclude] = [];

  for (i = 0; i < 128; i++) {
    ch = String.fromCharCode(i);

    if (/^[0-9a-z]$/i.test(ch)) {
      // always allow unencoded alphanumeric characters
      cache.push(ch);
    } else {
      cache.push('%' + ('0' + i.toString(16).toUpperCase()).slice(-2));
    }
  }

  for (i = 0; i < exclude.length; i++) {
    cache[exclude.charCodeAt(i)] = exclude[i];
  }

  return cache;
}


// Encode unsafe characters with percent-encoding, skipping already
// encoded sequences.
//
//  - string       - string to encode
//  - exclude      - list of characters to ignore (in addition to a-zA-Z0-9)
//  - keepEscaped  - don't encode '%' in a correct escape sequence (default: true)
//
function encode(string, exclude, keepEscaped) {
  var i, l, code, nextCode, cache,
      result = '';

  if (typeof exclude !== 'string') {
    // encode(string, keepEscaped)
    keepEscaped  = exclude;
    exclude = encode.defaultChars;
  }

  if (typeof keepEscaped === 'undefined') {
    keepEscaped = true;
  }

  cache = getEncodeCache(exclude);

  for (i = 0, l = string.length; i < l; i++) {
    code = string.charCodeAt(i);

    if (keepEscaped && code === 0x25 /* % */ && i + 2 < l) {
      if (/^[0-9a-f]{2}$/i.test(string.slice(i + 1, i + 3))) {
        result += string.slice(i, i + 3);
        i += 2;
        continue;
      }
    }

    if (code < 128) {
      result += cache[code];
      continue;
    }

    if (code >= 0xD800 && code <= 0xDFFF) {
      if (code >= 0xD800 && code <= 0xDBFF && i + 1 < l) {
        nextCode = string.charCodeAt(i + 1);
        if (nextCode >= 0xDC00 && nextCode <= 0xDFFF) {
          result += encodeURIComponent(string[i] + string[i + 1]);
          i++;
          continue;
        }
      }
      result += '%EF%BF%BD';
      continue;
    }

    result += encodeURIComponent(string[i]);
  }

  return result;
}

encode.defaultChars   = ";/?:@&=+$,-_.!~*'()#";
encode.componentChars = "-_.!~*'()";


module.exports = encode;


/***/ }),

/***/ 496:
/***/ (function(module, exports, __webpack_require__) {

"use strict";




module.exports = function format(url) {
  var result = '';

  result += url.protocol || '';
  result += url.slashes ? '//' : '';
  result += url.auth ? url.auth + '@' : '';

  if (url.hostname && url.hostname.indexOf(':') !== -1) {
    // ipv6 address
    result += '[' + url.hostname + ']';
  } else {
    result += url.hostname || '';
  }

  result += url.port ? ':' + url.port : '';
  result += url.pathname || '';
  result += url.search || '';
  result += url.hash || '';

  return result;
};


/***/ }),

/***/ 497:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



//
// Changes from joyent/node:
//
// 1. No leading slash in paths,
//    e.g. in `url.parse('http://foo?bar')` pathname is ``, not `/`
//
// 2. Backslashes are not replaced with slashes,
//    so `http:\\example.org\` is treated like a relative path
//
// 3. Trailing colon is treated like a part of the path,
//    i.e. in `http://example.org:foo` pathname is `:foo`
//
// 4. Nothing is URL-encoded in the resulting object,
//    (in joyent/node some chars in auth and paths are encoded)
//
// 5. `url.parse()` does not have `parseQueryString` argument
//
// 6. Removed extraneous result properties: `host`, `path`, `query`, etc.,
//    which can be constructed using other parts of the url.
//


function Url() {
  this.protocol = null;
  this.slashes = null;
  this.auth = null;
  this.port = null;
  this.hostname = null;
  this.hash = null;
  this.search = null;
  this.pathname = null;
}

// Reference: RFC 3986, RFC 1808, RFC 2396

// define these here so at least they only have to be
// compiled once on the first module load.
var protocolPattern = /^([a-z0-9.+-]+:)/i,
    portPattern = /:[0-9]*$/,

    // Special case for a simple path URL
    simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,

    // RFC 2396: characters reserved for delimiting URLs.
    // We actually just auto-escape these.
    delims = [ '<', '>', '"', '`', ' ', '\r', '\n', '\t' ],

    // RFC 2396: characters not allowed for various reasons.
    unwise = [ '{', '}', '|', '\\', '^', '`' ].concat(delims),

    // Allowed by RFCs, but cause of XSS attacks.  Always escape these.
    autoEscape = [ '\'' ].concat(unwise),
    // Characters that are never ever allowed in a hostname.
    // Note that any invalid chars are also handled, but these
    // are the ones that are *expected* to be seen, so we fast-path
    // them.
    nonHostChars = [ '%', '/', '?', ';', '#' ].concat(autoEscape),
    hostEndingChars = [ '/', '?', '#' ],
    hostnameMaxLen = 255,
    hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/,
    hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
    // protocols that can allow "unsafe" and "unwise" chars.
    /* eslint-disable no-script-url */
    // protocols that never have a hostname.
    hostlessProtocol = {
      'javascript': true,
      'javascript:': true
    },
    // protocols that always contain a // bit.
    slashedProtocol = {
      'http': true,
      'https': true,
      'ftp': true,
      'gopher': true,
      'file': true,
      'http:': true,
      'https:': true,
      'ftp:': true,
      'gopher:': true,
      'file:': true
    };
    /* eslint-enable no-script-url */

function urlParse(url, slashesDenoteHost) {
  if (url && url instanceof Url) { return url; }

  var u = new Url();
  u.parse(url, slashesDenoteHost);
  return u;
}

Url.prototype.parse = function(url, slashesDenoteHost) {
  var i, l, lowerProto, hec, slashes,
      rest = url;

  // trim before proceeding.
  // This is to support parse stuff like "  http://foo.com  \n"
  rest = rest.trim();

  if (!slashesDenoteHost && url.split('#').length === 1) {
    // Try fast path regexp
    var simplePath = simplePathPattern.exec(rest);
    if (simplePath) {
      this.pathname = simplePath[1];
      if (simplePath[2]) {
        this.search = simplePath[2];
      }
      return this;
    }
  }

  var proto = protocolPattern.exec(rest);
  if (proto) {
    proto = proto[0];
    lowerProto = proto.toLowerCase();
    this.protocol = proto;
    rest = rest.substr(proto.length);
  }

  // figure out if it's got a host
  // user@server is *always* interpreted as a hostname, and url
  // resolution will treat //foo/bar as host=foo,path=bar because that's
  // how the browser resolves relative URLs.
  if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
    slashes = rest.substr(0, 2) === '//';
    if (slashes && !(proto && hostlessProtocol[proto])) {
      rest = rest.substr(2);
      this.slashes = true;
    }
  }

  if (!hostlessProtocol[proto] &&
      (slashes || (proto && !slashedProtocol[proto]))) {

    // there's a hostname.
    // the first instance of /, ?, ;, or # ends the host.
    //
    // If there is an @ in the hostname, then non-host chars *are* allowed
    // to the left of the last @ sign, unless some host-ending character
    // comes *before* the @-sign.
    // URLs are obnoxious.
    //
    // ex:
    // http://a@b@c/ => user:a@b host:c
    // http://a@b?@c => user:a host:c path:/?@c

    // v0.12 TODO(isaacs): This is not quite how Chrome does things.
    // Review our test case against browsers more comprehensively.

    // find the first instance of any hostEndingChars
    var hostEnd = -1;
    for (i = 0; i < hostEndingChars.length; i++) {
      hec = rest.indexOf(hostEndingChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd)) {
        hostEnd = hec;
      }
    }

    // at this point, either we have an explicit point where the
    // auth portion cannot go past, or the last @ char is the decider.
    var auth, atSign;
    if (hostEnd === -1) {
      // atSign can be anywhere.
      atSign = rest.lastIndexOf('@');
    } else {
      // atSign must be in auth portion.
      // http://a@b/c@d => host:b auth:a path:/c@d
      atSign = rest.lastIndexOf('@', hostEnd);
    }

    // Now we have a portion which is definitely the auth.
    // Pull that off.
    if (atSign !== -1) {
      auth = rest.slice(0, atSign);
      rest = rest.slice(atSign + 1);
      this.auth = auth;
    }

    // the host is the remaining to the left of the first non-host char
    hostEnd = -1;
    for (i = 0; i < nonHostChars.length; i++) {
      hec = rest.indexOf(nonHostChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd)) {
        hostEnd = hec;
      }
    }
    // if we still have not hit it, then the entire thing is a host.
    if (hostEnd === -1) {
      hostEnd = rest.length;
    }

    if (rest[hostEnd - 1] === ':') { hostEnd--; }
    var host = rest.slice(0, hostEnd);
    rest = rest.slice(hostEnd);

    // pull out port.
    this.parseHost(host);

    // we've indicated that there is a hostname,
    // so even if it's empty, it has to be present.
    this.hostname = this.hostname || '';

    // if hostname begins with [ and ends with ]
    // assume that it's an IPv6 address.
    var ipv6Hostname = this.hostname[0] === '[' &&
        this.hostname[this.hostname.length - 1] === ']';

    // validate a little.
    if (!ipv6Hostname) {
      var hostparts = this.hostname.split(/\./);
      for (i = 0, l = hostparts.length; i < l; i++) {
        var part = hostparts[i];
        if (!part) { continue; }
        if (!part.match(hostnamePartPattern)) {
          var newpart = '';
          for (var j = 0, k = part.length; j < k; j++) {
            if (part.charCodeAt(j) > 127) {
              // we replace non-ASCII char with a temporary placeholder
              // we need this to make sure size of hostname is not
              // broken by replacing non-ASCII by nothing
              newpart += 'x';
            } else {
              newpart += part[j];
            }
          }
          // we test again with ASCII char only
          if (!newpart.match(hostnamePartPattern)) {
            var validParts = hostparts.slice(0, i);
            var notHost = hostparts.slice(i + 1);
            var bit = part.match(hostnamePartStart);
            if (bit) {
              validParts.push(bit[1]);
              notHost.unshift(bit[2]);
            }
            if (notHost.length) {
              rest = notHost.join('.') + rest;
            }
            this.hostname = validParts.join('.');
            break;
          }
        }
      }
    }

    if (this.hostname.length > hostnameMaxLen) {
      this.hostname = '';
    }

    // strip [ and ] from the hostname
    // the host field still retains them, though
    if (ipv6Hostname) {
      this.hostname = this.hostname.substr(1, this.hostname.length - 2);
    }
  }

  // chop off from the tail first.
  var hash = rest.indexOf('#');
  if (hash !== -1) {
    // got a fragment string.
    this.hash = rest.substr(hash);
    rest = rest.slice(0, hash);
  }
  var qm = rest.indexOf('?');
  if (qm !== -1) {
    this.search = rest.substr(qm);
    rest = rest.slice(0, qm);
  }
  if (rest) { this.pathname = rest; }
  if (slashedProtocol[lowerProto] &&
      this.hostname && !this.pathname) {
    this.pathname = '';
  }

  return this;
};

Url.prototype.parseHost = function(host) {
  var port = portPattern.exec(host);
  if (port) {
    port = port[0];
    if (port !== ':') {
      this.port = port.substr(1);
    }
    host = host.substr(0, host.length - port.length);
  }
  if (host) { this.hostname = host; }
};

module.exports = urlParse;


/***/ }),

/***/ 498:
/***/ (function(module, exports) {

module.exports=/[\xAD\u0600-\u0605\u061C\u06DD\u070F\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804\uDCBD|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/

/***/ }),

/***/ 499:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.Any = __webpack_require__(441);
exports.Cc  = __webpack_require__(439);
exports.Cf  = __webpack_require__(498);
exports.P   = __webpack_require__(431);
exports.Z   = __webpack_require__(440);


/***/ }),

/***/ 500:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_Auth__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_markdown_it__ = __webpack_require__(443);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_markdown_it___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_markdown_it__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_markdown_it_replace_link__ = __webpack_require__(503);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_markdown_it_replace_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_markdown_it_replace_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_markdown_it_video__ = __webpack_require__(504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_markdown_it_video___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_markdown_it_video__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_markdown_it_front_matter__ = __webpack_require__(502);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_markdown_it_front_matter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_markdown_it_front_matter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_markdown_it_custom_block__ = __webpack_require__(449);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_markdown_it_custom_block___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_markdown_it_custom_block__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__api__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash_startsWith__ = __webpack_require__(445);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash_startsWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_lodash_startsWith__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash_endsWith__ = __webpack_require__(501);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash_endsWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_lodash_endsWith__);
















var FourCornersLib = __webpack_require__(444);

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'markdown-renderer',
  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_Auth__["a" /* default */]],
  watch: {
    markdownUrl: function markdownUrl(nV) {
      this.loadMarkdown();
    },

    '$route': {
      handler: function handler(nV, oV) {
        console.log('$route');

        this.loadMarkdown();
      },
      deep: true
    }
  },
  mounted: function mounted() {
    this.loadMarkdown();
  },

  props: ['markdownUrl'],
  data: function data() {
    return {
      loading: true,
      renderedMarkdown: 'Loading...',
      frontMatter: {}
    };
  },

  methods: {
    getUrl: function getUrl() {
      if (this.markdownUrl) {
        return this.markdownUrl;
      }
      var url = this.$route.params.url;
      if (!url) {
        return undefined;
      }
      if (__WEBPACK_IMPORTED_MODULE_8_lodash_startsWith___default()(url, 'http') || __WEBPACK_IMPORTED_MODULE_8_lodash_startsWith___default()(url, 'www')) {
        return url;
      } else {
        if (!(this.$store.getters.course && this.$store.getters.course.baseUri)) {
          return '';
        } else {
          return '' + this.$store.getters.course.baseUri + url;
        }
      }
    },
    loadMarkdown: function loadMarkdown() {
      var _this = this;

      this.loading = true;

      var url = this.getUrl();
      if (!url) return;

      __WEBPACK_IMPORTED_MODULE_7__api__["a" /* default */].markdown.fetchMarkdown(url, function (response) {
        _this.renderedMarkdown = response;
        _this.loading = false;
        _this.renderMarkdown();
      }, function (response) {
        _this.$log.error(response);
        _this.$log.info('Failed to fetch markdown');
        _this.renderedMarkdown = '';
      });
    },
    renderMarkdown: function renderMarkdown() {

      this.$log.info('Rendering markdown');

      var res = __WEBPACK_IMPORTED_MODULE_6_vue__["a" /* default */].compile(this.rawMarkdown);

      var parent = this;
      var RenderedMarkdown = new __WEBPACK_IMPORTED_MODULE_6_vue__["a" /* default */]({
        name: 'rendered-markdown',
        parent: this,
        data: function data() {
          return {
            fourcornersLink: '',
            submitting: false,
            submitted: false
          };
        },

        computed: {
          contentUrl: function contentUrl() {
            return window.location.protocol + '//' + window.location.host + '/#/submission/' + parent.theClass + '/' + parent.theContent;
          }
        },
        methods: {
          goToLink: function goToLink(href) {
            this.$router.push(href.replace('/#/markdown', '/markdown'));
          }
        },
        render: res.render,
        staticRenderFns: res.staticRenderFns
      }).$mount();

      if (typeof this.$refs.renderedmarkdown !== 'undefined') {
        this.$refs.renderedmarkdown.replaceChild(RenderedMarkdown.$el, this.$refs.renderedmarkdown.childNodes[0]);
      }

      this.$nextTick(function () {
        FourCornersLib.init();
      });
    }
  },
  computed: {
    rawMarkdown: function rawMarkdown() {
      var _this2 = this;

      var parent = this;

      var md = new __WEBPACK_IMPORTED_MODULE_1_markdown_it___default.a({
        html: true,
        linkify: true,
        replaceLink: function replaceLink(link, env) {

          if (__WEBPACK_IMPORTED_MODULE_8_lodash_startsWith___default()(link, 'http') || __WEBPACK_IMPORTED_MODULE_8_lodash_startsWith___default()(link, 'www')) {
            return link;
          }
          if (__WEBPACK_IMPORTED_MODULE_9_lodash_endsWith___default()(link, '.md')) {
            var url = _this2.getUrl();
            var currentUrl = url.substring(0, url.lastIndexOf('/') + 1);
            return '/#/markdown/' + encodeURIComponent(link);
          }

          if (!_this2.$store.getters.course) {
            return '';
          } else {
            return '' + _this2.$store.getters.course.baseUri + link;
          }
        }
      }).use(__WEBPACK_IMPORTED_MODULE_2_markdown_it_replace_link___default.a).use(__WEBPACK_IMPORTED_MODULE_3_markdown_it_video___default.a, {
        youtube: {
          width: 640,
          height: 390
        },
        vimeo: {
          width: 500,
          height: 281
        }
      }).use(__WEBPACK_IMPORTED_MODULE_4_markdown_it_front_matter___default.a, function (fm) {
        _this2.frontMatter = fm;
      }).use(__WEBPACK_IMPORTED_MODULE_5_markdown_it_custom_block___default.a, {
        bio: function bio(arg) {
          if (!arg) {
            return 'loading...';
          }

          var parts = arg.split('|');

          var caption = parts[0].trim();
          var image = parts[1].trim();

          if (parts.length > 2) {
            var bio = parts[2].trim();
            var link = parts[3].trim();

            return '\n              <div class="md-bio md-bio--with-bio">\n                <img class="md-bio--image" src="' + image + '" />\n                <div class="md-bio--content">\n                  <h5 class="md-bio--caption">' + caption + '</h5>\n                  <p class="md-bio--bio">' + bio + '</p>\n                  <a href="' + link + '" target="_blank" class="md-bio--link">' + link + '</a>\n                </div>\n              </div>\n              ';
          } else {
            return '\n              <div class="md-bio">\n                <img class="md-bio--image" src="' + image + '" />\n                <h5 class="md-bio--caption">' + caption + '</h5>\n              </div>\n              ';
          }
        }
      });

      md.renderer.rules.link_open = function (tokens, idx) {
        var href = md.utils.escapeHtml(tokens[idx].attrs[0][1]);
        if (__WEBPACK_IMPORTED_MODULE_8_lodash_startsWith___default()(href, 'http') || __WEBPACK_IMPORTED_MODULE_8_lodash_startsWith___default()(href, 'www')) {
          return '<a href="' + href + '" target="_blank">';
        } else {
          return '<a v-on:click="goToLink(\'' + href + '\')">';
        }
      };

      return '<div>' + md.render(this.renderedMarkdown) + '</div>';
    }
  }
});

/***/ }),

/***/ 501:
/***/ (function(module, exports, __webpack_require__) {

var baseClamp = __webpack_require__(432),
    baseToString = __webpack_require__(134),
    toInteger = __webpack_require__(66),
    toString = __webpack_require__(135);

/**
 * Checks if `string` ends with the given target string.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to inspect.
 * @param {string} [target] The string to search for.
 * @param {number} [position=string.length] The position to search up to.
 * @returns {boolean} Returns `true` if `string` ends with `target`,
 *  else `false`.
 * @example
 *
 * _.endsWith('abc', 'c');
 * // => true
 *
 * _.endsWith('abc', 'b');
 * // => false
 *
 * _.endsWith('abc', 'b', 2);
 * // => true
 */
function endsWith(string, target, position) {
  string = toString(string);
  target = baseToString(target);

  var length = string.length;
  position = position === undefined
    ? length
    : baseClamp(toInteger(position), 0, length);

  var end = position;
  position -= target.length;
  return position >= 0 && string.slice(position, end) == target;
}

module.exports = endsWith;


/***/ }),

/***/ 502:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Process front matter and pass to cb
//


module.exports = function front_matter_plugin(md, cb) {
  var min_markers = 3,
      marker_str  = '-',
      marker_char = marker_str.charCodeAt(0),
      marker_len  = marker_str.length

  function frontMatter(state, startLine, endLine, silent) {
    var pos, nextLine, marker_count, markup, token,
        old_parent, old_line_max, start_content,
        auto_closed = false,
        start = state.bMarks[startLine] + state.tShift[startLine],
        max = state.eMarks[startLine];

    // Check out the first character of the first line quickly,
    // this should filter out non-front matter
    //
    if (startLine !== 0 || marker_char !== state.src.charCodeAt(0)) { return false; }

    // Check out the rest of the marker string
    //
    for (pos = start + 1; pos <= max; pos++) { // while pos <= 3
      if (marker_str[(pos - start) % marker_len] !== state.src[pos]) {
        start_content = pos + 1
        break;
      }
    }

    marker_count = Math.floor((pos - start) / marker_len);

    if (marker_count < min_markers) { return false; }
    pos -= (pos - start) % marker_len;

    // Since start is found, we can report success here in validation mode
    //
    if (silent) { return true; }

    // Search for the end of the block
    //
    nextLine = startLine;

    for (;;) {
      nextLine++;
      if (nextLine >= endLine) {
        // unclosed block should be autoclosed by end of document.
        // also block seems to be autoclosed by end of parent
        break;
      }

      start = state.bMarks[nextLine] + state.tShift[nextLine];
      max = state.eMarks[nextLine];

      if (start < max && state.sCount[nextLine] < state.blkIndent) {
        // non-empty line with negative indent should stop the list:
        // - ```
        //  test
        break;
      }

      if (marker_char !== state.src.charCodeAt(start)) { continue; }

      if (state.sCount[nextLine] - state.blkIndent >= 4) {
        // closing fence should be indented less than 4 spaces
        continue;
      }

      for (pos = start + 1; pos <= max; pos++) {
        if (marker_str[(pos - start) % marker_len] !== state.src[pos]) {
          break;
        }
      }

      // closing code fence must be at least as long as the opening one
      if (Math.floor((pos - start) / marker_len) < marker_count) { continue; }

      // make sure tail has spaces only
      pos -= (pos - start) % marker_len;
      pos = state.skipSpaces(pos);

      if (pos < max) { continue; }

      // found!
      auto_closed = true;
      break;
    }

    old_parent = state.parentType;
    old_line_max = state.lineMax;
    state.parentType = 'container';

    // this will prevent lazy continuations from ever going past our end marker
    state.lineMax = nextLine;

    token        = state.push('front_matter', null, 0);
    token.hidden = true;
    token.markup = state.src.slice(startLine, pos)
    token.block  = true;
    token.map    = [ startLine, pos ];

    state.parentType = old_parent;
    state.lineMax = old_line_max;
    state.line = nextLine + (auto_closed ? 1 : 0);

    cb(state.src.slice(start_content, start - 1))

    return true;
  }

  md.block.ruler.before('table', 'front_matter', frontMatter, {
    alt: [ 'paragraph', 'reference', 'blockquote', 'list' ]
  });
};

/***/ }),

/***/ 503:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function replaceAttr(token, attrName, replace, env) {
    token.attrs.forEach(function (attr) {
        if (attr[0] === attrName) {
            attr[1] = replace(attr[1], env, token);
        }
    });
}

module.exports = function (md) {
    md.core.ruler.after(
        'inline',
        'replace-link',
        function (state) {
            var replace = md.options.replaceLink;
            if (typeof replace === 'function') {
                state.tokens.forEach(function (blockToken) {
                    if (blockToken.type === 'inline' && blockToken.children) {
                        blockToken.children.forEach(function (token) {
                            var type = token.type;
                            if (type === 'link_open') {
                                replaceAttr(token, 'href', replace, state.env);
                            } else if (type === 'image') {
                                replaceAttr(token, 'src', replace, state.env);
                            }
                        }); 
                    }
                }); 
            }
            return false;
        }
    );
};

/***/ }),

/***/ 504:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Process @[youtube](youtubeVideoID)
// Process @[vimeo](vimeoVideoID)
// Process @[vine](vineVideoID)
// Process @[prezi](preziID)




var yt_regex = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
function youtube_parser (url) {
  var match = url.match(yt_regex);
  return match && match[7].length === 11 ? match[7] : url;
}

/*eslint-disable max-len */
var vimeo_regex = /https?:\/\/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|)(\d+)(?:$|\/|\?)/;
/*eslint-enable max-len */
function vimeo_parser (url) {
  var match = url.match(vimeo_regex);
  return match && typeof match[3] === 'string' ? match[3] : url;
}

var vine_regex = /^http(?:s?):\/\/(?:www\.)?vine\.co\/v\/([a-zA-Z0-9]{1,13}).*/;
function vine_parser (url) {
  var match = url.match(vine_regex);
  return match && match[1].length === 11 ? match[1] : url;
}

var prezi_regex = /^https:\/\/prezi.com\/(.[^/]+)/;
function prezi_parser(url) {
  var match = url.match(prezi_regex);
  return match ? match[1] : url;
}

var EMBED_REGEX = /@\[([a-zA-Z].+)\]\([\s]*(.*?)[\s]*[\)]/im;

function video_embed(md, options) {
  function video_return(state, silent) {
    var serviceEnd,
      serviceStart,
      token,
      oldPos = state.pos;

    if (state.src.charCodeAt(oldPos) !== 0x40/* @ */ ||
        state.src.charCodeAt(oldPos + 1) !== 0x5B/* [ */) {
      return false;
    }

    var match = EMBED_REGEX.exec(state.src);

    if (!match || match.length < 3) {
      return false;
    }

    var service = match[1];
    var videoID = match[2];
    var serviceLower = service.toLowerCase();

    if (serviceLower === 'youtube') {
      videoID = youtube_parser(videoID);
    } else if (serviceLower === 'vimeo') {
      videoID = vimeo_parser(videoID);
    } else if (serviceLower === 'vine') {
      videoID = vine_parser(videoID);
    } else if (serviceLower === 'prezi') {
      videoID = prezi_parser(videoID);
    } else if (!options[serviceLower]) {
      return false;
    }

    // If the videoID field is empty, regex currently make it the close parenthesis.
    if (videoID === ')') {
      videoID = '';
    }

    serviceStart = oldPos + 2;
    serviceEnd = md.helpers.parseLinkLabel(state, oldPos + 1, false);

    //
    // We found the end of the link, and know for a fact it's a valid link;
    // so all that's left to do is to call tokenizer.
    //
    if (!silent) {
      state.pos = serviceStart;
      state.posMax = serviceEnd;
      state.service = state.src.slice(serviceStart, serviceEnd);
      var newState = new state.md.inline.State(service, state.md, state.env, []);
      newState.md.inline.tokenize(newState);

      token = state.push('video', '');
      token.videoID = videoID;
      token.service = service;
      token.level = state.level;
    }

    state.pos = state.pos + state.src.indexOf(')', state.pos);
    state.posMax = state.tokens.length;
    return true;
  }

  return video_return;
}

function video_url(service, videoID, options) {
  switch (service) {
    case 'youtube':
      return '//www.youtube.com/embed/' + videoID;
    case 'vimeo':
      return '//player.vimeo.com/video/' + videoID;
    case 'vine':
      return '//vine.co/v/' + videoID + '/embed/' + options.vine.embed;
    case 'prezi':
      return 'https://prezi.com/embed/' + videoID +
      '/?bgcolor=ffffff&amp;lock_to_path=0&amp;autoplay=0&amp;autohide_ctrls=0&amp;' +
      'landing_data=bHVZZmNaNDBIWnNjdEVENDRhZDFNZGNIUE43MHdLNWpsdFJLb2ZHanI5N1lQVHkxSHFxazZ0UUNCRHloSXZROHh3PT0&amp;' +
      'landing_sign=1kD6c0N6aYpMUS0wxnQjxzSqZlEB8qNFdxtdjYhwSuI';
  }
}

function tokenize_video(md, options) {
  function tokenize_return(tokens, idx) {
    var videoID = md.utils.escapeHtml(tokens[idx].videoID);
    var service = md.utils.escapeHtml(tokens[idx].service).toLowerCase();
    return videoID === '' ? '' :
      '<div class="embed-responsive embed-responsive-16by9"><iframe class="embed-responsive-item" id="' +
      service + 'player" type="text/html" width="' + (options[service].width) +
      '" height="' + (options[service].height) +
      '" src="' + options.url(service, videoID, options) +
      '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div>';
  }

  return tokenize_return;
}

var defaults = {
  url: video_url,
  youtube: { width: 640, height: 390 },
  vimeo: { width: 500, height: 281 },
  vine: { width: 600, height: 600, embed: 'simple' },
  prezi: { width: 550, height: 400 }
};

module.exports = function video_plugin(md, options) {
  if (options) {
    Object.keys(defaults).forEach(function(key) {
      if (typeof options[key] === 'undefined') {
        options[key] = defaults[key];
      }
    });
  } else {
    options = defaults;
  }
  md.renderer.rules.video = tokenize_video(md, options);
  md.inline.ruler.before('emphasis', 'video', video_embed(md, options));
};


/***/ }),

/***/ 505:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(3)(
  /* script */
  __webpack_require__(500),
  /* template */
  __webpack_require__(506),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 506:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "markdown-wrapper"
  }, [_c('div', {
    ref: "renderedmarkdown",
    staticClass: "rendered-markdown"
  }, [_c('p', [_vm._v(_vm._s(_vm.$t('common.loading')))])])])
},staticRenderFns: []}

/***/ }),

/***/ 510:
/***/ (function(module, exports, __webpack_require__) {

var baseOrderBy = __webpack_require__(516),
    isArray = __webpack_require__(5);

/**
 * This method is like `_.sortBy` except that it allows specifying the sort
 * orders of the iteratees to sort by. If `orders` is unspecified, all values
 * are sorted in ascending order. Otherwise, specify an order of "desc" for
 * descending or "asc" for ascending sort order of corresponding values.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Array[]|Function[]|Object[]|string[]} [iteratees=[_.identity]]
 *  The iteratees to sort by.
 * @param {string[]} [orders] The sort orders of `iteratees`.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
 * @returns {Array} Returns the new sorted array.
 * @example
 *
 * var users = [
 *   { 'user': 'fred',   'age': 48 },
 *   { 'user': 'barney', 'age': 34 },
 *   { 'user': 'fred',   'age': 40 },
 *   { 'user': 'barney', 'age': 36 }
 * ];
 *
 * // Sort by `user` in ascending order and by `age` in descending order.
 * _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
 * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
 */
function orderBy(collection, iteratees, orders, guard) {
  if (collection == null) {
    return [];
  }
  if (!isArray(iteratees)) {
    iteratees = iteratees == null ? [] : [iteratees];
  }
  orders = guard ? undefined : orders;
  if (!isArray(orders)) {
    orders = orders == null ? [] : [orders];
  }
  return baseOrderBy(collection, iteratees, orders);
}

module.exports = orderBy;


/***/ }),

/***/ 513:
/***/ (function(module, exports, __webpack_require__) {

var baseEach = __webpack_require__(69),
    isArrayLike = __webpack_require__(26);

/**
 * The base implementation of `_.map` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function baseMap(collection, iteratee) {
  var index = -1,
      result = isArrayLike(collection) ? Array(collection.length) : [];

  baseEach(collection, function(value, key, collection) {
    result[++index] = iteratee(value, key, collection);
  });
  return result;
}

module.exports = baseMap;


/***/ }),

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Icon_vue__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Icon_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_Icon_vue__);


__WEBPACK_IMPORTED_MODULE_0__components_Icon_vue___default.a.register({"arrow-left":{"width":1536,"height":1792,"paths":[{"d":"M1536 896v128q0 53-32.5 90.5t-84.5 37.5h-704l293 294q38 36 38 90t-38 90l-75 76q-37 37-90 37-52 0-91-37l-651-652q-37-37-37-90 0-52 37-91l651-650q38-38 91-38 52 0 90 38l75 74q38 38 38 91t-38 91l-293 293h704q52 0 84.5 37.5t32.5 90.5z"}]}})


/***/ }),

/***/ 516:
/***/ (function(module, exports, __webpack_require__) {

var arrayMap = __webpack_require__(68),
    baseIteratee = __webpack_require__(42),
    baseMap = __webpack_require__(513),
    baseSortBy = __webpack_require__(517),
    baseUnary = __webpack_require__(140),
    compareMultiple = __webpack_require__(519),
    identity = __webpack_require__(67);

/**
 * The base implementation of `_.orderBy` without param guards.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
 * @param {string[]} orders The sort orders of `iteratees`.
 * @returns {Array} Returns the new sorted array.
 */
function baseOrderBy(collection, iteratees, orders) {
  var index = -1;
  iteratees = arrayMap(iteratees.length ? iteratees : [identity], baseUnary(baseIteratee));

  var result = baseMap(collection, function(value, key, collection) {
    var criteria = arrayMap(iteratees, function(iteratee) {
      return iteratee(value);
    });
    return { 'criteria': criteria, 'index': ++index, 'value': value };
  });

  return baseSortBy(result, function(object, other) {
    return compareMultiple(object, other, orders);
  });
}

module.exports = baseOrderBy;


/***/ }),

/***/ 517:
/***/ (function(module, exports) {

/**
 * The base implementation of `_.sortBy` which uses `comparer` to define the
 * sort order of `array` and replaces criteria objects with their corresponding
 * values.
 *
 * @private
 * @param {Array} array The array to sort.
 * @param {Function} comparer The function to define sort order.
 * @returns {Array} Returns `array`.
 */
function baseSortBy(array, comparer) {
  var length = array.length;

  array.sort(comparer);
  while (length--) {
    array[length] = array[length].value;
  }
  return array;
}

module.exports = baseSortBy;


/***/ }),

/***/ 518:
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__(27);

/**
 * Compares values to sort them in ascending order.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {number} Returns the sort order indicator for `value`.
 */
function compareAscending(value, other) {
  if (value !== other) {
    var valIsDefined = value !== undefined,
        valIsNull = value === null,
        valIsReflexive = value === value,
        valIsSymbol = isSymbol(value);

    var othIsDefined = other !== undefined,
        othIsNull = other === null,
        othIsReflexive = other === other,
        othIsSymbol = isSymbol(other);

    if ((!othIsNull && !othIsSymbol && !valIsSymbol && value > other) ||
        (valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol) ||
        (valIsNull && othIsDefined && othIsReflexive) ||
        (!valIsDefined && othIsReflexive) ||
        !valIsReflexive) {
      return 1;
    }
    if ((!valIsNull && !valIsSymbol && !othIsSymbol && value < other) ||
        (othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol) ||
        (othIsNull && valIsDefined && valIsReflexive) ||
        (!othIsDefined && valIsReflexive) ||
        !othIsReflexive) {
      return -1;
    }
  }
  return 0;
}

module.exports = compareAscending;


/***/ }),

/***/ 519:
/***/ (function(module, exports, __webpack_require__) {

var compareAscending = __webpack_require__(518);

/**
 * Used by `_.orderBy` to compare multiple properties of a value to another
 * and stable sort them.
 *
 * If `orders` is unspecified, all values are sorted in ascending order. Otherwise,
 * specify an order of "desc" for descending or "asc" for ascending sort order
 * of corresponding values.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {boolean[]|string[]} orders The order to sort by for each property.
 * @returns {number} Returns the sort order indicator for `object`.
 */
function compareMultiple(object, other, orders) {
  var index = -1,
      objCriteria = object.criteria,
      othCriteria = other.criteria,
      length = objCriteria.length,
      ordersLength = orders.length;

  while (++index < length) {
    var result = compareAscending(objCriteria[index], othCriteria[index]);
    if (result) {
      if (index >= ordersLength) {
        return result;
      }
      var order = orders[index];
      return result * (order == 'desc' ? -1 : 1);
    }
  }
  // Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
  // that causes it, under certain circumstances, to provide the same value for
  // `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
  // for more details.
  //
  // This also ensures a stable sort in V8 and other engines.
  // See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.
  return object.index - other.index;
}

module.exports = compareMultiple;


/***/ }),

/***/ 522:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Icon_vue__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Icon_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_Icon_vue__);


__WEBPACK_IMPORTED_MODULE_0__components_Icon_vue___default.a.register({"times":{"width":1408,"height":1792,"paths":[{"d":"M1298 1322q0 40-28 68l-136 136q-28 28-68 28t-68-28l-294-294-294 294q-28 28-68 28t-68-28l-136-136q-28-28-28-68t28-68l294-294-294-294q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 294 294-294q28-28 68-28t68 28l136 136q28 28 28 68t-28 68l-294 294 294 294q28 28 28 68z"}]}})


/***/ }),

/***/ 529:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(571)

var Component = __webpack_require__(3)(
  /* script */
  __webpack_require__(532),
  /* template */
  __webpack_require__(625),
  /* scopeId */
  "data-v-6499a961",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 532:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_awesome_icons_times__ = __webpack_require__(522);







/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'info-dialogue',
  props: ['dismissable'],
  data: function data() {
    return {
      dismissed: false
    };
  },

  computed: {
    likeCount: function likeCount() {
      return this.count + ' likes';
    }
  },
  methods: {
    dismiss: function dismiss() {
      this.dismissed = true;
    }
  }
});

/***/ }),

/***/ 533:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_awesome_icons_arrow_left__ = __webpack_require__(515);




/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'page-header',
  props: ['title', 'identifier']
});

/***/ }),

/***/ 536:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_orderBy__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_orderBy___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash_orderBy__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_fourcorners_FourCorners__ = __webpack_require__(614);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_fourcorners_FourCorners___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_fourcorners_FourCorners__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_InfoDialogue__ = __webpack_require__(529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_InfoDialogue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__components_InfoDialogue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_vue_awesome_icons_lock__ = __webpack_require__(560);













/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'feedback-view',
  props: ['currentFeedbackId', 'discussion', 'classSlug', 'contentSlug'],
  components: {
    InfoDialogue: __WEBPACK_IMPORTED_MODULE_5__components_InfoDialogue___default.a,
    FourCorners: __WEBPACK_IMPORTED_MODULE_4__components_fourcorners_FourCorners___default.a
  },
  watch: {
    currentFeedbackId: function currentFeedbackId() {
      this.getFeedbackItem();
    },
    feedbackItem: function feedbackItem() {
      this.loading = true;

      this.$emit('update:discussion', []);

      this.getDiscussion();
    }
  },
  data: function data() {
    return {
      navTitle: 'Connected Academy - View Feedback',
      loading: true,
      feedbackItem: undefined,
      comment: ''
    };
  },

  computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_vuex__["b" /* mapGetters */])(['isRegistered', 'user']), {
    isOwner: function isOwner() {
      return this.user && this.user.account === this.feedbackItem.user.account;
    },
    feedbackMessages: function feedbackMessages() {
      return __WEBPACK_IMPORTED_MODULE_3_lodash_orderBy___default()(this.discussion, ['createdAt'], ['asc']);
    },
    encodedContentId: function encodedContentId() {
      if (!this.currentFeedbackId) {
        return undefined;
      } else {
        return this.currentFeedbackId.replace('#', '%23');
      }
    }
  }),
  methods: {
    navigateTo: function navigateTo(location) {
      document.location = location;
    },
    closeSubmission: function closeSubmission() {
      this.$emit('update:currentFeedbackId', undefined);
    },
    removeSubmission: function removeSubmission() {
      var _this = this;

      var postData = {
        id: this.encodedContentId
      };
      __WEBPACK_IMPORTED_MODULE_1__api__["a" /* default */].feedback.removeSubmission(postData, function (response) {
        _this.$log.info('Response from remove submission request');
        _this.$log.info(response);
        _this.$emit('update:currentFeedbackId', undefined);
        _this.$emit('reloadchats');
      }, function (response) {
        _this.$log.error(response);
        _this.$log.info('Failed to remove submission');
      });
    },
    unlockMessage: function unlockMessage(message) {
      var _this2 = this;

      if (!message.canview) {

        this.$store.commit('SHOW_INFO_MODAL', { title: 'Locked', body: 'Please leave feedback on ' + message.fromuser.name + '\'s submission to view their comments on your images', action: this.$t('submission.view_submission') });

        var request = {
          classSlug: this.classSlug,
          contentSlug: this.contentSlug,
          userId: message.fromuser.id.replace('#', '%23')
        };
        __WEBPACK_IMPORTED_MODULE_1__api__["a" /* default */].feedback.getUserSubmissions(request, function (response) {
          _this2.$log.info('Response from user submissions request');
          _this2.$log.info(response);
          var feedbackId = response.body[0].id;
          _this2.$emit('update:currentFeedbackId', feedbackId);
        }, function (response) {
          _this2.$log.error(response);
          _this2.$log.info('Failed to user submissions');
        });
      }
    },
    postFeedbackComment: function postFeedbackComment() {
      var _this3 = this;

      var message = { reply: false, text: this.comment, user: { name: 'You' } };

      var request = { text: this.comment, id: this.encodedContentId };

      __WEBPACK_IMPORTED_MODULE_1__api__["a" /* default */].feedback.postFeedbackMessage(request, function (response) {
        _this3.$log.info('Response from feedback request');
        _this3.$log.info(response);
        _this3.comment = '';
      }, function (response) {
        _this3.$log.error(response);
        _this3.$log.info('Failed to retrieve feedback');
      });
    },
    getDiscussion: function getDiscussion() {
      var _this4 = this;

      var request = { id: this.encodedContentId };

      __WEBPACK_IMPORTED_MODULE_1__api__["a" /* default */].feedback.getDiscussion(request, function (response) {
        _this4.$log.info('Response from feedback request');
        _this4.$log.info(response);
        _this4.$emit('update:discussion', response);

        _this4.loading = false;
      }, function (response) {
        _this4.$log.error(response);
        _this4.$log.info('Failed to retrieve feedback');

        _this4.loading = false;
      });
    },
    getFeedbackItem: function getFeedbackItem() {
      var _this5 = this;

      var request = { id: this.encodedContentId };

      __WEBPACK_IMPORTED_MODULE_1__api__["a" /* default */].feedback.getFeedbackItem(request, function (response) {
        _this5.$log.info('Response from feedback request');
        _this5.$log.info(response);
        _this5.feedbackItem = response;
      }, function (response) {
        _this5.$log.error(response);
        _this5.$log.info('Failed to retrieve feedback');
      });
    }
  }
});

/***/ }),

/***/ 537:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


var FourCornersLib = __webpack_require__(444);

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'four-corners',
  props: ['html'],
  activated: function activated() {
    this.initFourCorners();
  },
  mounted: function mounted() {
    this.initFourCorners();
  },

  watch: {
    'html': {
      handler: function handler(nV, oV) {
        this.initFourCorners();
      },
      deep: true
    }
  },
  methods: {
    initFourCorners: function initFourCorners() {
      this.$nextTick(function () {
        FourCornersLib.init();
      });
    }
  }
});

/***/ }),

/***/ 546:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(412)();
// imports


// module
exports.push([module.i, "body[data-v-1ea69f12],html[data-v-1ea69f12]{font-family:Avenir,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0;padding:0}.hidden[data-v-1ea69f12],[v-cloak][data-v-1ea69f12]{display:none}.pull-left[data-v-1ea69f12]{float:left}.pull-right[data-v-1ea69f12]{float:right}.clearfix[data-v-1ea69f12]{clear:both;float:none}.fa-icon[data-v-1ea69f12]{width:auto;height:1em}.no-margin[data-v-1ea69f12]{margin:0!important}.no-padding[data-v-1ea69f12]{padding:0!important}.background-white[data-v-1ea69f12]{background-color:#fff!important}.main-container[data-v-1ea69f12]{border-radius:4px;margin-top:20px;position:relative}@media (max-width:800px){.main-container[data-v-1ea69f12]{border-radius:0;margin-top:0}}.main-container.main-container-padded[data-v-1ea69f12]{padding:20px}.content-block[data-v-1ea69f12]{border-radius:4px;padding:20px;margin:0 0 20px}@media (max-width:800px){.content-block[data-v-1ea69f12]{border-radius:0}}.content-block.white-block[data-v-1ea69f12]{background-color:#fff}.content-block.padded-block[data-v-1ea69f12]{padding:40px}.content-block.unpadded-block[data-v-1ea69f12]{padding:0}.content-block.header-block[data-v-1ea69f12]{margin-top:20px;overflow:hidden}.fade-enter-active[data-v-1ea69f12],.fade-leave-active[data-v-1ea69f12]{transition:all .3s ease}.fade-enter[data-v-1ea69f12],.fade-leave-to[data-v-1ea69f12]{opacity:0}.particles-js-canvas-el[data-v-1ea69f12]{top:0;bottom:0;left:0;right:0;position:absolute;pointer-events:none;z-index:-1}.rendered-markdown[data-v-1ea69f12]{white-space:normal;word-wrap:break-word}.rendered-markdown h1[data-v-1ea69f12]{margin:0;padding:0;color:#444;margin-bottom:5px}.rendered-markdown a[data-v-1ea69f12],.rendered-markdown h1[data-v-1ea69f12],.rendered-markdown h2[data-v-1ea69f12],.rendered-markdown h3[data-v-1ea69f12],.rendered-markdown h4[data-v-1ea69f12],.rendered-markdown h5[data-v-1ea69f12],.rendered-markdown li[data-v-1ea69f12],.rendered-markdown p[data-v-1ea69f12]{color:#444}.rendered-markdown a[data-v-1ea69f12]:first-child,.rendered-markdown h1[data-v-1ea69f12]:first-child,.rendered-markdown h2[data-v-1ea69f12]:first-child,.rendered-markdown h3[data-v-1ea69f12]:first-child,.rendered-markdown h4[data-v-1ea69f12]:first-child,.rendered-markdown h5[data-v-1ea69f12]:first-child,.rendered-markdown li[data-v-1ea69f12]:first-child,.rendered-markdown p[data-v-1ea69f12]:first-child{margin-top:0}.rendered-markdown h1[data-v-1ea69f12],.rendered-markdown h2[data-v-1ea69f12],.rendered-markdown h3[data-v-1ea69f12],.rendered-markdown h4[data-v-1ea69f12],.rendered-markdown h5[data-v-1ea69f12]{font-weight:300}.rendered-markdown h2[data-v-1ea69f12]{color:#444;font-size:1.3em;font-weight:700}.rendered-markdown p[data-v-1ea69f12]{margin:10px 0}.rendered-markdown a[data-v-1ea69f12]{color:#c6002d!important;text-decoration:underline}.rendered-markdown a[data-v-1ea69f12]:hover{color:#c6002d;cursor:pointer}.rendered-markdown blockquote[data-v-1ea69f12]{border-left:3px solid #c6002d;color:#ccc;margin:30px 20px 30px 0;padding-left:20px;font-style:italic}.rendered-markdown pre[data-v-1ea69f12]{border-radius:6px;background-color:#e9e9e9;max-width:100%;padding:20px;white-space:normal;word-wrap:break-word}.rendered-markdown img[data-v-1ea69f12]{display:inline-block;margin:10px;width:100%;max-width:160px}.rendered-markdown .fc-image>img[data-v-1ea69f12],.rendered-markdown .fc-image img[data-v-1ea69f12],.rendered-markdown img[data-4c][data-v-1ea69f12]{display:block;margin:0;max-width:100%;padding:0;width:100%}.rendered-markdown .md-bio[data-v-1ea69f12]{display:inline-block;min-height:100px;overflow:hidden;padding:10px;position:relative;width:160px}.rendered-markdown .md-bio img.md-bio--image[data-v-1ea69f12]{border-radius:50%;margin:0;padding:0;margin:0 20px;height:120px;width:120px}.rendered-markdown .md-bio .md-bio--content[data-v-1ea69f12]{border-left:1px solid #e9e9e9;padding:10px}.rendered-markdown .md-bio h5.md-bio--caption[data-v-1ea69f12]{margin:0;padding:0;font-size:1em;font-weight:700;height:20px;line-height:20px;margin:5px 0;max-width:160px;overflow:hidden;text-align:center}.rendered-markdown .md-bio.md-bio--with-bio[data-v-1ea69f12]{border-radius:6px;box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:10px;padding-left:100px;max-width:100%;width:100%}.rendered-markdown .md-bio.md-bio--with-bio img.md-bio--image[data-v-1ea69f12]{margin:0;padding:0;position:absolute;top:10px;left:10px;height:80px;width:80px}.rendered-markdown .md-bio.md-bio--with-bio h5.md-bio--caption[data-v-1ea69f12]{margin:0;padding:0;height:20px;max-width:100%;text-align:left;width:100%}.rendered-markdown .md-bio.md-bio--with-bio p.md-bio--bio[data-v-1ea69f12]{margin:0;padding:0;color:#666;text-align:left}.page-header[data-v-1ea69f12]{top:0;bottom:0;left:0;right:0;background-color:#c6002d;height:70px;padding:0 10px;position:fixed;top:50px;bottom:auto;z-index:2}.page-header.homework[data-v-1ea69f12]{background-color:#107598}.page-header.profile[data-v-1ea69f12]{background-color:#242424}.page-header h3.page-title[data-v-1ea69f12]{margin:0;padding:0;color:#fff;line-height:70px;padding:0 10px;whitespace:nowrap}.page-header .profile-class-selector[data-v-1ea69f12]{position:absolute;top:0;right:10px;z-index:10}", "", {"version":3,"sources":["/repos/elevator/src/components/PageHeader.vue"],"names":[],"mappings":"AACA,4CAEE,8CAAoD,AACpD,mCAAoC,AACpC,kCAAmC,AACnC,SAAU,AACV,SAAW,CACZ,AACD,oDAEE,YAAc,CACf,AACD,4BACE,UAAY,CACb,AACD,6BACE,WAAa,CACd,AACD,2BACE,WAAY,AACZ,UAAY,CACb,AACD,0BACE,WAAY,AACZ,UAAY,CACb,AACD,4BACE,kBAAqB,CACtB,AACD,6BACE,mBAAsB,CACvB,AACD,mCACE,+BAAkC,CACnC,AACD,iCACE,kBAAmB,AACnB,gBAAiB,AACjB,iBAAmB,CACpB,AACD,yBACA,iCACI,gBAAiB,AACjB,YAAc,CACjB,CACA,AACD,uDACE,YAAc,CACf,AACD,gCACE,kBAAmB,AACnB,aAAc,AACd,eAAmB,CACpB,AACD,yBACA,gCACI,eAAiB,CACpB,CACA,AACD,4CACE,qBAAuB,CACxB,AACD,6CACE,YAAc,CACf,AACD,+CACE,SAAW,CACZ,AACD,6CACE,gBAAiB,AACjB,eAAiB,CAClB,AACD,wEAEE,uBAA0B,CAC3B,AACD,6DAEE,SAAW,CACZ,AACD,yCACE,MAAO,AACP,SAAU,AACV,OAAQ,AACR,QAAS,AACT,kBAAmB,AACnB,oBAAqB,AACrB,UAAY,CACb,AACD,oCACE,mBAAqB,AACrB,oBAAsB,CACvB,AACD,uCACE,SAAU,AACV,UAAW,AACX,WAAY,AACZ,iBAAmB,CACpB,AACD,sTAQE,UAAY,CACb,AACD,sZAQE,YAAc,CACf,AACD,mMAKE,eAAiB,CAClB,AACD,uCACE,WAAY,AACZ,gBAAiB,AACjB,eAAkB,CACnB,AACD,sCACE,aAAe,CAChB,AACD,sCACE,wBAA0B,AAC1B,yBAA2B,CAC5B,AACD,4CACE,cAAe,AACf,cAAgB,CACjB,AACD,+CACE,8BAA+B,AAC/B,WAAY,AACZ,wBAA2B,AAC3B,kBAAmB,AACnB,iBAAmB,CACpB,AACD,wCACE,kBAAmB,AACnB,yBAA0B,AAC1B,eAAgB,AAChB,aAAc,AACd,mBAAqB,AACrB,oBAAsB,CACvB,AACD,wCACE,qBAAsB,AACtB,YAAa,AACb,WAAY,AACZ,eAAiB,CAClB,AACD,qJAGE,cAAe,AACf,SAAU,AACV,eAAgB,AAChB,UAAW,AACX,UAAY,CACb,AACD,4CACE,qBAAsB,AACtB,iBAAkB,AAClB,gBAAiB,AACjB,aAAc,AACd,kBAAmB,AACnB,WAAa,CACd,AACD,8DACE,kBAAmB,AACnB,SAAU,AACV,UAAW,AACX,cAAe,AACf,aAAc,AACd,WAAa,CACd,AACD,6DACE,8BAA+B,AAC/B,YAAc,CACf,AACD,+DACE,SAAU,AACV,UAAW,AACX,cAAe,AACf,gBAAkB,AAClB,YAAa,AACb,iBAAkB,AAClB,aAAc,AACd,gBAAiB,AACjB,gBAAiB,AACjB,iBAAmB,CACpB,AACD,6DACE,kBAAmB,AACnB,sBAAuB,AACvB,2BAA4B,AAC5B,8BAA+B,AAC/B,aAAc,AACd,mBAAoB,AACpB,eAAgB,AAChB,UAAY,CACb,AACD,+EACE,SAAU,AACV,UAAW,AACX,kBAAmB,AACnB,SAAU,AACV,UAAW,AACX,YAAa,AACb,UAAY,CACb,AACD,gFACE,SAAU,AACV,UAAW,AACX,YAAa,AACb,eAAgB,AAChB,gBAAiB,AACjB,UAAY,CACb,AACD,2EACE,SAAU,AACV,UAAW,AACX,WAAY,AACZ,eAAiB,CAClB,AACD,8BACE,MAAO,AACP,SAAU,AACV,OAAQ,AACR,QAAS,AACT,yBAA0B,AAC1B,YAAa,AACb,eAAgB,AAChB,eAAgB,AAChB,SAAU,AACV,YAAa,AACb,SAAW,CACZ,AACD,uCACE,wBAA0B,CAC3B,AACD,sCACE,wBAA0B,CAC3B,AACD,4CACE,SAAU,AACV,UAAW,AACX,WAAY,AACZ,iBAAkB,AAClB,eAAgB,AAChB,iBAAmB,CACpB,AACD,sDACE,kBAAmB,AACnB,MAAS,AACT,WAAY,AACZ,UAAY,CACb","file":"PageHeader.vue","sourcesContent":["\nhtml[data-v-1ea69f12],\nbody[data-v-1ea69f12] {\n  font-family: 'Avenir', Helvetica, Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  margin: 0;\n  padding: 0;\n}\n.hidden[data-v-1ea69f12],\n[v-cloak][data-v-1ea69f12] {\n  display: none;\n}\n.pull-left[data-v-1ea69f12] {\n  float: left;\n}\n.pull-right[data-v-1ea69f12] {\n  float: right;\n}\n.clearfix[data-v-1ea69f12] {\n  clear: both;\n  float: none;\n}\n.fa-icon[data-v-1ea69f12] {\n  width: auto;\n  height: 1em;\n}\n.no-margin[data-v-1ea69f12] {\n  margin: 0 !important;\n}\n.no-padding[data-v-1ea69f12] {\n  padding: 0 !important;\n}\n.background-white[data-v-1ea69f12] {\n  background-color: #fff !important;\n}\n.main-container[data-v-1ea69f12] {\n  border-radius: 4px;\n  margin-top: 20px;\n  position: relative;\n}\n@media (max-width: 800px) {\n.main-container[data-v-1ea69f12] {\n    border-radius: 0;\n    margin-top: 0;\n}\n}\n.main-container.main-container-padded[data-v-1ea69f12] {\n  padding: 20px;\n}\n.content-block[data-v-1ea69f12] {\n  border-radius: 4px;\n  padding: 20px;\n  margin: 0 0 20px 0;\n}\n@media (max-width: 800px) {\n.content-block[data-v-1ea69f12] {\n    border-radius: 0;\n}\n}\n.content-block.white-block[data-v-1ea69f12] {\n  background-color: #fff;\n}\n.content-block.padded-block[data-v-1ea69f12] {\n  padding: 40px;\n}\n.content-block.unpadded-block[data-v-1ea69f12] {\n  padding: 0;\n}\n.content-block.header-block[data-v-1ea69f12] {\n  margin-top: 20px;\n  overflow: hidden;\n}\n.fade-enter-active[data-v-1ea69f12],\n.fade-leave-active[data-v-1ea69f12] {\n  transition: all 0.3s ease;\n}\n.fade-enter[data-v-1ea69f12],\n.fade-leave-to[data-v-1ea69f12] {\n  opacity: 0;\n}\n.particles-js-canvas-el[data-v-1ea69f12] {\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  position: absolute;\n  pointer-events: none;\n  z-index: -1;\n}\n.rendered-markdown[data-v-1ea69f12] {\n  white-space: initial;\n  word-wrap: break-word;\n}\n.rendered-markdown h1[data-v-1ea69f12] {\n  margin: 0;\n  padding: 0;\n  color: #444;\n  margin-bottom: 5px;\n}\n.rendered-markdown h1[data-v-1ea69f12],\n.rendered-markdown h2[data-v-1ea69f12],\n.rendered-markdown h3[data-v-1ea69f12],\n.rendered-markdown h4[data-v-1ea69f12],\n.rendered-markdown h5[data-v-1ea69f12],\n.rendered-markdown p[data-v-1ea69f12],\n.rendered-markdown a[data-v-1ea69f12],\n.rendered-markdown li[data-v-1ea69f12] {\n  color: #444;\n}\n.rendered-markdown h1[data-v-1ea69f12]:first-child,\n.rendered-markdown h2[data-v-1ea69f12]:first-child,\n.rendered-markdown h3[data-v-1ea69f12]:first-child,\n.rendered-markdown h4[data-v-1ea69f12]:first-child,\n.rendered-markdown h5[data-v-1ea69f12]:first-child,\n.rendered-markdown p[data-v-1ea69f12]:first-child,\n.rendered-markdown a[data-v-1ea69f12]:first-child,\n.rendered-markdown li[data-v-1ea69f12]:first-child {\n  margin-top: 0;\n}\n.rendered-markdown h1[data-v-1ea69f12],\n.rendered-markdown h2[data-v-1ea69f12],\n.rendered-markdown h3[data-v-1ea69f12],\n.rendered-markdown h4[data-v-1ea69f12],\n.rendered-markdown h5[data-v-1ea69f12] {\n  font-weight: 300;\n}\n.rendered-markdown h2[data-v-1ea69f12] {\n  color: #444;\n  font-size: 1.3em;\n  font-weight: bold;\n}\n.rendered-markdown p[data-v-1ea69f12] {\n  margin: 10px 0;\n}\n.rendered-markdown a[data-v-1ea69f12] {\n  color: #c6002d !important;\n  text-decoration: underline;\n}\n.rendered-markdown a[data-v-1ea69f12]:hover {\n  color: #c6002d;\n  cursor: pointer;\n}\n.rendered-markdown blockquote[data-v-1ea69f12] {\n  border-left: #c6002d 3px solid;\n  color: #ccc;\n  margin: 30px 20px 30px 0px;\n  padding-left: 20px;\n  font-style: italic;\n}\n.rendered-markdown pre[data-v-1ea69f12] {\n  border-radius: 6px;\n  background-color: #e9e9e9;\n  max-width: 100%;\n  padding: 20px;\n  white-space: initial;\n  word-wrap: break-word;\n}\n.rendered-markdown img[data-v-1ea69f12] {\n  display: inline-block;\n  margin: 10px;\n  width: 100%;\n  max-width: 160px;\n}\n.rendered-markdown img[data-4c][data-v-1ea69f12],\n.rendered-markdown .fc-image img[data-v-1ea69f12],\n.rendered-markdown .fc-image > img[data-v-1ea69f12] {\n  display: block;\n  margin: 0;\n  max-width: 100%;\n  padding: 0;\n  width: 100%;\n}\n.rendered-markdown .md-bio[data-v-1ea69f12] {\n  display: inline-block;\n  min-height: 100px;\n  overflow: hidden;\n  padding: 10px;\n  position: relative;\n  width: 160px;\n}\n.rendered-markdown .md-bio img.md-bio--image[data-v-1ea69f12] {\n  border-radius: 50%;\n  margin: 0;\n  padding: 0;\n  margin: 0 20px;\n  height: 120px;\n  width: 120px;\n}\n.rendered-markdown .md-bio .md-bio--content[data-v-1ea69f12] {\n  border-left: #e9e9e9 1px solid;\n  padding: 10px;\n}\n.rendered-markdown .md-bio h5.md-bio--caption[data-v-1ea69f12] {\n  margin: 0;\n  padding: 0;\n  font-size: 1em;\n  font-weight: bold;\n  height: 20px;\n  line-height: 20px;\n  margin: 5px 0;\n  max-width: 160px;\n  overflow: hidden;\n  text-align: center;\n}\n.rendered-markdown .md-bio.md-bio--with-bio[data-v-1ea69f12] {\n  border-radius: 6px;\n  box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  padding: 10px;\n  padding-left: 100px;\n  max-width: 100%;\n  width: 100%;\n}\n.rendered-markdown .md-bio.md-bio--with-bio img.md-bio--image[data-v-1ea69f12] {\n  margin: 0;\n  padding: 0;\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  height: 80px;\n  width: 80px;\n}\n.rendered-markdown .md-bio.md-bio--with-bio h5.md-bio--caption[data-v-1ea69f12] {\n  margin: 0;\n  padding: 0;\n  height: 20px;\n  max-width: 100%;\n  text-align: left;\n  width: 100%;\n}\n.rendered-markdown .md-bio.md-bio--with-bio p.md-bio--bio[data-v-1ea69f12] {\n  margin: 0;\n  padding: 0;\n  color: #666;\n  text-align: left;\n}\n.page-header[data-v-1ea69f12] {\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: #c6002d;\n  height: 70px;\n  padding: 0 10px;\n  position: fixed;\n  top: 50px;\n  bottom: auto;\n  z-index: 2;\n}\n.page-header.homework[data-v-1ea69f12] {\n  background-color: #107598;\n}\n.page-header.profile[data-v-1ea69f12] {\n  background-color: #242424;\n}\n.page-header h3.page-title[data-v-1ea69f12] {\n  margin: 0;\n  padding: 0;\n  color: #fff;\n  line-height: 70px;\n  padding: 0 10px;\n  whitespace: nowrap;\n}\n.page-header .profile-class-selector[data-v-1ea69f12] {\n  position: absolute;\n  top: 0px;\n  right: 10px;\n  z-index: 10;\n}"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 547:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(412)();
// imports


// module
exports.push([module.i, ".four-corners-wrapper>img{display:block!important;margin:0!important;max-width:100%!important;padding:0!important;width:100%!important}", "", {"version":3,"sources":["/repos/elevator/src/components/fourcorners/FourCorners.vue"],"names":[],"mappings":"AACA,0BACE,wBAA0B,AAC1B,mBAAqB,AACrB,yBAA2B,AAC3B,oBAAsB,AACtB,oBAAuB,CACxB","file":"FourCorners.vue","sourcesContent":["\n.four-corners-wrapper > img {\n  display: block !important;\n  margin: 0 !important;\n  max-width: 100% !important;\n  padding: 0 !important;\n  width: 100% !important;\n}"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 551:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(412)();
// imports


// module
exports.push([module.i, "body[data-v-6499a961],html[data-v-6499a961]{font-family:Avenir,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0;padding:0}.hidden[data-v-6499a961],[v-cloak][data-v-6499a961]{display:none}.pull-left[data-v-6499a961]{float:left}.pull-right[data-v-6499a961]{float:right}.clearfix[data-v-6499a961]{clear:both;float:none}.fa-icon[data-v-6499a961]{width:auto;height:1em}.no-margin[data-v-6499a961]{margin:0!important}.no-padding[data-v-6499a961]{padding:0!important}.background-white[data-v-6499a961]{background-color:#fff!important}.main-container[data-v-6499a961]{border-radius:4px;margin-top:20px;position:relative}@media (max-width:800px){.main-container[data-v-6499a961]{border-radius:0;margin-top:0}}.main-container.main-container-padded[data-v-6499a961]{padding:20px}.content-block[data-v-6499a961]{border-radius:4px;padding:20px;margin:0 0 20px}@media (max-width:800px){.content-block[data-v-6499a961]{border-radius:0}}.content-block.white-block[data-v-6499a961]{background-color:#fff}.content-block.padded-block[data-v-6499a961]{padding:40px}.content-block.unpadded-block[data-v-6499a961]{padding:0}.content-block.header-block[data-v-6499a961]{margin-top:20px;overflow:hidden}.fade-enter-active[data-v-6499a961],.fade-leave-active[data-v-6499a961]{transition:all .3s ease}.fade-enter[data-v-6499a961],.fade-leave-to[data-v-6499a961]{opacity:0}.particles-js-canvas-el[data-v-6499a961]{top:0;bottom:0;left:0;right:0;position:absolute;pointer-events:none;z-index:-1}.rendered-markdown[data-v-6499a961]{white-space:normal;word-wrap:break-word}.rendered-markdown h1[data-v-6499a961]{margin:0;padding:0;color:#444;margin-bottom:5px}.rendered-markdown a[data-v-6499a961],.rendered-markdown h1[data-v-6499a961],.rendered-markdown h2[data-v-6499a961],.rendered-markdown h3[data-v-6499a961],.rendered-markdown h4[data-v-6499a961],.rendered-markdown h5[data-v-6499a961],.rendered-markdown li[data-v-6499a961],.rendered-markdown p[data-v-6499a961]{color:#444}.rendered-markdown a[data-v-6499a961]:first-child,.rendered-markdown h1[data-v-6499a961]:first-child,.rendered-markdown h2[data-v-6499a961]:first-child,.rendered-markdown h3[data-v-6499a961]:first-child,.rendered-markdown h4[data-v-6499a961]:first-child,.rendered-markdown h5[data-v-6499a961]:first-child,.rendered-markdown li[data-v-6499a961]:first-child,.rendered-markdown p[data-v-6499a961]:first-child{margin-top:0}.rendered-markdown h1[data-v-6499a961],.rendered-markdown h2[data-v-6499a961],.rendered-markdown h3[data-v-6499a961],.rendered-markdown h4[data-v-6499a961],.rendered-markdown h5[data-v-6499a961]{font-weight:300}.rendered-markdown h2[data-v-6499a961]{color:#444;font-size:1.3em;font-weight:700}.rendered-markdown p[data-v-6499a961]{margin:10px 0}.rendered-markdown a[data-v-6499a961]{color:#c6002d!important;text-decoration:underline}.rendered-markdown a[data-v-6499a961]:hover{color:#c6002d;cursor:pointer}.rendered-markdown blockquote[data-v-6499a961]{border-left:3px solid #c6002d;color:#ccc;margin:30px 20px 30px 0;padding-left:20px;font-style:italic}.rendered-markdown pre[data-v-6499a961]{border-radius:6px;background-color:#e9e9e9;max-width:100%;padding:20px;white-space:normal;word-wrap:break-word}.rendered-markdown img[data-v-6499a961]{display:inline-block;margin:10px;width:100%;max-width:160px}.rendered-markdown .fc-image>img[data-v-6499a961],.rendered-markdown .fc-image img[data-v-6499a961],.rendered-markdown img[data-4c][data-v-6499a961]{display:block;margin:0;max-width:100%;padding:0;width:100%}.rendered-markdown .md-bio[data-v-6499a961]{display:inline-block;min-height:100px;overflow:hidden;padding:10px;position:relative;width:160px}.rendered-markdown .md-bio img.md-bio--image[data-v-6499a961]{border-radius:50%;margin:0;padding:0;margin:0 20px;height:120px;width:120px}.rendered-markdown .md-bio .md-bio--content[data-v-6499a961]{border-left:1px solid #e9e9e9;padding:10px}.rendered-markdown .md-bio h5.md-bio--caption[data-v-6499a961]{margin:0;padding:0;font-size:1em;font-weight:700;height:20px;line-height:20px;margin:5px 0;max-width:160px;overflow:hidden;text-align:center}.rendered-markdown .md-bio.md-bio--with-bio[data-v-6499a961]{border-radius:6px;box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:10px;padding-left:100px;max-width:100%;width:100%}.rendered-markdown .md-bio.md-bio--with-bio img.md-bio--image[data-v-6499a961]{margin:0;padding:0;position:absolute;top:10px;left:10px;height:80px;width:80px}.rendered-markdown .md-bio.md-bio--with-bio h5.md-bio--caption[data-v-6499a961]{margin:0;padding:0;height:20px;max-width:100%;text-align:left;width:100%}.rendered-markdown .md-bio.md-bio--with-bio p.md-bio--bio[data-v-6499a961]{margin:0;padding:0;color:#666;text-align:left}.pure-button[data-v-6499a961]{transition:all .3s ease;border-radius:4px;background-color:transparent;border:1px solid #c6002d;color:#c6002d;display:inline-block;font-family:inherit;font-size:100%;outline:0;padding:.5em 1em;text-align:center;text-decoration:none}.pure-button[data-v-6499a961]:hover{background-color:#b20028;color:#fff;cursor:pointer}.pure-button.full-width[data-v-6499a961]{display:block;margin-bottom:10px}.pure-button[disabled][data-v-6499a961]{background-color:#e1e1e1!important;border-color:#e1e1e1!important;color:$color-text-darkest-grey!important;opacity:.5;pointer-events:none}.pure-button.pure-button-primary[data-v-6499a961]{background-color:#c6002d;color:#fff;border-color:#c6002d}.pure-button.pure-button-primary[data-v-6499a961]:hover{background-color:#b20028;color:#fff;cursor:pointer}.pure-button.pure-button-info[data-v-6499a961]{background-color:#1864ef;color:#fff;border-color:#1864ef}.pure-button.pure-button-info[data-v-6499a961]:hover{background-color:#0f58dd;color:#fff;cursor:pointer}.pure-button.pure-button-success[data-v-6499a961]{background-color:#20af3d;color:#fff;border-color:#20af3d}.pure-button.pure-button-success[data-v-6499a961]:hover{background-color:#1d9e37;color:#fff;cursor:pointer}.pure-button.pure-button-subtle[data-v-6499a961]{background-color:transparent;border-color:#ccc;color:#666}.pure-button.pure-button-subtle[data-v-6499a961]:hover{background-color:#cbcbcb;color:#444;cursor:pointer}.pure-button.pure-button-youtube[data-v-6499a961]{background-color:#c4302b;color:#fff;border-color:#c4302b}.pure-button.pure-button-youtube[data-v-6499a961]:hover{background-color:#b02b27;color:#fff;cursor:pointer}.pure-button.pure-button-soundcloud[data-v-6499a961]{background-color:#f70;color:#fff;border-color:#f70}.pure-button.pure-button-soundcloud[data-v-6499a961]:hover{background-color:#e66b00;color:#fff;cursor:pointer}.pure-button.pure-button-twitter[data-v-6499a961]{background-color:#4099ff;color:#fff;border-color:#4099ff}.pure-button.pure-button-twitter[data-v-6499a961]:hover{background-color:#2088ff;color:#fff;cursor:pointer}.pure-button.rounded-short[data-v-6499a961]{border-radius:22px;line-height:44px;padding:0 30px}.pure-button.rounded-tall[data-v-6499a961]{border-radius:25px;line-height:50px;padding:0 30px}.info-dialogue[data-v-6499a961]{border-radius:4px;background-color:#c6002d;color:#fff;margin-bottom:15px;padding:15px;position:relative}.info-dialogue .dismiss-button[data-v-6499a961]{background-color:#fd3c51;color:#fff;right:0;bottom:0;top:0;position:absolute;width:3px;text-align:center;transition:all .3s ease}.info-dialogue .dismiss-button .fa-icon[data-v-6499a961]{opacity:0;height:20px;width:20px;position:absolute;top:50%;left:50%;margin-top:-10px;margin-left:-10px;transition:all .3s ease}.info-dialogue:hover .dismiss-button[data-v-6499a961]{cursor:pointer;width:50px}.info-dialogue:hover .dismiss-button .fa-icon[data-v-6499a961]{opacity:1}.info-dialogue p[data-v-6499a961]{margin:0;padding:0}", "", {"version":3,"sources":["/repos/elevator/src/components/InfoDialogue.vue"],"names":[],"mappings":"AA8OA,4CAEE,8CAAoD,AACpD,mCAAoC,AACpC,kCAAmC,AACnC,SAAU,AACV,SAAW,CACZ,AACD,oDAEE,YAAc,CACf,AACD,4BACE,UAAY,CACb,AACD,6BACE,WAAa,CACd,AACD,2BACE,WAAY,AACZ,UAAY,CACb,AACD,0BACE,WAAY,AACZ,UAAY,CACb,AACD,4BACE,kBAAqB,CACtB,AACD,6BACE,mBAAsB,CACvB,AACD,mCACE,+BAAkC,CACnC,AACD,iCACE,kBAAmB,AACnB,gBAAiB,AACjB,iBAAmB,CACpB,AACD,yBACA,iCACI,gBAAiB,AACjB,YAAc,CACjB,CACA,AACD,uDACE,YAAc,CACf,AACD,gCACE,kBAAmB,AACnB,aAAc,AACd,eAAmB,CACpB,AACD,yBACA,gCACI,eAAiB,CACpB,CACA,AACD,4CACE,qBAAuB,CACxB,AACD,6CACE,YAAc,CACf,AACD,+CACE,SAAW,CACZ,AACD,6CACE,gBAAiB,AACjB,eAAiB,CAClB,AACD,wEAEE,uBAA0B,CAC3B,AACD,6DAEE,SAAW,CACZ,AACD,yCACE,MAAO,AACP,SAAU,AACV,OAAQ,AACR,QAAS,AACT,kBAAmB,AACnB,oBAAqB,AACrB,UAAY,CACb,AACD,oCACE,mBAAqB,AACrB,oBAAsB,CACvB,AACD,uCACE,SAAU,AACV,UAAW,AACX,WAAY,AACZ,iBAAmB,CACpB,AACD,sTAQE,UAAY,CACb,AACD,sZAQE,YAAc,CACf,AACD,mMAKE,eAAiB,CAClB,AACD,uCACE,WAAY,AACZ,gBAAiB,AACjB,eAAkB,CACnB,AACD,sCACE,aAAe,CAChB,AACD,sCACE,wBAA0B,AAC1B,yBAA2B,CAC5B,AACD,4CACE,cAAe,AACf,cAAgB,CACjB,AACD,+CACE,8BAA+B,AAC/B,WAAY,AACZ,wBAA2B,AAC3B,kBAAmB,AACnB,iBAAmB,CACpB,AACD,wCACE,kBAAmB,AACnB,yBAA0B,AAC1B,eAAgB,AAChB,aAAc,AACd,mBAAqB,AACrB,oBAAsB,CACvB,AACD,wCACE,qBAAsB,AACtB,YAAa,AACb,WAAY,AACZ,eAAiB,CAClB,AACD,qJAGE,cAAe,AACf,SAAU,AACV,eAAgB,AAChB,UAAW,AACX,UAAY,CACb,AACD,4CACE,qBAAsB,AACtB,iBAAkB,AAClB,gBAAiB,AACjB,aAAc,AACd,kBAAmB,AACnB,WAAa,CACd,AACD,8DACE,kBAAmB,AACnB,SAAU,AACV,UAAW,AACX,cAAe,AACf,aAAc,AACd,WAAa,CACd,AACD,6DACE,8BAA+B,AAC/B,YAAc,CACf,AACD,+DACE,SAAU,AACV,UAAW,AACX,cAAe,AACf,gBAAkB,AAClB,YAAa,AACb,iBAAkB,AAClB,aAAc,AACd,gBAAiB,AACjB,gBAAiB,AACjB,iBAAmB,CACpB,AACD,6DACE,kBAAmB,AACnB,sBAAuB,AACvB,2BAA4B,AAC5B,8BAA+B,AAC/B,aAAc,AACd,mBAAoB,AACpB,eAAgB,AAChB,UAAY,CACb,AACD,+EACE,SAAU,AACV,UAAW,AACX,kBAAmB,AACnB,SAAU,AACV,UAAW,AACX,YAAa,AACb,UAAY,CACb,AACD,gFACE,SAAU,AACV,UAAW,AACX,YAAa,AACb,eAAgB,AAChB,gBAAiB,AACjB,UAAY,CACb,AACD,2EACE,SAAU,AACV,UAAW,AACX,WAAY,AACZ,eAAiB,CAClB,AACD,8BACE,wBAA0B,AAC1B,kBAAmB,AACnB,6BAA8B,AAC9B,yBAA0B,AAC1B,cAAe,AACf,qBAAsB,AACtB,oBAAqB,AACrB,eAAgB,AAChB,UAAW,AACX,iBAAmB,AACnB,kBAAmB,AACnB,oBAAsB,CACvB,AACD,oCACE,yBAA0B,AAC1B,WAAY,AACZ,cAAgB,CACjB,AACD,yCACE,cAAe,AACf,kBAAoB,CACrB,AACD,wCACE,mCAAqC,AACrC,+BAAiC,AACjC,yCAA2C,AAC3C,WAAa,AACb,mBAAqB,CACtB,AACD,kDACE,yBAA0B,AAC1B,WAAY,AACZ,oBAAsB,CACvB,AACD,wDACE,yBAA0B,AAC1B,WAAY,AACZ,cAAgB,CACjB,AACD,+CACE,yBAA0B,AAC1B,WAAY,AACZ,oBAAsB,CACvB,AACD,qDACE,yBAA0B,AAC1B,WAAY,AACZ,cAAgB,CACjB,AACD,kDACE,yBAA0B,AAC1B,WAAY,AACZ,oBAAsB,CACvB,AACD,wDACE,yBAA0B,AAC1B,WAAY,AACZ,cAAgB,CACjB,AACD,iDACE,6BAA8B,AAC9B,kBAAmB,AACnB,UAAY,CACb,AACD,uDACE,yBAA0B,AAC1B,WAAY,AACZ,cAAgB,CACjB,AACD,kDACE,yBAA0B,AAC1B,WAAY,AACZ,oBAAsB,CACvB,AACD,wDACE,yBAA0B,AAC1B,WAAY,AACZ,cAAgB,CACjB,AACD,qDACE,sBAAuB,AACvB,WAAY,AACZ,iBAAmB,CACpB,AACD,2DACE,yBAA0B,AAC1B,WAAY,AACZ,cAAgB,CACjB,AACD,kDACE,yBAA0B,AAC1B,WAAY,AACZ,oBAAsB,CACvB,AACD,wDACE,yBAA0B,AAC1B,WAAY,AACZ,cAAgB,CACjB,AACD,4CACE,mBAAoB,AACpB,iBAAkB,AAClB,cAAgB,CACjB,AACD,2CACE,mBAAoB,AACpB,iBAAkB,AAClB,cAAgB,CACjB,AACD,gCACE,kBAAmB,AACnB,yBAA0B,AAC1B,WAAY,AACZ,mBAAoB,AACpB,aAAc,AACd,iBAAmB,CACpB,AACD,gDACE,yBAA0B,AAC1B,WAAY,AACZ,QAAS,AACT,SAAU,AACV,MAAO,AACP,kBAAmB,AACnB,UAAW,AACX,kBAAmB,AACnB,uBAA0B,CAC3B,AACD,yDACE,UAAW,AACX,YAAa,AACb,WAAY,AACZ,kBAAmB,AACnB,QAAS,AACT,SAAU,AACV,iBAAkB,AAClB,kBAAmB,AACnB,uBAA0B,CAC3B,AACD,sDACE,eAAgB,AAChB,UAAY,CACb,AACD,+DACE,SAAW,CACZ,AACD,kCACE,SAAU,AACV,SAAW,CACZ","file":"InfoDialogue.vue","sourcesContent":["\nhtml[data-v-6499a961],\nbody[data-v-6499a961] {\n  font-family: 'Avenir', Helvetica, Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  margin: 0;\n  padding: 0;\n}\n.hidden[data-v-6499a961],\n[v-cloak][data-v-6499a961] {\n  display: none;\n}\n.pull-left[data-v-6499a961] {\n  float: left;\n}\n.pull-right[data-v-6499a961] {\n  float: right;\n}\n.clearfix[data-v-6499a961] {\n  clear: both;\n  float: none;\n}\n.fa-icon[data-v-6499a961] {\n  width: auto;\n  height: 1em;\n}\n.no-margin[data-v-6499a961] {\n  margin: 0 !important;\n}\n.no-padding[data-v-6499a961] {\n  padding: 0 !important;\n}\n.background-white[data-v-6499a961] {\n  background-color: #fff !important;\n}\n.main-container[data-v-6499a961] {\n  border-radius: 4px;\n  margin-top: 20px;\n  position: relative;\n}\n@media (max-width: 800px) {\n.main-container[data-v-6499a961] {\n    border-radius: 0;\n    margin-top: 0;\n}\n}\n.main-container.main-container-padded[data-v-6499a961] {\n  padding: 20px;\n}\n.content-block[data-v-6499a961] {\n  border-radius: 4px;\n  padding: 20px;\n  margin: 0 0 20px 0;\n}\n@media (max-width: 800px) {\n.content-block[data-v-6499a961] {\n    border-radius: 0;\n}\n}\n.content-block.white-block[data-v-6499a961] {\n  background-color: #fff;\n}\n.content-block.padded-block[data-v-6499a961] {\n  padding: 40px;\n}\n.content-block.unpadded-block[data-v-6499a961] {\n  padding: 0;\n}\n.content-block.header-block[data-v-6499a961] {\n  margin-top: 20px;\n  overflow: hidden;\n}\n.fade-enter-active[data-v-6499a961],\n.fade-leave-active[data-v-6499a961] {\n  transition: all 0.3s ease;\n}\n.fade-enter[data-v-6499a961],\n.fade-leave-to[data-v-6499a961] {\n  opacity: 0;\n}\n.particles-js-canvas-el[data-v-6499a961] {\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  position: absolute;\n  pointer-events: none;\n  z-index: -1;\n}\n.rendered-markdown[data-v-6499a961] {\n  white-space: initial;\n  word-wrap: break-word;\n}\n.rendered-markdown h1[data-v-6499a961] {\n  margin: 0;\n  padding: 0;\n  color: #444;\n  margin-bottom: 5px;\n}\n.rendered-markdown h1[data-v-6499a961],\n.rendered-markdown h2[data-v-6499a961],\n.rendered-markdown h3[data-v-6499a961],\n.rendered-markdown h4[data-v-6499a961],\n.rendered-markdown h5[data-v-6499a961],\n.rendered-markdown p[data-v-6499a961],\n.rendered-markdown a[data-v-6499a961],\n.rendered-markdown li[data-v-6499a961] {\n  color: #444;\n}\n.rendered-markdown h1[data-v-6499a961]:first-child,\n.rendered-markdown h2[data-v-6499a961]:first-child,\n.rendered-markdown h3[data-v-6499a961]:first-child,\n.rendered-markdown h4[data-v-6499a961]:first-child,\n.rendered-markdown h5[data-v-6499a961]:first-child,\n.rendered-markdown p[data-v-6499a961]:first-child,\n.rendered-markdown a[data-v-6499a961]:first-child,\n.rendered-markdown li[data-v-6499a961]:first-child {\n  margin-top: 0;\n}\n.rendered-markdown h1[data-v-6499a961],\n.rendered-markdown h2[data-v-6499a961],\n.rendered-markdown h3[data-v-6499a961],\n.rendered-markdown h4[data-v-6499a961],\n.rendered-markdown h5[data-v-6499a961] {\n  font-weight: 300;\n}\n.rendered-markdown h2[data-v-6499a961] {\n  color: #444;\n  font-size: 1.3em;\n  font-weight: bold;\n}\n.rendered-markdown p[data-v-6499a961] {\n  margin: 10px 0;\n}\n.rendered-markdown a[data-v-6499a961] {\n  color: #c6002d !important;\n  text-decoration: underline;\n}\n.rendered-markdown a[data-v-6499a961]:hover {\n  color: #c6002d;\n  cursor: pointer;\n}\n.rendered-markdown blockquote[data-v-6499a961] {\n  border-left: #c6002d 3px solid;\n  color: #ccc;\n  margin: 30px 20px 30px 0px;\n  padding-left: 20px;\n  font-style: italic;\n}\n.rendered-markdown pre[data-v-6499a961] {\n  border-radius: 6px;\n  background-color: #e9e9e9;\n  max-width: 100%;\n  padding: 20px;\n  white-space: initial;\n  word-wrap: break-word;\n}\n.rendered-markdown img[data-v-6499a961] {\n  display: inline-block;\n  margin: 10px;\n  width: 100%;\n  max-width: 160px;\n}\n.rendered-markdown img[data-4c][data-v-6499a961],\n.rendered-markdown .fc-image img[data-v-6499a961],\n.rendered-markdown .fc-image > img[data-v-6499a961] {\n  display: block;\n  margin: 0;\n  max-width: 100%;\n  padding: 0;\n  width: 100%;\n}\n.rendered-markdown .md-bio[data-v-6499a961] {\n  display: inline-block;\n  min-height: 100px;\n  overflow: hidden;\n  padding: 10px;\n  position: relative;\n  width: 160px;\n}\n.rendered-markdown .md-bio img.md-bio--image[data-v-6499a961] {\n  border-radius: 50%;\n  margin: 0;\n  padding: 0;\n  margin: 0 20px;\n  height: 120px;\n  width: 120px;\n}\n.rendered-markdown .md-bio .md-bio--content[data-v-6499a961] {\n  border-left: #e9e9e9 1px solid;\n  padding: 10px;\n}\n.rendered-markdown .md-bio h5.md-bio--caption[data-v-6499a961] {\n  margin: 0;\n  padding: 0;\n  font-size: 1em;\n  font-weight: bold;\n  height: 20px;\n  line-height: 20px;\n  margin: 5px 0;\n  max-width: 160px;\n  overflow: hidden;\n  text-align: center;\n}\n.rendered-markdown .md-bio.md-bio--with-bio[data-v-6499a961] {\n  border-radius: 6px;\n  box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  padding: 10px;\n  padding-left: 100px;\n  max-width: 100%;\n  width: 100%;\n}\n.rendered-markdown .md-bio.md-bio--with-bio img.md-bio--image[data-v-6499a961] {\n  margin: 0;\n  padding: 0;\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  height: 80px;\n  width: 80px;\n}\n.rendered-markdown .md-bio.md-bio--with-bio h5.md-bio--caption[data-v-6499a961] {\n  margin: 0;\n  padding: 0;\n  height: 20px;\n  max-width: 100%;\n  text-align: left;\n  width: 100%;\n}\n.rendered-markdown .md-bio.md-bio--with-bio p.md-bio--bio[data-v-6499a961] {\n  margin: 0;\n  padding: 0;\n  color: #666;\n  text-align: left;\n}\nhtml[data-v-6499a961],\nbody[data-v-6499a961] {\n  font-family: 'Avenir', Helvetica, Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  margin: 0;\n  padding: 0;\n}\n.hidden[data-v-6499a961],\n[v-cloak][data-v-6499a961] {\n  display: none;\n}\n.pull-left[data-v-6499a961] {\n  float: left;\n}\n.pull-right[data-v-6499a961] {\n  float: right;\n}\n.clearfix[data-v-6499a961] {\n  clear: both;\n  float: none;\n}\n.fa-icon[data-v-6499a961] {\n  width: auto;\n  height: 1em;\n}\n.no-margin[data-v-6499a961] {\n  margin: 0 !important;\n}\n.no-padding[data-v-6499a961] {\n  padding: 0 !important;\n}\n.background-white[data-v-6499a961] {\n  background-color: #fff !important;\n}\n.main-container[data-v-6499a961] {\n  border-radius: 4px;\n  margin-top: 20px;\n  position: relative;\n}\n@media (max-width: 800px) {\n.main-container[data-v-6499a961] {\n    border-radius: 0;\n    margin-top: 0;\n}\n}\n.main-container.main-container-padded[data-v-6499a961] {\n  padding: 20px;\n}\n.content-block[data-v-6499a961] {\n  border-radius: 4px;\n  padding: 20px;\n  margin: 0 0 20px 0;\n}\n@media (max-width: 800px) {\n.content-block[data-v-6499a961] {\n    border-radius: 0;\n}\n}\n.content-block.white-block[data-v-6499a961] {\n  background-color: #fff;\n}\n.content-block.padded-block[data-v-6499a961] {\n  padding: 40px;\n}\n.content-block.unpadded-block[data-v-6499a961] {\n  padding: 0;\n}\n.content-block.header-block[data-v-6499a961] {\n  margin-top: 20px;\n  overflow: hidden;\n}\n.fade-enter-active[data-v-6499a961],\n.fade-leave-active[data-v-6499a961] {\n  transition: all 0.3s ease;\n}\n.fade-enter[data-v-6499a961],\n.fade-leave-to[data-v-6499a961] {\n  opacity: 0;\n}\n.particles-js-canvas-el[data-v-6499a961] {\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  position: absolute;\n  pointer-events: none;\n  z-index: -1;\n}\n.rendered-markdown[data-v-6499a961] {\n  white-space: initial;\n  word-wrap: break-word;\n}\n.rendered-markdown h1[data-v-6499a961] {\n  margin: 0;\n  padding: 0;\n  color: #444;\n  margin-bottom: 5px;\n}\n.rendered-markdown h1[data-v-6499a961],\n.rendered-markdown h2[data-v-6499a961],\n.rendered-markdown h3[data-v-6499a961],\n.rendered-markdown h4[data-v-6499a961],\n.rendered-markdown h5[data-v-6499a961],\n.rendered-markdown p[data-v-6499a961],\n.rendered-markdown a[data-v-6499a961],\n.rendered-markdown li[data-v-6499a961] {\n  color: #444;\n}\n.rendered-markdown h1[data-v-6499a961]:first-child,\n.rendered-markdown h2[data-v-6499a961]:first-child,\n.rendered-markdown h3[data-v-6499a961]:first-child,\n.rendered-markdown h4[data-v-6499a961]:first-child,\n.rendered-markdown h5[data-v-6499a961]:first-child,\n.rendered-markdown p[data-v-6499a961]:first-child,\n.rendered-markdown a[data-v-6499a961]:first-child,\n.rendered-markdown li[data-v-6499a961]:first-child {\n  margin-top: 0;\n}\n.rendered-markdown h1[data-v-6499a961],\n.rendered-markdown h2[data-v-6499a961],\n.rendered-markdown h3[data-v-6499a961],\n.rendered-markdown h4[data-v-6499a961],\n.rendered-markdown h5[data-v-6499a961] {\n  font-weight: 300;\n}\n.rendered-markdown h2[data-v-6499a961] {\n  color: #444;\n  font-size: 1.3em;\n  font-weight: bold;\n}\n.rendered-markdown p[data-v-6499a961] {\n  margin: 10px 0;\n}\n.rendered-markdown a[data-v-6499a961] {\n  color: #c6002d !important;\n  text-decoration: underline;\n}\n.rendered-markdown a[data-v-6499a961]:hover {\n  color: #c6002d;\n  cursor: pointer;\n}\n.rendered-markdown blockquote[data-v-6499a961] {\n  border-left: #c6002d 3px solid;\n  color: #ccc;\n  margin: 30px 20px 30px 0px;\n  padding-left: 20px;\n  font-style: italic;\n}\n.rendered-markdown pre[data-v-6499a961] {\n  border-radius: 6px;\n  background-color: #e9e9e9;\n  max-width: 100%;\n  padding: 20px;\n  white-space: initial;\n  word-wrap: break-word;\n}\n.rendered-markdown img[data-v-6499a961] {\n  display: inline-block;\n  margin: 10px;\n  width: 100%;\n  max-width: 160px;\n}\n.rendered-markdown img[data-4c][data-v-6499a961],\n.rendered-markdown .fc-image img[data-v-6499a961],\n.rendered-markdown .fc-image > img[data-v-6499a961] {\n  display: block;\n  margin: 0;\n  max-width: 100%;\n  padding: 0;\n  width: 100%;\n}\n.rendered-markdown .md-bio[data-v-6499a961] {\n  display: inline-block;\n  min-height: 100px;\n  overflow: hidden;\n  padding: 10px;\n  position: relative;\n  width: 160px;\n}\n.rendered-markdown .md-bio img.md-bio--image[data-v-6499a961] {\n  border-radius: 50%;\n  margin: 0;\n  padding: 0;\n  margin: 0 20px;\n  height: 120px;\n  width: 120px;\n}\n.rendered-markdown .md-bio .md-bio--content[data-v-6499a961] {\n  border-left: #e9e9e9 1px solid;\n  padding: 10px;\n}\n.rendered-markdown .md-bio h5.md-bio--caption[data-v-6499a961] {\n  margin: 0;\n  padding: 0;\n  font-size: 1em;\n  font-weight: bold;\n  height: 20px;\n  line-height: 20px;\n  margin: 5px 0;\n  max-width: 160px;\n  overflow: hidden;\n  text-align: center;\n}\n.rendered-markdown .md-bio.md-bio--with-bio[data-v-6499a961] {\n  border-radius: 6px;\n  box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  padding: 10px;\n  padding-left: 100px;\n  max-width: 100%;\n  width: 100%;\n}\n.rendered-markdown .md-bio.md-bio--with-bio img.md-bio--image[data-v-6499a961] {\n  margin: 0;\n  padding: 0;\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  height: 80px;\n  width: 80px;\n}\n.rendered-markdown .md-bio.md-bio--with-bio h5.md-bio--caption[data-v-6499a961] {\n  margin: 0;\n  padding: 0;\n  height: 20px;\n  max-width: 100%;\n  text-align: left;\n  width: 100%;\n}\n.rendered-markdown .md-bio.md-bio--with-bio p.md-bio--bio[data-v-6499a961] {\n  margin: 0;\n  padding: 0;\n  color: #666;\n  text-align: left;\n}\n.pure-button[data-v-6499a961] {\n  transition: all 0.3s ease;\n  border-radius: 4px;\n  background-color: transparent;\n  border: #c6002d 1px solid;\n  color: #c6002d;\n  display: inline-block;\n  font-family: inherit;\n  font-size: 100%;\n  outline: 0;\n  padding: 0.5em 1em;\n  text-align: center;\n  text-decoration: none;\n}\n.pure-button[data-v-6499a961]:hover {\n  background-color: #b20028;\n  color: #fff;\n  cursor: pointer;\n}\n.pure-button.full-width[data-v-6499a961] {\n  display: block;\n  margin-bottom: 10px;\n}\n.pure-button[disabled][data-v-6499a961] {\n  background-color: #e1e1e1 !important;\n  border-color: #e1e1e1 !important;\n  color: $color-text-darkest-grey !important;\n  opacity: 0.5;\n  pointer-events: none;\n}\n.pure-button.pure-button-primary[data-v-6499a961] {\n  background-color: #c6002d;\n  color: #fff;\n  border-color: #c6002d;\n}\n.pure-button.pure-button-primary[data-v-6499a961]:hover {\n  background-color: #b20028;\n  color: #fff;\n  cursor: pointer;\n}\n.pure-button.pure-button-info[data-v-6499a961] {\n  background-color: #1864ef;\n  color: #fff;\n  border-color: #1864ef;\n}\n.pure-button.pure-button-info[data-v-6499a961]:hover {\n  background-color: #0f58dd;\n  color: #fff;\n  cursor: pointer;\n}\n.pure-button.pure-button-success[data-v-6499a961] {\n  background-color: #20af3d;\n  color: #fff;\n  border-color: #20af3d;\n}\n.pure-button.pure-button-success[data-v-6499a961]:hover {\n  background-color: #1d9e37;\n  color: #fff;\n  cursor: pointer;\n}\n.pure-button.pure-button-subtle[data-v-6499a961] {\n  background-color: transparent;\n  border-color: #ccc;\n  color: #666;\n}\n.pure-button.pure-button-subtle[data-v-6499a961]:hover {\n  background-color: #cbcbcb;\n  color: #444;\n  cursor: pointer;\n}\n.pure-button.pure-button-youtube[data-v-6499a961] {\n  background-color: #c4302b;\n  color: #fff;\n  border-color: #c4302b;\n}\n.pure-button.pure-button-youtube[data-v-6499a961]:hover {\n  background-color: #b02b27;\n  color: #fff;\n  cursor: pointer;\n}\n.pure-button.pure-button-soundcloud[data-v-6499a961] {\n  background-color: #f70;\n  color: #fff;\n  border-color: #f70;\n}\n.pure-button.pure-button-soundcloud[data-v-6499a961]:hover {\n  background-color: #e66b00;\n  color: #fff;\n  cursor: pointer;\n}\n.pure-button.pure-button-twitter[data-v-6499a961] {\n  background-color: #4099ff;\n  color: #fff;\n  border-color: #4099ff;\n}\n.pure-button.pure-button-twitter[data-v-6499a961]:hover {\n  background-color: #2088ff;\n  color: #fff;\n  cursor: pointer;\n}\n.pure-button.rounded-short[data-v-6499a961] {\n  border-radius: 22px;\n  line-height: 44px;\n  padding: 0 30px;\n}\n.pure-button.rounded-tall[data-v-6499a961] {\n  border-radius: 25px;\n  line-height: 50px;\n  padding: 0 30px;\n}\n.info-dialogue[data-v-6499a961] {\n  border-radius: 4px;\n  background-color: #c6002d;\n  color: #fff;\n  margin-bottom: 15px;\n  padding: 15px;\n  position: relative;\n}\n.info-dialogue .dismiss-button[data-v-6499a961] {\n  background-color: #fd3c51;\n  color: #fff;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  position: absolute;\n  width: 3px;\n  text-align: center;\n  transition: all 0.3s ease;\n}\n.info-dialogue .dismiss-button .fa-icon[data-v-6499a961] {\n  opacity: 0;\n  height: 20px;\n  width: 20px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-top: -10px;\n  margin-left: -10px;\n  transition: all 0.3s ease;\n}\n.info-dialogue:hover .dismiss-button[data-v-6499a961] {\n  cursor: pointer;\n  width: 50px;\n}\n.info-dialogue:hover .dismiss-button .fa-icon[data-v-6499a961] {\n  opacity: 1;\n}\n.info-dialogue p[data-v-6499a961] {\n  margin: 0;\n  padding: 0;\n}"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 552:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(412)();
// imports


// module
exports.push([module.i, "body[data-v-75241529],html[data-v-75241529]{font-family:Avenir,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0;padding:0}.hidden[data-v-75241529],[v-cloak][data-v-75241529]{display:none}.pull-left[data-v-75241529]{float:left}.pull-right[data-v-75241529]{float:right}.clearfix[data-v-75241529]{clear:both;float:none}.fa-icon[data-v-75241529]{width:auto;height:1em}.no-margin[data-v-75241529]{margin:0!important}.no-padding[data-v-75241529]{padding:0!important}.background-white[data-v-75241529]{background-color:#fff!important}.main-container[data-v-75241529]{border-radius:4px;margin-top:20px;position:relative}@media (max-width:800px){.main-container[data-v-75241529]{border-radius:0;margin-top:0}}.main-container.main-container-padded[data-v-75241529]{padding:20px}.content-block[data-v-75241529]{border-radius:4px;padding:20px;margin:0 0 20px}@media (max-width:800px){.content-block[data-v-75241529]{border-radius:0}}.content-block.white-block[data-v-75241529]{background-color:#fff}.content-block.padded-block[data-v-75241529]{padding:40px}.content-block.unpadded-block[data-v-75241529]{padding:0}.content-block.header-block[data-v-75241529]{margin-top:20px;overflow:hidden}.fade-enter-active[data-v-75241529],.fade-leave-active[data-v-75241529]{transition:all .3s ease}.fade-enter[data-v-75241529],.fade-leave-to[data-v-75241529]{opacity:0}.particles-js-canvas-el[data-v-75241529]{top:0;bottom:0;left:0;right:0;position:absolute;pointer-events:none;z-index:-1}.rendered-markdown[data-v-75241529]{white-space:normal;word-wrap:break-word}.rendered-markdown h1[data-v-75241529]{margin:0;padding:0;color:#444;margin-bottom:5px}.rendered-markdown a[data-v-75241529],.rendered-markdown h1[data-v-75241529],.rendered-markdown h2[data-v-75241529],.rendered-markdown h3[data-v-75241529],.rendered-markdown h4[data-v-75241529],.rendered-markdown h5[data-v-75241529],.rendered-markdown li[data-v-75241529],.rendered-markdown p[data-v-75241529]{color:#444}.rendered-markdown a[data-v-75241529]:first-child,.rendered-markdown h1[data-v-75241529]:first-child,.rendered-markdown h2[data-v-75241529]:first-child,.rendered-markdown h3[data-v-75241529]:first-child,.rendered-markdown h4[data-v-75241529]:first-child,.rendered-markdown h5[data-v-75241529]:first-child,.rendered-markdown li[data-v-75241529]:first-child,.rendered-markdown p[data-v-75241529]:first-child{margin-top:0}.rendered-markdown h1[data-v-75241529],.rendered-markdown h2[data-v-75241529],.rendered-markdown h3[data-v-75241529],.rendered-markdown h4[data-v-75241529],.rendered-markdown h5[data-v-75241529]{font-weight:300}.rendered-markdown h2[data-v-75241529]{color:#444;font-size:1.3em;font-weight:700}.rendered-markdown p[data-v-75241529]{margin:10px 0}.rendered-markdown a[data-v-75241529]{color:#c6002d!important;text-decoration:underline}.rendered-markdown a[data-v-75241529]:hover{color:#c6002d;cursor:pointer}.rendered-markdown blockquote[data-v-75241529]{border-left:3px solid #c6002d;color:#ccc;margin:30px 20px 30px 0;padding-left:20px;font-style:italic}.rendered-markdown pre[data-v-75241529]{border-radius:6px;background-color:#e9e9e9;max-width:100%;padding:20px;white-space:normal;word-wrap:break-word}.rendered-markdown img[data-v-75241529]{display:inline-block;margin:10px;width:100%;max-width:160px}.rendered-markdown .fc-image>img[data-v-75241529],.rendered-markdown .fc-image img[data-v-75241529],.rendered-markdown img[data-4c][data-v-75241529]{display:block;margin:0;max-width:100%;padding:0;width:100%}.rendered-markdown .md-bio[data-v-75241529]{display:inline-block;min-height:100px;overflow:hidden;padding:10px;position:relative;width:160px}.rendered-markdown .md-bio img.md-bio--image[data-v-75241529]{border-radius:50%;margin:0;padding:0;margin:0 20px;height:120px;width:120px}.rendered-markdown .md-bio .md-bio--content[data-v-75241529]{border-left:1px solid #e9e9e9;padding:10px}.rendered-markdown .md-bio h5.md-bio--caption[data-v-75241529]{margin:0;padding:0;font-size:1em;font-weight:700;height:20px;line-height:20px;margin:5px 0;max-width:160px;overflow:hidden;text-align:center}.rendered-markdown .md-bio.md-bio--with-bio[data-v-75241529]{border-radius:6px;box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:10px;padding-left:100px;max-width:100%;width:100%}.rendered-markdown .md-bio.md-bio--with-bio img.md-bio--image[data-v-75241529]{margin:0;padding:0;position:absolute;top:10px;left:10px;height:80px;width:80px}.rendered-markdown .md-bio.md-bio--with-bio h5.md-bio--caption[data-v-75241529]{margin:0;padding:0;height:20px;max-width:100%;text-align:left;width:100%}.rendered-markdown .md-bio.md-bio--with-bio p.md-bio--bio[data-v-75241529]{margin:0;padding:0;color:#666;text-align:left}.pure-button[data-v-75241529]{transition:all .3s ease;border-radius:4px;background-color:transparent;border:1px solid #c6002d;color:#c6002d;display:inline-block;font-family:inherit;font-size:100%;outline:0;padding:.5em 1em;text-align:center;text-decoration:none}.pure-button[data-v-75241529]:hover{background-color:#b20028;color:#fff;cursor:pointer}.pure-button.full-width[data-v-75241529]{display:block;margin-bottom:10px}.pure-button[disabled][data-v-75241529]{background-color:#e1e1e1!important;border-color:#e1e1e1!important;color:$color-text-darkest-grey!important;opacity:.5;pointer-events:none}.pure-button.pure-button-primary[data-v-75241529]{background-color:#c6002d;color:#fff;border-color:#c6002d}.pure-button.pure-button-primary[data-v-75241529]:hover{background-color:#b20028;color:#fff;cursor:pointer}.pure-button.pure-button-info[data-v-75241529]{background-color:#1864ef;color:#fff;border-color:#1864ef}.pure-button.pure-button-info[data-v-75241529]:hover{background-color:#0f58dd;color:#fff;cursor:pointer}.pure-button.pure-button-success[data-v-75241529]{background-color:#20af3d;color:#fff;border-color:#20af3d}.pure-button.pure-button-success[data-v-75241529]:hover{background-color:#1d9e37;color:#fff;cursor:pointer}.pure-button.pure-button-subtle[data-v-75241529]{background-color:transparent;border-color:#ccc;color:#666}.pure-button.pure-button-subtle[data-v-75241529]:hover{background-color:#cbcbcb;color:#444;cursor:pointer}.pure-button.pure-button-youtube[data-v-75241529]{background-color:#c4302b;color:#fff;border-color:#c4302b}.pure-button.pure-button-youtube[data-v-75241529]:hover{background-color:#b02b27;color:#fff;cursor:pointer}.pure-button.pure-button-soundcloud[data-v-75241529]{background-color:#f70;color:#fff;border-color:#f70}.pure-button.pure-button-soundcloud[data-v-75241529]:hover{background-color:#e66b00;color:#fff;cursor:pointer}.pure-button.pure-button-twitter[data-v-75241529]{background-color:#4099ff;color:#fff;border-color:#4099ff}.pure-button.pure-button-twitter[data-v-75241529]:hover{background-color:#2088ff;color:#fff;cursor:pointer}.pure-button.rounded-short[data-v-75241529]{border-radius:22px;line-height:44px;padding:0 30px}.pure-button.rounded-tall[data-v-75241529]{border-radius:25px;line-height:50px;padding:0 30px}.feedback-section h1.feedback-section-title[data-v-75241529]{margin:0;padding:0;padding:0 10px}.feedback-section h5.feedback-section-subtitle[data-v-75241529]{margin:0;padding:0;color:#666;padding:0 10px;margin-bottom:10px}.feedback-section .feedback-tile[data-v-75241529]{margin:0;padding:0;list-style:none}.feedback-section .feedback-tile .user-strip[data-v-75241529]{padding-left:60px;position:relative}.feedback-section .feedback-tile .user-strip img.user-profile-image[data-v-75241529]{border-radius:50%;height:50px;width:50px;position:absolute;top:5px;left:5px}.feedback-section .feedback-tile .user-strip h5.user-profile-name[data-v-75241529]{margin:0;padding:0;height:60px;line-height:60px;padding:0 10px}.feedback-conversation[data-v-75241529]{padding-top:20px;padding-bottom:60px;position:relative}.feedback-conversation .feedback-message-wrapper .feedback-message[data-v-75241529]{display:inline-block;float:right;margin-bottom:10px;padding-right:40px;position:relative}.feedback-conversation .feedback-message-wrapper .feedback-message img.avatar[data-v-75241529]{border-radius:50%;height:34px;position:absolute;top:0;right:0}.feedback-conversation .feedback-message-wrapper .feedback-message .feedback-message--bubble[data-v-75241529]{transition:all .3s ease;border-radius:17px;background-color:#107598;padding:6px 12px}.feedback-conversation .feedback-message-wrapper .feedback-message .feedback-message--bubble p[data-v-75241529]{transition:all .3s ease;margin:0;padding:0;color:#fff}.feedback-conversation .feedback-message-wrapper .feedback-message .feedback-message--author[data-v-75241529]{position:relative;text-align:right}.feedback-conversation .feedback-message-wrapper .feedback-message .feedback-message--author p[data-v-75241529]{margin:0;padding:0;padding:4px 0;color:#666;font-size:.7em}.feedback-conversation .feedback-message-wrapper .feedback-message.reply[data-v-75241529]{float:left;padding-right:0;padding-left:40px}.feedback-conversation .feedback-message-wrapper .feedback-message.reply img.avatar[data-v-75241529]{right:auto;left:0}.feedback-conversation .feedback-message-wrapper .feedback-message.reply .feedback-message--bubble[data-v-75241529]{background-color:#e1e1e1}.feedback-conversation .feedback-message-wrapper .feedback-message.reply .feedback-message--bubble p[data-v-75241529]{color:#444}.feedback-conversation .feedback-message-wrapper .feedback-message.reply .feedback-message--author[data-v-75241529]{text-align:left}.feedback-conversation .feedback-message-wrapper .feedback-message.locked[data-v-75241529]:hover{cursor:pointer}.feedback-conversation .feedback-message-wrapper .feedback-message.locked:hover .feedback-message--bubble[data-v-75241529]{background-color:#107598}.feedback-conversation .feedback-message-wrapper .feedback-message.locked:hover .feedback-message--bubble p[data-v-75241529]{color:#fff}.feedback-conversation .feedback-submission[data-v-75241529]{background-color:#f9f9f9;border:1px solid #e1e1e1;padding:10px}.feedback-conversation .feedback-submission textarea[data-v-75241529]{background-color:transparent;border:none;display:block;font-size:1em;outline:0;resize:none;min-height:60px;width:100%}.feedback-conversation .feedback-submission .feedback-submission--footer[data-v-75241529]{top:0;bottom:0;left:0;right:0;background:#fff;height:60px;position:absolute;top:auto}.feedback-conversation .feedback-submission .feedback-submission--footer p.feedback-submission-note[data-v-75241529]{margin:0;padding:0;box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;color:#666;float:left;font-size:.9em;line-height:20px;padding:20px 0;width:calc(100% - 120px)}.feedback-conversation .feedback-submission .feedback-submission--footer .pure-button[data-v-75241529]{background-color:#107598;border-color:#107598;color:#fff;float:right;margin:10px 0}.feedback-conversation .feedback-submission .feedback-submission--footer .pure-button[data-v-75241529]:hover{background-color:#0e6989}", "", {"version":3,"sources":["/repos/elevator/src/components/feedback/FeedbackView.vue"],"names":[],"mappings":"AA8OA,4CAEE,8CAAoD,AACpD,mCAAoC,AACpC,kCAAmC,AACnC,SAAU,AACV,SAAW,CACZ,AACD,oDAEE,YAAc,CACf,AACD,4BACE,UAAY,CACb,AACD,6BACE,WAAa,CACd,AACD,2BACE,WAAY,AACZ,UAAY,CACb,AACD,0BACE,WAAY,AACZ,UAAY,CACb,AACD,4BACE,kBAAqB,CACtB,AACD,6BACE,mBAAsB,CACvB,AACD,mCACE,+BAAkC,CACnC,AACD,iCACE,kBAAmB,AACnB,gBAAiB,AACjB,iBAAmB,CACpB,AACD,yBACA,iCACI,gBAAiB,AACjB,YAAc,CACjB,CACA,AACD,uDACE,YAAc,CACf,AACD,gCACE,kBAAmB,AACnB,aAAc,AACd,eAAmB,CACpB,AACD,yBACA,gCACI,eAAiB,CACpB,CACA,AACD,4CACE,qBAAuB,CACxB,AACD,6CACE,YAAc,CACf,AACD,+CACE,SAAW,CACZ,AACD,6CACE,gBAAiB,AACjB,eAAiB,CAClB,AACD,wEAEE,uBAA0B,CAC3B,AACD,6DAEE,SAAW,CACZ,AACD,yCACE,MAAO,AACP,SAAU,AACV,OAAQ,AACR,QAAS,AACT,kBAAmB,AACnB,oBAAqB,AACrB,UAAY,CACb,AACD,oCACE,mBAAqB,AACrB,oBAAsB,CACvB,AACD,uCACE,SAAU,AACV,UAAW,AACX,WAAY,AACZ,iBAAmB,CACpB,AACD,sTAQE,UAAY,CACb,AACD,sZAQE,YAAc,CACf,AACD,mMAKE,eAAiB,CAClB,AACD,uCACE,WAAY,AACZ,gBAAiB,AACjB,eAAkB,CACnB,AACD,sCACE,aAAe,CAChB,AACD,sCACE,wBAA0B,AAC1B,yBAA2B,CAC5B,AACD,4CACE,cAAe,AACf,cAAgB,CACjB,AACD,+CACE,8BAA+B,AAC/B,WAAY,AACZ,wBAA2B,AAC3B,kBAAmB,AACnB,iBAAmB,CACpB,AACD,wCACE,kBAAmB,AACnB,yBAA0B,AAC1B,eAAgB,AAChB,aAAc,AACd,mBAAqB,AACrB,oBAAsB,CACvB,AACD,wCACE,qBAAsB,AACtB,YAAa,AACb,WAAY,AACZ,eAAiB,CAClB,AACD,qJAGE,cAAe,AACf,SAAU,AACV,eAAgB,AAChB,UAAW,AACX,UAAY,CACb,AACD,4CACE,qBAAsB,AACtB,iBAAkB,AAClB,gBAAiB,AACjB,aAAc,AACd,kBAAmB,AACnB,WAAa,CACd,AACD,8DACE,kBAAmB,AACnB,SAAU,AACV,UAAW,AACX,cAAe,AACf,aAAc,AACd,WAAa,CACd,AACD,6DACE,8BAA+B,AAC/B,YAAc,CACf,AACD,+DACE,SAAU,AACV,UAAW,AACX,cAAe,AACf,gBAAkB,AAClB,YAAa,AACb,iBAAkB,AAClB,aAAc,AACd,gBAAiB,AACjB,gBAAiB,AACjB,iBAAmB,CACpB,AACD,6DACE,kBAAmB,AACnB,sBAAuB,AACvB,2BAA4B,AAC5B,8BAA+B,AAC/B,aAAc,AACd,mBAAoB,AACpB,eAAgB,AAChB,UAAY,CACb,AACD,+EACE,SAAU,AACV,UAAW,AACX,kBAAmB,AACnB,SAAU,AACV,UAAW,AACX,YAAa,AACb,UAAY,CACb,AACD,gFACE,SAAU,AACV,UAAW,AACX,YAAa,AACb,eAAgB,AAChB,gBAAiB,AACjB,UAAY,CACb,AACD,2EACE,SAAU,AACV,UAAW,AACX,WAAY,AACZ,eAAiB,CAClB,AACD,8BACE,wBAA0B,AAC1B,kBAAmB,AACnB,6BAA8B,AAC9B,yBAA0B,AAC1B,cAAe,AACf,qBAAsB,AACtB,oBAAqB,AACrB,eAAgB,AAChB,UAAW,AACX,iBAAmB,AACnB,kBAAmB,AACnB,oBAAsB,CACvB,AACD,oCACE,yBAA0B,AAC1B,WAAY,AACZ,cAAgB,CACjB,AACD,yCACE,cAAe,AACf,kBAAoB,CACrB,AACD,wCACE,mCAAqC,AACrC,+BAAiC,AACjC,yCAA2C,AAC3C,WAAa,AACb,mBAAqB,CACtB,AACD,kDACE,yBAA0B,AAC1B,WAAY,AACZ,oBAAsB,CACvB,AACD,wDACE,yBAA0B,AAC1B,WAAY,AACZ,cAAgB,CACjB,AACD,+CACE,yBAA0B,AAC1B,WAAY,AACZ,oBAAsB,CACvB,AACD,qDACE,yBAA0B,AAC1B,WAAY,AACZ,cAAgB,CACjB,AACD,kDACE,yBAA0B,AAC1B,WAAY,AACZ,oBAAsB,CACvB,AACD,wDACE,yBAA0B,AAC1B,WAAY,AACZ,cAAgB,CACjB,AACD,iDACE,6BAA8B,AAC9B,kBAAmB,AACnB,UAAY,CACb,AACD,uDACE,yBAA0B,AAC1B,WAAY,AACZ,cAAgB,CACjB,AACD,kDACE,yBAA0B,AAC1B,WAAY,AACZ,oBAAsB,CACvB,AACD,wDACE,yBAA0B,AAC1B,WAAY,AACZ,cAAgB,CACjB,AACD,qDACE,sBAAuB,AACvB,WAAY,AACZ,iBAAmB,CACpB,AACD,2DACE,yBAA0B,AAC1B,WAAY,AACZ,cAAgB,CACjB,AACD,kDACE,yBAA0B,AAC1B,WAAY,AACZ,oBAAsB,CACvB,AACD,wDACE,yBAA0B,AAC1B,WAAY,AACZ,cAAgB,CACjB,AACD,4CACE,mBAAoB,AACpB,iBAAkB,AAClB,cAAgB,CACjB,AACD,2CACE,mBAAoB,AACpB,iBAAkB,AAClB,cAAgB,CACjB,AACD,6DACE,SAAU,AACV,UAAW,AACX,cAAgB,CACjB,AACD,gEACE,SAAU,AACV,UAAW,AACX,WAAY,AACZ,eAAgB,AAChB,kBAAoB,CACrB,AACD,kDACE,SAAU,AACV,UAAW,AACX,eAAiB,CAClB,AACD,8DACE,kBAAmB,AACnB,iBAAmB,CACpB,AACD,qFACE,kBAAmB,AACnB,YAAa,AACb,WAAY,AACZ,kBAAmB,AACnB,QAAS,AACT,QAAU,CACX,AACD,mFACE,SAAU,AACV,UAAW,AACX,YAAa,AACb,iBAAkB,AAClB,cAAgB,CACjB,AACD,wCACE,iBAAkB,AAClB,oBAAqB,AACrB,iBAAmB,CACpB,AACD,oFACE,qBAAsB,AACtB,YAAa,AACb,mBAAoB,AACpB,mBAAoB,AACpB,iBAAmB,CACpB,AACD,+FACE,kBAAmB,AACnB,YAAa,AACb,kBAAmB,AACnB,MAAO,AACP,OAAS,CACV,AACD,8GACE,wBAA0B,AAC1B,mBAAoB,AACpB,yBAA0B,AAC1B,gBAAkB,CACnB,AACD,gHACE,wBAA0B,AAC1B,SAAU,AACV,UAAW,AACX,UAAY,CACb,AACD,8GACE,kBAAmB,AACnB,gBAAkB,CACnB,AACD,gHACE,SAAU,AACV,UAAW,AACX,cAAe,AACf,WAAY,AACZ,cAAiB,CAClB,AACD,0FACE,WAAY,AACZ,gBAAmB,AACnB,iBAAmB,CACpB,AACD,qGACE,WAAY,AACZ,MAAQ,CACT,AACD,oHACE,wBAA0B,CAC3B,AACD,sHACE,UAAY,CACb,AACD,oHACE,eAAiB,CAClB,AACD,iGACE,cAAgB,CACjB,AACD,2HACE,wBAA0B,CAC3B,AACD,6HACE,UAAY,CACb,AACD,6DACE,yBAA0B,AAC1B,yBAA0B,AAC1B,YAAc,CACf,AACD,sEACE,6BAA8B,AAC9B,YAAa,AACb,cAAe,AACf,cAAe,AACf,UAAW,AACX,YAAa,AACb,gBAAiB,AACjB,UAAY,CACb,AACD,0FACE,MAAO,AACP,SAAU,AACV,OAAQ,AACR,QAAS,AACT,gBAAiB,AACjB,YAAa,AACb,kBAAmB,AACnB,QAAU,CACX,AACD,qHACE,SAAU,AACV,UAAW,AACX,sBAAuB,AACvB,2BAA4B,AAC5B,8BAA+B,AAC/B,WAAY,AACZ,WAAY,AACZ,eAAiB,AACjB,iBAAkB,AAClB,eAAgB,AAChB,wBAA0B,CAC3B,AACD,uGACE,yBAA0B,AAC1B,qBAAsB,AACtB,WAAY,AACZ,YAAa,AACb,aAAe,CAChB,AACD,6GACE,wBAA0B,CAC3B","file":"FeedbackView.vue","sourcesContent":["\nhtml[data-v-75241529],\nbody[data-v-75241529] {\n  font-family: 'Avenir', Helvetica, Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  margin: 0;\n  padding: 0;\n}\n.hidden[data-v-75241529],\n[v-cloak][data-v-75241529] {\n  display: none;\n}\n.pull-left[data-v-75241529] {\n  float: left;\n}\n.pull-right[data-v-75241529] {\n  float: right;\n}\n.clearfix[data-v-75241529] {\n  clear: both;\n  float: none;\n}\n.fa-icon[data-v-75241529] {\n  width: auto;\n  height: 1em;\n}\n.no-margin[data-v-75241529] {\n  margin: 0 !important;\n}\n.no-padding[data-v-75241529] {\n  padding: 0 !important;\n}\n.background-white[data-v-75241529] {\n  background-color: #fff !important;\n}\n.main-container[data-v-75241529] {\n  border-radius: 4px;\n  margin-top: 20px;\n  position: relative;\n}\n@media (max-width: 800px) {\n.main-container[data-v-75241529] {\n    border-radius: 0;\n    margin-top: 0;\n}\n}\n.main-container.main-container-padded[data-v-75241529] {\n  padding: 20px;\n}\n.content-block[data-v-75241529] {\n  border-radius: 4px;\n  padding: 20px;\n  margin: 0 0 20px 0;\n}\n@media (max-width: 800px) {\n.content-block[data-v-75241529] {\n    border-radius: 0;\n}\n}\n.content-block.white-block[data-v-75241529] {\n  background-color: #fff;\n}\n.content-block.padded-block[data-v-75241529] {\n  padding: 40px;\n}\n.content-block.unpadded-block[data-v-75241529] {\n  padding: 0;\n}\n.content-block.header-block[data-v-75241529] {\n  margin-top: 20px;\n  overflow: hidden;\n}\n.fade-enter-active[data-v-75241529],\n.fade-leave-active[data-v-75241529] {\n  transition: all 0.3s ease;\n}\n.fade-enter[data-v-75241529],\n.fade-leave-to[data-v-75241529] {\n  opacity: 0;\n}\n.particles-js-canvas-el[data-v-75241529] {\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  position: absolute;\n  pointer-events: none;\n  z-index: -1;\n}\n.rendered-markdown[data-v-75241529] {\n  white-space: initial;\n  word-wrap: break-word;\n}\n.rendered-markdown h1[data-v-75241529] {\n  margin: 0;\n  padding: 0;\n  color: #444;\n  margin-bottom: 5px;\n}\n.rendered-markdown h1[data-v-75241529],\n.rendered-markdown h2[data-v-75241529],\n.rendered-markdown h3[data-v-75241529],\n.rendered-markdown h4[data-v-75241529],\n.rendered-markdown h5[data-v-75241529],\n.rendered-markdown p[data-v-75241529],\n.rendered-markdown a[data-v-75241529],\n.rendered-markdown li[data-v-75241529] {\n  color: #444;\n}\n.rendered-markdown h1[data-v-75241529]:first-child,\n.rendered-markdown h2[data-v-75241529]:first-child,\n.rendered-markdown h3[data-v-75241529]:first-child,\n.rendered-markdown h4[data-v-75241529]:first-child,\n.rendered-markdown h5[data-v-75241529]:first-child,\n.rendered-markdown p[data-v-75241529]:first-child,\n.rendered-markdown a[data-v-75241529]:first-child,\n.rendered-markdown li[data-v-75241529]:first-child {\n  margin-top: 0;\n}\n.rendered-markdown h1[data-v-75241529],\n.rendered-markdown h2[data-v-75241529],\n.rendered-markdown h3[data-v-75241529],\n.rendered-markdown h4[data-v-75241529],\n.rendered-markdown h5[data-v-75241529] {\n  font-weight: 300;\n}\n.rendered-markdown h2[data-v-75241529] {\n  color: #444;\n  font-size: 1.3em;\n  font-weight: bold;\n}\n.rendered-markdown p[data-v-75241529] {\n  margin: 10px 0;\n}\n.rendered-markdown a[data-v-75241529] {\n  color: #c6002d !important;\n  text-decoration: underline;\n}\n.rendered-markdown a[data-v-75241529]:hover {\n  color: #c6002d;\n  cursor: pointer;\n}\n.rendered-markdown blockquote[data-v-75241529] {\n  border-left: #c6002d 3px solid;\n  color: #ccc;\n  margin: 30px 20px 30px 0px;\n  padding-left: 20px;\n  font-style: italic;\n}\n.rendered-markdown pre[data-v-75241529] {\n  border-radius: 6px;\n  background-color: #e9e9e9;\n  max-width: 100%;\n  padding: 20px;\n  white-space: initial;\n  word-wrap: break-word;\n}\n.rendered-markdown img[data-v-75241529] {\n  display: inline-block;\n  margin: 10px;\n  width: 100%;\n  max-width: 160px;\n}\n.rendered-markdown img[data-4c][data-v-75241529],\n.rendered-markdown .fc-image img[data-v-75241529],\n.rendered-markdown .fc-image > img[data-v-75241529] {\n  display: block;\n  margin: 0;\n  max-width: 100%;\n  padding: 0;\n  width: 100%;\n}\n.rendered-markdown .md-bio[data-v-75241529] {\n  display: inline-block;\n  min-height: 100px;\n  overflow: hidden;\n  padding: 10px;\n  position: relative;\n  width: 160px;\n}\n.rendered-markdown .md-bio img.md-bio--image[data-v-75241529] {\n  border-radius: 50%;\n  margin: 0;\n  padding: 0;\n  margin: 0 20px;\n  height: 120px;\n  width: 120px;\n}\n.rendered-markdown .md-bio .md-bio--content[data-v-75241529] {\n  border-left: #e9e9e9 1px solid;\n  padding: 10px;\n}\n.rendered-markdown .md-bio h5.md-bio--caption[data-v-75241529] {\n  margin: 0;\n  padding: 0;\n  font-size: 1em;\n  font-weight: bold;\n  height: 20px;\n  line-height: 20px;\n  margin: 5px 0;\n  max-width: 160px;\n  overflow: hidden;\n  text-align: center;\n}\n.rendered-markdown .md-bio.md-bio--with-bio[data-v-75241529] {\n  border-radius: 6px;\n  box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  padding: 10px;\n  padding-left: 100px;\n  max-width: 100%;\n  width: 100%;\n}\n.rendered-markdown .md-bio.md-bio--with-bio img.md-bio--image[data-v-75241529] {\n  margin: 0;\n  padding: 0;\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  height: 80px;\n  width: 80px;\n}\n.rendered-markdown .md-bio.md-bio--with-bio h5.md-bio--caption[data-v-75241529] {\n  margin: 0;\n  padding: 0;\n  height: 20px;\n  max-width: 100%;\n  text-align: left;\n  width: 100%;\n}\n.rendered-markdown .md-bio.md-bio--with-bio p.md-bio--bio[data-v-75241529] {\n  margin: 0;\n  padding: 0;\n  color: #666;\n  text-align: left;\n}\nhtml[data-v-75241529],\nbody[data-v-75241529] {\n  font-family: 'Avenir', Helvetica, Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  margin: 0;\n  padding: 0;\n}\n.hidden[data-v-75241529],\n[v-cloak][data-v-75241529] {\n  display: none;\n}\n.pull-left[data-v-75241529] {\n  float: left;\n}\n.pull-right[data-v-75241529] {\n  float: right;\n}\n.clearfix[data-v-75241529] {\n  clear: both;\n  float: none;\n}\n.fa-icon[data-v-75241529] {\n  width: auto;\n  height: 1em;\n}\n.no-margin[data-v-75241529] {\n  margin: 0 !important;\n}\n.no-padding[data-v-75241529] {\n  padding: 0 !important;\n}\n.background-white[data-v-75241529] {\n  background-color: #fff !important;\n}\n.main-container[data-v-75241529] {\n  border-radius: 4px;\n  margin-top: 20px;\n  position: relative;\n}\n@media (max-width: 800px) {\n.main-container[data-v-75241529] {\n    border-radius: 0;\n    margin-top: 0;\n}\n}\n.main-container.main-container-padded[data-v-75241529] {\n  padding: 20px;\n}\n.content-block[data-v-75241529] {\n  border-radius: 4px;\n  padding: 20px;\n  margin: 0 0 20px 0;\n}\n@media (max-width: 800px) {\n.content-block[data-v-75241529] {\n    border-radius: 0;\n}\n}\n.content-block.white-block[data-v-75241529] {\n  background-color: #fff;\n}\n.content-block.padded-block[data-v-75241529] {\n  padding: 40px;\n}\n.content-block.unpadded-block[data-v-75241529] {\n  padding: 0;\n}\n.content-block.header-block[data-v-75241529] {\n  margin-top: 20px;\n  overflow: hidden;\n}\n.fade-enter-active[data-v-75241529],\n.fade-leave-active[data-v-75241529] {\n  transition: all 0.3s ease;\n}\n.fade-enter[data-v-75241529],\n.fade-leave-to[data-v-75241529] {\n  opacity: 0;\n}\n.particles-js-canvas-el[data-v-75241529] {\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  position: absolute;\n  pointer-events: none;\n  z-index: -1;\n}\n.rendered-markdown[data-v-75241529] {\n  white-space: initial;\n  word-wrap: break-word;\n}\n.rendered-markdown h1[data-v-75241529] {\n  margin: 0;\n  padding: 0;\n  color: #444;\n  margin-bottom: 5px;\n}\n.rendered-markdown h1[data-v-75241529],\n.rendered-markdown h2[data-v-75241529],\n.rendered-markdown h3[data-v-75241529],\n.rendered-markdown h4[data-v-75241529],\n.rendered-markdown h5[data-v-75241529],\n.rendered-markdown p[data-v-75241529],\n.rendered-markdown a[data-v-75241529],\n.rendered-markdown li[data-v-75241529] {\n  color: #444;\n}\n.rendered-markdown h1[data-v-75241529]:first-child,\n.rendered-markdown h2[data-v-75241529]:first-child,\n.rendered-markdown h3[data-v-75241529]:first-child,\n.rendered-markdown h4[data-v-75241529]:first-child,\n.rendered-markdown h5[data-v-75241529]:first-child,\n.rendered-markdown p[data-v-75241529]:first-child,\n.rendered-markdown a[data-v-75241529]:first-child,\n.rendered-markdown li[data-v-75241529]:first-child {\n  margin-top: 0;\n}\n.rendered-markdown h1[data-v-75241529],\n.rendered-markdown h2[data-v-75241529],\n.rendered-markdown h3[data-v-75241529],\n.rendered-markdown h4[data-v-75241529],\n.rendered-markdown h5[data-v-75241529] {\n  font-weight: 300;\n}\n.rendered-markdown h2[data-v-75241529] {\n  color: #444;\n  font-size: 1.3em;\n  font-weight: bold;\n}\n.rendered-markdown p[data-v-75241529] {\n  margin: 10px 0;\n}\n.rendered-markdown a[data-v-75241529] {\n  color: #c6002d !important;\n  text-decoration: underline;\n}\n.rendered-markdown a[data-v-75241529]:hover {\n  color: #c6002d;\n  cursor: pointer;\n}\n.rendered-markdown blockquote[data-v-75241529] {\n  border-left: #c6002d 3px solid;\n  color: #ccc;\n  margin: 30px 20px 30px 0px;\n  padding-left: 20px;\n  font-style: italic;\n}\n.rendered-markdown pre[data-v-75241529] {\n  border-radius: 6px;\n  background-color: #e9e9e9;\n  max-width: 100%;\n  padding: 20px;\n  white-space: initial;\n  word-wrap: break-word;\n}\n.rendered-markdown img[data-v-75241529] {\n  display: inline-block;\n  margin: 10px;\n  width: 100%;\n  max-width: 160px;\n}\n.rendered-markdown img[data-4c][data-v-75241529],\n.rendered-markdown .fc-image img[data-v-75241529],\n.rendered-markdown .fc-image > img[data-v-75241529] {\n  display: block;\n  margin: 0;\n  max-width: 100%;\n  padding: 0;\n  width: 100%;\n}\n.rendered-markdown .md-bio[data-v-75241529] {\n  display: inline-block;\n  min-height: 100px;\n  overflow: hidden;\n  padding: 10px;\n  position: relative;\n  width: 160px;\n}\n.rendered-markdown .md-bio img.md-bio--image[data-v-75241529] {\n  border-radius: 50%;\n  margin: 0;\n  padding: 0;\n  margin: 0 20px;\n  height: 120px;\n  width: 120px;\n}\n.rendered-markdown .md-bio .md-bio--content[data-v-75241529] {\n  border-left: #e9e9e9 1px solid;\n  padding: 10px;\n}\n.rendered-markdown .md-bio h5.md-bio--caption[data-v-75241529] {\n  margin: 0;\n  padding: 0;\n  font-size: 1em;\n  font-weight: bold;\n  height: 20px;\n  line-height: 20px;\n  margin: 5px 0;\n  max-width: 160px;\n  overflow: hidden;\n  text-align: center;\n}\n.rendered-markdown .md-bio.md-bio--with-bio[data-v-75241529] {\n  border-radius: 6px;\n  box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  padding: 10px;\n  padding-left: 100px;\n  max-width: 100%;\n  width: 100%;\n}\n.rendered-markdown .md-bio.md-bio--with-bio img.md-bio--image[data-v-75241529] {\n  margin: 0;\n  padding: 0;\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  height: 80px;\n  width: 80px;\n}\n.rendered-markdown .md-bio.md-bio--with-bio h5.md-bio--caption[data-v-75241529] {\n  margin: 0;\n  padding: 0;\n  height: 20px;\n  max-width: 100%;\n  text-align: left;\n  width: 100%;\n}\n.rendered-markdown .md-bio.md-bio--with-bio p.md-bio--bio[data-v-75241529] {\n  margin: 0;\n  padding: 0;\n  color: #666;\n  text-align: left;\n}\n.pure-button[data-v-75241529] {\n  transition: all 0.3s ease;\n  border-radius: 4px;\n  background-color: transparent;\n  border: #c6002d 1px solid;\n  color: #c6002d;\n  display: inline-block;\n  font-family: inherit;\n  font-size: 100%;\n  outline: 0;\n  padding: 0.5em 1em;\n  text-align: center;\n  text-decoration: none;\n}\n.pure-button[data-v-75241529]:hover {\n  background-color: #b20028;\n  color: #fff;\n  cursor: pointer;\n}\n.pure-button.full-width[data-v-75241529] {\n  display: block;\n  margin-bottom: 10px;\n}\n.pure-button[disabled][data-v-75241529] {\n  background-color: #e1e1e1 !important;\n  border-color: #e1e1e1 !important;\n  color: $color-text-darkest-grey !important;\n  opacity: 0.5;\n  pointer-events: none;\n}\n.pure-button.pure-button-primary[data-v-75241529] {\n  background-color: #c6002d;\n  color: #fff;\n  border-color: #c6002d;\n}\n.pure-button.pure-button-primary[data-v-75241529]:hover {\n  background-color: #b20028;\n  color: #fff;\n  cursor: pointer;\n}\n.pure-button.pure-button-info[data-v-75241529] {\n  background-color: #1864ef;\n  color: #fff;\n  border-color: #1864ef;\n}\n.pure-button.pure-button-info[data-v-75241529]:hover {\n  background-color: #0f58dd;\n  color: #fff;\n  cursor: pointer;\n}\n.pure-button.pure-button-success[data-v-75241529] {\n  background-color: #20af3d;\n  color: #fff;\n  border-color: #20af3d;\n}\n.pure-button.pure-button-success[data-v-75241529]:hover {\n  background-color: #1d9e37;\n  color: #fff;\n  cursor: pointer;\n}\n.pure-button.pure-button-subtle[data-v-75241529] {\n  background-color: transparent;\n  border-color: #ccc;\n  color: #666;\n}\n.pure-button.pure-button-subtle[data-v-75241529]:hover {\n  background-color: #cbcbcb;\n  color: #444;\n  cursor: pointer;\n}\n.pure-button.pure-button-youtube[data-v-75241529] {\n  background-color: #c4302b;\n  color: #fff;\n  border-color: #c4302b;\n}\n.pure-button.pure-button-youtube[data-v-75241529]:hover {\n  background-color: #b02b27;\n  color: #fff;\n  cursor: pointer;\n}\n.pure-button.pure-button-soundcloud[data-v-75241529] {\n  background-color: #f70;\n  color: #fff;\n  border-color: #f70;\n}\n.pure-button.pure-button-soundcloud[data-v-75241529]:hover {\n  background-color: #e66b00;\n  color: #fff;\n  cursor: pointer;\n}\n.pure-button.pure-button-twitter[data-v-75241529] {\n  background-color: #4099ff;\n  color: #fff;\n  border-color: #4099ff;\n}\n.pure-button.pure-button-twitter[data-v-75241529]:hover {\n  background-color: #2088ff;\n  color: #fff;\n  cursor: pointer;\n}\n.pure-button.rounded-short[data-v-75241529] {\n  border-radius: 22px;\n  line-height: 44px;\n  padding: 0 30px;\n}\n.pure-button.rounded-tall[data-v-75241529] {\n  border-radius: 25px;\n  line-height: 50px;\n  padding: 0 30px;\n}\n.feedback-section h1.feedback-section-title[data-v-75241529] {\n  margin: 0;\n  padding: 0;\n  padding: 0 10px;\n}\n.feedback-section h5.feedback-section-subtitle[data-v-75241529] {\n  margin: 0;\n  padding: 0;\n  color: #666;\n  padding: 0 10px;\n  margin-bottom: 10px;\n}\n.feedback-section .feedback-tile[data-v-75241529] {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.feedback-section .feedback-tile .user-strip[data-v-75241529] {\n  padding-left: 60px;\n  position: relative;\n}\n.feedback-section .feedback-tile .user-strip img.user-profile-image[data-v-75241529] {\n  border-radius: 50%;\n  height: 50px;\n  width: 50px;\n  position: absolute;\n  top: 5px;\n  left: 5px;\n}\n.feedback-section .feedback-tile .user-strip h5.user-profile-name[data-v-75241529] {\n  margin: 0;\n  padding: 0;\n  height: 60px;\n  line-height: 60px;\n  padding: 0 10px;\n}\n.feedback-conversation[data-v-75241529] {\n  padding-top: 20px;\n  padding-bottom: 60px;\n  position: relative;\n}\n.feedback-conversation .feedback-message-wrapper .feedback-message[data-v-75241529] {\n  display: inline-block;\n  float: right;\n  margin-bottom: 10px;\n  padding-right: 40px;\n  position: relative;\n}\n.feedback-conversation .feedback-message-wrapper .feedback-message img.avatar[data-v-75241529] {\n  border-radius: 50%;\n  height: 34px;\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n.feedback-conversation .feedback-message-wrapper .feedback-message .feedback-message--bubble[data-v-75241529] {\n  transition: all 0.3s ease;\n  border-radius: 17px;\n  background-color: #107598;\n  padding: 6px 12px;\n}\n.feedback-conversation .feedback-message-wrapper .feedback-message .feedback-message--bubble p[data-v-75241529] {\n  transition: all 0.3s ease;\n  margin: 0;\n  padding: 0;\n  color: #fff;\n}\n.feedback-conversation .feedback-message-wrapper .feedback-message .feedback-message--author[data-v-75241529] {\n  position: relative;\n  text-align: right;\n}\n.feedback-conversation .feedback-message-wrapper .feedback-message .feedback-message--author p[data-v-75241529] {\n  margin: 0;\n  padding: 0;\n  padding: 4px 0;\n  color: #666;\n  font-size: 0.7em;\n}\n.feedback-conversation .feedback-message-wrapper .feedback-message.reply[data-v-75241529] {\n  float: left;\n  padding-right: 0px;\n  padding-left: 40px;\n}\n.feedback-conversation .feedback-message-wrapper .feedback-message.reply img.avatar[data-v-75241529] {\n  right: auto;\n  left: 0;\n}\n.feedback-conversation .feedback-message-wrapper .feedback-message.reply .feedback-message--bubble[data-v-75241529] {\n  background-color: #e1e1e1;\n}\n.feedback-conversation .feedback-message-wrapper .feedback-message.reply .feedback-message--bubble p[data-v-75241529] {\n  color: #444;\n}\n.feedback-conversation .feedback-message-wrapper .feedback-message.reply .feedback-message--author[data-v-75241529] {\n  text-align: left;\n}\n.feedback-conversation .feedback-message-wrapper .feedback-message.locked[data-v-75241529]:hover {\n  cursor: pointer;\n}\n.feedback-conversation .feedback-message-wrapper .feedback-message.locked:hover .feedback-message--bubble[data-v-75241529] {\n  background-color: #107598;\n}\n.feedback-conversation .feedback-message-wrapper .feedback-message.locked:hover .feedback-message--bubble p[data-v-75241529] {\n  color: #fff;\n}\n.feedback-conversation .feedback-submission[data-v-75241529] {\n  background-color: #f9f9f9;\n  border: #e1e1e1 1px solid;\n  padding: 10px;\n}\n.feedback-conversation .feedback-submission textarea[data-v-75241529] {\n  background-color: transparent;\n  border: none;\n  display: block;\n  font-size: 1em;\n  outline: 0;\n  resize: none;\n  min-height: 60px;\n  width: 100%;\n}\n.feedback-conversation .feedback-submission .feedback-submission--footer[data-v-75241529] {\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: #fff;\n  height: 60px;\n  position: absolute;\n  top: auto;\n}\n.feedback-conversation .feedback-submission .feedback-submission--footer p.feedback-submission-note[data-v-75241529] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  color: #666;\n  float: left;\n  font-size: 0.9em;\n  line-height: 20px;\n  padding: 20px 0;\n  width: calc(100% - 120px);\n}\n.feedback-conversation .feedback-submission .feedback-submission--footer .pure-button[data-v-75241529] {\n  background-color: #107598;\n  border-color: #107598;\n  color: #fff;\n  float: right;\n  margin: 10px 0;\n}\n.feedback-conversation .feedback-submission .feedback-submission--footer .pure-button[data-v-75241529]:hover {\n  background-color: #0e6989;\n}"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 557:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Icon_vue__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Icon_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_Icon_vue__);


__WEBPACK_IMPORTED_MODULE_0__components_Icon_vue___default.a.register({"angle-left":{"width":640,"height":1792,"paths":[{"d":"M627 544q0 13-10 23l-393 393 393 393q10 10 10 23t-10 23l-50 50q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l50 50q10 10 10 23z"}]}})


/***/ }),

/***/ 560:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Icon_vue__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Icon_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_Icon_vue__);


__WEBPACK_IMPORTED_MODULE_0__components_Icon_vue___default.a.register({"lock":{"width":1152,"height":1792,"paths":[{"d":"M320 768h512v-192q0-106-75-181t-181-75-181 75-75 181v192zM1152 864v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-192q0-184 132-316t316-132 316 132 132 316v192h32q40 0 68 28t28 68z"}]}})


/***/ }),

/***/ 566:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(546);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(413)("7d511359", content, true);

/***/ }),

/***/ 567:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(547);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(413)("45cf85a7", content, true);

/***/ }),

/***/ 571:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(551);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(413)("04c76ac9", content, true);

/***/ }),

/***/ 572:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(552);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(413)("2f03e533", content, true);

/***/ }),

/***/ 603:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMCIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA2NDkuMSAxMTkuNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjQ5LjEgMTE5LjU7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZGlzcGxheTpub25lO2ZpbGw6IzMzMzMzMzt9Cgkuc3Qxe2ZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MTI7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQoJLnN0MntmaWxsOiNGRkZGRkY7fQoJLnN0M3tmaWxsOm5vbmU7c3Ryb2tlOiNGRkZGRkY7c3Ryb2tlLXdpZHRoOjEyO3N0cm9rZS1taXRlcmxpbWl0OjEwO30KCS5zdDR7ZmlsbDpub25lO3N0cm9rZTojRkZGRkZGO3N0cm9rZS13aWR0aDoxMjtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9Cgkuc3Q1e2ZpbGw6bm9uZTtzdHJva2U6IzNGQTlGNTtzdHJva2Utd2lkdGg6Ni45NzM1O3N0cm9rZS1taXRlcmxpbWl0OjEwO30KCS5zdDZ7ZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDo2Ljk3MzU7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQoJLnN0N3tmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjE5LjA4Mzg7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQoJLnN0OHtmaWxsOm5vbmU7c3Ryb2tlOiNGRkZGRkY7c3Ryb2tlLXdpZHRoOjYuOTczNTtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9Cjwvc3R5bGU+CjxnPgoJPHBvbHlsaW5lIGNsYXNzPSJzdDUiIHBvaW50cz0iNjI5LjcsNjYuMiA2MjkuNyw5OC45IDU5Nyw5OC45IAkiLz4KCTxwb2x5bGluZSBjbGFzcz0ic3Q2IiBwb2ludHM9IjU5NywyMC42IDYyOS43LDIwLjYgNjI5LjcsNTMuMyAJIi8+Cgk8cG9seWxpbmUgY2xhc3M9InN0NiIgcG9pbnRzPSI1ODQuMyw5OC45IDU1MS41LDk4LjkgNTUxLjUsNjYuMiAJIi8+Cgk8cG9seWxpbmUgY2xhc3M9InN0NiIgcG9pbnRzPSI1NTEuNSw1My4zIDU1MS41LDIwLjYgNTg0LjMsMjAuNiAJIi8+CjwvZz4KPGc+Cgk8cGF0aCBkPSJNNTQuNiwzOC43djQuN0gzMi41djEzLjRoMTkuNHY0LjdIMzIuNXYxOS4zaC01LjZWMzguN0g1NC42eiIvPgoJPHBhdGggZD0iTTY1LjYsNTEuNWMwLjgtMi43LDIuMS01LDMuOC03LjFjMS43LTIsMy44LTMuNyw2LjMtNC45YzIuNS0xLjIsNS41LTEuOCw4LjgtMS44YzMuMywwLDYuMywwLjYsOC44LDEuOAoJCWMyLjUsMS4yLDQuNiwyLjksNi4zLDQuOWMxLjcsMiwzLDQuNCwzLjgsNy4xYzAuOCwyLjcsMS4zLDUuNCwxLjMsOC4zYzAsMi45LTAuNCw1LjYtMS4zLDguM2MtMC44LDIuNy0yLjEsNS0zLjgsNy4xCgkJYy0xLjcsMi0zLjgsMy43LTYuMyw0LjljLTIuNSwxLjItNS41LDEuOC04LjgsMS44Yy0zLjMsMC02LjMtMC42LTguOC0xLjhjLTIuNS0xLjItNC42LTIuOC02LjMtNC45Yy0xLjctMi0zLTQuNC0zLjgtNy4xCgkJYy0wLjgtMi43LTEuMy01LjQtMS4zLTguM0M2NC4zLDU2LjksNjQuNyw1NC4xLDY1LjYsNTEuNXogTTcwLjcsNjYuMWMwLjYsMi4xLDEuNCwzLjksMi42LDUuNnMyLjcsMyw0LjUsNGMxLjksMSw0LjEsMS41LDYuNiwxLjUKCQljMi42LDAsNC44LTAuNSw2LjYtMS41YzEuOS0xLDMuNC0yLjMsNC41LTRzMi0zLjUsMi42LTUuNmMwLjYtMi4xLDAuOC00LjIsMC44LTYuM2MwLTIuMS0wLjMtNC4yLTAuOC02LjMKCQljLTAuNi0yLjEtMS40LTMuOS0yLjYtNS42Yy0xLjItMS43LTIuNy0zLTQuNS00Yy0xLjktMS00LjEtMS41LTYuNi0xLjVjLTIuNiwwLTQuOCwwLjUtNi42LDEuNWMtMS45LDEtMy40LDIuMy00LjUsNAoJCWMtMS4yLDEuNy0yLDMuNS0yLjYsNS42Yy0wLjYsMi4xLTAuOCw0LjItMC44LDYuM0M2OS45LDYxLjksNzAuMiw2NCw3MC43LDY2LjF6Ii8+Cgk8cGF0aCBkPSJNMTQ2LjgsNzcuOGMtMi45LDIuNy03LDQtMTIuMyw0Yy01LjQsMC05LjctMS4zLTEyLjctMy45Yy0zLjEtMi42LTQuNi02LjctNC42LTEyLjNWMzguN2g1LjZ2MjYuOWMwLDMuOCwxLDYuNiwzLDguNgoJCXM0LjksMi45LDguNywyLjljMy42LDAsNi4zLTEsOC4yLTIuOWMxLjktMS45LDIuOC00LjgsMi44LTguNlYzOC43aDUuNnYyNi45QzE1MS4xLDcxLDE0OS43LDc1LjEsMTQ2LjgsNzcuOHoiLz4KCTxwYXRoIGQ9Ik0xODUuOCwzOC43YzQsMCw3LjIsMSw5LjQsM2MyLjMsMiwzLjQsNC43LDMuNCw4LjFjMCwyLjYtMC42LDQuOC0xLjcsNi43Yy0xLjIsMS45LTMsMy4yLTUuNiw0djAuMWMxLjIsMC4yLDIuMiwwLjYsMywxLjIKCQljMC44LDAuNiwxLjQsMS4yLDEuOCwyYzAuNSwwLjgsMC44LDEuNiwxLDIuNmMwLjIsMC45LDAuNCwxLjksMC41LDNjMC4xLDEsMC4xLDIuMSwwLjIsMy4xYzAsMS4xLDAuMSwyLjEsMC4zLDMuMQoJCWMwLjIsMSwwLjQsMiwwLjcsMi45YzAuMywwLjksMC43LDEuNywxLjMsMi41aC02LjNjLTAuNC0wLjQtMC43LTEtMC44LTEuOGMtMC4xLTAuNy0wLjItMS42LTAuMy0yLjVjMC0wLjktMC4xLTEuOS0wLjEtMwoJCWMwLTEuMS0wLjItMi4xLTAuNC0zLjFjLTAuMi0xLTAuNC0yLTAuNi0yLjljLTAuMi0wLjktMC42LTEuNy0xLjEtMi40Yy0wLjUtMC43LTEuMi0xLjItMi0xLjdjLTAuOC0wLjQtMS45LTAuNi0zLjMtMC42aC0xMy43djE4CgkJSDE2NlYzOC43SDE4NS44eiBNMTg3LDU3LjhjMS4yLTAuMiwyLjItMC42LDMuMS0xLjJjMC45LTAuNiwxLjYtMS4zLDIuMS0yLjNjMC41LTEsMC44LTIuMiwwLjgtMy44YzAtMi4xLTAuNi0zLjktMS44LTUuMgoJCWMtMS4yLTEuMy0zLjEtMi01LjctMmgtMTMuOXYxNC43aDExLjdDMTg0LjYsNTguMSwxODUuOCw1OCwxODcsNTcuOHoiLz4KCTxwYXRoIGQ9Ik0yMzcuOCw0NC43Yy0yLjEtMS41LTQuNy0yLjItNy42LTIuMmMtMi41LDAtNC43LDAuNS02LjUsMS40Yy0xLjgsMC45LTMuMywyLjItNC40LDMuOGMtMS4yLDEuNi0yLDMuNC0yLjYsNS41CgkJYy0wLjYsMi0wLjgsNC4yLTAuOCw2LjRjMCwyLjQsMC4zLDQuNywwLjgsNi44YzAuNiwyLjEsMS40LDQsMi42LDUuNmMxLjIsMS42LDIuNiwyLjksNC41LDMuOGMxLjgsMC45LDQsMS40LDYuNSwxLjQKCQljMS44LDAsMy41LTAuMyw0LjktMC45YzEuNC0wLjYsMi43LTEuNSwzLjctMi41YzEtMS4xLDEuOS0yLjQsMi41LTMuOWMwLjYtMS41LDAuOS0zLjEsMS4xLTQuOGg1LjZjLTAuNiw1LjMtMi40LDkuNC01LjUsMTIuNAoJCWMtMy4xLDMtNy40LDQuNC0xMi44LDQuNGMtMy4zLDAtNi4xLTAuNi04LjYtMS43cy00LjUtMi43LTYuMS00LjZjLTEuNi0yLTIuOC00LjMtMy42LTdjLTAuOC0yLjctMS4yLTUuNi0xLjItOC42CgkJYzAtMy4xLDAuNC02LDEuMy04LjdjMC45LTIuNywyLjEtNSwzLjgtNy4xYzEuNy0yLDMuOC0zLjYsNi4zLTQuOGMyLjUtMS4yLDUuNC0xLjcsOC42LTEuN2MyLjIsMCw0LjMsMC4zLDYuMywwLjkKCQljMiwwLjYsMy43LDEuNSw1LjMsMi42YzEuNSwxLjEsMi44LDIuNiwzLjgsNC4zYzEsMS43LDEuNywzLjcsMiw1LjlIMjQyQzI0MS40LDQ4LjQsMjQwLDQ2LjIsMjM3LjgsNDQuN3oiLz4KCTxwYXRoIGQ9Ik0yNTkuOCw1MS41YzAuOC0yLjcsMi4xLTUsMy44LTcuMWMxLjctMiwzLjgtMy43LDYuMy00LjljMi41LTEuMiw1LjUtMS44LDguOC0xLjhjMy4zLDAsNi4zLDAuNiw4LjgsMS44CgkJYzIuNSwxLjIsNC42LDIuOSw2LjMsNC45YzEuNywyLDMsNC40LDMuOCw3LjFjMC44LDIuNywxLjMsNS40LDEuMyw4LjNjMCwyLjktMC40LDUuNi0xLjMsOC4zYy0wLjgsMi43LTIuMSw1LTMuOCw3LjEKCQljLTEuNywyLTMuOCwzLjctNi4zLDQuOWMtMi41LDEuMi01LjUsMS44LTguOCwxLjhjLTMuMywwLTYuMy0wLjYtOC44LTEuOGMtMi41LTEuMi00LjYtMi44LTYuMy00LjljLTEuNy0yLTMtNC40LTMuOC03LjEKCQljLTAuOC0yLjctMS4zLTUuNC0xLjMtOC4zQzI1OC41LDU2LjksMjU4LjksNTQuMSwyNTkuOCw1MS41eiBNMjY1LDY2LjFjMC42LDIuMSwxLjQsMy45LDIuNiw1LjZjMS4yLDEuNywyLjcsMyw0LjUsNAoJCWMxLjgsMSw0LjEsMS41LDYuNiwxLjVjMi42LDAsNC44LTAuNSw2LjYtMS41czMuNC0yLjMsNC41LTRjMS4yLTEuNywyLTMuNSwyLjYtNS42YzAuNi0yLjEsMC44LTQuMiwwLjgtNi4zYzAtMi4xLTAuMy00LjItMC44LTYuMwoJCWMtMC42LTIuMS0xLjQtMy45LTIuNi01LjZjLTEuMi0xLjctMi43LTMtNC41LTRzLTQuMS0xLjUtNi42LTEuNWMtMi42LDAtNC44LDAuNS02LjYsMS41Yy0xLjksMS0zLjQsMi4zLTQuNSw0CgkJYy0xLjIsMS43LTIsMy41LTIuNiw1LjZjLTAuNiwyLjEtMC44LDQuMi0wLjgsNi4zQzI2NC4xLDYxLjksMjY0LjQsNjQsMjY1LDY2LjF6Ii8+Cgk8cGF0aCBkPSJNMzMxLjUsMzguN2M0LDAsNy4yLDEsOS40LDNjMi4zLDIsMy40LDQuNywzLjQsOC4xYzAsMi42LTAuNiw0LjgtMS43LDYuN2MtMS4yLDEuOS0zLDMuMi01LjYsNHYwLjFjMS4yLDAuMiwyLjIsMC42LDMsMS4yCgkJYzAuOCwwLjYsMS40LDEuMiwxLjgsMmMwLjUsMC44LDAuOCwxLjYsMSwyLjZjMC4yLDAuOSwwLjQsMS45LDAuNSwzYzAuMSwxLDAuMSwyLjEsMC4yLDMuMWMwLDEuMSwwLjEsMi4xLDAuMywzLjEKCQljMC4yLDEsMC40LDIsMC43LDIuOWMwLjMsMC45LDAuNywxLjcsMS4zLDIuNWgtNi4zYy0wLjQtMC40LTAuNy0xLTAuOC0xLjhjLTAuMS0wLjctMC4yLTEuNi0wLjMtMi41YzAtMC45LTAuMS0xLjktMC4xLTMKCQlzLTAuMi0yLjEtMC40LTMuMWMtMC4yLTEtMC40LTItMC42LTIuOWMtMC4yLTAuOS0wLjYtMS43LTEuMS0yLjRjLTAuNS0wLjctMS4yLTEuMi0yLTEuN2MtMC44LTAuNC0xLjktMC42LTMuMy0wLjZoLTEzLjd2MThoLTUuNgoJCVYzOC43SDMzMS41eiBNMzMyLjcsNTcuOGMxLjItMC4yLDIuMi0wLjYsMy4xLTEuMmMwLjktMC42LDEuNi0xLjMsMi4xLTIuM2MwLjUtMSwwLjgtMi4yLDAuOC0zLjhjMC0yLjEtMC42LTMuOS0xLjgtNS4yCgkJYy0xLjItMS4zLTMuMS0yLTUuNy0yaC0xMy45djE0LjdIMzI5QzMzMC4zLDU4LjEsMzMxLjUsNTgsMzMyLjcsNTcuOHoiLz4KCTxwYXRoIGQ9Ik0zNjMuOSwzOC43bDIyLjIsMzQuMmgwLjFWMzguN2g1LjN2NDIuMmgtNi4xbC0yMi0zMy44aC0wLjF2MzMuOEgzNThWMzguN0gzNjMuOXoiLz4KCTxwYXRoIGQ9Ik00MzUuNywzOC43djQuN2gtMjMuNXYxMy40aDIxLjl2NC43aC0yMS45djE0LjZoMjMuN3Y0LjdoLTI5LjNWMzguN0g0MzUuN3oiLz4KCTxwYXRoIGQ9Ik00NjguNCwzOC43YzQsMCw3LjIsMSw5LjQsM2MyLjMsMiwzLjQsNC43LDMuNCw4LjFjMCwyLjYtMC42LDQuOC0xLjcsNi43Yy0xLjIsMS45LTMsMy4yLTUuNiw0djAuMWMxLjIsMC4yLDIuMiwwLjYsMywxLjIKCQljMC44LDAuNiwxLjQsMS4yLDEuOCwyYzAuNSwwLjgsMC44LDEuNiwxLDIuNmMwLjIsMC45LDAuNCwxLjksMC41LDNjMC4xLDEsMC4xLDIuMSwwLjIsMy4xYzAsMS4xLDAuMSwyLjEsMC4zLDMuMQoJCWMwLjIsMSwwLjQsMiwwLjcsMi45YzAuMywwLjksMC43LDEuNywxLjMsMi41aC02LjNjLTAuNC0wLjQtMC43LTEtMC44LTEuOGMtMC4xLTAuNy0wLjItMS42LTAuMy0yLjVjMC0wLjktMC4xLTEuOS0wLjEtMwoJCXMtMC4yLTIuMS0wLjQtMy4xYy0wLjItMS0wLjQtMi0wLjYtMi45Yy0wLjItMC45LTAuNi0xLjctMS4xLTIuNGMtMC41LTAuNy0xLjItMS4yLTItMS43Yy0wLjgtMC40LTEuOS0wLjYtMy4zLTAuNmgtMTMuN3YxOGgtNS42CgkJVjM4LjdINDY4LjR6IE00NjkuNiw1Ny44YzEuMi0wLjIsMi4yLTAuNiwzLjEtMS4yYzAuOS0wLjYsMS42LTEuMywyLjEtMi4zYzAuNS0xLDAuOC0yLjIsMC44LTMuOGMwLTIuMS0wLjYtMy45LTEuOC01LjIKCQljLTEuMi0xLjMtMy4xLTItNS43LTJoLTEzLjl2MTQuN2gxMS43QzQ2Ny4xLDU4LjEsNDY4LjQsNTgsNDY5LjYsNTcuOHoiLz4KCTxwYXRoIGQ9Ik01MTYsNDQuNWMtMS45LTEuNC00LjMtMi03LjItMmMtMS4yLDAtMi4zLDAuMS0zLjUsMC40cy0yLjIsMC42LTMsMS4yYy0wLjksMC42LTEuNiwxLjMtMi4xLDIuMmMtMC41LDAuOS0wLjgsMi4xLTAuOCwzLjUKCQljMCwxLjMsMC40LDIuNCwxLjIsMy4yYzAuOCwwLjgsMS44LDEuNSwzLjEsMmMxLjMsMC41LDIuNywwLjksNC4zLDEuM2MxLjYsMC4zLDMuMywwLjcsNC45LDEuMWMxLjcsMC40LDMuMywwLjksNC45LDEuNAoJCWMxLjYsMC41LDMuMSwxLjMsNC4zLDIuMmMxLjMsMC45LDIuMywyLDMuMSwzLjRjMC44LDEuNCwxLjIsMy4xLDEuMiw1LjJjMCwyLjItMC41LDQuMi0xLjUsNS44Yy0xLDEuNi0yLjMsMi45LTMuOSwzLjkKCQljLTEuNiwxLTMuMywxLjctNS4zLDIuMmMtMS45LDAuNS0zLjksMC43LTUuOCwwLjdjLTIuNCwwLTQuNi0wLjMtNi43LTAuOWMtMi4xLTAuNi00LTEuNS01LjYtMi43Yy0xLjYtMS4yLTIuOS0yLjctMy44LTQuNgoJCWMtMC45LTEuOS0xLjQtNC4xLTEuNC02LjZoNS4zYzAsMS44LDAuMywzLjMsMSw0LjZjMC43LDEuMywxLjYsMi4zLDIuNywzLjJjMS4xLDAuOCwyLjQsMS40LDMuOSwxLjhjMS41LDAuNCwzLDAuNiw0LjYsMC42CgkJYzEuMywwLDIuNS0wLjEsMy44LTAuNGMxLjMtMC4yLDIuNC0wLjYsMy41LTEuMmMxLTAuNiwxLjktMS4zLDIuNS0yLjNjMC42LTEsMC45LTIuMiwwLjktMy44YzAtMS41LTAuNC0yLjYtMS4yLTMuNQoJCWMtMC44LTAuOS0xLjgtMS42LTMuMS0yLjJjLTEuMy0wLjYtMi43LTEtNC4zLTEuNGMtMS42LTAuNC0zLjMtMC43LTQuOS0xLjFjLTEuNy0wLjQtMy4zLTAuOC00LjktMS4zYy0xLjYtMC41LTMuMS0xLjEtNC4zLTEuOQoJCWMtMS4zLTAuOC0yLjMtMS45LTMuMS0zLjFjLTAuOC0xLjMtMS4yLTIuOS0xLjItNC44YzAtMi4xLDAuNC00LDEuMy01LjVjMC45LTEuNiwyLTIuOCwzLjUtMy44YzEuNC0xLDMuMS0xLjgsNC45LTIuMgoJCWMxLjgtMC41LDMuNy0wLjcsNS42LTAuN2MyLjIsMCw0LjIsMC4zLDYsMC44YzEuOCwwLjUsMy41LDEuMyw0LjksMi40YzEuNCwxLjEsMi41LDIuNSwzLjMsNC4yYzAuOCwxLjcsMS4yLDMuNywxLjMsNmgtNS4zCgkJQzUxOSw0OCw1MTcuOSw0NS44LDUxNiw0NC41eiIvPgo8L2c+Cjwvc3ZnPgo="

/***/ }),

/***/ 612:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(566)

var Component = __webpack_require__(3)(
  /* script */
  __webpack_require__(533),
  /* template */
  __webpack_require__(620),
  /* scopeId */
  "data-v-1ea69f12",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 614:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(567)

var Component = __webpack_require__(3)(
  /* script */
  __webpack_require__(537),
  /* template */
  __webpack_require__(621),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 620:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page-header",
    class: _vm.identifier
  }, [_c('h3', {
    staticClass: "page-title"
  }, [_vm._v(_vm._s(_vm.title))]), _vm._t("default")], 2)
},staticRenderFns: []}

/***/ }),

/***/ 621:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "four-corners-wrapper",
    domProps: {
      "innerHTML": _vm._s(_vm.html)
    }
  })
},staticRenderFns: []}

/***/ }),

/***/ 625:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (!_vm.dismissed) ? _c('div', {
    staticClass: "info-dialogue animated fadeIn",
    class: {
      dismissed: _vm.dismissed
    }
  }, [(_vm.dismissable) ? _c('div', {
    staticClass: "dismiss-button",
    on: {
      "click": _vm.dismiss
    }
  }, [_c('icon', {
    attrs: {
      "name": "times"
    }
  })], 1) : _vm._e(), _vm._t("default")], 2) : _vm._e()
},staticRenderFns: []}

/***/ }),

/***/ 626:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.currentFeedbackId && _vm.feedbackItem) ? _c('div', {
    staticClass: "feedback-view"
  }, [_c('div', {
    staticClass: "feedback-section"
  }, [(_vm.feedbackItem && _vm.feedbackItem.html) ? _c('div', {
    staticClass: "feedback-tile"
  }, [(_vm.isOwner) ? _c('div', {
    staticClass: "pure-button pure-button-subtle pull-left",
    attrs: {
      "alt": "Delete submission"
    },
    on: {
      "click": _vm.removeSubmission
    }
  }, [_vm._v("Delete")]) : _c('div', {
    staticClass: "pure-button pure-button-subtle pull-left",
    attrs: {
      "alt": "View original submission"
    },
    on: {
      "click": function($event) {
        _vm.navigateTo(_vm.feedbackItem.original)
      }
    }
  }, [_vm._v("View submission")]), _c('div', {
    staticClass: "pure-button pure-button-subtle pull-right",
    attrs: {
      "alt": "Close"
    },
    on: {
      "click": _vm.closeSubmission
    }
  }, [_vm._v("Close")]), _c('div', {
    staticClass: "clearfix"
  }), _c('br'), _c('four-corners', {
    attrs: {
      "html": _vm.feedbackItem.html
    }
  })], 1) : _vm._e()]), _c('div', {
    staticClass: "feedback-conversation"
  }, [_vm._l((_vm.feedbackMessages), function(message) {
    return _c('div', {
      staticClass: "feedback-message-wrapper"
    }, [_c('div', {
      staticClass: "feedback-message animated fadeInUp",
      class: {
        locked: (!message.canview), reply: (message.fromuser.id !== _vm.user.id)
      },
      on: {
        "click": function($event) {
          _vm.unlockMessage(message)
        }
      }
    }, [_c('a', {
      attrs: {
        "href": ("https://twitter.com/" + (message.fromuser.account)),
        "target": "_blank"
      }
    }, [_c('img', {
      staticClass: "avatar",
      attrs: {
        "src": message.fromuser.profile
      }
    })]), _c('div', {
      staticClass: "feedback-message--bubble"
    }, [(!message.canview) ? _c('p', [_c('icon', {
      staticStyle: {
        "height": "12px",
        "margin": "0 7px 0 0"
      },
      attrs: {
        "name": "lock"
      }
    }), _vm._v("Message locked (click here)")], 1) : _vm._e(), (message.canview) ? _c('p', [_vm._v(_vm._s(message.message))]) : _vm._e()]), _c('div', {
      staticClass: "feedback-message--author"
    }, [_c('p', [_vm._v("by " + _vm._s(message.fromuser.name))])])]), _c('div', {
      staticClass: "clearfix"
    })])
  }), _c('div', {
    staticClass: "feedback-submission"
  }, [_c('textarea', {
    directives: [{
      name: "autosize",
      rawName: "v-autosize",
      value: (_vm.comment),
      expression: "comment"
    }, {
      name: "model",
      rawName: "v-model",
      value: (_vm.comment),
      expression: "comment"
    }],
    attrs: {
      "placeholder": "Leave some feedback..."
    },
    domProps: {
      "value": (_vm.comment)
    },
    on: {
      "keydown": function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13, $event.key)) { return null; }
        $event.preventDefault();
        $event.stopPropagation();
        _vm.postFeedbackComment($event)
      },
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.comment = $event.target.value
      }
    }
  }), _c('div', {
    staticClass: "feedback-submission--footer"
  }, [_c('div', {
    staticClass: "pure-button",
    on: {
      "click": _vm.postFeedbackComment
    }
  }, [_vm._v("Send")]), _c('p', {
    staticClass: "feedback-submission-note"
  }, [_vm._v("Your comments are private and will not be posted to Twitter.")]), _c('div', {
    staticClass: "clearfix"
  })])]), _c('div', {
    staticClass: "clearfix"
  })], 2), _c('div', {
    staticClass: "clearfix"
  })]) : _vm._e()
},staticRenderFns: []}

/***/ }),

/***/ 689:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__event_bus_js__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mixins_Auth__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__mixins_PageStyle__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash_filter__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_lodash_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_PageHeader__ = __webpack_require__(612);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_PageHeader___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__components_PageHeader__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_MarkdownRenderer__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_MarkdownRenderer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__components_MarkdownRenderer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_fourcorners_FourCornersLink__ = __webpack_require__(976);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_fourcorners_FourCornersLink___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__components_fourcorners_FourCornersLink__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_feedback_FeedbackSubmission__ = __webpack_require__(973);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_feedback_FeedbackSubmission___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__components_feedback_FeedbackSubmission__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_feedback_FeedbackTile__ = __webpack_require__(974);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_feedback_FeedbackTile___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__components_feedback_FeedbackTile__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_feedback_FeedbackRow__ = __webpack_require__(972);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_feedback_FeedbackRow___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__components_feedback_FeedbackRow__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_feedback_FeedbackView__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_feedback_FeedbackView___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14__components_feedback_FeedbackView__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_InfoDialogue__ = __webpack_require__(529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_InfoDialogue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15__components_InfoDialogue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_vue_awesome_icons_angle_left__ = __webpack_require__(557);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_vue_awesome_icons_arrow_right__ = __webpack_require__(789);



























/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'feedback',
  mixins: [__WEBPACK_IMPORTED_MODULE_5__mixins_Auth__["a" /* default */], __WEBPACK_IMPORTED_MODULE_6__mixins_PageStyle__["a" /* default */]],
  components: {
    PageHeader: __WEBPACK_IMPORTED_MODULE_8__components_PageHeader___default.a,
    MarkdownRenderer: __WEBPACK_IMPORTED_MODULE_9__components_MarkdownRenderer___default.a,
    FeedbackSubmission: __WEBPACK_IMPORTED_MODULE_11__components_feedback_FeedbackSubmission___default.a,
    FourCornersLink: __WEBPACK_IMPORTED_MODULE_10__components_fourcorners_FourCornersLink___default.a,
    InfoDialogue: __WEBPACK_IMPORTED_MODULE_15__components_InfoDialogue___default.a,
    FeedbackTile: __WEBPACK_IMPORTED_MODULE_12__components_feedback_FeedbackTile___default.a,
    FeedbackRow: __WEBPACK_IMPORTED_MODULE_13__components_feedback_FeedbackRow___default.a,
    FeedbackView: __WEBPACK_IMPORTED_MODULE_14__components_feedback_FeedbackView___default.a
  },
  activated: function activated() {
    if (this.isAuthenticated && !this.isRegistered) {
      this.$router.push('/registration');
    } else if (this.isAuthenticated) {
      this.$router.push('/');
    } else {
      this.getFeedbackItems();
      this.getAvailableFeedbackItems();
    }
  },
  mounted: function mounted() {
    __WEBPACK_IMPORTED_MODULE_1_vue__["a" /* default */].$log.debug('Feedback view mounted');

    this.ensureAuthenticated();

    this.subscribeToSocketEvents();

    if (this.$route.params.id) {
      this.currentFeedbackId = this.$route.params.id.replace('%23', '#');
    }

    this.getFeedbackItems();
    this.getAvailableFeedbackItems();
  },

  watch: {
    '$route.params.id': {
      handler: function handler(nV, oV) {
        if (nV) {
          this.currentFeedbackId = nV.replace('%23', '#');
        } else {
          this.currentFeedbackId = undefined;
        }
      },
      deep: true
    }
  },
  data: function data() {
    return {
      pageStyle: { type: 'homework', visible: true, minimized: true },
      navTitle: 'Connected Academy - Feedback',
      currentFeedbackId: '',
      myFeedbackItems: [],
      feedbackItems: [],
      availableFeedbackItems: [],
      discussion: []
    };
  },

  computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_vuex__["b" /* mapGetters */])(['isAuthenticated', 'isRegistered', 'user', 'currentClass', 'course']), {
    classSlug: function classSlug() {
      return this.$route.params.classSlug;
    },
    contentSlug: function contentSlug() {
      return this.$route.params.contentSlug;
    },
    markdownUrl: function markdownUrl() {
      return '' + this.course.baseUri + this.currentClass.dir + '/' + this.contentSlug + '.md';
    }
  }),
  methods: {
    subscribeToSocketEvents: function subscribeToSocketEvents() {
      var _this = this;

      this.$io.socket.get('/v1/auth/me', function (resData, jwres) {
        __WEBPACK_IMPORTED_MODULE_1_vue__["a" /* default */].$log.debug('SOCKET RESPONSE - me');

        __WEBPACK_IMPORTED_MODULE_1_vue__["a" /* default */].$log.debug(resData);
      });

      __WEBPACK_IMPORTED_MODULE_3__event_bus_js__["a" /* EventBus */].$on('socketUser', function (obj) {
        _this.$log.debug('socketUser');

        _this.$log.debug('Submission message received');
        _this.$log.debug(obj);

        switch (obj.data.msgtype) {
          case 'submission':

            _this.getFeedbackItems();
            _this.getAvailableFeedbackItems();

            break;
          case 'discussion':

            if (_this.currentFeedbackId === obj.data.msg.relates_to) {
              _this.discussion.push(obj.data.msg);
            }

            break;
          default:
        }
      });
    },
    encodedId: function encodedId(id) {
      return id.replace('#', '%23');
    },
    reloadChats: function reloadChats() {
      this.getFeedbackItems();
      this.getAvailableFeedbackItems();
    },
    getFeedbackItems: function getFeedbackItems() {
      var _this2 = this;

      if (!this.classSlug || !this.contentSlug) {
        __WEBPACK_IMPORTED_MODULE_1_vue__["a" /* default */].$log.debug('No class or content slug so returning');
        return;
      }

      var request = { class: this.classSlug, content: this.contentSlug };

      __WEBPACK_IMPORTED_MODULE_1_vue__["a" /* default */].$log.debug('No class or content slug so returning');

      __WEBPACK_IMPORTED_MODULE_4__api__["a" /* default */].feedback.getFeedbackItems(request, function (response) {
        _this2.$log.debug('Response from feedback request');
        _this2.$log.debug(response);
        _this2.myFeedbackItems = __WEBPACK_IMPORTED_MODULE_7_lodash_filter___default()(response.data, function (item) {
          return item.user && item.user.account_number === _this2.user.account_number;
        });
        _this2.feedbackItems = __WEBPACK_IMPORTED_MODULE_7_lodash_filter___default()(response.data, function (item) {
          return item.user && item.user.account_number !== _this2.user.account_number;
        });
      }, function (response) {
        _this2.$log.error(response);
        _this2.$log.info('Failed to retrieve feedback');
      });
    },
    getAvailableFeedbackItems: function getAvailableFeedbackItems() {
      var _this3 = this;

      var request = { class: this.classSlug, content: this.contentSlug };
      __WEBPACK_IMPORTED_MODULE_4__api__["a" /* default */].feedback.getAvailableFeedbackItems(request, function (response) {
        _this3.$log.debug('Response from feedback request (available)');
        _this3.$log.debug(response);
        _this3.availableFeedbackItems = response.data;
      }, function (response) {
        _this3.$log.error(response);
        _this3.$log.info('Failed to retrieve feedback');
      });
    }
  }
});

/***/ }),

/***/ 690:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'feedback-row',
  props: ['content', 'active']
});

/***/ }),

/***/ 691:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store_mutation_types__ = __webpack_require__(10);







/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'feedback-submission',
  props: ['theClass', 'theContent'],
  data: function data() {
    return {
      submissionLink: '',
      resultsText: '',
      submissions: []
    };
  },

  computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_vuex__["b" /* mapGetters */])(['isRegistered'])),
  methods: {
    submissionSrc: function submissionSrc(submissionId) {
      return 'url(https://api.connectedacademy.io/v1/discussion/thumbnail/' + submissionId.replace('#', '%23') + ')';
    },
    showAuth: function showAuth() {
      this.$store.commit(__WEBPACK_IMPORTED_MODULE_3__store_mutation_types__["b" /* SHOW_AUTH */]);
    },
    goToLink: function goToLink(href) {
      this.$router.push(href.replace('/#/markdown', '/markdown'));
    },
    verifySubmission: function verifySubmission(submissionId) {
      var _this = this;

      var postData = {
        submission: submissionId.replace('#', '%23')
      };

      __WEBPACK_IMPORTED_MODULE_2__api__["a" /* default */].feedback.verifySubmission(postData, function (response) {
        _this.$log.debug(response);
        _this.$emit('reloadchats');
      }, function (response) {
        _this.$log.error(response);
        _this.$log.info('Submission verification failed');
        alert('Submission verification failed, please try again.');
      });
    },
    postSubmission: function postSubmission() {
      var _this2 = this;

      this.resultsText = 'Searching...';

      var postData = {
        class: this.theClass,
        content: this.theContent,
        url: this.submissionLink
      };

      __WEBPACK_IMPORTED_MODULE_2__api__["a" /* default */].feedback.postSubmission(postData, function (response) {
        _this2.submissions = response.body.submissions;
        _this2.resultsText = _this2.submissions.length ? 'Select an Image' : 'No Images Found';
      }, function (response) {
        _this2.$log.error(response);
        _this2.$log.info('Submission failed');
        alert('Submission failed, please try again.');
        _this2.resultsText = '';
        _this2.submissions = [];
      });
    }
  }
});

/***/ }),

/***/ 692:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'feedback-tile',
  props: ['content'],
  methods: {
    viewFeedback: function viewFeedback() {
      this.$router.replace('/feedback/' + this.content.id.replace('#', '%23'));
    }
  }
});

/***/ }),

/***/ 694:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'four-corners-link',
  props: ['message']
});

/***/ }),

/***/ 738:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(412)();
// imports


// module
exports.push([module.i, "body[data-v-0c255238],html[data-v-0c255238]{font-family:Avenir,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0;padding:0}.hidden[data-v-0c255238],[v-cloak][data-v-0c255238]{display:none}.pull-left[data-v-0c255238]{float:left}.pull-right[data-v-0c255238]{float:right}.clearfix[data-v-0c255238]{clear:both;float:none}.fa-icon[data-v-0c255238]{width:auto;height:1em}.no-margin[data-v-0c255238]{margin:0!important}.no-padding[data-v-0c255238]{padding:0!important}.background-white[data-v-0c255238]{background-color:#fff!important}.main-container[data-v-0c255238]{border-radius:4px;margin-top:20px;position:relative}@media (max-width:800px){.main-container[data-v-0c255238]{border-radius:0;margin-top:0}}.main-container.main-container-padded[data-v-0c255238]{padding:20px}.content-block[data-v-0c255238]{border-radius:4px;padding:20px;margin:0 0 20px}@media (max-width:800px){.content-block[data-v-0c255238]{border-radius:0}}.content-block.white-block[data-v-0c255238]{background-color:#fff}.content-block.padded-block[data-v-0c255238]{padding:40px}.content-block.unpadded-block[data-v-0c255238]{padding:0}.content-block.header-block[data-v-0c255238]{margin-top:20px;overflow:hidden}.fade-enter-active[data-v-0c255238],.fade-leave-active[data-v-0c255238]{transition:all .3s ease}.fade-enter[data-v-0c255238],.fade-leave-to[data-v-0c255238]{opacity:0}.particles-js-canvas-el[data-v-0c255238]{top:0;bottom:0;left:0;right:0;position:absolute;pointer-events:none;z-index:-1}.rendered-markdown[data-v-0c255238]{white-space:normal;word-wrap:break-word}.rendered-markdown h1[data-v-0c255238]{margin:0;padding:0;color:#444;margin-bottom:5px}.rendered-markdown a[data-v-0c255238],.rendered-markdown h1[data-v-0c255238],.rendered-markdown h2[data-v-0c255238],.rendered-markdown h3[data-v-0c255238],.rendered-markdown h4[data-v-0c255238],.rendered-markdown h5[data-v-0c255238],.rendered-markdown li[data-v-0c255238],.rendered-markdown p[data-v-0c255238]{color:#444}.rendered-markdown a[data-v-0c255238]:first-child,.rendered-markdown h1[data-v-0c255238]:first-child,.rendered-markdown h2[data-v-0c255238]:first-child,.rendered-markdown h3[data-v-0c255238]:first-child,.rendered-markdown h4[data-v-0c255238]:first-child,.rendered-markdown h5[data-v-0c255238]:first-child,.rendered-markdown li[data-v-0c255238]:first-child,.rendered-markdown p[data-v-0c255238]:first-child{margin-top:0}.rendered-markdown h1[data-v-0c255238],.rendered-markdown h2[data-v-0c255238],.rendered-markdown h3[data-v-0c255238],.rendered-markdown h4[data-v-0c255238],.rendered-markdown h5[data-v-0c255238]{font-weight:300}.rendered-markdown h2[data-v-0c255238]{color:#444;font-size:1.3em;font-weight:700}.rendered-markdown p[data-v-0c255238]{margin:10px 0}.rendered-markdown a[data-v-0c255238]{color:#c6002d!important;text-decoration:underline}.rendered-markdown a[data-v-0c255238]:hover{color:#c6002d;cursor:pointer}.rendered-markdown blockquote[data-v-0c255238]{border-left:3px solid #c6002d;color:#ccc;margin:30px 20px 30px 0;padding-left:20px;font-style:italic}.rendered-markdown pre[data-v-0c255238]{border-radius:6px;background-color:#e9e9e9;max-width:100%;padding:20px;white-space:normal;word-wrap:break-word}.rendered-markdown img[data-v-0c255238]{display:inline-block;margin:10px;width:100%;max-width:160px}.rendered-markdown .fc-image>img[data-v-0c255238],.rendered-markdown .fc-image img[data-v-0c255238],.rendered-markdown img[data-4c][data-v-0c255238]{display:block;margin:0;max-width:100%;padding:0;width:100%}.rendered-markdown .md-bio[data-v-0c255238]{display:inline-block;min-height:100px;overflow:hidden;padding:10px;position:relative;width:160px}.rendered-markdown .md-bio img.md-bio--image[data-v-0c255238]{border-radius:50%;margin:0;padding:0;margin:0 20px;height:120px;width:120px}.rendered-markdown .md-bio .md-bio--content[data-v-0c255238]{border-left:1px solid #e9e9e9;padding:10px}.rendered-markdown .md-bio h5.md-bio--caption[data-v-0c255238]{margin:0;padding:0;font-size:1em;font-weight:700;height:20px;line-height:20px;margin:5px 0;max-width:160px;overflow:hidden;text-align:center}.rendered-markdown .md-bio.md-bio--with-bio[data-v-0c255238]{border-radius:6px;box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:10px;padding-left:100px;max-width:100%;width:100%}.rendered-markdown .md-bio.md-bio--with-bio img.md-bio--image[data-v-0c255238]{margin:0;padding:0;position:absolute;top:10px;left:10px;height:80px;width:80px}.rendered-markdown .md-bio.md-bio--with-bio h5.md-bio--caption[data-v-0c255238]{margin:0;padding:0;height:20px;max-width:100%;text-align:left;width:100%}.rendered-markdown .md-bio.md-bio--with-bio p.md-bio--bio[data-v-0c255238]{margin:0;padding:0;color:#666;text-align:left}.pure-button[data-v-0c255238]{transition:all .3s ease;border-radius:4px;background-color:transparent;border:1px solid #c6002d;color:#c6002d;display:inline-block;font-family:inherit;font-size:100%;outline:0;padding:.5em 1em;text-align:center;text-decoration:none}.pure-button[data-v-0c255238]:hover{background-color:#b20028;color:#fff;cursor:pointer}.pure-button.full-width[data-v-0c255238]{display:block;margin-bottom:10px}.pure-button[disabled][data-v-0c255238]{background-color:#e1e1e1!important;border-color:#e1e1e1!important;color:$color-text-darkest-grey!important;opacity:.5;pointer-events:none}.pure-button.pure-button-primary[data-v-0c255238]{background-color:#c6002d;color:#fff;border-color:#c6002d}.pure-button.pure-button-primary[data-v-0c255238]:hover{background-color:#b20028;color:#fff;cursor:pointer}.pure-button.pure-button-info[data-v-0c255238]{background-color:#1864ef;color:#fff;border-color:#1864ef}.pure-button.pure-button-info[data-v-0c255238]:hover{background-color:#0f58dd;color:#fff;cursor:pointer}.pure-button.pure-button-success[data-v-0c255238]{background-color:#20af3d;color:#fff;border-color:#20af3d}.pure-button.pure-button-success[data-v-0c255238]:hover{background-color:#1d9e37;color:#fff;cursor:pointer}.pure-button.pure-button-subtle[data-v-0c255238]{background-color:transparent;border-color:#ccc;color:#666}.pure-button.pure-button-subtle[data-v-0c255238]:hover{background-color:#cbcbcb;color:#444;cursor:pointer}.pure-button.pure-button-youtube[data-v-0c255238]{background-color:#c4302b;color:#fff;border-color:#c4302b}.pure-button.pure-button-youtube[data-v-0c255238]:hover{background-color:#b02b27;color:#fff;cursor:pointer}.pure-button.pure-button-soundcloud[data-v-0c255238]{background-color:#f70;color:#fff;border-color:#f70}.pure-button.pure-button-soundcloud[data-v-0c255238]:hover{background-color:#e66b00;color:#fff;cursor:pointer}.pure-button.pure-button-twitter[data-v-0c255238]{background-color:#4099ff;color:#fff;border-color:#4099ff}.pure-button.pure-button-twitter[data-v-0c255238]:hover{background-color:#2088ff;color:#fff;cursor:pointer}.pure-button.rounded-short[data-v-0c255238]{border-radius:22px;line-height:44px;padding:0 30px}.pure-button.rounded-tall[data-v-0c255238]{border-radius:25px;line-height:50px;padding:0 30px}.feedback-page[data-v-0c255238]{top:0;bottom:0;left:0;right:0;background-color:#f9f9f9;top:50px;overflow-x:none;overflow-y:scroll;position:fixed}.feedback-page .feedback-page--header[data-v-0c255238]{top:0;bottom:0;left:0;right:0;border-top:1px solid hsla(0,0%,100%,.1);background-color:#107598;height:70px;padding:20px;position:fixed;top:50px;bottom:auto;z-index:2}.feedback-page .feedback-page--header h3[data-v-0c255238]{margin:0;padding:0;color:#fff;line-height:70px;padding:0 10px;whitespace:nowrap}#chat-list-container[data-v-0c255238]{box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;top:0;bottom:0;left:0;right:0;background-color:#fff;border-right:1px solid #e9e9e9;overflow-y:auto;position:fixed;right:auto;top:120px;width:320px;z-index:1}@media (max-width:600px){#chat-list-container[data-v-0c255238]{width:75px}}#chat-list-container ul[data-v-0c255238]{margin:0;padding:0;list-style:none;border-bottom:1px solid #e9e9e9}#chat-list-container ul li[data-v-0c255238]{margin:0;padding:0;list-style:none;border-top:1px solid #e9e9e9}#chat-list-container ul li.list-header[data-v-0c255238]{border-top:none;color:#666;font-size:.9em;padding:20px 10px 5px}@media (max-width:600px){#chat-list-container ul li.list-header[data-v-0c255238]{display:none}}#chat-list-container ul li.no-content[data-v-0c255238]{border-top:none;color:#ccc;line-height:20px;padding:10px 10px 20px;text-align:left}#conversation-container[data-v-0c255238]{background-color:#fff;border-right:1px solid #e9e9e9;min-height:100%;padding:20px;padding-left:340px;padding-top:90px;position:relative;max-width:800px;z-index:0}@media (max-width:600px){#conversation-container[data-v-0c255238]{padding-left:95px}}#conversation-container h2[data-v-0c255238]{color:#444;font-size:1.3em}.feedback-section[data-v-0c255238]{margin-bottom:30px}.feedback-section h1.feedback-section-title[data-v-0c255238]{margin:0;padding:0;padding:0 10px}.feedback-section h5.feedback-section-subtitle[data-v-0c255238]{margin:0;padding:0;color:#666;padding:0 10px;margin-bottom:10px}.homework-details .homework-banner[data-v-0c255238]{border-radius:6px;background-color:#107598;margin-bottom:15px;padding:20px}.homework-details .homework-banner h2[data-v-0c255238],.homework-details .homework-banner p[data-v-0c255238]{margin:0;padding:0;color:#fff}.homework-details .markdown-wrapper[data-v-0c255238]{padding:5px}#login-notice[data-v-0c255238]{border-radius:4px;background-color:#107598;color:#fff;padding:30px;text-align:center}", "", {"version":3,"sources":["/repos/elevator/src/components/feedback/Feedback.vue"],"names":[],"mappings":"AA8OA,4CAEE,8CAAoD,AACpD,mCAAoC,AACpC,kCAAmC,AACnC,SAAU,AACV,SAAW,CACZ,AACD,oDAEE,YAAc,CACf,AACD,4BACE,UAAY,CACb,AACD,6BACE,WAAa,CACd,AACD,2BACE,WAAY,AACZ,UAAY,CACb,AACD,0BACE,WAAY,AACZ,UAAY,CACb,AACD,4BACE,kBAAqB,CACtB,AACD,6BACE,mBAAsB,CACvB,AACD,mCACE,+BAAkC,CACnC,AACD,iCACE,kBAAmB,AACnB,gBAAiB,AACjB,iBAAmB,CACpB,AACD,yBACA,iCACI,gBAAiB,AACjB,YAAc,CACjB,CACA,AACD,uDACE,YAAc,CACf,AACD,gCACE,kBAAmB,AACnB,aAAc,AACd,eAAmB,CACpB,AACD,yBACA,gCACI,eAAiB,CACpB,CACA,AACD,4CACE,qBAAuB,CACxB,AACD,6CACE,YAAc,CACf,AACD,+CACE,SAAW,CACZ,AACD,6CACE,gBAAiB,AACjB,eAAiB,CAClB,AACD,wEAEE,uBAA0B,CAC3B,AACD,6DAEE,SAAW,CACZ,AACD,yCACE,MAAO,AACP,SAAU,AACV,OAAQ,AACR,QAAS,AACT,kBAAmB,AACnB,oBAAqB,AACrB,UAAY,CACb,AACD,oCACE,mBAAqB,AACrB,oBAAsB,CACvB,AACD,uCACE,SAAU,AACV,UAAW,AACX,WAAY,AACZ,iBAAmB,CACpB,AACD,sTAQE,UAAY,CACb,AACD,sZAQE,YAAc,CACf,AACD,mMAKE,eAAiB,CAClB,AACD,uCACE,WAAY,AACZ,gBAAiB,AACjB,eAAkB,CACnB,AACD,sCACE,aAAe,CAChB,AACD,sCACE,wBAA0B,AAC1B,yBAA2B,CAC5B,AACD,4CACE,cAAe,AACf,cAAgB,CACjB,AACD,+CACE,8BAA+B,AAC/B,WAAY,AACZ,wBAA2B,AAC3B,kBAAmB,AACnB,iBAAmB,CACpB,AACD,wCACE,kBAAmB,AACnB,yBAA0B,AAC1B,eAAgB,AAChB,aAAc,AACd,mBAAqB,AACrB,oBAAsB,CACvB,AACD,wCACE,qBAAsB,AACtB,YAAa,AACb,WAAY,AACZ,eAAiB,CAClB,AACD,qJAGE,cAAe,AACf,SAAU,AACV,eAAgB,AAChB,UAAW,AACX,UAAY,CACb,AACD,4CACE,qBAAsB,AACtB,iBAAkB,AAClB,gBAAiB,AACjB,aAAc,AACd,kBAAmB,AACnB,WAAa,CACd,AACD,8DACE,kBAAmB,AACnB,SAAU,AACV,UAAW,AACX,cAAe,AACf,aAAc,AACd,WAAa,CACd,AACD,6DACE,8BAA+B,AAC/B,YAAc,CACf,AACD,+DACE,SAAU,AACV,UAAW,AACX,cAAe,AACf,gBAAkB,AAClB,YAAa,AACb,iBAAkB,AAClB,aAAc,AACd,gBAAiB,AACjB,gBAAiB,AACjB,iBAAmB,CACpB,AACD,6DACE,kBAAmB,AACnB,sBAAuB,AACvB,2BAA4B,AAC5B,8BAA+B,AAC/B,aAAc,AACd,mBAAoB,AACpB,eAAgB,AAChB,UAAY,CACb,AACD,+EACE,SAAU,AACV,UAAW,AACX,kBAAmB,AACnB,SAAU,AACV,UAAW,AACX,YAAa,AACb,UAAY,CACb,AACD,gFACE,SAAU,AACV,UAAW,AACX,YAAa,AACb,eAAgB,AAChB,gBAAiB,AACjB,UAAY,CACb,AACD,2EACE,SAAU,AACV,UAAW,AACX,WAAY,AACZ,eAAiB,CAClB,AACD,8BACE,wBAA0B,AAC1B,kBAAmB,AACnB,6BAA8B,AAC9B,yBAA0B,AAC1B,cAAe,AACf,qBAAsB,AACtB,oBAAqB,AACrB,eAAgB,AAChB,UAAW,AACX,iBAAmB,AACnB,kBAAmB,AACnB,oBAAsB,CACvB,AACD,oCACE,yBAA0B,AAC1B,WAAY,AACZ,cAAgB,CACjB,AACD,yCACE,cAAe,AACf,kBAAoB,CACrB,AACD,wCACE,mCAAqC,AACrC,+BAAiC,AACjC,yCAA2C,AAC3C,WAAa,AACb,mBAAqB,CACtB,AACD,kDACE,yBAA0B,AAC1B,WAAY,AACZ,oBAAsB,CACvB,AACD,wDACE,yBAA0B,AAC1B,WAAY,AACZ,cAAgB,CACjB,AACD,+CACE,yBAA0B,AAC1B,WAAY,AACZ,oBAAsB,CACvB,AACD,qDACE,yBAA0B,AAC1B,WAAY,AACZ,cAAgB,CACjB,AACD,kDACE,yBAA0B,AAC1B,WAAY,AACZ,oBAAsB,CACvB,AACD,wDACE,yBAA0B,AAC1B,WAAY,AACZ,cAAgB,CACjB,AACD,iDACE,6BAA8B,AAC9B,kBAAmB,AACnB,UAAY,CACb,AACD,uDACE,yBAA0B,AAC1B,WAAY,AACZ,cAAgB,CACjB,AACD,kDACE,yBAA0B,AAC1B,WAAY,AACZ,oBAAsB,CACvB,AACD,wDACE,yBAA0B,AAC1B,WAAY,AACZ,cAAgB,CACjB,AACD,qDACE,sBAAuB,AACvB,WAAY,AACZ,iBAAmB,CACpB,AACD,2DACE,yBAA0B,AAC1B,WAAY,AACZ,cAAgB,CACjB,AACD,kDACE,yBAA0B,AAC1B,WAAY,AACZ,oBAAsB,CACvB,AACD,wDACE,yBAA0B,AAC1B,WAAY,AACZ,cAAgB,CACjB,AACD,4CACE,mBAAoB,AACpB,iBAAkB,AAClB,cAAgB,CACjB,AACD,2CACE,mBAAoB,AACpB,iBAAkB,AAClB,cAAgB,CACjB,AACD,gCACE,MAAO,AACP,SAAU,AACV,OAAQ,AACR,QAAS,AACT,yBAA0B,AAC1B,SAAU,AACV,gBAAiB,AACjB,kBAAmB,AACnB,cAAgB,CACjB,AACD,uDACE,MAAO,AACP,SAAU,AACV,OAAQ,AACR,QAAS,AACT,wCAA4C,AAC5C,yBAA0B,AAC1B,YAAa,AACb,aAAc,AACd,eAAgB,AAChB,SAAU,AACV,YAAa,AACb,SAAW,CACZ,AACD,0DACE,SAAU,AACV,UAAW,AACX,WAAY,AACZ,iBAAkB,AAClB,eAAgB,AAChB,iBAAmB,CACpB,AACD,sCACE,sBAAuB,AACvB,2BAA4B,AAC5B,8BAA+B,AAC/B,MAAO,AACP,SAAU,AACV,OAAQ,AACR,QAAS,AACT,sBAAuB,AACvB,+BAAgC,AAChC,gBAAiB,AACjB,eAAgB,AAChB,WAAY,AACZ,UAAW,AACX,YAAa,AACb,SAAW,CACZ,AACD,yBACA,sCACI,UAAY,CACf,CACA,AACD,yCACE,SAAU,AACV,UAAW,AACX,gBAAiB,AACjB,+BAAiC,CAClC,AACD,4CACE,SAAU,AACV,UAAW,AACX,gBAAiB,AACjB,4BAA8B,CAC/B,AACD,wDACE,gBAAiB,AACjB,WAAY,AACZ,eAAiB,AACjB,qBAA4B,CAC7B,AACD,yBACA,wDACI,YAAc,CACjB,CACA,AACD,uDACE,gBAAiB,AACjB,WAAY,AACZ,iBAAkB,AAClB,uBAA6B,AAC7B,eAAiB,CAClB,AACD,yCACE,sBAAuB,AACvB,+BAAgC,AAChC,gBAAiB,AACjB,aAAc,AACd,mBAAoB,AACpB,iBAAkB,AAClB,kBAAmB,AACnB,gBAAiB,AACjB,SAAW,CACZ,AACD,yBACA,yCACI,iBAAmB,CACtB,CACA,AACD,4CACE,WAAY,AACZ,eAAiB,CAClB,AACD,mCACE,kBAAoB,CACrB,AACD,6DACE,SAAU,AACV,UAAW,AACX,cAAgB,CACjB,AACD,gEACE,SAAU,AACV,UAAW,AACX,WAAY,AACZ,eAAgB,AAChB,kBAAoB,CACrB,AACD,oDACE,kBAAmB,AACnB,yBAA0B,AAC1B,mBAAoB,AACpB,YAAc,CACf,AAMD,6GACE,SAAU,AACV,UAAW,AACX,UAAY,CACb,AACD,qDACE,WAAa,CACd,AACD,+BACE,kBAAmB,AACnB,yBAA0B,AAC1B,WAAY,AACZ,aAAc,AACd,iBAAmB,CACpB","file":"Feedback.vue","sourcesContent":["\nhtml[data-v-0c255238],\nbody[data-v-0c255238] {\n  font-family: 'Avenir', Helvetica, Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  margin: 0;\n  padding: 0;\n}\n.hidden[data-v-0c255238],\n[v-cloak][data-v-0c255238] {\n  display: none;\n}\n.pull-left[data-v-0c255238] {\n  float: left;\n}\n.pull-right[data-v-0c255238] {\n  float: right;\n}\n.clearfix[data-v-0c255238] {\n  clear: both;\n  float: none;\n}\n.fa-icon[data-v-0c255238] {\n  width: auto;\n  height: 1em;\n}\n.no-margin[data-v-0c255238] {\n  margin: 0 !important;\n}\n.no-padding[data-v-0c255238] {\n  padding: 0 !important;\n}\n.background-white[data-v-0c255238] {\n  background-color: #fff !important;\n}\n.main-container[data-v-0c255238] {\n  border-radius: 4px;\n  margin-top: 20px;\n  position: relative;\n}\n@media (max-width: 800px) {\n.main-container[data-v-0c255238] {\n    border-radius: 0;\n    margin-top: 0;\n}\n}\n.main-container.main-container-padded[data-v-0c255238] {\n  padding: 20px;\n}\n.content-block[data-v-0c255238] {\n  border-radius: 4px;\n  padding: 20px;\n  margin: 0 0 20px 0;\n}\n@media (max-width: 800px) {\n.content-block[data-v-0c255238] {\n    border-radius: 0;\n}\n}\n.content-block.white-block[data-v-0c255238] {\n  background-color: #fff;\n}\n.content-block.padded-block[data-v-0c255238] {\n  padding: 40px;\n}\n.content-block.unpadded-block[data-v-0c255238] {\n  padding: 0;\n}\n.content-block.header-block[data-v-0c255238] {\n  margin-top: 20px;\n  overflow: hidden;\n}\n.fade-enter-active[data-v-0c255238],\n.fade-leave-active[data-v-0c255238] {\n  transition: all 0.3s ease;\n}\n.fade-enter[data-v-0c255238],\n.fade-leave-to[data-v-0c255238] {\n  opacity: 0;\n}\n.particles-js-canvas-el[data-v-0c255238] {\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  position: absolute;\n  pointer-events: none;\n  z-index: -1;\n}\n.rendered-markdown[data-v-0c255238] {\n  white-space: initial;\n  word-wrap: break-word;\n}\n.rendered-markdown h1[data-v-0c255238] {\n  margin: 0;\n  padding: 0;\n  color: #444;\n  margin-bottom: 5px;\n}\n.rendered-markdown h1[data-v-0c255238],\n.rendered-markdown h2[data-v-0c255238],\n.rendered-markdown h3[data-v-0c255238],\n.rendered-markdown h4[data-v-0c255238],\n.rendered-markdown h5[data-v-0c255238],\n.rendered-markdown p[data-v-0c255238],\n.rendered-markdown a[data-v-0c255238],\n.rendered-markdown li[data-v-0c255238] {\n  color: #444;\n}\n.rendered-markdown h1[data-v-0c255238]:first-child,\n.rendered-markdown h2[data-v-0c255238]:first-child,\n.rendered-markdown h3[data-v-0c255238]:first-child,\n.rendered-markdown h4[data-v-0c255238]:first-child,\n.rendered-markdown h5[data-v-0c255238]:first-child,\n.rendered-markdown p[data-v-0c255238]:first-child,\n.rendered-markdown a[data-v-0c255238]:first-child,\n.rendered-markdown li[data-v-0c255238]:first-child {\n  margin-top: 0;\n}\n.rendered-markdown h1[data-v-0c255238],\n.rendered-markdown h2[data-v-0c255238],\n.rendered-markdown h3[data-v-0c255238],\n.rendered-markdown h4[data-v-0c255238],\n.rendered-markdown h5[data-v-0c255238] {\n  font-weight: 300;\n}\n.rendered-markdown h2[data-v-0c255238] {\n  color: #444;\n  font-size: 1.3em;\n  font-weight: bold;\n}\n.rendered-markdown p[data-v-0c255238] {\n  margin: 10px 0;\n}\n.rendered-markdown a[data-v-0c255238] {\n  color: #c6002d !important;\n  text-decoration: underline;\n}\n.rendered-markdown a[data-v-0c255238]:hover {\n  color: #c6002d;\n  cursor: pointer;\n}\n.rendered-markdown blockquote[data-v-0c255238] {\n  border-left: #c6002d 3px solid;\n  color: #ccc;\n  margin: 30px 20px 30px 0px;\n  padding-left: 20px;\n  font-style: italic;\n}\n.rendered-markdown pre[data-v-0c255238] {\n  border-radius: 6px;\n  background-color: #e9e9e9;\n  max-width: 100%;\n  padding: 20px;\n  white-space: initial;\n  word-wrap: break-word;\n}\n.rendered-markdown img[data-v-0c255238] {\n  display: inline-block;\n  margin: 10px;\n  width: 100%;\n  max-width: 160px;\n}\n.rendered-markdown img[data-4c][data-v-0c255238],\n.rendered-markdown .fc-image img[data-v-0c255238],\n.rendered-markdown .fc-image > img[data-v-0c255238] {\n  display: block;\n  margin: 0;\n  max-width: 100%;\n  padding: 0;\n  width: 100%;\n}\n.rendered-markdown .md-bio[data-v-0c255238] {\n  display: inline-block;\n  min-height: 100px;\n  overflow: hidden;\n  padding: 10px;\n  position: relative;\n  width: 160px;\n}\n.rendered-markdown .md-bio img.md-bio--image[data-v-0c255238] {\n  border-radius: 50%;\n  margin: 0;\n  padding: 0;\n  margin: 0 20px;\n  height: 120px;\n  width: 120px;\n}\n.rendered-markdown .md-bio .md-bio--content[data-v-0c255238] {\n  border-left: #e9e9e9 1px solid;\n  padding: 10px;\n}\n.rendered-markdown .md-bio h5.md-bio--caption[data-v-0c255238] {\n  margin: 0;\n  padding: 0;\n  font-size: 1em;\n  font-weight: bold;\n  height: 20px;\n  line-height: 20px;\n  margin: 5px 0;\n  max-width: 160px;\n  overflow: hidden;\n  text-align: center;\n}\n.rendered-markdown .md-bio.md-bio--with-bio[data-v-0c255238] {\n  border-radius: 6px;\n  box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  padding: 10px;\n  padding-left: 100px;\n  max-width: 100%;\n  width: 100%;\n}\n.rendered-markdown .md-bio.md-bio--with-bio img.md-bio--image[data-v-0c255238] {\n  margin: 0;\n  padding: 0;\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  height: 80px;\n  width: 80px;\n}\n.rendered-markdown .md-bio.md-bio--with-bio h5.md-bio--caption[data-v-0c255238] {\n  margin: 0;\n  padding: 0;\n  height: 20px;\n  max-width: 100%;\n  text-align: left;\n  width: 100%;\n}\n.rendered-markdown .md-bio.md-bio--with-bio p.md-bio--bio[data-v-0c255238] {\n  margin: 0;\n  padding: 0;\n  color: #666;\n  text-align: left;\n}\nhtml[data-v-0c255238],\nbody[data-v-0c255238] {\n  font-family: 'Avenir', Helvetica, Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  margin: 0;\n  padding: 0;\n}\n.hidden[data-v-0c255238],\n[v-cloak][data-v-0c255238] {\n  display: none;\n}\n.pull-left[data-v-0c255238] {\n  float: left;\n}\n.pull-right[data-v-0c255238] {\n  float: right;\n}\n.clearfix[data-v-0c255238] {\n  clear: both;\n  float: none;\n}\n.fa-icon[data-v-0c255238] {\n  width: auto;\n  height: 1em;\n}\n.no-margin[data-v-0c255238] {\n  margin: 0 !important;\n}\n.no-padding[data-v-0c255238] {\n  padding: 0 !important;\n}\n.background-white[data-v-0c255238] {\n  background-color: #fff !important;\n}\n.main-container[data-v-0c255238] {\n  border-radius: 4px;\n  margin-top: 20px;\n  position: relative;\n}\n@media (max-width: 800px) {\n.main-container[data-v-0c255238] {\n    border-radius: 0;\n    margin-top: 0;\n}\n}\n.main-container.main-container-padded[data-v-0c255238] {\n  padding: 20px;\n}\n.content-block[data-v-0c255238] {\n  border-radius: 4px;\n  padding: 20px;\n  margin: 0 0 20px 0;\n}\n@media (max-width: 800px) {\n.content-block[data-v-0c255238] {\n    border-radius: 0;\n}\n}\n.content-block.white-block[data-v-0c255238] {\n  background-color: #fff;\n}\n.content-block.padded-block[data-v-0c255238] {\n  padding: 40px;\n}\n.content-block.unpadded-block[data-v-0c255238] {\n  padding: 0;\n}\n.content-block.header-block[data-v-0c255238] {\n  margin-top: 20px;\n  overflow: hidden;\n}\n.fade-enter-active[data-v-0c255238],\n.fade-leave-active[data-v-0c255238] {\n  transition: all 0.3s ease;\n}\n.fade-enter[data-v-0c255238],\n.fade-leave-to[data-v-0c255238] {\n  opacity: 0;\n}\n.particles-js-canvas-el[data-v-0c255238] {\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  position: absolute;\n  pointer-events: none;\n  z-index: -1;\n}\n.rendered-markdown[data-v-0c255238] {\n  white-space: initial;\n  word-wrap: break-word;\n}\n.rendered-markdown h1[data-v-0c255238] {\n  margin: 0;\n  padding: 0;\n  color: #444;\n  margin-bottom: 5px;\n}\n.rendered-markdown h1[data-v-0c255238],\n.rendered-markdown h2[data-v-0c255238],\n.rendered-markdown h3[data-v-0c255238],\n.rendered-markdown h4[data-v-0c255238],\n.rendered-markdown h5[data-v-0c255238],\n.rendered-markdown p[data-v-0c255238],\n.rendered-markdown a[data-v-0c255238],\n.rendered-markdown li[data-v-0c255238] {\n  color: #444;\n}\n.rendered-markdown h1[data-v-0c255238]:first-child,\n.rendered-markdown h2[data-v-0c255238]:first-child,\n.rendered-markdown h3[data-v-0c255238]:first-child,\n.rendered-markdown h4[data-v-0c255238]:first-child,\n.rendered-markdown h5[data-v-0c255238]:first-child,\n.rendered-markdown p[data-v-0c255238]:first-child,\n.rendered-markdown a[data-v-0c255238]:first-child,\n.rendered-markdown li[data-v-0c255238]:first-child {\n  margin-top: 0;\n}\n.rendered-markdown h1[data-v-0c255238],\n.rendered-markdown h2[data-v-0c255238],\n.rendered-markdown h3[data-v-0c255238],\n.rendered-markdown h4[data-v-0c255238],\n.rendered-markdown h5[data-v-0c255238] {\n  font-weight: 300;\n}\n.rendered-markdown h2[data-v-0c255238] {\n  color: #444;\n  font-size: 1.3em;\n  font-weight: bold;\n}\n.rendered-markdown p[data-v-0c255238] {\n  margin: 10px 0;\n}\n.rendered-markdown a[data-v-0c255238] {\n  color: #c6002d !important;\n  text-decoration: underline;\n}\n.rendered-markdown a[data-v-0c255238]:hover {\n  color: #c6002d;\n  cursor: pointer;\n}\n.rendered-markdown blockquote[data-v-0c255238] {\n  border-left: #c6002d 3px solid;\n  color: #ccc;\n  margin: 30px 20px 30px 0px;\n  padding-left: 20px;\n  font-style: italic;\n}\n.rendered-markdown pre[data-v-0c255238] {\n  border-radius: 6px;\n  background-color: #e9e9e9;\n  max-width: 100%;\n  padding: 20px;\n  white-space: initial;\n  word-wrap: break-word;\n}\n.rendered-markdown img[data-v-0c255238] {\n  display: inline-block;\n  margin: 10px;\n  width: 100%;\n  max-width: 160px;\n}\n.rendered-markdown img[data-4c][data-v-0c255238],\n.rendered-markdown .fc-image img[data-v-0c255238],\n.rendered-markdown .fc-image > img[data-v-0c255238] {\n  display: block;\n  margin: 0;\n  max-width: 100%;\n  padding: 0;\n  width: 100%;\n}\n.rendered-markdown .md-bio[data-v-0c255238] {\n  display: inline-block;\n  min-height: 100px;\n  overflow: hidden;\n  padding: 10px;\n  position: relative;\n  width: 160px;\n}\n.rendered-markdown .md-bio img.md-bio--image[data-v-0c255238] {\n  border-radius: 50%;\n  margin: 0;\n  padding: 0;\n  margin: 0 20px;\n  height: 120px;\n  width: 120px;\n}\n.rendered-markdown .md-bio .md-bio--content[data-v-0c255238] {\n  border-left: #e9e9e9 1px solid;\n  padding: 10px;\n}\n.rendered-markdown .md-bio h5.md-bio--caption[data-v-0c255238] {\n  margin: 0;\n  padding: 0;\n  font-size: 1em;\n  font-weight: bold;\n  height: 20px;\n  line-height: 20px;\n  margin: 5px 0;\n  max-width: 160px;\n  overflow: hidden;\n  text-align: center;\n}\n.rendered-markdown .md-bio.md-bio--with-bio[data-v-0c255238] {\n  border-radius: 6px;\n  box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  padding: 10px;\n  padding-left: 100px;\n  max-width: 100%;\n  width: 100%;\n}\n.rendered-markdown .md-bio.md-bio--with-bio img.md-bio--image[data-v-0c255238] {\n  margin: 0;\n  padding: 0;\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  height: 80px;\n  width: 80px;\n}\n.rendered-markdown .md-bio.md-bio--with-bio h5.md-bio--caption[data-v-0c255238] {\n  margin: 0;\n  padding: 0;\n  height: 20px;\n  max-width: 100%;\n  text-align: left;\n  width: 100%;\n}\n.rendered-markdown .md-bio.md-bio--with-bio p.md-bio--bio[data-v-0c255238] {\n  margin: 0;\n  padding: 0;\n  color: #666;\n  text-align: left;\n}\n.pure-button[data-v-0c255238] {\n  transition: all 0.3s ease;\n  border-radius: 4px;\n  background-color: transparent;\n  border: #c6002d 1px solid;\n  color: #c6002d;\n  display: inline-block;\n  font-family: inherit;\n  font-size: 100%;\n  outline: 0;\n  padding: 0.5em 1em;\n  text-align: center;\n  text-decoration: none;\n}\n.pure-button[data-v-0c255238]:hover {\n  background-color: #b20028;\n  color: #fff;\n  cursor: pointer;\n}\n.pure-button.full-width[data-v-0c255238] {\n  display: block;\n  margin-bottom: 10px;\n}\n.pure-button[disabled][data-v-0c255238] {\n  background-color: #e1e1e1 !important;\n  border-color: #e1e1e1 !important;\n  color: $color-text-darkest-grey !important;\n  opacity: 0.5;\n  pointer-events: none;\n}\n.pure-button.pure-button-primary[data-v-0c255238] {\n  background-color: #c6002d;\n  color: #fff;\n  border-color: #c6002d;\n}\n.pure-button.pure-button-primary[data-v-0c255238]:hover {\n  background-color: #b20028;\n  color: #fff;\n  cursor: pointer;\n}\n.pure-button.pure-button-info[data-v-0c255238] {\n  background-color: #1864ef;\n  color: #fff;\n  border-color: #1864ef;\n}\n.pure-button.pure-button-info[data-v-0c255238]:hover {\n  background-color: #0f58dd;\n  color: #fff;\n  cursor: pointer;\n}\n.pure-button.pure-button-success[data-v-0c255238] {\n  background-color: #20af3d;\n  color: #fff;\n  border-color: #20af3d;\n}\n.pure-button.pure-button-success[data-v-0c255238]:hover {\n  background-color: #1d9e37;\n  color: #fff;\n  cursor: pointer;\n}\n.pure-button.pure-button-subtle[data-v-0c255238] {\n  background-color: transparent;\n  border-color: #ccc;\n  color: #666;\n}\n.pure-button.pure-button-subtle[data-v-0c255238]:hover {\n  background-color: #cbcbcb;\n  color: #444;\n  cursor: pointer;\n}\n.pure-button.pure-button-youtube[data-v-0c255238] {\n  background-color: #c4302b;\n  color: #fff;\n  border-color: #c4302b;\n}\n.pure-button.pure-button-youtube[data-v-0c255238]:hover {\n  background-color: #b02b27;\n  color: #fff;\n  cursor: pointer;\n}\n.pure-button.pure-button-soundcloud[data-v-0c255238] {\n  background-color: #f70;\n  color: #fff;\n  border-color: #f70;\n}\n.pure-button.pure-button-soundcloud[data-v-0c255238]:hover {\n  background-color: #e66b00;\n  color: #fff;\n  cursor: pointer;\n}\n.pure-button.pure-button-twitter[data-v-0c255238] {\n  background-color: #4099ff;\n  color: #fff;\n  border-color: #4099ff;\n}\n.pure-button.pure-button-twitter[data-v-0c255238]:hover {\n  background-color: #2088ff;\n  color: #fff;\n  cursor: pointer;\n}\n.pure-button.rounded-short[data-v-0c255238] {\n  border-radius: 22px;\n  line-height: 44px;\n  padding: 0 30px;\n}\n.pure-button.rounded-tall[data-v-0c255238] {\n  border-radius: 25px;\n  line-height: 50px;\n  padding: 0 30px;\n}\n.feedback-page[data-v-0c255238] {\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: #f9f9f9;\n  top: 50px;\n  overflow-x: none;\n  overflow-y: scroll;\n  position: fixed;\n}\n.feedback-page .feedback-page--header[data-v-0c255238] {\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  border-top: rgba(255,255,255,0.1) 1px solid;\n  background-color: #107598;\n  height: 70px;\n  padding: 20px;\n  position: fixed;\n  top: 50px;\n  bottom: auto;\n  z-index: 2;\n}\n.feedback-page .feedback-page--header h3[data-v-0c255238] {\n  margin: 0;\n  padding: 0;\n  color: #fff;\n  line-height: 70px;\n  padding: 0 10px;\n  whitespace: nowrap;\n}\n#chat-list-container[data-v-0c255238] {\n  box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: #fff;\n  border-right: #e9e9e9 1px solid;\n  overflow-y: auto;\n  position: fixed;\n  right: auto;\n  top: 120px;\n  width: 320px;\n  z-index: 1;\n}\n@media (max-width: 600px) {\n#chat-list-container[data-v-0c255238] {\n    width: 75px;\n}\n}\n#chat-list-container ul[data-v-0c255238] {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  border-bottom: #e9e9e9 1px solid;\n}\n#chat-list-container ul li[data-v-0c255238] {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  border-top: #e9e9e9 1px solid;\n}\n#chat-list-container ul li.list-header[data-v-0c255238] {\n  border-top: none;\n  color: #666;\n  font-size: 0.9em;\n  padding: 20px 10px 5px 10px;\n}\n@media (max-width: 600px) {\n#chat-list-container ul li.list-header[data-v-0c255238] {\n    display: none;\n}\n}\n#chat-list-container ul li.no-content[data-v-0c255238] {\n  border-top: none;\n  color: #ccc;\n  line-height: 20px;\n  padding: 10px 10px 20px 10px;\n  text-align: left;\n}\n#conversation-container[data-v-0c255238] {\n  background-color: #fff;\n  border-right: #e9e9e9 1px solid;\n  min-height: 100%;\n  padding: 20px;\n  padding-left: 340px;\n  padding-top: 90px;\n  position: relative;\n  max-width: 800px;\n  z-index: 0;\n}\n@media (max-width: 600px) {\n#conversation-container[data-v-0c255238] {\n    padding-left: 95px;\n}\n}\n#conversation-container h2[data-v-0c255238] {\n  color: #444;\n  font-size: 1.3em;\n}\n.feedback-section[data-v-0c255238] {\n  margin-bottom: 30px;\n}\n.feedback-section h1.feedback-section-title[data-v-0c255238] {\n  margin: 0;\n  padding: 0;\n  padding: 0 10px;\n}\n.feedback-section h5.feedback-section-subtitle[data-v-0c255238] {\n  margin: 0;\n  padding: 0;\n  color: #666;\n  padding: 0 10px;\n  margin-bottom: 10px;\n}\n.homework-details .homework-banner[data-v-0c255238] {\n  border-radius: 6px;\n  background-color: #107598;\n  margin-bottom: 15px;\n  padding: 20px;\n}\n.homework-details .homework-banner h2[data-v-0c255238] {\n  margin: 0;\n  padding: 0;\n  color: #fff;\n}\n.homework-details .homework-banner p[data-v-0c255238] {\n  margin: 0;\n  padding: 0;\n  color: #fff;\n}\n.homework-details .markdown-wrapper[data-v-0c255238] {\n  padding: 5px;\n}\n#login-notice[data-v-0c255238] {\n  border-radius: 4px;\n  background-color: #107598;\n  color: #fff;\n  padding: 30px;\n  text-align: center;\n}"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 769:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(412)();
// imports


// module
exports.push([module.i, "body,html{font-family:Avenir,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0;padding:0}.hidden,[v-cloak]{display:none}.pull-left{float:left}.pull-right{float:right}.clearfix{clear:both;float:none}.fa-icon{width:auto;height:1em}.no-margin{margin:0!important}.no-padding{padding:0!important}.background-white{background-color:#fff!important}.main-container{border-radius:4px;margin-top:20px;position:relative}@media (max-width:800px){.main-container{border-radius:0;margin-top:0}}.main-container.main-container-padded{padding:20px}.content-block{border-radius:4px;padding:20px;margin:0 0 20px}@media (max-width:800px){.content-block{border-radius:0}}.content-block.white-block{background-color:#fff}.content-block.padded-block{padding:40px}.content-block.unpadded-block{padding:0}.content-block.header-block{margin-top:20px;overflow:hidden}.fade-enter-active,.fade-leave-active{transition:all .3s ease}.fade-enter,.fade-leave-to{opacity:0}.particles-js-canvas-el{top:0;bottom:0;left:0;right:0;position:absolute;pointer-events:none;z-index:-1}.rendered-markdown{white-space:normal;word-wrap:break-word}.rendered-markdown h1{margin:0;padding:0;color:#444;margin-bottom:5px}.rendered-markdown a,.rendered-markdown h1,.rendered-markdown h2,.rendered-markdown h3,.rendered-markdown h4,.rendered-markdown h5,.rendered-markdown li,.rendered-markdown p{color:#444}.rendered-markdown a:first-child,.rendered-markdown h1:first-child,.rendered-markdown h2:first-child,.rendered-markdown h3:first-child,.rendered-markdown h4:first-child,.rendered-markdown h5:first-child,.rendered-markdown li:first-child,.rendered-markdown p:first-child{margin-top:0}.rendered-markdown h1,.rendered-markdown h2,.rendered-markdown h3,.rendered-markdown h4,.rendered-markdown h5{font-weight:300}.rendered-markdown h2{color:#444;font-size:1.3em;font-weight:700}.rendered-markdown p{margin:10px 0}.rendered-markdown a{color:#c6002d!important;text-decoration:underline}.rendered-markdown a:hover{color:#c6002d;cursor:pointer}.rendered-markdown blockquote{border-left:3px solid #c6002d;color:#ccc;margin:30px 20px 30px 0;padding-left:20px;font-style:italic}.rendered-markdown pre{border-radius:6px;background-color:#e9e9e9;max-width:100%;padding:20px;white-space:normal;word-wrap:break-word}.rendered-markdown img{display:inline-block;margin:10px;width:100%;max-width:160px}.rendered-markdown .fc-image>img,.rendered-markdown .fc-image img,.rendered-markdown img[data-4c]{display:block;margin:0;max-width:100%;padding:0;width:100%}.rendered-markdown .md-bio{display:inline-block;min-height:100px;overflow:hidden;padding:10px;position:relative;width:160px}.rendered-markdown .md-bio img.md-bio--image{border-radius:50%;margin:0;padding:0;margin:0 20px;height:120px;width:120px}.rendered-markdown .md-bio .md-bio--content{border-left:1px solid #e9e9e9;padding:10px}.rendered-markdown .md-bio h5.md-bio--caption{margin:0;padding:0;font-size:1em;font-weight:700;height:20px;line-height:20px;margin:5px 0;max-width:160px;overflow:hidden;text-align:center}.rendered-markdown .md-bio.md-bio--with-bio{border-radius:6px;box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:10px;padding-left:100px;max-width:100%;width:100%}.rendered-markdown .md-bio.md-bio--with-bio img.md-bio--image{margin:0;padding:0;position:absolute;top:10px;left:10px;height:80px;width:80px}.rendered-markdown .md-bio.md-bio--with-bio h5.md-bio--caption{margin:0;padding:0;height:20px;max-width:100%;text-align:left;width:100%}.rendered-markdown .md-bio.md-bio--with-bio p.md-bio--bio{margin:0;padding:0;color:#666;text-align:left}.pure-button{transition:all .3s ease;border-radius:4px;background-color:transparent;border:1px solid #c6002d;color:#c6002d;display:inline-block;font-family:inherit;font-size:100%;outline:0;padding:.5em 1em;text-align:center;text-decoration:none}.pure-button:hover{background-color:#b20028;color:#fff;cursor:pointer}.pure-button.full-width{display:block;margin-bottom:10px}.pure-button[disabled]{background-color:#e1e1e1!important;border-color:#e1e1e1!important;color:$color-text-darkest-grey!important;opacity:.5;pointer-events:none}.pure-button.pure-button-primary{background-color:#c6002d;color:#fff;border-color:#c6002d}.pure-button.pure-button-primary:hover{background-color:#b20028;color:#fff;cursor:pointer}.pure-button.pure-button-info{background-color:#1864ef;color:#fff;border-color:#1864ef}.pure-button.pure-button-info:hover{background-color:#0f58dd;color:#fff;cursor:pointer}.pure-button.pure-button-success{background-color:#20af3d;color:#fff;border-color:#20af3d}.pure-button.pure-button-success:hover{background-color:#1d9e37;color:#fff;cursor:pointer}.pure-button.pure-button-subtle{background-color:transparent;border-color:#ccc;color:#666}.pure-button.pure-button-subtle:hover{background-color:#cbcbcb;color:#444;cursor:pointer}.pure-button.pure-button-youtube{background-color:#c4302b;color:#fff;border-color:#c4302b}.pure-button.pure-button-youtube:hover{background-color:#b02b27;color:#fff;cursor:pointer}.pure-button.pure-button-soundcloud{background-color:#f70;color:#fff;border-color:#f70}.pure-button.pure-button-soundcloud:hover{background-color:#e66b00;color:#fff;cursor:pointer}.pure-button.pure-button-twitter{background-color:#4099ff;color:#fff;border-color:#4099ff}.pure-button.pure-button-twitter:hover{background-color:#2088ff;color:#fff;cursor:pointer}.pure-button.rounded-short{border-radius:22px;line-height:44px;padding:0 30px}.pure-button.rounded-tall{border-radius:25px;line-height:50px;padding:0 30px}.feedback-submission-wrapper{border-radius:6px;box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;background-color:#107598;overflow:hidden;width:100%}.feedback-submission-wrapper .feedback-submission{padding:15px}.feedback-submission-wrapper .feedback-submission.feedback-submission-submit label{color:#fff}.feedback-submission-wrapper .feedback-submission.feedback-submission-submit label .fa-icon{margin:0 5px}.feedback-submission-wrapper .feedback-submission.feedback-submission-submit p{margin:0;padding:0;color:#fff;line-height:40px;margin-top:10px}.feedback-submission-wrapper .feedback-submission.feedback-submission-submit input[type=text]{border-radius:6px;box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;border:none;box-shadow:0 0 10px 5px rgba(0,0,0,.01);-moz-box-shadow:0 0 10px 5px rgba(0,0,0,.01);-webkit-box-shadow:0 0 10px 5px rgba(0,0,0,.01);line-height:40px;margin:10px 0;padding:0 10px;outline:0;resize:none;width:100%}.feedback-submission-wrapper .feedback-submission.feedback-submission-submit .pure-button{background-color:transparent;border:1px solid #fff;color:#fff;margin-top:10px}.feedback-submission-wrapper .feedback-submission.feedback-submission-submit .pure-button:hover{background-color:#fff;border-color:#fff;color:#161616}.feedback-submission-wrapper ul.submission-selector{margin:0;padding:0;list-style:none;background-color:rgba(0,0,0,.2);margin-top:5px;padding:10px}.feedback-submission-wrapper ul.submission-selector li{margin:0;padding:0;list-style:none;background-size:cover;background-repeat:no-repeat;background-position:50%;float:left;height:140px;margin:10px;opacity:.8;width:200px}.feedback-submission-wrapper ul.submission-selector li:hover{cursor:pointer;opacity:1;outline:3px solid #fff}", "", {"version":3,"sources":["/repos/elevator/src/components/feedback/FeedbackSubmission.vue"],"names":[],"mappings":"AA8OA,UAEE,8CAAoD,AACpD,mCAAoC,AACpC,kCAAmC,AACnC,SAAU,AACV,SAAW,CACZ,AACD,kBAEE,YAAc,CACf,AACD,WACE,UAAY,CACb,AACD,YACE,WAAa,CACd,AACD,UACE,WAAY,AACZ,UAAY,CACb,AACD,SACE,WAAY,AACZ,UAAY,CACb,AACD,WACE,kBAAqB,CACtB,AACD,YACE,mBAAsB,CACvB,AACD,kBACE,+BAAkC,CACnC,AACD,gBACE,kBAAmB,AACnB,gBAAiB,AACjB,iBAAmB,CACpB,AACD,yBACA,gBACI,gBAAiB,AACjB,YAAc,CACjB,CACA,AACD,sCACE,YAAc,CACf,AACD,eACE,kBAAmB,AACnB,aAAc,AACd,eAAmB,CACpB,AACD,yBACA,eACI,eAAiB,CACpB,CACA,AACD,2BACE,qBAAuB,CACxB,AACD,4BACE,YAAc,CACf,AACD,8BACE,SAAW,CACZ,AACD,4BACE,gBAAiB,AACjB,eAAiB,CAClB,AACD,sCAEE,uBAA0B,CAC3B,AACD,2BAEE,SAAW,CACZ,AACD,wBACE,MAAO,AACP,SAAU,AACV,OAAQ,AACR,QAAS,AACT,kBAAmB,AACnB,oBAAqB,AACrB,UAAY,CACb,AACD,mBACE,mBAAqB,AACrB,oBAAsB,CACvB,AACD,sBACE,SAAU,AACV,UAAW,AACX,WAAY,AACZ,iBAAmB,CACpB,AACD,8KAQE,UAAY,CACb,AACD,8QAQE,YAAc,CACf,AACD,8GAKE,eAAiB,CAClB,AACD,sBACE,WAAY,AACZ,gBAAiB,AACjB,eAAkB,CACnB,AACD,qBACE,aAAe,CAChB,AACD,qBACE,wBAA0B,AAC1B,yBAA2B,CAC5B,AACD,2BACE,cAAe,AACf,cAAgB,CACjB,AACD,8BACE,8BAA+B,AAC/B,WAAY,AACZ,wBAA2B,AAC3B,kBAAmB,AACnB,iBAAmB,CACpB,AACD,uBACE,kBAAmB,AACnB,yBAA0B,AAC1B,eAAgB,AAChB,aAAc,AACd,mBAAqB,AACrB,oBAAsB,CACvB,AACD,uBACE,qBAAsB,AACtB,YAAa,AACb,WAAY,AACZ,eAAiB,CAClB,AACD,kGAGE,cAAe,AACf,SAAU,AACV,eAAgB,AAChB,UAAW,AACX,UAAY,CACb,AACD,2BACE,qBAAsB,AACtB,iBAAkB,AAClB,gBAAiB,AACjB,aAAc,AACd,kBAAmB,AACnB,WAAa,CACd,AACD,6CACE,kBAAmB,AACnB,SAAU,AACV,UAAW,AACX,cAAe,AACf,aAAc,AACd,WAAa,CACd,AACD,4CACE,8BAA+B,AAC/B,YAAc,CACf,AACD,8CACE,SAAU,AACV,UAAW,AACX,cAAe,AACf,gBAAkB,AAClB,YAAa,AACb,iBAAkB,AAClB,aAAc,AACd,gBAAiB,AACjB,gBAAiB,AACjB,iBAAmB,CACpB,AACD,4CACE,kBAAmB,AACnB,sBAAuB,AACvB,2BAA4B,AAC5B,8BAA+B,AAC/B,aAAc,AACd,mBAAoB,AACpB,eAAgB,AAChB,UAAY,CACb,AACD,8DACE,SAAU,AACV,UAAW,AACX,kBAAmB,AACnB,SAAU,AACV,UAAW,AACX,YAAa,AACb,UAAY,CACb,AACD,+DACE,SAAU,AACV,UAAW,AACX,YAAa,AACb,eAAgB,AAChB,gBAAiB,AACjB,UAAY,CACb,AACD,0DACE,SAAU,AACV,UAAW,AACX,WAAY,AACZ,eAAiB,CAClB,AACD,aACE,wBAA0B,AAC1B,kBAAmB,AACnB,6BAA8B,AAC9B,yBAA0B,AAC1B,cAAe,AACf,qBAAsB,AACtB,oBAAqB,AACrB,eAAgB,AAChB,UAAW,AACX,iBAAmB,AACnB,kBAAmB,AACnB,oBAAsB,CACvB,AACD,mBACE,yBAA0B,AAC1B,WAAY,AACZ,cAAgB,CACjB,AACD,wBACE,cAAe,AACf,kBAAoB,CACrB,AACD,uBACE,mCAAqC,AACrC,+BAAiC,AACjC,yCAA2C,AAC3C,WAAa,AACb,mBAAqB,CACtB,AACD,iCACE,yBAA0B,AAC1B,WAAY,AACZ,oBAAsB,CACvB,AACD,uCACE,yBAA0B,AAC1B,WAAY,AACZ,cAAgB,CACjB,AACD,8BACE,yBAA0B,AAC1B,WAAY,AACZ,oBAAsB,CACvB,AACD,oCACE,yBAA0B,AAC1B,WAAY,AACZ,cAAgB,CACjB,AACD,iCACE,yBAA0B,AAC1B,WAAY,AACZ,oBAAsB,CACvB,AACD,uCACE,yBAA0B,AAC1B,WAAY,AACZ,cAAgB,CACjB,AACD,gCACE,6BAA8B,AAC9B,kBAAmB,AACnB,UAAY,CACb,AACD,sCACE,yBAA0B,AAC1B,WAAY,AACZ,cAAgB,CACjB,AACD,iCACE,yBAA0B,AAC1B,WAAY,AACZ,oBAAsB,CACvB,AACD,uCACE,yBAA0B,AAC1B,WAAY,AACZ,cAAgB,CACjB,AACD,oCACE,sBAAuB,AACvB,WAAY,AACZ,iBAAmB,CACpB,AACD,0CACE,yBAA0B,AAC1B,WAAY,AACZ,cAAgB,CACjB,AACD,iCACE,yBAA0B,AAC1B,WAAY,AACZ,oBAAsB,CACvB,AACD,uCACE,yBAA0B,AAC1B,WAAY,AACZ,cAAgB,CACjB,AACD,2BACE,mBAAoB,AACpB,iBAAkB,AAClB,cAAgB,CACjB,AACD,0BACE,mBAAoB,AACpB,iBAAkB,AAClB,cAAgB,CACjB,AACD,6BACE,kBAAmB,AACnB,sBAAuB,AACvB,2BAA4B,AAC5B,8BAA+B,AAC/B,yBAA0B,AAC1B,gBAAiB,AACjB,UAAY,CACb,AACD,kDACE,YAAc,CACf,AACD,mFACE,UAAY,CACb,AACD,4FACE,YAAc,CACf,AACD,+EACE,SAAU,AACV,UAAW,AACX,WAAY,AACZ,iBAAkB,AAClB,eAAiB,CAClB,AACD,8FACE,kBAAmB,AACnB,sBAAuB,AACvB,2BAA4B,AAC5B,8BAA+B,AAC/B,YAAa,AACb,wCAA0C,AAC1C,6CAA+C,AAC/C,gDAAkD,AAClD,iBAAkB,AAClB,cAAe,AACf,eAAgB,AAChB,UAAW,AACX,YAAa,AACb,UAAY,CACb,AACD,0FACE,6BAA8B,AAC9B,sBAAuB,AACvB,WAAY,AACZ,eAAiB,CAClB,AACD,gGACE,sBAAuB,AACvB,kBAAmB,AACnB,aAAe,CAChB,AACD,oDACE,SAAU,AACV,UAAW,AACX,gBAAiB,AACjB,gCAAkC,AAClC,eAAgB,AAChB,YAAc,CACf,AACD,uDACE,SAAU,AACV,UAAW,AACX,gBAAiB,AACjB,sBAAuB,AACvB,4BAA6B,AAC7B,wBAA4B,AAC5B,WAAY,AACZ,aAAc,AACd,YAAa,AACb,WAAa,AACb,WAAa,CACd,AACD,6DACE,eAAgB,AAChB,UAAW,AACX,sBAAwB,CACzB","file":"FeedbackSubmission.vue","sourcesContent":["\nhtml,\nbody {\n  font-family: 'Avenir', Helvetica, Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  margin: 0;\n  padding: 0;\n}\n.hidden,\n[v-cloak] {\n  display: none;\n}\n.pull-left {\n  float: left;\n}\n.pull-right {\n  float: right;\n}\n.clearfix {\n  clear: both;\n  float: none;\n}\n.fa-icon {\n  width: auto;\n  height: 1em;\n}\n.no-margin {\n  margin: 0 !important;\n}\n.no-padding {\n  padding: 0 !important;\n}\n.background-white {\n  background-color: #fff !important;\n}\n.main-container {\n  border-radius: 4px;\n  margin-top: 20px;\n  position: relative;\n}\n@media (max-width: 800px) {\n.main-container {\n    border-radius: 0;\n    margin-top: 0;\n}\n}\n.main-container.main-container-padded {\n  padding: 20px;\n}\n.content-block {\n  border-radius: 4px;\n  padding: 20px;\n  margin: 0 0 20px 0;\n}\n@media (max-width: 800px) {\n.content-block {\n    border-radius: 0;\n}\n}\n.content-block.white-block {\n  background-color: #fff;\n}\n.content-block.padded-block {\n  padding: 40px;\n}\n.content-block.unpadded-block {\n  padding: 0;\n}\n.content-block.header-block {\n  margin-top: 20px;\n  overflow: hidden;\n}\n.fade-enter-active,\n.fade-leave-active {\n  transition: all 0.3s ease;\n}\n.fade-enter,\n.fade-leave-to {\n  opacity: 0;\n}\n.particles-js-canvas-el {\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  position: absolute;\n  pointer-events: none;\n  z-index: -1;\n}\n.rendered-markdown {\n  white-space: initial;\n  word-wrap: break-word;\n}\n.rendered-markdown h1 {\n  margin: 0;\n  padding: 0;\n  color: #444;\n  margin-bottom: 5px;\n}\n.rendered-markdown h1,\n.rendered-markdown h2,\n.rendered-markdown h3,\n.rendered-markdown h4,\n.rendered-markdown h5,\n.rendered-markdown p,\n.rendered-markdown a,\n.rendered-markdown li {\n  color: #444;\n}\n.rendered-markdown h1:first-child,\n.rendered-markdown h2:first-child,\n.rendered-markdown h3:first-child,\n.rendered-markdown h4:first-child,\n.rendered-markdown h5:first-child,\n.rendered-markdown p:first-child,\n.rendered-markdown a:first-child,\n.rendered-markdown li:first-child {\n  margin-top: 0;\n}\n.rendered-markdown h1,\n.rendered-markdown h2,\n.rendered-markdown h3,\n.rendered-markdown h4,\n.rendered-markdown h5 {\n  font-weight: 300;\n}\n.rendered-markdown h2 {\n  color: #444;\n  font-size: 1.3em;\n  font-weight: bold;\n}\n.rendered-markdown p {\n  margin: 10px 0;\n}\n.rendered-markdown a {\n  color: #c6002d !important;\n  text-decoration: underline;\n}\n.rendered-markdown a:hover {\n  color: #c6002d;\n  cursor: pointer;\n}\n.rendered-markdown blockquote {\n  border-left: #c6002d 3px solid;\n  color: #ccc;\n  margin: 30px 20px 30px 0px;\n  padding-left: 20px;\n  font-style: italic;\n}\n.rendered-markdown pre {\n  border-radius: 6px;\n  background-color: #e9e9e9;\n  max-width: 100%;\n  padding: 20px;\n  white-space: initial;\n  word-wrap: break-word;\n}\n.rendered-markdown img {\n  display: inline-block;\n  margin: 10px;\n  width: 100%;\n  max-width: 160px;\n}\n.rendered-markdown img[data-4c],\n.rendered-markdown .fc-image img,\n.rendered-markdown .fc-image > img {\n  display: block;\n  margin: 0;\n  max-width: 100%;\n  padding: 0;\n  width: 100%;\n}\n.rendered-markdown .md-bio {\n  display: inline-block;\n  min-height: 100px;\n  overflow: hidden;\n  padding: 10px;\n  position: relative;\n  width: 160px;\n}\n.rendered-markdown .md-bio img.md-bio--image {\n  border-radius: 50%;\n  margin: 0;\n  padding: 0;\n  margin: 0 20px;\n  height: 120px;\n  width: 120px;\n}\n.rendered-markdown .md-bio .md-bio--content {\n  border-left: #e9e9e9 1px solid;\n  padding: 10px;\n}\n.rendered-markdown .md-bio h5.md-bio--caption {\n  margin: 0;\n  padding: 0;\n  font-size: 1em;\n  font-weight: bold;\n  height: 20px;\n  line-height: 20px;\n  margin: 5px 0;\n  max-width: 160px;\n  overflow: hidden;\n  text-align: center;\n}\n.rendered-markdown .md-bio.md-bio--with-bio {\n  border-radius: 6px;\n  box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  padding: 10px;\n  padding-left: 100px;\n  max-width: 100%;\n  width: 100%;\n}\n.rendered-markdown .md-bio.md-bio--with-bio img.md-bio--image {\n  margin: 0;\n  padding: 0;\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  height: 80px;\n  width: 80px;\n}\n.rendered-markdown .md-bio.md-bio--with-bio h5.md-bio--caption {\n  margin: 0;\n  padding: 0;\n  height: 20px;\n  max-width: 100%;\n  text-align: left;\n  width: 100%;\n}\n.rendered-markdown .md-bio.md-bio--with-bio p.md-bio--bio {\n  margin: 0;\n  padding: 0;\n  color: #666;\n  text-align: left;\n}\nhtml,\nbody {\n  font-family: 'Avenir', Helvetica, Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  margin: 0;\n  padding: 0;\n}\n.hidden,\n[v-cloak] {\n  display: none;\n}\n.pull-left {\n  float: left;\n}\n.pull-right {\n  float: right;\n}\n.clearfix {\n  clear: both;\n  float: none;\n}\n.fa-icon {\n  width: auto;\n  height: 1em;\n}\n.no-margin {\n  margin: 0 !important;\n}\n.no-padding {\n  padding: 0 !important;\n}\n.background-white {\n  background-color: #fff !important;\n}\n.main-container {\n  border-radius: 4px;\n  margin-top: 20px;\n  position: relative;\n}\n@media (max-width: 800px) {\n.main-container {\n    border-radius: 0;\n    margin-top: 0;\n}\n}\n.main-container.main-container-padded {\n  padding: 20px;\n}\n.content-block {\n  border-radius: 4px;\n  padding: 20px;\n  margin: 0 0 20px 0;\n}\n@media (max-width: 800px) {\n.content-block {\n    border-radius: 0;\n}\n}\n.content-block.white-block {\n  background-color: #fff;\n}\n.content-block.padded-block {\n  padding: 40px;\n}\n.content-block.unpadded-block {\n  padding: 0;\n}\n.content-block.header-block {\n  margin-top: 20px;\n  overflow: hidden;\n}\n.fade-enter-active,\n.fade-leave-active {\n  transition: all 0.3s ease;\n}\n.fade-enter,\n.fade-leave-to {\n  opacity: 0;\n}\n.particles-js-canvas-el {\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  position: absolute;\n  pointer-events: none;\n  z-index: -1;\n}\n.rendered-markdown {\n  white-space: initial;\n  word-wrap: break-word;\n}\n.rendered-markdown h1 {\n  margin: 0;\n  padding: 0;\n  color: #444;\n  margin-bottom: 5px;\n}\n.rendered-markdown h1,\n.rendered-markdown h2,\n.rendered-markdown h3,\n.rendered-markdown h4,\n.rendered-markdown h5,\n.rendered-markdown p,\n.rendered-markdown a,\n.rendered-markdown li {\n  color: #444;\n}\n.rendered-markdown h1:first-child,\n.rendered-markdown h2:first-child,\n.rendered-markdown h3:first-child,\n.rendered-markdown h4:first-child,\n.rendered-markdown h5:first-child,\n.rendered-markdown p:first-child,\n.rendered-markdown a:first-child,\n.rendered-markdown li:first-child {\n  margin-top: 0;\n}\n.rendered-markdown h1,\n.rendered-markdown h2,\n.rendered-markdown h3,\n.rendered-markdown h4,\n.rendered-markdown h5 {\n  font-weight: 300;\n}\n.rendered-markdown h2 {\n  color: #444;\n  font-size: 1.3em;\n  font-weight: bold;\n}\n.rendered-markdown p {\n  margin: 10px 0;\n}\n.rendered-markdown a {\n  color: #c6002d !important;\n  text-decoration: underline;\n}\n.rendered-markdown a:hover {\n  color: #c6002d;\n  cursor: pointer;\n}\n.rendered-markdown blockquote {\n  border-left: #c6002d 3px solid;\n  color: #ccc;\n  margin: 30px 20px 30px 0px;\n  padding-left: 20px;\n  font-style: italic;\n}\n.rendered-markdown pre {\n  border-radius: 6px;\n  background-color: #e9e9e9;\n  max-width: 100%;\n  padding: 20px;\n  white-space: initial;\n  word-wrap: break-word;\n}\n.rendered-markdown img {\n  display: inline-block;\n  margin: 10px;\n  width: 100%;\n  max-width: 160px;\n}\n.rendered-markdown img[data-4c],\n.rendered-markdown .fc-image img,\n.rendered-markdown .fc-image > img {\n  display: block;\n  margin: 0;\n  max-width: 100%;\n  padding: 0;\n  width: 100%;\n}\n.rendered-markdown .md-bio {\n  display: inline-block;\n  min-height: 100px;\n  overflow: hidden;\n  padding: 10px;\n  position: relative;\n  width: 160px;\n}\n.rendered-markdown .md-bio img.md-bio--image {\n  border-radius: 50%;\n  margin: 0;\n  padding: 0;\n  margin: 0 20px;\n  height: 120px;\n  width: 120px;\n}\n.rendered-markdown .md-bio .md-bio--content {\n  border-left: #e9e9e9 1px solid;\n  padding: 10px;\n}\n.rendered-markdown .md-bio h5.md-bio--caption {\n  margin: 0;\n  padding: 0;\n  font-size: 1em;\n  font-weight: bold;\n  height: 20px;\n  line-height: 20px;\n  margin: 5px 0;\n  max-width: 160px;\n  overflow: hidden;\n  text-align: center;\n}\n.rendered-markdown .md-bio.md-bio--with-bio {\n  border-radius: 6px;\n  box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  padding: 10px;\n  padding-left: 100px;\n  max-width: 100%;\n  width: 100%;\n}\n.rendered-markdown .md-bio.md-bio--with-bio img.md-bio--image {\n  margin: 0;\n  padding: 0;\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  height: 80px;\n  width: 80px;\n}\n.rendered-markdown .md-bio.md-bio--with-bio h5.md-bio--caption {\n  margin: 0;\n  padding: 0;\n  height: 20px;\n  max-width: 100%;\n  text-align: left;\n  width: 100%;\n}\n.rendered-markdown .md-bio.md-bio--with-bio p.md-bio--bio {\n  margin: 0;\n  padding: 0;\n  color: #666;\n  text-align: left;\n}\n.pure-button {\n  transition: all 0.3s ease;\n  border-radius: 4px;\n  background-color: transparent;\n  border: #c6002d 1px solid;\n  color: #c6002d;\n  display: inline-block;\n  font-family: inherit;\n  font-size: 100%;\n  outline: 0;\n  padding: 0.5em 1em;\n  text-align: center;\n  text-decoration: none;\n}\n.pure-button:hover {\n  background-color: #b20028;\n  color: #fff;\n  cursor: pointer;\n}\n.pure-button.full-width {\n  display: block;\n  margin-bottom: 10px;\n}\n.pure-button[disabled] {\n  background-color: #e1e1e1 !important;\n  border-color: #e1e1e1 !important;\n  color: $color-text-darkest-grey !important;\n  opacity: 0.5;\n  pointer-events: none;\n}\n.pure-button.pure-button-primary {\n  background-color: #c6002d;\n  color: #fff;\n  border-color: #c6002d;\n}\n.pure-button.pure-button-primary:hover {\n  background-color: #b20028;\n  color: #fff;\n  cursor: pointer;\n}\n.pure-button.pure-button-info {\n  background-color: #1864ef;\n  color: #fff;\n  border-color: #1864ef;\n}\n.pure-button.pure-button-info:hover {\n  background-color: #0f58dd;\n  color: #fff;\n  cursor: pointer;\n}\n.pure-button.pure-button-success {\n  background-color: #20af3d;\n  color: #fff;\n  border-color: #20af3d;\n}\n.pure-button.pure-button-success:hover {\n  background-color: #1d9e37;\n  color: #fff;\n  cursor: pointer;\n}\n.pure-button.pure-button-subtle {\n  background-color: transparent;\n  border-color: #ccc;\n  color: #666;\n}\n.pure-button.pure-button-subtle:hover {\n  background-color: #cbcbcb;\n  color: #444;\n  cursor: pointer;\n}\n.pure-button.pure-button-youtube {\n  background-color: #c4302b;\n  color: #fff;\n  border-color: #c4302b;\n}\n.pure-button.pure-button-youtube:hover {\n  background-color: #b02b27;\n  color: #fff;\n  cursor: pointer;\n}\n.pure-button.pure-button-soundcloud {\n  background-color: #f70;\n  color: #fff;\n  border-color: #f70;\n}\n.pure-button.pure-button-soundcloud:hover {\n  background-color: #e66b00;\n  color: #fff;\n  cursor: pointer;\n}\n.pure-button.pure-button-twitter {\n  background-color: #4099ff;\n  color: #fff;\n  border-color: #4099ff;\n}\n.pure-button.pure-button-twitter:hover {\n  background-color: #2088ff;\n  color: #fff;\n  cursor: pointer;\n}\n.pure-button.rounded-short {\n  border-radius: 22px;\n  line-height: 44px;\n  padding: 0 30px;\n}\n.pure-button.rounded-tall {\n  border-radius: 25px;\n  line-height: 50px;\n  padding: 0 30px;\n}\n.feedback-submission-wrapper {\n  border-radius: 6px;\n  box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  background-color: #107598;\n  overflow: hidden;\n  width: 100%;\n}\n.feedback-submission-wrapper .feedback-submission {\n  padding: 15px;\n}\n.feedback-submission-wrapper .feedback-submission.feedback-submission-submit label {\n  color: #fff;\n}\n.feedback-submission-wrapper .feedback-submission.feedback-submission-submit label .fa-icon {\n  margin: 0 5px;\n}\n.feedback-submission-wrapper .feedback-submission.feedback-submission-submit p {\n  margin: 0;\n  padding: 0;\n  color: #fff;\n  line-height: 40px;\n  margin-top: 10px;\n}\n.feedback-submission-wrapper .feedback-submission.feedback-submission-submit input[type=\"text\"] {\n  border-radius: 6px;\n  box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  border: none;\n  box-shadow: 0 0 10px 5px rgba(0,0,0,0.01);\n  -moz-box-shadow: 0 0 10px 5px rgba(0,0,0,0.01);\n  -webkit-box-shadow: 0 0 10px 5px rgba(0,0,0,0.01);\n  line-height: 40px;\n  margin: 10px 0;\n  padding: 0 10px;\n  outline: 0;\n  resize: none;\n  width: 100%;\n}\n.feedback-submission-wrapper .feedback-submission.feedback-submission-submit .pure-button {\n  background-color: transparent;\n  border: #fff 1px solid;\n  color: #fff;\n  margin-top: 10px;\n}\n.feedback-submission-wrapper .feedback-submission.feedback-submission-submit .pure-button:hover {\n  background-color: #fff;\n  border-color: #fff;\n  color: #161616;\n}\n.feedback-submission-wrapper ul.submission-selector {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  background-color: rgba(0,0,0,0.2);\n  margin-top: 5px;\n  padding: 10px;\n}\n.feedback-submission-wrapper ul.submission-selector li {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  float: left;\n  height: 140px;\n  margin: 10px;\n  opacity: 0.8;\n  width: 200px;\n}\n.feedback-submission-wrapper ul.submission-selector li:hover {\n  cursor: pointer;\n  opacity: 1;\n  outline: #fff 3px solid;\n}"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 779:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(412)();
// imports


// module
exports.push([module.i, "body[data-v-9f53fe9c],html[data-v-9f53fe9c]{font-family:Avenir,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0;padding:0}.hidden[data-v-9f53fe9c],[v-cloak][data-v-9f53fe9c]{display:none}.pull-left[data-v-9f53fe9c]{float:left}.pull-right[data-v-9f53fe9c]{float:right}.clearfix[data-v-9f53fe9c]{clear:both;float:none}.fa-icon[data-v-9f53fe9c]{width:auto;height:1em}.no-margin[data-v-9f53fe9c]{margin:0!important}.no-padding[data-v-9f53fe9c]{padding:0!important}.background-white[data-v-9f53fe9c]{background-color:#fff!important}.main-container[data-v-9f53fe9c]{border-radius:4px;margin-top:20px;position:relative}@media (max-width:800px){.main-container[data-v-9f53fe9c]{border-radius:0;margin-top:0}}.main-container.main-container-padded[data-v-9f53fe9c]{padding:20px}.content-block[data-v-9f53fe9c]{border-radius:4px;padding:20px;margin:0 0 20px}@media (max-width:800px){.content-block[data-v-9f53fe9c]{border-radius:0}}.content-block.white-block[data-v-9f53fe9c]{background-color:#fff}.content-block.padded-block[data-v-9f53fe9c]{padding:40px}.content-block.unpadded-block[data-v-9f53fe9c]{padding:0}.content-block.header-block[data-v-9f53fe9c]{margin-top:20px;overflow:hidden}.fade-enter-active[data-v-9f53fe9c],.fade-leave-active[data-v-9f53fe9c]{transition:all .3s ease}.fade-enter[data-v-9f53fe9c],.fade-leave-to[data-v-9f53fe9c]{opacity:0}.particles-js-canvas-el[data-v-9f53fe9c]{top:0;bottom:0;left:0;right:0;position:absolute;pointer-events:none;z-index:-1}.rendered-markdown[data-v-9f53fe9c]{white-space:normal;word-wrap:break-word}.rendered-markdown h1[data-v-9f53fe9c]{margin:0;padding:0;color:#444;margin-bottom:5px}.rendered-markdown a[data-v-9f53fe9c],.rendered-markdown h1[data-v-9f53fe9c],.rendered-markdown h2[data-v-9f53fe9c],.rendered-markdown h3[data-v-9f53fe9c],.rendered-markdown h4[data-v-9f53fe9c],.rendered-markdown h5[data-v-9f53fe9c],.rendered-markdown li[data-v-9f53fe9c],.rendered-markdown p[data-v-9f53fe9c]{color:#444}.rendered-markdown a[data-v-9f53fe9c]:first-child,.rendered-markdown h1[data-v-9f53fe9c]:first-child,.rendered-markdown h2[data-v-9f53fe9c]:first-child,.rendered-markdown h3[data-v-9f53fe9c]:first-child,.rendered-markdown h4[data-v-9f53fe9c]:first-child,.rendered-markdown h5[data-v-9f53fe9c]:first-child,.rendered-markdown li[data-v-9f53fe9c]:first-child,.rendered-markdown p[data-v-9f53fe9c]:first-child{margin-top:0}.rendered-markdown h1[data-v-9f53fe9c],.rendered-markdown h2[data-v-9f53fe9c],.rendered-markdown h3[data-v-9f53fe9c],.rendered-markdown h4[data-v-9f53fe9c],.rendered-markdown h5[data-v-9f53fe9c]{font-weight:300}.rendered-markdown h2[data-v-9f53fe9c]{color:#444;font-size:1.3em;font-weight:700}.rendered-markdown p[data-v-9f53fe9c]{margin:10px 0}.rendered-markdown a[data-v-9f53fe9c]{color:#c6002d!important;text-decoration:underline}.rendered-markdown a[data-v-9f53fe9c]:hover{color:#c6002d;cursor:pointer}.rendered-markdown blockquote[data-v-9f53fe9c]{border-left:3px solid #c6002d;color:#ccc;margin:30px 20px 30px 0;padding-left:20px;font-style:italic}.rendered-markdown pre[data-v-9f53fe9c]{border-radius:6px;background-color:#e9e9e9;max-width:100%;padding:20px;white-space:normal;word-wrap:break-word}.rendered-markdown img[data-v-9f53fe9c]{display:inline-block;margin:10px;width:100%;max-width:160px}.rendered-markdown .fc-image>img[data-v-9f53fe9c],.rendered-markdown .fc-image img[data-v-9f53fe9c],.rendered-markdown img[data-4c][data-v-9f53fe9c]{display:block;margin:0;max-width:100%;padding:0;width:100%}.rendered-markdown .md-bio[data-v-9f53fe9c]{display:inline-block;min-height:100px;overflow:hidden;padding:10px;position:relative;width:160px}.rendered-markdown .md-bio img.md-bio--image[data-v-9f53fe9c]{border-radius:50%;margin:0;padding:0;margin:0 20px;height:120px;width:120px}.rendered-markdown .md-bio .md-bio--content[data-v-9f53fe9c]{border-left:1px solid #e9e9e9;padding:10px}.rendered-markdown .md-bio h5.md-bio--caption[data-v-9f53fe9c]{margin:0;padding:0;font-size:1em;font-weight:700;height:20px;line-height:20px;margin:5px 0;max-width:160px;overflow:hidden;text-align:center}.rendered-markdown .md-bio.md-bio--with-bio[data-v-9f53fe9c]{border-radius:6px;box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:10px;padding-left:100px;max-width:100%;width:100%}.rendered-markdown .md-bio.md-bio--with-bio img.md-bio--image[data-v-9f53fe9c]{margin:0;padding:0;position:absolute;top:10px;left:10px;height:80px;width:80px}.rendered-markdown .md-bio.md-bio--with-bio h5.md-bio--caption[data-v-9f53fe9c]{margin:0;padding:0;height:20px;max-width:100%;text-align:left;width:100%}.rendered-markdown .md-bio.md-bio--with-bio p.md-bio--bio[data-v-9f53fe9c]{margin:0;padding:0;color:#666;text-align:left}.feedback-tile[data-v-9f53fe9c]{margin:0;padding:0;list-style:none;background-color:#e1e1e1;margin:10px;position:relative}.feedback-tile .message-count[data-v-9f53fe9c],.feedback-tile .unread-count[data-v-9f53fe9c]{border-radius:12px;color:#fff;display:inline-block;font-size:.8em;height:24px;line-height:24px;min-width:8px;padding:0 8px;position:absolute;top:5px}.feedback-tile .message-count[data-v-9f53fe9c]{background-color:#c6002d;right:5px}.feedback-tile .unread-count[data-v-9f53fe9c]{background-color:#20af3d;left:5px}.feedback-tile .thumbnail-image[data-v-9f53fe9c]{background-color:#cbcbcb;background-size:cover;background-repeat:no-repeat;background-position:50%;display:block;padding-bottom:56%;height:0;width:100%}.feedback-tile .user-strip[data-v-9f53fe9c]{background-color:#fff;padding-left:50px;position:relative}.feedback-tile .user-strip img.user-profile-image[data-v-9f53fe9c]{border-radius:50%;border:3px solid #fff;height:40px;width:40px;position:absolute;top:-10px;left:5px}.feedback-tile .user-strip h5.user-profile-name[data-v-9f53fe9c]{margin:0;padding:0;height:32px;line-height:32px;padding:0 10px;transition:all .3s ease}.feedback-tile[data-v-9f53fe9c]:hover{cursor:pointer}.feedback-tile:hover .user-strip h5.user-profile-name[data-v-9f53fe9c]{color:#c6002d}", "", {"version":3,"sources":["/repos/elevator/src/components/feedback/FeedbackTile.vue"],"names":[],"mappings":"AACA,4CAEE,8CAAoD,AACpD,mCAAoC,AACpC,kCAAmC,AACnC,SAAU,AACV,SAAW,CACZ,AACD,oDAEE,YAAc,CACf,AACD,4BACE,UAAY,CACb,AACD,6BACE,WAAa,CACd,AACD,2BACE,WAAY,AACZ,UAAY,CACb,AACD,0BACE,WAAY,AACZ,UAAY,CACb,AACD,4BACE,kBAAqB,CACtB,AACD,6BACE,mBAAsB,CACvB,AACD,mCACE,+BAAkC,CACnC,AACD,iCACE,kBAAmB,AACnB,gBAAiB,AACjB,iBAAmB,CACpB,AACD,yBACA,iCACI,gBAAiB,AACjB,YAAc,CACjB,CACA,AACD,uDACE,YAAc,CACf,AACD,gCACE,kBAAmB,AACnB,aAAc,AACd,eAAmB,CACpB,AACD,yBACA,gCACI,eAAiB,CACpB,CACA,AACD,4CACE,qBAAuB,CACxB,AACD,6CACE,YAAc,CACf,AACD,+CACE,SAAW,CACZ,AACD,6CACE,gBAAiB,AACjB,eAAiB,CAClB,AACD,wEAEE,uBAA0B,CAC3B,AACD,6DAEE,SAAW,CACZ,AACD,yCACE,MAAO,AACP,SAAU,AACV,OAAQ,AACR,QAAS,AACT,kBAAmB,AACnB,oBAAqB,AACrB,UAAY,CACb,AACD,oCACE,mBAAqB,AACrB,oBAAsB,CACvB,AACD,uCACE,SAAU,AACV,UAAW,AACX,WAAY,AACZ,iBAAmB,CACpB,AACD,sTAQE,UAAY,CACb,AACD,sZAQE,YAAc,CACf,AACD,mMAKE,eAAiB,CAClB,AACD,uCACE,WAAY,AACZ,gBAAiB,AACjB,eAAkB,CACnB,AACD,sCACE,aAAe,CAChB,AACD,sCACE,wBAA0B,AAC1B,yBAA2B,CAC5B,AACD,4CACE,cAAe,AACf,cAAgB,CACjB,AACD,+CACE,8BAA+B,AAC/B,WAAY,AACZ,wBAA2B,AAC3B,kBAAmB,AACnB,iBAAmB,CACpB,AACD,wCACE,kBAAmB,AACnB,yBAA0B,AAC1B,eAAgB,AAChB,aAAc,AACd,mBAAqB,AACrB,oBAAsB,CACvB,AACD,wCACE,qBAAsB,AACtB,YAAa,AACb,WAAY,AACZ,eAAiB,CAClB,AACD,qJAGE,cAAe,AACf,SAAU,AACV,eAAgB,AAChB,UAAW,AACX,UAAY,CACb,AACD,4CACE,qBAAsB,AACtB,iBAAkB,AAClB,gBAAiB,AACjB,aAAc,AACd,kBAAmB,AACnB,WAAa,CACd,AACD,8DACE,kBAAmB,AACnB,SAAU,AACV,UAAW,AACX,cAAe,AACf,aAAc,AACd,WAAa,CACd,AACD,6DACE,8BAA+B,AAC/B,YAAc,CACf,AACD,+DACE,SAAU,AACV,UAAW,AACX,cAAe,AACf,gBAAkB,AAClB,YAAa,AACb,iBAAkB,AAClB,aAAc,AACd,gBAAiB,AACjB,gBAAiB,AACjB,iBAAmB,CACpB,AACD,6DACE,kBAAmB,AACnB,sBAAuB,AACvB,2BAA4B,AAC5B,8BAA+B,AAC/B,aAAc,AACd,mBAAoB,AACpB,eAAgB,AAChB,UAAY,CACb,AACD,+EACE,SAAU,AACV,UAAW,AACX,kBAAmB,AACnB,SAAU,AACV,UAAW,AACX,YAAa,AACb,UAAY,CACb,AACD,gFACE,SAAU,AACV,UAAW,AACX,YAAa,AACb,eAAgB,AAChB,gBAAiB,AACjB,UAAY,CACb,AACD,2EACE,SAAU,AACV,UAAW,AACX,WAAY,AACZ,eAAiB,CAClB,AACD,gCACE,SAAU,AACV,UAAW,AACX,gBAAiB,AACjB,yBAA0B,AAC1B,YAAa,AACb,iBAAmB,CACpB,AACD,6FAEE,mBAAoB,AACpB,WAAY,AACZ,qBAAsB,AACtB,eAAiB,AACjB,YAAa,AACb,iBAAkB,AAClB,cAAe,AACf,cAAe,AACf,kBAAmB,AACnB,OAAS,CACV,AACD,+CACE,yBAA0B,AAC1B,SAAW,CACZ,AACD,8CACE,yBAA0B,AAC1B,QAAU,CACX,AACD,iDACE,yBAA0B,AAC1B,sBAAuB,AACvB,4BAA6B,AAC7B,wBAA4B,AAC5B,cAAe,AACf,mBAAoB,AACpB,SAAU,AACV,UAAY,CACb,AACD,4CACE,sBAAuB,AACvB,kBAAmB,AACnB,iBAAmB,CACpB,AACD,mEACE,kBAAmB,AACnB,sBAAuB,AACvB,YAAa,AACb,WAAY,AACZ,kBAAmB,AACnB,UAAW,AACX,QAAU,CACX,AACD,iEACE,SAAU,AACV,UAAW,AACX,YAAa,AACb,iBAAkB,AAClB,eAAgB,AAChB,uBAA0B,CAC3B,AACD,sCACE,cAAgB,CACjB,AACD,uEACE,aAAe,CAChB","file":"FeedbackTile.vue","sourcesContent":["\nhtml[data-v-9f53fe9c],\nbody[data-v-9f53fe9c] {\n  font-family: 'Avenir', Helvetica, Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  margin: 0;\n  padding: 0;\n}\n.hidden[data-v-9f53fe9c],\n[v-cloak][data-v-9f53fe9c] {\n  display: none;\n}\n.pull-left[data-v-9f53fe9c] {\n  float: left;\n}\n.pull-right[data-v-9f53fe9c] {\n  float: right;\n}\n.clearfix[data-v-9f53fe9c] {\n  clear: both;\n  float: none;\n}\n.fa-icon[data-v-9f53fe9c] {\n  width: auto;\n  height: 1em;\n}\n.no-margin[data-v-9f53fe9c] {\n  margin: 0 !important;\n}\n.no-padding[data-v-9f53fe9c] {\n  padding: 0 !important;\n}\n.background-white[data-v-9f53fe9c] {\n  background-color: #fff !important;\n}\n.main-container[data-v-9f53fe9c] {\n  border-radius: 4px;\n  margin-top: 20px;\n  position: relative;\n}\n@media (max-width: 800px) {\n.main-container[data-v-9f53fe9c] {\n    border-radius: 0;\n    margin-top: 0;\n}\n}\n.main-container.main-container-padded[data-v-9f53fe9c] {\n  padding: 20px;\n}\n.content-block[data-v-9f53fe9c] {\n  border-radius: 4px;\n  padding: 20px;\n  margin: 0 0 20px 0;\n}\n@media (max-width: 800px) {\n.content-block[data-v-9f53fe9c] {\n    border-radius: 0;\n}\n}\n.content-block.white-block[data-v-9f53fe9c] {\n  background-color: #fff;\n}\n.content-block.padded-block[data-v-9f53fe9c] {\n  padding: 40px;\n}\n.content-block.unpadded-block[data-v-9f53fe9c] {\n  padding: 0;\n}\n.content-block.header-block[data-v-9f53fe9c] {\n  margin-top: 20px;\n  overflow: hidden;\n}\n.fade-enter-active[data-v-9f53fe9c],\n.fade-leave-active[data-v-9f53fe9c] {\n  transition: all 0.3s ease;\n}\n.fade-enter[data-v-9f53fe9c],\n.fade-leave-to[data-v-9f53fe9c] {\n  opacity: 0;\n}\n.particles-js-canvas-el[data-v-9f53fe9c] {\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  position: absolute;\n  pointer-events: none;\n  z-index: -1;\n}\n.rendered-markdown[data-v-9f53fe9c] {\n  white-space: initial;\n  word-wrap: break-word;\n}\n.rendered-markdown h1[data-v-9f53fe9c] {\n  margin: 0;\n  padding: 0;\n  color: #444;\n  margin-bottom: 5px;\n}\n.rendered-markdown h1[data-v-9f53fe9c],\n.rendered-markdown h2[data-v-9f53fe9c],\n.rendered-markdown h3[data-v-9f53fe9c],\n.rendered-markdown h4[data-v-9f53fe9c],\n.rendered-markdown h5[data-v-9f53fe9c],\n.rendered-markdown p[data-v-9f53fe9c],\n.rendered-markdown a[data-v-9f53fe9c],\n.rendered-markdown li[data-v-9f53fe9c] {\n  color: #444;\n}\n.rendered-markdown h1[data-v-9f53fe9c]:first-child,\n.rendered-markdown h2[data-v-9f53fe9c]:first-child,\n.rendered-markdown h3[data-v-9f53fe9c]:first-child,\n.rendered-markdown h4[data-v-9f53fe9c]:first-child,\n.rendered-markdown h5[data-v-9f53fe9c]:first-child,\n.rendered-markdown p[data-v-9f53fe9c]:first-child,\n.rendered-markdown a[data-v-9f53fe9c]:first-child,\n.rendered-markdown li[data-v-9f53fe9c]:first-child {\n  margin-top: 0;\n}\n.rendered-markdown h1[data-v-9f53fe9c],\n.rendered-markdown h2[data-v-9f53fe9c],\n.rendered-markdown h3[data-v-9f53fe9c],\n.rendered-markdown h4[data-v-9f53fe9c],\n.rendered-markdown h5[data-v-9f53fe9c] {\n  font-weight: 300;\n}\n.rendered-markdown h2[data-v-9f53fe9c] {\n  color: #444;\n  font-size: 1.3em;\n  font-weight: bold;\n}\n.rendered-markdown p[data-v-9f53fe9c] {\n  margin: 10px 0;\n}\n.rendered-markdown a[data-v-9f53fe9c] {\n  color: #c6002d !important;\n  text-decoration: underline;\n}\n.rendered-markdown a[data-v-9f53fe9c]:hover {\n  color: #c6002d;\n  cursor: pointer;\n}\n.rendered-markdown blockquote[data-v-9f53fe9c] {\n  border-left: #c6002d 3px solid;\n  color: #ccc;\n  margin: 30px 20px 30px 0px;\n  padding-left: 20px;\n  font-style: italic;\n}\n.rendered-markdown pre[data-v-9f53fe9c] {\n  border-radius: 6px;\n  background-color: #e9e9e9;\n  max-width: 100%;\n  padding: 20px;\n  white-space: initial;\n  word-wrap: break-word;\n}\n.rendered-markdown img[data-v-9f53fe9c] {\n  display: inline-block;\n  margin: 10px;\n  width: 100%;\n  max-width: 160px;\n}\n.rendered-markdown img[data-4c][data-v-9f53fe9c],\n.rendered-markdown .fc-image img[data-v-9f53fe9c],\n.rendered-markdown .fc-image > img[data-v-9f53fe9c] {\n  display: block;\n  margin: 0;\n  max-width: 100%;\n  padding: 0;\n  width: 100%;\n}\n.rendered-markdown .md-bio[data-v-9f53fe9c] {\n  display: inline-block;\n  min-height: 100px;\n  overflow: hidden;\n  padding: 10px;\n  position: relative;\n  width: 160px;\n}\n.rendered-markdown .md-bio img.md-bio--image[data-v-9f53fe9c] {\n  border-radius: 50%;\n  margin: 0;\n  padding: 0;\n  margin: 0 20px;\n  height: 120px;\n  width: 120px;\n}\n.rendered-markdown .md-bio .md-bio--content[data-v-9f53fe9c] {\n  border-left: #e9e9e9 1px solid;\n  padding: 10px;\n}\n.rendered-markdown .md-bio h5.md-bio--caption[data-v-9f53fe9c] {\n  margin: 0;\n  padding: 0;\n  font-size: 1em;\n  font-weight: bold;\n  height: 20px;\n  line-height: 20px;\n  margin: 5px 0;\n  max-width: 160px;\n  overflow: hidden;\n  text-align: center;\n}\n.rendered-markdown .md-bio.md-bio--with-bio[data-v-9f53fe9c] {\n  border-radius: 6px;\n  box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  padding: 10px;\n  padding-left: 100px;\n  max-width: 100%;\n  width: 100%;\n}\n.rendered-markdown .md-bio.md-bio--with-bio img.md-bio--image[data-v-9f53fe9c] {\n  margin: 0;\n  padding: 0;\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  height: 80px;\n  width: 80px;\n}\n.rendered-markdown .md-bio.md-bio--with-bio h5.md-bio--caption[data-v-9f53fe9c] {\n  margin: 0;\n  padding: 0;\n  height: 20px;\n  max-width: 100%;\n  text-align: left;\n  width: 100%;\n}\n.rendered-markdown .md-bio.md-bio--with-bio p.md-bio--bio[data-v-9f53fe9c] {\n  margin: 0;\n  padding: 0;\n  color: #666;\n  text-align: left;\n}\n.feedback-tile[data-v-9f53fe9c] {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  background-color: #e1e1e1;\n  margin: 10px;\n  position: relative;\n}\n.feedback-tile .message-count[data-v-9f53fe9c],\n.feedback-tile .unread-count[data-v-9f53fe9c] {\n  border-radius: 12px;\n  color: #fff;\n  display: inline-block;\n  font-size: 0.8em;\n  height: 24px;\n  line-height: 24px;\n  min-width: 8px;\n  padding: 0 8px;\n  position: absolute;\n  top: 5px;\n}\n.feedback-tile .message-count[data-v-9f53fe9c] {\n  background-color: #c6002d;\n  right: 5px;\n}\n.feedback-tile .unread-count[data-v-9f53fe9c] {\n  background-color: #20af3d;\n  left: 5px;\n}\n.feedback-tile .thumbnail-image[data-v-9f53fe9c] {\n  background-color: #cbcbcb;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  display: block;\n  padding-bottom: 56%;\n  height: 0;\n  width: 100%;\n}\n.feedback-tile .user-strip[data-v-9f53fe9c] {\n  background-color: #fff;\n  padding-left: 50px;\n  position: relative;\n}\n.feedback-tile .user-strip img.user-profile-image[data-v-9f53fe9c] {\n  border-radius: 50%;\n  border: #fff 3px solid;\n  height: 40px;\n  width: 40px;\n  position: absolute;\n  top: -10px;\n  left: 5px;\n}\n.feedback-tile .user-strip h5.user-profile-name[data-v-9f53fe9c] {\n  margin: 0;\n  padding: 0;\n  height: 32px;\n  line-height: 32px;\n  padding: 0 10px;\n  transition: all 0.3s ease;\n}\n.feedback-tile[data-v-9f53fe9c]:hover {\n  cursor: pointer;\n}\n.feedback-tile:hover .user-strip h5.user-profile-name[data-v-9f53fe9c] {\n  color: #c6002d;\n}"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 780:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(412)();
// imports


// module
exports.push([module.i, "body[data-v-a23420f4],html[data-v-a23420f4]{font-family:Avenir,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0;padding:0}.hidden[data-v-a23420f4],[v-cloak][data-v-a23420f4]{display:none}.pull-left[data-v-a23420f4]{float:left}.pull-right[data-v-a23420f4]{float:right}.clearfix[data-v-a23420f4]{clear:both;float:none}.fa-icon[data-v-a23420f4]{width:auto;height:1em}.no-margin[data-v-a23420f4]{margin:0!important}.no-padding[data-v-a23420f4]{padding:0!important}.background-white[data-v-a23420f4]{background-color:#fff!important}.main-container[data-v-a23420f4]{border-radius:4px;margin-top:20px;position:relative}@media (max-width:800px){.main-container[data-v-a23420f4]{border-radius:0;margin-top:0}}.main-container.main-container-padded[data-v-a23420f4]{padding:20px}.content-block[data-v-a23420f4]{border-radius:4px;padding:20px;margin:0 0 20px}@media (max-width:800px){.content-block[data-v-a23420f4]{border-radius:0}}.content-block.white-block[data-v-a23420f4]{background-color:#fff}.content-block.padded-block[data-v-a23420f4]{padding:40px}.content-block.unpadded-block[data-v-a23420f4]{padding:0}.content-block.header-block[data-v-a23420f4]{margin-top:20px;overflow:hidden}.fade-enter-active[data-v-a23420f4],.fade-leave-active[data-v-a23420f4]{transition:all .3s ease}.fade-enter[data-v-a23420f4],.fade-leave-to[data-v-a23420f4]{opacity:0}.particles-js-canvas-el[data-v-a23420f4]{top:0;bottom:0;left:0;right:0;position:absolute;pointer-events:none;z-index:-1}.rendered-markdown[data-v-a23420f4]{white-space:normal;word-wrap:break-word}.rendered-markdown h1[data-v-a23420f4]{margin:0;padding:0;color:#444;margin-bottom:5px}.rendered-markdown a[data-v-a23420f4],.rendered-markdown h1[data-v-a23420f4],.rendered-markdown h2[data-v-a23420f4],.rendered-markdown h3[data-v-a23420f4],.rendered-markdown h4[data-v-a23420f4],.rendered-markdown h5[data-v-a23420f4],.rendered-markdown li[data-v-a23420f4],.rendered-markdown p[data-v-a23420f4]{color:#444}.rendered-markdown a[data-v-a23420f4]:first-child,.rendered-markdown h1[data-v-a23420f4]:first-child,.rendered-markdown h2[data-v-a23420f4]:first-child,.rendered-markdown h3[data-v-a23420f4]:first-child,.rendered-markdown h4[data-v-a23420f4]:first-child,.rendered-markdown h5[data-v-a23420f4]:first-child,.rendered-markdown li[data-v-a23420f4]:first-child,.rendered-markdown p[data-v-a23420f4]:first-child{margin-top:0}.rendered-markdown h1[data-v-a23420f4],.rendered-markdown h2[data-v-a23420f4],.rendered-markdown h3[data-v-a23420f4],.rendered-markdown h4[data-v-a23420f4],.rendered-markdown h5[data-v-a23420f4]{font-weight:300}.rendered-markdown h2[data-v-a23420f4]{color:#444;font-size:1.3em;font-weight:700}.rendered-markdown p[data-v-a23420f4]{margin:10px 0}.rendered-markdown a[data-v-a23420f4]{color:#c6002d!important;text-decoration:underline}.rendered-markdown a[data-v-a23420f4]:hover{color:#c6002d;cursor:pointer}.rendered-markdown blockquote[data-v-a23420f4]{border-left:3px solid #c6002d;color:#ccc;margin:30px 20px 30px 0;padding-left:20px;font-style:italic}.rendered-markdown pre[data-v-a23420f4]{border-radius:6px;background-color:#e9e9e9;max-width:100%;padding:20px;white-space:normal;word-wrap:break-word}.rendered-markdown img[data-v-a23420f4]{display:inline-block;margin:10px;width:100%;max-width:160px}.rendered-markdown .fc-image>img[data-v-a23420f4],.rendered-markdown .fc-image img[data-v-a23420f4],.rendered-markdown img[data-4c][data-v-a23420f4]{display:block;margin:0;max-width:100%;padding:0;width:100%}.rendered-markdown .md-bio[data-v-a23420f4]{display:inline-block;min-height:100px;overflow:hidden;padding:10px;position:relative;width:160px}.rendered-markdown .md-bio img.md-bio--image[data-v-a23420f4]{border-radius:50%;margin:0;padding:0;margin:0 20px;height:120px;width:120px}.rendered-markdown .md-bio .md-bio--content[data-v-a23420f4]{border-left:1px solid #e9e9e9;padding:10px}.rendered-markdown .md-bio h5.md-bio--caption[data-v-a23420f4]{margin:0;padding:0;font-size:1em;font-weight:700;height:20px;line-height:20px;margin:5px 0;max-width:160px;overflow:hidden;text-align:center}.rendered-markdown .md-bio.md-bio--with-bio[data-v-a23420f4]{border-radius:6px;box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:10px;padding-left:100px;max-width:100%;width:100%}.rendered-markdown .md-bio.md-bio--with-bio img.md-bio--image[data-v-a23420f4]{margin:0;padding:0;position:absolute;top:10px;left:10px;height:80px;width:80px}.rendered-markdown .md-bio.md-bio--with-bio h5.md-bio--caption[data-v-a23420f4]{margin:0;padding:0;height:20px;max-width:100%;text-align:left;width:100%}.rendered-markdown .md-bio.md-bio--with-bio p.md-bio--bio[data-v-a23420f4]{margin:0;padding:0;color:#666;text-align:left}.feedback-row[data-v-a23420f4]{transition:all .3s ease;background-color:#fff;border-left:3px solid #fff;height:69px;position:relative}.feedback-row .unread-count[data-v-a23420f4]{border-radius:12px;background-color:#107598;color:#fff;display:inline-block;font-size:.8em;height:24px;line-height:24px;min-width:8px;padding:0 8px;position:absolute;right:5px;top:5px}.feedback-row .user-strip[data-v-a23420f4]{padding:10px;padding-left:60px;position:relative}.feedback-row .user-strip img.user-profile-image[data-v-a23420f4]{border-radius:50%;height:50px;width:50px;position:absolute;top:10px;left:10px}.feedback-row .user-strip h5.user-profile-name[data-v-a23420f4]{transition:all .3s ease;margin:0;padding:0;height:30px;line-height:30px;padding:0 10px}.feedback-row .user-strip p.message-count[data-v-a23420f4]{margin:0;padding:0;color:#ccc;font-size:.9em;padding:0 10px}.feedback-row[data-v-a23420f4]:hover{cursor:pointer}.feedback-row:hover .user-strip h5.user-profile-name[data-v-a23420f4]{color:#107598}.feedback-row.active[data-v-a23420f4]{border-left-color:#107598}.feedback-row.active .user-strip h5.user-profile-name[data-v-a23420f4]{color:#107598}@media (max-width:600px){.feedback-row .user-strip h5.user-profile-name[data-v-a23420f4],.feedback-row .user-strip p.message-count[data-v-a23420f4]{display:none}}", "", {"version":3,"sources":["/repos/elevator/src/components/feedback/FeedbackRow.vue"],"names":[],"mappings":"AACA,4CAEE,8CAAoD,AACpD,mCAAoC,AACpC,kCAAmC,AACnC,SAAU,AACV,SAAW,CACZ,AACD,oDAEE,YAAc,CACf,AACD,4BACE,UAAY,CACb,AACD,6BACE,WAAa,CACd,AACD,2BACE,WAAY,AACZ,UAAY,CACb,AACD,0BACE,WAAY,AACZ,UAAY,CACb,AACD,4BACE,kBAAqB,CACtB,AACD,6BACE,mBAAsB,CACvB,AACD,mCACE,+BAAkC,CACnC,AACD,iCACE,kBAAmB,AACnB,gBAAiB,AACjB,iBAAmB,CACpB,AACD,yBACA,iCACI,gBAAiB,AACjB,YAAc,CACjB,CACA,AACD,uDACE,YAAc,CACf,AACD,gCACE,kBAAmB,AACnB,aAAc,AACd,eAAmB,CACpB,AACD,yBACA,gCACI,eAAiB,CACpB,CACA,AACD,4CACE,qBAAuB,CACxB,AACD,6CACE,YAAc,CACf,AACD,+CACE,SAAW,CACZ,AACD,6CACE,gBAAiB,AACjB,eAAiB,CAClB,AACD,wEAEE,uBAA0B,CAC3B,AACD,6DAEE,SAAW,CACZ,AACD,yCACE,MAAO,AACP,SAAU,AACV,OAAQ,AACR,QAAS,AACT,kBAAmB,AACnB,oBAAqB,AACrB,UAAY,CACb,AACD,oCACE,mBAAqB,AACrB,oBAAsB,CACvB,AACD,uCACE,SAAU,AACV,UAAW,AACX,WAAY,AACZ,iBAAmB,CACpB,AACD,sTAQE,UAAY,CACb,AACD,sZAQE,YAAc,CACf,AACD,mMAKE,eAAiB,CAClB,AACD,uCACE,WAAY,AACZ,gBAAiB,AACjB,eAAkB,CACnB,AACD,sCACE,aAAe,CAChB,AACD,sCACE,wBAA0B,AAC1B,yBAA2B,CAC5B,AACD,4CACE,cAAe,AACf,cAAgB,CACjB,AACD,+CACE,8BAA+B,AAC/B,WAAY,AACZ,wBAA2B,AAC3B,kBAAmB,AACnB,iBAAmB,CACpB,AACD,wCACE,kBAAmB,AACnB,yBAA0B,AAC1B,eAAgB,AAChB,aAAc,AACd,mBAAqB,AACrB,oBAAsB,CACvB,AACD,wCACE,qBAAsB,AACtB,YAAa,AACb,WAAY,AACZ,eAAiB,CAClB,AACD,qJAGE,cAAe,AACf,SAAU,AACV,eAAgB,AAChB,UAAW,AACX,UAAY,CACb,AACD,4CACE,qBAAsB,AACtB,iBAAkB,AAClB,gBAAiB,AACjB,aAAc,AACd,kBAAmB,AACnB,WAAa,CACd,AACD,8DACE,kBAAmB,AACnB,SAAU,AACV,UAAW,AACX,cAAe,AACf,aAAc,AACd,WAAa,CACd,AACD,6DACE,8BAA+B,AAC/B,YAAc,CACf,AACD,+DACE,SAAU,AACV,UAAW,AACX,cAAe,AACf,gBAAkB,AAClB,YAAa,AACb,iBAAkB,AAClB,aAAc,AACd,gBAAiB,AACjB,gBAAiB,AACjB,iBAAmB,CACpB,AACD,6DACE,kBAAmB,AACnB,sBAAuB,AACvB,2BAA4B,AAC5B,8BAA+B,AAC/B,aAAc,AACd,mBAAoB,AACpB,eAAgB,AAChB,UAAY,CACb,AACD,+EACE,SAAU,AACV,UAAW,AACX,kBAAmB,AACnB,SAAU,AACV,UAAW,AACX,YAAa,AACb,UAAY,CACb,AACD,gFACE,SAAU,AACV,UAAW,AACX,YAAa,AACb,eAAgB,AAChB,gBAAiB,AACjB,UAAY,CACb,AACD,2EACE,SAAU,AACV,UAAW,AACX,WAAY,AACZ,eAAiB,CAClB,AACD,+BACE,wBAA0B,AAC1B,sBAAuB,AACvB,2BAA4B,AAC5B,YAAa,AACb,iBAAmB,CACpB,AACD,6CACE,mBAAoB,AACpB,yBAA0B,AAC1B,WAAY,AACZ,qBAAsB,AACtB,eAAiB,AACjB,YAAa,AACb,iBAAkB,AAClB,cAAe,AACf,cAAe,AACf,kBAAmB,AACnB,UAAW,AACX,OAAS,CACV,AACD,2CACE,aAAc,AACd,kBAAmB,AACnB,iBAAmB,CACpB,AACD,kEACE,kBAAmB,AACnB,YAAa,AACb,WAAY,AACZ,kBAAmB,AACnB,SAAU,AACV,SAAW,CACZ,AACD,gEACE,wBAA0B,AAC1B,SAAU,AACV,UAAW,AACX,YAAa,AACb,iBAAkB,AAClB,cAAgB,CACjB,AACD,2DACE,SAAU,AACV,UAAW,AACX,WAAY,AACZ,eAAiB,AACjB,cAAgB,CACjB,AACD,qCACE,cAAgB,CACjB,AACD,sEACE,aAAe,CAChB,AACD,sCACE,yBAA2B,CAC5B,AACD,uEACE,aAAe,CAChB,AACD,yBACA,2HAEI,YAAc,CACjB,CACA","file":"FeedbackRow.vue","sourcesContent":["\nhtml[data-v-a23420f4],\nbody[data-v-a23420f4] {\n  font-family: 'Avenir', Helvetica, Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  margin: 0;\n  padding: 0;\n}\n.hidden[data-v-a23420f4],\n[v-cloak][data-v-a23420f4] {\n  display: none;\n}\n.pull-left[data-v-a23420f4] {\n  float: left;\n}\n.pull-right[data-v-a23420f4] {\n  float: right;\n}\n.clearfix[data-v-a23420f4] {\n  clear: both;\n  float: none;\n}\n.fa-icon[data-v-a23420f4] {\n  width: auto;\n  height: 1em;\n}\n.no-margin[data-v-a23420f4] {\n  margin: 0 !important;\n}\n.no-padding[data-v-a23420f4] {\n  padding: 0 !important;\n}\n.background-white[data-v-a23420f4] {\n  background-color: #fff !important;\n}\n.main-container[data-v-a23420f4] {\n  border-radius: 4px;\n  margin-top: 20px;\n  position: relative;\n}\n@media (max-width: 800px) {\n.main-container[data-v-a23420f4] {\n    border-radius: 0;\n    margin-top: 0;\n}\n}\n.main-container.main-container-padded[data-v-a23420f4] {\n  padding: 20px;\n}\n.content-block[data-v-a23420f4] {\n  border-radius: 4px;\n  padding: 20px;\n  margin: 0 0 20px 0;\n}\n@media (max-width: 800px) {\n.content-block[data-v-a23420f4] {\n    border-radius: 0;\n}\n}\n.content-block.white-block[data-v-a23420f4] {\n  background-color: #fff;\n}\n.content-block.padded-block[data-v-a23420f4] {\n  padding: 40px;\n}\n.content-block.unpadded-block[data-v-a23420f4] {\n  padding: 0;\n}\n.content-block.header-block[data-v-a23420f4] {\n  margin-top: 20px;\n  overflow: hidden;\n}\n.fade-enter-active[data-v-a23420f4],\n.fade-leave-active[data-v-a23420f4] {\n  transition: all 0.3s ease;\n}\n.fade-enter[data-v-a23420f4],\n.fade-leave-to[data-v-a23420f4] {\n  opacity: 0;\n}\n.particles-js-canvas-el[data-v-a23420f4] {\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  position: absolute;\n  pointer-events: none;\n  z-index: -1;\n}\n.rendered-markdown[data-v-a23420f4] {\n  white-space: initial;\n  word-wrap: break-word;\n}\n.rendered-markdown h1[data-v-a23420f4] {\n  margin: 0;\n  padding: 0;\n  color: #444;\n  margin-bottom: 5px;\n}\n.rendered-markdown h1[data-v-a23420f4],\n.rendered-markdown h2[data-v-a23420f4],\n.rendered-markdown h3[data-v-a23420f4],\n.rendered-markdown h4[data-v-a23420f4],\n.rendered-markdown h5[data-v-a23420f4],\n.rendered-markdown p[data-v-a23420f4],\n.rendered-markdown a[data-v-a23420f4],\n.rendered-markdown li[data-v-a23420f4] {\n  color: #444;\n}\n.rendered-markdown h1[data-v-a23420f4]:first-child,\n.rendered-markdown h2[data-v-a23420f4]:first-child,\n.rendered-markdown h3[data-v-a23420f4]:first-child,\n.rendered-markdown h4[data-v-a23420f4]:first-child,\n.rendered-markdown h5[data-v-a23420f4]:first-child,\n.rendered-markdown p[data-v-a23420f4]:first-child,\n.rendered-markdown a[data-v-a23420f4]:first-child,\n.rendered-markdown li[data-v-a23420f4]:first-child {\n  margin-top: 0;\n}\n.rendered-markdown h1[data-v-a23420f4],\n.rendered-markdown h2[data-v-a23420f4],\n.rendered-markdown h3[data-v-a23420f4],\n.rendered-markdown h4[data-v-a23420f4],\n.rendered-markdown h5[data-v-a23420f4] {\n  font-weight: 300;\n}\n.rendered-markdown h2[data-v-a23420f4] {\n  color: #444;\n  font-size: 1.3em;\n  font-weight: bold;\n}\n.rendered-markdown p[data-v-a23420f4] {\n  margin: 10px 0;\n}\n.rendered-markdown a[data-v-a23420f4] {\n  color: #c6002d !important;\n  text-decoration: underline;\n}\n.rendered-markdown a[data-v-a23420f4]:hover {\n  color: #c6002d;\n  cursor: pointer;\n}\n.rendered-markdown blockquote[data-v-a23420f4] {\n  border-left: #c6002d 3px solid;\n  color: #ccc;\n  margin: 30px 20px 30px 0px;\n  padding-left: 20px;\n  font-style: italic;\n}\n.rendered-markdown pre[data-v-a23420f4] {\n  border-radius: 6px;\n  background-color: #e9e9e9;\n  max-width: 100%;\n  padding: 20px;\n  white-space: initial;\n  word-wrap: break-word;\n}\n.rendered-markdown img[data-v-a23420f4] {\n  display: inline-block;\n  margin: 10px;\n  width: 100%;\n  max-width: 160px;\n}\n.rendered-markdown img[data-4c][data-v-a23420f4],\n.rendered-markdown .fc-image img[data-v-a23420f4],\n.rendered-markdown .fc-image > img[data-v-a23420f4] {\n  display: block;\n  margin: 0;\n  max-width: 100%;\n  padding: 0;\n  width: 100%;\n}\n.rendered-markdown .md-bio[data-v-a23420f4] {\n  display: inline-block;\n  min-height: 100px;\n  overflow: hidden;\n  padding: 10px;\n  position: relative;\n  width: 160px;\n}\n.rendered-markdown .md-bio img.md-bio--image[data-v-a23420f4] {\n  border-radius: 50%;\n  margin: 0;\n  padding: 0;\n  margin: 0 20px;\n  height: 120px;\n  width: 120px;\n}\n.rendered-markdown .md-bio .md-bio--content[data-v-a23420f4] {\n  border-left: #e9e9e9 1px solid;\n  padding: 10px;\n}\n.rendered-markdown .md-bio h5.md-bio--caption[data-v-a23420f4] {\n  margin: 0;\n  padding: 0;\n  font-size: 1em;\n  font-weight: bold;\n  height: 20px;\n  line-height: 20px;\n  margin: 5px 0;\n  max-width: 160px;\n  overflow: hidden;\n  text-align: center;\n}\n.rendered-markdown .md-bio.md-bio--with-bio[data-v-a23420f4] {\n  border-radius: 6px;\n  box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  padding: 10px;\n  padding-left: 100px;\n  max-width: 100%;\n  width: 100%;\n}\n.rendered-markdown .md-bio.md-bio--with-bio img.md-bio--image[data-v-a23420f4] {\n  margin: 0;\n  padding: 0;\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  height: 80px;\n  width: 80px;\n}\n.rendered-markdown .md-bio.md-bio--with-bio h5.md-bio--caption[data-v-a23420f4] {\n  margin: 0;\n  padding: 0;\n  height: 20px;\n  max-width: 100%;\n  text-align: left;\n  width: 100%;\n}\n.rendered-markdown .md-bio.md-bio--with-bio p.md-bio--bio[data-v-a23420f4] {\n  margin: 0;\n  padding: 0;\n  color: #666;\n  text-align: left;\n}\n.feedback-row[data-v-a23420f4] {\n  transition: all 0.3s ease;\n  background-color: #fff;\n  border-left: #fff 3px solid;\n  height: 69px;\n  position: relative;\n}\n.feedback-row .unread-count[data-v-a23420f4] {\n  border-radius: 12px;\n  background-color: #107598;\n  color: #fff;\n  display: inline-block;\n  font-size: 0.8em;\n  height: 24px;\n  line-height: 24px;\n  min-width: 8px;\n  padding: 0 8px;\n  position: absolute;\n  right: 5px;\n  top: 5px;\n}\n.feedback-row .user-strip[data-v-a23420f4] {\n  padding: 10px;\n  padding-left: 60px;\n  position: relative;\n}\n.feedback-row .user-strip img.user-profile-image[data-v-a23420f4] {\n  border-radius: 50%;\n  height: 50px;\n  width: 50px;\n  position: absolute;\n  top: 10px;\n  left: 10px;\n}\n.feedback-row .user-strip h5.user-profile-name[data-v-a23420f4] {\n  transition: all 0.3s ease;\n  margin: 0;\n  padding: 0;\n  height: 30px;\n  line-height: 30px;\n  padding: 0 10px;\n}\n.feedback-row .user-strip p.message-count[data-v-a23420f4] {\n  margin: 0;\n  padding: 0;\n  color: #ccc;\n  font-size: 0.9em;\n  padding: 0 10px;\n}\n.feedback-row[data-v-a23420f4]:hover {\n  cursor: pointer;\n}\n.feedback-row:hover .user-strip h5.user-profile-name[data-v-a23420f4] {\n  color: #107598;\n}\n.feedback-row.active[data-v-a23420f4] {\n  border-left-color: #107598;\n}\n.feedback-row.active .user-strip h5.user-profile-name[data-v-a23420f4] {\n  color: #107598;\n}\n@media (max-width: 600px) {\n.feedback-row .user-strip h5.user-profile-name[data-v-a23420f4],\n  .feedback-row .user-strip p.message-count[data-v-a23420f4] {\n    display: none;\n}\n}"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 788:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(412)();
// imports


// module
exports.push([module.i, "body,html{font-family:Avenir,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0;padding:0}.hidden,[v-cloak]{display:none}.pull-left{float:left}.pull-right{float:right}.clearfix{clear:both;float:none}.fa-icon{width:auto;height:1em}.no-margin{margin:0!important}.no-padding{padding:0!important}.background-white{background-color:#fff!important}.main-container{border-radius:4px;margin-top:20px;position:relative}@media (max-width:800px){.main-container{border-radius:0;margin-top:0}}.main-container.main-container-padded{padding:20px}.content-block{border-radius:4px;padding:20px;margin:0 0 20px}@media (max-width:800px){.content-block{border-radius:0}}.content-block.white-block{background-color:#fff}.content-block.padded-block{padding:40px}.content-block.unpadded-block{padding:0}.content-block.header-block{margin-top:20px;overflow:hidden}.fade-enter-active,.fade-leave-active{transition:all .3s ease}.fade-enter,.fade-leave-to{opacity:0}.particles-js-canvas-el{top:0;bottom:0;left:0;right:0;position:absolute;pointer-events:none;z-index:-1}.rendered-markdown{white-space:normal;word-wrap:break-word}.rendered-markdown h1{margin:0;padding:0;color:#444;margin-bottom:5px}.rendered-markdown a,.rendered-markdown h1,.rendered-markdown h2,.rendered-markdown h3,.rendered-markdown h4,.rendered-markdown h5,.rendered-markdown li,.rendered-markdown p{color:#444}.rendered-markdown a:first-child,.rendered-markdown h1:first-child,.rendered-markdown h2:first-child,.rendered-markdown h3:first-child,.rendered-markdown h4:first-child,.rendered-markdown h5:first-child,.rendered-markdown li:first-child,.rendered-markdown p:first-child{margin-top:0}.rendered-markdown h1,.rendered-markdown h2,.rendered-markdown h3,.rendered-markdown h4,.rendered-markdown h5{font-weight:300}.rendered-markdown h2{color:#444;font-size:1.3em;font-weight:700}.rendered-markdown p{margin:10px 0}.rendered-markdown a{color:#c6002d!important;text-decoration:underline}.rendered-markdown a:hover{color:#c6002d;cursor:pointer}.rendered-markdown blockquote{border-left:3px solid #c6002d;color:#ccc;margin:30px 20px 30px 0;padding-left:20px;font-style:italic}.rendered-markdown pre{border-radius:6px;background-color:#e9e9e9;max-width:100%;padding:20px;white-space:normal;word-wrap:break-word}.rendered-markdown img{display:inline-block;margin:10px;width:100%;max-width:160px}.rendered-markdown .fc-image>img,.rendered-markdown .fc-image img,.rendered-markdown img[data-4c]{display:block;margin:0;max-width:100%;padding:0;width:100%}.rendered-markdown .md-bio{display:inline-block;min-height:100px;overflow:hidden;padding:10px;position:relative;width:160px}.rendered-markdown .md-bio img.md-bio--image{border-radius:50%;margin:0;padding:0;margin:0 20px;height:120px;width:120px}.rendered-markdown .md-bio .md-bio--content{border-left:1px solid #e9e9e9;padding:10px}.rendered-markdown .md-bio h5.md-bio--caption{margin:0;padding:0;font-size:1em;font-weight:700;height:20px;line-height:20px;margin:5px 0;max-width:160px;overflow:hidden;text-align:center}.rendered-markdown .md-bio.md-bio--with-bio{border-radius:6px;box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:10px;padding-left:100px;max-width:100%;width:100%}.rendered-markdown .md-bio.md-bio--with-bio img.md-bio--image{margin:0;padding:0;position:absolute;top:10px;left:10px;height:80px;width:80px}.rendered-markdown .md-bio.md-bio--with-bio h5.md-bio--caption{margin:0;padding:0;height:20px;max-width:100%;text-align:left;width:100%}.rendered-markdown .md-bio.md-bio--with-bio p.md-bio--bio{margin:0;padding:0;color:#666;text-align:left}.pure-button{transition:all .3s ease;border-radius:4px;background-color:transparent;border:1px solid #c6002d;color:#c6002d;display:inline-block;font-family:inherit;font-size:100%;outline:0;padding:.5em 1em;text-align:center;text-decoration:none}.pure-button:hover{background-color:#b20028;color:#fff;cursor:pointer}.pure-button.full-width{display:block;margin-bottom:10px}.pure-button[disabled]{background-color:#e1e1e1!important;border-color:#e1e1e1!important;color:$color-text-darkest-grey!important;opacity:.5;pointer-events:none}.pure-button.pure-button-primary{background-color:#c6002d;color:#fff;border-color:#c6002d}.pure-button.pure-button-primary:hover{background-color:#b20028;color:#fff;cursor:pointer}.pure-button.pure-button-info{background-color:#1864ef;color:#fff;border-color:#1864ef}.pure-button.pure-button-info:hover{background-color:#0f58dd;color:#fff;cursor:pointer}.pure-button.pure-button-success{background-color:#20af3d;color:#fff;border-color:#20af3d}.pure-button.pure-button-success:hover{background-color:#1d9e37;color:#fff;cursor:pointer}.pure-button.pure-button-subtle{background-color:transparent;border-color:#ccc;color:#666}.pure-button.pure-button-subtle:hover{background-color:#cbcbcb;color:#444;cursor:pointer}.pure-button.pure-button-youtube{background-color:#c4302b;color:#fff;border-color:#c4302b}.pure-button.pure-button-youtube:hover{background-color:#b02b27;color:#fff;cursor:pointer}.pure-button.pure-button-soundcloud{background-color:#f70;color:#fff;border-color:#f70}.pure-button.pure-button-soundcloud:hover{background-color:#e66b00;color:#fff;cursor:pointer}.pure-button.pure-button-twitter{background-color:#4099ff;color:#fff;border-color:#4099ff}.pure-button.pure-button-twitter:hover{background-color:#2088ff;color:#fff;cursor:pointer}.pure-button.rounded-short{border-radius:22px;line-height:44px;padding:0 30px}.pure-button.rounded-tall{border-radius:25px;line-height:50px;padding:0 30px}.four-corners-link{border-radius:6px;background-color:#fff;border:1px solid #e9e9e9;overflow:hidden;margin:20px 0}.four-corners-link .four-corners-link--body{border-bottom:1px solid #e9e9e9;height:32px;padding:10px}.four-corners-link .four-corners-link--body img{height:32px}.four-corners-link .four-corners-link--footer{padding:15px}.four-corners-link .four-corners-link--footer h1,.four-corners-link .four-corners-link--footer p{color:#000}.four-corners-link .four-corners-link--footer p{margin:0;padding:0;padding:0 0 20px}", "", {"version":3,"sources":["/repos/elevator/src/components/fourcorners/FourCornersLink.vue"],"names":[],"mappings":"AA8OA,UAEE,8CAAoD,AACpD,mCAAoC,AACpC,kCAAmC,AACnC,SAAU,AACV,SAAW,CACZ,AACD,kBAEE,YAAc,CACf,AACD,WACE,UAAY,CACb,AACD,YACE,WAAa,CACd,AACD,UACE,WAAY,AACZ,UAAY,CACb,AACD,SACE,WAAY,AACZ,UAAY,CACb,AACD,WACE,kBAAqB,CACtB,AACD,YACE,mBAAsB,CACvB,AACD,kBACE,+BAAkC,CACnC,AACD,gBACE,kBAAmB,AACnB,gBAAiB,AACjB,iBAAmB,CACpB,AACD,yBACA,gBACI,gBAAiB,AACjB,YAAc,CACjB,CACA,AACD,sCACE,YAAc,CACf,AACD,eACE,kBAAmB,AACnB,aAAc,AACd,eAAmB,CACpB,AACD,yBACA,eACI,eAAiB,CACpB,CACA,AACD,2BACE,qBAAuB,CACxB,AACD,4BACE,YAAc,CACf,AACD,8BACE,SAAW,CACZ,AACD,4BACE,gBAAiB,AACjB,eAAiB,CAClB,AACD,sCAEE,uBAA0B,CAC3B,AACD,2BAEE,SAAW,CACZ,AACD,wBACE,MAAO,AACP,SAAU,AACV,OAAQ,AACR,QAAS,AACT,kBAAmB,AACnB,oBAAqB,AACrB,UAAY,CACb,AACD,mBACE,mBAAqB,AACrB,oBAAsB,CACvB,AACD,sBACE,SAAU,AACV,UAAW,AACX,WAAY,AACZ,iBAAmB,CACpB,AACD,8KAQE,UAAY,CACb,AACD,8QAQE,YAAc,CACf,AACD,8GAKE,eAAiB,CAClB,AACD,sBACE,WAAY,AACZ,gBAAiB,AACjB,eAAkB,CACnB,AACD,qBACE,aAAe,CAChB,AACD,qBACE,wBAA0B,AAC1B,yBAA2B,CAC5B,AACD,2BACE,cAAe,AACf,cAAgB,CACjB,AACD,8BACE,8BAA+B,AAC/B,WAAY,AACZ,wBAA2B,AAC3B,kBAAmB,AACnB,iBAAmB,CACpB,AACD,uBACE,kBAAmB,AACnB,yBAA0B,AAC1B,eAAgB,AAChB,aAAc,AACd,mBAAqB,AACrB,oBAAsB,CACvB,AACD,uBACE,qBAAsB,AACtB,YAAa,AACb,WAAY,AACZ,eAAiB,CAClB,AACD,kGAGE,cAAe,AACf,SAAU,AACV,eAAgB,AAChB,UAAW,AACX,UAAY,CACb,AACD,2BACE,qBAAsB,AACtB,iBAAkB,AAClB,gBAAiB,AACjB,aAAc,AACd,kBAAmB,AACnB,WAAa,CACd,AACD,6CACE,kBAAmB,AACnB,SAAU,AACV,UAAW,AACX,cAAe,AACf,aAAc,AACd,WAAa,CACd,AACD,4CACE,8BAA+B,AAC/B,YAAc,CACf,AACD,8CACE,SAAU,AACV,UAAW,AACX,cAAe,AACf,gBAAkB,AAClB,YAAa,AACb,iBAAkB,AAClB,aAAc,AACd,gBAAiB,AACjB,gBAAiB,AACjB,iBAAmB,CACpB,AACD,4CACE,kBAAmB,AACnB,sBAAuB,AACvB,2BAA4B,AAC5B,8BAA+B,AAC/B,aAAc,AACd,mBAAoB,AACpB,eAAgB,AAChB,UAAY,CACb,AACD,8DACE,SAAU,AACV,UAAW,AACX,kBAAmB,AACnB,SAAU,AACV,UAAW,AACX,YAAa,AACb,UAAY,CACb,AACD,+DACE,SAAU,AACV,UAAW,AACX,YAAa,AACb,eAAgB,AAChB,gBAAiB,AACjB,UAAY,CACb,AACD,0DACE,SAAU,AACV,UAAW,AACX,WAAY,AACZ,eAAiB,CAClB,AACD,aACE,wBAA0B,AAC1B,kBAAmB,AACnB,6BAA8B,AAC9B,yBAA0B,AAC1B,cAAe,AACf,qBAAsB,AACtB,oBAAqB,AACrB,eAAgB,AAChB,UAAW,AACX,iBAAmB,AACnB,kBAAmB,AACnB,oBAAsB,CACvB,AACD,mBACE,yBAA0B,AAC1B,WAAY,AACZ,cAAgB,CACjB,AACD,wBACE,cAAe,AACf,kBAAoB,CACrB,AACD,uBACE,mCAAqC,AACrC,+BAAiC,AACjC,yCAA2C,AAC3C,WAAa,AACb,mBAAqB,CACtB,AACD,iCACE,yBAA0B,AAC1B,WAAY,AACZ,oBAAsB,CACvB,AACD,uCACE,yBAA0B,AAC1B,WAAY,AACZ,cAAgB,CACjB,AACD,8BACE,yBAA0B,AAC1B,WAAY,AACZ,oBAAsB,CACvB,AACD,oCACE,yBAA0B,AAC1B,WAAY,AACZ,cAAgB,CACjB,AACD,iCACE,yBAA0B,AAC1B,WAAY,AACZ,oBAAsB,CACvB,AACD,uCACE,yBAA0B,AAC1B,WAAY,AACZ,cAAgB,CACjB,AACD,gCACE,6BAA8B,AAC9B,kBAAmB,AACnB,UAAY,CACb,AACD,sCACE,yBAA0B,AAC1B,WAAY,AACZ,cAAgB,CACjB,AACD,iCACE,yBAA0B,AAC1B,WAAY,AACZ,oBAAsB,CACvB,AACD,uCACE,yBAA0B,AAC1B,WAAY,AACZ,cAAgB,CACjB,AACD,oCACE,sBAAuB,AACvB,WAAY,AACZ,iBAAmB,CACpB,AACD,0CACE,yBAA0B,AAC1B,WAAY,AACZ,cAAgB,CACjB,AACD,iCACE,yBAA0B,AAC1B,WAAY,AACZ,oBAAsB,CACvB,AACD,uCACE,yBAA0B,AAC1B,WAAY,AACZ,cAAgB,CACjB,AACD,2BACE,mBAAoB,AACpB,iBAAkB,AAClB,cAAgB,CACjB,AACD,0BACE,mBAAoB,AACpB,iBAAkB,AAClB,cAAgB,CACjB,AACD,mBACE,kBAAmB,AACnB,sBAAuB,AACvB,yBAA0B,AAC1B,gBAAiB,AACjB,aAAe,CAChB,AACD,4CACE,gCAAiC,AACjC,YAAa,AACb,YAAc,CACf,AACD,gDACE,WAAa,CACd,AACD,8CACE,YAAc,CACf,AACD,iGAEE,UAAY,CACb,AACD,gDACE,SAAU,AACV,UAAW,AACX,gBAAsB,CACvB","file":"FourCornersLink.vue","sourcesContent":["\nhtml,\nbody {\n  font-family: 'Avenir', Helvetica, Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  margin: 0;\n  padding: 0;\n}\n.hidden,\n[v-cloak] {\n  display: none;\n}\n.pull-left {\n  float: left;\n}\n.pull-right {\n  float: right;\n}\n.clearfix {\n  clear: both;\n  float: none;\n}\n.fa-icon {\n  width: auto;\n  height: 1em;\n}\n.no-margin {\n  margin: 0 !important;\n}\n.no-padding {\n  padding: 0 !important;\n}\n.background-white {\n  background-color: #fff !important;\n}\n.main-container {\n  border-radius: 4px;\n  margin-top: 20px;\n  position: relative;\n}\n@media (max-width: 800px) {\n.main-container {\n    border-radius: 0;\n    margin-top: 0;\n}\n}\n.main-container.main-container-padded {\n  padding: 20px;\n}\n.content-block {\n  border-radius: 4px;\n  padding: 20px;\n  margin: 0 0 20px 0;\n}\n@media (max-width: 800px) {\n.content-block {\n    border-radius: 0;\n}\n}\n.content-block.white-block {\n  background-color: #fff;\n}\n.content-block.padded-block {\n  padding: 40px;\n}\n.content-block.unpadded-block {\n  padding: 0;\n}\n.content-block.header-block {\n  margin-top: 20px;\n  overflow: hidden;\n}\n.fade-enter-active,\n.fade-leave-active {\n  transition: all 0.3s ease;\n}\n.fade-enter,\n.fade-leave-to {\n  opacity: 0;\n}\n.particles-js-canvas-el {\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  position: absolute;\n  pointer-events: none;\n  z-index: -1;\n}\n.rendered-markdown {\n  white-space: initial;\n  word-wrap: break-word;\n}\n.rendered-markdown h1 {\n  margin: 0;\n  padding: 0;\n  color: #444;\n  margin-bottom: 5px;\n}\n.rendered-markdown h1,\n.rendered-markdown h2,\n.rendered-markdown h3,\n.rendered-markdown h4,\n.rendered-markdown h5,\n.rendered-markdown p,\n.rendered-markdown a,\n.rendered-markdown li {\n  color: #444;\n}\n.rendered-markdown h1:first-child,\n.rendered-markdown h2:first-child,\n.rendered-markdown h3:first-child,\n.rendered-markdown h4:first-child,\n.rendered-markdown h5:first-child,\n.rendered-markdown p:first-child,\n.rendered-markdown a:first-child,\n.rendered-markdown li:first-child {\n  margin-top: 0;\n}\n.rendered-markdown h1,\n.rendered-markdown h2,\n.rendered-markdown h3,\n.rendered-markdown h4,\n.rendered-markdown h5 {\n  font-weight: 300;\n}\n.rendered-markdown h2 {\n  color: #444;\n  font-size: 1.3em;\n  font-weight: bold;\n}\n.rendered-markdown p {\n  margin: 10px 0;\n}\n.rendered-markdown a {\n  color: #c6002d !important;\n  text-decoration: underline;\n}\n.rendered-markdown a:hover {\n  color: #c6002d;\n  cursor: pointer;\n}\n.rendered-markdown blockquote {\n  border-left: #c6002d 3px solid;\n  color: #ccc;\n  margin: 30px 20px 30px 0px;\n  padding-left: 20px;\n  font-style: italic;\n}\n.rendered-markdown pre {\n  border-radius: 6px;\n  background-color: #e9e9e9;\n  max-width: 100%;\n  padding: 20px;\n  white-space: initial;\n  word-wrap: break-word;\n}\n.rendered-markdown img {\n  display: inline-block;\n  margin: 10px;\n  width: 100%;\n  max-width: 160px;\n}\n.rendered-markdown img[data-4c],\n.rendered-markdown .fc-image img,\n.rendered-markdown .fc-image > img {\n  display: block;\n  margin: 0;\n  max-width: 100%;\n  padding: 0;\n  width: 100%;\n}\n.rendered-markdown .md-bio {\n  display: inline-block;\n  min-height: 100px;\n  overflow: hidden;\n  padding: 10px;\n  position: relative;\n  width: 160px;\n}\n.rendered-markdown .md-bio img.md-bio--image {\n  border-radius: 50%;\n  margin: 0;\n  padding: 0;\n  margin: 0 20px;\n  height: 120px;\n  width: 120px;\n}\n.rendered-markdown .md-bio .md-bio--content {\n  border-left: #e9e9e9 1px solid;\n  padding: 10px;\n}\n.rendered-markdown .md-bio h5.md-bio--caption {\n  margin: 0;\n  padding: 0;\n  font-size: 1em;\n  font-weight: bold;\n  height: 20px;\n  line-height: 20px;\n  margin: 5px 0;\n  max-width: 160px;\n  overflow: hidden;\n  text-align: center;\n}\n.rendered-markdown .md-bio.md-bio--with-bio {\n  border-radius: 6px;\n  box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  padding: 10px;\n  padding-left: 100px;\n  max-width: 100%;\n  width: 100%;\n}\n.rendered-markdown .md-bio.md-bio--with-bio img.md-bio--image {\n  margin: 0;\n  padding: 0;\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  height: 80px;\n  width: 80px;\n}\n.rendered-markdown .md-bio.md-bio--with-bio h5.md-bio--caption {\n  margin: 0;\n  padding: 0;\n  height: 20px;\n  max-width: 100%;\n  text-align: left;\n  width: 100%;\n}\n.rendered-markdown .md-bio.md-bio--with-bio p.md-bio--bio {\n  margin: 0;\n  padding: 0;\n  color: #666;\n  text-align: left;\n}\nhtml,\nbody {\n  font-family: 'Avenir', Helvetica, Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  margin: 0;\n  padding: 0;\n}\n.hidden,\n[v-cloak] {\n  display: none;\n}\n.pull-left {\n  float: left;\n}\n.pull-right {\n  float: right;\n}\n.clearfix {\n  clear: both;\n  float: none;\n}\n.fa-icon {\n  width: auto;\n  height: 1em;\n}\n.no-margin {\n  margin: 0 !important;\n}\n.no-padding {\n  padding: 0 !important;\n}\n.background-white {\n  background-color: #fff !important;\n}\n.main-container {\n  border-radius: 4px;\n  margin-top: 20px;\n  position: relative;\n}\n@media (max-width: 800px) {\n.main-container {\n    border-radius: 0;\n    margin-top: 0;\n}\n}\n.main-container.main-container-padded {\n  padding: 20px;\n}\n.content-block {\n  border-radius: 4px;\n  padding: 20px;\n  margin: 0 0 20px 0;\n}\n@media (max-width: 800px) {\n.content-block {\n    border-radius: 0;\n}\n}\n.content-block.white-block {\n  background-color: #fff;\n}\n.content-block.padded-block {\n  padding: 40px;\n}\n.content-block.unpadded-block {\n  padding: 0;\n}\n.content-block.header-block {\n  margin-top: 20px;\n  overflow: hidden;\n}\n.fade-enter-active,\n.fade-leave-active {\n  transition: all 0.3s ease;\n}\n.fade-enter,\n.fade-leave-to {\n  opacity: 0;\n}\n.particles-js-canvas-el {\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  position: absolute;\n  pointer-events: none;\n  z-index: -1;\n}\n.rendered-markdown {\n  white-space: initial;\n  word-wrap: break-word;\n}\n.rendered-markdown h1 {\n  margin: 0;\n  padding: 0;\n  color: #444;\n  margin-bottom: 5px;\n}\n.rendered-markdown h1,\n.rendered-markdown h2,\n.rendered-markdown h3,\n.rendered-markdown h4,\n.rendered-markdown h5,\n.rendered-markdown p,\n.rendered-markdown a,\n.rendered-markdown li {\n  color: #444;\n}\n.rendered-markdown h1:first-child,\n.rendered-markdown h2:first-child,\n.rendered-markdown h3:first-child,\n.rendered-markdown h4:first-child,\n.rendered-markdown h5:first-child,\n.rendered-markdown p:first-child,\n.rendered-markdown a:first-child,\n.rendered-markdown li:first-child {\n  margin-top: 0;\n}\n.rendered-markdown h1,\n.rendered-markdown h2,\n.rendered-markdown h3,\n.rendered-markdown h4,\n.rendered-markdown h5 {\n  font-weight: 300;\n}\n.rendered-markdown h2 {\n  color: #444;\n  font-size: 1.3em;\n  font-weight: bold;\n}\n.rendered-markdown p {\n  margin: 10px 0;\n}\n.rendered-markdown a {\n  color: #c6002d !important;\n  text-decoration: underline;\n}\n.rendered-markdown a:hover {\n  color: #c6002d;\n  cursor: pointer;\n}\n.rendered-markdown blockquote {\n  border-left: #c6002d 3px solid;\n  color: #ccc;\n  margin: 30px 20px 30px 0px;\n  padding-left: 20px;\n  font-style: italic;\n}\n.rendered-markdown pre {\n  border-radius: 6px;\n  background-color: #e9e9e9;\n  max-width: 100%;\n  padding: 20px;\n  white-space: initial;\n  word-wrap: break-word;\n}\n.rendered-markdown img {\n  display: inline-block;\n  margin: 10px;\n  width: 100%;\n  max-width: 160px;\n}\n.rendered-markdown img[data-4c],\n.rendered-markdown .fc-image img,\n.rendered-markdown .fc-image > img {\n  display: block;\n  margin: 0;\n  max-width: 100%;\n  padding: 0;\n  width: 100%;\n}\n.rendered-markdown .md-bio {\n  display: inline-block;\n  min-height: 100px;\n  overflow: hidden;\n  padding: 10px;\n  position: relative;\n  width: 160px;\n}\n.rendered-markdown .md-bio img.md-bio--image {\n  border-radius: 50%;\n  margin: 0;\n  padding: 0;\n  margin: 0 20px;\n  height: 120px;\n  width: 120px;\n}\n.rendered-markdown .md-bio .md-bio--content {\n  border-left: #e9e9e9 1px solid;\n  padding: 10px;\n}\n.rendered-markdown .md-bio h5.md-bio--caption {\n  margin: 0;\n  padding: 0;\n  font-size: 1em;\n  font-weight: bold;\n  height: 20px;\n  line-height: 20px;\n  margin: 5px 0;\n  max-width: 160px;\n  overflow: hidden;\n  text-align: center;\n}\n.rendered-markdown .md-bio.md-bio--with-bio {\n  border-radius: 6px;\n  box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  padding: 10px;\n  padding-left: 100px;\n  max-width: 100%;\n  width: 100%;\n}\n.rendered-markdown .md-bio.md-bio--with-bio img.md-bio--image {\n  margin: 0;\n  padding: 0;\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  height: 80px;\n  width: 80px;\n}\n.rendered-markdown .md-bio.md-bio--with-bio h5.md-bio--caption {\n  margin: 0;\n  padding: 0;\n  height: 20px;\n  max-width: 100%;\n  text-align: left;\n  width: 100%;\n}\n.rendered-markdown .md-bio.md-bio--with-bio p.md-bio--bio {\n  margin: 0;\n  padding: 0;\n  color: #666;\n  text-align: left;\n}\n.pure-button {\n  transition: all 0.3s ease;\n  border-radius: 4px;\n  background-color: transparent;\n  border: #c6002d 1px solid;\n  color: #c6002d;\n  display: inline-block;\n  font-family: inherit;\n  font-size: 100%;\n  outline: 0;\n  padding: 0.5em 1em;\n  text-align: center;\n  text-decoration: none;\n}\n.pure-button:hover {\n  background-color: #b20028;\n  color: #fff;\n  cursor: pointer;\n}\n.pure-button.full-width {\n  display: block;\n  margin-bottom: 10px;\n}\n.pure-button[disabled] {\n  background-color: #e1e1e1 !important;\n  border-color: #e1e1e1 !important;\n  color: $color-text-darkest-grey !important;\n  opacity: 0.5;\n  pointer-events: none;\n}\n.pure-button.pure-button-primary {\n  background-color: #c6002d;\n  color: #fff;\n  border-color: #c6002d;\n}\n.pure-button.pure-button-primary:hover {\n  background-color: #b20028;\n  color: #fff;\n  cursor: pointer;\n}\n.pure-button.pure-button-info {\n  background-color: #1864ef;\n  color: #fff;\n  border-color: #1864ef;\n}\n.pure-button.pure-button-info:hover {\n  background-color: #0f58dd;\n  color: #fff;\n  cursor: pointer;\n}\n.pure-button.pure-button-success {\n  background-color: #20af3d;\n  color: #fff;\n  border-color: #20af3d;\n}\n.pure-button.pure-button-success:hover {\n  background-color: #1d9e37;\n  color: #fff;\n  cursor: pointer;\n}\n.pure-button.pure-button-subtle {\n  background-color: transparent;\n  border-color: #ccc;\n  color: #666;\n}\n.pure-button.pure-button-subtle:hover {\n  background-color: #cbcbcb;\n  color: #444;\n  cursor: pointer;\n}\n.pure-button.pure-button-youtube {\n  background-color: #c4302b;\n  color: #fff;\n  border-color: #c4302b;\n}\n.pure-button.pure-button-youtube:hover {\n  background-color: #b02b27;\n  color: #fff;\n  cursor: pointer;\n}\n.pure-button.pure-button-soundcloud {\n  background-color: #f70;\n  color: #fff;\n  border-color: #f70;\n}\n.pure-button.pure-button-soundcloud:hover {\n  background-color: #e66b00;\n  color: #fff;\n  cursor: pointer;\n}\n.pure-button.pure-button-twitter {\n  background-color: #4099ff;\n  color: #fff;\n  border-color: #4099ff;\n}\n.pure-button.pure-button-twitter:hover {\n  background-color: #2088ff;\n  color: #fff;\n  cursor: pointer;\n}\n.pure-button.rounded-short {\n  border-radius: 22px;\n  line-height: 44px;\n  padding: 0 30px;\n}\n.pure-button.rounded-tall {\n  border-radius: 25px;\n  line-height: 50px;\n  padding: 0 30px;\n}\n.four-corners-link {\n  border-radius: 6px;\n  background-color: #fff;\n  border: #e9e9e9 1px solid;\n  overflow: hidden;\n  margin: 20px 0;\n}\n.four-corners-link .four-corners-link--body {\n  border-bottom: #e9e9e9 1px solid;\n  height: 32px;\n  padding: 10px;\n}\n.four-corners-link .four-corners-link--body img {\n  height: 32px;\n}\n.four-corners-link .four-corners-link--footer {\n  padding: 15px;\n}\n.four-corners-link .four-corners-link--footer h1,\n.four-corners-link .four-corners-link--footer p {\n  color: #000;\n}\n.four-corners-link .four-corners-link--footer p {\n  margin: 0;\n  padding: 0;\n  padding: 0px 0 20px 0;\n}"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 789:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Icon_vue__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Icon_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_Icon_vue__);


__WEBPACK_IMPORTED_MODULE_0__components_Icon_vue___default.a.register({"arrow-right":{"width":1536,"height":1792,"paths":[{"d":"M1472 960q0 54-37 91l-651 651q-39 37-91 37-51 0-90-37l-75-75q-38-38-38-91t38-91l293-293h-704q-52 0-84.5-37.5t-32.5-90.5v-128q0-53 32.5-90.5t84.5-37.5h704l-293-294q-38-36-38-90t38-90l75-75q38-38 90-38 53 0 91 38l651 651q37 35 37 90z"}]}})


/***/ }),

/***/ 805:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(738);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(413)("67cd8ac5", content, true);

/***/ }),

/***/ 836:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(769);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(413)("5b47131d", content, true);

/***/ }),

/***/ 846:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(779);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(413)("e242eb9a", content, true);

/***/ }),

/***/ 847:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(780);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(413)("6ad32a4f", content, true);

/***/ }),

/***/ 855:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(788);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(413)("2f484002", content, true);

/***/ }),

/***/ 972:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(847)

var Component = __webpack_require__(3)(
  /* script */
  __webpack_require__(690),
  /* template */
  __webpack_require__(1041),
  /* scopeId */
  "data-v-a23420f4",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 973:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(836)

var Component = __webpack_require__(3)(
  /* script */
  __webpack_require__(691),
  /* template */
  __webpack_require__(1028),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 974:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(846)

var Component = __webpack_require__(3)(
  /* script */
  __webpack_require__(692),
  /* template */
  __webpack_require__(1040),
  /* scopeId */
  "data-v-9f53fe9c",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 976:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(855)

var Component = __webpack_require__(3)(
  /* script */
  __webpack_require__(694),
  /* template */
  __webpack_require__(1052),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 995:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "feedback-page",
    attrs: {
      "name": "feedback-page"
    }
  }, [_c('page-header', {
    attrs: {
      "title": "Response Area",
      "identifier": "homework"
    }
  }), _c('div', {
    attrs: {
      "id": "chat-list-container"
    }
  }, [_c('ul', [_c('li', {
    staticClass: "list-header"
  }, [_vm._v("Your Responses")]), (!_vm.myFeedbackItems.length) ? _c('li', {
    staticClass: "no-content"
  }, [_vm._v("Submit a response")]) : _vm._e(), _vm._l((_vm.myFeedbackItems), function(feedbackItem, index) {
    return _c('router-link', {
      key: index,
      attrs: {
        "to": {
          name: 'feedback_view',
          params: {
            classSlug: _vm.classSlug,
            contentSlug: _vm.contentSlug,
            id: _vm.encodedId(feedbackItem.id)
          }
        },
        "tag": "li"
      },
      on: {
        "click": function($event) {
          _vm.currentFeedbackId = feedbackItem.id
        }
      }
    }, [_c('feedback-row', {
      attrs: {
        "content": feedbackItem,
        "active": _vm.currentFeedbackId === feedbackItem.id
      },
      on: {
        "click": function($event) {
          feedbackItem.unread = 0
        }
      }
    })], 1)
  })], 2), (_vm.feedbackItems.length !== 0) ? _c('ul', [_c('li', {
    staticClass: "list-header"
  }, [_vm._v("Current conversations")]), (_vm.feedbackItems.length === 0) ? _c('li', {
    staticClass: "no-content"
  }, [_vm._v("You are not in any conversations")]) : _vm._e(), _vm._l((_vm.feedbackItems), function(feedbackItem, index) {
    return _c('router-link', {
      key: index,
      attrs: {
        "to": {
          name: 'feedback_view',
          params: {
            classSlug: _vm.classSlug,
            contentSlug: _vm.contentSlug,
            id: _vm.encodedId(feedbackItem.id)
          }
        },
        "tag": "li"
      },
      on: {
        "click": function($event) {
          _vm.currentFeedbackId = feedbackItem.id
        }
      }
    }, [_c('feedback-row', {
      attrs: {
        "content": feedbackItem,
        "active": _vm.currentFeedbackId === feedbackItem.id
      },
      on: {
        "click": function($event) {
          feedbackItem.unread = 0
        }
      }
    })], 1)
  })], 2) : _vm._e(), (_vm.availableFeedbackItems.length !== 0) ? _c('ul', [_c('li', {
    staticClass: "list-header"
  }, [_vm._v("Suggested conversations")]), (_vm.availableFeedbackItems.length === 0) ? _c('li', {
    staticClass: "no-content"
  }, [_vm._v("You have no suggestions")]) : _vm._e(), _vm._l((_vm.availableFeedbackItems), function(feedbackItem, index) {
    return _c('router-link', {
      key: index,
      attrs: {
        "to": {
          name: 'feedback_view',
          params: {
            classSlug: _vm.classSlug,
            contentSlug: _vm.contentSlug,
            id: _vm.encodedId(feedbackItem.id)
          }
        },
        "tag": "li"
      },
      on: {
        "click": function($event) {
          _vm.currentFeedbackId = feedbackItem.id
        }
      }
    }, [_c('feedback-row', {
      attrs: {
        "content": feedbackItem,
        "active": _vm.currentFeedbackId === feedbackItem.id
      },
      on: {
        "click": function($event) {
          feedbackItem.unread = 0
        }
      }
    })], 1)
  })], 2) : _vm._e()]), _c('div', {
    staticClass: "background-white",
    attrs: {
      "id": "conversation-container"
    }
  }, [(!_vm.currentFeedbackId) ? _c('div', {
    staticClass: "homework-details"
  }, [_c('div', {
    staticClass: "markdown-wrapper"
  }, [_c('markdown-renderer', {
    attrs: {
      "markdown-url": _vm.markdownUrl
    }
  })], 1), _c('four-corners-link', {
    attrs: {
      "message": "This task requires the submission of a FourCorners image, we have created a space to learn about FourCorners and what makes it relevant to today's digital photography."
    }
  }), _c('h2', [_vm._v("Submit Response")]), _c('feedback-submission', {
    attrs: {
      "the-class": _vm.classSlug,
      "the-content": _vm.contentSlug
    },
    on: {
      "reloadchats": _vm.reloadChats
    }
  }), (!_vm.isRegistered) ? _c('div', {
    attrs: {
      "id": "login-notice"
    },
    on: {
      "click": _vm.showAuth
    }
  }, [_vm._v("Please login to submit a response")]) : _vm._e()], 1) : _vm._e(), _c('transition', {
    attrs: {
      "name": "fade",
      "type": "in out"
    }
  }, [_c('feedback-view', {
    attrs: {
      "currentFeedbackId": _vm.currentFeedbackId,
      "discussion": _vm.discussion,
      "class-slug": _vm.classSlug,
      "content-slug": _vm.contentSlug
    },
    on: {
      "update:currentFeedbackId": function($event) {
        _vm.currentFeedbackId = $event
      },
      "update:discussion": function($event) {
        _vm.discussion = $event
      },
      "reloadchats": _vm.reloadChats
    }
  })], 1)], 1), _c('div', {
    staticClass: "clearfix"
  })], 1)
},staticRenderFns: []}

/***/ })

});
//# sourceMappingURL=2.aa6eb44b25150466c3a4.js.map