'use strict';

angular.module('Willis.version', [
  'Willis.version.interpolate-filter',
  'Willis.version.version-directive'
])

.value('version', '0.1');
