"use strict";
(self["webpackChunktodolist"] = self["webpackChunktodolist"] || []).push([[0],[
/* 0 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _modules_functionality_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var _modules_interactive_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);




const form = document.getElementById('list-form');
const containerTask = document.getElementById('toDo-list');
const newToDo = document.getElementById('imput-task');
let toDos = [];

// arrow function add task
const addTask = () => {
  const toDoValue = newToDo.value;
  const emptyToDo = toDoValue === '';

  if (emptyToDo) return;

  const task = {
    value: toDoValue,
    completed: false,
    id: toDos.length + 1,
  };

  newToDo.value = '';
  toDos.push(task);
  localStorage.setItem('todos', JSON.stringify(toDos));

  // update the task value of the edited input before rendering the tasks
  const editedInput = containerTask.querySelector('.text-input.edit');
  if (editedInput) {
    const taskId = parseInt(editedInput.getAttribute('data-id'), 10);
    const taskIndex = toDos.findIndex((task) => task.id === taskId);
    toDos[taskIndex].value = editedInput.value;
    editedInput.classList.remove('edit');
  }

  (0,_modules_functionality_js__WEBPACK_IMPORTED_MODULE_1__.renderToDo)();
};

const submitIcon = document.getElementById('submit-icon');
submitIcon.addEventListener('click', addTask);

// form submit
form.addEventListener('submit', (event) => {
  event.preventDefault();

  addTask();
  (0,_modules_functionality_js__WEBPACK_IMPORTED_MODULE_1__.renderToDo)();
  localStorage.setItem('todos', JSON.stringify(toDos));
});

// delete task
containerTask.addEventListener('click', (event) => {
  if (event.target.classList.contains('delete-task-icon')) {
    const taskElement = event.target.parentNode;
    const taskId = parseInt(taskElement.querySelector('.text-input').getAttribute('data-id'), 10);
    const taskIndex = toDos.findIndex((task) => task.id === taskId);
    toDos.splice(taskIndex, 1);
    taskElement.remove();

    // update the id of the remaining tasks
    for (let i = taskIndex; i < toDos.length; i += 1) {
      toDos[i].id = i + 1;
    }

    localStorage.setItem('todos', JSON.stringify(toDos));
  }
});

containerTask.addEventListener('click', (event) => {
  const checkBox = event.target.closest('.checkbox-input');
  if (checkBox) {
    const checkBoxes = containerTask.querySelectorAll('.checkbox-input');
    const id = Array.from(checkBoxes).indexOf(checkBox);
    (0,_modules_interactive_js__WEBPACK_IMPORTED_MODULE_2__.strikeThrough)(id);
    (0,_modules_functionality_js__WEBPACK_IMPORTED_MODULE_1__.renderToDo)();
  }
});

const clearBtn = document.getElementById('clear-btn');
clearBtn.addEventListener('click', () => {
  (0,_modules_interactive_js__WEBPACK_IMPORTED_MODULE_2__.clearAll)();
  (0,_modules_functionality_js__WEBPACK_IMPORTED_MODULE_1__.renderToDo)();
});

// edit task
// edit task
containerTask.addEventListener('click', (event) => {
  const textInput = event.target.closest('.text-input');
  if (textInput) {
    const textInputs = containerTask.querySelectorAll('.text-input');
    const index = Array.from(textInputs).indexOf(textInput);
    (0,_modules_functionality_js__WEBPACK_IMPORTED_MODULE_1__.edit)(index);

    // add a blur listener to update the task value when the user leaves the input
    textInput.addEventListener('blur', () => {
      const taskId = parseInt(textInput.getAttribute('data-id'), 10);
      const taskIndex = toDos.findIndex((task) => task.id === taskId);
      toDos[taskIndex].value = textInput.value;
      localStorage.setItem('todos', JSON.stringify(toDos));
    });
  }
});

// arrow function add task

window.addEventListener('load', () => {
  const storedToDos = JSON.parse(localStorage.getItem('todos'));
  if (storedToDos) {
    toDos = storedToDos;
    (0,_modules_functionality_js__WEBPACK_IMPORTED_MODULE_1__.renderToDo)();
  }
});


/***/ }),
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 2 */
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 3 */
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),
/* 4 */
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),
/* 5 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),
/* 6 */
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),
/* 7 */
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),
/* 8 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  padding: 0;\n  margin: 0;\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\nbody {\n  background-color: #f1f2f5;\n}\n\ni {\n  color: lightgray;\n}\n\ninput {\n  border: none;\n  outline: none;\n}\n\n.checkbox-input,\n.delete-task-icon,\n.fas {\n  cursor: pointer;\n}\n\n.mainTitle {\n  text-align: center;\n}\n\n/* container list */\n.container-list {\n  display: flex;\n  flex-direction: column;\n  align-self: center;\n  align-items: center;\n  justify-content: center;\n  background-color: #fff;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n  border-radius: 3px;\n  width: 50%;\n  margin-left: 26%;\n}\n\n/* list title */\n.titleListContainer {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  width: 100%;\n  justify-content: space-between;\n  align-self: center;\n}\n\n.toDoList-title {\n  padding-left: 2%;\n}\n\n.titleListContainer i {\n  padding-right: 2%;\n}\n\n/* Add container */\n.container-listForm {\n  width: 100%;\n}\n\n.list-form {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  margin-bottom: 3%;\n  padding-bottom: 2%;\n  border-bottom: #ddd 1px solid;\n}\n\n.list-form input {\n  width: 90%;\n  height: 30px;\n  font-size: 0.8em;\n  padding-left: 2%;\n  outline: none;\n  border: none;\n}\n\n.list-form i {\n  padding-right: 2%;\n}\n\n/* List js content */\n.list-content {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  gap: 2%;\n}\n\n.task {\n  display: flex;\n  justify-content: space-between;\n  border-bottom: 1px #ddd solid;\n  margin-bottom: 2.5%;\n  padding-bottom: 1%;\n  padding-left: 3%;\n  padding-right: 3%;\n}\n\n.text {\n  display: flex;\n  flex-direction: row;\n  width: 60%;\n  gap: 3%;\n  padding-left: 2%;\n}\n\n.task-input {\n  border: 0;\n  width: 60%;\n  gap: 3%;\n  padding-left: 2%;\n  justify-content: left;\n}\n\n.strike-through {\n  text-decoration: line-through;\n}\n\n.task-text p {\n  padding-left: 2%;\n}\n\n.task-description i {\n  padding-right: 2%;\n}\n\n.task-description:nth-child(3) {\n  margin-bottom: 0;\n}\n\n.btn-container {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n}\n\n.btn {\n  width: 100%;\n  outline: none;\n  border: none;\n  background-color: #f1f2f5;\n  font-size: 1em;\n  cursor: pointer;\n  padding: 3% 0;\n  display: flex;\n  align-self: center;\n  justify-content: center;\n}\n\n.btn:hover {\n  transition: 0.5s ease-in-out;\n  background-color: darkgray;\n  color: white;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 9 */
/***/ ((module) => {



module.exports = function (i) {
  return i[1];
};

/***/ }),
/* 10 */
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),
/* 11 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "edit": () => (/* binding */ edit),
/* harmony export */   "renderToDo": () => (/* binding */ renderToDo)
/* harmony export */ });
const containerTask = document.getElementById('toDo-list');

// rendering the toDo list
const renderToDo = () => {
  const toDos = JSON.parse(localStorage.getItem('todos')) || [];
  containerTask.innerHTML = '';
  toDos.sort((a, b) => a.index - b.index);
  containerTask.innerHTML = '';
  for (let i = 0; i < toDos.length; i += 1) {
    const checked = toDos[i].completed ? 'checked' : '';
    const strike = toDos[i].completed ? 'strike-through' : '';
    const html = `
      <div class="task">
        <input type="checkbox" class="checkbox-input" ${checked}>
        <input type="text" class="text-input ${strike}" value="${toDos[i].value}" data-id="${toDos[i].id}">
        <i class="delete-task-icon fa-solid fa-trash"></i>
      </div>
    `;
    containerTask.innerHTML += html;
  }
};

const edit = (index) => {
  const tasksArray = JSON.parse(localStorage.getItem('todos')) || [];
  const textInputs = document.querySelectorAll('.text-input');
  const task = tasksArray[index];

  textInputs[index].addEventListener('change', () => {
    task.value = textInputs[index].value;
    localStorage.setItem('todos', JSON.stringify(tasksArray));
  });

  textInputs[index].addEventListener('blur', () => {
    task.value = textInputs[index].value;
    localStorage.setItem('todos', JSON.stringify(tasksArray));
  });
};


/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearAll": () => (/* binding */ clearAll),
/* harmony export */   "strikeThrough": () => (/* binding */ strikeThrough)
/* harmony export */ });
/* harmony import */ var _functionality_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);


const strikeThrough = (id) => {
  const toDos = JSON.parse(localStorage.getItem('todos')) || [];
  const checkBoxes = document.querySelectorAll('.checkbox-input');
  if (checkBoxes[id].checked) {
    toDos[id].completed = true;
    localStorage.setItem('todos', JSON.stringify(toDos));
    (0,_functionality_js__WEBPACK_IMPORTED_MODULE_0__.renderToDo)();
  } else {
    toDos[id].completed = false;
    localStorage.setItem('todos', JSON.stringify(toDos));
  }
};

const clearAll = () => {
  const toDos = JSON.parse(localStorage.getItem('todos')) || [];
  for (let i = 0; i < toDos.length; i += 1) {
    if (toDos[i].completed) {
      toDos.splice(i, 1);
      i -= 1;
    }
  }
  for (let i = 1; i <= toDos.length; i += 1) {
    toDos[i - 1].id = i;
  }
  localStorage.setItem('todos', JSON.stringify(toDos));
};



/***/ })
],
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__(0));
/******/ }
]);