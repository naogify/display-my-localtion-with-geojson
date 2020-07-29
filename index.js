if( navigator.geolocation ){

	navigator.geolocation.getCurrentPosition(

		( position ) => {
			let data = position.coords ;

			let lat = data.latitude ;
            let lng = data.longitude ;
            let element = document.querySelector(".geolonia");

            element.dataset.lat=lat
            element.dataset.lng=lng

            console.log({lat,lng,element})
        },
        
        ( error ) => {
            console.log(error)
        },
	) ;
}else{
    alert("お使いの端末は、GeoLacation APIに対応していません。");
}