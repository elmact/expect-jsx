'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _expect = require('expect');

var _expect2 = _interopRequireDefault(_expect);

var _collapseWhiteSpace = require('collapse-white-space');

var _collapseWhiteSpace2 = _interopRequireDefault(_collapseWhiteSpace);

var _reactAddonsTestUtils = require('react-addons-test-utils');

var _reactAddonsTestUtils2 = _interopRequireDefault(_reactAddonsTestUtils);

var _reactElementToJsxString = require('react-element-to-jsx-string');

var _reactElementToJsxString2 = _interopRequireDefault(_reactElementToJsxString);

var api = {
  toEqualJSX: function toEqualJSX(ReactElement) {
    return (0, _expect2['default'])((0, _reactElementToJsxString2['default'])(this.actual)).toEqual((0, _reactElementToJsxString2['default'])(ReactElement));
  },
  toNotEqualJSX: function toNotEqualJSX(ReactElement) {
    return (0, _expect2['default'])((0, _reactElementToJsxString2['default'])(this.actual)).toNotEqual((0, _reactElementToJsxString2['default'])(ReactElement));
  },
  toIncludeJSX: function toIncludeJSX(ReactElement) {
    return (0, _expect2['default'])((0, _collapseWhiteSpace2['default'])((0, _reactElementToJsxString2['default'])(this.actual))).toInclude((0, _collapseWhiteSpace2['default'])((0, _reactElementToJsxString2['default'])(ReactElement)));
  },
  toRenderAsJSX: function toRenderAsJSX(ReactElement) {
    var shallowRenderer = _reactAddonsTestUtils2['default'].createRenderer();
    shallowRenderer.render(this.actual);
    return (0, _expect2['default'])((0, _collapseWhiteSpace2['default'])((0, _reactElementToJsxString2['default'])(shallowRenderer.getRenderOutput())).replace(/[\n]/g, '')).toEqual((0, _collapseWhiteSpace2['default'])((0, _reactElementToJsxString2['default'])(ReactElement)).replace(/[\n]/g, ''));
  },
  toRenderAs: function toRenderAs(ReactElement) {
    var shallowRenderer = _reactAddonsTestUtils2['default'].createRenderer();
    shallowRenderer.render(this.actual);
    var output = shallowRenderer.getRenderOutput();
    shallowRenderer.render(ReactElement);
    return (0, _expect2['default'])((0, _collapseWhiteSpace2['default'])((0, _reactElementToJsxString2['default'])(output)).replace(/[\n]/g, '')).toEqual((0, _collapseWhiteSpace2['default'])((0, _reactElementToJsxString2['default'])(shallowRenderer.getRenderOutput())).replace(/[\n]/g, ''));
  },
  toNotRenderAsJSX: function toNotRenderAsJSX(ReactElement) {
    var shallowRenderer = _reactAddonsTestUtils2['default'].createRenderer();
    shallowRenderer.render(this.actual);
    return (0, _expect2['default'])((0, _collapseWhiteSpace2['default'])((0, _reactElementToJsxString2['default'])(shallowRenderer.getRenderOutput())).replace(/[\n]/g, '')).toNotEqual((0, _collapseWhiteSpace2['default'])((0, _reactElementToJsxString2['default'])(ReactElement)).replace(/[\n]/g, ''));
  },
  toNotRenderAs: function toNotRenderAs(ReactElement) {
    var shallowRenderer = _reactAddonsTestUtils2['default'].createRenderer();
    shallowRenderer.render(this.actual);
    var output = shallowRenderer.getRenderOutput();
    shallowRenderer.render(ReactElement);
    return (0, _expect2['default'])((0, _collapseWhiteSpace2['default'])((0, _reactElementToJsxString2['default'])(output)).replace(/[\n]/g, '')).toNotEqual((0, _collapseWhiteSpace2['default'])((0, _reactElementToJsxString2['default'])(shallowRenderer.getRenderOutput())).replace(/[\n]/g, ''));
  },
  toIncludeJSXWhenRendered: function toIncludeJSXWhenRendered(ReactElement) {
    var shallowRenderer = _reactAddonsTestUtils2['default'].createRenderer();
    shallowRenderer.render(this.actual);
    return (0, _expect2['default'])((0, _collapseWhiteSpace2['default'])((0, _reactElementToJsxString2['default'])(shallowRenderer.getRenderOutput())).replace(/[\n]/g, '')).toInclude((0, _collapseWhiteSpace2['default'])((0, _reactElementToJsxString2['default'])(ReactElement)).replace(/[\n]/g, ''));
  },
  toIncludeHTMLWhenRendered: function toIncludeHTMLWhenRendered(ReactElement) {
    var shallowRenderer = _reactAddonsTestUtils2['default'].createRenderer();
    shallowRenderer.render(this.actual);
    return (0, _expect2['default'])((0, _collapseWhiteSpace2['default'])((0, _reactElementToJsxString2['default'])(shallowRenderer.getRenderOutput())).replace(/[\n]/g, '')).toInclude((0, _collapseWhiteSpace2['default'])(ReactElement).replace(/[\n]/g, ''));
  },
  toIncludeWhenRendered: function toIncludeWhenRendered(ReactElement) {
    var shallowRenderer = _reactAddonsTestUtils2['default'].createRenderer();
    shallowRenderer.render(this.actual);
    var output = shallowRenderer.getRenderOutput();
    shallowRenderer.render(ReactElement);
    return (0, _expect2['default'])((0, _collapseWhiteSpace2['default'])((0, _reactElementToJsxString2['default'])(output)).replace(/[\n]/g, '')).toInclude((0, _collapseWhiteSpace2['default'])((0, _reactElementToJsxString2['default'])(shallowRenderer.getRenderOutput())).replace(/[\n]/g, ''));
  },
  toExcludeJSXWhenRendered: function toExcludeJSXWhenRendered(ReactElement) {
    var shallowRenderer = _reactAddonsTestUtils2['default'].createRenderer();
    shallowRenderer.render(this.actual);
    return (0, _expect2['default'])((0, _collapseWhiteSpace2['default'])((0, _reactElementToJsxString2['default'])(shallowRenderer.getRenderOutput())).replace(/[\n]/g, '')).toExclude((0, _collapseWhiteSpace2['default'])((0, _reactElementToJsxString2['default'])(ReactElement)).replace(/[\n]/g, ''));
  },
  toExcludeHTMLWhenRendered: function toExcludeHTMLWhenRendered(ReactElement) {
    var shallowRenderer = _reactAddonsTestUtils2['default'].createRenderer();
    shallowRenderer.render(this.actual);
    return (0, _expect2['default'])((0, _collapseWhiteSpace2['default'])((0, _reactElementToJsxString2['default'])(shallowRenderer.getRenderOutput())).replace(/[\n]/g, '')).toExclude((0, _collapseWhiteSpace2['default'])(ReactElement).replace(/[\n]/g, ''));
  },
  toExcludeWhenRendered: function toExcludeWhenRendered(ReactElement) {
    var shallowRenderer = _reactAddonsTestUtils2['default'].createRenderer();
    shallowRenderer.render(this.actual);
    var output = shallowRenderer.getRenderOutput();
    shallowRenderer.render(ReactElement);
    return (0, _expect2['default'])((0, _collapseWhiteSpace2['default'])((0, _reactElementToJsxString2['default'])(output)).replace(/[\n]/g, '')).toExclude((0, _collapseWhiteSpace2['default'])((0, _reactElementToJsxString2['default'])(shallowRenderer.getRenderOutput())).replace(/[\n]/g, ''));
  }
};

/*      let err;
        try {
            expect(<IssueItem {...simpleItem} />)
                .toIncludeHTMLWhenRendered('<div className="testify-issue-item__description">');
        }catch(error) {
            err = error;
        }
        expect(err instanceof Error).toBe(true);
        expect(err.message).toInclude(`to include`);*/

exports['default'] = api;
module.exports = exports['default'];
