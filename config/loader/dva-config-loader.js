module.exports = function (source) {
	// todo
	var paths = this.context.replace(/\//ig,'\\').split('\\'),
	moduleName = paths[paths.length -2];
	if (moduleName === 'dva-router-config') {
		source = source.replace("var _convertRoutes = require('./convertRoutes');",`
		var _convertRoutes = require('./convertRoutes');
		var _Redirect = require('./Redirect');
		var _Redirect2 = _interopRequireDefault(_Redirect);
	`).replace('exports.matchRoutes = _matchRoutes2.default;',`
		exports.matchRoutes = _matchRoutes2.default;
		exports.redirect = _Redirect2.default;
	`);
	}
	if (moduleName === 'dva') {
		source = source.replace('require("history/createHashHistory")','require("history").createHashHistory');
	}
  return source;
}