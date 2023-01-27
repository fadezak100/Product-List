from django.db import models
from product.models import Product

class Cart(models.Model):
    products = models.ManyToManyField(Product, through='CartItem')
    
    @classmethod
    def get_single_cart(cls):
        cart, created = Cart.objects.get_or_create(id=1)
        return cart

class CartItem(models.Model):
    cart = models.ForeignKey(Cart, on_delete=models.CASCADE, default=Cart.get_single_cart)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.IntegerField(null=True, default=1)
