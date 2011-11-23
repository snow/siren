/**
 * content scripts
 *
 * @author : snow@firebloom.cc
 * @license : GPLv3
 */

(function($)
{
  // show page action
  // ------------------
  chrome.extension.sendRequest({});

  function reload(){
      var j_maills = $('.olt tbody');

      // return if still loading or has item checked
      if(j_maills.hasClass('s-ing') || j_maills.find(':checked').length){
          return;
      }

      j_maills.addClass('s-ing');

      $('<div />').load(' .olt tbody', function()
      {
          // if item checked after loading start, stop here
          if(j_maills.find(':checked').length){
              return;
          }
          
          j_maills.replaceWith($(this).find('tbody'));
      });
  }

  setInterval(reload, 10000);
})(jQuery);
