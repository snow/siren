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

  $(document).keydown(function(e)
  {
    if(85 === e.which)
    {
      $('<div />').load(' .olt tbody', function()
      {
        $(this).find('tbody').replaceAll($('.olt tbody'));
      });
    }
  });
})(jQuery);
