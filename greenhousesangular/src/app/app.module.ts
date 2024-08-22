import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EcosystemListComponent } from './ecosystem/ecosystem-list/ecosystem-list.component';
import { HttpClientModule } from '@angular/common/http';
import { EcosystemAddComponent } from './ecosystem/ecosystem-add/ecosystem-add.component'
import { ReactiveFormsModule } from '@angular/forms';
import { GreenhouseListComponent } from './greenhouse/greenhouse-list/greenhouse-list.component';
import { GreenhouseAddComponent } from './greenhouse/greenhouse-add/greenhouse-add.component';
import { LocationAddComponent } from './location/location-add/location-add.component';
import { LocationListComponent } from './location/location-list/location-list.component';
import { TerrainListComponent } from './terrain/terrain-list/terrain-list.component';
import { TerrainAddComponent } from './terrain/terrain-add/terrain-add.component';
import { EcosystemEditComponent } from './ecosystem/ecosystem-edit/ecosystem-edit.component';
import { HomeComponent } from './home/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GreenhouseEditComponent } from './greenhouse/greenhouse-edit/greenhouse-edit.component';
import { LocationEditComponent } from './location/location-edit/location-edit.component';
import { PesticideAddComponent } from './pesticide/pesticide-add/pesticide-add.component';
import { PesticideListComponent } from './pesticide/pesticide-list/pesticide-list.component';
import { PesticideEditComponent } from './pesticide/pesticide-edit/pesticide-edit.component';
import { PlantAddComponent } from './plant/plant-add/plant-add.component';
import { PlantListComponent } from './plant/plant-list/plant-list.component';
import { PlantEditComponent } from './plant/plant-edit/plant-edit.component';
import { PlantHarvestAddComponent } from './plantHarvest/plant-harvest-add/plant-harvest-add.component';
import { PlantHarvestEditComponent } from './plantHarvest/plant-harvest-edit/plant-harvest-edit.component';
import { PlantHarvestListComponent } from './plantHarvest/plant-harvest-list/plant-harvest-list.component';
import { PlantLifeCycleAddComponent } from './plantLifeCycle/plant-life-cycle-add/plant-life-cycle-add.component';
import { PlantLifeCycleEditComponent } from './plantLifeCycle/plant-life-cycle-edit/plant-life-cycle-edit.component';
import { PlantLifeCycleListComponent } from './plantLifeCycle/plant-life-cycle-list/plant-life-cycle-list.component';
import { PlantNutrientLevelAddComponent } from './plantNutrientLevel/plant-nutrient-level-add/plant-nutrient-level-add.component';
import { PlantNutrientLevelEditComponent } from './plantNutrientLevel/plant-nutrient-level-edit/plant-nutrient-level-edit.component';
import { PlantNutrientLevelListComponent } from './plantNutrientLevel/plant-nutrient-level-list/plant-nutrient-level-list.component';
import { SoilTypeEditComponent } from './soilType/soil-type-edit/soil-type-edit.component';
import { SoilTypeAddComponent } from './soilType/soil-type-add/soil-type-add.component';
import { SoilTypeListComponent } from './soilType/soil-type-list/soil-type-list.component';
import { SpecieEditComponent } from './specie/specie-edit/specie-edit.component';
import { SpecieAddComponent } from './specie/specie-add/specie-add.component';
import { SpecieListComponent } from './specie/specie-list/specie-list.component';
import { TerrainEditComponent } from './terrain/terrain-edit/terrain-edit.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserAddComponent } from './user/user-add/user-add.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { VisitListComponent } from './visit/visit-list/visit-list.component';
import { VisitEditComponent } from './visit/visit-edit/visit-edit.component';
import { VisitAddComponent } from './visit/visit-add/visit-add.component';
import { VisitPriceListComponent } from './visitPrice/visit-price-list/visit-price-list.component';
import { VisitPriceEditComponent } from './visitPrice/visit-price-edit/visit-price-edit.component';
import { VisitPriceAddComponent } from './visitPrice/visit-price-add/visit-price-add.component';
import { VisitTimeAddComponent } from './visitTime/visit-time-add/visit-time-add.component';
import { VisitTimeEditComponent } from './visitTime/visit-time-edit/visit-time-edit.component';
import { VisitTimeListComponent } from './visitTime/visit-time-list/visit-time-list.component';
import { WateringAddComponent } from './watering/watering-add/watering-add.component';
import { WateringListComponent } from './watering/watering-list/watering-list.component';
import { WateringEditComponent } from './watering/watering-edit/watering-edit.component';
import { WeatherDateEditComponent } from './weatherDate/weather-date-edit/weather-date-edit.component';
import { WeatherDateAddComponent } from './weatherDate/weather-date-add/weather-date-add.component';
import { WeatherDateListComponent } from './weatherDate/weather-date-list/weather-date-list.component';
import { WorkerListComponent } from './worker/worker-list/worker-list.component';
import { WorkerAddComponent } from './worker/worker-add/worker-add.component';
import { WorkerEditComponent } from './worker/worker-edit/worker-edit.component';
import { WorkScheduleEditComponent } from './workSchedule/work-schedule-edit/work-schedule-edit.component';
import { WorkScheduleAddComponent } from './workSchedule/work-schedule-add/work-schedule-add.component';
import { WorkScheduleListComponent } from './workSchedule/work-schedule-list/work-schedule-list.component';
import { PhotoEditComponent } from './photo/photo-edit/photo-edit.component';
import { PhotoListComponent } from './photo/photo-list/photo-list.component';
import { PhotoAddComponent } from './photo/photo-add/photo-add.component'; 

@NgModule({
  declarations: [
    AppComponent,
    EcosystemListComponent,
    EcosystemAddComponent,
    GreenhouseListComponent,
    GreenhouseAddComponent,
    LocationAddComponent,
    LocationListComponent,
    TerrainListComponent,
    TerrainAddComponent,
    EcosystemEditComponent,
    HomeComponent,
    GreenhouseEditComponent,
    LocationEditComponent,
    PesticideAddComponent,
    PesticideListComponent,
    PesticideEditComponent,
    PlantAddComponent,
    PlantListComponent,
    PlantEditComponent,
    PlantHarvestAddComponent,
    PlantHarvestEditComponent,
    PlantHarvestListComponent,
    PlantLifeCycleAddComponent,
    PlantLifeCycleEditComponent,
    PlantLifeCycleListComponent,
    PlantNutrientLevelAddComponent,
    PlantNutrientLevelEditComponent,
    PlantNutrientLevelListComponent,
    SoilTypeEditComponent,
    SoilTypeAddComponent,
    SoilTypeListComponent,
    SpecieEditComponent,
    SpecieAddComponent,
    SpecieListComponent,
    TerrainEditComponent,
    UserEditComponent,
    UserAddComponent,
    UserListComponent,
    VisitListComponent,
    VisitEditComponent,
    VisitAddComponent,
    VisitPriceListComponent,
    VisitPriceEditComponent,
    VisitPriceAddComponent,
    VisitTimeAddComponent,
    VisitTimeEditComponent,
    VisitTimeListComponent,
    WateringAddComponent,
    WateringListComponent,
    WateringEditComponent,
    WeatherDateEditComponent,
    WeatherDateAddComponent,
    WeatherDateListComponent,
    WorkerListComponent,
    WorkerAddComponent,
    WorkerEditComponent,
    WorkScheduleEditComponent,
    WorkScheduleAddComponent,
    WorkScheduleListComponent,
    PhotoEditComponent,
    PhotoListComponent,
    PhotoAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
