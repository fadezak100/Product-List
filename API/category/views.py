from rest_framework import viewsets

from .models import Category
from .serializers import CategorySerializer
from product.mixins import UserThrottlingMixin, CachePageMixin

class CategoryViewSet(UserThrottlingMixin, CachePageMixin, viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    pagination_class = None
