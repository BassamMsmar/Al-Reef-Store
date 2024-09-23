from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=200)
    
    def __str__(self):
        return self.name
# Create your models here.
class Products(models.Model):
    name = models.CharField(max_length=200)
    price = models.FloatField()
    category = models.ForeignKey(Category , related_name='product_category',on_delete=models.SET_NULL,null=True)
    image = models.ImageField(upload_to='products/')
    
    def __str__(self):
        return self.name