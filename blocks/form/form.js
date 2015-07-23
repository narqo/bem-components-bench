modules.define('form', ['i-bem__dom', 'reset-button', 'select'], function(provide, BemDom, _, _) {

provide(BemDom.decl(this.name, {
    reset : function() {
        this._getSelects();
    },

    _getSelects : function() {
        var time = Date.now();
        var res = this.findBlocksInside('select');
        time = Date.now() - time;
        this.elem('timer').text('findBlocksInside "select" time: ' + time);
        return res;
    },

    _onResetClick : function() {
        this.reset();
    }
}, {
    live : function() {
        this.liveInitOnBlockInsideEvent('click', 'reset-button', this.prototype._onResetClick);
    }
}));

});
