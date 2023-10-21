"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/es.array.map.js");
var _react = _interopRequireDefault(require("react"));
require("./App.scss");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var App = function App() {
  var books = [{
    id: 1,
    title: 'title',
    url: 'url',
    detail: 'detail',
    review: 'review',
    reviewer: 'reviewer'
  }, {
    id: 2,
    title: 'title2',
    url: 'url2',
    detail: 'detail2',
    review: 'review2',
    reviewer: 'reviewer2'
  }, {
    id: 3,
    title: 'title3',
    url: 'url3',
    detail: 'detail3',
    review: 'review3',
    reviewer: 'reviewer3'
  }];
  return /*#__PURE__*/_react.default.createElement("main", {
    className: "home-wrapper"
  }, /*#__PURE__*/_react.default.createElement("h1", null, "Book Review List"), /*#__PURE__*/_react.default.createElement("ul", {
    className: "review-list"
  }, books.map(function (book) {
    return /*#__PURE__*/_react.default.createElement("li", {
      key: book.id,
      className: "review-list__item"
    }, "\u672C\u306E\u30BF\u30A4\u30C8\u30EB: ", book.title, /*#__PURE__*/_react.default.createElement("br", null), "\u672C\u306EURL: ", book.url, /*#__PURE__*/_react.default.createElement("br", null), "\u672C\u306E\u8A73\u7D30: ", book.detail, /*#__PURE__*/_react.default.createElement("br", null), "\u30EC\u30D3\u30E5\u30FC\u5185\u5BB9: ", book.review, /*#__PURE__*/_react.default.createElement("br", null), "\u30EC\u30D3\u30E5\u30A2\u30FC: ", book.reviewer);
  })));
};
var _default = exports.default = App; // function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//       <div>Learn React</div>
//       </header>
//     </div>
//   );
// }
// export default App;