$.register({
  rule: [
    'http://*.abload.de/image.php?img=*',
    'http://fastpic.ru/view/*.html',
    'http://www.imagebanana.com/view/*',
    'http://www.imageup.ru/*/*/*.html',
    'http://itmages.ru/image/view/*/*',  // different layout same handler
  ],
  ready: function () {
    'use strict';

    var i = $('#image');
    $.openImage(i.src);
  },
});

// ex: ts=2 sts=2 sw=2 et
// sublime: tab_size 2; translate_tabs_to_spaces true; detect_indentation false; use_tab_stops true;
// kate: space-indent on; indent-width 2;
