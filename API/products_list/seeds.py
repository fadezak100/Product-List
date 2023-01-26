import os
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'products_list.settings')

import django
django.setup()

from category.models import Category

CATEGORIES = [
    {'name': 'Electronics', 'description': 'Electronics such as phones, laptops, and tablets'},
    {'name': 'Fashion', 'description': 'Clothing, shoes, and accessories'},
    {'name': 'Home & Garden', 'description': 'Furniture, home decor, and gardening supplies'},
    {'name': 'Sports & Outdoors', 'description': 'Equipment and gear for sports and outdoor activities'},
    {'name': 'Toys & Games', 'description': 'Toys, games, and hobbies'},
    {'name': 'Automotive', 'description': 'Parts, accessories, and tools for cars and motorcycles'},
    {'name': 'Health & Beauty', 'description': 'Personal care, makeup, and health products'},
    {'name': 'Books & Media', 'description': 'Books, music, and movies'},
    {'name': 'Food & Grocery', 'description': 'Food, drinks, and household essentials'},
    {'name': 'Services', 'description': 'Services such as home repairs, personal training, and photography'},
]

def seed():
    categories = [Category(**category) for category in CATEGORIES]

    Category.objects.bulk_create(categories)

if __name__ == '__main__':
    seed()
