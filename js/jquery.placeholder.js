jQuery.fn.placeholder = function (options) {
  var defaults = {
    text: '',
    css: '',
    top: 0,
    left: 0,
    color: '#000',
    fontsize: '1.0em'
  };

  var settings = $.extend({}, defaults, options);

  return this.each(function () {

    var input = $(this);

    var parent = input.parent();
	parent.css('position', 'relative');
	
    var placeholder = $('<div></div>');
    placeholder.addClass(settings.css);
    placeholder.text(settings.text);
    placeholder.css('position', 'absolute');
    placeholder.css('top', input.position().top + settings.top);
    placeholder.css('left', input.position().left + settings.left);
    placeholder.css('color', settings.color);
    placeholder.css('opacity', 0.7);
    placeholder.css('cursor', input.css('cursor'));
    placeholder.css('font-size', settings.fontsize);
    placeholder.css('display', 'none');
    parent.append(placeholder);

    toggle();

    function toggle() {
      var haveFocus = input.is(":focus");
      var empty = (input.val().length == 0);

      if (haveFocus)
        placeholder.hide();

      if (!haveFocus && empty)
        placeholder.show();
    }

    $(input).bind('change', toggle);

    // When input got focus, hide placeholder.
    $(input).bind('focusin', function () {
      placeholder.hide();
    });

    // When we lose focus and input is empty, show placeholder.
    $(input).bind('focusout', function () {
      var empty = (input.val().length == 0);
      if (empty)
        placeholder.show();
    });

    // Treat placeholder click as click on input.
    $(placeholder).bind('click', function () {
      input.focus();
    });

  });
};