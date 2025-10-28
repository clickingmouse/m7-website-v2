'use client'
import React, { use, useMemo } from 'react';
import {createRoot} from 'react-dom/client';
import {useApiIsLoaded, APIProvider, Map, AdvancedMarker, Pin, InfoWindow} from '@vis.gl/react-google-maps';
import  trees  from '@/data/map/getting-here/arrivalpoints';

//import { config }  from 'dotenv'
//config({path: '.env.local' })

//import Places from "./places"
//import Disttance from "./distance"


type LatLngLiteral = google.maps.LatLngLiteral;
type DirectionsResults = google.maps.DirectionsResult;
type MapOptions = google.maps.MapOptions;


export default function MapPlayground() {

    

    const position ={ lat:22.2985, lng:114.1747}; // M7 location
    const m7 = useMemo<LatLngLiteral>(()=>({ lat:22.2985, lng:114.1747}),[]);
    const options = useMemo<MapOptions>(()=>({
        disableDefaultUI:true,
        clickableIcons:false,
    }),[]);

console.log('GOOGLE_MAPS_API_KEY:', process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY);
console.log('GOOGLE_MAP_ID:', process.env.NEXT_PUBLIC_MAP_ID);
console.log(JSON.stringify(trees, null, 2)); 

// if (useApiIsLoaded() === false) {
//     return <div>Loading map...</div>;
// }   
    return (<>

    <div className="flex" style={{height:'100vh' }}>
        <div className='controls' style={{width:'20%', padding:'1rem'}}>
            <h1> Select ?</h1>
        </div>
        <div className='map-container' style={{width:'80%', height:'100vh'}}>
   <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}>
    <Map defaultZoom={11} defaultCenter={m7}  disableDefaultUI={true} clickableIcons={false} 
    mapId={process.env.NEXT_PUBLIC_MAP_ID}>

        <Markers points = {trees} />
    </Map>
    </APIProvider>
    </div>
</div>

    </>
    )
}


type Point = google.maps.LatLngLiteral & {key:string};
type Props = {points: Point[]};

const Markers = ({points}: Props) =>{
    console.log('Markers points:', points);
    return (
    <>
    {points.map((point)=> <AdvancedMarker key={point.key} position={point}>
        <span> Majestic7Guesthouse</span>
        </AdvancedMarker>
      ) } 
    
    </>)
}


