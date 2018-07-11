$( document ).ready(function( $ ) {
		$( '.slide_wrap' ).sliderPro({
			width: 100%,
			height: 500,
			arrows: true,
			buttons: false,
			waitForLayers: true,
			thumbnailWidth: 200,
			thumbnailHeight: 100,
			thumbnailPointer: true,
			autoplay: false,
			autoScaleLayers: false,
			breakpoints: {
				500: {
					
				}
			}
		});
	});