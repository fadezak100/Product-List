from django.db import models
from category.models import Category
from django.db.models import Q


class ProductQuerySet(models.QuerySet):

    def search(self, query, user=None):
        lookup = Q(name__icontains=query) | Q(description__icontains=query)

        qs = self.filter(lookup)

        if user is not None:
            qs2 = self.filter(user=user).filter(lookup)
            qs = (qs | qs2).distinct()
        
        return qs

class ProductManager(models.Manager):
    def get_queryset(self, *args, **kwargs):
        return ProductQuerySet(self.model, using=self.db)
    
    def search(self, query, user=None):
        return self.get_queryset().search(query, user=user)

class Product(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True)
    thumbnail = models.URLField(default='https://psediting.websites.co.in/obaju-turquoise/img/product-placeholder.png')
    def __str__(self):
        return self.name