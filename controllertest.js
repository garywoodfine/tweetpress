'use strict';
const twitCtrl = require('./twitter_controller');

var params = {
    tag: "#nodejs",
    count: 10
  }

   const ctrl = new twitCtrl();

   ctrl.favourite(params, function(){console.log('callback');});

   //callback(null,console.log("poo"));