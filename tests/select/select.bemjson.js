({
    block: 'page',
    title: 'bem-components-bench: Select',
    mods: { theme: 'islands' },
    head: [
        { elem: 'css', url: '_select.css' },
        { elem: 'js', url: '_select.js' }
    ],
    content: {
        block : 'form',
        content : Array.apply(null, { length : 25 }).map(function(_, i) {
            return {
                block : 'select',
                mix : {
                    block : 'form-control',
                    mods : { type : 'select' },
                    js : {}
                },
                mods : {
                    mode : 'radio-check',
                    theme : 'islands',
                    size : 'l',
                    width : 'available'
                },
                name : 'period' + (i + 1),
                text : 'Срок размещения',
                options : [
                    { val : '', text : 'за все время' },
                    { val : 1, text : 'За сегодня' },
                    { val : 2, text : 'За 2 дня' },
                    { val : 3, text : 'За 3 дня' },
                    { val : 4, text : 'За неделю' },
                    { val : 5, text : 'За 2 недели' },
                    { val : 6, text : 'За 3 недели' },
                    { val : 7, text : 'За месяц' }
                ]
            };
        })
    }
});
