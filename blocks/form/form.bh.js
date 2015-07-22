module.exports = function(bh) {
    bh.match('form', function(ctx) {
        var content = ctx.content();
        ctx
            .js(true)
            .content([
                {
                    block : 'button',
                    mods : {
                        theme : 'islands',
                        size : 'l'
                    },
                    mix : {
                        block : 'reset-button',
                        js : true
                    },
                    text : 'Очистить'
                }
            ].concat(content), true);
    });
};
