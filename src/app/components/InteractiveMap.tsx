import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { locations } from "../data/locations";

type InteractiveMapProps = {
  currentLocationId: number;
  onLocationSelect: (id: number) => void;
};

export default function InteractiveMap({ currentLocationId, onLocationSelect }: InteractiveMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markersRef = useRef<L.Marker[]>([]);

  useEffect(() => {
    if (!mapRef.current) return;

    // Initialize map
    if (!mapInstanceRef.current) {
      mapInstanceRef.current = L.map(mapRef.current, {
        center: [41.9028, 12.4964],
        zoom: 13,
        zoomControl: true,
        scrollWheelZoom: true,
      });

      // Add tile layer
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '© OpenStreetMap contributors',
      }).addTo(mapInstanceRef.current);

      // Add markers
      locations.forEach((location) => {
        const isActive = location.id === currentLocationId;
        
        // Create custom icon
        const iconHtml = `
          <div style="
            width: 32px;
            height: 32px;
            background: ${isActive ? '#000' : '#fff'};
            color: ${isActive ? '#fff' : '#000'};
            border: 2px solid ${isActive ? '#fff' : '#000'};
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 13px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 2px 8px rgba(0,0,0,0.3);
          ">
            ${location.id}
          </div>
        `;

        const customIcon = L.divIcon({
          html: iconHtml,
          className: 'custom-marker',
          iconSize: [32, 32],
          iconAnchor: [16, 16],
        });

        const marker = L.marker(location.coordinates, { icon: customIcon })
          .addTo(mapInstanceRef.current!)
          .on('click', () => {
            onLocationSelect(location.id);
          });

        markersRef.current.push(marker);
      });
    }

    // Update marker styles when currentLocationId changes
    return () => {
      markersRef.current.forEach((marker, index) => {
        const location = locations[index];
        const isActive = location.id === currentLocationId;
        
        const iconHtml = `
          <div style="
            width: 32px;
            height: 32px;
            background: ${isActive ? '#000' : '#fff'};
            color: ${isActive ? '#fff' : '#000'};
            border: 2px solid ${isActive ? '#fff' : '#000'};
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 13px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 2px 8px rgba(0,0,0,0.3);
          ">
            ${location.id}
          </div>
        `;

        const customIcon = L.divIcon({
          html: iconHtml,
          className: 'custom-marker',
          iconSize: [32, 32],
          iconAnchor: [16, 16],
        });

        marker.setIcon(customIcon);
      });
    };
  }, [currentLocationId, onLocationSelect]);

  // Pan to current location
  useEffect(() => {
    if (mapInstanceRef.current) {
      const currentLocation = locations.find(loc => loc.id === currentLocationId);
      if (currentLocation) {
        mapInstanceRef.current.flyTo(currentLocation.coordinates, 15, {
          duration: 1.5,
        });
      }
    }
  }, [currentLocationId]);

  return (
    <div className="h-full w-full">
      <div ref={mapRef} className="h-full w-full" />
      <style>{`
        .leaflet-container {
          background: #f5f5f0;
          font-family: inherit;
        }
        .leaflet-popup-content-wrapper {
          border-radius: 0;
          font-family: inherit;
        }
        .custom-marker {
          background: transparent !important;
          border: none !important;
        }
      `}</style>
    </div>
  );
}