from rest_framework import serializers
from .models import Product

class CategoryInlineSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=255)

class ProductSerializer(serializers.ModelSerializer):
    category_name = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Product
        fields = (
            'id',
            'name',
            'description',
            'price',
            'thumbnail',
            'category',
            'category_name',
        )
    
    def get_category_name(self, obj):
        return CategoryInlineSerializer(obj.category).data['name']