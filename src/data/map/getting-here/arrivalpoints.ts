// data set for map points 

type RawTree = [string, number, number];

type Tree = {
    key: string;
    name: string;
    lat: number;
    lng: number;
}

const trees: RawTree[] = [
    ['M7', 22.298692, 114.1723946],
 ];

 const formatted: Tree[] = trees.map(([name, lat, lng]) => ({
  name,
  lat,
  lng,
  key: JSON.stringify({ name, lat, lng }),
}));

export default formatted;