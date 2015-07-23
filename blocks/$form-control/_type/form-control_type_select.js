modules.define('form-control', ['select'], function(provide, Select, Control) {

provide(Control.decl({ modName : 'type', modVal : 'select' }, {
    _getControl : function() {
        return this.findBlockInside('select');
    }
}, {
    live : function () {
        this.__base.apply(this, arguments);
        this.liveInitOnBlockEvent('change', 'select', this.prototype._onUpdate);
    }
}));

});
