# main/serializers.py

from rest_framework import serializers
from .models import (
    Ecosystem, Location, WeatherDate, Terrain, SoilType, Greenhouse, 
    VisitPrice, VisitTime, Plant, PlantNutrientLevel, Specie, PlantLifeCycle, 
    PlantHarvest, Watering, Pesticide, Visit, Worker, User, WorkSchedule, Photo
)

class EcosystemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ecosystem
        fields = '__all__'

class LocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Location
        fields = '__all__'

class WeatherDateSerializer(serializers.ModelSerializer):
    class Meta:
        model = WeatherDate
        fields = '__all__'

class TerrainSerializer(serializers.ModelSerializer):
    class Meta:
        model= Terrain
        fields = '__all__'

class SoilTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model= SoilType
        fields= '__all__'

class GreenhouseSerializer(serializers.ModelSerializer):
    class Meta:
        model= Greenhouse
        fields= '__all__'

class VisitPriceSerializer(serializers.ModelSerializer):
    class Meta:
        model= VisitPrice
        fields= '__all__'

class VisitTimeSerializer(serializers.ModelSerializer):
    class Meta:
        model= VisitTime
        fields= '__all__'

class PlantSerializer(serializers.ModelSerializer):
    class Meta:
        model= Plant
        fields= '__all__'

class PlantNutrientLevelSerializer(serializers.ModelSerializer):
    class Meta:
        model= PlantNutrientLevel
        fields= '__all__'

class SpecieSerializer(serializers.ModelSerializer):
    class Meta:
        model= Specie
        fields= '__all__'

class PlantLifeCycleSerializer(serializers.ModelSerializer):
    class Meta:
        model= PlantLifeCycle
        fields= '__all__'

class PlantHarvestSerializer(serializers.ModelSerializer):
    class Meta:
        model= PlantHarvest
        fields= '__all__'

class WateringSerializer(serializers.ModelSerializer):
    class Meta:
        model= Watering
        fields= '__all__'
        
class PesticideSerializer(serializers.ModelSerializer):
    class Meta:
        model= Pesticide
        fields= '__all__'

class VisitSerializer(serializers.ModelSerializer):
    class Meta:
        model= Visit
        fields= '__all__'
        
class WorkerSerializer(serializers.ModelSerializer):
    class Meta:
        model= Worker
        fields= '__all__'

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model= User
        fields= '__all__'

class WorkScheduleSerializer(serializers.ModelSerializer):
    class Meta:
        model= WorkSchedule
        fields= '__all__'

class PhotoSerializer(serializers.ModelSerializer):
    class Meta:
        model= Photo
        fields= '__all__'
