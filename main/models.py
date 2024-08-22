from django.db import models

# Create your models here.
class Greenhouse(models.Model):
    GreenhouseID = models.AutoField(primary_key=True)
    Name = models.CharField(max_length=50, null=False, blank=False)
    
    def __str__(self):
        return self.Name

class Ecosystem(models.Model):
    EcosystemID = models.AutoField(primary_key=True)
    Type = models.CharField(max_length=50, null=False, blank=False)
    Description = models.CharField(max_length=1000, null=False, blank=False)
    Greenhouse = models.ForeignKey(Greenhouse, on_delete=models.CASCADE, null=False, blank=False)
    
    def __str__(self):
        return self.Type

class Location(models.Model):
    LocationID = models.AutoField(primary_key=True)
    Name = models.CharField(max_length=50, null=False, blank=False)
    Region = models.CharField(max_length=150, null=False, blank=False)
    Climate = models.CharField(max_length=50, null=False, blank=False)
    Latitude = models.FloatField(null=False, blank=False)
    Longitude = models.FloatField(null=False, blank=False)
    Ecosystem = models.ForeignKey(Ecosystem, on_delete=models.CASCADE, null=False, blank=False)
    
    def __str__(self):
        return self.Name

class WeatherDate(models.Model):
    WeatherDateID = models.AutoField(primary_key=True)
    Date = models.DateTimeField(auto_now_add=True)
    Temperature = models.FloatField(null=False, blank=False)
    Precipitation = models.FloatField(null=False, blank=False)
    Humidity = models.IntegerField(null=False, blank=False)
    Location = models.ForeignKey(Location, on_delete=models.CASCADE, null=False, blank=False)
    
    def __str__(self):
        return str(self.Date)

class Terrain(models.Model):
    TerrainID = models.AutoField(primary_key=True)
    Type = models.CharField(max_length=50, null=False, blank=False)
    Features = models.CharField(max_length=1000, null=False, blank=False)
    Ecosystem = models.ForeignKey(Ecosystem, on_delete=models.CASCADE, null=False, blank=False)
    
    def __str__(self):
        return self.Type

class SoilType(models.Model):
    SoilTypeID = models.AutoField(primary_key=True)
    Type = models.CharField(max_length=50, null=False, blank=False)
    Terrain = models.ForeignKey(Terrain, on_delete=models.CASCADE, null=False, blank=False)
    
    def __str__(self):
        return self.Type

class Visit(models.Model):
    VisitID = models.AutoField(primary_key=True)
    Greenhouse = models.ForeignKey(Greenhouse, on_delete=models.CASCADE)
    User = models.ForeignKey('User', on_delete=models.CASCADE)
    
    def __str__(self):
        return str(self.Greenhouse)

class VisitPrice(models.Model):
    VisitPriceID = models.AutoField(primary_key=True)
    Price = models.FloatField(null=False, blank=False)
    Visit = models.ForeignKey(Visit, on_delete=models.CASCADE)
    
    def __str__(self):
        return str(self.Price)

class VisitTime(models.Model):
    VisitTimeID = models.AutoField(primary_key=True)
    Duration = models.IntegerField()
    Visit = models.ForeignKey(Visit, on_delete=models.CASCADE)
    
    def __str__(self):
        return str(self.Duration)

class Plant(models.Model):
    PlantID = models.AutoField(primary_key=True)
    DatePlanted = models.DateField(null=False, blank=False)
    Height = models.FloatField(null=False, blank=False)
    Greenhouse = models.ForeignKey(Greenhouse, on_delete=models.CASCADE, null=False, blank=False)
    
    def __str__(self):
        return str(self.Height)

class PlantNutrientLevel(models.Model):
    PlantNutrientLevelID = models.AutoField(primary_key=True)
    Nitrogen = models.FloatField(null=False, blank=False)
    Phosphorus = models.FloatField(null=False, blank=False)
    Potassium = models.FloatField(null=False, blank=False)
    Plant = models.ForeignKey(Plant, on_delete=models.CASCADE)
    
    def __str__(self):
        return str(self.Nitrogen)

class Specie(models.Model):
    SpecieID = models.AutoField(primary_key=True)
    CommonName = models.CharField(max_length=50, null=False, blank=False)
    ScientificName = models.CharField(max_length=50, null=False, blank=False)
    Plant = models.ForeignKey(Plant, on_delete=models.CASCADE)
    
    def __str__(self):
        return self.CommonName

class PlantLifeCycle(models.Model):
    PlantLifeCycleID = models.AutoField(primary_key=True)
    GerminationDate = models.DateField(null=False, blank=False)
    MaturityDate = models.DateField(null=False, blank=False)
    Plant = models.ForeignKey(Plant, on_delete=models.CASCADE)
    
    def __str__(self):
        return str(self.GerminationDate)

class PlantHarvest(models.Model):
    PlantHarvestID = models.AutoField(primary_key=True)
    DateHarvested = models.DateTimeField(null=False, blank=False)
    Specie = models.ForeignKey(Specie, on_delete=models.CASCADE)
    
    def __str__(self):
        return str(self.DateHarvested)

class Watering(models.Model):
    WateringID = models.AutoField(primary_key=True)
    Frequency = models.IntegerField(null=False, blank=False)
    LastWatered = models.DateTimeField(null=False, blank=False)
    Plant = models.ForeignKey(Plant, on_delete=models.CASCADE)
    Worker = models.ForeignKey('Worker', on_delete=models.CASCADE)
    
    def __str__(self):
        return str(self.Frequency)

class Pesticide(models.Model):
    PesticideID = models.AutoField(primary_key=True)
    Type = models.CharField(max_length=50, null=False, blank=False)
    Date = models.DateTimeField(null=False, blank=False)
    Plant = models.ForeignKey(Plant, on_delete=models.CASCADE)
    Worker = models.ForeignKey('Worker', on_delete=models.CASCADE)
    
    def __str__(self):
        return self.Type

class Worker(models.Model):
    WorkerID = models.AutoField(primary_key=True)
    Date = models.DateTimeField(null=False, blank=False)
    WorkHours = models.IntegerField(null=False, blank=False)
    User = models.ForeignKey('User', on_delete=models.CASCADE)
    
    def __str__(self):
        return str(self.User)

class User(models.Model):
    UserID = models.AutoField(primary_key=True)
    Email = models.EmailField(null=False, blank=False)
    Password = models.CharField(max_length=50, null=False, blank=False)
    Username = models.CharField(max_length=50, null=False, blank=False)
    DateJoined = models.DateTimeField(null=False, blank=False)
    
    def __str__(self):
        return self.Username

class WorkSchedule(models.Model):
    WorkScheduleID = models.AutoField(primary_key=True)
    Date = models.DateTimeField(null=False, blank=False)
    WorkHours = models.IntegerField()
    Worker = models.ForeignKey(Worker, on_delete=models.CASCADE)
    
    def __str__(self):
        return str(self.Worker)

class Photo(models.Model):
    PhotoID = models.AutoField(primary_key=True)
    DateTaken = models.DateTimeField(null=False, blank=False)
    Plant = models.ForeignKey(Plant, on_delete=models.CASCADE)
    User = models.ForeignKey(User, on_delete=models.CASCADE)
    Image = models.ImageField(null=False, blank=False)
    
    def __str__(self):
        return str(self.User)

