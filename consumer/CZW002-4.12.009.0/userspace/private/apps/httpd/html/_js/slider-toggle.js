/*
 * Class which binds a two-state slider to a pair of radio buttons.
 * Used for the enable/disable toggle on the WPS screen.
 */


function SliderToggle( onRadio, offRadio ) {
    this.onRadio = onRadio;
    this.offRadio = offRadio;
}
SliderToggle.prototype = {
    onRadio: null,
    offRadio: null,
    slider: null,

    curry: function( fn ) {
        var me = this;
        return function() {
            fn.apply( me, arguments );
        }
    },
    
    sliderChanged: function( e, ui ) {
        var val = ui.value;
        
        // snap to 0 or 1
        val = ( val < .5 ? 0 : 1 );
        this.slider.slider( 'value', val );
        
        // check the appropriate radio
        $( this[ val === 0 ? 'onRadio' : 'offRadio' ] ).attr( 'checked', true ).change();
        
        this.updateStyle();
    },
    
    radioChanged: function( e ) {
        // update slider to match
        this.slider.slider( 'value', ( e.target === this.onRadio ? 0 : 1 ) );
        
        this.updateStyle();
    },
    
    updateStyle: function() {
        var s = this.slider,
            val = s.slider( 'value' );
        // set class on the slider for styling
        s[ val === 0 ? 'addClass' : 'removeClass' ]( 'slider-toggle-enabled' );
    },
    
    initSlider: function() {
        this.slider = 
            $('<div class="slider-toggle"><div /></div>')
            .insertAfter(this.onRadio)
            .find('div')
            .slider( {
                animate: true,
                min: 0,
                max: 1,
                step: 0.01,
                value: ( this.onRadio.checked ? 0 : 1 ),
                stop: this.curry( this.sliderChanged )
            } );
    },
    
    initRadios: function() {
        var handler = this.curry( this.radioChanged );
        $( this.onRadio ).hide().change( handler );
        $( this.offRadio ).hide().change( handler );
    },
    
    init: function() {
        this.initRadios();
        this.initSlider();
        this.updateStyle();
    }
    
};

