from django.contrib import admin
from .models import (
    Ecosystem, Location, WeatherDate, Terrain, SoilType, Greenhouse, 
    VisitPrice, VisitTime, Plant, PlantNutrientLevel, Specie, PlantLifeCycle, 
    PlantHarvest, Watering, Pesticide, Visit, Worker, User, WorkSchedule, Photo
)

@admin.register(Ecosystem)
class EcosystemAdmin(admin.ModelAdmin):
    list_display = ('EcosystemID', 'Type', 'Description', 'Greenhouse')

@admin.register(Location)
class LocationAdmin(admin.ModelAdmin):
    list_display = ('LocationID', 'Name', 'Region', 'Climate', 'Latitude', 'Longitude', 'Ecosystem')

@admin.register(WeatherDate)
class WeatherDateAdmin(admin.ModelAdmin):
    list_display = ('WeatherDateID', 'Date', 'Temperature', 'Precipitation', 'Humidity', 'Location')

@admin.register(Terrain)
class TerrainAdmin(admin.ModelAdmin):
    list_display = ('TerrainID', 'Type', 'Features', 'Ecosystem')

@admin.register(SoilType)
class SoilTypeAdmin(admin.ModelAdmin):
    list_display = ('SoilTypeID', 'Type', 'Terrain')

@admin.register(Greenhouse)
class GreenhouseAdmin(admin.ModelAdmin):
    list_display = ('GreenhouseID', 'Name')

@admin.register(VisitPrice)
class VisitPriceAdmin(admin.ModelAdmin):
    list_display = ('VisitPriceID', 'Price', 'Visit')

@admin.register(VisitTime)
class VisitTimeAdmin(admin.ModelAdmin):
    list_display = ('VisitTimeID', 'Duration', 'Visit')

@admin.register(Plant)
class PlantAdmin(admin.ModelAdmin):
    list_display = ('PlantID', 'DatePlanted', 'Height', 'Greenhouse')

@admin.register(PlantNutrientLevel)
class PlantNutrientLevelAdmin(admin.ModelAdmin):
    list_display = ('PlantNutrientLevelID', 'Nitrogen', 'Phosphorus', 'Potassium', 'Plant')

@admin.register(Specie)
class SpecieAdmin(admin.ModelAdmin):
    list_display = ('SpecieID', 'CommonName', 'ScientificName', 'Plant')

@admin.register(PlantLifeCycle)
class PlantLifeCycleAdmin(admin.ModelAdmin):
    list_display = ('PlantLifeCycleID', 'GerminationDate', 'MaturityDate', 'Plant')

@admin.register(PlantHarvest)
class PlantHarvestAdmin(admin.ModelAdmin):
    list_display = ('PlantHarvestID', 'DateHarvested', 'Specie')

@admin.register(Watering)
class WateringAdmin(admin.ModelAdmin):
    list_display = ('WateringID', 'Frequency', 'LastWatered', 'Plant', 'Worker')

@admin.register(Pesticide)
class PesticideAdmin(admin.ModelAdmin):
    list_display = ('PesticideID', 'Type', 'Date', 'Plant', 'Worker')

@admin.register(Visit)
class VisitAdmin(admin.ModelAdmin):
    list_display = ('VisitID', 'Greenhouse', 'User')

@admin.register(Worker)
class WorkerAdmin(admin.ModelAdmin):
    list_display = ('WorkerID', 'Date', 'WorkHours', 'User')

@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ('UserID', 'Email', 'Username', 'DateJoined')

@admin.register(WorkSchedule)
class WorkScheduleAdmin(admin.ModelAdmin):
    list_display = ('WorkScheduleID', 'Date', 'WorkHours', 'Worker')

@admin.register(Photo)
class PhotoAdmin(admin.ModelAdmin):
    list_display = ('PhotoID', 'DateTaken', 'Plant', 'User')
