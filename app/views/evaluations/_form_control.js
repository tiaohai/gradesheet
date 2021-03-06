// Control the movement between fields in the form
$$('form').each(function(f) {
  f.observe('keyup', function(event){
    // Move to the next field when the user presses the ENTER key
    switch (event.keyCode) {
      case Event.KEY_DOWN:
      case Event.KEY_RETURN:
        // Get the current tabIndex and add 1 to it
        var nextIndex = Event.element(event).tabIndex + 1;

        // Find the next field in the tab order and SELECT its contents
        var element = this.down('input[tabindex="' + nextIndex + '"]')
        if (element) {
          element.focus();
          element.select();
        }
        break;
        
      case Event.KEY_UP:
        // Get the current tabIndex and add 1 to it
        var prevIndex = Event.element(event).tabIndex - 1;

        // Find the next field in the tab order and SELECT its contents
        var element = this.down('input[tabindex="' + prevIndex + '"]')
        if (element) {
          element.focus();
          element.select();
        }
        break;
    }
  });
});

// Don't allow the page to be submitted as a form.
$$('form').each(function(f) {
  f.observe("submit", function(event){
    event.stop();
  });
});
