var techs = require('enb-bem-techs'),
    fileProvider = require('enb/techs/file-provider'),
    //deps = require('enb-modules/techs/deps-with-modules'),
    stylus = require('enb-stylus/techs/css-stylus'),
    autoprefixer = require('enb-autoprefixer'),
    bhServer = require('enb-bh/techs/bh-server'),
    html = require('enb-bh/techs/html-from-bemjson'),
    browserJs = require('enb-diverse-js/techs/browser-js'),
    modules = require('enb-modules/techs/prepend-modules'),
    borschik = require('enb-borschik/techs/borschik');

var levels = [
    'libs/bem-core/common.blocks',
    'libs/bem-core/desktop.blocks',
    'libs/bem-components/common.blocks',
    'libs/bem-components/design/common.blocks',
    'libs/bem-components/desktop.blocks',
    'libs/bem-components/design/desktop.blocks',
    'blocks'
];

module.exports = function(config) {
    config.nodes('tests/*', function(nodeConfig) {
        nodeConfig.addTechs([
            [techs.levels, { levels: levels }],
            [fileProvider, {target: '?.bemjson.js'}],
            techs.bemjsonToBemdecl,
            techs.deps,
            techs.files,

            [bhServer, { jsAttrName: 'data-bem', jsAttrScheme: 'json', sourceSuffixes: [ 'bh.js' ] }],
            html,

            [stylus, { target: '?.css' }],
            [autoprefixer, { sourceTarget: '?.css', destTarget: '_?.css' }],
            [stylus, { target: '_?.ie.css', sourceSuffixes: ['styl', 'ie.styl'] }],

            browserJs,
            [modules, { source: '?.browser.js', target: '?.js' }],
            [borschik, { sourceTarget: '?.js', destTarget: '_?.js', minify: false }]
        ]);

        nodeConfig.addTargets(['?.html', '_?.css', '_?.js']);
    });
};

