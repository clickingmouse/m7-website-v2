'use client'
import React from 'react';
import {createRoot} from 'react-dom/client';
import {APIProvider, Map, AdvancedMarker, Pin, InfoWindow} from '@vis.gl/react-google-maps';
//import { config }  from 'dotenv'
//config({path: '.env.local' })

export default function Example() {

    const position ={ lat:22.2985, lng:114.1747}; // M7 location
console.log('GOOGLE_MAPS_API_KEY:', process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY);
    return (<>
<APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}>
    <div style={{height:'100vh'}}>
   
    <Map zoom={9} center={position} ></Map>
</div>
</APIProvider>
    </>
    )
}

