modules.define('reset-button', ['i-bem__dom', 'button'], function(provide, BemDom, _) {

provide(BemDom.decl(this.name, {
    _onButtonClick : function() {
        this.emit('click');
    }
}, {
    live : function() {
        this.liveInitOnBlockInsideEvent('click', 'button', this.prototype._onButtonClick)
    }
}));

});
