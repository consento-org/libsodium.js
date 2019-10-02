(function(root) {

function expose_libsodium(exports) {
    "use strict";
    var Module = exports;
    var __req = 'require'
    
    function re_quire (name) {
      if (!('module' in global) ||
          !(__req in global.module)) {
        throw new Error('Cant load ' + name + ' in this execution context.')
      }
      return global.module[__req](name)
    }
