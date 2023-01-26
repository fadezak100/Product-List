from rest_framework.routers import DefaultRouter

from django.urls import path
from product.views import ProductsViewSet
from category.views import CategoryViewSet

router = DefaultRouter()

router.register('product', ProductsViewSet, basename='product')
router.register('category', CategoryViewSet, basename='category')

urlpatterns = router.urls