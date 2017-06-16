/*
 * Class which binds a two-state slider to a pair of radio buttons.
 * Used for the enable/disable toggle on the WPS screen.
 */


function ToggleButton( onRadio, offRadio ) {
    this.onRadio = onRadio;
    this.offRadio = offRadio;
}
ToggleButton.prototype = {
    onRadio: null,
    offRadio: null,
    button: null,
	
	onsrc: '../_images/h_wirelesssetup_wpsdisable.png',
	onLabel: 'Click the button to disable WPS in the modem.',
	offsrc: '../_images/h_wirelesssetup_wpsenable.png',
	offLabel: 'Click the button to enable WPS in the modem.',

    curry: function( fn ) {
        var me = this;
        return function() {
            fn.apply( me, arguments );
        }
    },
	
	isOn: function() {
		return $(this.onRadio).is(':checked');
	},
    
    buttonClicked: function( e ) {
        var isReturn = this.becofeCheck(e);
        if(isReturn ){return;}

/*  //__Qwest__, Ling-Chun       
        // check the appropriate radio and fire the change handler
        $( this[ this.isOn() ? 'offRadio' : 'onRadio' ] ).attr( 'checked', true ).change();
		e.preventDefault();
*/		
    //__Qwest__, Ling-Chun  
		$( this[ this.isOn() ? 'offRadio' : 'onRadio' ] ).attr( 'checked', true );
        this.onClick(e);        
    },
    
    becofeCheck: function( e ) {
    	return wscModeCheck();
	},
    
    onClick: function( e ) {
    	btnEnableApply();
    },
    
    
    radioChanged: function( e ) {
        this.updateButton();
    },
    
    updateButton: function() {
		var on = this.isOn(),
			src = ( on ? this.onsrc : this.offsrc ),
			label = ( on ? this.onLabel : this.offLabel );
        this.buttonImg.attr('src', src);
		this.buttonImg.attr('alt', label);
		this.buttonLabel.text(label);
    },
    
    initButton: function() {
        this.button = 
            $('<a href="#" class="toggle-button"></a>')
            .insertAfter(this.onRadio.parentNode).
			click( this.curry(this.buttonClicked) );
		this.buttonImg =
			$('<img src="" alt="" />')
			.appendTo(this.button);
		this.buttonLabel =
			$('<span class="toggle-button-label" />')
			.insertAfter(this.button);
    },
    
    initRadios: function() {
        var handler = this.curry( this.radioChanged );
		$( this.onRadio.parentNode ).hide();
        $( this.onRadio ).change( handler );
        $( this.offRadio ).change( handler );
    },
    
    init: function() {
        this.initRadios();
        this.initButton();
        this.updateButton();
    }
    
};

