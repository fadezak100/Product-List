from rest_framework import viewsets

from .models import Product
from .serializers import ProductSerializer
from .mixins import UserThrottlingMixin, CachePageMixin

class ProductsViewSet(UserThrottlingMixin, CachePageMixin, viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
