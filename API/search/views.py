from django.shortcuts import render
from rest_framework import generics
from rest_framework.response import Response

from . import client
from product.models import Product
from product.serializers import ProductSerializer
from category.models import Category
from django.db.models import Q

class SearchListAPIView(generics.GenericAPIView):
    
    def get(self, request, *args, **kwargs):
        query = request.GET.get('q')
        results = client.perform_search(query)

        if not query:
            return Response("", status=400)

        return Response(results)


class CategorySearchListAPIView(generics.GenericAPIView):
    queryset = Product.objects.all()

    def get(self, request, *args, **kwargs):
        params = kwargs['slug']
        sort_by = request.GET.get('q')
        products_query = None
        try: 
            category = Category.objects.get(name=params.lower())
            if sort_by == "name" or sort_by == "price":
                products_query = Product.objects.filter(category=category).order_by(sort_by)
            else:
                products_query = Product.objects.filter(category=category)
            products_list = ProductSerializer(products_query, many=True).data
            return Response(products_list)
        except Category.DoesNotExist:
            return Response({
                    'status':404,
                    'message': 'Not Found',
                    'data': []
                }) 


class SortProducts(generics.GenericAPIView):
    queryset = Product.objects.all()

    def get(self, request, *args, **kwargs):
        sort_by = kwargs['sort']

        products_query = Product.objects.all().order_by(sort_by)
        products_list = ProductSerializer(products_query, many=True).data
        
        return Response(products_list)