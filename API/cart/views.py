from rest_framework import viewsets, status
from rest_framework.response import Response

from .models import Cart, CartItem
from .serializers import CartSerializer, CartItemSerializer

class CartViewSet(viewsets.ModelViewSet):
    queryset = Cart.objects.filter(id=1)
    serializer_class = CartSerializer
    pagination_class = None
    lookup_field = 'id'
    lookup_value_regex = '1'


class CartItemViewSet(viewsets.ModelViewSet):
    queryset = CartItem.objects.all()
    serializer_class = CartItemSerializer
    pagination_class = None


    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        product = serializer.validated_data['product']
        quantity = serializer.validated_data['quantity'] # -1

        cart_item = CartItem.objects.filter(product=product)
        
        if cart_item.exists():
            cart_item = cart_item.first()
            cart_item.quantity += quantity
            if cart_item.quantity == 0:
                cart_item.delete()
                return Response({"message": "success"})
            cart_item.save()
        else:
            cart_item = CartItem.objects.create(product=product, quantity=quantity)
        
        return Response({"message": "success"})