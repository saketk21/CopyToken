document.addEventListener( 'DOMContentLoaded', function () {
	var copyTokenButton = document.getElementById( 'copyTokenButton' );
	copyTokenButton.addEventListener( 'click', function () {
		chrome.tabs.executeScript( null, {
			code: "document.execCommand('selectAll'); window.getSelection().toString();"
		}, function ( selection ) {
			var accessToken = JSON.parse( selection[ 0 ] )[ 'access_token' ];
			console.log( accessToken );
			var dummy = document.createElement( 'textarea' );
			document.body.appendChild( dummy );
			dummy.value = accessToken;
			dummy.select();
			document.execCommand( 'copy' );
			document.body.removeChild( dummy );

			// Show Success Message
			copyTokenButton.classList.add( 'displayNone' );
			document.getElementById( 'successMsg' ).classList.remove( 'displayNone' );
		} );
		chrome.tabs.executeScript( null, {
			code: "window.getSelection().removeAllRanges();"
		} );
	}, false );
}, false );