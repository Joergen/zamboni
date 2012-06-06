z.capabilities = {
    'JSON': window.JSON && typeof JSON.parse == 'function',
    'debug': (('' + document.location).indexOf('dbg') >= 0),
    'debug_in_page': (('' + document.location).indexOf('dbginpage') >= 0),
    'console': window.console && (typeof window.console.log == 'function'),
    'replaceState': typeof history.replaceState === 'function',
    'localStorage': false,
    'sessionStorage': false,
    'webApps': !!(navigator.mozApps && navigator.mozApps.install),
    'app_runtime': !!(
        navigator.mozApps &&
        typeof navigator.mozApps.html5Implementation === 'undefined'
    ),
    'fileAPI': !!window.FileReader,
    'desktop': !!$('#is-desktop-width:visible').length,
    'tablet': !!$('#is-tablet-width:visible').length,
    'mobile': !!$('#is-mobile-width:visible').length,
    'touch': ('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch,
    'nativeScroll': (function() {
        return 'WebkitOverflowScrolling' in document.createElement('div').style;
    })()
};


try {
    if ('localStorage' in window && window['localStorage'] !== null) {
        z.capabilities.localStorage = true;
    }
} catch (e) {
}

try {
    if ('sessionStorage' in window && window['sessionStorage'] !== null) {
        z.capabilities.sessionStorage = true;
    }
} catch (e) {
}
