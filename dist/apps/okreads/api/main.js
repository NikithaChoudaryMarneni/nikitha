(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./apps/okreads/api/src/app/app.controller.ts":
/*!****************************************************!*\
  !*** ./apps/okreads/api/src/app/app.controller.ts ***!
  \****************************************************/
/*! exports provided: AppController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppController", function() { return AppController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);


let AppController = class AppController {
    getRoot() {
        return 'It Worked!';
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Get"])('/'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], AppController.prototype, "getRoot", null);
AppController = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Controller"])()
], AppController);



/***/ }),

/***/ "./apps/okreads/api/src/app/app.module.ts":
/*!************************************************!*\
  !*** ./apps/okreads/api/src/app/app.module.ts ***!
  \************************************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.controller */ "./apps/okreads/api/src/app/app.controller.ts");
/* harmony import */ var _tmo_api_books__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tmo/api/books */ "./libs/api/books/src/index.ts");




let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [_tmo_api_books__WEBPACK_IMPORTED_MODULE_3__["ApiBooksModule"]],
        controllers: [_app_controller__WEBPACK_IMPORTED_MODULE_2__["AppController"]]
    })
], AppModule);



/***/ }),

/***/ "./apps/okreads/api/src/main.ts":
/*!**************************************!*\
  !*** ./apps/okreads/api/src/main.ts ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
/* harmony import */ var _nestjs_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./apps/okreads/api/src/app/app.module.ts");




function bootstrap() {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        const app = yield _nestjs_core__WEBPACK_IMPORTED_MODULE_2__["NestFactory"].create(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]);
        const globalPrefix = 'api';
        app.setGlobalPrefix(globalPrefix);
        const port = process.env.PORT || 3333;
        yield app.listen(port, () => {
            _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Logger"].log('Listening at http://localhost:' + port + '/' + globalPrefix);
        });
    });
}
bootstrap();


/***/ }),

/***/ "./libs/api/books/src/index.ts":
/*!*************************************!*\
  !*** ./libs/api/books/src/index.ts ***!
  \*************************************/
/*! exports provided: BooksService, ReadingListService, ApiBooksModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_books_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/books.service */ "./libs/api/books/src/lib/books.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BooksService", function() { return _lib_books_service__WEBPACK_IMPORTED_MODULE_0__["BooksService"]; });

/* harmony import */ var _lib_reading_list_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/reading-list.service */ "./libs/api/books/src/lib/reading-list.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReadingListService", function() { return _lib_reading_list_service__WEBPACK_IMPORTED_MODULE_1__["ReadingListService"]; });

/* harmony import */ var _lib_api_books_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/api-books.module */ "./libs/api/books/src/lib/api-books.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApiBooksModule", function() { return _lib_api_books_module__WEBPACK_IMPORTED_MODULE_2__["ApiBooksModule"]; });






/***/ }),

/***/ "./libs/api/books/src/lib/api-books.module.ts":
/*!****************************************************!*\
  !*** ./libs/api/books/src/lib/api-books.module.ts ***!
  \****************************************************/
/*! exports provided: ApiBooksModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiBooksModule", function() { return ApiBooksModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _books_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./books.service */ "./libs/api/books/src/lib/books.service.ts");
/* harmony import */ var _reading_list_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reading-list.service */ "./libs/api/books/src/lib/reading-list.service.ts");
/* harmony import */ var _books_controller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./books.controller */ "./libs/api/books/src/lib/books.controller.ts");
/* harmony import */ var _reading_list_controller__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reading-list.controller */ "./libs/api/books/src/lib/reading-list.controller.ts");






let ApiBooksModule = class ApiBooksModule {
};
ApiBooksModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["HttpModule"]],
        controllers: [_books_controller__WEBPACK_IMPORTED_MODULE_4__["BooksController"], _reading_list_controller__WEBPACK_IMPORTED_MODULE_5__["ReadingListController"]],
        providers: [_books_service__WEBPACK_IMPORTED_MODULE_2__["BooksService"], _reading_list_service__WEBPACK_IMPORTED_MODULE_3__["ReadingListService"]],
        exports: [_books_service__WEBPACK_IMPORTED_MODULE_2__["BooksService"], _reading_list_service__WEBPACK_IMPORTED_MODULE_3__["ReadingListService"]]
    })
], ApiBooksModule);



/***/ }),

/***/ "./libs/api/books/src/lib/books.controller.ts":
/*!****************************************************!*\
  !*** ./libs/api/books/src/lib/books.controller.ts ***!
  \****************************************************/
/*! exports provided: BooksController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksController", function() { return BooksController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _books_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./books.service */ "./libs/api/books/src/lib/books.service.ts");
var _a;



let BooksController = class BooksController {
    constructor(books) {
        this.books = books;
    }
    searchBooks(term) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                return yield this.books.search(term);
            }
            catch (e) {
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["HttpException"](e.message, _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["HttpStatus"].UNPROCESSABLE_ENTITY);
            }
        });
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Get"])('/books/search'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Query"])('q')),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Promise)
], BooksController.prototype, "searchBooks", null);
BooksController = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Controller"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof _books_service__WEBPACK_IMPORTED_MODULE_2__["BooksService"] !== "undefined" && _books_service__WEBPACK_IMPORTED_MODULE_2__["BooksService"]) === "function" ? _a : Object])
], BooksController);



/***/ }),

/***/ "./libs/api/books/src/lib/books.service.ts":
/*!*************************************************!*\
  !*** ./libs/api/books/src/lib/books.service.ts ***!
  \*************************************************/
/*! exports provided: BooksService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksService", function() { return BooksService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__);
var _a;



let BooksService = class BooksService {
    constructor(http) {
        this.http = http;
    }
    search(term) {
        if (!term) {
            throw new Error('Missing serach term');
        }
        return this.http
            .get(`https://www.googleapis.com/books/v1/volumes?q=${term}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(resp => {
            return resp.data.items.map(item => {
                var _a, _b, _c, _d, _e, _f, _g, _h;
                return {
                    id: item.id,
                    title: (_a = item.volumeInfo) === null || _a === void 0 ? void 0 : _a.title,
                    authors: ((_b = item.volumeInfo) === null || _b === void 0 ? void 0 : _b.authors) || [],
                    description: (_c = item.searchInfo) === null || _c === void 0 ? void 0 : _c.textSnippet,
                    publisher: (_d = item.volumeInfo) === null || _d === void 0 ? void 0 : _d.publisher,
                    publishedDate: ((_e = item.volumeInfo) === null || _e === void 0 ? void 0 : _e.publishedDate) ? new Date((_f = item.volumeInfo) === null || _f === void 0 ? void 0 : _f.publishedDate).toISOString()
                        : undefined,
                    coverUrl: (_h = (_g = item.volumeInfo) === null || _g === void 0 ? void 0 : _g.imageLinks) === null || _h === void 0 ? void 0 : _h.thumbnail
                };
            });
        }));
    }
};
BooksService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["HttpService"] !== "undefined" && _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["HttpService"]) === "function" ? _a : Object])
], BooksService);



/***/ }),

/***/ "./libs/api/books/src/lib/reading-list.controller.ts":
/*!***********************************************************!*\
  !*** ./libs/api/books/src/lib/reading-list.controller.ts ***!
  \***********************************************************/
/*! exports provided: ReadingListController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadingListController", function() { return ReadingListController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tmo_shared_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tmo/shared/models */ "./libs/shared/models/src/index.ts");
/* harmony import */ var _reading_list_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reading-list.service */ "./libs/api/books/src/lib/reading-list.service.ts");
var _a, _b;




let ReadingListController = class ReadingListController {
    constructor(readingList) {
        this.readingList = readingList;
    }
    getReadingList() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.readingList.getList();
        });
    }
    addToReadingList(item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.readingList.addBook(item);
        });
    }
    removeFromReadingList(params) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.readingList.removeBook(params.id);
        });
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Get"])('/reading-list/'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Promise)
], ReadingListController.prototype, "getReadingList", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Post"])('/reading-list/'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Body"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof _tmo_shared_models__WEBPACK_IMPORTED_MODULE_2__["Book"] !== "undefined" && _tmo_shared_models__WEBPACK_IMPORTED_MODULE_2__["Book"]) === "function" ? _a : Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Promise)
], ReadingListController.prototype, "addToReadingList", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Delete"])('/reading-list/:id'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Param"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Promise)
], ReadingListController.prototype, "removeFromReadingList", null);
ReadingListController = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Controller"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_b = typeof _reading_list_service__WEBPACK_IMPORTED_MODULE_3__["ReadingListService"] !== "undefined" && _reading_list_service__WEBPACK_IMPORTED_MODULE_3__["ReadingListService"]) === "function" ? _b : Object])
], ReadingListController);



/***/ }),

/***/ "./libs/api/books/src/lib/reading-list.service.ts":
/*!********************************************************!*\
  !*** ./libs/api/books/src/lib/reading-list.service.ts ***!
  \********************************************************/
/*! exports provided: ReadingListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadingListService", function() { return ReadingListService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tmo_shared_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tmo/shared/storage */ "./libs/shared/storage/src/index.ts");



const KEY = '[okreads API] Reading List';
let ReadingListService = class ReadingListService {
    constructor() {
        this.storage = new _tmo_shared_storage__WEBPACK_IMPORTED_MODULE_2__["StorageService"](KEY, []);
    }
    getList() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.storage.read();
        });
    }
    addBook(b) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.storage.update(list => {
                const { id } = b, rest = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(b, ["id"]);
                list.push(Object.assign({ bookId: id }, rest));
                return list;
            });
        });
    }
    removeBook(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.storage.update(list => {
                return list.filter(x => x.bookId !== id);
            });
        });
    }
};
ReadingListService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ReadingListService);



/***/ }),

/***/ "./libs/shared/models/src/index.ts":
/*!*****************************************!*\
  !*** ./libs/shared/models/src/index.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models */ "./libs/shared/models/src/models.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_models__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _models__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _models__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));



/***/ }),

/***/ "./libs/shared/models/src/models.ts":
/*!******************************************!*\
  !*** ./libs/shared/models/src/models.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./libs/shared/storage/src/index.ts":
/*!******************************************!*\
  !*** ./libs/shared/storage/src/index.ts ***!
  \******************************************/
/*! exports provided: getStorage, StorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_get_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/get-storage */ "./libs/shared/storage/src/lib/get-storage.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getStorage", function() { return _lib_get_storage__WEBPACK_IMPORTED_MODULE_0__["getStorage"]; });

/* harmony import */ var _lib_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/storage.service */ "./libs/shared/storage/src/lib/storage.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return _lib_storage_service__WEBPACK_IMPORTED_MODULE_1__["StorageService"]; });





/***/ }),

/***/ "./libs/shared/storage/src/lib/get-storage.ts":
/*!****************************************************!*\
  !*** ./libs/shared/storage/src/lib/get-storage.ts ***!
  \****************************************************/
/*! exports provided: getStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStorage", function() { return getStorage; });
let localStorage;
function getStorage() {
    if (localStorage)
        return localStorage;
    if (typeof process === 'undefined' && typeof window !== 'undefined') {
        localStorage = window.localStorage;
    }
    else if (typeof process !== 'undefined') {
        const LocalStorage = __webpack_require__(/*! node-localstorage */ "node-localstorage").LocalStorage;
        localStorage = new LocalStorage('./scratch');
    }
    else {
        throw new Error('Unsupported environment');
    }
    return localStorage;
}


/***/ }),

/***/ "./libs/shared/storage/src/lib/storage.service.ts":
/*!********************************************************!*\
  !*** ./libs/shared/storage/src/lib/storage.service.ts ***!
  \********************************************************/
/*! exports provided: StorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return StorageService; });
/* harmony import */ var _get_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-storage */ "./libs/shared/storage/src/lib/get-storage.ts");
/*
 * Implements universal Storage API that works in browser and Node.
 * This shouldn't be used as a database replacement in a real production app,
 * but for the purposes of this dev puzzle it is fine. :)
 */

class StorageService {
    constructor(key, initialState) {
        this.key = key;
        this.initialState = initialState;
        this.state = null;
        this.storage = Object(_get_storage__WEBPACK_IMPORTED_MODULE_0__["getStorage"])();
        this.readFromStorage();
    }
    read() {
        return this.state;
    }
    update(mutate) {
        this.state = mutate(this.state);
        this.writeToStorage();
    }
    readFromStorage() {
        const serialized = this.storage.getItem(this.key);
        if (serialized) {
            try {
                this.state = JSON.parse(serialized);
            }
            catch (_a) { }
        }
        if (!this.state) {
            this.state = this.initialState;
        }
    }
    writeToStorage() {
        this.storage.setItem(this.key, JSON.stringify(this.state));
    }
}


/***/ }),

/***/ 0:
/*!********************************************!*\
  !*** multi ./apps/okreads/api/src/main.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/mallikarjun/Downloads/web-ui-developer-puzzle-master/apps/okreads/api/src/main.ts */"./apps/okreads/api/src/main.ts");


/***/ }),

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "node-localstorage":
/*!************************************!*\
  !*** external "node-localstorage" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("node-localstorage");

/***/ }),

/***/ "rxjs/operators":
/*!*********************************!*\
  !*** external "rxjs/operators" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rxjs/operators");

/***/ }),

/***/ "tslib":
/*!************************!*\
  !*** external "tslib" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("tslib");

/***/ })

/******/ })));
//# sourceMappingURL=main.js.map