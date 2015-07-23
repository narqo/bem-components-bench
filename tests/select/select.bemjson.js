({
    block: 'page',
    title: 'bem-components-bench: Select',
    mods: { theme: 'islands' },
    head : [
        { elem: 'css', url: '_select.css' },
        { elem: 'js', url: 'https://yastatic.net/jquery/2.1.3/jquery.js' }
    ],
    scripts : [
        { elem: 'js', url: '_select.js' }
    ],
    content: {
        block : 'form',
        content : Array.apply(null, { length : 15 }).map(function(_, i) {
            return [
                {
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
                        { val : 0, text : 'за все время' },
                        { val : 1, text : 'За сегодня' },
                        { val : 2, text : 'За 2 дня' },
                        { val : 3, text : 'За 3 дня' },
                        { val : 4, text : 'За неделю' },
                        { val : 5, text : 'За 2 недели' },
                        { val : 6, text : 'За 3 недели' },
                        { val : 7, text : 'За месяц' }
                    ]
                },
                {
                    block : 'select',
                    mix : {
                        block : 'form-control',
                        mods : { type : 'select' },
                        js : {}
                    },
                    mods : {
                        mode : 'radio-check',
                        theme : 'islands',
                        size : 'l'
                    },
                    name : 'year',
                    val : null,
                    text : 'Год выпуска от',
                    options : [
                        { val : 2015, text : 2015 },
                        { val : 2014, text : 2014 },
                        { val : 2013, text : 2013 },
                        { val : 2012, text : 2012 },
                        { val : 2011, text : 2011 },
                        { val : 2010, text : 2010 },
                        { val : 2009, text : 2009 },
                        { val : 2008, text : 2008 },
                        { val : 2007, text : 2007 },
                        { val : 2006, text : 2006 },
                        { val : 2005, text : 2005 },
                        { val : 2004, text : 2004 },
                        { val : 2003, text : 2003 },
                        { val : 2002, text : 2002 },
                        { val : 2001, text : 2001 },
                        { val : 2000, text : 2000 },
                        { val : 1999, text : 1999 },
                        { val : 1998, text : 1998 },
                        { val : 1997, text : 1997 },
                        { val : 1996, text : 1996 },
                        { val : 1995, text : 1995 },
                        { val : 1994, text : 1994 },
                        { val : 1993, text : 1993 },
                        { val : 1992, text : 1992 },
                        { val : 1991, text : 1991 },
                        { val : 1990, text : 1990 },
                        { val : 1989, text : 1989 },
                        { val : 1988, text : 1988 },
                        { val : 1987, text : 1987 },
                        { val : 1986, text : 1986 },
                        { val : 1985, text : 1985 },
                        { val : 1984, text : 1984 },
                        { val : 1983, text : 1983 },
                        { val : 1982, text : 1982 },
                        { val : 1981, text : 1981 },
                        { val : 1980, text : 1980 },
                        { val : 1979, text : 1979 },
                        { val : 1978, text : 1978 },
                        { val : 1977, text : 1977 },
                        { val : 1976, text : 1976 },
                        { val : 1975, text : 1975 },
                        { val : 1974, text : 1974 },
                        { val : 1973, text : 1973 },
                        { val : 1972, text : 1972 },
                        { val : 1971, text : 1971 },
                        { val : 1970, text : 1970 }
                    ]
                }
            ];
        })
    }
});
