import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EcosystemListComponent } from './ecosystem/ecosystem-list/ecosystem-list.component';
import { EcosystemAddComponent } from './ecosystem/ecosystem-add/ecosystem-add.component';
import { EcosystemEditComponent } from './ecosystem/ecosystem-edit/ecosystem-edit.component';
import { GreenhouseListComponent } from './greenhouse/greenhouse-list/greenhouse-list.component';
import { GreenhouseAddComponent } from './greenhouse/greenhouse-add/greenhouse-add.component';
import { GreenhouseEditComponent } from './greenhouse/greenhouse-edit/greenhouse-edit.component';
import { LocationListComponent } from './location/location-list/location-list.component';
import { LocationEditComponent } from './location/location-edit/location-edit.component';
import { LocationAddComponent } from './location/location-add/location-add.component';
import { PesticideListComponent } from './pesticide/pesticide-list/pesticide-list.component';
import { PesticideAddComponent } from './pesticide/pesticide-add/pesticide-add.component';
import { PesticideEditComponent } from './pesticide/pesticide-edit/pesticide-edit.component';
import { TerrainListComponent } from './terrain/terrain-list/terrain-list.component';
import { TerrainAddComponent} from './terrain/terrain-add/terrain-add.component';
import { TerrainEditComponent } from './terrain/terrain-edit/terrain-edit.component';
import { PlantAddComponent } from './plant/plant-add/plant-add.component';
import { PlantEditComponent } from './plant/plant-edit/plant-edit.component';
import { PlantListComponent } from './plant/plant-list/plant-list.component';
import { PlantHarvestAddComponent } from './plantHarvest/plant-harvest-add/plant-harvest-add.component';
import { PlantHarvestEditComponent } from './plantHarvest/plant-harvest-edit/plant-harvest-edit.component';
import { PlantHarvestListComponent } from './plantHarvest/plant-harvest-list/plant-harvest-list.component';
import { PlantLifeCycleAddComponent } from './plantLifeCycle/plant-life-cycle-add/plant-life-cycle-add.component';
import { PlantLifeCycleEditComponent } from './plantLifeCycle/plant-life-cycle-edit/plant-life-cycle-edit.component';
import { PlantLifeCycleListComponent } from './plantLifeCycle/plant-life-cycle-list/plant-life-cycle-list.component';
import { PlantNutrientLevelAddComponent } from './plantNutrientLevel/plant-nutrient-level-add/plant-nutrient-level-add.component';
import { PlantNutrientLevelListComponent } from './plantNutrientLevel/plant-nutrient-level-list/plant-nutrient-level-list.component';
import { PlantNutrientLevelEditComponent } from './plantNutrientLevel/plant-nutrient-level-edit/plant-nutrient-level-edit.component';
import { SoilTypeAddComponent } from './soilType/soil-type-add/soil-type-add.component';
import { SoilTypeEditComponent } from './soilType/soil-type-edit/soil-type-edit.component';
import { SoilTypeListComponent } from './soilType/soil-type-list/soil-type-list.component';
import { SpecieAddComponent } from './specie/specie-add/specie-add.component';
import { SpecieEditComponent } from './specie/specie-edit/specie-edit.component';
import { SpecieListComponent } from './specie/specie-list/specie-list.component';
import { UserAddComponent } from './user/user-add/user-add.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { VisitAddComponent } from './visit/visit-add/visit-add.component';
import { VisitEditComponent } from './visit/visit-edit/visit-edit.component';
import { VisitListComponent } from './visit/visit-list/visit-list.component';
import { VisitTimeAddComponent } from './visitTime/visit-time-add/visit-time-add.component';
import { VisitTimeEditComponent } from './visitTime/visit-time-edit/visit-time-edit.component';
import { VisitTimeListComponent } from './visitTime/visit-time-list/visit-time-list.component';
import { VisitPriceAddComponent } from './visitPrice/visit-price-add/visit-price-add.component';
import { VisitPriceEditComponent } from './visitPrice/visit-price-edit/visit-price-edit.component';
import { VisitPriceListComponent } from './visitPrice/visit-price-list/visit-price-list.component';
import { WateringAddComponent } from './watering/watering-add/watering-add.component';
import { WateringEditComponent } from './watering/watering-edit/watering-edit.component';
import { WateringListComponent } from './watering/watering-list/watering-list.component';
import { WeatherDateAddComponent } from './weatherDate/weather-date-add/weather-date-add.component';
import { WeatherDateEditComponent } from './weatherDate/weather-date-edit/weather-date-edit.component';
import { WeatherDateListComponent } from './weatherDate/weather-date-list/weather-date-list.component';
import { WorkerAddComponent } from './worker/worker-add/worker-add.component';
import { WorkerEditComponent } from './worker/worker-edit/worker-edit.component';
import { WorkerListComponent } from './worker/worker-list/worker-list.component';
import { WorkScheduleAddComponent } from './workSchedule/work-schedule-add/work-schedule-add.component';
import { WorkScheduleEditComponent } from './workSchedule/work-schedule-edit/work-schedule-edit.component';
import { WorkScheduleListComponent } from './workSchedule/work-schedule-list/work-schedule-list.component';
import { HomeComponent } from './home/home/home.component';
import { PhotoAddComponent } from './photo/photo-add/photo-add.component';
import { PhotoEditComponent } from './photo/photo-edit/photo-edit.component';
import { PhotoListComponent } from './photo/photo-list/photo-list.component';

const routes: Routes = [
  { path: 'add-ecosystems', component: EcosystemAddComponent },
  { path: 'list-ecosystems', component: EcosystemListComponent},
  { path: 'edit-ecosystems/:id', component: EcosystemEditComponent},
  { path: 'add-greenhouses', component: GreenhouseAddComponent},
  { path: 'list-greenhouses', component: GreenhouseListComponent},
  { path: 'edit-greenhouses/:id', component: GreenhouseEditComponent},
  { path: 'add-locations', component: LocationAddComponent},
  { path: 'list-locations', component: LocationListComponent},
  { path: 'add-terrains', component: TerrainAddComponent},
  { path: 'list-terrains', component: TerrainListComponent},
  { path: 'edit-terrains/:id', component: TerrainEditComponent},
  { path: 'edit-locations/:id', component: LocationEditComponent},
  { path: 'home', component: HomeComponent },
  { path: 'add-pesticides', component: PesticideAddComponent},
  { path: 'list-pesticides', component: PesticideListComponent},
  { path: 'edit-pesticides/:id', component: PesticideEditComponent},
  { path: 'add-plants', component: PlantAddComponent},
  { path: 'list-plants', component: PlantListComponent},
  { path: 'edit-plants/:id', component: PlantEditComponent},
  { path: 'add-plant-harvests', component: PlantHarvestAddComponent},
  { path: 'list-plant-harvests', component: PlantHarvestListComponent},
  { path: 'edit-plant-harvests/:id', component: PlantHarvestEditComponent},
  { path: 'add-plant-life-cycles', component: PlantLifeCycleAddComponent},
  { path: 'list-plant-life-cycles', component: PlantLifeCycleListComponent},
  { path: 'edit-plant-life-cycles/:id', component: PlantLifeCycleEditComponent},
  { path: 'add-plant-nutrient-levels', component: PlantNutrientLevelAddComponent},  
  { path: 'list-plant-nutrient-levels', component: PlantNutrientLevelListComponent},
  { path: 'edit-plant-nutrient-levels/:id', component: PlantNutrientLevelEditComponent},
  { path: 'add-soil-types', component: SoilTypeAddComponent},
  { path: 'list-soil-types', component: SoilTypeListComponent},
  { path: 'edit-soil-types/:id', component: SoilTypeEditComponent},
  { path: 'add-species', component: SpecieAddComponent},
  { path: 'list-species', component: SpecieListComponent},
  { path: 'edit-species/:id', component: SpecieEditComponent},
  { path: 'add-users', component: UserAddComponent},
  { path: 'list-users', component: UserListComponent},
  { path: 'edit-users/:id', component: UserEditComponent},
  { path: 'add-visits', component: VisitAddComponent},
  { path: 'list-visits', component: VisitListComponent},
  { path: 'edit-visits/:id', component: VisitEditComponent},
  { path: 'add-visit-times', component: VisitTimeAddComponent},
  { path: 'list-visit-times', component: VisitTimeListComponent},
  { path: 'edit-visit-times/:id', component: VisitTimeEditComponent},
  { path: 'add-visit-prices', component: VisitPriceAddComponent},
  { path: 'list-visit-prices', component: VisitPriceListComponent},
  { path: 'edit-visit-prices/:id', component: VisitPriceEditComponent},
  { path: 'add-waterings', component: WateringAddComponent},
  { path: 'list-waterings', component: WateringListComponent},
  { path: 'edit-waterings/:id', component: WateringEditComponent},
  { path: 'add-weather-dates', component: WeatherDateAddComponent},
  { path: 'list-weather-dates', component: WeatherDateListComponent},
  { path: 'edit-weather-dates/:id', component: WeatherDateEditComponent},
  { path: 'add-workers', component: WorkerAddComponent},
  { path: 'list-workers', component: WorkerListComponent},
  { path: 'edit-workers/:id', component: WorkerEditComponent},
  { path: 'add-work-schedules', component: WorkScheduleAddComponent},
  { path: 'list-work-schedules', component: WorkScheduleListComponent},
  { path: 'edit-work-schedules/id', component: WorkScheduleEditComponent},
  { path: 'add-photos', component: PhotoAddComponent},
  { path: 'list-photos', component: PhotoListComponent},
  { path: 'edit-photos/:id', component: PhotoEditComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
