from rest_framework import serializers
from product.models import Product

from .models import Cart, CartItem
from product.serializers import ProductSerializer

class CartSerializer(serializers.ModelSerializer):
    products = serializers.PrimaryKeyRelatedField(many=True, queryset=Product.objects.all())
    class Meta:
        model = Cart
        fields = ('id','products')

class CartItemSerializer(serializers.ModelSerializer):
    product_list = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = CartItem
        fields = ('id', 'product', 'quantity', 'product_list')

    def get_product_list(self, obj):
        return ProductSerializer(obj.product).data