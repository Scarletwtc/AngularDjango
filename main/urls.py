from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (EcosystemViewSet, LocationViewSet, WeatherDateViewSet, TerrianViewSet, SoilTypeViewSet, GreenhouseViewSet, VisitPriceViewSet, VisitTimeViewSet, PlantViewSet, PlantNutrientLevelViewSet, SpecieViewSet,  PlantNutrientLevelViewSet, PlantLifeCycleViewSet, PlantHarvestViewSet, WateringViewSet, PesticideViewSet, VisitViewSet, WorkerViewSet, UserViewSet, WorkScheduleViewSet, PhotoViewSet)

router = DefaultRouter()
router.register(r'ecosystems', EcosystemViewSet)
router.register(r'locations', LocationViewSet)
router.register(r'weather_dates', WeatherDateViewSet)
router.register(r'terrains', TerrianViewSet)
router.register(r'soil_types', SoilTypeViewSet)
router.register(r'greenhouses', GreenhouseViewSet)
router.register(r'visit_prices', VisitPriceViewSet)
router.register(r'visit_times', VisitTimeViewSet)
router.register(r'plants', PlantViewSet)
router.register(r'plant_nutrient_levels', PlantNutrientLevelViewSet)
router.register(r'species', SpecieViewSet)
router.register(r'plant_life_cycles', PlantLifeCycleViewSet)
router.register(r'plant_harvests', PlantHarvestViewSet)
router.register(r'waterings', WateringViewSet)
router.register(r'pesticides', PesticideViewSet)
router.register(r'visits', VisitViewSet)
router.register(r'workers', WorkerViewSet)
router.register(r'users', UserViewSet)
router.register(r'work_schedules', WorkScheduleViewSet)
router.register(r'photos', PhotoViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
]