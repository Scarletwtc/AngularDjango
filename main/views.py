from django.shortcuts import render
from rest_framework import viewsets
from .models import (Ecosystem, Location, Watering, WeatherDate, Worker,WorkSchedule,Greenhouse, Pesticide, Photo, Plant, PlantHarvest, PlantLifeCycle, PlantNutrientLevel, VisitPrice, Visit, VisitTime, Terrain, SoilType, User,Specie)
from .serializers import(EcosystemSerializer, LocationSerializer, WateringSerializer, WeatherDateSerializer, WorkerSerializer, WorkScheduleSerializer, GreenhouseSerializer, PesticideSerializer, PhotoSerializer, PlantSerializer, PlantHarvestSerializer, PlantLifeCycleSerializer, PlantNutrientLevelSerializer, VisitPriceSerializer, VisitTimeSerializer, VisitSerializer, TerrainSerializer, SoilTypeSerializer, UserSerializer, SpecieSerializer)

#API Endpoints: Views (or viewsets) are required to expose your data through API endpoints. They handle the logic for retrieving, creating, updating, or deleting records.
#In DRF, viewsets are a type of view that automatically provides implementations for the standard CRUD operations.
# Create your views here.
class EcosystemViewSet(viewsets.ModelViewSet):
    queryset = Ecosystem.objects.all()
    serializer_class = EcosystemSerializer

class LocationViewSet(viewsets.ModelViewSet):
    queryset = Location.objects.all()
    serializer_class = LocationSerializer

class WeatherDateViewSet(viewsets.ModelViewSet):
    queryset = WeatherDate.objects.all()
    serializer_class = WeatherDateSerializer

class TerrianViewSet(viewsets.ModelViewSet):
    queryset = Terrain.objects.all()
    serializer_class =TerrainSerializer

class SoilTypeViewSet(viewsets.ModelViewSet):
    queryset = SoilType.objects.all()
    serializer_class =SoilTypeSerializer

class GreenhouseViewSet(viewsets.ModelViewSet):
    queryset = Greenhouse.objects.all()
    serializer_class =GreenhouseSerializer

class VisitPriceViewSet(viewsets.ModelViewSet):
    queryset = VisitPrice.objects.all()
    serializer_class =VisitPriceSerializer

class VisitTimeViewSet(viewsets.ModelViewSet):
    queryset = VisitTime.objects.all()
    serializer_class =VisitTimeSerializer

class PlantViewSet(viewsets.ModelViewSet):
    queryset = Plant.objects.all()
    serializer_class =PlantSerializer

class PlantNutrientLevelViewSet(viewsets.ModelViewSet):
    queryset = PlantNutrientLevel.objects.all()
    serializer_class =PlantNutrientLevelSerializer

class SpecieViewSet(viewsets.ModelViewSet):
    queryset = Specie.objects.all()
    serializer_class =SpecieSerializer

class PlantLifeCycleViewSet(viewsets.ModelViewSet):
    queryset = PlantLifeCycle.objects.all()
    serializer_class =PlantLifeCycleSerializer

class PlantHarvestViewSet(viewsets.ModelViewSet):
    queryset = PlantHarvest.objects.all()
    serializer_class = PlantHarvestSerializer

class WateringViewSet(viewsets.ModelViewSet):
    queryset = Watering.objects.all()
    serializer_class =WateringSerializer

class PesticideViewSet(viewsets.ModelViewSet):
    queryset = Pesticide.objects.all()
    serializer_class =PesticideSerializer

class VisitViewSet(viewsets.ModelViewSet):
    queryset = Visit.objects.all()
    serializer_class =VisitSerializer

class WorkerViewSet(viewsets.ModelViewSet):
    queryset = Worker.objects.all()
    serializer_class =WorkerSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class =UserSerializer

class WorkScheduleViewSet(viewsets.ModelViewSet):
    queryset = WorkSchedule.objects.all()
    serializer_class =WorkScheduleSerializer

class PhotoViewSet(viewsets.ModelViewSet):
    queryset = Photo.objects.all()
    serializer_class= PhotoSerializer


