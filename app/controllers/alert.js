function alert(message, title, callback) {
    var dialog = Ti.UI.createAlertDialog({
        title: title  || 'Alert',
        message: message,
        ok: 'ok'
    });
    
    if (callback) {
        dialog.addEventListener('click', callback);
    }
    
    dialog.show();
    
    return;
}

if (typeof exports !== 'undefined') {
        if (typeof module !== 'undefined' && module.exports) {
                exports = module.exports = alert;
        }
        exports.alert = alert;
}