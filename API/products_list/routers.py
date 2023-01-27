from rest_framework.routers import DefaultRouter

from django.urls import path
from product.views import ProductsViewSet
from category.views import CategoryViewSet
from cart.views import CartViewSet, CartItemViewSet

router = DefaultRouter()

router.register('product', ProductsViewSet, basename='product')
router.register('category', CategoryViewSet, basename='category')
router.register('carts', CartViewSet)
router.register('cart-items', CartItemViewSet)

urlpatterns = router.urls