modules.define('form-control', ['i-bem__dom'], function(provide, BemDom) {

provide(BemDom.decl(this.name, {
    onSetMod : {
        'js' : {
            'inited' : function() {
                this._control = null;
            }
        }
    },

    getName : function() {
        return this.getControl().getName();
    },

    getVal : function() {
        return this.getControl().getVal();
    },

    setVal : function(val) {
        return this.getControl().setVal(val);
    },

    getControl : function() {
        return this._control || (this._control = this._getControl());
    },

    _getControl : function() {
        throw new Error('not implemented');
    },

    _onUpdate : function() {
        this.emit('update');
    }
}, {
    live : true
}));

});
