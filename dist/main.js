/******/ (function(modules) { // webpackBootstrap
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
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

// require('./lib-vital/vitalservice-js/jquery.cookie-1.4.0');
__webpack_require__(1);
__webpack_require__(2);
const HaleyAPI = __webpack_require__(3);
const HaleyAPIVitalServiceImpl = __webpack_require__(4);
__webpack_require__(13);
__webpack_require__(14);
__webpack_require__(15);
__webpack_require__(16);
const HaleyAPIMockVitalServiceImpl = __webpack_require__(17);
const VitalServiceMockImpl = __webpack_require__(18);
const VitalService = __webpack_require__(19);
const VitalServiceWebsocketImpl = __webpack_require__(20);
const vitaljs = __webpack_require__(21).vitaljs;
const VitalServiceJson = __webpack_require__(21).VitalServiceJson;

(function(windows) {
    windows.HaleyAPI = HaleyAPI;
    windows.VitalService = VitalService;
    windows.VitalServiceWebsocketImpl = VitalServiceWebsocketImpl;
    windows.HaleyAPIVitalServiceImpl = HaleyAPIVitalServiceImpl;
    windows.vitaljs = vitaljs;
    windows.VitalServiceJson = VitalServiceJson,
    windows.HaleyAPIMockVitalServiceImpl = HaleyAPIMockVitalServiceImpl;
    windows.VitalServiceMockImpl = VitalServiceMockImpl;
})(windows);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var VITAL_JSON_SCHEMAS = [];

var vital_core_0_2_304_schema = {
  "domainURI" : "http://vital.ai/ontology/vital-core",
  "name" : "vital-core-0.2.304",
  "version" : "0.2.304",
  "domainOWLHash" : "d4edd980c60dc7e4fc60e5c66131aff4",
  "vitalsignsVersion" : "0.2.304",
  "parents" : [ ],
  "schemas" : [ {
    "id" : "http://vital.ai/ontology/vital-core#AggregationResult",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/vital-core#hasAggregationType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasValue" : {
        "type" : "number"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-core#DatabaseConnection",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/vital-core#hasAppID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasConfigString" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasEndpointType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasEndpointURL" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOrganizationID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasPassword" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasUsername" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isReadOnly" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-core#Dataset",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/vital-core#hasDateRetrieved" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasSourceName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasSourceUrl" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-core#DomainModel",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/vital-core#hasAppID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasBackwardCompVersion" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasDefaultPackageValue" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasDomainOWL" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasDomainOWLHash" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOrganizationID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasPreferredImportVersions" : {
        "type" : "array",
        "items" : {
          "type" : "string"
        }
      },
      "http://vital.ai/ontology/vital-core#hasVersionInfo" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isPreferred" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-core#DynamoDBVitalProvisioning",
    "parent" : "http://vital.ai/ontology/vital-core#VitalProvisioning",
    "properties" : {
      "http://vital.ai/ontology/vital-core#hasEdge_read" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasEdge_write" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasHyperEdge_read" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasHyperEdge_write" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasHyperNode_read" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasHyperNode_write" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasNode_read" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasNode_write" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasProperties_number_index_read" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasProperties_number_index_write" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasProperties_read" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasProperties_string_index_read" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasProperties_string_index_write" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasProperties_write" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#isEdge_indexed" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-core#isEdge_stored" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-core#isHyperEdge_indexed" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-core#isHyperEdge_stored" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-core#isHyperNode_indexed" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-core#isHyperNode_stored" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-core#isNode_indexed" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-core#isNode_stored" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-core#Edge_SameAs",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-core#VITAL_Node" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-core#VITAL_Node" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-core#Edge_hasApp",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-core#VitalOrganization" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-core#VitalApp" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-core#Edge_hasAuthKey",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-core#VitalApp", "http://vital.ai/ontology/vital-core#VitalOrganization", "http://vital.ai/ontology/vital-core#VitalServiceRootKey" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-core#VitalAuthKey" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-core#Edge_hasChildCategory",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-core#VITAL_Category" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-core#VITAL_Category" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-core#Edge_hasChildDomainModel",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-core#DomainModel" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-core#DomainModel" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-core#Edge_hasDbConfig",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-core#VitalServiceIndexedDBConfig" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-core#VitalServiceConfig" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-core#Edge_hasIndexConfig",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-core#VitalServiceIndexedDBConfig" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-core#VitalServiceConfig" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-core#Edge_hasOrganization",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-core#VitalServiceRootKey" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-core#VitalOrganization" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-core#Edge_hasParentDomainModel",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-core#DomainModel" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-core#DomainModel" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-core#Edge_hasProvisioning",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-core#VitalSegment" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-core#VitalProvisioning" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-core#Edge_hasSegment",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-core#VitalApp" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-core#VitalSegment" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-core#Edge_hasSession",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-core#VitalAuthKey" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-core#VitalSession" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-core#Edge_hasTransaction",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-core#VitalSession" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-core#VitalTransaction" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-core#GraphMatch",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_GraphContainerObject",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-core#RDFStatement",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/vital-core#hasRdfContext" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasRdfObject" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasRdfPredicate" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasRdfSubject" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-core#SparqlAskResponse",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/vital-core#isPositiveResponse" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-core#SparqlBinding",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_GraphContainerObject",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-core#SparqlDatabaseConnection",
    "parent" : "http://vital.ai/ontology/vital-core#DatabaseConnection",
    "properties" : {
      "http://vital.ai/ontology/vital-core#hasCatalogName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasRepositoryName" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-core#SparqlUpdateResponse",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/vital-core#hasUpdatedTriplesCount" : {
        "type" : "number"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-core#SqlDatabaseConnection",
    "parent" : "http://vital.ai/ontology/vital-core#DatabaseConnection",
    "properties" : {
      "http://vital.ai/ontology/vital-core#hasDatabase" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-core#SqlResultRow",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_GraphContainerObject",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-core#SqlUpdateResponse",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/vital-core#hasUpdatedRowsCount" : {
        "type" : "number"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-core#URIReference",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/vital-core#hasURIRef" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-core#VITAL_Category",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-core#VITAL_Edge",
    "sourceDomains" : [ ],
    "destinationDomains" : [ ],
    "properties" : {
      "http://vital.ai/ontology/vital-core#hasEdgeDestination" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasEdgeSource" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasListIndex" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUpdateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-core#VITAL_Event",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-core#VITAL_GraphContainerObject",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-core#VITAL_GraphQuery",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Query",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-core#VITAL_HyperEdge",
    "sourceDomains" : [ ],
    "destinationDomains" : [ ],
    "properties" : {
      "http://vital.ai/ontology/vital-core#hasHyperEdgeDestination" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasHyperEdgeSource" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasListIndex" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUpdateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-core#VITAL_HyperNode",
    "properties" : {
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUpdateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUpdateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-core#VITAL_PathQuery",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Query",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-core#VITAL_PayloadNode",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/vital-core#hasSerializedJSON" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasSerializedRDF" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Edge",
    "sourceDomains" : [ ],
    "destinationDomains" : [ ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-core#VITAL_Query",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/vital-core#hasQueryString" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-core#VITAL_SelectQuery",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Query",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Edge",
    "sourceDomains" : [ ],
    "destinationDomains" : [ ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-core#VitalApp",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/vital-core#hasAppID" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-core#VitalAuthKey",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/vital-core#hasKey" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-core#VitalOrganization",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/vital-core#hasOrganizationID" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-core#VitalProvisioning",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-core#VitalSegment",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/vital-core#hasSegmentID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isReadOnly" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-core#VitalServiceAdminKey",
    "parent" : "http://vital.ai/ontology/vital-core#VitalAuthKey",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-core#VitalServiceAllegrographConfig",
    "parent" : "http://vital.ai/ontology/vital-core#VitalServiceConfig",
    "properties" : {
      "http://vital.ai/ontology/vital-core#hasCatalogName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasPassword" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasPoolMaxTotal" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasRepositoryName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasServerURL" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasUsername" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-core#VitalServiceConfig",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/vital-core#hasAppID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasConfigString" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasConnectionError" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasConnectionState" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasDefaultSegmentName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasKey" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOrganizationID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTargetAppID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTargetOrganizationID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasUriGenerationStrategy" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isPrimary" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-core#VitalServiceDynamoDBConfig",
    "parent" : "http://vital.ai/ontology/vital-core#VitalServiceConfig",
    "properties" : {
      "http://vital.ai/ontology/vital-core#hasAccessKey" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasEndpointURL" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasRegion" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasS3AccessKey" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasS3BasePath" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasS3Bucket" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasS3EndpointURL" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasS3Region" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasS3SecretKey" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasSecretKey" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTablesPrefix" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isLocalEndpoint" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-core#isS3LocalEndpoint" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-core#VitalServiceIndexedDBConfig",
    "parent" : "http://vital.ai/ontology/vital-core#VitalServiceConfig",
    "properties" : {
      "http://vital.ai/ontology/vital-core#hasGraphQueries" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasSelectQueries" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-core#VitalServiceKey",
    "parent" : "http://vital.ai/ontology/vital-core#VitalAuthKey",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-core#VitalServiceLuceneDiskConfig",
    "parent" : "http://vital.ai/ontology/vital-core#VitalServiceConfig",
    "properties" : {
      "http://vital.ai/ontology/vital-core#hasRootPath" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-core#VitalServiceLuceneMemoryConfig",
    "parent" : "http://vital.ai/ontology/vital-core#VitalServiceConfig",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-core#VitalServiceMockConfig",
    "parent" : "http://vital.ai/ontology/vital-core#VitalServiceConfig",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-core#VitalServicePrimeConfig",
    "parent" : "http://vital.ai/ontology/vital-core#VitalServiceConfig",
    "properties" : {
      "http://vital.ai/ontology/vital-core#hasEndpointURL" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-core#VitalServiceRootKey",
    "parent" : "http://vital.ai/ontology/vital-core#VitalAuthKey",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-core#VitalServiceSaaSConfig",
    "parent" : "http://vital.ai/ontology/vital-core#VitalServiceConfig",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-core#VitalServiceSparkConfig",
    "parent" : "http://vital.ai/ontology/vital-core#VitalServiceConfig",
    "properties" : {
      "http://vital.ai/ontology/vital-core#hasEndpointURL" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-core#VitalServiceSqlConfig",
    "parent" : "http://vital.ai/ontology/vital-core#VitalServiceConfig",
    "properties" : {
      "http://vital.ai/ontology/vital-core#hasDbType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasEndpointURL" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasPassword" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasPoolInitialSize" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasPoolMaxTotal" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasTablesPrefix" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasUsername" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-core#VitalSession",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/vital-core#hasKey" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasSessionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasSessionType" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-core#VitalTransaction",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/vital-core#hasTransactionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTransactionState" : {
        "type" : "string"
      }
    }
  } ],
  "properties" : [ {
    "URI" : "http://vital.ai/ontology/vital-core#hasAccessKey",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#VitalServiceDynamoDBConfig" ],
    "shortName" : "accessKey",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasAggregationType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#AggregationResult" ],
    "shortName" : "aggregationType",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasAppID",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#DatabaseConnection", "http://vital.ai/ontology/vital-core#DomainModel", "http://vital.ai/ontology/vital-core#VitalApp", "http://vital.ai/ontology/vital-core#VitalServiceConfig" ],
    "shortName" : "appID",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasBackwardCompVersion",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#DomainModel" ],
    "shortName" : "backwardCompVersion",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasCatalogName",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#SparqlDatabaseConnection", "http://vital.ai/ontology/vital-core#VitalServiceAllegrographConfig" ],
    "shortName" : "catalogName",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasConfigString",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#DatabaseConnection", "http://vital.ai/ontology/vital-core#VitalServiceConfig" ],
    "shortName" : "configString",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasConnectionError",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#VitalServiceConfig" ],
    "shortName" : "connectionError",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasConnectionState",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#VitalServiceConfig" ],
    "shortName" : "connectionState",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasDatabase",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#SqlDatabaseConnection" ],
    "shortName" : "database",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasDateRetrieved",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#Dataset" ],
    "shortName" : "dateRetrieved",
    "multipleValues" : false,
    "type" : "DateProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasDbType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#VitalServiceSqlConfig" ],
    "shortName" : "dbType",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasDefaultPackageValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#DomainModel" ],
    "shortName" : "defaultPackageValue",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasDefaultSegmentName",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#VitalServiceConfig" ],
    "shortName" : "defaultSegmentName",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasDomainOWL",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#DomainModel" ],
    "shortName" : "domainOWL",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasDomainOWLHash",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#DomainModel" ],
    "shortName" : "domainOWLHash",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasEdgeDestination",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#VITAL_Edge" ],
    "shortName" : "edgeDestination",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasEdgeSource",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#VITAL_Edge" ],
    "shortName" : "edgeSource",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasEdge_read",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#DynamoDBVitalProvisioning" ],
    "shortName" : "edge_read",
    "multipleValues" : false,
    "type" : "LongProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasEdge_write",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#DynamoDBVitalProvisioning" ],
    "shortName" : "edge_write",
    "multipleValues" : false,
    "type" : "LongProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasEndpointType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#DatabaseConnection" ],
    "shortName" : "endpointType",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasEndpointURL",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#DatabaseConnection", "http://vital.ai/ontology/vital-core#VitalServiceDynamoDBConfig", "http://vital.ai/ontology/vital-core#VitalServicePrimeConfig", "http://vital.ai/ontology/vital-core#VitalServiceSparkConfig", "http://vital.ai/ontology/vital-core#VitalServiceSqlConfig" ],
    "shortName" : "endpointURL",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasGraphQueries",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#VitalServiceIndexedDBConfig" ],
    "shortName" : "graphQueries",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasHyperEdgeDestination",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#VITAL_HyperEdge" ],
    "shortName" : "hyperEdgeDestination",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasHyperEdgeSource",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#VITAL_HyperEdge" ],
    "shortName" : "hyperEdgeSource",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasHyperEdge_read",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#DynamoDBVitalProvisioning" ],
    "shortName" : "hyperEdge_read",
    "multipleValues" : false,
    "type" : "LongProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasHyperEdge_write",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#DynamoDBVitalProvisioning" ],
    "shortName" : "hyperEdge_write",
    "multipleValues" : false,
    "type" : "LongProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasHyperNode_read",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#DynamoDBVitalProvisioning" ],
    "shortName" : "hyperNode_read",
    "multipleValues" : false,
    "type" : "LongProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasHyperNode_write",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#DynamoDBVitalProvisioning" ],
    "shortName" : "hyperNode_write",
    "multipleValues" : false,
    "type" : "LongProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasKey",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#VitalAuthKey", "http://vital.ai/ontology/vital-core#VitalServiceConfig", "http://vital.ai/ontology/vital-core#VitalSession" ],
    "shortName" : "key",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasListIndex",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#VITAL_Edge", "http://vital.ai/ontology/vital-core#VITAL_HyperEdge" ],
    "shortName" : "listIndex",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasName",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#VITAL_Node" ],
    "shortName" : "name",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasNode_read",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#DynamoDBVitalProvisioning" ],
    "shortName" : "node_read",
    "multipleValues" : false,
    "type" : "LongProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasNode_write",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#DynamoDBVitalProvisioning" ],
    "shortName" : "node_write",
    "multipleValues" : false,
    "type" : "LongProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasOntologyIRI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#VITAL_Edge", "http://vital.ai/ontology/vital-core#VITAL_HyperEdge", "http://vital.ai/ontology/vital-core#VITAL_HyperNode", "http://vital.ai/ontology/vital-core#VITAL_Node" ],
    "shortName" : "ontologyIRI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasOrganizationID",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#DatabaseConnection", "http://vital.ai/ontology/vital-core#DomainModel", "http://vital.ai/ontology/vital-core#VitalOrganization", "http://vital.ai/ontology/vital-core#VitalServiceConfig" ],
    "shortName" : "organizationID",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasPassword",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#DatabaseConnection", "http://vital.ai/ontology/vital-core#VitalServiceAllegrographConfig", "http://vital.ai/ontology/vital-core#VitalServiceSqlConfig" ],
    "shortName" : "password",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasPoolInitialSize",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#VitalServiceSqlConfig" ],
    "shortName" : "poolInitialSize",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasPoolMaxTotal",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#VitalServiceAllegrographConfig", "http://vital.ai/ontology/vital-core#VitalServiceSqlConfig" ],
    "shortName" : "poolMaxTotal",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasPreferredImportVersions",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#DomainModel" ],
    "shortName" : "preferredImportVersions",
    "multipleValues" : true,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasProperties_number_index_read",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#DynamoDBVitalProvisioning" ],
    "shortName" : "properties_number_index_read",
    "multipleValues" : false,
    "type" : "LongProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasProperties_number_index_write",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#DynamoDBVitalProvisioning" ],
    "shortName" : "properties_number_index_write",
    "multipleValues" : false,
    "type" : "LongProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasProperties_read",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#DynamoDBVitalProvisioning" ],
    "shortName" : "properties_read",
    "multipleValues" : false,
    "type" : "LongProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasProperties_string_index_read",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#DynamoDBVitalProvisioning" ],
    "shortName" : "properties_string_index_read",
    "multipleValues" : false,
    "type" : "LongProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasProperties_string_index_write",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#DynamoDBVitalProvisioning" ],
    "shortName" : "properties_string_index_write",
    "multipleValues" : false,
    "type" : "LongProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasProperties_write",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#DynamoDBVitalProvisioning" ],
    "shortName" : "properties_write",
    "multipleValues" : false,
    "type" : "LongProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasProvenance",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#VITAL_Edge", "http://vital.ai/ontology/vital-core#VITAL_HyperEdge", "http://vital.ai/ontology/vital-core#VITAL_HyperNode", "http://vital.ai/ontology/vital-core#VITAL_Node" ],
    "shortName" : "provenance",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasQueryString",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#VITAL_Query" ],
    "shortName" : "queryString",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasRdfContext",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#RDFStatement" ],
    "shortName" : "rdfContext",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasRdfObject",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#RDFStatement" ],
    "shortName" : "rdfObject",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasRdfPredicate",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#RDFStatement" ],
    "shortName" : "rdfPredicate",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasRdfSubject",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#RDFStatement" ],
    "shortName" : "rdfSubject",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasRegion",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#VitalServiceDynamoDBConfig" ],
    "shortName" : "region",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasRepositoryName",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#SparqlDatabaseConnection", "http://vital.ai/ontology/vital-core#VitalServiceAllegrographConfig" ],
    "shortName" : "repositoryName",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasRootPath",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#VitalServiceLuceneDiskConfig" ],
    "shortName" : "rootPath",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasS3AccessKey",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#VitalServiceDynamoDBConfig" ],
    "shortName" : "s3AccessKey",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasS3BasePath",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#VitalServiceDynamoDBConfig" ],
    "shortName" : "s3BasePath",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasS3Bucket",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#VitalServiceDynamoDBConfig" ],
    "shortName" : "s3Bucket",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasS3EndpointURL",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#VitalServiceDynamoDBConfig" ],
    "shortName" : "s3EndpointURL",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasS3Region",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#VitalServiceDynamoDBConfig" ],
    "shortName" : "s3Region",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasS3SecretKey",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#VitalServiceDynamoDBConfig" ],
    "shortName" : "s3SecretKey",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasSecretKey",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#VitalServiceDynamoDBConfig" ],
    "shortName" : "secretKey",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasSegmentID",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#VitalSegment" ],
    "shortName" : "segmentID",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasSelectQueries",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#VitalServiceIndexedDBConfig" ],
    "shortName" : "selectQueries",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasSerializedJSON",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#VITAL_PayloadNode" ],
    "shortName" : "serializedJSON",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasSerializedRDF",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#VITAL_PayloadNode" ],
    "shortName" : "serializedRDF",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasServerURL",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#VitalServiceAllegrographConfig" ],
    "shortName" : "serverURL",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasSessionID",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#VitalSession" ],
    "shortName" : "sessionID",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasSessionType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#VitalSession" ],
    "shortName" : "sessionType",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasSourceName",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#Dataset" ],
    "shortName" : "sourceName",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasSourceUrl",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#Dataset" ],
    "shortName" : "sourceUrl",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasTablesPrefix",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#VitalServiceDynamoDBConfig", "http://vital.ai/ontology/vital-core#VitalServiceSqlConfig" ],
    "shortName" : "tablesPrefix",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasTargetAppID",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#VitalServiceConfig" ],
    "shortName" : "targetAppID",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasTargetOrganizationID",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#VitalServiceConfig" ],
    "shortName" : "targetOrganizationID",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasTimestamp",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#VITAL_Edge", "http://vital.ai/ontology/vital-core#VITAL_HyperEdge", "http://vital.ai/ontology/vital-core#VITAL_HyperNode", "http://vital.ai/ontology/vital-core#VITAL_Node" ],
    "shortName" : "timestamp",
    "multipleValues" : false,
    "type" : "LongProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasTransactionID",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#VitalTransaction" ],
    "shortName" : "transactionID",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasTransactionState",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#VitalTransaction" ],
    "shortName" : "transactionState",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasURIRef",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#URIReference" ],
    "shortName" : "uRIRef",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasUpdateTime",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#VITAL_Edge", "http://vital.ai/ontology/vital-core#VITAL_HyperEdge", "http://vital.ai/ontology/vital-core#VITAL_HyperNode", "http://vital.ai/ontology/vital-core#VITAL_Node" ],
    "shortName" : "updateTime",
    "multipleValues" : false,
    "type" : "LongProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasUpdatedRowsCount",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#SqlUpdateResponse" ],
    "shortName" : "updatedRowsCount",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasUpdatedTriplesCount",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#SparqlUpdateResponse" ],
    "shortName" : "updatedTriplesCount",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasUriGenerationStrategy",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#VitalServiceConfig" ],
    "shortName" : "uriGenerationStrategy",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasUsername",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#DatabaseConnection", "http://vital.ai/ontology/vital-core#VitalServiceAllegrographConfig", "http://vital.ai/ontology/vital-core#VitalServiceSqlConfig" ],
    "shortName" : "username",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#AggregationResult" ],
    "shortName" : "value",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasVersionIRI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#VITAL_Edge", "http://vital.ai/ontology/vital-core#VITAL_HyperEdge", "http://vital.ai/ontology/vital-core#VITAL_HyperNode", "http://vital.ai/ontology/vital-core#VITAL_Node" ],
    "shortName" : "versionIRI",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasVersionInfo",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#DomainModel" ],
    "shortName" : "versionInfo",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#isActive",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#VITAL_Edge", "http://vital.ai/ontology/vital-core#VITAL_HyperEdge", "http://vital.ai/ontology/vital-core#VITAL_HyperNode", "http://vital.ai/ontology/vital-core#VITAL_Node" ],
    "shortName" : "active",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#isEdge_indexed",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#DynamoDBVitalProvisioning" ],
    "shortName" : "edge_indexed",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#isEdge_stored",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#DynamoDBVitalProvisioning" ],
    "shortName" : "edge_stored",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#isHyperEdge_indexed",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#DynamoDBVitalProvisioning" ],
    "shortName" : "hyperEdge_indexed",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#isHyperEdge_stored",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#DynamoDBVitalProvisioning" ],
    "shortName" : "hyperEdge_stored",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#isHyperNode_indexed",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#DynamoDBVitalProvisioning" ],
    "shortName" : "hyperNode_indexed",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#isHyperNode_stored",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#DynamoDBVitalProvisioning" ],
    "shortName" : "hyperNode_stored",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#isLocalEndpoint",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#VitalServiceDynamoDBConfig" ],
    "shortName" : "localEndpoint",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#isNode_indexed",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#DynamoDBVitalProvisioning" ],
    "shortName" : "node_indexed",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#isNode_stored",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#DynamoDBVitalProvisioning" ],
    "shortName" : "node_stored",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#isPositiveResponse",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#SparqlAskResponse" ],
    "shortName" : "positiveResponse",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#isPreferred",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#DomainModel" ],
    "shortName" : "preferred",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#isPrimary",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#VitalServiceConfig" ],
    "shortName" : "primary",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#isReadOnly",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#DatabaseConnection", "http://vital.ai/ontology/vital-core#VitalSegment" ],
    "shortName" : "readOnly",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#isS3LocalEndpoint",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#VitalServiceDynamoDBConfig" ],
    "shortName" : "s3LocalEndpoint",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  } ]
};

VITAL_JSON_SCHEMAS.push(vital_core_0_2_304_schema);

if(true) {

  module.exports = vital_core_0_2_304_schema;

}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

if(typeof(VITAL_JSON_SCHEMAS) == 'undefined') {
 throw ("No VITAL_JSON_SCHEMAS list defined - vital-core domain unavailable");
}

var vital_0_2_304_schema = {
  "domainURI" : "http://vital.ai/ontology/vital",
  "name" : "vital-0.2.304",
  "version" : "0.2.304",
  "domainOWLHash" : "b413e87660c8042b30281139409c033a",
  "vitalsignsVersion" : "0.2.304",
  "parents" : [ "http://vital.ai/ontology/vital-core" ],
  "schemas" : [ {
    "extends" : "http://vital.ai/ontology/vital-core#VITAL_Edge",
    "properties" : {
      "http://vital.ai/ontology/vital#hasAccountAccessURIs" : {
        "type" : "array",
        "items" : {
          "type" : "string"
        }
      },
      "http://vital.ai/ontology/vital#hasAccountOwnerURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital#hasCertainty" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasLoginOwnerURI" : {
        "type" : "string"
      }
    }
  }, {
    "extends" : "http://vital.ai/ontology/vital-core#VITAL_HyperEdge",
    "properties" : {
      "http://vital.ai/ontology/vital#hasAccountAccessURIs" : {
        "type" : "array",
        "items" : {
          "type" : "string"
        }
      },
      "http://vital.ai/ontology/vital#hasAccountOwnerURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital#hasCertainty" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasLoginOwnerURI" : {
        "type" : "string"
      }
    }
  }, {
    "extends" : "http://vital.ai/ontology/vital-core#VITAL_HyperNode",
    "properties" : {
      "http://vital.ai/ontology/vital#hasAccountAccessURIs" : {
        "type" : "array",
        "items" : {
          "type" : "string"
        }
      },
      "http://vital.ai/ontology/vital#hasAccountOwnerURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital#hasCertainty" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasLoginOwnerURI" : {
        "type" : "string"
      }
    }
  }, {
    "extends" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/vital#hasAccountAccessURIs" : {
        "type" : "array",
        "items" : {
          "type" : "string"
        }
      },
      "http://vital.ai/ontology/vital#hasAccountOwnerURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital#hasCertainty" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasDegree" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasLoginOwnerURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital#hasPageRank" : {
        "type" : "number"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital#Account",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/vital#hasAccountID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital#hasAccountLoginSuffix" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital#hasLocalLoginsType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital#isLocalLoginsValidated" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital#isLocked" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital#isRetired" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital#AdminLogin",
    "parent" : "http://vital.ai/ontology/vital#CredentialsLogin",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital#BusinessOrganization",
    "parent" : "http://vital.ai/ontology/vital#Organization",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital#CredentialsLogin",
    "parent" : "http://vital.ai/ontology/vital#UserLogin",
    "properties" : {
      "http://vital.ai/ontology/vital-core#hasPassword" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasUsername" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital#Currency",
    "parent" : "http://vital.ai/ontology/vital#Thing",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital#Datascript",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/vital#hasLastCompilationError" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital#hasLastModifiedDate" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasScriptBody" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital#hasScriptPath" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital#isAdminScript" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital#isRegularScript" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-core#hasAppID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOrganizationID" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital#DatascriptInfo",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/vital#hasInfo" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital#DatascriptRun",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/vital#hasJobID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital#hasJobStatus" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital#hasLastModifiedDate" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasScriptPath" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital#Duration",
    "parent" : "http://vital.ai/ontology/vital#Thing",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital#Edge_hasLoginAuth",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Edge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital#CredentialsLogin" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital#LoginAuth" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital#Edge_hasNextElement",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital#ListElement" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital#ListElement" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital#Edge_hasUserLogin",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital#Account" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital#UserLogin" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital#Edge_hasUserSession",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital#Account" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital#UserSession" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital#EmailAddress",
    "parent" : "http://vital.ai/ontology/vital#Identifier_Locator",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital#ErrorFact",
    "parent" : "http://vital.ai/ontology/vital#VITAL_Fact",
    "properties" : {
      "http://vital.ai/ontology/vital#hasErrorMessage" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital#hasErrorType" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital#FileNode",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/vital#hasAccountURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital#hasExpirationDate" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasFileLength" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasFileName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital#hasFileScope" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital#hasFileType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital#hasFileURL" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital#hasProfileURI" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital#GeographicRegion",
    "parent" : "http://vital.ai/ontology/vital#Thing",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital#GovernmentOrganization",
    "parent" : "http://vital.ai/ontology/vital#Organization",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital#HyperEdge_hasFact",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_HyperEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-core#VITAL_Edge", "http://vital.ai/ontology/vital-core#VITAL_HyperNode", "http://vital.ai/ontology/vital-core#VITAL_Node" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital#VITAL_Fact" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital#HyperEdge_hasHyperAnnotation",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_HyperEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-core#VITAL_Edge", "http://vital.ai/ontology/vital-core#VITAL_HyperEdge", "http://vital.ai/ontology/vital-core#VITAL_HyperNode", "http://vital.ai/ontology/vital-core#VITAL_Node" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital#VITAL_Annotation" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital#HyperEdge_hasReason",
    "parent" : "http://vital.ai/ontology/vital#HyperEdge_hasHyperAnnotation",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-core#VITAL_Edge", "http://vital.ai/ontology/vital-core#VITAL_HyperEdge", "http://vital.ai/ontology/vital-core#VITAL_HyperNode", "http://vital.ai/ontology/vital-core#VITAL_Node" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital#VITAL_Reason" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital#Identifier_Locator",
    "parent" : "http://vital.ai/ontology/vital#Thing",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital#Job",
    "parent" : "http://vital.ai/ontology/vital#Datascript",
    "properties" : {
      "http://vital.ai/ontology/vital#hasCronExpression" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital#hasInterval" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasIntervalTimeUnit" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital#hasLastExecutionTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasNextExecutionTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#isCallable" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital#isPaused" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital#ListElement",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/vital#isFirstElement" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital#Location",
    "parent" : "http://vital.ai/ontology/vital#GeographicRegion",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital#Login",
    "parent" : "http://vital.ai/ontology/vital#CredentialsLogin",
    "properties" : {
      "http://vital.ai/ontology/vital#isServiceLogin" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital#LoginAuth",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/vital-core#hasPassword" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasUsername" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital#Media",
    "parent" : "http://vital.ai/ontology/vital#Thing",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital#Number",
    "parent" : "http://vital.ai/ontology/vital#Thing",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital#Organization",
    "parent" : "http://vital.ai/ontology/vital#Thing",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital#Person",
    "parent" : "http://vital.ai/ontology/vital#PhysicalThing",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital#PhoneNumber",
    "parent" : "http://vital.ai/ontology/vital#Identifier_Locator",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital#PhysicalThing",
    "parent" : "http://vital.ai/ontology/vital#Thing",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital#PrivateOrganization",
    "parent" : "http://vital.ai/ontology/vital#Organization",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital#Product",
    "parent" : "http://vital.ai/ontology/vital#PhysicalThing",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital#Thing",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital#Time",
    "parent" : "http://vital.ai/ontology/vital#Thing",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital#URI",
    "parent" : "http://vital.ai/ontology/vital#Identifier_Locator",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital#URL",
    "parent" : "http://vital.ai/ontology/vital#Identifier_Locator",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital#UserLogin",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/vital#hasEmailAddress" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital#hasVerificationCode" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital#isEmailVerified" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital#isLocked" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital#UserSession",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/vital#hasExpirationDate" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasLoginURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasSessionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasSessionType" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital#VITAL_Annotation",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_HyperNode",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital#VITAL_Fact",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_HyperNode",
    "properties" : {
      "http://vital.ai/ontology/vital#isEnabled" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital#VITAL_Reason",
    "parent" : "http://vital.ai/ontology/vital#VITAL_Annotation",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital#VitalRule",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/vital#hasRuleBody" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital#hasRuleSet" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital#VitalRuleSet",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  } ],
  "properties" : [ {
    "URI" : "http://vital.ai/ontology/vital#hasAccountAccessURIs",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#VITAL_Edge", "http://vital.ai/ontology/vital-core#VITAL_HyperEdge", "http://vital.ai/ontology/vital-core#VITAL_HyperNode", "http://vital.ai/ontology/vital-core#VITAL_Node" ],
    "shortName" : "accountAccessURIs",
    "multipleValues" : true,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital#hasAccountID",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital#Account" ],
    "shortName" : "accountID",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital#hasAccountLoginSuffix",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital#Account" ],
    "shortName" : "accountLoginSuffix",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital#hasAccountOwnerURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#VITAL_Edge", "http://vital.ai/ontology/vital-core#VITAL_HyperEdge", "http://vital.ai/ontology/vital-core#VITAL_HyperNode", "http://vital.ai/ontology/vital-core#VITAL_Node" ],
    "shortName" : "accountOwnerURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital#hasAccountURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital#FileNode" ],
    "shortName" : "accountURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital#hasCertainty",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#VITAL_Edge", "http://vital.ai/ontology/vital-core#VITAL_HyperEdge", "http://vital.ai/ontology/vital-core#VITAL_HyperNode", "http://vital.ai/ontology/vital-core#VITAL_Node" ],
    "shortName" : "certainty",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital#hasCronExpression",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital#Job" ],
    "shortName" : "cronExpression",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital#hasDegree",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#VITAL_Node" ],
    "shortName" : "degree",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital#hasEmailAddress",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital#UserLogin" ],
    "shortName" : "emailAddress",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital#hasErrorMessage",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital#ErrorFact" ],
    "shortName" : "errorMessage",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital#hasErrorType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital#ErrorFact" ],
    "shortName" : "errorType",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital#hasExpirationDate",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital#FileNode", "http://vital.ai/ontology/vital#UserSession" ],
    "shortName" : "expirationDate",
    "multipleValues" : false,
    "type" : "DateProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital#hasFileLength",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital#FileNode" ],
    "shortName" : "fileLength",
    "multipleValues" : false,
    "type" : "LongProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital#hasFileName",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital#FileNode" ],
    "shortName" : "fileName",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital#hasFileScope",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital#FileNode" ],
    "shortName" : "fileScope",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital#hasFileType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital#FileNode" ],
    "shortName" : "fileType",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital#hasFileURL",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital#FileNode" ],
    "shortName" : "fileURL",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital#hasInfo",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital#DatascriptInfo" ],
    "shortName" : "info",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital#hasInterval",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital#Job" ],
    "shortName" : "interval",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital#hasIntervalTimeUnit",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital#Job" ],
    "shortName" : "intervalTimeUnit",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital#hasJobID",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital#DatascriptRun" ],
    "shortName" : "jobID",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital#hasJobStatus",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital#DatascriptRun" ],
    "shortName" : "jobStatus",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital#hasLastCompilationError",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital#Datascript" ],
    "shortName" : "lastCompilationError",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital#hasLastExecutionTime",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital#Job" ],
    "shortName" : "lastExecutionTime",
    "multipleValues" : false,
    "type" : "DateProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital#hasLastModifiedDate",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital#Datascript", "http://vital.ai/ontology/vital#DatascriptRun" ],
    "shortName" : "lastModifiedDate",
    "multipleValues" : false,
    "type" : "DateProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital#hasLocalLoginsType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital#Account" ],
    "shortName" : "localLoginsType",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital#hasLoginOwnerURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#VITAL_Edge", "http://vital.ai/ontology/vital-core#VITAL_HyperEdge", "http://vital.ai/ontology/vital-core#VITAL_HyperNode", "http://vital.ai/ontology/vital-core#VITAL_Node" ],
    "shortName" : "loginOwnerURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital#hasLoginURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital#UserSession" ],
    "shortName" : "loginURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital#hasNextExecutionTime",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital#Job" ],
    "shortName" : "nextExecutionTime",
    "multipleValues" : false,
    "type" : "DateProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital#hasPageRank",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#VITAL_Node" ],
    "shortName" : "pageRank",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital#hasProfileURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital#FileNode" ],
    "shortName" : "profileURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital#hasRuleBody",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital#VitalRule" ],
    "shortName" : "ruleBody",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital#hasRuleSet",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital#VitalRule" ],
    "shortName" : "ruleSet",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital#hasScriptBody",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital#Datascript" ],
    "shortName" : "scriptBody",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital#hasScriptPath",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital#Datascript", "http://vital.ai/ontology/vital#DatascriptRun" ],
    "shortName" : "scriptPath",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital#hasVerificationCode",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital#UserLogin" ],
    "shortName" : "verificationCode",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital#isAdminScript",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital#Datascript" ],
    "shortName" : "adminScript",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital#isCallable",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital#Job" ],
    "shortName" : "callable",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital#isEmailVerified",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital#UserLogin" ],
    "shortName" : "emailVerified",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital#isEnabled",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital#VITAL_Fact" ],
    "shortName" : "enabled",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital#isFirstElement",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital#ListElement" ],
    "shortName" : "firstElement",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital#isLocalLoginsValidated",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital#Account" ],
    "shortName" : "localLoginsValidated",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital#isLocked",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital#Account", "http://vital.ai/ontology/vital#UserLogin" ],
    "shortName" : "locked",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital#isPaused",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital#Job" ],
    "shortName" : "paused",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital#isRegularScript",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital#Datascript" ],
    "shortName" : "regularScript",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital#isRetired",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital#Account" ],
    "shortName" : "retired",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital#isServiceLogin",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital#Login" ],
    "shortName" : "serviceLogin",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  } ]
};

VITAL_JSON_SCHEMAS.push(vital_0_2_304_schema);

if(true) {

  module.exports = vital_0_2_304_schema;

}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Represents a haley session, two states authenticated / not authenticated
 * @param implementation
 * @returns
 */
HaleySession = function(implementation){
	//haley session maintains its state
	this.impl = implementation;
	//default channel URI for output messages
	this.defaultChannelURI = null;
	//default endpoint URI for output messages
	this.defaultEndpointURI = null;
	//default userID for output messages
	//only used in with anonymous sessions 
	this.defaultUserID = null;
	//default userName for output messages
	this.defaultUserName = null;
}

HaleySession.prototype.isAuthenticated = function() {
	return this.impl.isAuthenticated(this);
}

HaleySession.prototype.getAuthSessionID = function() {
	return this.impl.getAuthSessionID(this);
}

HaleySession.prototype.getSessionID = function() {
	return this.impl.getSessionID(this);
}

/**
 * returns current auth account (login) used to authenticate
 */
HaleySession.prototype.getAuthAccount = function() {
	return this.impl.getAuthAccount(this);
}



/**
 * 
 * all callbacks have node.js style params: ( error , results... )
 * 
 * @param implementation
 * @param syncdomains
 * @returns
 */
HaleyAPI = function(implementation, syncdomains, callback, logger) {
	this.logger = logger != null ? logger : console;
	this.impl = implementation;
	this.impl.logger = this.logger;
	if(syncdomains) {
		throw "syncdomains not supported yet";
	}
	var _this = this;
	this.impl.initialize(syncdomains, function(error){
		
		if(error) {
			callback(error);
			return;
		}
		
		callback(null, _this);
		
	});
}

HaleyAPI.prototype.setLogger = function(logger){
	if(logger == null) throw new Error("logger cannot be null"); 
	this.impl.logger = logger;
	this.logger = logger;
}

HaleyAPI.prototype.getLogger = function() {
	return this.logger;
}

/**
 * Authenticates haley session or throws exception if already authenticated or auth error occured
 */
HaleyAPI.prototype.authenticateSession = function(haleySession, username, password, callback) {
	this.impl.authenticateSession(haleySession, username, password, callback);
}

/**
 * Authenticates haley session or throws exception if already authenticated or auth error occured
 */
HaleyAPI.prototype.authenticateSessionWithAccountID = function(haleySession, username, password, accountID, callback) {
	this.impl.authenticateSessionWithAccountID(haleySession, username, password, accountID, callback);
}


HaleyAPI.prototype.close = function(callback) {
	this.impl.close(callback);
}

HaleyAPI.prototype.closeAllSessions = function(callback) {
	this.impl.closeAllSessions(callback);
}

HaleyAPI.prototype.closeSession = function(haleySession, callack) {
	this.impl.closeSession(haleySession, callack);
}


/**
 * Deregisters given callback based on function equality. request, types and default callback. 
 * @param haleySession
 * @param callback
 * @returns true if a callback was removed, false if not found
 */
HaleyAPI.prototype.deregisterCallback = function(haleySession, callback) {
	return this.impl.deregisterCallback(haleySession, callback);
}


/**
 * Returns current default callback for this session
 * @returns current callback
 */
HaleyAPI.prototype.getDefaultCallback = function(haleySession) {
	return this.impl.getDefaultCallback(haleySession);
}



//getActiveThreadCount()
HaleyAPI.prototype.getSessions = function() {
	return this.impl.getSessions();
}

//isQuiescent()


/**
 * Returns a list of current typed callbacks. List element: 
 * { type: 'request', 'type', 'default'
 * 	 //for 'type'
 *   primaryURIs: [],
 *   classesURIs: [],
 *   callback: function,
 *   //for 'request'
 *   requestURI: string
 * }
 */
HaleyAPI.prototype.listCallbacks = function(haleySession) {
	return this.impl.listCallbacks(haleySession);
}



/**
 * @param haleySession
 * @param callback a closure( error, List<Channel>)
 */
HaleyAPI.prototype.listChannels = function(haleySession, callback) {
	this.impl.listChannels(haleySession, callback);
}


/**
 * In some implementations the session may be already authenticated
 */
HaleyAPI.prototype.openSession = function(callback) {
	this.impl.openSession(callback);
}


/**
 * Registers a message type callback
 * @param haleySession
 * @param classURIorList
 * @param subclasses (boolean)
 * @param callback a closure (ResultList message)
 * @return true if registered, false if already registered
 */
HaleyAPI.prototype.registerCallback = function(haleySession, classURIorList, subclasses, callback) {
	return this.impl.registerCallback(haleySession, classURIorList, subclasses, callback);
}

/**
 * Registers default (fallback) callback
 * @param haleySession
 * @param callback, null value deregisters default callback (ResultList message)
 * @return true if this is a new or different callback, false if this handler is already registered
 */
HaleyAPI.prototype.registerDefaultCallback = function(haleySession, callback) {
	return this.impl.registerDefaultCallback(haleySession, callback);
}

/**
 * Registers a request callback
 * @param haleySession
 * @param aimpMessage
 * @param callback a closure (ResultList message)
 * @return true if this is a new or different callback, false if this handler is already registered
 */
HaleyAPI.prototype.registerRequestCallback = function(haleySession, aimpMessage, callback) {
	return this.impl.registerRequestCallback(haleySession, aimpMessage, callback);
}



/**
 * sends a message. The callback 
 * @param haleySession
 * @param aimpMessage
 * @param graphObjectsList
 * @param callback - gets notified if the message was sent successfully - null error - or not
 */
HaleyAPI.prototype.sendMessage = function(haleySession, aimpMessage, graphObjectsList, callback) {
	this.impl.sendMessage(haleySession, aimpMessage, graphObjectsList, callback);
}

/**
 * sends a message with associated requestCallback
 * @param haleySession
 * @param aimpMessage 
 * @param graphObjectsList
 * @param callback - gets notified if the message was sent successfully - null error - or not
 * @param requestCallback - the callback that is registered for this requestURI 
 * @return true if this is a new or different callback, false if this handler is already registered
 */
HaleyAPI.prototype.sendMessageWithRequestCallback = function(haleySession, aimpMessage, graphObjectsList, callback, requestCallback) {
	return this.impl.sendMessageWithRequestCallback(haleySession, aimpMessage, graphObjectsList, callback, requestCallback);
}

HaleyAPI.prototype.unauthenticateSession = function(haleySession, callback) {
	this.impl.unauthenticateSession(haleySession, callback);
}


/**
 * Adds reconnect listener that gets notified on reconnect event.
 * @return true if new listener, false if already registered.
 */
HaleyAPI.prototype.addReconnectListener = function(reconnectListener) {
	return this.impl.addReconnectListener(reconnectListener);
}

/**
 * Removes reconnect listener.
 * @return true if listener found, false otherwise.
 */
HaleyAPI.prototype.removeReconnectListener = function(reconnectListener) {
	return this.impl.removeReconnectListener(reconnectListener);
}


/**
 * callback called with String error, List<DomainModel>
 */
HaleyAPI.prototype.listServerDomainModels = function(callback) {
	return this.impl.listServerDomainModels(callback);
}

/**
 * callback called with String error
 */
HaleyAPI.prototype.validateDomainModels = function(failIfListElementsDifferent, callback) {
	
	var _this = this;
	
	this.listServerDomainModels(function(error, models){
		
		try {
			
			if(error) {
				callback("Error when listing server domain models: " + error);
				return;
			}
		
			
			var localDomains = {};
			var serverDomains = {};
			
			
			for(var i = 0 ; i < models.length; i++) {
				var dm = models[i];
				serverDomains[dm.URI] = dm;
			}
			
			var localDomainsList = [];
			
			for(var i = 0 ; i < VitalServiceJson.SINGLETON.dynamicDomains.length; i++) {
				var ld = VitalServiceJson.SINGLETON.dynamicDomains[i];
				var dm = vitaljs.graphObject({type: 'http://vital.ai/ontology/vital-core#DomainModel', URI: ld.domainURI});
				dm.set('name', ld.name);
				dm.set('domainOWLHash', ld.domainOWLHash);
				dm.set('versionInfo', ld.version);
				localDomains[dm.URI] = dm;
				localDomainsList.push(dm);
			}
			
			if(failIfListElementsDifferent) {
				
				var localURIs = Object.keys(localDomains);
				var serverURIs = Object.keys(serverDomains);
				
				//remove all
//				localURIs.removeAll(serverURIs)
				for(var i = 0; i < serverURIs.length; i++) {
					var su = serverURIs[i];
					var index = localURIs.indexOf(su);
					if(index >= 0) {
						localURIs.splice(index, 1);
					}
				}
				
				if(localURIs.length > 0) {
					callback("The following domains are loaded only locally: " + localURIs.join(", "));
					return 
				}
				
				localURIs = Object.keys(localDomains);
//				serverURIs.removeAll(localURIs)
				for(var i = 0 ; i < localURIs.length; i++) {
					var lu = localURIs[i];
					var index = serverURIs.indexOf(lu);
					if(index >= 0) {
						serverURIs.splice(index, 1);
					}
				}
				
				if(serverURIs.length > 0) {
					callback("The following domains are loaded only on the server: " + serverURIs.join(", "));
					return 
				}
				 
			}
			
			
			var differentDomains = [];
			
			for(var i = 0 ; i < localDomainsList.length; i++) {
				
				var localDomain = localDomainsList[i];
				
				var serverDomain = serverDomains[localDomain.URI];
				
				if(!failIfListElementsDifferent && serverDomain == null) {
					continue;
				}

				var hash1 = localDomain.get('domainOWLHash');
				var hash2 = serverDomain.get('domainOWLHash');
				var v1 = localDomain.get('versionInfo');
				var v2 = serverDomain.get('versionInfo');

				if(hash1 != null && hash1 != hash2) {
					differentDomains.push(localDomain.URI + " local hash: " + hash1 + " remote hash: " + hash2);
					continue;
				}			

				if(v1 != null && v1 != v2) {
					differentDomains.push(localDomain.URI + " local version: " + v1 + " remote version: " + v2);
					continue;
				}		
				
				
			}
			
			if(differentDomains.length > 0) {
				callback("Different domains detected [" + differentDomains.length + "]: " + differentDomains.join(", "));
				return;
			}
			
			callback(null);
			
		} catch(e) {
			_this.logger.error(e);
			callback("Internal error: " + e);
		}
		
	});
	
}

/**
 * Takes care of file upload in response to a File Question
 * @param haleySession
 * @param fileQuestionMessage [QuestionMessage, FileQuestion]
 * @param fileObject, an object 
 * 	{ 
 * 		file: <from file inputfile>,
 * 		accountURIs: <list of additional accountsURIs to be added to file node>,
 *      fileNodeClass: optional fileNodeClass, default: 'http://vital.ai/ontology/vital#FileNode',
 *      parentNodeURI: optional parent of the filenode, defaults to accountURI,
 *      progressListener: optional progress listener that is called with (loaded, total) bytes
 *  }
 *  selected in some form
 * @param callback (error, fileNode)
 */
HaleyAPI.prototype.uploadFileInBrowser = function(haleySession, fileQuestionMessage, fileObject, callback) {
	this.impl.uploadFileInBrowser(haleySession, fileQuestionMessage, fileObject, callback);
}

/**
 * Takes care of file upload in response to a File Question in cordova
 * @param haleySession
 * @param fileQuestionMessage [QuestionMessage, FileQuestion]
 * @param fileObject, an object 
 * 	{ 
 * 		file: <from file inputfile>,
 * 		accountURIs: <list of additional accountsURIs to be added to file node>,
 *      fileNodeClass: optional fileNodeClass, default: 'http://vital.ai/ontology/vital#FileNode',
 *      parentNodeURI: optional parent of the filenode, defaults to accountURI,
 *      progressListener: optional progress listener that is called with (loaded, total) bytes
 *  }
 *  selected in some form
 * @param callback (error, fileNode)
 */
HaleyAPI.prototype.uploadFileInCordova = function(haleySession, fileQuestionMessage, fileObject, callback) {
	this.impl.uploadFileInCordova(haleySession, fileQuestionMessage, fileObject, callback);
}

/**
 * Uploads file in non-browser (nodejs) environment in response to a File Question
 * @param haleySession
 * @param fileQuestionMessage [QuestionMessage, FileQuestion]
 * @param fileObject, an object 
 * 	{ 
 * 		filePath: pathToLocalFile,
 * 		accountURIs: <list of additional accountsURIs to be added to file node>,
 *      fileNodeClass: optional fileNodeClass, default: 'http://vital.ai/ontology/vital#FileNode',
 *      parentNodeURI: optional parent of the filenode, defaults to accountURI
 *  }
 *  selected in some form
 * @param callback (error, fileNode)
 */
HaleyAPI.prototype.uploadFile = function(haleySession, fileQuestionMessage, fileObject, callback) {
	this.impl.uploadFile(haleySession, fileQuestionMessage, fileObject, callback);
}

/**
 * Cancels a spawned file upload
 * @param haleySession
 * @param fileQuestionMessage
 * @param callback
 */
HaleyAPI.prototype.cancelFileUpload = function(haleySession, fileQuestionMessage, callback) {
	this.impl.cancelFileUpload(haleySession, fileQuestionMessage, callback);
}


/**
 * Returns the download URL for given file node. Private URLs contain sessionID.
 */
HaleyAPI.prototype.getFileNodeDownloadURL = function(haleySession, fileNode) {
	return this.impl.getFileNodeDownloadURL(haleySession, fileNode);
}

/**
 * Returns the download URL for given file node URI
 */
HaleyAPI.prototype.getFileNodeURIDownloadURL = function(haleySession, fileNodeURI) {
	return this.impl.getFileNodeURIDownloadURL(haleySession, fileNodeURI);
}


/**
 * add a listener notified with (error, haleySession, aimpMessage, payload)
 * returns true if added, false if already added
 */
HaleyAPI.prototype.addAIMPMessageSentListener = function(listener) {
	return this.impl.addAIMPMessageSentListener(listener);
}

/**
 * remove an AIMP message sent listener
 * returns true if removed, false if was not added 
 */
HaleyAPI.prototype.removeAIMPMessageSentListener = function(listener) {
	return this.impl.removeAIMPMessageSentListener(listener);
} 


/**
 * False by default. When enabled the client attempts to re-authenticate if current session was expired/not found.
 */
HaleyAPI.prototype.setCredentialsCacheEnabled = function(enabled) {
	this.impl.credentialsCacheEnabled = enabled;
}

HaleyAPI.prototype.isCredentialsCacheEnabled = function() {
	return this.impl.credentialsCacheEnabled;
}

//nodejs specific
if(true) {
//	module.exports = {
//		HaleySession: HaleySession,
//		HaleyAPI: HaleyAPI
//	}; 
	module.exports = HaleyAPI;
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

HaleyAPIVitalServiceImpl = function(vitalService) {
	if(HaleyAPIVitalServiceImpl.SINGLETON != null) throw "only single instance of HaleyAPIVitalServiceImpl allowed";
	HaleyAPIVitalServiceImpl.SINGLETON = this;
	this.vitalService = vitalService;
	this.haleySessionSingleton = null;
	this.streamName = 'haley';
	
	//default logger
	this.logger = console; 
	
	this.handlers = [];
	
	//requestURI -> callback
	this.requestHandlers = {};
	
	this.defaultHandler = null;
	
	this.handlerFunction = null;

	this.logEnabled = true;
	
	//classesURIs is an object for better efficiency
	//{ callback, primaryURIs, classesURIs } 
	
	this.reconnectListeners = [];
	
	var _this = this;
	
	this.vitalService.impl.reconnectHandler = function(){
	
		if(_this.logEnabled) {
			
			_this.logger.info("Notifying " + _this.reconnectListeners.length + ' reconnect listener(s)');
			
		}
		
		for(var i = 0 ; i < _this.reconnectListeners.length; i++) {
				
			_this.reconnectListeners[i]();
				
		}
		
	};
	
	//this timestamp is updated when a new non-hearbeat or non-loggedin/out message is sent
	this.lastActivityTimestamp = null; 
	
	this.credentialsCacheEnabled = false;
	this.cachedCredentials = {};
	
	
	//from vital service url
	this.saasServerURL = null;
	
	if( !this.vitalService.impl.url ) {
		throw "No eventbusURL available in vitalService object";
		return;
	}
	
	var protocol = null;
	var host = null;
	//port ?
	
	if(false) { var parser; } else {
		
		var url = __webpack_require__(5).parse(this.vitalService.impl.url);

		protocol = url.protocol;
		host = url.host;
		
	}

	this.saasServerURL = protocol + '//' + host;

	this.aimpMessageSentListeners = [];
	
}

HaleyAPIVitalServiceImpl.SINGLETON = null;

HaleyAPIVitalServiceImpl.prototype.initialize = function(syncdomains, callback) {
	if(syncdomains) {
		callback('sync domains not supported yet in this implementation');
		return;
	}
	
	//ok
	callback();
	
}

HaleyAPIVitalServiceImpl.prototype._checkSession = function(haleySession) {
	
	if(this.haleySessionSingleton == null) return 'no active haley session found';
	
	if(this.haleySessionSingleton != haleySession) return 'unknown haley session';
	
	return null;
	
}

HaleyAPIVitalServiceImpl.prototype._cleanup = function() {
	
	this.handlers = [];
	this.requestHandlers = {};
	this.defaultHandler = null;
	
}

/* SESSION RELATED CALLS */
HaleyAPIVitalServiceImpl.prototype.isAuthenticated = function(haleySession) {
	
	var e = this._checkSession(haleySession);
	if(e) throw e;
	
	//check if vital
	return this.vitalService.getAppSessionID() != null;
	
}

HaleyAPIVitalServiceImpl.prototype.getAuthSessionID = function(haleySession) {

	var e = this._checkSession(haleySession);
	if(e) throw e;
	
	//check if vital
	return this.vitalService.getAppSessionID();
	
}

HaleyAPIVitalServiceImpl.prototype.getSessionID = function(haleySession) {
	
	var e = this._checkSession(haleySession);
	if(e) throw e;
	
	return this.vitalService.impl.sessionID;
	
}

HaleyAPIVitalServiceImpl.prototype.getAuthAccount = function(haleySession) {
	
	var e = this._checkSession(haleySession);
	if(e) throw e;
	
	return this.vitalService.getCurrentLogin();
	
}


/* END OF SESSION RELATED CALLS */


HaleyAPIVitalServiceImpl.prototype.authenticateSession = function(haleySession, username, password, callback) {
	this.authenticateSessionWithAccountID(haleySession, username, password, null, callback);
}
HaleyAPIVitalServiceImpl.prototype.authenticateSessionWithAccountID = function(haleySession, username, password, accountID, callback) {
	
	var e = this._checkSession(haleySession);
	if(e) {
		callback(e);
		return;
	}
	
	if(haleySession.isAuthenticated()) {
		callback('session already authenticated');
		return;
	}
	
	var _this = this;
	
	this.vitalService.callFunction(VitalServiceWebsocketImpl.vitalauth_login, {loginType: 'Login', username: username, password: password, accountID: accountID}, function(loginSuccess){
			
		if(_this.logEnabled) {
			_this.logger.info("auth success: ", loginSuccess);
		}

		var sessionID = haleySession.getSessionID();

		if(_this.credentialsCacheEnabled) {
			_this.cachedCredentials[sessionID] = {username: username, password: password, accountID: accountID};
		}
		
		_this._sendLoggedInMsg(function(error){

			if(_this.logEnabled) {
				_this.logger.info("loggedin msg sent");
			}
			
			if(error) {
				callback(error);
				return;
			}
			
			//success
			callback(null, loginSuccess.first());
			
		});
		
			
	}, function(loginError) {
			
		_this.logger.error("Login error: ", loginError);
		
		callback(loginError);
	});
		
}


HaleyAPIVitalServiceImpl.prototype.closeAllSessions = function(callback) {

	
	if(this.haleySessionSingleton == null) {
		callback();
		return;
	}
	
	this.closeSession(haleySession, callack);
	
}

HaleyAPIVitalServiceImpl.prototype.close = function(callback) {
	
	var _this = this;
	
	this.vitalService.close(function(){
		
		_this.logger.info("haley api closed");
		
		callback(null);
		
	}, function(error){
		
		_this.logger.error(error);
		
		callback(error);
		
	});
	
}

HaleyAPIVitalServiceImpl.prototype.closeSession = function(haleySession, callack) {
	
	var e = this._checkSession(haleySession);
	if(e) throw e;
	
	var _this = this;
	
	var afterUnsubscribed = function() {
		
		//first register stream handler
		_this.vitalService.callFunction(VitalService.JS_UNREGISTER_STREAM_HANDLER, {streamName: _this.streamName, handlerFunction: _this.handlerFunction}, function(succsessObj){
			
			if(_this.logEnabled) {
				_this.logger.info('unregistered handler for stream ' + _this.streamName, succsessObj);
			}
			
			_this.haleySessionSingleton = null;
			
			_this._cleanup();
			callack();
			
			
		}, function(error){

			_this.logger.error('couldn\'t deregister messages handler', error);
			
			callback(error);
			
		});
		
	};
	
	var afterUnauth = function(){
		
		//unsubscribe first
		_this.vitalService.callFunction(VitalService.VERTX_STREAM_UNSUBSCRIBE, {streamName: _this.streamName}, function(succsessObj){
			
			if(_this.logEnabled) {
				_this.logger.info("unsubscribed from stream " + _this.streamName, succsessObj); 
			}
			
			afterUnsubscribed();
			
		}, function(errorObj) {
			
			_this.logger.error("Error when unsubscribing from stream", errorObj);
			
			callack(errorObj);
			
		});
		
		//do nothing
		
	}; 
	
	if(haleySession.isAuthenticated()) {
		
		//logout current user
		this.unauthenticateSession(haleySession, function(error){
			
			if(error) {
				_this.logger.error(error);
			}

			afterUnauth();
			
		});
		
	} else {
		
		afterUnauth();
		
		
	}

	
}


/**
 * Deregisters given callback based on function equality. request, types and default callback. 
 * @param haleySession
 * @param callback
 * @returns true if a callback was removed, false if not found
 */
HaleyAPIVitalServiceImpl.prototype.deregisterCallback = function(haleySession, callback) {
	
	var e = this._checkSession(haleySession);
	if(e) {
		throw e
	}
	
	if(this.defaultHandler != null && this.defaultHandler == callback) {
		this.defaultHandler = null;
		return true;
	}
	
	for( var i = 0 ; i < this.handlers.length; i++ ) {
		
		var h = this.handlers[i];
		
		if(h.callback == callback) {
			
			this.handlers.splice(i, 1);
			
			return true;
		}
		
	}
	
	//request handlers are stored in a map for efficient access
	this.requestHandlers.prototype
	
	for (var requestURI in this.requestHandlers) {
	    if (this.requestHandlers.hasOwnProperty(requestURI)) {
	        // do stuff
	    	var cb = this.requestHandlers[requestURI];
	    	if(cb == callback) {
	    		delete this.requestHandlers[requestURI];
	    		return true;
	    	}
	    }
	}
	
	return false;
	
}


/**
 * Returns current default callback for this session
 * @returns current callback
 */
HaleyAPIVitalServiceImpl.prototype.getDefaultCallback = function(haleySession) {
	var e = this._checkSession(haleySession);
	if(e) {
		throw e
	}
	return this.defaultHandler;
}

//downloadBinary(HaleySession, String, Channel)
//downloadBinary(HaleySession, String, Channel, HaleyCallback)
//getActiveThreadCount()
HaleyAPIVitalServiceImpl.prototype.getSessions = function() {
	var l = [];
	if(this.haleySessionSingleton != null) {
		l.push(this.haleySessionSingleton);
	}
	return l;
}

//isQuiescent()

HaleyAPIVitalServiceImpl.prototype._streamHandler = function(msgRL) {

	if(this.logEnabled) {
		this.logger.info("Stream " + this.streamName + "received message: ", msgRL);
	}
	
	var m = msgRL.first();
	
//	var payload = [];
//	
//	for(var i = 1 ; i < msgRL.results.length; i++) {
//		
//		payload.push(msgRL.results[i].graphObject);
//		
//	}
	
	var c = 0;
	
	var type = m.type;
	
	//requestURI handler
	var requestURI = m.get('requestURI');
	
	if(requestURI != null) {
		
		var h = this.requestHandlers[requestURI];
		
		if(h != null) {
			
			if(this.logEnabled) {
				this.logger.info("Notifying requestURI handler", requestURI);
			}
			
			var cbRes = h(msgRL);
			
			if(cbRes != null && cbRes == false) {
				
				if(this.logEnabled) {
					this.logger.info("RequestURI handler returned false, unregistering");
				}
				
				delete this.requestHandlers[requestURI];
				
			} else {
				
				if(this.logEnabled) {
					
					this.logger.info("RequestURI handler returned non-false, still regsitered");
					
				} 
					
				
			}
			
			return;
			
		}
		
	}
	
	
	//primary classes
	for(var i = 0 ; i < this.handlers.length; i++) {
		
		var h = this.handlers[i];
		
		if(h.primaryURIs[type] == true) {
			if(this.logEnabled) {
//				this.logger.info("Notifying primary type handler: ", h.primaryURIs);
			}
			h.callback(msgRL);
			c++;
			return;
		}
		
		
	}
	
	for(var i = 0 ; i < this.handlers.length; i++) {
		
		var h = this.handlers[i];
		
		if(h.classesURIs[type] == true) {
			
			if(this.logEnabled) {
//				this.logger.info("Notifying secondary type handler: ", h.classesURIs);
			}
			h.callback(msgRL);
			c++;
			return;
			
		}
		
	}
	
	if(this.defaultHandler != null) {
		
		if(this.logEnabled) {
//			this.logger.info("Notifying default handler");
		}
		
		this.defaultHandler(msgRL);
		
		return;
	}
	
	
	if(this.logEnabled) {
		this.logger.info("Notified " + c + " msg handlers");
	}
	
	//notify handlers if found
}

HaleyAPIVitalServiceImpl.prototype._sendLoggedInMsg = function(callback) {
	
	var _this = this;
	
	var msg = vitaljs.graphObject({type: 'http://vital.ai/ontology/vital-aimp#UserLoggedIn'});
	
	this.sendMessage(this.haleySessionSingleton, msg, [], function(error){
		
		if(error) {
			_this.logger.error("Error when sending loggedin message: ", error);
			callback(error);
		} else {
			callback(null);
		}
		
	});
}


HaleyAPIVitalServiceImpl.prototype.listCallbacks = function(haleySession) {
	var e = this._checkSession(haleySession);
	if(e) {
		throw e
	}
	
	var l = [];
	
	for (var requestURI in this.requestHandlers) {
	    if (this.requestHandlers.hasOwnProperty(requestURI)) {
	        // do stuff
	    	var cb = this.requestHandlers[requestURI];
	    	l.push({
	    		type:'request',
	    		callback: cb,
	    		requestURI: requestURI
	    	});
	    }
	}
	
	for(var i = 0 ; i < this.handlers.length; i++) {
		
		var h = this.handlers[i];
		
		l.push({
			type:'type', 
			callback: h.callback, 
			primaryURIs: h.primaryURIs,
			classesURIs: h.classesURIs
		});
		
	}

	if(this.defaultHandler != null) {
		
		l.push({
			type: 'default',
			callback: this.defaultHandler
		});
		
	}
	
	return l;
}


HaleyAPIVitalServiceImpl.prototype.listChannels = function(haleySession, callback) {
	
	var e = this._checkSession(haleySession);
	if(e) {
		callback(e);
		return;
	}
	
	//prepare channel message
	var msg = vitaljs.graphObject({type: 'http://vital.ai/ontology/vital-aimp#ListChannelsRequestMessage'});
	msg.URI = this._randomURI();
	
//	@param callback a closure (ResultList message)
	
	var requestCallback = function(message){
		
		callback(null, message);
		
		//remove it always!
		return false;
		
	}
	
	if( ! this.registerRequestCallback(haleySession, msg, requestCallback) ) {
		callback('couldn\'t register request callback');
		return;
	}
	
	var _this = this;
	
//	this.sendMessageWithRequestCallback(haleySession, aimpMessage, graphObjectsList, callback, requestCallback)
	
	this.sendMessage(this.haleySessionSingleton, msg, [], function(error){
		
		if(error) {
			
			_this.logger.error("Error when sending list channel request message: ", error);
			
			callback(error);
			
			_this.deregisterCallback(haleySession, requestCallback);
		}
		
	});
	
}


HaleyAPIVitalServiceImpl.prototype.openSession = function(callback) {
	
	if(this.haleySessionSingleton != null) {
		callback('active session already detected');
		return;
	}
	
	if(this.logEnabled) {
		this.logger.info('subscribing to stream ', this.streamName);
	}
	
	var _this = this;

	this.handlerFunction = function(msgRL){
		_this._streamHandler(msgRL);
	}
	
	//first register stream handler
	this.vitalService.callFunction(VitalService.JS_REGISTER_STREAM_HANDLER, {streamName: this.streamName, handlerFunction: this.handlerFunction}, function(succsessObj){
		
		if(_this.logEnabled) {
			_this.logger.info('registered handler to ' + _this.streamName, succsessObj);
		}
		
		_this.vitalService.callFunction(VitalService.VERTX_STREAM_SUBSCRIBE, {streamName: _this.streamName}, function(succsessObj){
			
			if(_this.logEnabled) {
				_this.logger.info("subscribed to stream " + _this.streamName, succsessObj); 
			}
			
			//session opened
			_this.haleySessionSingleton = new HaleySession(_this);
			
			if(_this.haleySessionSingleton.isAuthenticated()) {
				
				_this._sendLoggedInMsg(function(error){
					
					if(_this.logEnabled) {
						_this.logger.info("LoggedIn msg sent successfully");
					}
					
					if(error) {
						callback(error);
					} else {
						callback(null, _this.haleySessionSingleton);
					}
					
				});
				
			} else {
				
				callback(null, _this.haleySessionSingleton);
				
			}
			
			
			
		}, function(errorObj) {
			
			_this.logger.error("Error when subscribing to stream", errorObj);
			
			callback(errorObj);
			
		});

		
	}, function(error){

		_this.logger.error('couldn\'t register messages handler', error);
		
		callback(error);
		
	});
	
}


/**
 * callback is a closure (AIMP_Message, List<GraphObject>)
 */
HaleyAPIVitalServiceImpl.prototype.registerCallback = function(haleySession, classURIorList, subclasses, callback) {
	
	var e = this._checkSession(haleySession);
	if(e) {
		throw e
	}
	
	for( var i = 0 ; i < this.handlers.length; i++ ) {
		
		if( this.handlers[i].callback == callback ) {
			this.logger.warn("handler already registered ", callback);
			return false;
		}
	}
	
	var primaryURIs = {};
	
	var classesURIs = {};
	
	var inputuris = [];
	
	if(typeof(classURIorList) === 'string') {
		inputuris.push(classURIorList);
	} else {
		inputuris = classURIorList;
	}

	if(inputuris.length == 0) {
		throw "input classes URIs list must not be empty";
	}
	
	
	for(var i = 0 ; i < inputuris.length; i++) {
		
		var classURI = inputuris[i];
		
		if( ! vitaljs.isSubclassOf(classURI, 'http://vital.ai/ontology/vital-aimp#AIMPMessage')) {
			
			throw "" + classURI + " class is not a subclass of http://vital.ai/ontology/vital-aimp#AIMPMessage";
			
		}
		
		primaryURIs[classURI] = true;
		
		classesURIs[classURI] = true;
		
		
		if(subclasses) {
			
			var subclasses = vitaljs.getSubclasses({URI: classURI}, false);
			
			for(var j = 0 ; j < subclasses.length; j++) {
				
				var u = subclasses[j].URI;
				
				classesURIs[u] = true;
				
			}
			
		}
		
	}
	
	//validate if 
	
	this.handlers.push({
		callback: callback,
		primaryURIs: primaryURIs,
		classesURIs: classesURIs
	});
	
	return true;
}



HaleyAPIVitalServiceImpl.prototype.registerDefaultCallback = function(haleySession, callback) {

	var e = this._checkSession(haleySession);
	if(e) {
		throw e
	}
	
	if(callback == null) {
		if(this.defaultHandler == null) {
			return false;
		} else {
			this.defaultHandler = null;
			return true;
		}
	}
	
	if(this.defaultHandler != null && this.defaultHandler == callback) {
		return false;
	} else {
		this.defaultHandler = callback;
		return true;
	}
	
}

HaleyAPIVitalServiceImpl.prototype.registerRequestCallback = function(haleySession, aimpMessage, callback) {

	var e = this._checkSession(haleySession);
	if(e) {
		throw e
	}
	
	if(aimpMessage == null) throw "null aimpMessage";
	if(aimpMessage.URI == null) throw "null aimpMessage.URI";
	if(callback == null) throw "null callback";
	var currentCB = this.requestHandlers[aimpMessage.URI];
	
	if(currentCB == null || currentCB != callback) {
		this.requestHandlers[aimpMessage.URI] = callback;
		return true;
	} else {
		return false;
	}
	
}

//registerDefaultCallback(HaleyCallback)

HaleyAPIVitalServiceImpl.prototype._randomURI = function() {
	return 'http://vital.ai/message/msg-'+ new Date().getTime() + Math.floor(Math.random() * 100000);
}

HaleyAPIVitalServiceImpl.prototype.sendMessage = function(haleySession, aimpMessage, graphObjectsListOrCallback, callback) {
	
	var graphObjectsList = null;
	
	if(arguments.length == 3) {
		callback = graphObjectsListOrCallback;
	} else if(arguments.length == 4) {
		//ok
		graphObjectsList = graphObjectsListOrCallback;
	} else {
		this.logger.error("expected 3 or 4 arguments");
		callback("expected 3 or 4 arguments");
		return;
	}
	
	if(typeof(callback) !== 'function') {
		this.logger.error("callback param must be a function");
		callback("callback param must be a function");
		return;
	}
	
	if(aimpMessage == null) {
		callback("aimpMessage must not be null");
		return;
	}
	
	this.sendMessageImpl(haleySession, aimpMessage, graphObjectsList, 0, callback);
	
}
	
HaleyAPIVitalServiceImpl.prototype.sendMessageImpl = function(haleySession, aimpMessage, graphObjectsList, retryCount, callback) {
	
	if(!vitaljs.isSubclassOf(aimpMessage.type, 'http://vital.ai/ontology/vital-aimp#AIMPMessage')) {
		callback("aimpMessage must be an instance of AIMPMessage class, type: " + aimpMessage.type);
		return;
	}
	
	if(aimpMessage.URI == null) {
		aimpMessage.URI = this._randomURI();
	}
	
	if(aimpMessage.get('channelURI') == null && haleySession.defaultChannelURI != null) {
		aimpMessage.set('channelURI', haleySession.defaultChannelURI);
	}
	
	if(aimpMessage.get('endpointURI') == null && haleySession.defaultEndpointURI != null ) {
		aimpMessage.set('endpointURI', haleySession.defaultEndpointURI);
	}
	
	var updateTimestamp = true;
	
	var msgType = aimpMessage.type;
	
	if(msgType == 'http://vital.ai/ontology/vital-aimp#UserLoggedIn'
		|| msgType == 'http://vital.ai/ontology/vital-aimp#UserLoggedOut'
		|| msgType == 'http://vital.ai/ontology/vital-aimp#UserLeftApp') {
		updateTimestamp = false;
	} else if(msgType == 'http://vital.ai/ontology/vital-aimp#HeartbeatMessage') {
		updateTimestamp = false;
		if(this.lastActivityTimestamp != null) {
			aimpMessage.set('lastActivityTime', this.lastActivityTimestamp);
		}
	}
	
	var sessionID = haleySession.getSessionID();

	var authAccount = haleySession.getAuthAccount();
	
	
	if( authAccount != null ) {
		
		var userID = aimpMessage.get('userID');
		
		var authUserID = authAccount.get('username');

		var masterUserID = aimpMessage.get('masterUserID');
		
		if(masterUserID != null) {

			if(masterUserID != authUserID) {
				callback("aimp masterUserID must be equal to current user userID: " + masterUserID + " vs " + authUserID);
				return;
			}
			
			if(userID == null) {
				callback('aimp message userID is required when tunneling the message with masterUserID');
				return;
			}

			
			if(masterUserID == userID) {
				callback('masterUserID cannot be equal to userID: ' + masterUserID);
				return;
			}
				
		} else {
		
			if(userID == null) {
				aimpMessage.set('userID', authUserID);
			} else {
				if(userID != authUserID) {
					callback('auth userID ' + authUserID + ' does not match one set in message: ' + userID);
					return;
				}
			}
			
			var n = authAccount.get('name');
			aimpMessage.set('userName', n != null ? n : authAccount.get('username'));
			
		}
		
		
		
		
	} else {
		
		
		if( haleySession.tunnelEnabled == true ) {
			callback('tunnel must not be enabled for anonymous sessions');
			return;
		} 
//		this.defaultUserID = null;
//		//default userName for output messages
//		this.defaultUserName = null;
//		//with tunnelEnabled option the message masterUserID will be set 
//		//allowing for different userID set in the message
//		this.tunnelEnabled = false;
		
		if(aimpMessage.get('userID') == null && haleySession.defaultUserID != null) {
			aimpMessage.set('userID', haleySession.defaultUserID);
		}
		
		if(aimpMessage.get('userName') == null && haleySession.defaultUserName != null) {
			aimpMessage.set('userName', haleySession.defaultUserName);
		}
	
		
	}
	
	
	var sid = aimpMessage.get('sessionID');
	if(sid == null) {
		aimpMessage.set('sessionID', sessionID);
	} else {
		if(sid != sessionID) {
			callback('auth sessionID ' + sessionID + " does not match one set in message: " + sid);
			return;
		}
	}
	
	var rl = vitaljs.resultList();
	rl.addResult(aimpMessage);
	
	if(graphObjectsList != null) {
		for(var i = 0 ; i < graphObjectsList.length; i++) {
			var graphObject = graphObjectsList[i];
			if(graphObject == null) {
				callback("payload object cannot be null, #" + (i+1));
				return;
			}
			if(graphObject.URI == null) {
				callback("all payload objects must have URIs set, missing URI in object #" + (i+1) + " type: " + graphObject.type);
				return;
			}
			rl.addResult(graphObject);
		}
	}
	
//	this.vi
	var currentLogin = this.vitalService.getCurrentLogin();
	
	var method = currentLogin != null ? 'haley-send-message' : 'haley-send-message-anonymous';
	
	var _this = this;
	
	this.vitalService.callFunction(method, {message: rl}, function(successRL){
		
		if(_this.logEnabled) {
			_this.logger.info("message sent successfully", successRL);
		}
		
		if(updateTimestamp) {
			_this.lastActivityTimestamp = new Date().getTime();
		}
		
		for(var i = 0 ; i < _this.aimpMessageSentListeners.length; i++) {
			var listener = _this.aimpMessageSentListeners[i];
			listener(haleySession, aimpMessage, graphObjectsList);
		}
		
		callback();
		
	}, function(error){
		
		_this.logger.error("error when sending message: " + error);
		
		if( retryCount == 0 && error && ( 
				error.indexOf('error_denied') == 0 
				|| error.indexOf('Session not found') >= 0
		)) {
			
			var cachedCredentials = _this.credentialsCacheEnabled == true ? _this.cachedCredentials[sessionID] : null; 
			
			if(cachedCredentials != null) {
				
				_this.logger.info("Session not found, re-authenticating...");
				
				//this info updated in vitalservice instance
//				haleySession.authAccount = null
//				haleySession.authenticated = false
//				haleySession.authSessionID = null
//				vitalService.appSessionID = null
				
				_this.authenticateSessionWithAccountID(haleySession, cachedCredentials.username, cachedCredentials.password, cachedCredentials.accountID, function(authError, login){
			
					if(! authError ) {
						_this.logger.info("Successfully reauthenticated the session, sending the message");
						_this.sendMessageImpl(haleySession, aimpMessage, graphObjectsList, retryCount + 1, callback);
						
					} else {
						
						_this.logger.error("Reauthentication attempt failed: ", authError);
						
						callback(error);
						
						return
						
					}
					
				});
				
				return;
				
			}
			
		}
		
		callback(error);
		
	});
	
}

HaleyAPIVitalServiceImpl.prototype.sendMessageWithRequestCallback = function(haleySession, aimpMessage, graphObjectsList, callback, requestCallback) {

	var resp = this.registerRequestCallback(haleySession, aimpMessage, requestCallback);
	
	this.sendMessage(haleySession, aimpMessage, graphObjectsList, callback);
	
	return resp;
	
}

HaleyAPIVitalServiceImpl.prototype.unauthenticateSession = function(haleySession, callback) {

	var e = this._checkSession(haleySession);
	if(e) {
		callback(e);
		return;
	}
	
	var sessionID = haleySession.getSessionID();
	if(sessionID != null) {
		delete this.cachedCredentials[sessionID];
	}
	
	if(!haleySession.isAuthenticated()) {
		callback('session not authenticated');
		return;
	}

	
	//first send logged out message
	var msg = vitaljs.graphObject({type: 'http://vital.ai/ontology/vital-aimp#UserLoggedOut'});

	var _this = this;
	
	this.sendMessage(haleySession, msg, [], function(error){
		if(error) {
			_this.logger.error("Error when sending logged out msg");
			callback(error);
			return;
		}
		
		_this.vitalService.callFunction(VitalServiceWebsocketImpl.vitalauth_logout, {}, function(logoutSuccess){
			
			if(_this.logEnabled) {
				_this.logger.info("Logout function success", logoutSuccess);
			}
			
			callback();
			
		}, function(logoutError) {
			
			_this.logger.error("Logout function error", logoutError);
			
			callback(logoutError);
			
		});
		
		
	});
	
	

}

//uploadBinary(HaleySession, Channel)
//uploadBinary(HaleySession, Channel, HaleyCallback)




HaleyAPIVitalServiceImpl.prototype.addReconnectListener = function(reconnectListener) {


	if(this.reconnectListeners.indexOf(reconnectListener) >= 0) {
		if(this.logEnabled) this.logger.info("Reconnect listner already added");
		return false;
		
	} else {
		
		if(this.logEnabled) this.logger.info("New reconnect listener added");
		
		this.reconnectListeners.push(reconnectListener);
		
		return true;
		
	}
	
}


HaleyAPIVitalServiceImpl.prototype.removeReconnectListener = function(reconnectListener) {

	var indexOf = this.reconnectListeners.indexOf(reconnectListener);
	
	if(indexOf < 0) {
		return false;
	}
	
	this.reconnectListeners.splice(indexOf, 1);
	
	return true;
	
}

HaleyAPIVitalServiceImpl.prototype._listServerDomainModelsJQueryImpl = function(callback) {
	
	var _this = this;
	
	this.logger.info("Getting server domains list from saas server");

	if(typeof(document) === 'undefined') {
		callback("No document object - client side listServerDomainModels not available");
		return;
	}
	
	if(typeof(jQuery) === 'undefined') {
		callback("No jQuery object - client side listServerDomainModels not available");
		return;
	}
	
    var parser  = document.createElement("a");
    parser.href = this.vitalService.impl.url;
    
    var domainsURL = parser.protocol + '//' + parser.host + '/domains';
    
	//Load the request module
	var jqxhr = $.ajax( { method: 'GET', url: domainsURL, cache: false} )
	.done(function(body) {
		try {
			_this.logger.info("domains objects", body);
			var parsed = body;
   			var domainsList = [];
   			for(var i = 0 ; i < parsed.length; i++) {
   				var obj = parsed[i];
   				domainsList.push(vitaljs.graphObject(obj));
   			}
    			
			callback(null, domainsList);
				
   		} catch(e) {
   			callback("error when parsing domains json: " + e, null);
   		}
	}).fail(function(jqXHR, textStatus) {
		_this.logger.error("domains check failed: " + textStatus);
    	callback(textStatus, null);
	});
		
}

HaleyAPIVitalServiceImpl.prototype.listServerDomainModels = function(callback) {

	var _this = this;
	
	this.logger.info("Getting server domains list");
	
	if(false) {}
	
	if(false) {}
	
	var domainsURL = this.saasServerURL + '/domains';

	//Load the request module
	// var request = require('request');

	
	// request({
	//     url: domainsURL,
	//     qs: {}, //Query string data
	//     method: 'GET'
	// }, function(error, response, body){
	//     if(error) {
	//     	_this.logger.error("Error when getting user profile data", error);
	//     	callback(error, null);
	//     } else {
	//     	if(response.statusCode == 200) {
	    		
	//     		_this.logger.info(response.statusCode, ( body && body.length > 100 ) ? ( body.substring(0, 97) + "...") : body);
	    		
	//     		try {
	    			
	//     			var parsed = JSON.parse(body);
	//     			var domainsList = [];
	//     			for(var i = 0 ; i < parsed.length; i++) {
	//     				var obj = parsed[i];
	//     				domainsList.push(vitaljs.graphObject(obj));
	//     			}
	    			
    // 				callback(null, domainsList);
    				
	//     		} catch(e) {
	//     			callback("error when parsing domains json: " + e, null);
	//     		}
	//     	} else {
	//     		_this.logger.error("Error when getting domains data " + response.statusCode, body);
	//     	}
	//     }
	// });
	
}


HaleyAPIVitalServiceImpl.prototype.uploadFileInBrowser = function(haleySession, fileQuestionMessage, fileObject, callback) {
	this._uploadFileImpl(true, false, haleySession, fileQuestionMessage, fileObject, callback);
}	
HaleyAPIVitalServiceImpl.prototype.uploadFile = function(haleySession, fileQuestionMessage, fileObject, callback) {
	this._uploadFileImpl(false, false, haleySession, fileQuestionMessage, fileObject, callback);
}

HaleyAPIVitalServiceImpl.prototype.uploadFileInCordova = function(haleySession, fileQuestionMessage, fileObject, callback) {
	this._uploadFileImpl(false, true, haleySession, fileQuestionMessage, fileObject, callback);
}

HaleyAPIVitalServiceImpl.prototype._uploadFileImpl = function(isBrowser, isCordova, haleySession, fileQuestionMessage, fileObject, callback) {	
	
	var _this = this;
	
	var progressListener = fileObject.progressListener;
	
	if(isBrowser) {
		
		if( fileObject.file == null ) {
			callback("no form 'file' object in fileObject param");
			return;
		}
		
	} else {
		
		//cordova and nodejs
		
		if( fileObject.filePath == null || fileObject.filePath.length == 0 ) {
			callback("no 'filePath' string in  fileObject param");
			return;
		}
		
	}
	
	if(fileQuestionMessage == null || fileQuestionMessage.length < 2) {
		callback("expected at least two elements in fileQuestionMessage");
		return;
	}
	
	var questionMessage = fileQuestionMessage[0];
	if(questionMessage.type != 'http://vital.ai/ontology/vital-aimp#QuestionMessage') {
		callback("expected a QuestionMessage: " + questionMessage.type);
		return;
	}
	
	var fileQuestion = fileQuestionMessage[1];
	if(fileQuestion.type != 'http://vital.ai/ontology/vital-aimp#FileQuestion') {
		callback("not a FileQuestion: " + fileQuestion.type);
		return;
	}
	
	var scope = fileQuestion.get('fileScope');
	if(!scope) {
		callback("no file scope: " + scope);
		return;
	}
	
	var accountURIs = fileObject.accountURIs;
    
    
    var fileNodeClass = fileObject.fileNodeClass;
    if(!fileNodeClass) {
    	fileNodeClass = 'http://vital.ai/ontology/vital#FileNode';
    }
    var parentNodeURI = fileObject.parentNodeURI;
    
    var url = this.saasServerURL + '/fileupload/';
    
//    url += '?fileNodeClass=' + encodeURIComponent(fileNodeClass);
    url += '?temporary=true'
//    url += '&scope=' + scope;
    
    var currentLogin = this.vitalService.getCurrentLogin();
    
    if(currentLogin != null) {
    	
    	url += '&authSessionID=' + encodeURIComponent(this.getAuthSessionID(haleySession));
    	
    } else {
    	
    	//anonymous upload?
    	url += '&sessionID=' + encodeURIComponent(this.getSessionID(haleySession));
    	
    }
    
    
    
//    if(accountURIs != null && accountURIs.length > 0) {
//    	url += '&accountURIs=' + encodeURIComponent(accountURIs.join(','))
//    }
//
//    if(parentNodeURI) {
//    	url += '&parentNodeURI=' + encodeURIComponent(parentNodeURI); 
//    }
//    
    
    
    this.logger.info('upload URL: ' + url);
    
    //old way
	var onFileNodeURI = function(fileNodeURI, newFileNode){
		
		//file node URI created, assemble response
		
		var am = vitaljs.graphObject({type: 'http://vital.ai/ontology/vital-aimp#AnswerMessage'});
		am.URI = _this._randomURI();
		am.set('replyTo', questionMessage.URI);
		am.set('channelURI', questionMessage.get('channelURI'))
		am.set('endpointURI', questionMessage.get('endpointURI'));
		

		var fa = vitaljs.graphObject({type: 'http://vital.ai/ontology/vital-aimp#FileAnswer'});
		fa.URI = _this._randomURI();
		fa.set('fileNodeURI', fileNodeURI)
		
		_this.sendMessage(_this.haleySessionSingleton, am, [fa], function(error){
			
			if(error) {
				
				var errMsg = "Error when sending file answer: " + error;
				
				_this.logger.error(errMsg);
				
				callback(errMsg);
				
			} else {
				
				//answer accepted
				callback(null, newFileNode);
				
			}
			
		});
		
		//the dialog has to answer with a filenode now
		
		
	};
	
	var onFileDataResponse = function(data) {
	
		_this.logger.info('file data received: ', data);
	
		var am = vitaljs.graphObject({type: 'http://vital.ai/ontology/vital-aimp#AnswerMessage'});
		am.URI = _this._randomURI();
		am.set('replyTo', questionMessage.URI);
		am.set('channelURI', questionMessage.get('channelURI'))
		am.set('endpointURI', questionMessage.get('endpointURI'));
		
//		var fileName.fileName

		var fa = vitaljs.graphObject({type: 'http://vital.ai/ontology/vital-aimp#FileAnswer'});
		fa.URI = _this._randomURI();
		fa.set('fileNodeClassURI', fileNodeClass);
		fa.set('parentObjectURI', parentNodeURI);
		fa.set('url', data.url);
		fa.set('fileName', data.fileName);
		fa.set('fileType', data.fileType);
		fa.set('fileLength', data.fileLength);
		fa.set('deleteOnSuccess', true);
		
		_this.sendMessageWithRequestCallback(_this.haleySessionSingleton, am, [fa], function(error){
			
			if(error) {
				
				var errMsg = "Error when sending file answer: " + error;
				
				_this.logger.error(errMsg);
				
//				callback(errMsg);
				
			} else {
				
				_this.logger.info('file upload answer sent');
				//answer accepted
//				callback(null, newFileNode);
				
			}
			
		}, function(msgRL){
			
			var msg = msgRL.first();
			
			_this.logger.info('file upload response:', msg);
			
			if(msg.type != 'http://vital.ai/ontology/vital-aimp#MetaQLResultsMessage') {
				return true;
			}
			
			var status = msg.get('status');
			
			if(status != 'ok') {
				var statusMessage = msg.get('statusMessage');
				if(!statusMessage) statusMessage = 'unknow file upload error';
				callback(statusMessage);
				return false;
			}
			
			var fileNode = null;
			
			var fileNodes = msgRL.iterator('http://vital.ai/ontology/vital#FileNode');
			
			if(fileNodes.length > 0) {
				fileNode = fileNodes[0];
			}
			
			if(fileNode == null) {
				callback('no file node in the response');
				return false;
			}
			
			callback(null, fileNode);
			
			return false;
			
		});
		
		
	}
	
	if(isBrowser) {
		
	    var xhr = new XMLHttpRequest();
	    _this.logger.info('default timeout: ', xhr.timeout);
		
	    var multipart = true;
	    
		// progress bar
	    if(xhr.upload && progressListener != null) {
	    	xhr.upload.addEventListener("progress", function(e) {
	    		progressListener(e.loaded, e.total);
//	    		var pc = parseInt(100 - (e.loaded / e.total * 100));
//	    		progress.style.backgroundPosition = pc + "% 0";
	    	}, false);
	    	
	    	multipart = false;
	    	
	    	url += '&multipart=false&fileName=' + encodeURIComponent(fileObject.file.name);
	    	
	    }
	    
		xhr.open("POST", url, true);
		xhr.onreadystatechange = function() {
			
			if (xhr.readyState == 4) {
				
				var error = null;
				
				var r = null;
				
//				var fileNodeURI = null;
//				
//				var newFileNode = null;
				
				var fileData = null;
				
				if(xhr.status == 200) {
					
					try {
						
						r = JSON.parse(xhr.responseText)
						
						if(r.error) {
							error = r.error
						} else {
							
							if(r.temporary == true) {
								
								fileData = r;
								
							} else {
								
								error = 'only temporary response accepted';
								
//								fileNodeURI = r.fileNodeURI;
//								
//								newFileNode = vitaljs.graphObject( r.fileNode );
								
							}
							
							
							
						}
						
					} catch(e) {
						
						error = 'response error: ' + e.message;
						
					}
					//parse json
					
				} else {
					
					error = 'HTTP status ' + xhr.status + ' - ' + xhr.responseText
					
				}

				if(error) {
					
					callback(error);

				} else {
					
//					onFileNodeURI(fileNodeURI, newFileNode);
					
					onFileDataResponse(fileData);
					
				}

			}

		};

		if(multipart) {
			
			var fd = new FormData();
			fd.append('upload_file', fileObject.file);
			xhr.send(fd);
			
		} else {
			
			xhr.send(fileObject.file);
			
		}
		
	} else if(isCordova) {
		
		if(typeof( window.FileTransfer ) === 'undefined') {
			
			callback('No FileTransfer class - cordova-plugin-file-transfer may not be installed', null);
			return;
			
		}
		
		
		function win(r) {
			
			var body = r.response;
		    console.log("FileUpload Code: " + r.responseCode);
		    console.log("FileUpload Response: " + body);
		    console.log("FileUpload BytesSent: " + r.bytesSent);
		    
		    var error = null;
			
			try {
				
				r = JSON.parse(body);
				
				if(r.error) {
					error = r.error
				} else {
					
					if(r.temporary == true) {
						
						fileData = r;
						
					} else {
						
						error = 'only temporary response accepted';
						
					}
					
				}
				
			} catch(e) {
				
				error = 'response error: ' + e.message;
				
			}
			
			if(error) {
				
				callback(error);

			} else {
				
				onFileDataResponse(fileData);
				
			}
		    
		}

		function fail(error) {
/*
 * 1 = FileTransferError.FILE_NOT_FOUND_ERR
2 = FileTransferError.INVALID_URL_ERR
3 = FileTransferError.CONNECTION_ERR
4 = FileTransferError.ABORT_ERR
5 = FileTransferError.NOT_MODIFIED_ERR
 */
			console.error("file upload error", error);
			
			var errorMsg = "Error occurred: Code = " + error.code + ' HTTP status: ' + error.http_status + ' body ' + error.body;

			callback(errorMsg, null);
			
		}

		var fileURL = fileObject.filePath;
		
		var options = new FileUploadOptions();
		options.fileKey="upload_file";
		options.fileName=fileURL.substr(fileURL.lastIndexOf('/')+1);
		//TODO MIME TYPE
//		options.mimeType="text/plain";

//		var headers={'headerParam':'headerValue'};
//		options.headers = headers;

		var ft = new FileTransfer();
		if(progressListener != null) {
			ft.onprogress = function(progressEvent) {
			    if (progressEvent.lengthComputable) {
			    	progressListener(progressEvent.loaded, progressEvent.total);
//			        loadingStatus.setPercentage(progressEvent.loaded / progressEvent.total);
			    } else {
//			        loadingStatus.increment();
			    }
			};
		}
		
		ft.upload(fileURL, url, win, fail, options);
		
	}
	/* else {
	
		var fs = require('fs');
		
		var request = require('request');
		
		var formData = {};
		
		try {
			_this.logger.info("uploading file from location: " + fileObject.filePath);
			var rs = fs.createReadStream(fileObject.filePath);
			_this.logger.info("readstream", rs);
			formData['upload_file'] = rs;
		} catch(e) {
			_this.logger.error("error when starting upload: ", e);
			callback("error when starting upload: " + e.message);
			return;
		}
		
		var req = request.post({url:url, formData: formData}, function (err, resp, body) {
		  
			if (err) {
				_this.logger.error(err);
				callback("Error when uploading file: " + err);
				return;
			}
			
			_this.logger.info('Server response: ' + body);
			
			var fileData = null;
			
			var error = null;
			
			try {
				
				r = JSON.parse(body);
				
				if(r.error) {
					error = r.error
				} else {
					
					if(r.temporary == true) {
						
						fileData = r;
						
					} else {
						
						error = 'only temporary response accepted';
						
					}
					
				}
				
			} catch(e) {
				
				error = 'response error: ' + e.message;
				
			}
			
			if(error) {
				
				callback(error);

			} else {
				
				onFileDataResponse(fileData);
				
			}
			
		});
	}
	*/
	
}


HaleyAPIVitalServiceImpl.prototype.cancelFileUpload = function(haleySession, fileQuestionMessage, callback) {

	var _this = this;
	
	var questionMessage = fileQuestionMessage[0];
	
	//file node URI created, assemble response
	var am = vitaljs.graphObject({type: 'http://vital.ai/ontology/vital-aimp#AnswerMessage'});
	am.URI = this._randomURI();
	
	
	am.set('replyTo', questionMessage.URI);
	am.set('channelURI', questionMessage.get('channelURI'))
	am.set('endpointURI', questionMessage.get('endpointURI'));
	am.set('answerSkipped', true);

	var fa = vitaljs.graphObject({type: 'http://vital.ai/ontology/vital-aimp#FileAnswer'});
	fa.URI = this._randomURI();
	fa.set('fileNodeURI', null)
	
	this.sendMessage(this.haleySessionSingleton, am, [fa], function(error){
		
		if(error) {
			
			var errMsg = "Error when sending file answer skip: " + error;
			
			_this.logger.error(errMsg);
			
			callback(errMsg);
			
		} else {
			
			//answer skip accepted
			callback(null);
			
		}
		
	});
	
}


HaleyAPIVitalServiceImpl.s3URLPattern = /^s3\:\/\/([^\/]+)\/(.+)$/;

HaleyAPIVitalServiceImpl.prototype.getFileNodeDownloadURL = function(haleySession, fileNode) {

	var scope = fileNode.get('fileScope');
	
	if(!scope) scope = 'public';
	
	if('PRIVATE' === scope.toUpperCase()) {
			
		return this.getFileNodeURIDownloadURL(haleySession, fileNode.URI);
		
	} else {
		
		//just convert s3 to public https link
		var fileURL = fileNode.get('fileURL');
		var res = HaleyAPIVitalServiceImpl.s3URLPattern.exec(fileURL);
		if(res != null) {
			
			var bucket = res[1];
			var key = res[2];
		
			var keyEscaped = key.replace(new RegExp('%', 'g'), '%25')
			
			return 'https://' + bucket + '.s3.amazonaws.com/' + keyEscaped;
			
		}
		
		return fileURL;
		
	}
	
	
}

/**
 * Returns the download URL for given file node URI
 */
HaleyAPIVitalServiceImpl.prototype.getFileNodeURIDownloadURL = function(haleySession, fileNodeURI) {

	var url = this.saasServerURL + '/filedownload?fileURI=' + encodeURIComponent(fileNodeURI);
	
	if(haleySession.isAuthenticated()) {
		
		url += '&authSessionID=' + encodeURIComponent(this.getAuthSessionID(haleySession));
	    
	} else {
		
		url += '&sessionID=' + encodeURIComponent(this.getSessionID(haleySession));
		
	}
	
	return url;
	
	
}

/**
 * add a listener notified with (error, haleySession, aimpMessage, payload)
 * returns true if added, false if already added
 */
HaleyAPIVitalServiceImpl.prototype.addAIMPMessageSentListener = function(listener) {
	if( this.aimpMessageSentListeners.indexOf(listener) >= 0) return false;
	this.aimpMessageSentListeners.push(listener);
	return true;
}

/**
 * remove an AIMP message sent listener
 * returns true if removed, false if was not added 
 */
HaleyAPIVitalServiceImpl.prototype.removeAIMPMessageSentListener = function(listener) {
	var index = this.aimpMessageSentListeners.indexOf(listener);
	if(index < 0) return false;
	this.aimpMessageSentListeners.splice(index, 1);
	return true;
} 


if(true) {

//	if(typeof(VitalService) === 'undefined') {

		//VitalService = require(__dirname + '/../vitalservice-js/vitalservice-0.2.304.js');
		
//	}
	
//	if(typeof(VitalServiceWebsocketImpl) === 'undefined') {
		
		//VitalServiceWebsocketImpl = require(__dirname + '/../vitalservice-js/vitalservice-0.2.304.js');
		
//	}
	
	
	module.exports = HaleyAPIVitalServiceImpl;
	
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var punycode = __webpack_require__(6);
var util = __webpack_require__(9);

exports.parse = urlParse;
exports.resolve = urlResolve;
exports.resolveObject = urlResolveObject;
exports.format = urlFormat;

exports.Url = Url;

function Url() {
  this.protocol = null;
  this.slashes = null;
  this.auth = null;
  this.host = null;
  this.port = null;
  this.hostname = null;
  this.hash = null;
  this.search = null;
  this.query = null;
  this.pathname = null;
  this.path = null;
  this.href = null;
}

// Reference: RFC 3986, RFC 1808, RFC 2396

// define these here so at least they only have to be
// compiled once on the first module load.
var protocolPattern = /^([a-z0-9.+-]+:)/i,
    portPattern = /:[0-9]*$/,

    // Special case for a simple path URL
    simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,

    // RFC 2396: characters reserved for delimiting URLs.
    // We actually just auto-escape these.
    delims = ['<', '>', '"', '`', ' ', '\r', '\n', '\t'],

    // RFC 2396: characters not allowed for various reasons.
    unwise = ['{', '}', '|', '\\', '^', '`'].concat(delims),

    // Allowed by RFCs, but cause of XSS attacks.  Always escape these.
    autoEscape = ['\''].concat(unwise),
    // Characters that are never ever allowed in a hostname.
    // Note that any invalid chars are also handled, but these
    // are the ones that are *expected* to be seen, so we fast-path
    // them.
    nonHostChars = ['%', '/', '?', ';', '#'].concat(autoEscape),
    hostEndingChars = ['/', '?', '#'],
    hostnameMaxLen = 255,
    hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/,
    hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
    // protocols that can allow "unsafe" and "unwise" chars.
    unsafeProtocol = {
      'javascript': true,
      'javascript:': true
    },
    // protocols that never have a hostname.
    hostlessProtocol = {
      'javascript': true,
      'javascript:': true
    },
    // protocols that always contain a // bit.
    slashedProtocol = {
      'http': true,
      'https': true,
      'ftp': true,
      'gopher': true,
      'file': true,
      'http:': true,
      'https:': true,
      'ftp:': true,
      'gopher:': true,
      'file:': true
    },
    querystring = __webpack_require__(10);

function urlParse(url, parseQueryString, slashesDenoteHost) {
  if (url && util.isObject(url) && url instanceof Url) return url;

  var u = new Url;
  u.parse(url, parseQueryString, slashesDenoteHost);
  return u;
}

Url.prototype.parse = function(url, parseQueryString, slashesDenoteHost) {
  if (!util.isString(url)) {
    throw new TypeError("Parameter 'url' must be a string, not " + typeof url);
  }

  // Copy chrome, IE, opera backslash-handling behavior.
  // Back slashes before the query string get converted to forward slashes
  // See: https://code.google.com/p/chromium/issues/detail?id=25916
  var queryIndex = url.indexOf('?'),
      splitter =
          (queryIndex !== -1 && queryIndex < url.indexOf('#')) ? '?' : '#',
      uSplit = url.split(splitter),
      slashRegex = /\\/g;
  uSplit[0] = uSplit[0].replace(slashRegex, '/');
  url = uSplit.join(splitter);

  var rest = url;

  // trim before proceeding.
  // This is to support parse stuff like "  http://foo.com  \n"
  rest = rest.trim();

  if (!slashesDenoteHost && url.split('#').length === 1) {
    // Try fast path regexp
    var simplePath = simplePathPattern.exec(rest);
    if (simplePath) {
      this.path = rest;
      this.href = rest;
      this.pathname = simplePath[1];
      if (simplePath[2]) {
        this.search = simplePath[2];
        if (parseQueryString) {
          this.query = querystring.parse(this.search.substr(1));
        } else {
          this.query = this.search.substr(1);
        }
      } else if (parseQueryString) {
        this.search = '';
        this.query = {};
      }
      return this;
    }
  }

  var proto = protocolPattern.exec(rest);
  if (proto) {
    proto = proto[0];
    var lowerProto = proto.toLowerCase();
    this.protocol = lowerProto;
    rest = rest.substr(proto.length);
  }

  // figure out if it's got a host
  // user@server is *always* interpreted as a hostname, and url
  // resolution will treat //foo/bar as host=foo,path=bar because that's
  // how the browser resolves relative URLs.
  if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
    var slashes = rest.substr(0, 2) === '//';
    if (slashes && !(proto && hostlessProtocol[proto])) {
      rest = rest.substr(2);
      this.slashes = true;
    }
  }

  if (!hostlessProtocol[proto] &&
      (slashes || (proto && !slashedProtocol[proto]))) {

    // there's a hostname.
    // the first instance of /, ?, ;, or # ends the host.
    //
    // If there is an @ in the hostname, then non-host chars *are* allowed
    // to the left of the last @ sign, unless some host-ending character
    // comes *before* the @-sign.
    // URLs are obnoxious.
    //
    // ex:
    // http://a@b@c/ => user:a@b host:c
    // http://a@b?@c => user:a host:c path:/?@c

    // v0.12 TODO(isaacs): This is not quite how Chrome does things.
    // Review our test case against browsers more comprehensively.

    // find the first instance of any hostEndingChars
    var hostEnd = -1;
    for (var i = 0; i < hostEndingChars.length; i++) {
      var hec = rest.indexOf(hostEndingChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
        hostEnd = hec;
    }

    // at this point, either we have an explicit point where the
    // auth portion cannot go past, or the last @ char is the decider.
    var auth, atSign;
    if (hostEnd === -1) {
      // atSign can be anywhere.
      atSign = rest.lastIndexOf('@');
    } else {
      // atSign must be in auth portion.
      // http://a@b/c@d => host:b auth:a path:/c@d
      atSign = rest.lastIndexOf('@', hostEnd);
    }

    // Now we have a portion which is definitely the auth.
    // Pull that off.
    if (atSign !== -1) {
      auth = rest.slice(0, atSign);
      rest = rest.slice(atSign + 1);
      this.auth = decodeURIComponent(auth);
    }

    // the host is the remaining to the left of the first non-host char
    hostEnd = -1;
    for (var i = 0; i < nonHostChars.length; i++) {
      var hec = rest.indexOf(nonHostChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
        hostEnd = hec;
    }
    // if we still have not hit it, then the entire thing is a host.
    if (hostEnd === -1)
      hostEnd = rest.length;

    this.host = rest.slice(0, hostEnd);
    rest = rest.slice(hostEnd);

    // pull out port.
    this.parseHost();

    // we've indicated that there is a hostname,
    // so even if it's empty, it has to be present.
    this.hostname = this.hostname || '';

    // if hostname begins with [ and ends with ]
    // assume that it's an IPv6 address.
    var ipv6Hostname = this.hostname[0] === '[' &&
        this.hostname[this.hostname.length - 1] === ']';

    // validate a little.
    if (!ipv6Hostname) {
      var hostparts = this.hostname.split(/\./);
      for (var i = 0, l = hostparts.length; i < l; i++) {
        var part = hostparts[i];
        if (!part) continue;
        if (!part.match(hostnamePartPattern)) {
          var newpart = '';
          for (var j = 0, k = part.length; j < k; j++) {
            if (part.charCodeAt(j) > 127) {
              // we replace non-ASCII char with a temporary placeholder
              // we need this to make sure size of hostname is not
              // broken by replacing non-ASCII by nothing
              newpart += 'x';
            } else {
              newpart += part[j];
            }
          }
          // we test again with ASCII char only
          if (!newpart.match(hostnamePartPattern)) {
            var validParts = hostparts.slice(0, i);
            var notHost = hostparts.slice(i + 1);
            var bit = part.match(hostnamePartStart);
            if (bit) {
              validParts.push(bit[1]);
              notHost.unshift(bit[2]);
            }
            if (notHost.length) {
              rest = '/' + notHost.join('.') + rest;
            }
            this.hostname = validParts.join('.');
            break;
          }
        }
      }
    }

    if (this.hostname.length > hostnameMaxLen) {
      this.hostname = '';
    } else {
      // hostnames are always lower case.
      this.hostname = this.hostname.toLowerCase();
    }

    if (!ipv6Hostname) {
      // IDNA Support: Returns a punycoded representation of "domain".
      // It only converts parts of the domain name that
      // have non-ASCII characters, i.e. it doesn't matter if
      // you call it with a domain that already is ASCII-only.
      this.hostname = punycode.toASCII(this.hostname);
    }

    var p = this.port ? ':' + this.port : '';
    var h = this.hostname || '';
    this.host = h + p;
    this.href += this.host;

    // strip [ and ] from the hostname
    // the host field still retains them, though
    if (ipv6Hostname) {
      this.hostname = this.hostname.substr(1, this.hostname.length - 2);
      if (rest[0] !== '/') {
        rest = '/' + rest;
      }
    }
  }

  // now rest is set to the post-host stuff.
  // chop off any delim chars.
  if (!unsafeProtocol[lowerProto]) {

    // First, make 100% sure that any "autoEscape" chars get
    // escaped, even if encodeURIComponent doesn't think they
    // need to be.
    for (var i = 0, l = autoEscape.length; i < l; i++) {
      var ae = autoEscape[i];
      if (rest.indexOf(ae) === -1)
        continue;
      var esc = encodeURIComponent(ae);
      if (esc === ae) {
        esc = escape(ae);
      }
      rest = rest.split(ae).join(esc);
    }
  }


  // chop off from the tail first.
  var hash = rest.indexOf('#');
  if (hash !== -1) {
    // got a fragment string.
    this.hash = rest.substr(hash);
    rest = rest.slice(0, hash);
  }
  var qm = rest.indexOf('?');
  if (qm !== -1) {
    this.search = rest.substr(qm);
    this.query = rest.substr(qm + 1);
    if (parseQueryString) {
      this.query = querystring.parse(this.query);
    }
    rest = rest.slice(0, qm);
  } else if (parseQueryString) {
    // no query string, but parseQueryString still requested
    this.search = '';
    this.query = {};
  }
  if (rest) this.pathname = rest;
  if (slashedProtocol[lowerProto] &&
      this.hostname && !this.pathname) {
    this.pathname = '/';
  }

  //to support http.request
  if (this.pathname || this.search) {
    var p = this.pathname || '';
    var s = this.search || '';
    this.path = p + s;
  }

  // finally, reconstruct the href based on what has been validated.
  this.href = this.format();
  return this;
};

// format a parsed object into a url string
function urlFormat(obj) {
  // ensure it's an object, and not a string url.
  // If it's an obj, this is a no-op.
  // this way, you can call url_format() on strings
  // to clean up potentially wonky urls.
  if (util.isString(obj)) obj = urlParse(obj);
  if (!(obj instanceof Url)) return Url.prototype.format.call(obj);
  return obj.format();
}

Url.prototype.format = function() {
  var auth = this.auth || '';
  if (auth) {
    auth = encodeURIComponent(auth);
    auth = auth.replace(/%3A/i, ':');
    auth += '@';
  }

  var protocol = this.protocol || '',
      pathname = this.pathname || '',
      hash = this.hash || '',
      host = false,
      query = '';

  if (this.host) {
    host = auth + this.host;
  } else if (this.hostname) {
    host = auth + (this.hostname.indexOf(':') === -1 ?
        this.hostname :
        '[' + this.hostname + ']');
    if (this.port) {
      host += ':' + this.port;
    }
  }

  if (this.query &&
      util.isObject(this.query) &&
      Object.keys(this.query).length) {
    query = querystring.stringify(this.query);
  }

  var search = this.search || (query && ('?' + query)) || '';

  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  // only the slashedProtocols get the //.  Not mailto:, xmpp:, etc.
  // unless they had them to begin with.
  if (this.slashes ||
      (!protocol || slashedProtocol[protocol]) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname.charAt(0) !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash.charAt(0) !== '#') hash = '#' + hash;
  if (search && search.charAt(0) !== '?') search = '?' + search;

  pathname = pathname.replace(/[?#]/g, function(match) {
    return encodeURIComponent(match);
  });
  search = search.replace('#', '%23');

  return protocol + host + pathname + search + hash;
};

function urlResolve(source, relative) {
  return urlParse(source, false, true).resolve(relative);
}

Url.prototype.resolve = function(relative) {
  return this.resolveObject(urlParse(relative, false, true)).format();
};

function urlResolveObject(source, relative) {
  if (!source) return relative;
  return urlParse(source, false, true).resolveObject(relative);
}

Url.prototype.resolveObject = function(relative) {
  if (util.isString(relative)) {
    var rel = new Url();
    rel.parse(relative, false, true);
    relative = rel;
  }

  var result = new Url();
  var tkeys = Object.keys(this);
  for (var tk = 0; tk < tkeys.length; tk++) {
    var tkey = tkeys[tk];
    result[tkey] = this[tkey];
  }

  // hash is always overridden, no matter what.
  // even href="" will remove it.
  result.hash = relative.hash;

  // if the relative url is empty, then there's nothing left to do here.
  if (relative.href === '') {
    result.href = result.format();
    return result;
  }

  // hrefs like //foo/bar always cut to the protocol.
  if (relative.slashes && !relative.protocol) {
    // take everything except the protocol from relative
    var rkeys = Object.keys(relative);
    for (var rk = 0; rk < rkeys.length; rk++) {
      var rkey = rkeys[rk];
      if (rkey !== 'protocol')
        result[rkey] = relative[rkey];
    }

    //urlParse appends trailing / to urls like http://www.example.com
    if (slashedProtocol[result.protocol] &&
        result.hostname && !result.pathname) {
      result.path = result.pathname = '/';
    }

    result.href = result.format();
    return result;
  }

  if (relative.protocol && relative.protocol !== result.protocol) {
    // if it's a known url protocol, then changing
    // the protocol does weird things
    // first, if it's not file:, then we MUST have a host,
    // and if there was a path
    // to begin with, then we MUST have a path.
    // if it is file:, then the host is dropped,
    // because that's known to be hostless.
    // anything else is assumed to be absolute.
    if (!slashedProtocol[relative.protocol]) {
      var keys = Object.keys(relative);
      for (var v = 0; v < keys.length; v++) {
        var k = keys[v];
        result[k] = relative[k];
      }
      result.href = result.format();
      return result;
    }

    result.protocol = relative.protocol;
    if (!relative.host && !hostlessProtocol[relative.protocol]) {
      var relPath = (relative.pathname || '').split('/');
      while (relPath.length && !(relative.host = relPath.shift()));
      if (!relative.host) relative.host = '';
      if (!relative.hostname) relative.hostname = '';
      if (relPath[0] !== '') relPath.unshift('');
      if (relPath.length < 2) relPath.unshift('');
      result.pathname = relPath.join('/');
    } else {
      result.pathname = relative.pathname;
    }
    result.search = relative.search;
    result.query = relative.query;
    result.host = relative.host || '';
    result.auth = relative.auth;
    result.hostname = relative.hostname || relative.host;
    result.port = relative.port;
    // to support http.request
    if (result.pathname || result.search) {
      var p = result.pathname || '';
      var s = result.search || '';
      result.path = p + s;
    }
    result.slashes = result.slashes || relative.slashes;
    result.href = result.format();
    return result;
  }

  var isSourceAbs = (result.pathname && result.pathname.charAt(0) === '/'),
      isRelAbs = (
          relative.host ||
          relative.pathname && relative.pathname.charAt(0) === '/'
      ),
      mustEndAbs = (isRelAbs || isSourceAbs ||
                    (result.host && relative.pathname)),
      removeAllDots = mustEndAbs,
      srcPath = result.pathname && result.pathname.split('/') || [],
      relPath = relative.pathname && relative.pathname.split('/') || [],
      psychotic = result.protocol && !slashedProtocol[result.protocol];

  // if the url is a non-slashed url, then relative
  // links like ../.. should be able
  // to crawl up to the hostname, as well.  This is strange.
  // result.protocol has already been set by now.
  // Later on, put the first path part into the host field.
  if (psychotic) {
    result.hostname = '';
    result.port = null;
    if (result.host) {
      if (srcPath[0] === '') srcPath[0] = result.host;
      else srcPath.unshift(result.host);
    }
    result.host = '';
    if (relative.protocol) {
      relative.hostname = null;
      relative.port = null;
      if (relative.host) {
        if (relPath[0] === '') relPath[0] = relative.host;
        else relPath.unshift(relative.host);
      }
      relative.host = null;
    }
    mustEndAbs = mustEndAbs && (relPath[0] === '' || srcPath[0] === '');
  }

  if (isRelAbs) {
    // it's absolute.
    result.host = (relative.host || relative.host === '') ?
                  relative.host : result.host;
    result.hostname = (relative.hostname || relative.hostname === '') ?
                      relative.hostname : result.hostname;
    result.search = relative.search;
    result.query = relative.query;
    srcPath = relPath;
    // fall through to the dot-handling below.
  } else if (relPath.length) {
    // it's relative
    // throw away the existing file, and take the new path instead.
    if (!srcPath) srcPath = [];
    srcPath.pop();
    srcPath = srcPath.concat(relPath);
    result.search = relative.search;
    result.query = relative.query;
  } else if (!util.isNullOrUndefined(relative.search)) {
    // just pull out the search.
    // like href='?foo'.
    // Put this after the other two cases because it simplifies the booleans
    if (psychotic) {
      result.hostname = result.host = srcPath.shift();
      //occationaly the auth can get stuck only in host
      //this especially happens in cases like
      //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
      var authInHost = result.host && result.host.indexOf('@') > 0 ?
                       result.host.split('@') : false;
      if (authInHost) {
        result.auth = authInHost.shift();
        result.host = result.hostname = authInHost.shift();
      }
    }
    result.search = relative.search;
    result.query = relative.query;
    //to support http.request
    if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
      result.path = (result.pathname ? result.pathname : '') +
                    (result.search ? result.search : '');
    }
    result.href = result.format();
    return result;
  }

  if (!srcPath.length) {
    // no path at all.  easy.
    // we've already handled the other stuff above.
    result.pathname = null;
    //to support http.request
    if (result.search) {
      result.path = '/' + result.search;
    } else {
      result.path = null;
    }
    result.href = result.format();
    return result;
  }

  // if a url ENDs in . or .., then it must get a trailing slash.
  // however, if it ends in anything else non-slashy,
  // then it must NOT get a trailing slash.
  var last = srcPath.slice(-1)[0];
  var hasTrailingSlash = (
      (result.host || relative.host || srcPath.length > 1) &&
      (last === '.' || last === '..') || last === '');

  // strip single dots, resolve double dots to parent dir
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = srcPath.length; i >= 0; i--) {
    last = srcPath[i];
    if (last === '.') {
      srcPath.splice(i, 1);
    } else if (last === '..') {
      srcPath.splice(i, 1);
      up++;
    } else if (up) {
      srcPath.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (!mustEndAbs && !removeAllDots) {
    for (; up--; up) {
      srcPath.unshift('..');
    }
  }

  if (mustEndAbs && srcPath[0] !== '' &&
      (!srcPath[0] || srcPath[0].charAt(0) !== '/')) {
    srcPath.unshift('');
  }

  if (hasTrailingSlash && (srcPath.join('/').substr(-1) !== '/')) {
    srcPath.push('');
  }

  var isAbsolute = srcPath[0] === '' ||
      (srcPath[0] && srcPath[0].charAt(0) === '/');

  // put the host back
  if (psychotic) {
    result.hostname = result.host = isAbsolute ? '' :
                                    srcPath.length ? srcPath.shift() : '';
    //occationaly the auth can get stuck only in host
    //this especially happens in cases like
    //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
    var authInHost = result.host && result.host.indexOf('@') > 0 ?
                     result.host.split('@') : false;
    if (authInHost) {
      result.auth = authInHost.shift();
      result.host = result.hostname = authInHost.shift();
    }
  }

  mustEndAbs = mustEndAbs || (result.host && srcPath.length);

  if (mustEndAbs && !isAbsolute) {
    srcPath.unshift('');
  }

  if (!srcPath.length) {
    result.pathname = null;
    result.path = null;
  } else {
    result.pathname = srcPath.join('/');
  }

  //to support request.http
  if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
    result.path = (result.pathname ? result.pathname : '') +
                  (result.search ? result.search : '');
  }
  result.auth = relative.auth || result.auth;
  result.slashes = result.slashes || relative.slashes;
  result.href = result.format();
  return result;
};

Url.prototype.parseHost = function() {
  var host = this.host;
  var port = portPattern.exec(host);
  if (port) {
    port = port[0];
    if (port !== ':') {
      this.port = port.substr(1);
    }
    host = host.substr(0, host.length - port.length);
  }
  if (host) this.hostname = host;
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, global) {var __WEBPACK_AMD_DEFINE_RESULT__;/*! https://mths.be/punycode v1.4.1 by @mathias */
;(function(root) {

	/** Detect free variables */
	var freeExports =  true && exports &&
		!exports.nodeType && exports;
	var freeModule =  true && module &&
		!module.nodeType && module;
	var freeGlobal = typeof global == 'object' && global;
	if (
		freeGlobal.global === freeGlobal ||
		freeGlobal.window === freeGlobal ||
		freeGlobal.self === freeGlobal
	) {
		root = freeGlobal;
	}

	/**
	 * The `punycode` object.
	 * @name punycode
	 * @type Object
	 */
	var punycode,

	/** Highest positive signed 32-bit float value */
	maxInt = 2147483647, // aka. 0x7FFFFFFF or 2^31-1

	/** Bootstring parameters */
	base = 36,
	tMin = 1,
	tMax = 26,
	skew = 38,
	damp = 700,
	initialBias = 72,
	initialN = 128, // 0x80
	delimiter = '-', // '\x2D'

	/** Regular expressions */
	regexPunycode = /^xn--/,
	regexNonASCII = /[^\x20-\x7E]/, // unprintable ASCII chars + non-ASCII chars
	regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g, // RFC 3490 separators

	/** Error messages */
	errors = {
		'overflow': 'Overflow: input needs wider integers to process',
		'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
		'invalid-input': 'Invalid input'
	},

	/** Convenience shortcuts */
	baseMinusTMin = base - tMin,
	floor = Math.floor,
	stringFromCharCode = String.fromCharCode,

	/** Temporary variable */
	key;

	/*--------------------------------------------------------------------------*/

	/**
	 * A generic error utility function.
	 * @private
	 * @param {String} type The error type.
	 * @returns {Error} Throws a `RangeError` with the applicable error message.
	 */
	function error(type) {
		throw new RangeError(errors[type]);
	}

	/**
	 * A generic `Array#map` utility function.
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} callback The function that gets called for every array
	 * item.
	 * @returns {Array} A new array of values returned by the callback function.
	 */
	function map(array, fn) {
		var length = array.length;
		var result = [];
		while (length--) {
			result[length] = fn(array[length]);
		}
		return result;
	}

	/**
	 * A simple `Array#map`-like wrapper to work with domain name strings or email
	 * addresses.
	 * @private
	 * @param {String} domain The domain name or email address.
	 * @param {Function} callback The function that gets called for every
	 * character.
	 * @returns {Array} A new string of characters returned by the callback
	 * function.
	 */
	function mapDomain(string, fn) {
		var parts = string.split('@');
		var result = '';
		if (parts.length > 1) {
			// In email addresses, only the domain name should be punycoded. Leave
			// the local part (i.e. everything up to `@`) intact.
			result = parts[0] + '@';
			string = parts[1];
		}
		// Avoid `split(regex)` for IE8 compatibility. See #17.
		string = string.replace(regexSeparators, '\x2E');
		var labels = string.split('.');
		var encoded = map(labels, fn).join('.');
		return result + encoded;
	}

	/**
	 * Creates an array containing the numeric code points of each Unicode
	 * character in the string. While JavaScript uses UCS-2 internally,
	 * this function will convert a pair of surrogate halves (each of which
	 * UCS-2 exposes as separate characters) into a single code point,
	 * matching UTF-16.
	 * @see `punycode.ucs2.encode`
	 * @see <https://mathiasbynens.be/notes/javascript-encoding>
	 * @memberOf punycode.ucs2
	 * @name decode
	 * @param {String} string The Unicode input string (UCS-2).
	 * @returns {Array} The new array of code points.
	 */
	function ucs2decode(string) {
		var output = [],
		    counter = 0,
		    length = string.length,
		    value,
		    extra;
		while (counter < length) {
			value = string.charCodeAt(counter++);
			if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
				// high surrogate, and there is a next character
				extra = string.charCodeAt(counter++);
				if ((extra & 0xFC00) == 0xDC00) { // low surrogate
					output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
				} else {
					// unmatched surrogate; only append this code unit, in case the next
					// code unit is the high surrogate of a surrogate pair
					output.push(value);
					counter--;
				}
			} else {
				output.push(value);
			}
		}
		return output;
	}

	/**
	 * Creates a string based on an array of numeric code points.
	 * @see `punycode.ucs2.decode`
	 * @memberOf punycode.ucs2
	 * @name encode
	 * @param {Array} codePoints The array of numeric code points.
	 * @returns {String} The new Unicode string (UCS-2).
	 */
	function ucs2encode(array) {
		return map(array, function(value) {
			var output = '';
			if (value > 0xFFFF) {
				value -= 0x10000;
				output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
				value = 0xDC00 | value & 0x3FF;
			}
			output += stringFromCharCode(value);
			return output;
		}).join('');
	}

	/**
	 * Converts a basic code point into a digit/integer.
	 * @see `digitToBasic()`
	 * @private
	 * @param {Number} codePoint The basic numeric code point value.
	 * @returns {Number} The numeric value of a basic code point (for use in
	 * representing integers) in the range `0` to `base - 1`, or `base` if
	 * the code point does not represent a value.
	 */
	function basicToDigit(codePoint) {
		if (codePoint - 48 < 10) {
			return codePoint - 22;
		}
		if (codePoint - 65 < 26) {
			return codePoint - 65;
		}
		if (codePoint - 97 < 26) {
			return codePoint - 97;
		}
		return base;
	}

	/**
	 * Converts a digit/integer into a basic code point.
	 * @see `basicToDigit()`
	 * @private
	 * @param {Number} digit The numeric value of a basic code point.
	 * @returns {Number} The basic code point whose value (when used for
	 * representing integers) is `digit`, which needs to be in the range
	 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
	 * used; else, the lowercase form is used. The behavior is undefined
	 * if `flag` is non-zero and `digit` has no uppercase form.
	 */
	function digitToBasic(digit, flag) {
		//  0..25 map to ASCII a..z or A..Z
		// 26..35 map to ASCII 0..9
		return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
	}

	/**
	 * Bias adaptation function as per section 3.4 of RFC 3492.
	 * https://tools.ietf.org/html/rfc3492#section-3.4
	 * @private
	 */
	function adapt(delta, numPoints, firstTime) {
		var k = 0;
		delta = firstTime ? floor(delta / damp) : delta >> 1;
		delta += floor(delta / numPoints);
		for (/* no initialization */; delta > baseMinusTMin * tMax >> 1; k += base) {
			delta = floor(delta / baseMinusTMin);
		}
		return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
	}

	/**
	 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
	 * symbols.
	 * @memberOf punycode
	 * @param {String} input The Punycode string of ASCII-only symbols.
	 * @returns {String} The resulting string of Unicode symbols.
	 */
	function decode(input) {
		// Don't use UCS-2
		var output = [],
		    inputLength = input.length,
		    out,
		    i = 0,
		    n = initialN,
		    bias = initialBias,
		    basic,
		    j,
		    index,
		    oldi,
		    w,
		    k,
		    digit,
		    t,
		    /** Cached calculation results */
		    baseMinusT;

		// Handle the basic code points: let `basic` be the number of input code
		// points before the last delimiter, or `0` if there is none, then copy
		// the first basic code points to the output.

		basic = input.lastIndexOf(delimiter);
		if (basic < 0) {
			basic = 0;
		}

		for (j = 0; j < basic; ++j) {
			// if it's not a basic code point
			if (input.charCodeAt(j) >= 0x80) {
				error('not-basic');
			}
			output.push(input.charCodeAt(j));
		}

		// Main decoding loop: start just after the last delimiter if any basic code
		// points were copied; start at the beginning otherwise.

		for (index = basic > 0 ? basic + 1 : 0; index < inputLength; /* no final expression */) {

			// `index` is the index of the next character to be consumed.
			// Decode a generalized variable-length integer into `delta`,
			// which gets added to `i`. The overflow checking is easier
			// if we increase `i` as we go, then subtract off its starting
			// value at the end to obtain `delta`.
			for (oldi = i, w = 1, k = base; /* no condition */; k += base) {

				if (index >= inputLength) {
					error('invalid-input');
				}

				digit = basicToDigit(input.charCodeAt(index++));

				if (digit >= base || digit > floor((maxInt - i) / w)) {
					error('overflow');
				}

				i += digit * w;
				t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);

				if (digit < t) {
					break;
				}

				baseMinusT = base - t;
				if (w > floor(maxInt / baseMinusT)) {
					error('overflow');
				}

				w *= baseMinusT;

			}

			out = output.length + 1;
			bias = adapt(i - oldi, out, oldi == 0);

			// `i` was supposed to wrap around from `out` to `0`,
			// incrementing `n` each time, so we'll fix that now:
			if (floor(i / out) > maxInt - n) {
				error('overflow');
			}

			n += floor(i / out);
			i %= out;

			// Insert `n` at position `i` of the output
			output.splice(i++, 0, n);

		}

		return ucs2encode(output);
	}

	/**
	 * Converts a string of Unicode symbols (e.g. a domain name label) to a
	 * Punycode string of ASCII-only symbols.
	 * @memberOf punycode
	 * @param {String} input The string of Unicode symbols.
	 * @returns {String} The resulting Punycode string of ASCII-only symbols.
	 */
	function encode(input) {
		var n,
		    delta,
		    handledCPCount,
		    basicLength,
		    bias,
		    j,
		    m,
		    q,
		    k,
		    t,
		    currentValue,
		    output = [],
		    /** `inputLength` will hold the number of code points in `input`. */
		    inputLength,
		    /** Cached calculation results */
		    handledCPCountPlusOne,
		    baseMinusT,
		    qMinusT;

		// Convert the input in UCS-2 to Unicode
		input = ucs2decode(input);

		// Cache the length
		inputLength = input.length;

		// Initialize the state
		n = initialN;
		delta = 0;
		bias = initialBias;

		// Handle the basic code points
		for (j = 0; j < inputLength; ++j) {
			currentValue = input[j];
			if (currentValue < 0x80) {
				output.push(stringFromCharCode(currentValue));
			}
		}

		handledCPCount = basicLength = output.length;

		// `handledCPCount` is the number of code points that have been handled;
		// `basicLength` is the number of basic code points.

		// Finish the basic string - if it is not empty - with a delimiter
		if (basicLength) {
			output.push(delimiter);
		}

		// Main encoding loop:
		while (handledCPCount < inputLength) {

			// All non-basic code points < n have been handled already. Find the next
			// larger one:
			for (m = maxInt, j = 0; j < inputLength; ++j) {
				currentValue = input[j];
				if (currentValue >= n && currentValue < m) {
					m = currentValue;
				}
			}

			// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
			// but guard against overflow
			handledCPCountPlusOne = handledCPCount + 1;
			if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
				error('overflow');
			}

			delta += (m - n) * handledCPCountPlusOne;
			n = m;

			for (j = 0; j < inputLength; ++j) {
				currentValue = input[j];

				if (currentValue < n && ++delta > maxInt) {
					error('overflow');
				}

				if (currentValue == n) {
					// Represent delta as a generalized variable-length integer
					for (q = delta, k = base; /* no condition */; k += base) {
						t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
						if (q < t) {
							break;
						}
						qMinusT = q - t;
						baseMinusT = base - t;
						output.push(
							stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0))
						);
						q = floor(qMinusT / baseMinusT);
					}

					output.push(stringFromCharCode(digitToBasic(q, 0)));
					bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
					delta = 0;
					++handledCPCount;
				}
			}

			++delta;
			++n;

		}
		return output.join('');
	}

	/**
	 * Converts a Punycode string representing a domain name or an email address
	 * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
	 * it doesn't matter if you call it on a string that has already been
	 * converted to Unicode.
	 * @memberOf punycode
	 * @param {String} input The Punycoded domain name or email address to
	 * convert to Unicode.
	 * @returns {String} The Unicode representation of the given Punycode
	 * string.
	 */
	function toUnicode(input) {
		return mapDomain(input, function(string) {
			return regexPunycode.test(string)
				? decode(string.slice(4).toLowerCase())
				: string;
		});
	}

	/**
	 * Converts a Unicode string representing a domain name or an email address to
	 * Punycode. Only the non-ASCII parts of the domain name will be converted,
	 * i.e. it doesn't matter if you call it with a domain that's already in
	 * ASCII.
	 * @memberOf punycode
	 * @param {String} input The domain name or email address to convert, as a
	 * Unicode string.
	 * @returns {String} The Punycode representation of the given domain name or
	 * email address.
	 */
	function toASCII(input) {
		return mapDomain(input, function(string) {
			return regexNonASCII.test(string)
				? 'xn--' + encode(string)
				: string;
		});
	}

	/*--------------------------------------------------------------------------*/

	/** Define the public API */
	punycode = {
		/**
		 * A string representing the current Punycode.js version number.
		 * @memberOf punycode
		 * @type String
		 */
		'version': '1.4.1',
		/**
		 * An object of methods to convert from JavaScript's internal character
		 * representation (UCS-2) to Unicode code points, and back.
		 * @see <https://mathiasbynens.be/notes/javascript-encoding>
		 * @memberOf punycode
		 * @type Object
		 */
		'ucs2': {
			'decode': ucs2decode,
			'encode': ucs2encode
		},
		'decode': decode,
		'encode': encode,
		'toASCII': toASCII,
		'toUnicode': toUnicode
	};

	/** Expose `punycode` */
	// Some AMD build optimizers, like r.js, check for specific condition patterns
	// like the following:
	if (
		true
	) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
			return punycode;
		}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}

}(this));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)(module), __webpack_require__(8)))

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 8 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  isString: function(arg) {
    return typeof(arg) === 'string';
  },
  isObject: function(arg) {
    return typeof(arg) === 'object' && arg !== null;
  },
  isNull: function(arg) {
    return arg === null;
  },
  isNullOrUndefined: function(arg) {
    return arg == null;
  }
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__(11);
exports.encode = exports.stringify = __webpack_require__(12);


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map (xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};


/***/ }),
/* 13 */
/***/ (function(module, exports) {

/**
 * A doubly linked list-based Least Recently Used (LRU) cache. Will keep most
 * recently used items while discarding least recently used items when its limit
 * is reached.
 *
 * Licensed under MIT. Copyright (c) 2010 Rasmus Andersson <http://hunch.se/>
 * See README.md for details.
 *
 * Illustration of the design:
 *
 *       entry             entry             entry             entry
 *       ______            ______            ______            ______
 *      | head |.newer => |      |.newer => |      |.newer => | tail |
 *      |  A   |          |  B   |          |  C   |          |  D   |
 *      |______| <= older.|______| <= older.|______| <= older.|______|
 *
 *  removed  <--  <--  <--  <--  <--  <--  <--  <--  <--  <--  <--  added
 */
function LRUCache (limit) {
  // Current size of the cache. (Read-only).
  this.size = 0;
  // Maximum number of items this cache can hold.
  this.limit = limit;
  this._keymap = {};
}

/**
 * Put <value> into the cache associated with <key>. Returns the entry which was
 * removed to make room for the new entry. Otherwise undefined is returned
 * (i.e. if there was enough room already).
 */
LRUCache.prototype.put = function(key, value) {
  var entry = {key:key, value:value};
  // Note: No protection agains replacing, and thus orphan entries. By design.
  this._keymap[key] = entry;
  if (this.tail) {
    // link previous tail to the new tail (entry)
    this.tail.newer = entry;
    entry.older = this.tail;
  } else {
    // we're first in -- yay
    this.head = entry;
  }
  // add new entry to the end of the linked list -- it's now the freshest entry.
  this.tail = entry;
  if (this.size === this.limit) {
    // we hit the limit -- remove the head
    return this.shift();
  } else {
    // increase the size counter
    this.size++;
  }
};

/**
 * Purge the least recently used (oldest) entry from the cache. Returns the
 * removed entry or undefined if the cache was empty.
 *
 * If you need to perform any form of finalization of purged items, this is a
 * good place to do it. Simply override/replace this function:
 *
 *   var c = new LRUCache(123);
 *   c.shift = function() {
 *     var entry = LRUCache.prototype.shift.call(this);
 *     doSomethingWith(entry);
 *     return entry;
 *   }
 */
LRUCache.prototype.shift = function() {
  // todo: handle special case when limit == 1
  var entry = this.head;
  if (entry) {
    if (this.head.newer) {
      // advance the list
      this.head = this.head.newer;
      this.head.older = undefined;
    } else {
      // the cache is exhausted
      this.head = undefined;
      this.tail = undefined;
    }
    // Remove last strong reference to <entry> and remove links from the purged
    // entry being returned:
    entry.newer = entry.older = undefined;
    // delete is slow, but we need to do this to avoid uncontrollable growth:
    delete this._keymap[entry.key];
    this.size--;
  }
  return entry;
};

/**
 * Get and register recent use of <key>. Returns the value associated with <key>
 * or undefined if not in cache.
 */
LRUCache.prototype.get = function(key, returnEntry) {
  // First, find our cache entry
  var entry = this._keymap[key];
  if (entry === undefined) return; // Not cached. Sorry.
  // As <key> was found in the cache, register it as being requested recently
  if (entry === this.tail) {
    // Already the most recenlty used entry, so no need to update the list
    return returnEntry ? entry : entry.value;
  }
  // HEAD--------------TAIL
  //   <.older   .newer>
  //  <--- add direction --
  //   A  B  C  <D>  E
  if (entry.newer) {
    if (entry === this.head)
      this.head = entry.newer;
    entry.newer.older = entry.older; // C <-- E.
  }
  if (entry.older)
    entry.older.newer = entry.newer; // C. --> E
  entry.newer = undefined; // D --x
  entry.older = this.tail; // D. --> E
  if (this.tail)
    this.tail.newer = entry; // E. <-- D
  this.tail = entry;
  return returnEntry ? entry : entry.value;
};

// ----------------------------------------------------------------------------
// Following code is optional and can be removed without breaking the core
// functionality.

/**
 * Check if <key> is in the cache without registering recent use. Feasible if
 * you do not want to chage the state of the cache, but only "peek" at it.
 * Returns the entry associated with <key> if found, or undefined if not found.
 */
LRUCache.prototype.find = function(key) {
  return this._keymap[key];
};

/**
 * Update the value of entry with <key>. Returns the old value, or undefined if
 * entry was not in the cache.
 */
LRUCache.prototype.set = function(key, value) {
  var oldvalue, entry = this.get(key, true);
  if (entry) {
    oldvalue = entry.value;
    entry.value = value;
  } else {
    oldvalue = this.put(key, value);
    if (oldvalue) oldvalue = oldvalue.value;
  }
  return oldvalue;
};

/**
 * Remove entry <key> from cache and return its value. Returns undefined if not
 * found.
 */
LRUCache.prototype.remove = function(key) {
  var entry = this._keymap[key];
  if (!entry) return;
  delete this._keymap[entry.key]; // need to do delete unfortunately
  if (entry.newer && entry.older) {
    // relink the older entry with the newer entry
    entry.older.newer = entry.newer;
    entry.newer.older = entry.older;
  } else if (entry.newer) {
    // remove the link to us
    entry.newer.older = undefined;
    // link the newer entry to head
    this.head = entry.newer;
  } else if (entry.older) {
    // remove the link to us
    entry.older.newer = undefined;
    // link the newer entry to head
    this.tail = entry.older;
  } else {// if(entry.older === undefined && entry.newer === undefined) {
    this.head = this.tail = undefined;
  }

  this.size--;
  return entry.value;
};

/** Removes all entries */
LRUCache.prototype.removeAll = function() {
  // This should be safe, as we never expose strong refrences to the outside
  this.head = this.tail = undefined;
  this.size = 0;
  this._keymap = {};
};

/**
 * Return an array containing all keys of entries stored in the cache object, in
 * arbitrary order.
 */
if (typeof Object.keys === 'function') {
  LRUCache.prototype.keys = function() { return Object.keys(this._keymap); };
} else {
  LRUCache.prototype.keys = function() {
    var keys = [];
    for (var k in this._keymap) keys.push(k);
    return keys;
  };
}

/**
 * Call `fun` for each entry. Starting with the newest entry if `desc` is a true
 * value, otherwise starts with the oldest (head) enrty and moves towards the
 * tail.
 *
 * `fun` is called with 3 arguments in the context `context`:
 *   `fun.call(context, Object key, Object value, LRUCache self)`
 */
LRUCache.prototype.forEach = function(fun, context, desc) {
  var entry;
  if (context === true) { desc = true; context = undefined; }
  else if (typeof context !== 'object') context = this;
  if (desc) {
    entry = this.tail;
    while (entry) {
      fun.call(context, entry.key, entry.value, this);
      entry = entry.older;
    }
  } else {
    entry = this.head;
    while (entry) {
      fun.call(context, entry.key, entry.value, this);
      entry = entry.newer;
    }
  }
};

/** Returns a JSON (array) representation */
LRUCache.prototype.toJSON = function() {
  var s = [], entry = this.head;
  while (entry) {
    s.push({key:entry.key.toJSON(), value:entry.value.toJSON()});
    entry = entry.newer;
  }
  return s;
};

/** Returns a String representation */
LRUCache.prototype.toString = function() {
  var s = '', entry = this.head;
  while (entry) {
    s += String(entry.key)+':'+entry.value;
    entry = entry.newer;
    if (entry)
      s += ' < ';
  }
  return s;
};

// Export ourselves
if (typeof this === 'object') this.LRUCache = LRUCache;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* SockJS client, version --minify, http://sockjs.org, MIT License

Copyright (c) 2011-2012 VMware, Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

// JSON2 by Douglas Crockford (minified).
var JSON;JSON||(JSON={}),function(){function str(a,b){var c,d,e,f,g=gap,h,i=b[a];i&&typeof i=="object"&&typeof i.toJSON=="function"&&(i=i.toJSON(a)),typeof rep=="function"&&(i=rep.call(b,a,i));switch(typeof i){case"string":return quote(i);case"number":return isFinite(i)?String(i):"null";case"boolean":case"null":return String(i);case"object":if(!i)return"null";gap+=indent,h=[];if(Object.prototype.toString.apply(i)==="[object Array]"){f=i.length;for(c=0;c<f;c+=1)h[c]=str(c,i)||"null";e=h.length===0?"[]":gap?"[\n"+gap+h.join(",\n"+gap)+"\n"+g+"]":"["+h.join(",")+"]",gap=g;return e}if(rep&&typeof rep=="object"){f=rep.length;for(c=0;c<f;c+=1)typeof rep[c]=="string"&&(d=rep[c],e=str(d,i),e&&h.push(quote(d)+(gap?": ":":")+e))}else for(d in i)Object.prototype.hasOwnProperty.call(i,d)&&(e=str(d,i),e&&h.push(quote(d)+(gap?": ":":")+e));e=h.length===0?"{}":gap?"{\n"+gap+h.join(",\n"+gap)+"\n"+g+"}":"{"+h.join(",")+"}",gap=g;return e}}function quote(a){escapable.lastIndex=0;return escapable.test(a)?'"'+a.replace(escapable,function(a){var b=meta[a];return typeof b=="string"?b:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+a+'"'}function f(a){return a<10?"0"+a:a}"use strict",typeof Date.prototype.toJSON!="function"&&(Date.prototype.toJSON=function(a){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(a){return this.valueOf()});var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;typeof JSON.stringify!="function"&&(JSON.stringify=function(a,b,c){var d;gap="",indent="";if(typeof c=="number")for(d=0;d<c;d+=1)indent+=" ";else typeof c=="string"&&(indent=c);rep=b;if(!b||typeof b=="function"||typeof b=="object"&&typeof b.length=="number")return str("",{"":a});throw new Error("JSON.stringify")}),typeof JSON.parse!="function"&&(JSON.parse=function(text,reviver){function walk(a,b){var c,d,e=a[b];if(e&&typeof e=="object")for(c in e)Object.prototype.hasOwnProperty.call(e,c)&&(d=walk(e,c),d!==undefined?e[c]=d:delete e[c]);return reviver.call(a,b,e)}var j;text=String(text),cx.lastIndex=0,cx.test(text)&&(text=text.replace(cx,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)}));if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){j=eval("("+text+")");return typeof reviver=="function"?walk({"":j},""):j}throw new SyntaxError("JSON.parse")})}()

SockJS=function(){var a=document,b=window,c={},d=function(){};d.prototype.addEventListener=function(a,b){this._listeners||(this._listeners={}),a in this._listeners||(this._listeners[a]=[]);var d=this._listeners[a];c.arrIndexOf(d,b)===-1&&d.push(b);return},d.prototype.removeEventListener=function(a,b){if(!(this._listeners&&a in this._listeners))return;var d=this._listeners[a],e=c.arrIndexOf(d,b);if(e!==-1){d.length>1?this._listeners[a]=d.slice(0,e).concat(d.slice(e+1)):delete this._listeners[a];return}return},d.prototype.dispatchEvent=function(a){var b=a.type,c=Array.prototype.slice.call(arguments,0);this["on"+b]&&this["on"+b].apply(this,c);if(this._listeners&&b in this._listeners)for(var d=0;d<this._listeners[b].length;d++)this._listeners[b][d].apply(this,c)};var e=function(a,b){this.type=a;if(typeof b!="undefined")for(var c in b){if(!b.hasOwnProperty(c))continue;this[c]=b[c]}};e.prototype.toString=function(){var a=[];for(var b in this){if(!this.hasOwnProperty(b))continue;var c=this[b];typeof c=="function"&&(c="[function]"),a.push(b+"="+c)}return"SimpleEvent("+a.join(", ")+")"};var f=function(a){var b=this;b._events=a||[],b._listeners={}};f.prototype.emit=function(a){var b=this;b._verifyType(a);if(b._nuked)return;var c=Array.prototype.slice.call(arguments,1);b["on"+a]&&b["on"+a].apply(b,c);if(a in b._listeners)for(var d=0;d<b._listeners[a].length;d++)b._listeners[a][d].apply(b,c)},f.prototype.on=function(a,b){var c=this;c._verifyType(a);if(c._nuked)return;a in c._listeners||(c._listeners[a]=[]),c._listeners[a].push(b)},f.prototype._verifyType=function(a){var b=this;c.arrIndexOf(b._events,a)===-1&&c.log("Event "+JSON.stringify(a)+" not listed "+JSON.stringify(b._events)+" in "+b)},f.prototype.nuke=function(){var a=this;a._nuked=!0;for(var b=0;b<a._events.length;b++)delete a[a._events[b]];a._listeners={}};var g="abcdefghijklmnopqrstuvwxyz0123456789_";c.random_string=function(a,b){b=b||g.length;var c,d=[];for(c=0;c<a;c++)d.push(g.substr(Math.floor(Math.random()*b),1));return d.join("")},c.random_number=function(a){return Math.floor(Math.random()*a)},c.random_number_string=function(a){var b=(""+(a-1)).length,d=Array(b+1).join("0");return(d+c.random_number(a)).slice(-b)},c.getOrigin=function(a){a+="/";var b=a.split("/").slice(0,3);return b.join("/")},c.isSameOriginUrl=function(a,c){return c||(c=b.location.href),a.split("/").slice(0,3).join("/")===c.split("/").slice(0,3).join("/")},c.getParentDomain=function(a){if(/^[0-9.]*$/.test(a))return a;if(/^\[/.test(a))return a;if(!/[.]/.test(a))return a;var b=a.split(".").slice(1);return b.join(".")},c.objectExtend=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c]);return a};var h="_jp";c.polluteGlobalNamespace=function(){h in b||(b[h]={})},c.closeFrame=function(a,b){return"c"+JSON.stringify([a,b])},c.userSetCode=function(a){return a===1e3||a>=3e3&&a<=4999},c.countRTO=function(a){var b;return a>100?b=3*a:b=a+200,b},c.log=function(){b.console&&console.log&&console.log.apply&&console.log.apply(console,arguments)},c.bind=function(a,b){return a.bind?a.bind(b):function(){return a.apply(b,arguments)}},c.flatUrl=function(a){return a.indexOf("?")===-1&&a.indexOf("#")===-1},c.amendUrl=function(b){var d=a.location;if(!b)throw new Error("Wrong url for SockJS");if(!c.flatUrl(b))throw new Error("Only basic urls are supported in SockJS");return b.indexOf("//")===0&&(b=d.protocol+b),b.indexOf("/")===0&&(b=d.protocol+"//"+d.host+b),b=b.replace(/[/]+$/,""),b},c.arrIndexOf=function(a,b){for(var c=0;c<a.length;c++)if(a[c]===b)return c;return-1},c.arrSkip=function(a,b){var d=c.arrIndexOf(a,b);if(d===-1)return a.slice();var e=a.slice(0,d);return e.concat(a.slice(d+1))},c.isArray=Array.isArray||function(a){return{}.toString.call(a).indexOf("Array")>=0},c.delay=function(a,b){return typeof a=="function"&&(b=a,a=0),setTimeout(b,a)};var i=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,j={"\0":"\\u0000","\x01":"\\u0001","\x02":"\\u0002","\x03":"\\u0003","\x04":"\\u0004","\x05":"\\u0005","\x06":"\\u0006","\x07":"\\u0007","\b":"\\b","\t":"\\t","\n":"\\n","\x0b":"\\u000b","\f":"\\f","\r":"\\r","\x0e":"\\u000e","\x0f":"\\u000f","\x10":"\\u0010","\x11":"\\u0011","\x12":"\\u0012","\x13":"\\u0013","\x14":"\\u0014","\x15":"\\u0015","\x16":"\\u0016","\x17":"\\u0017","\x18":"\\u0018","\x19":"\\u0019","\x1a":"\\u001a","\x1b":"\\u001b","\x1c":"\\u001c","\x1d":"\\u001d","\x1e":"\\u001e","\x1f":"\\u001f",'"':'\\"',"\\":"\\\\","\x7f":"\\u007f","\x80":"\\u0080","\x81":"\\u0081","\x82":"\\u0082","\x83":"\\u0083","\x84":"\\u0084","\x85":"\\u0085","\x86":"\\u0086","\x87":"\\u0087","\x88":"\\u0088","\x89":"\\u0089","\x8a":"\\u008a","\x8b":"\\u008b","\x8c":"\\u008c","\x8d":"\\u008d","\x8e":"\\u008e","\x8f":"\\u008f","\x90":"\\u0090","\x91":"\\u0091","\x92":"\\u0092","\x93":"\\u0093","\x94":"\\u0094","\x95":"\\u0095","\x96":"\\u0096","\x97":"\\u0097","\x98":"\\u0098","\x99":"\\u0099","\x9a":"\\u009a","\x9b":"\\u009b","\x9c":"\\u009c","\x9d":"\\u009d","\x9e":"\\u009e","\x9f":"\\u009f","\xad":"\\u00ad","\u0600":"\\u0600","\u0601":"\\u0601","\u0602":"\\u0602","\u0603":"\\u0603","\u0604":"\\u0604","\u070f":"\\u070f","\u17b4":"\\u17b4","\u17b5":"\\u17b5","\u200c":"\\u200c","\u200d":"\\u200d","\u200e":"\\u200e","\u200f":"\\u200f","\u2028":"\\u2028","\u2029":"\\u2029","\u202a":"\\u202a","\u202b":"\\u202b","\u202c":"\\u202c","\u202d":"\\u202d","\u202e":"\\u202e","\u202f":"\\u202f","\u2060":"\\u2060","\u2061":"\\u2061","\u2062":"\\u2062","\u2063":"\\u2063","\u2064":"\\u2064","\u2065":"\\u2065","\u2066":"\\u2066","\u2067":"\\u2067","\u2068":"\\u2068","\u2069":"\\u2069","\u206a":"\\u206a","\u206b":"\\u206b","\u206c":"\\u206c","\u206d":"\\u206d","\u206e":"\\u206e","\u206f":"\\u206f","\ufeff":"\\ufeff","\ufff0":"\\ufff0","\ufff1":"\\ufff1","\ufff2":"\\ufff2","\ufff3":"\\ufff3","\ufff4":"\\ufff4","\ufff5":"\\ufff5","\ufff6":"\\ufff6","\ufff7":"\\ufff7","\ufff8":"\\ufff8","\ufff9":"\\ufff9","\ufffa":"\\ufffa","\ufffb":"\\ufffb","\ufffc":"\\ufffc","\ufffd":"\\ufffd","\ufffe":"\\ufffe","\uffff":"\\uffff"},k=/[\x00-\x1f\ud800-\udfff\ufffe\uffff\u0300-\u0333\u033d-\u0346\u034a-\u034c\u0350-\u0352\u0357-\u0358\u035c-\u0362\u0374\u037e\u0387\u0591-\u05af\u05c4\u0610-\u0617\u0653-\u0654\u0657-\u065b\u065d-\u065e\u06df-\u06e2\u06eb-\u06ec\u0730\u0732-\u0733\u0735-\u0736\u073a\u073d\u073f-\u0741\u0743\u0745\u0747\u07eb-\u07f1\u0951\u0958-\u095f\u09dc-\u09dd\u09df\u0a33\u0a36\u0a59-\u0a5b\u0a5e\u0b5c-\u0b5d\u0e38-\u0e39\u0f43\u0f4d\u0f52\u0f57\u0f5c\u0f69\u0f72-\u0f76\u0f78\u0f80-\u0f83\u0f93\u0f9d\u0fa2\u0fa7\u0fac\u0fb9\u1939-\u193a\u1a17\u1b6b\u1cda-\u1cdb\u1dc0-\u1dcf\u1dfc\u1dfe\u1f71\u1f73\u1f75\u1f77\u1f79\u1f7b\u1f7d\u1fbb\u1fbe\u1fc9\u1fcb\u1fd3\u1fdb\u1fe3\u1feb\u1fee-\u1fef\u1ff9\u1ffb\u1ffd\u2000-\u2001\u20d0-\u20d1\u20d4-\u20d7\u20e7-\u20e9\u2126\u212a-\u212b\u2329-\u232a\u2adc\u302b-\u302c\uaab2-\uaab3\uf900-\ufa0d\ufa10\ufa12\ufa15-\ufa1e\ufa20\ufa22\ufa25-\ufa26\ufa2a-\ufa2d\ufa30-\ufa6d\ufa70-\ufad9\ufb1d\ufb1f\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufb4e\ufff0-\uffff]/g,l,m=JSON&&JSON.stringify||function(a){return i.lastIndex=0,i.test(a)&&(a=a.replace(i,function(a){return j[a]})),'"'+a+'"'},n=function(a){var b,c={},d=[];for(b=0;b<65536;b++)d.push(String.fromCharCode(b));return a.lastIndex=0,d.join("").replace(a,function(a){return c[a]="\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4),""}),a.lastIndex=0,c};c.quote=function(a){var b=m(a);return k.lastIndex=0,k.test(b)?(l||(l=n(k)),b.replace(k,function(a){return l[a]})):b};var o=["websocket","xdr-streaming","xhr-streaming","iframe-eventsource","iframe-htmlfile","xdr-polling","xhr-polling","iframe-xhr-polling","jsonp-polling"];c.probeProtocols=function(){var a={};for(var b=0;b<o.length;b++){var c=o[b];a[c]=y[c]&&y[c].enabled()}return a},c.detectProtocols=function(a,b,c){var d={},e=[];b||(b=o);for(var f=0;f<b.length;f++){var g=b[f];d[g]=a[g]}var h=function(a){var b=a.shift();d[b]?e.push(b):a.length>0&&h(a)};return c.websocket!==!1&&h(["websocket"]),d["xhr-streaming"]&&!c.null_origin?e.push("xhr-streaming"):d["xdr-streaming"]&&!c.cookie_needed&&!c.null_origin?e.push("xdr-streaming"):h(["iframe-eventsource","iframe-htmlfile"]),d["xhr-polling"]&&!c.null_origin?e.push("xhr-polling"):d["xdr-polling"]&&!c.cookie_needed&&!c.null_origin?e.push("xdr-polling"):h(["iframe-xhr-polling","jsonp-polling"]),e};var p="_sockjs_global";c.createHook=function(){var a="a"+c.random_string(8);if(!(p in b)){var d={};b[p]=function(a){return a in d||(d[a]={id:a,del:function(){delete d[a]}}),d[a]}}return b[p](a)},c.attachMessage=function(a){c.attachEvent("message",a)},c.attachEvent=function(c,d){typeof b.addEventListener!="undefined"?b.addEventListener(c,d,!1):(a.attachEvent("on"+c,d),b.attachEvent("on"+c,d))},c.detachMessage=function(a){c.detachEvent("message",a)},c.detachEvent=function(c,d){typeof b.addEventListener!="undefined"?b.removeEventListener(c,d,!1):(a.detachEvent("on"+c,d),b.detachEvent("on"+c,d))};var q={},r=!1,s=function(){for(var a in q)q[a](),delete q[a]},t=function(){if(r)return;r=!0,s()};c.attachEvent("unload",t),c.unload_add=function(a){var b=c.random_string(8);return q[b]=a,r&&c.delay(s),b},c.unload_del=function(a){a in q&&delete q[a]},c.createIframe=function(b,d){var e=a.createElement("iframe"),f,g,h=function(){clearTimeout(f);try{e.onload=null}catch(a){}e.onerror=null},i=function(){e&&(h(),setTimeout(function(){e&&e.parentNode.removeChild(e),e=null},0),c.unload_del(g))},j=function(a){e&&(i(),d(a))},k=function(a,b){try{e&&e.contentWindow&&e.contentWindow.postMessage(a,b)}catch(c){}};return e.src=b,e.style.display="none",e.style.position="absolute",e.onerror=function(){j("onerror")},e.onload=function(){clearTimeout(f),f=setTimeout(function(){j("onload timeout")},2e3)},a.body.appendChild(e),f=setTimeout(function(){j("timeout")},15e3),g=c.unload_add(i),{post:k,cleanup:i,loaded:h}},c.createHtmlfile=function(a,d){var e=new ActiveXObject("htmlfile"),f,g,i,j=function(){clearTimeout(f)},k=function(){e&&(j(),c.unload_del(g),i.parentNode.removeChild(i),i=e=null,CollectGarbage())},l=function(a){e&&(k(),d(a))},m=function(a,b){try{i&&i.contentWindow&&i.contentWindow.postMessage(a,b)}catch(c){}};e.open(),e.write('<html><script>document.domain="'+document.domain+'";'+"</s"+"cript></html>"),e.close(),e.parentWindow[h]=b[h];var n=e.createElement("div");return e.body.appendChild(n),i=e.createElement("iframe"),n.appendChild(i),i.src=a,f=setTimeout(function(){l("timeout")},15e3),g=c.unload_add(k),{post:m,cleanup:k,loaded:j}};var u=function(){};u.prototype=new f(["chunk","finish"]),u.prototype._start=function(a,d,e,f){var g=this;try{g.xhr=new XMLHttpRequest}catch(h){}if(!g.xhr)try{g.xhr=new b.ActiveXObject("Microsoft.XMLHTTP")}catch(h){}if(b.ActiveXObject||b.XDomainRequest)d+=(d.indexOf("?")===-1?"?":"&")+"t="+ +(new Date);g.unload_ref=c.unload_add(function(){g._cleanup(!0)});try{g.xhr.open(a,d,!0)}catch(i){g.emit("finish",0,""),g._cleanup();return}if(!f||!f.no_credentials)g.xhr.withCredentials="true";if(f&&f.headers)for(var j in f.headers)g.xhr.setRequestHeader(j,f.headers[j]);g.xhr.onreadystatechange=function(){if(g.xhr){var a=g.xhr;switch(a.readyState){case 3:try{var b=a.status,c=a.responseText}catch(a){}b===1223&&(b=204),c&&c.length>0&&g.emit("chunk",b,c);break;case 4:var b=a.status;b===1223&&(b=204),g.emit("finish",b,a.responseText),g._cleanup(!1)}}},g.xhr.send(e)},u.prototype._cleanup=function(a){var b=this;if(!b.xhr)return;c.unload_del(b.unload_ref),b.xhr.onreadystatechange=function(){};if(a)try{b.xhr.abort()}catch(d){}b.unload_ref=b.xhr=null},u.prototype.close=function(){var a=this;a.nuke(),a._cleanup(!0)};var v=c.XHRCorsObject=function(){var a=this,b=arguments;c.delay(function(){a._start.apply(a,b)})};v.prototype=new u;var w=c.XHRLocalObject=function(a,b,d){var e=this;c.delay(function(){e._start(a,b,d,{no_credentials:!0})})};w.prototype=new u;var x=c.XDRObject=function(a,b,d){var e=this;c.delay(function(){e._start(a,b,d)})};x.prototype=new f(["chunk","finish"]),x.prototype._start=function(a,b,d){var e=this,f=new XDomainRequest;b+=(b.indexOf("?")===-1?"?":"&")+"t="+ +(new Date);var g=f.ontimeout=f.onerror=function(){e.emit("finish",0,""),e._cleanup(!1)};f.onprogress=function(){e.emit("chunk",200,f.responseText)},f.onload=function(){e.emit("finish",200,f.responseText),e._cleanup(!1)},e.xdr=f,e.unload_ref=c.unload_add(function(){e._cleanup(!0)});try{e.xdr.open(a,b),e.xdr.send(d)}catch(h){g()}},x.prototype._cleanup=function(a){var b=this;if(!b.xdr)return;c.unload_del(b.unload_ref),b.xdr.ontimeout=b.xdr.onerror=b.xdr.onprogress=b.xdr.onload=null;if(a)try{b.xdr.abort()}catch(d){}b.unload_ref=b.xdr=null},x.prototype.close=function(){var a=this;a.nuke(),a._cleanup(!0)},c.isXHRCorsCapable=function(){return b.XMLHttpRequest&&"withCredentials"in new XMLHttpRequest?1:b.XDomainRequest&&a.domain?2:L.enabled()?3:4};var y=function(a,d,e){if(this===b)return new y(a,d,e);var f=this,g;f._options={devel:!1,debug:!1,protocols_whitelist:[],info:undefined,rtt:undefined},e&&c.objectExtend(f._options,e),f._base_url=c.amendUrl(a),f._server=f._options.server||c.random_number_string(1e3),f._options.protocols_whitelist&&f._options.protocols_whitelist.length?g=f._options.protocols_whitelist:(typeof d=="string"&&d.length>0?g=[d]:c.isArray(d)?g=d:g=null,g&&f._debug('Deprecated API: Use "protocols_whitelist" option instead of supplying protocol list as a second parameter to SockJS constructor.')),f._protocols=[],f.protocol=null,f.readyState=y.CONNECTING,f._ir=S(f._base_url),f._ir.onfinish=function(a,b){f._ir=null,a?(f._options.info&&(a=c.objectExtend(a,f._options.info)),f._options.rtt&&(b=f._options.rtt),f._applyInfo(a,b,g),f._didClose()):f._didClose(1002,"Can't connect to server",!0)}};y.prototype=new d,y.version="--minify",y.CONNECTING=0,y.OPEN=1,y.CLOSING=2,y.CLOSED=3,y.prototype._debug=function(){this._options.debug&&c.log.apply(c,arguments)},y.prototype._dispatchOpen=function(){var a=this;a.readyState===y.CONNECTING?(a._transport_tref&&(clearTimeout(a._transport_tref),a._transport_tref=null),a.readyState=y.OPEN,a.dispatchEvent(new e("open"))):a._didClose(1006,"Server lost session")},y.prototype._dispatchMessage=function(a){var b=this;if(b.readyState!==y.OPEN)return;b.dispatchEvent(new e("message",{data:a}))},y.prototype._dispatchHeartbeat=function(a){var b=this;if(b.readyState!==y.OPEN)return;b.dispatchEvent(new e("heartbeat",{}))},y.prototype._didClose=function(a,b,d){var f=this;if(f.readyState!==y.CONNECTING&&f.readyState!==y.OPEN&&f.readyState!==y.CLOSING)throw new Error("INVALID_STATE_ERR");f._ir&&(f._ir.nuke(),f._ir=null),f._transport&&(f._transport.doCleanup(),f._transport=null);var g=new e("close",{code:a,reason:b,wasClean:c.userSetCode(a)});if(!c.userSetCode(a)&&f.readyState===y.CONNECTING&&!d){if(f._try_next_protocol(g))return;g=new e("close",{code:2e3,reason:"All transports failed",wasClean:!1,last_event:g})}f.readyState=y.CLOSED,c.delay(function(){f.dispatchEvent(g)})},y.prototype._didMessage=function(a){var b=this,c=a.slice(0,1);switch(c){case"o":b._dispatchOpen();break;case"a":var d=JSON.parse(a.slice(1)||"[]");for(var e=0;e<d.length;e++)b._dispatchMessage(d[e]);break;case"m":var d=JSON.parse(a.slice(1)||"null");b._dispatchMessage(d);break;case"c":var d=JSON.parse(a.slice(1)||"[]");b._didClose(d[0],d[1]);break;case"h":b._dispatchHeartbeat()}},y.prototype._try_next_protocol=function(b){var d=this;d.protocol&&(d._debug("Closed transport:",d.protocol,""+b),d.protocol=null),d._transport_tref&&(clearTimeout(d._transport_tref),d._transport_tref=null);for(;;){var e=d.protocol=d._protocols.shift();if(!e)return!1;if(y[e]&&y[e].need_body===!0&&(!a.body||typeof a.readyState!="undefined"&&a.readyState!=="complete"))return d._protocols.unshift(e),d.protocol="waiting-for-load",c.attachEvent("load",function(){d._try_next_protocol()}),!0;if(!!y[e]&&!!y[e].enabled(d._options)){var f=y[e].roundTrips||1,g=(d._options.rto||0)*f||5e3;d._transport_tref=c.delay(g,function(){d.readyState===y.CONNECTING&&d._didClose(2007,"Transport timeouted")});var h=c.random_string(8),i=d._base_url+"/"+d._server+"/"+h;return d._debug("Opening transport:",e," url:"+i," RTO:"+d._options.rto),d._transport=new y[e](d,i,d._base_url),!0}d._debug("Skipping transport:",e)}},y.prototype.close=function(a,b){var d=this;if(a&&!c.userSetCode(a))throw new Error("INVALID_ACCESS_ERR");return d.readyState!==y.CONNECTING&&d.readyState!==y.OPEN?!1:(d.readyState=y.CLOSING,d._didClose(a||1e3,b||"Normal closure"),!0)},y.prototype.send=function(a){var b=this;if(b.readyState===y.CONNECTING)throw new Error("INVALID_STATE_ERR");return b.readyState===y.OPEN&&b._transport.doSend(c.quote(""+a)),!0},y.prototype._applyInfo=function(b,d,e){var f=this;f._options.info=b,f._options.rtt=d,f._options.rto=c.countRTO(d),f._options.info.null_origin=!a.domain;var g=c.probeProtocols();f._protocols=c.detectProtocols(g,e,b)};var z=y.websocket=function(a,d){var e=this,f=d+"/websocket";f.slice(0,5)==="https"?f="wss"+f.slice(5):f="ws"+f.slice(4),e.ri=a,e.url=f;var g=b.WebSocket||b.MozWebSocket;e.ws=new g(e.url),e.ws.onmessage=function(a){e.ri._didMessage(a.data)},e.unload_ref=c.unload_add(function(){e.ws.close()}),e.ws.onclose=function(){e.ri._didMessage(c.closeFrame(1006,"WebSocket connection broken"))}};z.prototype.doSend=function(a){this.ws.send("["+a+"]")},z.prototype.doCleanup=function(){var a=this,b=a.ws;b&&(b.onmessage=b.onclose=null,b.close(),c.unload_del(a.unload_ref),a.unload_ref=a.ri=a.ws=null)},z.enabled=function(){return!!b.WebSocket||!!b.MozWebSocket},z.roundTrips=2;var A=function(){};A.prototype.send_constructor=function(a){var b=this;b.send_buffer=[],b.sender=a},A.prototype.doSend=function(a){var b=this;b.send_buffer.push(a),b.send_stop||b.send_schedule()},A.prototype.send_schedule_wait=function(){var a=this,b;a.send_stop=function(){a.send_stop=null,clearTimeout(b)},b=c.delay(25,function(){a.send_stop=null,a.send_schedule()})},A.prototype.send_schedule=function(){var a=this;if(a.send_buffer.length>0){var b="["+a.send_buffer.join(",")+"]";a.send_stop=a.sender(a.trans_url,b,function(b,c){a.send_stop=null,b===!1?a.ri._didClose(1006,"Sending error "+c):a.send_schedule_wait()}),a.send_buffer=[]}},A.prototype.send_destructor=function(){var a=this;a._send_stop&&a._send_stop(),a._send_stop=null};var B=function(b,d,e){var f=this;if(!("_send_form"in f)){var g=f._send_form=a.createElement("form"),h=f._send_area=a.createElement("textarea");h.name="d",g.style.display="none",g.style.position="absolute",g.method="POST",g.enctype="application/x-www-form-urlencoded",g.acceptCharset="UTF-8",g.appendChild(h),a.body.appendChild(g)}var g=f._send_form,h=f._send_area,i="a"+c.random_string(8);g.target=i,g.action=b+"/jsonp_send?i="+i;var j;try{j=a.createElement('<iframe name="'+i+'">')}catch(k){j=a.createElement("iframe"),j.name=i}j.id=i,g.appendChild(j),j.style.display="none";try{h.value=d}catch(l){c.log("Your browser is seriously broken. Go home! "+l.message)}g.submit();var m=function(a){if(!j.onerror)return;j.onreadystatechange=j.onerror=j.onload=null,c.delay(500,function(){j.parentNode.removeChild(j),j=null}),h.value="",e(!0)};return j.onerror=j.onload=m,j.onreadystatechange=function(a){j.readyState=="complete"&&m()},m},C=function(a){return function(b,c,d){var e=new a("POST",b+"/xhr_send",c);return e.onfinish=function(a,b){d(a===200||a===204,"http status "+a)},function(a){d(!1,a)}}},D=function(b,d){var e,f=a.createElement("script"),g,h=function(a){g&&(g.parentNode.removeChild(g),g=null),f&&(clearTimeout(e),f.parentNode.removeChild(f),f.onreadystatechange=f.onerror=f.onload=f.onclick=null,f=null,d(a),d=null)},i=!1,j=null;f.id="a"+c.random_string(8),f.src=b,f.type="text/javascript",f.charset="UTF-8",f.onerror=function(a){j||(j=setTimeout(function(){i||h(c.closeFrame(1006,"JSONP script loaded abnormally (onerror)"))},1e3))},f.onload=function(a){h(c.closeFrame(1006,"JSONP script loaded abnormally (onload)"))},f.onreadystatechange=function(a){if(/loaded|closed/.test(f.readyState)){if(f&&f.htmlFor&&f.onclick){i=!0;try{f.onclick()}catch(b){}}f&&h(c.closeFrame(1006,"JSONP script loaded abnormally (onreadystatechange)"))}};if(typeof f.async=="undefined"&&a.attachEvent)if(!/opera/i.test(navigator.userAgent)){try{f.htmlFor=f.id,f.event="onclick"}catch(k){}f.async=!0}else g=a.createElement("script"),g.text="try{var a = document.getElementById('"+f.id+"'); if(a)a.onerror();}catch(x){};",f.async=g.async=!1;typeof f.async!="undefined"&&(f.async=!0),e=setTimeout(function(){h(c.closeFrame(1006,"JSONP script loaded abnormally (timeout)"))},35e3);var l=a.getElementsByTagName("head")[0];return l.insertBefore(f,l.firstChild),g&&l.insertBefore(g,l.firstChild),h},E=y["jsonp-polling"]=function(a,b){c.polluteGlobalNamespace();var d=this;d.ri=a,d.trans_url=b,d.send_constructor(B),d._schedule_recv()};E.prototype=new A,E.prototype._schedule_recv=function(){var a=this,b=function(b){a._recv_stop=null,b&&(a._is_closing||a.ri._didMessage(b)),a._is_closing||a._schedule_recv()};a._recv_stop=F(a.trans_url+"/jsonp",D,b)},E.enabled=function(){return!0},E.need_body=!0,E.prototype.doCleanup=function(){var a=this;a._is_closing=!0,a._recv_stop&&a._recv_stop(),a.ri=a._recv_stop=null,a.send_destructor()};var F=function(a,d,e){var f="a"+c.random_string(6),g=a+"?c="+escape(h+"."+f),i=0,j=function(a){switch(i){case 0:delete b[h][f],e(a);break;case 1:e(a),i=2;break;case 2:delete b[h][f]}},k=d(g,j);b[h][f]=k;var l=function(){b[h][f]&&(i=1,b[h][f](c.closeFrame(1e3,"JSONP user aborted read")))};return l},G=function(){};G.prototype=new A,G.prototype.run=function(a,b,c,d,e){var f=this;f.ri=a,f.trans_url=b,f.send_constructor(C(e)),f.poll=new $(a,d,b+c,e)},G.prototype.doCleanup=function(){var a=this;a.poll&&(a.poll.abort(),a.poll=null)};var H=y["xhr-streaming"]=function(a,b){this.run(a,b,"/xhr_streaming",bd,c.XHRCorsObject)};H.prototype=new G,H.enabled=function(){return b.XMLHttpRequest&&"withCredentials"in new XMLHttpRequest&&!/opera/i.test(navigator.userAgent)},H.roundTrips=2,H.need_body=!0;var I=y["xdr-streaming"]=function(a,b){this.run(a,b,"/xhr_streaming",bd,c.XDRObject)};I.prototype=new G,I.enabled=function(){return!!b.XDomainRequest},I.roundTrips=2;var J=y["xhr-polling"]=function(a,b){this.run(a,b,"/xhr",bd,c.XHRCorsObject)};J.prototype=new G,J.enabled=H.enabled,J.roundTrips=2;var K=y["xdr-polling"]=function(a,b){this.run(a,b,"/xhr",bd,c.XDRObject)};K.prototype=new G,K.enabled=I.enabled,K.roundTrips=2;var L=function(){};L.prototype.i_constructor=function(a,b,d){var e=this;e.ri=a,e.origin=c.getOrigin(d),e.base_url=d,e.trans_url=b;var f=d+"/iframe.html";e.ri._options.devel&&(f+="?t="+ +(new Date)),e.window_id=c.random_string(8),f+="#"+e.window_id,e.iframeObj=c.createIframe(f,function(a){e.ri._didClose(1006,"Unable to load an iframe ("+a+")")}),e.onmessage_cb=c.bind(e.onmessage,e),c.attachMessage(e.onmessage_cb)},L.prototype.doCleanup=function(){var a=this;if(a.iframeObj){c.detachMessage(a.onmessage_cb);try{a.iframeObj.iframe.contentWindow&&a.postMessage("c")}catch(b){}a.iframeObj.cleanup(),a.iframeObj=null,a.onmessage_cb=a.iframeObj=null}},L.prototype.onmessage=function(a){var b=this;if(a.origin!==b.origin)return;var c=a.data.slice(0,8),d=a.data.slice(8,9),e=a.data.slice(9);if(c!==b.window_id)return;switch(d){case"s":b.iframeObj.loaded(),b.postMessage("s",JSON.stringify([y.version,b.protocol,b.trans_url,b.base_url]));break;case"t":b.ri._didMessage(e)}},L.prototype.postMessage=function(a,b){var c=this;c.iframeObj.post(c.window_id+a+(b||""),c.origin)},L.prototype.doSend=function(a){this.postMessage("m",a)},L.enabled=function(){var a=navigator&&navigator.userAgent&&navigator.userAgent.indexOf("Konqueror")!==-1;return(typeof b.postMessage=="function"||typeof b.postMessage=="object")&&!a};var M,N=function(a,d){parent!==b?parent.postMessage(M+a+(d||""),"*"):c.log("Can't postMessage, no parent window.",a,d)},O=function(){};O.prototype._didClose=function(a,b){N("t",c.closeFrame(a,b))},O.prototype._didMessage=function(a){N("t",a)},O.prototype._doSend=function(a){this._transport.doSend(a)},O.prototype._doCleanup=function(){this._transport.doCleanup()},c.parent_origin=undefined,y.bootstrap_iframe=function(){var d;M=a.location.hash.slice(1);var e=function(a){if(a.source!==parent)return;typeof c.parent_origin=="undefined"&&(c.parent_origin=a.origin);if(a.origin!==c.parent_origin)return;var e=a.data.slice(0,8),f=a.data.slice(8,9),g=a.data.slice(9);if(e!==M)return;switch(f){case"s":var h=JSON.parse(g),i=h[0],j=h[1],k=h[2],l=h[3];i!==y.version&&c.log('Incompatibile SockJS! Main site uses: "'+i+'", the iframe:'+' "'+y.version+'".');if(!c.flatUrl(k)||!c.flatUrl(l)){c.log("Only basic urls are supported in SockJS");return}if(!c.isSameOriginUrl(k)||!c.isSameOriginUrl(l)){c.log("Can't connect to different domain from within an iframe. ("+JSON.stringify([b.location.href,k,l])+")");return}d=new O,d._transport=new O[j](d,k,l);break;case"m":d._doSend(g);break;case"c":d&&d._doCleanup(),d=null}};c.attachMessage(e),N("s")};var P=function(a,b){var d=this;c.delay(function(){d.doXhr(a,b)})};P.prototype=new f(["finish"]),P.prototype.doXhr=function(a,b){var d=this,e=(new Date).getTime(),f=new b("GET",a+"/info"),g=c.delay(8e3,function(){f.ontimeout()});f.onfinish=function(a,b){clearTimeout(g),g=null;if(a===200){var c=(new Date).getTime()-e,f=JSON.parse(b);typeof f!="object"&&(f={}),d.emit("finish",f,c)}else d.emit("finish")},f.ontimeout=function(){f.close(),d.emit("finish")}};var Q=function(b){var d=this,e=function(){var a=new L;a.protocol="w-iframe-info-receiver";var c=function(b){if(typeof b=="string"&&b.substr(0,1)==="m"){var c=JSON.parse(b.substr(1)),e=c[0],f=c[1];d.emit("finish",e,f)}else d.emit("finish");a.doCleanup(),a=null},e={_options:{},_didClose:c,_didMessage:c};a.i_constructor(e,b,b)};a.body?e():c.attachEvent("load",e)};Q.prototype=new f(["finish"]);var R=function(){var a=this;c.delay(function(){a.emit("finish",{},2e3)})};R.prototype=new f(["finish"]);var S=function(a){if(c.isSameOriginUrl(a))return new P(a,c.XHRLocalObject);switch(c.isXHRCorsCapable()){case 1:return new P(a,c.XHRLocalObject);case 2:return new P(a,c.XDRObject);case 3:return new Q(a);default:return new R}},T=O["w-iframe-info-receiver"]=function(a,b,d){var e=new P(d,c.XHRLocalObject);e.onfinish=function(b,c){a._didMessage("m"+JSON.stringify([b,c])),a._didClose()}};T.prototype.doCleanup=function(){};var U=y["iframe-eventsource"]=function(){var a=this;a.protocol="w-iframe-eventsource",a.i_constructor.apply(a,arguments)};U.prototype=new L,U.enabled=function(){return"EventSource"in b&&L.enabled()},U.need_body=!0,U.roundTrips=3;var V=O["w-iframe-eventsource"]=function(a,b){this.run(a,b,"/eventsource",_,c.XHRLocalObject)};V.prototype=new G;var W=y["iframe-xhr-polling"]=function(){var a=this;a.protocol="w-iframe-xhr-polling",a.i_constructor.apply(a,arguments)};W.prototype=new L,W.enabled=function(){return b.XMLHttpRequest&&L.enabled()},W.need_body=!0,W.roundTrips=3;var X=O["w-iframe-xhr-polling"]=function(a,b){this.run(a,b,"/xhr",bd,c.XHRLocalObject)};X.prototype=new G;var Y=y["iframe-htmlfile"]=function(){var a=this;a.protocol="w-iframe-htmlfile",a.i_constructor.apply(a,arguments)};Y.prototype=new L,Y.enabled=function(){return L.enabled()},Y.need_body=!0,Y.roundTrips=3;var Z=O["w-iframe-htmlfile"]=function(a,b){this.run(a,b,"/htmlfile",bc,c.XHRLocalObject)};Z.prototype=new G;var $=function(a,b,c,d){var e=this;e.ri=a,e.Receiver=b,e.recv_url=c,e.AjaxObject=d,e._scheduleRecv()};$.prototype._scheduleRecv=function(){var a=this,b=a.poll=new a.Receiver(a.recv_url,a.AjaxObject),c=0;b.onmessage=function(b){c+=1,a.ri._didMessage(b.data)},b.onclose=function(c){a.poll=b=b.onmessage=b.onclose=null,a.poll_is_closing||(c.reason==="permanent"?a.ri._didClose(1006,"Polling error ("+c.reason+")"):a._scheduleRecv())}},$.prototype.abort=function(){var a=this;a.poll_is_closing=!0,a.poll&&a.poll.abort()};var _=function(a){var b=this,d=new EventSource(a);d.onmessage=function(a){b.dispatchEvent(new e("message",{data:unescape(a.data)}))},b.es_close=d.onerror=function(a,f){var g=f?"user":d.readyState!==2?"network":"permanent";b.es_close=d.onmessage=d.onerror=null,d.close(),d=null,c.delay(200,function(){b.dispatchEvent(new e("close",{reason:g}))})}};_.prototype=new d,_.prototype.abort=function(){var a=this;a.es_close&&a.es_close({},!0)};var ba,bb=function(){if(ba===undefined)if("ActiveXObject"in b)try{ba=!!(new ActiveXObject("htmlfile"))}catch(a){}else ba=!1;return ba},bc=function(a){var d=this;c.polluteGlobalNamespace(),d.id="a"+c.random_string(6,26),a+=(a.indexOf("?")===-1?"?":"&")+"c="+escape(h+"."+d.id);var f=bb()?c.createHtmlfile:c.createIframe,g;b[h][d.id]={start:function(){g.loaded()},message:function(a){d.dispatchEvent(new e("message",{data:a}))},stop:function(){d.iframe_close({},"network")}},d.iframe_close=function(a,c){g.cleanup(),d.iframe_close=g=null,delete b[h][d.id],d.dispatchEvent(new e("close",{reason:c}))},g=f(a,function(a){d.iframe_close({},"permanent")})};bc.prototype=new d,bc.prototype.abort=function(){var a=this;a.iframe_close&&a.iframe_close({},"user")};var bd=function(a,b){var c=this,d=0;c.xo=new b("POST",a,null),c.xo.onchunk=function(a,b){if(a!==200)return;for(;;){var f=b.slice(d),g=f.indexOf("\n");if(g===-1)break;d+=g+1;var h=f.slice(0,g);c.dispatchEvent(new e("message",{data:h}))}},c.xo.onfinish=function(a,b){c.xo.onchunk(a,b),c.xo=null;var d=a===200?"network":"permanent";c.dispatchEvent(new e("close",{reason:d}))}};return bd.prototype=new d,bd.prototype.abort=function(){var a=this;a.xo&&(a.xo.close(),a.dispatchEvent(new e("close",{reason:"user"})),a.xo=null)},y.getUtils=function(){return c},y.getIframeTransport=function(){return L},y}(),"_sockjs_onload"in window&&setTimeout(_sockjs_onload,1), true&&!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function(){return SockJS}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!function(a,b){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (b),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined}(this,function(){function a(a){return encodeURI(a).replace(/%25[0-9][0-9]/g,function(a){return"%"+a.substring(3)})}function b(b){var c="";l[b.charAt(0)]&&(c=b.charAt(0),b=b.substring(1));var d="",e="",f=!0,g=!1,h=!1;"+"===c?f=!1:"."===c?(e=".",d="."):"/"===c?(e="/",d="/"):"#"===c?(e="#",f=!1):";"===c?(e=";",d=";",g=!0,h=!0):"?"===c?(e="?",d="&",g=!0):"&"===c&&(e="&",d="&",g=!0);for(var i=[],j=b.split(","),k=[],n={},o=0;o<j.length;o++){var p=j[o],q=null;if(-1!==p.indexOf(":")){var r=p.split(":");p=r[0],q=parseInt(r[1],10)}for(var s={};m[p.charAt(p.length-1)];)s[p.charAt(p.length-1)]=!0,p=p.substring(0,p.length-1);var t={truncate:q,name:p,suffices:s};k.push(t),n[p]=t,i.push(p)}var u=function(b){for(var c="",i=0,j=0;j<k.length;j++){var l=k[j],m=b(l.name);if(null===m||void 0===m||Array.isArray(m)&&0===m.length||"object"==typeof m&&0===Object.keys(m).length)i++;else if(c+=j===i?e:d||",",Array.isArray(m)){g&&(c+=l.name+"=");for(var n=0;n<m.length;n++)n>0&&(c+=l.suffices["*"]?d||",":",",l.suffices["*"]&&g&&(c+=l.name+"=")),c+=f?encodeURIComponent(m[n]).replace(/!/g,"%21"):a(m[n])}else if("object"==typeof m){g&&!l.suffices["*"]&&(c+=l.name+"=");var o=!0;for(var p in m)o||(c+=l.suffices["*"]?d||",":","),o=!1,c+=f?encodeURIComponent(p).replace(/!/g,"%21"):a(p),c+=l.suffices["*"]?"=":",",c+=f?encodeURIComponent(m[p]).replace(/!/g,"%21"):a(m[p])}else g&&(c+=l.name,h&&""===m||(c+="=")),null!=l.truncate&&(m=m.substring(0,l.truncate)),c+=f?encodeURIComponent(m).replace(/!/g,"%21"):a(m)}return c};return u.varNames=i,{prefix:e,substitution:u}}function c(a){if(!(this instanceof c))return new c(a);for(var d=a.split("{"),e=[d.shift()],f=[],g=[],h=[];d.length>0;){var i=d.shift(),j=i.split("}")[0],k=i.substring(j.length+1),l=b(j);g.push(l.substitution),f.push(l.prefix),e.push(k),h=h.concat(l.substitution.varNames)}this.fill=function(a){for(var b=e[0],c=0;c<g.length;c++){var d=g[c];b+=d(a),b+=e[c+1]}return b},this.varNames=h,this.template=a}function d(a,b){if(a===b)return!0;if("object"==typeof a&&"object"==typeof b){if(Array.isArray(a)!==Array.isArray(b))return!1;if(Array.isArray(a)){if(a.length!==b.length)return!1;for(var c=0;c<a.length;c++)if(!d(a[c],b[c]))return!1}else{var e;for(e in a)if(void 0===b[e]&&void 0!==a[e])return!1;for(e in b)if(void 0===a[e]&&void 0!==b[e])return!1;for(e in a)if(!d(a[e],b[e]))return!1}return!0}return!1}function e(a){var b=String(a).replace(/^\s+|\s+$/g,"").match(/^([^:\/?#]+:)?(\/\/(?:[^:@]*(?::[^:@]*)?@)?(([^:\/?#]*)(?::(\d*))?))?([^?#]*)(\?[^#]*)?(#[\s\S]*)?/);return b?{href:b[0]||"",protocol:b[1]||"",authority:b[2]||"",host:b[3]||"",hostname:b[4]||"",port:b[5]||"",pathname:b[6]||"",search:b[7]||"",hash:b[8]||""}:null}function f(a,b){function c(a){var b=[];return a.replace(/^(\.\.?(\/|$))+/,"").replace(/\/(\.(\/|$))+/g,"/").replace(/\/\.\.$/,"/../").replace(/\/?[^\/]*/g,function(a){"/.."===a?b.pop():b.push(a)}),b.join("").replace(/^\//,"/"===a.charAt(0)?"/":"")}return b=e(b||""),a=e(a||""),b&&a?(b.protocol||a.protocol)+(b.protocol||b.authority?b.authority:a.authority)+c(b.protocol||b.authority||"/"===b.pathname.charAt(0)?b.pathname:b.pathname?(a.authority&&!a.pathname?"/":"")+a.pathname.slice(0,a.pathname.lastIndexOf("/")+1)+b.pathname:a.pathname)+(b.protocol||b.authority||b.pathname?b.search:b.search||a.search)+b.hash:null}function g(a){return a.split("#")[0]}function h(a,b){if(a&&"object"==typeof a)if(void 0===b?b=a.id:"string"==typeof a.id&&(b=f(b,a.id),a.id=b),Array.isArray(a))for(var c=0;c<a.length;c++)h(a[c],b);else{"string"==typeof a.$ref&&(a.$ref=f(b,a.$ref));for(var d in a)"enum"!==d&&h(a[d],b)}}function i(a,b,c,d,e,f){if(Error.call(this),void 0===a)throw new Error("No code supplied for error: "+b);this.message=b,this.params=c,this.code=a,this.dataPath=d||"",this.schemaPath=e||"",this.subErrors=f||null;var g=new Error(this.message);if(this.stack=g.stack||g.stacktrace,!this.stack)try{throw g}catch(g){this.stack=g.stack||g.stacktrace}}function j(a,b){if(b.substring(0,a.length)===a){var c=b.substring(a.length);if(b.length>0&&"/"===b.charAt(a.length-1)||"#"===c.charAt(0)||"?"===c.charAt(0))return!0}return!1}function k(a){var b=new n,c=a||"en",d={addFormat:function(){b.addFormat.apply(b,arguments)},language:function(a){return a?(s[a]||(a=a.split("-")[0]),s[a]?(c=a,a):!1):c},addLanguage:function(a,b){var c;for(c in o)b[c]&&!b[o[c]]&&(b[o[c]]=b[c]);var d=a.split("-")[0];if(s[d]){s[a]=Object.create(s[d]);for(c in b)"undefined"==typeof s[d][c]&&(s[d][c]=b[c]),s[a][c]=b[c]}else s[a]=b,s[d]=b;return this},freshApi:function(a){var b=k();return a&&b.language(a),b},validate:function(a,d,e,f){var g=new n(b,!1,s[c],e,f);"string"==typeof d&&(d={$ref:d}),g.addSchema("",d);var h=g.validateAll(a,d,null,null,"");return!h&&f&&(h=g.banUnknownProperties()),this.error=h,this.missing=g.missing,this.valid=null===h,this.valid},validateResult:function(){var a={};return this.validate.apply(a,arguments),a},validateMultiple:function(a,d,e,f){var g=new n(b,!0,s[c],e,f);"string"==typeof d&&(d={$ref:d}),g.addSchema("",d),g.validateAll(a,d,null,null,""),f&&g.banUnknownProperties();var h={};return h.errors=g.errors,h.missing=g.missing,h.valid=0===h.errors.length,h},addSchema:function(){return b.addSchema.apply(b,arguments)},getSchema:function(){return b.getSchema.apply(b,arguments)},getSchemaMap:function(){return b.getSchemaMap.apply(b,arguments)},getSchemaUris:function(){return b.getSchemaUris.apply(b,arguments)},getMissingUris:function(){return b.getMissingUris.apply(b,arguments)},dropSchemas:function(){b.dropSchemas.apply(b,arguments)},defineKeyword:function(){b.defineKeyword.apply(b,arguments)},defineError:function(a,b,c){if("string"!=typeof a||!/^[A-Z]+(_[A-Z]+)*$/.test(a))throw new Error("Code name must be a string in UPPER_CASE_WITH_UNDERSCORES");if("number"!=typeof b||b%1!==0||1e4>b)throw new Error("Code number must be an integer > 10000");if("undefined"!=typeof o[a])throw new Error("Error already defined: "+a+" as "+o[a]);if("undefined"!=typeof p[b])throw new Error("Error code already used: "+p[b]+" as "+b);o[a]=b,p[b]=a,r[a]=r[b]=c;for(var d in s){var e=s[d];e[a]&&(e[b]=e[b]||e[a])}},reset:function(){b.reset(),this.error=null,this.missing=[],this.valid=!0},missing:[],error:null,valid:!0,normSchema:h,resolveUrl:f,getDocumentUri:g,errorCodes:o};return d}Object.keys||(Object.keys=function(){var a=Object.prototype.hasOwnProperty,b=!{toString:null}.propertyIsEnumerable("toString"),c=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],d=c.length;return function(e){if("object"!=typeof e&&"function"!=typeof e||null===e)throw new TypeError("Object.keys called on non-object");var f=[];for(var g in e)a.call(e,g)&&f.push(g);if(b)for(var h=0;d>h;h++)a.call(e,c[h])&&f.push(c[h]);return f}}()),Object.create||(Object.create=function(){function a(){}return function(b){if(1!==arguments.length)throw new Error("Object.create implementation only accepts one parameter.");return a.prototype=b,new a}}()),Array.isArray||(Array.isArray=function(a){return"[object Array]"===Object.prototype.toString.call(a)}),Array.prototype.indexOf||(Array.prototype.indexOf=function(a){if(null===this)throw new TypeError;var b=Object(this),c=b.length>>>0;if(0===c)return-1;var d=0;if(arguments.length>1&&(d=Number(arguments[1]),d!==d?d=0:0!==d&&1/0!==d&&d!==-1/0&&(d=(d>0||-1)*Math.floor(Math.abs(d)))),d>=c)return-1;for(var e=d>=0?d:Math.max(c-Math.abs(d),0);c>e;e++)if(e in b&&b[e]===a)return e;return-1}),Object.isFrozen||(Object.isFrozen=function(a){for(var b="tv4_test_frozen_key";a.hasOwnProperty(b);)b+=Math.random();try{return a[b]=!0,delete a[b],!1}catch(c){return!0}});var l={"+":!0,"#":!0,".":!0,"/":!0,";":!0,"?":!0,"&":!0},m={"*":!0};c.prototype={toString:function(){return this.template},fillFromObject:function(a){return this.fill(function(b){return a[b]})}};var n=function(a,b,c,d,e){if(this.missing=[],this.missingMap={},this.formatValidators=a?Object.create(a.formatValidators):{},this.schemas=a?Object.create(a.schemas):{},this.collectMultiple=b,this.errors=[],this.handleError=b?this.collectError:this.returnError,d&&(this.checkRecursive=!0,this.scanned=[],this.scannedFrozen=[],this.scannedFrozenSchemas=[],this.scannedFrozenValidationErrors=[],this.validatedSchemasKey="tv4_validation_id",this.validationErrorsKey="tv4_validation_errors_id"),e&&(this.trackUnknownProperties=!0,this.knownPropertyPaths={},this.unknownPropertyPaths={}),this.errorMessages=c,this.definedKeywords={},a)for(var f in a.definedKeywords)this.definedKeywords[f]=a.definedKeywords[f].slice(0)};n.prototype.defineKeyword=function(a,b){this.definedKeywords[a]=this.definedKeywords[a]||[],this.definedKeywords[a].push(b)},n.prototype.createError=function(a,b,c,d,e){var f=this.errorMessages[a]||r[a];if("string"!=typeof f)return new i(a,"Unknown error code "+a+": "+JSON.stringify(b),b,c,d,e);var g=f.replace(/\{([^{}]*)\}/g,function(a,c){var d=b[c];return"string"==typeof d||"number"==typeof d?d:a});return new i(a,g,b,c,d,e)},n.prototype.returnError=function(a){return a},n.prototype.collectError=function(a){return a&&this.errors.push(a),null},n.prototype.prefixErrors=function(a,b,c){for(var d=a;d<this.errors.length;d++)this.errors[d]=this.errors[d].prefixWith(b,c);return this},n.prototype.banUnknownProperties=function(){for(var a in this.unknownPropertyPaths){var b=this.createError(o.UNKNOWN_PROPERTY,{path:a},a,""),c=this.handleError(b);if(c)return c}return null},n.prototype.addFormat=function(a,b){if("object"==typeof a){for(var c in a)this.addFormat(c,a[c]);return this}this.formatValidators[a]=b},n.prototype.resolveRefs=function(a,b){if(void 0!==a.$ref){if(b=b||{},b[a.$ref])return this.createError(o.CIRCULAR_REFERENCE,{urls:Object.keys(b).join(", ")},"","");b[a.$ref]=!0,a=this.getSchema(a.$ref,b)}return a},n.prototype.getSchema=function(a,b){var c;if(void 0!==this.schemas[a])return c=this.schemas[a],this.resolveRefs(c,b);var d=a,e="";if(-1!==a.indexOf("#")&&(e=a.substring(a.indexOf("#")+1),d=a.substring(0,a.indexOf("#"))),"object"==typeof this.schemas[d]){c=this.schemas[d];var f=decodeURIComponent(e);if(""===f)return this.resolveRefs(c,b);if("/"!==f.charAt(0))return void 0;for(var g=f.split("/").slice(1),h=0;h<g.length;h++){var i=g[h].replace(/~1/g,"/").replace(/~0/g,"~");if(void 0===c[i]){c=void 0;break}c=c[i]}if(void 0!==c)return this.resolveRefs(c,b)}void 0===this.missing[d]&&(this.missing.push(d),this.missing[d]=d,this.missingMap[d]=d)},n.prototype.searchSchemas=function(a,b){if(a&&"object"==typeof a){"string"==typeof a.id&&j(b,a.id)&&void 0===this.schemas[a.id]&&(this.schemas[a.id]=a);for(var c in a)if("enum"!==c)if("object"==typeof a[c])this.searchSchemas(a[c],b);else if("$ref"===c){var d=g(a[c]);d&&void 0===this.schemas[d]&&void 0===this.missingMap[d]&&(this.missingMap[d]=d)}}},n.prototype.addSchema=function(a,b){if("string"!=typeof a||"undefined"==typeof b){if("object"!=typeof a||"string"!=typeof a.id)return;b=a,a=b.id}a===g(a)+"#"&&(a=g(a)),this.schemas[a]=b,delete this.missingMap[a],h(b,a),this.searchSchemas(b,a)},n.prototype.getSchemaMap=function(){var a={};for(var b in this.schemas)a[b]=this.schemas[b];return a},n.prototype.getSchemaUris=function(a){var b=[];for(var c in this.schemas)(!a||a.test(c))&&b.push(c);return b},n.prototype.getMissingUris=function(a){var b=[];for(var c in this.missingMap)(!a||a.test(c))&&b.push(c);return b},n.prototype.dropSchemas=function(){this.schemas={},this.reset()},n.prototype.reset=function(){this.missing=[],this.missingMap={},this.errors=[]},n.prototype.validateAll=function(a,b,c,d,e){var f;if(b=this.resolveRefs(b),!b)return null;if(b instanceof i)return this.errors.push(b),b;var g,h=this.errors.length,j=null,k=null;if(this.checkRecursive&&a&&"object"==typeof a){if(f=!this.scanned.length,a[this.validatedSchemasKey]){var l=a[this.validatedSchemasKey].indexOf(b);if(-1!==l)return this.errors=this.errors.concat(a[this.validationErrorsKey][l]),null}if(Object.isFrozen(a)&&(g=this.scannedFrozen.indexOf(a),-1!==g)){var m=this.scannedFrozenSchemas[g].indexOf(b);if(-1!==m)return this.errors=this.errors.concat(this.scannedFrozenValidationErrors[g][m]),null}if(this.scanned.push(a),Object.isFrozen(a))-1===g&&(g=this.scannedFrozen.length,this.scannedFrozen.push(a),this.scannedFrozenSchemas.push([])),j=this.scannedFrozenSchemas[g].length,this.scannedFrozenSchemas[g][j]=b,this.scannedFrozenValidationErrors[g][j]=[];else{if(!a[this.validatedSchemasKey])try{Object.defineProperty(a,this.validatedSchemasKey,{value:[],configurable:!0}),Object.defineProperty(a,this.validationErrorsKey,{value:[],configurable:!0})}catch(n){a[this.validatedSchemasKey]=[],a[this.validationErrorsKey]=[]}k=a[this.validatedSchemasKey].length,a[this.validatedSchemasKey][k]=b,a[this.validationErrorsKey][k]=[]}}var o=this.errors.length,p=this.validateBasic(a,b,e)||this.validateNumeric(a,b,e)||this.validateString(a,b,e)||this.validateArray(a,b,e)||this.validateObject(a,b,e)||this.validateCombinations(a,b,e)||this.validateHypermedia(a,b,e)||this.validateFormat(a,b,e)||this.validateDefinedKeywords(a,b,e)||null;if(f){for(;this.scanned.length;){var q=this.scanned.pop();delete q[this.validatedSchemasKey]}this.scannedFrozen=[],this.scannedFrozenSchemas=[]}if(p||o!==this.errors.length)for(;c&&c.length||d&&d.length;){var r=c&&c.length?""+c.pop():null,s=d&&d.length?""+d.pop():null;p&&(p=p.prefixWith(r,s)),this.prefixErrors(o,r,s)}return null!==j?this.scannedFrozenValidationErrors[g][j]=this.errors.slice(h):null!==k&&(a[this.validationErrorsKey][k]=this.errors.slice(h)),this.handleError(p)},n.prototype.validateFormat=function(a,b){if("string"!=typeof b.format||!this.formatValidators[b.format])return null;var c=this.formatValidators[b.format].call(null,a,b);return"string"==typeof c||"number"==typeof c?this.createError(o.FORMAT_CUSTOM,{message:c}).prefixWith(null,"format"):c&&"object"==typeof c?this.createError(o.FORMAT_CUSTOM,{message:c.message||"?"},c.dataPath||null,c.schemaPath||"/format"):null},n.prototype.validateDefinedKeywords=function(a,b){for(var c in this.definedKeywords)if("undefined"!=typeof b[c])for(var d=this.definedKeywords[c],e=0;e<d.length;e++){var f=d[e],g=f(a,b[c],b);if("string"==typeof g||"number"==typeof g)return this.createError(o.KEYWORD_CUSTOM,{key:c,message:g}).prefixWith(null,"format");if(g&&"object"==typeof g){var h=g.code||o.KEYWORD_CUSTOM;if("string"==typeof h){if(!o[h])throw new Error("Undefined error code (use defineError): "+h);h=o[h]}var i="object"==typeof g.message?g.message:{key:c,message:g.message||"?"},j=g.schemaPath||"/"+c.replace(/~/g,"~0").replace(/\//g,"~1");return this.createError(h,i,g.dataPath||null,j)}}return null},n.prototype.validateBasic=function(a,b,c){var d;return(d=this.validateType(a,b,c))?d.prefixWith(null,"type"):(d=this.validateEnum(a,b,c))?d.prefixWith(null,"type"):null},n.prototype.validateType=function(a,b){if(void 0===b.type)return null;var c=typeof a;null===a?c="null":Array.isArray(a)&&(c="array");var d=b.type;"object"!=typeof d&&(d=[d]);for(var e=0;e<d.length;e++){var f=d[e];if(f===c||"integer"===f&&"number"===c&&a%1===0)return null}return this.createError(o.INVALID_TYPE,{type:c,expected:d.join("/")})},n.prototype.validateEnum=function(a,b){if(void 0===b["enum"])return null;for(var c=0;c<b["enum"].length;c++){var e=b["enum"][c];if(d(a,e))return null}return this.createError(o.ENUM_MISMATCH,{value:"undefined"!=typeof JSON?JSON.stringify(a):a})},n.prototype.validateNumeric=function(a,b,c){return this.validateMultipleOf(a,b,c)||this.validateMinMax(a,b,c)||this.validateNaN(a,b,c)||null},n.prototype.validateMultipleOf=function(a,b){var c=b.multipleOf||b.divisibleBy;return void 0===c?null:"number"==typeof a&&a%c!==0?this.createError(o.NUMBER_MULTIPLE_OF,{value:a,multipleOf:c}):null},n.prototype.validateMinMax=function(a,b){if("number"!=typeof a)return null;if(void 0!==b.minimum){if(a<b.minimum)return this.createError(o.NUMBER_MINIMUM,{value:a,minimum:b.minimum}).prefixWith(null,"minimum");if(b.exclusiveMinimum&&a===b.minimum)return this.createError(o.NUMBER_MINIMUM_EXCLUSIVE,{value:a,minimum:b.minimum}).prefixWith(null,"exclusiveMinimum")}if(void 0!==b.maximum){if(a>b.maximum)return this.createError(o.NUMBER_MAXIMUM,{value:a,maximum:b.maximum}).prefixWith(null,"maximum");if(b.exclusiveMaximum&&a===b.maximum)return this.createError(o.NUMBER_MAXIMUM_EXCLUSIVE,{value:a,maximum:b.maximum}).prefixWith(null,"exclusiveMaximum")}return null},n.prototype.validateNaN=function(a){return"number"!=typeof a?null:isNaN(a)===!0||1/0===a||a===-1/0?this.createError(o.NUMBER_NOT_A_NUMBER,{value:a}).prefixWith(null,"type"):null},n.prototype.validateString=function(a,b,c){return this.validateStringLength(a,b,c)||this.validateStringPattern(a,b,c)||null},n.prototype.validateStringLength=function(a,b){return"string"!=typeof a?null:void 0!==b.minLength&&a.length<b.minLength?this.createError(o.STRING_LENGTH_SHORT,{length:a.length,minimum:b.minLength}).prefixWith(null,"minLength"):void 0!==b.maxLength&&a.length>b.maxLength?this.createError(o.STRING_LENGTH_LONG,{length:a.length,maximum:b.maxLength}).prefixWith(null,"maxLength"):null},n.prototype.validateStringPattern=function(a,b){if("string"!=typeof a||void 0===b.pattern)return null;var c=new RegExp(b.pattern);return c.test(a)?null:this.createError(o.STRING_PATTERN,{pattern:b.pattern}).prefixWith(null,"pattern")},n.prototype.validateArray=function(a,b,c){return Array.isArray(a)?this.validateArrayLength(a,b,c)||this.validateArrayUniqueItems(a,b,c)||this.validateArrayItems(a,b,c)||null:null},n.prototype.validateArrayLength=function(a,b){var c;return void 0!==b.minItems&&a.length<b.minItems&&(c=this.createError(o.ARRAY_LENGTH_SHORT,{length:a.length,minimum:b.minItems}).prefixWith(null,"minItems"),this.handleError(c))?c:void 0!==b.maxItems&&a.length>b.maxItems&&(c=this.createError(o.ARRAY_LENGTH_LONG,{length:a.length,maximum:b.maxItems}).prefixWith(null,"maxItems"),this.handleError(c))?c:null},n.prototype.validateArrayUniqueItems=function(a,b){if(b.uniqueItems)for(var c=0;c<a.length;c++)for(var e=c+1;e<a.length;e++)if(d(a[c],a[e])){var f=this.createError(o.ARRAY_UNIQUE,{match1:c,match2:e}).prefixWith(null,"uniqueItems");if(this.handleError(f))return f}return null},n.prototype.validateArrayItems=function(a,b,c){if(void 0===b.items)return null;var d,e;if(Array.isArray(b.items)){for(e=0;e<a.length;e++)if(e<b.items.length){if(d=this.validateAll(a[e],b.items[e],[e],["items",e],c+"/"+e))return d}else if(void 0!==b.additionalItems)if("boolean"==typeof b.additionalItems){if(!b.additionalItems&&(d=this.createError(o.ARRAY_ADDITIONAL_ITEMS,{}).prefixWith(""+e,"additionalItems"),this.handleError(d)))return d}else if(d=this.validateAll(a[e],b.additionalItems,[e],["additionalItems"],c+"/"+e))return d}else for(e=0;e<a.length;e++)if(d=this.validateAll(a[e],b.items,[e],["items"],c+"/"+e))return d;return null},n.prototype.validateObject=function(a,b,c){return"object"!=typeof a||null===a||Array.isArray(a)?null:this.validateObjectMinMaxProperties(a,b,c)||this.validateObjectRequiredProperties(a,b,c)||this.validateObjectProperties(a,b,c)||this.validateObjectDependencies(a,b,c)||null},n.prototype.validateObjectMinMaxProperties=function(a,b){var c,d=Object.keys(a);return void 0!==b.minProperties&&d.length<b.minProperties&&(c=this.createError(o.OBJECT_PROPERTIES_MINIMUM,{propertyCount:d.length,minimum:b.minProperties}).prefixWith(null,"minProperties"),this.handleError(c))?c:void 0!==b.maxProperties&&d.length>b.maxProperties&&(c=this.createError(o.OBJECT_PROPERTIES_MAXIMUM,{propertyCount:d.length,maximum:b.maxProperties}).prefixWith(null,"maxProperties"),this.handleError(c))?c:null},n.prototype.validateObjectRequiredProperties=function(a,b){if(void 0!==b.required)for(var c=0;c<b.required.length;c++){var d=b.required[c];if(void 0===a[d]){var e=this.createError(o.OBJECT_REQUIRED,{key:d}).prefixWith(null,""+c).prefixWith(null,"required");if(this.handleError(e))return e}}return null},n.prototype.validateObjectProperties=function(a,b,c){var d;for(var e in a){var f=c+"/"+e.replace(/~/g,"~0").replace(/\//g,"~1"),g=!1;if(void 0!==b.properties&&void 0!==b.properties[e]&&(g=!0,d=this.validateAll(a[e],b.properties[e],[e],["properties",e],f)))return d;if(void 0!==b.patternProperties)for(var h in b.patternProperties){var i=new RegExp(h);if(i.test(e)&&(g=!0,d=this.validateAll(a[e],b.patternProperties[h],[e],["patternProperties",h],f)))return d}if(g)this.trackUnknownProperties&&(this.knownPropertyPaths[f]=!0,delete this.unknownPropertyPaths[f]);else if(void 0!==b.additionalProperties){if(this.trackUnknownProperties&&(this.knownPropertyPaths[f]=!0,delete this.unknownPropertyPaths[f]),"boolean"==typeof b.additionalProperties){if(!b.additionalProperties&&(d=this.createError(o.OBJECT_ADDITIONAL_PROPERTIES,{}).prefixWith(e,"additionalProperties"),this.handleError(d)))return d}else if(d=this.validateAll(a[e],b.additionalProperties,[e],["additionalProperties"],f))return d}else this.trackUnknownProperties&&!this.knownPropertyPaths[f]&&(this.unknownPropertyPaths[f]=!0)}return null},n.prototype.validateObjectDependencies=function(a,b,c){var d;if(void 0!==b.dependencies)for(var e in b.dependencies)if(void 0!==a[e]){var f=b.dependencies[e];if("string"==typeof f){if(void 0===a[f]&&(d=this.createError(o.OBJECT_DEPENDENCY_KEY,{key:e,missing:f}).prefixWith(null,e).prefixWith(null,"dependencies"),this.handleError(d)))return d}else if(Array.isArray(f))for(var g=0;g<f.length;g++){var h=f[g];if(void 0===a[h]&&(d=this.createError(o.OBJECT_DEPENDENCY_KEY,{key:e,missing:h}).prefixWith(null,""+g).prefixWith(null,e).prefixWith(null,"dependencies"),this.handleError(d)))return d}else if(d=this.validateAll(a,f,[],["dependencies",e],c))return d}return null},n.prototype.validateCombinations=function(a,b,c){return this.validateAllOf(a,b,c)||this.validateAnyOf(a,b,c)||this.validateOneOf(a,b,c)||this.validateNot(a,b,c)||null},n.prototype.validateAllOf=function(a,b,c){if(void 0===b.allOf)return null;for(var d,e=0;e<b.allOf.length;e++){var f=b.allOf[e];if(d=this.validateAll(a,f,[],["allOf",e],c))return d}return null},n.prototype.validateAnyOf=function(a,b,c){if(void 0===b.anyOf)return null;var d,e,f=[],g=this.errors.length;this.trackUnknownProperties&&(d=this.unknownPropertyPaths,e=this.knownPropertyPaths);for(var h=!0,i=0;i<b.anyOf.length;i++){this.trackUnknownProperties&&(this.unknownPropertyPaths={},this.knownPropertyPaths={});var j=b.anyOf[i],k=this.errors.length,l=this.validateAll(a,j,[],["anyOf",i],c);if(null===l&&k===this.errors.length){if(this.errors=this.errors.slice(0,g),this.trackUnknownProperties){for(var m in this.knownPropertyPaths)e[m]=!0,delete d[m];for(var n in this.unknownPropertyPaths)e[n]||(d[n]=!0);h=!1;continue}return null}l&&f.push(l.prefixWith(null,""+i).prefixWith(null,"anyOf"))}return this.trackUnknownProperties&&(this.unknownPropertyPaths=d,this.knownPropertyPaths=e),h?(f=f.concat(this.errors.slice(g)),this.errors=this.errors.slice(0,g),this.createError(o.ANY_OF_MISSING,{},"","/anyOf",f)):void 0},n.prototype.validateOneOf=function(a,b,c){if(void 0===b.oneOf)return null;var d,e,f=null,g=[],h=this.errors.length;this.trackUnknownProperties&&(d=this.unknownPropertyPaths,e=this.knownPropertyPaths);for(var i=0;i<b.oneOf.length;i++){this.trackUnknownProperties&&(this.unknownPropertyPaths={},this.knownPropertyPaths={});var j=b.oneOf[i],k=this.errors.length,l=this.validateAll(a,j,[],["oneOf",i],c);if(null===l&&k===this.errors.length){if(null!==f)return this.errors=this.errors.slice(0,h),this.createError(o.ONE_OF_MULTIPLE,{index1:f,index2:i},"","/oneOf");if(f=i,this.trackUnknownProperties){for(var m in this.knownPropertyPaths)e[m]=!0,delete d[m];for(var n in this.unknownPropertyPaths)e[n]||(d[n]=!0)}}else l&&g.push(l)}return this.trackUnknownProperties&&(this.unknownPropertyPaths=d,this.knownPropertyPaths=e),null===f?(g=g.concat(this.errors.slice(h)),this.errors=this.errors.slice(0,h),this.createError(o.ONE_OF_MISSING,{},"","/oneOf",g)):(this.errors=this.errors.slice(0,h),null)},n.prototype.validateNot=function(a,b,c){if(void 0===b.not)return null;var d,e,f=this.errors.length;this.trackUnknownProperties&&(d=this.unknownPropertyPaths,e=this.knownPropertyPaths,this.unknownPropertyPaths={},this.knownPropertyPaths={});var g=this.validateAll(a,b.not,null,null,c),h=this.errors.slice(f);return this.errors=this.errors.slice(0,f),this.trackUnknownProperties&&(this.unknownPropertyPaths=d,this.knownPropertyPaths=e),null===g&&0===h.length?this.createError(o.NOT_PASSED,{},"","/not"):null},n.prototype.validateHypermedia=function(a,b,d){if(!b.links)return null;for(var e,f=0;f<b.links.length;f++){var g=b.links[f];if("describedby"===g.rel){for(var h=new c(g.href),i=!0,j=0;j<h.varNames.length;j++)if(!(h.varNames[j]in a)){i=!1;break}if(i){var k=h.fillFromObject(a),l={$ref:k};if(e=this.validateAll(a,l,[],["links",f],d))return e}}}};var o={INVALID_TYPE:0,ENUM_MISMATCH:1,ANY_OF_MISSING:10,ONE_OF_MISSING:11,ONE_OF_MULTIPLE:12,NOT_PASSED:13,NUMBER_MULTIPLE_OF:100,NUMBER_MINIMUM:101,NUMBER_MINIMUM_EXCLUSIVE:102,NUMBER_MAXIMUM:103,NUMBER_MAXIMUM_EXCLUSIVE:104,NUMBER_NOT_A_NUMBER:105,STRING_LENGTH_SHORT:200,STRING_LENGTH_LONG:201,STRING_PATTERN:202,OBJECT_PROPERTIES_MINIMUM:300,OBJECT_PROPERTIES_MAXIMUM:301,OBJECT_REQUIRED:302,OBJECT_ADDITIONAL_PROPERTIES:303,OBJECT_DEPENDENCY_KEY:304,ARRAY_LENGTH_SHORT:400,ARRAY_LENGTH_LONG:401,ARRAY_UNIQUE:402,ARRAY_ADDITIONAL_ITEMS:403,FORMAT_CUSTOM:500,KEYWORD_CUSTOM:501,CIRCULAR_REFERENCE:600,UNKNOWN_PROPERTY:1e3},p={};for(var q in o)p[o[q]]=q;var r={INVALID_TYPE:"Invalid type: {type} (expected {expected})",ENUM_MISMATCH:"No enum match for: {value}",ANY_OF_MISSING:'Data does not match any schemas from "anyOf"',ONE_OF_MISSING:'Data does not match any schemas from "oneOf"',ONE_OF_MULTIPLE:'Data is valid against more than one schema from "oneOf": indices {index1} and {index2}',NOT_PASSED:'Data matches schema from "not"',NUMBER_MULTIPLE_OF:"Value {value} is not a multiple of {multipleOf}",NUMBER_MINIMUM:"Value {value} is less than minimum {minimum}",NUMBER_MINIMUM_EXCLUSIVE:"Value {value} is equal to exclusive minimum {minimum}",NUMBER_MAXIMUM:"Value {value} is greater than maximum {maximum}",NUMBER_MAXIMUM_EXCLUSIVE:"Value {value} is equal to exclusive maximum {maximum}",NUMBER_NOT_A_NUMBER:"Value {value} is not a valid number",STRING_LENGTH_SHORT:"String is too short ({length} chars), minimum {minimum}",STRING_LENGTH_LONG:"String is too long ({length} chars), maximum {maximum}",STRING_PATTERN:"String does not match pattern: {pattern}",OBJECT_PROPERTIES_MINIMUM:"Too few properties defined ({propertyCount}), minimum {minimum}",OBJECT_PROPERTIES_MAXIMUM:"Too many properties defined ({propertyCount}), maximum {maximum}",OBJECT_REQUIRED:"Missing required property: {key}",OBJECT_ADDITIONAL_PROPERTIES:"Additional properties not allowed",OBJECT_DEPENDENCY_KEY:"Dependency failed - key must exist: {missing} (due to key: {key})",ARRAY_LENGTH_SHORT:"Array is too short ({length}), minimum {minimum}",ARRAY_LENGTH_LONG:"Array is too long ({length}), maximum {maximum}",ARRAY_UNIQUE:"Array items are not unique (indices {match1} and {match2})",ARRAY_ADDITIONAL_ITEMS:"Additional items not allowed",FORMAT_CUSTOM:"Format validation failed ({message})",KEYWORD_CUSTOM:"Keyword failed: {key} ({message})",CIRCULAR_REFERENCE:"Circular $refs: {urls}",UNKNOWN_PROPERTY:"Unknown property (not in schema)"};i.prototype=Object.create(Error.prototype),i.prototype.constructor=i,i.prototype.name="ValidationError",i.prototype.prefixWith=function(a,b){if(null!==a&&(a=a.replace(/~/g,"~0").replace(/\//g,"~1"),this.dataPath="/"+a+this.dataPath),null!==b&&(b=b.replace(/~/g,"~0").replace(/\//g,"~1"),this.schemaPath="/"+b+this.schemaPath),null!==this.subErrors)for(var c=0;c<this.subErrors.length;c++)this.subErrors[c].prefixWith(a,b);return this};var s={},t=k();return t.addLanguage("en-gb",r),t.tv4=t,t});

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

/*
 *   Copyright (c) 2011-2015 The original author or authors
 *   ------------------------------------------------------
 *   All rights reserved. This program and the accompanying materials
 *   are made available under the terms of the Eclipse Public License v1.0
 *   and Apache License v2.0 which accompanies this distribution.
 *
 *       The Eclipse Public License is available at
 *       http://www.eclipse.org/legal/epl-v10.html
 *
 *       The Apache License v2.0 is available at
 *       http://www.opensource.org/licenses/apache2.0.php
 *
 *   You may elect to redistribute this code under either of these licenses.
 */
//DK: added custom MAX_CONNECTIONS_EXCEEDED failureType handler
!function (factory) {
  // if (typeof require === 'function' && typeof module !== 'undefined') {
  //   // CommonJS loader
  //   var SockJS = require('sockjs-client');
  //   if(!SockJS) {
  //     throw new Error('vertx-eventbus.js requires sockjs-client, see http://sockjs.org');
  //   }
  //   factory(SockJS);
  // } else 
  if (true) {
    // AMD loader
    // define('vertx-eventbus', ['sockjs'], factory);
  } else {}
}(function (SockJS) {

  function makeUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (a, b) {
      return b = Math.random() * 16, (a == 'y' ? b & 3 | 8 : b | 0).toString(16);
    });
  }

  function mergeHeaders(defaultHeaders, headers) {
    if (defaultHeaders) {
      if(!headers) {
        return defaultHeaders;
      }

      for (var headerName in defaultHeaders) {
        if (defaultHeaders.hasOwnProperty(headerName)) {
          // user can overwrite the default headers
          if (typeof headers[headerName] === 'undefined') {
            headers[headerName] = defaultHeaders[headerName];
          }
        }
      }
    }

    // headers are required to be a object
    return headers || {};
  }

  /**
   * EventBus
   *
   * @param url
   * @param options
   * @constructor
   */
  var EventBus = function (url, options) {
    var self = this;

    options = options || {};

    var pingInterval = options.vertxbus_ping_interval || 5000;
    var pingTimerID;

    // attributes
    this.sockJSConn = new SockJS(url, null, options);
    this.state = EventBus.CONNECTING;
    this.handlers = {};
    this.replyHandlers = {};
    this.defaultHeaders = null;

    this.errorListeners = [];
    
    // default event handlers
    this.onerror = function (err) {
      try {
        console.error(err);
      } catch (e) {
        // dev tools are disabled so we cannot use console on IE
      }
      
      for(var i = 0 ; i < self.errorListeners.length; i++) {
    	  self.errorListeners[i](err);
      }
      
    };

    var sendPing = function () {
      self.sockJSConn.send(JSON.stringify({type: 'ping'}));
    };

    this.sockJSConn.onopen = function () {
      // Send the first ping then send a ping every pingInterval milliseconds
      sendPing();
      pingTimerID = setInterval(sendPing, pingInterval);
      self.state = EventBus.OPEN;
      self.onopen && self.onopen();
    };

    this.sockJSConn.onclose = function () {
      self.state = EventBus.CLOSED;
      if (pingTimerID) clearInterval(pingTimerID);
      self.onclose && self.onclose();
    };

    this.sockJSConn.onmessage = function (e) {
      var json = JSON.parse(e.data);

      // define a reply function on the message itself
      if (json.replyAddress) {
        Object.defineProperty(json, 'reply', {
          value: function (message, headers, callback) {
            self.send(json.replyAddress, message, headers, callback);
          }
        });
      }

      if (self.handlers[json.address]) {
        // iterate all registered handlers
        var handlers = self.handlers[json.address];
        for (var i = 0; i < handlers.length; i++) {
          if (json.type === 'err') {
            handlers[i]({failureCode: json.failureCode, failureType: json.failureType, message: json.message});
          } else {
            handlers[i](null, json);
          }
        }
      } else if (self.replyHandlers[json.address]) {
        // Might be a reply message
        var handler = self.replyHandlers[json.address];
        delete self.replyHandlers[json.address];
        if (json.type === 'err') {
          handler({failureCode: json.failureCode, failureType: json.failureType, message: json.message});
        } else {
          handler(null, json);
        }
      } else {
        if (json.type === 'err') {
          self.onerror(json);
        } else {
          try {
            console.warn('No handler found for message: ', json);
          } catch (e) {
            // dev tools are disabled so we cannot use console on IE
          }
        }
      }
    }
  };
  
  EventBus.prototype.addErrorListener = function(listener) {
	  if( this.errorListeners.indexOf(listener) < 0 ) {
		  this.errorListeners.push(listener);
		  return true;
	  }
	  return false;
  };
  
  EventBus.prototype.removeErrorListener = function(listener) {
	  var index = this.errorListeners.indexOf(listener);
	  if(index < 0) return false;
	  this.errorListeners.splice(index, 1);
	  return true;
  };

  /**
   * Send a message
   *
   * @param {String} address
   * @param {Object} message
   * @param {Object} [headers]
   * @param {Function} [callback]
   */
  EventBus.prototype.send = function (address, message, headers, callback) {
    // are we ready?
    if (this.state != EventBus.OPEN) {
      throw new Error('INVALID_STATE_ERR');
    }

    if (typeof headers === 'function') {
      callback = headers;
      headers = {};
    }

    var envelope = {
      type: 'send',
      address: address,
      headers: mergeHeaders(this.defaultHeaders, headers),
      body: message
    };

    if (callback) {
      var replyAddress = makeUUID();
      envelope.replyAddress = replyAddress;
      this.replyHandlers[replyAddress] = callback;
    }

    this.sockJSConn.send(JSON.stringify(envelope));
  };

  /**
   * Publish a message
   *
   * @param {String} address
   * @param {Object} message
   * @param {Object} [headers]
   */
  EventBus.prototype.publish = function (address, message, headers) {
    // are we ready?
    if (this.state != EventBus.OPEN) {
      throw new Error('INVALID_STATE_ERR');
    }

    this.sockJSConn.send(JSON.stringify({
      type: 'publish',
      address: address,
      headers: mergeHeaders(this.defaultHeaders, headers),
      body: message
    }));
  };

  /**
   * Register a new handler
   *
   * @param {String} address
   * @param {Object} [headers]
   * @param {Function} callback
   */
  EventBus.prototype.registerHandler = function (address, headers, callback) {
    // are we ready?
    if (this.state != EventBus.OPEN) {
      throw new Error('INVALID_STATE_ERR');
    }

    if (typeof headers === 'function') {
      callback = headers;
      headers = {};
    }

    // ensure it is an array
    if (!this.handlers[address]) {
      this.handlers[address] = [];
      // First handler for this address so we should register the connection
      this.sockJSConn.send(JSON.stringify({
        type: 'register',
        address: address,
        headers: mergeHeaders(this.defaultHeaders, headers)
      }));
    }

    this.handlers[address].push(callback);
  };

  /**
   * Unregister a handler
   *
   * @param {String} address
   * @param {Object} [headers]
   * @param {Function} callback
   */
  EventBus.prototype.unregisterHandler = function (address, headers, callback) {
    // are we ready?
    if (this.state != EventBus.OPEN) {
      throw new Error('INVALID_STATE_ERR');
    }

    var handlers = this.handlers[address];

    if (handlers) {

      if (typeof headers === 'function') {
        callback = headers;
        headers = {};
      }

      var idx = handlers.indexOf(callback);
      if (idx != -1) {
        handlers.splice(idx, 1);
        if (handlers.length === 0) {
          // No more local handlers so we should unregister the connection
          this.sockJSConn.send(JSON.stringify({
            type: 'unregister',
            address: address,
            headers: mergeHeaders(this.defaultHeaders, headers)
          }));

          delete this.handlers[address];
        }
      }
    }
  };

  /**
   * Closes the connection to the EvenBus Bridge.
   */
  EventBus.prototype.close = function () {
    this.state = EventBus.CLOSING;
    this.sockJSConn.close();
  };

  EventBus.CONNECTING = 0;
  EventBus.OPEN = 1;
  EventBus.CLOSING = 2;
  EventBus.CLOSED = 3;

  if (true) {
    if ( true && module.exports) {
      exports = module.exports = EventBus;
    } else {
      exports.EventBus = EventBus;
    }
  } else {}
});

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

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
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * VitalService javascript interface
 * @param address - vitalservice eventbus address, 'vitalservice' in most cases
 * @param eventBusURL - if null then current window url protocol://host:port/eventbus will be used 
 * @param successCB
 * @param errorCB
 * @param options: 
 * 		{
 * 			logger: (default console), 
 * 			loggingEnabled: (default false),
 * 			disconnectOnWebsocketLimitExceeded: (default false),
 * 			websocketLimitExceededHandler: (default null)
 *		}
 * @returns
 */

/*
if(module) {
	
	var import1 = require(__dirname + '/vitalservice-json-0.2.304.js');
	
	vitaljs = import1.vitaljs;
	VitalServiceJson = import1.VitalServiceJson;
	
	var import2 = require(__dirname + '/vitalservice-impl-0.2.304.js');
	
	VitalServiceWebsocketImpl = import2.VitalServiceWebsocketImpl;
	UUIDGenerator = import2.UUIDGenerator;
	
}
*/

VitalService = function(address, eventbusURL, successCB, errorCB, options) {

	// if(typeof(module) !== 'undefined') {
		
	// 	if( typeof(tv4) === 'undefined' ) {

	// 		VITAL_JSON_SCHEMAS = [];
			
	// 		tv4 = require(__dirname + '/tv4.min.js');
		
	// 		LRUCache = require(__dirname + '/lru.js').LRUCache;
			
	// 		require(__dirname + '/vital-core-0.2.304.js')
	// 		require(__dirname + '/vital-0.2.304.js')
			
	// 		var fs = require('fs');
			
	// 		var items = fs.readdirSync(__dirname + '/domains');
			
	// 		for(var i = 0 ; i < items.length; i++) {
	// 			var file = items[i];
	// 			console.log("Loading domain file: " + file)
	// 			require(__dirname + '/domains/' + file);
	// 		}
					
	// 		var import1 = require(__dirname + '/vitalservice-json-0.2.304.js');
			
	// 		vitaljs = import1.vitaljs;
	// 		VitalServiceJson = import1.VitalServiceJson;
			
	// 		var import2 = require(__dirname + '/vitalservice-impl-0.2.304.js');
			
	// 		VitalServiceWebsocketImpl = import2.VitalServiceWebsocketImpl;
	// 		UUIDGenerator = import2.UUIDGenerator;

	// 	}
		
	// }
	
	var _logger = console;
	
	var _loggingEnabled = false;
	
	var _disconnectOnWebsocketLimitExceeded = false;
	
	var _websocketLimitExceededHandler = null;
	
	if(options != null) {
		if(options.logger != null) {
			_logger = options.logger;
		}
		if(options.loggingEnabled != null) {
			_loggingEnabled = options.loggingEnabled;
		}
		if(options.disconnectOnWebsocketLimitExceeded != null) {
			_disconnectOnWebsocketLimitExceeded = options.disconnectOnWebsocketLimitExceeded;
		}
		if(options.websocketLimitExceededHandler != null) {
			_websocketLimitExceededHandler = options.websocketLimitExceededHandler;
		}
		if(options.impl != null) {
			_logger.warn("Overriding default websocket implementation");
			this.impl = options.impl;
		}
	}
	
	//default is console
	this.logger = _logger;
	
	this.NO_TRANSACTION = null;
	
	if(this.impl == null) {

		//the vitalservice is initialized asynchronously
		this.impl = new VitalServiceWebsocketImpl(address, 'service', eventbusURL, successCB, errorCB, this.logger, _loggingEnabled);
		this.impl.disconnectOnWebsocketLimitExceeded = _disconnectOnWebsocketLimitExceeded;
		this.impl.websocketLimitExceededHandler = _websocketLimitExceededHandler;
		this.impl.newConnection();
		
	}
	
	
}

VitalService.JS_REGISTER_STREAM_HANDLER = 'js-register-stream-handler';

VitalService.JS_UNREGISTER_STREAM_HANDLER = 'js-unregister-stream-handler';

VitalService.JS_LIST_STREAM_HANDLERS = 'js-list-stream-handlers';


VitalService.VERTX_STREAM_SUBSCRIBE = 'vertx-stream-subscribe';

VitalService.VERTX_STREAM_UNSUBSCRIBE = 'vertx-stream-unsubscribe';



VitalService.prototype.setLogger = function(logger){
	if(logger == null) throw new Error("logger cannot be null"); 
	this.impl.logger = logger;
	this.logger = logger;
}

VitalService.prototype.getLogger = function() {
	return this.logger;
}

//non - api

/**
 * returns currently logged in user or null
 */
VitalService.prototype.getCurrentLogin = function() {
	return this.impl.login;
}

/**
 * returns current session ID or null if not authenticated
 */
VitalService.prototype.getSessionID = function() {
	return this.impl.appSessionID;
}

/**
 * Returns appSessionID from cookie or null
 */
VitalService.prototype.getAppSessionID = function() {
	return this.impl.getAppSessionID();
}


//bulkExport(VitalSegment, OutputStream)
//bulkImport(VitalSegment, InputStream)

/**
 * Destroy vitalservice session cookie
 */
VitalService.prototype.destroySessionCookie = function() {
	this.impl.destroySessionCookie();
}

/**
 * Sets auth session expired handler. 
 * Handler returning false prevent further processing.
 */
VitalService.prototype.setAuthSessionExpiredHandler = function(handler) {
	this.impl.authSessionExpiredHandler = handler;
}

VitalService.prototype.getAuthSessionExpiredHandler = function() {
	return this.impl.authSessionExpiredHandler;
}

//bulkExport(VitalSegment, OutputStream)
//bulkImport(VitalSegment, InputStream)

/**
 * Calls datascript with name and params
 * returns ResultList
 */
VitalService.prototype.callFunction = function(functionName, paramsMap, successCB, errorCB) {
	
	if(functionName == VitalService.JS_LIST_STREAM_HANDLERS) {
		
		//list handlers
		this.impl.listStreamHandlers(paramsMap, successCB, errorCB);
		return;
		
	} else if(functionName == VitalService.JS_REGISTER_STREAM_HANDLER) {
		
		this.impl.registerStreamHandler(paramsMap, successCB, errorCB);
		return;
		
	} else if(functionName == VitalService.JS_UNREGISTER_STREAM_HANDLER) {
		
		this.impl.unregisterStreamHandler(paramsMap, successCB, errorCB);
		return;
		
	} else if(functionName == VitalService.VERTX_STREAM_SUBSCRIBE) {
		
		this.impl.streamSubscribe(paramsMap, successCB, errorCB);
		return;
		
	} else if(functionName == VitalService.VERTX_STREAM_UNSUBSCRIBE) {
		
		this.impl.streamUnsubscribe(paramsMap, successCB, errorCB);
		return;
		
	}
	
//	public final static String VERTX_STREAM_SUBSCRIBE = 'vertx-stream-subscribe'
//		
//		public final static String VERTX_STREAM_UNSUBSCRIBE = 'vertx-stream-unsubscribe'
//		
//		public final static String VERTX_STREAM_LIST_SUBSCRIPTIONS = 'vertx-stream-list-subscriptions'
	
	
	this.impl.callMethod('callFunction', [functionName, paramsMap], successCB, errorCB);
}

//close() //vital status?
VitalService.prototype.close = function(successCB, errorCB) {
	this.impl.close(successCB, errorCB);
}

VitalService.prototype.commitTransaction = function(transaction, successCB, errorCB) {
	this.impl.callMethod('commitTransaction', [transaction], successCB, errorCB);
}

VitalService.prototype.createTransaction = function(successCB, errorCB) {
	this.impl.callMethod('createTransaction', [], successCB, errorCB);
}


/**
* Deletes a single URIProperty or List of URIProperty objects, arguments:
* URIPropertyOrList, successCB, errorCB
* VitalTransaction, URIPropertyOrList, successCB, errorCB
* 
*/
VitalService.prototype.delete_ = function() {
	
	var l = arguments.length;
	if(l < 3 || l > 4) {
		this.logger.error("Expected 3 or 4 arguments - see documentation");
		return;
	}
	
	var VitalTransaction = null;
	var URIPropertyOrList = arguments[l - 3];
	var successCB = arguments[l - 2];
	var errorCB = arguments[l - 1];
	if(l == 4) {
		VitalTransaction = arguments[0];	
	}
	this.impl.callMethod('delete', [VitalTransaction, URIPropertyOrList], successCB, errorCB);
}


/**
* Deletes expanded single URIProperty or List of URIProperty objects, arguments:
* URIPropertyorList, successCB, errorCB (3 args)
* VitalTransaction, URIPropertyorList, successCB, errorCB (4 args)
* URIPropertyorList, vitalPathQueryString, successCB, errorCB (4 args)
* VitalTransaction, URIPropertyorList, vitalPathQueryString, successCB, errorCB (5 args)
*/
VitalService.prototype.deleteExpanded = function() {
	
	var l = arguments.length;
	if(l < 3 || l > 5) {
		this.logger.error("Expected 3 to 5 arguments - see documentation");
		return;
	}
	
	var VitalTransaction = null;
	var vitalPathQueryString = null;
	var URIPropertyorList = null;
	if(l == 5) {
		VitalTransaction = arguments[0];
		URIPropertyorList = arguments[1];
		vitalPathQueryString = arguments[2];
	} else if(l == 4) {
		//check type of a[1]
		if(typeof(arguments[1]) == 'string') {
			URIPropertyorList = arguments[0];
			vitalPathQueryString = arguments[1];
		} else {
			VitalTransaction = arguments[0];
			URIPropertyorList = arguments[1];
		}
	} else {
		URIPropertyorList = arguments[0];
	}
	
	var successCB = arguments[l - 2];
	var errorCB = arguments[l - 1];

	var params = [VitalTransaction, URIPropertyorList];
	if(vitalPathQueryString != null) {
		params.push(vitalPathQueryString);
	}

	this.impl.callMethod('deleteExpanded', params, successCB, errorCB);

}


/**
 * Deletes expanded a single graph object, arguments:
 * graphObject, successCB, errorCB
 * VitalTransaction, graphObject, successCB, errorCB
 */
VitalService.prototype.deleteExpandedObject = function() {
	var l = arguments.length;
	if(l < 3 || l > 4) {
		this.logger.error("Expected 3 or 4 arguments - see documentation");
		return;
	}
	
	var VitalTransaction = null;
	var graphObject = arguments[l - 3];
	var successCB = arguments[l - 2];
	var errorCB = arguments[l - 1];
	if(l == 4) {
		VitalTransaction = arguments[0];	
	}
	
	this.impl.callMethod('deleteExpandedObject', [VitalTransaction, graphObject], successCB, errorCB);
}

/**
 * Deletes expanded a list of graph objects with vital path query string, arguments:
 * graphObject, vitalPathQueryString, successCB, errorCB
 * VitalTransaction, graphObject, vitalPathQueryString, successCB, errorCB
 * 
 */
VitalService.prototype.deleteExpandedObjects = function() {
	
	var l = arguments.length;
	if(l < 4 || l > 5) {
		this.logger.error("Expected 4 or 5 arguments - see documentation");
		return;
	}
	
	var VitalTransaction = null;
	var graphObject = arguments[l - 4];
	var vitalPathQueryString = arguments[l - 3];
	var successCB = arguments[l - 2];
	var errorCB = arguments[l - 1];
	if(l == 5) {
		VitalTransaction = arguments[0];	
	}
	
	this.impl.callMethod('deleteExpandedObjects', [VitalTransaction, graphObject, vitalPathQueryString], successCB, errorCB);
}



//deleteFile(URIProperty, String)

/**
* Deletes a single graph object, arguments:
* graphObject, successCB, errorCB
* VitalTransaction, graphObject, successCB, errorCB
*/
VitalService.prototype.deleteObject = function() {
	
	var l = arguments.length;
	if(l < 3 || l > 4) {
		this.logger.error("Expected 3 or 4 arguments - see documentation");
		return;
	}
	
	var VitalTransaction = null;
	var graphObject = arguments[l - 3];
	var successCB = arguments[l - 2];
	var errorCB = arguments[l - 1];
	if(l == 4) {
		VitalTransaction = arguments[0];	
	}
	
	this.impl.callMethod('deleteObject', [VitalTransaction, graphObject], successCB, errorCB);
}

/**
 * Deletes a list of graph objects, arguments:
 * graphObjectsList, successCB, errorCB
 * VitalTransaction, graphObjectsList, successCB, errorCB
 */
VitalService.prototype.deleteObjects = function() {
	
	var l = arguments.length;
	if(l < 3 || l > 4) {
		this.logger.error("Expected 3 or 4 arguments - see documentation");
		return;
	}
	
	var VitalTransaction = null;
	var graphObjectsList = arguments[l - 3];
	var successCB = arguments[l - 2];
	var errorCB = arguments[l - 1];
	if(l == 4) {
		VitalTransaction = arguments[0];	
	}
	
	this.impl.callMethod('deleteObjects', [VitalTransaction, graphObjectsList], successCB, errorCB);
}


//doOperations(ServiceOperations)

//downloadFile(URIProperty, String, OutputStream, boolean)

//fileExists(URIProperty, String)



/**
 * Generates a new URI for given class (class object)
 * returns URIProperty
 */
VitalService.prototype.generateURI = function(classObject, successCB, errorCB) {
	this.impl.callMethod('generateURI', [classObject], successCB, errorCB);
}

/**
 * Gets a GraphObject or list, input is either URIProperty or list of URIProperty objects accordingly
 * Flag controls whether to cache object on the server side
 */
VitalService.prototype.get = function(URIPropertyOrList, doCache, successCB, errorCB) {
	//always service wide context!
	this.impl.callMethod('get', ['ServiceWide', URIPropertyOrList, doCache], successCB, errorCB);
}


/**
 * Gets current app
 * returns App
 */
VitalService.prototype.getApp = function(successCB, errorCB) {
	this.impl.callMethod('getApp', [], successCB, errorCB);
}

/**
 * returns string
 */
VitalService.prototype.getDefaultSegmentName = function(successCB, errorCB) {
	this.impl.callMethod('getDefaultSegmentName', [], successCB, errorCB);
}


/**
 * returns EndpointType
 */
VitalService.prototype.getEndpointType = function(successCB, errorCB) {
	this.impl.callMethod('getEndpointType', [], successCB, errorCB);
}

VitalService.prototype.getExpanded = function(URIProperty, doCache, successCB, errorCB) {
	this.impl.callMethod('getExpanded', [URIProperty, doCache], successCB, errorCB);
}

VitalService.prototype.getExpanded = function(URIProperty, VitalPathQueryString, doCache, successCB, errorCB) {
	this.impl.callMethod('getExpanded', [URIProperty, VitalPathQueryString, doCache], successCB, errorCB);
}

VitalService.prototype.getName = function(successCB, errorCB) {
	this.impl.callMethod('getName', [], successCB, errorCB);
}

VitalService.prototype.getOrganization = function(successCB, errorCB) {
	this.impl.callMethod('getOrganization', [], successCB, errorCB);
}

VitalService.prototype.getSegment = function(segmentID, successCB, errorCB) {
	this.impl.callMethid('getSegment', [segmentID], successCB, errorCB);
}

VitalService.prototype.getTransactions = function(successCB, errorCB) {
	this.impl.callMethod('getTransactions', [], successCB, errorCB);
}

/**
 * Inserts a new object (or objects list) into a segment, arguments:
 * vitalSegment, graphObjectOrList, successCB, error
 * VitalTransaction, vitalSegment, graphObjectOrList, successCB, errorCB
 */
VitalService.prototype.insert = function(VitalTransaction, vitalSegment, graphObjectOrList, successCB, errorCB) {
	
	var l = arguments.length;
	if(l < 4 || l > 5) {
		this.logger.error("Expected 4 or 5 arguments - see documentation");
		return;
	}
	
	var VitalTransaction = null;
	var vitalSegment = arguments[l - 4];
	var graphObjectOrList = arguments[l - 3];
	var successCB = arguments[l - 2];
	var errorCB = arguments[l - 1];
	if(l == 5) {
		VitalTransaction = arguments[0];	
	}
	
//	this.impl.callMethod('deleteObjects', [VitalTransaction, app, graphObjectsList], successCB, errorCB);
	
	this.impl.callMethod('insert', [VitalTransaction, vitalSegment, graphObjectOrList], successCB, errorCB);
}


VitalService.prototype.listDatabaseConnections = function(successCB, errorCB) {
	this.impl.callMethod('listDatabaseConnections', [], successCB, errorCB);
}

//listFiles(String)

VitalService.prototype.listSegments = function(successCB, errorCB) {
	this.impl.callMethod('listSegments', [], successCB, errorCB);
}

VitalService.prototype.listSegmentsWithConfig = function(successCB, errorCB) {
	this.impl.callMethod('listSegmentsWithConfig', [], successCB, errorCB);
}

/**
 * Pings the service 
 * returns VitalStatus
 */
VitalService.prototype.ping = function(successCB, errorCB) {
	this.impl.callMethod('ping', [], successCB, errorCB);
}

//pipeline(Closure<?>)

/**
 * Queries the vitalservice
 */
VitalService.prototype.query = function(vitalQueryString, successCB, errorCB) {
	this.impl.callMethod('query', [vitalQueryString], successCB, errorCB);
}


/**
 * Special method for handling graph queries that embeds objects in GraphMatch results.
 * GRAPH { inlineObjects } value should be set to false to save resources
 */
VitalService.prototype.graphQuery = function(vitalGraphQueryString, successCB, errorCB) {
	
	var _this = this;
	
	this.impl.callMethod('query', [vitalGraphQueryString], function(results){
		
		var _resultsGetter = function(urisList, getSuccessCB, getErrorCB) {
			_this.get(urisList, false, getSuccessCB, getErrorCB);
		};
	
		_this.impl.processGraphQueryResults(results, _resultsGetter, successCB, errorCB);
		
	}, errorCB);
	
}

/**
 * Queries the vitalservice
 */
VitalService.prototype.queryLocal = function(vitalQueryString, successCB, errorCB) {
	this.impl.callMethod('queryLocal', [vitalQueryString], successCB, errorCB);
}

VitalService.prototype.rollbackTransaction = function(transaction, successCB, errorCB) {
	this.impl.callMethod('rollbackTransaction', [transaction], successCB, errorCB);
}


/**
 * Saves a graph object or objects list in default segment or specified segment, the params combinations are:
 * graphObjectOrList, successCB, errorCB (3 args)
 * transaction, graphObjectOrList, successCB, errorCB (4 args)
 * segment, graphObjectOrList, createIfNotExistsFlag, successCB, errorCB (5 args)
 * transaction, segment, graphObjectOrList, createIfNotExistsFlag, successCB, errorCB  (6 args) 
 * 
 */
VitalService.prototype.save = function() {
	
	var l = arguments.length; 
	
	if( l < 3 || l > 6) {
		this.logger.error("save method error, expected 3 to 6 arguments - see documentation");
		return;
	}
	
	var successCB = arguments[arguments.length - 2];
	var errorCB = arguments[arguments.length -1 ];
	
	if(l == 3 || l == 4) {
		
		var VitalTransaction  = l == 4 ? arguments[0] : null;
		var graphObjectOrList = l == 4 ? arguments[1] : arguments[0];
		
		this.impl.callMethod('save', [VitalTransaction, graphObjectOrList], successCB, errorCB);
		
	} else {
		
		var VitalTransaction  = l == 6 ? arguments[0] : null;
		var segment           = l == 6 ? arguments[1] : arguments[0];
		var graphObjectOrList = l == 6 ? arguments[2] : arguments[1];
		var createIfNotExists = l == 6 ? arguments[3] : arguments[2];
		
		this.impl.callMethod('save', [VitalTransaction, segment, graphObjectOrList, createIfNotExists], successCB, errorCB);
		
	}
	
}

VitalService.prototype.sendEvent = function(VITAL_Event, waitForDelivery, successCB, errorCB) {
	this.impl.callMethod('sendEvent', [VITAL_Event, waitForDelivery], successCB, errorCB);
}

VitalService.prototype.sendEvents = function(ListOfVITAL_Events, waitForDelivery, successCB, errorCB) {
	this.impl.callMethod('sendEvents', [ListOfVITAL_Events, waitForDelivery], successCB, errorCB);
}

VitalService.prototype.setDefaultSegmentName = function(defaultsegment, successCB, errorCB) {
	this.impl.callMethod('setDefaultSegmentName', [defaultsegment], successCB, errorCB);
}

//uploadFile(URIProperty, String, InputStream, boolean)

VitalService.prototype.validate = function(successCB, errorCB) {
	this.impl.callMethod('validate', [], successCB, errorCB);
}


/**
 * Returns the result list of all schemas available remotely
 * @returns array of DomainModel objects
 */
VitalService.prototype.getSchemaList = function(successCB, errorCB) {
	this.impl.getSchemaList(successCB, errorCB);
}

/**
 * Returns dependencies of a schema, parents or all ancestors based on recursive flag
 * @returns array of DomainModel objects
 */
VitalService.prototype.getDependenciesOfSchema = function(schemaName, recursive, successCB, errorCB) {
	this.impl.getDependenciesOfSchema(schemaName, recursive, successCB, errorCB);
}

/**
 * Returns an array of json schema objects, the original array is wrapped with {name:, URI:, schema: [] }, the order is preserved
 */
VitalService.prototype.getSchemas = function(schemaNamesArray, successCB, errorCB) {
	this.impl.getSchemas(schemaNamesArray, successCB, errorCB);
}

/**
 * Loads given schema objects ( {name:, URI:, schema: [] } in the given order
 */
VitalService.prototype.loadSchemas = function(jsonSchemasArray, successCB, errorCB) {
	this.impl.loadSchemas(jsonSchemasArray, successCB, errorCB);
}

/**
 * Purges currently loaded domain schemas
 */
VitalService.prototype.purgeSchemas = function(successCB, errorCB) {
	this.impl.purgeSchemas(successCB, errorCB);
}

/**
 * Returns locally loaded domains
 */
VitalService.prototype.getLocalSchemaList = function(successCB, errorCB) {
	this.impl.getLocalSchemaList(successCB, errorCB);
}

/**
 * Unloads schema
 */
VitalService.prototype.unloadSchema = function(schemaURI, successCB, errorCB) {
	this.impl.unloadSchema(schemaURI, successCB, errorCB);
}


if(true) {
	
	module.exports = VitalService;
	
}

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Set this property to redirect pages to maintenance page if vitalservice is unavailable
 */
var VITAL_SERVICE_UNAVAILABLE_URL = null;


/**
 * Set this callback to be notified when session expires
 * depending if returned value is true/false the default callback will be called afterwards
 */
var VITAL_SESSION_EXPIRED_CALLBACK = null;


/**
 * Set this callback to be notified of access to protected resource when no sessionid is given
 * depending if returned value is true/false the default callback will be called afterwards
 */
var VITAL_AUTHENTICATION_REQUIRED_CALLBACK = null;

/**
 * overridden cookie attributes
 */ 
var VITAL_COOKIE_ATTRS = {};

/**
 * use prefixed cookies if there are multiple apps with different logins hosted in same vital app 
 */
var VITAL_COOKIE_PREFIX = '';

//logging disabled by default, no longer in use!
var VITAL_LOGGING = false

/**
 * Websocket based implementation
 * @param address - vitalservice eventbus address, 'vitalservice' in most cases
 * @param eventBusURL - if null then current window url protocol://host:port/eventbus will be used 
 * @param successCB
 * @param errorCB
 * @returns
 */
VitalServiceWebsocketImpl = function(address, type, eventBusURL, successCB, errorCB, logger, loggingEnabled) {
	
	//default logger is console, but can be replaced with watson etc
	this.logger = logger != null ? logger : console;
	this.loggingEnabled = loggingEnabled != null ? loggingEnabled : VITAL_LOGGING;
	
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
	this.sessionID = UUIDGenerator.generate();
	
	//obtained via authentication, appended to every request
	this.appSessionID  = null;
	
	this.login = null;
	
	if(this.loggingEnabled) { this.logger.info('sessionID: ' + this.sessionID); }

	this.address = address;
	
	//notified when reconnection event happens
	this.firstConnectionAttempt = true;
	this.reconnectHandler = null;
	
	//
	this.authAppID = null; 
	
	if(this.address.indexOf('endpoint.') == 0) {
		
		this.authAppID = this.address.substring('endpoint.'.length);
		
		this.COOKIE_SESSION_ID = VITAL_COOKIE_PREFIX + 'sessionID.' + this.authAppID;
		
		if(typeof($) !== 'undefined' && typeof($.cookie) !== 'undefined') {
			this.appSessionID = $.cookie(this.COOKIE_SESSION_ID);
		}
		
	} else {
		
		//no authentication enabled
		this.COOKIE_SESSION_ID = null;
	}
	
	
	this.vsJson = null;
	
	this.closed = false;
	
	//single use callbacks
	this.sH = successCB;
	this.eH = errorCB;
	
	if(eventBusURL != null) {
		this.url = eventBusURL
	} else {
		this.url = window.location.protocol + '//' + window.location.hostname + ':' + window.location.port + '/eventbus';
	}
	
	if(this.loggingEnabled) { this.logger.info("eventbus url", this.url); }
	
	this.windowKilled = false;
	
	this.recTimeout = null;
	
	
	this.eb = null;
	
	if(typeof( VitalServiceJson ) != 'undefined') {
		
		if(this.loggingEnabled) { this.logger.info("loading json validation module..."); }
		
		if(VitalServiceJson.SINGLETON != null) {
			
			if(this.loggingEnabled) { this.logger.info("json singleton already set - reusing"); }
			
		} else {
		
			if(this.loggingEnabled) { this.logger.info("Initializing new json singleton"); }
			
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
	

	this.registeredHandlers = {};

	this.currentHandlers = {};
	
	this.eventbusListenerActive = false;
	this.eventbusHandler = null;
	
	var _this = this;
	if(EventBus == null) {
		throw 'vertx.EventBus module not loaded!' 
	}
	
	if(typeof($) !== 'undefined') {
		$(window).bind('beforeunload', function(){
			_this.windowKilled = true;
		});
	}

	//handler notified when user is logged out
	this.authSessionExpiredHandler = null;

	//by default the client will keep reconnecting
	this.disconnectOnWebsocketLimitExceeded = false;
	//handler notified when no websocket connections are available
	this.websocketLimitExceededHandler = null;
	
}

VitalServiceWebsocketImpl.JS_REGISTER_STREAM_HANDLER = 'js-register-stream-handler';

VitalServiceWebsocketImpl.JS_UNREGISTER_STREAM_HANDLER = 'js-unregister-stream-handler';

VitalServiceWebsocketImpl.JS_LIST_STREAM_HANDLERS = 'js-list-stream-handlers';


VitalServiceWebsocketImpl.VERTX_STREAM_SUBSCRIBE = 'vertx-stream-subscribe';

VitalServiceWebsocketImpl.VERTX_STREAM_UNSUBSCRIBE = 'vertx-stream-unsubscribe';

VitalServiceWebsocketImpl.DomainsManagerScript = 'commons/scripts/DomainsManagerScript';

VitalServiceWebsocketImpl.vitalauth_login = 'vitalauth.login';

VitalServiceWebsocketImpl.vitalauth_logout = 'vitalauth.logout';

VitalServiceWebsocketImpl.vitalauth_authorise = 'vitalauth.authorise';

VitalServiceWebsocketImpl.prototype.getAppSessionID = function() {
	
	if(this.COOKIE_SESSION_ID == null) {
		return null;
	}
	
	//check if cookie exists
	if(typeof($) !== 'undefined' && typeof($.cookie) !== 'undefined') {
		this.appSessionID = $.cookie(this.COOKIE_SESSION_ID);
	}
	
	if(this.appSessionID == null) {
		
		
		if(typeof($) !== 'undefined' && typeof($.cookie) !== 'undefined') {
			$.removeCookie(this.COOKIE_SESSION_ID, VITAL_COOKIE_ATTRS);
			$.removeCookie(this.COOKIE_SESSION_ID);
		}
		
		this.appSessionID = null;
		this.login = null;
		
		
	}
	
	return this.appSessionID;
	
}

VitalServiceWebsocketImpl.prototype.newConnection = function() {
    

	if(this.recTimeout != null) {
		clearInterval(this.recTimeout);
		this.recTimeout = null;
	}
	
	var _this = this;
    var options = {};
    
    /*
    if(configService.protocols_whitelist != null && configService.protocols_whitelist.length > 0 ) {
    		
    		var s = ''
    			
    		configService.protocols_whitelist.splice(0, 2);
    			
    		for(var v = 0; v < configService.protocols_whitelist.length; v++) {
    			if(s.length > 0) s+= ', ';
    			s += configService.protocols_whitelist[v];
    		}
    		
    		
    		
    	options.protocols_whitelist = configService.protocols_whitelist;
    }
    */

    if(this.eb != null) {
    	
    	if(this.loggingEnabled) { this.logger.info("closing existing evenbus connection"); }
    	try {
    		this.eb.close();
    	} catch(e) {
    		this.logger.error('error when closing existing websocket', e);
    	}
    }
    
    this.eb = new EventBus(this.url, options);
    if(this.eb.addErrorListener != null) {
        this.eb.addErrorListener(function(error){
        	
        	_this.logger.error("Vertx eventbus error", error);
        	
        	if(error.failureType === "MAX_CONNECTIONS_EXCEEDED") {
        		
        		_this.logger.error('max active websocket connections limit has been exceeded');
        		
        		if(_this.disconnectOnWebsocketLimitExceeded) {
        			_this.logger.info("not retrying - marking client as closed");
        			_this.closed = true;
        		}

        		if(_this.websocketLimitExceededHandler != null) {
        			_this.websocketLimitExceededHandler();
        		}
        	}
        	
        });    	
    } else {
    	this.logger.warn("eventbus additional listeners not available");
    }

    this.eb.onopen = function() {

    	if(_this.recTimeout != null) {
    			
//   		clearTimeout(_this.recTimeout);
   			clearInterval(_this.recTimeout);
   			_this.recTimeout = null;
    			
   		}
    		
    	
    	var currentKeys = [];
    	
    	for ( var key in _this.currentHandlers ) {
    		currentKeys.push(key);
    	}
    	
    	if(currentKeys.length > 0) {
    		
    		if(_this.loggingEnabled) { _this.logger.info('refreshing session handlers: ', currentKeys); }
    		
    		var args = [VitalServiceWebsocketImpl.VERTX_STREAM_SUBSCRIBE, {streamNames: currentKeys, sessionID: _this.sessionID}];
    		if(_this.admin) {
    			//insert null app
    			args.splice(0, 0, null);
    		}
    		//re-register it ?
    		_this.callMethod('callFunction', args, function(successRL){
    			
    			if(true /*!_this.eventbusListenerActive*/) {
    				
    				_this.eventbusHandler = _this.createNewHandler();
    				_this.eb.registerHandler('stream.'+ _this.sessionID, _this.eventbusHandler);
    				_this.eventbusListenerActive = true;
    				
    			}
    			
    			
    		}, function(errorResponse){
    			_this.logger.error(errorResponse);
    		});
    			
    	}
    		
    		
    	if(_this.windowKilled) {
    		_this.logger.error("sockjstransport, opened - but window killed!");
    		return;
    	}
    		
    	if(_this.loggingEnabled) { _this.logger.info('sockjstransport, transport ready'); }
    		
    	if(_this.sH != null) {
    		
    		if(_this.appSessionID != null) {
    			
    			_this.initialSessionCheck();
    			
    		} else {
    			_this.sH();
    			_this.sH = null;
    			_this.eH = null;
    		}
    	}
    	
    	if(_this.firstConnectionAttempt) {
    		_this.firstConnectionAttempt = false;
    	} else {
    		if(_this.reconnectHandler != null) {
    			if(_this.loggingEnabled) { _this.logger.info("Notifying reconnect handler"); }
    			_this.reconnectHandler();
    		} else {
    			if(_this.loggingEnabled) { _this.logger.info("No reconnect handler to notify"); }
    		}
    	}
    		
    };
    	
    this.eb.onclose = function() {

    	if(_this.closed) {
    		if(_this.loggingEnabled) {
    			_this.logger.info("client already closed");
    		}
    		return;
    	}
    	
    	_this.logger.warn('sockjstransport, transport closed, ');

    	if(_this.recTimeout != null) {
    		clearInterval(_this.recTimeout);
    		_this.recTimeout = null;
    	}
    		
    	if(_this.eH != null) {
    		_this.eH('e');
    	}
    	_this.eH = null;
    		
    	if(_this.windowKilled) {
    		_this.logger.warn("window killed, don't show popup, or try to reconnect");
    		return
    	}
    	
    	_this.eventbusListenerActive = false;
    		
//   		_this.recTimeout = setTimeout(function () {
    	_this.recTimeout = setInterval(function () {
   			_this.newConnection();
   		}, 3000);
   		
    };
    	
}

VitalServiceWebsocketImpl.prototype.initialSessionCheck = function() {
	
	var _this = this;
	
	var args = [];
	
	
	if(this.admin) {
		args.push(null);
	}
	
	args.push(VitalServiceWebsocketImpl.vitalauth_authorise);
	
	args.push({sessionID: this.appSessionID});
	
	this.callMethod('callFunction', args, function(authResults){
		
		for(var i = 0 ; i < authResults.results.length; i++) {
			
			var g = authResults.results[i].graphObject;
			
			if(_this.loginTypes.indexOf(g.type) >= 0) {
				_this.login = g;
			}
			
		}
		
		_this.sH();
		_this.eH = null;
		_this.sH = null;		
		
	}, function(errorMsg){
		
		_this.logger.warn(errorMsg);
		
		if(typeof($) !== 'undefined' && typeof($.cookie) !== 'undefined') {
			$.removeCookie(_this.COOKIE_SESSION_ID, VITAL_COOKIE_ATTRS);
			$.removeCookie(_this.COOKIE_SESSION_ID);
		}
		_this.appSessionID = null;
		_this.login = null;
		
		_this.sH();
		_this.eH = null;
		_this.sH = null;
		
		
	});
	
}

VitalServiceWebsocketImpl.prototype.loadDynamicOntologies = function(successCB, errorCB) {
	
	var _this = this;
	
	this.callMethod('callFunction', ['commons/scripts/DomainsManagerScript', {action: 'listJsonSchemas'}], function(domainsRL){

		if(_this.loggingEnabled) { _this.logger.info("domainsRL: ", domainsRL); }
		
		_this.vsJson.reloadOntologies(domainsRL);
		
		successCB(domainsRL);
		
	}, errorCB);
	
}
	
	
/**
 * Calls the service method, all input parameters are validated against json schema - same 
 */
VitalServiceWebsocketImpl.prototype.callMethod = function(method, args, successCB, errorCB) {
	
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
			
			var params = args[args.length - 1];
			
			__ignoreJsonValidationErrors = params && params.__ignoreJsonValidationErrors == true;
			
			//set the sessionID param
			if(functionName == VitalServiceWebsocketImpl.vitalauth_logout) {
				params.sessionID = this.appSessionID;
			}
			
		} else {
			this.logger.error("method : " + method + " requires at least two arguments");
			return
		}
		
		
	}
	
	
	try {
	
	this.eb.send(this.address, data, function(err, result) {
		
		if(err != null) {
			
			_this.logger.error("ERROR:", err);
			
			if(typeof(err) === 'object' && err.message != null) {
				err = err.message;
			}
			
			result = { status: 'error', message: err };
			
		} else {
			
			//unpack result object
			result = result.body
			
		}
		
		if(result == null) {
			result = { status: 'error', message: 'request timed out' };
		}
		
		if(_this.loggingEnabled) { _this.logger.debug(method + ' result: ', result); }
		
		
		//check the status, then object
		
		if(result.status == 'ok') {
			
			//validate response
			
			var response = result.response;
			
			if(response != null) {
				
				//check response type
				if(_this.vsJson != null) {
					var validationError = _this.vsJson.validateResponse(response);
					
					if(validationError != null) {
						if(!__ignoreJsonValidationErrors) {
							errorCB(validationError);
							return;
						} else {
							_this.logger.warn("json schema validation error ignored - ", validationError);
						}
						
					}
					
				} else {
					
					errorCB("No VitalServiceJson module loaded - it's mandatory.");
					return;
					
				}
				
				
				//sessionID filter - get the session from positive authentication
				if(functionName == VitalServiceWebsocketImpl.vitalauth_login && _this.COOKIE_SESSION_ID != null) {
					for(var i = 0 ; i < response.results.length; i++) {
						var g = response.results[i].graphObject;
						if(g.type == 'http://vital.ai/ontology/vital#UserSession') {
							_this.appSessionID = g.get('sessionID');
							if(_this.loggingEnabled) { _this.logger.info('new auth session: ', g.get('sessionID')); }
							//store it in cookie
							var attrs = {expires: 7};
							_this.extend(attrs, VITAL_COOKIE_ATTRS);
							if(typeof($) !== 'undefined' && typeof($.cookie) !== 'undefined') {
								$.cookie(_this.COOKIE_SESSION_ID, g.get('sessionID'), attrs);
							}
						} else if(_this.loginTypes.indexOf(g.type) >= 0) {
							_this.login = g;
						}
					}
					
				}
				
				if(functionName == VitalServiceWebsocketImpl.vitalauth_logout && _this.COOKIE_SESSION_ID != null) {
					
					_this.appSessionID = null
					_this.login = null;
					if(typeof($) !== 'undefined' && typeof($.cookie) !== 'undefined') {
						$.removeCookie(_this.COOKIE_SESSION_ID, VITAL_COOKIE_ATTRS);
						$.removeCookie(_this.COOKIE_SESSION_ID);
					}
					if(_this.loggingEnabled) { _this.logger.info("session cookie removed"); }
					
				}
				
			}
			
			successCB(result.response);
			
		} else {
			
			
			if(functionName == VitalServiceWebsocketImpl.vitalauth_logout && _this.COOKIE_SESSION_ID != null) {
				//no matter what, always remove the cookie and notify callback
				if(typeof($) !== 'undefined' && typeof($.cookie) !== 'undefined') {
					$.removeCookie(_this.COOKIE_SESSION_ID, VITAL_COOKIE_ATTRS);
					$.removeCookie(_this.COOKIE_SESSION_ID);
				}
				_this.login = null;
				_this.appSessionID = null;
			}
			
			if(result.message != null && typeof(result.message.indexOf) === 'function') {
				
				if( result.message.indexOf('java.net.ConnectException') >= 0 && VITAL_SERVICE_UNAVAILABLE_URL != null ) {
					
					window.location.href = VITAL_SERVICE_UNAVAILABLE_URL;
					return;
					
				}
				
			}
			
			var callErrorCB = true;
			
			//this is thrown when session expired / not found
			if(result.status == 'error_denied') {

				if(typeof($) !== 'undefined' && typeof($.cookie) !== 'undefined') {
					$.removeCookie(_this.COOKIE_SESSION_ID, VITAL_COOKIE_ATTRS);
					$.removeCookie(_this.COOKIE_SESSION_ID);
				}
				_this.appSessionID = null;
				_this.login = null;
				
				if(_this.authSessionExpiredHandler != null) {
					
					callErrorCB = _this.authSessionExpiredHandler(result.message);
					
				} else if( VITAL_SESSION_EXPIRED_CALLBACK != null) {
				
					callErrorCB = VITAL_SESSION_EXPIRED_CALLBACK(result.message);
				}
				
			} else if(result.status == 'error_authentication_required') {
				
				//this happens when no session / user is set and protected endpoint is called
				if( VITAL_AUTHENTICATION_REQUIRED_CALLBACK != null ) {
					callErrorCB = VITAL_AUTHENTICATION_REQUIRED_CALLBACK(result.message);
				}
				
			}
			
			if(callErrorCB == true) {
				errorCB(result.message)
			}
			
			
		}
		
	});
	
	
	} catch(e) {
		
		_this.logger.error(e);
		
		errorCB('' + e);
		
	}
}

VitalServiceWebsocketImpl.prototype.close = function(successCB, errorCB){
	
	var _this = this;
	
	this.closed = true;
	if(this.eb != null) {
		try {
			this.eb.close()
		} catch(e) {
			_this.logger.error(e);
		}
		this.eb = null;
	}
	
	if(successCB != null) {
		successCB();
	}
	
	
}

VitalServiceWebsocketImpl.prototype.listStreamHandlers = function(paramsMap, successCB, errorCB) {
	
	var results = [];
	
	for(var key in this.registeredHandlers) {
		
		var g = {
			URI: 'handler:' + key,
			type: 'http://vital.ai/ontology/vital-core#VITAL_Node',
			"http://vital.ai/ontology/vital-core#isActive": this.currentHandlers[key] != null,
			"http://vital.ai/ontology/vital-core#hasName": key
		};
		
		results.push({
			_type: 'ai.vital.vitalservice.query.ResultElement',
			score: 1.0,
			graphObject: g
		});
		
	}
	
	
	var res = {
		_type: 'ai.vital.vitalservice.query.ResultList',
		results: results
	};
	
	var errorMsg = this.vsJson.validateResponse(res);
	
	if(errorMsg != null) {
		errorCB(errorMsg);
		return;
	}
	
	successCB(res);
	
	
}

VitalServiceWebsocketImpl.prototype.registerStreamHandler = function(paramsMap, successCB, errorCB) {
	
	var streamName = paramsMap.streamName;
	
	var handlerFunction = paramsMap.handlerFunction;
	
	if(streamName == null) {
		errorCB("No 'streamName' param");
		return;
	}
	
	if(handlerFunction == null) {
		errorCB("No 'handlerFunction' param");
		return;
	}
	
	if( typeof(handlerFunction) != 'function') {
		errorCB("handlerFunction must be a function");
		return;
	}
	
	
	if( this.registeredHandlers[streamName] != null ) {
		errorCB("Handler for stream " + streamName + " already registered.");
		return;
	}
	
	this.registeredHandlers[streamName] = handlerFunction;
	
	successCB({
		_type: 'ai.vital.vitalservice.query.ResultList',
		status: {
			_type: 'ai.vital.vitalservice.VitalStatus',
			status: 'ok',
			message: 'Handler for stream ' + streamName + ' registered successfully'
		}
	});
	
}



VitalServiceWebsocketImpl.prototype.unregisterStreamHandler = function(paramsMap, successCB, errorCB) {
	
	var streamName = paramsMap.streamName;
	if(streamName == null) {
		errorCB("No 'streamName' param");
		return;
	}
	
	var currentHandler = this.registeredHandlers[streamName];
	
	if(currentHandler == null) {
		errorCB("No handler for stream " + streamName + " registered");
		return;
	}
	
	if(this.currentHandlers[streamName] != null) {
		errorCB("Handler in use " + streamName);
		return;
	}
	
	
	delete this.registeredHandlers[streamName];
	
	successCB({
		_type: 'ai.vital.vitalservice.query.ResultList',
		status: {
			_type: 'ai.vital.vitalservice.VitalStatus',
			status: 'ok',
			message: 'Handler for stream ' + streamName + ' unregistered successfully'
		}
	});
	
}

VitalServiceWebsocketImpl.prototype.streamSubscribe = function(paramsMap, successCB, errorCB) {
	
	//first check if we are able to
	
	var streamName = paramsMap.streamName;
	if(streamName == null) {
		errorCB("No 'streamName' param");
		return;
	}
	
	var currentHandler = this.registeredHandlers[streamName];
	
	if(currentHandler == null) {
		errorCB("No handler for stream " + streamName + " registered");
		return;
	}
	
	var activeHandler = this.currentHandlers[streamName]
	
	if(activeHandler != null) {
		errorCB("Handler for stream " + streamName + " already subscribed");
		return;
	}
	
	var args = [VitalServiceWebsocketImpl.VERTX_STREAM_SUBSCRIBE, {streamNames: [streamName], sessionID: this.sessionID}];
	
	if(this.admin) {
		//insert null app
		args.splice(0, 0, null);
	}
	
	
	//first call the server side, on success register
	
	var _this = this;
	
	this.callMethod('callFunction', args, function(successRL){
		
		if(!_this.eventbusListenerActive) {
			
			_this.eventbusHandler = _this.createNewHandler();
			_this.eb.registerHandler('stream.'+ _this.sessionID, _this.eventbusHandler);
			_this.eventbusListenerActive = true;
		}
		
		
		_this.currentHandlers[streamName] = currentHandler;
		
		successCB({
			_type: 'ai.vital.vitalservice.query.ResultList',
			status: {
				_type: 'ai.vital.vitalservice.VitalStatus',
				status: 'ok',
				message: 'Successfully Subscribe to stream ' + streamName
			}
		});
		
	}, function(errorResponse){
		errorCB(errorResponse);
	});
	
	
}


Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};

VitalServiceWebsocketImpl.prototype.streamUnsubscribe = function(paramsMap, successCB, errorCB) {

	var streamName = paramsMap.streamName;
	if(streamName == null) {
		errorCB("No 'streamName' param");
		return;
	}
	
	var activeHandler = this.currentHandlers[streamName]
	
	if( activeHandler == null ) {
		errorCB("No handler subscribed to stream " + streamName);
		return;
	}
	
	var _this = this;
	
	var args = [VitalServiceWebsocketImpl.VERTX_STREAM_UNSUBSCRIBE, {streamNames: [streamName], sessionID: this.sessionID}];
	
	if(this.admin) {
		//insert null app
		args.splice(0, 0, null);
	}
	
	this.callMethod('callFunction', args, function(successRL){
		
		delete _this.currentHandlers[streamName];

		if(Object.size( _this.currentHandlers) < 1) {
			_this.eb.unregisterHandler('stream.'+ _this.sessionID, _this.eventbusHandler);
			_this.eventbusListenerActive = false;
		}
		
		successCB({
			_type: 'ai.vital.vitalservice.query.ResultList',
			status: {
				_type: 'ai.vital.vitalservice.VitalStatus',
				status: 'ok',
				message: 'Successfully unsubscribe from stream ' + streamName
			}
		});
		
	}, function(errorResponse){
		errorCB(errorResponse);
	});
	
}


VitalServiceWebsocketImpl.prototype.createNewHandler = function() {
	
	var _this = this;
	
	var wrapperHandler = function(err, json) {
		
		if(err) {
			_this.logger.error("ERROR:", err);
			return;
		}
		
		json = json.body;
		
		if(json._type != 'ai.vital.vitalservice.query.ResultList' ) {
			_this.logger.error("only ai.vital.vitalservice.query.ResultList type messages accepted");
			return
		}
		
		var stream = json.streamName;
		
		if(stream == null) {
			_this.logger.error('No streamName property in json message');
			return;
		}
		
		
		var handlerFunction = _this.currentHandlers[stream];
		
		if(handlerFunction == null) {
			_this.logger.warn("Received a message for nonexisting stream handler: " + stream)
			return;
		}
		
		//check response type
		if(_this.vsJson != null) {
			var validationError = _this.vsJson.validateResponse(json);
				
			if(validationError != null) {
				_this.logger.error("Async message json validation failed: ", validationError);
				return;
			}
			
			handlerFunction(json);
				
		} else {
				
			_this.logger.error("No VitalServiceJson module loaded - cannot parse async message.");
			return;
				
		}
			
	};
	
	return wrapperHandler;
	
}


/*
 * Returns the result list of all schemas available remotely
 * @returns array of DomainModel objects
 */
VitalServiceWebsocketImpl.prototype.getSchemaList = function(successCB, errorCB) {

	var _this = this;
	
	this.callMethod('callFunction', [VitalServiceWebsocketImpl.DomainsManagerScript, {action: 'listJsonSchemas'}], function(domainsRL){
	
		if(_this.loggingEnabled) { _this.logger.info("remote domains list", domainsRL); }
		
		var r = [];
		
		for(var i = 0 ; i < domainsRL.results.length; i++) {
			var g = domainsRL.results[i].graphObject;
			r.push(g);
		}
		
		successCB(r);
		
	}, errorCB);
	
}


/*
 * Returns dependencies of a schema, parents or all ancestors based on recursive flag
 * @returns array of DomainModel objects
 */
VitalServiceWebsocketImpl.prototype.getDependenciesOfSchema = function(schemaName, recursive, successCB, errorCB) {
	
	var _this = this;
	
	this.callMethod('callFunction', [VitalServiceWebsocketImpl.DomainsManagerScript, {action: 'getDependenciesOfSchema', schemaName: schemaName, recursive: recursive}], function(domainsRL){
		
		if(_this.loggingEnabled) { _this.logger.info("schema dependencies list", domainsRL); }
		
		var r = [];
		
		for(var i = 0 ; i < domainsRL.results.length; i++) {
			var g = domainsRL.results[i].graphObject;
			r.push(g);
		}
		
		successCB(r);
		
	}, errorCB);
}

/*
 * Returns an array of json schema objects, the original array is wrapped with {name:, URI:, schema: [] }, the order is preserved
 */
VitalServiceWebsocketImpl.prototype.getSchemas = function(schemaNamesArray, successCB, errorCB) {
	
	this.getNextSchema(schemaNamesArray, 0, [], successCB, errorCB);
	
}

VitalServiceWebsocketImpl.prototype.getNextSchema = function(schemaNamesArray, index, output, successCB, errorCB) {

	if(index >= schemaNamesArray.length) {
		var parsedOutput = [];
		for(var i = 0; i < output.length; i++) {
			var c = output[i];
			var schemaArray = JSON.parse(c);
//			var name = schemaNamesArray[i];
//			var uri = this.vsJson.getSchemaURI(schemaArray);
			parsedOutput.push(schemaArray);
			
		}
		successCB(parsedOutput);
		return
	}
	
	this.getNextSchemaPart(schemaNamesArray, index, output, 1, successCB, errorCB);
	
}


VitalServiceWebsocketImpl.prototype.getNextSchemaPart = function(schemaNamesArray, index, output, part, successCB, errorCB) {

	var _this = this;
	
	this.callMethod('callFunction', [VitalServiceWebsocketImpl.DomainsManagerScript, {action: 'getJsonSchema', schemaName: schemaNamesArray[index], part: part, size: 6000}], function(partRL){
		
		var content = partRL.results[0].graphObject.get('name');
		
		if(part == 1) {
			output.push(content);
		} else {
			output[output.length-1] = output[output.length-1] + content;
		}
		
		if(part >= partRL.totalResults) {
			//no more parts
			_this.getNextSchema(schemaNamesArray, index + 1, output, successCB, errorCB);
		} else {
			_this.getNextSchemaPart(schemaNamesArray, index, output, part + 1, successCB, errorCB);
		}
		
	}, errorCB);
	
}


/*
 * Loads given schema objects ( {name:, URI:, schema: [] } in the given order
 */
VitalServiceWebsocketImpl.prototype.loadSchemas = function(jsonSchemasArray, successCB, errorCB) {
	try {
		this.vsJson.loadSchemas(jsonSchemasArray);
		successCB();
	} catch(e) {
		errorCB(e);
	}
}


/*
 * Purges currently loaded schemas
 */
VitalServiceWebsocketImpl.prototype.purgeSchemas = function(successCB, errorCB) {

	try {
		this.vsJson.purgeSchemas();
		successCB();
	} catch(e) {
		errorCB(e);
	}
	
}

/*
 * Returns locally loaded domains
 */
VitalServiceWebsocketImpl.prototype.getLocalSchemaList = function(successCB, errorCB) {
	try {
		successCB(this.vsJson.getLocalSchemaList());
	} catch(e) {
		errorCB(e);
	}
}


/*
 * Unloads schema with given URI, a simple validation is performed to check
 */
VitalServiceWebsocketImpl.prototype.unloadSchema = function(schemaURI, successCB, errorCB) {
	
	var _this = this;
	
	try {
		this.vsJson.unloadSchema(schemaURI);
		successCB();
	} catch(e) {
		_this.logger.error(e);
		errorCB(e);
	}
}


VitalServiceWebsocketImpl.prototype.processGraphQueryResults = function(results, _resultsGetter, successCB, errorCB) {
	
	var urisSet = [];
	var urisToGet = [];
	
	//process results
	for(var i = 0 ; i < results.results.length; i++) {
		
		var g = results.results[i].graphObject;
		
		if(g.type != 'http://vital.ai/ontology/vital-core#GraphMatch') {
			errorCB('query_error expected GraphMatch objects only, found: ' + g.type);
			return;
		}
		
		for(var p in g) {
			
			if(!g.hasOwnProperty(p)) continue;
			
			var v = g[p];
			
			if(typeof(v) == 'object') {
				
				if(v._type == 'ai.vital.vitalsigns.model.property.URIProperty') {
					var uri = v.value;
					if(uri != null && urisSet.indexOf(uri) < 0) {
						urisSet.push(uri);
						urisToGet.push(v);
					}
				}
				
			}
			
		}
		
	}
	
	if(urisToGet.length == 0) {
		successCB(results);
		return;
	}
	
	_resultsGetter(urisToGet, function(getResults){

		var resMap = {};
		
		for(var i = 0; i < getResults.results.length; i++) {
			
			var g = getResults.results[i].graphObject;
		
			resMap[g.URI] = g;
			
		}
		
		//augment the graphmatch instances now
		for(var i = 0 ; i < results.results.length; i++) {
			
			var g = results.results[i].graphObject;
			
			var thisURIs = [];
			
			for(var p in g) {
				
				if(!g.hasOwnProperty(p)) continue;
				
				var v = g[p];
				
				if(typeof(v) == 'object') {
					
					if(v._type == 'ai.vital.vitalsigns.model.property.URIProperty') {
						var uri = v.value;
						if(thisURIs.indexOf(uri) < 0) {
							thisURIs.push(uri);
						}
					}
					
				}
				
			}
			
			for( var u = 0 ; u < thisURIs.length; u++ ) {
				
				var uri = thisURIs[u];
				
				var x = resMap[uri];
				
				g[uri] = x;
			}
			
		}

		successCB(results);
		
	}, function(getError){
		
		errorCB("query_error Query succeeded but there was an error when getting graph match results: " + getError);
		
	});
	
}

VitalServiceWebsocketImpl.prototype.destroySessionCookie = function(){
	
	if(this.COOKIE_SESSION_ID != null && typeof($) !== 'undefined' && typeof($.cookie) !== 'undefined') {
		$.removeCookie(this.COOKIE_SESSION_ID, VITAL_COOKIE_ATTRS);
		$.removeCookie(this.COOKIE_SESSION_ID);
	}
	
}

//substitute for jquery.extend, source: http://stackoverflow.com/a/11197343
VitalServiceWebsocketImpl.prototype.extend = function extend(a, b){
    for(var key in b)
        if(b.hasOwnProperty(key))
            a[key] = b[key];
    return a;
}


UUIDGenerator = {};

UUIDGenerator.generate = function() {
	
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
		var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
		return v.toString(16);
	});
	
}


if(true) {

	//SockJS = require(__dirname + '/sockjs-0.3.4.min.js');
	
	EventBus = __webpack_require__(16);
	
	module.exports = {
		UUIDGenerator: UUIDGenerator,
		VitalServiceWebsocketImpl: VitalServiceWebsocketImpl
	};
	
}

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * VitalService JSON submodule - validates the messages and transferred objects using json schema
 * TODO - all service objects validation
 */
VitalServiceJson = function(logger, loggingEnabled) {

	this.logger = logger != null ? logger : console;
	this.loggingEnabled = loggingEnabled == true;
	
	if(VitalServiceJson.SINGLETON != null) {
		throw ("VitalServiceJson SINGLETON already initialized");
	}
	
	if(typeof(tv4) == 'undefined') {
		throw ("missing tv4 library");
	}
	
	if(typeof(VITAL_JSON_SCHEMAS) == 'undefined') {
		throw ("No VITAL_JSON_SCHEMAS list defined - vital-core domain unavailable")
	}

	/*
	if(typeof(vital_core_0_2_252_schema) == 'undefined') {
		throw ("No vital_core_0_2_252_schema - core json schema not loaded");
	}
	
	if(typeof(vital_0_2_252_schema) == 'undefined') {
		throw ("No vital_0_2_252_schema - domain json schema not loaded");
	}
	*/
	
	//optimize memory usage in large domains
	this.schemasCache = new LRUCache(10000);
	
	this.loaded = {};
	this.dynamicPropertiesClasses = [];
	
	this.domainURI2LongProperties = {};
	
	
	this.vitalCoreSchema = null;
	this.vitalDomainSchema = null;
	
	this.dynamicDomains = [];
	
	this.domainsMap = {};
	
	this.propertiesMap = {};
	
	var sFiles = [];
	
	for(var i = 0 ; i < VITAL_JSON_SCHEMAS.length; i++) {
		
		var schema = VITAL_JSON_SCHEMAS[i];
		
		if(schema.domainURI == VitalServiceJson.VITAL_CORE_URI ) {
			this.vitalCoreSchema = schema;
		} else if(schema.domainURI == VitalServiceJson.VITAL_DOMAIN_URI ) {
			this.vitalDomainSchema = schema;
		} else {
			this.dynamicDomains.push(schema);
		}
		

		sFiles.push(schema);
		
		this._fixLongPropertySchema(schema);
		
		this.domainsMap[schema.domainURI] = schema;
		
		for(var j = 0 ; j < schema.properties.length; j++) {
			var p = schema.properties[j];
			this.propertiesMap[p.URI] = p;
		}
		
	}
	
	
	if(this.vitalCoreSchema == null) {
		this.logger.error("No vital core schema loaded");
		return;
	}
	
	if(this.vitalDomainSchema == null) {
		this.logger.error("No vital domain schema loaded");
		return;
	}
	
	
	for(var i = 0 ; i < VitalServiceJson.customOntologies.length; i++) {
		
		var schema = VitalServiceJson.customOntologies[i];
		
		var schemaURI = schema.domainURI;
		
		this._fixLongPropertySchema(schema);
		
		this.domainsMap[schema.domainURI] = schema;
		
		for(var i = 0 ; i < schema.properties.length; i++) {
			var p = schema.properties[i];
			this.propertiesMap[p.URI] = p;
		}
		
		sFiles.push(schema);
		
	}
	
	sFiles = VitalServiceJson.topologicalSort(sFiles);
	
	this._load(sFiles);
	
}

VitalServiceJson.topologicalSort = function(domains){
	
	//initially get the root domain
	var out = [];
	var roots = [];
	
	var copy = domains.slice();
	
	for(var i = domains.length -1; i >= 0; i--) {
		var domain = domains[i];
		if(domain.parents == null || domain.parents.length == 0) {
			domains.splice(i, 1)
			roots.push(domain);
		} else {
			domain.parentsCopy = domain.parents.slice();
		}
	}
	
	if(roots.length != 1) throw "Expected exactly 1 root domain, found: " + S.length;
	
	while(roots.length > 0) {
		
		var removed = roots.splice(0, 1)[0];
		
		out.push(removed);
		
		var uri = removed.domainURI;
		
		for(var i = domains.length - 1; i >= 0; i--) {
			
			var d = domains[i];
			
			if(d.parentsCopy != null) {
				var indexOfParent = d.parentsCopy.indexOf(uri); 
				if(indexOfParent >= 0) {
					d.parentsCopy.splice(indexOfParent, 1);
					if(d.parentsCopy.length == 0) {
						delete d.parentsCopy;
						domains.splice(i, 1);
						roots.push(d);
					}
				}
			}
			
		}
		
	}
	
	if(copy.length != out.length) {
		console.error("input domains", copy);
		console.error("output domains", out);
		throw "Incomplete domains graph detected!"
	}
	
	return out;
	
}

/**
 * @type VitalServiceJson
 */
VitalServiceJson.SINGLETON = null;

VitalServiceJson.VITAL_CORE_URI = 'http://vital.ai/ontology/vital-core';

VitalServiceJson.VITAL_DOMAIN_URI = 'http://vital.ai/ontology/vital';



VitalServiceJson.prototype._fixLongPropertySchema = function(schema) {
	
	var schemaURI = schema.domainURI;
	
	//collect long properties
	var longProperties = {};
	for(var i = 0; i < schema['properties'].length; i++) {
		var property = schema['properties'][i];
		if(property.type == 'LongProperty'){
			longProperties[property.URI] = true;
		}
	}
	
	var keys = Object.keys(longProperties);

	if(this.loggingEnabled) { 
		this.logger.info( schema.domainURI + " Long properties: ", Object.keys(longProperties));
	}
	
	var otherSchemasKeys = null;
	
	for(var i = 0 ; i < schema.schemas.length; i++) {
		
		var classSchema = schema.schemas[i];
		
		var properties = classSchema['properties'];
		
		var pURIs = Object.keys(properties);
	
		
		for(var j = 0; j < pURIs.length; j++) {
			
			var pURI = pURIs[j];
			
			var isLongProp = false;
			
			if(longProperties[pURI] != null) {
//				this.logger.warn("Updating long schema: ", properties[pURI])
//				this.logger.warn("Into: ", {});
				
				//get rid of type constraint for long properties
				isLongProp = true;
				
			} else {
				
				if(otherSchemasKeys == null) {
					otherSchemasKeys = Object.keys(this.domainURI2LongProperties);
				}
				
				for(var s = 0 ; s < otherSchemasKeys.length; s++) {
					
					var k = otherSchemasKeys[s];
					
					var otherLongProps = this.domainURI2LongProperties[k];
					
					if(otherLongProps[pURI] != null) {
						isLongProp = true;
						break;
					}
					
				}
				
			}
			
			if(isLongProp) {
				
				properties[pURI] = {};
				
			}
			
		}
		
	}

	this.domainURI2LongProperties[schemaURI] = longProperties;
	
}


VitalServiceJson.prototype._load = function(sFiles) {
	

	if(this.loggingEnabled) { this.logger.info("schemas count: ", sFiles.length); }
	
	var newLoaded = {};
	
	for(var i = 0 ; i < sFiles.length; i++) {
		
		var schemas = sFiles[i].schemas;
		
		for(var j = 0 ; j < schemas.length; j++) {
			
			var schema = schemas[j];
			
			var extendsURI = schema['extends'];
			
			if(extendsURI != null) {
				
				var l = this.loaded[extendsURI];
				
				if(l == null) {
					this.logger.warn("Base schema not found: " + extendsURI);
					continue;
				}
			
				var currentProps = l['properties'];
				
				var newProps = schema['properties'];
				
				this.extend(currentProps, newProps);
				
//				tv4.addSchema(extendsURI, l);
				
				this.loaded[extendsURI] = l;
				
			} else {
				
				var uri = schema.id;
				
				if(uri == null) {
					throw "unknown schema object, no id";
				}
				
				
				if(schema.type == null) {
					schema.type = 'object';
				}
				
				if(schema.required == null) {
					schema.required = [ "URI", "type" ];
				}
				
				if(schema.additionalProperties == null) {
					schema.additionalProperties = false;
				}
				
				
				var props = schema.properties;
				if(props == null) {
					schema.properties = props;
					props = {};
				}
				
				if(props.URI == null) {
					props.URI = {
						"type": "string"
					};
				}
				
				if(props.type == null) {
					props.type = {
						"enum" : [ uri ]
					};
				}
				
				if(props.types == null) {
					props.types = {
						"type" : "array",
						"minItems" : 1,
						"items" : {
							"type" : "string"
						},
						"uniqueItems" : true
					};
				}
				
				this.loaded[uri] = schema;
				
				newLoaded[uri] = schema;
				
			}
			
		}
		
	}
	
	
	//collect all  VITAL_GraphContainerObject subclasses
	for (var key in newLoaded) {
		if ( ! newLoaded.hasOwnProperty(key)) continue;
		
		//collect parent classes
		var classHierarchy = this.listSuperclasses(key, [], false);
		
		if(classHierarchy.indexOf(VitalServiceJson.VITAL_CORE_URI + '#VITAL_GraphContainerObject') >= 0) {
			
			if(this.dynamicPropertiesClasses.indexOf(key) < 0) {
				this.dynamicPropertiesClasses.push(key);
			}
			
		}
		
	}
	
}

VitalServiceJson.prototype.listSuperclasses = function(thisClass, results, direct) {
	return this._listSuperclasses(thisClass, results, direct, true);
}

VitalServiceJson.prototype._listSuperclasses = function(thisClass, results, direct, topLevel) {
	
	var obj = this.loaded[thisClass];
	
	if(obj == null) throw "class not found in registry: " + thisClass;
	
	results.push(thisClass);
	
	if(direct == true && topLevel == false) {
		return results;
	}
	
	var parent = obj['parent'];
	
	if(parent != null) {
		
		results = this._listSuperclasses(parent, results, direct, false);
		
	} 
	return results;
	
}

VitalServiceJson.prototype.listSubclasses = function(thisClass, results, direct) {
	
	var obj = this.loaded[thisClass];
	
	if(obj == null) throw "class not found in registry: " + thisClass;

	results.push(thisClass);
	
	var pool = [thisClass];
	
	while(pool.length > 0) {
		
		var newPool = [];
		
		for(var i = 0 ; i < pool.length; i++) {
			
			var parentURI = pool[i];
			
			for(var key in this.loaded) {
				
				if ( ! this.loaded.hasOwnProperty(key) )  continue;
				
				var cls = this.loaded[key];
				
				if( cls.parent == parentURI ) {
					
					if(results.indexOf(key) < 0) {
						
						results.push(key);
						
						newPool.push(key);
						
					}
					
				}
				
			}
			
			
		}
		
		if(direct) {
			pool = [];
		} else {
			pool = newPool;
		}
		
	}
	
	return results;
	
}

VitalServiceJson.prototype.listSuperproperties = function(thisProperty, results, direct) {
	return this._listSuperproperties(thisProperty, results, direct, true);
}

VitalServiceJson.prototype._listSuperproperties = function(thisProperty, results, direct, topLevel) {
	
	var obj = this.propertiesMap[thisProperty];
	
	if(obj == null) throw "property not found in registry: " + thisProperty;
	
	results.push(thisProperty);
	
	if(direct == true && topLevel == false) {
		return results;
	}
	
	var parent = obj['parent'];
	
	if(parent != null) {
		
		results = this._listSuperproperties(parent.URI, diresults, direct, false);
		
	}
	
	return results;
	
}

VitalServiceJson.prototype.listSubproperties = function(thisProperty, results, direct) {
	
	var obj = this.propertiesMap[thisProperty];
	
	if(obj == null) throw "property not found in registry: " + thisProperty;

	var topLevel = true;
	
	results.push(thisProperty);
	
	var pool = [thisProperty];
	
	while(pool.length > 0) {
		
		var newPool = [];
		
		for(var i = 0 ; i < pool.length; i++) {
			
			var parentURI = pool[i];
			
			for(var key in this.propertiesMap) {
				
				if ( ! this.propertiesMap.hasOwnProperty(key) )  continue;
				
				var cls = this.propertiesMap[key];
				
				if( cls.parent == parentURI ) {
					
					if(results.indexOf(key) < 0) {
						
						results.push(key);
						
						newPool.push(key);
						
					}
					
				}
				
			}
			
			
		}
		
		if(direct) {
			pool = [];
		} else {
			pool = newPool;
		}
		
	}
	
	return results;
	
}


VitalServiceJson.customOntologies = [];

/**
 * Validates vitalservice json response object
 * returns errorMessage or null if ok
 */
VitalServiceJson.prototype.validateResponse = function(response) {

	if(response == null) return 'null response object - nothing to validate';
	
	if(response.type != null) {
		var status = this.validateGraphObject(response);
		return status; 
	}
	
	if(vitaljs.isArray(response)) {
		
		for(var i = 0 ; i < response.length; i++) {
			
			var o = response[i];
			
			if(o.type != null) {
				
				var status = this.validateGraphObject(o);
				if(status != null) return status;
				
			} else {
				
				return "expected list of graph objects";
				
			}
			
		}
		
		if(this.loggingEnabled) { this.logger.info("Validation passed, checked " + response.length + " objects in array"); }
		
		return null;
		
		
	}
	
	//only result list
	if( response._type == 'ai.vital.vitalservice.query.ResultList' ) {
	
		if(response.results == null) {
			response.results = [];
		}
		
		vitaljs.resultList(response);
		
		if( response.results == null ) return null;
		
		for(var i = 0 ; i < response.results.length; i++) {
			
			
			var resultElement = response.results[i];
			
			var graphObject = resultElement.graphObject;
	
			var status = this.validateGraphObject(graphObject);
			if(status != null) return status;
			
		}
		
		if(this.loggingEnabled) { this.logger.info("Validation passed, checked " + response.results.length + " objects in ResultList"); }
	    
	    return null;

	} else {
		
		if(this.loggingEnabled) { this.logger.info("response validation skipped: " + response._type); }
		return null;
	}
	
}


VitalServiceJson.prototype._getJsonSchema = function(typeURI) {
	
	var s = null;
	
	s = this.schemasCache.get(typeURI);
	if(s != null) return s;
	
	var schema = this.loaded[typeURI]
	
	if(schema == null) throw "No schema found for graph object type: " + typeURI;
	
	//aggregate additional properties from upper classes
	s = this.extend({}, schema);
	s.properties = {};
	this.extend(s.properties, schema.properties);
	
	var superClassesWithThis = this.listSuperclasses(typeURI, [], false);
	
	for( var i = 0 ; i < superClassesWithThis.length; i++) {
		if( i == 0 ) continue;
		var parentSchema = this.loaded[superClassesWithThis[i]];
		
		//we do not need deep copy here
		for(var k in parentSchema.properties) {
			if(parentSchema.properties.hasOwnProperty(k)) {
				if(k != 'URI' && k != 'type' && k != 'types') {
					s.properties[k] = parentSchema.properties[k];
				}
			}
		}
		
	}
	
	this.schemasCache.put(typeURI, s);
	
	return s;
	
	
}

VitalServiceJson.prototype.validateGraphObject = function(graphObject) {
	
	if(graphObject.type == null) return "Graph object without type!";

	if(this.dynamicPropertiesClasses.indexOf(graphObject.type) >= 0) {
		//dynamic properties objects are allowed
		vitaljs.graphObject(graphObject);
		return null;
	}
	
	var s = null;
	
	try {
		s = this._getJsonSchema(graphObject.type);
	} catch(e) {
		return e.message;
	}
	
	var valid = tv4.validate(graphObject, s);
	
	if(!valid) {
		this.logger.error("Object invalid", tv4.error);
		this.logger.error("Object invalid code ", tv4.error.code);
		this.logger.error("Object invalid message ", tv4.error.message);
		this.logger.error("Object invalid dataPath ", tv4.error.dataPath);
		this.logger.error("Object invalid schemaKey ", tv4.error.schemaKey);
		this.logger.error("Object invalid obj Key ", graphObject);
		return "Code: " + tv4.error.code + 
		" Message: " + tv4.error.message +
		" DataPath: " + tv4.error.dataPath + 
		" SchemaKey: " + tv4.error.schemaKey;
	}

	vitaljs.graphObject(graphObject);
	
	return null;
	
}


VitalServiceJson.prototype.loadSchemas = function(schemasArray) {
	
	var filtered = [];
	
	for(var si = 0 ; si < schemasArray.length; si++) {
		
		var schemaObj = schemasArray[si];
		
		var loadedAlready = false;
		
		for( var i = 0 ; i < this.dynamicDomains.length; i ++ ) {
			if(this.dynamicDomains[i].domainURI == schemaObj.domainURI) {
				loadedAlready = true;
				break;
			}
		}
		
		if(loadedAlready) {
			this.logger.warn("Schema already loaded: " + schemaObj.domainURI);
			continue;
		}
		
		filtered.push(schemaObj);
		
		this._fixLongPropertySchema(schema);
		
		this.dynamicDomains.push(schemaObj);
		
		this.domainsMap[schemaObj.domainURI] = schemaObj;
		
		for(var i = 0 ; i < schemaObj.properties.length; i++) {
			var p = schemaObj.properties[i];
			this.propertiesMap[p.URI] = p;
		}
		
	}
	
	this._load(filtered);
	
}


VitalServiceJson.prototype.purgeSchemas = function(schemaArray) {
	
	this.dynamicDomains = [];
	this.domainsMap = {};
	this.propertiesMap = {};
	this.loaded = {};
	this.dynamicPropertiesClasses = [];
	this.domainURI2LongProperties = {};
	tv4.dropSchemas();
	this.schemasCache = new LRUCache(10000);
	
	this._load([this.vitalCoreSchema, this.vitalDomainSchema]);
	
	
}

VitalServiceJson.prototype.getLocalSchemaList = function() {
	var list = [this.vitalCoreSchema, this.vitalDomainSchema];
	for(var i = 0; i < this.dynamicDomains; i++) {
		list.push(this.dynamicDomains[i]);
	}
	return list;
}

VitalServiceJson.prototype.unloadSchema = function(schemaURI) {
	
	var d = null;
	var index = -1;
	//dependent
	var dependent = [];
	
	if(this.vitalCoreSchema.domainURI == schemaURI) throw ("Cannot unload vital-core schema: " + schemaURI);
	
	if(this.vitalDomainSchema.domainURI == schemaURI) throw ("Cannot unload vital schema: " + schemaURI);
	
	var dependentSchemas = [];
	
	for(var i = 0 ; i < this.dynamicDomains.length; i++) {
		
		var _d = this.dynamicDomains[i];
		
		if(_d.domainURI == schemaURI) {
			d = _d;
			index = i;
		} else {

			var parents = _d.parents;
			
			if(parents.indexOf(schemaURI) >= 0) {
				dependent.push(_d);
			}
			
		}
		
	}
	
	if(d == null) throw "schema with URI not found: " + schemaURI;
	
	if(dependent.length > 0) {
		
		var m = "Cannot unload schema, " + dependent.length + " schema" + (dependent.length == 1 ? '' : 's' ) + " depend" + (dependent.length == 1 ? 's' : '' ) + " on it: ";
		
		for(var i = 0 ; i < dependent.length; i++) {
			var dep = dependent[i];
			if( i > 0) m += ", ";
			m += dep.domainURI;
		}
		
		throw m;
		
	}
	
	
	this.dynamicDomains.splice(index, 1);
	
	
	//refresh
	var newList = [this.vitalCoreSchema, this.vitalDomainSchema];
	
	
	for(var i = 0 ; i < this.dynamicDomains.length; i++) {
		newList.push(this.dynamicDomains[i]);
	}
	
	
	this.schemasCache = new LRUCache(10000);
	tv4.dropSchemas();
	
	delete this.domainsMap[schemaURI];
	delete this.domainURI2LongProperties[schemaURI];
	
	for( var i = 0 ; i < d.properties.length; i++) {
		var pURI = d.properties[i].URI;
		delete this.propertiesMap[pURI];
	}
	
	this.loaded = {};
	this.dynamicPropertiesClasses = [];
	
	this._load(newList);
	
}

//substitute for jquery.extend, source: http://stackoverflow.com/a/11197343
VitalServiceJson.prototype.extend = function extend(a, b){
    for(var key in b)
        if(b.hasOwnProperty(key))
            a[key] = b[key];
    return a;
}

/**
 * Reloads domain ontologies (schemas), drops all currently loaded
 */
/*
VitalServiceJson.prototype.reloadOntologies = function(domainsRL, successCB, errorCB) {

	var sList = [];
	
	for( var i = 0; i < VITAL_JSON_SCHEMAS.length; i++ ) {
		
		var schema = VITAL_JSON_SCHEMAS[i];
		
		//check if vital or vital-core
		for(var j = 0 ; j < schema.length; j++) {
			var s = schema[j];
			if(s.id == null) continue;
			
			if(s.id.indexOf('http://vital.ai/ontology/vital-core#') == 0 ||
					s.id.indexOf('http://vital.ai/ontology/vital#') == 0) {
				sList.push(schema);
				break;
			}
		}
		
	}
	
	VITAL_JSON_SCHEMAS.splice(0,VITAL_JSON_SCHEMAS.length);
	
	for( var i = 0; i < sList.length; i++ ) {
		VITAL_JSON_SCHEMAS.push(sList[i]);
	} 
	

	for(var i = 0 ; i < domainsRL.results.length; i ++) {
	
		var domainGO = domainsRL.results[i].graphObject;
		
		eval( domainGO.domainOWL );
		
		
	}
	
	this.logger.info("new domains list: ", VITAL_JSON_SCHEMAS);

	this.reload();
	
}
*/


//vitaljs namespace
vitaljs = {};

/**
 * @type VitalService
 */
vitaljs.vitalservice = null;

vitaljs.getPropertyShortName = function(propertyURI) {
	
	var pName = null;
	
	var i = propertyURI.indexOf('#');
	if(i < 0) {
//		throw new RuntimeException("Not a property URI: ${propertyURI} - missing #");
		pName = propertyURI;
	} else {
		pName = propertyURI.substring(i+1);
	}
	
	
	if(pName.indexOf("has") == 0) {
		
		pName = pName.substring(3, 4).toLowerCase() + pName.substring(4);
		
	} else if(pName.indexOf("is") == 0) {
	
		pName = pName.substring(2, 3).toLowerCase() + pName.substring(3);
	
	} else {

		//don't trim
		
	}
	
	return pName;
	
}

vitaljs.graphObject = function(rawObject) {
	
	vitaljs._getImpl(rawObject);
	
	vitaljs._setImpl(rawObject);
	
	return rawObject;
	
}

/**
 * Adds utility methods to ResultList object
 */
vitaljs.resultList = function(rl) {
	
	if(arguments.length == 0 || rl == null) {
		rl = {_type: 'ai.vital.vitalservice.query.ResultList', results: []};
	}
	
	if(rl._type != 'ai.vital.vitalservice.query.ResultList') {
		VitalServiceJson.SINGLETON.logger("Only objects of _type: ai.vital.vitalservice.query.ResultList may be augmented: " + rl._type);
		return;
	}
	
	if( typeof( rl.first ) === 'undefined' ) {
		rl.first = function() {
			if( this.results.length > 0 ) return this.results[0].graphObject;
			return null;
		};
	}
	
	if( typeof( rl.get ) === 'undefined' ) {
		rl.get = function(uri) {
			for(var i = 0 ; i < this.results.length; i++) {
				var g = this.results[i].graphObject;
				if(g.URI == uri) return g;
			}
			return null;
		};
	}
	
	if( typeof( rl.addResult ) === 'undefined' ) {
		
		rl.addResult = function(graphObject, score) {
			
			if(graphObject == null) throw("graphObject cannot be null");
			if(score == null) {
				score = 1;
			}
			
			rl.results.push({_type: 'ai.vital.vitalservice.query.ResultElement', graphObject: graphObject, score: score});
			
		}
		
	}
	
	//pseudo iterator
	if( typeof( rl.iterator ) === 'undefined' ) {
		
		/**
		 * varargs
		 * by default returns all graphobjects 
		 */
		rl.iterator = function(classURI, strict) {
			
			var r = [];
			
			if(strict == null) strict = false;
			
			var typesFilter = null;
			
			
			if(classURI != null) {
				
				//check if type exists
				
				typesFilter = {};
				
				if( ! vitaljs.isClassLoaded(classURI) ) throw "class not found: " + classURI;
				
				typesFilter[classURI] = true;
				
				if(strict) {
					
				} else {
					
					var subclassesList = vitaljs.getSubclasses({URI: classURI}, false);
					
					for(var i = 0; i < subclassesList.length; i++) {
						
						typesFilter[subclassesList[i].URI] = true
						
					}
					
					
					
				}
				
			}
			
			for(var i = 0 ; i < this.results.length; i++) {
				var g = this.results[i].graphObject;
				
				if(typesFilter == null || typesFilter[g.type] == true) {
					
					r.push(g);
					
				}
				
			}
			
			return r;
			
		};
		
	}
	
	return rl;
	
}

vitaljs._getImpl = function(rawObject) {
	
	var t = typeof(rawObject.get);
	
	if(t == 'undefined') {
		
		rawObject.get = function(shortName) {

			if(shortName == null) throw ("shortName must not be null");
			
			if(typeof(shortName) != 'string') throw ("shortName must be a string");
			
			if(shortName.length == 0) throw ("shortName must not be empty");
			
			var type = this.type;
			
			if(type == null) throw ( "no type property in this graphobject" );
			
			if( VitalServiceJson.SINGLETON == null ) throw ( "vitaljs singleton not available" );
			
			if( vitaljs.isSubclassOf(type, VitalServiceJson.VITAL_CORE_URI + '#VITAL_GraphContainerObject') ) {
				var v = this[shortName];
				if( v != null) return v.value;
				return null;
			}
			
			var schema = VitalServiceJson.SINGLETON._getJsonSchema(type);//loaded[type];
			
			if(schema == null) throw ( "schema not found for type: " + type );
			
			var props = schema.properties;
			
			var lastKey = null
			
			for (var key in props) {
					
				if (props.hasOwnProperty(key)) {
						
					if( shortName == vitaljs.getPropertyShortName(key)) {
							
						if(lastKey == null || lastKey == key) {
								
							lastKey = key;
							
						} else {
								
							throw "property short name ambiguous: " + shortName + ", matching properties: " + lastKey + ", " + key;
								
						}
							
					}
						
				}
					
			}
			
			if(lastKey == null) throw ("no matching property for short name found: " + shortName + " type: " + type);
			
			return rawObject[lastKey];
			
		}
		
	} else {
		
		if( t != 'function' ) {
			throw "object.get already defined as " + t;
		}
	}
	
}

vitaljs._setImpl = function(rawObject) {
	
	var t = typeof(rawObject.set);
	
	if(t == 'undefined') {
		
		rawObject.set = function(shortName, value) {
			
			if(shortName == null) throw ("shortName must not be null");
			
			if(typeof(shortName) != 'string') throw ("shortName must be a string");
			
			if(shortName.length == 0) throw ("shortName must not be empty");
			
			var type = this.type;
			
			if(type == null) throw ( "no type property in this graphobject" );
			
			if( VitalServiceJson.SINGLETON == null ) throw ( "vitaljs singleton not available" );
			
			var schema = VitalServiceJson.SINGLETON._getJsonSchema(type);// VitalServiceJson.SINGLETON.loaded[type];
			
			if(schema == null) throw ( "schema not found for type: " + type );
			
			var props = schema.properties;
			
			var lastKey = null
			
			for (var key in props) {
				
				if (props.hasOwnProperty(key)) {
					
					if( shortName == vitaljs.getPropertyShortName(key)) {
						
						if(lastKey == null || lastKey == key) {
							
							lastKey = key;
							
						} else {
							
							throw "property short name ambiguous: " + shortName + ", matching properties: " + lastKey + ", " + key;
							
						}
						
					}
					
				}
				
			}
			
			if(lastKey == null) throw ("no matching property for short name found: " + shortName + " type: " + type);
			
			if(value != null) {
				this[lastKey] = value; 
			} else {
				delete this[lastKey];
			}
			
			
		}
		
	} else {
		
		if( t != 'function' ) {
			throw "object.set already defined as " + t;
		}
	}
	
}

vitaljs.isArray = function(someVar) {
	
	if( Object.prototype.toString.call( someVar ) === '[object Array]' ) {
	    return true;
	}
	
	return false;
	
}

vitaljs.getLoadedDomains = function() {

	if( VitalServiceJson.SINGLETON == null ) throw ( "vitaljs singleton not available" );
	
	return VitalServiceJson.SINGLETON.getLocalSchemaList();
	
}


vitaljs._toDomainGraphObject = function(schemaObj) {

	var d = {
		URI: schemaObj.domainURI
	};
	
	d[VitalServiceJson.VITAL_CORE_URI + "#hasName"] = schemaObj.name;
	
	return d;
	
}


/**
 * Lists parent domains of this domain object
 * @param domainObj
 * @returns list of parent domains for this domain
 */
vitaljs.getImportedDomains = function(domainObj) {

	if(domainObj == null) throw "null domainObj";
	if(domainObj.domainURI == null) throw "no domainURI property";
	
	var s = VitalServiceJson.SINGLETON; 
	if( s == null ) throw ( "vitaljs singleton not available" );
	
	var thisDomain = s.domainsMap[domainObj.domainURI];
	if(thisDomain == null) throw ("domain not loaded, URI: " + domainObj.domainURI);
	
	var r = [];
	
	var parents = thisDomain.parents;
	for(var i = 0; i < parents.length; i++) {
		var parentURI = parents[i];
		var parentDomain = s.domainsMap[parentURI];
		if(parentDomain == null) throw("parent domain " + parentURI + " of " + domainObj.domainURI + " not found");
		
		r.push(parentDomain);
//		r.push(vitaljs._toDomainGraphObject(parentDomain));
		
	}
	
	return r;
	
}


/**
 * Lists all domains that depend on this one
 * @param domainObj
 * @returns list of all dependent domains
 */
vitaljs.getDependentDomains = function(domainObj) {
	

	if(domainObj == null) throw "null domainObj";
	if(domainObj.domainURI == null) throw "no domainURI property";
	
	var s = VitalServiceJson.SINGLETON; 
	if( s == null ) throw ( "vitaljs singleton not available" );
	
	var thisDomain = s.domainsMap[domainObj.domainURI];
	if(thisDomain == null) throw ("domain not loaded, URI: " + domainObj.domainURI);

	var pool = [domainObj.domainURI];
	
	var processedURIs = [];
	var r = [];
	
	while(pool.length > 0) {
		
		var newPool = [];
		
		for(var i = 0 ; i < pool.length; i++) {
			
			var parentURI = pool[i];
			
			for( var j = 0 ; j < s.loaded.parents.length; j++) {
				
				var p = s.loaded.parents[j];
				
				if(p == parentURI && processedURIs.indexOf(p) < 0) {
					
					var d = s.domainsMap[p];
					
					if(d == null) throw ("runtime error: domain not found: " + p);
					
					processedURIs.push(p);
//					r.push(vitaljs._toDomainGraphObject(d));
					r.push(d);
					
					newPool.push(p);
					
				}
				
			}
			
		}
		
		pool = newPool;
		
	}
	
	return r;
	
}

/**
 * Returns the result list of all schemas available remotely
 * @returns array of DomainModel objects
 */
vitaljs.getSchemaList = function(successCB, errorCB) {
	if(vitaljs.vitalservice == null) throw "active vitalservice instance not set"; 
	vitaljs.vitalservice.getSchemaList(successCB, errorCB);
}

/**
 * Returns dependencies of a schema, parents or all ancestors based on recursive flag
 * @returns array of DomainModel objects
 */
vitaljs.getDependenciesOfSchema = function(schemaName, recursive, successCB, errorCB) {
	if(vitaljs.vitalservice == null) throw "active vitalservice instance not set"; 
	vitaljs.vitalservice.getDependenciesOfSchema(schemaName, recursive, successCB, errorCB);
}

/**
 * Returns an array of json schema objects, the original array is wrapped with {name:, URI:, schema: [] }, the order is preserved
 */
vitaljs.getSchemas = function(schemaNamesArray, successCB, errorCB) {
	if(vitaljs.vitalservice == null) throw "active vitalservice instance not set"; 
	vitaljs.vitalservice.getSchemas(schemaNamesArray, successCB, errorCB);
}

/**
 * Loads given schema objects ( {name:, URI:, schema: [] } in the given order
 */
vitaljs.loadSchemas = function(jsonSchemasArray, successCB, errorCB) {
	if(vitaljs.vitalservice == null) throw "active vitalservice instance not set"; 
	vitaljs.vitalservice.loadSchemas(jsonSchemasArray, successCB, errorCB);
}

/**
 * Purges currently loaded domain schemas
 */
vitaljs.purgeSchemas = function(successCB, errorCB) {
	if(vitaljs.vitalservice == null) throw "active vitalservice instance not set"; 
	vitaljs.vitalservice.purgeSchemas(successCB, errorCB);
}

/**
 * Returns locally loaded domains
 */
vitaljs.getLocalSchemaList = function(successCB, errorCB) {
	if(vitaljs.vitalservice == null) throw "active vitalservice instance not set"; 
	vitaljs.vitalservice.getLocalSchemaList(successCB, errorCB);
}

/**
 * Unloads schema
 */
vitaljs.unloadSchema = function(schemaURI, successCB, errorCB) {
	if(vitaljs.vitalservice == null) throw "active vitalservice instance not set"; 
	vitaljs.vitalservice.unloadSchema(schemaURI, successCB, errorCB);
}

/**
 * determines if thisClass is a subclass of thatClass
 * @param thisClass either class URI string or class object with URI property
 * @param thatClass either class URI string or class object with URI property 
 */
vitaljs.isSubclassOf = function(thisClass, thatClass) {
	
	if(thisClass == null) throw ("thisClass cannot be null");
	if(thatClass == null) throw ("thatClass cannot be null");
	
	var thisURI = null;
	var thatURI = null;
	
	if(typeof(thisClass) == 'string') {
		thisURI = thisClass;
	} else if(typeof(thisClass) == 'object') {
		thisURI = thisClass.URI;
		if(thisURI == null) throw "null thisClass.URI"; 
	}
	
	if(typeof(thatClass) == 'string') {
		thatURI = thatClass;
	} else if(typeof(thatClass) == 'object') {
		thatURI = thatClass.URI;
		if(thatURI == null) throw "null thatClass.URU";
	}
	
	var s = VitalServiceJson.SINGLETON; 
	if( s == null ) throw ( "vitaljs singleton not available" );
	
	var thisSchema = s.loaded[thisURI];
	if(thisSchema == null) throw "class not found: " + thisURI;
	
	var thatSchema = s.loaded[thatURI]
	if(thatSchema == null) throw "class not found: " + thatURI;
	
	var allSuperclasses = s.listSuperclasses(thisURI, [], false);

	if(allSuperclasses.indexOf(thatURI) >= 0) {
		return true;
	}
	
	return false;
	
}

/**
 * determines if thisClass is a superclass of thatClass
 * @param thisClass either class URI string or class object with URI property
 * @param thatClass either class URI string or class object with URI property
 * @returns true if this class is a superclass of that class
 */
vitaljs.isSuperclassOf = function(thisClass, thatClass) {
	//reverse it
	return vitaljs.isSubclassOf(thatClass, thisClass);
}

/**
 * determines if thisProperty is a subproperty of thatProperty
 * @param thisClass either property URI string or property object with URI property
 * @param thatClass either Property URI string or property object with URI property
 * @returns true if this property is a subproperty of that property
 */
vitaljs.isSubpropertyOf = function(thisProperty, thatProperty) {
	
	if(thisProperty == null) throw ("thisProperty cannot be null");
	if(thatProperty == null) throw ("thatProperty cannot be null");
	
	var thisURI = null;
	var thatURI = null;
	
	if(typeof(thisProperty) == 'string') {
		thisURI = thisProperty;
	} else if(typeof(thisProperty) == 'object') {
		thisURI = thisProperty.URI;
		if(thisURI == null) throw "null thisProperty.URI"; 
	}
	
	if(typeof(thatProperty) == 'string') {
		thatURI = thatProperty;
	} else if(typeof(thatProperty) == 'object') {
		thatURI = thatProperty.URI;
		if(thatURI == null) throw "null thatProperty.URU";
	}
	
	var s = VitalServiceJson.SINGLETON; 
	if( s == null ) throw ( "vitaljs singleton not available" );
	
	var thisSchema = s.propertiesMap[thisURI];
	if(thisSchema == null) throw "property not found: " + thisURI;
	
	var thatSchema = s.propertiesMap[thatURI]
	if(thatSchema == null) throw "property not found: " + thatURI;
	
	var allSubproperties = s.listSuperproperties(thisURI, [], false);

	if(allSubproperties.indexOf(thatURI) >= 0) {
		return true;
	}
	
	return false;
	
}

/**
 * determines if thisProperty is a superproperty of thatProperty
 * @param thisClass either property URI string or property object with URI property
 * @param thatClass either Property URI string or property object with URI property
 * @returns true is this property is a superproperty of that property 
 */
vitaljs.isSuperpropertyOf = function(thisProperty, thatProperty) {
	//reverse it
	return vitaljs.isSubpropertyOf(thatProperty, thisProperty);
}

/**
 * returns list of subclasses for given classObj
 * @param classObj object with class URI property
 * @param direct if true direct subclasses only
 * @returns list of subclasses
 */
vitaljs.getSubclasses = function(classObj, direct) {
	
	if(classObj == null) throw "classObj cannot be null";
	if(classObj.URI == null) throw "classObj.URI cannot be null";
	
	var s = VitalServiceJson.SINGLETON; 
	if( s == null ) throw ( "vitaljs singleton not available" );

	var allSubclasses = s.listSubclasses(classObj.URI, [], direct);
	
	var r = [];
	
	for(var i = 0 ; i < allSubclasses.length; i++) {
		
		var u = allSubclasses[i];
		
		if(u == classObj.URI) continue;
		
		r.push({URI: u});
		
	}
	
	return r;
	
}

/**
 * List super classes of given class
 * @param classObj with class URI property
 * @param direct if true only parent class will be returned
 */
vitaljs.getSuperclasses = function(classObj, direct) {
	
	if(classObj == null) throw "classObj cannot be null";
	if(classObj.URI == null) throw "classObj.URI cannot be null";
	
	var s = VitalServiceJson.SINGLETON; 
	if( s == null ) throw ( "vitaljs singleton not available" );
	
	var allSuperclasses = s.listSuperclasses(classObj.URI, [], direct);
	
	var r = [];
	
	for(var i = 0 ; i < allSuperclasses.length; i++) {
		
		var u = allSuperclasses[i];
		
		if(u == classObj.URI) continue;
		
		r.push({URI: u});
		
	}
	
	return r;
	
}

/**
 * Returns list of subproperties for giver property
 * @param propertyObj object with property URI
 * @param direct if true returns only direct children
 * @returns list of subproperties
 */
vitaljs.getSubproperties = function(propertyObj, direct) {
	
	if(propertyObj == null) throw "propertyObj cannot be null";
	if(propertyObj.URI == null) throw "propertyObj.URI cannot be null";
	
	var s = VitalServiceJson.SINGLETON; 
	if( s == null ) throw ( "vitaljs singleton not available" );
	
	var allSubproperties = s.listSubproperties(propertyObj.URI, [], direct);
	
	var r = [];
	
	for(var i = 0 ; i < allSubproperties.length; i++) {
		
		var u = allSubproperties[i];
		
		if(u == propertyObj.URI) continue;
		
		r.push({URI: allSubproperties[i]});
		
	}
	
	return r;
	
}

/**
 * Returns list of superproperties for given property
 * @param propertyObj object with property URI
 * @param direct if true returns only parent property
 * @returns list of superproperties
 */
vitaljs.getSuperproperties = function(propertyObj, direct) {
	
	if(propertyObj == null) throw "propertyObj cannot be null";
	if(propertyObj.URI == null) throw "propertyObj.URI cannot be null";
	
	var s = VitalServiceJson.SINGLETON; 
	if( s == null ) throw ( "vitaljs singleton not available" );
	
	var allSuperproperties = s.listSuperproperties(propertyObj.URI, [], direct);
	
	var r = [];
	
	for(var i = 0 ; i < allSuperproperties.length; i++) {
		
		var u = allSuperproperties[i];
		
		if(u == propertyObj.URI) continue;
		
		r.push({URI: u});
		
	}
	
	return r;
	
}

/**
 * Returns loaded classes optionally limited to a particular domain 
 * @param optionalDomainURIFilter
 * @returns list of class objects
 */
vitaljs.getLoadedClasses = function(optionalDomainURIFilter) {
	
	var s = VitalServiceJson.SINGLETON; 
	if( s == null ) throw ( "vitaljs singleton not available" );
	
	var r = [];
	
	for(var key in s.domainsMap) {

		if ( ! s.domainsMap.hasOwnProperty(key) ) continue;
		
		var domain = s.domainsMap[key];
		
		if(optionalDomainURIFilter != null && optionalDomainURIFilter != domain.domainURI) {
			continue;
		}
		
		for(var i = 0 ; i < domain.schemas.length; i++) {
			
			r.push({URI: domain.schemas[i].uri});
			
		}
		
		
	}
	
	return r;
	
}

/**
 * Returns properties associated with a class
 * @param classObj object with class URI
 * @param direct if true ignores properties defined in superclasses
 * @returns list of property objects
 */
vitaljs.getClassProperties = function(classObj, direct) {
	
	if(classObj == null) throw "classObj cannot be null";
	if(classObj.URI == null) throw "classObj.URI cannot be null";
	
	var s = VitalServiceJson.SINGLETON; 
	if( s == null ) throw ( "vitaljs singleton not available" );

	var domainURIs = null;
	
	if(direct) {
		domainURIs = [classObj.URI];
	} else { 
		domainURIs = s.listSuperclasses(classObj.URI, [], false);
	}
	
	var r = [];
	var alreadySet = {URI: true, type: true, types: true};
	
	
	for(var key in s.propertiesMap) {
		
		if ( ! s.propertiesMap.hasOwnProperty(key) )  continue;
		
		var propertyObj = s.propertiesMap[key];
		
		var domains = propertyObj.domainClassesURIs;
		
		for(var i = 0; i < domains.length; i++) {
			
			var domain = domains[i];

			if( domainURIs.indexOf(domain) >= 0 ) {
			
				r.push({URI: key});
				alreadySet[key] = true;
				
			}
			
		}
		
	}
	
	//cover the case with extended properties
	var schema = s.loaded[classObj.URI];
	if(schema != null) {
		var ps = schema.properties;
		for(var k in ps) {
			
			if ( ! ps.hasOwnProperty(k) )  continue;
			
			if(alreadySet[k] == true) continue;
			
			r.push({URI: k});
			
		}
		
	}
	
	return r;
	
}  

/**
 * Returns property metadata {"URI": ..., "domainClassesURIs": [ ... ], "shortName": ..., "multipleValues": boolean, "type" : "StringProperty"}
 * @param propertyURI 
 * @returns metadata or null
 */
vitaljs.getPropetyMetadata = function(propertyURI) {
	var s = VitalServiceJson.SINGLETON;
	return s.propertiesMap[propertyURI];
}

/**
 * returns true if class exists, false otherwise
 */
vitaljs.isClassLoaded = function(classURI) {
	var s = VitalServiceJson.SINGLETON;
	return s.loaded[classURI] != null;
}


if(true) {
	
	module.exports = {
		vitaljs: vitaljs,
		VitalServiceJson: VitalServiceJson
	};
	
}

/***/ })
/******/ ]);