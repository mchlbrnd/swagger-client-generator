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
      return apiObject.operations.some(function(operation){
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21pY2hhZWwvc3JjL2dpdGh1Yi9mb3Jrcy9zd2FnZ2VyLWNsaWVudC1nZW5lcmF0b3Ivbm9kZV9tb2R1bGVzL2JvaWxlcnBsYXRlLWd1bHAvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsIi9ob21lL21pY2hhZWwvc3JjL2dpdGh1Yi9mb3Jrcy9zd2FnZ2VyLWNsaWVudC1nZW5lcmF0b3Ivbm9kZV9tb2R1bGVzL3N3YWdnZXItdmFsaWRhdGUvc3JjL2Vycm9yVHlwZXMuanMiLCIvaG9tZS9taWNoYWVsL3NyYy9naXRodWIvZm9ya3Mvc3dhZ2dlci1jbGllbnQtZ2VuZXJhdG9yL25vZGVfbW9kdWxlcy9zd2FnZ2VyLXZhbGlkYXRlL3NyYy9pbmRleC5qcyIsIi9ob21lL21pY2hhZWwvc3JjL2dpdGh1Yi9mb3Jrcy9zd2FnZ2VyLWNsaWVudC1nZW5lcmF0b3Ivbm9kZV9tb2R1bGVzL3N3YWdnZXItdmFsaWRhdGUvc3JjL3ZhbGlkYXRlQXJyYXkuanMiLCIvaG9tZS9taWNoYWVsL3NyYy9naXRodWIvZm9ya3Mvc3dhZ2dlci1jbGllbnQtZ2VuZXJhdG9yL25vZGVfbW9kdWxlcy9zd2FnZ2VyLXZhbGlkYXRlL3NyYy92YWxpZGF0ZURhdGFUeXBlLmpzIiwiL2hvbWUvbWljaGFlbC9zcmMvZ2l0aHViL2ZvcmtzL3N3YWdnZXItY2xpZW50LWdlbmVyYXRvci9ub2RlX21vZHVsZXMvc3dhZ2dlci12YWxpZGF0ZS9zcmMvdmFsaWRhdGVNb2RlbC5qcyIsIi9ob21lL21pY2hhZWwvc3JjL2dpdGh1Yi9mb3Jrcy9zd2FnZ2VyLWNsaWVudC1nZW5lcmF0b3Ivbm9kZV9tb2R1bGVzL3N3YWdnZXItdmFsaWRhdGUvc3JjL3ZhbGlkYXRlT3BlcmF0aW9uLmpzIiwiL2hvbWUvbWljaGFlbC9zcmMvZ2l0aHViL2ZvcmtzL3N3YWdnZXItY2xpZW50LWdlbmVyYXRvci9ub2RlX21vZHVsZXMvc3dhZ2dlci12YWxpZGF0ZS9zcmMvdmFsaWRhdGVQcmltaXRpdmVUeXBlcy5qcyIsIi9ob21lL21pY2hhZWwvc3JjL2dpdGh1Yi9mb3Jrcy9zd2FnZ2VyLWNsaWVudC1nZW5lcmF0b3Ivc3JjL2FwcGx5QXV0aERhdGEuanMiLCIvaG9tZS9taWNoYWVsL3NyYy9naXRodWIvZm9ya3Mvc3dhZ2dlci1jbGllbnQtZ2VuZXJhdG9yL3NyYy9jcmVhdGVDbGllbnQuanMiLCIvaG9tZS9taWNoYWVsL3NyYy9naXRodWIvZm9ya3Mvc3dhZ2dlci1jbGllbnQtZ2VuZXJhdG9yL3NyYy9jcmVhdGVPcGVyYXRpb25IYW5kbGVyLmpzIiwiL2hvbWUvbWljaGFlbC9zcmMvZ2l0aHViL2ZvcmtzL3N3YWdnZXItY2xpZW50LWdlbmVyYXRvci9zcmMvZXJyb3JUeXBlcy5qcyIsIi9ob21lL21pY2hhZWwvc3JjL2dpdGh1Yi9mb3Jrcy9zd2FnZ2VyLWNsaWVudC1nZW5lcmF0b3Ivc3JjL2dldFJlcXVlc3RCb2R5LmpzIiwiL2hvbWUvbWljaGFlbC9zcmMvZ2l0aHViL2ZvcmtzL3N3YWdnZXItY2xpZW50LWdlbmVyYXRvci9zcmMvZ2V0UmVxdWVzdEhlYWRlcnMuanMiLCIvaG9tZS9taWNoYWVsL3NyYy9naXRodWIvZm9ya3Mvc3dhZ2dlci1jbGllbnQtZ2VuZXJhdG9yL3NyYy9nZXRSZXF1ZXN0VXJsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaElBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKX12YXIgZj1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwoZi5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxmLGYuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBEYXRhVHlwZVZhbGlkYXRpb25FcnJvcihtZXNzYWdlKXtcbiAgdGhpcy5uYW1lID0gJ0RhdGFUeXBlVmFsaWRhdGlvbkVycm9yJztcbiAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZSB8fCAnSW52YWxpZCBkYXRhIHR5cGUnO1xufVxuRGF0YVR5cGVWYWxpZGF0aW9uRXJyb3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShFcnJvci5wcm90b3R5cGUpO1xuRGF0YVR5cGVWYWxpZGF0aW9uRXJyb3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gRGF0YVR5cGVWYWxpZGF0aW9uRXJyb3I7XG5leHBvcnRzLkRhdGFUeXBlVmFsaWRhdGlvbkVycm9yID0gRGF0YVR5cGVWYWxpZGF0aW9uRXJyb3I7XG5cbmZ1bmN0aW9uIE5vdEFuSW50ZWdlckVycm9yKHZhbHVlKXtcbiAgdGhpcy5uYW1lID0gJ05vdEFuSW50ZWdlckVycm9yJztcbiAgdGhpcy5tZXNzYWdlID0gJ1wiJyArIHZhbHVlICsgJ1wiIGlzIG5vdCBhbiBpbnRlZ2VyJztcbiAgdGhpcy52YWx1ZSA9IHZhbHVlO1xufVxuTm90QW5JbnRlZ2VyRXJyb3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShEYXRhVHlwZVZhbGlkYXRpb25FcnJvci5wcm90b3R5cGUpO1xuTm90QW5JbnRlZ2VyRXJyb3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gTm90QW5JbnRlZ2VyRXJyb3I7XG5leHBvcnRzLk5vdEFuSW50ZWdlckVycm9yID0gTm90QW5JbnRlZ2VyRXJyb3I7XG5cbmZ1bmN0aW9uIE5vdEFOdW1iZXJFcnJvcih2YWx1ZSwgYWN0dWFsVHlwZSl7XG4gIHRoaXMubmFtZSA9ICdOb3RBTnVtYmVyRXJyb3InO1xuICB0aGlzLm1lc3NhZ2UgPSAnXCInICsgdmFsdWUgKyAnXCIgaXMgbm90IGEgbnVtYmVyJztcbiAgaWYoYWN0dWFsVHlwZSkgdGhpcy5tZXNzYWdlICs9ICcgKGdvdCBhICcgKyBhY3R1YWxUeXBlICsgJyBpbnN0ZWFkKSc7XG5cbiAgdGhpcy52YWx1ZSA9IHZhbHVlO1xufVxuTm90QU51bWJlckVycm9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRGF0YVR5cGVWYWxpZGF0aW9uRXJyb3IucHJvdG90eXBlKTtcbk5vdEFOdW1iZXJFcnJvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBOb3RBTnVtYmVyRXJyb3I7XG5leHBvcnRzLk5vdEFOdW1iZXJFcnJvciA9IE5vdEFOdW1iZXJFcnJvcjtcblxuZnVuY3Rpb24gTnVtYmVyVG9vTGFyZ2VFcnJvcih2YWx1ZSwgbWF4KXtcbiAgdGhpcy5uYW1lID0gJ051bWJlclRvb0xhcmdlRXJyb3InO1xuICB0aGlzLm1lc3NhZ2UgPSAnXCInICsgdmFsdWUgKyAnXCIgaXMgYWJvdmUgdGhlIG1heGltdW0gb2YgJyArIG1heC50b1N0cmluZygpO1xuICB0aGlzLnZhbHVlID0gdmFsdWU7XG59XG5OdW1iZXJUb29MYXJnZUVycm9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRGF0YVR5cGVWYWxpZGF0aW9uRXJyb3IucHJvdG90eXBlKTtcbk51bWJlclRvb0xhcmdlRXJyb3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gTnVtYmVyVG9vTGFyZ2VFcnJvcjtcbmV4cG9ydHMuTnVtYmVyVG9vTGFyZ2VFcnJvciA9IE51bWJlclRvb0xhcmdlRXJyb3I7XG5cbmZ1bmN0aW9uIE51bWJlclRvb1NtYWxsRXJyb3IodmFsdWUsIG1heCl7XG4gIHRoaXMubmFtZSA9ICdOdW1iZXJUb29TbWFsbEVycm9yJztcbiAgdGhpcy5tZXNzYWdlID0gJ1wiJyArIHZhbHVlICsgJ1wiIGlzIGFib3ZlIHRoZSBtYXhpbXVtIG9mICcgKyBtYXgudG9TdHJpbmcoKTtcbiAgdGhpcy52YWx1ZSA9IHZhbHVlO1xufVxuTnVtYmVyVG9vU21hbGxFcnJvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKERhdGFUeXBlVmFsaWRhdGlvbkVycm9yLnByb3RvdHlwZSk7XG5OdW1iZXJUb29TbWFsbEVycm9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IE51bWJlclRvb1NtYWxsRXJyb3I7XG5leHBvcnRzLk51bWJlclRvb1NtYWxsRXJyb3IgPSBOdW1iZXJUb29TbWFsbEVycm9yO1xuXG5mdW5jdGlvbiBOb3RBQm9vbGVhbkVycm9yKHZhbHVlLCBhY3R1YWxUeXBlKXtcbiAgdGhpcy5uYW1lID0gJ05vdEFCb29sZWFuRXJyb3InO1xuICB0aGlzLm1lc3NhZ2UgPSAnXCInICsgdmFsdWUgKyAnXCIgaXMgbm90IGEgYm9vbGVhbic7XG4gIGlmKGFjdHVhbFR5cGUpIHRoaXMubWVzc2FnZSArPSAnIChnb3QgYSAnICsgYWN0dWFsVHlwZSArICcgaW5zdGVhZCknO1xuXG4gIHRoaXMudmFsdWUgPSB2YWx1ZTtcbn1cbk5vdEFCb29sZWFuRXJyb3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShEYXRhVHlwZVZhbGlkYXRpb25FcnJvci5wcm90b3R5cGUpO1xuTm90QUJvb2xlYW5FcnJvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBOb3RBQm9vbGVhbkVycm9yO1xuZXhwb3J0cy5Ob3RBQm9vbGVhbkVycm9yID0gTm90QUJvb2xlYW5FcnJvcjtcblxuZnVuY3Rpb24gTm90QW5BcnJheUVycm9yKHZhbHVlLCBhY3R1YWxUeXBlKXtcbiAgdGhpcy5uYW1lID0gJ05vdEFuQXJyYXlFcnJvcic7XG4gIHRoaXMubWVzc2FnZSA9ICdcIicgKyB2YWx1ZSArICdcIiBpcyBub3QgYW4gYXJyYXknO1xuICBpZihhY3R1YWxUeXBlKSB0aGlzLm1lc3NhZ2UgKz0gJyAoZ290IGEgJyArIGFjdHVhbFR5cGUgKyAnIGluc3RlYWQpJztcblxuICB0aGlzLnZhbHVlID0gdmFsdWU7XG59XG5Ob3RBbkFycmF5RXJyb3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShEYXRhVHlwZVZhbGlkYXRpb25FcnJvci5wcm90b3R5cGUpO1xuTm90QW5BcnJheUVycm9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IE5vdEFuQXJyYXlFcnJvcjtcbmV4cG9ydHMuTm90QW5BcnJheUVycm9yID0gTm90QW5BcnJheUVycm9yO1xuXG5mdW5jdGlvbiBEdXBsaWNhdGVJblNldEVycm9yKGFyciwgZHVwZXMpe1xuICB0aGlzLm5hbWUgPSAnRHVwbGljYXRlSW5TZXRFcnJvcic7XG4gIHRoaXMubWVzc2FnZSA9ICdEdXBsaWNhdGVzIChcIicgKyBkdXBlcy5qb2luKCdcIiwgXCInKSArICdcIikgZm91bmQgaW4gc2V0OiBbXCInICsgYXJyLmpvaW4oJ1wiLCBcIicpICsgJ1wiJztcbiAgdGhpcy5kdXBlcyA9IGR1cGVzO1xuICB0aGlzLnZhbHVlID0gYXJyO1xufVxuRHVwbGljYXRlSW5TZXRFcnJvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKERhdGFUeXBlVmFsaWRhdGlvbkVycm9yLnByb3RvdHlwZSk7XG5EdXBsaWNhdGVJblNldEVycm9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IER1cGxpY2F0ZUluU2V0RXJyb3I7XG5leHBvcnRzLkR1cGxpY2F0ZUluU2V0RXJyb3IgPSBEdXBsaWNhdGVJblNldEVycm9yO1xuXG5mdW5jdGlvbiBOb3RWb2lkRXJyb3IodmFsdWUsIGFjdHVhbFR5cGUpe1xuICB0aGlzLm5hbWUgPSAnTm90Vm9pZEVycm9yJztcbiAgdGhpcy5tZXNzYWdlID0gJ1wiJyArIHZhbHVlICsgJ1wiIGlzIG5vdCBudWxsIG9yIHVuZGVmaW5lZCc7XG4gIGlmKGFjdHVhbFR5cGUpIHRoaXMubWVzc2FnZSArPSAnIChnb3QgYSAnICsgYWN0dWFsVHlwZSArICcgaW5zdGVhZCknO1xuXG4gIHRoaXMudmFsdWUgPSB2YWx1ZTtcbn1cbk5vdFZvaWRFcnJvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKERhdGFUeXBlVmFsaWRhdGlvbkVycm9yLnByb3RvdHlwZSk7XG5Ob3RWb2lkRXJyb3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gTm90Vm9pZEVycm9yO1xuZXhwb3J0cy5Ob3RWb2lkRXJyb3IgPSBOb3RWb2lkRXJyb3I7XG5cbmZ1bmN0aW9uIE5vdEFTdHJpbmdFcnJvcih2YWx1ZSwgYWN0dWFsVHlwZSl7XG4gIHRoaXMubmFtZSA9ICdOb3RBU3RyaW5nRXJyb3InO1xuICB0aGlzLm1lc3NhZ2UgPSAnXCInICsgdmFsdWUgKyAnXCIgaXMgbm90IGEgc3RyaW5nJztcbiAgaWYoYWN0dWFsVHlwZSkgdGhpcy5tZXNzYWdlICs9ICcgKGdvdCBhICcgKyBhY3R1YWxUeXBlICsgJyBpbnN0ZWFkKSc7XG5cbiAgdGhpcy52YWx1ZSA9IHZhbHVlO1xufVxuTm90QVN0cmluZ0Vycm9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRGF0YVR5cGVWYWxpZGF0aW9uRXJyb3IucHJvdG90eXBlKTtcbk5vdEFTdHJpbmdFcnJvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBOb3RBU3RyaW5nRXJyb3I7XG5leHBvcnRzLk5vdEFTdHJpbmdFcnJvciA9IE5vdEFTdHJpbmdFcnJvcjtcblxuZnVuY3Rpb24gU3RyaW5nTm90SW5FbnVtRXJyb3IodmFsdWUsIGFjY2VwdGFibGVWYWx1ZXMpe1xuICB0aGlzLm5hbWUgPSAnU3RyaW5nTm90SW5FbnVtRXJyb3InO1xuICB0aGlzLm1lc3NhZ2UgPSAnXCInICsgdmFsdWUgKyAnXCIgaXMgbm90IGFuIGFjY2VwdGFibGUgdmFsdWU6IFwiJyArIGFjY2VwdGFibGVWYWx1ZXMuam9pbignXCIsIFwiJykgKyAnXCInO1xuIFxuICB0aGlzLnZhbHVlID0gdmFsdWU7XG59XG5TdHJpbmdOb3RJbkVudW1FcnJvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKERhdGFUeXBlVmFsaWRhdGlvbkVycm9yLnByb3RvdHlwZSk7XG5TdHJpbmdOb3RJbkVudW1FcnJvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBTdHJpbmdOb3RJbkVudW1FcnJvcjtcbmV4cG9ydHMuU3RyaW5nTm90SW5FbnVtRXJyb3IgPSBTdHJpbmdOb3RJbkVudW1FcnJvcjtcblxuXG5mdW5jdGlvbiBFcnJvcnNJbkFycmF5RWxlbWVudHNFcnJvcihlcnJvcnMpe1xuICB0aGlzLm5hbWUgPSAnRXJyb3JzSW5BcnJheUVsZW1lbnRzRXJyb3InO1xuICB0aGlzLm1lc3NhZ2UgPSAnRXJyb3JzIGluIGFycmF5IGVsZW1lbnRzOlxcblxcdCcgKyBlcnJvcnMuam9pbignLFxcblxcdCcpO1xuICB0aGlzLmVycm9ycyA9IGVycm9ycztcbn1cbkVycm9yc0luQXJyYXlFbGVtZW50c0Vycm9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRGF0YVR5cGVWYWxpZGF0aW9uRXJyb3IucHJvdG90eXBlKTtcbkVycm9yc0luQXJyYXlFbGVtZW50c0Vycm9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEVycm9yc0luQXJyYXlFbGVtZW50c0Vycm9yO1xuZXhwb3J0cy5FcnJvcnNJbkFycmF5RWxlbWVudHNFcnJvciA9IEVycm9yc0luQXJyYXlFbGVtZW50c0Vycm9yO1xuXG5mdW5jdGlvbiBNaXNzaW5nVmFsdWVFcnJvcigpe1xuICB0aGlzLm5hbWUgPSAnTWlzc2luZ1ZhbHVlRXJyb3InO1xuICBcbiAgdGhpcy5tZXNzYWdlID0gJ1RoaXMgdmFsdWUgaXMgcmVxdWlyZWQgYnV0IG1pc3NpbmcnO1xufVxuTWlzc2luZ1ZhbHVlRXJyb3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShEYXRhVHlwZVZhbGlkYXRpb25FcnJvci5wcm90b3R5cGUpO1xuTWlzc2luZ1ZhbHVlRXJyb3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gTWlzc2luZ1ZhbHVlRXJyb3I7XG5leHBvcnRzLk1pc3NpbmdWYWx1ZUVycm9yID0gTWlzc2luZ1ZhbHVlRXJyb3I7XG5cbmZ1bmN0aW9uIFZhbGlkYXRpb25FcnJvcihzcGVjTmFtZSwgc3BlYywgZXJyb3Ipe1xuICB0aGlzLm5hbWUgPSAnVmFsaWRhdGlvbkVycm9yJztcbiAgdGhpcy5zcGVjTmFtZSA9IHNwZWNOYW1lO1xuICB0aGlzLnNwZWMgPSBzcGVjO1xuICB0aGlzLmVycm9yID0gZXJyb3I7XG5cbiAgdGhpcy5tZXNzYWdlID0gc3BlY05hbWUgKyAnIGlzIGludmFsaWQ6ICcgKyBlcnJvci5tZXNzYWdlO1xufVxuVmFsaWRhdGlvbkVycm9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRGF0YVR5cGVWYWxpZGF0aW9uRXJyb3IucHJvdG90eXBlKTtcblZhbGlkYXRpb25FcnJvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBWYWxpZGF0aW9uRXJyb3I7XG5leHBvcnRzLlZhbGlkYXRpb25FcnJvciA9IFZhbGlkYXRpb25FcnJvcjtcblxuZnVuY3Rpb24gVmFsaWRhdGlvbkVycm9ycyh2YWx1ZSwgc3BlY05hbWUsIHNwZWMsIGVycm9ycyl7XG4gIHRoaXMubmFtZSA9ICdWYWxpZGF0aW9uRXJyb3JzJztcblxuICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gIHRoaXMuc3BlY05hbWUgPSBzcGVjTmFtZTtcbiAgdGhpcy5zcGVjID0gc3BlYztcbiAgdGhpcy5lcnJvcnMgPSBlcnJvcnMgfHwgW107XG5cbiAgdGhpcy5tZXNzYWdlID0gc3BlY05hbWUgKyAnIGlzIGludmFsaWQnO1xuXG4gIGlmKHRoaXMuZXJyb3JzLmxlbmd0aCl7XG4gICAgdGhpcy5tZXNzYWdlICs9ICc6XFxuXFx0JyArIHRoaXMuZXJyb3JzLm1hcChmdW5jdGlvbihlKXsgcmV0dXJuIGUubWVzc2FnZTsgfSkuam9pbignXFxuXFx0Jyk7XG4gIH1cbn1cblZhbGlkYXRpb25FcnJvcnMucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShEYXRhVHlwZVZhbGlkYXRpb25FcnJvci5wcm90b3R5cGUpO1xuVmFsaWRhdGlvbkVycm9ycy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBWYWxpZGF0aW9uRXJyb3JzO1xuZXhwb3J0cy5WYWxpZGF0aW9uRXJyb3JzID0gVmFsaWRhdGlvbkVycm9ycztcbiIsImV4cG9ydHMuZGF0YVR5cGUgPSByZXF1aXJlKCcuL3ZhbGlkYXRlRGF0YVR5cGUnKTtcbmV4cG9ydHMubW9kZWwgPSByZXF1aXJlKCcuL3ZhbGlkYXRlTW9kZWwnKTtcbmV4cG9ydHMub3BlcmF0aW9uID0gcmVxdWlyZSgnLi92YWxpZGF0ZU9wZXJhdGlvbicpO1xuZXhwb3J0cy5hcnJheSA9IHJlcXVpcmUoJy4vdmFsaWRhdGVBcnJheScpO1xuZXhwb3J0cy5lcnJvcnMgPSByZXF1aXJlKCcuL2Vycm9yVHlwZXMnKTtcblxudmFyIHByaW1pdGl2ZXMgPSByZXF1aXJlKCcuL3ZhbGlkYXRlUHJpbWl0aXZlVHlwZXMnKTtcbmV4cG9ydHMucHJpbWl0aXZlID0ge1xuICBpbnRlZ2VyOiBwcmltaXRpdmVzLnZhbGlkYXRlSW50ZWdlcixcbiAgbnVtYmVyOiBwcmltaXRpdmVzLnZhbGlkYXRlTnVtYmVyLFxuICBzdHJpbmc6IHByaW1pdGl2ZXMudmFsaWRhdGVTdHJpbmcsXG4gIGJvb2xlYW46IHByaW1pdGl2ZXMudmFsaWRhdGVCb29sZWFuLFxuICB2b2lkOiBwcmltaXRpdmVzLnZhbGlkYXRlVm9pZCxcbiAgZmlsZTogcHJpbWl0aXZlcy52YWxpZGF0ZUZpbGVcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBlcnJvclR5cGVzID0gcmVxdWlyZSgnLi9lcnJvclR5cGVzJyksXG4gIHZhbGlkYXRlID0gcmVxdWlyZSgnLi9pbmRleCcpO1xuXG5mdW5jdGlvbiB2YWxpZGF0ZUFycmF5KGNhbmRpZGF0ZSwgZGF0YVR5cGUsIG1vZGVscyl7XG4gIGlmKCFBcnJheS5pc0FycmF5KGNhbmRpZGF0ZSkpe1xuICAgIHJldHVybiBuZXcgZXJyb3JUeXBlcy5Ob3RBbkFycmF5RXJyb3IoY2FuZGlkYXRlLCB0eXBlb2YgY2FuZGlkYXRlKTtcbiAgfVxuXG4gIHZhciBpdGVtcyA9IGRhdGFUeXBlLml0ZW1zO1xuXG4gIGlmKGRhdGFUeXBlLnVuaXF1ZUl0ZW1zKXtcbiAgICB2YXIgZHVwZUNoZWNrID0gW107XG4gICAgdmFyIGR1cGVzID0gY2FuZGlkYXRlLmZpbHRlcihmdW5jdGlvbih2YWx1ZSl7XG4gICAgICB2YXIgc2lnbmF0dXJlO1xuICAgICAgaWYoaXRlbXMuJHJlZil7XG4gICAgICAgIHNpZ25hdHVyZSA9IEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNpZ25hdHVyZSA9IHZhbHVlO1xuICAgICAgfVxuICAgICAgaWYoZHVwZUNoZWNrLmluZGV4T2Yoc2lnbmF0dXJlKSAhPT0gLTEpe1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGR1cGVDaGVjay5wdXNoKHNpZ25hdHVyZSk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmKGR1cGVzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIG5ldyBlcnJvclR5cGVzLkR1cGxpY2F0ZUluU2V0RXJyb3IoY2FuZGlkYXRlLCBkdXBlcyk7XG4gICAgfVxuICB9XG5cbiAgdmFyIGVycm9ycztcblxuICBpZihpdGVtcy4kcmVmKXtcbiAgICB2YXIgbW9kZWwgPSBtb2RlbHNbaXRlbXMuJHJlZl07XG4gICAgZXJyb3JzID0gY2FuZGlkYXRlLmZpbHRlcihmdW5jdGlvbih2YWx1ZSl7XG4gICAgICByZXR1cm4gdmFsaWRhdGUubW9kZWwodmFsdWUsIG1vZGVsLCBtb2RlbHMpO1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIGVycm9ycyA9IGNhbmRpZGF0ZS5maWx0ZXIoZnVuY3Rpb24odmFsdWUpe1xuICAgICAgcmV0dXJuIHZhbGlkYXRlLmRhdGFUeXBlKHZhbHVlLCBpdGVtcywgbW9kZWxzKTtcbiAgICB9KTtcbiAgfVxuXG4gIGlmKGVycm9ycy5sZW5ndGgpe1xuICAgIHJldHVybiBuZXcgZXJyb3JUeXBlcy5FcnJvcnNJbkFycmF5RWxlbWVudHNFcnJvcihlcnJvcnMpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHZhbGlkYXRlQXJyYXk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdmFsaWRhdGUgPSByZXF1aXJlKCcuL2luZGV4Jyk7XG4gIFxuZnVuY3Rpb24gdmFsaWRhdGVEYXRhVHlwZShjYW5kaWRhdGUsIGRhdGFUeXBlLCBtb2RlbHMpe1xuICBtb2RlbHMgPSBtb2RlbHMgfHwge307XG4gICAgICBcbiAgdmFyIHR5cGUgPSBkYXRhVHlwZS50eXBlIHx8IGRhdGFUeXBlLmRhdGFUeXBlIHx8IGRhdGFUeXBlLiRyZWY7XG5cbiAgc3dpdGNoKHR5cGUpe1xuICAgIGNhc2UgJ2ludGVnZXInOlxuICAgICAgcmV0dXJuIHZhbGlkYXRlLnByaW1pdGl2ZS5pbnRlZ2VyKGNhbmRpZGF0ZSwgZGF0YVR5cGUpO1xuICAgIGNhc2UgJ251bWJlcic6XG4gICAgICByZXR1cm4gdmFsaWRhdGUucHJpbWl0aXZlLm51bWJlcihjYW5kaWRhdGUsIGRhdGFUeXBlKTtcbiAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgcmV0dXJuIHZhbGlkYXRlLnByaW1pdGl2ZS5zdHJpbmcoY2FuZGlkYXRlLCBkYXRhVHlwZSk7XG4gICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICByZXR1cm4gdmFsaWRhdGUucHJpbWl0aXZlLmJvb2xlYW4oY2FuZGlkYXRlKTtcbiAgICBjYXNlICdhcnJheSc6XG4gICAgICByZXR1cm4gdmFsaWRhdGUuYXJyYXkoY2FuZGlkYXRlLCBkYXRhVHlwZSwgbW9kZWxzKTtcbiAgICBjYXNlICd2b2lkJzpcbiAgICAgIHJldHVybiB2YWxpZGF0ZS5wcmltaXRpdmUudm9pZChjYW5kaWRhdGUpO1xuICAgIGNhc2UgJ0ZpbGUnOlxuICAgICAgcmV0dXJuIHZhbGlkYXRlLnByaW1pdGl2ZS5maWxlKCk7XG4gICAgZGVmYXVsdDpcbiAgICAgIC8vIEFzc3VtZWQgdG8gYmUgY29tcGxleCBtb2RlbFxuICAgICAgdmFyIG1vZGVsID0gbW9kZWxzW3R5cGVdO1xuICAgICAgcmV0dXJuIHZhbGlkYXRlLm1vZGVsKGNhbmRpZGF0ZSwgbW9kZWwsIG1vZGVscyk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gdmFsaWRhdGVEYXRhVHlwZTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBlcnJvclR5cGVzID0gcmVxdWlyZSgnLi9lcnJvclR5cGVzJyksXG4gIFZhbGlkYXRpb25FcnJvciA9IGVycm9yVHlwZXMuVmFsaWRhdGlvbkVycm9yLFxuICBWYWxpZGF0aW9uRXJyb3JzID0gZXJyb3JUeXBlcy5WYWxpZGF0aW9uRXJyb3JzLFxuICBNaXNzaW5nVmFsdWVFcnJvciA9IGVycm9yVHlwZXMuTWlzc2luZ1ZhbHVlRXJyb3IsXG4gIHZhbGlkYXRlID0gcmVxdWlyZSgnLi9pbmRleCcpO1xuXG4vLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzEyMjEwMi93aGF0LWlzLXRoZS1tb3N0LWVmZmljaWVudC13YXktdG8tY2xvbmUtYW4tb2JqZWN0XG5mdW5jdGlvbiBjbG9uZShvYmope1xuICAgIGlmKG9iaiA9PT0gbnVsbCB8fCBvYmogPT09IHVuZGVmaW5lZCB8fCB0eXBlb2Ygb2JqICE9PSAnb2JqZWN0JykgcmV0dXJuIG9iajtcblxuICAgIGlmKEFycmF5LmlzQXJyYXkob2JqKSkgcmV0dXJuIG9iai5zbGljZSgpO1xuXG4gICAgdmFyIHRlbXAgPSB7fTtcblxuICAgIGZvcih2YXIga2V5IGluIG9iailcbiAgICAgICAgdGVtcFtrZXldID0gY2xvbmUob2JqW2tleV0pO1xuICAgIHJldHVybiB0ZW1wO1xufVxuXG5mdW5jdGlvbiBhZGRJbmhlcnRpZWRQcm9wZXJ0aWVzKG1vZGVsLCBtb2RlbElkLCBtb2RlbHMpe1xuICB2YXIgcGFyZW50O1xuXG4gIE9iamVjdC5rZXlzKG1vZGVscykuc29tZShmdW5jdGlvbihtb2RlbE5hbWUpe1xuICAgIHZhciBwb3RlbnRpYWxQYXJlbnQgPSBtb2RlbHNbbW9kZWxOYW1lXTtcbiAgICBpZiAoIXBvdGVudGlhbFBhcmVudC5zdWJUeXBlcykgcmV0dXJuO1xuXG4gICAgaWYocG90ZW50aWFsUGFyZW50LnN1YlR5cGVzLmluZGV4T2YobW9kZWxJZCkgIT09IC0xKXtcbiAgICAgIHBhcmVudCA9IHBvdGVudGlhbFBhcmVudDtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgaWYoIXBhcmVudCkgcmV0dXJuO1xuXG4gIGZvcih2YXIgcHJvcGVydHlOYW1lIGluIHBhcmVudC5wcm9wZXJ0aWVzKXtcbiAgICBtb2RlbC5wcm9wZXJ0aWVzW3Byb3BlcnR5TmFtZV0gPSBwYXJlbnQucHJvcGVydGllc1twcm9wZXJ0eU5hbWVdO1xuICB9XG4gIFxuICBpZihwYXJlbnQucmVxdWlyZWQpIG1vZGVsLnJlcXVpcmVkID0gbW9kZWwucmVxdWlyZWQuY29uY2F0KHBhcmVudC5yZXF1aXJlZCk7XG5cbiAgYWRkSW5oZXJ0aWVkUHJvcGVydGllcyhtb2RlbCwgcGFyZW50LmlkLCBtb2RlbHMpO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZU1vZGVsKGNhbmRpZGF0ZSwgbW9kZWwsIG1vZGVscyl7XG4gIGlmKGNhbmRpZGF0ZSA9PT0gbnVsbCB8fCB0eXBlb2YgY2FuZGlkYXRlICE9PSAnb2JqZWN0Jyl7XG4gICAgcmV0dXJuIG5ldyBWYWxpZGF0aW9uRXJyb3JzKGNhbmRpZGF0ZSwgbW9kZWwpO1xuICB9XG5cbiAgbW9kZWxzID0gbW9kZWxzIHx8IHt9O1xuXG4gIG1vZGVsID0gY2xvbmUobW9kZWwpO1xuICBpZighbW9kZWwucmVxdWlyZWQpIG1vZGVsLnJlcXVpcmVkID0gW107XG4gIGFkZEluaGVydGllZFByb3BlcnRpZXMobW9kZWwsIG1vZGVsLmlkLCBtb2RlbHMpO1xuXG4gIHZhciBlcnJvcnMgPSBbXTtcblxuICBtb2RlbC5yZXF1aXJlZC5mb3JFYWNoKGZ1bmN0aW9uKHByb3BlcnR5TmFtZSl7XG4gICAgaWYgKGNhbmRpZGF0ZVtwcm9wZXJ0eU5hbWVdICE9PSB1bmRlZmluZWQpIHJldHVybjtcblxuICAgIHZhciBwcm9wZXJ0eSA9IG1vZGVsLnByb3BlcnRpZXNbcHJvcGVydHlOYW1lXTtcbiAgICB2YXIgZXJyb3IgPSBuZXcgTWlzc2luZ1ZhbHVlRXJyb3IoKTtcbiAgICBlcnJvcnMucHVzaChuZXcgVmFsaWRhdGlvbkVycm9yKHByb3BlcnR5TmFtZSwgcHJvcGVydHksIGVycm9yKSk7XG4gIH0pO1xuXG4gIE9iamVjdC5rZXlzKGNhbmRpZGF0ZSkuZm9yRWFjaChmdW5jdGlvbihwcm9wZXJ0eU5hbWUpe1xuICAgIHZhciBwcm9wZXJ0eSA9IG1vZGVsLnByb3BlcnRpZXNbcHJvcGVydHlOYW1lXTtcbiAgICBcbiAgICBpZihwcm9wZXJ0eSA9PT0gdW5kZWZpbmVkKSByZXR1cm47XG5cbiAgICB2YXIgZXJyb3IgPSB2YWxpZGF0ZS5kYXRhVHlwZShjYW5kaWRhdGVbcHJvcGVydHlOYW1lXSwgcHJvcGVydHksIG1vZGVscyk7XG4gICAgaWYoZXJyb3Ipe1xuICAgICAgZXJyb3JzLnB1c2gobmV3IFZhbGlkYXRpb25FcnJvcihwcm9wZXJ0eU5hbWUsIHByb3BlcnR5LCBlcnJvcikpO1xuICAgIH1cbiAgfSk7XG4gIFxuICBpZihlcnJvcnMubGVuZ3RoKXtcbiAgICByZXR1cm4gbmV3IFZhbGlkYXRpb25FcnJvcnMoY2FuZGlkYXRlLCBtb2RlbC5pZCwgbW9kZWwsIGVycm9ycyk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gdmFsaWRhdGVNb2RlbDsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBlcnJvclR5cGVzID0gcmVxdWlyZSgnLi9lcnJvclR5cGVzJyksXG4gIFZhbGlkYXRpb25FcnJvciA9IGVycm9yVHlwZXMuVmFsaWRhdGlvbkVycm9yLFxuICBWYWxpZGF0aW9uRXJyb3JzID0gZXJyb3JUeXBlcy5WYWxpZGF0aW9uRXJyb3JzLFxuICBNaXNzaW5nVmFsdWVFcnJvciA9IGVycm9yVHlwZXMuTWlzc2luZ1ZhbHVlRXJyb3IsXG4gIHZhbGlkYXRlID0gcmVxdWlyZSgnLi9pbmRleCcpO1xuXG5mdW5jdGlvbiB2YWxpZGF0ZU9wZXJhdGlvbihjYW5kaWRhdGUsIG9wZXJhdGlvbiwgbW9kZWxzKXtcbiAgdmFyIGVycm9ycyA9IFtdO1xuXG4gIHZhciBwcmVzZW50UGFyYW1zID0gKG9wZXJhdGlvbi5wYXJhbWV0ZXJzIHx8IFtdKS5maWx0ZXIoZnVuY3Rpb24ocGFyYW0pe1xuICAgIGlmIChjYW5kaWRhdGVbcGFyYW0ubmFtZV0gIT09IHVuZGVmaW5lZCkgcmV0dXJuIHRydWU7XG5cbiAgICBpZiAocGFyYW0ucmVxdWlyZWQpIHtcbiAgICAgIHZhciBlcnJvciA9IG5ldyBNaXNzaW5nVmFsdWVFcnJvcigpO1xuICAgICAgZXJyb3JzLnB1c2gobmV3IFZhbGlkYXRpb25FcnJvcihwYXJhbS5uYW1lLCBwYXJhbSwgZXJyb3IpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH0pO1xuXG4gIHByZXNlbnRQYXJhbXMuZm9yRWFjaChmdW5jdGlvbihwYXJhbSl7XG4gICAgdmFyIGVycm9yID0gdmFsaWRhdGUuZGF0YVR5cGUoY2FuZGlkYXRlW3BhcmFtLm5hbWVdLCBwYXJhbSwgbW9kZWxzKTtcbiAgICBpZihlcnJvcil7XG4gICAgICBlcnJvcnMucHVzaChuZXcgVmFsaWRhdGlvbkVycm9yKHBhcmFtLm5hbWUsIHBhcmFtLCBlcnJvcikpO1xuICAgIH1cbiAgfSk7XG5cbiAgaWYoZXJyb3JzLmxlbmd0aCl7XG4gICAgcmV0dXJuIG5ldyBWYWxpZGF0aW9uRXJyb3JzKGNhbmRpZGF0ZSwgb3BlcmF0aW9uLm5pY2tuYW1lLCBvcGVyYXRpb24sIGVycm9ycyk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gdmFsaWRhdGVPcGVyYXRpb247XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBlcnJvclR5cGVzID0gcmVxdWlyZSgnLi9lcnJvclR5cGVzJyk7XG5cbmZ1bmN0aW9uIHZhbGlkYXRlSW50ZWdlcihjYW5kaWRhdGUsIGRhdGFUeXBlKXtcbiAgdmFyIGVycm9yID0gdmFsaWRhdGVOdW1iZXIoY2FuZGlkYXRlLCBkYXRhVHlwZSk7XG4gIGlmKGVycm9yKSByZXR1cm4gZXJyb3I7XG5cbiAgaWYoY2FuZGlkYXRlICUgMSl7XG4gICAgcmV0dXJuIG5ldyBlcnJvclR5cGVzLk5vdEFuSW50ZWdlckVycm9yKGNhbmRpZGF0ZSk7XG4gIH1cbn1cbmV4cG9ydHMudmFsaWRhdGVJbnRlZ2VyID0gdmFsaWRhdGVJbnRlZ2VyO1xuXG5mdW5jdGlvbiB2YWxpZGF0ZU51bWJlcihjYW5kaWRhdGUsIGRhdGFUeXBlKXtcbiAgaWYoISh0eXBlb2YgY2FuZGlkYXRlID09PSAnbnVtYmVyJyB8fCBjYW5kaWRhdGUgaW5zdGFuY2VvZiBOdW1iZXIpIHx8IGlzTmFOKGNhbmRpZGF0ZSkpe1xuICAgIHJldHVybiBuZXcgZXJyb3JUeXBlcy5Ob3RBTnVtYmVyRXJyb3IoY2FuZGlkYXRlLCB0eXBlb2YgY2FuZGlkYXRlKTtcbiAgfVxuICBcbiAgaWYoKGRhdGFUeXBlLm1pbmltdW0gIT09IHVuZGVmaW5lZCkgJiYgY2FuZGlkYXRlIDwgcGFyc2VJbnQoZGF0YVR5cGUubWluaW11bSwgMTApKXtcbiAgICByZXR1cm4gbmV3IGVycm9yVHlwZXMuTnVtYmVyVG9vU21hbGxFcnJvcihjYW5kaWRhdGUsIGRhdGFUeXBlLm1pbmltdW0pO1xuICB9XG4gIFxuICBpZigoZGF0YVR5cGUubWF4aW11bSAhPT0gdW5kZWZpbmVkKSAmJiBjYW5kaWRhdGUgPiBwYXJzZUludChkYXRhVHlwZS5tYXhpbXVtLCAxMCkpe1xuICAgIHJldHVybiBuZXcgZXJyb3JUeXBlcy5OdW1iZXJUb29MYXJnZUVycm9yKGNhbmRpZGF0ZSwgZGF0YVR5cGUubWF4aW11bSk7XG4gIH1cbn1cbmV4cG9ydHMudmFsaWRhdGVOdW1iZXIgPSB2YWxpZGF0ZU51bWJlcjtcblxuZnVuY3Rpb24gdmFsaWRhdGVCb29sZWFuKGNhbmRpZGF0ZSl7XG4gIGlmKCEodHlwZW9mIGNhbmRpZGF0ZSA9PT0gJ2Jvb2xlYW4nIHx8IGNhbmRpZGF0ZSBpbnN0YW5jZW9mIEJvb2xlYW4pKXtcbiAgICByZXR1cm4gbmV3IGVycm9yVHlwZXMuTm90QUJvb2xlYW5FcnJvcihjYW5kaWRhdGUsIHR5cGVvZiBjYW5kaWRhdGUpO1xuICB9XG59XG5leHBvcnRzLnZhbGlkYXRlQm9vbGVhbiA9IHZhbGlkYXRlQm9vbGVhbjtcblxuXG5mdW5jdGlvbiB2YWxpZGF0ZVZvaWQoY2FuZGlkYXRlKXtcbiAgaWYoY2FuZGlkYXRlICE9IG51bGwpe1xuICAgIHJldHVybiBuZXcgZXJyb3JUeXBlcy5Ob3RWb2lkRXJyb3IoY2FuZGlkYXRlLCB0eXBlb2YgY2FuZGlkYXRlKTtcbiAgfVxufVxuZXhwb3J0cy52YWxpZGF0ZVZvaWQgPSB2YWxpZGF0ZVZvaWQ7XG5cbmZ1bmN0aW9uIHZhbGlkYXRlRmlsZSgpe1xuICAvLyBOb3Qgc3VyZSBob3cgdG8gY2hlY2sgdGhpcywgc2luY2UgYW55dGhpbmcgY291bGQgcXVhbGlmeSBhcyAnRmlsZScuXG59XG5leHBvcnRzLnZhbGlkYXRlRmlsZSA9IHZhbGlkYXRlRmlsZTtcblxuZnVuY3Rpb24gdmFsaWRhdGVTdHJpbmcoY2FuZGlkYXRlLCBkYXRhVHlwZSl7XG4gIGlmKHR5cGVvZiBjYW5kaWRhdGUgIT09ICdzdHJpbmcnICYmICEoY2FuZGlkYXRlIGluc3RhbmNlb2YgU3RyaW5nKSl7XG4gICAgcmV0dXJuIG5ldyBlcnJvclR5cGVzLk5vdEFTdHJpbmdFcnJvcihjYW5kaWRhdGUsIHR5cGVvZiBjYW5kaWRhdGUpO1xuICB9XG5cbiAgaWYoJ2VudW0nIGluIGRhdGFUeXBlKXtcbiAgICBpZihkYXRhVHlwZS5lbnVtLmluZGV4T2YoY2FuZGlkYXRlKSA9PT0gLTEpIHtcbiAgICAgIHJldHVybiBuZXcgZXJyb3JUeXBlcy5TdHJpbmdOb3RJbkVudW1FcnJvcihjYW5kaWRhdGUsIGRhdGFUeXBlLmVudW0pO1xuICAgIH1cbiAgfVxufVxuZXhwb3J0cy52YWxpZGF0ZVN0cmluZyA9IHZhbGlkYXRlU3RyaW5nOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIE1pc3NpbmdBdXRob3JpemF0aW9uRXJyb3IgPSByZXF1aXJlKCcuL2Vycm9yVHlwZXMnKS5NaXNzaW5nQXV0aG9yaXphdGlvbkVycm9yO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGFwcGx5QXV0aERhdGEob3BlcmF0aW9uLCBhdXRoRGF0YSwgcmVxdWVzdCl7XG4gIHZhciBhdXRoTWFwID0gb3BlcmF0aW9uLmF1dGhvcml6YXRpb25zO1xuICBpZighYXV0aE1hcCkgYXV0aE1hcCA9IG9wZXJhdGlvbi5hcGlPYmplY3QuYXBpRGVjbGFyYXRpb24uYXV0aG9yaXphdGlvbnM7XG4gIGlmKCFhdXRoTWFwKSByZXR1cm47XG5cbiAgdmFyIGF1dGhOYW1lcyA9IE9iamVjdC5rZXlzKGF1dGhNYXApLmZpbHRlcihmdW5jdGlvbihhdXRoTmFtZSl7XG4gICAgLy8gQ3VycmVudGx5IHVuYWJsZSB0byBoYW5kbGUgb2F1dGgyXG4gICAgcmV0dXJuIGF1dGhNYXBbYXV0aE5hbWVdLnR5cGUgIT09ICdvYXV0aDInO1xuICB9KTtcblxuICBpZihhdXRoTmFtZXMubGVuZ3RoID09PSAwKSByZXR1cm47XG5cbiAgaWYoYXV0aE5hbWVzLmxlbmd0aCA9PT0gMSl7XG4gICAgdmFyIGF1dGhOYW1lID0gYXV0aE5hbWVzWzBdO1xuICAgIHZhciBhdXRoID0gYXV0aE1hcFthdXRoTmFtZV07XG5cbiAgICBpZighYXV0aERhdGEpIHRocm93IG5ldyBNaXNzaW5nQXV0aG9yaXphdGlvbkVycm9yKGF1dGhOYW1lLCBhdXRoKTtcblxuICAgIC8vIFVucGFjayBuZXN0ZWQgYXV0aERhdGEgZm9yIHNpbmdsZSBhdXRoIG9wczogeyBhcGlLZXk6ICcxMjMnIH0gLT4gJzEyMydcbiAgICBpZihhdXRoRGF0YVthdXRoTmFtZV0pIGF1dGhEYXRhID0gYXV0aERhdGFbYXV0aE5hbWVdO1xuXG4gICAgaWYoYXV0aC50eXBlID09PSAnYXBpS2V5Jyl7XG4gICAgICBhcHBseUFwaUtleShhdXRoLCBhdXRoTmFtZSwgYXV0aERhdGEsIHJlcXVlc3QpO1xuICAgIH0gZWxzZSBpZihhdXRoLnR5cGUgPT09ICdiYXNpY0F1dGgnKSB7XG4gICAgICBhcHBseUJhc2ljQXV0aChhdXRoLCBhdXRoTmFtZSwgYXV0aERhdGEudXNlcm5hbWUsIGF1dGhEYXRhLnBhc3N3b3JkLCByZXF1ZXN0KTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdmFyIGhhc0F1dGggPSBhdXRoTmFtZXMuc29tZShmdW5jdGlvbihhdXRoTmFtZSl7XG4gICAgICB2YXIgYXV0aCA9IGF1dGhNYXBbYXV0aE5hbWVdO1xuICAgICAgdmFyIGRhdGEgPSBhdXRoRGF0YVthdXRoTmFtZV07XG5cbiAgICAgIGlmKCFkYXRhKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgIGlmKGF1dGgudHlwZSA9PT0gJ2FwaUtleScpe1xuICAgICAgICBhcHBseUFwaUtleShhdXRoLCBhdXRoTmFtZSwgZGF0YSwgcmVxdWVzdCk7XG4gICAgICB9IGVsc2UgaWYoYXV0aC50eXBlID09PSAnYmFzaWNBdXRoJyl7XG4gICAgICAgIGFwcGx5QmFzaWNBdXRoKGF1dGgsIGF1dGhOYW1lLCBkYXRhLnVzZXJuYW1lLCBkYXRhLnBhc3N3b3JkLCByZXF1ZXN0KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSk7XG5cbiAgICBpZighaGFzQXV0aCl7XG4gICAgICB0aHJvdyBuZXcgTWlzc2luZ0F1dGhvcml6YXRpb25FcnJvcihhdXRoTmFtZXMuam9pbignLCAnKSwgYXV0aE1hcCk7XG4gICAgfVxuICB9XG59O1xuXG5mdW5jdGlvbiBhcHBseUFwaUtleShhdXRoLCBhdXRoTmFtZSwgYXBpS2V5LCByZXF1ZXN0KXtcbiAgaWYoIWFwaUtleSkgdGhyb3cgbmV3IE1pc3NpbmdBdXRob3JpemF0aW9uRXJyb3IoYXV0aE5hbWUsIGF1dGgpO1xuICBcbiAgaWYoYXV0aC5wYXNzQXMgPT09ICdoZWFkZXInKXtcbiAgICByZXF1ZXN0LmhlYWRlcnNbYXV0aC5rZXluYW1lXSA9IGFwaUtleTtcbiAgfSBlbHNlIGlmKGF1dGgucGFzc0FzID09PSAncXVlcnknKXtcbiAgICB2YXIgdXJsID0gcmVxdWVzdC51cmw7XG4gICAgdmFyIHF1ZXJ5UGFyYW0gPSBhdXRoLmtleW5hbWUgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQoYXBpS2V5KTtcbiAgICBpZih1cmwuaW5kZXhPZignPycpID09PSAtMSl7XG4gICAgICB1cmwgKz0gJz8nICsgcXVlcnlQYXJhbTtcbiAgICB9IGVsc2Uge1xuICAgICAgdXJsID0gdXJsLnJlcGxhY2UoJz8nLCAnPycgKyBxdWVyeVBhcmFtICsgJyYnKTtcbiAgICB9XG5cbiAgICByZXF1ZXN0LnVybCA9IHVybDtcbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseUJhc2ljQXV0aChhdXRoLCBhdXRoTmFtZSwgdXNlcm5hbWUsIHBhc3N3b3JkLCByZXF1ZXN0KXtcbiAgaWYoIXVzZXJuYW1lIHx8ICFwYXNzd29yZCkgdGhyb3cgbmV3IE1pc3NpbmdBdXRob3JpemF0aW9uRXJyb3IoYXV0aE5hbWUsIGF1dGgpO1xuICBcbiAgdmFyIHVybCA9IHJlcXVlc3QudXJsO1xuICBcbiAgLy8gT25seSBhZGQgYmFzaWMgYXV0aCBvbmNlXG4gIGlmKHVybC5pbmRleE9mKCdAJykgPT09IC0xKXtcbiAgICB1cmwgPSB1cmwucmVwbGFjZSgnOi8vJywgJzovLycgKyB1c2VybmFtZSArICc6JyArIHBhc3N3b3JkICsgJ0AnKTtcbiAgfVxuXG4gIHJlcXVlc3QudXJsID0gdXJsO1xufSIsIid1c2Ugc3RyaWN0JztcblxudmFyIGNyZWF0ZU9wZXJhdGlvbkhhbmRsZXIgPSByZXF1aXJlKCcuL2NyZWF0ZU9wZXJhdGlvbkhhbmRsZXInKTtcblxuZnVuY3Rpb24gY3JlYXRlQ2xpZW50KHNjaGVtYSwgcmVxdWVzdEhhbmRsZXIpe1xuICB2YXIgYXBpID0ge30sXG4gICAgYXBpQXV0aERhdGEsXG4gICAgYXV0aE1ldGhvZE5hbWUgPSAnYXV0aCc7XG5cbiAgc2NoZW1hID0gcHJvY2Vzc1NjaGVtYShzY2hlbWEpO1xuXG4gIC8vIElmIHRoZSAnYXV0aCcga2V5IGlzIHVzZWQgZm9yIGFueSByZXNvdXJjZSBvciBvcGVyYXRpb24sIHdlJ2xsIHVzZVxuICAvLyAnYXV0aG9yaXphdGlvbicgaW5zdGVhZCBmb3IgdGhlIGF1dGggbWV0aG9kc1xuICB2YXIgYXV0aElzSW5Vc2UgPSBzY2hlbWEuYXBpcy5zb21lKGZ1bmN0aW9uKHJlc291cmNlT2JqZWN0KXtcbiAgICByZXR1cm4gcmVzb3VyY2VPYmplY3QuYXBpRGVjbGFyYXRpb24uYXBpcy5zb21lKGZ1bmN0aW9uKGFwaU9iamVjdCl7XG4gICAgICB2YXIgcmVzb3VyY2VBcGlOYW1lID0gZ2V0QXBpTmFtZShhcGlPYmplY3QuYXBpRGVjbGFyYXRpb24ucmVzb3VyY2VQYXRoIHx8IGFwaU9iamVjdC5wYXRoKTtcbiAgICAgIGlmKHJlc291cmNlQXBpTmFtZSA9PT0gJ2F1dGgnKSByZXR1cm4gdHJ1ZTtcbiAgICAgIHJldHVybiBhcGlPYmplY3Qub3BlcmF0aW9ucy5zb21lKGZ1bmN0aW9uKG9wZXJhdGlvbil7XG4gICAgICAgIHJldHVybiBvcGVyYXRpb24ubmlja25hbWUgPT09ICdhdXRoJztcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcblxuICBpZihhdXRoSXNJblVzZSkgYXV0aE1ldGhvZE5hbWUgPSAnYXV0aG9yaXphdGlvbic7XG5cbiAgYXBpW2F1dGhNZXRob2ROYW1lXSA9IGZ1bmN0aW9uKCl7XG4gICAgYXBpQXV0aERhdGEgPSBwcm9jZXNzQXBpQXV0aEFyZ3MoYXJndW1lbnRzKTtcbiAgfTtcblxuICBzY2hlbWEuYXBpcy5mb3JFYWNoKGZ1bmN0aW9uKHJlc291cmNlT2JqZWN0KXtcbiAgICB2YXIgcmVzb3VyY2VOYW1lLFxuICAgICAgcmVzb3VyY2VBcGksXG4gICAgICByZXNvdXJjZUF1dGhEYXRhO1xuXG4gICAgaWYocmVzb3VyY2VPYmplY3QuYXBpRGVjbGFyYXRpb24ucmVzb3VyY2VQYXRoKXtcbiAgICAgIHJlc291cmNlTmFtZSA9IGdldEFwaU5hbWUocmVzb3VyY2VPYmplY3QuYXBpRGVjbGFyYXRpb24ucmVzb3VyY2VQYXRoKTtcbiAgICAgIHJlc291cmNlQXBpID0gYXBpW3Jlc291cmNlTmFtZV0gPSB7fTtcbiAgICAgIHJlc291cmNlQXBpW2F1dGhNZXRob2ROYW1lXSA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIHJlc291cmNlQXV0aERhdGEgPSBwcm9jZXNzQXBpQXV0aEFyZ3MoYXJndW1lbnRzKTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgKHJlc291cmNlT2JqZWN0LmFwaURlY2xhcmF0aW9uLmFwaXMgfHwgW10pLmZvckVhY2goZnVuY3Rpb24oYXBpT2JqZWN0KXtcbiAgICAgIHZhciBhcGlPYmplY3ROYW1lID0gcmVzb3VyY2VOYW1lLFxuICAgICAgICBhcGlPYmplY3RBcGkgPSByZXNvdXJjZUFwaSxcbiAgICAgICAgYXBpT2JqZWN0QXV0aERhdGE7XG5cbiAgICAgIGlmKCFhcGlPYmplY3ROYW1lKXtcbiAgICAgICAgYXBpT2JqZWN0TmFtZSA9IGdldEFwaU5hbWUoYXBpT2JqZWN0LnBhdGgpO1xuICAgICAgICBhcGlPYmplY3RBcGkgPSBhcGlbYXBpT2JqZWN0TmFtZV0gPSB7fTtcbiAgICAgICAgYXBpT2JqZWN0QXBpW2F1dGhNZXRob2ROYW1lXSA9IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgYXBpT2JqZWN0QXV0aERhdGEgPSBwcm9jZXNzQXBpQXV0aEFyZ3MoYXJndW1lbnRzKTtcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgKGFwaU9iamVjdC5vcGVyYXRpb25zIHx8IFtdKS5mb3JFYWNoKGZ1bmN0aW9uKG9wZXJhdGlvbil7XG4gICAgICAgIHZhciBvcGVyYXRpb25IYW5kbGVyTmFtZSA9IG9wZXJhdGlvbi5uaWNrbmFtZSxcbiAgICAgICAgICBvcGVyYXRpb25BdXRoRGF0YSxcbiAgICAgICAgICBvcGVyYXRpb25IYW5kbGVyO1xuXG4gICAgICAgIGZ1bmN0aW9uIGdldEF1dGhEYXRhKCl7XG4gICAgICAgICAgcmV0dXJuIG9wZXJhdGlvbkF1dGhEYXRhIHx8IGFwaU9iamVjdEF1dGhEYXRhIHx8IHJlc291cmNlQXV0aERhdGEgfHwgYXBpQXV0aERhdGE7XG4gICAgICAgIH1cblxuICAgICAgICBvcGVyYXRpb25IYW5kbGVyID0gY3JlYXRlT3BlcmF0aW9uSGFuZGxlcihvcGVyYXRpb24sIGdldEF1dGhEYXRhLCByZXF1ZXN0SGFuZGxlcik7XG5cbiAgICAgICAgb3BlcmF0aW9uSGFuZGxlclthdXRoTWV0aG9kTmFtZV0gPSBmdW5jdGlvbigpe1xuICAgICAgICAgIG9wZXJhdGlvbkF1dGhEYXRhID0gcHJvY2Vzc0FwaUF1dGhBcmdzKGFyZ3VtZW50cyk7XG4gICAgICAgIH07XG5cbiAgICAgICAgYXBpT2JqZWN0QXBpW29wZXJhdGlvbkhhbmRsZXJOYW1lXSA9IG9wZXJhdGlvbkhhbmRsZXI7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgcmV0dXJuIGFwaTtcbn1cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlQ2xpZW50O1xuXG5mdW5jdGlvbiBwcm9jZXNzQXBpQXV0aEFyZ3MoYXJncyl7XG4gIC8vIGZvciBiYXNpYyBhdXRoLCBhbGxvdyBjYWxscyB3aXRoIHR3byBhcmdzICh1c2VybmFtZSwgcGFzc3dvcmQpXG4gIGlmKHR5cGVvZiBhcmdzWzBdID09PSAnc3RyaW5nJyAmJiB0eXBlb2YgYXJnc1sxXSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXNlcm5hbWU6IGFyZ3NbMF0sXG4gICAgICBwYXNzd29yZDogYXJnc1sxXVxuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGFyZ3NbMF07XG4gIH1cbn1cblxuLy8gSGVscHBlciBtZXRob2Qgd2hpY2ggYXNzaW5ncyBiYWNrIHBvaW50ZXIgdG8gb2JqZWN0IHBhcmVudHMgYW5kIHJldHVybnNcbi8vIHRoZSBhcGkgb2JqZWN0cyB3aXRoaW4gdGhlIGdpdmVuIHNjaGVtYS5cbmZ1bmN0aW9uIHByb2Nlc3NTY2hlbWEoc2NoZW1hKXtcbiAgc2NoZW1hLmFwaXMuZm9yRWFjaChmdW5jdGlvbihyZXNvdXJjZU9iamVjdCl7XG4gICAgcmVzb3VyY2VPYmplY3QucmVzb3VyY2VMaXN0aW5nID0gc2NoZW1hO1xuXG4gICAgKHJlc291cmNlT2JqZWN0LmFwaURlY2xhcmF0aW9uLmFwaXMgfHwgW10pLmZvckVhY2goZnVuY3Rpb24oYXBpT2JqZWN0KXtcbiAgICAgIGFwaU9iamVjdC5yZXNvdXJjZU9iamVjdCA9IHJlc291cmNlT2JqZWN0O1xuICAgICAgYXBpT2JqZWN0LmFwaURlY2xhcmF0aW9uID0gcmVzb3VyY2VPYmplY3QuYXBpRGVjbGFyYXRpb247XG5cbiAgICAgIChhcGlPYmplY3Qub3BlcmF0aW9ucyB8fCBbXSkuZm9yRWFjaChmdW5jdGlvbihvcGVyYXRpb24pe1xuICAgICAgICBvcGVyYXRpb24uYXBpT2JqZWN0ID0gYXBpT2JqZWN0O1xuXG4gICAgICAgIChvcGVyYXRpb24ucGFyYW1ldGVycyB8fCBbXSkuZm9yRWFjaChmdW5jdGlvbihwYXJhbWV0ZXIpe1xuICAgICAgICAgIHBhcmFtZXRlci5vcGVyYXRpb24gPSBvcGVyYXRpb247XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIHJldHVybiBzY2hlbWE7XG59XG5cbi8vIFRha2VzIGEgcGF0aCBhbmQgcmV0dXJucyBhIEphdmFTY3JpcHQtZnJpZW5kbHkgdmFyaWFibGUgbmFtZVxuZnVuY3Rpb24gZ2V0QXBpTmFtZShuYW1lKXtcbiAgLy8gU3RyaW5nIG5vbi13b3JkIGNoYXJhY3RlcnNcbiAgbmFtZSA9IG5hbWUucmVwbGFjZSgvXFxXL2csICcvJyk7XG5cbiAgLy8gVHVybiBwYXRocyB3aGljaCBsb29rL2xpa2UvdGhpcyB0byBsb29rTGlrZVRoaXNcbiAgbmFtZSA9IG5hbWUucmVwbGFjZSgvKFxcdylcXC8oXFx3KS9nLCBmdW5jdGlvbihtYXRjaCwgcDEsIHAyKXtcbiAgICByZXR1cm4gcDEgKyBwMi50b1VwcGVyQ2FzZSgpO1xuICB9KTtcblxuICBuYW1lID0gbmFtZS5yZXBsYWNlKC9cXC8vZywgJycpO1xuXG4gIHJldHVybiBuYW1lO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZ2V0UmVxdWVzdEhlYWRlcnMgPSByZXF1aXJlKCcuL2dldFJlcXVlc3RIZWFkZXJzJyksXG4gIGdldFJlcXVlc3RVcmwgPSByZXF1aXJlKCcuL2dldFJlcXVlc3RVcmwnKSxcbiAgZ2V0UmVxdWVzdEJvZHkgPSByZXF1aXJlKCcuL2dldFJlcXVlc3RCb2R5JyksXG4gIGFwcGx5QXV0aERhdGEgPSByZXF1aXJlKCcuL2FwcGx5QXV0aERhdGEnKSxcbiAgZXJyb3JUeXBlcyA9IHJlcXVpcmUoJy4vZXJyb3JUeXBlcycpLFxuICBzd2FnZ2VyVmFsaWRhdGUgPSByZXF1aXJlKCdzd2FnZ2VyLXZhbGlkYXRlJyk7XG5cbnZhciBhbGxFcnJvclR5cGVzID0ge307XG5PYmplY3Qua2V5cyhzd2FnZ2VyVmFsaWRhdGUuZXJyb3JzKS5mb3JFYWNoKGZ1bmN0aW9uKGVycm9yTmFtZSl7XG4gIGFsbEVycm9yVHlwZXNbZXJyb3JOYW1lXSA9IHN3YWdnZXJWYWxpZGF0ZS5lcnJvcnNbZXJyb3JOYW1lXTtcbn0pO1xuXG5PYmplY3Qua2V5cyhlcnJvclR5cGVzKS5mb3JFYWNoKGZ1bmN0aW9uKGVycm9yTmFtZSl7XG4gIGFsbEVycm9yVHlwZXNbZXJyb3JOYW1lXSA9IGVycm9yVHlwZXNbZXJyb3JOYW1lXTtcbn0pO1xuXG5mdW5jdGlvbiBjcmVhdGVPcGVyYXRpb25IYW5kbGVyKG9wZXJhdGlvbiwgZ2V0QXV0aERhdGEsIHJlcXVlc3RIYW5kbGVyKXtcbiAgZnVuY3Rpb24gUmVxdWVzdChkYXRhLCBvcHRpb25zKXtcbiAgICB0aGlzLm1ldGhvZCA9IG9wZXJhdGlvbi5tZXRob2Q7XG4gICAgdGhpcy5vcGVyYXRpb24gPSBvcGVyYXRpb247XG4gICAgdGhpcy5lcnJvclR5cGVzID0gYWxsRXJyb3JUeXBlcztcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gIH1cblxuICB2YXIgb3BlcmF0aW9uSGFuZGxlciA9IGZ1bmN0aW9uKGRhdGEsIG9wdGlvbnMpe1xuICAgIHZhciBlcnJvcixcbiAgICAgIHJlcXVlc3Q7XG5cbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICAgIGlmKGRhdGEgPT0gbnVsbCkgZGF0YSA9IHt9O1xuXG4gICAgLy8gaWYgYSBmdW5jdGlvbiBpcyBwYXNzZWQgaW4gYXMgb3B0aW9ucywgYXNzdW1lIGl0J3MgYSBjYWxsYmFjayBmdW5jdGlvblxuICAgIC8vIGZvciBjb252ZW5pZW5jZVxuICAgIGlmKHR5cGVvZiBvcHRpb25zID09PSAnZnVuY3Rpb24nKXtcbiAgICAgIG9wdGlvbnMuY2FsbGJhY2sgPSBvcHRpb25zO1xuICAgIH1cblxuICAgIHRyeXtcbiAgICAgIGRhdGEgPSBwcnVuZShkYXRhKTtcbiAgICAgIGRhdGEgPSBzaW5nbGVQYXJhbUNvbnZlbmllbmNlUHJvY2Vzc29yKG9wZXJhdGlvbiwgZGF0YSk7XG4gICAgICBkYXRhID0gcmVtb3ZlVW5rbm93blBhcmFtcyhvcGVyYXRpb24sIGRhdGEpO1xuXG4gICAgICBlcnJvciA9IHN3YWdnZXJWYWxpZGF0ZS5vcGVyYXRpb24oZGF0YSwgb3BlcmF0aW9uLCBvcGVyYXRpb24uYXBpT2JqZWN0LmFwaURlY2xhcmF0aW9uLm1vZGVscyk7XG5cbiAgICAgIHJlcXVlc3QgPSBuZXcgUmVxdWVzdChkYXRhLCBvcHRpb25zKTtcblxuICAgICAgLy8gSWYgd2Uga25vdyB0aGVyZSBpcyBhbiBlcnJvciwgZG9uJ3QgYXR0ZW1wdCB0byBjcmFmdCB0aGUgcmVxdWVzdCBwYXJhbXMuXG4gICAgICAvLyBUaGUgcmVxdWVzdCBwYXJhbSBnZW5lcmF0b3JzIGFzc3VtZSB2YWxpZCBkYXRhIHRvIHdvcmsgcHJvcGVybHkuXG4gICAgICBpZighZXJyb3Ipe1xuICAgICAgICByZXF1ZXN0LnVybCA9IGdldFJlcXVlc3RVcmwob3BlcmF0aW9uLCBkYXRhKTtcbiAgICAgICAgcmVxdWVzdC5oZWFkZXJzID0gZ2V0UmVxdWVzdEhlYWRlcnMob3BlcmF0aW9uLCBkYXRhLCBvcHRpb25zKTtcbiAgICAgICAgcmVxdWVzdC5ib2R5ID0gZ2V0UmVxdWVzdEJvZHkob3BlcmF0aW9uLCBkYXRhLCByZXF1ZXN0LmhlYWRlcnMpO1xuXG4gICAgICAgIGFwcGx5QXV0aERhdGEob3BlcmF0aW9uLCBnZXRBdXRoRGF0YSgpLCByZXF1ZXN0KTtcbiAgICAgIH1cbiAgICB9IGNhdGNoKGUpe1xuICAgICAgZXJyb3IgPSBlO1xuICAgIH1cblxuICAgIHJldHVybiByZXF1ZXN0SGFuZGxlcihlcnJvciwgcmVxdWVzdCk7XG4gIH07XG5cbiAgLy8gVXNlZnVsIGZvciBpbnN0YW5jZW9mIGNoZWNrc1xuICBvcGVyYXRpb25IYW5kbGVyLlJlcXVlc3QgPSBSZXF1ZXN0O1xuICBvcGVyYXRpb25IYW5kbGVyLmVycm9yVHlwZXMgPSBhbGxFcnJvclR5cGVzO1xuXG4gIC8vIFVzZWZ1bCBmb3IgcmVmbGVjdGlvblxuICBvcGVyYXRpb25IYW5kbGVyLm9wZXJhdGlvbiA9IG9wZXJhdGlvbjtcblxuICAvLyBDYW4gYmUgdXNlZCB0byBwcmVlbXB0aXZlbHkgdmFsaWRhdGUgd2l0aG91dCBhY3Rpb25cbiAgb3BlcmF0aW9uSGFuZGxlci52YWxpZGF0ZSA9IGZ1bmN0aW9uKGRhdGEpe1xuICAgIHJldHVybiBzd2FnZ2VyVmFsaWRhdGUub3BlcmF0aW9uKGRhdGEsIG9wZXJhdGlvbiwgb3BlcmF0aW9uLmFwaU9iamVjdC5hcGlEZWNsYXJhdGlvbi5tb2RlbHMpO1xuICB9O1xuXG4gIHJldHVybiBvcGVyYXRpb25IYW5kbGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVPcGVyYXRpb25IYW5kbGVyO1xuXG5mdW5jdGlvbiBub29wKCl7fVxuY3JlYXRlT3BlcmF0aW9uSGFuZGxlci5sb2dnZXIgPSB7XG4gIGRlYnVnOiBub29wLFxuICBpbmZvOiBub29wLFxuICB3YXJuOiBub29wLFxuICBlcnJvcjogbm9vcFxufTtcblxuLy8gU3RyaW5naWZ5IGFuZCBwYXJzZSB0aGUgZGF0YSB0byBjbGVhbiB1cCB1bmRlZmluZWQsIGFuZCBub24tc2NhbGFyIHByb3BlcnRpZXNcbmZ1bmN0aW9uIHBydW5lKGRhdGEpe1xuICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShkYXRhKSk7XG59XG5cbi8vIEVuYWJsZXMgZGF0YSB0byBiZSBwYXNzZWQgZGlyZWN0bHkgZm9yIHNpbmdsZSBwYXJhbSBvcGVyYXRpb25zLlxuZnVuY3Rpb24gc2luZ2xlUGFyYW1Db252ZW5pZW5jZVByb2Nlc3NvcihvcGVyYXRpb24sIGRhdGEpe1xuICAvLyBJZiB0aGVyZSBhcmUgbW9yZSB0aGFuIG9uZSBwYXJhbXMsIGJhaWxcbiAgdmFyIHJlcXVpcmVkUGFyYW1zID0gKG9wZXJhdGlvbi5wYXJhbWV0ZXJzIHx8IFtdKS5maWx0ZXIoZnVuY3Rpb24ocGFyYW0pe1xuICAgIHJldHVybiBwYXJhbS5yZXF1aXJlZDtcbiAgfSk7XG5cbiAgLy8gSWYgdGhlcmUgYXJlIG1vcmUgdGhhbiBvbmUgcmVxdWlyZWQgcGFyYW1zLCBvciBpZiB0aGVyZSBpcyBubyByZXF1aXJlZCBwYXJhbVxuICAvLyBhbmQgdGhlcmUgYXJlIG1hbnkgb3B0aW9uYWwgcGFyYW1zLCBiYWlsXG4gIGlmKHJlcXVpcmVkUGFyYW1zLmxlbmd0aCA+IDEpIHJldHVybiBkYXRhO1xuXG4gIGlmKHJlcXVpcmVkUGFyYW1zLmxlbmd0aCAhPT0gMSAmJiAob3BlcmF0aW9uLnBhcmFtZXRlcnMgfHwgW10pLmxlbmd0aCAhPT0gMSkgcmV0dXJuIGRhdGE7XG5cbiAgdmFyIHBhcmFtID0gcmVxdWlyZWRQYXJhbXNbMF0gfHwgb3BlcmF0aW9uLnBhcmFtZXRlcnNbMF07XG5cbiAgLy8gSWYgdGhlIHBhcmFtIGlzIGFscmVhZHkgZGVmaW5lZCBleHBsaWNpdGx5LCBiYWlsXG4gIGlmKHR5cGVvZiBkYXRhID09PSAnb2JqZWN0JyAmJiAgZGF0YVtwYXJhbS5uYW1lXSAhPT0gdW5kZWZpbmVkKSByZXR1cm4gZGF0YTtcblxuICB2YXIgbW9kZWxzID0gb3BlcmF0aW9uLmFwaU9iamVjdC5hcGlEZWNsYXJhdGlvbi5tb2RlbHM7XG5cbiAgLy8gSWYgdGhlIGRhdGEgcGFzc2VkIGlzIGlzIG5vdCB2YWxpZCBmb3IgdGhlIHBhcmFtIGRhdGEgdHlwZSwgYmFpbFxuICB2YXIgZXJyb3I7XG5cbiAgdHJ5IHtcbiAgICBlcnJvciA9IHN3YWdnZXJWYWxpZGF0ZS5kYXRhVHlwZShkYXRhLCBwYXJhbSwgbW9kZWxzKTtcbiAgfSBjYXRjaChlKXtcbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIC8vIElmIHRoZSBkYXRhIHBhc3NlZCBpcyBhIHZhbGlkIHBhcmFtIGRhdGEgdHlwZSwgYmFpbFxuICBpZighZXJyb3Ipe1xuICAgIHZhciB3cmFwcGVyID0ge307XG4gICAgd3JhcHBlcltwYXJhbS5uYW1lXSA9IGRhdGE7XG4gICAgcmV0dXJuIHdyYXBwZXI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cbn1cblxuXG5mdW5jdGlvbiByZW1vdmVVbmtub3duUGFyYW1zKG9wZXJhdGlvbiwgZGF0YSl7XG4gIGlmKCFkYXRhIHx8IHR5cGVvZiBkYXRhICE9PSAnb2JqZWN0JykgcmV0dXJuIGRhdGE7XG5cbiAgdmFyIHBhcmFtTmFtZXMgPSB7fTtcbiAgKG9wZXJhdGlvbi5wYXJhbWV0ZXJzIHx8IFtdKS5mb3JFYWNoKGZ1bmN0aW9uKHBhcmFtKXtcbiAgICBwYXJhbU5hbWVzW3BhcmFtLm5hbWVdID0gdHJ1ZTtcbiAgfSk7XG5cbiAgdmFyIHVua25vd25LZXlzID0gT2JqZWN0LmtleXMoZGF0YSkuZmlsdGVyKGZ1bmN0aW9uKGtleSl7XG4gICAgcmV0dXJuICEoa2V5IGluIHBhcmFtTmFtZXMpO1xuICB9KTtcblxuICBjcmVhdGVPcGVyYXRpb25IYW5kbGVyLmxvZ2dlci53YXJuKCdVbmtub3duIHBhcmFtZXRlcnMgcmVtb3ZlZCBmcm9tIHJlcXVlc3Q6JyxcbiAgICB1bmtub3duS2V5cy5qb2luKCcsICcpKTtcblxuICB1bmtub3duS2V5cy5mb3JFYWNoKGZ1bmN0aW9uKGtleSl7XG4gICAgZGVsZXRlIGRhdGFba2V5XTtcbiAgfSk7XG5cbiAgcmV0dXJuIGRhdGE7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIEludmFsaWRSZXF1ZXN0RXJyb3IobWVzc2FnZSl7XG4gIHRoaXMubmFtZSA9ICdJbnZhbGlkUmVxdWVzdEVycm9yJztcbiAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZSB8fCAnSW52YWxpZCByZXF1ZXN0Jztcbn1cbkludmFsaWRSZXF1ZXN0RXJyb3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShFcnJvci5wcm90b3R5cGUpO1xuSW52YWxpZFJlcXVlc3RFcnJvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBJbnZhbGlkUmVxdWVzdEVycm9yO1xuXG5leHBvcnRzLkludmFsaWRSZXF1ZXN0RXJyb3IgPSBJbnZhbGlkUmVxdWVzdEVycm9yO1xuXG5cbmZ1bmN0aW9uIE1pc3NpbmdBdXRob3JpemF0aW9uRXJyb3IoYXV0aE5hbWUsIGF1dGgpe1xuICB0aGlzLm5hbWUgPSAnTWlzc2luZ0F1dGhvcml6YXRpb25FcnJvcic7XG4gIHRoaXMubWVzc2FnZSA9ICdObyBkYXRhIGZvdW5kIGZvciBhdXRob3JpemF0aW9uOiAnICsgYXV0aE5hbWU7XG4gIHRoaXMuYXV0aG9yaXphdGlvbiA9IGF1dGg7XG59XG5NaXNzaW5nQXV0aG9yaXphdGlvbkVycm9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSW52YWxpZFJlcXVlc3RFcnJvci5wcm90b3R5cGUpO1xuTWlzc2luZ0F1dGhvcml6YXRpb25FcnJvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBNaXNzaW5nQXV0aG9yaXphdGlvbkVycm9yO1xuXG5leHBvcnRzLk1pc3NpbmdBdXRob3JpemF0aW9uRXJyb3IgPSBNaXNzaW5nQXV0aG9yaXphdGlvbkVycm9yO1xuXG5cbmZ1bmN0aW9uIE1pc3NpbmdQYXRoUGFyYW1zRXJyb3IocGF0aFBhcmFtcyl7XG4gIHRoaXMubmFtZSA9ICdNaXNzaW5nUGF0aFBhcmFtc0Vycm9yJztcbiAgdGhpcy5tZXNzYWdlID0gJ01pc3NpbmcgdGhlIGZvbGxvd2luZyByZXF1aXJlZCBwYXRoIHBhcmFtZXRlcnM6ICcgKyBwYXRoUGFyYW1zLmpvaW4oJycpO1xufVxuTWlzc2luZ1BhdGhQYXJhbXNFcnJvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEludmFsaWRSZXF1ZXN0RXJyb3IucHJvdG90eXBlKTtcbk1pc3NpbmdQYXRoUGFyYW1zRXJyb3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gTWlzc2luZ1BhdGhQYXJhbXNFcnJvcjtcblxuZXhwb3J0cy5NaXNzaW5nUGF0aFBhcmFtc0Vycm9yID0gTWlzc2luZ1BhdGhQYXJhbXNFcnJvcjtcblxuXG5mdW5jdGlvbiBDb250ZW50VHlwZU5vdFN1cHBvcnRlZEVycm9yKGNvbnRlbnRUeXBlLCBvcGVyYXRpb24pe1xuICB2YXIgYXBpRGVjbGFyYXRpb24gPSBvcGVyYXRpb24uYXBpT2JqZWN0LmFwaURlY2xhcmF0aW9uO1xuICB2YXIgY29uc3VtZXMgPSBvcGVyYXRpb24uY29uc3VtZXMgfHwgYXBpRGVjbGFyYXRpb24uY29uc3VtZXMgfHwgW107XG5cbiAgdGhpcy5uYW1lID0gJ0NvbnRlbnRUeXBlTm90U3VwcG9ydGVkRXJyb3InO1xuICB0aGlzLm1lc3NhZ2UgPSAnT3BlcmF0aW9uIFsnICsgb3BlcmF0aW9uLm5pY2tuYW1lICsgJ10gZG9lcyBub3QgYWNjZXB0ICcgKyBjb250ZW50VHlwZSArICcuIEl0IHN1cHBvcnRzOiAnICsgXG4gICAgY29uc3VtZXMuam9pbignLCAnKTtcbn1cbkNvbnRlbnRUeXBlTm90U3VwcG9ydGVkRXJyb3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJbnZhbGlkUmVxdWVzdEVycm9yLnByb3RvdHlwZSk7XG5Db250ZW50VHlwZU5vdFN1cHBvcnRlZEVycm9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IENvbnRlbnRUeXBlTm90U3VwcG9ydGVkRXJyb3I7XG5cbmV4cG9ydHMuQ29udGVudFR5cGVOb3RTdXBwb3J0ZWRFcnJvciA9IENvbnRlbnRUeXBlTm90U3VwcG9ydGVkRXJyb3I7XG5cblxuZnVuY3Rpb24gQWNjZXB0c05vdFN1cHBvcnRlZEVycm9yKGFjY2VwdHMsIG9wZXJhdGlvbil7XG4gIHZhciBhcGlEZWNsYXJhdGlvbiA9IG9wZXJhdGlvbi5hcGlPYmplY3QuYXBpRGVjbGFyYXRpb247XG4gIHZhciBwcm9kdWNlcyA9IG9wZXJhdGlvbi5wcm9kdWNlcyB8fCBhcGlEZWNsYXJhdGlvbi5wcm9kdWNlcyB8fCBbXTtcblxuICB0aGlzLm5hbWUgPSAnQWNjZXB0c05vdFN1cHBvcnRlZEVycm9yJztcbiAgdGhpcy5tZXNzYWdlID0gJ09wZXJhdGlvbiBbJyArIG9wZXJhdGlvbi5uaWNrbmFtZSArICddIGRvZXMgbm90IHByb2R1Y2UgJyArIGFjY2VwdHMgKyAnLiBJdCBzdXBwb3J0czogJyArIFxuICAgIHByb2R1Y2VzLmpvaW4oJywgJyk7XG59XG5BY2NlcHRzTm90U3VwcG9ydGVkRXJyb3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJbnZhbGlkUmVxdWVzdEVycm9yLnByb3RvdHlwZSk7XG5BY2NlcHRzTm90U3VwcG9ydGVkRXJyb3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gQWNjZXB0c05vdFN1cHBvcnRlZEVycm9yO1xuXG5leHBvcnRzLkFjY2VwdHNOb3RTdXBwb3J0ZWRFcnJvciA9IEFjY2VwdHNOb3RTdXBwb3J0ZWRFcnJvcjtcblxuXG5mdW5jdGlvbiBPcGVyYXRpb25WYWxpZGF0aW9uRXJyb3Iob3BlcmF0aW9uLCBlcnJvcnMpe1xuICB0aGlzLm5hbWUgPSAnT3BlcmF0aW9uVmFsaWRhdGlvbkVycm9yJztcbiAgdGhpcy5tZXNzYWdlID0gb3BlcmF0aW9uLm5pY2tuYW1lICsgJyBmYWlsZWQgdmFsaWRhdGlvbjogXFxuXFx0JyArIGVycm9ycy5qb2luKCdcXG5cXHQnKTtcbn1cbk9wZXJhdGlvblZhbGlkYXRpb25FcnJvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEludmFsaWRSZXF1ZXN0RXJyb3IucHJvdG90eXBlKTtcbk9wZXJhdGlvblZhbGlkYXRpb25FcnJvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBPcGVyYXRpb25WYWxpZGF0aW9uRXJyb3I7XG5cbmV4cG9ydHMuT3BlcmF0aW9uVmFsaWRhdGlvbkVycm9yID0gT3BlcmF0aW9uVmFsaWRhdGlvbkVycm9yO1xuXG5cbmZ1bmN0aW9uIFBhcmFtZXRlclZhbGlkYXRpb25FcnJvcihwYXJhbWV0ZXIsIGVycm9ycyl7XG4gIHRoaXMubmFtZSA9ICdQYXJhbWV0ZXJWYWxpZGF0aW9uRXJyb3InO1xuICB0aGlzLm1lc3NhZ2UgPSBwYXJhbWV0ZXIubmFtZSArICcgZmFpbGVkIHZhbGlkYXRpb246IFxcblxcdCcgKyBlcnJvcnMuam9pbignXFxuXFx0Jyk7XG59XG5QYXJhbWV0ZXJWYWxpZGF0aW9uRXJyb3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJbnZhbGlkUmVxdWVzdEVycm9yLnByb3RvdHlwZSk7XG5QYXJhbWV0ZXJWYWxpZGF0aW9uRXJyb3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gUGFyYW1ldGVyVmFsaWRhdGlvbkVycm9yO1xuXG5leHBvcnRzLlBhcmFtZXRlclZhbGlkYXRpb25FcnJvciA9IFBhcmFtZXRlclZhbGlkYXRpb25FcnJvcjtcblxuXG5mdW5jdGlvbiBEYXRhVHlwZVZhbGlkYXRpb25FcnJvcihtZXNzYWdlKXtcbiAgdGhpcy5uYW1lID0gJ0RhdGFUeXBlVmFsaWRhdGlvbkVycm9yJztcbiAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZSB8fCAnSW52YWxpZCBkYXRhIHR5cGUnO1xufVxuRGF0YVR5cGVWYWxpZGF0aW9uRXJyb3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShFcnJvci5wcm90b3R5cGUpO1xuRGF0YVR5cGVWYWxpZGF0aW9uRXJyb3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gRGF0YVR5cGVWYWxpZGF0aW9uRXJyb3I7XG5cbmV4cG9ydHMuRGF0YVR5cGVWYWxpZGF0aW9uRXJyb3IgPSBEYXRhVHlwZVZhbGlkYXRpb25FcnJvcjsiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZ2V0UmVxdWVzdEJvZHkob3BlcmF0aW9uLCBkYXRhLCBoZWFkZXJzKXtcbiAgdmFyIGJvZHkgPSAob3BlcmF0aW9uLnBhcmFtZXRlcnMgfHwgW10pLmZpbHRlcihmdW5jdGlvbihwYXJhbSl7XG4gICAgcmV0dXJuIHBhcmFtLnBhcmFtVHlwZSA9PT0gJ2JvZHknICYmIGRhdGFbcGFyYW0ubmFtZV0gIT0gbnVsbDtcbiAgfSkubWFwKGZ1bmN0aW9uKHBhcmFtKXtcbiAgICByZXR1cm4gZGF0YVtwYXJhbS5uYW1lXTtcbiAgfSlbMF07XG5cbiAgaWYoIShoZWFkZXJzICYmICBoZWFkZXJzWydDb250ZW50LVR5cGUnXSkpIHJldHVybiBib2R5O1xuXG4gIHZhciBjb250ZW50VHlwZSA9IGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddO1xuICB2YXIgcHJlc2VudEZvcm1QYXJhbXMgPSAob3BlcmF0aW9uLnBhcmFtZXRlcnMgfHwgW10pLmZpbHRlcihmdW5jdGlvbihwYXJhbSl7XG4gICAgcmV0dXJuIHBhcmFtLnBhcmFtVHlwZSA9PT0gJ2Zvcm0nICYmIGRhdGFbcGFyYW0ubmFtZV0gIT0gbnVsbDtcbiAgfSk7XG5cbiAgaWYoY29udGVudFR5cGUuaW5kZXhPZignYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJykgIT09IC0xKXtcbiAgICBib2R5ID0gcHJlc2VudEZvcm1QYXJhbXMubWFwKGZ1bmN0aW9uKHBhcmFtKXtcbiAgICAgIHZhciBrZXkgPSBwYXJhbS5uYW1lLFxuICAgICAgICB2YWx1ZSA9IGRhdGFba2V5XTtcbiAgICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoa2V5KSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSk7XG4gICAgfSkuam9pbignJicpO1xuICB9IGVsc2UgaWYoY29udGVudFR5cGUuaW5kZXhPZignbXVsdGlwYXJ0L2Zvcm0tZGF0YScpICE9PSAtMSl7XG4gICAgdmFyIHJhbmRvbW5lc3MgPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDE2KS5zdWJzdHIoMik7XG4gICAgdmFyIGJvdW5kYXJ5ID0gJ1N3YWdnZXJCb3VuZGFyeScgKyByYW5kb21uZXNzO1xuXG4gICAgYm9keSA9IHByZXNlbnRGb3JtUGFyYW1zLm1hcChmdW5jdGlvbihwYXJhbSl7XG4gICAgICB2YXIga2V5ID0gcGFyYW0ubmFtZSxcbiAgICAgICAgdmFsdWUgPSBkYXRhW2tleV0sXG4gICAgICAgIHJlc3VsdCA9ICctLScgKyBib3VuZGFyeTtcblxuICAgICAgcmVzdWx0ICs9ICdcXG5Db250ZW50LURpc3Bvc2l0aW9uOiBmb3JtLWRhdGE7IG5hbWU9XCInICsga2V5ICsgJ1wiJztcblxuICAgICAgaWYodmFsdWUuY29udGVudFR5cGUpe1xuICAgICAgICBpZih2YWx1ZS5uYW1lKXtcbiAgICAgICAgICByZXN1bHQgKz0gJzsgZmlsZW5hbWU9XCInICsgdmFsdWUubmFtZSArICdcIic7XG4gICAgICAgIH1cblxuICAgICAgICByZXN1bHQgKz0gJ1xcbkNvbnRlbnQtVHlwZTogJyArIHZhbHVlLmNvbnRlbnRUeXBlO1xuICAgICAgfVxuXG4gICAgICBpZih2YWx1ZS5jb250ZW50VHJhbnNmZXJFbmNvZGluZyl7XG4gICAgICAgIHJlc3VsdCArPSAnXFxuQ29udGVudC1UcmFuc2Zlci1FbmNvZGluZzogJyArIHZhbHVlLmNvbnRlbnRUcmFuc2ZlckVuY29kaW5nO1xuICAgICAgfVxuXG4gICAgICBpZih2YWx1ZS5ib2R5KXtcbiAgICAgICAgcmVzdWx0ICs9ICdcXG5cXG4nICsgdmFsdWUuYm9keTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdCArPSAnXFxuXFxuJyArIHZhbHVlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0pLmpvaW4oJ1xcbicpO1xuXG4gICAgYm9keSArPSAnXFxuLS0nICsgYm91bmRhcnkgKyAnLS1cXG4nO1xuXG4gICAgaGVhZGVyc1snQ29udGVudC1UeXBlJ10gPSBjb250ZW50VHlwZS5yZXBsYWNlKFxuICAgICAgJ211bHRpcGFydC9mb3JtLWRhdGEnLFxuICAgICAgJ211bHRpcGFydC9mb3JtLWRhdGE7IGJvdW5kYXJ5PScgKyBib3VuZGFyeVxuICAgICk7XG4gIH0gZWxzZSBpZihjb250ZW50VHlwZS5pbmRleE9mKCdhcHBsaWNhdGlvbi9qc29uJykgIT09IC0xKXtcbiAgICBpZih0eXBlb2YgYm9keSAhPT0gJ3N0cmluZycpe1xuICAgICAgYm9keSA9IEpTT04uc3RyaW5naWZ5KGJvZHkpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBib2R5O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGVycm9yVHlwZXMgPSByZXF1aXJlKCcuL2Vycm9yVHlwZXMnKSxcbiAgQ29udGVudFR5cGVOb3RTdXBwb3J0ZWRFcnJvciA9IGVycm9yVHlwZXMuQ29udGVudFR5cGVOb3RTdXBwb3J0ZWRFcnJvcixcbiAgQWNjZXB0c05vdFN1cHBvcnRlZEVycm9yID0gZXJyb3JUeXBlcy5BY2NlcHRzTm90U3VwcG9ydGVkRXJyb3I7XG5cbnZhciBERUZBVUxUX0FDQ0VQVCA9ICdhcHBsaWNhdGlvbi9qc29uJztcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZ2V0UmVxdWVzdEhlYWRlcnMob3BlcmF0aW9uLCBkYXRhLCBvcHRpb25zKXtcbiAgZGF0YSA9IGRhdGEgfHwge307XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gIHZhciBoZWFkZXJzID0ge307XG5cbiAgKG9wZXJhdGlvbi5wYXJhbWV0ZXJzIHx8IFtdKS5mb3JFYWNoKGZ1bmN0aW9uKHBhcmFtKXtcbiAgICBpZihwYXJhbS5wYXJhbVR5cGUgPT09ICdoZWFkZXInICYmIGRhdGFbcGFyYW0ubmFtZV0gIT0gbnVsbCl7XG4gICAgICBoZWFkZXJzW3BhcmFtLm5hbWVdID0gZGF0YVtwYXJhbS5uYW1lXTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIFBhc3NlZCBoZWFkZXJzXG4gIGlmKG9wdGlvbnMuaGVhZGVycyl7XG4gICAgT2JqZWN0LmtleXMob3B0aW9ucy5oZWFkZXJzKS5mb3JFYWNoKGZ1bmN0aW9uKGtleSl7XG4gICAgICBoZWFkZXJzW2tleV0gPSBvcHRpb25zLmhlYWRlcnNba2V5XTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIENvbnRlbnQtVHlwZVxuICB2YXIgY29udGVudFR5cGUgPSBvcHRpb25zLmNvbnRlbnRUeXBlIHx8IGdldENvbnRlbnRUeXBlKG9wZXJhdGlvbiwgZGF0YSwgb3B0aW9ucyk7XG4gIGlmKGNvbnRlbnRUeXBlKSB7XG4gICAgaWYoaGFzQWNjZXB0KG9wZXJhdGlvbiwgY29udGVudFR5cGUpKXtcbiAgICAgIGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddID0gY29udGVudFR5cGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBDb250ZW50VHlwZU5vdFN1cHBvcnRlZEVycm9yKGNvbnRlbnRUeXBlLCBvcGVyYXRpb24pO1xuICAgIH1cbiAgfVxuXG4gIC8vIEFjY2VwdFxuICB2YXIgYWNjZXB0ID0gb3B0aW9ucy5hY2NlcHQgfHwgREVGQVVMVF9BQ0NFUFQ7XG4gIGlmKGFjY2VwdCl7XG4gICAgaWYoaGFzQ29udGVudFR5cGUob3BlcmF0aW9uLCBhY2NlcHQpKXtcbiAgICAgIGhlYWRlcnMuQWNjZXB0ID0gYWNjZXB0O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgQWNjZXB0c05vdFN1cHBvcnRlZEVycm9yKGFjY2VwdCwgb3BlcmF0aW9uKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gaGVhZGVycztcbn07XG5cbmZ1bmN0aW9uIGdldENvbnRlbnRUeXBlKG9wZXJhdGlvbiwgZGF0YSl7XG4gIHZhciBoYXNCb2R5ID0gKG9wZXJhdGlvbi5wYXJhbWV0ZXJzIHx8IFtdKS5zb21lKGZ1bmN0aW9uKHBhcmFtKXtcbiAgICByZXR1cm4gcGFyYW0ucGFyYW1UeXBlID09PSAnYm9keScgJiYgZGF0YVtwYXJhbS5uYW1lXSAhPT0gdW5kZWZpbmVkO1xuICB9KTtcblxuICBpZiAoaGFzQm9keSl7XG4gICAgcmV0dXJuICdhcHBsaWNhdGlvbi9qc29uJztcbiAgfSBlbHNlIHtcbiAgICB2YXIgaGFzRm9ybVBhcmFtcyA9IChvcGVyYXRpb24ucGFyYW1ldGVycyB8fCBbXSkuc29tZShmdW5jdGlvbihwYXJhbSl7XG4gICAgICByZXR1cm4gcGFyYW0ucGFyYW1UeXBlID09PSAnZm9ybScgJiYgZGF0YVtwYXJhbS5uYW1lXSAhPT0gdW5kZWZpbmVkO1xuICAgIH0pO1xuXG4gICAgdmFyIGhhc0ZpbGVQYXJhbSA9IGhhc0Zvcm1QYXJhbXMgJiZcbiAgICAgIChvcGVyYXRpb24ucGFyYW1ldGVycyB8fCBbXSkuc29tZShmdW5jdGlvbihwYXJhbSl7XG4gICAgICAgIHJldHVybiBwYXJhbS50eXBlID09PSAnRmlsZScgJiYgZGF0YVtwYXJhbS5uYW1lXSAhPT0gdW5kZWZpbmVkO1xuICAgICAgfSk7XG5cbiAgICBpZihoYXNGaWxlUGFyYW0pIHJldHVybiAnbXVsdGlwYXJ0L2Zvcm0tZGF0YSc7XG4gICAgZWxzZSBpZihoYXNGb3JtUGFyYW1zKSByZXR1cm4gJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCc7XG4gIH1cbn1cblxuLy8gQWNjZXB0cyBpcyBhbiBvcHRpb25hbCBmaWVsZCBpbiB0aGUgc3BlYywgYnV0IG11c3QgYmUgZW5mb3JjZWQgd2hlbiBwcmVzZW50XG5mdW5jdGlvbiBoYXNBY2NlcHQob3BlcmF0aW9uLCBjb250ZW50VHlwZSl7XG4gIHZhciBhcGlEZWNsYXJhdGlvbiA9IG9wZXJhdGlvbi5hcGlPYmplY3QuYXBpRGVjbGFyYXRpb247XG4gIHZhciBhY2NlcHRzID0gb3BlcmF0aW9uLmNvbnN1bWVzIHx8IGFwaURlY2xhcmF0aW9uLmNvbnN1bWVzO1xuXG4gIGlmKGFjY2VwdHMgJiYgYWNjZXB0cy5sZW5ndGgpe1xuICAgIHJldHVybiBhY2NlcHRzLmluZGV4T2YoY29udGVudFR5cGUpICE9PSAtMTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuZXhwb3J0cy5oYXNBY2NlcHQgPSBoYXNBY2NlcHQ7XG5cbi8vIENvbnRlbnQtVHlwZSAocHJvZHVjZXMpIGlzIGFuIG9wdGlvbmFsIGZpZWxkIGluIHRoZSBzcGVjLCBidXQgbXVzdCBiZSBlbmZvcmNlZCB3aGVuIHByZXNlbnRcbmZ1bmN0aW9uIGhhc0NvbnRlbnRUeXBlKG9wZXJhdGlvbiwgY29udGVudFR5cGUpe1xuICB2YXIgYXBpRGVjbGFyYXRpb24gPSBvcGVyYXRpb24uYXBpT2JqZWN0LmFwaURlY2xhcmF0aW9uLFxuICAgIGNvbnRlbnRUeXBlcyA9IG9wZXJhdGlvbi5wcm9kdWNlcyB8fCBhcGlEZWNsYXJhdGlvbi5wcm9kdWNlcztcblxuICBpZihjb250ZW50VHlwZXMgJiYgY29udGVudFR5cGVzLmxlbmd0aCl7XG4gICAgcmV0dXJuIGNvbnRlbnRUeXBlcy5pbmRleE9mKGNvbnRlbnRUeXBlKSAhPT0gLTE7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cbmV4cG9ydHMuaGFzQ29udGVudFR5cGUgPSBoYXNDb250ZW50VHlwZTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGVycm9yVHlwZXMgPSByZXF1aXJlKCcuL2Vycm9yVHlwZXMnKSxcbiAgTWlzc2luZ1BhdGhQYXJhbXNFcnJvciA9IGVycm9yVHlwZXMuTWlzc2luZ1BhdGhQYXJhbXNFcnJvcjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBnZXRSZXF1ZXN0VXJsKG9wZXJhdGlvbiwgZGF0YSl7XG4gIHZhciB1cmwgPSBnZXRVcmxUZW1wbGF0ZShvcGVyYXRpb24pO1xuXG4gIHVybCA9IGFwcGx5UGF0aFBhcmFtcyh1cmwsIG9wZXJhdGlvbiwgZGF0YSk7XG5cbiAgaWYoIWRhdGEpIHJldHVybiB1cmw7XG5cbiAgdmFyIHF1ZXJ5UGFyYW1zID0gKG9wZXJhdGlvbi5wYXJhbWV0ZXJzIHx8IFtdKS5maWx0ZXIoZnVuY3Rpb24ocGFyYW0pe1xuICAgIHJldHVybiBwYXJhbS5wYXJhbVR5cGUgPT09ICdxdWVyeScgJiYgZGF0YVtwYXJhbS5uYW1lXSAhPT0gdW5kZWZpbmVkO1xuICB9KS5tYXAoZnVuY3Rpb24ocGFyYW0pe1xuICAgIHZhciBrZXkgPSBwYXJhbS5uYW1lO1xuICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoa2V5KSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudChkYXRhW2tleV0pO1xuICB9KS5qb2luKCcmJyk7XG5cbiAgaWYocXVlcnlQYXJhbXMpIHVybCArPSAnPycgKyBxdWVyeVBhcmFtcztcblxuICByZXR1cm4gdXJsO1xufTtcblxuZnVuY3Rpb24gYXBwbHlQYXRoUGFyYW1zKHVybCwgb3BlcmF0aW9uLCBkYXRhKXtcbiAgdmFyIHBhdGhQYXJhbXMgPSAob3BlcmF0aW9uLnBhcmFtZXRlcnMgfHwgW10pLmZpbHRlcihmdW5jdGlvbihwYXJhbSl7XG4gICAgcmV0dXJuIHBhcmFtLnBhcmFtVHlwZSA9PT0gJ3BhdGgnO1xuICB9KTtcblxuICB2YXIgbWlzc2luZ1BhcmFtcyA9IHBhdGhQYXJhbXMuZmlsdGVyKGZ1bmN0aW9uKHBhcmFtKXtcbiAgICByZXR1cm4gZGF0YVtwYXJhbS5uYW1lXSA9PT0gdW5kZWZpbmVkO1xuICB9KTtcblxuICBpZihtaXNzaW5nUGFyYW1zLmxlbmd0aCl7XG4gICAgdGhyb3cgbmV3IE1pc3NpbmdQYXRoUGFyYW1zRXJyb3IobWlzc2luZ1BhcmFtcy5tYXAoZnVuY3Rpb24ocGFyYW0pe1xuICAgICAgcmV0dXJuIHBhcmFtLm5hbWU7XG4gICAgfSkpO1xuICB9XG5cbiAgcGF0aFBhcmFtcy5mb3JFYWNoKGZ1bmN0aW9uKHBhcmFtKXtcbiAgICB2YXIga2V5ID0gcGFyYW0ubmFtZTtcblxuICAgIHZhciBleHAgPSBuZXcgUmVnRXhwKCd7JyArIGtleSArICdbXn1dKn0nLCAnZ2knKTtcblxuICAgIHZhciB2YWx1ZSA9IGRhdGFba2V5XS50b1N0cmluZygpO1xuICAgIGRlbGV0ZSBkYXRhW2tleV07XG4gICAgdmFsdWUgPSB2YWx1ZS5zcGxpdCgnLycpLm1hcChlbmNvZGVVUklDb21wb25lbnQpLmpvaW4oJy8nKTtcblxuICAgIHVybCA9IHVybC5yZXBsYWNlKGV4cCwgdmFsdWUpO1xuICB9KTtcblxuICByZXR1cm4gdXJsO1xufVxuXG5mdW5jdGlvbiBnZXRVcmxUZW1wbGF0ZShvcGVyYXRpb24pe1xuICB2YXIgYXBpT2JqZWN0ID0gb3BlcmF0aW9uLmFwaU9iamVjdDtcblxuICB2YXIgYmFzZVBhdGggPSBhcGlPYmplY3QuYXBpRGVjbGFyYXRpb24uYmFzZVBhdGg7XG4gIHZhciBwYXRoID0gYXBpT2JqZWN0LnBhdGgucmVwbGFjZSgne2Zvcm1hdH0nLCAnanNvbicpO1xuXG4gIHJldHVybiBiYXNlUGF0aCArIHBhdGg7XG59XG4iXX0=
(9)
});
