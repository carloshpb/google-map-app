import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import { PlacesService } from '../services/places.service';
import { fromLonLat } from "ol/proj"
import { Place } from "../models/place.model";

@Component({
  selector: "app-openlayers",
  templateUrl: "./openlayers.component.html",
  styleUrls: ["./openlayers.component.scss"],
})
export class OpenlayersComponent implements AfterViewInit, OnInit {
  
  private map: Map;
  places: Place[];

  constructor(private placesService: PlacesService) {}

  ngOnInit() {
    this.places = this.placesService.getPlacesReference();
  }

  ngAfterViewInit() {
    this.map = new Map({
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      target: document.getElementById("map"),
      view: new View({
        center: fromLonLat([-47.918821 , -19.7615929]),
        zoom: 16,
      }),
    });
    setTimeout(() => {
      this.map.updateSize();
    }, 500);
  }

  addClickedMarker(id: number) {
    console.log(this.placesService.getPlace(id));
  }
}
