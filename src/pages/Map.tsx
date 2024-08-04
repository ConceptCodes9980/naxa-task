import { useEffect, useState } from "react";
import { Map as TileMap, View } from "ol";
import "ol/ol.css";
import MVT from "ol/format/MVT";
import VectorTileLayer from "ol/layer/VectorTile";
import VectorTileSource from "ol/source/VectorTile";
import { fromLonLat } from "ol/proj";

const vectorTileSources = {
  provinces:
    "https://vectortile.naxa.com.np/federal/province.mvt/?tile={z}/{x}/{y}",
  districts:
    "https://vectortile.naxa.com.np/federal/district.mvt/?tile={z}/{x}/{y}",
  municipalities:
    "https://vectortile.naxa.com.np/federal/municipality.mvt/?tile={z}/{x}/{y}",
};

type LayerType = keyof typeof vectorTileSources;

const Map = () => {
  const [tileLayer, setTileLayer] = useState<LayerType>("provinces");
  const [map, setMap] = useState<TileMap | null>(null);
  const [vectorLayer, setVectorLayer] = useState<VectorTileLayer | null>(null);

  useEffect(() => {
    const initialLayer = new VectorTileLayer({
      source: new VectorTileSource({
        format: new MVT(),
        url: vectorTileSources[tileLayer],
      }),
    });

    const initialMap = new TileMap({
      target: "map",
      layers: [initialLayer],
      view: new View({
        center: fromLonLat([84.324, 28.34]),
        zoom: 7,
      }),
    });

    setMap(initialMap);
    setVectorLayer(initialLayer);

    return () => {
      initialMap.setTarget(undefined);
    };
  }, [tileLayer]);

  useEffect(() => {
    if (map && vectorLayer) {
      const newSource = new VectorTileSource({
        format: new MVT(),
        url: vectorTileSources[tileLayer],
      });

      vectorLayer.setSource(newSource);
    }
  }, [tileLayer, map, vectorLayer]);

  const switchLayer = (layer: LayerType) => {
    setTileLayer(layer);
  };

  return (
    <>
      <div className="flex justify-center gap-10 py-4">
        <button
          onClick={() => switchLayer("provinces")}
          className="border border-black px-4 py-2 rounded"
        >
          Provinces
        </button>
        <button
          onClick={() => switchLayer("districts")}
          className="border border-black px-4 py-2 rounded"
        >
          Districts
        </button>
        <button
          onClick={() => switchLayer("municipalities")}
          className="border border-black px-4 py-2 rounded"
        >
          Municipalities
        </button>
      </div>
      <div id="map" className="w-full h-[80vh]" />
    </>
  );
};

export default Map;
