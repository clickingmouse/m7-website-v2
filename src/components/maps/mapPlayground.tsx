'use client'
import React, { use, useEffect, useMemo, useState } from 'react';
import {createRoot} from 'react-dom/client';
import {useApiIsLoaded, useMap, useMapsLibrary, APIProvider, Map, AdvancedMarker, Pin, InfoWindow} from '@vis.gl/react-google-maps';
import  trees  from '@/data/map/getting-here/arrivalpoints';
import { dir } from 'console';

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
        <Directions/>
    </Map>
    </APIProvider>
    </div>
</div>

    </>
    )
}


function Directions() {
    const map = useMap()
    const routesLibrary = useMapsLibrary('routes')
    const [directionsService, setDirectionsService] = useState<google.maps.DirectionsService>();
    const [directionsRenderer, setDirectionsRenderer] = useState<google.maps.DirectionsRenderer>();
    
    

    //google.maps.DirectionsRoute[]
    const [routes, setRoutes] = useState<google.maps.DirectionsRoute[]>([]);
    const [routeIndex, setRouteIndex] = useState(0);
    const selectedRoute = routes[routeIndex];
    const leg = selectedRoute?.legs[0];


    // listen to when services are loaded and initialization
    useEffect(() => {
      if (!map || !routesLibrary) return;
  
      setDirectionsService(new routesLibrary.DirectionsService());
      setDirectionsRenderer(new routesLibrary.DirectionsRenderer({map}));
      //directionsRenderer.setMap(map);        
    },[routesLibrary, map]);

    console.log('DirectionsService Loaded:', directionsService);


//find the route using directions service
useEffect(() => {
    if (!directionsService || !directionsRenderer) return;
// add way points
    directionsService.route({
        origin: "Hong Kong International Airport",
        destination : { lat:22.2985, lng:114.1747  },
        travelMode: google.maps.TravelMode.TRANSIT ,
        transitOptions: {modes: [google.maps.TransitMode.BUS]} ,
        provideRouteAlternatives: true,
    }).then((result) => {
        console.log('Directions Result:', result);
        directionsRenderer?.setDirections(result);
        setRoutes(result.routes)
    }).catch((e) => {
        console.error('Error fetching directions', e);
    });
},[directionsService, directionsRenderer]);
console.log('Routes:', routes);

    useEffect(() => {
        if (!directionsRenderer || routes.length === 0) return;
        //const directions = new google.maps.DirectionsResult();
        //directions.routes = routes;
        //directionsRenderer.setDirections(directions);
        directionsRenderer.setRouteIndex(routeIndex);
    }, [routeIndex, directionsRenderer, routes]);

if (!leg) return null;

return (
    <div className='directions'>
        <h2>{selectedRoute.summary} {selectedRoute.legs[0].steps[0].transit?.line.name} - {selectedRoute.legs[0].duration?.text} </h2>

    <h2> other routes</h2>
    <ul>
{routes.map((route, index) => (
    <li key={index}>
        <button onClick={() => setRouteIndex(index)}>
            {route.legs[0].steps[0].transit?.line.short_name ??  route.legs[0].steps[0].transit?.line.name} - {route.legs[0].duration?.text}
        </button>
    </li> ) ) }
    </ul>
    </div>
)
}
//////////////////////////////////////////////////

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


