import {useState, useEffect} from 'react';

function GeoLocation() {

    const [location, setLocation] = useState({
        loaded: false,
        permission: null,
        coordenate: { lat: '', lng: ''}
    });

    const onSuccess = location => {
        setLocation({
            loaded: true,
            permission:true,
            coordenate:{
                lat: location.coords.latitude,
                lng: location.coords.longitude,
            }
        })
    }

    const onError = error => {
        setLocation({
            loaded: true,
            permission:false,
            error, 
        });
    }


    useEffect(() => {
        if(!('geolocation' in navigator)){
            onError({
                code:0,
                message: 'Geolocalización no soportada'
            })
            setLocation(state => ({
                ...state,
                loaded: true,
                error: {
                    code: 0,
                    message: 'Geolocalización no soportada'
                }
            }));
        }

        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }, []);

    return location;
}

export default GeoLocation
