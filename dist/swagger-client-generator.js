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
  
  var presentParams = operation.parameters.filter(function(param){
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21pY2hhZWwvc3JjL2dpdGh1Yi9mb3Jrcy9zd2FnZ2VyLWNsaWVudC1nZW5lcmF0b3Ivbm9kZV9tb2R1bGVzL2JvaWxlcnBsYXRlLWd1bHAvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsIi9ob21lL21pY2hhZWwvc3JjL2dpdGh1Yi9mb3Jrcy9zd2FnZ2VyLWNsaWVudC1nZW5lcmF0b3Ivbm9kZV9tb2R1bGVzL3N3YWdnZXItdmFsaWRhdGUvc3JjL2Vycm9yVHlwZXMuanMiLCIvaG9tZS9taWNoYWVsL3NyYy9naXRodWIvZm9ya3Mvc3dhZ2dlci1jbGllbnQtZ2VuZXJhdG9yL25vZGVfbW9kdWxlcy9zd2FnZ2VyLXZhbGlkYXRlL3NyYy9pbmRleC5qcyIsIi9ob21lL21pY2hhZWwvc3JjL2dpdGh1Yi9mb3Jrcy9zd2FnZ2VyLWNsaWVudC1nZW5lcmF0b3Ivbm9kZV9tb2R1bGVzL3N3YWdnZXItdmFsaWRhdGUvc3JjL3ZhbGlkYXRlQXJyYXkuanMiLCIvaG9tZS9taWNoYWVsL3NyYy9naXRodWIvZm9ya3Mvc3dhZ2dlci1jbGllbnQtZ2VuZXJhdG9yL25vZGVfbW9kdWxlcy9zd2FnZ2VyLXZhbGlkYXRlL3NyYy92YWxpZGF0ZURhdGFUeXBlLmpzIiwiL2hvbWUvbWljaGFlbC9zcmMvZ2l0aHViL2ZvcmtzL3N3YWdnZXItY2xpZW50LWdlbmVyYXRvci9ub2RlX21vZHVsZXMvc3dhZ2dlci12YWxpZGF0ZS9zcmMvdmFsaWRhdGVNb2RlbC5qcyIsIi9ob21lL21pY2hhZWwvc3JjL2dpdGh1Yi9mb3Jrcy9zd2FnZ2VyLWNsaWVudC1nZW5lcmF0b3Ivbm9kZV9tb2R1bGVzL3N3YWdnZXItdmFsaWRhdGUvc3JjL3ZhbGlkYXRlT3BlcmF0aW9uLmpzIiwiL2hvbWUvbWljaGFlbC9zcmMvZ2l0aHViL2ZvcmtzL3N3YWdnZXItY2xpZW50LWdlbmVyYXRvci9ub2RlX21vZHVsZXMvc3dhZ2dlci12YWxpZGF0ZS9zcmMvdmFsaWRhdGVQcmltaXRpdmVUeXBlcy5qcyIsIi9ob21lL21pY2hhZWwvc3JjL2dpdGh1Yi9mb3Jrcy9zd2FnZ2VyLWNsaWVudC1nZW5lcmF0b3Ivc3JjL2FwcGx5QXV0aERhdGEuanMiLCIvaG9tZS9taWNoYWVsL3NyYy9naXRodWIvZm9ya3Mvc3dhZ2dlci1jbGllbnQtZ2VuZXJhdG9yL3NyYy9jcmVhdGVDbGllbnQuanMiLCIvaG9tZS9taWNoYWVsL3NyYy9naXRodWIvZm9ya3Mvc3dhZ2dlci1jbGllbnQtZ2VuZXJhdG9yL3NyYy9jcmVhdGVPcGVyYXRpb25IYW5kbGVyLmpzIiwiL2hvbWUvbWljaGFlbC9zcmMvZ2l0aHViL2ZvcmtzL3N3YWdnZXItY2xpZW50LWdlbmVyYXRvci9zcmMvZXJyb3JUeXBlcy5qcyIsIi9ob21lL21pY2hhZWwvc3JjL2dpdGh1Yi9mb3Jrcy9zd2FnZ2VyLWNsaWVudC1nZW5lcmF0b3Ivc3JjL2dldFJlcXVlc3RCb2R5LmpzIiwiL2hvbWUvbWljaGFlbC9zcmMvZ2l0aHViL2ZvcmtzL3N3YWdnZXItY2xpZW50LWdlbmVyYXRvci9zcmMvZ2V0UmVxdWVzdEhlYWRlcnMuanMiLCIvaG9tZS9taWNoYWVsL3NyYy9naXRodWIvZm9ya3Mvc3dhZ2dlci1jbGllbnQtZ2VuZXJhdG9yL3NyYy9nZXRSZXF1ZXN0VXJsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1SkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3Rocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIil9dmFyIGY9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGYuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sZixmLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gRGF0YVR5cGVWYWxpZGF0aW9uRXJyb3IobWVzc2FnZSl7XG4gIHRoaXMubmFtZSA9ICdEYXRhVHlwZVZhbGlkYXRpb25FcnJvcic7XG4gIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2UgfHwgJ0ludmFsaWQgZGF0YSB0eXBlJztcbn1cbkRhdGFUeXBlVmFsaWRhdGlvbkVycm9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRXJyb3IucHJvdG90eXBlKTtcbkRhdGFUeXBlVmFsaWRhdGlvbkVycm9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IERhdGFUeXBlVmFsaWRhdGlvbkVycm9yO1xuZXhwb3J0cy5EYXRhVHlwZVZhbGlkYXRpb25FcnJvciA9IERhdGFUeXBlVmFsaWRhdGlvbkVycm9yO1xuXG5mdW5jdGlvbiBOb3RBbkludGVnZXJFcnJvcih2YWx1ZSl7XG4gIHRoaXMubmFtZSA9ICdOb3RBbkludGVnZXJFcnJvcic7XG4gIHRoaXMubWVzc2FnZSA9ICdcIicgKyB2YWx1ZSArICdcIiBpcyBub3QgYW4gaW50ZWdlcic7XG4gIHRoaXMudmFsdWUgPSB2YWx1ZTtcbn1cbk5vdEFuSW50ZWdlckVycm9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRGF0YVR5cGVWYWxpZGF0aW9uRXJyb3IucHJvdG90eXBlKTtcbk5vdEFuSW50ZWdlckVycm9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IE5vdEFuSW50ZWdlckVycm9yO1xuZXhwb3J0cy5Ob3RBbkludGVnZXJFcnJvciA9IE5vdEFuSW50ZWdlckVycm9yO1xuXG5mdW5jdGlvbiBOb3RBTnVtYmVyRXJyb3IodmFsdWUsIGFjdHVhbFR5cGUpe1xuICB0aGlzLm5hbWUgPSAnTm90QU51bWJlckVycm9yJztcbiAgdGhpcy5tZXNzYWdlID0gJ1wiJyArIHZhbHVlICsgJ1wiIGlzIG5vdCBhIG51bWJlcic7XG4gIGlmKGFjdHVhbFR5cGUpIHRoaXMubWVzc2FnZSArPSAnIChnb3QgYSAnICsgYWN0dWFsVHlwZSArICcgaW5zdGVhZCknO1xuXG4gIHRoaXMudmFsdWUgPSB2YWx1ZTtcbn1cbk5vdEFOdW1iZXJFcnJvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKERhdGFUeXBlVmFsaWRhdGlvbkVycm9yLnByb3RvdHlwZSk7XG5Ob3RBTnVtYmVyRXJyb3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gTm90QU51bWJlckVycm9yO1xuZXhwb3J0cy5Ob3RBTnVtYmVyRXJyb3IgPSBOb3RBTnVtYmVyRXJyb3I7XG5cbmZ1bmN0aW9uIE51bWJlclRvb0xhcmdlRXJyb3IodmFsdWUsIG1heCl7XG4gIHRoaXMubmFtZSA9ICdOdW1iZXJUb29MYXJnZUVycm9yJztcbiAgdGhpcy5tZXNzYWdlID0gJ1wiJyArIHZhbHVlICsgJ1wiIGlzIGFib3ZlIHRoZSBtYXhpbXVtIG9mICcgKyBtYXgudG9TdHJpbmcoKTtcbiAgdGhpcy52YWx1ZSA9IHZhbHVlO1xufVxuTnVtYmVyVG9vTGFyZ2VFcnJvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKERhdGFUeXBlVmFsaWRhdGlvbkVycm9yLnByb3RvdHlwZSk7XG5OdW1iZXJUb29MYXJnZUVycm9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IE51bWJlclRvb0xhcmdlRXJyb3I7XG5leHBvcnRzLk51bWJlclRvb0xhcmdlRXJyb3IgPSBOdW1iZXJUb29MYXJnZUVycm9yO1xuXG5mdW5jdGlvbiBOdW1iZXJUb29TbWFsbEVycm9yKHZhbHVlLCBtYXgpe1xuICB0aGlzLm5hbWUgPSAnTnVtYmVyVG9vU21hbGxFcnJvcic7XG4gIHRoaXMubWVzc2FnZSA9ICdcIicgKyB2YWx1ZSArICdcIiBpcyBhYm92ZSB0aGUgbWF4aW11bSBvZiAnICsgbWF4LnRvU3RyaW5nKCk7XG4gIHRoaXMudmFsdWUgPSB2YWx1ZTtcbn1cbk51bWJlclRvb1NtYWxsRXJyb3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShEYXRhVHlwZVZhbGlkYXRpb25FcnJvci5wcm90b3R5cGUpO1xuTnVtYmVyVG9vU21hbGxFcnJvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBOdW1iZXJUb29TbWFsbEVycm9yO1xuZXhwb3J0cy5OdW1iZXJUb29TbWFsbEVycm9yID0gTnVtYmVyVG9vU21hbGxFcnJvcjtcblxuZnVuY3Rpb24gTm90QUJvb2xlYW5FcnJvcih2YWx1ZSwgYWN0dWFsVHlwZSl7XG4gIHRoaXMubmFtZSA9ICdOb3RBQm9vbGVhbkVycm9yJztcbiAgdGhpcy5tZXNzYWdlID0gJ1wiJyArIHZhbHVlICsgJ1wiIGlzIG5vdCBhIGJvb2xlYW4nO1xuICBpZihhY3R1YWxUeXBlKSB0aGlzLm1lc3NhZ2UgKz0gJyAoZ290IGEgJyArIGFjdHVhbFR5cGUgKyAnIGluc3RlYWQpJztcblxuICB0aGlzLnZhbHVlID0gdmFsdWU7XG59XG5Ob3RBQm9vbGVhbkVycm9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRGF0YVR5cGVWYWxpZGF0aW9uRXJyb3IucHJvdG90eXBlKTtcbk5vdEFCb29sZWFuRXJyb3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gTm90QUJvb2xlYW5FcnJvcjtcbmV4cG9ydHMuTm90QUJvb2xlYW5FcnJvciA9IE5vdEFCb29sZWFuRXJyb3I7XG5cbmZ1bmN0aW9uIE5vdEFuQXJyYXlFcnJvcih2YWx1ZSwgYWN0dWFsVHlwZSl7XG4gIHRoaXMubmFtZSA9ICdOb3RBbkFycmF5RXJyb3InO1xuICB0aGlzLm1lc3NhZ2UgPSAnXCInICsgdmFsdWUgKyAnXCIgaXMgbm90IGFuIGFycmF5JztcbiAgaWYoYWN0dWFsVHlwZSkgdGhpcy5tZXNzYWdlICs9ICcgKGdvdCBhICcgKyBhY3R1YWxUeXBlICsgJyBpbnN0ZWFkKSc7XG5cbiAgdGhpcy52YWx1ZSA9IHZhbHVlO1xufVxuTm90QW5BcnJheUVycm9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRGF0YVR5cGVWYWxpZGF0aW9uRXJyb3IucHJvdG90eXBlKTtcbk5vdEFuQXJyYXlFcnJvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBOb3RBbkFycmF5RXJyb3I7XG5leHBvcnRzLk5vdEFuQXJyYXlFcnJvciA9IE5vdEFuQXJyYXlFcnJvcjtcblxuZnVuY3Rpb24gRHVwbGljYXRlSW5TZXRFcnJvcihhcnIsIGR1cGVzKXtcbiAgdGhpcy5uYW1lID0gJ0R1cGxpY2F0ZUluU2V0RXJyb3InO1xuICB0aGlzLm1lc3NhZ2UgPSAnRHVwbGljYXRlcyAoXCInICsgZHVwZXMuam9pbignXCIsIFwiJykgKyAnXCIpIGZvdW5kIGluIHNldDogW1wiJyArIGFyci5qb2luKCdcIiwgXCInKSArICdcIic7XG4gIHRoaXMuZHVwZXMgPSBkdXBlcztcbiAgdGhpcy52YWx1ZSA9IGFycjtcbn1cbkR1cGxpY2F0ZUluU2V0RXJyb3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShEYXRhVHlwZVZhbGlkYXRpb25FcnJvci5wcm90b3R5cGUpO1xuRHVwbGljYXRlSW5TZXRFcnJvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBEdXBsaWNhdGVJblNldEVycm9yO1xuZXhwb3J0cy5EdXBsaWNhdGVJblNldEVycm9yID0gRHVwbGljYXRlSW5TZXRFcnJvcjtcblxuZnVuY3Rpb24gTm90Vm9pZEVycm9yKHZhbHVlLCBhY3R1YWxUeXBlKXtcbiAgdGhpcy5uYW1lID0gJ05vdFZvaWRFcnJvcic7XG4gIHRoaXMubWVzc2FnZSA9ICdcIicgKyB2YWx1ZSArICdcIiBpcyBub3QgbnVsbCBvciB1bmRlZmluZWQnO1xuICBpZihhY3R1YWxUeXBlKSB0aGlzLm1lc3NhZ2UgKz0gJyAoZ290IGEgJyArIGFjdHVhbFR5cGUgKyAnIGluc3RlYWQpJztcblxuICB0aGlzLnZhbHVlID0gdmFsdWU7XG59XG5Ob3RWb2lkRXJyb3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShEYXRhVHlwZVZhbGlkYXRpb25FcnJvci5wcm90b3R5cGUpO1xuTm90Vm9pZEVycm9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IE5vdFZvaWRFcnJvcjtcbmV4cG9ydHMuTm90Vm9pZEVycm9yID0gTm90Vm9pZEVycm9yO1xuXG5mdW5jdGlvbiBOb3RBU3RyaW5nRXJyb3IodmFsdWUsIGFjdHVhbFR5cGUpe1xuICB0aGlzLm5hbWUgPSAnTm90QVN0cmluZ0Vycm9yJztcbiAgdGhpcy5tZXNzYWdlID0gJ1wiJyArIHZhbHVlICsgJ1wiIGlzIG5vdCBhIHN0cmluZyc7XG4gIGlmKGFjdHVhbFR5cGUpIHRoaXMubWVzc2FnZSArPSAnIChnb3QgYSAnICsgYWN0dWFsVHlwZSArICcgaW5zdGVhZCknO1xuXG4gIHRoaXMudmFsdWUgPSB2YWx1ZTtcbn1cbk5vdEFTdHJpbmdFcnJvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKERhdGFUeXBlVmFsaWRhdGlvbkVycm9yLnByb3RvdHlwZSk7XG5Ob3RBU3RyaW5nRXJyb3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gTm90QVN0cmluZ0Vycm9yO1xuZXhwb3J0cy5Ob3RBU3RyaW5nRXJyb3IgPSBOb3RBU3RyaW5nRXJyb3I7XG5cbmZ1bmN0aW9uIFN0cmluZ05vdEluRW51bUVycm9yKHZhbHVlLCBhY2NlcHRhYmxlVmFsdWVzKXtcbiAgdGhpcy5uYW1lID0gJ1N0cmluZ05vdEluRW51bUVycm9yJztcbiAgdGhpcy5tZXNzYWdlID0gJ1wiJyArIHZhbHVlICsgJ1wiIGlzIG5vdCBhbiBhY2NlcHRhYmxlIHZhbHVlOiBcIicgKyBhY2NlcHRhYmxlVmFsdWVzLmpvaW4oJ1wiLCBcIicpICsgJ1wiJztcbiBcbiAgdGhpcy52YWx1ZSA9IHZhbHVlO1xufVxuU3RyaW5nTm90SW5FbnVtRXJyb3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShEYXRhVHlwZVZhbGlkYXRpb25FcnJvci5wcm90b3R5cGUpO1xuU3RyaW5nTm90SW5FbnVtRXJyb3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gU3RyaW5nTm90SW5FbnVtRXJyb3I7XG5leHBvcnRzLlN0cmluZ05vdEluRW51bUVycm9yID0gU3RyaW5nTm90SW5FbnVtRXJyb3I7XG5cblxuZnVuY3Rpb24gRXJyb3JzSW5BcnJheUVsZW1lbnRzRXJyb3IoZXJyb3JzKXtcbiAgdGhpcy5uYW1lID0gJ0Vycm9yc0luQXJyYXlFbGVtZW50c0Vycm9yJztcbiAgdGhpcy5tZXNzYWdlID0gJ0Vycm9ycyBpbiBhcnJheSBlbGVtZW50czpcXG5cXHQnICsgZXJyb3JzLmpvaW4oJyxcXG5cXHQnKTtcbiAgdGhpcy5lcnJvcnMgPSBlcnJvcnM7XG59XG5FcnJvcnNJbkFycmF5RWxlbWVudHNFcnJvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKERhdGFUeXBlVmFsaWRhdGlvbkVycm9yLnByb3RvdHlwZSk7XG5FcnJvcnNJbkFycmF5RWxlbWVudHNFcnJvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBFcnJvcnNJbkFycmF5RWxlbWVudHNFcnJvcjtcbmV4cG9ydHMuRXJyb3JzSW5BcnJheUVsZW1lbnRzRXJyb3IgPSBFcnJvcnNJbkFycmF5RWxlbWVudHNFcnJvcjtcblxuZnVuY3Rpb24gTWlzc2luZ1ZhbHVlRXJyb3IoKXtcbiAgdGhpcy5uYW1lID0gJ01pc3NpbmdWYWx1ZUVycm9yJztcbiAgXG4gIHRoaXMubWVzc2FnZSA9ICdUaGlzIHZhbHVlIGlzIHJlcXVpcmVkIGJ1dCBtaXNzaW5nJztcbn1cbk1pc3NpbmdWYWx1ZUVycm9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRGF0YVR5cGVWYWxpZGF0aW9uRXJyb3IucHJvdG90eXBlKTtcbk1pc3NpbmdWYWx1ZUVycm9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IE1pc3NpbmdWYWx1ZUVycm9yO1xuZXhwb3J0cy5NaXNzaW5nVmFsdWVFcnJvciA9IE1pc3NpbmdWYWx1ZUVycm9yO1xuXG5mdW5jdGlvbiBWYWxpZGF0aW9uRXJyb3Ioc3BlY05hbWUsIHNwZWMsIGVycm9yKXtcbiAgdGhpcy5uYW1lID0gJ1ZhbGlkYXRpb25FcnJvcic7XG4gIHRoaXMuc3BlY05hbWUgPSBzcGVjTmFtZTtcbiAgdGhpcy5zcGVjID0gc3BlYztcbiAgdGhpcy5lcnJvciA9IGVycm9yO1xuXG4gIHRoaXMubWVzc2FnZSA9IHNwZWNOYW1lICsgJyBpcyBpbnZhbGlkOiAnICsgZXJyb3IubWVzc2FnZTtcbn1cblZhbGlkYXRpb25FcnJvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKERhdGFUeXBlVmFsaWRhdGlvbkVycm9yLnByb3RvdHlwZSk7XG5WYWxpZGF0aW9uRXJyb3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gVmFsaWRhdGlvbkVycm9yO1xuZXhwb3J0cy5WYWxpZGF0aW9uRXJyb3IgPSBWYWxpZGF0aW9uRXJyb3I7XG5cbmZ1bmN0aW9uIFZhbGlkYXRpb25FcnJvcnModmFsdWUsIHNwZWNOYW1lLCBzcGVjLCBlcnJvcnMpe1xuICB0aGlzLm5hbWUgPSAnVmFsaWRhdGlvbkVycm9ycyc7XG5cbiAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICB0aGlzLnNwZWNOYW1lID0gc3BlY05hbWU7XG4gIHRoaXMuc3BlYyA9IHNwZWM7XG4gIHRoaXMuZXJyb3JzID0gZXJyb3JzIHx8IFtdO1xuXG4gIHRoaXMubWVzc2FnZSA9IHNwZWNOYW1lICsgJyBpcyBpbnZhbGlkJztcblxuICBpZih0aGlzLmVycm9ycy5sZW5ndGgpe1xuICAgIHRoaXMubWVzc2FnZSArPSAnOlxcblxcdCcgKyB0aGlzLmVycm9ycy5tYXAoZnVuY3Rpb24oZSl7IHJldHVybiBlLm1lc3NhZ2U7IH0pLmpvaW4oJ1xcblxcdCcpO1xuICB9XG59XG5WYWxpZGF0aW9uRXJyb3JzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRGF0YVR5cGVWYWxpZGF0aW9uRXJyb3IucHJvdG90eXBlKTtcblZhbGlkYXRpb25FcnJvcnMucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gVmFsaWRhdGlvbkVycm9ycztcbmV4cG9ydHMuVmFsaWRhdGlvbkVycm9ycyA9IFZhbGlkYXRpb25FcnJvcnM7XG4iLCJleHBvcnRzLmRhdGFUeXBlID0gcmVxdWlyZSgnLi92YWxpZGF0ZURhdGFUeXBlJyk7XG5leHBvcnRzLm1vZGVsID0gcmVxdWlyZSgnLi92YWxpZGF0ZU1vZGVsJyk7XG5leHBvcnRzLm9wZXJhdGlvbiA9IHJlcXVpcmUoJy4vdmFsaWRhdGVPcGVyYXRpb24nKTtcbmV4cG9ydHMuYXJyYXkgPSByZXF1aXJlKCcuL3ZhbGlkYXRlQXJyYXknKTtcbmV4cG9ydHMuZXJyb3JzID0gcmVxdWlyZSgnLi9lcnJvclR5cGVzJyk7XG5cbnZhciBwcmltaXRpdmVzID0gcmVxdWlyZSgnLi92YWxpZGF0ZVByaW1pdGl2ZVR5cGVzJyk7XG5leHBvcnRzLnByaW1pdGl2ZSA9IHtcbiAgaW50ZWdlcjogcHJpbWl0aXZlcy52YWxpZGF0ZUludGVnZXIsXG4gIG51bWJlcjogcHJpbWl0aXZlcy52YWxpZGF0ZU51bWJlcixcbiAgc3RyaW5nOiBwcmltaXRpdmVzLnZhbGlkYXRlU3RyaW5nLFxuICBib29sZWFuOiBwcmltaXRpdmVzLnZhbGlkYXRlQm9vbGVhbixcbiAgdm9pZDogcHJpbWl0aXZlcy52YWxpZGF0ZVZvaWQsXG4gIGZpbGU6IHByaW1pdGl2ZXMudmFsaWRhdGVGaWxlXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZXJyb3JUeXBlcyA9IHJlcXVpcmUoJy4vZXJyb3JUeXBlcycpLFxuICB2YWxpZGF0ZSA9IHJlcXVpcmUoJy4vaW5kZXgnKTtcblxuZnVuY3Rpb24gdmFsaWRhdGVBcnJheShjYW5kaWRhdGUsIGRhdGFUeXBlLCBtb2RlbHMpe1xuICBpZighQXJyYXkuaXNBcnJheShjYW5kaWRhdGUpKXtcbiAgICByZXR1cm4gbmV3IGVycm9yVHlwZXMuTm90QW5BcnJheUVycm9yKGNhbmRpZGF0ZSwgdHlwZW9mIGNhbmRpZGF0ZSk7XG4gIH1cblxuICB2YXIgaXRlbXMgPSBkYXRhVHlwZS5pdGVtcztcblxuICBpZihkYXRhVHlwZS51bmlxdWVJdGVtcyl7XG4gICAgdmFyIGR1cGVDaGVjayA9IFtdO1xuICAgIHZhciBkdXBlcyA9IGNhbmRpZGF0ZS5maWx0ZXIoZnVuY3Rpb24odmFsdWUpe1xuICAgICAgdmFyIHNpZ25hdHVyZTtcbiAgICAgIGlmKGl0ZW1zLiRyZWYpe1xuICAgICAgICBzaWduYXR1cmUgPSBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzaWduYXR1cmUgPSB2YWx1ZTtcbiAgICAgIH1cbiAgICAgIGlmKGR1cGVDaGVjay5pbmRleE9mKHNpZ25hdHVyZSkgIT09IC0xKXtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkdXBlQ2hlY2sucHVzaChzaWduYXR1cmUpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZihkdXBlcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBuZXcgZXJyb3JUeXBlcy5EdXBsaWNhdGVJblNldEVycm9yKGNhbmRpZGF0ZSwgZHVwZXMpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBlcnJvcnM7XG5cbiAgaWYoaXRlbXMuJHJlZil7XG4gICAgdmFyIG1vZGVsID0gbW9kZWxzW2l0ZW1zLiRyZWZdO1xuICAgIGVycm9ycyA9IGNhbmRpZGF0ZS5maWx0ZXIoZnVuY3Rpb24odmFsdWUpe1xuICAgICAgcmV0dXJuIHZhbGlkYXRlLm1vZGVsKHZhbHVlLCBtb2RlbCwgbW9kZWxzKTtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBlcnJvcnMgPSBjYW5kaWRhdGUuZmlsdGVyKGZ1bmN0aW9uKHZhbHVlKXtcbiAgICAgIHJldHVybiB2YWxpZGF0ZS5kYXRhVHlwZSh2YWx1ZSwgaXRlbXMsIG1vZGVscyk7XG4gICAgfSk7XG4gIH1cblxuICBpZihlcnJvcnMubGVuZ3RoKXtcbiAgICByZXR1cm4gbmV3IGVycm9yVHlwZXMuRXJyb3JzSW5BcnJheUVsZW1lbnRzRXJyb3IoZXJyb3JzKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSB2YWxpZGF0ZUFycmF5OyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHZhbGlkYXRlID0gcmVxdWlyZSgnLi9pbmRleCcpO1xuICBcbmZ1bmN0aW9uIHZhbGlkYXRlRGF0YVR5cGUoY2FuZGlkYXRlLCBkYXRhVHlwZSwgbW9kZWxzKXtcbiAgbW9kZWxzID0gbW9kZWxzIHx8IHt9O1xuICAgICAgXG4gIHZhciB0eXBlID0gZGF0YVR5cGUudHlwZSB8fCBkYXRhVHlwZS5kYXRhVHlwZSB8fCBkYXRhVHlwZS4kcmVmO1xuXG4gIHN3aXRjaCh0eXBlKXtcbiAgICBjYXNlICdpbnRlZ2VyJzpcbiAgICAgIHJldHVybiB2YWxpZGF0ZS5wcmltaXRpdmUuaW50ZWdlcihjYW5kaWRhdGUsIGRhdGFUeXBlKTtcbiAgICBjYXNlICdudW1iZXInOlxuICAgICAgcmV0dXJuIHZhbGlkYXRlLnByaW1pdGl2ZS5udW1iZXIoY2FuZGlkYXRlLCBkYXRhVHlwZSk7XG4gICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgIHJldHVybiB2YWxpZGF0ZS5wcmltaXRpdmUuc3RyaW5nKGNhbmRpZGF0ZSwgZGF0YVR5cGUpO1xuICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgcmV0dXJuIHZhbGlkYXRlLnByaW1pdGl2ZS5ib29sZWFuKGNhbmRpZGF0ZSk7XG4gICAgY2FzZSAnYXJyYXknOlxuICAgICAgcmV0dXJuIHZhbGlkYXRlLmFycmF5KGNhbmRpZGF0ZSwgZGF0YVR5cGUsIG1vZGVscyk7XG4gICAgY2FzZSAndm9pZCc6XG4gICAgICByZXR1cm4gdmFsaWRhdGUucHJpbWl0aXZlLnZvaWQoY2FuZGlkYXRlKTtcbiAgICBjYXNlICdGaWxlJzpcbiAgICAgIHJldHVybiB2YWxpZGF0ZS5wcmltaXRpdmUuZmlsZSgpO1xuICAgIGRlZmF1bHQ6XG4gICAgICAvLyBBc3N1bWVkIHRvIGJlIGNvbXBsZXggbW9kZWxcbiAgICAgIHZhciBtb2RlbCA9IG1vZGVsc1t0eXBlXTtcbiAgICAgIHJldHVybiB2YWxpZGF0ZS5tb2RlbChjYW5kaWRhdGUsIG1vZGVsLCBtb2RlbHMpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHZhbGlkYXRlRGF0YVR5cGU7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZXJyb3JUeXBlcyA9IHJlcXVpcmUoJy4vZXJyb3JUeXBlcycpLFxuICBWYWxpZGF0aW9uRXJyb3IgPSBlcnJvclR5cGVzLlZhbGlkYXRpb25FcnJvcixcbiAgVmFsaWRhdGlvbkVycm9ycyA9IGVycm9yVHlwZXMuVmFsaWRhdGlvbkVycm9ycyxcbiAgTWlzc2luZ1ZhbHVlRXJyb3IgPSBlcnJvclR5cGVzLk1pc3NpbmdWYWx1ZUVycm9yLFxuICB2YWxpZGF0ZSA9IHJlcXVpcmUoJy4vaW5kZXgnKTtcblxuLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xMjIxMDIvd2hhdC1pcy10aGUtbW9zdC1lZmZpY2llbnQtd2F5LXRvLWNsb25lLWFuLW9iamVjdFxuZnVuY3Rpb24gY2xvbmUob2JqKXtcbiAgICBpZihvYmogPT09IG51bGwgfHwgb2JqID09PSB1bmRlZmluZWQgfHwgdHlwZW9mIG9iaiAhPT0gJ29iamVjdCcpIHJldHVybiBvYmo7XG5cbiAgICBpZihBcnJheS5pc0FycmF5KG9iaikpIHJldHVybiBvYmouc2xpY2UoKTtcblxuICAgIHZhciB0ZW1wID0ge307XG5cbiAgICBmb3IodmFyIGtleSBpbiBvYmopXG4gICAgICAgIHRlbXBba2V5XSA9IGNsb25lKG9ialtrZXldKTtcbiAgICByZXR1cm4gdGVtcDtcbn1cblxuZnVuY3Rpb24gYWRkSW5oZXJ0aWVkUHJvcGVydGllcyhtb2RlbCwgbW9kZWxJZCwgbW9kZWxzKXtcbiAgdmFyIHBhcmVudDtcblxuICBPYmplY3Qua2V5cyhtb2RlbHMpLnNvbWUoZnVuY3Rpb24obW9kZWxOYW1lKXtcbiAgICB2YXIgcG90ZW50aWFsUGFyZW50ID0gbW9kZWxzW21vZGVsTmFtZV07XG4gICAgaWYgKCFwb3RlbnRpYWxQYXJlbnQuc3ViVHlwZXMpIHJldHVybjtcblxuICAgIGlmKHBvdGVudGlhbFBhcmVudC5zdWJUeXBlcy5pbmRleE9mKG1vZGVsSWQpICE9PSAtMSl7XG4gICAgICBwYXJlbnQgPSBwb3RlbnRpYWxQYXJlbnQ7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIGlmKCFwYXJlbnQpIHJldHVybjtcblxuICBmb3IodmFyIHByb3BlcnR5TmFtZSBpbiBwYXJlbnQucHJvcGVydGllcyl7XG4gICAgbW9kZWwucHJvcGVydGllc1twcm9wZXJ0eU5hbWVdID0gcGFyZW50LnByb3BlcnRpZXNbcHJvcGVydHlOYW1lXTtcbiAgfVxuICBcbiAgaWYocGFyZW50LnJlcXVpcmVkKSBtb2RlbC5yZXF1aXJlZCA9IG1vZGVsLnJlcXVpcmVkLmNvbmNhdChwYXJlbnQucmVxdWlyZWQpO1xuXG4gIGFkZEluaGVydGllZFByb3BlcnRpZXMobW9kZWwsIHBhcmVudC5pZCwgbW9kZWxzKTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVNb2RlbChjYW5kaWRhdGUsIG1vZGVsLCBtb2RlbHMpe1xuICBpZihjYW5kaWRhdGUgPT09IG51bGwgfHwgdHlwZW9mIGNhbmRpZGF0ZSAhPT0gJ29iamVjdCcpe1xuICAgIHJldHVybiBuZXcgVmFsaWRhdGlvbkVycm9ycyhjYW5kaWRhdGUsIG1vZGVsKTtcbiAgfVxuXG4gIG1vZGVscyA9IG1vZGVscyB8fCB7fTtcblxuICBtb2RlbCA9IGNsb25lKG1vZGVsKTtcbiAgaWYoIW1vZGVsLnJlcXVpcmVkKSBtb2RlbC5yZXF1aXJlZCA9IFtdO1xuICBhZGRJbmhlcnRpZWRQcm9wZXJ0aWVzKG1vZGVsLCBtb2RlbC5pZCwgbW9kZWxzKTtcblxuICB2YXIgZXJyb3JzID0gW107XG5cbiAgbW9kZWwucmVxdWlyZWQuZm9yRWFjaChmdW5jdGlvbihwcm9wZXJ0eU5hbWUpe1xuICAgIGlmIChjYW5kaWRhdGVbcHJvcGVydHlOYW1lXSAhPT0gdW5kZWZpbmVkKSByZXR1cm47XG5cbiAgICB2YXIgcHJvcGVydHkgPSBtb2RlbC5wcm9wZXJ0aWVzW3Byb3BlcnR5TmFtZV07XG4gICAgdmFyIGVycm9yID0gbmV3IE1pc3NpbmdWYWx1ZUVycm9yKCk7XG4gICAgZXJyb3JzLnB1c2gobmV3IFZhbGlkYXRpb25FcnJvcihwcm9wZXJ0eU5hbWUsIHByb3BlcnR5LCBlcnJvcikpO1xuICB9KTtcblxuICBPYmplY3Qua2V5cyhjYW5kaWRhdGUpLmZvckVhY2goZnVuY3Rpb24ocHJvcGVydHlOYW1lKXtcbiAgICB2YXIgcHJvcGVydHkgPSBtb2RlbC5wcm9wZXJ0aWVzW3Byb3BlcnR5TmFtZV07XG4gICAgXG4gICAgaWYocHJvcGVydHkgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xuXG4gICAgdmFyIGVycm9yID0gdmFsaWRhdGUuZGF0YVR5cGUoY2FuZGlkYXRlW3Byb3BlcnR5TmFtZV0sIHByb3BlcnR5LCBtb2RlbHMpO1xuICAgIGlmKGVycm9yKXtcbiAgICAgIGVycm9ycy5wdXNoKG5ldyBWYWxpZGF0aW9uRXJyb3IocHJvcGVydHlOYW1lLCBwcm9wZXJ0eSwgZXJyb3IpKTtcbiAgICB9XG4gIH0pO1xuICBcbiAgaWYoZXJyb3JzLmxlbmd0aCl7XG4gICAgcmV0dXJuIG5ldyBWYWxpZGF0aW9uRXJyb3JzKGNhbmRpZGF0ZSwgbW9kZWwuaWQsIG1vZGVsLCBlcnJvcnMpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHZhbGlkYXRlTW9kZWw7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZXJyb3JUeXBlcyA9IHJlcXVpcmUoJy4vZXJyb3JUeXBlcycpLFxuICBWYWxpZGF0aW9uRXJyb3IgPSBlcnJvclR5cGVzLlZhbGlkYXRpb25FcnJvcixcbiAgVmFsaWRhdGlvbkVycm9ycyA9IGVycm9yVHlwZXMuVmFsaWRhdGlvbkVycm9ycyxcbiAgTWlzc2luZ1ZhbHVlRXJyb3IgPSBlcnJvclR5cGVzLk1pc3NpbmdWYWx1ZUVycm9yLFxuICB2YWxpZGF0ZSA9IHJlcXVpcmUoJy4vaW5kZXgnKTtcblxuZnVuY3Rpb24gdmFsaWRhdGVPcGVyYXRpb24oY2FuZGlkYXRlLCBvcGVyYXRpb24sIG1vZGVscyl7XG4gIHZhciBlcnJvcnMgPSBbXTtcbiAgXG4gIHZhciBwcmVzZW50UGFyYW1zID0gb3BlcmF0aW9uLnBhcmFtZXRlcnMuZmlsdGVyKGZ1bmN0aW9uKHBhcmFtKXtcbiAgICBpZiAoY2FuZGlkYXRlW3BhcmFtLm5hbWVdICE9PSB1bmRlZmluZWQpIHJldHVybiB0cnVlO1xuICAgIFxuICAgIGlmIChwYXJhbS5yZXF1aXJlZCkge1xuICAgICAgdmFyIGVycm9yID0gbmV3IE1pc3NpbmdWYWx1ZUVycm9yKCk7XG4gICAgICBlcnJvcnMucHVzaChuZXcgVmFsaWRhdGlvbkVycm9yKHBhcmFtLm5hbWUsIHBhcmFtLCBlcnJvcikpO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfSk7XG5cbiAgcHJlc2VudFBhcmFtcy5mb3JFYWNoKGZ1bmN0aW9uKHBhcmFtKXtcbiAgICB2YXIgZXJyb3IgPSB2YWxpZGF0ZS5kYXRhVHlwZShjYW5kaWRhdGVbcGFyYW0ubmFtZV0sIHBhcmFtLCBtb2RlbHMpO1xuICAgIGlmKGVycm9yKXtcbiAgICAgIGVycm9ycy5wdXNoKG5ldyBWYWxpZGF0aW9uRXJyb3IocGFyYW0ubmFtZSwgcGFyYW0sIGVycm9yKSk7XG4gICAgfVxuICB9KTtcbiAgXG4gIGlmKGVycm9ycy5sZW5ndGgpe1xuICAgIHJldHVybiBuZXcgVmFsaWRhdGlvbkVycm9ycyhjYW5kaWRhdGUsIG9wZXJhdGlvbi5uaWNrbmFtZSwgb3BlcmF0aW9uLCBlcnJvcnMpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHZhbGlkYXRlT3BlcmF0aW9uOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGVycm9yVHlwZXMgPSByZXF1aXJlKCcuL2Vycm9yVHlwZXMnKTtcblxuZnVuY3Rpb24gdmFsaWRhdGVJbnRlZ2VyKGNhbmRpZGF0ZSwgZGF0YVR5cGUpe1xuICB2YXIgZXJyb3IgPSB2YWxpZGF0ZU51bWJlcihjYW5kaWRhdGUsIGRhdGFUeXBlKTtcbiAgaWYoZXJyb3IpIHJldHVybiBlcnJvcjtcblxuICBpZihjYW5kaWRhdGUgJSAxKXtcbiAgICByZXR1cm4gbmV3IGVycm9yVHlwZXMuTm90QW5JbnRlZ2VyRXJyb3IoY2FuZGlkYXRlKTtcbiAgfVxufVxuZXhwb3J0cy52YWxpZGF0ZUludGVnZXIgPSB2YWxpZGF0ZUludGVnZXI7XG5cbmZ1bmN0aW9uIHZhbGlkYXRlTnVtYmVyKGNhbmRpZGF0ZSwgZGF0YVR5cGUpe1xuICBpZighKHR5cGVvZiBjYW5kaWRhdGUgPT09ICdudW1iZXInIHx8IGNhbmRpZGF0ZSBpbnN0YW5jZW9mIE51bWJlcikgfHwgaXNOYU4oY2FuZGlkYXRlKSl7XG4gICAgcmV0dXJuIG5ldyBlcnJvclR5cGVzLk5vdEFOdW1iZXJFcnJvcihjYW5kaWRhdGUsIHR5cGVvZiBjYW5kaWRhdGUpO1xuICB9XG4gIFxuICBpZigoZGF0YVR5cGUubWluaW11bSAhPT0gdW5kZWZpbmVkKSAmJiBjYW5kaWRhdGUgPCBwYXJzZUludChkYXRhVHlwZS5taW5pbXVtLCAxMCkpe1xuICAgIHJldHVybiBuZXcgZXJyb3JUeXBlcy5OdW1iZXJUb29TbWFsbEVycm9yKGNhbmRpZGF0ZSwgZGF0YVR5cGUubWluaW11bSk7XG4gIH1cbiAgXG4gIGlmKChkYXRhVHlwZS5tYXhpbXVtICE9PSB1bmRlZmluZWQpICYmIGNhbmRpZGF0ZSA+IHBhcnNlSW50KGRhdGFUeXBlLm1heGltdW0sIDEwKSl7XG4gICAgcmV0dXJuIG5ldyBlcnJvclR5cGVzLk51bWJlclRvb0xhcmdlRXJyb3IoY2FuZGlkYXRlLCBkYXRhVHlwZS5tYXhpbXVtKTtcbiAgfVxufVxuZXhwb3J0cy52YWxpZGF0ZU51bWJlciA9IHZhbGlkYXRlTnVtYmVyO1xuXG5mdW5jdGlvbiB2YWxpZGF0ZUJvb2xlYW4oY2FuZGlkYXRlKXtcbiAgaWYoISh0eXBlb2YgY2FuZGlkYXRlID09PSAnYm9vbGVhbicgfHwgY2FuZGlkYXRlIGluc3RhbmNlb2YgQm9vbGVhbikpe1xuICAgIHJldHVybiBuZXcgZXJyb3JUeXBlcy5Ob3RBQm9vbGVhbkVycm9yKGNhbmRpZGF0ZSwgdHlwZW9mIGNhbmRpZGF0ZSk7XG4gIH1cbn1cbmV4cG9ydHMudmFsaWRhdGVCb29sZWFuID0gdmFsaWRhdGVCb29sZWFuO1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlVm9pZChjYW5kaWRhdGUpe1xuICBpZihjYW5kaWRhdGUgIT0gbnVsbCl7XG4gICAgcmV0dXJuIG5ldyBlcnJvclR5cGVzLk5vdFZvaWRFcnJvcihjYW5kaWRhdGUsIHR5cGVvZiBjYW5kaWRhdGUpO1xuICB9XG59XG5leHBvcnRzLnZhbGlkYXRlVm9pZCA9IHZhbGlkYXRlVm9pZDtcblxuZnVuY3Rpb24gdmFsaWRhdGVGaWxlKCl7XG4gIC8vIE5vdCBzdXJlIGhvdyB0byBjaGVjayB0aGlzLCBzaW5jZSBhbnl0aGluZyBjb3VsZCBxdWFsaWZ5IGFzICdGaWxlJy5cbn1cbmV4cG9ydHMudmFsaWRhdGVGaWxlID0gdmFsaWRhdGVGaWxlO1xuXG5mdW5jdGlvbiB2YWxpZGF0ZVN0cmluZyhjYW5kaWRhdGUsIGRhdGFUeXBlKXtcbiAgaWYodHlwZW9mIGNhbmRpZGF0ZSAhPT0gJ3N0cmluZycgJiYgIShjYW5kaWRhdGUgaW5zdGFuY2VvZiBTdHJpbmcpKXtcbiAgICByZXR1cm4gbmV3IGVycm9yVHlwZXMuTm90QVN0cmluZ0Vycm9yKGNhbmRpZGF0ZSwgdHlwZW9mIGNhbmRpZGF0ZSk7XG4gIH1cblxuICBpZignZW51bScgaW4gZGF0YVR5cGUpe1xuICAgIGlmKGRhdGFUeXBlLmVudW0uaW5kZXhPZihjYW5kaWRhdGUpID09PSAtMSkge1xuICAgICAgcmV0dXJuIG5ldyBlcnJvclR5cGVzLlN0cmluZ05vdEluRW51bUVycm9yKGNhbmRpZGF0ZSwgZGF0YVR5cGUuZW51bSk7XG4gICAgfVxuICB9XG59XG5leHBvcnRzLnZhbGlkYXRlU3RyaW5nID0gdmFsaWRhdGVTdHJpbmc7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgTWlzc2luZ0F1dGhvcml6YXRpb25FcnJvciA9IHJlcXVpcmUoJy4vZXJyb3JUeXBlcycpLk1pc3NpbmdBdXRob3JpemF0aW9uRXJyb3I7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYXBwbHlBdXRoRGF0YShvcGVyYXRpb24sIGF1dGhEYXRhLCByZXF1ZXN0KXtcbiAgdmFyIGF1dGhNYXAgPSBvcGVyYXRpb24uYXV0aG9yaXphdGlvbnM7XG4gIGlmKCFhdXRoTWFwKSBhdXRoTWFwID0gb3BlcmF0aW9uLmFwaU9iamVjdC5hcGlEZWNsYXJhdGlvbi5hdXRob3JpemF0aW9ucztcbiAgaWYoIWF1dGhNYXApIHJldHVybjtcblxuICB2YXIgYXV0aE5hbWVzID0gT2JqZWN0LmtleXMoYXV0aE1hcCkuZmlsdGVyKGZ1bmN0aW9uKGF1dGhOYW1lKXtcbiAgICAvLyBDdXJyZW50bHkgdW5hYmxlIHRvIGhhbmRsZSBvYXV0aDJcbiAgICByZXR1cm4gYXV0aE1hcFthdXRoTmFtZV0udHlwZSAhPT0gJ29hdXRoMic7XG4gIH0pO1xuXG4gIGlmKGF1dGhOYW1lcy5sZW5ndGggPT09IDApIHJldHVybjtcblxuICBpZihhdXRoTmFtZXMubGVuZ3RoID09PSAxKXtcbiAgICB2YXIgYXV0aE5hbWUgPSBhdXRoTmFtZXNbMF07XG4gICAgdmFyIGF1dGggPSBhdXRoTWFwW2F1dGhOYW1lXTtcblxuICAgIGlmKCFhdXRoRGF0YSkgdGhyb3cgbmV3IE1pc3NpbmdBdXRob3JpemF0aW9uRXJyb3IoYXV0aE5hbWUsIGF1dGgpO1xuXG4gICAgLy8gVW5wYWNrIG5lc3RlZCBhdXRoRGF0YSBmb3Igc2luZ2xlIGF1dGggb3BzOiB7IGFwaUtleTogJzEyMycgfSAtPiAnMTIzJ1xuICAgIGlmKGF1dGhEYXRhW2F1dGhOYW1lXSkgYXV0aERhdGEgPSBhdXRoRGF0YVthdXRoTmFtZV07XG5cbiAgICBpZihhdXRoLnR5cGUgPT09ICdhcGlLZXknKXtcbiAgICAgIGFwcGx5QXBpS2V5KGF1dGgsIGF1dGhOYW1lLCBhdXRoRGF0YSwgcmVxdWVzdCk7XG4gICAgfSBlbHNlIGlmKGF1dGgudHlwZSA9PT0gJ2Jhc2ljQXV0aCcpIHtcbiAgICAgIGFwcGx5QmFzaWNBdXRoKGF1dGgsIGF1dGhOYW1lLCBhdXRoRGF0YS51c2VybmFtZSwgYXV0aERhdGEucGFzc3dvcmQsIHJlcXVlc3QpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YXIgaGFzQXV0aCA9IGF1dGhOYW1lcy5zb21lKGZ1bmN0aW9uKGF1dGhOYW1lKXtcbiAgICAgIHZhciBhdXRoID0gYXV0aE1hcFthdXRoTmFtZV07XG4gICAgICB2YXIgZGF0YSA9IGF1dGhEYXRhW2F1dGhOYW1lXTtcblxuICAgICAgaWYoIWRhdGEpIHJldHVybiBmYWxzZTtcblxuICAgICAgaWYoYXV0aC50eXBlID09PSAnYXBpS2V5Jyl7XG4gICAgICAgIGFwcGx5QXBpS2V5KGF1dGgsIGF1dGhOYW1lLCBkYXRhLCByZXF1ZXN0KTtcbiAgICAgIH0gZWxzZSBpZihhdXRoLnR5cGUgPT09ICdiYXNpY0F1dGgnKXtcbiAgICAgICAgYXBwbHlCYXNpY0F1dGgoYXV0aCwgYXV0aE5hbWUsIGRhdGEudXNlcm5hbWUsIGRhdGEucGFzc3dvcmQsIHJlcXVlc3QpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KTtcblxuICAgIGlmKCFoYXNBdXRoKXtcbiAgICAgIHRocm93IG5ldyBNaXNzaW5nQXV0aG9yaXphdGlvbkVycm9yKGF1dGhOYW1lcy5qb2luKCcsICcpLCBhdXRoTWFwKTtcbiAgICB9XG4gIH1cbn07XG5cbmZ1bmN0aW9uIGFwcGx5QXBpS2V5KGF1dGgsIGF1dGhOYW1lLCBhcGlLZXksIHJlcXVlc3Qpe1xuICBpZighYXBpS2V5KSB0aHJvdyBuZXcgTWlzc2luZ0F1dGhvcml6YXRpb25FcnJvcihhdXRoTmFtZSwgYXV0aCk7XG4gIFxuICBpZihhdXRoLnBhc3NBcyA9PT0gJ2hlYWRlcicpe1xuICAgIHJlcXVlc3QuaGVhZGVyc1thdXRoLmtleW5hbWVdID0gYXBpS2V5O1xuICB9IGVsc2UgaWYoYXV0aC5wYXNzQXMgPT09ICdxdWVyeScpe1xuICAgIHZhciB1cmwgPSByZXF1ZXN0LnVybDtcbiAgICB2YXIgcXVlcnlQYXJhbSA9IGF1dGgua2V5bmFtZSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudChhcGlLZXkpO1xuICAgIGlmKHVybC5pbmRleE9mKCc/JykgPT09IC0xKXtcbiAgICAgIHVybCArPSAnPycgKyBxdWVyeVBhcmFtO1xuICAgIH0gZWxzZSB7XG4gICAgICB1cmwgPSB1cmwucmVwbGFjZSgnPycsICc/JyArIHF1ZXJ5UGFyYW0gKyAnJicpO1xuICAgIH1cblxuICAgIHJlcXVlc3QudXJsID0gdXJsO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5QmFzaWNBdXRoKGF1dGgsIGF1dGhOYW1lLCB1c2VybmFtZSwgcGFzc3dvcmQsIHJlcXVlc3Qpe1xuICBpZighdXNlcm5hbWUgfHwgIXBhc3N3b3JkKSB0aHJvdyBuZXcgTWlzc2luZ0F1dGhvcml6YXRpb25FcnJvcihhdXRoTmFtZSwgYXV0aCk7XG4gIFxuICB2YXIgdXJsID0gcmVxdWVzdC51cmw7XG4gIFxuICAvLyBPbmx5IGFkZCBiYXNpYyBhdXRoIG9uY2VcbiAgaWYodXJsLmluZGV4T2YoJ0AnKSA9PT0gLTEpe1xuICAgIHVybCA9IHVybC5yZXBsYWNlKCc6Ly8nLCAnOi8vJyArIHVzZXJuYW1lICsgJzonICsgcGFzc3dvcmQgKyAnQCcpO1xuICB9XG5cbiAgcmVxdWVzdC51cmwgPSB1cmw7XG59IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgY3JlYXRlT3BlcmF0aW9uSGFuZGxlciA9IHJlcXVpcmUoJy4vY3JlYXRlT3BlcmF0aW9uSGFuZGxlcicpO1xuXG5mdW5jdGlvbiBjcmVhdGVDbGllbnQoc2NoZW1hLCByZXF1ZXN0SGFuZGxlcil7XG4gIHZhciBhcGkgPSB7fSxcbiAgICBhcGlBdXRoRGF0YSxcbiAgICBhdXRoTWV0aG9kTmFtZSA9ICdhdXRoJztcblxuICBzY2hlbWEgPSBwcm9jZXNzU2NoZW1hKHNjaGVtYSk7XG5cbiAgLy8gSWYgdGhlICdhdXRoJyBrZXkgaXMgdXNlZCBmb3IgYW55IHJlc291cmNlIG9yIG9wZXJhdGlvbiwgd2UnbGwgdXNlXG4gIC8vICdhdXRob3JpemF0aW9uJyBpbnN0ZWFkIGZvciB0aGUgYXV0aCBtZXRob2RzXG4gIHZhciBhdXRoSXNJblVzZSA9IHNjaGVtYS5hcGlzLnNvbWUoZnVuY3Rpb24ocmVzb3VyY2VPYmplY3Qpe1xuICAgIHJldHVybiByZXNvdXJjZU9iamVjdC5hcGlEZWNsYXJhdGlvbi5hcGlzLnNvbWUoZnVuY3Rpb24oYXBpT2JqZWN0KXtcbiAgICAgIHZhciByZXNvdXJjZUFwaU5hbWUgPSBnZXRBcGlOYW1lKGFwaU9iamVjdC5hcGlEZWNsYXJhdGlvbi5yZXNvdXJjZVBhdGggfHwgYXBpT2JqZWN0LnBhdGgpO1xuICAgICAgaWYocmVzb3VyY2VBcGlOYW1lID09PSAnYXV0aCcpIHJldHVybiB0cnVlO1xuICAgICAgcmV0dXJuIGFwaU9iamVjdC5vcGVyYXRpb25zLnNvbWUoZnVuY3Rpb24ob3BlcmF0aW9uKXtcbiAgICAgICAgcmV0dXJuIG9wZXJhdGlvbi5uaWNrbmFtZSA9PT0gJ2F1dGgnO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIGlmKGF1dGhJc0luVXNlKSBhdXRoTWV0aG9kTmFtZSA9ICdhdXRob3JpemF0aW9uJztcblxuICBhcGlbYXV0aE1ldGhvZE5hbWVdID0gZnVuY3Rpb24oKXtcbiAgICBhcGlBdXRoRGF0YSA9IHByb2Nlc3NBcGlBdXRoQXJncyhhcmd1bWVudHMpO1xuICB9O1xuXG4gIHNjaGVtYS5hcGlzLmZvckVhY2goZnVuY3Rpb24ocmVzb3VyY2VPYmplY3Qpe1xuICAgIHZhciByZXNvdXJjZU5hbWUsXG4gICAgICByZXNvdXJjZUFwaSxcbiAgICAgIHJlc291cmNlQXV0aERhdGE7XG5cbiAgICBpZihyZXNvdXJjZU9iamVjdC5hcGlEZWNsYXJhdGlvbi5yZXNvdXJjZVBhdGgpe1xuICAgICAgcmVzb3VyY2VOYW1lID0gZ2V0QXBpTmFtZShyZXNvdXJjZU9iamVjdC5hcGlEZWNsYXJhdGlvbi5yZXNvdXJjZVBhdGgpO1xuICAgICAgcmVzb3VyY2VBcGkgPSBhcGlbcmVzb3VyY2VOYW1lXSA9IHt9O1xuICAgICAgcmVzb3VyY2VBcGlbYXV0aE1ldGhvZE5hbWVdID0gZnVuY3Rpb24oKXtcbiAgICAgICAgcmVzb3VyY2VBdXRoRGF0YSA9IHByb2Nlc3NBcGlBdXRoQXJncyhhcmd1bWVudHMpO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICAocmVzb3VyY2VPYmplY3QuYXBpRGVjbGFyYXRpb24uYXBpcyB8fCBbXSkuZm9yRWFjaChmdW5jdGlvbihhcGlPYmplY3Qpe1xuICAgICAgdmFyIGFwaU9iamVjdE5hbWUgPSByZXNvdXJjZU5hbWUsXG4gICAgICAgIGFwaU9iamVjdEFwaSA9IHJlc291cmNlQXBpLFxuICAgICAgICBhcGlPYmplY3RBdXRoRGF0YTtcblxuICAgICAgaWYoIWFwaU9iamVjdE5hbWUpe1xuICAgICAgICBhcGlPYmplY3ROYW1lID0gZ2V0QXBpTmFtZShhcGlPYmplY3QucGF0aCk7XG4gICAgICAgIGFwaU9iamVjdEFwaSA9IGFwaVthcGlPYmplY3ROYW1lXSA9IHt9O1xuICAgICAgICBhcGlPYmplY3RBcGlbYXV0aE1ldGhvZE5hbWVdID0gZnVuY3Rpb24oKXtcbiAgICAgICAgICBhcGlPYmplY3RBdXRoRGF0YSA9IHByb2Nlc3NBcGlBdXRoQXJncyhhcmd1bWVudHMpO1xuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICAoYXBpT2JqZWN0Lm9wZXJhdGlvbnMgfHwgW10pLmZvckVhY2goZnVuY3Rpb24ob3BlcmF0aW9uKXtcbiAgICAgICAgdmFyIG9wZXJhdGlvbkhhbmRsZXJOYW1lID0gb3BlcmF0aW9uLm5pY2tuYW1lLFxuICAgICAgICAgIG9wZXJhdGlvbkF1dGhEYXRhLFxuICAgICAgICAgIG9wZXJhdGlvbkhhbmRsZXI7XG5cbiAgICAgICAgZnVuY3Rpb24gZ2V0QXV0aERhdGEoKXtcbiAgICAgICAgICByZXR1cm4gb3BlcmF0aW9uQXV0aERhdGEgfHwgYXBpT2JqZWN0QXV0aERhdGEgfHwgcmVzb3VyY2VBdXRoRGF0YSB8fCBhcGlBdXRoRGF0YTtcbiAgICAgICAgfVxuXG4gICAgICAgIG9wZXJhdGlvbkhhbmRsZXIgPSBjcmVhdGVPcGVyYXRpb25IYW5kbGVyKG9wZXJhdGlvbiwgZ2V0QXV0aERhdGEsIHJlcXVlc3RIYW5kbGVyKTtcblxuICAgICAgICBvcGVyYXRpb25IYW5kbGVyW2F1dGhNZXRob2ROYW1lXSA9IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgb3BlcmF0aW9uQXV0aERhdGEgPSBwcm9jZXNzQXBpQXV0aEFyZ3MoYXJndW1lbnRzKTtcbiAgICAgICAgfTtcblxuICAgICAgICBhcGlPYmplY3RBcGlbb3BlcmF0aW9uSGFuZGxlck5hbWVdID0gb3BlcmF0aW9uSGFuZGxlcjtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcblxuICByZXR1cm4gYXBpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVDbGllbnQ7XG5cbmZ1bmN0aW9uIHByb2Nlc3NBcGlBdXRoQXJncyhhcmdzKXtcbiAgLy8gZm9yIGJhc2ljIGF1dGgsIGFsbG93IGNhbGxzIHdpdGggdHdvIGFyZ3MgKHVzZXJuYW1lLCBwYXNzd29yZClcbiAgaWYodHlwZW9mIGFyZ3NbMF0gPT09ICdzdHJpbmcnICYmIHR5cGVvZiBhcmdzWzFdID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB7XG4gICAgICB1c2VybmFtZTogYXJnc1swXSxcbiAgICAgIHBhc3N3b3JkOiBhcmdzWzFdXG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gYXJnc1swXTtcbiAgfVxufVxuXG4vLyBIZWxwcGVyIG1ldGhvZCB3aGljaCBhc3NpbmdzIGJhY2sgcG9pbnRlciB0byBvYmplY3QgcGFyZW50cyBhbmQgcmV0dXJuc1xuLy8gdGhlIGFwaSBvYmplY3RzIHdpdGhpbiB0aGUgZ2l2ZW4gc2NoZW1hLlxuZnVuY3Rpb24gcHJvY2Vzc1NjaGVtYShzY2hlbWEpe1xuICBzY2hlbWEuYXBpcy5mb3JFYWNoKGZ1bmN0aW9uKHJlc291cmNlT2JqZWN0KXtcbiAgICByZXNvdXJjZU9iamVjdC5yZXNvdXJjZUxpc3RpbmcgPSBzY2hlbWE7XG5cbiAgICAocmVzb3VyY2VPYmplY3QuYXBpRGVjbGFyYXRpb24uYXBpcyB8fCBbXSkuZm9yRWFjaChmdW5jdGlvbihhcGlPYmplY3Qpe1xuICAgICAgYXBpT2JqZWN0LnJlc291cmNlT2JqZWN0ID0gcmVzb3VyY2VPYmplY3Q7XG4gICAgICBhcGlPYmplY3QuYXBpRGVjbGFyYXRpb24gPSByZXNvdXJjZU9iamVjdC5hcGlEZWNsYXJhdGlvbjtcblxuICAgICAgKGFwaU9iamVjdC5vcGVyYXRpb25zIHx8IFtdKS5mb3JFYWNoKGZ1bmN0aW9uKG9wZXJhdGlvbil7XG4gICAgICAgIG9wZXJhdGlvbi5hcGlPYmplY3QgPSBhcGlPYmplY3Q7XG5cbiAgICAgICAgKG9wZXJhdGlvbi5wYXJhbWV0ZXJzIHx8IFtdKS5mb3JFYWNoKGZ1bmN0aW9uKHBhcmFtZXRlcil7XG4gICAgICAgICAgcGFyYW1ldGVyLm9wZXJhdGlvbiA9IG9wZXJhdGlvbjtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgcmV0dXJuIHNjaGVtYTtcbn1cblxuLy8gVGFrZXMgYSBwYXRoIGFuZCByZXR1cm5zIGEgSmF2YVNjcmlwdC1mcmllbmRseSB2YXJpYWJsZSBuYW1lXG5mdW5jdGlvbiBnZXRBcGlOYW1lKG5hbWUpe1xuICAvLyBTdHJpbmcgbm9uLXdvcmQgY2hhcmFjdGVyc1xuICBuYW1lID0gbmFtZS5yZXBsYWNlKC9cXFcvZywgJy8nKTtcblxuICAvLyBUdXJuIHBhdGhzIHdoaWNoIGxvb2svbGlrZS90aGlzIHRvIGxvb2tMaWtlVGhpc1xuICBuYW1lID0gbmFtZS5yZXBsYWNlKC8oXFx3KVxcLyhcXHcpL2csIGZ1bmN0aW9uKG1hdGNoLCBwMSwgcDIpe1xuICAgIHJldHVybiBwMSArIHAyLnRvVXBwZXJDYXNlKCk7XG4gIH0pO1xuXG4gIG5hbWUgPSBuYW1lLnJlcGxhY2UoL1xcLy9nLCAnJyk7XG5cbiAgcmV0dXJuIG5hbWU7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBnZXRSZXF1ZXN0SGVhZGVycyA9IHJlcXVpcmUoJy4vZ2V0UmVxdWVzdEhlYWRlcnMnKSxcbiAgZ2V0UmVxdWVzdFVybCA9IHJlcXVpcmUoJy4vZ2V0UmVxdWVzdFVybCcpLFxuICBnZXRSZXF1ZXN0Qm9keSA9IHJlcXVpcmUoJy4vZ2V0UmVxdWVzdEJvZHknKSxcbiAgYXBwbHlBdXRoRGF0YSA9IHJlcXVpcmUoJy4vYXBwbHlBdXRoRGF0YScpLFxuICBlcnJvclR5cGVzID0gcmVxdWlyZSgnLi9lcnJvclR5cGVzJyksXG4gIHN3YWdnZXJWYWxpZGF0ZSA9IHJlcXVpcmUoJ3N3YWdnZXItdmFsaWRhdGUnKTtcblxudmFyIGFsbEVycm9yVHlwZXMgPSB7fTtcbk9iamVjdC5rZXlzKHN3YWdnZXJWYWxpZGF0ZS5lcnJvcnMpLmZvckVhY2goZnVuY3Rpb24oZXJyb3JOYW1lKXtcbiAgYWxsRXJyb3JUeXBlc1tlcnJvck5hbWVdID0gc3dhZ2dlclZhbGlkYXRlLmVycm9yc1tlcnJvck5hbWVdO1xufSk7XG5cbk9iamVjdC5rZXlzKGVycm9yVHlwZXMpLmZvckVhY2goZnVuY3Rpb24oZXJyb3JOYW1lKXtcbiAgYWxsRXJyb3JUeXBlc1tlcnJvck5hbWVdID0gZXJyb3JUeXBlc1tlcnJvck5hbWVdO1xufSk7XG5cbmZ1bmN0aW9uIGNyZWF0ZU9wZXJhdGlvbkhhbmRsZXIob3BlcmF0aW9uLCBnZXRBdXRoRGF0YSwgcmVxdWVzdEhhbmRsZXIpe1xuICBmdW5jdGlvbiBSZXF1ZXN0KGRhdGEsIG9wdGlvbnMpe1xuICAgIHRoaXMubWV0aG9kID0gb3BlcmF0aW9uLm1ldGhvZDtcbiAgICB0aGlzLm9wZXJhdGlvbiA9IG9wZXJhdGlvbjtcbiAgICB0aGlzLmVycm9yVHlwZXMgPSBhbGxFcnJvclR5cGVzO1xuICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgfVxuXG4gIHZhciBvcGVyYXRpb25IYW5kbGVyID0gZnVuY3Rpb24oZGF0YSwgb3B0aW9ucyl7XG4gICAgdmFyIGVycm9yLFxuICAgICAgcmVxdWVzdDtcblxuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gICAgaWYoZGF0YSA9PSBudWxsKSBkYXRhID0ge307XG5cbiAgICAvLyBpZiBhIGZ1bmN0aW9uIGlzIHBhc3NlZCBpbiBhcyBvcHRpb25zLCBhc3N1bWUgaXQncyBhIGNhbGxiYWNrIGZ1bmN0aW9uXG4gICAgLy8gZm9yIGNvbnZlbmllbmNlXG4gICAgaWYodHlwZW9mIG9wdGlvbnMgPT09ICdmdW5jdGlvbicpe1xuICAgICAgb3B0aW9ucy5jYWxsYmFjayA9IG9wdGlvbnM7XG4gICAgfVxuXG4gICAgdHJ5e1xuICAgICAgZGF0YSA9IHBydW5lKGRhdGEpO1xuICAgICAgZGF0YSA9IHNpbmdsZVBhcmFtQ29udmVuaWVuY2VQcm9jZXNzb3Iob3BlcmF0aW9uLCBkYXRhKTtcbiAgICAgIGRhdGEgPSByZW1vdmVVbmtub3duUGFyYW1zKG9wZXJhdGlvbiwgZGF0YSk7XG5cbiAgICAgIGVycm9yID0gc3dhZ2dlclZhbGlkYXRlLm9wZXJhdGlvbihkYXRhLCBvcGVyYXRpb24sIG9wZXJhdGlvbi5hcGlPYmplY3QuYXBpRGVjbGFyYXRpb24ubW9kZWxzKTtcblxuICAgICAgcmVxdWVzdCA9IG5ldyBSZXF1ZXN0KGRhdGEsIG9wdGlvbnMpO1xuXG4gICAgICAvLyBJZiB3ZSBrbm93IHRoZXJlIGlzIGFuIGVycm9yLCBkb24ndCBhdHRlbXB0IHRvIGNyYWZ0IHRoZSByZXF1ZXN0IHBhcmFtcy5cbiAgICAgIC8vIFRoZSByZXF1ZXN0IHBhcmFtIGdlbmVyYXRvcnMgYXNzdW1lIHZhbGlkIGRhdGEgdG8gd29yayBwcm9wZXJseS5cbiAgICAgIGlmKCFlcnJvcil7XG4gICAgICAgIHJlcXVlc3QudXJsID0gZ2V0UmVxdWVzdFVybChvcGVyYXRpb24sIGRhdGEpO1xuICAgICAgICByZXF1ZXN0LmhlYWRlcnMgPSBnZXRSZXF1ZXN0SGVhZGVycyhvcGVyYXRpb24sIGRhdGEsIG9wdGlvbnMpO1xuICAgICAgICByZXF1ZXN0LmJvZHkgPSBnZXRSZXF1ZXN0Qm9keShvcGVyYXRpb24sIGRhdGEsIHJlcXVlc3QuaGVhZGVycyk7XG5cbiAgICAgICAgYXBwbHlBdXRoRGF0YShvcGVyYXRpb24sIGdldEF1dGhEYXRhKCksIHJlcXVlc3QpO1xuICAgICAgfVxuICAgIH0gY2F0Y2goZSl7XG4gICAgICBlcnJvciA9IGU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcXVlc3RIYW5kbGVyKGVycm9yLCByZXF1ZXN0KTtcbiAgfTtcblxuICAvLyBVc2VmdWwgZm9yIGluc3RhbmNlb2YgY2hlY2tzXG4gIG9wZXJhdGlvbkhhbmRsZXIuUmVxdWVzdCA9IFJlcXVlc3Q7XG4gIG9wZXJhdGlvbkhhbmRsZXIuZXJyb3JUeXBlcyA9IGFsbEVycm9yVHlwZXM7XG5cbiAgLy8gVXNlZnVsIGZvciByZWZsZWN0aW9uXG4gIG9wZXJhdGlvbkhhbmRsZXIub3BlcmF0aW9uID0gb3BlcmF0aW9uO1xuXG4gIC8vIENhbiBiZSB1c2VkIHRvIHByZWVtcHRpdmVseSB2YWxpZGF0ZSB3aXRob3V0IGFjdGlvblxuICBvcGVyYXRpb25IYW5kbGVyLnZhbGlkYXRlID0gZnVuY3Rpb24oZGF0YSl7XG4gICAgcmV0dXJuIHN3YWdnZXJWYWxpZGF0ZS5vcGVyYXRpb24oZGF0YSwgb3BlcmF0aW9uLCBvcGVyYXRpb24uYXBpT2JqZWN0LmFwaURlY2xhcmF0aW9uLm1vZGVscyk7XG4gIH07XG5cbiAgcmV0dXJuIG9wZXJhdGlvbkhhbmRsZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZU9wZXJhdGlvbkhhbmRsZXI7XG5cbmZ1bmN0aW9uIG5vb3AoKXt9XG5jcmVhdGVPcGVyYXRpb25IYW5kbGVyLmxvZ2dlciA9IHtcbiAgZGVidWc6IG5vb3AsXG4gIGluZm86IG5vb3AsXG4gIHdhcm46IG5vb3AsXG4gIGVycm9yOiBub29wXG59O1xuXG4vLyBTdHJpbmdpZnkgYW5kIHBhcnNlIHRoZSBkYXRhIHRvIGNsZWFuIHVwIHVuZGVmaW5lZCwgYW5kIG5vbi1zY2FsYXIgcHJvcGVydGllc1xuZnVuY3Rpb24gcHJ1bmUoZGF0YSl7XG4gIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbn1cblxuLy8gRW5hYmxlcyBkYXRhIHRvIGJlIHBhc3NlZCBkaXJlY3RseSBmb3Igc2luZ2xlIHBhcmFtIG9wZXJhdGlvbnMuXG5mdW5jdGlvbiBzaW5nbGVQYXJhbUNvbnZlbmllbmNlUHJvY2Vzc29yKG9wZXJhdGlvbiwgZGF0YSl7XG4gIC8vIElmIHRoZXJlIGFyZSBtb3JlIHRoYW4gb25lIHBhcmFtcywgYmFpbFxuICB2YXIgcmVxdWlyZWRQYXJhbXMgPSAob3BlcmF0aW9uLnBhcmFtZXRlcnMgfHwgW10pLmZpbHRlcihmdW5jdGlvbihwYXJhbSl7XG4gICAgcmV0dXJuIHBhcmFtLnJlcXVpcmVkO1xuICB9KTtcblxuICAvLyBJZiB0aGVyZSBhcmUgbW9yZSB0aGFuIG9uZSByZXF1aXJlZCBwYXJhbXMsIG9yIGlmIHRoZXJlIGlzIG5vIHJlcXVpcmVkIHBhcmFtXG4gIC8vIGFuZCB0aGVyZSBhcmUgbWFueSBvcHRpb25hbCBwYXJhbXMsIGJhaWxcbiAgaWYocmVxdWlyZWRQYXJhbXMubGVuZ3RoID4gMSkgcmV0dXJuIGRhdGE7XG5cbiAgaWYocmVxdWlyZWRQYXJhbXMubGVuZ3RoICE9PSAxICYmIChvcGVyYXRpb24ucGFyYW1ldGVycyB8fCBbXSkubGVuZ3RoICE9PSAxKSByZXR1cm4gZGF0YTtcblxuICB2YXIgcGFyYW0gPSByZXF1aXJlZFBhcmFtc1swXSB8fCBvcGVyYXRpb24ucGFyYW1ldGVyc1swXTtcblxuICAvLyBJZiB0aGUgcGFyYW0gaXMgYWxyZWFkeSBkZWZpbmVkIGV4cGxpY2l0bHksIGJhaWxcbiAgaWYodHlwZW9mIGRhdGEgPT09ICdvYmplY3QnICYmICBkYXRhW3BhcmFtLm5hbWVdICE9PSB1bmRlZmluZWQpIHJldHVybiBkYXRhO1xuXG4gIHZhciBtb2RlbHMgPSBvcGVyYXRpb24uYXBpT2JqZWN0LmFwaURlY2xhcmF0aW9uLm1vZGVscztcblxuICAvLyBJZiB0aGUgZGF0YSBwYXNzZWQgaXMgaXMgbm90IHZhbGlkIGZvciB0aGUgcGFyYW0gZGF0YSB0eXBlLCBiYWlsXG4gIHZhciBlcnJvcjtcblxuICB0cnkge1xuICAgIGVycm9yID0gc3dhZ2dlclZhbGlkYXRlLmRhdGFUeXBlKGRhdGEsIHBhcmFtLCBtb2RlbHMpO1xuICB9IGNhdGNoKGUpe1xuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgLy8gSWYgdGhlIGRhdGEgcGFzc2VkIGlzIGEgdmFsaWQgcGFyYW0gZGF0YSB0eXBlLCBiYWlsXG4gIGlmKCFlcnJvcil7XG4gICAgdmFyIHdyYXBwZXIgPSB7fTtcbiAgICB3cmFwcGVyW3BhcmFtLm5hbWVdID0gZGF0YTtcbiAgICByZXR1cm4gd3JhcHBlcjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZGF0YTtcbiAgfVxufVxuXG5cbmZ1bmN0aW9uIHJlbW92ZVVua25vd25QYXJhbXMob3BlcmF0aW9uLCBkYXRhKXtcbiAgaWYoIWRhdGEgfHwgdHlwZW9mIGRhdGEgIT09ICdvYmplY3QnKSByZXR1cm4gZGF0YTtcblxuICB2YXIgcGFyYW1OYW1lcyA9IHt9O1xuICAob3BlcmF0aW9uLnBhcmFtZXRlcnMgfHwgW10pLmZvckVhY2goZnVuY3Rpb24ocGFyYW0pe1xuICAgIHBhcmFtTmFtZXNbcGFyYW0ubmFtZV0gPSB0cnVlO1xuICB9KTtcblxuICB2YXIgdW5rbm93bktleXMgPSBPYmplY3Qua2V5cyhkYXRhKS5maWx0ZXIoZnVuY3Rpb24oa2V5KXtcbiAgICByZXR1cm4gIShrZXkgaW4gcGFyYW1OYW1lcyk7XG4gIH0pO1xuXG4gIGNyZWF0ZU9wZXJhdGlvbkhhbmRsZXIubG9nZ2VyLndhcm4oJ1Vua25vd24gcGFyYW1ldGVycyByZW1vdmVkIGZyb20gcmVxdWVzdDonLFxuICAgIHVua25vd25LZXlzLmpvaW4oJywgJykpO1xuXG4gIHVua25vd25LZXlzLmZvckVhY2goZnVuY3Rpb24oa2V5KXtcbiAgICBkZWxldGUgZGF0YVtrZXldO1xuICB9KTtcblxuICByZXR1cm4gZGF0YTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gSW52YWxpZFJlcXVlc3RFcnJvcihtZXNzYWdlKXtcbiAgdGhpcy5uYW1lID0gJ0ludmFsaWRSZXF1ZXN0RXJyb3InO1xuICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlIHx8ICdJbnZhbGlkIHJlcXVlc3QnO1xufVxuSW52YWxpZFJlcXVlc3RFcnJvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEVycm9yLnByb3RvdHlwZSk7XG5JbnZhbGlkUmVxdWVzdEVycm9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEludmFsaWRSZXF1ZXN0RXJyb3I7XG5cbmV4cG9ydHMuSW52YWxpZFJlcXVlc3RFcnJvciA9IEludmFsaWRSZXF1ZXN0RXJyb3I7XG5cblxuZnVuY3Rpb24gTWlzc2luZ0F1dGhvcml6YXRpb25FcnJvcihhdXRoTmFtZSwgYXV0aCl7XG4gIHRoaXMubmFtZSA9ICdNaXNzaW5nQXV0aG9yaXphdGlvbkVycm9yJztcbiAgdGhpcy5tZXNzYWdlID0gJ05vIGRhdGEgZm91bmQgZm9yIGF1dGhvcml6YXRpb246ICcgKyBhdXRoTmFtZTtcbiAgdGhpcy5hdXRob3JpemF0aW9uID0gYXV0aDtcbn1cbk1pc3NpbmdBdXRob3JpemF0aW9uRXJyb3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJbnZhbGlkUmVxdWVzdEVycm9yLnByb3RvdHlwZSk7XG5NaXNzaW5nQXV0aG9yaXphdGlvbkVycm9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IE1pc3NpbmdBdXRob3JpemF0aW9uRXJyb3I7XG5cbmV4cG9ydHMuTWlzc2luZ0F1dGhvcml6YXRpb25FcnJvciA9IE1pc3NpbmdBdXRob3JpemF0aW9uRXJyb3I7XG5cblxuZnVuY3Rpb24gTWlzc2luZ1BhdGhQYXJhbXNFcnJvcihwYXRoUGFyYW1zKXtcbiAgdGhpcy5uYW1lID0gJ01pc3NpbmdQYXRoUGFyYW1zRXJyb3InO1xuICB0aGlzLm1lc3NhZ2UgPSAnTWlzc2luZyB0aGUgZm9sbG93aW5nIHJlcXVpcmVkIHBhdGggcGFyYW1ldGVyczogJyArIHBhdGhQYXJhbXMuam9pbignJyk7XG59XG5NaXNzaW5nUGF0aFBhcmFtc0Vycm9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSW52YWxpZFJlcXVlc3RFcnJvci5wcm90b3R5cGUpO1xuTWlzc2luZ1BhdGhQYXJhbXNFcnJvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBNaXNzaW5nUGF0aFBhcmFtc0Vycm9yO1xuXG5leHBvcnRzLk1pc3NpbmdQYXRoUGFyYW1zRXJyb3IgPSBNaXNzaW5nUGF0aFBhcmFtc0Vycm9yO1xuXG5cbmZ1bmN0aW9uIENvbnRlbnRUeXBlTm90U3VwcG9ydGVkRXJyb3IoY29udGVudFR5cGUsIG9wZXJhdGlvbil7XG4gIHZhciBhcGlEZWNsYXJhdGlvbiA9IG9wZXJhdGlvbi5hcGlPYmplY3QuYXBpRGVjbGFyYXRpb247XG4gIHZhciBjb25zdW1lcyA9IG9wZXJhdGlvbi5jb25zdW1lcyB8fCBhcGlEZWNsYXJhdGlvbi5jb25zdW1lcyB8fCBbXTtcblxuICB0aGlzLm5hbWUgPSAnQ29udGVudFR5cGVOb3RTdXBwb3J0ZWRFcnJvcic7XG4gIHRoaXMubWVzc2FnZSA9ICdPcGVyYXRpb24gWycgKyBvcGVyYXRpb24ubmlja25hbWUgKyAnXSBkb2VzIG5vdCBhY2NlcHQgJyArIGNvbnRlbnRUeXBlICsgJy4gSXQgc3VwcG9ydHM6ICcgKyBcbiAgICBjb25zdW1lcy5qb2luKCcsICcpO1xufVxuQ29udGVudFR5cGVOb3RTdXBwb3J0ZWRFcnJvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEludmFsaWRSZXF1ZXN0RXJyb3IucHJvdG90eXBlKTtcbkNvbnRlbnRUeXBlTm90U3VwcG9ydGVkRXJyb3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gQ29udGVudFR5cGVOb3RTdXBwb3J0ZWRFcnJvcjtcblxuZXhwb3J0cy5Db250ZW50VHlwZU5vdFN1cHBvcnRlZEVycm9yID0gQ29udGVudFR5cGVOb3RTdXBwb3J0ZWRFcnJvcjtcblxuXG5mdW5jdGlvbiBBY2NlcHRzTm90U3VwcG9ydGVkRXJyb3IoYWNjZXB0cywgb3BlcmF0aW9uKXtcbiAgdmFyIGFwaURlY2xhcmF0aW9uID0gb3BlcmF0aW9uLmFwaU9iamVjdC5hcGlEZWNsYXJhdGlvbjtcbiAgdmFyIHByb2R1Y2VzID0gb3BlcmF0aW9uLnByb2R1Y2VzIHx8IGFwaURlY2xhcmF0aW9uLnByb2R1Y2VzIHx8IFtdO1xuXG4gIHRoaXMubmFtZSA9ICdBY2NlcHRzTm90U3VwcG9ydGVkRXJyb3InO1xuICB0aGlzLm1lc3NhZ2UgPSAnT3BlcmF0aW9uIFsnICsgb3BlcmF0aW9uLm5pY2tuYW1lICsgJ10gZG9lcyBub3QgcHJvZHVjZSAnICsgYWNjZXB0cyArICcuIEl0IHN1cHBvcnRzOiAnICsgXG4gICAgcHJvZHVjZXMuam9pbignLCAnKTtcbn1cbkFjY2VwdHNOb3RTdXBwb3J0ZWRFcnJvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEludmFsaWRSZXF1ZXN0RXJyb3IucHJvdG90eXBlKTtcbkFjY2VwdHNOb3RTdXBwb3J0ZWRFcnJvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBBY2NlcHRzTm90U3VwcG9ydGVkRXJyb3I7XG5cbmV4cG9ydHMuQWNjZXB0c05vdFN1cHBvcnRlZEVycm9yID0gQWNjZXB0c05vdFN1cHBvcnRlZEVycm9yO1xuXG5cbmZ1bmN0aW9uIE9wZXJhdGlvblZhbGlkYXRpb25FcnJvcihvcGVyYXRpb24sIGVycm9ycyl7XG4gIHRoaXMubmFtZSA9ICdPcGVyYXRpb25WYWxpZGF0aW9uRXJyb3InO1xuICB0aGlzLm1lc3NhZ2UgPSBvcGVyYXRpb24ubmlja25hbWUgKyAnIGZhaWxlZCB2YWxpZGF0aW9uOiBcXG5cXHQnICsgZXJyb3JzLmpvaW4oJ1xcblxcdCcpO1xufVxuT3BlcmF0aW9uVmFsaWRhdGlvbkVycm9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSW52YWxpZFJlcXVlc3RFcnJvci5wcm90b3R5cGUpO1xuT3BlcmF0aW9uVmFsaWRhdGlvbkVycm9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IE9wZXJhdGlvblZhbGlkYXRpb25FcnJvcjtcblxuZXhwb3J0cy5PcGVyYXRpb25WYWxpZGF0aW9uRXJyb3IgPSBPcGVyYXRpb25WYWxpZGF0aW9uRXJyb3I7XG5cblxuZnVuY3Rpb24gUGFyYW1ldGVyVmFsaWRhdGlvbkVycm9yKHBhcmFtZXRlciwgZXJyb3JzKXtcbiAgdGhpcy5uYW1lID0gJ1BhcmFtZXRlclZhbGlkYXRpb25FcnJvcic7XG4gIHRoaXMubWVzc2FnZSA9IHBhcmFtZXRlci5uYW1lICsgJyBmYWlsZWQgdmFsaWRhdGlvbjogXFxuXFx0JyArIGVycm9ycy5qb2luKCdcXG5cXHQnKTtcbn1cblBhcmFtZXRlclZhbGlkYXRpb25FcnJvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEludmFsaWRSZXF1ZXN0RXJyb3IucHJvdG90eXBlKTtcblBhcmFtZXRlclZhbGlkYXRpb25FcnJvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBQYXJhbWV0ZXJWYWxpZGF0aW9uRXJyb3I7XG5cbmV4cG9ydHMuUGFyYW1ldGVyVmFsaWRhdGlvbkVycm9yID0gUGFyYW1ldGVyVmFsaWRhdGlvbkVycm9yO1xuXG5cbmZ1bmN0aW9uIERhdGFUeXBlVmFsaWRhdGlvbkVycm9yKG1lc3NhZ2Upe1xuICB0aGlzLm5hbWUgPSAnRGF0YVR5cGVWYWxpZGF0aW9uRXJyb3InO1xuICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlIHx8ICdJbnZhbGlkIGRhdGEgdHlwZSc7XG59XG5EYXRhVHlwZVZhbGlkYXRpb25FcnJvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEVycm9yLnByb3RvdHlwZSk7XG5EYXRhVHlwZVZhbGlkYXRpb25FcnJvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBEYXRhVHlwZVZhbGlkYXRpb25FcnJvcjtcblxuZXhwb3J0cy5EYXRhVHlwZVZhbGlkYXRpb25FcnJvciA9IERhdGFUeXBlVmFsaWRhdGlvbkVycm9yOyIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBnZXRSZXF1ZXN0Qm9keShvcGVyYXRpb24sIGRhdGEsIGhlYWRlcnMpe1xuICB2YXIgYm9keSA9IChvcGVyYXRpb24ucGFyYW1ldGVycyB8fCBbXSkuZmlsdGVyKGZ1bmN0aW9uKHBhcmFtKXtcbiAgICByZXR1cm4gcGFyYW0ucGFyYW1UeXBlID09PSAnYm9keScgJiYgZGF0YVtwYXJhbS5uYW1lXSAhPSBudWxsO1xuICB9KS5tYXAoZnVuY3Rpb24ocGFyYW0pe1xuICAgIHJldHVybiBkYXRhW3BhcmFtLm5hbWVdO1xuICB9KVswXTtcblxuICBpZighKGhlYWRlcnMgJiYgIGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddKSkgcmV0dXJuIGJvZHk7XG5cbiAgdmFyIGNvbnRlbnRUeXBlID0gaGVhZGVyc1snQ29udGVudC1UeXBlJ107XG4gIHZhciBwcmVzZW50Rm9ybVBhcmFtcyA9IChvcGVyYXRpb24ucGFyYW1ldGVycyB8fCBbXSkuZmlsdGVyKGZ1bmN0aW9uKHBhcmFtKXtcbiAgICByZXR1cm4gcGFyYW0ucGFyYW1UeXBlID09PSAnZm9ybScgJiYgZGF0YVtwYXJhbS5uYW1lXSAhPSBudWxsO1xuICB9KTtcblxuICBpZihjb250ZW50VHlwZS5pbmRleE9mKCdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnKSAhPT0gLTEpe1xuICAgIGJvZHkgPSBwcmVzZW50Rm9ybVBhcmFtcy5tYXAoZnVuY3Rpb24ocGFyYW0pe1xuICAgICAgdmFyIGtleSA9IHBhcmFtLm5hbWUsXG4gICAgICAgIHZhbHVlID0gZGF0YVtrZXldO1xuICAgICAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChrZXkpICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKTtcbiAgICB9KS5qb2luKCcmJyk7XG4gIH0gZWxzZSBpZihjb250ZW50VHlwZS5pbmRleE9mKCdtdWx0aXBhcnQvZm9ybS1kYXRhJykgIT09IC0xKXtcbiAgICB2YXIgcmFuZG9tbmVzcyA9IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMTYpLnN1YnN0cigyKTtcbiAgICB2YXIgYm91bmRhcnkgPSAnU3dhZ2dlckJvdW5kYXJ5JyArIHJhbmRvbW5lc3M7XG5cbiAgICBib2R5ID0gcHJlc2VudEZvcm1QYXJhbXMubWFwKGZ1bmN0aW9uKHBhcmFtKXtcbiAgICAgIHZhciBrZXkgPSBwYXJhbS5uYW1lLFxuICAgICAgICB2YWx1ZSA9IGRhdGFba2V5XSxcbiAgICAgICAgcmVzdWx0ID0gJy0tJyArIGJvdW5kYXJ5O1xuXG4gICAgICByZXN1bHQgKz0gJ1xcbkNvbnRlbnQtRGlzcG9zaXRpb246IGZvcm0tZGF0YTsgbmFtZT1cIicgKyBrZXkgKyAnXCInO1xuXG4gICAgICBpZih2YWx1ZS5jb250ZW50VHlwZSl7XG4gICAgICAgIGlmKHZhbHVlLm5hbWUpe1xuICAgICAgICAgIHJlc3VsdCArPSAnOyBmaWxlbmFtZT1cIicgKyB2YWx1ZS5uYW1lICsgJ1wiJztcbiAgICAgICAgfVxuXG4gICAgICAgIHJlc3VsdCArPSAnXFxuQ29udGVudC1UeXBlOiAnICsgdmFsdWUuY29udGVudFR5cGU7XG4gICAgICB9XG5cbiAgICAgIGlmKHZhbHVlLmNvbnRlbnRUcmFuc2ZlckVuY29kaW5nKXtcbiAgICAgICAgcmVzdWx0ICs9ICdcXG5Db250ZW50LVRyYW5zZmVyLUVuY29kaW5nOiAnICsgdmFsdWUuY29udGVudFRyYW5zZmVyRW5jb2Rpbmc7XG4gICAgICB9XG5cbiAgICAgIGlmKHZhbHVlLmJvZHkpe1xuICAgICAgICByZXN1bHQgKz0gJ1xcblxcbicgKyB2YWx1ZS5ib2R5O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0ICs9ICdcXG5cXG4nICsgdmFsdWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSkuam9pbignXFxuJyk7XG5cbiAgICBib2R5ICs9ICdcXG4tLScgKyBib3VuZGFyeSArICctLVxcbic7XG5cbiAgICBoZWFkZXJzWydDb250ZW50LVR5cGUnXSA9IGNvbnRlbnRUeXBlLnJlcGxhY2UoXG4gICAgICAnbXVsdGlwYXJ0L2Zvcm0tZGF0YScsXG4gICAgICAnbXVsdGlwYXJ0L2Zvcm0tZGF0YTsgYm91bmRhcnk9JyArIGJvdW5kYXJ5XG4gICAgKTtcbiAgfSBlbHNlIGlmKGNvbnRlbnRUeXBlLmluZGV4T2YoJ2FwcGxpY2F0aW9uL2pzb24nKSAhPT0gLTEpe1xuICAgIGlmKHR5cGVvZiBib2R5ICE9PSAnc3RyaW5nJyl7XG4gICAgICBib2R5ID0gSlNPTi5zdHJpbmdpZnkoYm9keSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGJvZHk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZXJyb3JUeXBlcyA9IHJlcXVpcmUoJy4vZXJyb3JUeXBlcycpLFxuICBDb250ZW50VHlwZU5vdFN1cHBvcnRlZEVycm9yID0gZXJyb3JUeXBlcy5Db250ZW50VHlwZU5vdFN1cHBvcnRlZEVycm9yLFxuICBBY2NlcHRzTm90U3VwcG9ydGVkRXJyb3IgPSBlcnJvclR5cGVzLkFjY2VwdHNOb3RTdXBwb3J0ZWRFcnJvcjtcblxudmFyIERFRkFVTFRfQUNDRVBUID0gJ2FwcGxpY2F0aW9uL2pzb24nO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBnZXRSZXF1ZXN0SGVhZGVycyhvcGVyYXRpb24sIGRhdGEsIG9wdGlvbnMpe1xuICBkYXRhID0gZGF0YSB8fCB7fTtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgdmFyIGhlYWRlcnMgPSB7fTtcblxuICAob3BlcmF0aW9uLnBhcmFtZXRlcnMgfHwgW10pLmZvckVhY2goZnVuY3Rpb24ocGFyYW0pe1xuICAgIGlmKHBhcmFtLnBhcmFtVHlwZSA9PT0gJ2hlYWRlcicgJiYgZGF0YVtwYXJhbS5uYW1lXSAhPSBudWxsKXtcbiAgICAgIGhlYWRlcnNbcGFyYW0ubmFtZV0gPSBkYXRhW3BhcmFtLm5hbWVdO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gUGFzc2VkIGhlYWRlcnNcbiAgaWYob3B0aW9ucy5oZWFkZXJzKXtcbiAgICBPYmplY3Qua2V5cyhvcHRpb25zLmhlYWRlcnMpLmZvckVhY2goZnVuY3Rpb24oa2V5KXtcbiAgICAgIGhlYWRlcnNba2V5XSA9IG9wdGlvbnMuaGVhZGVyc1trZXldO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gQ29udGVudC1UeXBlXG4gIHZhciBjb250ZW50VHlwZSA9IG9wdGlvbnMuY29udGVudFR5cGUgfHwgZ2V0Q29udGVudFR5cGUob3BlcmF0aW9uLCBkYXRhLCBvcHRpb25zKTtcbiAgaWYoY29udGVudFR5cGUpIHtcbiAgICBpZihoYXNBY2NlcHQob3BlcmF0aW9uLCBjb250ZW50VHlwZSkpe1xuICAgICAgaGVhZGVyc1snQ29udGVudC1UeXBlJ10gPSBjb250ZW50VHlwZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IENvbnRlbnRUeXBlTm90U3VwcG9ydGVkRXJyb3IoY29udGVudFR5cGUsIG9wZXJhdGlvbik7XG4gICAgfVxuICB9XG5cbiAgLy8gQWNjZXB0XG4gIHZhciBhY2NlcHQgPSBvcHRpb25zLmFjY2VwdCB8fCBERUZBVUxUX0FDQ0VQVDtcbiAgaWYoYWNjZXB0KXtcbiAgICBpZihoYXNDb250ZW50VHlwZShvcGVyYXRpb24sIGFjY2VwdCkpe1xuICAgICAgaGVhZGVycy5BY2NlcHQgPSBhY2NlcHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBBY2NlcHRzTm90U3VwcG9ydGVkRXJyb3IoYWNjZXB0LCBvcGVyYXRpb24pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBoZWFkZXJzO1xufTtcblxuZnVuY3Rpb24gZ2V0Q29udGVudFR5cGUob3BlcmF0aW9uLCBkYXRhKXtcbiAgdmFyIGhhc0JvZHkgPSAob3BlcmF0aW9uLnBhcmFtZXRlcnMgfHwgW10pLnNvbWUoZnVuY3Rpb24ocGFyYW0pe1xuICAgIHJldHVybiBwYXJhbS5wYXJhbVR5cGUgPT09ICdib2R5JyAmJiBkYXRhW3BhcmFtLm5hbWVdICE9PSB1bmRlZmluZWQ7XG4gIH0pO1xuXG4gIGlmIChoYXNCb2R5KXtcbiAgICByZXR1cm4gJ2FwcGxpY2F0aW9uL2pzb24nO1xuICB9IGVsc2Uge1xuICAgIHZhciBoYXNGb3JtUGFyYW1zID0gKG9wZXJhdGlvbi5wYXJhbWV0ZXJzIHx8IFtdKS5zb21lKGZ1bmN0aW9uKHBhcmFtKXtcbiAgICAgIHJldHVybiBwYXJhbS5wYXJhbVR5cGUgPT09ICdmb3JtJyAmJiBkYXRhW3BhcmFtLm5hbWVdICE9PSB1bmRlZmluZWQ7XG4gICAgfSk7XG5cbiAgICB2YXIgaGFzRmlsZVBhcmFtID0gaGFzRm9ybVBhcmFtcyAmJlxuICAgICAgKG9wZXJhdGlvbi5wYXJhbWV0ZXJzIHx8IFtdKS5zb21lKGZ1bmN0aW9uKHBhcmFtKXtcbiAgICAgICAgcmV0dXJuIHBhcmFtLnR5cGUgPT09ICdGaWxlJyAmJiBkYXRhW3BhcmFtLm5hbWVdICE9PSB1bmRlZmluZWQ7XG4gICAgICB9KTtcblxuICAgIGlmKGhhc0ZpbGVQYXJhbSkgcmV0dXJuICdtdWx0aXBhcnQvZm9ybS1kYXRhJztcbiAgICBlbHNlIGlmKGhhc0Zvcm1QYXJhbXMpIHJldHVybiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJztcbiAgfVxufVxuXG4vLyBBY2NlcHRzIGlzIGFuIG9wdGlvbmFsIGZpZWxkIGluIHRoZSBzcGVjLCBidXQgbXVzdCBiZSBlbmZvcmNlZCB3aGVuIHByZXNlbnRcbmZ1bmN0aW9uIGhhc0FjY2VwdChvcGVyYXRpb24sIGNvbnRlbnRUeXBlKXtcbiAgdmFyIGFwaURlY2xhcmF0aW9uID0gb3BlcmF0aW9uLmFwaU9iamVjdC5hcGlEZWNsYXJhdGlvbjtcbiAgdmFyIGFjY2VwdHMgPSBvcGVyYXRpb24uY29uc3VtZXMgfHwgYXBpRGVjbGFyYXRpb24uY29uc3VtZXM7XG5cbiAgaWYoYWNjZXB0cyAmJiBhY2NlcHRzLmxlbmd0aCl7XG4gICAgcmV0dXJuIGFjY2VwdHMuaW5kZXhPZihjb250ZW50VHlwZSkgIT09IC0xO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG5leHBvcnRzLmhhc0FjY2VwdCA9IGhhc0FjY2VwdDtcblxuLy8gQ29udGVudC1UeXBlIChwcm9kdWNlcykgaXMgYW4gb3B0aW9uYWwgZmllbGQgaW4gdGhlIHNwZWMsIGJ1dCBtdXN0IGJlIGVuZm9yY2VkIHdoZW4gcHJlc2VudFxuZnVuY3Rpb24gaGFzQ29udGVudFR5cGUob3BlcmF0aW9uLCBjb250ZW50VHlwZSl7XG4gIHZhciBhcGlEZWNsYXJhdGlvbiA9IG9wZXJhdGlvbi5hcGlPYmplY3QuYXBpRGVjbGFyYXRpb24sXG4gICAgY29udGVudFR5cGVzID0gb3BlcmF0aW9uLnByb2R1Y2VzIHx8IGFwaURlY2xhcmF0aW9uLnByb2R1Y2VzO1xuXG4gIGlmKGNvbnRlbnRUeXBlcyAmJiBjb250ZW50VHlwZXMubGVuZ3RoKXtcbiAgICByZXR1cm4gY29udGVudFR5cGVzLmluZGV4T2YoY29udGVudFR5cGUpICE9PSAtMTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuZXhwb3J0cy5oYXNDb250ZW50VHlwZSA9IGhhc0NvbnRlbnRUeXBlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZXJyb3JUeXBlcyA9IHJlcXVpcmUoJy4vZXJyb3JUeXBlcycpLFxuICBNaXNzaW5nUGF0aFBhcmFtc0Vycm9yID0gZXJyb3JUeXBlcy5NaXNzaW5nUGF0aFBhcmFtc0Vycm9yO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGdldFJlcXVlc3RVcmwob3BlcmF0aW9uLCBkYXRhKXtcbiAgdmFyIHVybCA9IGdldFVybFRlbXBsYXRlKG9wZXJhdGlvbik7XG5cbiAgdXJsID0gYXBwbHlQYXRoUGFyYW1zKHVybCwgb3BlcmF0aW9uLCBkYXRhKTtcblxuICBpZighZGF0YSkgcmV0dXJuIHVybDtcblxuICB2YXIgcXVlcnlQYXJhbXMgPSAob3BlcmF0aW9uLnBhcmFtZXRlcnMgfHwgW10pLmZpbHRlcihmdW5jdGlvbihwYXJhbSl7XG4gICAgcmV0dXJuIHBhcmFtLnBhcmFtVHlwZSA9PT0gJ3F1ZXJ5JyAmJiBkYXRhW3BhcmFtLm5hbWVdICE9PSB1bmRlZmluZWQ7XG4gIH0pLm1hcChmdW5jdGlvbihwYXJhbSl7XG4gICAgdmFyIGtleSA9IHBhcmFtLm5hbWU7XG4gICAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChrZXkpICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KGRhdGFba2V5XSk7XG4gIH0pLmpvaW4oJyYnKTtcblxuICBpZihxdWVyeVBhcmFtcykgdXJsICs9ICc/JyArIHF1ZXJ5UGFyYW1zO1xuXG4gIHJldHVybiB1cmw7XG59O1xuXG5mdW5jdGlvbiBhcHBseVBhdGhQYXJhbXModXJsLCBvcGVyYXRpb24sIGRhdGEpe1xuICB2YXIgcGF0aFBhcmFtcyA9IChvcGVyYXRpb24ucGFyYW1ldGVycyB8fCBbXSkuZmlsdGVyKGZ1bmN0aW9uKHBhcmFtKXtcbiAgICByZXR1cm4gcGFyYW0ucGFyYW1UeXBlID09PSAncGF0aCc7XG4gIH0pO1xuXG4gIHZhciBtaXNzaW5nUGFyYW1zID0gcGF0aFBhcmFtcy5maWx0ZXIoZnVuY3Rpb24ocGFyYW0pe1xuICAgIHJldHVybiBkYXRhW3BhcmFtLm5hbWVdID09PSB1bmRlZmluZWQ7XG4gIH0pO1xuXG4gIGlmKG1pc3NpbmdQYXJhbXMubGVuZ3RoKXtcbiAgICB0aHJvdyBuZXcgTWlzc2luZ1BhdGhQYXJhbXNFcnJvcihtaXNzaW5nUGFyYW1zLm1hcChmdW5jdGlvbihwYXJhbSl7XG4gICAgICByZXR1cm4gcGFyYW0ubmFtZTtcbiAgICB9KSk7XG4gIH1cblxuICBwYXRoUGFyYW1zLmZvckVhY2goZnVuY3Rpb24ocGFyYW0pe1xuICAgIHZhciBrZXkgPSBwYXJhbS5uYW1lO1xuXG4gICAgdmFyIGV4cCA9IG5ldyBSZWdFeHAoJ3snICsga2V5ICsgJ1tefV0qfScsICdnaScpO1xuXG4gICAgdmFyIHZhbHVlID0gZGF0YVtrZXldLnRvU3RyaW5nKCk7XG4gICAgZGVsZXRlIGRhdGFba2V5XTtcbiAgICB2YWx1ZSA9IHZhbHVlLnNwbGl0KCcvJykubWFwKGVuY29kZVVSSUNvbXBvbmVudCkuam9pbignLycpO1xuXG4gICAgdXJsID0gdXJsLnJlcGxhY2UoZXhwLCB2YWx1ZSk7XG4gIH0pO1xuXG4gIHJldHVybiB1cmw7XG59XG5cbmZ1bmN0aW9uIGdldFVybFRlbXBsYXRlKG9wZXJhdGlvbil7XG4gIHZhciBhcGlPYmplY3QgPSBvcGVyYXRpb24uYXBpT2JqZWN0O1xuXG4gIHZhciBiYXNlUGF0aCA9IGFwaU9iamVjdC5hcGlEZWNsYXJhdGlvbi5iYXNlUGF0aDtcbiAgdmFyIHBhdGggPSBhcGlPYmplY3QucGF0aC5yZXBsYWNlKCd7Zm9ybWF0fScsICdqc29uJyk7XG5cbiAgcmV0dXJuIGJhc2VQYXRoICsgcGF0aDtcbn1cbiJdfQ==
(9)
});
