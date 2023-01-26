from algoliasearch_django import AlgoliaIndex
from algoliasearch_django.decorators import register

from .models import Product

@register(Product)

class ProductIndex(AlgoliaIndex):
    
    fields = [
        'name',
        'description',
        'price',
        'category',
        'thumbnail'
    ]


    settings = {
        "searchableAttributes": ['title', 'description'],
    }