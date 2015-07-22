modules.define('form', ['i-bem__dom', 'reset-button', 'form-control'], function(provide, BemDom, _, _) {

var defVal = 1;

provide(BemDom.decl(this.name, {
    onSetMod : {
        'js' : {
            'inited' : function() {
                this._controls = this.findBlocksInside('form-control');

                this._controls.forEach(function(control) {
                    control.getControl();
                });
            }
        }
    },

    reset : function() {
        this._controls.forEach(function(control) {
            control.getControl().setVal(defVal);
        });
        defVal++ > 3 && (defVal = 1);
    },

    _onControlChange : function() {

    },

    _onResetClick : function() {
        this.reset();
    }
}, {
    live : function() {
        this
            .liveInitOnBlockInsideEvent('click', 'reset-button', this.prototype._onResetClick)
            .liveInitOnBlockInsideEvent('update', 'form-control', this.prototype._onControlChange);
    }
}));

});
