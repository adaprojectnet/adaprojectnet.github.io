// JavaScript Document
		

//jBox

$(document).ready(function() {
	
	new jBox('Modal', {
    attach: '[data-aa]',
    outside: 'x',
	closeButton: 'title',
	draggable: 'title',
	title: 'Answer',
    
    // When created, append all contents
		onCreated: function () {
      this.content.append($('.aa'));
    },
    
    // When open, hide all content, then show specific content depending on source element
  	onOpen: function () {
    	$('.aa').css('display', 'none');
      $('#aa' + this.source.attr('data-aa')).css('display', 'block');
      
      // Reposition content, as size might have changed
      this.position();
    }
		
  });
	
});

$(document).ready(function() {
	
	new jBox('Modal', {
    attach: '[data-ss]',
    outside: 'x',
	closeButton: 'title',
	draggable: 'title',
	title: 'Solution',
    
    // When created, append all contents
		onCreated: function () {
      this.content.append($('.ss'));
    },
    
    // When open, hide all content, then show specific content depending on source element
  	onOpen: function () {
    	$('.ss').css('display', 'none');
      $('#ss' + this.source.attr('data-ss')).css('display', 'block');
      
      // Reposition content, as size might have changed
      this.position();
    }
		
  });
	
});

$(document).ready(function() {
	
	new jBox('Modal', {
    attach: '[data-vv]',
    outside: 'x',
	closeButton: 'title',
	draggable: 'title',
	title: 'Video',
    
    // When created, append all contents
		onCreated: function () {
      this.content.append($('.vv'));
    },
    
    // When open, hide all content, then show specific content depending on source element
  	onOpen: function () {
    	$('.vv').css('display', 'none');
      $('#vv' + this.source.attr('data-vv')).css('display', 'block');
      
      // Reposition content, as size might have changed
      this.position();
    }
		
  });
	
});

$(document).ready(function() {
	
	new jBox('Modal', {
    attach: '[data-dd]',
    outside: 'x',
	closeButton: 'title',
	draggable: 'title',
	title: 'Discussion',
    
    // When created, append all contents
		onCreated: function () {
      this.content.append($('.dd'));
			
    },
    
    // When open, hide all content, then show specific content depending on source element
  	onOpen: function () {
    	$('.dd').css('display', 'none');
      $('#dd' + this.source.attr('data-dd')).css('display', 'block');
      
      // Reposition content, as size might have changed
      this.position();
    }
		
  });
	
});

// End jBox

