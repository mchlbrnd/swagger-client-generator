!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n;"undefined"!=typeof window?n=window:"undefined"!=typeof global?n=global:"undefined"!=typeof self&&(n=self),n.swaggerClientGenerator=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
'use strict';

function DataTypeValidationError(message){
  this.name = 'DataTypeValidationError';
  this.message = message || 'Invalid data type';
}
DataTypeValidationError.prototype = Object.create(Error.prototype);
DataTypeValidationError.prototype.constructor = DataTypeValidationError;
exports.DataTypeValidationError = DataTypeValidationError;

function NotAnIntegerError(value){
  this.name = 'NotAnIntegerError';
  this.message = '"' + value + '" is not an integer';
  this.value = value;
}
NotAnIntegerError.prototype = Object.create(DataTypeValidationError.prototype);
NotAnIntegerError.prototype.constructor = NotAnIntegerError;
exports.NotAnIntegerError = NotAnIntegerError;

function NotANumberError(value, actualType){
  this.name = 'NotANumberError';
  this.message = '"' + value + '" is not a number';
  if(actualType) this.message += ' (got a ' + actualType + ' instead)';

  this.value = value;
}
NotANumberError.prototype = Object.create(DataTypeValidationError.prototype);
NotANumberError.prototype.constructor = NotANumberError;
exports.NotANumberError = NotANumberError;

function NumberTooLargeError(value, max){
  this.name = 'NumberTooLargeError';
  this.message = '"' + value + '" is above the maximum of ' + max.toString();
  this.value = value;
}
NumberTooLargeError.prototype = Object.create(DataTypeValidationError.prototype);
NumberTooLargeError.prototype.constructor = NumberTooLargeError;
exports.NumberTooLargeError = NumberTooLargeError;

function NumberTooSmallError(value, max){
  this.name = 'NumberTooSmallError';
  this.message = '"' + value + '" is above the maximum of ' + max.toString();
  this.value = value;
}
NumberTooSmallError.prototype = Object.create(DataTypeValidationError.prototype);
NumberTooSmallError.prototype.constructor = NumberTooSmallError;
exports.NumberTooSmallError = NumberTooSmallError;

function NotABooleanError(value, actualType){
  this.name = 'NotABooleanError';
  this.message = '"' + value + '" is not a boolean';
  if(actualType) this.message += ' (got a ' + actualType + ' instead)';

  this.value = value;
}
NotABooleanError.prototype = Object.create(DataTypeValidationError.prototype);
NotABooleanError.prototype.constructor = NotABooleanError;
exports.NotABooleanError = NotABooleanError;

function NotAnArrayError(value, actualType){
  this.name = 'NotAnArrayError';
  this.message = '"' + value + '" is not an array';
  if(actualType) this.message += ' (got a ' + actualType + ' instead)';

  this.value = value;
}
NotAnArrayError.prototype = Object.create(DataTypeValidationError.prototype);
NotAnArrayError.prototype.constructor = NotAnArrayError;
exports.NotAnArrayError = NotAnArrayError;

function DuplicateInSetError(arr, dupes){
  this.name = 'DuplicateInSetError';
  this.message = 'Duplicates ("' + dupes.join('", "') + '") found in set: ["' + arr.join('", "') + '"';
  this.dupes = dupes;
  this.value = arr;
}
DuplicateInSetError.prototype = Object.create(DataTypeValidationError.prototype);
DuplicateInSetError.prototype.constructor = DuplicateInSetError;
exports.DuplicateInSetError = DuplicateInSetError;

function NotVoidError(value, actualType){
  this.name = 'NotVoidError';
  this.message = '"' + value + '" is not null or undefined';
  if(actualType) this.message += ' (got a ' + actualType + ' instead)';

  this.value = value;
}
NotVoidError.prototype = Object.create(DataTypeValidationError.prototype);
NotVoidError.prototype.constructor = NotVoidError;
exports.NotVoidError = NotVoidError;

function NotAStringError(value, actualType){
  this.name = 'NotAStringError';
  this.message = '"' + value + '" is not a string';
  if(actualType) this.message += ' (got a ' + actualType + ' instead)';

  this.value = value;
}
NotAStringError.prototype = Object.create(DataTypeValidationError.prototype);
NotAStringError.prototype.constructor = NotAStringError;
exports.NotAStringError = NotAStringError;

function StringNotInEnumError(value, acceptableValues){
  this.name = 'StringNotInEnumError';
  this.message = '"' + value + '" is not an acceptable value: "' + acceptableValues.join('", "') + '"';
 
  this.value = value;
}
StringNotInEnumError.prototype = Object.create(DataTypeValidationError.prototype);
StringNotInEnumError.prototype.constructor = StringNotInEnumError;
exports.StringNotInEnumError = StringNotInEnumError;


function ErrorsInArrayElementsError(errors){
  this.name = 'ErrorsInArrayElementsError';
  this.message = 'Errors in array elements:\n\t' + errors.join(',\n\t');
  this.errors = errors;
}
ErrorsInArrayElementsError.prototype = Object.create(DataTypeValidationError.prototype);
ErrorsInArrayElementsError.prototype.constructor = ErrorsInArrayElementsError;
exports.ErrorsInArrayElementsError = ErrorsInArrayElementsError;

function MissingValueError(){
  this.name = 'MissingValueError';
  
  this.message = 'This value is required but missing';
}
MissingValueError.prototype = Object.create(DataTypeValidationError.prototype);
MissingValueError.prototype.constructor = MissingValueError;
exports.MissingValueError = MissingValueError;

function ValidationError(specName, spec, error){
  this.name = 'ValidationError';
  this.specName = specName;
  this.spec = spec;
  this.error = error;

  this.message = specName + ' is invalid: ' + error.message;
}
ValidationError.prototype = Object.create(DataTypeValidationError.prototype);
ValidationError.prototype.constructor = ValidationError;
exports.ValidationError = ValidationError;

function ValidationErrors(value, specName, spec, errors){
  this.name = 'ValidationErrors';

  this.value = value;
  this.specName = specName;
  this.spec = spec;
  this.errors = errors || [];

  this.message = specName + ' is invalid';

  if(this.errors.length){
    this.message += ':\n\t' + this.errors.map(function(e){ return e.message; }).join('\n\t');
  }
}
ValidationErrors.prototype = Object.create(DataTypeValidationError.prototype);
ValidationErrors.prototype.constructor = ValidationErrors;
exports.ValidationErrors = ValidationErrors;

},{}],2:[function(_dereq_,module,exports){
exports.dataType = _dereq_('./validateDataType');
exports.model = _dereq_('./validateModel');
exports.operation = _dereq_('./validateOperation');
exports.array = _dereq_('./validateArray');
exports.errors = _dereq_('./errorTypes');

var primitives = _dereq_('./validatePrimitiveTypes');
exports.primitive = {
  integer: primitives.validateInteger,
  number: primitives.validateNumber,
  string: primitives.validateString,
  boolean: primitives.validateBoolean,
  void: primitives.validateVoid,
  file: primitives.validateFile
};

},{"./errorTypes":1,"./validateArray":3,"./validateDataType":4,"./validateModel":5,"./validateOperation":6,"./validatePrimitiveTypes":7}],3:[function(_dereq_,module,exports){
'use strict';

var errorTypes = _dereq_('./errorTypes'),
  validate = _dereq_('./index');

function validateArray(candidate, dataType, models){
  if(!Array.isArray(candidate)){
    return new errorTypes.NotAnArrayError(candidate, typeof candidate);
  }

  var items = dataType.items;

  if(dataType.uniqueItems){
    var dupeCheck = [];
    var dupes = candidate.filter(function(value){
      var signature;
      if(items.$ref){
        signature = JSON.stringify(value);
      } else {
        signature = value;
      }
      if(dupeCheck.indexOf(signature) !== -1){
        return true;
      } else {
        dupeCheck.push(signature);
        return false;
      }
    });

    if(dupes.length) {
      return new errorTypes.DuplicateInSetError(candidate, dupes);
    }
  }

  var errors;

  if(items.$ref){
    var model = models[items.$ref];
    errors = candidate.filter(function(value){
      return validate.model(value, model, models);
    });
  } else {
    errors = candidate.filter(function(value){
      return validate.dataType(value, items, models);
    });
  }

  if(errors.length){
    return new errorTypes.ErrorsInArrayElementsError(errors);
  }
}
module.exports = validateArray;
},{"./errorTypes":1,"./index":2}],4:[function(_dereq_,module,exports){
'use strict';

var validate = _dereq_('./index');

function validateDataType(candidate, dataType, models){
  models = models || {};

  var type = dataType.type || dataType.dataType || dataType.$ref;

  switch(type){
    case 'integer':
      return validate.primitive.integer(candidate, dataType);
    case 'number':
      return validate.primitive.number(candidate, dataType);
    case 'string':
      return validate.primitive.string(candidate, dataType);
    case 'boolean':
      return validate.primitive.boolean(candidate);
    case 'array':
      return validate.array(candidate, dataType, models);
    case 'void':
      return validate.primitive.void(candidate);
    case 'File':
      return validate.primitive.file();
    case 'date':
      return validate.date(candidate, dataType);
    default:
      // Assumed to be complex model
      var model = models[type];
      return validate.model(candidate, model, models);
  }
}
module.exports = validateDataType;

},{"./index":2}],5:[function(_dereq_,module,exports){
'use strict';

var errorTypes = _dereq_('./errorTypes'),
  ValidationError = errorTypes.ValidationError,
  ValidationErrors = errorTypes.ValidationErrors,
  MissingValueError = errorTypes.MissingValueError,
  validate = _dereq_('./index');

// http://stackoverflow.com/questions/122102/what-is-the-most-efficient-way-to-clone-an-object
function clone(obj){
    if(obj === null || obj === undefined || typeof obj !== 'object') return obj;

    if(Array.isArray(obj)) return obj.slice();

    var temp = {};

    for(var key in obj)
        temp[key] = clone(obj[key]);
    return temp;
}

function addInhertiedProperties(model, modelId, models){
  var parent;

  Object.keys(models).some(function(modelName){
    var potentialParent = models[modelName];
    if (!potentialParent.subTypes) return;

    if(potentialParent.subTypes.indexOf(modelId) !== -1){
      parent = potentialParent;
      return true;
    }
  });

  if(!parent) return;

  for(var propertyName in parent.properties){
    model.properties[propertyName] = parent.properties[propertyName];
  }
  
  if(parent.required) model.required = model.required.concat(parent.required);

  addInhertiedProperties(model, parent.id, models);
}

function validateModel(candidate, model, models){
  if(candidate === null || typeof candidate !== 'object'){
    return new ValidationErrors(candidate, model);
  }

  models = models || {};

  model = clone(model);
  if(!model.required) model.required = [];
  addInhertiedProperties(model, model.id, models);

  var errors = [];

  model.required.forEach(function(propertyName){
    if (candidate[propertyName] !== undefined) return;

    var property = model.properties[propertyName];
    var error = new MissingValueError();
    errors.push(new ValidationError(propertyName, property, error));
  });

  Object.keys(candidate).forEach(function(propertyName){
    var property = model.properties[propertyName];
    
    if(property === undefined) return;

    var error = validate.dataType(candidate[propertyName], property, models);
    if(error){
      errors.push(new ValidationError(propertyName, property, error));
    }
  });
  
  if(errors.length){
    return new ValidationErrors(candidate, model.id, model, errors);
  }
}
module.exports = validateModel;
},{"./errorTypes":1,"./index":2}],6:[function(_dereq_,module,exports){
'use strict';

var errorTypes = _dereq_('./errorTypes'),
  ValidationError = errorTypes.ValidationError,
  ValidationErrors = errorTypes.ValidationErrors,
  MissingValueError = errorTypes.MissingValueError,
  validate = _dereq_('./index');

function validateOperation(candidate, operation, models){
  var errors = [];

  var presentParams = (operation.parameters || []).filter(function(param){
    if (candidate[param.name] !== undefined) return true;

    if (param.required) {
      var error = new MissingValueError();
      errors.push(new ValidationError(param.name, param, error));
    }

    return false;
  });

  presentParams.forEach(function(param){
    var error = validate.dataType(candidate[param.name], param, models);
    if(error){
      errors.push(new ValidationError(param.name, param, error));
    }
  });

  if(errors.length){
    return new ValidationErrors(candidate, operation.nickname, operation, errors);
  }
}
module.exports = validateOperation;

},{"./errorTypes":1,"./index":2}],7:[function(_dereq_,module,exports){
'use strict';

var errorTypes = _dereq_('./errorTypes');

function validateInteger(candidate, dataType){
  var error = validateNumber(candidate, dataType);
  if(error) return error;

  if(candidate % 1){
    return new errorTypes.NotAnIntegerError(candidate);
  }
}
exports.validateInteger = validateInteger;

function validateNumber(candidate, dataType){
  if(!(typeof candidate === 'number' || candidate instanceof Number) || isNaN(candidate)){
    return new errorTypes.NotANumberError(candidate, typeof candidate);
  }
  
  if((dataType.minimum !== undefined) && candidate < parseInt(dataType.minimum, 10)){
    return new errorTypes.NumberTooSmallError(candidate, dataType.minimum);
  }
  
  if((dataType.maximum !== undefined) && candidate > parseInt(dataType.maximum, 10)){
    return new errorTypes.NumberTooLargeError(candidate, dataType.maximum);
  }
}
exports.validateNumber = validateNumber;

function validateBoolean(candidate){
  if(!(typeof candidate === 'boolean' || candidate instanceof Boolean)){
    return new errorTypes.NotABooleanError(candidate, typeof candidate);
  }
}
exports.validateBoolean = validateBoolean;


function validateVoid(candidate){
  if(candidate != null){
    return new errorTypes.NotVoidError(candidate, typeof candidate);
  }
}
exports.validateVoid = validateVoid;

function validateFile(){
  // Not sure how to check this, since anything could qualify as 'File'.
}
exports.validateFile = validateFile;

function validateString(candidate, dataType){
  if(typeof candidate !== 'string' && !(candidate instanceof String)){
    return new errorTypes.NotAStringError(candidate, typeof candidate);
  }

  if('enum' in dataType){
    if(dataType.enum.indexOf(candidate) === -1) {
      return new errorTypes.StringNotInEnumError(candidate, dataType.enum);
    }
  }
}
exports.validateString = validateString;
},{"./errorTypes":1}],8:[function(_dereq_,module,exports){
'use strict';

var MissingAuthorizationError = _dereq_('./errorTypes').MissingAuthorizationError;

module.exports = function applyAuthData(operation, authData, request){
  var authMap = operation.authorizations;
  if(!authMap) authMap = operation.apiObject.apiDeclaration.authorizations;
  if(!authMap) return;

  var authNames = Object.keys(authMap).filter(function(authName){
    // Currently unable to handle oauth2
    return authMap[authName].type !== 'oauth2';
  });

  if(authNames.length === 0) return;

  if(authNames.length === 1){
    var authName = authNames[0];
    var auth = authMap[authName];

    if(!authData) throw new MissingAuthorizationError(authName, auth);

    // Unpack nested authData for single auth ops: { apiKey: '123' } -> '123'
    if(authData[authName]) authData = authData[authName];

    if(auth.type === 'apiKey'){
      applyApiKey(auth, authName, authData, request);
    } else if(auth.type === 'basicAuth') {
      applyBasicAuth(auth, authName, authData.username, authData.password, request);
    }
  } else {
    var hasAuth = authNames.some(function(authName){
      var auth = authMap[authName];
      var data = authData[authName];

      if(!data) return false;

      if(auth.type === 'apiKey'){
        applyApiKey(auth, authName, data, request);
      } else if(auth.type === 'basicAuth'){
        applyBasicAuth(auth, authName, data.username, data.password, request);
      }

      return true;
    });

    if(!hasAuth){
      throw new MissingAuthorizationError(authNames.join(', '), authMap);
    }
  }
};

function applyApiKey(auth, authName, apiKey, request){
  if(!apiKey) throw new MissingAuthorizationError(authName, auth);
  
  if(auth.passAs === 'header'){
    request.headers[auth.keyname] = apiKey;
  } else if(auth.passAs === 'query'){
    var url = request.url;
    var queryParam = auth.keyname + '=' + encodeURIComponent(apiKey);
    if(url.indexOf('?') === -1){
      url += '?' + queryParam;
    } else {
      url = url.replace('?', '?' + queryParam + '&');
    }

    request.url = url;
  }
}

function applyBasicAuth(auth, authName, username, password, request){
  if(!username || !password) throw new MissingAuthorizationError(authName, auth);
  
  var url = request.url;
  
  // Only add basic auth once
  if(url.indexOf('@') === -1){
    url = url.replace('://', '://' + username + ':' + password + '@');
  }

  request.url = url;
}
},{"./errorTypes":11}],9:[function(_dereq_,module,exports){
'use strict';

var createOperationHandler = _dereq_('./createOperationHandler');

function createClient(schema, requestHandler){
  var api = {},
    apiAuthData,
    authMethodName = 'auth';

  schema = processSchema(schema);

  // If the 'auth' key is used for any resource or operation, we'll use
  // 'authorization' instead for the auth methods
  var authIsInUse = schema.apis.some(function(resourceObject){
    return resourceObject.apiDeclaration.apis.some(function(apiObject){
      var resourceApiName = getApiName(apiObject.apiDeclaration.resourcePath || apiObject.path);
      if(resourceApiName === 'auth') return true;
      return (apiObject.operations || []).some(function(operation){
        return operation.nickname === 'auth';
      });
    });
  });

  if(authIsInUse) authMethodName = 'authorization';

  api[authMethodName] = function(){
    apiAuthData = processApiAuthArgs(arguments);
  };

  schema.apis.forEach(function(resourceObject){
    var resourceName,
      resourceApi,
      resourceAuthData;

    if(resourceObject.apiDeclaration.resourcePath){
      resourceName = getApiName(resourceObject.apiDeclaration.resourcePath);
      resourceApi = api[resourceName] = {};
      resourceApi[authMethodName] = function(){
        resourceAuthData = processApiAuthArgs(arguments);
      };
    }

    (resourceObject.apiDeclaration.apis || []).forEach(function(apiObject){
      var apiObjectName = resourceName,
        apiObjectApi = resourceApi,
        apiObjectAuthData;

      if(!apiObjectName){
        apiObjectName = getApiName(apiObject.path);
        apiObjectApi = api[apiObjectName] = {};
        apiObjectApi[authMethodName] = function(){
          apiObjectAuthData = processApiAuthArgs(arguments);
        };
      }

      (apiObject.operations || []).forEach(function(operation){
        var operationHandlerName = operation.nickname,
          operationAuthData,
          operationHandler;

        function getAuthData(){
          return operationAuthData || apiObjectAuthData || resourceAuthData || apiAuthData;
        }

        operationHandler = createOperationHandler(operation, getAuthData, requestHandler);

        operationHandler[authMethodName] = function(){
          operationAuthData = processApiAuthArgs(arguments);
        };

        apiObjectApi[operationHandlerName] = operationHandler;
      });
    });
  });

  return api;
}
module.exports = createClient;

function processApiAuthArgs(args){
  // for basic auth, allow calls with two args (username, password)
  if(typeof args[0] === 'string' && typeof args[1] === 'string') {
    return {
      username: args[0],
      password: args[1]
    };
  } else {
    return args[0];
  }
}

// Helpper method which assings back pointer to object parents and returns
// the api objects within the given schema.
function processSchema(schema){
  schema.apis.forEach(function(resourceObject){
    resourceObject.resourceListing = schema;

    (resourceObject.apiDeclaration.apis || []).forEach(function(apiObject){
      apiObject.resourceObject = resourceObject;
      apiObject.apiDeclaration = resourceObject.apiDeclaration;

      (apiObject.operations || []).forEach(function(operation){
        operation.apiObject = apiObject;

        (operation.parameters || []).forEach(function(parameter){
          parameter.operation = operation;
        });
      });
    });
  });

  return schema;
}

// Takes a path and returns a JavaScript-friendly variable name
function getApiName(name){
  // String non-word characters
  name = name.replace(/\W/g, '/');

  // Turn paths which look/like/this to lookLikeThis
  name = name.replace(/(\w)\/(\w)/g, function(match, p1, p2){
    return p1 + p2.toUpperCase();
  });

  name = name.replace(/\//g, '');

  return name;
}

},{"./createOperationHandler":10}],10:[function(_dereq_,module,exports){
'use strict';

var getRequestHeaders = _dereq_('./getRequestHeaders'),
  getRequestUrl = _dereq_('./getRequestUrl'),
  getRequestBody = _dereq_('./getRequestBody'),
  applyAuthData = _dereq_('./applyAuthData'),
  errorTypes = _dereq_('./errorTypes'),
  swaggerValidate = _dereq_('swagger-validate');

var allErrorTypes = {};
Object.keys(swaggerValidate.errors).forEach(function(errorName){
  allErrorTypes[errorName] = swaggerValidate.errors[errorName];
});

Object.keys(errorTypes).forEach(function(errorName){
  allErrorTypes[errorName] = errorTypes[errorName];
});

function createOperationHandler(operation, getAuthData, requestHandler){
  function Request(data, options){
    this.method = operation.method;
    this.operation = operation;
    this.errorTypes = allErrorTypes;
    this.data = data;
    this.options = options;
  }

  var operationHandler = function(data, options){
    var error,
      request;

    options = options || {};

    if(data == null) data = {};

    // if a function is passed in as options, assume it's a callback function
    // for convenience
    if(typeof options === 'function'){
      options.callback = options;
    }

    try{
      data = prune(data);
      data = singleParamConvenienceProcessor(operation, data);
      data = removeUnknownParams(operation, data);

      error = swaggerValidate.operation(data, operation, operation.apiObject.apiDeclaration.models);

      request = new Request(data, options);

      // If we know there is an error, don't attempt to craft the request params.
      // The request param generators assume valid data to work properly.
      if(!error){
        request.url = getRequestUrl(operation, data);
        request.headers = getRequestHeaders(operation, data, options);
        request.body = getRequestBody(operation, data, request.headers);

        applyAuthData(operation, getAuthData(), request);
      }
    } catch(e){
      error = e;
    }

    return requestHandler(error, request);
  };

  // Useful for instanceof checks
  operationHandler.Request = Request;
  operationHandler.errorTypes = allErrorTypes;

  // Useful for reflection
  operationHandler.operation = operation;

  // Can be used to preemptively validate without action
  operationHandler.validate = function(data){
    return swaggerValidate.operation(data, operation, operation.apiObject.apiDeclaration.models);
  };

  return operationHandler;
}
module.exports = createOperationHandler;

function noop(){}
createOperationHandler.logger = {
  debug: noop,
  info: noop,
  warn: noop,
  error: noop
};

// Stringify and parse the data to clean up undefined, and non-scalar properties
function prune(data){
  return JSON.parse(JSON.stringify(data));
}

// Enables data to be passed directly for single param operations.
function singleParamConvenienceProcessor(operation, data){
  // If there are more than one params, bail
  var requiredParams = (operation.parameters || []).filter(function(param){
    return param.required;
  });

  // If there are more than one required params, or if there is no required param
  // and there are many optional params, bail
  if(requiredParams.length > 1) return data;

  if(requiredParams.length !== 1 && (operation.parameters || []).length !== 1) return data;

  var param = requiredParams[0] || operation.parameters[0];

  // If the param is already defined explicitly, bail
  if(typeof data === 'object' &&  data[param.name] !== undefined) return data;

  var models = operation.apiObject.apiDeclaration.models;

  // If the data passed is is not valid for the param data type, bail
  var error;

  try {
    error = swaggerValidate.dataType(data, param, models);
  } catch(e){
    return data;
  }

  // If the data passed is a valid param data type, bail
  if(!error){
    var wrapper = {};
    wrapper[param.name] = data;
    return wrapper;
  } else {
    return data;
  }
}


function removeUnknownParams(operation, data){
  if(!data || typeof data !== 'object') return data;

  var paramNames = {};
  (operation.parameters || []).forEach(function(param){
    paramNames[param.name] = true;
  });

  var unknownKeys = Object.keys(data).filter(function(key){
    return !(key in paramNames);
  });

  createOperationHandler.logger.warn('Unknown parameters removed from request:',
    unknownKeys.join(', '));

  unknownKeys.forEach(function(key){
    delete data[key];
  });

  return data;
}

},{"./applyAuthData":8,"./errorTypes":11,"./getRequestBody":12,"./getRequestHeaders":13,"./getRequestUrl":14,"swagger-validate":2}],11:[function(_dereq_,module,exports){
'use strict';

function InvalidRequestError(message){
  this.name = 'InvalidRequestError';
  this.message = message || 'Invalid request';
}
InvalidRequestError.prototype = Object.create(Error.prototype);
InvalidRequestError.prototype.constructor = InvalidRequestError;

exports.InvalidRequestError = InvalidRequestError;


function MissingAuthorizationError(authName, auth){
  this.name = 'MissingAuthorizationError';
  this.message = 'No data found for authorization: ' + authName;
  this.authorization = auth;
}
MissingAuthorizationError.prototype = Object.create(InvalidRequestError.prototype);
MissingAuthorizationError.prototype.constructor = MissingAuthorizationError;

exports.MissingAuthorizationError = MissingAuthorizationError;


function MissingPathParamsError(pathParams){
  this.name = 'MissingPathParamsError';
  this.message = 'Missing the following required path parameters: ' + pathParams.join('');
}
MissingPathParamsError.prototype = Object.create(InvalidRequestError.prototype);
MissingPathParamsError.prototype.constructor = MissingPathParamsError;

exports.MissingPathParamsError = MissingPathParamsError;


function ContentTypeNotSupportedError(contentType, operation){
  var apiDeclaration = operation.apiObject.apiDeclaration;
  var consumes = operation.consumes || apiDeclaration.consumes || [];

  this.name = 'ContentTypeNotSupportedError';
  this.message = 'Operation [' + operation.nickname + '] does not accept ' + contentType + '. It supports: ' + 
    consumes.join(', ');
}
ContentTypeNotSupportedError.prototype = Object.create(InvalidRequestError.prototype);
ContentTypeNotSupportedError.prototype.constructor = ContentTypeNotSupportedError;

exports.ContentTypeNotSupportedError = ContentTypeNotSupportedError;


function AcceptsNotSupportedError(accepts, operation){
  var apiDeclaration = operation.apiObject.apiDeclaration;
  var produces = operation.produces || apiDeclaration.produces || [];

  this.name = 'AcceptsNotSupportedError';
  this.message = 'Operation [' + operation.nickname + '] does not produce ' + accepts + '. It supports: ' + 
    produces.join(', ');
}
AcceptsNotSupportedError.prototype = Object.create(InvalidRequestError.prototype);
AcceptsNotSupportedError.prototype.constructor = AcceptsNotSupportedError;

exports.AcceptsNotSupportedError = AcceptsNotSupportedError;


function OperationValidationError(operation, errors){
  this.name = 'OperationValidationError';
  this.message = operation.nickname + ' failed validation: \n\t' + errors.join('\n\t');
}
OperationValidationError.prototype = Object.create(InvalidRequestError.prototype);
OperationValidationError.prototype.constructor = OperationValidationError;

exports.OperationValidationError = OperationValidationError;


function ParameterValidationError(parameter, errors){
  this.name = 'ParameterValidationError';
  this.message = parameter.name + ' failed validation: \n\t' + errors.join('\n\t');
}
ParameterValidationError.prototype = Object.create(InvalidRequestError.prototype);
ParameterValidationError.prototype.constructor = ParameterValidationError;

exports.ParameterValidationError = ParameterValidationError;


function DataTypeValidationError(message){
  this.name = 'DataTypeValidationError';
  this.message = message || 'Invalid data type';
}
DataTypeValidationError.prototype = Object.create(Error.prototype);
DataTypeValidationError.prototype.constructor = DataTypeValidationError;

exports.DataTypeValidationError = DataTypeValidationError;
},{}],12:[function(_dereq_,module,exports){
'use strict';

module.exports = function getRequestBody(operation, data, headers){
  var body = (operation.parameters || []).filter(function(param){
    return param.paramType === 'body' && data[param.name] != null;
  }).map(function(param){
    return data[param.name];
  })[0];

  if(!(headers &&  headers['Content-Type'])) return body;

  var contentType = headers['Content-Type'];
  var presentFormParams = (operation.parameters || []).filter(function(param){
    return param.paramType === 'form' && data[param.name] != null;
  });

  if(contentType.indexOf('application/x-www-form-urlencoded') !== -1){
    body = presentFormParams.map(function(param){
      var key = param.name,
        value = data[key];
      return encodeURIComponent(key) + '=' + encodeURIComponent(value);
    }).join('&');
  } else if(contentType.indexOf('multipart/form-data') !== -1){
    var randomness = Math.random().toString(16).substr(2);
    var boundary = 'SwaggerBoundary' + randomness;

    body = presentFormParams.map(function(param){
      var key = param.name,
        value = data[key],
        result = '--' + boundary;

      result += '\nContent-Disposition: form-data; name="' + key + '"';

      if(value.contentType){
        if(value.name){
          result += '; filename="' + value.name + '"';
        }

        result += '\nContent-Type: ' + value.contentType;
      }

      if(value.contentTransferEncoding){
        result += '\nContent-Transfer-Encoding: ' + value.contentTransferEncoding;
      }

      if(value.body){
        result += '\n\n' + value.body;
      } else {
        result += '\n\n' + value;
      }

      return result;
    }).join('\n');

    body += '\n--' + boundary + '--\n';

    headers['Content-Type'] = contentType.replace(
      'multipart/form-data',
      'multipart/form-data; boundary=' + boundary
    );
  } else if(contentType.indexOf('application/json') !== -1){
    if(typeof body !== 'string'){
      body = JSON.stringify(body);
    }
  }

  return body;
};

},{}],13:[function(_dereq_,module,exports){
'use strict';

var errorTypes = _dereq_('./errorTypes'),
  ContentTypeNotSupportedError = errorTypes.ContentTypeNotSupportedError,
  AcceptsNotSupportedError = errorTypes.AcceptsNotSupportedError;

var DEFAULT_ACCEPT = 'application/json';
module.exports = function getRequestHeaders(operation, data, options){
  data = data || {};
  options = options || {};

  var headers = {};

  (operation.parameters || []).forEach(function(param){
    if(param.paramType === 'header' && data[param.name] != null){
      headers[param.name] = data[param.name];
    }
  });

  // Passed headers
  if(options.headers){
    Object.keys(options.headers).forEach(function(key){
      headers[key] = options.headers[key];
    });
  }

  // Content-Type
  var contentType = options.contentType || getContentType(operation, data, options);
  if(contentType) {
    if(hasAccept(operation, contentType)){
      headers['Content-Type'] = contentType;
    } else {
      throw new ContentTypeNotSupportedError(contentType, operation);
    }
  }

  // Accept
  var accept = options.accept || DEFAULT_ACCEPT;
  if(accept){
    if(hasContentType(operation, accept)){
      headers.Accept = accept;
    } else {
      throw new AcceptsNotSupportedError(accept, operation);
    }
  }

  return headers;
};

function getContentType(operation, data){
  var hasBody = (operation.parameters || []).some(function(param){
    return param.paramType === 'body' && data[param.name] !== undefined;
  });

  if (hasBody){
    return 'application/json';
  } else {
    var hasFormParams = (operation.parameters || []).some(function(param){
      return param.paramType === 'form' && data[param.name] !== undefined;
    });

    var hasFileParam = hasFormParams &&
      (operation.parameters || []).some(function(param){
        return param.type === 'File' && data[param.name] !== undefined;
      });

    if(hasFileParam) return 'multipart/form-data';
    else if(hasFormParams) return 'application/x-www-form-urlencoded';
  }
}

// Accepts is an optional field in the spec, but must be enforced when present
function hasAccept(operation, contentType){
  var apiDeclaration = operation.apiObject.apiDeclaration;
  var accepts = operation.consumes || apiDeclaration.consumes;

  if(accepts && accepts.length){
    return accepts.indexOf(contentType) !== -1;
  } else {
    return true;
  }
}
exports.hasAccept = hasAccept;

// Content-Type (produces) is an optional field in the spec, but must be enforced when present
function hasContentType(operation, contentType){
  var apiDeclaration = operation.apiObject.apiDeclaration,
    contentTypes = operation.produces || apiDeclaration.produces;

  if(contentTypes && contentTypes.length){
    return contentTypes.indexOf(contentType) !== -1;
  } else {
    return true;
  }
}
exports.hasContentType = hasContentType;

},{"./errorTypes":11}],14:[function(_dereq_,module,exports){
'use strict';

var errorTypes = _dereq_('./errorTypes'),
  MissingPathParamsError = errorTypes.MissingPathParamsError;

module.exports = function getRequestUrl(operation, data){
  var url = getUrlTemplate(operation);

  url = applyPathParams(url, operation, data);

  if(!data) return url;

  var queryParams = (operation.parameters || []).filter(function(param){
    return param.paramType === 'query' && data[param.name] !== undefined;
  }).map(function(param){
    var key = param.name;
    return encodeURIComponent(key) + '=' + encodeURIComponent(data[key]);
  }).join('&');

  if(queryParams) url += '?' + queryParams;

  return url;
};

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

},{"./errorTypes":11}]},{},[9])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21pY2hhZWwvc3JjL2dpdGh1Yi9mb3Jrcy9zd2FnZ2VyLWNsaWVudC1nZW5lcmF0b3Ivbm9kZV9tb2R1bGVzL2JvaWxlcnBsYXRlLWd1bHAvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsIi9ob21lL21pY2hhZWwvc3JjL2dpdGh1Yi9mb3Jrcy9zd2FnZ2VyLWNsaWVudC1nZW5lcmF0b3Ivbm9kZV9tb2R1bGVzL3N3YWdnZXItdmFsaWRhdGUvc3JjL2Vycm9yVHlwZXMuanMiLCIvaG9tZS9taWNoYWVsL3NyYy9naXRodWIvZm9ya3Mvc3dhZ2dlci1jbGllbnQtZ2VuZXJhdG9yL25vZGVfbW9kdWxlcy9zd2FnZ2VyLXZhbGlkYXRlL3NyYy9pbmRleC5qcyIsIi9ob21lL21pY2hhZWwvc3JjL2dpdGh1Yi9mb3Jrcy9zd2FnZ2VyLWNsaWVudC1nZW5lcmF0b3Ivbm9kZV9tb2R1bGVzL3N3YWdnZXItdmFsaWRhdGUvc3JjL3ZhbGlkYXRlQXJyYXkuanMiLCIvaG9tZS9taWNoYWVsL3NyYy9naXRodWIvZm9ya3Mvc3dhZ2dlci1jbGllbnQtZ2VuZXJhdG9yL25vZGVfbW9kdWxlcy9zd2FnZ2VyLXZhbGlkYXRlL3NyYy92YWxpZGF0ZURhdGFUeXBlLmpzIiwiL2hvbWUvbWljaGFlbC9zcmMvZ2l0aHViL2ZvcmtzL3N3YWdnZXItY2xpZW50LWdlbmVyYXRvci9ub2RlX21vZHVsZXMvc3dhZ2dlci12YWxpZGF0ZS9zcmMvdmFsaWRhdGVNb2RlbC5qcyIsIi9ob21lL21pY2hhZWwvc3JjL2dpdGh1Yi9mb3Jrcy9zd2FnZ2VyLWNsaWVudC1nZW5lcmF0b3Ivbm9kZV9tb2R1bGVzL3N3YWdnZXItdmFsaWRhdGUvc3JjL3ZhbGlkYXRlT3BlcmF0aW9uLmpzIiwiL2hvbWUvbWljaGFlbC9zcmMvZ2l0aHViL2ZvcmtzL3N3YWdnZXItY2xpZW50LWdlbmVyYXRvci9ub2RlX21vZHVsZXMvc3dhZ2dlci12YWxpZGF0ZS9zcmMvdmFsaWRhdGVQcmltaXRpdmVUeXBlcy5qcyIsIi9ob21lL21pY2hhZWwvc3JjL2dpdGh1Yi9mb3Jrcy9zd2FnZ2VyLWNsaWVudC1nZW5lcmF0b3Ivc3JjL2FwcGx5QXV0aERhdGEuanMiLCIvaG9tZS9taWNoYWVsL3NyYy9naXRodWIvZm9ya3Mvc3dhZ2dlci1jbGllbnQtZ2VuZXJhdG9yL3NyYy9jcmVhdGVDbGllbnQuanMiLCIvaG9tZS9taWNoYWVsL3NyYy9naXRodWIvZm9ya3Mvc3dhZ2dlci1jbGllbnQtZ2VuZXJhdG9yL3NyYy9jcmVhdGVPcGVyYXRpb25IYW5kbGVyLmpzIiwiL2hvbWUvbWljaGFlbC9zcmMvZ2l0aHViL2ZvcmtzL3N3YWdnZXItY2xpZW50LWdlbmVyYXRvci9zcmMvZXJyb3JUeXBlcy5qcyIsIi9ob21lL21pY2hhZWwvc3JjL2dpdGh1Yi9mb3Jrcy9zd2FnZ2VyLWNsaWVudC1nZW5lcmF0b3Ivc3JjL2dldFJlcXVlc3RCb2R5LmpzIiwiL2hvbWUvbWljaGFlbC9zcmMvZ2l0aHViL2ZvcmtzL3N3YWdnZXItY2xpZW50LWdlbmVyYXRvci9zcmMvZ2V0UmVxdWVzdEhlYWRlcnMuanMiLCIvaG9tZS9taWNoYWVsL3NyYy9naXRodWIvZm9ya3Mvc3dhZ2dlci1jbGllbnQtZ2VuZXJhdG9yL3NyYy9nZXRSZXF1ZXN0VXJsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaElBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKX12YXIgZj1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwoZi5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxmLGYuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBEYXRhVHlwZVZhbGlkYXRpb25FcnJvcihtZXNzYWdlKXtcbiAgdGhpcy5uYW1lID0gJ0RhdGFUeXBlVmFsaWRhdGlvbkVycm9yJztcbiAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZSB8fCAnSW52YWxpZCBkYXRhIHR5cGUnO1xufVxuRGF0YVR5cGVWYWxpZGF0aW9uRXJyb3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShFcnJvci5wcm90b3R5cGUpO1xuRGF0YVR5cGVWYWxpZGF0aW9uRXJyb3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gRGF0YVR5cGVWYWxpZGF0aW9uRXJyb3I7XG5leHBvcnRzLkRhdGFUeXBlVmFsaWRhdGlvbkVycm9yID0gRGF0YVR5cGVWYWxpZGF0aW9uRXJyb3I7XG5cbmZ1bmN0aW9uIE5vdEFuSW50ZWdlckVycm9yKHZhbHVlKXtcbiAgdGhpcy5uYW1lID0gJ05vdEFuSW50ZWdlckVycm9yJztcbiAgdGhpcy5tZXNzYWdlID0gJ1wiJyArIHZhbHVlICsgJ1wiIGlzIG5vdCBhbiBpbnRlZ2VyJztcbiAgdGhpcy52YWx1ZSA9IHZhbHVlO1xufVxuTm90QW5JbnRlZ2VyRXJyb3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShEYXRhVHlwZVZhbGlkYXRpb25FcnJvci5wcm90b3R5cGUpO1xuTm90QW5JbnRlZ2VyRXJyb3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gTm90QW5JbnRlZ2VyRXJyb3I7XG5leHBvcnRzLk5vdEFuSW50ZWdlckVycm9yID0gTm90QW5JbnRlZ2VyRXJyb3I7XG5cbmZ1bmN0aW9uIE5vdEFOdW1iZXJFcnJvcih2YWx1ZSwgYWN0dWFsVHlwZSl7XG4gIHRoaXMubmFtZSA9ICdOb3RBTnVtYmVyRXJyb3InO1xuICB0aGlzLm1lc3NhZ2UgPSAnXCInICsgdmFsdWUgKyAnXCIgaXMgbm90IGEgbnVtYmVyJztcbiAgaWYoYWN0dWFsVHlwZSkgdGhpcy5tZXNzYWdlICs9ICcgKGdvdCBhICcgKyBhY3R1YWxUeXBlICsgJyBpbnN0ZWFkKSc7XG5cbiAgdGhpcy52YWx1ZSA9IHZhbHVlO1xufVxuTm90QU51bWJlckVycm9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRGF0YVR5cGVWYWxpZGF0aW9uRXJyb3IucHJvdG90eXBlKTtcbk5vdEFOdW1iZXJFcnJvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBOb3RBTnVtYmVyRXJyb3I7XG5leHBvcnRzLk5vdEFOdW1iZXJFcnJvciA9IE5vdEFOdW1iZXJFcnJvcjtcblxuZnVuY3Rpb24gTnVtYmVyVG9vTGFyZ2VFcnJvcih2YWx1ZSwgbWF4KXtcbiAgdGhpcy5uYW1lID0gJ051bWJlclRvb0xhcmdlRXJyb3InO1xuICB0aGlzLm1lc3NhZ2UgPSAnXCInICsgdmFsdWUgKyAnXCIgaXMgYWJvdmUgdGhlIG1heGltdW0gb2YgJyArIG1heC50b1N0cmluZygpO1xuICB0aGlzLnZhbHVlID0gdmFsdWU7XG59XG5OdW1iZXJUb29MYXJnZUVycm9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRGF0YVR5cGVWYWxpZGF0aW9uRXJyb3IucHJvdG90eXBlKTtcbk51bWJlclRvb0xhcmdlRXJyb3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gTnVtYmVyVG9vTGFyZ2VFcnJvcjtcbmV4cG9ydHMuTnVtYmVyVG9vTGFyZ2VFcnJvciA9IE51bWJlclRvb0xhcmdlRXJyb3I7XG5cbmZ1bmN0aW9uIE51bWJlclRvb1NtYWxsRXJyb3IodmFsdWUsIG1heCl7XG4gIHRoaXMubmFtZSA9ICdOdW1iZXJUb29TbWFsbEVycm9yJztcbiAgdGhpcy5tZXNzYWdlID0gJ1wiJyArIHZhbHVlICsgJ1wiIGlzIGFib3ZlIHRoZSBtYXhpbXVtIG9mICcgKyBtYXgudG9TdHJpbmcoKTtcbiAgdGhpcy52YWx1ZSA9IHZhbHVlO1xufVxuTnVtYmVyVG9vU21hbGxFcnJvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKERhdGFUeXBlVmFsaWRhdGlvbkVycm9yLnByb3RvdHlwZSk7XG5OdW1iZXJUb29TbWFsbEVycm9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IE51bWJlclRvb1NtYWxsRXJyb3I7XG5leHBvcnRzLk51bWJlclRvb1NtYWxsRXJyb3IgPSBOdW1iZXJUb29TbWFsbEVycm9yO1xuXG5mdW5jdGlvbiBOb3RBQm9vbGVhbkVycm9yKHZhbHVlLCBhY3R1YWxUeXBlKXtcbiAgdGhpcy5uYW1lID0gJ05vdEFCb29sZWFuRXJyb3InO1xuICB0aGlzLm1lc3NhZ2UgPSAnXCInICsgdmFsdWUgKyAnXCIgaXMgbm90IGEgYm9vbGVhbic7XG4gIGlmKGFjdHVhbFR5cGUpIHRoaXMubWVzc2FnZSArPSAnIChnb3QgYSAnICsgYWN0dWFsVHlwZSArICcgaW5zdGVhZCknO1xuXG4gIHRoaXMudmFsdWUgPSB2YWx1ZTtcbn1cbk5vdEFCb29sZWFuRXJyb3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShEYXRhVHlwZVZhbGlkYXRpb25FcnJvci5wcm90b3R5cGUpO1xuTm90QUJvb2xlYW5FcnJvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBOb3RBQm9vbGVhbkVycm9yO1xuZXhwb3J0cy5Ob3RBQm9vbGVhbkVycm9yID0gTm90QUJvb2xlYW5FcnJvcjtcblxuZnVuY3Rpb24gTm90QW5BcnJheUVycm9yKHZhbHVlLCBhY3R1YWxUeXBlKXtcbiAgdGhpcy5uYW1lID0gJ05vdEFuQXJyYXlFcnJvcic7XG4gIHRoaXMubWVzc2FnZSA9ICdcIicgKyB2YWx1ZSArICdcIiBpcyBub3QgYW4gYXJyYXknO1xuICBpZihhY3R1YWxUeXBlKSB0aGlzLm1lc3NhZ2UgKz0gJyAoZ290IGEgJyArIGFjdHVhbFR5cGUgKyAnIGluc3RlYWQpJztcblxuICB0aGlzLnZhbHVlID0gdmFsdWU7XG59XG5Ob3RBbkFycmF5RXJyb3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShEYXRhVHlwZVZhbGlkYXRpb25FcnJvci5wcm90b3R5cGUpO1xuTm90QW5BcnJheUVycm9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IE5vdEFuQXJyYXlFcnJvcjtcbmV4cG9ydHMuTm90QW5BcnJheUVycm9yID0gTm90QW5BcnJheUVycm9yO1xuXG5mdW5jdGlvbiBEdXBsaWNhdGVJblNldEVycm9yKGFyciwgZHVwZXMpe1xuICB0aGlzLm5hbWUgPSAnRHVwbGljYXRlSW5TZXRFcnJvcic7XG4gIHRoaXMubWVzc2FnZSA9ICdEdXBsaWNhdGVzIChcIicgKyBkdXBlcy5qb2luKCdcIiwgXCInKSArICdcIikgZm91bmQgaW4gc2V0OiBbXCInICsgYXJyLmpvaW4oJ1wiLCBcIicpICsgJ1wiJztcbiAgdGhpcy5kdXBlcyA9IGR1cGVzO1xuICB0aGlzLnZhbHVlID0gYXJyO1xufVxuRHVwbGljYXRlSW5TZXRFcnJvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKERhdGFUeXBlVmFsaWRhdGlvbkVycm9yLnByb3RvdHlwZSk7XG5EdXBsaWNhdGVJblNldEVycm9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IER1cGxpY2F0ZUluU2V0RXJyb3I7XG5leHBvcnRzLkR1cGxpY2F0ZUluU2V0RXJyb3IgPSBEdXBsaWNhdGVJblNldEVycm9yO1xuXG5mdW5jdGlvbiBOb3RWb2lkRXJyb3IodmFsdWUsIGFjdHVhbFR5cGUpe1xuICB0aGlzLm5hbWUgPSAnTm90Vm9pZEVycm9yJztcbiAgdGhpcy5tZXNzYWdlID0gJ1wiJyArIHZhbHVlICsgJ1wiIGlzIG5vdCBudWxsIG9yIHVuZGVmaW5lZCc7XG4gIGlmKGFjdHVhbFR5cGUpIHRoaXMubWVzc2FnZSArPSAnIChnb3QgYSAnICsgYWN0dWFsVHlwZSArICcgaW5zdGVhZCknO1xuXG4gIHRoaXMudmFsdWUgPSB2YWx1ZTtcbn1cbk5vdFZvaWRFcnJvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKERhdGFUeXBlVmFsaWRhdGlvbkVycm9yLnByb3RvdHlwZSk7XG5Ob3RWb2lkRXJyb3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gTm90Vm9pZEVycm9yO1xuZXhwb3J0cy5Ob3RWb2lkRXJyb3IgPSBOb3RWb2lkRXJyb3I7XG5cbmZ1bmN0aW9uIE5vdEFTdHJpbmdFcnJvcih2YWx1ZSwgYWN0dWFsVHlwZSl7XG4gIHRoaXMubmFtZSA9ICdOb3RBU3RyaW5nRXJyb3InO1xuICB0aGlzLm1lc3NhZ2UgPSAnXCInICsgdmFsdWUgKyAnXCIgaXMgbm90IGEgc3RyaW5nJztcbiAgaWYoYWN0dWFsVHlwZSkgdGhpcy5tZXNzYWdlICs9ICcgKGdvdCBhICcgKyBhY3R1YWxUeXBlICsgJyBpbnN0ZWFkKSc7XG5cbiAgdGhpcy52YWx1ZSA9IHZhbHVlO1xufVxuTm90QVN0cmluZ0Vycm9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRGF0YVR5cGVWYWxpZGF0aW9uRXJyb3IucHJvdG90eXBlKTtcbk5vdEFTdHJpbmdFcnJvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBOb3RBU3RyaW5nRXJyb3I7XG5leHBvcnRzLk5vdEFTdHJpbmdFcnJvciA9IE5vdEFTdHJpbmdFcnJvcjtcblxuZnVuY3Rpb24gU3RyaW5nTm90SW5FbnVtRXJyb3IodmFsdWUsIGFjY2VwdGFibGVWYWx1ZXMpe1xuICB0aGlzLm5hbWUgPSAnU3RyaW5nTm90SW5FbnVtRXJyb3InO1xuICB0aGlzLm1lc3NhZ2UgPSAnXCInICsgdmFsdWUgKyAnXCIgaXMgbm90IGFuIGFjY2VwdGFibGUgdmFsdWU6IFwiJyArIGFjY2VwdGFibGVWYWx1ZXMuam9pbignXCIsIFwiJykgKyAnXCInO1xuIFxuICB0aGlzLnZhbHVlID0gdmFsdWU7XG59XG5TdHJpbmdOb3RJbkVudW1FcnJvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKERhdGFUeXBlVmFsaWRhdGlvbkVycm9yLnByb3RvdHlwZSk7XG5TdHJpbmdOb3RJbkVudW1FcnJvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBTdHJpbmdOb3RJbkVudW1FcnJvcjtcbmV4cG9ydHMuU3RyaW5nTm90SW5FbnVtRXJyb3IgPSBTdHJpbmdOb3RJbkVudW1FcnJvcjtcblxuXG5mdW5jdGlvbiBFcnJvcnNJbkFycmF5RWxlbWVudHNFcnJvcihlcnJvcnMpe1xuICB0aGlzLm5hbWUgPSAnRXJyb3JzSW5BcnJheUVsZW1lbnRzRXJyb3InO1xuICB0aGlzLm1lc3NhZ2UgPSAnRXJyb3JzIGluIGFycmF5IGVsZW1lbnRzOlxcblxcdCcgKyBlcnJvcnMuam9pbignLFxcblxcdCcpO1xuICB0aGlzLmVycm9ycyA9IGVycm9ycztcbn1cbkVycm9yc0luQXJyYXlFbGVtZW50c0Vycm9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRGF0YVR5cGVWYWxpZGF0aW9uRXJyb3IucHJvdG90eXBlKTtcbkVycm9yc0luQXJyYXlFbGVtZW50c0Vycm9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEVycm9yc0luQXJyYXlFbGVtZW50c0Vycm9yO1xuZXhwb3J0cy5FcnJvcnNJbkFycmF5RWxlbWVudHNFcnJvciA9IEVycm9yc0luQXJyYXlFbGVtZW50c0Vycm9yO1xuXG5mdW5jdGlvbiBNaXNzaW5nVmFsdWVFcnJvcigpe1xuICB0aGlzLm5hbWUgPSAnTWlzc2luZ1ZhbHVlRXJyb3InO1xuICBcbiAgdGhpcy5tZXNzYWdlID0gJ1RoaXMgdmFsdWUgaXMgcmVxdWlyZWQgYnV0IG1pc3NpbmcnO1xufVxuTWlzc2luZ1ZhbHVlRXJyb3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShEYXRhVHlwZVZhbGlkYXRpb25FcnJvci5wcm90b3R5cGUpO1xuTWlzc2luZ1ZhbHVlRXJyb3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gTWlzc2luZ1ZhbHVlRXJyb3I7XG5leHBvcnRzLk1pc3NpbmdWYWx1ZUVycm9yID0gTWlzc2luZ1ZhbHVlRXJyb3I7XG5cbmZ1bmN0aW9uIFZhbGlkYXRpb25FcnJvcihzcGVjTmFtZSwgc3BlYywgZXJyb3Ipe1xuICB0aGlzLm5hbWUgPSAnVmFsaWRhdGlvbkVycm9yJztcbiAgdGhpcy5zcGVjTmFtZSA9IHNwZWNOYW1lO1xuICB0aGlzLnNwZWMgPSBzcGVjO1xuICB0aGlzLmVycm9yID0gZXJyb3I7XG5cbiAgdGhpcy5tZXNzYWdlID0gc3BlY05hbWUgKyAnIGlzIGludmFsaWQ6ICcgKyBlcnJvci5tZXNzYWdlO1xufVxuVmFsaWRhdGlvbkVycm9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRGF0YVR5cGVWYWxpZGF0aW9uRXJyb3IucHJvdG90eXBlKTtcblZhbGlkYXRpb25FcnJvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBWYWxpZGF0aW9uRXJyb3I7XG5leHBvcnRzLlZhbGlkYXRpb25FcnJvciA9IFZhbGlkYXRpb25FcnJvcjtcblxuZnVuY3Rpb24gVmFsaWRhdGlvbkVycm9ycyh2YWx1ZSwgc3BlY05hbWUsIHNwZWMsIGVycm9ycyl7XG4gIHRoaXMubmFtZSA9ICdWYWxpZGF0aW9uRXJyb3JzJztcblxuICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gIHRoaXMuc3BlY05hbWUgPSBzcGVjTmFtZTtcbiAgdGhpcy5zcGVjID0gc3BlYztcbiAgdGhpcy5lcnJvcnMgPSBlcnJvcnMgfHwgW107XG5cbiAgdGhpcy5tZXNzYWdlID0gc3BlY05hbWUgKyAnIGlzIGludmFsaWQnO1xuXG4gIGlmKHRoaXMuZXJyb3JzLmxlbmd0aCl7XG4gICAgdGhpcy5tZXNzYWdlICs9ICc6XFxuXFx0JyArIHRoaXMuZXJyb3JzLm1hcChmdW5jdGlvbihlKXsgcmV0dXJuIGUubWVzc2FnZTsgfSkuam9pbignXFxuXFx0Jyk7XG4gIH1cbn1cblZhbGlkYXRpb25FcnJvcnMucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShEYXRhVHlwZVZhbGlkYXRpb25FcnJvci5wcm90b3R5cGUpO1xuVmFsaWRhdGlvbkVycm9ycy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBWYWxpZGF0aW9uRXJyb3JzO1xuZXhwb3J0cy5WYWxpZGF0aW9uRXJyb3JzID0gVmFsaWRhdGlvbkVycm9ycztcbiIsImV4cG9ydHMuZGF0YVR5cGUgPSByZXF1aXJlKCcuL3ZhbGlkYXRlRGF0YVR5cGUnKTtcbmV4cG9ydHMubW9kZWwgPSByZXF1aXJlKCcuL3ZhbGlkYXRlTW9kZWwnKTtcbmV4cG9ydHMub3BlcmF0aW9uID0gcmVxdWlyZSgnLi92YWxpZGF0ZU9wZXJhdGlvbicpO1xuZXhwb3J0cy5hcnJheSA9IHJlcXVpcmUoJy4vdmFsaWRhdGVBcnJheScpO1xuZXhwb3J0cy5lcnJvcnMgPSByZXF1aXJlKCcuL2Vycm9yVHlwZXMnKTtcblxudmFyIHByaW1pdGl2ZXMgPSByZXF1aXJlKCcuL3ZhbGlkYXRlUHJpbWl0aXZlVHlwZXMnKTtcbmV4cG9ydHMucHJpbWl0aXZlID0ge1xuICBpbnRlZ2VyOiBwcmltaXRpdmVzLnZhbGlkYXRlSW50ZWdlcixcbiAgbnVtYmVyOiBwcmltaXRpdmVzLnZhbGlkYXRlTnVtYmVyLFxuICBzdHJpbmc6IHByaW1pdGl2ZXMudmFsaWRhdGVTdHJpbmcsXG4gIGJvb2xlYW46IHByaW1pdGl2ZXMudmFsaWRhdGVCb29sZWFuLFxuICB2b2lkOiBwcmltaXRpdmVzLnZhbGlkYXRlVm9pZCxcbiAgZmlsZTogcHJpbWl0aXZlcy52YWxpZGF0ZUZpbGVcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBlcnJvclR5cGVzID0gcmVxdWlyZSgnLi9lcnJvclR5cGVzJyksXG4gIHZhbGlkYXRlID0gcmVxdWlyZSgnLi9pbmRleCcpO1xuXG5mdW5jdGlvbiB2YWxpZGF0ZUFycmF5KGNhbmRpZGF0ZSwgZGF0YVR5cGUsIG1vZGVscyl7XG4gIGlmKCFBcnJheS5pc0FycmF5KGNhbmRpZGF0ZSkpe1xuICAgIHJldHVybiBuZXcgZXJyb3JUeXBlcy5Ob3RBbkFycmF5RXJyb3IoY2FuZGlkYXRlLCB0eXBlb2YgY2FuZGlkYXRlKTtcbiAgfVxuXG4gIHZhciBpdGVtcyA9IGRhdGFUeXBlLml0ZW1zO1xuXG4gIGlmKGRhdGFUeXBlLnVuaXF1ZUl0ZW1zKXtcbiAgICB2YXIgZHVwZUNoZWNrID0gW107XG4gICAgdmFyIGR1cGVzID0gY2FuZGlkYXRlLmZpbHRlcihmdW5jdGlvbih2YWx1ZSl7XG4gICAgICB2YXIgc2lnbmF0dXJlO1xuICAgICAgaWYoaXRlbXMuJHJlZil7XG4gICAgICAgIHNpZ25hdHVyZSA9IEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNpZ25hdHVyZSA9IHZhbHVlO1xuICAgICAgfVxuICAgICAgaWYoZHVwZUNoZWNrLmluZGV4T2Yoc2lnbmF0dXJlKSAhPT0gLTEpe1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGR1cGVDaGVjay5wdXNoKHNpZ25hdHVyZSk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmKGR1cGVzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIG5ldyBlcnJvclR5cGVzLkR1cGxpY2F0ZUluU2V0RXJyb3IoY2FuZGlkYXRlLCBkdXBlcyk7XG4gICAgfVxuICB9XG5cbiAgdmFyIGVycm9ycztcblxuICBpZihpdGVtcy4kcmVmKXtcbiAgICB2YXIgbW9kZWwgPSBtb2RlbHNbaXRlbXMuJHJlZl07XG4gICAgZXJyb3JzID0gY2FuZGlkYXRlLmZpbHRlcihmdW5jdGlvbih2YWx1ZSl7XG4gICAgICByZXR1cm4gdmFsaWRhdGUubW9kZWwodmFsdWUsIG1vZGVsLCBtb2RlbHMpO1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIGVycm9ycyA9IGNhbmRpZGF0ZS5maWx0ZXIoZnVuY3Rpb24odmFsdWUpe1xuICAgICAgcmV0dXJuIHZhbGlkYXRlLmRhdGFUeXBlKHZhbHVlLCBpdGVtcywgbW9kZWxzKTtcbiAgICB9KTtcbiAgfVxuXG4gIGlmKGVycm9ycy5sZW5ndGgpe1xuICAgIHJldHVybiBuZXcgZXJyb3JUeXBlcy5FcnJvcnNJbkFycmF5RWxlbWVudHNFcnJvcihlcnJvcnMpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHZhbGlkYXRlQXJyYXk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdmFsaWRhdGUgPSByZXF1aXJlKCcuL2luZGV4Jyk7XG5cbmZ1bmN0aW9uIHZhbGlkYXRlRGF0YVR5cGUoY2FuZGlkYXRlLCBkYXRhVHlwZSwgbW9kZWxzKXtcbiAgbW9kZWxzID0gbW9kZWxzIHx8IHt9O1xuXG4gIHZhciB0eXBlID0gZGF0YVR5cGUudHlwZSB8fCBkYXRhVHlwZS5kYXRhVHlwZSB8fCBkYXRhVHlwZS4kcmVmO1xuXG4gIHN3aXRjaCh0eXBlKXtcbiAgICBjYXNlICdpbnRlZ2VyJzpcbiAgICAgIHJldHVybiB2YWxpZGF0ZS5wcmltaXRpdmUuaW50ZWdlcihjYW5kaWRhdGUsIGRhdGFUeXBlKTtcbiAgICBjYXNlICdudW1iZXInOlxuICAgICAgcmV0dXJuIHZhbGlkYXRlLnByaW1pdGl2ZS5udW1iZXIoY2FuZGlkYXRlLCBkYXRhVHlwZSk7XG4gICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgIHJldHVybiB2YWxpZGF0ZS5wcmltaXRpdmUuc3RyaW5nKGNhbmRpZGF0ZSwgZGF0YVR5cGUpO1xuICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgcmV0dXJuIHZhbGlkYXRlLnByaW1pdGl2ZS5ib29sZWFuKGNhbmRpZGF0ZSk7XG4gICAgY2FzZSAnYXJyYXknOlxuICAgICAgcmV0dXJuIHZhbGlkYXRlLmFycmF5KGNhbmRpZGF0ZSwgZGF0YVR5cGUsIG1vZGVscyk7XG4gICAgY2FzZSAndm9pZCc6XG4gICAgICByZXR1cm4gdmFsaWRhdGUucHJpbWl0aXZlLnZvaWQoY2FuZGlkYXRlKTtcbiAgICBjYXNlICdGaWxlJzpcbiAgICAgIHJldHVybiB2YWxpZGF0ZS5wcmltaXRpdmUuZmlsZSgpO1xuICAgIGNhc2UgJ2RhdGUnOlxuICAgICAgcmV0dXJuIHZhbGlkYXRlLmRhdGUoY2FuZGlkYXRlLCBkYXRhVHlwZSk7XG4gICAgZGVmYXVsdDpcbiAgICAgIC8vIEFzc3VtZWQgdG8gYmUgY29tcGxleCBtb2RlbFxuICAgICAgdmFyIG1vZGVsID0gbW9kZWxzW3R5cGVdO1xuICAgICAgcmV0dXJuIHZhbGlkYXRlLm1vZGVsKGNhbmRpZGF0ZSwgbW9kZWwsIG1vZGVscyk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gdmFsaWRhdGVEYXRhVHlwZTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGVycm9yVHlwZXMgPSByZXF1aXJlKCcuL2Vycm9yVHlwZXMnKSxcbiAgVmFsaWRhdGlvbkVycm9yID0gZXJyb3JUeXBlcy5WYWxpZGF0aW9uRXJyb3IsXG4gIFZhbGlkYXRpb25FcnJvcnMgPSBlcnJvclR5cGVzLlZhbGlkYXRpb25FcnJvcnMsXG4gIE1pc3NpbmdWYWx1ZUVycm9yID0gZXJyb3JUeXBlcy5NaXNzaW5nVmFsdWVFcnJvcixcbiAgdmFsaWRhdGUgPSByZXF1aXJlKCcuL2luZGV4Jyk7XG5cbi8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTIyMTAyL3doYXQtaXMtdGhlLW1vc3QtZWZmaWNpZW50LXdheS10by1jbG9uZS1hbi1vYmplY3RcbmZ1bmN0aW9uIGNsb25lKG9iail7XG4gICAgaWYob2JqID09PSBudWxsIHx8IG9iaiA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiBvYmogIT09ICdvYmplY3QnKSByZXR1cm4gb2JqO1xuXG4gICAgaWYoQXJyYXkuaXNBcnJheShvYmopKSByZXR1cm4gb2JqLnNsaWNlKCk7XG5cbiAgICB2YXIgdGVtcCA9IHt9O1xuXG4gICAgZm9yKHZhciBrZXkgaW4gb2JqKVxuICAgICAgICB0ZW1wW2tleV0gPSBjbG9uZShvYmpba2V5XSk7XG4gICAgcmV0dXJuIHRlbXA7XG59XG5cbmZ1bmN0aW9uIGFkZEluaGVydGllZFByb3BlcnRpZXMobW9kZWwsIG1vZGVsSWQsIG1vZGVscyl7XG4gIHZhciBwYXJlbnQ7XG5cbiAgT2JqZWN0LmtleXMobW9kZWxzKS5zb21lKGZ1bmN0aW9uKG1vZGVsTmFtZSl7XG4gICAgdmFyIHBvdGVudGlhbFBhcmVudCA9IG1vZGVsc1ttb2RlbE5hbWVdO1xuICAgIGlmICghcG90ZW50aWFsUGFyZW50LnN1YlR5cGVzKSByZXR1cm47XG5cbiAgICBpZihwb3RlbnRpYWxQYXJlbnQuc3ViVHlwZXMuaW5kZXhPZihtb2RlbElkKSAhPT0gLTEpe1xuICAgICAgcGFyZW50ID0gcG90ZW50aWFsUGFyZW50O1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICBpZighcGFyZW50KSByZXR1cm47XG5cbiAgZm9yKHZhciBwcm9wZXJ0eU5hbWUgaW4gcGFyZW50LnByb3BlcnRpZXMpe1xuICAgIG1vZGVsLnByb3BlcnRpZXNbcHJvcGVydHlOYW1lXSA9IHBhcmVudC5wcm9wZXJ0aWVzW3Byb3BlcnR5TmFtZV07XG4gIH1cbiAgXG4gIGlmKHBhcmVudC5yZXF1aXJlZCkgbW9kZWwucmVxdWlyZWQgPSBtb2RlbC5yZXF1aXJlZC5jb25jYXQocGFyZW50LnJlcXVpcmVkKTtcblxuICBhZGRJbmhlcnRpZWRQcm9wZXJ0aWVzKG1vZGVsLCBwYXJlbnQuaWQsIG1vZGVscyk7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlTW9kZWwoY2FuZGlkYXRlLCBtb2RlbCwgbW9kZWxzKXtcbiAgaWYoY2FuZGlkYXRlID09PSBudWxsIHx8IHR5cGVvZiBjYW5kaWRhdGUgIT09ICdvYmplY3QnKXtcbiAgICByZXR1cm4gbmV3IFZhbGlkYXRpb25FcnJvcnMoY2FuZGlkYXRlLCBtb2RlbCk7XG4gIH1cblxuICBtb2RlbHMgPSBtb2RlbHMgfHwge307XG5cbiAgbW9kZWwgPSBjbG9uZShtb2RlbCk7XG4gIGlmKCFtb2RlbC5yZXF1aXJlZCkgbW9kZWwucmVxdWlyZWQgPSBbXTtcbiAgYWRkSW5oZXJ0aWVkUHJvcGVydGllcyhtb2RlbCwgbW9kZWwuaWQsIG1vZGVscyk7XG5cbiAgdmFyIGVycm9ycyA9IFtdO1xuXG4gIG1vZGVsLnJlcXVpcmVkLmZvckVhY2goZnVuY3Rpb24ocHJvcGVydHlOYW1lKXtcbiAgICBpZiAoY2FuZGlkYXRlW3Byb3BlcnR5TmFtZV0gIT09IHVuZGVmaW5lZCkgcmV0dXJuO1xuXG4gICAgdmFyIHByb3BlcnR5ID0gbW9kZWwucHJvcGVydGllc1twcm9wZXJ0eU5hbWVdO1xuICAgIHZhciBlcnJvciA9IG5ldyBNaXNzaW5nVmFsdWVFcnJvcigpO1xuICAgIGVycm9ycy5wdXNoKG5ldyBWYWxpZGF0aW9uRXJyb3IocHJvcGVydHlOYW1lLCBwcm9wZXJ0eSwgZXJyb3IpKTtcbiAgfSk7XG5cbiAgT2JqZWN0LmtleXMoY2FuZGlkYXRlKS5mb3JFYWNoKGZ1bmN0aW9uKHByb3BlcnR5TmFtZSl7XG4gICAgdmFyIHByb3BlcnR5ID0gbW9kZWwucHJvcGVydGllc1twcm9wZXJ0eU5hbWVdO1xuICAgIFxuICAgIGlmKHByb3BlcnR5ID09PSB1bmRlZmluZWQpIHJldHVybjtcblxuICAgIHZhciBlcnJvciA9IHZhbGlkYXRlLmRhdGFUeXBlKGNhbmRpZGF0ZVtwcm9wZXJ0eU5hbWVdLCBwcm9wZXJ0eSwgbW9kZWxzKTtcbiAgICBpZihlcnJvcil7XG4gICAgICBlcnJvcnMucHVzaChuZXcgVmFsaWRhdGlvbkVycm9yKHByb3BlcnR5TmFtZSwgcHJvcGVydHksIGVycm9yKSk7XG4gICAgfVxuICB9KTtcbiAgXG4gIGlmKGVycm9ycy5sZW5ndGgpe1xuICAgIHJldHVybiBuZXcgVmFsaWRhdGlvbkVycm9ycyhjYW5kaWRhdGUsIG1vZGVsLmlkLCBtb2RlbCwgZXJyb3JzKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSB2YWxpZGF0ZU1vZGVsOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGVycm9yVHlwZXMgPSByZXF1aXJlKCcuL2Vycm9yVHlwZXMnKSxcbiAgVmFsaWRhdGlvbkVycm9yID0gZXJyb3JUeXBlcy5WYWxpZGF0aW9uRXJyb3IsXG4gIFZhbGlkYXRpb25FcnJvcnMgPSBlcnJvclR5cGVzLlZhbGlkYXRpb25FcnJvcnMsXG4gIE1pc3NpbmdWYWx1ZUVycm9yID0gZXJyb3JUeXBlcy5NaXNzaW5nVmFsdWVFcnJvcixcbiAgdmFsaWRhdGUgPSByZXF1aXJlKCcuL2luZGV4Jyk7XG5cbmZ1bmN0aW9uIHZhbGlkYXRlT3BlcmF0aW9uKGNhbmRpZGF0ZSwgb3BlcmF0aW9uLCBtb2RlbHMpe1xuICB2YXIgZXJyb3JzID0gW107XG5cbiAgdmFyIHByZXNlbnRQYXJhbXMgPSAob3BlcmF0aW9uLnBhcmFtZXRlcnMgfHwgW10pLmZpbHRlcihmdW5jdGlvbihwYXJhbSl7XG4gICAgaWYgKGNhbmRpZGF0ZVtwYXJhbS5uYW1lXSAhPT0gdW5kZWZpbmVkKSByZXR1cm4gdHJ1ZTtcblxuICAgIGlmIChwYXJhbS5yZXF1aXJlZCkge1xuICAgICAgdmFyIGVycm9yID0gbmV3IE1pc3NpbmdWYWx1ZUVycm9yKCk7XG4gICAgICBlcnJvcnMucHVzaChuZXcgVmFsaWRhdGlvbkVycm9yKHBhcmFtLm5hbWUsIHBhcmFtLCBlcnJvcikpO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfSk7XG5cbiAgcHJlc2VudFBhcmFtcy5mb3JFYWNoKGZ1bmN0aW9uKHBhcmFtKXtcbiAgICB2YXIgZXJyb3IgPSB2YWxpZGF0ZS5kYXRhVHlwZShjYW5kaWRhdGVbcGFyYW0ubmFtZV0sIHBhcmFtLCBtb2RlbHMpO1xuICAgIGlmKGVycm9yKXtcbiAgICAgIGVycm9ycy5wdXNoKG5ldyBWYWxpZGF0aW9uRXJyb3IocGFyYW0ubmFtZSwgcGFyYW0sIGVycm9yKSk7XG4gICAgfVxuICB9KTtcblxuICBpZihlcnJvcnMubGVuZ3RoKXtcbiAgICByZXR1cm4gbmV3IFZhbGlkYXRpb25FcnJvcnMoY2FuZGlkYXRlLCBvcGVyYXRpb24ubmlja25hbWUsIG9wZXJhdGlvbiwgZXJyb3JzKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSB2YWxpZGF0ZU9wZXJhdGlvbjtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGVycm9yVHlwZXMgPSByZXF1aXJlKCcuL2Vycm9yVHlwZXMnKTtcblxuZnVuY3Rpb24gdmFsaWRhdGVJbnRlZ2VyKGNhbmRpZGF0ZSwgZGF0YVR5cGUpe1xuICB2YXIgZXJyb3IgPSB2YWxpZGF0ZU51bWJlcihjYW5kaWRhdGUsIGRhdGFUeXBlKTtcbiAgaWYoZXJyb3IpIHJldHVybiBlcnJvcjtcblxuICBpZihjYW5kaWRhdGUgJSAxKXtcbiAgICByZXR1cm4gbmV3IGVycm9yVHlwZXMuTm90QW5JbnRlZ2VyRXJyb3IoY2FuZGlkYXRlKTtcbiAgfVxufVxuZXhwb3J0cy52YWxpZGF0ZUludGVnZXIgPSB2YWxpZGF0ZUludGVnZXI7XG5cbmZ1bmN0aW9uIHZhbGlkYXRlTnVtYmVyKGNhbmRpZGF0ZSwgZGF0YVR5cGUpe1xuICBpZighKHR5cGVvZiBjYW5kaWRhdGUgPT09ICdudW1iZXInIHx8IGNhbmRpZGF0ZSBpbnN0YW5jZW9mIE51bWJlcikgfHwgaXNOYU4oY2FuZGlkYXRlKSl7XG4gICAgcmV0dXJuIG5ldyBlcnJvclR5cGVzLk5vdEFOdW1iZXJFcnJvcihjYW5kaWRhdGUsIHR5cGVvZiBjYW5kaWRhdGUpO1xuICB9XG4gIFxuICBpZigoZGF0YVR5cGUubWluaW11bSAhPT0gdW5kZWZpbmVkKSAmJiBjYW5kaWRhdGUgPCBwYXJzZUludChkYXRhVHlwZS5taW5pbXVtLCAxMCkpe1xuICAgIHJldHVybiBuZXcgZXJyb3JUeXBlcy5OdW1iZXJUb29TbWFsbEVycm9yKGNhbmRpZGF0ZSwgZGF0YVR5cGUubWluaW11bSk7XG4gIH1cbiAgXG4gIGlmKChkYXRhVHlwZS5tYXhpbXVtICE9PSB1bmRlZmluZWQpICYmIGNhbmRpZGF0ZSA+IHBhcnNlSW50KGRhdGFUeXBlLm1heGltdW0sIDEwKSl7XG4gICAgcmV0dXJuIG5ldyBlcnJvclR5cGVzLk51bWJlclRvb0xhcmdlRXJyb3IoY2FuZGlkYXRlLCBkYXRhVHlwZS5tYXhpbXVtKTtcbiAgfVxufVxuZXhwb3J0cy52YWxpZGF0ZU51bWJlciA9IHZhbGlkYXRlTnVtYmVyO1xuXG5mdW5jdGlvbiB2YWxpZGF0ZUJvb2xlYW4oY2FuZGlkYXRlKXtcbiAgaWYoISh0eXBlb2YgY2FuZGlkYXRlID09PSAnYm9vbGVhbicgfHwgY2FuZGlkYXRlIGluc3RhbmNlb2YgQm9vbGVhbikpe1xuICAgIHJldHVybiBuZXcgZXJyb3JUeXBlcy5Ob3RBQm9vbGVhbkVycm9yKGNhbmRpZGF0ZSwgdHlwZW9mIGNhbmRpZGF0ZSk7XG4gIH1cbn1cbmV4cG9ydHMudmFsaWRhdGVCb29sZWFuID0gdmFsaWRhdGVCb29sZWFuO1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlVm9pZChjYW5kaWRhdGUpe1xuICBpZihjYW5kaWRhdGUgIT0gbnVsbCl7XG4gICAgcmV0dXJuIG5ldyBlcnJvclR5cGVzLk5vdFZvaWRFcnJvcihjYW5kaWRhdGUsIHR5cGVvZiBjYW5kaWRhdGUpO1xuICB9XG59XG5leHBvcnRzLnZhbGlkYXRlVm9pZCA9IHZhbGlkYXRlVm9pZDtcblxuZnVuY3Rpb24gdmFsaWRhdGVGaWxlKCl7XG4gIC8vIE5vdCBzdXJlIGhvdyB0byBjaGVjayB0aGlzLCBzaW5jZSBhbnl0aGluZyBjb3VsZCBxdWFsaWZ5IGFzICdGaWxlJy5cbn1cbmV4cG9ydHMudmFsaWRhdGVGaWxlID0gdmFsaWRhdGVGaWxlO1xuXG5mdW5jdGlvbiB2YWxpZGF0ZVN0cmluZyhjYW5kaWRhdGUsIGRhdGFUeXBlKXtcbiAgaWYodHlwZW9mIGNhbmRpZGF0ZSAhPT0gJ3N0cmluZycgJiYgIShjYW5kaWRhdGUgaW5zdGFuY2VvZiBTdHJpbmcpKXtcbiAgICByZXR1cm4gbmV3IGVycm9yVHlwZXMuTm90QVN0cmluZ0Vycm9yKGNhbmRpZGF0ZSwgdHlwZW9mIGNhbmRpZGF0ZSk7XG4gIH1cblxuICBpZignZW51bScgaW4gZGF0YVR5cGUpe1xuICAgIGlmKGRhdGFUeXBlLmVudW0uaW5kZXhPZihjYW5kaWRhdGUpID09PSAtMSkge1xuICAgICAgcmV0dXJuIG5ldyBlcnJvclR5cGVzLlN0cmluZ05vdEluRW51bUVycm9yKGNhbmRpZGF0ZSwgZGF0YVR5cGUuZW51bSk7XG4gICAgfVxuICB9XG59XG5leHBvcnRzLnZhbGlkYXRlU3RyaW5nID0gdmFsaWRhdGVTdHJpbmc7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgTWlzc2luZ0F1dGhvcml6YXRpb25FcnJvciA9IHJlcXVpcmUoJy4vZXJyb3JUeXBlcycpLk1pc3NpbmdBdXRob3JpemF0aW9uRXJyb3I7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYXBwbHlBdXRoRGF0YShvcGVyYXRpb24sIGF1dGhEYXRhLCByZXF1ZXN0KXtcbiAgdmFyIGF1dGhNYXAgPSBvcGVyYXRpb24uYXV0aG9yaXphdGlvbnM7XG4gIGlmKCFhdXRoTWFwKSBhdXRoTWFwID0gb3BlcmF0aW9uLmFwaU9iamVjdC5hcGlEZWNsYXJhdGlvbi5hdXRob3JpemF0aW9ucztcbiAgaWYoIWF1dGhNYXApIHJldHVybjtcblxuICB2YXIgYXV0aE5hbWVzID0gT2JqZWN0LmtleXMoYXV0aE1hcCkuZmlsdGVyKGZ1bmN0aW9uKGF1dGhOYW1lKXtcbiAgICAvLyBDdXJyZW50bHkgdW5hYmxlIHRvIGhhbmRsZSBvYXV0aDJcbiAgICByZXR1cm4gYXV0aE1hcFthdXRoTmFtZV0udHlwZSAhPT0gJ29hdXRoMic7XG4gIH0pO1xuXG4gIGlmKGF1dGhOYW1lcy5sZW5ndGggPT09IDApIHJldHVybjtcblxuICBpZihhdXRoTmFtZXMubGVuZ3RoID09PSAxKXtcbiAgICB2YXIgYXV0aE5hbWUgPSBhdXRoTmFtZXNbMF07XG4gICAgdmFyIGF1dGggPSBhdXRoTWFwW2F1dGhOYW1lXTtcblxuICAgIGlmKCFhdXRoRGF0YSkgdGhyb3cgbmV3IE1pc3NpbmdBdXRob3JpemF0aW9uRXJyb3IoYXV0aE5hbWUsIGF1dGgpO1xuXG4gICAgLy8gVW5wYWNrIG5lc3RlZCBhdXRoRGF0YSBmb3Igc2luZ2xlIGF1dGggb3BzOiB7IGFwaUtleTogJzEyMycgfSAtPiAnMTIzJ1xuICAgIGlmKGF1dGhEYXRhW2F1dGhOYW1lXSkgYXV0aERhdGEgPSBhdXRoRGF0YVthdXRoTmFtZV07XG5cbiAgICBpZihhdXRoLnR5cGUgPT09ICdhcGlLZXknKXtcbiAgICAgIGFwcGx5QXBpS2V5KGF1dGgsIGF1dGhOYW1lLCBhdXRoRGF0YSwgcmVxdWVzdCk7XG4gICAgfSBlbHNlIGlmKGF1dGgudHlwZSA9PT0gJ2Jhc2ljQXV0aCcpIHtcbiAgICAgIGFwcGx5QmFzaWNBdXRoKGF1dGgsIGF1dGhOYW1lLCBhdXRoRGF0YS51c2VybmFtZSwgYXV0aERhdGEucGFzc3dvcmQsIHJlcXVlc3QpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YXIgaGFzQXV0aCA9IGF1dGhOYW1lcy5zb21lKGZ1bmN0aW9uKGF1dGhOYW1lKXtcbiAgICAgIHZhciBhdXRoID0gYXV0aE1hcFthdXRoTmFtZV07XG4gICAgICB2YXIgZGF0YSA9IGF1dGhEYXRhW2F1dGhOYW1lXTtcblxuICAgICAgaWYoIWRhdGEpIHJldHVybiBmYWxzZTtcblxuICAgICAgaWYoYXV0aC50eXBlID09PSAnYXBpS2V5Jyl7XG4gICAgICAgIGFwcGx5QXBpS2V5KGF1dGgsIGF1dGhOYW1lLCBkYXRhLCByZXF1ZXN0KTtcbiAgICAgIH0gZWxzZSBpZihhdXRoLnR5cGUgPT09ICdiYXNpY0F1dGgnKXtcbiAgICAgICAgYXBwbHlCYXNpY0F1dGgoYXV0aCwgYXV0aE5hbWUsIGRhdGEudXNlcm5hbWUsIGRhdGEucGFzc3dvcmQsIHJlcXVlc3QpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KTtcblxuICAgIGlmKCFoYXNBdXRoKXtcbiAgICAgIHRocm93IG5ldyBNaXNzaW5nQXV0aG9yaXphdGlvbkVycm9yKGF1dGhOYW1lcy5qb2luKCcsICcpLCBhdXRoTWFwKTtcbiAgICB9XG4gIH1cbn07XG5cbmZ1bmN0aW9uIGFwcGx5QXBpS2V5KGF1dGgsIGF1dGhOYW1lLCBhcGlLZXksIHJlcXVlc3Qpe1xuICBpZighYXBpS2V5KSB0aHJvdyBuZXcgTWlzc2luZ0F1dGhvcml6YXRpb25FcnJvcihhdXRoTmFtZSwgYXV0aCk7XG4gIFxuICBpZihhdXRoLnBhc3NBcyA9PT0gJ2hlYWRlcicpe1xuICAgIHJlcXVlc3QuaGVhZGVyc1thdXRoLmtleW5hbWVdID0gYXBpS2V5O1xuICB9IGVsc2UgaWYoYXV0aC5wYXNzQXMgPT09ICdxdWVyeScpe1xuICAgIHZhciB1cmwgPSByZXF1ZXN0LnVybDtcbiAgICB2YXIgcXVlcnlQYXJhbSA9IGF1dGgua2V5bmFtZSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudChhcGlLZXkpO1xuICAgIGlmKHVybC5pbmRleE9mKCc/JykgPT09IC0xKXtcbiAgICAgIHVybCArPSAnPycgKyBxdWVyeVBhcmFtO1xuICAgIH0gZWxzZSB7XG4gICAgICB1cmwgPSB1cmwucmVwbGFjZSgnPycsICc/JyArIHF1ZXJ5UGFyYW0gKyAnJicpO1xuICAgIH1cblxuICAgIHJlcXVlc3QudXJsID0gdXJsO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5QmFzaWNBdXRoKGF1dGgsIGF1dGhOYW1lLCB1c2VybmFtZSwgcGFzc3dvcmQsIHJlcXVlc3Qpe1xuICBpZighdXNlcm5hbWUgfHwgIXBhc3N3b3JkKSB0aHJvdyBuZXcgTWlzc2luZ0F1dGhvcml6YXRpb25FcnJvcihhdXRoTmFtZSwgYXV0aCk7XG4gIFxuICB2YXIgdXJsID0gcmVxdWVzdC51cmw7XG4gIFxuICAvLyBPbmx5IGFkZCBiYXNpYyBhdXRoIG9uY2VcbiAgaWYodXJsLmluZGV4T2YoJ0AnKSA9PT0gLTEpe1xuICAgIHVybCA9IHVybC5yZXBsYWNlKCc6Ly8nLCAnOi8vJyArIHVzZXJuYW1lICsgJzonICsgcGFzc3dvcmQgKyAnQCcpO1xuICB9XG5cbiAgcmVxdWVzdC51cmwgPSB1cmw7XG59IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgY3JlYXRlT3BlcmF0aW9uSGFuZGxlciA9IHJlcXVpcmUoJy4vY3JlYXRlT3BlcmF0aW9uSGFuZGxlcicpO1xuXG5mdW5jdGlvbiBjcmVhdGVDbGllbnQoc2NoZW1hLCByZXF1ZXN0SGFuZGxlcil7XG4gIHZhciBhcGkgPSB7fSxcbiAgICBhcGlBdXRoRGF0YSxcbiAgICBhdXRoTWV0aG9kTmFtZSA9ICdhdXRoJztcblxuICBzY2hlbWEgPSBwcm9jZXNzU2NoZW1hKHNjaGVtYSk7XG5cbiAgLy8gSWYgdGhlICdhdXRoJyBrZXkgaXMgdXNlZCBmb3IgYW55IHJlc291cmNlIG9yIG9wZXJhdGlvbiwgd2UnbGwgdXNlXG4gIC8vICdhdXRob3JpemF0aW9uJyBpbnN0ZWFkIGZvciB0aGUgYXV0aCBtZXRob2RzXG4gIHZhciBhdXRoSXNJblVzZSA9IHNjaGVtYS5hcGlzLnNvbWUoZnVuY3Rpb24ocmVzb3VyY2VPYmplY3Qpe1xuICAgIHJldHVybiByZXNvdXJjZU9iamVjdC5hcGlEZWNsYXJhdGlvbi5hcGlzLnNvbWUoZnVuY3Rpb24oYXBpT2JqZWN0KXtcbiAgICAgIHZhciByZXNvdXJjZUFwaU5hbWUgPSBnZXRBcGlOYW1lKGFwaU9iamVjdC5hcGlEZWNsYXJhdGlvbi5yZXNvdXJjZVBhdGggfHwgYXBpT2JqZWN0LnBhdGgpO1xuICAgICAgaWYocmVzb3VyY2VBcGlOYW1lID09PSAnYXV0aCcpIHJldHVybiB0cnVlO1xuICAgICAgcmV0dXJuIChhcGlPYmplY3Qub3BlcmF0aW9ucyB8fCBbXSkuc29tZShmdW5jdGlvbihvcGVyYXRpb24pe1xuICAgICAgICByZXR1cm4gb3BlcmF0aW9uLm5pY2tuYW1lID09PSAnYXV0aCc7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgaWYoYXV0aElzSW5Vc2UpIGF1dGhNZXRob2ROYW1lID0gJ2F1dGhvcml6YXRpb24nO1xuXG4gIGFwaVthdXRoTWV0aG9kTmFtZV0gPSBmdW5jdGlvbigpe1xuICAgIGFwaUF1dGhEYXRhID0gcHJvY2Vzc0FwaUF1dGhBcmdzKGFyZ3VtZW50cyk7XG4gIH07XG5cbiAgc2NoZW1hLmFwaXMuZm9yRWFjaChmdW5jdGlvbihyZXNvdXJjZU9iamVjdCl7XG4gICAgdmFyIHJlc291cmNlTmFtZSxcbiAgICAgIHJlc291cmNlQXBpLFxuICAgICAgcmVzb3VyY2VBdXRoRGF0YTtcblxuICAgIGlmKHJlc291cmNlT2JqZWN0LmFwaURlY2xhcmF0aW9uLnJlc291cmNlUGF0aCl7XG4gICAgICByZXNvdXJjZU5hbWUgPSBnZXRBcGlOYW1lKHJlc291cmNlT2JqZWN0LmFwaURlY2xhcmF0aW9uLnJlc291cmNlUGF0aCk7XG4gICAgICByZXNvdXJjZUFwaSA9IGFwaVtyZXNvdXJjZU5hbWVdID0ge307XG4gICAgICByZXNvdXJjZUFwaVthdXRoTWV0aG9kTmFtZV0gPSBmdW5jdGlvbigpe1xuICAgICAgICByZXNvdXJjZUF1dGhEYXRhID0gcHJvY2Vzc0FwaUF1dGhBcmdzKGFyZ3VtZW50cyk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIChyZXNvdXJjZU9iamVjdC5hcGlEZWNsYXJhdGlvbi5hcGlzIHx8IFtdKS5mb3JFYWNoKGZ1bmN0aW9uKGFwaU9iamVjdCl7XG4gICAgICB2YXIgYXBpT2JqZWN0TmFtZSA9IHJlc291cmNlTmFtZSxcbiAgICAgICAgYXBpT2JqZWN0QXBpID0gcmVzb3VyY2VBcGksXG4gICAgICAgIGFwaU9iamVjdEF1dGhEYXRhO1xuXG4gICAgICBpZighYXBpT2JqZWN0TmFtZSl7XG4gICAgICAgIGFwaU9iamVjdE5hbWUgPSBnZXRBcGlOYW1lKGFwaU9iamVjdC5wYXRoKTtcbiAgICAgICAgYXBpT2JqZWN0QXBpID0gYXBpW2FwaU9iamVjdE5hbWVdID0ge307XG4gICAgICAgIGFwaU9iamVjdEFwaVthdXRoTWV0aG9kTmFtZV0gPSBmdW5jdGlvbigpe1xuICAgICAgICAgIGFwaU9iamVjdEF1dGhEYXRhID0gcHJvY2Vzc0FwaUF1dGhBcmdzKGFyZ3VtZW50cyk7XG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIChhcGlPYmplY3Qub3BlcmF0aW9ucyB8fCBbXSkuZm9yRWFjaChmdW5jdGlvbihvcGVyYXRpb24pe1xuICAgICAgICB2YXIgb3BlcmF0aW9uSGFuZGxlck5hbWUgPSBvcGVyYXRpb24ubmlja25hbWUsXG4gICAgICAgICAgb3BlcmF0aW9uQXV0aERhdGEsXG4gICAgICAgICAgb3BlcmF0aW9uSGFuZGxlcjtcblxuICAgICAgICBmdW5jdGlvbiBnZXRBdXRoRGF0YSgpe1xuICAgICAgICAgIHJldHVybiBvcGVyYXRpb25BdXRoRGF0YSB8fCBhcGlPYmplY3RBdXRoRGF0YSB8fCByZXNvdXJjZUF1dGhEYXRhIHx8IGFwaUF1dGhEYXRhO1xuICAgICAgICB9XG5cbiAgICAgICAgb3BlcmF0aW9uSGFuZGxlciA9IGNyZWF0ZU9wZXJhdGlvbkhhbmRsZXIob3BlcmF0aW9uLCBnZXRBdXRoRGF0YSwgcmVxdWVzdEhhbmRsZXIpO1xuXG4gICAgICAgIG9wZXJhdGlvbkhhbmRsZXJbYXV0aE1ldGhvZE5hbWVdID0gZnVuY3Rpb24oKXtcbiAgICAgICAgICBvcGVyYXRpb25BdXRoRGF0YSA9IHByb2Nlc3NBcGlBdXRoQXJncyhhcmd1bWVudHMpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGFwaU9iamVjdEFwaVtvcGVyYXRpb25IYW5kbGVyTmFtZV0gPSBvcGVyYXRpb25IYW5kbGVyO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIHJldHVybiBhcGk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZUNsaWVudDtcblxuZnVuY3Rpb24gcHJvY2Vzc0FwaUF1dGhBcmdzKGFyZ3Mpe1xuICAvLyBmb3IgYmFzaWMgYXV0aCwgYWxsb3cgY2FsbHMgd2l0aCB0d28gYXJncyAodXNlcm5hbWUsIHBhc3N3b3JkKVxuICBpZih0eXBlb2YgYXJnc1swXSA9PT0gJ3N0cmluZycgJiYgdHlwZW9mIGFyZ3NbMV0gPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVzZXJuYW1lOiBhcmdzWzBdLFxuICAgICAgcGFzc3dvcmQ6IGFyZ3NbMV1cbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBhcmdzWzBdO1xuICB9XG59XG5cbi8vIEhlbHBwZXIgbWV0aG9kIHdoaWNoIGFzc2luZ3MgYmFjayBwb2ludGVyIHRvIG9iamVjdCBwYXJlbnRzIGFuZCByZXR1cm5zXG4vLyB0aGUgYXBpIG9iamVjdHMgd2l0aGluIHRoZSBnaXZlbiBzY2hlbWEuXG5mdW5jdGlvbiBwcm9jZXNzU2NoZW1hKHNjaGVtYSl7XG4gIHNjaGVtYS5hcGlzLmZvckVhY2goZnVuY3Rpb24ocmVzb3VyY2VPYmplY3Qpe1xuICAgIHJlc291cmNlT2JqZWN0LnJlc291cmNlTGlzdGluZyA9IHNjaGVtYTtcblxuICAgIChyZXNvdXJjZU9iamVjdC5hcGlEZWNsYXJhdGlvbi5hcGlzIHx8IFtdKS5mb3JFYWNoKGZ1bmN0aW9uKGFwaU9iamVjdCl7XG4gICAgICBhcGlPYmplY3QucmVzb3VyY2VPYmplY3QgPSByZXNvdXJjZU9iamVjdDtcbiAgICAgIGFwaU9iamVjdC5hcGlEZWNsYXJhdGlvbiA9IHJlc291cmNlT2JqZWN0LmFwaURlY2xhcmF0aW9uO1xuXG4gICAgICAoYXBpT2JqZWN0Lm9wZXJhdGlvbnMgfHwgW10pLmZvckVhY2goZnVuY3Rpb24ob3BlcmF0aW9uKXtcbiAgICAgICAgb3BlcmF0aW9uLmFwaU9iamVjdCA9IGFwaU9iamVjdDtcblxuICAgICAgICAob3BlcmF0aW9uLnBhcmFtZXRlcnMgfHwgW10pLmZvckVhY2goZnVuY3Rpb24ocGFyYW1ldGVyKXtcbiAgICAgICAgICBwYXJhbWV0ZXIub3BlcmF0aW9uID0gb3BlcmF0aW9uO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcblxuICByZXR1cm4gc2NoZW1hO1xufVxuXG4vLyBUYWtlcyBhIHBhdGggYW5kIHJldHVybnMgYSBKYXZhU2NyaXB0LWZyaWVuZGx5IHZhcmlhYmxlIG5hbWVcbmZ1bmN0aW9uIGdldEFwaU5hbWUobmFtZSl7XG4gIC8vIFN0cmluZyBub24td29yZCBjaGFyYWN0ZXJzXG4gIG5hbWUgPSBuYW1lLnJlcGxhY2UoL1xcVy9nLCAnLycpO1xuXG4gIC8vIFR1cm4gcGF0aHMgd2hpY2ggbG9vay9saWtlL3RoaXMgdG8gbG9va0xpa2VUaGlzXG4gIG5hbWUgPSBuYW1lLnJlcGxhY2UoLyhcXHcpXFwvKFxcdykvZywgZnVuY3Rpb24obWF0Y2gsIHAxLCBwMil7XG4gICAgcmV0dXJuIHAxICsgcDIudG9VcHBlckNhc2UoKTtcbiAgfSk7XG5cbiAgbmFtZSA9IG5hbWUucmVwbGFjZSgvXFwvL2csICcnKTtcblxuICByZXR1cm4gbmFtZTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGdldFJlcXVlc3RIZWFkZXJzID0gcmVxdWlyZSgnLi9nZXRSZXF1ZXN0SGVhZGVycycpLFxuICBnZXRSZXF1ZXN0VXJsID0gcmVxdWlyZSgnLi9nZXRSZXF1ZXN0VXJsJyksXG4gIGdldFJlcXVlc3RCb2R5ID0gcmVxdWlyZSgnLi9nZXRSZXF1ZXN0Qm9keScpLFxuICBhcHBseUF1dGhEYXRhID0gcmVxdWlyZSgnLi9hcHBseUF1dGhEYXRhJyksXG4gIGVycm9yVHlwZXMgPSByZXF1aXJlKCcuL2Vycm9yVHlwZXMnKSxcbiAgc3dhZ2dlclZhbGlkYXRlID0gcmVxdWlyZSgnc3dhZ2dlci12YWxpZGF0ZScpO1xuXG52YXIgYWxsRXJyb3JUeXBlcyA9IHt9O1xuT2JqZWN0LmtleXMoc3dhZ2dlclZhbGlkYXRlLmVycm9ycykuZm9yRWFjaChmdW5jdGlvbihlcnJvck5hbWUpe1xuICBhbGxFcnJvclR5cGVzW2Vycm9yTmFtZV0gPSBzd2FnZ2VyVmFsaWRhdGUuZXJyb3JzW2Vycm9yTmFtZV07XG59KTtcblxuT2JqZWN0LmtleXMoZXJyb3JUeXBlcykuZm9yRWFjaChmdW5jdGlvbihlcnJvck5hbWUpe1xuICBhbGxFcnJvclR5cGVzW2Vycm9yTmFtZV0gPSBlcnJvclR5cGVzW2Vycm9yTmFtZV07XG59KTtcblxuZnVuY3Rpb24gY3JlYXRlT3BlcmF0aW9uSGFuZGxlcihvcGVyYXRpb24sIGdldEF1dGhEYXRhLCByZXF1ZXN0SGFuZGxlcil7XG4gIGZ1bmN0aW9uIFJlcXVlc3QoZGF0YSwgb3B0aW9ucyl7XG4gICAgdGhpcy5tZXRob2QgPSBvcGVyYXRpb24ubWV0aG9kO1xuICAgIHRoaXMub3BlcmF0aW9uID0gb3BlcmF0aW9uO1xuICAgIHRoaXMuZXJyb3JUeXBlcyA9IGFsbEVycm9yVHlwZXM7XG4gICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICB9XG5cbiAgdmFyIG9wZXJhdGlvbkhhbmRsZXIgPSBmdW5jdGlvbihkYXRhLCBvcHRpb25zKXtcbiAgICB2YXIgZXJyb3IsXG4gICAgICByZXF1ZXN0O1xuXG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgICBpZihkYXRhID09IG51bGwpIGRhdGEgPSB7fTtcblxuICAgIC8vIGlmIGEgZnVuY3Rpb24gaXMgcGFzc2VkIGluIGFzIG9wdGlvbnMsIGFzc3VtZSBpdCdzIGEgY2FsbGJhY2sgZnVuY3Rpb25cbiAgICAvLyBmb3IgY29udmVuaWVuY2VcbiAgICBpZih0eXBlb2Ygb3B0aW9ucyA9PT0gJ2Z1bmN0aW9uJyl7XG4gICAgICBvcHRpb25zLmNhbGxiYWNrID0gb3B0aW9ucztcbiAgICB9XG5cbiAgICB0cnl7XG4gICAgICBkYXRhID0gcHJ1bmUoZGF0YSk7XG4gICAgICBkYXRhID0gc2luZ2xlUGFyYW1Db252ZW5pZW5jZVByb2Nlc3NvcihvcGVyYXRpb24sIGRhdGEpO1xuICAgICAgZGF0YSA9IHJlbW92ZVVua25vd25QYXJhbXMob3BlcmF0aW9uLCBkYXRhKTtcblxuICAgICAgZXJyb3IgPSBzd2FnZ2VyVmFsaWRhdGUub3BlcmF0aW9uKGRhdGEsIG9wZXJhdGlvbiwgb3BlcmF0aW9uLmFwaU9iamVjdC5hcGlEZWNsYXJhdGlvbi5tb2RlbHMpO1xuXG4gICAgICByZXF1ZXN0ID0gbmV3IFJlcXVlc3QoZGF0YSwgb3B0aW9ucyk7XG5cbiAgICAgIC8vIElmIHdlIGtub3cgdGhlcmUgaXMgYW4gZXJyb3IsIGRvbid0IGF0dGVtcHQgdG8gY3JhZnQgdGhlIHJlcXVlc3QgcGFyYW1zLlxuICAgICAgLy8gVGhlIHJlcXVlc3QgcGFyYW0gZ2VuZXJhdG9ycyBhc3N1bWUgdmFsaWQgZGF0YSB0byB3b3JrIHByb3Blcmx5LlxuICAgICAgaWYoIWVycm9yKXtcbiAgICAgICAgcmVxdWVzdC51cmwgPSBnZXRSZXF1ZXN0VXJsKG9wZXJhdGlvbiwgZGF0YSk7XG4gICAgICAgIHJlcXVlc3QuaGVhZGVycyA9IGdldFJlcXVlc3RIZWFkZXJzKG9wZXJhdGlvbiwgZGF0YSwgb3B0aW9ucyk7XG4gICAgICAgIHJlcXVlc3QuYm9keSA9IGdldFJlcXVlc3RCb2R5KG9wZXJhdGlvbiwgZGF0YSwgcmVxdWVzdC5oZWFkZXJzKTtcblxuICAgICAgICBhcHBseUF1dGhEYXRhKG9wZXJhdGlvbiwgZ2V0QXV0aERhdGEoKSwgcmVxdWVzdCk7XG4gICAgICB9XG4gICAgfSBjYXRjaChlKXtcbiAgICAgIGVycm9yID0gZTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVxdWVzdEhhbmRsZXIoZXJyb3IsIHJlcXVlc3QpO1xuICB9O1xuXG4gIC8vIFVzZWZ1bCBmb3IgaW5zdGFuY2VvZiBjaGVja3NcbiAgb3BlcmF0aW9uSGFuZGxlci5SZXF1ZXN0ID0gUmVxdWVzdDtcbiAgb3BlcmF0aW9uSGFuZGxlci5lcnJvclR5cGVzID0gYWxsRXJyb3JUeXBlcztcblxuICAvLyBVc2VmdWwgZm9yIHJlZmxlY3Rpb25cbiAgb3BlcmF0aW9uSGFuZGxlci5vcGVyYXRpb24gPSBvcGVyYXRpb247XG5cbiAgLy8gQ2FuIGJlIHVzZWQgdG8gcHJlZW1wdGl2ZWx5IHZhbGlkYXRlIHdpdGhvdXQgYWN0aW9uXG4gIG9wZXJhdGlvbkhhbmRsZXIudmFsaWRhdGUgPSBmdW5jdGlvbihkYXRhKXtcbiAgICByZXR1cm4gc3dhZ2dlclZhbGlkYXRlLm9wZXJhdGlvbihkYXRhLCBvcGVyYXRpb24sIG9wZXJhdGlvbi5hcGlPYmplY3QuYXBpRGVjbGFyYXRpb24ubW9kZWxzKTtcbiAgfTtcblxuICByZXR1cm4gb3BlcmF0aW9uSGFuZGxlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlT3BlcmF0aW9uSGFuZGxlcjtcblxuZnVuY3Rpb24gbm9vcCgpe31cbmNyZWF0ZU9wZXJhdGlvbkhhbmRsZXIubG9nZ2VyID0ge1xuICBkZWJ1Zzogbm9vcCxcbiAgaW5mbzogbm9vcCxcbiAgd2Fybjogbm9vcCxcbiAgZXJyb3I6IG5vb3Bcbn07XG5cbi8vIFN0cmluZ2lmeSBhbmQgcGFyc2UgdGhlIGRhdGEgdG8gY2xlYW4gdXAgdW5kZWZpbmVkLCBhbmQgbm9uLXNjYWxhciBwcm9wZXJ0aWVzXG5mdW5jdGlvbiBwcnVuZShkYXRhKXtcbiAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xufVxuXG4vLyBFbmFibGVzIGRhdGEgdG8gYmUgcGFzc2VkIGRpcmVjdGx5IGZvciBzaW5nbGUgcGFyYW0gb3BlcmF0aW9ucy5cbmZ1bmN0aW9uIHNpbmdsZVBhcmFtQ29udmVuaWVuY2VQcm9jZXNzb3Iob3BlcmF0aW9uLCBkYXRhKXtcbiAgLy8gSWYgdGhlcmUgYXJlIG1vcmUgdGhhbiBvbmUgcGFyYW1zLCBiYWlsXG4gIHZhciByZXF1aXJlZFBhcmFtcyA9IChvcGVyYXRpb24ucGFyYW1ldGVycyB8fCBbXSkuZmlsdGVyKGZ1bmN0aW9uKHBhcmFtKXtcbiAgICByZXR1cm4gcGFyYW0ucmVxdWlyZWQ7XG4gIH0pO1xuXG4gIC8vIElmIHRoZXJlIGFyZSBtb3JlIHRoYW4gb25lIHJlcXVpcmVkIHBhcmFtcywgb3IgaWYgdGhlcmUgaXMgbm8gcmVxdWlyZWQgcGFyYW1cbiAgLy8gYW5kIHRoZXJlIGFyZSBtYW55IG9wdGlvbmFsIHBhcmFtcywgYmFpbFxuICBpZihyZXF1aXJlZFBhcmFtcy5sZW5ndGggPiAxKSByZXR1cm4gZGF0YTtcblxuICBpZihyZXF1aXJlZFBhcmFtcy5sZW5ndGggIT09IDEgJiYgKG9wZXJhdGlvbi5wYXJhbWV0ZXJzIHx8IFtdKS5sZW5ndGggIT09IDEpIHJldHVybiBkYXRhO1xuXG4gIHZhciBwYXJhbSA9IHJlcXVpcmVkUGFyYW1zWzBdIHx8IG9wZXJhdGlvbi5wYXJhbWV0ZXJzWzBdO1xuXG4gIC8vIElmIHRoZSBwYXJhbSBpcyBhbHJlYWR5IGRlZmluZWQgZXhwbGljaXRseSwgYmFpbFxuICBpZih0eXBlb2YgZGF0YSA9PT0gJ29iamVjdCcgJiYgIGRhdGFbcGFyYW0ubmFtZV0gIT09IHVuZGVmaW5lZCkgcmV0dXJuIGRhdGE7XG5cbiAgdmFyIG1vZGVscyA9IG9wZXJhdGlvbi5hcGlPYmplY3QuYXBpRGVjbGFyYXRpb24ubW9kZWxzO1xuXG4gIC8vIElmIHRoZSBkYXRhIHBhc3NlZCBpcyBpcyBub3QgdmFsaWQgZm9yIHRoZSBwYXJhbSBkYXRhIHR5cGUsIGJhaWxcbiAgdmFyIGVycm9yO1xuXG4gIHRyeSB7XG4gICAgZXJyb3IgPSBzd2FnZ2VyVmFsaWRhdGUuZGF0YVR5cGUoZGF0YSwgcGFyYW0sIG1vZGVscyk7XG4gIH0gY2F0Y2goZSl7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICAvLyBJZiB0aGUgZGF0YSBwYXNzZWQgaXMgYSB2YWxpZCBwYXJhbSBkYXRhIHR5cGUsIGJhaWxcbiAgaWYoIWVycm9yKXtcbiAgICB2YXIgd3JhcHBlciA9IHt9O1xuICAgIHdyYXBwZXJbcGFyYW0ubmFtZV0gPSBkYXRhO1xuICAgIHJldHVybiB3cmFwcGVyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBkYXRhO1xuICB9XG59XG5cblxuZnVuY3Rpb24gcmVtb3ZlVW5rbm93blBhcmFtcyhvcGVyYXRpb24sIGRhdGEpe1xuICBpZighZGF0YSB8fCB0eXBlb2YgZGF0YSAhPT0gJ29iamVjdCcpIHJldHVybiBkYXRhO1xuXG4gIHZhciBwYXJhbU5hbWVzID0ge307XG4gIChvcGVyYXRpb24ucGFyYW1ldGVycyB8fCBbXSkuZm9yRWFjaChmdW5jdGlvbihwYXJhbSl7XG4gICAgcGFyYW1OYW1lc1twYXJhbS5uYW1lXSA9IHRydWU7XG4gIH0pO1xuXG4gIHZhciB1bmtub3duS2V5cyA9IE9iamVjdC5rZXlzKGRhdGEpLmZpbHRlcihmdW5jdGlvbihrZXkpe1xuICAgIHJldHVybiAhKGtleSBpbiBwYXJhbU5hbWVzKTtcbiAgfSk7XG5cbiAgY3JlYXRlT3BlcmF0aW9uSGFuZGxlci5sb2dnZXIud2FybignVW5rbm93biBwYXJhbWV0ZXJzIHJlbW92ZWQgZnJvbSByZXF1ZXN0OicsXG4gICAgdW5rbm93bktleXMuam9pbignLCAnKSk7XG5cbiAgdW5rbm93bktleXMuZm9yRWFjaChmdW5jdGlvbihrZXkpe1xuICAgIGRlbGV0ZSBkYXRhW2tleV07XG4gIH0pO1xuXG4gIHJldHVybiBkYXRhO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBJbnZhbGlkUmVxdWVzdEVycm9yKG1lc3NhZ2Upe1xuICB0aGlzLm5hbWUgPSAnSW52YWxpZFJlcXVlc3RFcnJvcic7XG4gIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2UgfHwgJ0ludmFsaWQgcmVxdWVzdCc7XG59XG5JbnZhbGlkUmVxdWVzdEVycm9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRXJyb3IucHJvdG90eXBlKTtcbkludmFsaWRSZXF1ZXN0RXJyb3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gSW52YWxpZFJlcXVlc3RFcnJvcjtcblxuZXhwb3J0cy5JbnZhbGlkUmVxdWVzdEVycm9yID0gSW52YWxpZFJlcXVlc3RFcnJvcjtcblxuXG5mdW5jdGlvbiBNaXNzaW5nQXV0aG9yaXphdGlvbkVycm9yKGF1dGhOYW1lLCBhdXRoKXtcbiAgdGhpcy5uYW1lID0gJ01pc3NpbmdBdXRob3JpemF0aW9uRXJyb3InO1xuICB0aGlzLm1lc3NhZ2UgPSAnTm8gZGF0YSBmb3VuZCBmb3IgYXV0aG9yaXphdGlvbjogJyArIGF1dGhOYW1lO1xuICB0aGlzLmF1dGhvcml6YXRpb24gPSBhdXRoO1xufVxuTWlzc2luZ0F1dGhvcml6YXRpb25FcnJvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEludmFsaWRSZXF1ZXN0RXJyb3IucHJvdG90eXBlKTtcbk1pc3NpbmdBdXRob3JpemF0aW9uRXJyb3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gTWlzc2luZ0F1dGhvcml6YXRpb25FcnJvcjtcblxuZXhwb3J0cy5NaXNzaW5nQXV0aG9yaXphdGlvbkVycm9yID0gTWlzc2luZ0F1dGhvcml6YXRpb25FcnJvcjtcblxuXG5mdW5jdGlvbiBNaXNzaW5nUGF0aFBhcmFtc0Vycm9yKHBhdGhQYXJhbXMpe1xuICB0aGlzLm5hbWUgPSAnTWlzc2luZ1BhdGhQYXJhbXNFcnJvcic7XG4gIHRoaXMubWVzc2FnZSA9ICdNaXNzaW5nIHRoZSBmb2xsb3dpbmcgcmVxdWlyZWQgcGF0aCBwYXJhbWV0ZXJzOiAnICsgcGF0aFBhcmFtcy5qb2luKCcnKTtcbn1cbk1pc3NpbmdQYXRoUGFyYW1zRXJyb3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJbnZhbGlkUmVxdWVzdEVycm9yLnByb3RvdHlwZSk7XG5NaXNzaW5nUGF0aFBhcmFtc0Vycm9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IE1pc3NpbmdQYXRoUGFyYW1zRXJyb3I7XG5cbmV4cG9ydHMuTWlzc2luZ1BhdGhQYXJhbXNFcnJvciA9IE1pc3NpbmdQYXRoUGFyYW1zRXJyb3I7XG5cblxuZnVuY3Rpb24gQ29udGVudFR5cGVOb3RTdXBwb3J0ZWRFcnJvcihjb250ZW50VHlwZSwgb3BlcmF0aW9uKXtcbiAgdmFyIGFwaURlY2xhcmF0aW9uID0gb3BlcmF0aW9uLmFwaU9iamVjdC5hcGlEZWNsYXJhdGlvbjtcbiAgdmFyIGNvbnN1bWVzID0gb3BlcmF0aW9uLmNvbnN1bWVzIHx8IGFwaURlY2xhcmF0aW9uLmNvbnN1bWVzIHx8IFtdO1xuXG4gIHRoaXMubmFtZSA9ICdDb250ZW50VHlwZU5vdFN1cHBvcnRlZEVycm9yJztcbiAgdGhpcy5tZXNzYWdlID0gJ09wZXJhdGlvbiBbJyArIG9wZXJhdGlvbi5uaWNrbmFtZSArICddIGRvZXMgbm90IGFjY2VwdCAnICsgY29udGVudFR5cGUgKyAnLiBJdCBzdXBwb3J0czogJyArIFxuICAgIGNvbnN1bWVzLmpvaW4oJywgJyk7XG59XG5Db250ZW50VHlwZU5vdFN1cHBvcnRlZEVycm9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSW52YWxpZFJlcXVlc3RFcnJvci5wcm90b3R5cGUpO1xuQ29udGVudFR5cGVOb3RTdXBwb3J0ZWRFcnJvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBDb250ZW50VHlwZU5vdFN1cHBvcnRlZEVycm9yO1xuXG5leHBvcnRzLkNvbnRlbnRUeXBlTm90U3VwcG9ydGVkRXJyb3IgPSBDb250ZW50VHlwZU5vdFN1cHBvcnRlZEVycm9yO1xuXG5cbmZ1bmN0aW9uIEFjY2VwdHNOb3RTdXBwb3J0ZWRFcnJvcihhY2NlcHRzLCBvcGVyYXRpb24pe1xuICB2YXIgYXBpRGVjbGFyYXRpb24gPSBvcGVyYXRpb24uYXBpT2JqZWN0LmFwaURlY2xhcmF0aW9uO1xuICB2YXIgcHJvZHVjZXMgPSBvcGVyYXRpb24ucHJvZHVjZXMgfHwgYXBpRGVjbGFyYXRpb24ucHJvZHVjZXMgfHwgW107XG5cbiAgdGhpcy5uYW1lID0gJ0FjY2VwdHNOb3RTdXBwb3J0ZWRFcnJvcic7XG4gIHRoaXMubWVzc2FnZSA9ICdPcGVyYXRpb24gWycgKyBvcGVyYXRpb24ubmlja25hbWUgKyAnXSBkb2VzIG5vdCBwcm9kdWNlICcgKyBhY2NlcHRzICsgJy4gSXQgc3VwcG9ydHM6ICcgKyBcbiAgICBwcm9kdWNlcy5qb2luKCcsICcpO1xufVxuQWNjZXB0c05vdFN1cHBvcnRlZEVycm9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSW52YWxpZFJlcXVlc3RFcnJvci5wcm90b3R5cGUpO1xuQWNjZXB0c05vdFN1cHBvcnRlZEVycm9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEFjY2VwdHNOb3RTdXBwb3J0ZWRFcnJvcjtcblxuZXhwb3J0cy5BY2NlcHRzTm90U3VwcG9ydGVkRXJyb3IgPSBBY2NlcHRzTm90U3VwcG9ydGVkRXJyb3I7XG5cblxuZnVuY3Rpb24gT3BlcmF0aW9uVmFsaWRhdGlvbkVycm9yKG9wZXJhdGlvbiwgZXJyb3JzKXtcbiAgdGhpcy5uYW1lID0gJ09wZXJhdGlvblZhbGlkYXRpb25FcnJvcic7XG4gIHRoaXMubWVzc2FnZSA9IG9wZXJhdGlvbi5uaWNrbmFtZSArICcgZmFpbGVkIHZhbGlkYXRpb246IFxcblxcdCcgKyBlcnJvcnMuam9pbignXFxuXFx0Jyk7XG59XG5PcGVyYXRpb25WYWxpZGF0aW9uRXJyb3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJbnZhbGlkUmVxdWVzdEVycm9yLnByb3RvdHlwZSk7XG5PcGVyYXRpb25WYWxpZGF0aW9uRXJyb3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gT3BlcmF0aW9uVmFsaWRhdGlvbkVycm9yO1xuXG5leHBvcnRzLk9wZXJhdGlvblZhbGlkYXRpb25FcnJvciA9IE9wZXJhdGlvblZhbGlkYXRpb25FcnJvcjtcblxuXG5mdW5jdGlvbiBQYXJhbWV0ZXJWYWxpZGF0aW9uRXJyb3IocGFyYW1ldGVyLCBlcnJvcnMpe1xuICB0aGlzLm5hbWUgPSAnUGFyYW1ldGVyVmFsaWRhdGlvbkVycm9yJztcbiAgdGhpcy5tZXNzYWdlID0gcGFyYW1ldGVyLm5hbWUgKyAnIGZhaWxlZCB2YWxpZGF0aW9uOiBcXG5cXHQnICsgZXJyb3JzLmpvaW4oJ1xcblxcdCcpO1xufVxuUGFyYW1ldGVyVmFsaWRhdGlvbkVycm9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSW52YWxpZFJlcXVlc3RFcnJvci5wcm90b3R5cGUpO1xuUGFyYW1ldGVyVmFsaWRhdGlvbkVycm9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFBhcmFtZXRlclZhbGlkYXRpb25FcnJvcjtcblxuZXhwb3J0cy5QYXJhbWV0ZXJWYWxpZGF0aW9uRXJyb3IgPSBQYXJhbWV0ZXJWYWxpZGF0aW9uRXJyb3I7XG5cblxuZnVuY3Rpb24gRGF0YVR5cGVWYWxpZGF0aW9uRXJyb3IobWVzc2FnZSl7XG4gIHRoaXMubmFtZSA9ICdEYXRhVHlwZVZhbGlkYXRpb25FcnJvcic7XG4gIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2UgfHwgJ0ludmFsaWQgZGF0YSB0eXBlJztcbn1cbkRhdGFUeXBlVmFsaWRhdGlvbkVycm9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRXJyb3IucHJvdG90eXBlKTtcbkRhdGFUeXBlVmFsaWRhdGlvbkVycm9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IERhdGFUeXBlVmFsaWRhdGlvbkVycm9yO1xuXG5leHBvcnRzLkRhdGFUeXBlVmFsaWRhdGlvbkVycm9yID0gRGF0YVR5cGVWYWxpZGF0aW9uRXJyb3I7IiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGdldFJlcXVlc3RCb2R5KG9wZXJhdGlvbiwgZGF0YSwgaGVhZGVycyl7XG4gIHZhciBib2R5ID0gKG9wZXJhdGlvbi5wYXJhbWV0ZXJzIHx8IFtdKS5maWx0ZXIoZnVuY3Rpb24ocGFyYW0pe1xuICAgIHJldHVybiBwYXJhbS5wYXJhbVR5cGUgPT09ICdib2R5JyAmJiBkYXRhW3BhcmFtLm5hbWVdICE9IG51bGw7XG4gIH0pLm1hcChmdW5jdGlvbihwYXJhbSl7XG4gICAgcmV0dXJuIGRhdGFbcGFyYW0ubmFtZV07XG4gIH0pWzBdO1xuXG4gIGlmKCEoaGVhZGVycyAmJiAgaGVhZGVyc1snQ29udGVudC1UeXBlJ10pKSByZXR1cm4gYm9keTtcblxuICB2YXIgY29udGVudFR5cGUgPSBoZWFkZXJzWydDb250ZW50LVR5cGUnXTtcbiAgdmFyIHByZXNlbnRGb3JtUGFyYW1zID0gKG9wZXJhdGlvbi5wYXJhbWV0ZXJzIHx8IFtdKS5maWx0ZXIoZnVuY3Rpb24ocGFyYW0pe1xuICAgIHJldHVybiBwYXJhbS5wYXJhbVR5cGUgPT09ICdmb3JtJyAmJiBkYXRhW3BhcmFtLm5hbWVdICE9IG51bGw7XG4gIH0pO1xuXG4gIGlmKGNvbnRlbnRUeXBlLmluZGV4T2YoJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpICE9PSAtMSl7XG4gICAgYm9keSA9IHByZXNlbnRGb3JtUGFyYW1zLm1hcChmdW5jdGlvbihwYXJhbSl7XG4gICAgICB2YXIga2V5ID0gcGFyYW0ubmFtZSxcbiAgICAgICAgdmFsdWUgPSBkYXRhW2tleV07XG4gICAgICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KGtleSkgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpO1xuICAgIH0pLmpvaW4oJyYnKTtcbiAgfSBlbHNlIGlmKGNvbnRlbnRUeXBlLmluZGV4T2YoJ211bHRpcGFydC9mb3JtLWRhdGEnKSAhPT0gLTEpe1xuICAgIHZhciByYW5kb21uZXNzID0gTWF0aC5yYW5kb20oKS50b1N0cmluZygxNikuc3Vic3RyKDIpO1xuICAgIHZhciBib3VuZGFyeSA9ICdTd2FnZ2VyQm91bmRhcnknICsgcmFuZG9tbmVzcztcblxuICAgIGJvZHkgPSBwcmVzZW50Rm9ybVBhcmFtcy5tYXAoZnVuY3Rpb24ocGFyYW0pe1xuICAgICAgdmFyIGtleSA9IHBhcmFtLm5hbWUsXG4gICAgICAgIHZhbHVlID0gZGF0YVtrZXldLFxuICAgICAgICByZXN1bHQgPSAnLS0nICsgYm91bmRhcnk7XG5cbiAgICAgIHJlc3VsdCArPSAnXFxuQ29udGVudC1EaXNwb3NpdGlvbjogZm9ybS1kYXRhOyBuYW1lPVwiJyArIGtleSArICdcIic7XG5cbiAgICAgIGlmKHZhbHVlLmNvbnRlbnRUeXBlKXtcbiAgICAgICAgaWYodmFsdWUubmFtZSl7XG4gICAgICAgICAgcmVzdWx0ICs9ICc7IGZpbGVuYW1lPVwiJyArIHZhbHVlLm5hbWUgKyAnXCInO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVzdWx0ICs9ICdcXG5Db250ZW50LVR5cGU6ICcgKyB2YWx1ZS5jb250ZW50VHlwZTtcbiAgICAgIH1cblxuICAgICAgaWYodmFsdWUuY29udGVudFRyYW5zZmVyRW5jb2Rpbmcpe1xuICAgICAgICByZXN1bHQgKz0gJ1xcbkNvbnRlbnQtVHJhbnNmZXItRW5jb2Rpbmc6ICcgKyB2YWx1ZS5jb250ZW50VHJhbnNmZXJFbmNvZGluZztcbiAgICAgIH1cblxuICAgICAgaWYodmFsdWUuYm9keSl7XG4gICAgICAgIHJlc3VsdCArPSAnXFxuXFxuJyArIHZhbHVlLmJvZHk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQgKz0gJ1xcblxcbicgKyB2YWx1ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9KS5qb2luKCdcXG4nKTtcblxuICAgIGJvZHkgKz0gJ1xcbi0tJyArIGJvdW5kYXJ5ICsgJy0tXFxuJztcblxuICAgIGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddID0gY29udGVudFR5cGUucmVwbGFjZShcbiAgICAgICdtdWx0aXBhcnQvZm9ybS1kYXRhJyxcbiAgICAgICdtdWx0aXBhcnQvZm9ybS1kYXRhOyBib3VuZGFyeT0nICsgYm91bmRhcnlcbiAgICApO1xuICB9IGVsc2UgaWYoY29udGVudFR5cGUuaW5kZXhPZignYXBwbGljYXRpb24vanNvbicpICE9PSAtMSl7XG4gICAgaWYodHlwZW9mIGJvZHkgIT09ICdzdHJpbmcnKXtcbiAgICAgIGJvZHkgPSBKU09OLnN0cmluZ2lmeShib2R5KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYm9keTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBlcnJvclR5cGVzID0gcmVxdWlyZSgnLi9lcnJvclR5cGVzJyksXG4gIENvbnRlbnRUeXBlTm90U3VwcG9ydGVkRXJyb3IgPSBlcnJvclR5cGVzLkNvbnRlbnRUeXBlTm90U3VwcG9ydGVkRXJyb3IsXG4gIEFjY2VwdHNOb3RTdXBwb3J0ZWRFcnJvciA9IGVycm9yVHlwZXMuQWNjZXB0c05vdFN1cHBvcnRlZEVycm9yO1xuXG52YXIgREVGQVVMVF9BQ0NFUFQgPSAnYXBwbGljYXRpb24vanNvbic7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGdldFJlcXVlc3RIZWFkZXJzKG9wZXJhdGlvbiwgZGF0YSwgb3B0aW9ucyl7XG4gIGRhdGEgPSBkYXRhIHx8IHt9O1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICB2YXIgaGVhZGVycyA9IHt9O1xuXG4gIChvcGVyYXRpb24ucGFyYW1ldGVycyB8fCBbXSkuZm9yRWFjaChmdW5jdGlvbihwYXJhbSl7XG4gICAgaWYocGFyYW0ucGFyYW1UeXBlID09PSAnaGVhZGVyJyAmJiBkYXRhW3BhcmFtLm5hbWVdICE9IG51bGwpe1xuICAgICAgaGVhZGVyc1twYXJhbS5uYW1lXSA9IGRhdGFbcGFyYW0ubmFtZV07XG4gICAgfVxuICB9KTtcblxuICAvLyBQYXNzZWQgaGVhZGVyc1xuICBpZihvcHRpb25zLmhlYWRlcnMpe1xuICAgIE9iamVjdC5rZXlzKG9wdGlvbnMuaGVhZGVycykuZm9yRWFjaChmdW5jdGlvbihrZXkpe1xuICAgICAgaGVhZGVyc1trZXldID0gb3B0aW9ucy5oZWFkZXJzW2tleV07XG4gICAgfSk7XG4gIH1cblxuICAvLyBDb250ZW50LVR5cGVcbiAgdmFyIGNvbnRlbnRUeXBlID0gb3B0aW9ucy5jb250ZW50VHlwZSB8fCBnZXRDb250ZW50VHlwZShvcGVyYXRpb24sIGRhdGEsIG9wdGlvbnMpO1xuICBpZihjb250ZW50VHlwZSkge1xuICAgIGlmKGhhc0FjY2VwdChvcGVyYXRpb24sIGNvbnRlbnRUeXBlKSl7XG4gICAgICBoZWFkZXJzWydDb250ZW50LVR5cGUnXSA9IGNvbnRlbnRUeXBlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgQ29udGVudFR5cGVOb3RTdXBwb3J0ZWRFcnJvcihjb250ZW50VHlwZSwgb3BlcmF0aW9uKTtcbiAgICB9XG4gIH1cblxuICAvLyBBY2NlcHRcbiAgdmFyIGFjY2VwdCA9IG9wdGlvbnMuYWNjZXB0IHx8IERFRkFVTFRfQUNDRVBUO1xuICBpZihhY2NlcHQpe1xuICAgIGlmKGhhc0NvbnRlbnRUeXBlKG9wZXJhdGlvbiwgYWNjZXB0KSl7XG4gICAgICBoZWFkZXJzLkFjY2VwdCA9IGFjY2VwdDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEFjY2VwdHNOb3RTdXBwb3J0ZWRFcnJvcihhY2NlcHQsIG9wZXJhdGlvbik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGhlYWRlcnM7XG59O1xuXG5mdW5jdGlvbiBnZXRDb250ZW50VHlwZShvcGVyYXRpb24sIGRhdGEpe1xuICB2YXIgaGFzQm9keSA9IChvcGVyYXRpb24ucGFyYW1ldGVycyB8fCBbXSkuc29tZShmdW5jdGlvbihwYXJhbSl7XG4gICAgcmV0dXJuIHBhcmFtLnBhcmFtVHlwZSA9PT0gJ2JvZHknICYmIGRhdGFbcGFyYW0ubmFtZV0gIT09IHVuZGVmaW5lZDtcbiAgfSk7XG5cbiAgaWYgKGhhc0JvZHkpe1xuICAgIHJldHVybiAnYXBwbGljYXRpb24vanNvbic7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGhhc0Zvcm1QYXJhbXMgPSAob3BlcmF0aW9uLnBhcmFtZXRlcnMgfHwgW10pLnNvbWUoZnVuY3Rpb24ocGFyYW0pe1xuICAgICAgcmV0dXJuIHBhcmFtLnBhcmFtVHlwZSA9PT0gJ2Zvcm0nICYmIGRhdGFbcGFyYW0ubmFtZV0gIT09IHVuZGVmaW5lZDtcbiAgICB9KTtcblxuICAgIHZhciBoYXNGaWxlUGFyYW0gPSBoYXNGb3JtUGFyYW1zICYmXG4gICAgICAob3BlcmF0aW9uLnBhcmFtZXRlcnMgfHwgW10pLnNvbWUoZnVuY3Rpb24ocGFyYW0pe1xuICAgICAgICByZXR1cm4gcGFyYW0udHlwZSA9PT0gJ0ZpbGUnICYmIGRhdGFbcGFyYW0ubmFtZV0gIT09IHVuZGVmaW5lZDtcbiAgICAgIH0pO1xuXG4gICAgaWYoaGFzRmlsZVBhcmFtKSByZXR1cm4gJ211bHRpcGFydC9mb3JtLWRhdGEnO1xuICAgIGVsc2UgaWYoaGFzRm9ybVBhcmFtcykgcmV0dXJuICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnO1xuICB9XG59XG5cbi8vIEFjY2VwdHMgaXMgYW4gb3B0aW9uYWwgZmllbGQgaW4gdGhlIHNwZWMsIGJ1dCBtdXN0IGJlIGVuZm9yY2VkIHdoZW4gcHJlc2VudFxuZnVuY3Rpb24gaGFzQWNjZXB0KG9wZXJhdGlvbiwgY29udGVudFR5cGUpe1xuICB2YXIgYXBpRGVjbGFyYXRpb24gPSBvcGVyYXRpb24uYXBpT2JqZWN0LmFwaURlY2xhcmF0aW9uO1xuICB2YXIgYWNjZXB0cyA9IG9wZXJhdGlvbi5jb25zdW1lcyB8fCBhcGlEZWNsYXJhdGlvbi5jb25zdW1lcztcblxuICBpZihhY2NlcHRzICYmIGFjY2VwdHMubGVuZ3RoKXtcbiAgICByZXR1cm4gYWNjZXB0cy5pbmRleE9mKGNvbnRlbnRUeXBlKSAhPT0gLTE7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cbmV4cG9ydHMuaGFzQWNjZXB0ID0gaGFzQWNjZXB0O1xuXG4vLyBDb250ZW50LVR5cGUgKHByb2R1Y2VzKSBpcyBhbiBvcHRpb25hbCBmaWVsZCBpbiB0aGUgc3BlYywgYnV0IG11c3QgYmUgZW5mb3JjZWQgd2hlbiBwcmVzZW50XG5mdW5jdGlvbiBoYXNDb250ZW50VHlwZShvcGVyYXRpb24sIGNvbnRlbnRUeXBlKXtcbiAgdmFyIGFwaURlY2xhcmF0aW9uID0gb3BlcmF0aW9uLmFwaU9iamVjdC5hcGlEZWNsYXJhdGlvbixcbiAgICBjb250ZW50VHlwZXMgPSBvcGVyYXRpb24ucHJvZHVjZXMgfHwgYXBpRGVjbGFyYXRpb24ucHJvZHVjZXM7XG5cbiAgaWYoY29udGVudFR5cGVzICYmIGNvbnRlbnRUeXBlcy5sZW5ndGgpe1xuICAgIHJldHVybiBjb250ZW50VHlwZXMuaW5kZXhPZihjb250ZW50VHlwZSkgIT09IC0xO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG5leHBvcnRzLmhhc0NvbnRlbnRUeXBlID0gaGFzQ29udGVudFR5cGU7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBlcnJvclR5cGVzID0gcmVxdWlyZSgnLi9lcnJvclR5cGVzJyksXG4gIE1pc3NpbmdQYXRoUGFyYW1zRXJyb3IgPSBlcnJvclR5cGVzLk1pc3NpbmdQYXRoUGFyYW1zRXJyb3I7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZ2V0UmVxdWVzdFVybChvcGVyYXRpb24sIGRhdGEpe1xuICB2YXIgdXJsID0gZ2V0VXJsVGVtcGxhdGUob3BlcmF0aW9uKTtcblxuICB1cmwgPSBhcHBseVBhdGhQYXJhbXModXJsLCBvcGVyYXRpb24sIGRhdGEpO1xuXG4gIGlmKCFkYXRhKSByZXR1cm4gdXJsO1xuXG4gIHZhciBxdWVyeVBhcmFtcyA9IChvcGVyYXRpb24ucGFyYW1ldGVycyB8fCBbXSkuZmlsdGVyKGZ1bmN0aW9uKHBhcmFtKXtcbiAgICByZXR1cm4gcGFyYW0ucGFyYW1UeXBlID09PSAncXVlcnknICYmIGRhdGFbcGFyYW0ubmFtZV0gIT09IHVuZGVmaW5lZDtcbiAgfSkubWFwKGZ1bmN0aW9uKHBhcmFtKXtcbiAgICB2YXIga2V5ID0gcGFyYW0ubmFtZTtcbiAgICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KGtleSkgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQoZGF0YVtrZXldKTtcbiAgfSkuam9pbignJicpO1xuXG4gIGlmKHF1ZXJ5UGFyYW1zKSB1cmwgKz0gJz8nICsgcXVlcnlQYXJhbXM7XG5cbiAgcmV0dXJuIHVybDtcbn07XG5cbmZ1bmN0aW9uIGFwcGx5UGF0aFBhcmFtcyh1cmwsIG9wZXJhdGlvbiwgZGF0YSl7XG4gIHZhciBwYXRoUGFyYW1zID0gKG9wZXJhdGlvbi5wYXJhbWV0ZXJzIHx8IFtdKS5maWx0ZXIoZnVuY3Rpb24ocGFyYW0pe1xuICAgIHJldHVybiBwYXJhbS5wYXJhbVR5cGUgPT09ICdwYXRoJztcbiAgfSk7XG5cbiAgdmFyIG1pc3NpbmdQYXJhbXMgPSBwYXRoUGFyYW1zLmZpbHRlcihmdW5jdGlvbihwYXJhbSl7XG4gICAgcmV0dXJuIGRhdGFbcGFyYW0ubmFtZV0gPT09IHVuZGVmaW5lZDtcbiAgfSk7XG5cbiAgaWYobWlzc2luZ1BhcmFtcy5sZW5ndGgpe1xuICAgIHRocm93IG5ldyBNaXNzaW5nUGF0aFBhcmFtc0Vycm9yKG1pc3NpbmdQYXJhbXMubWFwKGZ1bmN0aW9uKHBhcmFtKXtcbiAgICAgIHJldHVybiBwYXJhbS5uYW1lO1xuICAgIH0pKTtcbiAgfVxuXG4gIHBhdGhQYXJhbXMuZm9yRWFjaChmdW5jdGlvbihwYXJhbSl7XG4gICAgdmFyIGtleSA9IHBhcmFtLm5hbWU7XG5cbiAgICB2YXIgZXhwID0gbmV3IFJlZ0V4cCgneycgKyBrZXkgKyAnW159XSp9JywgJ2dpJyk7XG5cbiAgICB2YXIgdmFsdWUgPSBkYXRhW2tleV0udG9TdHJpbmcoKTtcbiAgICBkZWxldGUgZGF0YVtrZXldO1xuICAgIHZhbHVlID0gdmFsdWUuc3BsaXQoJy8nKS5tYXAoZW5jb2RlVVJJQ29tcG9uZW50KS5qb2luKCcvJyk7XG5cbiAgICB1cmwgPSB1cmwucmVwbGFjZShleHAsIHZhbHVlKTtcbiAgfSk7XG5cbiAgcmV0dXJuIHVybDtcbn1cblxuZnVuY3Rpb24gZ2V0VXJsVGVtcGxhdGUob3BlcmF0aW9uKXtcbiAgdmFyIGFwaU9iamVjdCA9IG9wZXJhdGlvbi5hcGlPYmplY3Q7XG5cbiAgdmFyIGJhc2VQYXRoID0gYXBpT2JqZWN0LmFwaURlY2xhcmF0aW9uLmJhc2VQYXRoO1xuICB2YXIgcGF0aCA9IGFwaU9iamVjdC5wYXRoLnJlcGxhY2UoJ3tmb3JtYXR9JywgJ2pzb24nKTtcblxuICByZXR1cm4gYmFzZVBhdGggKyBwYXRoO1xufVxuIl19
(9)
});
