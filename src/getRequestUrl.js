'use strict';

var errorTypes = require('./errorTypes'),
  MissingPathParamsError = errorTypes.MissingPathParamsError;

module.exports = function getRequestUrl(operation, data){
  var url = getUrlTemplate(operation);
  url = applyPathParams(url, operation, data);

  if(!data) return url;
  delete data.body;
  var queryParams = (operation.parameters || []).concat(Object.keys(data))
    .filter(function(param) {
      if(param.paramType === 'query')
        return data[param.name] !== undefined;
      else if(data[param]) {
        return data[param] !== undefined;
      }
    })
    .map(function(param) {
      var key = param.name || param;

      if(Array.isArray(data[key])) {
        return data[key].map(function(value) {
          return encodeURIComponent(key) + '=' + encodeURIComponent(value);
        }).join('&');
      }
      return encodeURIComponent(key) + '=' + encodeURIComponent(data[key]);
    }).join('&');

  if(queryParams) url += '?' + queryParams;

  return url;
};

/*function applyQueryParams(url, params) {
  if(params === {}) return url;
  return url +
    (url.indexOf('?') === -1 ? '?' : '&') +
    Object.keys(params)
    .map(function(key) {
      if(Array.isArray(params[key])) {
        return params[key]
          .map(function(value) {
            return encodeURIComponent(key) + '=' + encodeURIComponent(value);
          }).join('&');
      }else {
        return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
      }
    });
}*/

function applyPathParams(url, operation, data){
  var pathParams = (operation.parameters || []).filter(function(param){
    return param.paramType === 'path';
  });

  var missingParams = pathParams.filter(function(param){
    return data[param.name] === undefined;
  });

  if(missingParams.length){
    throw new MissingPathParamsError(missingParams.map(function(param){
      return param.name;
    }));
  }

  pathParams.forEach(function(param){
    var key = param.name;

    var exp = new RegExp('{' + key + '[^}]*}', 'gi');

    var value = data[key].toString();
    delete data[key];
    value = value.split('/').map(encodeURIComponent).join('/');

    url = url.replace(exp, value);
  });

  return url;
}

function getUrlTemplate(operation){
  var apiObject = operation.apiObject;

  var basePath = apiObject.apiDeclaration.basePath;
  var path = apiObject.path.replace('{format}', 'json');

  return basePath + path;
}
