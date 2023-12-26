(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = global || self, factory(global.zipy = {}));
})(this, (function (exports) {
    /*Have all types supported by zipy recorder and replayer*/
    //Events types for zipy 
    var zipyEventTypes;
    (function (zipyEventTypes) {
      zipyEventTypes[zipyEventTypes["Mutation"] = 0] = "Mutation";
      zipyEventTypes[zipyEventTypes["MouseMove"] = 1] = "MouseMove";
      zipyEventTypes[zipyEventTypes["MouseInteraction"] = 2] = "MouseInteraction";
      zipyEventTypes[zipyEventTypes["Scroll"] = 3] = "Scroll";
      zipyEventTypes[zipyEventTypes["ViewportResize"] = 4] = "ViewportResize";
      zipyEventTypes[zipyEventTypes["Input"] = 5] = "Input";
      zipyEventTypes[zipyEventTypes["TouchMove"] = 6] = "TouchMove";
      zipyEventTypes[zipyEventTypes["MediaInteraction"] = 7] = "MediaInteraction";
      zipyEventTypes[zipyEventTypes["StyleSheetRule"] = 8] = "StyleSheetRule";
      zipyEventTypes[zipyEventTypes["CanvasMutation"] = 9] = "CanvasMutation";
      zipyEventTypes[zipyEventTypes["Font"] = 10] = "Font";
      zipyEventTypes[zipyEventTypes["ReplayerEvent"] = 11] = "ReplayerEvent";
      zipyEventTypes[zipyEventTypes["ConsoleInfo"] = 50] = "ConsoleInfo";
      zipyEventTypes[zipyEventTypes["ConsoleError"] = 51] = "ConsoleError";
      zipyEventTypes[zipyEventTypes["ConsoleWarning"] = 52] = "ConsoleWarning";
      zipyEventTypes[zipyEventTypes["ConsoleDebug"] = 53] = "ConsoleDebug";
      zipyEventTypes[zipyEventTypes["Error"] = 70] = "Error";
      zipyEventTypes[zipyEventTypes["RangeError"] = 71] = "RangeError";
      zipyEventTypes[zipyEventTypes["ReferenceError"] = 72] = "ReferenceError";
      zipyEventTypes[zipyEventTypes["TypeError"] = 73] = "TypeError";
      zipyEventTypes[zipyEventTypes["SyntaxError"] = 74] = "SyntaxError";
      zipyEventTypes[zipyEventTypes["URIError"] = 75] = "URIError";
      zipyEventTypes[zipyEventTypes["EvalError"] = 76] = "EvalError";
      zipyEventTypes[zipyEventTypes["UnhandledRejection"] = 77] = "UnhandledRejection";
      zipyEventTypes[zipyEventTypes["BROWSERDATA"] = 100] = "BROWSERDATA";
      zipyEventTypes[zipyEventTypes["NAVIGATION"] = 101] = "NAVIGATION";
      zipyEventTypes[zipyEventTypes["Online"] = 102] = "Online";
      zipyEventTypes[zipyEventTypes["Offline"] = 103] = "Offline";
      zipyEventTypes[zipyEventTypes["XHR"] = 104] = "XHR";
      zipyEventTypes[zipyEventTypes["WSOPEN"] = 105] = "WSOPEN";
      zipyEventTypes[zipyEventTypes["WSCLOSE"] = 106] = "WSCLOSE";
      zipyEventTypes[zipyEventTypes["WSMESSAGE"] = 107] = "WSMESSAGE";
      zipyEventTypes[zipyEventTypes["WSERROR"] = 108] = "WSERROR";
      zipyEventTypes[zipyEventTypes["Fonts"] = 109] = "Fonts";
      zipyEventTypes[zipyEventTypes["Link"] = 110] = "Link";
      zipyEventTypes[zipyEventTypes["Css"] = 111] = "Css";
      zipyEventTypes[zipyEventTypes["Image"] = 112] = "Image";
      zipyEventTypes[zipyEventTypes["Js"] = 113] = "Js";
      zipyEventTypes[zipyEventTypes["Media"] = 114] = "Media";
      zipyEventTypes[zipyEventTypes["ZipyLogMessage"] = 115] = "ZipyLogMessage";
      zipyEventTypes[zipyEventTypes["ZipyLogException"] = 116] = "ZipyLogException";
      zipyEventTypes[zipyEventTypes["ZipyLogFrontendError"] = 117] = "ZipyLogFrontendError";
      zipyEventTypes[zipyEventTypes["ZipyLogNetworkError"] = 118] = "ZipyLogNetworkError";
      zipyEventTypes[zipyEventTypes["Performance"] = 119] = "Performance";
      zipyEventTypes[zipyEventTypes["PerfNavigation"] = 120] = "PerfNavigation";
      zipyEventTypes[zipyEventTypes["OtherNetworkCall"] = 121] = "OtherNetworkCall";
    })(zipyEventTypes || (zipyEventTypes = {}));
    var WSMsgType;
    (function (WSMsgType) {
      WSMsgType[WSMsgType["MESSAGESEND"] = 0] = "MESSAGESEND";
      WSMsgType[WSMsgType["MESSAGERECEIVED"] = 1] = "MESSAGERECEIVED";
      WSMsgType[WSMsgType["SOCKETCLOSE"] = 2] = "SOCKETCLOSE";
      WSMsgType[WSMsgType["SOCKETERROR"] = 3] = "SOCKETERROR";
      WSMsgType[WSMsgType["SOCKETOPEN"] = 4] = "SOCKETOPEN";
    })(WSMsgType || (WSMsgType = {}));
    var ZipyEntryType;
    (function (ZipyEntryType) {
      ZipyEntryType[ZipyEntryType["ELEMENT"] = 0] = "ELEMENT";
      ZipyEntryType[ZipyEntryType["EVENT"] = 1] = "EVENT";
      ZipyEntryType[ZipyEntryType["FIRST_INPUT"] = 2] = "FIRST_INPUT";
      ZipyEntryType[ZipyEntryType["LARGEST_CONTENTFUL_PAINT"] = 3] = "LARGEST_CONTENTFUL_PAINT";
      ZipyEntryType[ZipyEntryType["LAYOUT_SHIFT"] = 4] = "LAYOUT_SHIFT";
      ZipyEntryType[ZipyEntryType["LONGTASK"] = 5] = "LONGTASK";
      ZipyEntryType[ZipyEntryType["MARK"] = 6] = "MARK";
      ZipyEntryType[ZipyEntryType["MEASURE"] = 7] = "MEASURE";
      ZipyEntryType[ZipyEntryType["NAVIGATION"] = 8] = "NAVIGATION";
      ZipyEntryType[ZipyEntryType["PAINT"] = 9] = "PAINT";
      ZipyEntryType[ZipyEntryType["RESOURCE"] = 10] = "RESOURCE";
    })(ZipyEntryType || (ZipyEntryType = {}));
    //To identify logs that are coming from zipy app
    var ZIPYLOGIDENTIFIER = "zipy";
    var RRWEBIDENTIFIER = "rrweb";
    var Operations;
    (function (Operations) {
      Operations[Operations["POSTENDUSERINFOANDGETUSERCONFIG"] = 0] = "POSTENDUSERINFOANDGETUSERCONFIG";
      Operations[Operations["POSTENDUSERINFO"] = 1] = "POSTENDUSERINFO";
      Operations[Operations["GETUSERCONFIG"] = 2] = "GETUSERCONFIG";
    })(Operations || (Operations = {}));
    var UserType;
    (function (UserType) {
      UserType[UserType["ANONYMS"] = 0] = "ANONYMS";
      UserType[UserType["IDENTIFIED"] = 1] = "IDENTIFIED";
    })(UserType || (UserType = {}));
    var RRwebRecorderStatus;
    (function (RRwebRecorderStatus) {
      RRwebRecorderStatus[RRwebRecorderStatus["NORECORDING"] = 0] = "NORECORDING";
      RRwebRecorderStatus[RRwebRecorderStatus["RECORDINGPENDING"] = 1] = "RECORDINGPENDING";
      RRwebRecorderStatus[RRwebRecorderStatus["RECORDINGSUCCESSFUL"] = 2] = "RECORDINGSUCCESSFUL";
    })(RRwebRecorderStatus || (RRwebRecorderStatus = {}));
    var NOT_FOUND = 404;
    var LOG_EVENT = "logEvent";
    var EXCEPTION_EVENT = "exceptionEvent";
    var ERROR_EVENT = "errorEvent";
    var LOG_MESSAGE_LIMIT = 1024;
    var START_IFRAME_RECORDING = "startIframeRecording";
    var STOP_IFRAME_RECORDING = "stopIframeRecording";
    var IFRAME_LOADED = "iframeContentLoaded";
    var consoleLogLevel$1;
    (function (consoleLogLevel) {
      consoleLogLevel["DEBUG"] = "1";
      consoleLogLevel["WARNING"] = "2";
      consoleLogLevel["ERROR"] = "3";
      consoleLogLevel["LOG"] = "4";
    })(consoleLogLevel$1 || (consoleLogLevel$1 = {}));
    var ZipyRenderBlockingStatusType;
    (function (ZipyRenderBlockingStatusType) {
      ZipyRenderBlockingStatusType[ZipyRenderBlockingStatusType["BLOCKING"] = 0] = "BLOCKING";
      ZipyRenderBlockingStatusType[ZipyRenderBlockingStatusType["NON_BLOCKING"] = 1] = "NON_BLOCKING";
    })(ZipyRenderBlockingStatusType || (ZipyRenderBlockingStatusType = {}));
    var cookieVariables;
    (function (cookieVariables) {
      cookieVariables["session_data"] = "_zsession-data";
      cookieVariables["total_data_sent"] = "_ztotal-data-sent";
      cookieVariables["enduser_last_activity_time"] = "_zenduser-last-activity-time";
      cookieVariables["last_activity_time"] = "_zlast-activity-time";
    })(cookieVariables || (cookieVariables = {}));
    var rootDomainRegex = /^(?!-)[A-Za-z0-9-]+([\-\.]{1}[a-z0-9]+)*\.[A-Za-z]{2,6}$/;

    var streamMgrUrl = "https://services.zipy.ai/sdk-session-manager/v2/enduser-info";
    var registerSessionUrl = "https://services.zipy.ai/sdk-session-manager/v1/register-sdk-session";
    var sdkVersion = "1.0.6";
    var errorUrl = "divolte.collector";
    var streamMgrRetryCount = 5;
    var zipyDeploymentEnviornment = "Production";
    var sdkLoopTime = 10000;
    var perfLoopTime = 5000;
    var ignoreEmptyErros = true;
    var ignoreLargeResponse = true;
    var debugLogs = false;
    var sessionLinkUrl = "https://app.zipy.ai";
    var config = {
    	streamMgrUrl: streamMgrUrl,
    	registerSessionUrl: registerSessionUrl,
    	sdkVersion: sdkVersion,
    	errorUrl: errorUrl,
    	streamMgrRetryCount: streamMgrRetryCount,
    	zipyDeploymentEnviornment: zipyDeploymentEnviornment,
    	sdkLoopTime: sdkLoopTime,
    	perfLoopTime: perfLoopTime,
    	ignoreEmptyErros: ignoreEmptyErros,
    	ignoreLargeResponse: ignoreLargeResponse,
    	debugLogs: debugLogs,
    	sessionLinkUrl: sessionLinkUrl
    };

    /**
     * logger class for printing zipy logs in console
     */
    var debugSdk = false;
    function initLogger(printLogs) {
      debugSdk = printLogs;
    }
    function info(message) {
      if (debugSdk) console.info(ZIPYLOGIDENTIFIER, message);
    }
    function debug(message) {
      if (debugSdk) console.debug(ZIPYLOGIDENTIFIER, message);
    }
    function log(message) {
      if (debugSdk) console.log(ZIPYLOGIDENTIFIER, message);
    }
    function error(message) {
      if (debugSdk) console.error(ZIPYLOGIDENTIFIER, message);
    }

    var NodeType;
    (function (NodeType) {
        NodeType[NodeType["Document"] = 0] = "Document";
        NodeType[NodeType["DocumentType"] = 1] = "DocumentType";
        NodeType[NodeType["Element"] = 2] = "Element";
        NodeType[NodeType["Text"] = 3] = "Text";
        NodeType[NodeType["CDATA"] = 4] = "CDATA";
        NodeType[NodeType["Comment"] = 5] = "Comment";
    })(NodeType || (NodeType = {}));

    function isElement(n) {
        return n.nodeType === n.ELEMENT_NODE;
    }
    function isShadowRoot(n) {
        var host = n === null || n === void 0 ? void 0 : n.host;
        return Boolean((host === null || host === void 0 ? void 0 : host.shadowRoot) === n);
    }
    function isNativeShadowDom(shadowRoot) {
        return Object.prototype.toString.call(shadowRoot) === '[object ShadowRoot]';
    }
    function fixBrowserCompatibilityIssuesInCSS(cssText) {
        if (cssText.includes(' background-clip: text;') &&
            !cssText.includes(' -webkit-background-clip: text;')) {
            cssText = cssText.replace(' background-clip: text;', ' -webkit-background-clip: text; background-clip: text;');
        }
        return cssText;
    }
    function getCssRulesString(s) {
        try {
            var rules = s.rules || s.cssRules;
            return rules
                ? fixBrowserCompatibilityIssuesInCSS(Array.from(rules).map(getCssRuleString).join(''))
                : null;
        }
        catch (error) {
            return null;
        }
    }
    function getCssRuleString(rule) {
        var cssStringified = rule.cssText;
        if (isCSSImportRule(rule)) {
            try {
                cssStringified = getCssRulesString(rule.styleSheet) || cssStringified;
            }
            catch (_a) {
            }
        }
        return cssStringified;
    }
    function isCSSImportRule(rule) {
        return 'styleSheet' in rule;
    }
    var Mirror = (function () {
        function Mirror() {
            this.idNodeMap = new Map();
            this.nodeMetaMap = new WeakMap();
        }
        Mirror.prototype.getId = function (n) {
            var _a;
            if (!n)
                return -1;
            var id = (_a = this.getMeta(n)) === null || _a === void 0 ? void 0 : _a.id;
            return id !== null && id !== void 0 ? id : -1;
        };
        Mirror.prototype.getNode = function (id) {
            return this.idNodeMap.get(id) || null;
        };
        Mirror.prototype.getIds = function () {
            return Array.from(this.idNodeMap.keys());
        };
        Mirror.prototype.getMeta = function (n) {
            return this.nodeMetaMap.get(n) || null;
        };
        Mirror.prototype.removeNodeFromMap = function (n) {
            var _this = this;
            var id = this.getId(n);
            this.idNodeMap["delete"](id);
            if (n.childNodes) {
                n.childNodes.forEach(function (childNode) {
                    return _this.removeNodeFromMap(childNode);
                });
            }
        };
        Mirror.prototype.has = function (id) {
            return this.idNodeMap.has(id);
        };
        Mirror.prototype.hasNode = function (node) {
            return this.nodeMetaMap.has(node);
        };
        Mirror.prototype.add = function (n, meta) {
            var id = meta.id;
            this.idNodeMap.set(id, n);
            this.nodeMetaMap.set(n, meta);
        };
        Mirror.prototype.replace = function (id, n) {
            var oldNode = this.getNode(id);
            if (oldNode) {
                var meta = this.nodeMetaMap.get(oldNode);
                if (meta)
                    this.nodeMetaMap.set(n, meta);
            }
            this.idNodeMap.set(id, n);
        };
        Mirror.prototype.reset = function () {
            this.idNodeMap = new Map();
            this.nodeMetaMap = new WeakMap();
        };
        return Mirror;
    }());
    function createMirror() {
        return new Mirror();
    }
    function maskInputValue(_a) {
        var maskInputOptions = _a.maskInputOptions, tagName = _a.tagName, type = _a.type, value = _a.value, maskInputFn = _a.maskInputFn;
        var text = value || '';
        var actualType = type && type.toLowerCase();
        if (maskInputOptions[tagName.toLowerCase()] ||
            (actualType && maskInputOptions[actualType])) {
            if (maskInputFn) {
                text = maskInputFn(text);
            }
            else {
                text = '*'.repeat(text.length);
            }
        }
        return text;
    }
    var ORIGINAL_ATTRIBUTE_NAME = '__rrweb_original__';
    function is2DCanvasBlank(canvas) {
        var ctx = canvas.getContext('2d');
        if (!ctx)
            return true;
        var chunkSize = 50;
        for (var x = 0; x < canvas.width; x += chunkSize) {
            for (var y = 0; y < canvas.height; y += chunkSize) {
                var getImageData = ctx.getImageData;
                var originalGetImageData = ORIGINAL_ATTRIBUTE_NAME in getImageData
                    ? getImageData[ORIGINAL_ATTRIBUTE_NAME]
                    : getImageData;
                var pixelBuffer = new Uint32Array(originalGetImageData.call(ctx, x, y, Math.min(chunkSize, canvas.width - x), Math.min(chunkSize, canvas.height - y)).data.buffer);
                if (pixelBuffer.some(function (pixel) { return pixel !== 0; }))
                    return false;
            }
        }
        return true;
    }

    var _id = 1;
    var tagNameRegex = new RegExp('[^a-z0-9-_:]');
    var IGNORED_NODE = -2;
    function genId() {
        return _id++;
    }
    function getValidTagName(element) {
        if (element instanceof HTMLFormElement) {
            return 'form';
        }
        var processedTagName = element.tagName.toLowerCase().trim();
        if (tagNameRegex.test(processedTagName)) {
            return 'div';
        }
        return processedTagName;
    }
    function stringifyStyleSheet(sheet) {
        return sheet.cssRules
            ? Array.from(sheet.cssRules)
                .map(function (rule) { return rule.cssText || ''; })
                .join('')
            : '';
    }
    function extractOrigin(url) {
        var origin = '';
        if (url.indexOf('//') > -1) {
            origin = url.split('/').slice(0, 3).join('/');
        }
        else {
            origin = url.split('/')[0];
        }
        origin = origin.split('?')[0];
        return origin;
    }
    var canvasService;
    var canvasCtx;
    var URL_IN_CSS_REF = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm;
    var URL_PROTOCOL_MATCH = /^(?:[a-z+]+:)?\/\//i;
    var URL_WWW_MATCH = /^www\..*/i;
    var DATA_URI = /^(data:)([^,]*),(.*)/i;
    function absoluteToStylesheet(cssText, href) {
        return (cssText || '').replace(URL_IN_CSS_REF, function (origin, quote1, path1, quote2, path2, path3) {
            var filePath = path1 || path2 || path3;
            var maybeQuote = quote1 || quote2 || '';
            if (!filePath) {
                return origin;
            }
            if (URL_PROTOCOL_MATCH.test(filePath) || URL_WWW_MATCH.test(filePath)) {
                return "url(".concat(maybeQuote).concat(filePath).concat(maybeQuote, ")");
            }
            if (DATA_URI.test(filePath)) {
                return "url(".concat(maybeQuote).concat(filePath).concat(maybeQuote, ")");
            }
            if (filePath[0] === '/') {
                return "url(".concat(maybeQuote).concat(extractOrigin(href) + filePath).concat(maybeQuote, ")");
            }
            var stack = href.split('/');
            var parts = filePath.split('/');
            stack.pop();
            for (var _i = 0, parts_1 = parts; _i < parts_1.length; _i++) {
                var part = parts_1[_i];
                if (part === '.') {
                    continue;
                }
                else if (part === '..') {
                    stack.pop();
                }
                else {
                    stack.push(part);
                }
            }
            return "url(".concat(maybeQuote).concat(stack.join('/')).concat(maybeQuote, ")");
        });
    }
    var SRCSET_NOT_SPACES = /^[^ \t\n\r\u000c]+/;
    var SRCSET_COMMAS_OR_SPACES = /^[, \t\n\r\u000c]+/;
    function getAbsoluteSrcsetString(doc, attributeValue) {
        if (attributeValue.trim() === '') {
            return attributeValue;
        }
        var pos = 0;
        function collectCharacters(regEx) {
            var chars;
            var match = regEx.exec(attributeValue.substring(pos));
            if (match) {
                chars = match[0];
                pos += chars.length;
                return chars;
            }
            return '';
        }
        var output = [];
        while (true) {
            collectCharacters(SRCSET_COMMAS_OR_SPACES);
            if (pos >= attributeValue.length) {
                break;
            }
            var url = collectCharacters(SRCSET_NOT_SPACES);
            if (url.slice(-1) === ',') {
                url = absoluteToDoc(doc, url.substring(0, url.length - 1));
                output.push(url);
            }
            else {
                var descriptorsStr = '';
                url = absoluteToDoc(doc, url);
                var inParens = false;
                while (true) {
                    var c = attributeValue.charAt(pos);
                    if (c === '') {
                        output.push((url + descriptorsStr).trim());
                        break;
                    }
                    else if (!inParens) {
                        if (c === ',') {
                            pos += 1;
                            output.push((url + descriptorsStr).trim());
                            break;
                        }
                        else if (c === '(') {
                            inParens = true;
                        }
                    }
                    else {
                        if (c === ')') {
                            inParens = false;
                        }
                    }
                    descriptorsStr += c;
                    pos += 1;
                }
            }
        }
        return output.join(', ');
    }
    function absoluteToDoc(doc, attributeValue) {
        if (!attributeValue || attributeValue.trim() === '') {
            return attributeValue;
        }
        var a = doc.createElement('a');
        a.href = attributeValue;
        return a.href;
    }
    function isSVGElement(el) {
        return Boolean(el.tagName === 'svg' || el.ownerSVGElement);
    }
    function getHref() {
        var a = document.createElement('a');
        a.href = '';
        return a.href;
    }
    function transformAttribute(doc, tagName, name, value) {
        if (!value) {
            return value;
        }
        if (name === 'src' ||
            (name === 'href' && !(tagName === 'use' && value[0] === '#'))) {
            return absoluteToDoc(doc, value);
        }
        else if (name === 'xlink:href' && value[0] !== '#') {
            return absoluteToDoc(doc, value);
        }
        else if (name === 'background' &&
            (tagName === 'table' || tagName === 'td' || tagName === 'th')) {
            return absoluteToDoc(doc, value);
        }
        else if (name === 'srcset') {
            return getAbsoluteSrcsetString(doc, value);
        }
        else if (name === 'style') {
            return absoluteToStylesheet(value, getHref());
        }
        else if (tagName === 'object' && name === 'data') {
            return absoluteToDoc(doc, value);
        }
        return value;
    }
    function ignoreAttribute(tagName, name, _value) {
        return (tagName === 'video' || tagName === 'audio') && name === 'autoplay';
    }
    function _isBlockedElement(element, blockClass, blockSelector) {
        if (typeof blockClass === 'string') {
            if (element.classList.contains(blockClass)) {
                return true;
            }
        }
        else {
            for (var eIndex = element.classList.length; eIndex--;) {
                var className = element.classList[eIndex];
                if (blockClass.test(className)) {
                    return true;
                }
            }
        }
        if (blockSelector) {
            return element.matches(blockSelector);
        }
        return false;
    }
    function classMatchesRegex(node, regex, checkAncestors) {
        if (!node)
            return false;
        if (node.nodeType !== node.ELEMENT_NODE) {
            if (!checkAncestors)
                return false;
            return classMatchesRegex(node.parentNode, regex, checkAncestors);
        }
        for (var eIndex = node.classList.length; eIndex--;) {
            var className = node.classList[eIndex];
            if (regex.test(className)) {
                return true;
            }
        }
        if (!checkAncestors)
            return false;
        return classMatchesRegex(node.parentNode, regex, checkAncestors);
    }
    function needMaskingText(node, maskTextClass, maskTextSelector) {
        var el = node.nodeType === node.ELEMENT_NODE
            ? node
            : node.parentElement;
        if (el === null)
            return false;
        if (typeof maskTextClass === 'string') {
            if (el.classList.contains(maskTextClass))
                return true;
            if (el.closest(".".concat(maskTextClass)))
                return true;
        }
        else {
            if (classMatchesRegex(el, maskTextClass, true))
                return true;
        }
        if (maskTextSelector) {
            if (el.matches(maskTextSelector))
                return true;
            if (el.closest(maskTextSelector))
                return true;
        }
        return false;
    }
    function onceIframeLoaded(iframeEl, listener, iframeLoadTimeout) {
        var win = iframeEl.contentWindow;
        if (!win) {
            return;
        }
        var fired = false;
        var readyState;
        try {
            readyState = win.document.readyState;
        }
        catch (error) {
            return;
        }
        if (readyState !== 'complete') {
            var timer_1 = setTimeout(function () {
                if (!fired) {
                    listener();
                    fired = true;
                }
            }, iframeLoadTimeout);
            iframeEl.addEventListener('load', function () {
                clearTimeout(timer_1);
                fired = true;
                listener();
            });
            return;
        }
        var blankUrl = 'about:blank';
        if (win.location.href !== blankUrl ||
            iframeEl.src === blankUrl ||
            iframeEl.src === '') {
            setTimeout(listener, 0);
            return iframeEl.addEventListener('load', listener);
        }
        iframeEl.addEventListener('load', listener);
    }
    function onceStylesheetLoaded(link, listener, styleSheetLoadTimeout) {
        var fired = false;
        var styleSheetLoaded;
        try {
            styleSheetLoaded = link.sheet;
        }
        catch (error) {
            return;
        }
        if (styleSheetLoaded)
            return;
        var timer = setTimeout(function () {
            if (!fired) {
                listener();
                fired = true;
            }
        }, styleSheetLoadTimeout);
        link.addEventListener('load', function () {
            clearTimeout(timer);
            fired = true;
            listener();
        });
    }
    function serializeNode(n, options) {
        var doc = options.doc, mirror = options.mirror, blockClass = options.blockClass, blockSelector = options.blockSelector, maskTextClass = options.maskTextClass, maskTextSelector = options.maskTextSelector, inlineStylesheet = options.inlineStylesheet, _a = options.maskInputOptions, maskInputOptions = _a === void 0 ? {} : _a, maskTextFn = options.maskTextFn, maskInputFn = options.maskInputFn, _b = options.dataURLOptions, dataURLOptions = _b === void 0 ? {} : _b, inlineImages = options.inlineImages, recordCanvas = options.recordCanvas, keepIframeSrcFn = options.keepIframeSrcFn, _c = options.newlyAddedElement, newlyAddedElement = _c === void 0 ? false : _c;
        var rootId = getRootId(doc, mirror);
        switch (n.nodeType) {
            case n.DOCUMENT_NODE:
                if (n.compatMode !== 'CSS1Compat') {
                    return {
                        type: NodeType.Document,
                        childNodes: [],
                        compatMode: n.compatMode
                    };
                }
                else {
                    return {
                        type: NodeType.Document,
                        childNodes: []
                    };
                }
            case n.DOCUMENT_TYPE_NODE:
                return {
                    type: NodeType.DocumentType,
                    name: n.name,
                    publicId: n.publicId,
                    systemId: n.systemId,
                    rootId: rootId
                };
            case n.ELEMENT_NODE:
                return serializeElementNode(n, {
                    doc: doc,
                    blockClass: blockClass,
                    blockSelector: blockSelector,
                    inlineStylesheet: inlineStylesheet,
                    maskInputOptions: maskInputOptions,
                    maskInputFn: maskInputFn,
                    dataURLOptions: dataURLOptions,
                    inlineImages: inlineImages,
                    recordCanvas: recordCanvas,
                    keepIframeSrcFn: keepIframeSrcFn,
                    newlyAddedElement: newlyAddedElement,
                    rootId: rootId
                });
            case n.TEXT_NODE:
                return serializeTextNode(n, {
                    maskTextClass: maskTextClass,
                    maskTextSelector: maskTextSelector,
                    maskTextFn: maskTextFn,
                    rootId: rootId
                });
            case n.CDATA_SECTION_NODE:
                return {
                    type: NodeType.CDATA,
                    textContent: '',
                    rootId: rootId
                };
            case n.COMMENT_NODE:
                return {
                    type: NodeType.Comment,
                    textContent: n.textContent || '',
                    rootId: rootId
                };
            default:
                return false;
        }
    }
    function getRootId(doc, mirror) {
        if (!mirror.hasNode(doc))
            return undefined;
        var docId = mirror.getId(doc);
        return docId === 1 ? undefined : docId;
    }
    function serializeTextNode(n, options) {
        var _a;
        var maskTextClass = options.maskTextClass, maskTextSelector = options.maskTextSelector, maskTextFn = options.maskTextFn, rootId = options.rootId;
        var parentTagName = n.parentNode && n.parentNode.tagName;
        var textContent = n.textContent;
        var isStyle = parentTagName === 'STYLE' ? true : undefined;
        var isScript = parentTagName === 'SCRIPT' ? true : undefined;
        if (isStyle && textContent) {
            try {
                if (n.nextSibling || n.previousSibling) {
                }
                else if ((_a = n.parentNode.sheet) === null || _a === void 0 ? void 0 : _a.cssRules) {
                    textContent = stringifyStyleSheet(n.parentNode.sheet);
                }
            }
            catch (err) {
                console.warn("Cannot get CSS styles from text's parentNode. Error: ".concat(err), n);
            }
            textContent = absoluteToStylesheet(textContent, getHref());
        }
        if (isScript) {
            textContent = 'SCRIPT_PLACEHOLDER';
        }
        if (!isStyle &&
            !isScript &&
            textContent &&
            needMaskingText(n, maskTextClass, maskTextSelector)) {
            textContent = maskTextFn
                ? maskTextFn(textContent)
                : textContent.replace(/[\S]/g, '*');
        }
        return {
            type: NodeType.Text,
            textContent: textContent || '',
            isStyle: isStyle,
            rootId: rootId
        };
    }
    function serializeElementNode(n, options) {
        var doc = options.doc, blockClass = options.blockClass, blockSelector = options.blockSelector, inlineStylesheet = options.inlineStylesheet, _a = options.maskInputOptions, maskInputOptions = _a === void 0 ? {} : _a, maskInputFn = options.maskInputFn, _b = options.dataURLOptions, dataURLOptions = _b === void 0 ? {} : _b, inlineImages = options.inlineImages, recordCanvas = options.recordCanvas, keepIframeSrcFn = options.keepIframeSrcFn, _c = options.newlyAddedElement, newlyAddedElement = _c === void 0 ? false : _c, rootId = options.rootId;
        var needBlock = _isBlockedElement(n, blockClass, blockSelector);
        var tagName = getValidTagName(n);
        var attributes = {};
        var len = n.attributes.length;
        for (var i = 0; i < len; i++) {
            var attr = n.attributes[i];
            if (!ignoreAttribute(tagName, attr.name)) {
                attributes[attr.name] = transformAttribute(doc, tagName, attr.name, attr.value);
            }
        }
        if (tagName === 'link' && inlineStylesheet) {
            var stylesheet = Array.from(doc.styleSheets).find(function (s) {
                return s.href === n.href;
            });
            var cssText = null;
            if (stylesheet) {
                cssText = getCssRulesString(stylesheet);
            }
            if (cssText) {
                delete attributes.rel;
                delete attributes.href;
                attributes._cssText = absoluteToStylesheet(cssText, stylesheet.href);
            }
        }
        if (tagName === 'style' &&
            n.sheet &&
            !(n.innerText || n.textContent || '').trim().length) {
            var cssText = getCssRulesString(n.sheet);
            if (cssText) {
                attributes._cssText = absoluteToStylesheet(cssText, getHref());
            }
        }
        if (tagName === 'input' || tagName === 'textarea' || tagName === 'select') {
            var value = n.value;
            var checked = n.checked;
            if (attributes.type !== 'radio' &&
                attributes.type !== 'checkbox' &&
                attributes.type !== 'submit' &&
                attributes.type !== 'button' &&
                value) {
                var type = n.hasAttribute('data-rr-is-password')
                    ? 'password'
                    : typeof attributes.type === 'string'
                        ? attributes.type.toLowerCase()
                        : null;
                attributes.value = maskInputValue({
                    type: type,
                    tagName: tagName,
                    value: value,
                    maskInputOptions: maskInputOptions,
                    maskInputFn: maskInputFn
                });
            }
            else if (checked) {
                attributes.checked = checked;
            }
        }
        if (tagName === 'option') {
            if (n.selected && !maskInputOptions['select']) {
                attributes.selected = true;
            }
            else {
                delete attributes.selected;
            }
        }
        if (tagName === 'canvas' && recordCanvas) {
            if (n.__context === '2d') {
                if (!is2DCanvasBlank(n)) {
                    attributes.rr_dataURL = n.toDataURL(dataURLOptions.type, dataURLOptions.quality);
                }
            }
            else if (!('__context' in n)) {
                var canvasDataURL = n.toDataURL(dataURLOptions.type, dataURLOptions.quality);
                var blankCanvas = document.createElement('canvas');
                blankCanvas.width = n.width;
                blankCanvas.height = n.height;
                var blankCanvasDataURL = blankCanvas.toDataURL(dataURLOptions.type, dataURLOptions.quality);
                if (canvasDataURL !== blankCanvasDataURL) {
                    attributes.rr_dataURL = canvasDataURL;
                }
            }
        }
        if (tagName === 'img' && inlineImages) {
            if (!canvasService) {
                canvasService = doc.createElement('canvas');
                canvasCtx = canvasService.getContext('2d');
            }
            var image_1 = n;
            var oldValue_1 = image_1.crossOrigin;
            image_1.crossOrigin = 'anonymous';
            var recordInlineImage_1 = function () {
                image_1.removeEventListener('load', recordInlineImage_1);
                try {
                    canvasService.width = image_1.naturalWidth;
                    canvasService.height = image_1.naturalHeight;
                    canvasCtx.drawImage(image_1, 0, 0);
                    attributes.rr_dataURL = canvasService.toDataURL(dataURLOptions.type, dataURLOptions.quality);
                }
                catch (err) {
                    console.warn("Cannot inline img src=".concat(image_1.currentSrc, "! Error: ").concat(err));
                }
                oldValue_1
                    ? (attributes.crossOrigin = oldValue_1)
                    : image_1.removeAttribute('crossorigin');
            };
            if (image_1.complete && image_1.naturalWidth !== 0)
                recordInlineImage_1();
            else
                image_1.addEventListener('load', recordInlineImage_1);
        }
        if (tagName === 'audio' || tagName === 'video') {
            attributes.rr_mediaState = n.paused
                ? 'paused'
                : 'played';
            attributes.rr_mediaCurrentTime = n.currentTime;
        }
        if (!newlyAddedElement) {
            if (n.scrollLeft) {
                attributes.rr_scrollLeft = n.scrollLeft;
            }
            if (n.scrollTop) {
                attributes.rr_scrollTop = n.scrollTop;
            }
        }
        if (needBlock) {
            var _d = n.getBoundingClientRect(), width = _d.width, height = _d.height;
            attributes = {
                "class": attributes["class"],
                rr_width: "".concat(width, "px"),
                rr_height: "".concat(height, "px")
            };
        }
        if (tagName === 'iframe' && !keepIframeSrcFn(attributes.src)) {
            if (!n.contentDocument) {
                attributes.rr_src = attributes.src;
            }
            delete attributes.src;
        }
        return {
            type: NodeType.Element,
            tagName: tagName,
            attributes: attributes,
            childNodes: [],
            isSVG: isSVGElement(n) || undefined,
            needBlock: needBlock,
            rootId: rootId
        };
    }
    function lowerIfExists(maybeAttr) {
        if (maybeAttr === undefined || maybeAttr === null) {
            return '';
        }
        else {
            return maybeAttr.toLowerCase();
        }
    }
    function slimDOMExcluded(sn, slimDOMOptions) {
        if (slimDOMOptions.comment && sn.type === NodeType.Comment) {
            return true;
        }
        else if (sn.type === NodeType.Element) {
            if (slimDOMOptions.script &&
                (sn.tagName === 'script' ||
                    (sn.tagName === 'link' &&
                        (sn.attributes.rel === 'preload' ||
                            sn.attributes.rel === 'modulepreload') &&
                        sn.attributes.as === 'script') ||
                    (sn.tagName === 'link' &&
                        sn.attributes.rel === 'prefetch' &&
                        typeof sn.attributes.href === 'string' &&
                        sn.attributes.href.endsWith('.js')))) {
                return true;
            }
            else if (slimDOMOptions.headFavicon &&
                ((sn.tagName === 'link' && sn.attributes.rel === 'shortcut icon') ||
                    (sn.tagName === 'meta' &&
                        (lowerIfExists(sn.attributes.name).match(/^msapplication-tile(image|color)$/) ||
                            lowerIfExists(sn.attributes.name) === 'application-name' ||
                            lowerIfExists(sn.attributes.rel) === 'icon' ||
                            lowerIfExists(sn.attributes.rel) === 'apple-touch-icon' ||
                            lowerIfExists(sn.attributes.rel) === 'shortcut icon')))) {
                return true;
            }
            else if (sn.tagName === 'meta') {
                if (slimDOMOptions.headMetaDescKeywords &&
                    lowerIfExists(sn.attributes.name).match(/^description|keywords$/)) {
                    return true;
                }
                else if (slimDOMOptions.headMetaSocial &&
                    (lowerIfExists(sn.attributes.property).match(/^(og|twitter|fb):/) ||
                        lowerIfExists(sn.attributes.name).match(/^(og|twitter):/) ||
                        lowerIfExists(sn.attributes.name) === 'pinterest')) {
                    return true;
                }
                else if (slimDOMOptions.headMetaRobots &&
                    (lowerIfExists(sn.attributes.name) === 'robots' ||
                        lowerIfExists(sn.attributes.name) === 'googlebot' ||
                        lowerIfExists(sn.attributes.name) === 'bingbot')) {
                    return true;
                }
                else if (slimDOMOptions.headMetaHttpEquiv &&
                    sn.attributes['http-equiv'] !== undefined) {
                    return true;
                }
                else if (slimDOMOptions.headMetaAuthorship &&
                    (lowerIfExists(sn.attributes.name) === 'author' ||
                        lowerIfExists(sn.attributes.name) === 'generator' ||
                        lowerIfExists(sn.attributes.name) === 'framework' ||
                        lowerIfExists(sn.attributes.name) === 'publisher' ||
                        lowerIfExists(sn.attributes.name) === 'progid' ||
                        lowerIfExists(sn.attributes.property).match(/^article:/) ||
                        lowerIfExists(sn.attributes.property).match(/^product:/))) {
                    return true;
                }
                else if (slimDOMOptions.headMetaVerification &&
                    (lowerIfExists(sn.attributes.name) === 'google-site-verification' ||
                        lowerIfExists(sn.attributes.name) === 'yandex-verification' ||
                        lowerIfExists(sn.attributes.name) === 'csrf-token' ||
                        lowerIfExists(sn.attributes.name) === 'p:domain_verify' ||
                        lowerIfExists(sn.attributes.name) === 'verify-v1' ||
                        lowerIfExists(sn.attributes.name) === 'verification' ||
                        lowerIfExists(sn.attributes.name) === 'shopify-checkout-api-token')) {
                    return true;
                }
            }
        }
        return false;
    }
    function serializeNodeWithId(n, options) {
        var doc = options.doc, mirror = options.mirror, blockClass = options.blockClass, blockSelector = options.blockSelector, maskTextClass = options.maskTextClass, maskTextSelector = options.maskTextSelector, _a = options.skipChild, skipChild = _a === void 0 ? false : _a, _b = options.inlineStylesheet, inlineStylesheet = _b === void 0 ? true : _b, _c = options.maskInputOptions, maskInputOptions = _c === void 0 ? {} : _c, maskTextFn = options.maskTextFn, maskInputFn = options.maskInputFn, slimDOMOptions = options.slimDOMOptions, _d = options.dataURLOptions, dataURLOptions = _d === void 0 ? {} : _d, _e = options.inlineImages, inlineImages = _e === void 0 ? false : _e, _f = options.recordCanvas, recordCanvas = _f === void 0 ? false : _f, onSerialize = options.onSerialize, onIframeLoad = options.onIframeLoad, _g = options.iframeLoadTimeout, iframeLoadTimeout = _g === void 0 ? 5000 : _g, onStylesheetLoad = options.onStylesheetLoad, _h = options.stylesheetLoadTimeout, stylesheetLoadTimeout = _h === void 0 ? 5000 : _h, _j = options.keepIframeSrcFn, keepIframeSrcFn = _j === void 0 ? function () { return false; } : _j, _k = options.newlyAddedElement, newlyAddedElement = _k === void 0 ? false : _k;
        var _l = options.preserveWhiteSpace, preserveWhiteSpace = _l === void 0 ? true : _l;
        var _serializedNode = serializeNode(n, {
            doc: doc,
            mirror: mirror,
            blockClass: blockClass,
            blockSelector: blockSelector,
            maskTextClass: maskTextClass,
            maskTextSelector: maskTextSelector,
            inlineStylesheet: inlineStylesheet,
            maskInputOptions: maskInputOptions,
            maskTextFn: maskTextFn,
            maskInputFn: maskInputFn,
            dataURLOptions: dataURLOptions,
            inlineImages: inlineImages,
            recordCanvas: recordCanvas,
            keepIframeSrcFn: keepIframeSrcFn,
            newlyAddedElement: newlyAddedElement
        });
        if (!_serializedNode) {
            console.warn(n, 'not serialized');
            return null;
        }
        var id;
        if (mirror.hasNode(n)) {
            id = mirror.getId(n);
        }
        else if (slimDOMExcluded(_serializedNode, slimDOMOptions) ||
            (!preserveWhiteSpace &&
                _serializedNode.type === NodeType.Text &&
                !_serializedNode.isStyle &&
                !_serializedNode.textContent.replace(/^\s+|\s+$/gm, '').length)) {
            id = IGNORED_NODE;
        }
        else {
            id = genId();
        }
        var serializedNode = Object.assign(_serializedNode, { id: id });
        mirror.add(n, serializedNode);
        if (id === IGNORED_NODE) {
            return null;
        }
        if (onSerialize) {
            onSerialize(n);
        }
        var recordChild = !skipChild;
        if (serializedNode.type === NodeType.Element) {
            recordChild = recordChild && !serializedNode.needBlock;
            delete serializedNode.needBlock;
            var shadowRoot = n.shadowRoot;
            if (shadowRoot && isNativeShadowDom(shadowRoot))
                serializedNode.isShadowHost = true;
        }
        if ((serializedNode.type === NodeType.Document ||
            serializedNode.type === NodeType.Element) &&
            recordChild) {
            if (slimDOMOptions.headWhitespace &&
                serializedNode.type === NodeType.Element &&
                serializedNode.tagName === 'head') {
                preserveWhiteSpace = false;
            }
            var bypassOptions = {
                doc: doc,
                mirror: mirror,
                blockClass: blockClass,
                blockSelector: blockSelector,
                maskTextClass: maskTextClass,
                maskTextSelector: maskTextSelector,
                skipChild: skipChild,
                inlineStylesheet: inlineStylesheet,
                maskInputOptions: maskInputOptions,
                maskTextFn: maskTextFn,
                maskInputFn: maskInputFn,
                slimDOMOptions: slimDOMOptions,
                dataURLOptions: dataURLOptions,
                inlineImages: inlineImages,
                recordCanvas: recordCanvas,
                preserveWhiteSpace: preserveWhiteSpace,
                onSerialize: onSerialize,
                onIframeLoad: onIframeLoad,
                iframeLoadTimeout: iframeLoadTimeout,
                onStylesheetLoad: onStylesheetLoad,
                stylesheetLoadTimeout: stylesheetLoadTimeout,
                keepIframeSrcFn: keepIframeSrcFn
            };
            for (var _i = 0, _m = Array.from(n.childNodes); _i < _m.length; _i++) {
                var childN = _m[_i];
                var serializedChildNode = serializeNodeWithId(childN, bypassOptions);
                if (serializedChildNode) {
                    serializedNode.childNodes.push(serializedChildNode);
                }
            }
            if (isElement(n) && n.shadowRoot) {
                for (var _o = 0, _p = Array.from(n.shadowRoot.childNodes); _o < _p.length; _o++) {
                    var childN = _p[_o];
                    var serializedChildNode = serializeNodeWithId(childN, bypassOptions);
                    if (serializedChildNode) {
                        isNativeShadowDom(n.shadowRoot) &&
                            (serializedChildNode.isShadow = true);
                        serializedNode.childNodes.push(serializedChildNode);
                    }
                }
            }
        }
        if (n.parentNode &&
            isShadowRoot(n.parentNode) &&
            isNativeShadowDom(n.parentNode)) {
            serializedNode.isShadow = true;
        }
        if (serializedNode.type === NodeType.Element &&
            serializedNode.tagName === 'iframe') {
            onceIframeLoaded(n, function () {
                var iframeDoc = n.contentDocument;
                if (iframeDoc && onIframeLoad) {
                    var serializedIframeNode = serializeNodeWithId(iframeDoc, {
                        doc: iframeDoc,
                        mirror: mirror,
                        blockClass: blockClass,
                        blockSelector: blockSelector,
                        maskTextClass: maskTextClass,
                        maskTextSelector: maskTextSelector,
                        skipChild: false,
                        inlineStylesheet: inlineStylesheet,
                        maskInputOptions: maskInputOptions,
                        maskTextFn: maskTextFn,
                        maskInputFn: maskInputFn,
                        slimDOMOptions: slimDOMOptions,
                        dataURLOptions: dataURLOptions,
                        inlineImages: inlineImages,
                        recordCanvas: recordCanvas,
                        preserveWhiteSpace: preserveWhiteSpace,
                        onSerialize: onSerialize,
                        onIframeLoad: onIframeLoad,
                        iframeLoadTimeout: iframeLoadTimeout,
                        onStylesheetLoad: onStylesheetLoad,
                        stylesheetLoadTimeout: stylesheetLoadTimeout,
                        keepIframeSrcFn: keepIframeSrcFn
                    });
                    if (serializedIframeNode) {
                        onIframeLoad(n, serializedIframeNode);
                    }
                }
            }, iframeLoadTimeout);
        }
        if (serializedNode.type === NodeType.Element &&
            serializedNode.tagName === 'link' &&
            serializedNode.attributes.rel === 'stylesheet') {
            onceStylesheetLoaded(n, function () {
                if (onStylesheetLoad) {
                    var serializedLinkNode = serializeNodeWithId(n, {
                        doc: doc,
                        mirror: mirror,
                        blockClass: blockClass,
                        blockSelector: blockSelector,
                        maskTextClass: maskTextClass,
                        maskTextSelector: maskTextSelector,
                        skipChild: false,
                        inlineStylesheet: inlineStylesheet,
                        maskInputOptions: maskInputOptions,
                        maskTextFn: maskTextFn,
                        maskInputFn: maskInputFn,
                        slimDOMOptions: slimDOMOptions,
                        dataURLOptions: dataURLOptions,
                        inlineImages: inlineImages,
                        recordCanvas: recordCanvas,
                        preserveWhiteSpace: preserveWhiteSpace,
                        onSerialize: onSerialize,
                        onIframeLoad: onIframeLoad,
                        iframeLoadTimeout: iframeLoadTimeout,
                        onStylesheetLoad: onStylesheetLoad,
                        stylesheetLoadTimeout: stylesheetLoadTimeout,
                        keepIframeSrcFn: keepIframeSrcFn
                    });
                    if (serializedLinkNode) {
                        onStylesheetLoad(n, serializedLinkNode);
                    }
                }
            }, stylesheetLoadTimeout);
        }
        return serializedNode;
    }
    function snapshot(n, options) {
        var _a = options || {}, _b = _a.mirror, mirror = _b === void 0 ? new Mirror() : _b, _c = _a.blockClass, blockClass = _c === void 0 ? 'rr-block' : _c, _d = _a.blockSelector, blockSelector = _d === void 0 ? null : _d, _e = _a.maskTextClass, maskTextClass = _e === void 0 ? 'rr-mask' : _e, _f = _a.maskTextSelector, maskTextSelector = _f === void 0 ? null : _f, _g = _a.inlineStylesheet, inlineStylesheet = _g === void 0 ? true : _g, _h = _a.inlineImages, inlineImages = _h === void 0 ? false : _h, _j = _a.recordCanvas, recordCanvas = _j === void 0 ? false : _j, _k = _a.maskAllInputs, maskAllInputs = _k === void 0 ? false : _k, maskTextFn = _a.maskTextFn, maskInputFn = _a.maskInputFn, _l = _a.slimDOM, slimDOM = _l === void 0 ? false : _l, dataURLOptions = _a.dataURLOptions, preserveWhiteSpace = _a.preserveWhiteSpace, onSerialize = _a.onSerialize, onIframeLoad = _a.onIframeLoad, iframeLoadTimeout = _a.iframeLoadTimeout, onStylesheetLoad = _a.onStylesheetLoad, stylesheetLoadTimeout = _a.stylesheetLoadTimeout, _m = _a.keepIframeSrcFn, keepIframeSrcFn = _m === void 0 ? function () { return false; } : _m;
        var maskInputOptions = maskAllInputs === true
            ? {
                color: true,
                date: true,
                'datetime-local': true,
                email: true,
                month: true,
                number: true,
                range: true,
                search: true,
                tel: true,
                text: true,
                time: true,
                url: true,
                week: true,
                textarea: true,
                select: true,
                password: true
            }
            : maskAllInputs === false
                ? {
                    password: true
                }
                : maskAllInputs;
        var slimDOMOptions = slimDOM === true || slimDOM === 'all'
            ?
                {
                    script: true,
                    comment: true,
                    headFavicon: true,
                    headWhitespace: true,
                    headMetaDescKeywords: slimDOM === 'all',
                    headMetaSocial: true,
                    headMetaRobots: true,
                    headMetaHttpEquiv: true,
                    headMetaAuthorship: true,
                    headMetaVerification: true
                }
            : slimDOM === false
                ? {}
                : slimDOM;
        return serializeNodeWithId(n, {
            doc: n,
            mirror: mirror,
            blockClass: blockClass,
            blockSelector: blockSelector,
            maskTextClass: maskTextClass,
            maskTextSelector: maskTextSelector,
            skipChild: false,
            inlineStylesheet: inlineStylesheet,
            maskInputOptions: maskInputOptions,
            maskTextFn: maskTextFn,
            maskInputFn: maskInputFn,
            slimDOMOptions: slimDOMOptions,
            dataURLOptions: dataURLOptions,
            inlineImages: inlineImages,
            recordCanvas: recordCanvas,
            preserveWhiteSpace: preserveWhiteSpace,
            onSerialize: onSerialize,
            onIframeLoad: onIframeLoad,
            iframeLoadTimeout: iframeLoadTimeout,
            onStylesheetLoad: onStylesheetLoad,
            stylesheetLoadTimeout: stylesheetLoadTimeout,
            keepIframeSrcFn: keepIframeSrcFn,
            newlyAddedElement: false
        });
    }

    function on$1(type, fn, target = document) {
        const options = { capture: true, passive: true };
        target.addEventListener(type, fn, options);
        return () => target.removeEventListener(type, fn, options);
    }
    const DEPARTED_MIRROR_ACCESS_WARNING = 'Please stop import mirror directly. Instead of that,' +
        '\r\n' +
        'now you can use replayer.getMirror() to access the mirror instance of a replayer,' +
        '\r\n' +
        'or you can use record.mirror to access the mirror instance during recording.';
    let _mirror = {
        map: {},
        getId() {
            console.error(DEPARTED_MIRROR_ACCESS_WARNING);
            return -1;
        },
        getNode() {
            console.error(DEPARTED_MIRROR_ACCESS_WARNING);
            return null;
        },
        removeNodeFromMap() {
            console.error(DEPARTED_MIRROR_ACCESS_WARNING);
        },
        has() {
            console.error(DEPARTED_MIRROR_ACCESS_WARNING);
            return false;
        },
        reset() {
            console.error(DEPARTED_MIRROR_ACCESS_WARNING);
        },
    };
    if (typeof window !== 'undefined' && window.Proxy && window.Reflect) {
        _mirror = new Proxy(_mirror, {
            get(target, prop, receiver) {
                if (prop === 'map') {
                    console.error(DEPARTED_MIRROR_ACCESS_WARNING);
                }
                return Reflect.get(target, prop, receiver);
            },
        });
    }
    function throttle(func, wait, options = {}) {
        let timeout = null;
        let previous = 0;
        return function (...args) {
            const now = Date.now();
            if (!previous && options.leading === false) {
                previous = now;
            }
            const remaining = wait - (now - previous);
            const context = this;
            if (remaining <= 0 || remaining > wait) {
                if (timeout) {
                    clearTimeout(timeout);
                    timeout = null;
                }
                previous = now;
                func.apply(context, args);
            }
            else if (!timeout && options.trailing !== false) {
                timeout = setTimeout(() => {
                    previous = options.leading === false ? 0 : Date.now();
                    timeout = null;
                    func.apply(context, args);
                }, remaining);
            }
        };
    }
    function hookSetter(target, key, d, isRevoked, win = window) {
        const original = win.Object.getOwnPropertyDescriptor(target, key);
        win.Object.defineProperty(target, key, isRevoked
            ? d
            : {
                set(value) {
                    setTimeout(() => {
                        d.set.call(this, value);
                    }, 0);
                    if (original && original.set) {
                        original.set.call(this, value);
                    }
                },
            });
        return () => hookSetter(target, key, original || {}, true);
    }
    function patch(source, name, replacement) {
        try {
            if (!(name in source)) {
                return () => {
                };
            }
            const original = source[name];
            const wrapped = replacement(original);
            if (typeof wrapped === 'function') {
                wrapped.prototype = wrapped.prototype || {};
                Object.defineProperties(wrapped, {
                    __rrweb_original__: {
                        enumerable: false,
                        value: original,
                    },
                });
            }
            source[name] = wrapped;
            return () => {
                source[name] = original;
            };
        }
        catch (_a) {
            return () => {
            };
        }
    }
    function getWindowScroll(win) {
        var _a, _b, _c, _d, _e, _f;
        const doc = win.document;
        return {
            left: doc.scrollingElement
                ? doc.scrollingElement.scrollLeft
                : win.pageXOffset !== undefined
                    ? win.pageXOffset
                    : (doc === null || doc === void 0 ? void 0 : doc.documentElement.scrollLeft) ||
                        ((_b = (_a = doc === null || doc === void 0 ? void 0 : doc.body) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.scrollLeft) ||
                        ((_c = doc === null || doc === void 0 ? void 0 : doc.body) === null || _c === void 0 ? void 0 : _c.scrollLeft) ||
                        0,
            top: doc.scrollingElement
                ? doc.scrollingElement.scrollTop
                : win.pageYOffset !== undefined
                    ? win.pageYOffset
                    : (doc === null || doc === void 0 ? void 0 : doc.documentElement.scrollTop) ||
                        ((_e = (_d = doc === null || doc === void 0 ? void 0 : doc.body) === null || _d === void 0 ? void 0 : _d.parentElement) === null || _e === void 0 ? void 0 : _e.scrollTop) ||
                        ((_f = doc === null || doc === void 0 ? void 0 : doc.body) === null || _f === void 0 ? void 0 : _f.scrollTop) ||
                        0,
        };
    }
    function getWindowHeight() {
        return (window.innerHeight ||
            (document.documentElement && document.documentElement.clientHeight) ||
            (document.body && document.body.clientHeight));
    }
    function getWindowWidth() {
        return (window.innerWidth ||
            (document.documentElement && document.documentElement.clientWidth) ||
            (document.body && document.body.clientWidth));
    }
    function isBlocked(node, blockClass, blockSelector, checkAncestors) {
        if (!node) {
            return false;
        }
        const el = node.nodeType === node.ELEMENT_NODE
            ? node
            : node.parentElement;
        if (!el)
            return false;
        try {
            if (typeof blockClass === 'string') {
                if (el.classList.contains(blockClass))
                    return true;
                if (checkAncestors && el.closest('.' + blockClass) !== null)
                    return true;
            }
            else {
                if (classMatchesRegex(el, blockClass, checkAncestors))
                    return true;
            }
        }
        catch (e) {
        }
        if (blockSelector) {
            if (el.matches(blockSelector))
                return true;
            if (checkAncestors && el.closest(blockSelector) !== null)
                return true;
        }
        return false;
    }
    function isSerialized(n, mirror) {
        return mirror.getId(n) !== -1;
    }
    function isIgnored(n, mirror) {
        return mirror.getId(n) === IGNORED_NODE;
    }
    function isAncestorRemoved(target, mirror) {
        if (isShadowRoot(target)) {
            return false;
        }
        const id = mirror.getId(target);
        if (!mirror.has(id)) {
            return true;
        }
        if (target.parentNode &&
            target.parentNode.nodeType === target.DOCUMENT_NODE) {
            return false;
        }
        if (!target.parentNode) {
            return true;
        }
        return isAncestorRemoved(target.parentNode, mirror);
    }
    function isTouchEvent(event) {
        return Boolean(event.changedTouches);
    }
    function polyfill(win = window) {
        if ('NodeList' in win && !win.NodeList.prototype.forEach) {
            win.NodeList.prototype.forEach = Array.prototype
                .forEach;
        }
        if ('DOMTokenList' in win && !win.DOMTokenList.prototype.forEach) {
            win.DOMTokenList.prototype.forEach = Array.prototype
                .forEach;
        }
        if (!Node.prototype.contains) {
            Node.prototype.contains = (...args) => {
                let node = args[0];
                if (!(0 in args)) {
                    throw new TypeError('1 argument is required');
                }
                do {
                    if (this === node) {
                        return true;
                    }
                } while ((node = node && node.parentNode));
                return false;
            };
        }
    }
    function isSerializedIframe(n, mirror) {
        return Boolean(n.nodeName === 'IFRAME' && mirror.getMeta(n));
    }
    function isSerializedStylesheet(n, mirror) {
        return Boolean(n.nodeName === 'LINK' &&
            n.nodeType === n.ELEMENT_NODE &&
            n.getAttribute &&
            n.getAttribute('rel') === 'stylesheet' &&
            mirror.getMeta(n));
    }
    function hasShadowRoot(n) {
        return Boolean(n === null || n === void 0 ? void 0 : n.shadowRoot);
    }
    class StyleSheetMirror {
        constructor() {
            this.id = 1;
            this.styleIDMap = new WeakMap();
            this.idStyleMap = new Map();
        }
        getId(stylesheet) {
            var _a;
            return (_a = this.styleIDMap.get(stylesheet)) !== null && _a !== void 0 ? _a : -1;
        }
        has(stylesheet) {
            return this.styleIDMap.has(stylesheet);
        }
        add(stylesheet, id) {
            if (this.has(stylesheet))
                return this.getId(stylesheet);
            let newId;
            if (id === undefined) {
                newId = this.id++;
            }
            else
                newId = id;
            this.styleIDMap.set(stylesheet, newId);
            this.idStyleMap.set(newId, stylesheet);
            return newId;
        }
        getStyle(id) {
            return this.idStyleMap.get(id) || null;
        }
        reset() {
            this.styleIDMap = new WeakMap();
            this.idStyleMap = new Map();
            this.id = 1;
        }
        generateId() {
            return this.id++;
        }
    }
    function getShadowHost(n) {
        var _a, _b;
        let shadowHost = null;
        if (((_b = (_a = n.getRootNode) === null || _a === void 0 ? void 0 : _a.call(n)) === null || _b === void 0 ? void 0 : _b.nodeType) === Node.DOCUMENT_FRAGMENT_NODE &&
            n.getRootNode().host)
            shadowHost = n.getRootNode().host;
        return shadowHost;
    }
    function getRootShadowHost(n) {
        let rootShadowHost = n;
        let shadowHost;
        while ((shadowHost = getShadowHost(rootShadowHost)))
            rootShadowHost = shadowHost;
        return rootShadowHost;
    }
    function shadowHostInDom(n) {
        const doc = n.ownerDocument;
        if (!doc)
            return false;
        const shadowHost = getRootShadowHost(n);
        return doc.contains(shadowHost);
    }
    function inDom(n) {
        const doc = n.ownerDocument;
        if (!doc)
            return false;
        return doc.contains(n) || shadowHostInDom(n);
    }
    function getInputType(element) {
        return element.hasAttribute('data-rr-is-password')
            ? 'password'
            : element.hasAttribute('type')
                ?
                    element.getAttribute('type').toLowerCase()
                : null;
    }

    var EventType = /* @__PURE__ */ ((EventType2) => {
      EventType2[EventType2["DomContentLoaded"] = 0] = "DomContentLoaded";
      EventType2[EventType2["Load"] = 1] = "Load";
      EventType2[EventType2["FullSnapshot"] = 2] = "FullSnapshot";
      EventType2[EventType2["IncrementalSnapshot"] = 3] = "IncrementalSnapshot";
      EventType2[EventType2["Meta"] = 4] = "Meta";
      EventType2[EventType2["Custom"] = 5] = "Custom";
      EventType2[EventType2["Plugin"] = 6] = "Plugin";
      return EventType2;
    })(EventType || {});
    var IncrementalSource = /* @__PURE__ */ ((IncrementalSource2) => {
      IncrementalSource2[IncrementalSource2["Mutation"] = 0] = "Mutation";
      IncrementalSource2[IncrementalSource2["MouseMove"] = 1] = "MouseMove";
      IncrementalSource2[IncrementalSource2["MouseInteraction"] = 2] = "MouseInteraction";
      IncrementalSource2[IncrementalSource2["Scroll"] = 3] = "Scroll";
      IncrementalSource2[IncrementalSource2["ViewportResize"] = 4] = "ViewportResize";
      IncrementalSource2[IncrementalSource2["Input"] = 5] = "Input";
      IncrementalSource2[IncrementalSource2["TouchMove"] = 6] = "TouchMove";
      IncrementalSource2[IncrementalSource2["MediaInteraction"] = 7] = "MediaInteraction";
      IncrementalSource2[IncrementalSource2["StyleSheetRule"] = 8] = "StyleSheetRule";
      IncrementalSource2[IncrementalSource2["CanvasMutation"] = 9] = "CanvasMutation";
      IncrementalSource2[IncrementalSource2["Font"] = 10] = "Font";
      IncrementalSource2[IncrementalSource2["Log"] = 11] = "Log";
      IncrementalSource2[IncrementalSource2["Drag"] = 12] = "Drag";
      IncrementalSource2[IncrementalSource2["StyleDeclaration"] = 13] = "StyleDeclaration";
      IncrementalSource2[IncrementalSource2["Selection"] = 14] = "Selection";
      IncrementalSource2[IncrementalSource2["AdoptedStyleSheet"] = 15] = "AdoptedStyleSheet";
      return IncrementalSource2;
    })(IncrementalSource || {});
    var MouseInteractions = /* @__PURE__ */ ((MouseInteractions2) => {
      MouseInteractions2[MouseInteractions2["MouseUp"] = 0] = "MouseUp";
      MouseInteractions2[MouseInteractions2["MouseDown"] = 1] = "MouseDown";
      MouseInteractions2[MouseInteractions2["Click"] = 2] = "Click";
      MouseInteractions2[MouseInteractions2["ContextMenu"] = 3] = "ContextMenu";
      MouseInteractions2[MouseInteractions2["DblClick"] = 4] = "DblClick";
      MouseInteractions2[MouseInteractions2["Focus"] = 5] = "Focus";
      MouseInteractions2[MouseInteractions2["Blur"] = 6] = "Blur";
      MouseInteractions2[MouseInteractions2["TouchStart"] = 7] = "TouchStart";
      MouseInteractions2[MouseInteractions2["TouchMove_Departed"] = 8] = "TouchMove_Departed";
      MouseInteractions2[MouseInteractions2["TouchEnd"] = 9] = "TouchEnd";
      MouseInteractions2[MouseInteractions2["TouchCancel"] = 10] = "TouchCancel";
      return MouseInteractions2;
    })(MouseInteractions || {});
    var CanvasContext = /* @__PURE__ */ ((CanvasContext2) => {
      CanvasContext2[CanvasContext2["2D"] = 0] = "2D";
      CanvasContext2[CanvasContext2["WebGL"] = 1] = "WebGL";
      CanvasContext2[CanvasContext2["WebGL2"] = 2] = "WebGL2";
      return CanvasContext2;
    })(CanvasContext || {});

    function isNodeInLinkedList(n) {
        return '__ln' in n;
    }
    class DoubleLinkedList {
        constructor() {
            this.length = 0;
            this.head = null;
        }
        get(position) {
            if (position >= this.length) {
                throw new Error('Position outside of list range');
            }
            let current = this.head;
            for (let index = 0; index < position; index++) {
                current = (current === null || current === void 0 ? void 0 : current.next) || null;
            }
            return current;
        }
        addNode(n) {
            const node = {
                value: n,
                previous: null,
                next: null,
            };
            n.__ln = node;
            if (n.previousSibling && isNodeInLinkedList(n.previousSibling)) {
                const current = n.previousSibling.__ln.next;
                node.next = current;
                node.previous = n.previousSibling.__ln;
                n.previousSibling.__ln.next = node;
                if (current) {
                    current.previous = node;
                }
            }
            else if (n.nextSibling &&
                isNodeInLinkedList(n.nextSibling) &&
                n.nextSibling.__ln.previous) {
                const current = n.nextSibling.__ln.previous;
                node.previous = current;
                node.next = n.nextSibling.__ln;
                n.nextSibling.__ln.previous = node;
                if (current) {
                    current.next = node;
                }
            }
            else {
                if (this.head) {
                    this.head.previous = node;
                }
                node.next = this.head;
                this.head = node;
            }
            this.length++;
        }
        removeNode(n) {
            const current = n.__ln;
            if (!this.head) {
                return;
            }
            if (!current.previous) {
                this.head = current.next;
                if (this.head) {
                    this.head.previous = null;
                }
            }
            else {
                current.previous.next = current.next;
                if (current.next) {
                    current.next.previous = current.previous;
                }
            }
            if (n.__ln) {
                delete n.__ln;
            }
            this.length--;
        }
    }
    const moveKey = (id, parentId) => `${id}@${parentId}`;
    class MutationBuffer {
        constructor() {
            this.frozen = false;
            this.locked = false;
            this.texts = [];
            this.attributes = [];
            this.removes = [];
            this.mapRemoves = [];
            this.movedMap = {};
            this.addedSet = new Set();
            this.movedSet = new Set();
            this.droppedSet = new Set();
            this.processMutations = (mutations) => {
                mutations.forEach(this.processMutation);
                this.emit();
            };
            this.emit = () => {
                if (this.frozen || this.locked) {
                    return;
                }
                const adds = [];
                const addList = new DoubleLinkedList();
                const getNextId = (n) => {
                    let ns = n;
                    let nextId = IGNORED_NODE;
                    while (nextId === IGNORED_NODE) {
                        ns = ns && ns.nextSibling;
                        nextId = ns && this.mirror.getId(ns);
                    }
                    return nextId;
                };
                const pushAdd = (n) => {
                    if (!n.parentNode || !inDom(n)) {
                        return;
                    }
                    const parentId = isShadowRoot(n.parentNode)
                        ? this.mirror.getId(getShadowHost(n))
                        : this.mirror.getId(n.parentNode);
                    const nextId = getNextId(n);
                    if (parentId === -1 || nextId === -1) {
                        return addList.addNode(n);
                    }
                    const sn = serializeNodeWithId(n, {
                        doc: this.doc,
                        mirror: this.mirror,
                        blockClass: this.blockClass,
                        blockSelector: this.blockSelector,
                        maskTextClass: this.maskTextClass,
                        maskTextSelector: this.maskTextSelector,
                        skipChild: true,
                        newlyAddedElement: true,
                        inlineStylesheet: this.inlineStylesheet,
                        maskInputOptions: this.maskInputOptions,
                        maskTextFn: this.maskTextFn,
                        maskInputFn: this.maskInputFn,
                        slimDOMOptions: this.slimDOMOptions,
                        dataURLOptions: this.dataURLOptions,
                        recordCanvas: this.recordCanvas,
                        inlineImages: this.inlineImages,
                        onSerialize: (currentN) => {
                            if (isSerializedIframe(currentN, this.mirror)) {
                                this.iframeManager.addIframe(currentN);
                            }
                            if (isSerializedStylesheet(currentN, this.mirror)) {
                                this.stylesheetManager.trackLinkElement(currentN);
                            }
                            if (hasShadowRoot(n)) {
                                this.shadowDomManager.addShadowRoot(n.shadowRoot, this.doc);
                            }
                        },
                        onIframeLoad: (iframe, childSn) => {
                            this.iframeManager.attachIframe(iframe, childSn);
                            this.shadowDomManager.observeAttachShadow(iframe);
                        },
                        onStylesheetLoad: (link, childSn) => {
                            this.stylesheetManager.attachLinkElement(link, childSn);
                        },
                    });
                    if (sn) {
                        adds.push({
                            parentId,
                            nextId,
                            node: sn,
                        });
                    }
                };
                while (this.mapRemoves.length) {
                    this.mirror.removeNodeFromMap(this.mapRemoves.shift());
                }
                for (const n of this.movedSet) {
                    if (isParentRemoved(this.removes, n, this.mirror) &&
                        !this.movedSet.has(n.parentNode)) {
                        continue;
                    }
                    pushAdd(n);
                }
                for (const n of this.addedSet) {
                    if (!isAncestorInSet(this.droppedSet, n) &&
                        !isParentRemoved(this.removes, n, this.mirror)) {
                        pushAdd(n);
                    }
                    else if (isAncestorInSet(this.movedSet, n)) {
                        pushAdd(n);
                    }
                    else {
                        this.droppedSet.add(n);
                    }
                }
                let candidate = null;
                while (addList.length) {
                    let node = null;
                    if (candidate) {
                        const parentId = this.mirror.getId(candidate.value.parentNode);
                        const nextId = getNextId(candidate.value);
                        if (parentId !== -1 && nextId !== -1) {
                            node = candidate;
                        }
                    }
                    if (!node) {
                        for (let index = addList.length - 1; index >= 0; index--) {
                            const _node = addList.get(index);
                            if (_node) {
                                const parentId = this.mirror.getId(_node.value.parentNode);
                                const nextId = getNextId(_node.value);
                                if (nextId === -1)
                                    continue;
                                else if (parentId !== -1) {
                                    node = _node;
                                    break;
                                }
                                else {
                                    const unhandledNode = _node.value;
                                    if (unhandledNode.parentNode &&
                                        unhandledNode.parentNode.nodeType ===
                                            Node.DOCUMENT_FRAGMENT_NODE) {
                                        const shadowHost = unhandledNode.parentNode
                                            .host;
                                        const parentId = this.mirror.getId(shadowHost);
                                        if (parentId !== -1) {
                                            node = _node;
                                            break;
                                        }
                                    }
                                }
                            }
                        }
                    }
                    if (!node) {
                        while (addList.head) {
                            addList.removeNode(addList.head.value);
                        }
                        break;
                    }
                    candidate = node.previous;
                    addList.removeNode(node.value);
                    pushAdd(node.value);
                }
                const payload = {
                    texts: this.texts
                        .map((text) => ({
                        id: this.mirror.getId(text.node),
                        value: text.value,
                    }))
                        .filter((text) => this.mirror.has(text.id)),
                    attributes: this.attributes
                        .map((attribute) => ({
                        id: this.mirror.getId(attribute.node),
                        attributes: attribute.attributes,
                    }))
                        .filter((attribute) => this.mirror.has(attribute.id)),
                    removes: this.removes,
                    adds,
                };
                if (!payload.texts.length &&
                    !payload.attributes.length &&
                    !payload.removes.length &&
                    !payload.adds.length) {
                    return;
                }
                this.texts = [];
                this.attributes = [];
                this.removes = [];
                this.addedSet = new Set();
                this.movedSet = new Set();
                this.droppedSet = new Set();
                this.movedMap = {};
                this.mutationCb(payload);
            };
            this.processMutation = (m) => {
                if (isIgnored(m.target, this.mirror)) {
                    return;
                }
                switch (m.type) {
                    case 'characterData': {
                        const value = m.target.textContent;
                        if (!isBlocked(m.target, this.blockClass, this.blockSelector, false) &&
                            value !== m.oldValue) {
                            this.texts.push({
                                value: needMaskingText(m.target, this.maskTextClass, this.maskTextSelector) && value
                                    ? this.maskTextFn
                                        ? this.maskTextFn(value)
                                        : value.replace(/[\S]/g, '*')
                                    : value,
                                node: m.target,
                            });
                        }
                        break;
                    }
                    case 'attributes': {
                        const target = m.target;
                        let attributeName = m.attributeName;
                        let value = m.target.getAttribute(attributeName);
                        if (attributeName === 'value') {
                            const type = getInputType(target);
                            value = maskInputValue({
                                maskInputOptions: this.maskInputOptions,
                                tagName: target.tagName,
                                type,
                                value,
                                maskInputFn: this.maskInputFn,
                            });
                        }
                        if (isBlocked(m.target, this.blockClass, this.blockSelector, false) ||
                            value === m.oldValue) {
                            return;
                        }
                        let item = this.attributes.find((a) => a.node === m.target);
                        if (target.tagName === 'IFRAME' &&
                            attributeName === 'src' &&
                            !this.keepIframeSrcFn(value)) {
                            if (!target.contentDocument) {
                                attributeName = 'rr_src';
                            }
                            else {
                                return;
                            }
                        }
                        if (!item) {
                            item = {
                                node: m.target,
                                attributes: {},
                            };
                            this.attributes.push(item);
                        }
                        if (attributeName === 'type' &&
                            target.tagName === 'INPUT' &&
                            (m.oldValue || '').toLowerCase() === 'password') {
                            target.setAttribute('data-rr-is-password', 'true');
                        }
                        if (attributeName === 'style') {
                            const old = this.doc.createElement('span');
                            if (m.oldValue) {
                                old.setAttribute('style', m.oldValue);
                            }
                            if (item.attributes.style === undefined ||
                                item.attributes.style === null) {
                                item.attributes.style = {};
                            }
                            const styleObj = item.attributes.style;
                            for (const pname of Array.from(target.style)) {
                                const newValue = target.style.getPropertyValue(pname);
                                const newPriority = target.style.getPropertyPriority(pname);
                                if (newValue !== old.style.getPropertyValue(pname) ||
                                    newPriority !== old.style.getPropertyPriority(pname)) {
                                    if (newPriority === '') {
                                        styleObj[pname] = newValue;
                                    }
                                    else {
                                        styleObj[pname] = [newValue, newPriority];
                                    }
                                }
                            }
                            for (const pname of Array.from(old.style)) {
                                if (target.style.getPropertyValue(pname) === '') {
                                    styleObj[pname] = false;
                                }
                            }
                        }
                        else if (!ignoreAttribute(target.tagName, attributeName)) {
                            item.attributes[attributeName] = transformAttribute(this.doc, target.tagName, attributeName, value);
                        }
                        break;
                    }
                    case 'childList': {
                        if (isBlocked(m.target, this.blockClass, this.blockSelector, true))
                            return;
                        m.addedNodes.forEach((n) => this.genAdds(n, m.target));
                        m.removedNodes.forEach((n) => {
                            const nodeId = this.mirror.getId(n);
                            const parentId = isShadowRoot(m.target)
                                ? this.mirror.getId(m.target.host)
                                : this.mirror.getId(m.target);
                            if (isBlocked(m.target, this.blockClass, this.blockSelector, false) ||
                                isIgnored(n, this.mirror) ||
                                !isSerialized(n, this.mirror)) {
                                return;
                            }
                            if (this.addedSet.has(n)) {
                                deepDelete(this.addedSet, n);
                                this.droppedSet.add(n);
                            }
                            else if (this.addedSet.has(m.target) && nodeId === -1) ;
                            else if (isAncestorRemoved(m.target, this.mirror)) ;
                            else if (this.movedSet.has(n) &&
                                this.movedMap[moveKey(nodeId, parentId)]) {
                                deepDelete(this.movedSet, n);
                            }
                            else {
                                this.removes.push({
                                    parentId,
                                    id: nodeId,
                                    isShadow: isShadowRoot(m.target) && isNativeShadowDom(m.target)
                                        ? true
                                        : undefined,
                                });
                            }
                            this.mapRemoves.push(n);
                        });
                        break;
                    }
                }
            };
            this.genAdds = (n, target) => {
                if (this.processedNodeManager.inOtherBuffer(n, this))
                    return;
                if (this.mirror.hasNode(n)) {
                    if (isIgnored(n, this.mirror)) {
                        return;
                    }
                    this.movedSet.add(n);
                    let targetId = null;
                    if (target && this.mirror.hasNode(target)) {
                        targetId = this.mirror.getId(target);
                    }
                    if (targetId && targetId !== -1) {
                        this.movedMap[moveKey(this.mirror.getId(n), targetId)] = true;
                    }
                }
                else {
                    this.addedSet.add(n);
                    this.droppedSet.delete(n);
                }
                if (!isBlocked(n, this.blockClass, this.blockSelector, false)) {
                    n.childNodes.forEach((childN) => this.genAdds(childN));
                    if (hasShadowRoot(n)) {
                        n.shadowRoot.childNodes.forEach((childN) => {
                            this.processedNodeManager.add(childN, this);
                            this.genAdds(childN, n);
                        });
                    }
                }
            };
        }
        init(options) {
            [
                'mutationCb',
                'blockClass',
                'blockSelector',
                'maskTextClass',
                'maskTextSelector',
                'inlineStylesheet',
                'maskInputOptions',
                'maskTextFn',
                'maskInputFn',
                'keepIframeSrcFn',
                'recordCanvas',
                'inlineImages',
                'slimDOMOptions',
                'dataURLOptions',
                'doc',
                'mirror',
                'iframeManager',
                'stylesheetManager',
                'shadowDomManager',
                'canvasManager',
                'processedNodeManager',
            ].forEach((key) => {
                this[key] = options[key];
            });
        }
        freeze() {
            this.frozen = true;
            this.canvasManager.freeze();
        }
        unfreeze() {
            this.frozen = false;
            this.canvasManager.unfreeze();
            this.emit();
        }
        isFrozen() {
            return this.frozen;
        }
        lock() {
            this.locked = true;
            this.canvasManager.lock();
        }
        unlock() {
            this.locked = false;
            this.canvasManager.unlock();
            this.emit();
        }
        reset() {
            this.shadowDomManager.reset();
            this.canvasManager.reset();
        }
    }
    function deepDelete(addsSet, n) {
        addsSet.delete(n);
        n.childNodes.forEach((childN) => deepDelete(addsSet, childN));
    }
    function isParentRemoved(removes, n, mirror) {
        if (removes.length === 0)
            return false;
        return _isParentRemoved(removes, n, mirror);
    }
    function _isParentRemoved(removes, n, mirror) {
        const { parentNode } = n;
        if (!parentNode) {
            return false;
        }
        const parentId = mirror.getId(parentNode);
        if (removes.some((r) => r.id === parentId)) {
            return true;
        }
        return _isParentRemoved(removes, parentNode, mirror);
    }
    function isAncestorInSet(set, n) {
        if (set.size === 0)
            return false;
        return _isAncestorInSet(set, n);
    }
    function _isAncestorInSet(set, n) {
        const { parentNode } = n;
        if (!parentNode) {
            return false;
        }
        if (set.has(parentNode)) {
            return true;
        }
        return _isAncestorInSet(set, parentNode);
    }

    let errorHandler;
    function registerErrorHandler(handler) {
        errorHandler = handler;
    }
    function unregisterErrorHandler() {
        errorHandler = undefined;
    }
    const callbackWrapper = (cb) => {
        if (!errorHandler) {
            return cb;
        }
        const rrwebWrapped = ((...rest) => {
            try {
                return cb(...rest);
            }
            catch (error) {
                if (errorHandler && errorHandler(error) === true) {
                    return;
                }
                throw error;
            }
        });
        return rrwebWrapped;
    };

    function getEventPath(event) {
        try {
            if ('composedPath' in event) {
                const path = event.composedPath();
                if (path.length) {
                    return path;
                }
            }
            else if ('path' in event && event.path.length) {
                return event.path;
            }
            return null;
        }
        catch (_a) {
            return null;
        }
    }
    function generateNodePath(path) {
        if (!path || !Array.isArray(path)) {
            return '';
        }
        let nodePath = '';
        for (let i = path.length > 3 ? 3 : path.length - 1; i >= 0; i--) {
            let intermediateNodePath = '';
            let aPath = path[i];
            if (aPath && aPath.tagName && aPath.attributes && aPath.attributes.length) {
                if (i > 0)
                    intermediateNodePath = aPath.tagName.toLowerCase() + getNodeAttributeValues(aPath.attributes) + ' > ';
                else
                    intermediateNodePath = aPath.tagName.toLowerCase() + getNodeAttributeValues(aPath.attributes);
                nodePath = nodePath + intermediateNodePath;
            }
        }
        return nodePath;
    }
    function getNodeAttributeValues(attrObj) {
        let attributeValue = '';
        if (!attrObj || (attrObj && !attrObj.length)) {
            return attributeValue;
        }
        Object.values(attrObj).forEach((attr) => {
            if (attr && attr.nodeName) {
                let key = attr.nodeName;
                let value = attr.nodeValue;
                if (key == 'class') {
                    attributeValue = attributeValue + '.' + value;
                }
                else if (key == 'id') {
                    attributeValue = attributeValue + '#' + value;
                }
                else if (key == 'type') {
                    attributeValue = attributeValue + `[${key}="${value}"]`;
                }
                else if (key == 'value') {
                    attributeValue = attributeValue + '.' + value;
                }
            }
        });
        return attributeValue;
    }
    function getNodePathFromEvent(event) {
        const eventPath = getEventPath(event);
        return eventPath ? generateNodePath(eventPath) : '';
    }

    const mutationBuffers = [];
    function getEventTarget(event) {
        try {
            if ('composedPath' in event) {
                const path = event.composedPath();
                if (path.length) {
                    return path[0];
                }
            }
            else if ('path' in event && event.path.length) {
                return event.path[0];
            }
            return event.target;
        }
        catch (_a) {
            return event.target;
        }
    }
    function initMutationObserver(options, rootEl) {
        var _a, _b;
        const mutationBuffer = new MutationBuffer();
        mutationBuffers.push(mutationBuffer);
        mutationBuffer.init(options);
        let mutationObserverCtor = window.MutationObserver ||
            window.__rrMutationObserver;
        const angularZoneSymbol = (_b = (_a = window === null || window === void 0 ? void 0 : window.Zone) === null || _a === void 0 ? void 0 : _a.__symbol__) === null || _b === void 0 ? void 0 : _b.call(_a, 'MutationObserver');
        if (angularZoneSymbol &&
            window[angularZoneSymbol]) {
            mutationObserverCtor = window[angularZoneSymbol];
        }
        const observer = new mutationObserverCtor(callbackWrapper(mutationBuffer.processMutations.bind(mutationBuffer)));
        observer.observe(rootEl, {
            attributes: true,
            attributeOldValue: true,
            characterData: true,
            characterDataOldValue: true,
            childList: true,
            subtree: true,
        });
        return observer;
    }
    function initMoveObserver({ mousemoveCb, sampling, doc, mirror, }) {
        if (sampling.mousemove === false) {
            return () => {
            };
        }
        const threshold = typeof sampling.mousemove === 'number' ? sampling.mousemove : 50;
        const callbackThreshold = typeof sampling.mousemoveCallback === 'number'
            ? sampling.mousemoveCallback
            : 500;
        let positions = [];
        let timeBaseline;
        const wrappedCb = throttle(callbackWrapper((source) => {
            const totalOffset = Date.now() - timeBaseline;
            mousemoveCb(positions.map((p) => {
                p.timeOffset -= totalOffset;
                return p;
            }), source);
            positions = [];
            timeBaseline = null;
        }), callbackThreshold);
        const updatePosition = callbackWrapper(throttle(callbackWrapper((evt) => {
            const target = getEventTarget(evt);
            const { clientX, clientY } = isTouchEvent(evt)
                ? evt.changedTouches[0]
                : evt;
            if (!timeBaseline) {
                timeBaseline = Date.now();
            }
            positions.push({
                x: clientX,
                y: clientY,
                id: mirror.getId(target),
                timeOffset: Date.now() - timeBaseline,
            });
            wrappedCb(typeof DragEvent !== 'undefined' && evt instanceof DragEvent
                ? IncrementalSource.Drag
                : evt instanceof MouseEvent
                    ? IncrementalSource.MouseMove
                    : IncrementalSource.TouchMove);
        }), threshold, {
            trailing: false,
        }));
        const handlers = [
            on$1('mousemove', updatePosition, doc),
            on$1('touchmove', updatePosition, doc),
            on$1('drag', updatePosition, doc),
        ];
        return callbackWrapper(() => {
            handlers.forEach((h) => h());
        });
    }
    function initMouseInteractionObserver({ mouseInteractionCb, doc, mirror, blockClass, blockSelector, sampling, }) {
        if (sampling.mouseInteraction === false) {
            return () => {
            };
        }
        const disableMap = sampling.mouseInteraction === true ||
            sampling.mouseInteraction === undefined
            ? {}
            : sampling.mouseInteraction;
        const handlers = [];
        const getHandler = (eventKey) => {
            return (event) => {
                const target = getEventTarget(event);
                if (isBlocked(target, blockClass, blockSelector, true)) {
                    return;
                }
                const e = isTouchEvent(event) ? event.changedTouches[0] : event;
                if (!e) {
                    return;
                }
                const id = mirror.getId(target);
                const { clientX, clientY } = e;
                const nodePath = getNodePathFromEvent(event);
                callbackWrapper(mouseInteractionCb)({
                    type: MouseInteractions[eventKey],
                    id,
                    x: clientX,
                    y: clientY,
                    nodePath
                });
            };
        };
        Object.keys(MouseInteractions)
            .filter((key) => Number.isNaN(Number(key)) &&
            !key.endsWith('_Departed') &&
            disableMap[key] !== false)
            .forEach((eventKey) => {
            const eventName = eventKey.toLowerCase();
            const handler = getHandler(eventKey);
            handlers.push(on$1(eventName, handler, doc));
        });
        return callbackWrapper(() => {
            handlers.forEach((h) => h());
        });
    }
    function initScrollObserver({ scrollCb, doc, mirror, blockClass, blockSelector, sampling, }) {
        const updatePosition = callbackWrapper(throttle(callbackWrapper((evt) => {
            const target = getEventTarget(evt);
            if (!target ||
                isBlocked(target, blockClass, blockSelector, true)) {
                return;
            }
            const id = mirror.getId(target);
            if (target === doc && doc.defaultView) {
                const scrollLeftTop = getWindowScroll(doc.defaultView);
                scrollCb({
                    id,
                    x: scrollLeftTop.left,
                    y: scrollLeftTop.top,
                });
            }
            else {
                scrollCb({
                    id,
                    x: target.scrollLeft,
                    y: target.scrollTop,
                });
            }
        }), sampling.scroll || 100));
        return on$1('scroll', updatePosition, doc);
    }
    function initViewportResizeObserver({ viewportResizeCb, }) {
        let lastH = -1;
        let lastW = -1;
        const updateDimension = callbackWrapper(throttle(callbackWrapper(() => {
            const height = getWindowHeight();
            const width = getWindowWidth();
            if (lastH !== height || lastW !== width) {
                viewportResizeCb({
                    width: Number(width),
                    height: Number(height),
                });
                lastH = height;
                lastW = width;
            }
        }), 200));
        return on$1('resize', updateDimension, window);
    }
    function wrapEventWithUserTriggeredFlag(v, enable) {
        const value = Object.assign({}, v);
        if (!enable)
            delete value.userTriggered;
        return value;
    }
    const INPUT_TAGS = ['INPUT', 'TEXTAREA', 'SELECT'];
    const lastInputValueMap = new WeakMap();
    function initInputObserver({ inputCb, doc, mirror, blockClass, blockSelector, ignoreClass, maskInputOptions, maskInputFn, sampling, userTriggeredOnInput, }) {
        function eventHandler(event) {
            let target = getEventTarget(event);
            const nodePath = getNodePathFromEvent(event);
            const userTriggered = event.isTrusted;
            const tagName = target && target.tagName;
            if (target && tagName === 'OPTION') {
                target = target.parentElement;
            }
            if (!target ||
                !tagName ||
                INPUT_TAGS.indexOf(tagName) < 0 ||
                isBlocked(target, blockClass, blockSelector, true)) {
                return;
            }
            if (target.classList.contains(ignoreClass)) {
                return;
            }
            let text = target.value;
            let isChecked = false;
            const type = getInputType(target) || '';
            if (type === 'radio' || type === 'checkbox') {
                isChecked = target.checked;
            }
            else if (maskInputOptions[tagName.toLowerCase()] ||
                maskInputOptions[type]) {
                text = maskInputValue({
                    maskInputOptions,
                    tagName,
                    type,
                    value: text,
                    maskInputFn,
                });
            }
            cbWithDedup(target, callbackWrapper(wrapEventWithUserTriggeredFlag)({ text, isChecked, userTriggered, nodePath }, userTriggeredOnInput));
            const name = target.name;
            if (type === 'radio' && name && isChecked) {
                doc
                    .querySelectorAll(`input[type="radio"][name="${name}"]`)
                    .forEach((el) => {
                    if (el !== target) {
                        cbWithDedup(el, callbackWrapper(wrapEventWithUserTriggeredFlag)({
                            text: el.value,
                            isChecked: !isChecked,
                            userTriggered: false,
                            nodePath: ''
                        }, userTriggeredOnInput));
                    }
                });
            }
        }
        function cbWithDedup(target, v) {
            const lastInputValue = lastInputValueMap.get(target);
            if (!lastInputValue ||
                lastInputValue.text !== v.text ||
                lastInputValue.isChecked !== v.isChecked) {
                lastInputValueMap.set(target, v);
                const id = mirror.getId(target);
                callbackWrapper(inputCb)(Object.assign(Object.assign({}, v), { id }));
            }
        }
        const events = sampling.input === 'last' ? ['change'] : ['input', 'change'];
        const handlers = events.map((eventName) => on$1(eventName, callbackWrapper(eventHandler), doc));
        const currentWindow = doc.defaultView;
        if (!currentWindow) {
            return () => {
                handlers.forEach((h) => h());
            };
        }
        const propertyDescriptor = currentWindow.Object.getOwnPropertyDescriptor(currentWindow.HTMLInputElement.prototype, 'value');
        const hookProperties = [
            [currentWindow.HTMLInputElement.prototype, 'value'],
            [currentWindow.HTMLInputElement.prototype, 'checked'],
            [currentWindow.HTMLSelectElement.prototype, 'value'],
            [currentWindow.HTMLTextAreaElement.prototype, 'value'],
            [currentWindow.HTMLSelectElement.prototype, 'selectedIndex'],
            [currentWindow.HTMLOptionElement.prototype, 'selected'],
        ];
        if (propertyDescriptor && propertyDescriptor.set) {
            handlers.push(...hookProperties.map((p) => hookSetter(p[0], p[1], {
                set() {
                    callbackWrapper(eventHandler)({
                        target: this,
                        isTrusted: false,
                    });
                },
            }, false, currentWindow)));
        }
        return callbackWrapper(() => {
            handlers.forEach((h) => h());
        });
    }
    function getNestedCSSRulePositions(rule) {
        const positions = [];
        function recurse(childRule, pos) {
            if ((hasNestedCSSRule('CSSGroupingRule') &&
                childRule.parentRule instanceof CSSGroupingRule) ||
                (hasNestedCSSRule('CSSMediaRule') &&
                    childRule.parentRule instanceof CSSMediaRule) ||
                (hasNestedCSSRule('CSSSupportsRule') &&
                    childRule.parentRule instanceof CSSSupportsRule) ||
                (hasNestedCSSRule('CSSConditionRule') &&
                    childRule.parentRule instanceof CSSConditionRule)) {
                const rules = Array.from(childRule.parentRule.cssRules);
                const index = rules.indexOf(childRule);
                pos.unshift(index);
            }
            else if (childRule.parentStyleSheet) {
                const rules = Array.from(childRule.parentStyleSheet.cssRules);
                const index = rules.indexOf(childRule);
                pos.unshift(index);
            }
            return pos;
        }
        return recurse(rule, positions);
    }
    function getIdAndStyleId(sheet, mirror, styleMirror) {
        let id, styleId;
        if (!sheet)
            return {};
        if (sheet.ownerNode)
            id = mirror.getId(sheet.ownerNode);
        else
            styleId = styleMirror.getId(sheet);
        return {
            styleId,
            id,
        };
    }
    function initStyleSheetObserver({ styleSheetRuleCb, mirror, stylesheetManager }, { win }) {
        if (!win.CSSStyleSheet || !win.CSSStyleSheet.prototype) {
            return () => {
            };
        }
        const insertRule = win.CSSStyleSheet.prototype.insertRule;
        win.CSSStyleSheet.prototype.insertRule = new Proxy(insertRule, {
            apply: callbackWrapper((target, thisArg, argumentsList) => {
                const [rule, index] = argumentsList;
                const { id, styleId } = getIdAndStyleId(thisArg, mirror, stylesheetManager.styleMirror);
                if ((id && id !== -1) || (styleId && styleId !== -1)) {
                    styleSheetRuleCb({
                        id,
                        styleId,
                        adds: [{ rule, index }],
                    });
                }
                return target.apply(thisArg, argumentsList);
            }),
        });
        const deleteRule = win.CSSStyleSheet.prototype.deleteRule;
        win.CSSStyleSheet.prototype.deleteRule = new Proxy(deleteRule, {
            apply: callbackWrapper((target, thisArg, argumentsList) => {
                const [index] = argumentsList;
                const { id, styleId } = getIdAndStyleId(thisArg, mirror, stylesheetManager.styleMirror);
                if ((id && id !== -1) || (styleId && styleId !== -1)) {
                    styleSheetRuleCb({
                        id,
                        styleId,
                        removes: [{ index }],
                    });
                }
                return target.apply(thisArg, argumentsList);
            }),
        });
        let replace;
        if (win.CSSStyleSheet.prototype.replace) {
            replace = win.CSSStyleSheet.prototype.replace;
            win.CSSStyleSheet.prototype.replace = new Proxy(replace, {
                apply: callbackWrapper((target, thisArg, argumentsList) => {
                    const [text] = argumentsList;
                    const { id, styleId } = getIdAndStyleId(thisArg, mirror, stylesheetManager.styleMirror);
                    if ((id && id !== -1) || (styleId && styleId !== -1)) {
                        styleSheetRuleCb({
                            id,
                            styleId,
                            replace: text,
                        });
                    }
                    return target.apply(thisArg, argumentsList);
                }),
            });
        }
        let replaceSync;
        if (win.CSSStyleSheet.prototype.replaceSync) {
            replaceSync = win.CSSStyleSheet.prototype.replaceSync;
            win.CSSStyleSheet.prototype.replaceSync = new Proxy(replaceSync, {
                apply: callbackWrapper((target, thisArg, argumentsList) => {
                    const [text] = argumentsList;
                    const { id, styleId } = getIdAndStyleId(thisArg, mirror, stylesheetManager.styleMirror);
                    if ((id && id !== -1) || (styleId && styleId !== -1)) {
                        styleSheetRuleCb({
                            id,
                            styleId,
                            replaceSync: text,
                        });
                    }
                    return target.apply(thisArg, argumentsList);
                }),
            });
        }
        const supportedNestedCSSRuleTypes = {};
        if (canMonkeyPatchNestedCSSRule('CSSGroupingRule')) {
            supportedNestedCSSRuleTypes.CSSGroupingRule = win.CSSGroupingRule;
        }
        else {
            if (canMonkeyPatchNestedCSSRule('CSSMediaRule')) {
                supportedNestedCSSRuleTypes.CSSMediaRule = win.CSSMediaRule;
            }
            if (canMonkeyPatchNestedCSSRule('CSSConditionRule')) {
                supportedNestedCSSRuleTypes.CSSConditionRule = win.CSSConditionRule;
            }
            if (canMonkeyPatchNestedCSSRule('CSSSupportsRule')) {
                supportedNestedCSSRuleTypes.CSSSupportsRule = win.CSSSupportsRule;
            }
        }
        const unmodifiedFunctions = {};
        Object.entries(supportedNestedCSSRuleTypes).forEach(([typeKey, type]) => {
            unmodifiedFunctions[typeKey] = {
                insertRule: type.prototype.insertRule,
                deleteRule: type.prototype.deleteRule,
            };
            type.prototype.insertRule = new Proxy(unmodifiedFunctions[typeKey].insertRule, {
                apply: callbackWrapper((target, thisArg, argumentsList) => {
                    const [rule, index] = argumentsList;
                    const { id, styleId } = getIdAndStyleId(thisArg.parentStyleSheet, mirror, stylesheetManager.styleMirror);
                    if ((id && id !== -1) || (styleId && styleId !== -1)) {
                        styleSheetRuleCb({
                            id,
                            styleId,
                            adds: [
                                {
                                    rule,
                                    index: [
                                        ...getNestedCSSRulePositions(thisArg),
                                        index || 0,
                                    ],
                                },
                            ],
                        });
                    }
                    return target.apply(thisArg, argumentsList);
                }),
            });
            type.prototype.deleteRule = new Proxy(unmodifiedFunctions[typeKey].deleteRule, {
                apply: callbackWrapper((target, thisArg, argumentsList) => {
                    const [index] = argumentsList;
                    const { id, styleId } = getIdAndStyleId(thisArg.parentStyleSheet, mirror, stylesheetManager.styleMirror);
                    if ((id && id !== -1) || (styleId && styleId !== -1)) {
                        styleSheetRuleCb({
                            id,
                            styleId,
                            removes: [
                                { index: [...getNestedCSSRulePositions(thisArg), index] },
                            ],
                        });
                    }
                    return target.apply(thisArg, argumentsList);
                }),
            });
        });
        return callbackWrapper(() => {
            try {
                win.CSSStyleSheet.prototype.insertRule = insertRule;
                win.CSSStyleSheet.prototype.deleteRule = deleteRule;
                replace && (win.CSSStyleSheet.prototype.replace = replace);
                replaceSync && (win.CSSStyleSheet.prototype.replaceSync = replaceSync);
            }
            catch (_a) {
            }
            try {
                Object.entries(supportedNestedCSSRuleTypes).forEach(([typeKey, type]) => {
                    type.prototype.insertRule = unmodifiedFunctions[typeKey].insertRule;
                    type.prototype.deleteRule = unmodifiedFunctions[typeKey].deleteRule;
                });
            }
            catch (_b) {
            }
        });
    }
    function initAdoptedStyleSheetObserver({ mirror, stylesheetManager, }, host) {
        var _a, _b, _c;
        let hostId = null;
        if (host.nodeName === '#document')
            hostId = mirror.getId(host);
        else
            hostId = mirror.getId(host.host);
        const patchTarget = host.nodeName === '#document'
            ? (_a = host.defaultView) === null || _a === void 0 ? void 0 : _a.Document
            : (_c = (_b = host.ownerDocument) === null || _b === void 0 ? void 0 : _b.defaultView) === null || _c === void 0 ? void 0 : _c.ShadowRoot;
        const originalPropertyDescriptor = Object.getOwnPropertyDescriptor(patchTarget === null || patchTarget === void 0 ? void 0 : patchTarget.prototype, 'adoptedStyleSheets');
        if (hostId === null ||
            hostId === -1 ||
            !patchTarget ||
            !originalPropertyDescriptor)
            return () => {
            };
        Object.defineProperty(host, 'adoptedStyleSheets', {
            configurable: originalPropertyDescriptor.configurable,
            enumerable: originalPropertyDescriptor.enumerable,
            get() {
                var _a;
                return (_a = originalPropertyDescriptor.get) === null || _a === void 0 ? void 0 : _a.call(this);
            },
            set(sheets) {
                var _a;
                const result = (_a = originalPropertyDescriptor.set) === null || _a === void 0 ? void 0 : _a.call(this, sheets);
                if (hostId !== null && hostId !== -1) {
                    try {
                        stylesheetManager.adoptStyleSheets(sheets, hostId);
                    }
                    catch (e) {
                    }
                }
                return result;
            },
        });
        return callbackWrapper(() => {
            Object.defineProperty(host, 'adoptedStyleSheets', {
                configurable: originalPropertyDescriptor.configurable,
                enumerable: originalPropertyDescriptor.enumerable,
                get: originalPropertyDescriptor.get,
                set: originalPropertyDescriptor.set,
            });
        });
    }
    function initStyleDeclarationObserver({ styleDeclarationCb, mirror, ignoreCSSAttributes, stylesheetManager, }, { win }) {
        const setProperty = win.CSSStyleDeclaration.prototype.setProperty;
        win.CSSStyleDeclaration.prototype.setProperty = new Proxy(setProperty, {
            apply: callbackWrapper((target, thisArg, argumentsList) => {
                var _a;
                const [property, value, priority] = argumentsList;
                if (ignoreCSSAttributes.has(property)) {
                    return setProperty.apply(thisArg, [property, value, priority]);
                }
                const { id, styleId } = getIdAndStyleId((_a = thisArg.parentRule) === null || _a === void 0 ? void 0 : _a.parentStyleSheet, mirror, stylesheetManager.styleMirror);
                if ((id && id !== -1) || (styleId && styleId !== -1)) {
                    styleDeclarationCb({
                        id,
                        styleId,
                        set: {
                            property,
                            value,
                            priority,
                        },
                        index: getNestedCSSRulePositions(thisArg.parentRule),
                    });
                }
                return target.apply(thisArg, argumentsList);
            }),
        });
        const removeProperty = win.CSSStyleDeclaration.prototype.removeProperty;
        win.CSSStyleDeclaration.prototype.removeProperty = new Proxy(removeProperty, {
            apply: callbackWrapper((target, thisArg, argumentsList) => {
                var _a;
                const [property] = argumentsList;
                if (ignoreCSSAttributes.has(property)) {
                    return removeProperty.apply(thisArg, [property]);
                }
                const { id, styleId } = getIdAndStyleId((_a = thisArg.parentRule) === null || _a === void 0 ? void 0 : _a.parentStyleSheet, mirror, stylesheetManager.styleMirror);
                if ((id && id !== -1) || (styleId && styleId !== -1)) {
                    styleDeclarationCb({
                        id,
                        styleId,
                        remove: {
                            property,
                        },
                        index: getNestedCSSRulePositions(thisArg.parentRule),
                    });
                }
                return target.apply(thisArg, argumentsList);
            }),
        });
        return callbackWrapper(() => {
            try {
                win.CSSStyleDeclaration.prototype.setProperty = setProperty;
                win.CSSStyleDeclaration.prototype.removeProperty = removeProperty;
            }
            catch (_a) {
            }
        });
    }
    function initMediaInteractionObserver({ mediaInteractionCb, blockClass, blockSelector, mirror, sampling, }) {
        const handler = callbackWrapper((type) => throttle(callbackWrapper((event) => {
            const target = getEventTarget(event);
            if (!target ||
                isBlocked(target, blockClass, blockSelector, true)) {
                return;
            }
            const { currentTime, volume, muted, playbackRate } = target;
            mediaInteractionCb({
                type,
                id: mirror.getId(target),
                currentTime,
                volume,
                muted,
                playbackRate,
            });
        }), sampling.media || 500));
        const handlers = [
            on$1('play', handler(0)),
            on$1('pause', handler(1)),
            on$1('seeked', handler(2)),
            on$1('volumechange', handler(3)),
            on$1('ratechange', handler(4)),
        ];
        return callbackWrapper(() => {
            handlers.forEach((h) => h());
        });
    }
    function initFontObserver({ fontCb, doc }) {
        const win = doc.defaultView;
        if (!win) {
            return () => {
            };
        }
        const handlers = [];
        const fontMap = new WeakMap();
        const originalFontFace = win.FontFace;
        win.FontFace = function FontFace(family, source, descriptors) {
            const fontFace = new originalFontFace(family, source, descriptors);
            fontMap.set(fontFace, {
                family,
                buffer: typeof source !== 'string',
                descriptors,
                fontSource: typeof source === 'string'
                    ? source
                    : JSON.stringify(Array.from(new Uint8Array(source))),
            });
            return fontFace;
        };
        const restoreHandler = patch(doc.fonts, 'add', function (original) {
            return function (fontFace) {
                setTimeout(callbackWrapper(() => {
                    const p = fontMap.get(fontFace);
                    if (p) {
                        fontCb(p);
                        fontMap.delete(fontFace);
                    }
                }), 0);
                return original.apply(this, [fontFace]);
            };
        });
        handlers.push(() => {
            win.FontFace = originalFontFace;
        });
        handlers.push(restoreHandler);
        return callbackWrapper(() => {
            handlers.forEach((h) => h());
        });
    }
    function initSelectionObserver(param) {
        const { doc, mirror, blockClass, blockSelector, selectionCb } = param;
        let collapsed = true;
        const updateSelection = callbackWrapper(() => {
            const selection = doc.getSelection();
            if (!selection || (collapsed && (selection === null || selection === void 0 ? void 0 : selection.isCollapsed)))
                return;
            collapsed = selection.isCollapsed || false;
            const ranges = [];
            const count = selection.rangeCount || 0;
            for (let i = 0; i < count; i++) {
                const range = selection.getRangeAt(i);
                const { startContainer, startOffset, endContainer, endOffset } = range;
                const blocked = isBlocked(startContainer, blockClass, blockSelector, true) ||
                    isBlocked(endContainer, blockClass, blockSelector, true);
                if (blocked)
                    continue;
                ranges.push({
                    start: mirror.getId(startContainer),
                    startOffset,
                    end: mirror.getId(endContainer),
                    endOffset,
                });
            }
            selectionCb({ ranges });
        });
        updateSelection();
        return on$1('selectionchange', updateSelection);
    }
    function mergeHooks(o, hooks) {
        const { mutationCb, mousemoveCb, mouseInteractionCb, scrollCb, viewportResizeCb, inputCb, mediaInteractionCb, styleSheetRuleCb, styleDeclarationCb, canvasMutationCb, fontCb, selectionCb, } = o;
        o.mutationCb = (...p) => {
            if (hooks.mutation) {
                hooks.mutation(...p);
            }
            mutationCb(...p);
        };
        o.mousemoveCb = (...p) => {
            if (hooks.mousemove) {
                hooks.mousemove(...p);
            }
            mousemoveCb(...p);
        };
        o.mouseInteractionCb = (...p) => {
            if (hooks.mouseInteraction) {
                hooks.mouseInteraction(...p);
            }
            mouseInteractionCb(...p);
        };
        o.scrollCb = (...p) => {
            if (hooks.scroll) {
                hooks.scroll(...p);
            }
            scrollCb(...p);
        };
        o.viewportResizeCb = (...p) => {
            if (hooks.viewportResize) {
                hooks.viewportResize(...p);
            }
            viewportResizeCb(...p);
        };
        o.inputCb = (...p) => {
            if (hooks.input) {
                hooks.input(...p);
            }
            inputCb(...p);
        };
        o.mediaInteractionCb = (...p) => {
            if (hooks.mediaInteaction) {
                hooks.mediaInteaction(...p);
            }
            mediaInteractionCb(...p);
        };
        o.styleSheetRuleCb = (...p) => {
            if (hooks.styleSheetRule) {
                hooks.styleSheetRule(...p);
            }
            styleSheetRuleCb(...p);
        };
        o.styleDeclarationCb = (...p) => {
            if (hooks.styleDeclaration) {
                hooks.styleDeclaration(...p);
            }
            styleDeclarationCb(...p);
        };
        o.canvasMutationCb = (...p) => {
            if (hooks.canvasMutation) {
                hooks.canvasMutation(...p);
            }
            canvasMutationCb(...p);
        };
        o.fontCb = (...p) => {
            if (hooks.font) {
                hooks.font(...p);
            }
            fontCb(...p);
        };
        o.selectionCb = (...p) => {
            if (hooks.selection) {
                hooks.selection(...p);
            }
            selectionCb(...p);
        };
    }
    function initObservers(o, hooks = {}) {
        const currentWindow = o.doc.defaultView;
        if (!currentWindow) {
            return () => {
            };
        }
        mergeHooks(o, hooks);
        const mutationObserver = initMutationObserver(o, o.doc);
        const mousemoveHandler = initMoveObserver(o);
        const mouseInteractionHandler = initMouseInteractionObserver(o);
        const scrollHandler = initScrollObserver(o);
        const viewportResizeHandler = initViewportResizeObserver(o);
        const inputHandler = initInputObserver(o);
        const mediaInteractionHandler = initMediaInteractionObserver(o);
        const styleSheetObserver = initStyleSheetObserver(o, { win: currentWindow });
        const adoptedStyleSheetObserver = initAdoptedStyleSheetObserver(o, o.doc);
        const styleDeclarationObserver = initStyleDeclarationObserver(o, {
            win: currentWindow,
        });
        const fontObserver = o.collectFonts
            ? initFontObserver(o)
            : () => {
            };
        const selectionObserver = initSelectionObserver(o);
        const pluginHandlers = [];
        for (const plugin of o.plugins) {
            pluginHandlers.push(plugin.observer(plugin.callback, currentWindow, plugin.options));
        }
        return callbackWrapper(() => {
            mutationBuffers.forEach((b) => b.reset());
            mutationObserver.disconnect();
            mousemoveHandler();
            mouseInteractionHandler();
            scrollHandler();
            viewportResizeHandler();
            inputHandler();
            mediaInteractionHandler();
            styleSheetObserver();
            adoptedStyleSheetObserver();
            styleDeclarationObserver();
            fontObserver();
            selectionObserver();
            pluginHandlers.forEach((h) => h());
        });
    }
    function hasNestedCSSRule(prop) {
        return typeof window[prop] !== 'undefined';
    }
    function canMonkeyPatchNestedCSSRule(prop) {
        return Boolean(typeof window[prop] !== 'undefined' &&
            window[prop].prototype &&
            'insertRule' in window[prop].prototype &&
            'deleteRule' in window[prop].prototype);
    }

    class CrossOriginIframeMirror {
        constructor(generateIdFn) {
            this.generateIdFn = generateIdFn;
            this.iframeIdToRemoteIdMap = new WeakMap();
            this.iframeRemoteIdToIdMap = new WeakMap();
        }
        getId(iframe, remoteId, idToRemoteMap, remoteToIdMap) {
            const idToRemoteIdMap = idToRemoteMap || this.getIdToRemoteIdMap(iframe);
            const remoteIdToIdMap = remoteToIdMap || this.getRemoteIdToIdMap(iframe);
            let id = idToRemoteIdMap.get(remoteId);
            if (!id) {
                id = this.generateIdFn();
                idToRemoteIdMap.set(remoteId, id);
                remoteIdToIdMap.set(id, remoteId);
            }
            return id;
        }
        getIds(iframe, remoteId) {
            const idToRemoteIdMap = this.getIdToRemoteIdMap(iframe);
            const remoteIdToIdMap = this.getRemoteIdToIdMap(iframe);
            return remoteId.map((id) => this.getId(iframe, id, idToRemoteIdMap, remoteIdToIdMap));
        }
        getRemoteId(iframe, id, map) {
            const remoteIdToIdMap = map || this.getRemoteIdToIdMap(iframe);
            if (typeof id !== 'number')
                return id;
            const remoteId = remoteIdToIdMap.get(id);
            if (!remoteId)
                return -1;
            return remoteId;
        }
        getRemoteIds(iframe, ids) {
            const remoteIdToIdMap = this.getRemoteIdToIdMap(iframe);
            return ids.map((id) => this.getRemoteId(iframe, id, remoteIdToIdMap));
        }
        reset(iframe) {
            if (!iframe) {
                this.iframeIdToRemoteIdMap = new WeakMap();
                this.iframeRemoteIdToIdMap = new WeakMap();
                return;
            }
            this.iframeIdToRemoteIdMap.delete(iframe);
            this.iframeRemoteIdToIdMap.delete(iframe);
        }
        getIdToRemoteIdMap(iframe) {
            let idToRemoteIdMap = this.iframeIdToRemoteIdMap.get(iframe);
            if (!idToRemoteIdMap) {
                idToRemoteIdMap = new Map();
                this.iframeIdToRemoteIdMap.set(iframe, idToRemoteIdMap);
            }
            return idToRemoteIdMap;
        }
        getRemoteIdToIdMap(iframe) {
            let remoteIdToIdMap = this.iframeRemoteIdToIdMap.get(iframe);
            if (!remoteIdToIdMap) {
                remoteIdToIdMap = new Map();
                this.iframeRemoteIdToIdMap.set(iframe, remoteIdToIdMap);
            }
            return remoteIdToIdMap;
        }
    }

    class IframeManager {
        constructor(options) {
            this.iframes = new WeakMap();
            this.crossOriginIframeMap = new WeakMap();
            this.crossOriginIframeMirror = new CrossOriginIframeMirror(genId);
            this.crossOriginIframeRootIdMap = new WeakMap();
            this.mutationCb = options.mutationCb;
            this.wrappedEmit = options.wrappedEmit;
            this.stylesheetManager = options.stylesheetManager;
            this.recordCrossOriginIframes = options.recordCrossOriginIframes;
            this.crossOriginIframeStyleMirror = new CrossOriginIframeMirror(this.stylesheetManager.styleMirror.generateId.bind(this.stylesheetManager.styleMirror));
            this.mirror = options.mirror;
            if (this.recordCrossOriginIframes) {
                window.addEventListener('message', this.handleMessage.bind(this));
            }
        }
        addIframe(iframeEl) {
            this.iframes.set(iframeEl, true);
            if (iframeEl.contentWindow)
                this.crossOriginIframeMap.set(iframeEl.contentWindow, iframeEl);
        }
        addLoadListener(cb) {
            this.loadListener = cb;
        }
        attachIframe(iframeEl, childSn) {
            var _a;
            this.mutationCb({
                adds: [
                    {
                        parentId: this.mirror.getId(iframeEl),
                        nextId: null,
                        node: childSn,
                    },
                ],
                removes: [],
                texts: [],
                attributes: [],
                isAttachIframe: true,
            });
            (_a = this.loadListener) === null || _a === void 0 ? void 0 : _a.call(this, iframeEl);
            if (iframeEl.contentDocument &&
                iframeEl.contentDocument.adoptedStyleSheets &&
                iframeEl.contentDocument.adoptedStyleSheets.length > 0)
                this.stylesheetManager.adoptStyleSheets(iframeEl.contentDocument.adoptedStyleSheets, this.mirror.getId(iframeEl.contentDocument));
        }
        handleMessage(message) {
            const crossOriginMessageEvent = message;
            if (crossOriginMessageEvent.data.type !== 'rrweb' ||
                crossOriginMessageEvent.origin !== crossOriginMessageEvent.data.origin)
                return;
            const iframeSourceWindow = message.source;
            if (!iframeSourceWindow)
                return;
            const iframeEl = this.crossOriginIframeMap.get(message.source);
            if (!iframeEl)
                return;
            const transformedEvent = this.transformCrossOriginEvent(iframeEl, crossOriginMessageEvent.data.event);
            if (transformedEvent)
                this.wrappedEmit(transformedEvent, crossOriginMessageEvent.data.isCheckout);
        }
        transformCrossOriginEvent(iframeEl, e) {
            var _a;
            switch (e.type) {
                case EventType.FullSnapshot: {
                    this.crossOriginIframeMirror.reset(iframeEl);
                    this.crossOriginIframeStyleMirror.reset(iframeEl);
                    this.replaceIdOnNode(e.data.node, iframeEl);
                    const rootId = e.data.node.id;
                    this.crossOriginIframeRootIdMap.set(iframeEl, rootId);
                    this.patchRootIdOnNode(e.data.node, rootId);
                    return {
                        timestamp: e.timestamp,
                        type: EventType.IncrementalSnapshot,
                        data: {
                            source: IncrementalSource.Mutation,
                            adds: [
                                {
                                    parentId: this.mirror.getId(iframeEl),
                                    nextId: null,
                                    node: e.data.node,
                                },
                            ],
                            removes: [],
                            texts: [],
                            attributes: [],
                            isAttachIframe: true,
                        },
                    };
                }
                case EventType.Meta:
                case EventType.Load:
                case EventType.DomContentLoaded: {
                    return false;
                }
                case EventType.Plugin: {
                    return e;
                }
                case EventType.Custom: {
                    this.replaceIds(e.data.payload, iframeEl, ['id', 'parentId', 'previousId', 'nextId']);
                    return e;
                }
                case EventType.IncrementalSnapshot: {
                    switch (e.data.source) {
                        case IncrementalSource.Mutation: {
                            e.data.adds.forEach((n) => {
                                this.replaceIds(n, iframeEl, [
                                    'parentId',
                                    'nextId',
                                    'previousId',
                                ]);
                                this.replaceIdOnNode(n.node, iframeEl);
                                const rootId = this.crossOriginIframeRootIdMap.get(iframeEl);
                                rootId && this.patchRootIdOnNode(n.node, rootId);
                            });
                            e.data.removes.forEach((n) => {
                                this.replaceIds(n, iframeEl, ['parentId', 'id']);
                            });
                            e.data.attributes.forEach((n) => {
                                this.replaceIds(n, iframeEl, ['id']);
                            });
                            e.data.texts.forEach((n) => {
                                this.replaceIds(n, iframeEl, ['id']);
                            });
                            return e;
                        }
                        case IncrementalSource.Drag:
                        case IncrementalSource.TouchMove:
                        case IncrementalSource.MouseMove: {
                            e.data.positions.forEach((p) => {
                                this.replaceIds(p, iframeEl, ['id']);
                            });
                            return e;
                        }
                        case IncrementalSource.ViewportResize: {
                            return false;
                        }
                        case IncrementalSource.MediaInteraction:
                        case IncrementalSource.MouseInteraction:
                        case IncrementalSource.Scroll:
                        case IncrementalSource.CanvasMutation:
                        case IncrementalSource.Input: {
                            this.replaceIds(e.data, iframeEl, ['id']);
                            return e;
                        }
                        case IncrementalSource.StyleSheetRule:
                        case IncrementalSource.StyleDeclaration: {
                            this.replaceIds(e.data, iframeEl, ['id']);
                            this.replaceStyleIds(e.data, iframeEl, ['styleId']);
                            return e;
                        }
                        case IncrementalSource.Font: {
                            return e;
                        }
                        case IncrementalSource.Selection: {
                            e.data.ranges.forEach((range) => {
                                this.replaceIds(range, iframeEl, ['start', 'end']);
                            });
                            return e;
                        }
                        case IncrementalSource.AdoptedStyleSheet: {
                            this.replaceIds(e.data, iframeEl, ['id']);
                            this.replaceStyleIds(e.data, iframeEl, ['styleIds']);
                            (_a = e.data.styles) === null || _a === void 0 ? void 0 : _a.forEach((style) => {
                                this.replaceStyleIds(style, iframeEl, ['styleId']);
                            });
                            return e;
                        }
                    }
                }
            }
        }
        replace(iframeMirror, obj, iframeEl, keys) {
            for (const key of keys) {
                if (!Array.isArray(obj[key]) && typeof obj[key] !== 'number')
                    continue;
                if (Array.isArray(obj[key])) {
                    obj[key] = iframeMirror.getIds(iframeEl, obj[key]);
                }
                else {
                    obj[key] = iframeMirror.getId(iframeEl, obj[key]);
                }
            }
            return obj;
        }
        replaceIds(obj, iframeEl, keys) {
            return this.replace(this.crossOriginIframeMirror, obj, iframeEl, keys);
        }
        replaceStyleIds(obj, iframeEl, keys) {
            return this.replace(this.crossOriginIframeStyleMirror, obj, iframeEl, keys);
        }
        replaceIdOnNode(node, iframeEl) {
            this.replaceIds(node, iframeEl, ['id', 'rootId']);
            if ('childNodes' in node) {
                node.childNodes.forEach((child) => {
                    this.replaceIdOnNode(child, iframeEl);
                });
            }
        }
        patchRootIdOnNode(node, rootId) {
            if (node.type !== NodeType.Document && !node.rootId)
                node.rootId = rootId;
            if ('childNodes' in node) {
                node.childNodes.forEach((child) => {
                    this.patchRootIdOnNode(child, rootId);
                });
            }
        }
    }

    class ShadowDomManager {
        constructor(options) {
            this.shadowDoms = new WeakSet();
            this.restoreHandlers = [];
            this.mutationCb = options.mutationCb;
            this.scrollCb = options.scrollCb;
            this.bypassOptions = options.bypassOptions;
            this.mirror = options.mirror;
            this.init();
        }
        init() {
            this.reset();
            this.patchAttachShadow(Element, document);
        }
        addShadowRoot(shadowRoot, doc) {
            if (!isNativeShadowDom(shadowRoot))
                return;
            if (this.shadowDoms.has(shadowRoot))
                return;
            this.shadowDoms.add(shadowRoot);
            const observer = initMutationObserver(Object.assign(Object.assign({}, this.bypassOptions), { doc, mutationCb: this.mutationCb, mirror: this.mirror, shadowDomManager: this }), shadowRoot);
            this.restoreHandlers.push(() => observer.disconnect());
            this.restoreHandlers.push(initScrollObserver(Object.assign(Object.assign({}, this.bypassOptions), { scrollCb: this.scrollCb, doc: shadowRoot, mirror: this.mirror })));
            setTimeout(() => {
                if (shadowRoot.adoptedStyleSheets &&
                    shadowRoot.adoptedStyleSheets.length > 0)
                    this.bypassOptions.stylesheetManager.adoptStyleSheets(shadowRoot.adoptedStyleSheets, this.mirror.getId(shadowRoot.host));
                this.restoreHandlers.push(initAdoptedStyleSheetObserver({
                    mirror: this.mirror,
                    stylesheetManager: this.bypassOptions.stylesheetManager,
                }, shadowRoot));
            }, 0);
        }
        observeAttachShadow(iframeElement) {
            if (!iframeElement.contentWindow || !iframeElement.contentDocument)
                return;
            this.patchAttachShadow(iframeElement.contentWindow.Element, iframeElement.contentDocument);
        }
        patchAttachShadow(element, doc) {
            const manager = this;
            this.restoreHandlers.push(patch(element.prototype, 'attachShadow', function (original) {
                return function (option) {
                    const shadowRoot = original.call(this, option);
                    if (this.shadowRoot && inDom(this))
                        manager.addShadowRoot(this.shadowRoot, doc);
                    return shadowRoot;
                };
            }));
        }
        reset() {
            this.restoreHandlers.forEach((handler) => {
                try {
                    handler();
                }
                catch (e) {
                }
            });
            this.restoreHandlers = [];
            this.shadowDoms = new WeakSet();
        }
    }

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    /*
     * base64-arraybuffer 1.0.1 <https://github.com/niklasvh/base64-arraybuffer>
     * Copyright (c) 2021 Niklas von Hertzen <https://hertzen.com>
     * Released under MIT License
     */
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
    // Use a lookup table to find the index.
    var lookup = typeof Uint8Array === 'undefined' ? [] : new Uint8Array(256);
    for (var i$3 = 0; i$3 < chars.length; i$3++) {
        lookup[chars.charCodeAt(i$3)] = i$3;
    }
    var encode = function (arraybuffer) {
        var bytes = new Uint8Array(arraybuffer), i, len = bytes.length, base64 = '';
        for (i = 0; i < len; i += 3) {
            base64 += chars[bytes[i] >> 2];
            base64 += chars[((bytes[i] & 3) << 4) | (bytes[i + 1] >> 4)];
            base64 += chars[((bytes[i + 1] & 15) << 2) | (bytes[i + 2] >> 6)];
            base64 += chars[bytes[i + 2] & 63];
        }
        if (len % 3 === 2) {
            base64 = base64.substring(0, base64.length - 1) + '=';
        }
        else if (len % 3 === 1) {
            base64 = base64.substring(0, base64.length - 2) + '==';
        }
        return base64;
    };

    const canvasVarMap = new Map();
    function variableListFor(ctx, ctor) {
        let contextMap = canvasVarMap.get(ctx);
        if (!contextMap) {
            contextMap = new Map();
            canvasVarMap.set(ctx, contextMap);
        }
        if (!contextMap.has(ctor)) {
            contextMap.set(ctor, []);
        }
        return contextMap.get(ctor);
    }
    const saveWebGLVar = (value, win, ctx) => {
        if (!value ||
            !(isInstanceOfWebGLObject(value, win) || typeof value === 'object'))
            return;
        const name = value.constructor.name;
        const list = variableListFor(ctx, name);
        let index = list.indexOf(value);
        if (index === -1) {
            index = list.length;
            list.push(value);
        }
        return index;
    };
    function serializeArg(value, win, ctx) {
        if (value instanceof Array) {
            return value.map((arg) => serializeArg(arg, win, ctx));
        }
        else if (value === null) {
            return value;
        }
        else if (value instanceof Float32Array ||
            value instanceof Float64Array ||
            value instanceof Int32Array ||
            value instanceof Uint32Array ||
            value instanceof Uint8Array ||
            value instanceof Uint16Array ||
            value instanceof Int16Array ||
            value instanceof Int8Array ||
            value instanceof Uint8ClampedArray) {
            const name = value.constructor.name;
            return {
                rr_type: name,
                args: [Object.values(value)],
            };
        }
        else if (value instanceof ArrayBuffer) {
            const name = value.constructor.name;
            const base64 = encode(value);
            return {
                rr_type: name,
                base64,
            };
        }
        else if (value instanceof DataView) {
            const name = value.constructor.name;
            return {
                rr_type: name,
                args: [
                    serializeArg(value.buffer, win, ctx),
                    value.byteOffset,
                    value.byteLength,
                ],
            };
        }
        else if (value instanceof HTMLImageElement) {
            const name = value.constructor.name;
            const { src } = value;
            return {
                rr_type: name,
                src,
            };
        }
        else if (value instanceof HTMLCanvasElement) {
            const name = 'HTMLImageElement';
            const src = value.toDataURL();
            return {
                rr_type: name,
                src,
            };
        }
        else if (value instanceof ImageData) {
            const name = value.constructor.name;
            return {
                rr_type: name,
                args: [serializeArg(value.data, win, ctx), value.width, value.height],
            };
        }
        else if (isInstanceOfWebGLObject(value, win) || typeof value === 'object') {
            const name = value.constructor.name;
            const index = saveWebGLVar(value, win, ctx);
            return {
                rr_type: name,
                index: index,
            };
        }
        return value;
    }
    const serializeArgs = (args, win, ctx) => {
        return [...args].map((arg) => serializeArg(arg, win, ctx));
    };
    const isInstanceOfWebGLObject = (value, win) => {
        const webGLConstructorNames = [
            'WebGLActiveInfo',
            'WebGLBuffer',
            'WebGLFramebuffer',
            'WebGLProgram',
            'WebGLRenderbuffer',
            'WebGLShader',
            'WebGLShaderPrecisionFormat',
            'WebGLTexture',
            'WebGLUniformLocation',
            'WebGLVertexArrayObject',
            'WebGLVertexArrayObjectOES',
        ];
        const supportedWebGLConstructorNames = webGLConstructorNames.filter((name) => typeof win[name] === 'function');
        return Boolean(supportedWebGLConstructorNames.find((name) => value instanceof win[name]));
    };

    function initCanvas2DMutationObserver(cb, win, blockClass, blockSelector) {
        const handlers = [];
        const props2D = Object.getOwnPropertyNames(win.CanvasRenderingContext2D.prototype);
        for (const prop of props2D) {
            try {
                if (typeof win.CanvasRenderingContext2D.prototype[prop] !== 'function') {
                    continue;
                }
                const restoreHandler = patch(win.CanvasRenderingContext2D.prototype, prop, function (original) {
                    return function (...args) {
                        if (!isBlocked(this.canvas, blockClass, blockSelector, true)) {
                            setTimeout(() => {
                                const recordArgs = serializeArgs([...args], win, this);
                                cb(this.canvas, {
                                    type: CanvasContext['2D'],
                                    property: prop,
                                    args: recordArgs,
                                });
                            }, 0);
                        }
                        return original.apply(this, args);
                    };
                });
                handlers.push(restoreHandler);
            }
            catch (_a) {
                const hookHandler = hookSetter(win.CanvasRenderingContext2D.prototype, prop, {
                    set(v) {
                        cb(this.canvas, {
                            type: CanvasContext['2D'],
                            property: prop,
                            args: [v],
                            setter: true,
                        });
                    },
                });
                handlers.push(hookHandler);
            }
        }
        return () => {
            handlers.forEach((h) => h());
        };
    }

    function initCanvasContextObserver(win, blockClass, blockSelector) {
        const handlers = [];
        try {
            const restoreHandler = patch(win.HTMLCanvasElement.prototype, 'getContext', function (original) {
                return function (contextType, ...args) {
                    if (!isBlocked(this, blockClass, blockSelector, true)) {
                        if (!('__context' in this))
                            this.__context = contextType;
                    }
                    return original.apply(this, [contextType, ...args]);
                };
            });
            handlers.push(restoreHandler);
        }
        catch (_a) {
            console.error('failed to patch HTMLCanvasElement.prototype.getContext');
        }
        return () => {
            handlers.forEach((h) => h());
        };
    }

    function patchGLPrototype(prototype, type, cb, blockClass, blockSelector, mirror, win) {
        const handlers = [];
        const props = Object.getOwnPropertyNames(prototype);
        for (const prop of props) {
            if ([
                'isContextLost',
                'canvas',
                'drawingBufferWidth',
                'drawingBufferHeight',
            ].includes(prop)) {
                continue;
            }
            try {
                if (typeof prototype[prop] !== 'function') {
                    continue;
                }
                const restoreHandler = patch(prototype, prop, function (original) {
                    return function (...args) {
                        const result = original.apply(this, args);
                        saveWebGLVar(result, win, this);
                        if (!isBlocked(this.canvas, blockClass, blockSelector, true)) {
                            const recordArgs = serializeArgs([...args], win, this);
                            const mutation = {
                                type,
                                property: prop,
                                args: recordArgs,
                            };
                            cb(this.canvas, mutation);
                        }
                        return result;
                    };
                });
                handlers.push(restoreHandler);
            }
            catch (_a) {
                const hookHandler = hookSetter(prototype, prop, {
                    set(v) {
                        cb(this.canvas, {
                            type,
                            property: prop,
                            args: [v],
                            setter: true,
                        });
                    },
                });
                handlers.push(hookHandler);
            }
        }
        return handlers;
    }
    function initCanvasWebGLMutationObserver(cb, win, blockClass, blockSelector, mirror) {
        const handlers = [];
        handlers.push(...patchGLPrototype(win.WebGLRenderingContext.prototype, CanvasContext.WebGL, cb, blockClass, blockSelector, mirror, win));
        if (typeof win.WebGL2RenderingContext !== 'undefined') {
            handlers.push(...patchGLPrototype(win.WebGL2RenderingContext.prototype, CanvasContext.WebGL2, cb, blockClass, blockSelector, mirror, win));
        }
        return () => {
            handlers.forEach((h) => h());
        };
    }

    function decodeBase64(base64, enableUnicode) {
        var binaryString = atob(base64);
        if (enableUnicode) {
            var binaryView = new Uint8Array(binaryString.length);
            for (var i = 0, n = binaryString.length; i < n; ++i) {
                binaryView[i] = binaryString.charCodeAt(i);
            }
            return String.fromCharCode.apply(null, new Uint16Array(binaryView.buffer));
        }
        return binaryString;
    }

    function createURL(base64, sourcemapArg, enableUnicodeArg) {
        var sourcemap = sourcemapArg === undefined ? null : sourcemapArg;
        var enableUnicode = enableUnicodeArg === undefined ? false : enableUnicodeArg;
        var source = decodeBase64(base64, enableUnicode);
        var start = source.indexOf('\n', 10) + 1;
        var body = source.substring(start) + (sourcemap ? '\/\/# sourceMappingURL=' + sourcemap : '');
        var blob = new Blob([body], { type: 'application/javascript' });
        return URL.createObjectURL(blob);
    }

    function createBase64WorkerFactory(base64, sourcemapArg, enableUnicodeArg) {
        var url;
        return function WorkerFactory(options) {
            url = url || createURL(base64, sourcemapArg, enableUnicodeArg);
            return new Worker(url, options);
        };
    }

    var WorkerFactory = createBase64WorkerFactory('Lyogcm9sbHVwLXBsdWdpbi13ZWItd29ya2VyLWxvYWRlciAqLwooZnVuY3Rpb24gKCkgewogICAgJ3VzZSBzdHJpY3QnOwoKICAgIC8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKg0KICAgIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLg0KDQogICAgUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kL29yIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55DQogICAgcHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLg0KDQogICAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEICJBUyBJUyIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTIFdJVEgNCiAgICBSRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkNCiAgICBBTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SIEFOWSBTUEVDSUFMLCBESVJFQ1QsDQogICAgSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFUyBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NDQogICAgTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIE5FR0xJR0VOQ0UgT1INCiAgICBPVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SDQogICAgUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS4NCiAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqLw0KDQogICAgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikgew0KICAgICAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH0NCiAgICAgICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7DQogICAgICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9DQogICAgICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvclsidGhyb3ciXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9DQogICAgICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfQ0KICAgICAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpOw0KICAgICAgICB9KTsNCiAgICB9CgogICAgLyoKICAgICAqIGJhc2U2NC1hcnJheWJ1ZmZlciAxLjAuMSA8aHR0cHM6Ly9naXRodWIuY29tL25pa2xhc3ZoL2Jhc2U2NC1hcnJheWJ1ZmZlcj4KICAgICAqIENvcHlyaWdodCAoYykgMjAyMSBOaWtsYXMgdm9uIEhlcnR6ZW4gPGh0dHBzOi8vaGVydHplbi5jb20+CiAgICAgKiBSZWxlYXNlZCB1bmRlciBNSVQgTGljZW5zZQogICAgICovCiAgICB2YXIgY2hhcnMgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLyc7CiAgICAvLyBVc2UgYSBsb29rdXAgdGFibGUgdG8gZmluZCB0aGUgaW5kZXguCiAgICB2YXIgbG9va3VwID0gdHlwZW9mIFVpbnQ4QXJyYXkgPT09ICd1bmRlZmluZWQnID8gW10gOiBuZXcgVWludDhBcnJheSgyNTYpOwogICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGFycy5sZW5ndGg7IGkrKykgewogICAgICAgIGxvb2t1cFtjaGFycy5jaGFyQ29kZUF0KGkpXSA9IGk7CiAgICB9CiAgICB2YXIgZW5jb2RlID0gZnVuY3Rpb24gKGFycmF5YnVmZmVyKSB7CiAgICAgICAgdmFyIGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXlidWZmZXIpLCBpLCBsZW4gPSBieXRlcy5sZW5ndGgsIGJhc2U2NCA9ICcnOwogICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkgKz0gMykgewogICAgICAgICAgICBiYXNlNjQgKz0gY2hhcnNbYnl0ZXNbaV0gPj4gMl07CiAgICAgICAgICAgIGJhc2U2NCArPSBjaGFyc1soKGJ5dGVzW2ldICYgMykgPDwgNCkgfCAoYnl0ZXNbaSArIDFdID4+IDQpXTsKICAgICAgICAgICAgYmFzZTY0ICs9IGNoYXJzWygoYnl0ZXNbaSArIDFdICYgMTUpIDw8IDIpIHwgKGJ5dGVzW2kgKyAyXSA+PiA2KV07CiAgICAgICAgICAgIGJhc2U2NCArPSBjaGFyc1tieXRlc1tpICsgMl0gJiA2M107CiAgICAgICAgfQogICAgICAgIGlmIChsZW4gJSAzID09PSAyKSB7CiAgICAgICAgICAgIGJhc2U2NCA9IGJhc2U2NC5zdWJzdHJpbmcoMCwgYmFzZTY0Lmxlbmd0aCAtIDEpICsgJz0nOwogICAgICAgIH0KICAgICAgICBlbHNlIGlmIChsZW4gJSAzID09PSAxKSB7CiAgICAgICAgICAgIGJhc2U2NCA9IGJhc2U2NC5zdWJzdHJpbmcoMCwgYmFzZTY0Lmxlbmd0aCAtIDIpICsgJz09JzsKICAgICAgICB9CiAgICAgICAgcmV0dXJuIGJhc2U2NDsKICAgIH07CgogICAgY29uc3QgbGFzdEJsb2JNYXAgPSBuZXcgTWFwKCk7DQogICAgY29uc3QgdHJhbnNwYXJlbnRCbG9iTWFwID0gbmV3IE1hcCgpOw0KICAgIGZ1bmN0aW9uIGdldFRyYW5zcGFyZW50QmxvYkZvcih3aWR0aCwgaGVpZ2h0LCBkYXRhVVJMT3B0aW9ucykgew0KICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkgew0KICAgICAgICAgICAgY29uc3QgaWQgPSBgJHt3aWR0aH0tJHtoZWlnaHR9YDsNCiAgICAgICAgICAgIGlmICgnT2Zmc2NyZWVuQ2FudmFzJyBpbiBnbG9iYWxUaGlzKSB7DQogICAgICAgICAgICAgICAgaWYgKHRyYW5zcGFyZW50QmxvYk1hcC5oYXMoaWQpKQ0KICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJhbnNwYXJlbnRCbG9iTWFwLmdldChpZCk7DQogICAgICAgICAgICAgICAgY29uc3Qgb2Zmc2NyZWVuID0gbmV3IE9mZnNjcmVlbkNhbnZhcyh3aWR0aCwgaGVpZ2h0KTsNCiAgICAgICAgICAgICAgICBvZmZzY3JlZW4uZ2V0Q29udGV4dCgnMmQnKTsNCiAgICAgICAgICAgICAgICBjb25zdCBibG9iID0geWllbGQgb2Zmc2NyZWVuLmNvbnZlcnRUb0Jsb2IoZGF0YVVSTE9wdGlvbnMpOw0KICAgICAgICAgICAgICAgIGNvbnN0IGFycmF5QnVmZmVyID0geWllbGQgYmxvYi5hcnJheUJ1ZmZlcigpOw0KICAgICAgICAgICAgICAgIGNvbnN0IGJhc2U2NCA9IGVuY29kZShhcnJheUJ1ZmZlcik7DQogICAgICAgICAgICAgICAgdHJhbnNwYXJlbnRCbG9iTWFwLnNldChpZCwgYmFzZTY0KTsNCiAgICAgICAgICAgICAgICByZXR1cm4gYmFzZTY0Ow0KICAgICAgICAgICAgfQ0KICAgICAgICAgICAgZWxzZSB7DQogICAgICAgICAgICAgICAgcmV0dXJuICcnOw0KICAgICAgICAgICAgfQ0KICAgICAgICB9KTsNCiAgICB9DQogICAgY29uc3Qgd29ya2VyID0gc2VsZjsNCiAgICB3b3JrZXIub25tZXNzYWdlID0gZnVuY3Rpb24gKGUpIHsNCiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHsNCiAgICAgICAgICAgIGlmICgnT2Zmc2NyZWVuQ2FudmFzJyBpbiBnbG9iYWxUaGlzKSB7DQogICAgICAgICAgICAgICAgY29uc3QgeyBpZCwgYml0bWFwLCB3aWR0aCwgaGVpZ2h0LCBkYXRhVVJMT3B0aW9ucyB9ID0gZS5kYXRhOw0KICAgICAgICAgICAgICAgIGNvbnN0IHRyYW5zcGFyZW50QmFzZTY0ID0gZ2V0VHJhbnNwYXJlbnRCbG9iRm9yKHdpZHRoLCBoZWlnaHQsIGRhdGFVUkxPcHRpb25zKTsNCiAgICAgICAgICAgICAgICBjb25zdCBvZmZzY3JlZW4gPSBuZXcgT2Zmc2NyZWVuQ2FudmFzKHdpZHRoLCBoZWlnaHQpOw0KICAgICAgICAgICAgICAgIGNvbnN0IGN0eCA9IG9mZnNjcmVlbi5nZXRDb250ZXh0KCcyZCcpOw0KICAgICAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoYml0bWFwLCAwLCAwKTsNCiAgICAgICAgICAgICAgICBiaXRtYXAuY2xvc2UoKTsNCiAgICAgICAgICAgICAgICBjb25zdCBibG9iID0geWllbGQgb2Zmc2NyZWVuLmNvbnZlcnRUb0Jsb2IoZGF0YVVSTE9wdGlvbnMpOw0KICAgICAgICAgICAgICAgIGNvbnN0IHR5cGUgPSBibG9iLnR5cGU7DQogICAgICAgICAgICAgICAgY29uc3QgYXJyYXlCdWZmZXIgPSB5aWVsZCBibG9iLmFycmF5QnVmZmVyKCk7DQogICAgICAgICAgICAgICAgY29uc3QgYmFzZTY0ID0gZW5jb2RlKGFycmF5QnVmZmVyKTsNCiAgICAgICAgICAgICAgICBpZiAoIWxhc3RCbG9iTWFwLmhhcyhpZCkgJiYgKHlpZWxkIHRyYW5zcGFyZW50QmFzZTY0KSA9PT0gYmFzZTY0KSB7DQogICAgICAgICAgICAgICAgICAgIGxhc3RCbG9iTWFwLnNldChpZCwgYmFzZTY0KTsNCiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHdvcmtlci5wb3N0TWVzc2FnZSh7IGlkIH0pOw0KICAgICAgICAgICAgICAgIH0NCiAgICAgICAgICAgICAgICBpZiAobGFzdEJsb2JNYXAuZ2V0KGlkKSA9PT0gYmFzZTY0KQ0KICAgICAgICAgICAgICAgICAgICByZXR1cm4gd29ya2VyLnBvc3RNZXNzYWdlKHsgaWQgfSk7DQogICAgICAgICAgICAgICAgd29ya2VyLnBvc3RNZXNzYWdlKHsNCiAgICAgICAgICAgICAgICAgICAgaWQsDQogICAgICAgICAgICAgICAgICAgIHR5cGUsDQogICAgICAgICAgICAgICAgICAgIGJhc2U2NCwNCiAgICAgICAgICAgICAgICAgICAgd2lkdGgsDQogICAgICAgICAgICAgICAgICAgIGhlaWdodCwNCiAgICAgICAgICAgICAgICB9KTsNCiAgICAgICAgICAgICAgICBsYXN0QmxvYk1hcC5zZXQoaWQsIGJhc2U2NCk7DQogICAgICAgICAgICB9DQogICAgICAgICAgICBlbHNlIHsNCiAgICAgICAgICAgICAgICByZXR1cm4gd29ya2VyLnBvc3RNZXNzYWdlKHsgaWQ6IGUuZGF0YS5pZCB9KTsNCiAgICAgICAgICAgIH0NCiAgICAgICAgfSk7DQogICAgfTsKCn0pKCk7Cgo=', null, false);

    class CanvasManager {
        constructor(options) {
            this.pendingCanvasMutations = new Map();
            this.rafStamps = { latestId: 0, invokeId: null };
            this.frozen = false;
            this.locked = false;
            this.processMutation = (target, mutation) => {
                const newFrame = this.rafStamps.invokeId &&
                    this.rafStamps.latestId !== this.rafStamps.invokeId;
                if (newFrame || !this.rafStamps.invokeId)
                    this.rafStamps.invokeId = this.rafStamps.latestId;
                if (!this.pendingCanvasMutations.has(target)) {
                    this.pendingCanvasMutations.set(target, []);
                }
                this.pendingCanvasMutations.get(target).push(mutation);
            };
            const { sampling = 'all', win, blockClass, blockSelector, recordCanvas, dataURLOptions, } = options;
            this.mutationCb = options.mutationCb;
            this.mirror = options.mirror;
            if (recordCanvas && sampling === 'all')
                this.initCanvasMutationObserver(win, blockClass, blockSelector);
            if (recordCanvas && typeof sampling === 'number')
                this.initCanvasFPSObserver(sampling, win, blockClass, blockSelector, {
                    dataURLOptions,
                });
        }
        reset() {
            this.pendingCanvasMutations.clear();
            this.resetObservers && this.resetObservers();
        }
        freeze() {
            this.frozen = true;
        }
        unfreeze() {
            this.frozen = false;
        }
        lock() {
            this.locked = true;
        }
        unlock() {
            this.locked = false;
        }
        initCanvasFPSObserver(fps, win, blockClass, blockSelector, options) {
            const canvasContextReset = initCanvasContextObserver(win, blockClass, blockSelector);
            const snapshotInProgressMap = new Map();
            const worker = new WorkerFactory();
            worker.onmessage = (e) => {
                const { id } = e.data;
                snapshotInProgressMap.set(id, false);
                if (!('base64' in e.data))
                    return;
                const { base64, type, width, height } = e.data;
                this.mutationCb({
                    id,
                    type: CanvasContext['2D'],
                    commands: [
                        {
                            property: 'clearRect',
                            args: [0, 0, width, height],
                        },
                        {
                            property: 'drawImage',
                            args: [
                                {
                                    rr_type: 'ImageBitmap',
                                    args: [
                                        {
                                            rr_type: 'Blob',
                                            data: [{ rr_type: 'ArrayBuffer', base64 }],
                                            type,
                                        },
                                    ],
                                },
                                0,
                                0,
                            ],
                        },
                    ],
                });
            };
            const timeBetweenSnapshots = 1000 / fps;
            let lastSnapshotTime = 0;
            let rafId;
            const getCanvas = () => {
                const matchedCanvas = [];
                win.document.querySelectorAll('canvas').forEach((canvas) => {
                    if (!isBlocked(canvas, blockClass, blockSelector, true)) {
                        matchedCanvas.push(canvas);
                    }
                });
                return matchedCanvas;
            };
            const takeCanvasSnapshots = (timestamp) => {
                if (lastSnapshotTime &&
                    timestamp - lastSnapshotTime < timeBetweenSnapshots) {
                    rafId = requestAnimationFrame(takeCanvasSnapshots);
                    return;
                }
                lastSnapshotTime = timestamp;
                getCanvas()
                    .forEach((canvas) => __awaiter(this, void 0, void 0, function* () {
                    var _a;
                    const id = this.mirror.getId(canvas);
                    if (snapshotInProgressMap.get(id))
                        return;
                    snapshotInProgressMap.set(id, true);
                    if (['webgl', 'webgl2'].includes(canvas.__context)) {
                        const context = canvas.getContext(canvas.__context);
                        if (((_a = context === null || context === void 0 ? void 0 : context.getContextAttributes()) === null || _a === void 0 ? void 0 : _a.preserveDrawingBuffer) === false) {
                            context === null || context === void 0 ? void 0 : context.clear(context.COLOR_BUFFER_BIT);
                        }
                    }
                    const bitmap = yield createImageBitmap(canvas);
                    worker.postMessage({
                        id,
                        bitmap,
                        width: canvas.width,
                        height: canvas.height,
                        dataURLOptions: options.dataURLOptions,
                    }, [bitmap]);
                }));
                rafId = requestAnimationFrame(takeCanvasSnapshots);
            };
            rafId = requestAnimationFrame(takeCanvasSnapshots);
            this.resetObservers = () => {
                canvasContextReset();
                cancelAnimationFrame(rafId);
            };
        }
        initCanvasMutationObserver(win, blockClass, blockSelector) {
            this.startRAFTimestamping();
            this.startPendingCanvasMutationFlusher();
            const canvasContextReset = initCanvasContextObserver(win, blockClass, blockSelector);
            const canvas2DReset = initCanvas2DMutationObserver(this.processMutation.bind(this), win, blockClass, blockSelector);
            const canvasWebGL1and2Reset = initCanvasWebGLMutationObserver(this.processMutation.bind(this), win, blockClass, blockSelector, this.mirror);
            this.resetObservers = () => {
                canvasContextReset();
                canvas2DReset();
                canvasWebGL1and2Reset();
            };
        }
        startPendingCanvasMutationFlusher() {
            requestAnimationFrame(() => this.flushPendingCanvasMutations());
        }
        startRAFTimestamping() {
            const setLatestRAFTimestamp = (timestamp) => {
                this.rafStamps.latestId = timestamp;
                requestAnimationFrame(setLatestRAFTimestamp);
            };
            requestAnimationFrame(setLatestRAFTimestamp);
        }
        flushPendingCanvasMutations() {
            this.pendingCanvasMutations.forEach((values, canvas) => {
                const id = this.mirror.getId(canvas);
                this.flushPendingCanvasMutationFor(canvas, id);
            });
            requestAnimationFrame(() => this.flushPendingCanvasMutations());
        }
        flushPendingCanvasMutationFor(canvas, id) {
            if (this.frozen || this.locked) {
                return;
            }
            const valuesWithType = this.pendingCanvasMutations.get(canvas);
            if (!valuesWithType || id === -1)
                return;
            const values = valuesWithType.map((value) => {
                const rest = __rest(value, ["type"]);
                return rest;
            });
            const { type } = valuesWithType[0];
            this.mutationCb({ id, type, commands: values });
            this.pendingCanvasMutations.delete(canvas);
        }
    }

    class StylesheetManager {
        constructor(options) {
            this.trackedLinkElements = new WeakSet();
            this.styleMirror = new StyleSheetMirror();
            this.mutationCb = options.mutationCb;
            this.adoptedStyleSheetCb = options.adoptedStyleSheetCb;
        }
        attachLinkElement(linkEl, childSn) {
            if ('_cssText' in childSn.attributes)
                this.mutationCb({
                    adds: [],
                    removes: [],
                    texts: [],
                    attributes: [
                        {
                            id: childSn.id,
                            attributes: childSn
                                .attributes,
                        },
                    ],
                });
            this.trackLinkElement(linkEl);
        }
        trackLinkElement(linkEl) {
            if (this.trackedLinkElements.has(linkEl))
                return;
            this.trackedLinkElements.add(linkEl);
            this.trackStylesheetInLinkElement(linkEl);
        }
        adoptStyleSheets(sheets, hostId) {
            if (sheets.length === 0)
                return;
            const adoptedStyleSheetData = {
                id: hostId,
                styleIds: [],
            };
            const styles = [];
            for (const sheet of sheets) {
                let styleId;
                if (!this.styleMirror.has(sheet)) {
                    styleId = this.styleMirror.add(sheet);
                    const rules = Array.from(sheet.rules || CSSRule);
                    styles.push({
                        styleId,
                        rules: rules.map((r, index) => {
                            return {
                                rule: getCssRuleString(r),
                                index,
                            };
                        }),
                    });
                }
                else
                    styleId = this.styleMirror.getId(sheet);
                adoptedStyleSheetData.styleIds.push(styleId);
            }
            if (styles.length > 0)
                adoptedStyleSheetData.styles = styles;
            this.adoptedStyleSheetCb(adoptedStyleSheetData);
        }
        reset() {
            this.styleMirror.reset();
            this.trackedLinkElements = new WeakSet();
        }
        trackStylesheetInLinkElement(linkEl) {
        }
    }

    class ProcessedNodeManager {
        constructor() {
            this.nodeMap = new WeakMap();
            this.loop = true;
            this.periodicallyClear();
        }
        periodicallyClear() {
            requestAnimationFrame(() => {
                this.clear();
                if (this.loop)
                    this.periodicallyClear();
            });
        }
        inOtherBuffer(node, thisBuffer) {
            const buffers = this.nodeMap.get(node);
            return (buffers && Array.from(buffers).some((buffer) => buffer !== thisBuffer));
        }
        add(node, buffer) {
            this.nodeMap.set(node, (this.nodeMap.get(node) || new Set()).add(buffer));
        }
        clear() {
            this.nodeMap = new WeakMap();
        }
        destroy() {
            this.loop = false;
        }
    }

    function wrapEvent$1(e) {
        return Object.assign(Object.assign({}, e), { timestamp: Date.now() });
    }
    let wrappedEmit$1;
    let takeFullSnapshot;
    let canvasManager;
    let recording = false;
    const mirror = createMirror();
    function record(options = {}) {
        const { emit, checkoutEveryNms, checkoutEveryNth, blockClass = 'rr-block', blockSelector = null, ignoreClass = 'rr-ignore', maskTextClass = 'rr-mask', maskTextSelector = null, inlineStylesheet = true, maskAllInputs, maskInputOptions: _maskInputOptions, slimDOMOptions: _slimDOMOptions, maskInputFn, maskTextFn, hooks, packFn, sampling = {}, dataURLOptions = {}, mousemoveWait, recordCanvas = false, recordCrossOriginIframes = false, recordAfter = options.recordAfter === 'DOMContentLoaded'
            ? options.recordAfter
            : 'load', userTriggeredOnInput = false, collectFonts = false, inlineImages = false, plugins, keepIframeSrcFn = () => false, ignoreCSSAttributes = new Set([]), errorHandler, } = options;
        registerErrorHandler(errorHandler);
        const inEmittingFrame = recordCrossOriginIframes
            ? window.parent === window
            : true;
        let passEmitsToParent = false;
        if (!inEmittingFrame) {
            try {
                if (window.parent.document) {
                    passEmitsToParent = false;
                }
            }
            catch (e) {
                passEmitsToParent = true;
            }
        }
        if (inEmittingFrame && !emit) {
            throw new Error('emit function is required');
        }
        if (mousemoveWait !== undefined && sampling.mousemove === undefined) {
            sampling.mousemove = mousemoveWait;
        }
        mirror.reset();
        const maskInputOptions = maskAllInputs === true
            ? {
                color: true,
                date: true,
                'datetime-local': true,
                email: true,
                month: true,
                number: true,
                range: true,
                search: true,
                tel: true,
                text: true,
                time: true,
                url: true,
                week: true,
                textarea: true,
                select: true,
                password: true,
            }
            : _maskInputOptions !== undefined
                ? _maskInputOptions
                : { password: true };
        const slimDOMOptions = _slimDOMOptions === true || _slimDOMOptions === 'all'
            ? {
                script: true,
                comment: true,
                headFavicon: true,
                headWhitespace: true,
                headMetaSocial: true,
                headMetaRobots: true,
                headMetaHttpEquiv: true,
                headMetaVerification: true,
                headMetaAuthorship: _slimDOMOptions === 'all',
                headMetaDescKeywords: _slimDOMOptions === 'all',
            }
            : _slimDOMOptions
                ? _slimDOMOptions
                : {};
        polyfill();
        let lastFullSnapshotEvent;
        let incrementalSnapshotCount = 0;
        const eventProcessor = (e) => {
            for (const plugin of plugins || []) {
                if (plugin.eventProcessor) {
                    e = plugin.eventProcessor(e);
                }
            }
            if (packFn &&
                !passEmitsToParent) {
                e = packFn(e);
            }
            return e;
        };
        wrappedEmit$1 = (e, isCheckout) => {
            var _a;
            if (((_a = mutationBuffers[0]) === null || _a === void 0 ? void 0 : _a.isFrozen()) &&
                e.type !== EventType.FullSnapshot &&
                !(e.type === EventType.IncrementalSnapshot &&
                    e.data.source === IncrementalSource.Mutation)) {
                mutationBuffers.forEach((buf) => buf.unfreeze());
            }
            if (inEmittingFrame) {
                emit === null || emit === void 0 ? void 0 : emit(eventProcessor(e), isCheckout);
            }
            else if (passEmitsToParent) {
                const message = {
                    type: 'rrweb',
                    event: eventProcessor(e),
                    origin: window.location.origin,
                    isCheckout,
                };
                window.parent.postMessage(message, '*');
            }
            if (e.type === EventType.FullSnapshot) {
                lastFullSnapshotEvent = e;
                incrementalSnapshotCount = 0;
            }
            else if (e.type === EventType.IncrementalSnapshot) {
                if (e.data.source === IncrementalSource.Mutation &&
                    e.data.isAttachIframe) {
                    return;
                }
                incrementalSnapshotCount++;
                const exceedCount = checkoutEveryNth && incrementalSnapshotCount >= checkoutEveryNth;
                const exceedTime = checkoutEveryNms &&
                    e.timestamp - lastFullSnapshotEvent.timestamp > checkoutEveryNms;
                if (exceedCount || exceedTime) {
                    takeFullSnapshot(true);
                }
            }
        };
        const wrappedMutationEmit = (m) => {
            wrappedEmit$1(wrapEvent$1({
                type: EventType.IncrementalSnapshot,
                data: Object.assign({ source: IncrementalSource.Mutation }, m),
            }));
        };
        const wrappedScrollEmit = (p) => wrappedEmit$1(wrapEvent$1({
            type: EventType.IncrementalSnapshot,
            data: Object.assign({ source: IncrementalSource.Scroll }, p),
        }));
        const wrappedCanvasMutationEmit = (p) => wrappedEmit$1(wrapEvent$1({
            type: EventType.IncrementalSnapshot,
            data: Object.assign({ source: IncrementalSource.CanvasMutation }, p),
        }));
        const wrappedAdoptedStyleSheetEmit = (a) => wrappedEmit$1(wrapEvent$1({
            type: EventType.IncrementalSnapshot,
            data: Object.assign({ source: IncrementalSource.AdoptedStyleSheet }, a),
        }));
        const stylesheetManager = new StylesheetManager({
            mutationCb: wrappedMutationEmit,
            adoptedStyleSheetCb: wrappedAdoptedStyleSheetEmit,
        });
        const iframeManager = new IframeManager({
            mirror,
            mutationCb: wrappedMutationEmit,
            stylesheetManager: stylesheetManager,
            recordCrossOriginIframes,
            wrappedEmit: wrappedEmit$1,
        });
        for (const plugin of plugins || []) {
            if (plugin.getMirror)
                plugin.getMirror({
                    nodeMirror: mirror,
                    crossOriginIframeMirror: iframeManager.crossOriginIframeMirror,
                    crossOriginIframeStyleMirror: iframeManager.crossOriginIframeStyleMirror,
                });
        }
        const processedNodeManager = new ProcessedNodeManager();
        canvasManager = new CanvasManager({
            recordCanvas,
            mutationCb: wrappedCanvasMutationEmit,
            win: window,
            blockClass,
            blockSelector,
            mirror,
            sampling: sampling.canvas,
            dataURLOptions,
        });
        const shadowDomManager = new ShadowDomManager({
            mutationCb: wrappedMutationEmit,
            scrollCb: wrappedScrollEmit,
            bypassOptions: {
                blockClass,
                blockSelector,
                maskTextClass,
                maskTextSelector,
                inlineStylesheet,
                maskInputOptions,
                dataURLOptions,
                maskTextFn,
                maskInputFn,
                recordCanvas,
                inlineImages,
                sampling,
                slimDOMOptions,
                iframeManager,
                stylesheetManager,
                canvasManager,
                keepIframeSrcFn,
                processedNodeManager,
            },
            mirror,
        });
        takeFullSnapshot = (isCheckout = false) => {
            wrappedEmit$1(wrapEvent$1({
                type: EventType.Meta,
                data: {
                    href: window.location.href,
                    width: getWindowWidth(),
                    height: getWindowHeight(),
                },
            }), isCheckout);
            stylesheetManager.reset();
            shadowDomManager.init();
            mutationBuffers.forEach((buf) => buf.lock());
            const node = snapshot(document, {
                mirror,
                blockClass,
                blockSelector,
                maskTextClass,
                maskTextSelector,
                inlineStylesheet,
                maskAllInputs: maskInputOptions,
                maskTextFn,
                slimDOM: slimDOMOptions,
                dataURLOptions,
                recordCanvas,
                inlineImages,
                onSerialize: (n) => {
                    if (isSerializedIframe(n, mirror)) {
                        iframeManager.addIframe(n);
                    }
                    if (isSerializedStylesheet(n, mirror)) {
                        stylesheetManager.trackLinkElement(n);
                    }
                    if (hasShadowRoot(n)) {
                        shadowDomManager.addShadowRoot(n.shadowRoot, document);
                    }
                },
                onIframeLoad: (iframe, childSn) => {
                    iframeManager.attachIframe(iframe, childSn);
                    shadowDomManager.observeAttachShadow(iframe);
                },
                onStylesheetLoad: (linkEl, childSn) => {
                    stylesheetManager.attachLinkElement(linkEl, childSn);
                },
                keepIframeSrcFn,
            });
            if (!node) {
                return console.warn('Failed to snapshot the document');
            }
            wrappedEmit$1(wrapEvent$1({
                type: EventType.FullSnapshot,
                data: {
                    node,
                    initialOffset: getWindowScroll(window),
                },
            }), isCheckout);
            mutationBuffers.forEach((buf) => buf.unlock());
            if (document.adoptedStyleSheets && document.adoptedStyleSheets.length > 0)
                stylesheetManager.adoptStyleSheets(document.adoptedStyleSheets, mirror.getId(document));
        };
        try {
            const handlers = [];
            const observe = (doc) => {
                var _a;
                return callbackWrapper(initObservers)({
                    mutationCb: wrappedMutationEmit,
                    mousemoveCb: (positions, source) => wrappedEmit$1(wrapEvent$1({
                        type: EventType.IncrementalSnapshot,
                        data: {
                            source,
                            positions,
                        },
                    })),
                    mouseInteractionCb: (d) => wrappedEmit$1(wrapEvent$1({
                        type: EventType.IncrementalSnapshot,
                        data: Object.assign({ source: IncrementalSource.MouseInteraction }, d),
                    })),
                    scrollCb: wrappedScrollEmit,
                    viewportResizeCb: (d) => wrappedEmit$1(wrapEvent$1({
                        type: EventType.IncrementalSnapshot,
                        data: Object.assign({ source: IncrementalSource.ViewportResize }, d),
                    })),
                    inputCb: (v) => wrappedEmit$1(wrapEvent$1({
                        type: EventType.IncrementalSnapshot,
                        data: Object.assign({ source: IncrementalSource.Input }, v),
                    })),
                    mediaInteractionCb: (p) => wrappedEmit$1(wrapEvent$1({
                        type: EventType.IncrementalSnapshot,
                        data: Object.assign({ source: IncrementalSource.MediaInteraction }, p),
                    })),
                    styleSheetRuleCb: (r) => wrappedEmit$1(wrapEvent$1({
                        type: EventType.IncrementalSnapshot,
                        data: Object.assign({ source: IncrementalSource.StyleSheetRule }, r),
                    })),
                    styleDeclarationCb: (r) => wrappedEmit$1(wrapEvent$1({
                        type: EventType.IncrementalSnapshot,
                        data: Object.assign({ source: IncrementalSource.StyleDeclaration }, r),
                    })),
                    canvasMutationCb: wrappedCanvasMutationEmit,
                    fontCb: (p) => wrappedEmit$1(wrapEvent$1({
                        type: EventType.IncrementalSnapshot,
                        data: Object.assign({ source: IncrementalSource.Font }, p),
                    })),
                    selectionCb: (p) => {
                        wrappedEmit$1(wrapEvent$1({
                            type: EventType.IncrementalSnapshot,
                            data: Object.assign({ source: IncrementalSource.Selection }, p),
                        }));
                    },
                    blockClass,
                    ignoreClass,
                    maskTextClass,
                    maskTextSelector,
                    maskInputOptions,
                    inlineStylesheet,
                    sampling,
                    recordCanvas,
                    inlineImages,
                    userTriggeredOnInput,
                    collectFonts,
                    doc,
                    maskInputFn,
                    maskTextFn,
                    keepIframeSrcFn,
                    blockSelector,
                    slimDOMOptions,
                    dataURLOptions,
                    mirror,
                    iframeManager,
                    stylesheetManager,
                    shadowDomManager,
                    processedNodeManager,
                    canvasManager,
                    ignoreCSSAttributes,
                    plugins: ((_a = plugins === null || plugins === void 0 ? void 0 : plugins.filter((p) => p.observer)) === null || _a === void 0 ? void 0 : _a.map((p) => ({
                        observer: p.observer,
                        options: p.options,
                        callback: (payload) => wrappedEmit$1(wrapEvent$1({
                            type: EventType.Plugin,
                            data: {
                                plugin: p.name,
                                payload,
                            },
                        })),
                    }))) || [],
                }, hooks);
            };
            iframeManager.addLoadListener((iframeEl) => {
                try {
                    handlers.push(observe(iframeEl.contentDocument));
                }
                catch (error) {
                    console.warn(error);
                }
            });
            const init = () => {
                takeFullSnapshot();
                handlers.push(observe(document));
                recording = true;
            };
            if (document.readyState === 'interactive' ||
                document.readyState === 'complete') {
                init();
            }
            else {
                handlers.push(on$1('DOMContentLoaded', () => {
                    wrappedEmit$1(wrapEvent$1({
                        type: EventType.DomContentLoaded,
                        data: {},
                    }));
                    if (recordAfter === 'DOMContentLoaded')
                        init();
                }));
                handlers.push(on$1('load', () => {
                    wrappedEmit$1(wrapEvent$1({
                        type: EventType.Load,
                        data: {},
                    }));
                    if (recordAfter === 'load')
                        init();
                }, window));
            }
            return () => {
                handlers.forEach((h) => h());
                processedNodeManager.destroy();
                recording = false;
                unregisterErrorHandler();
            };
        }
        catch (error) {
            console.warn(error);
        }
    }
    record.addCustomEvent = (tag, payload) => {
        if (!recording) {
            throw new Error('please add custom event after start recording');
        }
        wrappedEmit$1(wrapEvent$1({
            type: EventType.Custom,
            data: {
                tag,
                payload,
            },
        }));
    };
    record.freezePage = () => {
        mutationBuffers.forEach((buf) => buf.freeze());
    };
    record.takeFullSnapshot = (isCheckout) => {
        if (!recording) {
            throw new Error('please take full snapshot after start recording');
        }
        takeFullSnapshot(isCheckout);
    };
    record.mirror = mirror;

    // DEFLATE is a complex format; to read this code, you should probably check the RFC first:

    // aliases for shorter compressed code (most minifers don't do this)
    var u8$1 = Uint8Array, u16$1 = Uint16Array, u32$1 = Uint32Array;
    // fixed length extra bits
    var fleb$1 = new u8$1([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, /* unused */ 0, 0, /* impossible */ 0]);
    // fixed distance extra bits
    // see fleb note
    var fdeb$1 = new u8$1([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, /* unused */ 0, 0]);
    // code length index map
    var clim$1 = new u8$1([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
    // get base, reverse index map from extra bits
    var freb$1 = function (eb, start) {
        var b = new u16$1(31);
        for (var i = 0; i < 31; ++i) {
            b[i] = start += 1 << eb[i - 1];
        }
        // numbers here are at max 18 bits
        var r = new u32$1(b[30]);
        for (var i = 1; i < 30; ++i) {
            for (var j = b[i]; j < b[i + 1]; ++j) {
                r[j] = ((j - b[i]) << 5) | i;
            }
        }
        return [b, r];
    };
    var _a$1 = freb$1(fleb$1, 2), fl$1 = _a$1[0], revfl$1 = _a$1[1];
    // we can ignore the fact that the other numbers are wrong; they never happen anyway
    fl$1[28] = 258, revfl$1[258] = 28;
    var _b$1 = freb$1(fdeb$1, 0), revfd$1 = _b$1[1];
    // map of value to reverse (assuming 16 bits)
    var rev$1 = new u16$1(32768);
    for (var i$2 = 0; i$2 < 32768; ++i$2) {
        // reverse table algorithm from SO
        var x$1 = ((i$2 & 0xAAAA) >>> 1) | ((i$2 & 0x5555) << 1);
        x$1 = ((x$1 & 0xCCCC) >>> 2) | ((x$1 & 0x3333) << 2);
        x$1 = ((x$1 & 0xF0F0) >>> 4) | ((x$1 & 0x0F0F) << 4);
        rev$1[i$2] = (((x$1 & 0xFF00) >>> 8) | ((x$1 & 0x00FF) << 8)) >>> 1;
    }
    // create huffman tree from u8 "map": index -> code length for code index
    // mb (max bits) must be at most 15
    // TODO: optimize/split up?
    var hMap$1 = (function (cd, mb, r) {
        var s = cd.length;
        // index
        var i = 0;
        // u16 "map": index -> # of codes with bit length = index
        var l = new u16$1(mb);
        // length of cd must be 288 (total # of codes)
        for (; i < s; ++i)
            ++l[cd[i] - 1];
        // u16 "map": index -> minimum code for bit length = index
        var le = new u16$1(mb);
        for (i = 0; i < mb; ++i) {
            le[i] = (le[i - 1] + l[i - 1]) << 1;
        }
        var co;
        if (r) {
            // u16 "map": index -> number of actual bits, symbol for code
            co = new u16$1(1 << mb);
            // bits to remove for reverser
            var rvb = 15 - mb;
            for (i = 0; i < s; ++i) {
                // ignore 0 lengths
                if (cd[i]) {
                    // num encoding both symbol and bits read
                    var sv = (i << 4) | cd[i];
                    // free bits
                    var r_1 = mb - cd[i];
                    // start value
                    var v = le[cd[i] - 1]++ << r_1;
                    // m is end value
                    for (var m = v | ((1 << r_1) - 1); v <= m; ++v) {
                        // every 16 bit value starting with the code yields the same result
                        co[rev$1[v] >>> rvb] = sv;
                    }
                }
            }
        }
        else {
            co = new u16$1(s);
            for (i = 0; i < s; ++i)
                co[i] = rev$1[le[cd[i] - 1]++] >>> (15 - cd[i]);
        }
        return co;
    });
    // fixed length tree
    var flt$1 = new u8$1(288);
    for (var i$2 = 0; i$2 < 144; ++i$2)
        flt$1[i$2] = 8;
    for (var i$2 = 144; i$2 < 256; ++i$2)
        flt$1[i$2] = 9;
    for (var i$2 = 256; i$2 < 280; ++i$2)
        flt$1[i$2] = 7;
    for (var i$2 = 280; i$2 < 288; ++i$2)
        flt$1[i$2] = 8;
    // fixed distance tree
    var fdt$1 = new u8$1(32);
    for (var i$2 = 0; i$2 < 32; ++i$2)
        fdt$1[i$2] = 5;
    // fixed length map
    var flm$1 = /*#__PURE__*/ hMap$1(flt$1, 9, 0);
    // fixed distance map
    var fdm$1 = /*#__PURE__*/ hMap$1(fdt$1, 5, 0);
    // get end of byte
    var shft$1 = function (p) { return ((p / 8) >> 0) + (p & 7 && 1); };
    // typed array slice - allows garbage collector to free original reference,
    // while being more compatible than .slice
    var slc$1 = function (v, s, e) {
        if (s == null || s < 0)
            s = 0;
        if (e == null || e > v.length)
            e = v.length;
        // can't use .constructor in case user-supplied
        var n = new (v instanceof u16$1 ? u16$1 : v instanceof u32$1 ? u32$1 : u8$1)(e - s);
        n.set(v.subarray(s, e));
        return n;
    };
    // starting at p, write the minimum number of bits that can hold v to d
    var wbits$1 = function (d, p, v) {
        v <<= p & 7;
        var o = (p / 8) >> 0;
        d[o] |= v;
        d[o + 1] |= v >>> 8;
    };
    // starting at p, write the minimum number of bits (>8) that can hold v to d
    var wbits16$1 = function (d, p, v) {
        v <<= p & 7;
        var o = (p / 8) >> 0;
        d[o] |= v;
        d[o + 1] |= v >>> 8;
        d[o + 2] |= v >>> 16;
    };
    // creates code lengths from a frequency table
    var hTree$1 = function (d, mb) {
        // Need extra info to make a tree
        var t = [];
        for (var i = 0; i < d.length; ++i) {
            if (d[i])
                t.push({ s: i, f: d[i] });
        }
        var s = t.length;
        var t2 = t.slice();
        if (!s)
            return [new u8$1(0), 0];
        if (s == 1) {
            var v = new u8$1(t[0].s + 1);
            v[t[0].s] = 1;
            return [v, 1];
        }
        t.sort(function (a, b) { return a.f - b.f; });
        // after i2 reaches last ind, will be stopped
        // freq must be greater than largest possible number of symbols
        t.push({ s: -1, f: 25001 });
        var l = t[0], r = t[1], i0 = 0, i1 = 1, i2 = 2;
        t[0] = { s: -1, f: l.f + r.f, l: l, r: r };
        // efficient algorithm from UZIP.js
        // i0 is lookbehind, i2 is lookahead - after processing two low-freq
        // symbols that combined have high freq, will start processing i2 (high-freq,
        // non-composite) symbols instead
        // see https://reddit.com/r/photopea/comments/ikekht/uzipjs_questions/
        while (i1 != s - 1) {
            l = t[t[i0].f < t[i2].f ? i0++ : i2++];
            r = t[i0 != i1 && t[i0].f < t[i2].f ? i0++ : i2++];
            t[i1++] = { s: -1, f: l.f + r.f, l: l, r: r };
        }
        var maxSym = t2[0].s;
        for (var i = 1; i < s; ++i) {
            if (t2[i].s > maxSym)
                maxSym = t2[i].s;
        }
        // code lengths
        var tr = new u16$1(maxSym + 1);
        // max bits in tree
        var mbt = ln$1(t[i1 - 1], tr, 0);
        if (mbt > mb) {
            // more algorithms from UZIP.js
            // TODO: find out how this code works (debt)
            //  ind    debt
            var i = 0, dt = 0;
            //    left            cost
            var lft = mbt - mb, cst = 1 << lft;
            t2.sort(function (a, b) { return tr[b.s] - tr[a.s] || a.f - b.f; });
            for (; i < s; ++i) {
                var i2_1 = t2[i].s;
                if (tr[i2_1] > mb) {
                    dt += cst - (1 << (mbt - tr[i2_1]));
                    tr[i2_1] = mb;
                }
                else
                    break;
            }
            dt >>>= lft;
            while (dt > 0) {
                var i2_2 = t2[i].s;
                if (tr[i2_2] < mb)
                    dt -= 1 << (mb - tr[i2_2]++ - 1);
                else
                    ++i;
            }
            for (; i >= 0 && dt; --i) {
                var i2_3 = t2[i].s;
                if (tr[i2_3] == mb) {
                    --tr[i2_3];
                    ++dt;
                }
            }
            mbt = mb;
        }
        return [new u8$1(tr), mbt];
    };
    // get the max length and assign length codes
    var ln$1 = function (n, l, d) {
        return n.s == -1
            ? Math.max(ln$1(n.l, l, d + 1), ln$1(n.r, l, d + 1))
            : (l[n.s] = d);
    };
    // length codes generation
    var lc$1 = function (c) {
        var s = c.length;
        // Note that the semicolon was intentional
        while (s && !c[--s])
            ;
        var cl = new u16$1(++s);
        //  ind      num         streak
        var cli = 0, cln = c[0], cls = 1;
        var w = function (v) { cl[cli++] = v; };
        for (var i = 1; i <= s; ++i) {
            if (c[i] == cln && i != s)
                ++cls;
            else {
                if (!cln && cls > 2) {
                    for (; cls > 138; cls -= 138)
                        w(32754);
                    if (cls > 2) {
                        w(cls > 10 ? ((cls - 11) << 5) | 28690 : ((cls - 3) << 5) | 12305);
                        cls = 0;
                    }
                }
                else if (cls > 3) {
                    w(cln), --cls;
                    for (; cls > 6; cls -= 6)
                        w(8304);
                    if (cls > 2)
                        w(((cls - 3) << 5) | 8208), cls = 0;
                }
                while (cls--)
                    w(cln);
                cls = 1;
                cln = c[i];
            }
        }
        return [cl.subarray(0, cli), s];
    };
    // calculate the length of output from tree, code lengths
    var clen$1 = function (cf, cl) {
        var l = 0;
        for (var i = 0; i < cl.length; ++i)
            l += cf[i] * cl[i];
        return l;
    };
    // writes a fixed block
    // returns the new bit pos
    var wfblk$1 = function (out, pos, dat) {
        // no need to write 00 as type: TypedArray defaults to 0
        var s = dat.length;
        var o = shft$1(pos + 2);
        out[o] = s & 255;
        out[o + 1] = s >>> 8;
        out[o + 2] = out[o] ^ 255;
        out[o + 3] = out[o + 1] ^ 255;
        for (var i = 0; i < s; ++i)
            out[o + i + 4] = dat[i];
        return (o + 4 + s) * 8;
    };
    // writes a block
    var wblk$1 = function (dat, out, final, syms, lf, df, eb, li, bs, bl, p) {
        wbits$1(out, p++, final);
        ++lf[256];
        var _a = hTree$1(lf, 15), dlt = _a[0], mlb = _a[1];
        var _b = hTree$1(df, 15), ddt = _b[0], mdb = _b[1];
        var _c = lc$1(dlt), lclt = _c[0], nlc = _c[1];
        var _d = lc$1(ddt), lcdt = _d[0], ndc = _d[1];
        var lcfreq = new u16$1(19);
        for (var i = 0; i < lclt.length; ++i)
            lcfreq[lclt[i] & 31]++;
        for (var i = 0; i < lcdt.length; ++i)
            lcfreq[lcdt[i] & 31]++;
        var _e = hTree$1(lcfreq, 7), lct = _e[0], mlcb = _e[1];
        var nlcc = 19;
        for (; nlcc > 4 && !lct[clim$1[nlcc - 1]]; --nlcc)
            ;
        var flen = (bl + 5) << 3;
        var ftlen = clen$1(lf, flt$1) + clen$1(df, fdt$1) + eb;
        var dtlen = clen$1(lf, dlt) + clen$1(df, ddt) + eb + 14 + 3 * nlcc + clen$1(lcfreq, lct) + (2 * lcfreq[16] + 3 * lcfreq[17] + 7 * lcfreq[18]);
        if (flen <= ftlen && flen <= dtlen)
            return wfblk$1(out, p, dat.subarray(bs, bs + bl));
        var lm, ll, dm, dl;
        wbits$1(out, p, 1 + (dtlen < ftlen)), p += 2;
        if (dtlen < ftlen) {
            lm = hMap$1(dlt, mlb, 0), ll = dlt, dm = hMap$1(ddt, mdb, 0), dl = ddt;
            var llm = hMap$1(lct, mlcb, 0);
            wbits$1(out, p, nlc - 257);
            wbits$1(out, p + 5, ndc - 1);
            wbits$1(out, p + 10, nlcc - 4);
            p += 14;
            for (var i = 0; i < nlcc; ++i)
                wbits$1(out, p + 3 * i, lct[clim$1[i]]);
            p += 3 * nlcc;
            var lcts = [lclt, lcdt];
            for (var it = 0; it < 2; ++it) {
                var clct = lcts[it];
                for (var i = 0; i < clct.length; ++i) {
                    var len = clct[i] & 31;
                    wbits$1(out, p, llm[len]), p += lct[len];
                    if (len > 15)
                        wbits$1(out, p, (clct[i] >>> 5) & 127), p += clct[i] >>> 12;
                }
            }
        }
        else {
            lm = flm$1, ll = flt$1, dm = fdm$1, dl = fdt$1;
        }
        for (var i = 0; i < li; ++i) {
            if (syms[i] > 255) {
                var len = (syms[i] >>> 18) & 31;
                wbits16$1(out, p, lm[len + 257]), p += ll[len + 257];
                if (len > 7)
                    wbits$1(out, p, (syms[i] >>> 23) & 31), p += fleb$1[len];
                var dst = syms[i] & 31;
                wbits16$1(out, p, dm[dst]), p += dl[dst];
                if (dst > 3)
                    wbits16$1(out, p, (syms[i] >>> 5) & 8191), p += fdeb$1[dst];
            }
            else {
                wbits16$1(out, p, lm[syms[i]]), p += ll[syms[i]];
            }
        }
        wbits16$1(out, p, lm[256]);
        return p + ll[256];
    };
    // deflate options (nice << 13) | chain
    var deo$1 = /*#__PURE__*/ new u32$1([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]);
    // empty
    var et$1 = /*#__PURE__*/ new u8$1(0);
    // compresses data into a raw DEFLATE buffer
    var dflt$1 = function (dat, lvl, plvl, pre, post, lst) {
        var s = dat.length;
        var o = new u8$1(pre + s + 5 * (1 + Math.floor(s / 7000)) + post);
        // writing to this writes to the output buffer
        var w = o.subarray(pre, o.length - post);
        var pos = 0;
        if (!lvl || s < 8) {
            for (var i = 0; i <= s; i += 65535) {
                // end
                var e = i + 65535;
                if (e < s) {
                    // write full block
                    pos = wfblk$1(w, pos, dat.subarray(i, e));
                }
                else {
                    // write final block
                    w[i] = lst;
                    pos = wfblk$1(w, pos, dat.subarray(i, s));
                }
            }
        }
        else {
            var opt = deo$1[lvl - 1];
            var n = opt >>> 13, c = opt & 8191;
            var msk_1 = (1 << plvl) - 1;
            //    prev 2-byte val map    curr 2-byte val map
            var prev = new u16$1(32768), head = new u16$1(msk_1 + 1);
            var bs1_1 = Math.ceil(plvl / 3), bs2_1 = 2 * bs1_1;
            var hsh = function (i) { return (dat[i] ^ (dat[i + 1] << bs1_1) ^ (dat[i + 2] << bs2_1)) & msk_1; };
            // 24576 is an arbitrary number of maximum symbols per block
            // 424 buffer for last block
            var syms = new u32$1(25000);
            // length/literal freq   distance freq
            var lf = new u16$1(288), df = new u16$1(32);
            //  l/lcnt  exbits  index  l/lind  waitdx  bitpos
            var lc_1 = 0, eb = 0, i = 0, li = 0, wi = 0, bs = 0;
            for (; i < s; ++i) {
                // hash value
                var hv = hsh(i);
                // index mod 32768
                var imod = i & 32767;
                // previous index with this value
                var pimod = head[hv];
                prev[imod] = pimod;
                head[hv] = imod;
                // We always should modify head and prev, but only add symbols if
                // this data is not yet processed ("wait" for wait index)
                if (wi <= i) {
                    // bytes remaining
                    var rem = s - i;
                    if ((lc_1 > 7000 || li > 24576) && rem > 423) {
                        pos = wblk$1(dat, w, 0, syms, lf, df, eb, li, bs, i - bs, pos);
                        li = lc_1 = eb = 0, bs = i;
                        for (var j = 0; j < 286; ++j)
                            lf[j] = 0;
                        for (var j = 0; j < 30; ++j)
                            df[j] = 0;
                    }
                    //  len    dist   chain
                    var l = 2, d = 0, ch_1 = c, dif = (imod - pimod) & 32767;
                    if (rem > 2 && hv == hsh(i - dif)) {
                        var maxn = Math.min(n, rem) - 1;
                        var maxd = Math.min(32767, i);
                        // max possible length
                        // not capped at dif because decompressors implement "rolling" index population
                        var ml = Math.min(258, rem);
                        while (dif <= maxd && --ch_1 && imod != pimod) {
                            if (dat[i + l] == dat[i + l - dif]) {
                                var nl = 0;
                                for (; nl < ml && dat[i + nl] == dat[i + nl - dif]; ++nl)
                                    ;
                                if (nl > l) {
                                    l = nl, d = dif;
                                    // break out early when we reach "nice" (we are satisfied enough)
                                    if (nl > maxn)
                                        break;
                                    // now, find the rarest 2-byte sequence within this
                                    // length of literals and search for that instead.
                                    // Much faster than just using the start
                                    var mmd = Math.min(dif, nl - 2);
                                    var md = 0;
                                    for (var j = 0; j < mmd; ++j) {
                                        var ti = (i - dif + j + 32768) & 32767;
                                        var pti = prev[ti];
                                        var cd = (ti - pti + 32768) & 32767;
                                        if (cd > md)
                                            md = cd, pimod = ti;
                                    }
                                }
                            }
                            // check the previous match
                            imod = pimod, pimod = prev[imod];
                            dif += (imod - pimod + 32768) & 32767;
                        }
                    }
                    // d will be nonzero only when a match was found
                    if (d) {
                        // store both dist and len data in one Uint32
                        // Make sure this is recognized as a len/dist with 28th bit (2^28)
                        syms[li++] = 268435456 | (revfl$1[l] << 18) | revfd$1[d];
                        var lin = revfl$1[l] & 31, din = revfd$1[d] & 31;
                        eb += fleb$1[lin] + fdeb$1[din];
                        ++lf[257 + lin];
                        ++df[din];
                        wi = i + l;
                        ++lc_1;
                    }
                    else {
                        syms[li++] = dat[i];
                        ++lf[dat[i]];
                    }
                }
            }
            pos = wblk$1(dat, w, lst, syms, lf, df, eb, li, bs, i - bs, pos);
            // this is the easiest way to avoid needing to maintain state
            if (!lst)
                pos = wfblk$1(w, pos, et$1);
        }
        return slc$1(o, 0, pre + shft$1(pos) + post);
    };
    // Alder32
    var adler$1 = function () {
        var a = 1, b = 0;
        return {
            p: function (d) {
                // closures have awful performance
                var n = a, m = b;
                var l = d.length;
                for (var i = 0; i != l;) {
                    var e = Math.min(i + 5552, l);
                    for (; i < e; ++i)
                        n += d[i], m += n;
                    n %= 65521, m %= 65521;
                }
                a = n, b = m;
            },
            d: function () { return ((a >>> 8) << 16 | (b & 255) << 8 | (b >>> 8)) + ((a & 255) << 23) * 2; }
        };
    };
    // deflate with opts
    var dopt$1 = function (dat, opt, pre, post, st) {
        return dflt$1(dat, opt.level == null ? 6 : opt.level, opt.mem == null ? Math.ceil(Math.max(8, Math.min(13, Math.log(dat.length))) * 1.5) : (12 + opt.mem), pre, post, !st);
    };
    // write bytes
    var wbytes$1 = function (d, b, v) {
        for (; v; ++b)
            d[b] = v, v >>>= 8;
    };
    // zlib header
    var zlh$1 = function (c, o) {
        var lv = o.level, fl = lv == 0 ? 0 : lv < 6 ? 1 : lv == 9 ? 3 : 2;
        c[0] = 120, c[1] = (fl << 6) | (fl ? (32 - 2 * fl) : 1);
    };
    /**
     * Compress data with Zlib
     * @param data The data to compress
     * @param opts The compression options
     * @returns The zlib-compressed version of the data
     */
    function zlibSync$1(data, opts) {
        if (opts === void 0) { opts = {}; }
        var a = adler$1();
        a.p(data);
        var d = dopt$1(data, opts, 2, 4);
        return zlh$1(d, opts), wbytes$1(d, d.length - 4, a.d()), d;
    }
    /**
     * Converts a string into a Uint8Array for use with compression/decompression methods
     * @param str The string to encode
     * @param latin1 Whether or not to interpret the data as Latin-1. This should
     *               not need to be true unless decoding a binary string.
     * @returns The string encoded in UTF-8/Latin-1 binary
     */
    function strToU8$1(str, latin1) {
        var l = str.length;
        if (!latin1 && typeof TextEncoder != 'undefined')
            return new TextEncoder().encode(str);
        var ar = new u8$1(str.length + (str.length >>> 1));
        var ai = 0;
        var w = function (v) { ar[ai++] = v; };
        for (var i = 0; i < l; ++i) {
            if (ai + 5 > ar.length) {
                var n = new u8$1(ai + 8 + ((l - i) << 1));
                n.set(ar);
                ar = n;
            }
            var c = str.charCodeAt(i);
            if (c < 128 || latin1)
                w(c);
            else if (c < 2048)
                w(192 | (c >>> 6)), w(128 | (c & 63));
            else if (c > 55295 && c < 57344)
                c = 65536 + (c & 1023 << 10) | (str.charCodeAt(++i) & 1023),
                    w(240 | (c >>> 18)), w(128 | ((c >>> 12) & 63)), w(128 | ((c >>> 6) & 63)), w(128 | (c & 63));
            else
                w(224 | (c >>> 12)), w(128 | ((c >>> 6) & 63)), w(128 | (c & 63));
        }
        return slc$1(ar, 0, ai);
    }
    /**
     * Converts a Uint8Array to a string
     * @param dat The data to decode to string
     * @param latin1 Whether or not to interpret the data as Latin-1. This should
     *               not need to be true unless encoding to binary string.
     * @returns The original UTF-8/Latin-1 string
     */
    function strFromU8$1(dat, latin1) {
        var r = '';
        if (!latin1 && typeof TextDecoder != 'undefined')
            return new TextDecoder().decode(dat);
        for (var i = 0; i < dat.length;) {
            var c = dat[i++];
            if (c < 128 || latin1)
                r += String.fromCharCode(c);
            else if (c < 224)
                r += String.fromCharCode((c & 31) << 6 | (dat[i++] & 63));
            else if (c < 240)
                r += String.fromCharCode((c & 15) << 12 | (dat[i++] & 63) << 6 | (dat[i++] & 63));
            else
                c = ((c & 15) << 18 | (dat[i++] & 63) << 12 | (dat[i++] & 63) << 6 | (dat[i++] & 63)) - 65536,
                    r += String.fromCharCode(55296 | (c >> 10), 56320 | (c & 1023));
        }
        return r;
    }

    const MARK = 'v1';

    const pack$1 = (event) => {
        const _e = Object.assign(Object.assign({}, event), { v: MARK });
        return strFromU8$1(zlibSync$1(strToU8$1(JSON.stringify(_e))), true);
    };

    function _extends() {
      _extends = Object.assign ? Object.assign.bind() : function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
      return _extends.apply(this, arguments);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
      };
      return _setPrototypeOf(o, p);
    }
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct) return false;
      if (Reflect.construct.sham) return false;
      if (typeof Proxy === "function") return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _construct(Parent, args, Class) {
      if (_isNativeReflectConstruct()) {
        _construct = Reflect.construct.bind();
      } else {
        _construct = function _construct(Parent, args, Class) {
          var a = [null];
          a.push.apply(a, args);
          var Constructor = Function.bind.apply(Parent, a);
          var instance = new Constructor();
          if (Class) _setPrototypeOf(instance, Class.prototype);
          return instance;
        };
      }
      return _construct.apply(null, arguments);
    }
    function _unsupportedIterableToArray(o, minLen) {
      if (!o) return;
      if (typeof o === "string") return _arrayLikeToArray(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor) n = o.constructor.name;
      if (n === "Map" || n === "Set") return Array.from(o);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
    }
    function _arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length) len = arr.length;
      for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
      return arr2;
    }
    function _createForOfIteratorHelperLoose(o, allowArrayLike) {
      var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
      if (it) return (it = it.call(o)).next.bind(it);
      if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it) o = it;
        var i = 0;
        return function () {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    // Unique ID creation requires a high quality random # generator. In the browser we therefore
    // require the crypto API and do not support built-in fallback to lower quality random number
    // generators (like Math.random()).
    var getRandomValues;
    var rnds8 = new Uint8Array(16);
    function rng() {
      // lazy load so that environments that need to polyfill have a chance to do so
      if (!getRandomValues) {
        // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
        // find the complete implementation of crypto (msCrypto) on IE11.
        getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);

        if (!getRandomValues) {
          throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
        }
      }

      return getRandomValues(rnds8);
    }

    var REGEX = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

    function validate(uuid) {
      return typeof uuid === 'string' && REGEX.test(uuid);
    }

    /**
     * Convert array of 16 byte values to UUID string format of the form:
     * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
     */

    var byteToHex = [];

    for (var i$1 = 0; i$1 < 256; ++i$1) {
      byteToHex.push((i$1 + 0x100).toString(16).substr(1));
    }

    function stringify(arr) {
      var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      // Note: Be careful editing this code!  It's been tuned for performance
      // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
      var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
      // of the following:
      // - One or more input array values don't map to a hex octet (leading to
      // "undefined" in the uuid)
      // - Invalid input values for the RFC `version` or `variant` fields

      if (!validate(uuid)) {
        throw TypeError('Stringified UUID is invalid');
      }

      return uuid;
    }

    function v4(options, buf, offset) {
      options = options || {};
      var rnds = options.random || (options.rng || rng)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

      rnds[6] = rnds[6] & 0x0f | 0x40;
      rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

      if (buf) {
        offset = offset || 0;

        for (var i = 0; i < 16; ++i) {
          buf[offset + i] = rnds[i];
        }

        return buf;
      }

      return stringify(rnds);
    }

    function getCurrentTimeStamp() {
      return Date.now();
    }
    //For handle add and remove event listner
    function on(type, fn, target) {
      var options = {
        capture: true,
        passive: true
      };
      target.addEventListener(type, fn, options);
      return function () {
        return target.removeEventListener(type, fn, options);
      };
    }
    //Generate unique id for every session
    function getUUID() {
      var time = Math.floor(Date.now() / 1000);
      var uuid = v4();
      uuid += "-" + time;
      return uuid;
    }
    function getMappingKey(key) {
      var keyMapping = {
        externalId: "enduser_external_id",
        firstName: "eu_first_name",
        lastName: "eu_last_name",
        email: "eu_email",
        age: "eu_age",
        customerName: "eu_customer_name",
        avatar: "eu_avatar",
        phone: "eu_phone"
      };
      if (key in keyMapping) {
        return keyMapping[key];
      } else {
        return key;
      }
    }
    function isZipyStorageKey(key) {
      var keyMapping = ['zsession-blocked-info', 'session-data', 'zId', 'zenduser-info-temp', 'zenduser-info', 'last-activity-time', 'pack', 'zsdk-config', 'is-api-key-valid', 'zenduser-last-activity-time', 'ztotal-data-sent'];
      if (keyMapping.includes(key)) {
        return true;
      } else {
        return false;
      }
    }
    function convertBlockClassesToRegex(blockClasses) {
      if (blockClasses && typeof blockClasses === 'string') {
        return new RegExp(blockClasses);
      } else if (blockClasses instanceof RegExp) {
        return blockClasses;
      } else {
        return /zipy-block/;
      }
    }

    var domCapture = true;
    var consoleCapture = true;
    var networkCapture = true;
    var stackTraceCapture = true;
    var webSocketsCapture = false;
    var ipCapture = true;
    var inputMasking = true;
    var textMasking = true;
    var paid = false;
    var apiKey = "";
    var streamUrl = "https://collector.zipy.ai";
    var perfUrl = "https://perfcollector.zipy.ai";
    var heatMapUrl = "https://heatmapcollector.zipy.ai";
    var maxBufferSize = 5000000;
    var compression = true;
    var compressionType = "gzip";
    var timeFrequency = 1000;
    var perfTimeFrequency = 5000;
    var clickTimeFrequency = 1000;
    var encodingType = "";
    var sessionTimeout = 1800000;
    var failureRetryCount = 5;
    var bufferSizeFrequency = 1048576;
    var perfBufferSizeFrequency = 1024;
    var clickBufferSizeFrequency = 1024;
    var ignoreUrl = [
    	"google.com",
    	"zipy.ai",
    	"mixpanel",
    	"extreme-ip-lookup.com",
    	"hotjar",
    	"smartlook.com",
    	"newrelic.com",
    	"bugsnag",
    	"fullstory",
    	"sentry.io",
    	"google-analytics.com",
    	"bam.nr-data.net",
    	"wistia.com",
    	"amplitude.com",
    	"segment.io",
    	"pendo.io",
    	"raygun",
    	"smartlook.cloud",
    	"segment.com",
    	"visualstudio.com",
    	"stats.g.doubleclick.net",
    	"pagead2.googlesyndication.com",
    	"r.lr-in.com",
    	"clarity.ms",
    	"appcues.net",
    	"datadoghq.com"
    ];
    var ignoreError$1 = [
    	"rrweb",
    	"zipy",
    	"Script error",
    	"pagead2.googlesyndication.com",
    	"adsbygoogle"
    ];
    var ignoreConsole = [
    	"{}"
    ];
    var isIgnoreUrlError = [
    	"google.com",
    	"zipy.ai",
    	"mixpanel",
    	"extreme-ip-lookup.com",
    	"hotjar",
    	"smartlook.com",
    	"newrelic.com",
    	"bugsnag",
    	"fullstory",
    	"sentry.io",
    	"google-analytics.com",
    	"bam.nr-data.net",
    	"wistia.com",
    	"amplitude.com",
    	"segment.io",
    	"pendo.io",
    	"raygun",
    	"smartlook.cloud",
    	"segment.com",
    	"visualstudio.com",
    	"stats.g.doubleclick.net",
    	"pagead2.googlesyndication.com",
    	"r.lr-in.com",
    	"clarity.ms",
    	"appcues.net",
    	"datadoghq.com"
    ];
    var isIgnoreConsoleError = [
    	"{}"
    ];
    var ip = "";
    var pack = false;
    var blockClasses = "zipy-block";
    var xhrReqPayloadCapture = false;
    var xhrRespPayloadCapture = false;
    var canvasCapture = false;
    var scrubbingKey = [
    	"password",
    	"secret",
    	"passwd",
    	"api_key",
    	"apikey",
    	"access_token",
    	"auth",
    	"credentials",
    	"mysql_pwd",
    	"stripetoken",
    	"cardnumber"
    ];
    var requestCapSize = 1000000;
    var responseCapSize = 1000000;
    var sizeExceededMessage = {
    	message: "size too large",
    	source: "zipy"
    };
    var eventCountCapInSingleChunk = 0;
    var captureCustomZipyLogMessage = false;
    var captureCustomZipyLogError = false;
    var captureCustomZipyLogException = false;
    var startCaptureWithoutUserActivity = false;
    var consoleLogLevel = "3";
    var recordCrossOriginIframes = true;
    var splitSessionSize = 0;
    var capturePerformance = false;
    var captureClickEvents = false;
    var isApiIdentifierEnable = false;
    var apiUniqueIdentifier = [
    ];
    var ignoreUrlErrorCodes = {
    };
    var ignoreUrlCodes = {
    };
    var sessionStitching = false;
    var sdkConfig = {
    	domCapture: domCapture,
    	consoleCapture: consoleCapture,
    	networkCapture: networkCapture,
    	stackTraceCapture: stackTraceCapture,
    	webSocketsCapture: webSocketsCapture,
    	ipCapture: ipCapture,
    	inputMasking: inputMasking,
    	textMasking: textMasking,
    	paid: paid,
    	apiKey: apiKey,
    	streamUrl: streamUrl,
    	perfUrl: perfUrl,
    	heatMapUrl: heatMapUrl,
    	maxBufferSize: maxBufferSize,
    	compression: compression,
    	compressionType: compressionType,
    	timeFrequency: timeFrequency,
    	perfTimeFrequency: perfTimeFrequency,
    	clickTimeFrequency: clickTimeFrequency,
    	encodingType: encodingType,
    	sessionTimeout: sessionTimeout,
    	failureRetryCount: failureRetryCount,
    	bufferSizeFrequency: bufferSizeFrequency,
    	perfBufferSizeFrequency: perfBufferSizeFrequency,
    	clickBufferSizeFrequency: clickBufferSizeFrequency,
    	ignoreUrl: ignoreUrl,
    	ignoreError: ignoreError$1,
    	ignoreConsole: ignoreConsole,
    	isIgnoreUrlError: isIgnoreUrlError,
    	isIgnoreConsoleError: isIgnoreConsoleError,
    	ip: ip,
    	pack: pack,
    	blockClasses: blockClasses,
    	xhrReqPayloadCapture: xhrReqPayloadCapture,
    	xhrRespPayloadCapture: xhrRespPayloadCapture,
    	canvasCapture: canvasCapture,
    	scrubbingKey: scrubbingKey,
    	requestCapSize: requestCapSize,
    	responseCapSize: responseCapSize,
    	sizeExceededMessage: sizeExceededMessage,
    	eventCountCapInSingleChunk: eventCountCapInSingleChunk,
    	captureCustomZipyLogMessage: captureCustomZipyLogMessage,
    	captureCustomZipyLogError: captureCustomZipyLogError,
    	captureCustomZipyLogException: captureCustomZipyLogException,
    	startCaptureWithoutUserActivity: startCaptureWithoutUserActivity,
    	consoleLogLevel: consoleLogLevel,
    	recordCrossOriginIframes: recordCrossOriginIframes,
    	splitSessionSize: splitSessionSize,
    	capturePerformance: capturePerformance,
    	captureClickEvents: captureClickEvents,
    	isApiIdentifierEnable: isApiIdentifierEnable,
    	apiUniqueIdentifier: apiUniqueIdentifier,
    	ignoreUrlErrorCodes: ignoreUrlErrorCodes,
    	ignoreUrlCodes: ignoreUrlCodes,
    	sessionStitching: sessionStitching
    };

    //Take zipy event and wrap it with timestamp

    function _catch$3(body, recover) {
      try {
        var result = body();
      } catch (e) {
        return recover(e);
      }
      if (result && result.then) {
        return result.then(void 0, recover);
      }
      return result;
    } //Get sdk Config data from window storage
    function wrapEvent(e) {
      return _extends({}, e, {
        timestamp: getCurrentTimeStamp()
      });
    }
    function getSdkConfigData() {
      try {
        return window.sdkConfig ? window.sdkConfig : sdkConfig;
      } catch (error$1) {
        error("Failed to parse end user Info data");
        return sdkConfig;
      }
    }
    /**
     * This method return the value for any property from SDK Config
     * @param name
     * @returns {Object}
     */
    function getValueByPropertyNameFromSDKConfig(name) {
      try {
        var _sdkConfig_ = getSdkConfigData();
        if (_sdkConfig_ && _sdkConfig_.hasOwnProperty && _sdkConfig_.hasOwnProperty(name)) {
          return _sdkConfig_[name];
        } else {
          return null;
        }
      } catch (err) {
        error('getValueByPropertyNameFromSDKConfig: Error ' + err && err.message ? JSON.stringify(err) : err);
        return null;
      }
    }
    /**
     * This method will return the unique array elements, and also filter the falsy values (ex: undefined, null, NaN, 0, "", false), also it will remove non string values
     * @param {string} value value to match for uniqueness
     * @param {number} index position of element in the array
     * @param {Array<string>} self array contains the duplicate (or unique) values
     *
     * @returns {Array<string>}
     */
    var onlyUniqueElements = function onlyUniqueElements(value, index, self) {
      return value && value.constructor === String && self.indexOf(value) === index; // only consider string values, match the index values to remove duplicate values, filter the falsy values also (ex: undefined, null, NaN, 0, "", false)
    };
    /**
     * This method will removes the leading and trailing white space and line terminator characters from a string only, for non  string values, it will add falsy values.
     * @param {string} value to trim the value
     * @returns {Array<string>}
     */
    var onlyTrimElements = function onlyTrimElements(value) {
      return value && value.constructor === String && value.trim();
    };
    /**
     * This method will return the regex from classes separated by space
     * @param {string} classes list of classes separated by space
     * @param {string} defaultClass default class to add in regex
     *
     * @returns {RegExp} will return regex expression for list of classes
     */
    var getClassListRegex = function getClassListRegex(classes, defaultClass) {
      classes = classes && classes.length ? "" + classes + (defaultClass ? ',' + defaultClass : '') : defaultClass; // EX: Add zipy-block or zipy-ignore class by default
      classes = classes.split(',').filter(onlyUniqueElements).map(onlyTrimElements).join("|");
      return new RegExp(classes); // EX: new RegExp('zipy-block|loader')
    };
    /**
     * @param  {} headers
     * @returns sanitized headers for fetch
     */
    function sanitizeFetchHeaders(headers) {
      var toBlockHeaders = getHeadersToRemove();
      if (toBlockHeaders.length > 0) {
        toBlockHeaders.forEach(function (header) {
          return delete headers[header];
        });
        return headers;
      }
      return headers;
    }
    /**
     * @param  {} headers
     * @returns boolean
     */
    function isHeaderToBeRemoved(header) {
      var toBlockHeaders = getHeadersToRemove();
      if (toBlockHeaders.length > 0) {
        return toBlockHeaders.indexOf(header) > -1 ? true : false;
      }
      return false;
    }
    /**
     * @returns Array of headers to be sanitized
     */
    function getHeadersToRemove() {
      var headersToSanitize = getValueByPropertyNameFromSDKConfig('headersToSanitize');
      return headersToSanitize && headersToSanitize.length ? headersToSanitize.split(',') : [];
    }
    /**
     * [Description]
     * @param console logs arguments
     * @return console message string
     */
    function hasErrorObjectArgument(input) {
      if (!Array.isArray(input)) {
        return {
          hasErrorObj: false
        };
      }
      for (var _iterator = _createForOfIteratorHelperLoose(input), _step; !(_step = _iterator()).done;) {
        var value = _step.value;
        try {
          // Check for error obj or string
          if (value && typeof value === 'object') {
            var isErrorObj = value.constructor.name.toLowerCase().includes('error') ? true : false;
            if (isErrorObj) {
              return {
                hasErrorObj: true,
                errObj: value
              };
            }
          }
        } catch (e) {
          error("Error in checking error argument. Error is - " + e.message);
        }
      }
      return {
        hasErrorObj: false
      };
    }
    /**
     * [Description]
     * @param console logs arguments
     * @return console message string
     */
    function extractConsoleLogs(input) {
      if (!Array.isArray(input)) {
        return '';
      }
      var output = [];
      for (var _iterator2 = _createForOfIteratorHelperLoose(input), _step2; !(_step2 = _iterator2()).done;) {
        var value = _step2.value;
        try {
          // Check for error obj or string
          if (value && typeof value === 'object') {
            value.constructor.name.toLowerCase().includes('error') ? output.push(String(value)) : output.push(JSON.stringify(value));
          } else {
            output.push(String(value));
          }
        } catch (e) {
          output.push('[console log value cannot be serialized]');
        }
      }
      return output.join(' ');
    }
    /**
     * [Description]
     * @param console logs arguments
     * @return Array of console object
     */
    function extractConsoleObjects(input) {
      if (!Array.isArray(input)) {
        return [];
      }
      var output = [];
      for (var _iterator3 = _createForOfIteratorHelperLoose(input), _step3; !(_step3 = _iterator3()).done;) {
        var value = _step3.value;
        try {
          // Check for error obj or string. Third condition is to check for circular reference. Adding it here as it can cause 
          // issue when we stringify the request to server
          if (value && typeof value === 'object' && JSON.stringify(value)) {
            value.constructor.name.toLowerCase().includes('error') ? output.push({
              message: value.message,
              name: value.name,
              stack: value.stack
            }) : output.push(value);
          } else {
            output.push(String(value));
          }
        } catch (e) {
          output.push('[console log value cannot be serialized]');
        }
      }
      return output;
    }
    var scrubbingKeys = [];
    try {
      scrubbingKeys = getValueByPropertyNameFromSDKConfig('scrubbingKey') || [];
    } catch (err) {
      error('Error in obtaining scrubbing keys');
      scrubbingKeys = sdkConfig.scrubbingKey;
    }
    /**
     * This method will remove unwanted keys from url query params
     * @param url
     * @returns
     */
    function updateQueryStringValueFromRequestUrl(url) {
      try {
        var Url = new URL(url);
        if (url) {
          var params = new URLSearchParams(new URL(url).search);
          params.forEach(function (value, key) {
            if (scrubbingKeys.includes(key.toLowerCase())) {
              params.set(key, value = "xxx");
            }
          });
          Url.search = params.toString();
        }
        return Url.toString();
      } catch (error$1) {
        error('updateQueryStringFromRequestUrl: ERROR WHILE HIDING QUERY PARAM VALUE: ' + error$1);
        return url;
      }
    }
    /**
     * This method will mask the unwanted character
     * @param data
     * @param keys
     * @param count
     * @returns
     */
    function hideNestedKeysValue(data, keys, count) {
      count++;
      try {
        if (data && typeof data === 'object' && count <= 2) {
          Object.keys(data).forEach(function (key) {
            if (scrubbingKeys.includes(key.toLowerCase())) {
              data[key] = "xxx";
            }
            keys.push(key);
            var value = data[key];
            if (typeof value === 'object') {
              hideNestedKeysValue(value, keys, count);
            }
          });
        }
      } catch (error$1) {
        error("error while hiding the sensitive information: " + error$1);
      }
      return JSON.stringify(data);
    }
    /**
     * Extracts the value of an identifiable key
     * @date 29/06/2023 - 14:08:10
     *
     * @param {*} data
     * @param {*} key
     * @returns {*}
     */
    function extractAPIIdentifierValue(payload, key) {
      try {
        var data = JSON.parse(payload);
        if (data && typeof data === 'object') {
          var apiRequestKeys = Object.keys(data);
          for (var _i = 0, _apiRequestKeys = apiRequestKeys; _i < _apiRequestKeys.length; _i++) {
            var apiRequestKey = _apiRequestKeys[_i];
            if (apiRequestKey === key) {
              // return the value of the key. If the value is object then value would be object- 
              var valueOfApi = typeof data[apiRequestKey] === 'string' ? data[apiRequestKey] : '';
              return valueOfApi;
            }
          }
        }
      } catch (error$1) {
        error("error while parsing api payload: " + error$1);
      }
      return '';
    }
    /**
     * This method will Sanitize the Request/Response Payload
     * @param xhrData
     * @param count
     * @param contentLength
     * @returns
     */
    function handleRequestResponsePayloadCapturing(xhrData, count, contentLength, isRequest) {
      var payload = isRequest ? xhrData.request : xhrData.response;
      var isRecordingEnabled = isRequest ? getValueByPropertyNameFromSDKConfig('xhrReqPayloadCapture') : getValueByPropertyNameFromSDKConfig('xhrRespPayloadCapture');
      /**
       * This method reassign the payload in request or response based on isRequest param
       * @param sanitizedPayload
       */
      var resetPayload = function resetPayload(sanitizedPayload) {
        try {
          if (isRequest) {
            xhrData.request = sanitizedPayload;
            if (xhrData.request != "") {
              xhrData.requestByteSize = contentLength;
            }
          } else {
            xhrData.response = sanitizedPayload;
            if (xhrData.response != "") {
              xhrData.responseByteSize = contentLength;
            }
          }
        } catch (error$1) {
          error("error while converting xhr data to string" + error$1);
        }
      };
      var assigner = function assigner() {
        try {
          // string data parse to remove the nested keys, if error, capture request as it's not parsable using JSON.parse
          resetPayload(hideNestedKeysValue(JSON.parse(payload), [], count));
        } catch (error) {
          var hasSensitiveInfo = scrubbingKeys.some(function (v) {
            return payload.indexOf(v) >= 0;
          });
          if (isRequest) {
            payload = hasSensitiveInfo ? 'No request payload captured for this request as you may have some sensitive information in the payload.' : payload;
          } else {
            payload = hasSensitiveInfo ? 'No response captured for this request as you may have some sensitive information in the payload.' : payload;
          }
          resetPayload(payload);
        }
      };
      if (isRecordingEnabled) {
        var responseCapSize = getValueByPropertyNameFromSDKConfig('responseCapSize') || 1000000;
        var requestCapSize = getValueByPropertyNameFromSDKConfig('requestCapSize') || 1000000;
        var payloadCapSize = isRequest ? requestCapSize : responseCapSize;
        var sizeExceededMessage = getValueByPropertyNameFromSDKConfig('sizeExceededMessage');
        if (typeof payload === 'string' && payload.length > 0) {
          contentLength = contentLength || payload.length;
          if (contentLength <= payloadCapSize) {
            assigner(); // Note: Assign the response by trimming the unwanted data if json else assign directly
          } else if (contentLength > 0) {
            // Validation to check if we have enough content
            resetPayload(JSON.stringify(sizeExceededMessage));
          }
        } else if (typeof payload === 'object') {
          // NOTE: When we stringify the object, the actual object length gets reduced because of formatting cleanup is done by stringify (ex: remove extra spaces and new lines, we are using 4 char space to manage that)
          contentLength = contentLength || JSON.stringify(payload, null, 4).length;
          if (contentLength <= payloadCapSize) {
            resetPayload(hideNestedKeysValue(payload, [], count));
          } else if (contentLength > 0) {
            // Validation to check if we have enough content
            resetPayload(sizeExceededMessage);
          }
        } else {
          // If it's not string and object but it has length
          if (payload && payload.length > 0) {
            contentLength = contentLength || payload.length;
            if (contentLength <= payloadCapSize) {
              resetPayload(hideNestedKeysValue(payload, [], count));
            } else if (contentLength > 0) {
              // Validation to check if we have enough content
              resetPayload(JSON.stringify(sizeExceededMessage));
            }
          }
        }
      } else {
        // Note: Reset payload to empty string if capturing is disabled
        if (isRequest) {
          xhrData.request = '';
        } else {
          xhrData.response = '';
        }
      }
      return xhrData;
    }
    function ignoreError(data) {
      if (!data) {
        return false;
      }
      var capturedData = data.toLowerCase();
      var ignoredError = getValueByPropertyNameFromSDKConfig('ignoreError') || [];
      try {
        if (ignoredError.some(function (substring) {
          return capturedData.includes(substring.toLowerCase());
        })) {
          debug("Ignoring error for data: " + data);
          return true;
        }
      } catch (error$1) {
        error("Error in ignore errors. Error - " + error$1.message);
      }
      return false;
    }
    function isIframe() {
      try {
        return window.self !== window.top;
      } catch (e) {
        return true;
      }
    }
    /**
     * This method will inform if the iframe is cross-domain or not.
     * @param iframe
     * @returns {boolean}
     */
    function canAccessIFrame(iframe) {
      var html = null;
      try {
        var _iframe$window, _iframe$window$top, _doc$body;
        // try to access the iframe content
        var doc = iframe == null ? void 0 : (_iframe$window = iframe.window) == null ? void 0 : (_iframe$window$top = _iframe$window.top) == null ? void 0 : _iframe$window$top.document;
        html = doc == null ? void 0 : (_doc$body = doc.body) == null ? void 0 : _doc$body.innerHTML;
      } catch (err) {
        // do nothing
        debug('iframe is cross-domain');
      }
      return html !== null;
    }
    function isZipyInitializedInParentWindowForSameOrigin() {
      try {
        var winObj = window.top.window;
        if (winObj.zipy) {
          debug("Zipy is present in parent");
          return true;
        } else {
          debug("Zipy is not present in parent");
          return false;
        }
      } catch (e) {
        error("Error in is same origin method. Error - " + (e ? e.message : e));
        return false;
      }
    }
    /**
     * This method checks if the response is json or not.
     * @param response
     */
    var getResponse = function getResponse(response) {
      try {
        return Promise.resolve(new Promise(function (resolve, reject) {
          try {
            var _temp2 = function _temp2(_result) {
              if (_exit) return _result;
              resolve(result);
            };
            var _exit;
            var result = '';
            var _temp = _catch$3(function () {
              var _response$constructor;
              // Safe check, if any wrong method tries to call this method, and response is not valid, it will throw error
              if (!response || (response == null ? void 0 : (_response$constructor = response.constructor) == null ? void 0 : _response$constructor.name) !== 'Response') {
                // We can throw error, but we have not received any error from actual fetch call so resolving as success using resolve(result).
                throw new Error("No valid Response object to process!");
              }
              ;
              // Check if json is valid!
              return Promise.resolve(response == null ? void 0 : response.text()).then(function (_response$text) {
                result = _response$text;
                if (result && result.length) {
                  result = JSON.parse(result);
                }
              });
            }, function (error$1) {
              error("Error while getting json of response: " + error$1.message);
            });
            return Promise.resolve(_temp && _temp.then ? _temp.then(_temp2) : _temp2(_temp));
          } catch (e) {
            return Promise.reject(e);
          }
        }));
      } catch (e) {
        return Promise.reject(e);
      }
    };
    //Get eventType according to error basis
    function getErrorEventType(message, defaultType) {
      if (message && message != undefined) {
        try {
          var data = "";
          if (typeof message != "string") {
            data = JSON.stringify(message);
          } else {
            data = message;
          }
          for (var type = zipyEventTypes.RangeError; type <= zipyEventTypes.EvalError; type++) {
            if (data.search(zipyEventTypes[type]) != -1) {
              return type;
            }
          }
        } catch (error$1) {
          error(error$1);
        }
      }
      return defaultType;
    }
    /**
     * This method get type of a perf event.
     * @param initiatorType
     */
    function getEventTypeForPerfStaticAssets(initiatorType) {
      switch (initiatorType) {
        case "link":
          return zipyEventTypes.Link;
        case "css":
          return zipyEventTypes.Link;
        case "img":
        case "image":
          return zipyEventTypes.Image;
        case "script":
          return zipyEventTypes.Js;
        case "fetch":
        case "beacon":
        case "xmlhttprequest":
          return zipyEventTypes.XHR;
        case "other":
          return zipyEventTypes.OtherNetworkCall;
        // case "navigation":
        //     return types.zipyEventTypes.PerfNavigation;        
        default:
          return 0;
      }
    }
    var performanceInitiatorType = ['img', 'script', 'css', 'link', 'image', 'script'];
    //Check if event is mix panel event and google analytics event then ignore them
    // To add - Also need to ignore file write stream request
    function ignoreReq(url, statusCode, isError) {
      try {
        var isIgnoreUrlError = getValueByPropertyNameFromSDKConfig('isIgnoreUrlError');
        var ignoreUrl = getValueByPropertyNameFromSDKConfig('ignoreUrl');
        var ignoreUrlErrorCode = getValueByPropertyNameFromSDKConfig('ignoreUrlErrorCodes');
        var ignoreUrlCode = getValueByPropertyNameFromSDKConfig('ignoreUrlCodes');
        var ignoredReq;
        var statusCodes = {};
        if (isError) {
          ignoredReq = isIgnoreUrlError;
          statusCodes = ignoreUrlErrorCode || {};
        } else {
          ignoredReq = ignoreUrl;
          statusCodes = ignoreUrlCode || {};
        }
        var index = url.indexOf("?");
        if (index > 0) {
          url = url.substr(0, index);
        }
        var isUrlStatusCodeMatch = function isUrlStatusCodeMatch(url) {
          return statusCodes.hasOwnProperty(url) ? statusCodes[url].includes(statusCode) : true;
        };
        var isUrlMatch = function isUrlMatch(currentUrl, ignoredUrl) {
          return currentUrl.includes(ignoredUrl.toLowerCase()) ? isUrlStatusCodeMatch(ignoredUrl) : false;
        };
        var capturedUrl = url.toLowerCase();
        var capturedUrl_masked = maskNumericValues(url.toLowerCase());
        if (ignoredReq.some(function (ignoredUrl) {
          return ignoredUrl.includes("{id}") ? isUrlMatch(capturedUrl_masked, ignoredUrl) : isUrlMatch(capturedUrl, ignoredUrl);
        })) {
          return true;
        }
      } catch (error$1) {
        error("Error in url decoding for url : " + url + " Error is - " + error$1);
      }
      return false;
    }
    /**
     * Populates performance data object.
     * @date 01/06/2023 - 10:36:12
     *
     * @export
     * @param {*} entry
     * @returns {{ initiatorType: any; nextHopProtocol: any; workerStart: any; redirectStart: any; redirectEnd: any; fetchStart: any; domainLookupStart: any; domainLookupEnd: any; connectStart: any; ... 13 more ...; startTime: any; }}
     */
    function populatePerfDataObject(entry) {
      return {
        initiatorType: entry.initiatorType,
        nextHopProtocol: entry.nextHopProtocol,
        workerStart: entry.workerStart,
        redirectStart: entry.redirectStart,
        redirectEnd: entry.redirectEnd,
        fetchStart: entry.fetchStart,
        domainLookupStart: entry.domainLookupStart,
        domainLookupEnd: entry.domainLookupEnd,
        connectStart: entry.connectStart,
        connectEnd: entry.connectEnd,
        secureConnectionStart: entry.secureConnectionStart,
        requestStart: entry.requestStart,
        responseStart: entry.responseStart,
        responseEnd: entry.responseEnd,
        transferSize: entry.transferSize,
        encodedBodySize: entry.encodedBodySize,
        decodedBodySize: entry.decodedBodySize,
        responseStatus: entry.responseStatus,
        renderBlockingStatus: entry.renderBlockingStatus,
        duration: entry.duration,
        entryType: entry.entryType,
        name: entry.name,
        startTime: entry.startTime
      };
    }
    /**
     * Mask all numeric values of the url with `{id}`
     *
     * @param url
     * @returns
     */
    function maskNumericValues(url) {
      try {
        var regex = /\/\d+\//g;
        var matches = url.match(regex);
        if (matches) {
          for (var _iterator4 = _createForOfIteratorHelperLoose(matches), _step4; !(_step4 = _iterator4()).done;) {
            var element = _step4.value;
            var numericValue = element;
            url = url.replace(numericValue, "/{id}/");
          }
        }
      } catch (error$1) {
        error("Error while masking numeric value.");
      }
      return url;
    }
    /**
     * Check for URL if domain is missing in the xhrURL or fetch URL
     * @date 21/06/2023 - 13:54:25
     *
     * @export
     * @param {string} perfUrl
     * @param {string} xhrUrl
     * @returns {boolean}
     */
    function compareSameDomainUrl(xhrUrl, perfUrl) {
      if (!(xhrUrl.indexOf('http://') > -1) && !(xhrUrl.indexOf('https://') > -1)) {
        var perfUrlWithoutDomain = new URL(perfUrl);
        return perfUrlWithoutDomain.pathname === xhrUrl;
      }
      return false;
    }
    /**
     * This method will get the request URL for fetch calls
     * @param resource
     * @returns
     */
    function getUrlFromResource(resource) {
      if (typeof resource === 'string') {
        return resource;
      }
      if (!resource) {
        return '';
      }
      if (resource instanceof URL) {
        return resource.href;
      }
      if (resource instanceof Request) {
        return resource.url;
      }
      return '';
    }
    /**
     * This method return the type of device user is using
     * @returns {DeviceType}
     */
    function getDeviceType() {
      var userAgent = window.navigator.userAgent;
      if (/Mobi|Android/i.test(userAgent)) {
        // It's a mobile device
        return 'Mobile';
      } else if (/Tablet|iPad/i.test(userAgent)) {
        // It's a tablet
        return 'Tablet';
      } else {
        // It's a desktop or laptop
        return 'Web';
      }
    }

    //Capture static Navigation data
    function captureNavigation(wrappedEmit) {
      var oldUrl = location.href;
      var navigationData = {
        navigatedUrl: window.location.href
      };
      wrappedEmit(wrapEvent({
        eventType: zipyEventTypes.NAVIGATION,
        data: navigationData,
        isError: false
      }));
      var defaultState = window.history.pushState;
      var defaultReplaceState = window.history.replaceState;
      window.history.pushState = function () {
        defaultState.apply(window.history, arguments);
        window.dispatchEvent(new Event('pushstate'));
        window.dispatchEvent(new Event('locationchange'));
      };
      window.history.replaceState = function () {
        defaultReplaceState.apply(window.history, arguments);
        window.dispatchEvent(new Event('replacestate'));
        window.dispatchEvent(new Event('locationchange'));
      };
      function captureNavigationUrl() {
        try {
          var _navigationData = {
            navigatedUrl: window.location.href
          };
          if (oldUrl != _navigationData.navigatedUrl) {
            wrappedEmit(wrapEvent({
              eventType: zipyEventTypes.NAVIGATION,
              data: _navigationData,
              isError: false
            }));
            oldUrl = _navigationData.navigatedUrl;
          }
        } catch (error$1) {
          error("not able to capture the navigation url");
        }
      }
      window.addEventListener('locationchange', captureNavigationUrl, false);
      window.addEventListener('popstate', captureNavigationUrl);
      window.addEventListener('hashchange', captureNavigationUrl);
      return function () {
        history.pushState = defaultState;
        history.replaceState = defaultReplaceState;
        window.removeEventListener('locationchange', captureNavigationUrl);
        window.removeEventListener('popstate', captureNavigationUrl);
        window.removeEventListener('hashchange', captureNavigationUrl);
      };
    }

    //Capture Console Data by override console methods
    //ALERT :: Don't use console logs inside this function else it will be a infinite call
    function captureConsoleData(wrappedEmit) {
      //Identify if console data is coming from zipy
      function isZipyConsoleData(str) {
        var consoleString = "";
        if (typeof str != "string") {
          try {
            consoleString = JSON.stringify(str);
          } catch (err) {
            //logger.error("Failed to stringify json",err);
          }
        } else {
          consoleString = str;
        }
        try {
          if (consoleString.search(ZIPYLOGIDENTIFIER) != -1 || consoleString.search(RRWEBIDENTIFIER) != -1) {
            return true;
          }
        } catch (error) {
          return true;
        }
        return false;
      }
      //Ignore console data according to ignore config 
      function ignoreConsoleData(data, isError) {
        if (data == undefined) {
          return false;
        }
        var capturedData = data.toLowerCase();
        var ignoredConsole = getSdkConfigData();
        var sdkConfigRegex;
        try {
          if (isError) {
            sdkConfigRegex = ignoredConsole.isIgnoreConsoleError;
          } else {
            sdkConfigRegex = ignoredConsole.ignoreConsole;
          }
        } catch (error$1) {
          error(error$1);
        }
        try {
          if (sdkConfigRegex.some(function (substring) {
            return capturedData.includes(substring.toLowerCase());
          })) {
            return true;
          }
        } catch (error) {
          return false;
        }
        return false;
      }
      //Emit console data
      function sendConsoleEvent(eventType, consoleString) {
        try {
          var consoleData = "";
          consoleData = extractConsoleLogs(Array.from(consoleString));
          var isError = eventType == zipyEventTypes.ConsoleError ? true : false;
          // checks for an error object in console logs argument. May not work as expected if someone has modified the constructor and named it to error
          var checkForErrorObject = isError ? hasErrorObjectArgument(Array.from(consoleString)) : {
            hasErrorObj: false
          };
          //console.log(types.ZIPYLOGIDENTIFIER,"DEBUG:: Console String = "+consoleData );
          if (ignoreConsoleData(consoleData, isError)) {
            //console.log(types.ZIPYLOGIDENTIFIER,"DEBUG :: Going to ignore = "+consoleData );
            return;
          }
          if (isError && checkForErrorObject.hasErrorObj) {
            var errObj = checkForErrorObject.errObj;
            var exceptionData = {
              message: consoleData,
              error: errObj.stack,
              filename: "",
              colno: 0,
              lineno: 0
            };
            wrappedEmit(wrapEvent({
              eventType: getErrorEventType(consoleData, zipyEventTypes.Error),
              data: exceptionData,
              isError: true
            }));
          } else {
            wrappedEmit(wrapEvent({
              eventType: eventType,
              data: {
                arguments: consoleData,
                argumentsObj: extractConsoleObjects(Array.from(consoleString))
              },
              isError: isError
            }));
          }
        } catch (err) {
          error("Error in parsing console log. Error is: " + err.message);
          return;
        }
      }
      try {
        var defaultError;
        var defaultLog;
        var defaultWarn;
        var defaultDebug;
        var consoleLogLevelArray;
        var consoleLogLevel = getSdkConfigData();
        consoleLogLevelArray = consoleLogLevel.consoleLogLevel.split(",");
        //Overriding console error method by monkey patching
        try {
          if (consoleLogLevelArray.includes(consoleLogLevel$1.ERROR)) {
            defaultError = console.error.bind(console);
            console.error = function () {
              //Capture event only if data is not coming from zipy
              if (!isZipyConsoleData(arguments[0])) {
                sendConsoleEvent(zipyEventTypes.ConsoleError, arguments);
              }
              defaultError.apply(console, arguments);
            };
          }
        } catch (err) {
          error("Error in parsing console error. Error is: " + err.message);
        }
        //Overriding console log method by monkey patching
        try {
          if (consoleLogLevelArray.includes(consoleLogLevel$1.LOG)) {
            defaultLog = console.log.bind(console);
            console.log = function () {
              if (!isZipyConsoleData(arguments[0])) {
                sendConsoleEvent(zipyEventTypes.ConsoleInfo, arguments);
              }
              defaultLog.apply(console, arguments);
            };
          }
        } catch (err) {
          error("Error in parsing console log. Error is: " + err.message);
        }
        //Overriding console warning method by monkey patching
        try {
          if (consoleLogLevelArray.includes(consoleLogLevel$1.WARNING)) {
            defaultWarn = console.warn.bind(console);
            console.warn = function () {
              if (!isZipyConsoleData(arguments[0])) {
                sendConsoleEvent(zipyEventTypes.ConsoleWarning, arguments);
              }
              defaultWarn.apply(console, arguments);
            };
          }
        } catch (err) {
          error("Error in parsing console warning. Error is: " + err.message);
        }
        //Overriding console debug method by monkey patching
        try {
          if (consoleLogLevelArray.includes(consoleLogLevel$1.DEBUG)) {
            defaultDebug = console.debug.bind(console);
            console.debug = function () {
              if (!isZipyConsoleData(arguments[0])) {
                sendConsoleEvent(zipyEventTypes.ConsoleDebug, arguments);
              }
              defaultDebug.apply(console, arguments);
            };
          }
        } catch (err) {
          error("Error in parsing console debug. Error is: " + err.message);
        }
        return function () {
          if (defaultError) console.error = defaultError;
          if (defaultLog) console.log = defaultLog;
          if (defaultWarn) console.warn = defaultWarn;
          if (defaultDebug) console.debug = defaultDebug;
        };
      } catch (err) {
        error("Error while getting console log level from sdk config. Error is: " + err.message);
        return function () {};
      }
    }

    //TODO need to change error type in unhandled rejection
    //Wrap js error into breadcrumb when error is given
    function wrapJSErrorIntoBreadcrumb(e, wrappedEmit) {
      // Get the error properties from the error event object
      var message = e.message,
        filename = e.filename,
        lineno = e.lineno,
        colno = e.colno;
      if (ignoreError(message) || ignoreError(filename)) {
        debug("Ignoring error from error callback " + message);
        return;
      }
      // get stack trace if error exists
      if (e.error) {
        var _e$error, _e$error3;
        if (ignoreError((_e$error = e.error) == null ? void 0 : _e$error.stack)) {
          var _e$error2;
          debug("Ignoring error from error callback " + ((_e$error2 = e.error) == null ? void 0 : _e$error2.stack));
          return;
        }
        var error$1 = (_e$error3 = e.error) == null ? void 0 : _e$error3.stack;
        var errorMsg;
        try {
          if (typeof error$1 != "string") {
            errorMsg = JSON.stringify(error$1);
          } else {
            errorMsg = error$1;
          }
        } catch (e) {
          error("Failed to stringfy errorMsg inside error callback with exception" + e);
        }
        var errorData = {
          message: message,
          filename: filename,
          lineno: lineno,
          colno: colno,
          error: errorMsg
        };
        wrappedEmit(wrapEvent({
          eventType: getErrorEventType(message, zipyEventTypes.Error),
          data: errorData,
          isError: true
        }));
      } else {
        if ((message == undefined || message == "") && config.ignoreEmptyErros) {
          //Ignoring empty errors 
          debug("Ignored empty error");
          return;
        }
        var _errorData = {
          message: message,
          filename: filename,
          lineno: lineno,
          colno: colno,
          error: ""
        };
        wrappedEmit(wrapEvent({
          eventType: getErrorEventType(message, zipyEventTypes.Error),
          data: _errorData,
          isError: true
        }));
      }
    }
    //Capturing js errors and exception by adding listner on error and on unhandledrejection
    function captureJSErrors(wrappedEmit) {
      //Adding listner on error
      var handlers = [on("error", function (e) {
        wrapJSErrorIntoBreadcrumb(e, wrappedEmit);
      }, window)];
      //Adding listner on unhandledrejection
      handlers.push(on("unhandledrejection", function (e) {
        // Get the error properties from the error event object
        var event = e;
        var message = "reason" in event ? event == null ? void 0 : event.reason : e;
        var error$1 = event != null && event.reason.stack ? event.reason.stack : e;
        var errorMsg;
        try {
          if (typeof error$1 != "string") {
            errorMsg = JSON.stringify(error$1);
          } else {
            errorMsg = error$1;
          }
        } catch (e) {
          error("Failed to stringfy errorMsg inside unhandledrejection callback with exception" + e);
        }
        var exceptionData = {
          message: "" + message,
          error: errorMsg,
          filename: "",
          colno: 0,
          lineno: 0
        };
        if ((message == undefined || message == "") && (exceptionData.error == "" || exceptionData.error == undefined) && config.ignoreEmptyErros) {
          debug("Ignoring empty errors");
          return;
        }
        var errorStack = "";
        try {
          errorStack = JSON.stringify(exceptionData.error);
        } catch (e) {
          error("Failed to stringfy exception");
        }
        if (ignoreError(exceptionData.message) || ignoreError(errorStack)) {
          debug("Ignoring error from unhandled " + message);
          return;
        }
        wrappedEmit(wrapEvent({
          eventType: getErrorEventType(message, zipyEventTypes.UnhandledRejection),
          data: exceptionData,
          isError: true
        }));
      }, window));
      return function () {
        handlers.forEach(function (h) {
          return h();
        });
      };
    }

    //Capture xhr call data by override xmlHttpRequest and fetch library by monkey patching

    function _catch$2(body, recover) {
      try {
        var result = body();
      } catch (e) {
        return recover(e);
      }
      if (result && result.then) {
        return result.then(void 0, recover);
      }
      return result;
    }
    function captureXhrCalls(wrappedEmit) {
      var count = 0;
      //Emit ajax data
      function sendXHREvent(eventType, xhrData) {
        var networkCapture = getValueByPropertyNameFromSDKConfig('networkCapture');
        if (!networkCapture) {
          return;
        }
        var isError = xhrData.status >= 400 ? true : false;
        if (!window.stopRecording) {
          if (!ignoreReq(xhrData.requestUrl, xhrData.status, isError)) {
            xhrData.requestUrl = updateQueryStringValueFromRequestUrl(xhrData.requestUrl);
            var sdkConfig = getSdkConfigData();
            if (sdkConfig && sdkConfig.isApiIdentifierEnable && sdkConfig.apiUniqueIdentifier.length > 0) {
              // Filter url mapped with the desired URL
              var apiIdentifierDetails = sdkConfig.apiUniqueIdentifier.filter(function (apiDetails) {
                return apiDetails.apiUrl === xhrData.requestUrl;
              });
              if (apiIdentifierDetails.length > 0) {
                xhrData.apiIdentifier = extractAPIIdentifierValue(xhrData.request, apiIdentifierDetails[0].identifierName);
              }
            }
            xhrData = handleRequestResponsePayloadCapturing(xhrData, count, xhrData.requestByteSize || 0, true); // This method will handle request capture part
            xhrData = handleRequestResponsePayloadCapturing(xhrData, count, xhrData.responseByteSize || 0, false); // This method will handle response capture part
            info('Pushing fetch Data when performance is enabled ' + xhrData.requestUrl);
            // Capture XHR/Fetch by merging perf insights.
            window.zFetchTempData.push({
              eventType: eventType,
              data: xhrData,
              isError: xhrData.status >= 400 ? true : false
            });
          }
        }
      }
      //Check if need to ignore response
      function ignoreResponseText(url, method) {
        {
          if (method == "GET" || method == "get") {
            try {
              var str = url.split("/");
              var filename = str[str.length - 1];
              if (filename == "") {
                if (str.length >= 2) filename = str[str.length - 2];
              }
              if (filename.indexOf(".js") != -1 && !filename.indexOf(".json") || filename.indexOf(".map") != -1 || filename.indexOf(".html") != -1 || filename.indexOf(".css") != -1) {
                info("Going to ignore response text for url " + url);
                return true;
              }
            } catch (e) {
              return false;
            }
          }
        }
        return false;
      }
      if (window.zxhrInit != undefined || window.zxhrInit == true) {
        info("Network in already initialized");
        return function () {};
      }
      //let handlers: types.listenerHandler[] = [];
      //Need to overwrite open, send and setRequestHeader to get all request and response data
      var origOpen = window.XMLHttpRequest.prototype.open;
      window.XMLHttpRequest.prototype.open = function () {
        var reqUrl = "";
        if (arguments[1] != undefined && arguments[1] != null) {
          if (typeof arguments[1] === 'string') {
            reqUrl = arguments[1];
          } else if (arguments[1] instanceof URL) {
            reqUrl = arguments[1].href;
          }
        }
        var xhrData = {
          request: "",
          requestMethod: arguments[0] ? arguments[0] : "",
          requestUrl: reqUrl,
          sourceLibrary: "xmlHttpClient",
          headers: {},
          response: "",
          responseHeaders: {},
          status: 400,
          requestStartTime: 0,
          duration: 0,
          requestByteSize: 0,
          responseByteSize: 0
        };
        var responseEnd;
        var responseData;
        //Overwrite send method to capture request
        var sendMethod = this.send;
        this.send = function () {
          xhrData.requestStartTime = Date.now();
          xhrData.request = arguments[0] ? arguments[0] : "";
          xhrData = handleRequestResponsePayloadCapturing(xhrData, 0, 0, true);
          sendMethod.apply(this, arguments);
        };
        //Overwrite setRequestHeader to capture headers
        var headerMethod = this.setRequestHeader;
        this.setRequestHeader = function () {
          if (arguments.length === 2 && !isHeaderToBeRemoved(arguments[0])) {
            xhrData.headers[arguments[0]] = arguments[1];
          }
          headerMethod.apply(this, arguments);
        };
        this.addEventListener("load", function () {
          try {
            var _temp5 = function _temp5() {
              xhrData.status = _this.status;
              xhrData.duration = responseEnd - xhrData.requestStartTime;
              sendXHREvent(zipyEventTypes.XHR, xhrData);
            };
            var _this = this;
            responseEnd = Date.now();
            var _temp4 = function () {
              if (!ignoreResponseText(reqUrl, xhrData.requestMethod)) {
                var _temp3 = _catch$2(function () {
                  function _temp2() {
                    xhrData.responseByteSize = contentLength;
                    xhrData.response = responseData;
                    xhrData = handleRequestResponsePayloadCapturing(xhrData, 0, contentLength, false);
                  }
                  var responseHeaders = _this.getAllResponseHeaders().split("\n");
                  var contentLength = 0;
                  responseHeaders.forEach(function (item) {
                    if (item !== "") {
                      var header = item.split(":");
                      xhrData.responseHeaders[header[0]] = header[1].trim();
                      // Check if contentLength is not set and header is content length
                      if (!contentLength && header[0] && header[0].toLowerCase() == 'content-length') {
                        contentLength = header[1].trim();
                      }
                    }
                  });
                  var _temp = function () {
                    if ((_this == null ? void 0 : _this.responseType) === "blob") {
                      var _this$response;
                      contentLength = contentLength || (_this == null ? void 0 : (_this$response = _this.response) == null ? void 0 : _this$response.size);
                      return Promise.resolve(new Response(_this == null ? void 0 : _this.response).text()).then(function (_Response$text) {
                        responseData = _Response$text;
                      });
                    } else {
                      responseData = _this != null && _this.responseText ? _this.responseText : "";
                      contentLength = contentLength || responseData.length;
                    }
                  }();
                  return _temp && _temp.then ? _temp.then(_temp2) : _temp2(_temp);
                }, function () {
                  debug("Error while capturing response text");
                });
                if (_temp3 && _temp3.then) return _temp3.then(function () {});
              }
            }();
            return Promise.resolve(_temp4 && _temp4.then ? _temp4.then(_temp5) : _temp5(_temp4));
          } catch (e) {
            return Promise.reject(e);
          }
        });
        this.addEventListener("error", function () {
          try {
            responseEnd = Date.now();
            var responseHeaders = this.getAllResponseHeaders().split("\n");
            var contentLength = 0;
            responseHeaders.forEach(function (item) {
              if (item !== "") {
                var header = item.split(":");
                xhrData.responseHeaders[header[0]] = header[1].trim();
                if (!contentLength && header[0] && header[0].toLowerCase() == 'content-length') {
                  contentLength = header[1].trim();
                }
              }
            });
            var responseCapSize = getValueByPropertyNameFromSDKConfig('responseCapSize') || 1000000;
            var sizeExceededMessage = getValueByPropertyNameFromSDKConfig('sizeExceededMessage');
            contentLength = contentLength || (this == null ? void 0 : this.responseText.length);
            if (contentLength && contentLength <= responseCapSize) {
              // Note: on error by default we are capturing the response
              xhrData.response = this != null && this.responseText ? this.responseText : "";
            } else if (contentLength > 0) {
              // Validation to check if we have content
              xhrData.response = sizeExceededMessage;
            }
            xhrData.responseByteSize = contentLength || 0;
          } catch (e) {
            debug("Error while capturing response text");
          }
          xhrData.status = this.status ? this.status : 404;
          sendXHREvent(zipyEventTypes.XHR, xhrData);
        });
        this.addEventListener("abort", function () {
          info('Request got aborted in fetch');
          // Note: Disabling the capturing of errors in case of fetch request getting aborted, till now we were capturing the default status code as 400.
          // try {
          //     responseEnd = Date.now();
          //     let responseHeaders = this.getAllResponseHeaders().split("\n");
          //     let contentLength = 0;
          //     responseHeaders.forEach(item => {
          //         if (item !== "") {
          //             let header = item.split(":")
          //             xhrData.responseHeaders[header[0]] = header[1].trim();
          //             if (!contentLength && header[0] && header[0].toLowerCase() == 'content-length') {
          //                 contentLength = header[1];
          //             }
          //         }
          //     });
          //     responseData = this?.responseText ? this.responseText : "";
          //     contentLength = contentLength || responseData.length;
          //     xhrData.responseByteSize = contentLength;
          //     xhrData.response = responseData;
          //     xhrData = handleRequestResponsePayloadCapturing(xhrData, 0, contentLength, false);
          // } catch (e) {
          //     logger.debug("Error while capturing response text");
          // }
          // xhrData.duration = responseEnd - xhrData.requestStartTime;
          // xhrData.status = this.status ? this.status : 400;
          // sendXHREvent(types.zipyEventTypes.XHR, xhrData);
        });

        origOpen.apply(this, arguments);
      };
      //Need to override fetch call
      var oldfetch = window.fetch;
      window.fetch = function () {
        var reqUrl = "";
        var xhrData = {
          sourceLibrary: "fetch",
          requestUrl: "",
          requestMethod: "",
          headers: "",
          request: "",
          response: "",
          responseHeaders: {},
          status: 400,
          requestStartTime: 0,
          duration: 0,
          requestByteSize: 0,
          responseByteSize: 0
        };
        xhrData.requestStartTime = Date.now();
        if (arguments[0] != undefined && arguments[0] != null) {
          reqUrl = getUrlFromResource(arguments[0]);
        }
        try {
          if (arguments[1] != undefined && arguments[1] != null) {
            var reqData = arguments[1].body;
            if (reqData) xhrData.requestByteSize = JSON.stringify(reqData, null, 4).length;
          }
        } catch (error$1) {
          error("error while capturing data length");
        }
        var sanatizedFetchedHeader;
        try {
          if (arguments[1] && arguments[1].headers) sanatizedFetchedHeader = _extends({}, arguments[1].headers);
        } catch (error$1) {
          error("header is not present in the call");
        }
        xhrData = {
          sourceLibrary: "fetch",
          requestUrl: reqUrl ? reqUrl : "",
          requestMethod: arguments[1] && arguments[1].method ? arguments[1].method : "GET",
          headers: sanatizedFetchedHeader ? sanitizeFetchHeaders(sanatizedFetchedHeader) : "",
          request: arguments[1] && arguments[1].body ? arguments[1].body : "",
          response: "",
          responseHeaders: {},
          status: 400,
          duration: 0,
          requestByteSize: 0,
          responseByteSize: 0,
          requestStartTime: xhrData.requestStartTime
        };
        // Sanitize Request Payload
        xhrData = handleRequestResponsePayloadCapturing(xhrData, 0, 0, true);
        var res = oldfetch.apply(window, arguments);
        return new Promise(function (resolve, reject) {
          var options = {
            status: 400
          };
          var contentLength = 0;
          res.then(function (response) {
            options = {
              status: response.status
            };
            for (var _iterator = _createForOfIteratorHelperLoose(response.headers), _step; !(_step = _iterator()).done;) {
              var header = _step.value;
              if (header) {
                xhrData.responseHeaders[header[0]] = header[1];
                if (!contentLength && header[0] && header[0].toLowerCase() == 'content-length') {
                  contentLength = header[1];
                }
              }
            }
            resolve(response.clone());
            return getResponse(response); // Extract response json, it has handled non json based data to avoid crash;
          }).then(function (json) {
            var responseEnd = Date.now();
            var xhrRespPayloadCapture = getValueByPropertyNameFromSDKConfig('xhrRespPayloadCapture');
            if (!ignoreResponseText(reqUrl, xhrData.requestMethod) && options.status >= 400 || xhrRespPayloadCapture) {
              xhrData.response = json;
              // Sanitize Response Payload
              xhrData = handleRequestResponsePayloadCapturing(xhrData, 0, contentLength, false);
            }
            xhrData.duration = responseEnd - xhrData.requestStartTime;
            xhrData.status = options.status;
            sendXHREvent(zipyEventTypes.XHR, xhrData);
          })["catch"](function (error$1) {
            error("Error in fetch response: " + error$1.message);
            // Note: Disabling the capturing of errors in case of fetch throwing some error, till now we were capturing the default status code as 400.
            // let responseEnd = Date.now();
            // xhrData.status = options.status;
            // xhrData.duration = responseEnd - xhrData.requestStartTime;
            // sendXHREvent(types.zipyEventTypes.XHR, xhrData);
            reject(error$1);
          });
        });
      };
      window.zxhrInit = true;
      // FIXME: Can we remove this commented code?
      // return () => {
      //     try {
      //         handlers.forEach((h) => h());
      //         window.XMLHttpRequest.prototype.open = origOpen;
      //         window.fetch = oldfetch;
      //     } catch (error) {
      //         logger.error(error);
      //     }
      // };
      return function () {};
    }

    // This handler is for capturing custom zipy events. 
    function captureCustomEvents(wrappedEmit) {
      var handlers = [];
      // Listener method for logMessage events
      function logMessage(eventDetails) {
        try {
          var _eventDetails$detail = eventDetails == null ? void 0 : eventDetails.detail,
            message = _eventDetails$detail.message,
            _eventDetails$detail$ = _eventDetails$detail.options,
            options = _eventDetails$detail$ === void 0 ? {} : _eventDetails$detail$;
          debug("Capturing log message for message : " + message + " options: " + JSON.stringify(options));
          if (message && options && options.constructor === Object) {
            wrappedEmit(wrapEvent({
              eventType: zipyEventTypes.ZipyLogMessage,
              data: {
                message: message.length < LOG_MESSAGE_LIMIT ? message : message.substring(0, LOG_MESSAGE_LIMIT),
                options: options
              },
              isError: false
            }));
          } else {
            info("Didn't capture log message for message : " + message + " options: " + JSON.stringify(options));
          }
        } catch (err) {
          error("Error in capturing log message. Error is - " + err.message);
        }
      }
      // Listener method for logException events
      function logException(eventDetails) {
        try {
          var _eventDetails$detail2;
          var _ref = ((_eventDetails$detail2 = eventDetails.detail) == null ? void 0 : _eventDetails$detail2.error) || {},
            message = _ref.message,
            _ref$name = _ref.name,
            name = _ref$name === void 0 ? '' : _ref$name,
            _ref$filename = _ref.filename,
            filename = _ref$filename === void 0 ? '' : _ref$filename,
            _ref$lineno = _ref.lineno,
            lineno = _ref$lineno === void 0 ? 0 : _ref$lineno,
            _ref$colno = _ref.colno,
            colno = _ref$colno === void 0 ? 0 : _ref$colno,
            _ref$cause = _ref.cause,
            cause = _ref$cause === void 0 ? '' : _ref$cause,
            _ref$stack = _ref.stack,
            stack = _ref$stack === void 0 ? '' : _ref$stack;
          cause = cause ? String(cause) : '';
          debug("Capturing exception message for message : " + message + " name: " + name + " stack: " + stack);
          // Check if error is enabled in ignore settings
          if (ignoreError(message) || ignoreError(name)) {
            debug("Ignoring exception logs for message: " + message);
            return;
          }
          if (message) {
            wrappedEmit(wrapEvent({
              eventType: zipyEventTypes.ZipyLogException,
              data: {
                message: message,
                name: name,
                filename: filename,
                lineno: lineno,
                colno: colno,
                cause: cause,
                stack: stack
              },
              isError: true
            }));
          } else {
            info("Didn't capture exception message for message : " + message + " name: " + name);
          }
        } catch (err) {
          error("Error in capturing log message. Error is - " + err.message);
        }
      }
      // Listener method for logError events
      function logError(eventDetails) {
        try {
          var _eventDetails$detail3 = eventDetails == null ? void 0 : eventDetails.detail,
            name = _eventDetails$detail3.name,
            _eventDetails$detail4 = _eventDetails$detail3.message,
            message = _eventDetails$detail4 === void 0 ? '' : _eventDetails$detail4,
            _eventDetails$detail5 = _eventDetails$detail3.category,
            category = _eventDetails$detail5 === void 0 ? "FE" : _eventDetails$detail5,
            _eventDetails$detail6 = _eventDetails$detail3.options,
            options = _eventDetails$detail6 === void 0 ? {} : _eventDetails$detail6;
          debug("Capturing exception message for message : " + message + " name: " + name);
          // Check if error is enabled in ignore settings
          if (ignoreError(message) || ignoreError(name)) {
            debug("Ignoring error logs for message: " + message);
            return;
          }
          // Filter events type based on category passed by the user
          if (message && name && options && options.constructor === Object) {
            wrappedEmit(wrapEvent({
              eventType: category === "NE" ? zipyEventTypes.ZipyLogNetworkError : zipyEventTypes.ZipyLogFrontendError,
              data: {
                message: message.length < LOG_MESSAGE_LIMIT ? message : message.substring(0, LOG_MESSAGE_LIMIT),
                name: name,
                category: category,
                options: options
              },
              isError: true
            }));
          } else {
            info("Didn't capture error message for message : " + message + " name: " + name + " category:" + category + " options: " + JSON.stringify(options));
          }
        } catch (err) {
          error("Error in capturing log message. Error is - " + err.message);
        }
      }
      // Adding listener function based on events types
      handlers.push(on(LOG_EVENT, logMessage, window));
      handlers.push(on(EXCEPTION_EVENT, logException, window));
      handlers.push(on(ERROR_EVENT, logError, window));
      return function () {
        handlers.forEach(function (h) {
          return h();
        });
      };
    }

    //capture network connection
    function captureNetworkConnectionEvents(wrappedEmit) {
      //Adding listner on online
      var handlers = [on('online', function (e) {
        handleConnectionChange(wrappedEmit);
      }, window)];
      // adding listner on offline
      handlers.push(on('offline', function (e) {
        handleConnectionChange(wrappedEmit);
      }, window));
      return function () {
        handlers.forEach(function (h) {
          return h();
        });
      };
    }
    //handle network connection
    function handleConnectionChange(wrappedEmit) {
      var condition = navigator.onLine ? 'online' : 'offline';
      if (condition === 'online') {
        var webPing = setInterval(function () {
          fetch('//google.com', {
            mode: 'no-cors'
          }).then(function () {
            if (window.iszInternetDisconnected) {
              window.iszInternetDisconnected = false;
              var networkData = {
                status: 'Online',
                type: ''
              };
              debug("handleConnectionChange :: send internet connected");
              wrappedEmit(wrapEvent({
                eventType: zipyEventTypes.Online,
                data: networkData,
                isError: false
              }));
            }
            return clearInterval(webPing);
          })["catch"](function () {
            if (!window.iszInternetDisconnected) {
              window.iszInternetDisconnected = true;
              var networkData = {
                status: 'Offline',
                type: ''
              };
              debug("handleConnectionChange :: send internet disconnected");
              wrappedEmit(wrapEvent({
                eventType: zipyEventTypes.Offline,
                data: networkData,
                isError: false
              }));
            }
          });
        }, 5000); //keep it 5 seconds
        return;
      }
      if (!window.iszInternetDisconnected) {
        window.iszInternetDisconnected = true;
        var networkData = {
          status: 'Offline',
          type: ''
        };
        debug("handleConnectionChange :: send internet disconnected");
        return wrappedEmit(wrapEvent({
          eventType: zipyEventTypes.Offline,
          data: networkData,
          isError: false
        }));
      }
    }
    // function ignoreError(data:string): boolean{
    //     try{
    //         if (
    //             data.search("zipy") != -1 ||
    //             data.search("rrweb") != -1
    //         ){
    //             return true;
    //         }
    //     } catch(error){
    //         logger.error(error);
    //     }
    //     return false;
    // }
    /**
     * Capturing initial perf data when page is loaded.
     * @date 01/06/2023 - 10:38:54
     *
     * @export
     * @param {*} wrappedEmit
     * @returns {types.listenerHandler}
     */
    function captureInitialPerfEvents(wrappedEmit) {
      var capture_resource = performance.getEntriesByType("resource").filter(function (res) {
        return performanceInitiatorType.indexOf(res.initiatorType) > -1;
      });
      debug("Inside initial perf event function. Size of data is - " + capture_resource.length);
      for (var _iterator = _createForOfIteratorHelperLoose(capture_resource), _step; !(_step = _iterator()).done;) {
        var element = _step.value;
        var isError = element.responseStatus >= 400 ? true : false;
        if (!ignoreReq(element.name, element.responseStatus, isError)) {
          var perfData = populatePerfDataObject(element);
          wrappedEmit(wrapEvent({
            eventType: zipyEventTypes.Performance,
            data: _extends({}, perfData, {
              method: 'GET'
            }),
            isError: (perfData == null ? void 0 : perfData.responseStatus) >= 400 ? true : false
          }));
        }
      }
      return function () {};
    }
    // // capture resource url
    // export function captureNetworkRequest(wrappedEmit): types.listenerHandler {
    //     //Adding listener on error
    //     let handlers = [
    //         utils.on(
    //             "load",
    //             function (e) {
    //                 wrapResourcesToBreadCrumb(e, wrappedEmit);
    //             },
    //             window
    //         ),
    //     ];
    //     handlers.push(utils.on(
    //         "click",
    //         function (e) {
    //             wrapResourcesToBreadCrumb(e, wrappedEmit);
    //         },
    //         window
    //     ))
    //     return () => {
    //         handlers.forEach((h) => h());
    //     };
    // }

    //capture websocket request
    function captureWebSocketRequest(wrappedEmit) {
      log("Inside captureWebSocketRequest");
      function sendWebSocketEvent(eventType, wsData) {
        if (!window.stopRecording) {
          wrappedEmit(wrapEvent({
            eventType: eventType,
            data: wsData,
            isError: eventType == zipyEventTypes.WSERROR ? true : false
          }));
        }
      }
      function onmessage(event) {
        log('onmessage: ');
        var wsMessageResponseData = {
          data: event.data,
          type: event.type,
          wsTimestamp: event.timeStamp
        };
        var wsMessageData = {
          requestUrl: this.url ? this.url : "",
          responseData: {},
          status: "",
          protocols: this.protocol,
          extension: typeof this.extensions === "string" ? [this.extensions] : this.extensions,
          readyState: this.readyState,
          timestamp: Date.now(),
          wsMsgType: WSMsgType.MESSAGERECEIVED
        };
        wsMessageData.responseData = wsMessageResponseData;
        sendWebSocketEvent(zipyEventTypes.WSMESSAGE, wsMessageData);
      }
      function onclose(event) {
        log('onclose: ');
        var i = window._websockets.indexOf(this.ws);
        if (i > -1) {
          window._websockets.splice(i, 1);
        }
        var wsCloseData = {
          requestUrl: this.url ? this.url : "",
          responseData: {},
          status: "",
          protocols: this.protocol,
          extension: typeof this.extensions === "string" ? [this.extensions] : this.extensions,
          readyState: this.readyState,
          timestamp: Date.now(),
          wsMsgType: WSMsgType.SOCKETCLOSE
        };
        var wsCloseResponseData = {
          code: event.code,
          reason: event.reason,
          type: event.type,
          wsTimestamp: event.timeStamp
        };
        wsCloseData.responseData = wsCloseResponseData;
        sendWebSocketEvent(zipyEventTypes.WSCLOSE, wsCloseData);
      }
      function onopen(event) {
        log('onopen: ');
        var wsOpenData = {
          requestUrl: this.url ? this.url : "",
          responseData: {},
          status: "",
          protocols: this.protocol,
          extension: typeof this.extensions === "string" ? [this.extensions] : this.extensions,
          readyState: this.readyState,
          timestamp: Date.now(),
          wsMsgType: WSMsgType.SOCKETERROR
        };
        sendWebSocketEvent(zipyEventTypes.WSOPEN, wsOpenData);
      }
      function onerror(event) {
        log('onerror: ');
        var wsErrorData = {
          requestUrl: this.url ? this.url : "",
          responseData: {},
          status: "",
          protocols: this.protocol,
          extension: typeof this.extensions === "string" ? [this.extensions] : this.extensions,
          readyState: this.readyState,
          timestamp: Date.now(),
          wsMsgType: WSMsgType.SOCKETERROR
        };
        var wsErrorResponseData = {
          code: event.code,
          reason: event.reason,
          type: event.type,
          wsTimestamp: event.timeStamp
        };
        wsErrorData.responseData = wsErrorResponseData;
        sendWebSocketEvent(zipyEventTypes.WSERROR, wsErrorData);
      }
      function onsend(ws) {
        // Intercept send
        var origWsSend = ws.send;
        ws.send = function (data) {
          log("onsend");
          var wsData = {
            requestUrl: this.url ? this.url : "",
            status: "",
            protocols: this.protocol,
            extension: typeof this.extensions === "string" ? [this.extensions] : this.extensions,
            readyState: this.readyState,
            requestData: arguments[0] ? arguments[0] : "",
            timestamp: Date.now(),
            wsMsgType: WSMsgType.MESSAGESEND
          };
          origWsSend.apply(this, [data]);
          sendWebSocketEvent(zipyEventTypes.WSMESSAGE, wsData);
        };
      }
      log("Going to call WebSocket connection");
      var WebSocketProxy = new Proxy(window.WebSocket, {
        construct: function construct(target, args) {
          log("WebSocket connection");
          var ws = _construct(target, args);
          /**
           * Event Handlers
           */
          var handlers = {
            onmessage: onmessage,
            onclose: onclose,
            onopen: onopen,
            onerror: onerror
          };
          var originalSend = ws.send;
          ws.zRecordStatus = 'initiated';
          /**
           * This method will help to start the recording
           */
          function start() {
            if (ws.zRecordStatus !== "started") {
              //override send also
              onsend(ws);
              ws.addEventListener("message", handlers.onmessage);
              ws.addEventListener("open", handlers.onopen);
              ws.addEventListener("error", handlers.onerror);
              ws.addEventListener("close", handlers.onclose);
              ws.zRecordStatus = 'started';
            }
          }
          /**
           * This method will help to stop the recording
           */
          function stop() {
            //remove send overide
            if (ws.zRecordStatus !== "stopped") {
              ws.send = originalSend;
              ws.removeEventListener("message", handlers.onmessage);
              ws.removeEventListener("open", handlers.onopen);
              ws.removeEventListener("error", handlers.onerror);
              ws.removeEventListener("close", handlers.onclose);
              ws.zRecordStatus = 'stopped';
            }
          }
          // Custom methods to start and stop recording as per need
          ws.zRecordStart = start;
          ws.zRecordStop = stop;
          // Save reference
          window._websockets = window._websockets || [];
          window._websockets.push(ws);
          if (!window.stopRecording) ws.zRecordStart(); // Default always start recording, or we can check customer config from SDK
          return ws;
        }
      });
      // var origWebSocket = window.WebSocket;
      log("Going to set WebSocket connection");
      window.WebSocket = WebSocketProxy;
    }
    function stopWSRecording() {
      log("Stop recording");
      if (window._websockets && window._websockets.length) {
        for (var i = 0; i < window._websockets.length; i++) {
          if (window._websockets[i] && window._websockets[i].zRecordStop && typeof window._websockets[i].zRecordStop === 'function') {
            window._websockets[i].zRecordStop();
            log('Zipy Recording Status:');
          }
        }
      }
    }
    function startWSRecording() {
      log("Start recording");
      if (window._websockets && window._websockets.length) {
        for (var i = 0; i < window._websockets.length; i++) {
          if (window._websockets[i] && window._websockets[i].zRecordStart && typeof window._websockets[i].zRecordStart === 'function') {
            window._websockets[i].zRecordStart();
            log('Zipy Recording Status:');
          }
        }
      }
    }

    /**
     * Listener on performance entries.
     * @date 01/06/2023 - 10:36:56
     *
     * @export
     * @param {*} wrappedEmit
     * @returns {types.listenerHandler}
     */
    function performanceObserverFilePath(wrappedEmit) {
      if (window.PerformanceObserver && "function" === typeof window.PerformanceObserver) {
        var observer = new PerformanceObserver(function (list) {
          // JS/CSS/Img must go to both path.
          // Fetch will also go to both path.
          // Normal Fetch/ XHR override will also include perf data.
          var entries = list.getEntries();
          info("perf event size is - " + entries.length);
          error("Perf entires");
          error(entries.filter(function (e) {
            return e.initiatorType == 'fetch' || e.initiatorType == 'xmlhttprequest';
          }));
          // Process the captured resource events
          for (var _iterator = _createForOfIteratorHelperLoose(entries), _step; !(_step = _iterator()).done;) {
            var element = _step.value;
            {
              // Merge XHR calls
              try {
                var eventType = getEventTypeForPerfStaticAssets(element.initiatorType);
                if (eventType === zipyEventTypes.XHR && window.zFetchTempData && window.zFetchTempData.length > 0) {
                  var tempData = [].concat(window.zFetchTempData) || [];
                  var _loop = function _loop(j) {
                    var _tempData$j$data, _tempData$j$data2;
                    error('Compare tempData[j].data?.requestUrl {} and entries[i].name', (_tempData$j$data = tempData[j].data) == null ? void 0 : _tempData$j$data.requestUrl, element.name);
                    info("Merging XHR calls");
                    var xhrUrl = ((_tempData$j$data2 = tempData[j].data) == null ? void 0 : _tempData$j$data2.requestUrl) || '';
                    var perfUrl = element.name || '';
                    if (perfUrl && xhrUrl && decodeURIComponent(xhrUrl) === decodeURIComponent(perfUrl) || compareSameDomainUrl(xhrUrl, perfUrl)) {
                      var _tempData$j$data3, _tempData$j$data4, _tempData$j$data5, _tempData$j$data6;
                      info("INSIDE :: Compare xhrUrl " + xhrUrl + " and perfURL " + perfUrl);
                      var perfData = populatePerfDataObject(element);
                      perfData.responseStatus = element.responseStatus ? element.responseStatus : (_tempData$j$data3 = tempData[j].data) == null ? void 0 : _tempData$j$data3.status;
                      perfData.transferSize = element.transferSize ? element.transferSize : (_tempData$j$data4 = tempData[j].data) == null ? void 0 : _tempData$j$data4.responseByteSize;
                      perfData.apiIdentifier = ((_tempData$j$data5 = tempData[j].data) == null ? void 0 : _tempData$j$data5.apiIdentifier) || '';
                      // check if url doesn't have domain name, send perf url instead
                      if (!(xhrUrl.indexOf('http://') > -1) && !(xhrUrl.indexOf('https://') > -1)) {
                        tempData[j].data.requestUrl = perfUrl;
                      }
                      var mergedData = _extends({}, tempData[j].data, perfData);
                      tempData[j] = _extends({}, tempData[j], {
                        data: mergedData
                      });
                      info("Merged XHR calls is " + tempData[j]);
                      wrappedEmit(wrapEvent({
                        eventType: zipyEventTypes.Performance,
                        data: _extends({}, perfData, {
                          method: (_tempData$j$data6 = tempData[j].data) == null ? void 0 : _tempData$j$data6.requestMethod
                        }),
                        isError: perfData.responseStatus >= 400 ? true : false
                      }));
                      wrappedEmit(wrapEvent(tempData[j]));
                      info("Old temp XHR data calls length " + window.zFetchTempData.length);
                      window.zFetchTempData = window.zFetchTempData.filter(function (_element, index) {
                        return index != j;
                      });
                      info("New temp XHR data calls length " + window.zFetchTempData.length);
                      return "break";
                    }
                  };
                  for (var j = 0; j < tempData.length; j++) {
                    var _ret = _loop(j);
                    if (_ret === "break") break;
                  }
                } else if (eventType && eventType != zipyEventTypes.XHR) {
                  var perfData = populatePerfDataObject(element);
                  var isError = perfData.responseStatus >= 400 ? true : false;
                  if (!ignoreReq(element.name, element.responseStatus, isError)) {
                    wrappedEmit(wrapEvent({
                      eventType: zipyEventTypes.Performance,
                      data: _extends({}, perfData, {
                        method: 'GET'
                      }),
                      isError: isError
                    }));
                  }
                } else {
                  error("XHR request but zFetchTempData is empty. API: " + element.name + ", Event type: " + eventType + ". Initiator type - " + element.initiatorType);
                }
              } catch (err) {
                error("Error in capturing perf data. Error is - " + err.message);
              }
            }
          }
        });
        // Observe resource-related events
        observer.observe({
          entryTypes: ["resource"]
        });
        // Stop observing resource on unload
        return function () {
          return observer.disconnect();
        };
      } else {
        return function () {};
      }
    }

    /*
    Capture Console Data by override console methods
    Capture Browser Information and IP information
    Capture JS Errors and exception info
    Capture Ajax Call data by overide xmlHttpRequest and fetch
     */
    var wrappedEmit;
    //Recording browser, console and other information
    //Expection emit function callback to emit event
    function zipyEventRecord(options) {
      if (options === void 0) {
        options = {};
      }
      var _options = options,
        emit = _options.emit;
      if (!emit) {
        error("emit function is required to record data from zipy-event-recorder");
        return function () {};
      }
      wrappedEmit = function wrappedEmit(e) {
        emit(e);
      };
      try {
        var handlers = [];
        //Going to capture data for zipy-event-recorder
        handlers.push(captureNavigation(wrappedEmit));
        var sdkConfig = getSdkConfigData();
        info("In zipy-event-record " + JSON.stringify(sdkConfig));
        //Record ip only if ipCapture is allowed
        if (sdkConfig.consoleCapture) handlers.push(captureConsoleData(wrappedEmit));
        if (sdkConfig.stackTraceCapture) handlers.push(captureJSErrors(wrappedEmit));
        // Network Recording Start
        if (sdkConfig.networkCapture) {
          handlers.push(captureXhrCalls(wrappedEmit));
          handlers.push(captureNetworkConnectionEvents(wrappedEmit));
          // handlers.push(captureNetworkRequest(wrappedEmit));
        }
        // add listener methods for zipy custom events
        handlers.push(captureCustomEvents(wrappedEmit));
        handlers.push(performanceObserverFilePath(wrappedEmit));
        handlers.push(captureInitialPerfEvents(wrappedEmit));
        if (sdkConfig.webSocketsCapture) {
          log("Going to init websockets", window.sdkInit);
          if (!window.sdkInit) captureWebSocketRequest(wrappedEmit);else startWSRecording();
        }
        //handlers.push(captureBrowserInformation(wrappedEmit));
        return function () {
          handlers.forEach(function (h) {
            return h();
          });
          stopWSRecording();
        };
      } catch (error$1) {
        error(error$1);
        return function () {};
      }
    }

    var zLocalStorageMap = new Map();
    /*
    This function is writter to get the values from localStorage.
    If the value is not present in localStorage ,it fetch the value from zLocalStorageMap and
    update the data present in localStorage with the values present in zLocalStorageMap
    */
    function zLocalStorageGetItem(key) {
      try {
        var val = window.localStorage.getItem(key);
        if (!val) {
          val = zLocalStorageMap.get(key);
          info("fetched value from hashmap :" + val);
          if (val) {
            info("Going to update local storage:");
            localStorageUpdate();
            return val;
          }
        }
        return val;
      } catch (e) {
        error("inside zLocalStorageGetItem catch block ${e.message}");
        return undefined;
      }
    }
    /*
    This function is writter to set or update the values in  both localStorage and zLocalStorageMap
    */
    function zLocalStorageSetItem(key, value) {
      try {
        info("inside zLocalStorageSetItem for key :" + key + " and value :" + value);
        zLocalStorageMap.set(key, value);
        window.localStorage.setItem(key, value);
      } catch (e) {
        error("inside zLocalStorageSetItem catch block ${e.message}");
      }
    }
    /*
    This function is writter to remove  the values in  both localStorage and zLocalStorageMap
    */
    function zLocalStorageRemoveItem(key) {
      try {
        info("inside zLocalStorageRemoveItem for key :" + key);
        zLocalStorageMap["delete"](key);
        window.localStorage.removeItem(key);
      } catch (e) {
        error("inside zLocalStorageSetItem catch block ${e.message}");
      }
    }
    /*
    This function is the helper function of zLocalStorageGetItem().
    It updates the value in localStorage with the values present in zLocalStorgeMap
    */
    function localStorageUpdate() {
      try {
        info("inside localStorageUpdate function");
        for (var _iterator = _createForOfIteratorHelperLoose(zLocalStorageMap.entries()), _step; !(_step = _iterator()).done;) {
          var entry = _step.value;
          zLocalStorageSetItem(entry[0], entry[1]);
        }
      } catch (e) {
        error("inside updateLocalStorage catch block ${e.message}");
      }
    }
    /*
    This function  will update the zLocalStorageMap with the values present in localStorage.
    */
    function zLocalStorgeMapUpdate() {
      try {
        var keys = Object.keys(localStorage);
        for (var i = 0; i < keys.length; i++) {
          if (isZipyStorageKey(keys[i])) {
            zLocalStorageMap.set(keys[i], localStorage.getItem(keys[i]));
            info("updated value in map is :" + zLocalStorageMap.get(keys[i]));
          }
        }
      } catch (e) {
        error("inside zLocalStorgeMapUpdate catch block ${e.message}");
      }
    }

    //Fetch sdk config data from storage and return it 
    function getSdkConfigDataForStorage() {
      var sdkConfigData = zLocalStorageGetItem("zsdk-config");
      if (!sdkConfigData) {
        return undefined;
      }
      try {
        return JSON.parse(sdkConfigData);
      } catch (e) {
        error("Failed to parse sdk Config Data");
        return undefined;
      }
    }
    function setSdkConfigDataIntoStorage(sdkConfig) {
      if (sdkConfig) {
        try {
          var _sdkConfig$blockClass;
          info("Updating zsdk-config" + JSON.stringify(sdkConfig));
          // Modify block classes regex to string-
          sdkConfig.blockClasses = (_sdkConfig$blockClass = sdkConfig.blockClasses) == null ? void 0 : _sdkConfig$blockClass.source;
          zLocalStorageSetItem("zsdk-config", JSON.stringify(sdkConfig));
        } catch (e) {
          error("Failed to stringify zsdk-config ");
        }
      }
    }
    function setSessionBlockedInfoDataIntoStorage(sessionBlockInfo) {
      if (sessionBlockInfo) {
        try {
          info("Updating zsession-blocked-info" + JSON.stringify(sessionBlockInfo));
          zLocalStorageSetItem("zsession-blocked-info", JSON.stringify(sessionBlockInfo));
        } catch (e) {
          error("Failed to stringify zsession-blocked-info ");
        }
      }
    }
    function resetSessionBlockedInfoDataIntoStorage(sdkKey) {
      var sessionBlockInfo = {
        isBlocked: false,
        blockedEndTime: 0,
        apiKey: sdkKey
      };
      try {
        window.zSessionBlockedInfo = sessionBlockInfo;
        info("Updating zsession-blocked-info" + JSON.stringify(sessionBlockInfo));
        zLocalStorageSetItem("zsession-blocked-info", JSON.stringify(sessionBlockInfo));
      } catch (e) {
        error("Failed to stringify zsession-blocked-info ");
      }
    }
    //Fetch Session Blocked Info from storage and return it 
    function getSessionBlockedInfoDataForStorage() {
      var sessionBlockInfo = zLocalStorageGetItem("zsession-blocked-info");
      if (!sessionBlockInfo) {
        return undefined;
      }
      try {
        var sessionBlockInfoJson = JSON.parse(sessionBlockInfo);
        window.zSessionBlockedInfo = sessionBlockInfoJson;
        return sessionBlockInfoJson;
      } catch (e) {
        error("Failed to parse zsession-blocked-info");
        return undefined;
      }
    }

    //POST enduser data  on server 

    function _catch$1(body, recover) {
      try {
        var result = body();
      } catch (e) {
        return recover(e);
      }
      if (result && result.then) {
        return result.then(void 0, recover);
      }
      return result;
    }
    var postDataOnServer = function postDataOnServer(streamUrl, failureRetryCount, params, request, options) {
      if (failureRetryCount === void 0) {
        failureRetryCount = 5;
      }
      if (options === void 0) {
        options = {};
      }
      try {
        return Promise.resolve(_catch$1(function () {
          var url = new URL(streamUrl);
          if (params != null) Object.keys(params).forEach(function (key) {
            return url.searchParams.append(key, params[key]);
          });
          return Promise.resolve(fetch(url.href, {
            method: "POST",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(request)
          })).then(function (response) {
            if (response.ok) {
              // if HTTP-status is 200-299
              debug("postDataOnServer :: Response status = " + response.status);
              return Promise.resolve(response.json()).then(function (responseJson) {
                debug("postDataOnServer :: Response JSON = " + responseJson);
                return responseJson;
              });
            } else if (response.status == NOT_FOUND) {
              zLocalStorageSetItem("is-api-key-valid", "false");
              setIsApiKeyValid(false);
              return false;
            } else {
              debug("Error :: Response status = " + response.status);
              if (failureRetryCount > 0) {
                return postDataOnServer(streamUrl, failureRetryCount - 1, params, request, options);
              } else {
                error("Not able to post enduser config after multiple retries");
                return false;
              }
            }
          });
        }, function (error$1) {
          error("Not able to get response from server with ERROR: " + error$1);
          return false;
        }));
      } catch (e) {
        return Promise.reject(e);
      }
    };
    var sendClickData = function sendClickData(clickUrl, clickData, failureRetryCount) {
      try {
        return Promise.resolve(_catch$1(function () {
          return Promise.resolve(fetch(clickUrl, {
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
              'Content-Encoding': 'gzip'
            },
            body: JSON.stringify(clickData)
          })).then(function (response) {
            if (response.ok) {
              // if HTTP-status is 200-299
              debug("Response status = " + response.status);
              return true;
            } else {
              debug("Error :: Response status = " + response.status);
              if (failureRetryCount > 0) {
                return sendClickData(clickUrl, clickData, failureRetryCount - 1);
              } else {
                error("Not able to send data after all retries");
                return false;
              }
            }
          });
        }, function (error$1) {
          error("Not able to get response from server with ERROR: " + error$1);
          return false;
        }));
      } catch (e) {
        return Promise.reject(e);
      }
    };
    var sendPerfData = function sendPerfData(perfUrl, perfJson, failureRetryCount) {
      try {
        return Promise.resolve(_catch$1(function () {
          return Promise.resolve(fetch(perfUrl, {
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
              'Content-Encoding': 'gzip'
            },
            body: JSON.stringify(perfJson)
          })).then(function (response) {
            if (response.ok) {
              // if HTTP-status is 200-299
              debug("Response status = " + response.status);
              return true;
            } else {
              debug("Error :: Response status = " + response.status);
              if (failureRetryCount > 0) {
                return sendPerfData(perfUrl, perfJson, failureRetryCount - 1);
              } else {
                error("Not able to send data after all retries");
                return false;
              }
            }
          });
        }, function (error$1) {
          error("Not able to get response from server with ERROR: " + error$1);
          return false;
        }));
      } catch (e) {
        return Promise.reject(e);
      }
    };
    //POST stream data on server 
    var sendData = function sendData(_ref) {
      var divolteUrl = _ref.divolteUrl,
        divolteJson = _ref.divolteJson,
        failureRetryCount = _ref.failureRetryCount;
      try {
        return Promise.resolve(_catch$1(function () {
          var requestData = JSON.stringify(divolteJson);
          return Promise.resolve(fetch(divolteUrl, {
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
              'Content-Encoding': 'gzip'
            },
            body: requestData
          })).then(function (response) {
            // This method is to check how much data has been sent to the server. Splitting files on BE will work on this logic.
            if (getSdkConfigData() && getSdkConfigData().splitSessionSize > 0) {
              var encoder = new TextEncoder();
              var requestDataSize = encoder.encode(requestData).byteLength;
              // Get captured method length -
              log("Request size " + requestDataSize);
              // Capture Full SS and a new Event -
              checkIfSizeOfDataSentExceeded(requestDataSize);
            }
            if (response.ok) {
              // if HTTP-status is 200-299
              debug("Response status = " + response.status);
              return true;
            } else {
              debug("Error :: Response status = " + response.status);
              if (failureRetryCount > 0) {
                return sendData({
                  divolteUrl: divolteUrl,
                  divolteJson: divolteJson,
                  failureRetryCount: failureRetryCount - 1
                });
              } else {
                error("Not able to send data after all retries");
                return false;
              }
            }
          });
        }, function (error$1) {
          error("Not able to get response from server with ERROR: " + error$1);
          return false;
        }));
      } catch (e) {
        return Promise.reject(e);
      }
    };
    var isApiKeyValid = true;
    function getIsApiKeyValid() {
      return isApiKeyValid;
    }
    function setIsApiKeyValid(flag) {
      isApiKeyValid = flag;
    }

    //Fetch session data from storage and return it 
    function getSessionData() {
      var sessionData = zLocalStorageGetItem("session-data");
      if (!sessionData) {
        return undefined;
      }
      try {
        return JSON.parse(sessionData);
      } catch (e) {
        error("Failed to parse session data");
        return undefined;
      }
    }
    //Check session is expired or not on the basis to last activity time 
    function isSessionExpired(sdkConfig) {
      if (window.iszSessionExpired) {
        debug("Session is already expired");
        return true;
      }
      var sessionData = getSessionData() || {};
      var sessionId = sessionData.sessionId;
      var lastActivityTime = Number(zLocalStorageGetItem("last-activity-time"));
      if (!sessionId || lastActivityTime + sdkConfig.sessionTimeout <= Date.now()) {
        info("Session is expired");
        window.iszSessionExpired = true;
        return true;
      }
      //ZC-595:if user is inactive and there is some mutation in page ,then we should check user activity also
      if (!isZendUserActive(sdkConfig)) {
        return true;
      }
      return false;
    }
    //Check is user is active or not
    function isZendUserActive(sdkConfig) {
      var zuserLastActivityTime = getZendUserActivityTime();
      if (zuserLastActivityTime) {
        if (zuserLastActivityTime + sdkConfig.sessionTimeout <= Date.now()) {
          return false;
        }
      } else {
        return false;
      }
      return true;
    }
    function getZendUserActivityTime() {
      try {
        var zuserLastActivityTime = window.zenduserLastActivityTime;
        if (!zuserLastActivityTime) {
          zuserLastActivityTime = zLocalStorageGetItem("zenduser-last-activity-time");
          if (zuserLastActivityTime) {
            zuserLastActivityTime = Number(zuserLastActivityTime);
          } else {
            return 0;
          }
        }
        return zuserLastActivityTime;
      } catch (_unused) {
        error("inside getZendUserActivityTime catch block");
        return 0;
      }
    }
    //create function to set pack
    function getPack() {
      var pack = zLocalStorageGetItem("pack");
      if (!pack) {
        var sdkConfig = getSdkConfigData();
        pack = sdkConfig.pack ? sdkConfig.pack.toString() : false.toString();
        zLocalStorageSetItem("pack", pack);
        //return pack;
      }

      return pack === "true";
    }
    function clearSessionRelatedData(sdkKey) {
      //reset pack info for new session
      zLocalStorageRemoveItem("pack");
      resetSessionBlockedInfoDataIntoStorage(sdkKey);
    }
    //Create session data and store data into local storage
    function createSessionData(sdkKey) {
      var zId = zLocalStorageGetItem("zId");
      if (!zId) {
        zId = getUUID();
        zLocalStorageSetItem("zId", zId);
      }
      var sessionId = getUUID();
      var divolteSession = "0:" + getUUID().replace('-', ":");
      clearSessionRelatedData(sdkKey);
      zLocalStorageRemoveItem("pack");
      var sessionData = {
        sessionId: sessionId,
        dSession: divolteSession,
        isNewSession: true,
        sdkKey: sdkKey,
        isActive: false
      };
      zLocalStorageSetItem("is-api-key-valid", "true");
      setIsApiKeyValid(true);
      try {
        info("Created new Session" + JSON.stringify(sessionData));
        zLocalStorageSetItem("session-data", JSON.stringify(sessionData));
        zLocalStorageSetItem("last-activity-time", Date.now().toString()); //In millis
        window.iszSessionExpired = false;
      } catch (e) {
        error("Failed to stringify  session data");
      }
    }
    function isSessionActive() {
      var sessionData = getSessionData() || {};
      if ("isActive" in sessionData) {
        return sessionData.isActive;
      }
      return true;
    }
    function setSessionAsActive() {
      var sessionData = getSessionData();
      if (!sessionData) return false;
      try {
        info("Setting session as active" + JSON.stringify(sessionData));
        sessionData["isActive"] = true;
        zLocalStorageSetItem("session-data", JSON.stringify(sessionData));
        return true;
      } catch (e) {
        error("Failed to stringify  session data");
        return false;
      }
    }
    function isSdkKeyChanged(sdkKey) {
      var sessionData = getSessionData();
      if (!sessionData) return false;
      var storedSdkKey = sessionData == null ? void 0 : sessionData.sdkKey;
      if (sdkKey === storedSdkKey) return false;
      info("Sdk key is chnaged going to create session data");
      return true;
    }

    /**
     * Check and create zipy Id if not exist
     * @returns zipy Id
     */
    function createZipyIdIfNotExists() {
      var zId = zLocalStorageGetItem("zId");
      if (!zId) {
        zId = getUUID();
        zLocalStorageSetItem("zId", zId);
        return zId;
      }
      return zId;
    }
    /**
     * Fetch endUser Info from localStorage
     * @returns enduser info data
     */
    function getzEndUserDetails() {
      var endUserInfoData = zLocalStorageGetItem("zenduser-info");
      if (!endUserInfoData) {
        return undefined;
      }
      try {
        return JSON.parse(endUserInfoData);
      } catch (e) {
        error("Failed to parse end user Info data");
        return undefined;
      }
    }
    /**
     * Fetch temp endUser Info from localStorage
     * @returns enduser info data
     */
    function getTempZEndUserDetails() {
      var endUserInfoData = zLocalStorageGetItem("zenduser-info-temp");
      if (!endUserInfoData) {
        return undefined;
      }
      try {
        return JSON.parse(endUserInfoData);
      } catch (e) {
        error("Failed to parse end user Info data");
        return undefined;
      }
    }
    /**
     * Create if enduser-info doesn't exists
     * Update if enuser-info already exists in storage
     * @param userInfo
     */
    function createAndUpdateEndUserInfo(userInfo) {
      createZipyIdIfNotExists();
      var zEndUserInfo = getzEndUserDetails();
      if (!zEndUserInfo) {
        info("Creating new enduser-info" + JSON.stringify(userInfo));
      }
      try {
        info("Updating enduser-info" + JSON.stringify(userInfo));
        zLocalStorageSetItem("zenduser-info", JSON.stringify(userInfo));
      } catch (e) {
        error("Failed to stringify  enduser-info ");
      }
    }
    function createAndUpdateEndUserInfoTemp(userInfo) {
      createZipyIdIfNotExists();
      var zEndUserInfo = getzEndUserDetails();
      if (!zEndUserInfo) {
        info("Creating new enduser-info-temp" + JSON.stringify(userInfo));
      }
      try {
        info("Updating enduser-info-temp" + JSON.stringify(userInfo));
        zLocalStorageSetItem("zenduser-info-temp", JSON.stringify(userInfo));
      } catch (e) {
        error("Failed to stringify  enduser-info-temp ");
      }
    }
    /**
     * Remove enduser-info from localStorage
     */
    function removeEndUserInfo() {
      var zEndUserInfo = getzEndUserDetails();
      if (!zEndUserInfo) {
        info("zenduser Data dosen't exists");
      } else {
        info("Removing enduser-info");
        zLocalStorageRemoveItem("zenduser-info");
      }
    }
    /**
     * Remove enduser-info-temp from localStorage
     */
    function removeTempEndUserInfo() {
      var zEndUserInfo = getTempZEndUserDetails();
      if (!zEndUserInfo) {
        info("zenduser temp Data dosen't exists");
      } else {
        info("Removing zenduser-info-temp");
        zLocalStorageRemoveItem("zenduser-info-temp");
      }
    }
    /**
     * Check if stored user is identified user or unidentified user
     * @returns true if user is identified else false
     */
    function isIdentifiedUserExistInStorage() {
      var zEndUserInfo = getzEndUserDetails();
      if (!zEndUserInfo) {
        info("zenduser-info doesn't exists");
        return false;
      }
      if (zEndUserInfo.userType === UserType.IDENTIFIED) {
        return true;
      }
      return false;
    }
    /**
     * Check if stored user is identified user or unidentified user in temp storage
     * @returns true if user is identified else false
     */
    function isIdentifiedUserExistInTempStorage() {
      var zEndUserInfo = getTempZEndUserDetails();
      if (!zEndUserInfo) {
        info("zenduser-info doesn't exists");
        return false;
      }
      if (zEndUserInfo.userType === UserType.IDENTIFIED) {
        return true;
      }
      return false;
    }
    /**
     * Remove Anonyms user from enduser info and update default values
     * @param zEndUserInfo
     * @param zId
     */
    function removeAnonymsUser(zEndUserInfo, zId) {
      zEndUserInfo.euId = 0;
      zEndUserInfo.euZName = "";
      zEndUserInfo.isBlocked = false;
      zEndUserInfo.zAnonymsUserInfo = {
        euId: 0,
        euZName: "",
        zId: zId != undefined ? zId : ""
      };
    }
    function assignAnonymsUser(zEndUserInfo, isTempStorage) {
      var _zEndUserInfo$zAnonym;
      var zId = createZipyIdIfNotExists();
      if ((zEndUserInfo == null ? void 0 : (_zEndUserInfo$zAnonym = zEndUserInfo.zAnonymsUserInfo) == null ? void 0 : _zEndUserInfo$zAnonym.zId) === zId) {
        info("ZId match");
        zEndUserInfo.euId = zEndUserInfo.zAnonymsUserInfo.euId;
        zEndUserInfo.euZName = zEndUserInfo.zAnonymsUserInfo.euZName;
      } else {
        var _zEndUserInfo$zAnonym2;
        info("ZId dosen't match Zid : " + zId + " and Anonyms user Zid: " + (zEndUserInfo == null ? void 0 : (_zEndUserInfo$zAnonym2 = zEndUserInfo.zAnonymsUserInfo) == null ? void 0 : _zEndUserInfo$zAnonym2.zId));
        removeAnonymsUser(zEndUserInfo, zId);
      }
      if (isTempStorage) createAndUpdateEndUserInfoTemp(zEndUserInfo);else createAndUpdateEndUserInfo(zEndUserInfo);
    }
    /**
     * Remove external User info from local storage end user info
     * Assign anonyms user if exists
     */
    function removeExternalUserInfoAndAssignAnonymsUser() {
      var zEndUserInfo = getzEndUserDetails();
      if (!zEndUserInfo) {
        info("zenduser Data dosen't exists");
        return removeExternalUserInfoAndAssignAnonymsUserInTempStorage();
      } else {
        zEndUserInfo.zExternalUserInfo = {};
        zEndUserInfo.userType = UserType.ANONYMS;
        assignAnonymsUser(zEndUserInfo, false);
      }
      return zEndUserInfo;
    }
    /**
     * Remove external User info from local storage end user info
     * Assign anonyms user if exists
     */
    function removeExternalUserInfoAndAssignAnonymsUserInTempStorage() {
      var zEndUserInfo = getTempZEndUserDetails();
      if (!zEndUserInfo) {
        info("zenduser Data dosen't exists in temp storage");
        return undefined;
      } else {
        zEndUserInfo.zExternalUserInfo = {};
        zEndUserInfo.userType = UserType.ANONYMS;
        assignAnonymsUser(zEndUserInfo, true);
      }
      return zEndUserInfo;
    }
    /**
     * Check if Enduser details need to post on stream manager
     */
    function checkIfEndUserInfoFetchRequired() {
      var zEndUserInfoTemp = getTempZEndUserDetails();
      if (zEndUserInfoTemp) {
        info("Temp storage has some pending data to post");
        return true;
      }
      var zEndUserInfo = getzEndUserDetails();
      if (!zEndUserInfo) {
        info("zenduser Data dosen't exists");
        return true;
      }
      //If euId has default value
      if (zEndUserInfo.euId === 0) {
        info("Euid value is 0, required to fetch data again");
        return true;
      }
      //Check for zID is still same or not
      if (zEndUserInfo.userType === UserType.ANONYMS) {
        var _zEndUserInfo$zExtern, _zEndUserInfo$zAnonym3;
        var externalUserId = zEndUserInfo == null ? void 0 : (_zEndUserInfo$zExtern = zEndUserInfo.zExternalUserInfo) == null ? void 0 : _zEndUserInfo$zExtern.externalId;
        //Check if external User details exists then need to post
        if (externalUserId) {
          info("External User details exists, and userType is ANONYMS need to post data");
          return true;
        }
        var zId = createZipyIdIfNotExists();
        if (((_zEndUserInfo$zAnonym3 = zEndUserInfo.zAnonymsUserInfo) == null ? void 0 : _zEndUserInfo$zAnonym3.zId) === zId) {
          info("ZId match No need to update for anonyms user");
        } else {
          info("ZId dosen't match Zid : " + zId + " and Anonyms user Zid: " + zEndUserInfo.zAnonymsUserInfo.zId);
          removeAnonymsUser(zEndUserInfo, zId);
          createAndUpdateEndUserInfo(zEndUserInfo);
          return true;
        }
      }
      return false;
    }
    /**
     * Compare stored end user info with new enduser info
     * @param prevEndUserInfo
     * @param newEndUserInfo
     */
    function isExternalUserAlreadyExists(prevEndUserInfo, newEndUserInfo) {
      info("NewEndUserInfo :: " + JSON.stringify(newEndUserInfo));
      info("PrevEndUserInfo :: " + JSON.stringify(prevEndUserInfo));
      if ((prevEndUserInfo == null ? void 0 : prevEndUserInfo.externalId) !== (newEndUserInfo == null ? void 0 : newEndUserInfo.externalId)) return false;
      return true;
    }

    // DEFLATE is a complex format; to read this code, you should probably check the RFC first:

    // aliases for shorter compressed code (most minifers don't do this)
    var u8 = Uint8Array, u16 = Uint16Array, u32 = Uint32Array;
    // fixed length extra bits
    var fleb = new u8([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, /* unused */ 0, 0, /* impossible */ 0]);
    // fixed distance extra bits
    // see fleb note
    var fdeb = new u8([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, /* unused */ 0, 0]);
    // code length index map
    var clim = new u8([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
    // get base, reverse index map from extra bits
    var freb = function (eb, start) {
        var b = new u16(31);
        for (var i = 0; i < 31; ++i) {
            b[i] = start += 1 << eb[i - 1];
        }
        // numbers here are at max 18 bits
        var r = new u32(b[30]);
        for (var i = 1; i < 30; ++i) {
            for (var j = b[i]; j < b[i + 1]; ++j) {
                r[j] = ((j - b[i]) << 5) | i;
            }
        }
        return [b, r];
    };
    var _a = freb(fleb, 2), fl = _a[0], revfl = _a[1];
    // we can ignore the fact that the other numbers are wrong; they never happen anyway
    fl[28] = 258, revfl[258] = 28;
    var _b = freb(fdeb, 0), revfd = _b[1];
    // map of value to reverse (assuming 16 bits)
    var rev = new u16(32768);
    for (var i = 0; i < 32768; ++i) {
        // reverse table algorithm from SO
        var x = ((i & 0xAAAA) >>> 1) | ((i & 0x5555) << 1);
        x = ((x & 0xCCCC) >>> 2) | ((x & 0x3333) << 2);
        x = ((x & 0xF0F0) >>> 4) | ((x & 0x0F0F) << 4);
        rev[i] = (((x & 0xFF00) >>> 8) | ((x & 0x00FF) << 8)) >>> 1;
    }
    // create huffman tree from u8 "map": index -> code length for code index
    // mb (max bits) must be at most 15
    // TODO: optimize/split up?
    var hMap = (function (cd, mb, r) {
        var s = cd.length;
        // index
        var i = 0;
        // u16 "map": index -> # of codes with bit length = index
        var l = new u16(mb);
        // length of cd must be 288 (total # of codes)
        for (; i < s; ++i)
            ++l[cd[i] - 1];
        // u16 "map": index -> minimum code for bit length = index
        var le = new u16(mb);
        for (i = 0; i < mb; ++i) {
            le[i] = (le[i - 1] + l[i - 1]) << 1;
        }
        var co;
        if (r) {
            // u16 "map": index -> number of actual bits, symbol for code
            co = new u16(1 << mb);
            // bits to remove for reverser
            var rvb = 15 - mb;
            for (i = 0; i < s; ++i) {
                // ignore 0 lengths
                if (cd[i]) {
                    // num encoding both symbol and bits read
                    var sv = (i << 4) | cd[i];
                    // free bits
                    var r_1 = mb - cd[i];
                    // start value
                    var v = le[cd[i] - 1]++ << r_1;
                    // m is end value
                    for (var m = v | ((1 << r_1) - 1); v <= m; ++v) {
                        // every 16 bit value starting with the code yields the same result
                        co[rev[v] >>> rvb] = sv;
                    }
                }
            }
        }
        else {
            co = new u16(s);
            for (i = 0; i < s; ++i)
                co[i] = rev[le[cd[i] - 1]++] >>> (15 - cd[i]);
        }
        return co;
    });
    // fixed length tree
    var flt = new u8(288);
    for (var i = 0; i < 144; ++i)
        flt[i] = 8;
    for (var i = 144; i < 256; ++i)
        flt[i] = 9;
    for (var i = 256; i < 280; ++i)
        flt[i] = 7;
    for (var i = 280; i < 288; ++i)
        flt[i] = 8;
    // fixed distance tree
    var fdt = new u8(32);
    for (var i = 0; i < 32; ++i)
        fdt[i] = 5;
    // fixed length map
    var flm = /*#__PURE__*/ hMap(flt, 9, 0);
    // fixed distance map
    var fdm = /*#__PURE__*/ hMap(fdt, 5, 0);
    // get end of byte
    var shft = function (p) { return ((p / 8) >> 0) + (p & 7 && 1); };
    // typed array slice - allows garbage collector to free original reference,
    // while being more compatible than .slice
    var slc = function (v, s, e) {
        if (s == null || s < 0)
            s = 0;
        if (e == null || e > v.length)
            e = v.length;
        // can't use .constructor in case user-supplied
        var n = new (v instanceof u16 ? u16 : v instanceof u32 ? u32 : u8)(e - s);
        n.set(v.subarray(s, e));
        return n;
    };
    // starting at p, write the minimum number of bits that can hold v to d
    var wbits = function (d, p, v) {
        v <<= p & 7;
        var o = (p / 8) >> 0;
        d[o] |= v;
        d[o + 1] |= v >>> 8;
    };
    // starting at p, write the minimum number of bits (>8) that can hold v to d
    var wbits16 = function (d, p, v) {
        v <<= p & 7;
        var o = (p / 8) >> 0;
        d[o] |= v;
        d[o + 1] |= v >>> 8;
        d[o + 2] |= v >>> 16;
    };
    // creates code lengths from a frequency table
    var hTree = function (d, mb) {
        // Need extra info to make a tree
        var t = [];
        for (var i = 0; i < d.length; ++i) {
            if (d[i])
                t.push({ s: i, f: d[i] });
        }
        var s = t.length;
        var t2 = t.slice();
        if (!s)
            return [new u8(0), 0];
        if (s == 1) {
            var v = new u8(t[0].s + 1);
            v[t[0].s] = 1;
            return [v, 1];
        }
        t.sort(function (a, b) { return a.f - b.f; });
        // after i2 reaches last ind, will be stopped
        // freq must be greater than largest possible number of symbols
        t.push({ s: -1, f: 25001 });
        var l = t[0], r = t[1], i0 = 0, i1 = 1, i2 = 2;
        t[0] = { s: -1, f: l.f + r.f, l: l, r: r };
        // efficient algorithm from UZIP.js
        // i0 is lookbehind, i2 is lookahead - after processing two low-freq
        // symbols that combined have high freq, will start processing i2 (high-freq,
        // non-composite) symbols instead
        // see https://reddit.com/r/photopea/comments/ikekht/uzipjs_questions/
        while (i1 != s - 1) {
            l = t[t[i0].f < t[i2].f ? i0++ : i2++];
            r = t[i0 != i1 && t[i0].f < t[i2].f ? i0++ : i2++];
            t[i1++] = { s: -1, f: l.f + r.f, l: l, r: r };
        }
        var maxSym = t2[0].s;
        for (var i = 1; i < s; ++i) {
            if (t2[i].s > maxSym)
                maxSym = t2[i].s;
        }
        // code lengths
        var tr = new u16(maxSym + 1);
        // max bits in tree
        var mbt = ln(t[i1 - 1], tr, 0);
        if (mbt > mb) {
            // more algorithms from UZIP.js
            // TODO: find out how this code works (debt)
            //  ind    debt
            var i = 0, dt = 0;
            //    left            cost
            var lft = mbt - mb, cst = 1 << lft;
            t2.sort(function (a, b) { return tr[b.s] - tr[a.s] || a.f - b.f; });
            for (; i < s; ++i) {
                var i2_1 = t2[i].s;
                if (tr[i2_1] > mb) {
                    dt += cst - (1 << (mbt - tr[i2_1]));
                    tr[i2_1] = mb;
                }
                else
                    break;
            }
            dt >>>= lft;
            while (dt > 0) {
                var i2_2 = t2[i].s;
                if (tr[i2_2] < mb)
                    dt -= 1 << (mb - tr[i2_2]++ - 1);
                else
                    ++i;
            }
            for (; i >= 0 && dt; --i) {
                var i2_3 = t2[i].s;
                if (tr[i2_3] == mb) {
                    --tr[i2_3];
                    ++dt;
                }
            }
            mbt = mb;
        }
        return [new u8(tr), mbt];
    };
    // get the max length and assign length codes
    var ln = function (n, l, d) {
        return n.s == -1
            ? Math.max(ln(n.l, l, d + 1), ln(n.r, l, d + 1))
            : (l[n.s] = d);
    };
    // length codes generation
    var lc = function (c) {
        var s = c.length;
        // Note that the semicolon was intentional
        while (s && !c[--s])
            ;
        var cl = new u16(++s);
        //  ind      num         streak
        var cli = 0, cln = c[0], cls = 1;
        var w = function (v) { cl[cli++] = v; };
        for (var i = 1; i <= s; ++i) {
            if (c[i] == cln && i != s)
                ++cls;
            else {
                if (!cln && cls > 2) {
                    for (; cls > 138; cls -= 138)
                        w(32754);
                    if (cls > 2) {
                        w(cls > 10 ? ((cls - 11) << 5) | 28690 : ((cls - 3) << 5) | 12305);
                        cls = 0;
                    }
                }
                else if (cls > 3) {
                    w(cln), --cls;
                    for (; cls > 6; cls -= 6)
                        w(8304);
                    if (cls > 2)
                        w(((cls - 3) << 5) | 8208), cls = 0;
                }
                while (cls--)
                    w(cln);
                cls = 1;
                cln = c[i];
            }
        }
        return [cl.subarray(0, cli), s];
    };
    // calculate the length of output from tree, code lengths
    var clen = function (cf, cl) {
        var l = 0;
        for (var i = 0; i < cl.length; ++i)
            l += cf[i] * cl[i];
        return l;
    };
    // writes a fixed block
    // returns the new bit pos
    var wfblk = function (out, pos, dat) {
        // no need to write 00 as type: TypedArray defaults to 0
        var s = dat.length;
        var o = shft(pos + 2);
        out[o] = s & 255;
        out[o + 1] = s >>> 8;
        out[o + 2] = out[o] ^ 255;
        out[o + 3] = out[o + 1] ^ 255;
        for (var i = 0; i < s; ++i)
            out[o + i + 4] = dat[i];
        return (o + 4 + s) * 8;
    };
    // writes a block
    var wblk = function (dat, out, final, syms, lf, df, eb, li, bs, bl, p) {
        wbits(out, p++, final);
        ++lf[256];
        var _a = hTree(lf, 15), dlt = _a[0], mlb = _a[1];
        var _b = hTree(df, 15), ddt = _b[0], mdb = _b[1];
        var _c = lc(dlt), lclt = _c[0], nlc = _c[1];
        var _d = lc(ddt), lcdt = _d[0], ndc = _d[1];
        var lcfreq = new u16(19);
        for (var i = 0; i < lclt.length; ++i)
            lcfreq[lclt[i] & 31]++;
        for (var i = 0; i < lcdt.length; ++i)
            lcfreq[lcdt[i] & 31]++;
        var _e = hTree(lcfreq, 7), lct = _e[0], mlcb = _e[1];
        var nlcc = 19;
        for (; nlcc > 4 && !lct[clim[nlcc - 1]]; --nlcc)
            ;
        var flen = (bl + 5) << 3;
        var ftlen = clen(lf, flt) + clen(df, fdt) + eb;
        var dtlen = clen(lf, dlt) + clen(df, ddt) + eb + 14 + 3 * nlcc + clen(lcfreq, lct) + (2 * lcfreq[16] + 3 * lcfreq[17] + 7 * lcfreq[18]);
        if (flen <= ftlen && flen <= dtlen)
            return wfblk(out, p, dat.subarray(bs, bs + bl));
        var lm, ll, dm, dl;
        wbits(out, p, 1 + (dtlen < ftlen)), p += 2;
        if (dtlen < ftlen) {
            lm = hMap(dlt, mlb, 0), ll = dlt, dm = hMap(ddt, mdb, 0), dl = ddt;
            var llm = hMap(lct, mlcb, 0);
            wbits(out, p, nlc - 257);
            wbits(out, p + 5, ndc - 1);
            wbits(out, p + 10, nlcc - 4);
            p += 14;
            for (var i = 0; i < nlcc; ++i)
                wbits(out, p + 3 * i, lct[clim[i]]);
            p += 3 * nlcc;
            var lcts = [lclt, lcdt];
            for (var it = 0; it < 2; ++it) {
                var clct = lcts[it];
                for (var i = 0; i < clct.length; ++i) {
                    var len = clct[i] & 31;
                    wbits(out, p, llm[len]), p += lct[len];
                    if (len > 15)
                        wbits(out, p, (clct[i] >>> 5) & 127), p += clct[i] >>> 12;
                }
            }
        }
        else {
            lm = flm, ll = flt, dm = fdm, dl = fdt;
        }
        for (var i = 0; i < li; ++i) {
            if (syms[i] > 255) {
                var len = (syms[i] >>> 18) & 31;
                wbits16(out, p, lm[len + 257]), p += ll[len + 257];
                if (len > 7)
                    wbits(out, p, (syms[i] >>> 23) & 31), p += fleb[len];
                var dst = syms[i] & 31;
                wbits16(out, p, dm[dst]), p += dl[dst];
                if (dst > 3)
                    wbits16(out, p, (syms[i] >>> 5) & 8191), p += fdeb[dst];
            }
            else {
                wbits16(out, p, lm[syms[i]]), p += ll[syms[i]];
            }
        }
        wbits16(out, p, lm[256]);
        return p + ll[256];
    };
    // deflate options (nice << 13) | chain
    var deo = /*#__PURE__*/ new u32([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]);
    // empty
    var et = /*#__PURE__*/ new u8(0);
    // compresses data into a raw DEFLATE buffer
    var dflt = function (dat, lvl, plvl, pre, post, lst) {
        var s = dat.length;
        var o = new u8(pre + s + 5 * (1 + Math.floor(s / 7000)) + post);
        // writing to this writes to the output buffer
        var w = o.subarray(pre, o.length - post);
        var pos = 0;
        if (!lvl || s < 8) {
            for (var i = 0; i <= s; i += 65535) {
                // end
                var e = i + 65535;
                if (e < s) {
                    // write full block
                    pos = wfblk(w, pos, dat.subarray(i, e));
                }
                else {
                    // write final block
                    w[i] = lst;
                    pos = wfblk(w, pos, dat.subarray(i, s));
                }
            }
        }
        else {
            var opt = deo[lvl - 1];
            var n = opt >>> 13, c = opt & 8191;
            var msk_1 = (1 << plvl) - 1;
            //    prev 2-byte val map    curr 2-byte val map
            var prev = new u16(32768), head = new u16(msk_1 + 1);
            var bs1_1 = Math.ceil(plvl / 3), bs2_1 = 2 * bs1_1;
            var hsh = function (i) { return (dat[i] ^ (dat[i + 1] << bs1_1) ^ (dat[i + 2] << bs2_1)) & msk_1; };
            // 24576 is an arbitrary number of maximum symbols per block
            // 424 buffer for last block
            var syms = new u32(25000);
            // length/literal freq   distance freq
            var lf = new u16(288), df = new u16(32);
            //  l/lcnt  exbits  index  l/lind  waitdx  bitpos
            var lc_1 = 0, eb = 0, i = 0, li = 0, wi = 0, bs = 0;
            for (; i < s; ++i) {
                // hash value
                var hv = hsh(i);
                // index mod 32768
                var imod = i & 32767;
                // previous index with this value
                var pimod = head[hv];
                prev[imod] = pimod;
                head[hv] = imod;
                // We always should modify head and prev, but only add symbols if
                // this data is not yet processed ("wait" for wait index)
                if (wi <= i) {
                    // bytes remaining
                    var rem = s - i;
                    if ((lc_1 > 7000 || li > 24576) && rem > 423) {
                        pos = wblk(dat, w, 0, syms, lf, df, eb, li, bs, i - bs, pos);
                        li = lc_1 = eb = 0, bs = i;
                        for (var j = 0; j < 286; ++j)
                            lf[j] = 0;
                        for (var j = 0; j < 30; ++j)
                            df[j] = 0;
                    }
                    //  len    dist   chain
                    var l = 2, d = 0, ch_1 = c, dif = (imod - pimod) & 32767;
                    if (rem > 2 && hv == hsh(i - dif)) {
                        var maxn = Math.min(n, rem) - 1;
                        var maxd = Math.min(32767, i);
                        // max possible length
                        // not capped at dif because decompressors implement "rolling" index population
                        var ml = Math.min(258, rem);
                        while (dif <= maxd && --ch_1 && imod != pimod) {
                            if (dat[i + l] == dat[i + l - dif]) {
                                var nl = 0;
                                for (; nl < ml && dat[i + nl] == dat[i + nl - dif]; ++nl)
                                    ;
                                if (nl > l) {
                                    l = nl, d = dif;
                                    // break out early when we reach "nice" (we are satisfied enough)
                                    if (nl > maxn)
                                        break;
                                    // now, find the rarest 2-byte sequence within this
                                    // length of literals and search for that instead.
                                    // Much faster than just using the start
                                    var mmd = Math.min(dif, nl - 2);
                                    var md = 0;
                                    for (var j = 0; j < mmd; ++j) {
                                        var ti = (i - dif + j + 32768) & 32767;
                                        var pti = prev[ti];
                                        var cd = (ti - pti + 32768) & 32767;
                                        if (cd > md)
                                            md = cd, pimod = ti;
                                    }
                                }
                            }
                            // check the previous match
                            imod = pimod, pimod = prev[imod];
                            dif += (imod - pimod + 32768) & 32767;
                        }
                    }
                    // d will be nonzero only when a match was found
                    if (d) {
                        // store both dist and len data in one Uint32
                        // Make sure this is recognized as a len/dist with 28th bit (2^28)
                        syms[li++] = 268435456 | (revfl[l] << 18) | revfd[d];
                        var lin = revfl[l] & 31, din = revfd[d] & 31;
                        eb += fleb[lin] + fdeb[din];
                        ++lf[257 + lin];
                        ++df[din];
                        wi = i + l;
                        ++lc_1;
                    }
                    else {
                        syms[li++] = dat[i];
                        ++lf[dat[i]];
                    }
                }
            }
            pos = wblk(dat, w, lst, syms, lf, df, eb, li, bs, i - bs, pos);
            // this is the easiest way to avoid needing to maintain state
            if (!lst)
                pos = wfblk(w, pos, et);
        }
        return slc(o, 0, pre + shft(pos) + post);
    };
    // Alder32
    var adler = function () {
        var a = 1, b = 0;
        return {
            p: function (d) {
                // closures have awful performance
                var n = a, m = b;
                var l = d.length;
                for (var i = 0; i != l;) {
                    var e = Math.min(i + 5552, l);
                    for (; i < e; ++i)
                        n += d[i], m += n;
                    n %= 65521, m %= 65521;
                }
                a = n, b = m;
            },
            d: function () { return ((a >>> 8) << 16 | (b & 255) << 8 | (b >>> 8)) + ((a & 255) << 23) * 2; }
        };
    };
    // deflate with opts
    var dopt = function (dat, opt, pre, post, st) {
        return dflt(dat, opt.level == null ? 6 : opt.level, opt.mem == null ? Math.ceil(Math.max(8, Math.min(13, Math.log(dat.length))) * 1.5) : (12 + opt.mem), pre, post, !st);
    };
    // write bytes
    var wbytes = function (d, b, v) {
        for (; v; ++b)
            d[b] = v, v >>>= 8;
    };
    // zlib header
    var zlh = function (c, o) {
        var lv = o.level, fl = lv == 0 ? 0 : lv < 6 ? 1 : lv == 9 ? 3 : 2;
        c[0] = 120, c[1] = (fl << 6) | (fl ? (32 - 2 * fl) : 1);
    };
    /**
     * Compress data with Zlib
     * @param data The data to compress
     * @param opts The compression options
     * @returns The zlib-compressed version of the data
     */
    function zlibSync(data, opts) {
        if (opts === void 0) { opts = {}; }
        var a = adler();
        a.p(data);
        var d = dopt(data, opts, 2, 4);
        return zlh(d, opts), wbytes(d, d.length - 4, a.d()), d;
    }
    /**
     * Converts a string into a Uint8Array for use with compression/decompression methods
     * @param str The string to encode
     * @param latin1 Whether or not to interpret the data as Latin-1. This should
     *               not need to be true unless decoding a binary string.
     * @returns The string encoded in UTF-8/Latin-1 binary
     */
    function strToU8(str, latin1) {
        var l = str.length;
        if (!latin1 && typeof TextEncoder != 'undefined')
            return new TextEncoder().encode(str);
        var ar = new u8(str.length + (str.length >>> 1));
        var ai = 0;
        var w = function (v) { ar[ai++] = v; };
        for (var i = 0; i < l; ++i) {
            if (ai + 5 > ar.length) {
                var n = new u8(ai + 8 + ((l - i) << 1));
                n.set(ar);
                ar = n;
            }
            var c = str.charCodeAt(i);
            if (c < 128 || latin1)
                w(c);
            else if (c < 2048)
                w(192 | (c >>> 6)), w(128 | (c & 63));
            else if (c > 55295 && c < 57344)
                c = 65536 + (c & 1023 << 10) | (str.charCodeAt(++i) & 1023),
                    w(240 | (c >>> 18)), w(128 | ((c >>> 12) & 63)), w(128 | ((c >>> 6) & 63)), w(128 | (c & 63));
            else
                w(224 | (c >>> 12)), w(128 | ((c >>> 6) & 63)), w(128 | (c & 63));
        }
        return slc(ar, 0, ai);
    }
    /**
     * Converts a Uint8Array to a string
     * @param dat The data to decode to string
     * @param latin1 Whether or not to interpret the data as Latin-1. This should
     *               not need to be true unless encoding to binary string.
     * @returns The original UTF-8/Latin-1 string
     */
    function strFromU8(dat, latin1) {
        var r = '';
        if (!latin1 && typeof TextDecoder != 'undefined')
            return new TextDecoder().decode(dat);
        for (var i = 0; i < dat.length;) {
            var c = dat[i++];
            if (c < 128 || latin1)
                r += String.fromCharCode(c);
            else if (c < 224)
                r += String.fromCharCode((c & 31) << 6 | (dat[i++] & 63));
            else if (c < 240)
                r += String.fromCharCode((c & 15) << 12 | (dat[i++] & 63) << 6 | (dat[i++] & 63));
            else
                c = ((c & 15) << 18 | (dat[i++] & 63) << 12 | (dat[i++] & 63) << 6 | (dat[i++] & 63)) - 65536,
                    r += String.fromCharCode(55296 | (c >> 10), 56320 | (c & 1023));
        }
        return r;
    }

    // NOTE: rrweb recorder init flow
    // NOTE: in side the cross-origin iframe, we can't access the window.top.localStorage or any other window.top.<any-property>, so we are using the constant sdkConfig.inputMasking from sdkConfig file.
    //Register session on backend if it is not registered
    var registerNewActiveSession = function registerNewActiveSession(sdkKey) {
      try {
        if (getIsApiKeyValid() && zLocalStorageGetItem("is-api-key-valid") === "false") {
          setIsApiKeyValid(false);
        }
        var _temp4 = function () {
          if (!isSessionActive() && getIsApiKeyValid()) {
            info("Going to register new session");
            return Promise.resolve(postRegisterSessionDataOnServer(sdkKey)).then(function () {});
          }
        }();
        return Promise.resolve(_temp4 && _temp4.then ? _temp4.then(function () {}) : void 0);
      } catch (e) {
        return Promise.reject(e);
      }
    };
    //Call stream manager to post register session data on server
    var postRegisterSessionDataOnServer = function postRegisterSessionDataOnServer(sdkKey) {
      try {
        var params = {
          v: config.sdkVersion
        };
        var sessionData = getSessionData();
        var sessionRegisterInformations = {
          enduser_session_id: sessionData.sessionId,
          user_agent: window.navigator.userAgent,
          ip_address: "",
          location: "",
          enduser_zipy_id: "",
          project_release_version: "",
          sdk_version: "",
          device_name: "",
          screen_width: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
          screen_height: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
        };
        return Promise.resolve(postDataOnServer(config.registerSessionUrl + "/" + sdkKey, config.streamMgrRetryCount, params, sessionRegisterInformations)).then(function (res) {
          if (res) {
            setSessionAsActive();
            storeSessionBlockInfo(res, sdkKey);
          } else {
            error("Not able to register new session for session Id : " + sessionData.sessionId);
            return false;
          }
          return true;
        });
      } catch (e) {
        return Promise.reject(e);
      }
    };
    //Check session is blocked or not
    //Call stream manager to post enduser Config data to stream manager
    var postEndUserInfoAndGetUserConfigOnServer = function postEndUserInfoAndGetUserConfigOnServer(sdkKey, operation, newSession) {
      if (operation === void 0) {
        operation = 0;
      }
      try {
        //newSession = false; //Forcing new implementation to don't send new session info in this api
        var params = {
          v: config.sdkVersion,
          e: "Production",
          o: operation,
          ns: newSession
        };
        if (operation == Operations.POSTENDUSERINFOANDGETUSERCONFIG || operation == Operations.GETUSERCONFIG) {
          //Set is Zipy handshake to false while requesting for handshake to stream manager and default sdkConfig
          //Default urls are already ignored as part of default config 
          var sdkConfigFromStorage = getSdkConfigDataForStorage();
          window.sdkConfig = sdkConfigFromStorage ? sdkConfigFromStorage : sdkConfig;
        }
        var sessionBlockInfo = getSessionBlockedInfoDataForStorage();
        //Send post enduser info req only if current session is not blocked
        if (sessionBlockInfo && sessionBlockInfo.isBlocked) {
          info("Not going to call post end user info as session is already blocked");
          return Promise.resolve(window.sdkConfig);
        }
        window.iszHandshakeDone = false;
        window.zpendingOp = operation;
        debug("config.sdkversion" + config.sdkVersion);
        //TODO create request for enduser Info
        var storedEndUserData = getTempZEndUserDetails() || {
          zAnonymsUserInfo: {}
        };
        var endUserInfoReq = {};
        var userType = UserType.ANONYMS;
        if (storedEndUserData) {
          var _storedEndUserData$zA;
          var externalUser = storedEndUserData.zExternalUserInfo || {};
          for (var key in externalUser) {
            var mappedKey = getMappingKey(key);
            endUserInfoReq[mappedKey] = externalUser[key] ? externalUser[key] : "";
          }
          endUserInfoReq["enduser_zipy_id"] = (_storedEndUserData$zA = storedEndUserData.zAnonymsUserInfo) == null ? void 0 : _storedEndUserData$zA.zId;
          if (externalUser.externalId) {
            info("Get User info for user Type Identified " + externalUser.externalId);
            userType = UserType.IDENTIFIED;
          }
        }
        window.ztryForHandshake = false;
        return Promise.resolve(postDataOnServer(config.streamMgrUrl + "/" + sdkKey, config.streamMgrRetryCount, params, endUserInfoReq)).then(function (res) {
          if (res) {
            if ((res == null ? void 0 : res.api_key) == sdkKey) {
              var _sessionBlockInfo = getSessionBlockedInfoDataForStorage();
              var sessionData = getSessionData() || {};
              var isBlocked = res != null && res.is_blocked ? res == null ? void 0 : res.is_blocked : false;
              //Store response session blocked info only if session is not active and session is not blocked 
              if (_sessionBlockInfo) {
                if (!_sessionBlockInfo.isBlocked && !sessionData.isActive) {
                  storeSessionBlockInfo(res, sdkKey);
                }
              }
              //If session is blocked then don't parse any other information
              if (isBlocked) return window.sdkConfig;
              if (operation == Operations.POSTENDUSERINFOANDGETUSERCONFIG || operation == Operations.GETUSERCONFIG) {
                var sdkConfigResp = fillSdkConfigData(res);
                //Set is Zipy handshake to true while after handshake to stream manager
                window.iszHandshakeDone = true;
                info("sdkConfigResp" + JSON.stringify(sdkConfigResp));
                if (sdkConfigResp) {
                  window.sdkConfig = sdkConfigResp;
                }
              }
              if (operation == Operations.POSTENDUSERINFOANDGETUSERCONFIG || operation == Operations.POSTENDUSERINFO) {
                var userInfo = res.enduser_info || {};
                info("Response object received for End User from stream manager: " + JSON.stringify(userInfo));
                if (userInfo) {
                  info("Going to add enduser info after data parsing");
                  storedEndUserData.userType = userType;
                  storedEndUserData.euId = userInfo.id ? userInfo.id : 0;
                  storedEndUserData.euZName = userInfo.zipy_eu_name ? userInfo.zipy_eu_name : "";
                  storedEndUserData.isBlocked = userInfo.is_blocked ? userInfo.is_blocked : false;
                  if (userType == UserType.ANONYMS) {
                    storedEndUserData.zAnonymsUserInfo.euId = storedEndUserData.euId;
                    storedEndUserData.zAnonymsUserInfo.euZName = storedEndUserData.euZName;
                    storedEndUserData.zExternalUserInfo = {};
                  }
                  createAndUpdateEndUserInfo(storedEndUserData);
                  removeTempEndUserInfo();
                }
              }
            } else {
              error("Not able to get response from stream manager for sdk Key: " + sdkKey);
            }
          } else {
            error("Not able to get response from stream manager ");
          }
          return window.sdkConfig;
        });
      } catch (e) {
        return Promise.reject(e);
      }
    };
    var sendClickDataToServer = function sendClickDataToServer(sdkKey) {
      try {
        var _exit3;
        var _sdkConfig3 = getSdkConfigData();
        var zClickEvents = window.zClickEventsData || [];
        var eventsData = "";
        try {
          eventsData = JSON.stringify(zClickEvents);
        } catch (e) {
          error("Failed to stringify zEvents", e);
        }
        var arrSize = zClickEvents.length;
        //Multiplying length by 2 as 1 char will take 2 bytes in memory
        var _temp3 = function () {
          if (eventsData.length * 2 >= _sdkConfig3.bufferSizeFrequency || window.clickLastSyncTime + _sdkConfig3.timeFrequency <= Date.now() && arrSize > 0) {
            var _endUserInfoData$zExt5, _endUserInfoData$zExt6;
            var zipyEventsTemp = zClickEvents.slice(0, arrSize);
            var sessionData = getSessionData() || {};
            var endUserInfoData = getzEndUserDetails() || {};
            var zId = zLocalStorageGetItem("zId");
            var externalUserId = (_endUserInfoData$zExt5 = endUserInfoData.zExternalUserInfo) != null && _endUserInfoData$zExt5.externalId ? (_endUserInfoData$zExt6 = endUserInfoData.zExternalUserInfo) == null ? void 0 : _endUserInfoData$zExt6.externalId : "";
            var tz = /\((.*)\)/.exec(new Date().toString())[1];
            var _pack2 = getPack();
            //Creating zipy json format
            var zipyClickData = {
              key: sdkKey,
              sdk_ver: config.sdkVersion,
              src: "Frontend",
              s_id: sessionData.sessionId,
              euz_id: zId,
              eue_id: externalUserId,
              events: zipyEventsTemp,
              eu_info_id: endUserInfoData.euId,
              rel_ver: window.zRelVer,
              handshake_status: window.iszHandshakeDone,
              ip: _sdkConfig3.ip,
              deviceName: getDeviceType() || '',
              userAgent: window.navigator.userAgent,
              timeZone: tz,
              eventType: MouseInteractions.Click,
              pack: _pack2
            };
            var clickUrl = _sdkConfig3.heatMapUrl + "/heatmap";
            window.isDataSyncInProgress = true;
            return function () {
              if (getIsApiKeyValid()) {
                return Promise.resolve(sendClickData(clickUrl, zipyClickData, _sdkConfig3.failureRetryCount)).then(function (_networkUtils$sendCli) {
                  if (_networkUtils$sendCli) {
                    window.clickLastSyncTime = Date.now();
                    spliceClickEvents(arrSize);
                    window.isDataSyncInProgress = false;
                    return _exit3 = true;
                  }
                });
              } else {
                _exit3 = 1;
                return false;
              }
            }();
          }
        }();
        return Promise.resolve(_temp3 && _temp3.then ? _temp3.then(function (_result6) {
          return _exit3 ? _result6 : true;
        }) : _exit3 ? _temp3 : true);
      } catch (e) {
        return Promise.reject(e);
      }
    };
    var streamPerfDataToServer = function streamPerfDataToServer(sdkKey) {
      try {
        var _exit2;
        var _sdkConfig2 = getSdkConfigData();
        debug("Data Length for direct streaming ");
        var zEvents = window.zEventsPerfData || [];
        var perfArrSize = zEvents.length;
        //Multiplying length by 2 as 1 char will take 2 bytes in memory
        var _temp2 = function () {
          if (zEvents.length * 2 >= _sdkConfig2.perfBufferSizeFrequency || window.perfLastSyncTime + _sdkConfig2.perfTimeFrequency <= Date.now() && perfArrSize > 0) {
            var _endUserInfoData$zExt3, _endUserInfoData$zExt4;
            var zipyEventsTemp = zEvents.slice(0, perfArrSize);
            var sessionData = getSessionData() || {};
            var endUserInfoData = getzEndUserDetails() || {};
            var zId = zLocalStorageGetItem("zId");
            var externalUserId = (_endUserInfoData$zExt3 = endUserInfoData.zExternalUserInfo) != null && _endUserInfoData$zExt3.externalId ? (_endUserInfoData$zExt4 = endUserInfoData.zExternalUserInfo) == null ? void 0 : _endUserInfoData$zExt4.externalId : "";
            var tz = /\((.*)\)/.exec(new Date().toString())[1];
            //Creating zipy json format
            var zipyDataJson = {
              key: sdkKey,
              sdk_ver: config.sdkVersion,
              src: "Frontend",
              s_id: sessionData.sessionId,
              euz_id: zId,
              eue_id: externalUserId,
              events: zipyEventsTemp,
              eu_info_id: endUserInfoData.euId,
              rel_ver: window.zRelVer,
              handshake_status: window.iszHandshakeDone,
              ip: _sdkConfig2.ip,
              deviceName: "",
              screenWidth: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
              screenHeight: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
              userAgent: window.navigator.userAgent,
              timeZone: tz
            };
            var producerStreamUrl = _sdkConfig2.perfUrl + '/perf'; // sending perf events to perf endpoint
            window.isDataSyncInProgress = true;
            return function () {
              if (getIsApiKeyValid()) {
                return Promise.resolve(sendPerfData(producerStreamUrl, zipyDataJson, _sdkConfig2.failureRetryCount)).then(function (_networkUtils$sendPer) {
                  if (_networkUtils$sendPer) {
                    window.perfLastSyncTime = Date.now();
                    splicePerfEvents(perfArrSize);
                    window.isDataSyncInProgress = false;
                    return _exit2 = true;
                  }
                });
              } else {
                _exit2 = 1;
                return false;
              }
            }();
          }
        }();
        return Promise.resolve(_temp2 && _temp2.then ? _temp2.then(function (_result4) {
          return _exit2 ? _result4 : true;
        }) : _exit2 ? _temp2 : true);
      } catch (e) {
        return Promise.reject(e);
      }
    };
    var streamDataToServer = function streamDataToServer(sdkKey) {
      try {
        var _exit;
        var _sdkConfig = getSdkConfigData();
        var zEvents = window.zEventsData || [];
        debug("Data Length for direct streaming ");
        var eventsData = "";
        try {
          eventsData = JSON.stringify(zEvents);
        } catch (e) {
          error("Failed to stringify zEvents", e);
        }
        var eventCountCapInSingleChunk = _sdkConfig != null && _sdkConfig.eventCountCapInSingleChunk ? _sdkConfig.eventCountCapInSingleChunk : 0;
        var arrSize = eventCountCapInSingleChunk > 0 && zEvents.length > eventCountCapInSingleChunk ? eventCountCapInSingleChunk : zEvents.length;
        info("Going to send data with chunk " + arrSize + " total events count " + zEvents.length + " chunk size " + eventCountCapInSingleChunk);
        //Multiplying lenght by 2 as 1 char will take 2 bytes in memory
        var _temp = function () {
          if (eventsData.length * 2 >= _sdkConfig.bufferSizeFrequency || window.lastSyncTime + _sdkConfig.timeFrequency <= Date.now() && arrSize > 0) {
            var _endUserInfoData$zExt, _endUserInfoData$zExt2;
            var zipyEventsTemp = zEvents.slice(0, arrSize);
            var sessionData = getSessionData() || {};
            var endUserInfoData = getzEndUserDetails() || {};
            var zId = zLocalStorageGetItem("zId");
            var externalUserId = (_endUserInfoData$zExt = endUserInfoData.zExternalUserInfo) != null && _endUserInfoData$zExt.externalId ? (_endUserInfoData$zExt2 = endUserInfoData.zExternalUserInfo) == null ? void 0 : _endUserInfoData$zExt2.externalId : "";
            var tz = /\((.*)\)/.exec(new Date().toString())[1];
            var _pack = getPack();
            //Creating zipy json format
            var zipyDataJson = {
              key: sdkKey,
              sdk_ver: config.sdkVersion,
              src: "Frontend",
              s_id: sessionData.sessionId,
              euz_id: zId,
              eue_id: externalUserId,
              events: zipyEventsTemp,
              eu_info_id: endUserInfoData.euId,
              rel_ver: window.zRelVer,
              handshake_status: window.iszHandshakeDone,
              ip: _sdkConfig.ip,
              deviceName: "",
              screenWidth: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
              screenHeight: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
              userAgent: window.navigator.userAgent,
              timeZone: tz,
              pack: _pack
            };
            var eventData = "";
            try {
              eventData = JSON.stringify(zipyDataJson);
            } catch (e) {
              error("Failed to stringify zipyDataJson", e);
            }
            var zipyData = {
              eventData: eventData
            };
            return Promise.resolve(registerNewActiveSession(sdkKey)).then(function () {
              //If blocked then clear zEvents Data
              if (isSessionBlocked()) {
                clearZipyEventsData();
                return _exit = true;
              }
              //Creating divolte request
              var divolteJson = {
                session_id: sessionData.dSession,
                event_id: "AruZ~Em0WNlAnbyzVmwM~GR0cMb6Xl9r",
                is_new_party: sessionData.isNewSession,
                is_new_session: sessionData.isNewSession,
                client_timestamp_iso: new Date().toISOString(),
                event_type: "MyEventRecord",
                parameters: zipyData
              };
              var divolteUrl = _sdkConfig.streamUrl + "?p=" + sessionData.dSession;
              window.isDataSyncInProgress = true;
              return function () {
                if (getIsApiKeyValid()) {
                  return Promise.resolve(sendData({
                    divolteUrl: divolteUrl,
                    divolteJson: divolteJson,
                    failureRetryCount: _sdkConfig.failureRetryCount
                  })).then(function (_networkUtils$sendDat) {
                    if (_networkUtils$sendDat) {
                      window.lastSyncTime = Date.now();
                      spliceEvents(arrSize);
                      window.isDataSyncInProgress = false;
                      zLocalStorageSetItem("last-activity-time", window.zlastActivityTime); //In millis
                      zLocalStorageSetItem("zenduser-last-activity-time", window.zenduserLastActivityTime);
                      if (sessionData.isNewSession) {
                        var updatedSessionData = getSessionData();
                        if (updatedSessionData) {
                          updatedSessionData.isNewSession = false;
                          try {
                            zLocalStorageSetItem("session-data", JSON.stringify(updatedSessionData));
                          } catch (e) {
                            error("Failed to set session-data in localstorage", e);
                          }
                        }
                      }
                      return _exit = true;
                    }
                  });
                } else {
                  zLocalStorageSetItem("last-activity-time", window.zlastActivityTime); //In millis
                  zLocalStorageSetItem("zenduser-last-activity-time", window.zenduserLastActivityTime);
                  window.isDataSyncInProgress = false;
                  _exit = 1;
                  return false;
                }
              }();
            });
          }
        }();
        return Promise.resolve(_temp && _temp.then ? _temp.then(function (_result2) {
          return _exit ? _result2 : true;
        }) : _exit ? _temp : true);
      } catch (e) {
        return Promise.reject(e);
      }
    };
    function rrwebRecorder(inputMasking, sdkKey) {
      if (inputMasking === void 0) {
        inputMasking = sdkConfig.inputMasking;
      }
      debug("Going to init rrweb Recorder");
      window.zrrwebRecorderStatus = RRwebRecorderStatus.RECORDINGPENDING;
      var rrwebRecorderFunc = function rrwebRecorderFunc() {};
      try {
        var sdkConfigData = getSdkConfigData();
        rrwebRecorderFunc = record({
          // NOTE: If current window is in side the cross-origin iframe, rrweb will call parent window's emit method, this method will get skipped.
          emit: function emit(event, isCheckout) {
            // NOTE: If iframe, don't do anything below as per rrweb document
            if (isIframe()) {
              return;
            }
            var eventType = -1;
            //Check and set event type of a event if any rrweb event(like fullsnapshot, load) which
            //is required only to replay session
            if (event.type != EventType.IncrementalSnapshot) {
              eventType = zipyEventTypes.ReplayerEvent;
            } else {
              eventType = event.data.source ? event.data.source : zipyEventTypes.ReplayerEvent;
              if (sdkConfigData.startCaptureWithoutUserActivity || eventType >= zipyEventTypes.MouseInteraction && eventType <= zipyEventTypes.MediaInteraction) {
                //Get Activities from user, Now we can mark rrweb status to successful
                window.zrrwebRecorderStatus = RRwebRecorderStatus.RECORDINGSUCCESSFUL;
                window.zenduserLastActivityTime = Date.now();
              }
            }
            try {
              var data = "";
              var isPack = false;
              if (!window.reinitializationInProgress) {
                isPack = getPack();
              }
              if (isPack) {
                data = pack$1(event);
              } else {
                data = JSON.stringify(event);
              }
              var zipyEvent = {
                data: data,
                time: event.timestamp,
                type: eventType,
                isError: false,
                navigatedUrl: window.location.origin + window.location.pathname
              };
              if (isCheckout && event.type == EventType.Meta) {
                log("Checkout flow is triggered. Meta event expected type - " + EventType.Meta + " actual event " + event.type);
                zipyEvent.isCheckout = isCheckout;
              } else if (isCheckout) {
                log("Full snapshot event. Expected event type - " + EventType.FullSnapshot + " Event type " + event.type);
              }
              storeEventsInMemory(zipyEvent);
              if (EventType.IncrementalSnapshot && eventType === zipyEventTypes.MouseInteraction) {
                var eventData = event.data;
                if (eventData.type && eventData.type === MouseInteractions.Click) {
                  var packedData = packClickData(eventData);
                  var zipyClickEvent = {
                    data: packedData,
                    time: event.timestamp,
                    type: eventData.type,
                    isError: false
                  };
                  storeClickEventsInMemory(zipyClickEvent);
                }
              }
            } catch (e) {
              error("Failed to store rrweb recorder events", e);
            }
          },
          recordCanvas: getValueByPropertyNameFromSDKConfig('canvasCapture'),
          blockClass: convertBlockClassesToRegex(getValueByPropertyNameFromSDKConfig('blockClasses')),
          ignoreClass: 'zipy-ignore',
          maskAllInputs: inputMasking,
          //input[type="password"] will be ignored as default.
          sampling: {
            "mousemove": 150,
            "scroll": 150,
            "mouseInteraction": {
              "MouseUp": true,
              "MouseDown": true,
              "Click": true,
              "ContextMenu": false,
              "DblClick": true,
              "Focus": false,
              "Blur": false,
              "TouchStart": true,
              "TouchEnd": true
            }
          },
          userTriggeredOnInput: true,
          // NOTE: in side the cross-origin iframe, we can't access the window.top.localStorage or any other window.top.<any-property>, so we are using the constant sdkConfig.recordCrossOriginIframes, from sdkConfig file.
          recordCrossOriginIframes: getValueByPropertyNameFromSDKConfig('recordCrossOriginIframes') || sdkConfig.recordCrossOriginIframes
        });
      } catch (error$1) {
        error(error$1);
      }
      return rrwebRecorderFunc;
    }
    //zipy recorder init flow
    function zipyRecorder(sdkKey) {
      debug("Going to init zipy Recorder");
      return zipyEventRecord({
        emit: function emit(event) {
          try {
            var sdkConfigData = getSdkConfigData();
            if (event.eventType == zipyEventTypes.Online && !window.iszHandshakeDone) {
              //Need to send req to stream manager again to get response
              window.ztryForHandshake = true;
            }
            if (window.iszSessionExpired) {
              debug("Don't store zipy events if session is expired");
              return;
            }
            if (sdkConfigData.startCaptureWithoutUserActivity || event.eventType >= zipyEventTypes.Error && event.eventType <= zipyEventTypes.UnhandledRejection) {
              //Frontend error in this case we have to send data to server 
              window.zrrwebRecorderStatus = RRwebRecorderStatus.RECORDINGSUCCESSFUL;
            }
            var data = JSON.stringify(event.data);
            // SDK File Path
            var zipyEvent = {
              data: data,
              time: event.timestamp,
              type: event.eventType === zipyEventTypes.Performance ? getEventTypeForPerfStaticAssets(event.data.initiatorType) : event.eventType,
              isError: event.isError,
              navigatedUrl: window.location.origin + window.location.pathname
            };
            // ignore perf event for XHR as merge is already happening
            if (zipyEvent.type === zipyEventTypes.XHR && event.eventType == zipyEventTypes.Performance) {
              //ignore the event. Do nothing
            } else {
              storeEventsInMemory(zipyEvent);
            }
            // Adding logic to send perf event as well in perf path.
            if (sdkConfigData.capturePerformance && zipyEventTypes.Performance === event.eventType) {
              var _event$data;
              var zipyPerfEvent = {
                data: event.data,
                type: (_event$data = event.data) == null ? void 0 : _event$data.initiatorType,
                time: event.timestamp
              };
              storePerfEventsInMemory(zipyPerfEvent);
            }
          } catch (e) {
            error("Failed to store events");
          }
        }
      });
    }
    function storeEventsInMemory(zipyEvent) {
      var sdkConfigData = getSdkConfigData();
      if (!window.zrecordingPaused && (!isSessionBlocked() || isSessionExpired(sdkConfigData))) {
        if (getIsApiKeyValid()) {
          window.zEventsData.push(zipyEvent);
        }
      }
      window.zlastActivityTime = Date.now();
    }
    function storePerfEventsInMemory(zipyEvent) {
      var sdkConfigData = getSdkConfigData();
      if (!window.zrecordingPaused && (!isSessionBlocked() || isSessionExpired(sdkConfigData))) {
        if (getIsApiKeyValid()) {
          window.zEventsPerfData.push(zipyEvent);
        }
      }
    }
    function storeClickEventsInMemory(zipyClickEvent) {
      var sdkConfigData = getSdkConfigData();
      if (!window.zrecordingPaused && (!isSessionBlocked() || isSessionExpired(sdkConfigData))) {
        if (getIsApiKeyValid() && sdkConfigData.captureClickEvents) {
          window.zClickEventsData.push(zipyClickEvent);
        }
      }
    }
    //function to pack click events data
    function packClickData(event) {
      info("Heatmap: Pack event");
      try {
        var jsonData = JSON.stringify(event);
        var utf8Data = strToU8(jsonData);
        var compressedData = zlibSync(utf8Data);
        return strFromU8(compressedData, true);
      } catch (_unused) {
        info("Heatmap: Unable to pack the data");
        return '';
      }
    }
    //Fill data into sdkConfig variable by getting data from server
    //convert size and time into usable format
    //time in sec and we need in millisec so need to * by 1000
    //Size in Kb and we need in bytes so we have to multiply it by 1024
    var fillSdkConfigData = function fillSdkConfigData(response) {
      var sdkConfigResp = {
        "domCapture": typeof (response == null ? void 0 : response.dom_capture) === 'boolean' ? response == null ? void 0 : response.dom_capture : sdkConfig.domCapture,
        "consoleCapture": typeof (response == null ? void 0 : response.console_capture) === 'boolean' ? response == null ? void 0 : response.console_capture : sdkConfig.consoleCapture,
        "networkCapture": typeof (response == null ? void 0 : response.network_capture) === 'boolean' ? response == null ? void 0 : response.network_capture : sdkConfig.networkCapture,
        "stackTraceCapture": typeof (response == null ? void 0 : response.stack_trace_capture) === 'boolean' ? response == null ? void 0 : response.stack_trace_capture : sdkConfig.stackTraceCapture,
        "webSocketsCapture": typeof (response == null ? void 0 : response.web_sockets_capture) === 'boolean' ? response == null ? void 0 : response.web_sockets_capture : sdkConfig.webSocketsCapture,
        "ipCapture": typeof (response == null ? void 0 : response.ip_capture) === 'boolean' ? response == null ? void 0 : response.ip_capture : sdkConfig.ipCapture,
        "inputMasking": typeof (response == null ? void 0 : response.input_masking) === 'boolean' ? response == null ? void 0 : response.input_masking : sdkConfig.inputMasking,
        "textMasking": typeof (response == null ? void 0 : response.text_masking) === 'boolean' ? response == null ? void 0 : response.text_masking : sdkConfig.textMasking,
        "paid": typeof (response == null ? void 0 : response.paid) === 'boolean' ? response == null ? void 0 : response.paid : sdkConfig.paid,
        "apiKey": response == null ? void 0 : response.api_key,
        "streamUrl": response != null && response.stream_url ? response == null ? void 0 : response.stream_url : sdkConfig.streamUrl,
        "maxBufferSize": response != null && response.max_buffer_size ? (response == null ? void 0 : response.max_buffer_size) * 1024 : sdkConfig.maxBufferSize,
        "compression": typeof (response == null ? void 0 : response.compression) === 'boolean' ? response == null ? void 0 : response.compression : sdkConfig.compression,
        "compressionType": response != null && response.compression_type ? response == null ? void 0 : response.compression_type : sdkConfig.compressionType,
        "timeFrequency": response != null && response.time_frequency ? (response == null ? void 0 : response.time_frequency) * 1000 : sdkConfig.timeFrequency,
        "encodingType": response == null ? void 0 : response.encoding_type,
        "sessionTimeout": 3 * 60 * 1000,
        "failureRetryCount": response != null && response.failure_retry_count ? response == null ? void 0 : response.failure_retry_count : sdkConfig.failureRetryCount,
        "bufferSizeFrequency": response != null && response.buffer_size_frequency ? (response == null ? void 0 : response.buffer_size_frequency) * 1024 : sdkConfig.bufferSizeFrequency,
        "ignoreUrl": response != null && response.ignoreUrl ? response == null ? void 0 : response.ignoreUrl : sdkConfig.ignoreUrl,
        "ignoreError": response != null && response.ignoreError ? response == null ? void 0 : response.ignoreError : sdkConfig.ignoreError,
        "ignoreConsole": response != null && response.ignoreConsole ? response == null ? void 0 : response.ignoreConsole : sdkConfig.ignoreConsole,
        "isIgnoreUrlError": response != null && response.isIgnoreUrlError ? response == null ? void 0 : response.isIgnoreUrlError : sdkConfig.isIgnoreUrlError,
        "isIgnoreConsoleError": response != null && response.isIgnoreConsoleError ? response == null ? void 0 : response.isIgnoreConsoleError : sdkConfig.isIgnoreConsoleError,
        "ip": response != null && response.ip ? response == null ? void 0 : response.ip : "",
        "pack": response != null && response.pack ? response.pack ? true : false : false,
        "blockClasses": getClassListRegex(response != null && response.blockClasses ? response == null ? void 0 : response.blockClasses : sdkConfig.blockClasses, 'zipy-block'),
        "customerId": response == null ? void 0 : response.cId,
        "headersToSanitize": response != null && response.headersToSanitize ? response.headersToSanitize : '',
        "xhrReqPayloadCapture": typeof (response == null ? void 0 : response.xhrReqPayloadCap) === 'boolean' ? response == null ? void 0 : response.xhrReqPayloadCap : sdkConfig.xhrReqPayloadCapture,
        "xhrRespPayloadCapture": typeof (response == null ? void 0 : response.xhrRespPayloadCap) === 'boolean' ? response == null ? void 0 : response.xhrRespPayloadCap : sdkConfig.xhrRespPayloadCapture,
        "canvasCapture": typeof (response == null ? void 0 : response.canvasCapture) === 'boolean' ? response == null ? void 0 : response.canvasCapture : sdkConfig.canvasCapture,
        "requestCapSize": response != null && response.requestCapSize ? response == null ? void 0 : response.requestCapSize : sdkConfig.requestCapSize,
        "responseCapSize": response != null && response.responseCapSize ? response == null ? void 0 : response.responseCapSize : sdkConfig.responseCapSize,
        "sizeExceededMessage": response != null && response.sizeExceededMessage ? response == null ? void 0 : response.sizeExceededMessage : sdkConfig.sizeExceededMessage,
        "eventCountCapInSingleChunk": typeof (response == null ? void 0 : response.eventCountCapInSingleChunk) === 'number' ? response.eventCountCapInSingleChunk : sdkConfig.eventCountCapInSingleChunk,
        "captureCustomZipyLogMessage": typeof (response == null ? void 0 : response.captureCustomZipyLogMessage) === 'boolean' ? response.captureCustomZipyLogMessage : sdkConfig.captureCustomZipyLogMessage,
        "captureCustomZipyLogError": typeof (response == null ? void 0 : response.captureCustomZipyLogError) === 'boolean' ? response.captureCustomZipyLogError : sdkConfig.captureCustomZipyLogError,
        "captureCustomZipyLogException": typeof (response == null ? void 0 : response.captureCustomZipyLogException) === 'boolean' ? response.captureCustomZipyLogException : sdkConfig.captureCustomZipyLogException,
        "startCaptureWithoutUserActivity": typeof (response == null ? void 0 : response.startCaptureWithoutUserActivity) === 'boolean' ? response.startCaptureWithoutUserActivity : sdkConfig.startCaptureWithoutUserActivity,
        "consoleLogLevel": response != null && response.consoleLogLevel ? response.consoleLogLevel : sdkConfig.consoleLogLevel,
        // NOTE: We will not be able to access this in side the cross-origin iframe, we need to re-design a sdk architecture to better support this feature. Defaulting it to true for now
        "recordCrossOriginIframes": sdkConfig.recordCrossOriginIframes,
        "splitSessionSize": typeof (response == null ? void 0 : response.splitSessionSize) === 'number' ? response.splitSessionSize : sdkConfig.splitSessionSize,
        "capturePerformance": typeof (response == null ? void 0 : response.capturePerformance) === 'boolean' ? response.capturePerformance : sdkConfig.capturePerformance,
        "perfUrl": response != null && response.perfUrl ? response == null ? void 0 : response.perfUrl : sdkConfig.perfUrl,
        "perfTimeFrequency": typeof (response == null ? void 0 : response.perfTimeFrequency) === 'number' ? response.perfTimeFrequency : sdkConfig.perfTimeFrequency,
        "perfBufferSizeFrequency": typeof (response == null ? void 0 : response.perfBufferSizeFrequency) === 'number' ? response.perfBufferSizeFrequency : sdkConfig.perfBufferSizeFrequency,
        "clickTimeFrequency": typeof (response == null ? void 0 : response.clickTimeFrequency) === 'number' ? response.clickTimeFrequency : sdkConfig.clickTimeFrequency,
        "clickBufferSizeFrequency": typeof (response == null ? void 0 : response.clickBufferSizeFrequency) === 'number' ? response.clickBufferSizeFrequency : sdkConfig.clickBufferSizeFrequency,
        "isApiIdentifierEnable": typeof (response == null ? void 0 : response.isApiIdentifierEnable) === 'boolean' ? response.isApiIdentifierEnable : sdkConfig.isApiIdentifierEnable,
        "apiUniqueIdentifier": response != null && response.apiUniqueIdentifier && Array.isArray(response.apiUniqueIdentifier) ? response.apiUniqueIdentifier : sdkConfig.apiUniqueIdentifier,
        "ignoreUrlErrorCodes": response != null && response.ignoreUrlErrorCodes ? response.ignoreUrlErrorCodes : sdkConfig.ignoreUrlErrorCodes,
        "ignoreUrlCodes": response != null && response.ignoreUrlCodes ? response.ignoreUrlCodes : sdkConfig.ignoreUrlCodes,
        "heatMapUrl": response != null && response.heatMapUrl ? response.heatMapUrl : sdkConfig.heatMapUrl,
        "captureClickEvents": typeof (response == null ? void 0 : response.captureClickEvents) === 'boolean' ? response.captureClickEvents : sdkConfig.captureClickEvents,
        "sessionStitching": response != null && response.sessionStitching ? response.sessionStitching : sdkConfig.sessionStitching
      };
      //To make sure stream url and stream manager url is ignored
      sdkConfigResp.ignoreUrl.push(sdkConfigResp.streamUrl.substring(sdkConfigResp.streamUrl.indexOf("://") + 3));
      sdkConfigResp.ignoreUrl.push(sdkConfigResp.streamUrl.substring(sdkConfigResp.perfUrl.indexOf("://") + 3));
      sdkConfigResp.ignoreUrl.push(sdkConfigResp.streamUrl.substring(sdkConfigResp.heatMapUrl.indexOf("://") + 3));
      sdkConfigResp.ignoreUrl.push(config.streamMgrUrl.substring(config.streamMgrUrl.indexOf("://") + 3));
      sdkConfigResp.ignoreUrl.push("google.com");
      //put default into ignoreUrlError
      sdkConfigResp.isIgnoreUrlError.push(sdkConfigResp.streamUrl.substring(sdkConfigResp.streamUrl.indexOf("://") + 3));
      sdkConfigResp.isIgnoreUrlError.push(config.streamMgrUrl.substring(config.streamMgrUrl.indexOf("://") + 3));
      sdkConfigResp.isIgnoreUrlError.push("google.com");
      //Going to set sdk Config into LocalStorage
      setSdkConfigDataIntoStorage(sdkConfigResp);
      return sdkConfigResp;
    };
    function spliceClickEvents(arrSize) {
      if (window.zClickEventsData && Array.isArray(window.zClickEventsData)) window.zClickEventsData.splice(0, arrSize);else window.zClickEventsData = [];
    }
    function spliceEvents(arrSize) {
      if (window.zEventsData && Array.isArray(window.zEventsData)) window.zEventsData.splice(0, arrSize);else window.zEventsData = [];
    }
    function splicePerfEvents(arrSize) {
      if (window.zEventsPerfData && Array.isArray(window.zEventsPerfData)) window.zEventsPerfData.splice(0, arrSize);else window.zEventsPerfData = [];
    }
    /**
     * Manage session Block Info in memory or local Storage
     * @param res
     */
    function storeSessionBlockInfo(res, sdkKey) {
      var sessionBlockInfo;
      var blockedTill = (res == null ? void 0 : res.blocked_till) > 0 ? res == null ? void 0 : res.blocked_till : 0;
      var time = blockedTill > 0 ? getCurrentTimeStamp() + blockedTill : 0;
      var isBlocked = res != null && res.is_blocked ? res == null ? void 0 : res.is_blocked : false;
      sessionBlockInfo = {
        isBlocked: isBlocked,
        apiKey: sdkKey,
        blockedEndTime: time
      };
      window.zSessionBlockedInfo = sessionBlockInfo;
      setSessionBlockedInfoDataIntoStorage(sessionBlockInfo);
    }
    function isSessionBlocked() {
      var sessionBlockInfo = window.zSessionBlockedInfo || {};
      return sessionBlockInfo != null && sessionBlockInfo.isBlocked ? sessionBlockInfo.isBlocked : false;
    }
    //Clear all zipy events from memory
    function clearZipyEventsData() {
      while (window.zEventsData.length) {
        window.zEventsData.pop();
      }
      window.zEventsData = [];
    }
    function checkIfSizeOfDataSentExceeded(requestDataSize) {
      try {
        var currentSize = zLocalStorageGetItem("ztotal-data-sent") ? zLocalStorageGetItem("ztotal-data-sent") : "0";
        var finalSize = parseInt(currentSize) + requestDataSize;
        log("Current data size " + currentSize);
        log("Merged data size " + finalSize);
        if (finalSize > getSdkConfigData().splitSessionSize) {
          // Capture Full SS with checkout flag as true -
          triggerCheckoutFlow();
          // Reset data captured to zero
          zLocalStorageSetItem("ztotal-data-sent", "0");
          log('Resetting data to size zero');
        } else {
          // Icrement size of data captured
          zLocalStorageSetItem("ztotal-data-sent", JSON.stringify(finalSize));
        }
      } catch (error$1) {
        error("Error in checking data size. Error is - " + error$1.message);
      }
    }
    function triggerCheckoutFlow() {
      try {
        log('Trigger checkout flow triggered');
        record.takeFullSnapshot(true);
      } catch (error$1) {
        error("Error in checking full snapshot. Error is - " + error$1.message);
      }
    }

    function startRecordingForIframe(sdkConfig, event) {
      //Get all the iframes present in the current window and postMessage for cross origin iframes to start recording.
      try {
        var iframes = window.document.querySelectorAll('iframe');
        for (var _iterator = _createForOfIteratorHelperLoose(iframes), _step; !(_step = _iterator()).done;) {
          var iframe = _step.value;
          try {
            var iframeSrc = new URL(iframe.src);
            if (event) {
              if (iframeSrc.origin !== window.document.location.origin && iframe.contentWindow === (event == null ? void 0 : event.source)) {
                debug("sending message to iframe to start recording");
                iframe.contentWindow.postMessage({
                  action: START_IFRAME_RECORDING,
                  config: sdkConfig
                }, '*');
                return;
              }
              continue;
            }
            // Check if the iframe is hosted on a different origin
            if (iframeSrc.origin !== window.document.location.origin) {
              debug("sending message to iframe to start recording");
              iframe.contentWindow.postMessage({
                action: START_IFRAME_RECORDING,
                config: sdkConfig
              }, '*');
            }
          } catch (error$1) {
            error("failed to start recording for iframe:", error$1.message);
          }
        }
      } catch (error$1) {
        error("failed to start recording");
      }
    }
    function stopRecordingForIframe() {
      //Get all the iframes present in current window
      try {
        var iframes = window.document.querySelectorAll('iframe');
        debug("going to stop iframe");
        for (var _iterator2 = _createForOfIteratorHelperLoose(iframes), _step2; !(_step2 = _iterator2()).done;) {
          var iframe = _step2.value;
          try {
            var iframeSrc = new URL(iframe.src);
            // Check if the iframe is hosted on a different origin(cross origin)
            if (iframeSrc.origin !== window.document.location.origin) {
              debug("sending message to iframe to stop recording");
              iframe.contentWindow.postMessage({
                action: STOP_IFRAME_RECORDING
              }, '*');
            }
          } catch (error$1) {
            error("failed to stop recording for iframe:", error$1.message);
          }
        }
      } catch (error$1) {
        error("failed to stop recording");
      }
    }
    function iframeRecordingEventListener(apiKey, handlers) {
      //Event listener to start and stop recording for cross origin iframes
      window.addEventListener("message", function (e) {
        try {
          var _e$data, _e$data2, _e$data2$config;
          if ((e == null ? void 0 : (_e$data = e.data) == null ? void 0 : _e$data.action) === START_IFRAME_RECORDING && (e == null ? void 0 : (_e$data2 = e.data) == null ? void 0 : (_e$data2$config = _e$data2.config) == null ? void 0 : _e$data2$config.apiKey) == apiKey && window.recordingStatus !== true) {
            debug("going to init iframe recording");
            handlers.push(rrwebRecorder(e.data.config.inputMasking, e.data.config.apiKey));
            window.sdkConfig = e.data.config;
            window.recordingStatus = true;
          }
        } catch (error$1) {
          error("cannot start recording for iframe:");
        }
        try {
          var _e$data3;
          if ((e == null ? void 0 : (_e$data3 = e.data) == null ? void 0 : _e$data3.action) == STOP_IFRAME_RECORDING && window.recordingStatus !== false) {
            debug("going to stop recording for iframe");
            window.stopRecording = true;
            handlers.forEach(function (h) {
              return h();
            });
            //set the iframe recording status to false
            window.recordingStatus = false;
          }
        } catch (error$1) {
          error("failed to stop iframe recording:");
        }
      });
    }

    /**
     * This function returns the value from cookies,
     * if value of cookies are multiple then it returns the object of all values
     * else it returns the single value
     * @param key
     * @returns
     */
    var zGetCookie = function zGetCookie(key) {
      try {
        var cookies = document.cookie;
        var cookiesArray = cookies == null ? void 0 : cookies.split(';');
        var value;
        var dataObject;
        var isObject = false;
        cookiesArray.forEach(function (i) {
          var cookie = i.split('=');
          if (cookie[0].trim() === key) {
            var object = cookie[1].split('%');
            if (object.length > 1) {
              dataObject = createObjectFromCookieData(object);
              isObject = true;
            } else {
              value = cookie[1] ? cookie[1] : "";
            }
          }
        });
        return isObject ? dataObject : value;
      } catch (error$1) {
        error("inside zGetCookie catch block");
        return undefined;
      }
    };
    /**
     * This function sets key and value in cookies with 6 hours of expiration time
     * @param key
     * @param value
     */
    var zSetCookie = function zSetCookie(key, value) {
      var expire = new Date(new Date().valueOf() + 6 * 3600 * 1000).toUTCString();
      document.cookie = key + "=" + value + "; path=/; domain=" + window.zRootDomain + "; expires=" + expire + ";";
    };
    /**
     * This function returns the objects of key value pair
     * e.g. : data = ['key#value', 'key1#value1'];
     * @param data
     * @returns
     * object = {
     *   key : value,
     *   key1 : value1
     * }
     */
    var createObjectFromCookieData = function createObjectFromCookieData(data) {
      var object = {};
      data.forEach(function (i) {
        var objectData = i.split('#');
        object[objectData[0]] = objectData[1] ? objectData[1] : "";
      });
      return object || {};
    };
    /***
     * This function return all the data that we store in cookies from
     * localstorage in the form of object
     */
    var zGetCookieDatafromLocalStorage = function zGetCookieDatafromLocalStorage() {
      try {
        var endUserInfo = getzEndUserDetails();
        var sessionBlockInfo = getSessionBlockedInfoDataForStorage();
        var sessionData = getSessionData() || {};
        var zId = zLocalStorageGetItem('zId');
        var lastActivityTime = zLocalStorageGetItem('last-activity-time');
        var totalDataSent = zLocalStorageGetItem('ztotal-data-sent') ? zLocalStorageGetItem('ztotal-data-sent') : "0";
        var endUserLastActivityTime = zLocalStorageGetItem('zenduser-last-activity-time');
        var cookieData = {
          sessionId: sessionData == null ? void 0 : sessionData.sessionId,
          zId: zId,
          euId: endUserInfo == null ? void 0 : endUserInfo.euId,
          isBlocked: sessionBlockInfo == null ? void 0 : sessionBlockInfo.isBlocked,
          sdkKey: sessionData == null ? void 0 : sessionData.sdkKey,
          lastActivityTime: lastActivityTime,
          totalDataSent: totalDataSent,
          endUserLastActivityTime: endUserLastActivityTime,
          isActive: sessionData == null ? void 0 : sessionData.isActive,
          externalId: (endUserInfo == null ? void 0 : endUserInfo.zExternalUserInfo.externalId) || ""
        };
        return cookieData;
      } catch (_unused) {
        error("inside zGetCookieDatafromLocalStorage catch block");
        return undefined;
      }
    };
    /**
     * This function updates the Localstorage data with cookie data
     * @param sdkKey
     * @returns
     */
    var zSetLocalStorageDataFromCookie = function zSetLocalStorageDataFromCookie(sdkKey) {
      var endUserLastActivityTime = zGetCookie(sdkKey + cookieVariables.enduser_last_activity_time);
      var totalDataSent = zGetCookie(sdkKey + cookieVariables.total_data_sent) ? zGetCookie(sdkKey + cookieVariables.total_data_sent) : '0';
      var sessionDataCookie = zGetCookie(sdkKey + cookieVariables.session_data);
      var lastActivityTime = zGetCookie(sdkKey + cookieVariables.last_activity_time);
      try {
        // If lastActivityTime is present in cookie then only update the localStorage with cookies
        if (lastActivityTime) {
          // If one of this variable is present in cookies then set iszSessionExpired to false
          // So that it will check to create a new session or not from cookies data
          // instead of memory variable
          if (endUserLastActivityTime || sessionDataCookie || lastActivityTime) {
            window.iszSessionExpired = false;
          }
          var divolteSession = "0:" + getUUID().replace('-', ":");
          zLocalStorageSetItem('ztotal-data-sent', totalDataSent);
          zLocalStorageSetItem('last-activity-time', lastActivityTime);
          zLocalStorageSetItem('zenduser-last-activity-time', endUserLastActivityTime);
          // Update window variables
          window.zenduserLastActivityTime = endUserLastActivityTime;
          window.zlastActivityTime = lastActivityTime;
          // Updation of data from session-data of cookie
          var endUserInfo = getzEndUserDetails() || {};
          var sessionBlockInfo = getSessionBlockedInfoDataForStorage() || {};
          var sessionDataLocalStorage = getSessionData() || {};
          endUserInfo.isBlocked = (sessionDataCookie == null ? void 0 : sessionDataCookie.isBlocked) === 'true' ? true : false;
          endUserInfo.euId = Number(sessionDataCookie == null ? void 0 : sessionDataCookie.euId);
          endUserInfo.zExternalUserInfo.externalId = (sessionDataCookie == null ? void 0 : sessionDataCookie.externalId) || "";
          endUserInfo.zAnonymsUserInfo.zId = (sessionDataCookie == null ? void 0 : sessionDataCookie.zId) || "";
          sessionBlockInfo.isBlocked = (sessionDataCookie == null ? void 0 : sessionDataCookie.isBlocked) === 'true' ? true : false;
          sessionDataLocalStorage.dSession = divolteSession;
          sessionDataLocalStorage.sessionId = (sessionDataCookie == null ? void 0 : sessionDataCookie.sessionId) || "";
          sessionDataLocalStorage.sdkKey = (sessionDataCookie == null ? void 0 : sessionDataCookie.sdkKey) || "";
          sessionDataLocalStorage.isActive = (sessionDataCookie == null ? void 0 : sessionDataCookie.isActive) === 'true' ? true : false;
          zLocalStorageSetItem("zId", (sessionDataCookie == null ? void 0 : sessionDataCookie.zId) || "");
          setSessionBlockedInfoDataIntoStorage(sessionBlockInfo);
          zLocalStorageSetItem("zenduser-info", JSON.stringify(endUserInfo));
          zLocalStorageSetItem("zenduser-info-temp", JSON.stringify(endUserInfo));
          zLocalStorageSetItem("session-data", JSON.stringify(sessionDataLocalStorage));
        }
      } catch (_unused2) {
        error("inside zSetLocalStorageDataFromCookie catch block");
        return;
      }
    };
    /**
     * This function updates the cookies data with local storage
     * @param sdkKey
     * @returns
     */
    var zSetCookieDataFromLocalStorage = function zSetCookieDataFromLocalStorage(sdkKey) {
      var cookieData = zGetCookieDatafromLocalStorage();
      try {
        // We save the cookie named session data in a below format. (key # value % key1 # value1)
        var sessionDataForCookies = "sessionId#" + cookieData.sessionId + "%isActive#" + cookieData.isActive + "%isBlocked#" + cookieData.isBlocked + "%sdkKey#" + sdkKey + "%zId#" + cookieData.zId + "%euId#" + Number(cookieData.euId) + "%externalId#" + cookieData.externalId;
        zSetCookie(sdkKey + cookieVariables.session_data, sessionDataForCookies);
        zSetCookie(sdkKey + cookieVariables.last_activity_time, cookieData.lastActivityTime);
        zSetCookie(sdkKey + cookieVariables.enduser_last_activity_time, cookieData.endUserLastActivityTime);
        zSetCookie(sdkKey + cookieVariables.total_data_sent, cookieData.totalDataSent);
      } catch (_unused3) {
        error("inside zSetCookieDataFromLocalStorage catch block");
        return;
      }
    };

    /*
    Capture all events from rrweb that is required to replay
    Capture all console data, ajax data and js errors from zipy-event-recorder
    Wrap event into breadcrumb
    Store breadcrumb into redux store
     */
    function _catch(body, recover) {
      try {
        var result = body();
      } catch (e) {
        return recover(e);
      }
      if (result && result.then) {
        return result.then(void 0, recover);
      }
      return result;
    }
    //Timer for continuos sending data to server
    var streamData = function streamData(sdkKey) {
      try {
        var _temp14 = function _temp14(_result2) {
          if (_exit) return _result2;
          function _temp12() {
            function _temp10(_recorderUtils$stream) {
              function _temp9() {
                function _temp7(_recorderUtils$stream2) {
                  function _temp6(_recorderUtils$sendCl) {
                    if (_recorderUtils$sendCl) {
                      debug("Successfully sent click data to server via session storage");
                    }
                    addSdkTimer(config.sdkLoopTime, sdkKey);
                  }
                  if (_recorderUtils$stream2) {
                    debug("Successfully sent pref data to server via session storage");
                  }
                  var _temp5 = !window.iszInternetDisconnected && window.zrrwebRecorderStatus != RRwebRecorderStatus.RECORDINGPENDING && _sdkConfig8.captureClickEvents;
                  // send click data -
                  return _temp5 ? Promise.resolve(sendClickDataToServer(sdkKey)).then(_temp6) : _temp6(_temp5);
                }
                var _temp4 = !window.iszInternetDisconnected && window.zrrwebRecorderStatus != RRwebRecorderStatus.RECORDINGPENDING && _sdkConfig8.capturePerformance;
                // send perf data -
                return _temp4 ? Promise.resolve(streamPerfDataToServer(sdkKey)).then(_temp7) : _temp7(_temp4);
              }
              var _temp8 = function () {
                if (_recorderUtils$stream) {
                  var _temp3 = function _temp3() {
                    debug("Successfully send data to server via session storage");
                  };
                  var _temp2 = function () {
                    if (window.zrecordingPaused) {
                      window.zrecordingPaused = false;
                      window.reinitializationInProgress = true;
                      var operation = Operations.GETUSERCONFIG;
                      if (checkIfEndUserInfoFetchRequired()) operation = Operations.POSTENDUSERINFOANDGETUSERCONFIG;
                      return Promise.resolve(postEndUserInfoAndGetUserConfigOnServer(sdkKey, operation, false)).then(function (_recorderUtils$postEn3) {
                        _sdkConfig8 = _recorderUtils$postEn3;
                        window.zStop = sdkReinit(sdkKey);
                      });
                    }
                  }();
                  return _temp2 && _temp2.then ? _temp2.then(_temp3) : _temp3(_temp2);
                } else {
                  var zEvents = window.zEventsData || [];
                  var eventsData = "";
                  try {
                    eventsData = JSON.stringify(zEvents);
                  } catch (e) {
                    error("Failed stringify events while stream data server", e);
                  }
                  if (_sdkConfig8.maxBufferSize != 0 && eventsData.length * 2 > _sdkConfig8.maxBufferSize && !window.zrecordingPaused) {
                    window.zrecordingPaused = true;
                    //When max Buffer size is full then discard events and again start recording
                    info("Max Buffer size is reached going to pause recording");
                  }
                }
              }();
              //Stream data from session storage
              return _temp8 && _temp8.then ? _temp8.then(_temp9) : _temp9(_temp8);
            }
            var _temp = !window.iszInternetDisconnected && window.zrrwebRecorderStatus != RRwebRecorderStatus.RECORDINGPENDING;
            return _temp ? Promise.resolve(streamDataToServer(sdkKey)).then(_temp10) : _temp10(_temp);
          }
          var _temp11 = function () {
            if (window.ztryForHandshake) {
              return Promise.resolve(postEndUserInfoAndGetUserConfigOnServer(sdkKey, window.zpendingOp, false)).then(function (_recorderUtils$postEn2) {
                _sdkConfig8 = _recorderUtils$postEn2;
              });
            }
          }();
          return _temp11 && _temp11.then ? _temp11.then(_temp12) : _temp12(_temp11);
        };
        var _exit;
        if (window.sdkInit == false) {
          info("Sdk is not initialized yet");
          addSdkTimer(config.sdkLoopTime, sdkKey);
          return Promise.resolve();
        }
        var reinitFlow = false;
        if (window.isDataSyncInProgress) {
          debug("Data sync in in progress");
          addSdkTimer(config.sdkLoopTime, sdkKey);
          return Promise.resolve();
        }
        if (window.reinitializationInProgress) {
          debug("Reinit is in progress");
          addSdkTimer(config.sdkLoopTime, sdkKey);
          return Promise.resolve();
        }
        var _sdkConfig8 = getSdkConfigData();
        //Checking for session expiry and session activity
        var _temp13 = function () {
          if (reinitFlow || isSessionExpired(_sdkConfig8) && window.zEventsData && window.zEventsData.length > 0 && !window.iszInternetDisconnected && window.zrrwebRecorderStatus != RRwebRecorderStatus.RECORDINGPENDING) {
            info("Session is expired Going to recreate session");
            window.reinitializationInProgress = true;
            createSessionData(sdkKey);
            var operation = Operations.GETUSERCONFIG;
            if (checkIfEndUserInfoFetchRequired()) operation = Operations.POSTENDUSERINFOANDGETUSERCONFIG;
            return Promise.resolve(postEndUserInfoAndGetUserConfigOnServer(sdkKey, operation, true)).then(function (_recorderUtils$postEn) {
              _sdkConfig8 = _recorderUtils$postEn;
              window.zrecordingPaused = false;
              window.zStop = sdkReinit(sdkKey);
              addSdkTimer(config.sdkLoopTime, sdkKey);
              _exit = 1;
            });
          }
        }();
        return Promise.resolve(_temp13 && _temp13.then ? _temp13.then(_temp14) : _temp14(_temp13));
      } catch (e) {
        return Promise.reject(e);
      }
    };
    var identifyRetryCount = 5;
    /**
     * init sdk corresponding
     * @param sdkKey Key to identify sdk customer
     * @param debugLogs to print logs
     */
    var init = function zipyRecord(sdkKey, options) {
      if (options === void 0) {
        options = {
          releaseVer: "",
          rootDomain: ""
        };
      }
      try {
        return Promise.resolve(_catch(function () {
          initLogger(config.debugLogs);
          // Note: check `window.self !== window.top` which means we are dealing with the iframe.
          if (isIframe()) {
            // Note: Check if we are able to access the window.top.window and in that sdkInit is there, it means we are dealing with the same origin iframe and we are already recording that so return.
            if (isZipyInitializedInParentWindowForSameOrigin()) {
              info("Not initializing sdk as function is called inside iframe.");
              return;
            }
            // Note: This block state will check if we are in cross-origin iframe, and sdkConfig.recordCrossOriginIframes is true to capture the cross-origin iframe, we will call the recorderUtils.rrwebRecorder method.
            else if (!canAccessIFrame(window.self) && sdkConfig && sdkConfig.recordCrossOriginIframes) {
              if (!window.recordingStatus) {
                window.recordingStatus = false;
              }
              try {
                window.onload = function () {
                  debug("Iframe content loaded!");
                  window.parent.postMessage({
                    action: IFRAME_LOADED
                  }, "*");
                };
              } catch (error$1) {
                error("not able to notify about iframe content loaded event:", error$1.message);
              }
              var handlers = [];
              var apiKey = sdkKey;
              try {
                info('init: We will start recording cross-origin iframe now!');
                //Adding an event listener to start and stop recording for iframe.
                iframeRecordingEventListener(apiKey, handlers);
              } catch (error$1) {
                error('init Error: ' + error$1 ? error$1.message : error$1);
              }
              return;
            }
          }
          //Regex pattern for sdk key.
          var validateSdkKey = new RegExp(/^[a-zA-Z0-9]{8}$/);
          if (!sdkKey || !validateSdkKey.test(sdkKey)) {
            error("Not able to process as sdk api key null or invalid.");
            return;
          }
          if (options.rootDomain) {
            //Regex pattern for rootDomain.
            var validateRootDomain = new RegExp(rootDomainRegex);
            if (validateRootDomain.test(options.rootDomain)) {
              window.zRootDomain = options.rootDomain;
            }
          }
          window.zRelVer = options.releaseVer;
          window.zsdkKey = sdkKey;
          zLocalStorgeMapUpdate();
          // storageUtils.handleLocalStorageClearEvent();
          return Promise.resolve(sdkInit(sdkKey)).then(function () {
            addSdkTimer(config.sdkLoopTime, sdkKey);
            addTabSwitchObserver(sdkKey);
            addPageUnloadObserver(sdkKey);
          });
        }, function (error$1) {
          error("Not able to init SDK: " + error$1.message);
        }));
      } catch (e) {
        return Promise.reject(e);
      }
    };
    /**
     * To identify end user identity
     * @param externalUUId uuid of the end user
     * @options to get optional details of user
     */
    var identify = function identifyEndUser(externalUUId, userInfo) {
      if (userInfo === void 0) {
        userInfo = {};
      }
      try {
        if (window.self !== window.parent) {
          return;
        }
      } catch (error$1) {
        error(error$1.message ? error$1.message : error$1);
      }
      try {
        if (!window.sdkInit) {
          error('Identify: SDK not initialized');
          // Retry identify is SDK was not initialized by then
          setTimeout(function () {
            info('Calling identify again after 10 seconds');
            identifyRetryCount -= 1;
            retryIdentifyOnFailure(externalUUId, userInfo, identifyRetryCount);
          }, 10000);
          return;
        }
        //Check for valid External UUID
        if (!externalUUId || typeof externalUUId != 'string' || externalUUId.length <= 0 || externalUUId.trim().length <= 0) {
          error("Got wrong external UUID, Please validate: " + externalUUId);
          return;
        }
        info("identify :: externalUUId - " + externalUUId);
        //Get previous data from permanent storage
        var endUserInfo = getzEndUserDetails();
        var sessionData = getSessionData() || {};
        var operation = Operations.POSTENDUSERINFO;
        var zExternalUserInfo = userInfo;
        zExternalUserInfo.externalId = externalUUId;
        var splitSession = false;
        if (!endUserInfo) {
          //When end user info doesn't exists in localStorage
          var zId = createZipyIdIfNotExists();
          endUserInfo = {
            euId: 0,
            euZName: "",
            userType: UserType.ANONYMS,
            isBlocked: false,
            zExternalUserInfo: {},
            zAnonymsUserInfo: {
              zId: zId,
              euId: 0,
              euZName: ""
            }
          };
        } else {
          var previousUserType = endUserInfo.userType;
          //Check if already identied user exists or not
          if (previousUserType == UserType.ANONYMS) {
            //No need to create new session only update endUserInfo
          } else {
            var _endUserInfo;
            if (isExternalUserAlreadyExists((_endUserInfo = endUserInfo) == null ? void 0 : _endUserInfo.zExternalUserInfo, zExternalUserInfo)) {
              //Same as previously identified user
              //For updating details corresponding to enduser in db
              operation = Operations.POSTENDUSERINFOANDGETUSERCONFIG;
            } else {
              // User has been changed, split session
              endUserInfo.euId = 0;
              endUserInfo.euZName = "", endUserInfo.userType = UserType.ANONYMS, endUserInfo.isBlocked = false, splitSession = true;
              operation = Operations.POSTENDUSERINFOANDGETUSERCONFIG;
              createSessionData(sessionData.sdkKey);
              window.reinitializationInProgress = true;
            }
          }
        }
        if (!window.iszHandshakeDone) {
          operation = Operations.POSTENDUSERINFOANDGETUSERCONFIG;
        }
        endUserInfo.zExternalUserInfo = zExternalUserInfo;
        //Save enduser info in temporary storage
        createAndUpdateEndUserInfoTemp(endUserInfo);
        var sessionBlockInfo = getSessionBlockedInfoDataForStorage();
        if (sessionBlockInfo && sessionData) {
          //Check if current session is blocked
          if (!splitSession && sessionBlockInfo.isBlocked) {
            info("No need to do backend call if session is blocked");
          } else {
            postEndUserInfoAndGetUserConfigOnServer(sessionData.sdkKey, operation, splitSession).then(function (sdkConfig) {
              if (splitSession) {
                window.zStop = sdkReinit(sessionData.sdkKey);
              }
            })["catch"](function (error$1) {
              error("Failed to post/get sdk config from server: ", error$1);
            });
          }
        } else {
          error("Value doesn't exists in sessionBlockInfo or sessionData : ");
        }
      } catch (error$1) {
        error("Not able to identify SDK: " + error$1.message);
      }
    };
    /**
     * To anonymize end user on logout
     */
    var anonymize = function anonymizeEndUser() {
      try {
        if (window.self !== window.parent) {
          return;
        }
      } catch (error$1) {
        error(error$1.message ? error$1.message : error$1);
      }
      if (!window.sdkInit) {
        error('Anonymize: SDK not initialized');
        return;
      }
      info("Going to anonymize end user");
      //Check for already identied user
      var isUserIdentified = false;
      if (isIdentifiedUserExistInStorage() || isIdentifiedUserExistInTempStorage()) {
        isUserIdentified = true;
      }
      //Remove enduser info from permanent and temp storage
      var endUserInfo = removeExternalUserInfoAndAssignAnonymsUser() || {};
      var operation = Operations.GETUSERCONFIG;
      if (endUserInfo.euId === 0) {
        //Need to get euid from backend so store info in temp storage
        operation = Operations.POSTENDUSERINFOANDGETUSERCONFIG;
        createAndUpdateEndUserInfoTemp(endUserInfo);
        createAndUpdateEndUserInfo(endUserInfo);
      } else {
        //No Need to get euid from backend so removing enduser info from temp storage
        createAndUpdateEndUserInfo(endUserInfo);
        removeTempEndUserInfo();
      }
      var sessionData = getSessionData();
      if (sessionData && isUserIdentified) {
        //User exists need to split session
        window.reinitializationInProgress = true;
        createSessionData(sessionData == null ? void 0 : sessionData.sdkKey);
        //split session			
        postEndUserInfoAndGetUserConfigOnServer(sessionData == null ? void 0 : sessionData.sdkKey, operation, true).then(function (sdkConfig) {
          window.zStop = sdkReinit(sessionData == null ? void 0 : sessionData.sdkKey);
        })["catch"](function (error$1) {
          error("Failed to post/get sdk config from server: ");
        });
      } else {
        info("Identified user doesn't exists in system No need to break session");
      }
    };
    //Sdk init with sdk key
    function sdkInit(sdkKey) {
      var handlers = [];
      try {
        window.sdkInit = false;
        window.isDataSyncInProgress = false;
        window.zEventsData = [];
        window.zEventsPerfData = [];
        window.zFetchTempData = [];
        window.zClickEventsData = [];
        window.iszInternetDisconnected = false;
        window.zlastActivityTime = Date.now();
        window.zenduserLastActivityTime = getZendUserActivityTime();
        if (!window.zenduserLastActivityTime) {
          window.zenduserLastActivityTime = Date.now();
        }
        //To stop recording events when recording is paused
        window.zrecordingPaused = false;
        //To communicate stream manager handshake retry status on connection change
        window.ztryForHandshake = false;
        //To check whether session is expired or not
        window.iszSessionExpired = false;
        //rrweb recorder status 
        window.zrrwebRecorderStatus = RRwebRecorderStatus.NORECORDING;
        while (window.zEventsData.length) {
          window.zEventsData.pop();
        }
        var zipyEvents = window.sessionStorage.getItem("pending-zEvents");
        console.log("Pending Events \n", JSON.parse(zipyEvents));
        info("pendingEvents value is" + zipyEvents);
        if (zipyEvents) {
          try {
            var zEvents = [];
            zEvents = JSON.parse(zipyEvents);
            window.zEventsData = zEvents;
          } catch (e) {
            error("Failed to parse zipyEvents", e);
          }
        }
        ;
        var sessionBlockInfo = getSessionBlockedInfoDataForStorage();
        if (!sessionBlockInfo || sessionBlockInfo.apiKey != sdkKey) {
          resetSessionBlockedInfoDataIntoStorage(sdkKey);
        }
        debug("Zipy Recorder init");
        //Handling of user Info
        if (isSdkKeyChanged(sdkKey)) {
          //Remove enduser info from temp and permanent storage when api key is changed
          removeEndUserInfo();
          removeTempEndUserInfo();
        }
        var operation = Operations.GETUSERCONFIG;
        if (!getzEndUserDetails() && !getTempZEndUserDetails()) {
          operation = Operations.POSTENDUSERINFOANDGETUSERCONFIG;
          var zId = createZipyIdIfNotExists();
          var endUserInfo = {
            euId: 0,
            euZName: "",
            userType: UserType.ANONYMS,
            isBlocked: false,
            zExternalUserInfo: {},
            zAnonymsUserInfo: {
              zId: zId,
              euId: 0,
              euZName: ""
            }
          };
          //Add default enduser info in temp and permanent storage
          createAndUpdateEndUserInfoTemp(endUserInfo);
          createAndUpdateEndUserInfo(endUserInfo);
        }
        if (checkIfEndUserInfoFetchRequired()) operation = Operations.POSTENDUSERINFOANDGETUSERCONFIG;
        var createNewSession = false;
        var sdkConfigFromStorage = getSdkConfigDataForStorage() || {};
        // Initial handling of session stitching, set data from cookies to localstorage
        if (window.zRootDomain) {
          zSetLocalStorageDataFromCookie(sdkKey);
        }
        //Check create session if session is expired
        if (isSessionExpired(sdkConfigFromStorage) || isSdkKeyChanged(sdkKey)) {
          createSessionData(sdkKey);
          createNewSession = true;
        }
        postEndUserInfoAndGetUserConfigOnServer(sdkKey, operation, createNewSession).then(function (sdkConfig) {
          window.lastSyncTime = 0;
          window.perfLastSyncTime = 0;
          window.clickLastSyncTime = 0;
          if (sdkConfig.domCapture) {
            var stopFn = rrwebRecorder(sdkConfig.inputMasking, sdkKey);
            handlers.push(stopFn);
          }
          handlers.push(zipyRecorder(sdkKey));
          try {
            //Listener for the iframe onload event
            window.addEventListener("message", function (event) {
              var _event$data;
              if ((event == null ? void 0 : (_event$data = event.data) == null ? void 0 : _event$data.action) === IFRAME_LOADED && window.stopRecording !== true) {
                startRecordingForIframe(sdkConfig, event);
              }
            });
          } catch (error$1) {
            error("failed to start recording for iframe content loaded event", error$1.message);
          }
          //Start cross origin iframe recording after the recording is started for the parent window
          startRecordingForIframe(sdkConfig);
          window.zStop = function () {
            try {
              window.stopRecording = true;
              handlers.forEach(function (h) {
                return h();
              });
              log("Calling zipy Stop Recorder");
              // NOTE: in side the cross-origin iframe, we can't access the window.top.localStorage or any other window.top.<any-property>, we need to design this event base stop method using postMessage from parent to child SDK's if we have.
              // Stop iframe recording
              stopRecordingForIframe();
            } catch (error$1) {
              error("Failed to stop recording", error$1.message);
            }
          };
          window.sdkInit = true;
        })["catch"](function (error$1) {
          window.sdkInit = true;
          error("Failed to get get sdk config from server: ", error$1);
        });
      } catch (error$1) {
        error(error$1);
      }
      return function () {};
    }
    //Reinit sdk 
    function sdkReinit(sdkKey) {
      var handlers = [];
      try {
        debug("Zipy Recorder Reinit");
        window.isDataSyncInProgress = false;
        if (!window.stopRecording) {
          info("Going to stop recording ");
          var stopRecording = window.zStop;
          if (stopRecording) stopRecording();
        }
        window.iszInternetDisconnected = false;
        window.zEventsPerfData = [];
        window.zClickEventsData = [];
        window.zFetchTempData = [];
        window.zEventsData = [];
        window.xhrTempData = [];
        window.stopRecording = false;
        var _sdkConfig = getSdkConfigData();
        if (_sdkConfig.domCapture) {
          var stopFn = rrwebRecorder(_sdkConfig.inputMasking, sdkKey);
          handlers.push(stopFn);
        }
        handlers.push(zipyRecorder(sdkKey));
        //Reinit the cross origin iframe recording 
        startRecordingForIframe(_sdkConfig);
        window.reinitializationInProgress = false;
        return function () {
          try {
            window.stopRecording = true;
            log("Calling zipy Stop Recorder");
            handlers.forEach(function (h) {
              return h();
            });
            //Stop the iframe recording
            stopRecordingForIframe();
          } catch (error$1) {
            error("Failed to stop recording", error$1.message);
          }
        };
      } catch (error$1) {
        error(error$1);
      }
      return function () {};
    }
    function addSdkTimer(time, sdkKey) {
      //sdkTimer = setTimeout(streamData, time, sdkKey);
      setTimeout(streamData, time, sdkKey);
    }
    /**
     * @param  {string} externalUUId
     * @param  {any={}} userInfo
     * @param  {} retryCount - If retry exceeded, then identify is not
     */
    function retryIdentifyOnFailure(externalUUId, userInfo, retryCount) {
      if (userInfo === void 0) {
        userInfo = {};
      }
      if (retryCount > 0) {
        identify(externalUUId, userInfo);
      } else {
        error('Identify session retries count exceeded');
      }
    }
    // function clearSdkTimer() {
    // 	clearTimeout(sdkTimer);
    // }
    /**
     * This function will return the current session url
     * @returns url
     */
    var getCurrentSessionURL = function getCurrentSessionURL() {
      try {
        if (window.self !== window.parent) {
          return '';
        }
      } catch (error$1) {
        error(error$1.message ? error$1.message : error$1);
      }
      try {
        var _sdkConfig2 = getSdkConfigData();
        var sessionBlockInfo = zLocalStorageGetItem("zsession-blocked-info");
        var parsedSessionBlockInfo = JSON.parse(sessionBlockInfo);
        if (!window.sdkInit || parsedSessionBlockInfo.is_blocked) {
          error('SessionLink: SDK not initialized');
          return "";
        }
        var sessionData = getSessionData() || {};
        var zId = zLocalStorageGetItem("zId");
        var customerId = _sdkConfig2.customerId;
        if (!_sdkConfig2.customerId) {
          error('SessionLink: Could not find customer id');
          return "";
        }
        var url = config.sessionLinkUrl + "/" + sessionData.sdkKey + "/" + customerId + "?is_error=false&id=" + zId + "&euid=" + sessionData.sessionId;
        return url;
      } catch (err) {
        error("Error in generating session url. Error is - " + err.message);
        return '';
      }
    };
    /**
     * @param  {string} message
     * @param  {types.zipyEventOptions} options?
     * This method allows customers to log custom messages.
     */
    var logMessage = function logMessage(message, options) {
      try {
        // Check if logMessages are enabled
        var _sdkConfig3 = getSdkConfigData();
        if (!_sdkConfig3 || _sdkConfig3 && !_sdkConfig3.captureCustomZipyLogMessage) {
          info('Custom Zipy Message not enabled.');
          return;
        }
        if (message && typeof message === 'string') {
          var logMessageEvent = new CustomEvent(LOG_EVENT, {
            detail: {
              message: message,
              options: options
            }
          });
          window.dispatchEvent(logMessageEvent);
        } else {
          debug('Mandatory params missing for zipy logs');
        }
      } catch (err) {
        debug("Error in capturing zipy logs. Error - " + err.message);
      }
    };
    /**
     * @param  {unknown} err
     * This method allows customers to log exceptions that are handled by user but want to capture in Zipy
     */
    var logException = function logException(err) {
      try {
        // Check if logException is enabled
        var _sdkConfig4 = getSdkConfigData();
        if (!_sdkConfig4 || _sdkConfig4 && !_sdkConfig4.captureCustomZipyLogMessage) {
          info('Custom Zipy Exception not enabled.');
          return;
        }
        if (err) {
          var logExceptionEvent = new CustomEvent(EXCEPTION_EVENT, {
            detail: {
              error: err instanceof Error ? err : {
                message: String(err)
              }
            }
          });
          window.dispatchEvent(logExceptionEvent);
        } else {
          debug('Mandatory params missing for zipy exception missing');
        }
      } catch (err) {
        debug("Error in capturing zipy exception event. Error - " + err.message);
      }
    };
    /**
     * @param  {string} name
     * @param  {string} message
     * @param  {string} category?
     * @param  {types.zipyEventOptions} options?
     * This method allows user to add custom errors that customers can log for handling errors.
     */
    var logError = function logError(name, message, category, options) {
      try {
        // Check if logError is enabled
        var _sdkConfig5 = getSdkConfigData();
        if (!_sdkConfig5 || _sdkConfig5 && !_sdkConfig5.captureCustomZipyLogError) {
          info('Custom Zipy Error not enabled.');
          return;
        }
        if (name && message && typeof name === 'string' && typeof message === 'string') {
          var logErrorEvent = new CustomEvent(ERROR_EVENT, {
            detail: {
              name: name,
              message: message,
              category: category,
              options: options
            }
          });
          window.dispatchEvent(logErrorEvent);
        } else {
          debug('Mandatory params missing for zipy error logs');
        }
      } catch (err) {
        error("Error in capturing zipy error event. Error - " + err.message);
      }
    };
    function addTabSwitchObserver(sdkKey) {
      document.addEventListener("visibilitychange", function (event) {
        // This handles the conditions for session stitching in following conditions.
        // same window tab switch
        // same browser window switch
        // same window link open in new tab
        // close tab 
        if (window.zRootDomain) {
          try {
            var _sdkConfig6 = getSdkConfigData();
            if (document.hidden && _sdkConfig6.sessionStitching) {
              zSetCookieDataFromLocalStorage(sdkKey);
            } else {
              zSetLocalStorageDataFromCookie(sdkKey);
            }
          } catch (err) {
            error("Failed to set CookieData on tab visibility. Error - " + err.message);
          }
        }
        if (document.visibilityState === "visible") {
          try {
            if (!isSessionExpired(sdkKey)) {
              window.reinitializationInProgress = true;
              window.zStop = sdkReinit(sdkKey);
              info("reinitializing the session on tabActive event");
            } else {
              //Going to reinit rrweb recorder to keep track on user activity for new session
              var _sdkConfig7 = getSdkConfigData();
              window.zStop = rrwebRecorder(_sdkConfig7.inputMasking, sdkKey);
            }
          } catch (err) {
            error("Failed to reinit on tab visibility. Error - " + err.message);
          }
        } else {
          while (window.zEventsData.length) {
            window.zEventsData.pop();
          }
          var stopRecording = window.zStop;
          if (stopRecording) stopRecording();
        }
      });
    }
    /**
     * This function handles the conditions for session stitching in following conditions.
     * same window link open in same tab
     * @param sdkKey
     */
    function addPageUnloadObserver(sdkKey) {
      window.addEventListener("beforeunload", function (event) {
        info("Going to handle beforeunload event...");
        try {
          window.sessionStorage.setItem("pending-zEvents", JSON.stringify(window.zEventsData));
        } catch (error$1) {
          error("Failed to set pending events into local Storage with error: " + error$1);
        }
        try {
          if (window.zRootDomain) {
            zSetCookieDataFromLocalStorage(sdkKey);
          }
        } catch (error$1) {
          error("Failed to set CookieData on tab beforeunload. Error - " + error$1.message);
        }
      });
    }

    exports.anonymize = anonymize;
    exports.getCurrentSessionURL = getCurrentSessionURL;
    exports.identify = identify;
    exports.init = init;
    exports.logError = logError;
    exports.logException = logException;
    exports.logMessage = logMessage;

}));
