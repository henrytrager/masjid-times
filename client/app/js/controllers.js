'use strict';
var checkAppCache = function(){
  if(!(chrome && chrome.app)){
    window.applicationCache.update();
    window.applicationCache.addEventListener('updateready', function(e) {
      if (window.applicationCache.status == window.applicationCache.UPDATEREADY) {
        // Browser downloaded a new app cache.
        // Swap it in and reload the page to get the new hotness.
        window.applicationCache.swapCache();
        window.location.reload();
      } else {
        // Manifest didn't changed. Nothing new to server.
      }
    }, false);
  }
};
/* Controllers */

angular.module('myApp.controllers', []).
  controller('MasjidTimesCtrl', [function() {
      checkAppCache();
      window.backgrounds = [
        {prayer: 'fajr-top', element: $('#top-dashboard #fajr-bg.background')},
        {prayer: 'shuruq', element: $('#top-dashboard #shuruq-bg.background')},
        {prayer: 'duhr', element: $('#top-dashboard #duhr-bg.background')},
        {prayer: 'asr', element: $('#top-dashboard #asr-bg.background')},
        {prayer: 'maghrib', element: $('#top-dashboard #maghrib-bg.background')},
        {prayer: 'isha', element: $('#top-dashboard #isha-bg.background')},
        {prayer: 'fajr', element: $('#top-dashboard #isha-fajr-bg.background')}
      ];
      fixBackgroundHeight();
      $(window).resize(function(){
        fixBackgroundHeight();
      });

      // Button listeners
      doButtonListeners();
      mt = newMasjidTimes(masjidConfig);


      // NOTE: Event handlers should be called first before init.

      // Get the nearest mosques
      mt.on('mosques', function(nearestMosques){
        pickMosqueDialog(nearestMosques);
      });

      mt.on('tick', function(next){
        // Do this every second
        updateRemaining(next);
      });

      mt.on('day', function(){
        // It's a new day :) Update today's prayer times.
        populateTimes(mt.mosque);
      });

      mt.on('prayer', function(prayerTimes){
        setTimeout(function(){
          takbir.play();
          humane.log("Time for "+prayerTimes.prayer.toCapitalize()+ "! <span class='nextprayercounter'></span> ");
          updateRemaining();
        }, 1000);
      });

      mt.ready(function(){
        populateTimes(mt.mosque);
        updateRemaining();
      });

      // Ask for location
      mt.initFromCoords(function(cb){
        $('#nextprayercounter').html("This isn't si7r. We're calculating your location...");
        console.debug("getCurrentPosition called.");
        navigator.geolocation.getCurrentPosition(function(positionData){
          console.debug("Received current position: ", positionData);
          cb(positionData.coords);
        }, function(error){
          var doThisWhenError = function () {
            mt.initFromNothing();
          };
          switch(error.code){
            case error.PERMISSION_DENIED:
              bootbox.alert("Y u decline position ya3ni? <br /><br />We'll let you choose from the list of ALL mosques we have available.", doThisWhenError);
              break;
            case error.POSITION_UNAVAILABLE:
              bootbox.alert("It looks like we can't find your position! Maybe you're in the sahara desert or, ya3ni, your browser not very good. <br /><br />We'll let you choose from the list of ALL mosques we have available.", doThisWhenError);
              break;
            case error.TIMEOUT:
              bootbox.alert("It's taking longer than expected to figure out your position. Either your browser is lazy or, ya3ni, there's something wrong. <br /><br />We'll let you choose from the list of ALL mosques we have available.", doThisWhenError);
              break;
          }
        }, {timeout: 5000});
      });


      $('#top-nav').children('li').removeClass('active');
      $('#home-nav').addClass('active');

      if(mt.mosque){
        populateTimes(mt.mosque);
        updateRemaining();
      }
    }]).controller('AboutPageCtrl', [function(){
      checkAppCache();
      $('#top-nav').children('li').removeClass('active');
      $('#about-nav').addClass('active');

    }]);