/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

/**
 * Extends haley api implementation with vital
 * @param vitalService
 * @returns
 */
HaleyAPIMockVitalServiceImpl = function(vitalService) {
	if(vitalService.impl.callFunctionHandlers == null) {
		throw "expected mock vitalservice in order to register handlers!";
	}
	HaleyAPIVitalServiceImpl.call(this, vitalService);
	
	this.sendHandlers = {};
	
	var _this = this; 
	var sendHandler = function(){
		
	}
	
	vitalService.impl.callFunctionHandlers['haley-send-message'] =  function(params){
		return _this.onMessageSent(params.message);
	}
	vitalService.impl.callFunctionHandlers['haley-send-message-anonymous'] =  function(params){
		return _this.onMessageSent(params.message);
	}
}

HaleyAPIMockVitalServiceImpl.prototype = Object.create(HaleyAPIVitalServiceImpl.prototype);

if(true) {
	module.exports = HaleyAPIMockVitalServiceImpl;
}

HaleyAPIMockVitalServiceImpl.prototype.scheduleSend = function(msgRL) {
	var _this = this;
	//default 10ms
	var timeout = msgRL.timeout != null ? msgRL.timeout : 10;
	setTimeout(function(){
		_this._streamHandler(msgRL);
	}, timeout);
	
}

HaleyAPIMockVitalServiceImpl.prototype.onMessageSent = function(msgRL){
	
	var _this = this;
	
	var keys = Object.keys(this.sendHandlers);
	
	var srcMsg = msgRL.first();
	
	var c = 0;
	
	for(var i = 0 ; i < keys.length; i++) {
		var key = keys[i];
		var res = this.sendHandlers[key](msgRL);
		if(res != null) {
			if(res._type == 'ai.vital.vitalservice.query.ResultList') {
				var resMsg = res.first();
				if( resMsg.get('requestURI') == null ) {
					resMsg.set('requestURI', srcMsg.URI);
				}
				c++;
				
				this.scheduleSend(res);
				
			} else {
				c += res.length;
				for(var j = 0; j < res.length; j++) {
					var resX = res[j];
					var resMsg = resX.first();
					if( resMsg.get('requestURI') == null ) {
						resMsg.set('requestURI', srcMsg.URI);
					}
					
					this.scheduleSend(resX);
					
				}
				
			}
		}
	}
	
	if(c == 0) {
		console.warn("No mocked responses sent for " + msgRL.first().type, msgRL);
	} else {
		console.info("Sent " + c + " responses for " + msgRL.first().type, msgRL);
	}
	
	
	var rl = vitaljs.resultList();
	rl.addResult(msgRL.first());
	
	return rl;
}

/**
 * Registers handler with given id
 * @param id handler ID
 * @param handlerFunction function that is called with msgRL and should return either a single or a list of messages to receive.
 * Each message can specify optional timeout after which it's sent. No timeout or <= 0 sends immediately
 * @return true if registered, false otherwise
 */
HaleyAPIMockVitalServiceImpl.prototype.registerSendMessageHandler = function(id, handlerFunction) {
	if(!(typeof(id) === 'string')) throw "id has to be a string: " + typeof(id);
	if(!(typeof(handlerFunction) === 'function')) throw "handlerFunction has to be a function: " + typeof(handlerFunction);
	if( this.sendHandlers[id] != null ) {
		console.warn("handler already registered: " + id);
		return false;
	}
	this.sendHandlers[id] = handlerFunction;
}

HaleyAPIMockVitalServiceImpl.prototype.deregisterSendMessageHandler = function(id) {
	if( this.sendHandlers[id] != null ) {
		delete this.sendHandlers[id];
		return true;
	}
	return false;
}

/***/ }),
/* 2 */
/***/ ((module) => {

/**
 * Mock vitalservice implementation
 * @param type
 * @param successCB
 * @param errorCB
 * @param logger
 * @returns
 */
VitalServiceMockImpl = function(type, successCB, errorCB, logger) {
	
	//default logger is console, but can be replaced with watson etc
	this.logger = logger != null ? logger : console;
	
	this.admin = false;
	this.superadmin = false;
	
	if(type == 'service') {
		
	} else if(type == 'admin') {
		this.admin = true;
	} else if(type == 'superadmin') {
		this.superadmin = true;
	} else {
		this.logger.error("Unhnown type: " + type);
		return
	}
	
	
	this.loginTypes = [
	  'http://vital.ai/ontology/vital#Login',
	  'http://vital.ai/ontology/vital#AdminLogin',
	  'http://vital.ai/ontology/vital#SuperAdminLogin'
	];
	
	//there's always a new session generated, it could be cached in localstorage/cookie etc
	this.sessionID = 'mock-' + new Date().getTime();
	
	//obtained via authentication, appended to every request
	this.appSessionID  = null;
	
	//this is returned immediately
	this.mockLogin = null;
	this.login = null;
	
	this.logger.info('sessionID: ' + this.sessionID);

	this.authAppID = null; 
	
	this.vsJson = null;
	
	this.closed = false;
	
	this.url = "http://example.org/mocked-vitalservice-endpoint";
	
	if(typeof( VitalServiceJson ) != 'undefined') {
		
		this.logger.info("loading json validation module...");
		
		if(VitalServiceJson.SINGLETON != null) {
			
			this.logger.info("json singleton already set - reusing");
			
		} else {
		
			this.logger.info("Initializing new json singleton");
			
			VitalServiceJson.SINGLETON = new VitalServiceJson(this.logger, this.loggingEnabled);
			
		}
		
		this.vsJson = VitalServiceJson.SINGLETON;
		
		if(type == 'service') {
			
			vitaljs.vitalservice = this;
			
		}
		
	} else {
		
		this.logger.error("VitalServiceJson module not available, it's mandatory.");

		return;
	}
	
	
	//
	this.successCB = successCB;
	this.callFunctionHandlers = {};
	
}

VitalServiceMockImpl.prototype.connect = function(){
	this.successCB();
}

VitalServiceMockImpl.JS_REGISTER_STREAM_HANDLER = 'js-register-stream-handler';

VitalServiceMockImpl.JS_UNREGISTER_STREAM_HANDLER = 'js-unregister-stream-handler';

VitalServiceMockImpl.JS_LIST_STREAM_HANDLERS = 'js-list-stream-handlers';


VitalServiceMockImpl.VERTX_STREAM_SUBSCRIBE = 'vertx-stream-subscribe';

VitalServiceMockImpl.VERTX_STREAM_UNSUBSCRIBE = 'vertx-stream-unsubscribe';

VitalServiceMockImpl.DomainsManagerScript = 'commons/scripts/DomainsManagerScript';

VitalServiceMockImpl.vitalauth_login = 'vitalauth.login';

VitalServiceMockImpl.vitalauth_logout = 'vitalauth.logout';

VitalServiceMockImpl.vitalauth_authorise = 'vitalauth.authorise';

VitalServiceMockImpl.prototype.getAppSessionID = function() {
	return this.appSessionID;
}



/**
 * Calls the service method, all input parameters are validated against json schema - same 
 */
VitalServiceMockImpl.prototype.callMethod = function(method, args, successCB, errorCB) {
	
	if(this.loggingEnabled) { this.logger.debug("service call " + method + " args:", args); }
	
	if(typeof(successCB) != "function") {
		this.logger.error("method: " + method + " - Success callback not a function, arguments list invalid");
		return;
	}
	
	if(typeof(errorCB) != "function") {
		this.logger.error("method: " + method + " - Error callback not a function, arguments list invalid");
		return;
	}
	
	
	
	var data = {
		method: method,
		args: args,
		sessionID: this.appSessionID
	};
	
	var _this = this;
	
	var __ignoreJsonValidationErrors = false; 
	
	
	var functionName = null;
	
	if(method == 'callFunction') {
		
		//determine the functionName based on params count
		if(args.length >= 2) {
			functionName = args[args.length - 2];
		} else {
			this.logger.error("method : " + method + " requires at least two arguments");
			return
		}

		
		if(functionName == VitalServiceMockImpl.vitalauth_login) {
			
			if(this.mockLogin == null) {
				throw "mock login not set!";
			}
			
			this.login = this.mockLogin;
			this.appSessionID = 'Login-mock-' + new Date().getTime();
			
			var rl = vitaljs.resultList();
			rl.addResult(this.login);
			
			successCB(rl);
			return;
			
		}
		
		if(functionName == VitalServiceMockImpl.vitalauth_authorise) {
			
			throw "not implemented: " + functionName;
			
		}
		
		
		if(functionName == VitalServiceMockImpl.vitalauth_logout) {
			this.login = null;
			this.appSessionID = null;
			var rl = vitaljs.resultList();
			successCB(rl);
		}
		
		var handler = this.callFunctionHandlers[functionName];
		if(handler == null) {
			throw "No mock handler for function name: " + functionName;
		}
		
		var rl = handler(args[1]);
		
		this.logger.info("handler for function: " + functionName + " returned", rl);
		
		if(rl.timeout) {
			
			setTimeout(function(){
				successCB(rl);
			}, rl.timeout);
			
		} else {
			
			successCB(rl);
			
		}
		
		
		
	} else {
		throw "method not supported by mocked client: " + method;
	}
	
}

VitalServiceMockImpl.prototype.close = function(successCB, errorCB){
	
	var _this = this;
	
	this.closed = true;
	
	if(successCB != null) {
		successCB();
	}
	
	
}

VitalServiceMockImpl.prototype.listStreamHandlers = function(paramsMap, successCB, errorCB) {
	
	var res = vitaljs.resultList();
	
	successCB(res);
	
}

VitalServiceMockImpl.prototype.registerStreamHandler = function(paramsMap, successCB, errorCB) {
	
	var streamName = paramsMap.streamName;
	
	successCB({
		_type: 'ai.vital.vitalservice.query.ResultList',
		status: {
			_type: 'ai.vital.vitalservice.VitalStatus',
			status: 'ok',
			message: 'MOCK Handler for stream ' + streamName + ' registered successfully'
		}
	});
	
}



VitalServiceMockImpl.prototype.unregisterStreamHandler = function(paramsMap, successCB, errorCB) {
	
	var streamName = paramsMap.streamName;
	
	successCB({
		_type: 'ai.vital.vitalservice.query.ResultList',
		status: {
			_type: 'ai.vital.vitalservice.VitalStatus',
			status: 'ok',
			message: 'MOCK Handler for stream ' + streamName + ' unregistered successfully'
		}
	});
	
}

VitalServiceMockImpl.prototype.streamSubscribe = function(paramsMap, successCB, errorCB) {
	
	var streamName = paramsMap.streamName;
	
	successCB({
		_type: 'ai.vital.vitalservice.query.ResultList',
		status: {
			_type: 'ai.vital.vitalservice.VitalStatus',
			status: 'ok',
			message: 'MOCK Successfully Subscribe to stream ' + streamName
		}
	});
		
	
}


Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};

VitalServiceMockImpl.prototype.streamUnsubscribe = function(paramsMap, successCB, errorCB) {

	var streamName = paramsMap.streamName;
	
	successCB({
		_type: 'ai.vital.vitalservice.query.ResultList',
		status: {
			_type: 'ai.vital.vitalservice.VitalStatus',
			status: 'ok',
			message: 'MOCK Successfully unsubscribe from stream ' + streamName
		}
	});
	
}


if(true) {

	module.exports = {
		VitalServiceMockImpl: VitalServiceMockImpl
	};
	
}

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
$.ajax({
    async: false,
    url: `${PREFIX}js/haley-mock.js`,
    dataType: "script"
});

VITAL_DOMAINS.forEach(file => {
    console.log('loading domain file: ', file);
    $.ajax({
        async: false,
        url: `${PREFIX}haley-js-browser/lib-vital/vitalservice-js/domains/${file}`,
        dataType: "script",
        success: function() {
            console.log('loaded file: ', file);
        }, 
        error: function() {
            console.error(`loading file ${file} failed. installation tiem: ${TIME_DOMAIN_LIST_CREATED}`)
        }
    });
});
console.log('Loaded domains updated at: ', TIME_DOMAIN_LIST_CREATED);

$.ajax({
    async: false,
    url: `${PREFIX}haley-js-browser/created-time.js`,
    dataType: "script",
    success: function() {
        console.log(`Loaded vital installed at: ${TIME_VITAL_INSTALLED}`);
    }
});

__webpack_require__.g.UI_DEV_MODE = true;

// require('./lib-vital/vitalservice-js/vital-core-0.2.304');
// require('./lib-vital/vitalservice-js/vital-0.2.304');
// const HaleyAPI = require('./lib-vital/haley-js-api/haley-js-api-0.0.1');
// const HaleyWrappedAPI = require('./lib-vital/haley-js-api/haley-js-api-wrapped-0.0.1');
// const HaleyAPIVitalServiceImpl = require('./lib-vital/haley-js-api/haley-js-vitalservice-implementation-0.0.1');
// require('./lib-vital/vitalservice-js/lru');
// require('./lib-vital/vitalservice-js/sockjs-0.3.4.min');
// global.tv4 = require('./lib-vital/vitalservice-js/tv4.min');
// require('./lib-vital/vitalservice-js/vertx-eventbus-3.2.1');
const HaleyAPIMockVitalServiceImpl = __webpack_require__(1);
const VitalServiceMockImpl = __webpack_require__(2).VitalServiceMockImpl;
// const VitalService = require('./lib-vital/vitalservice-js/vitalservice-0.2.304');
// const VitalServiceWebsocketImpl = require('./lib-vital/vitalservice-js/vitalservice-impl-0.2.304');
// const vitaljs = require('./lib-vital/vitalservice-js/vitalservice-json-0.2.304').vitaljs;
// const VitalServiceJson = require('./lib-vital/vitalservice-js/vitalservice-json-0.2.304').VitalServiceJson;

// global.HaleyAPI = HaleyAPI;
// global.HaleyWrappedAPI = HaleyWrappedAPI;
// global.VitalService = VitalService;
// global.VitalServiceWebsocketImpl = VitalServiceWebsocketImpl;
// global.HaleyAPIVitalServiceImpl = HaleyAPIVitalServiceImpl;
// global.vitaljs = vitaljs;
// global.VitalServiceJson = VitalServiceJson,
__webpack_require__.g.HaleyAPIMockVitalServiceImpl = HaleyAPIMockVitalServiceImpl;
__webpack_require__.g.VitalServiceMockImpl = VitalServiceMockImpl;
})();

/******/ })()
;