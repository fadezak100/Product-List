# Generated by Django 4.0.8 on 2023-01-26 17:54

import cart.models
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('cart', '0002_cartitem_remove_cart_product_remove_cart_quantity_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cartitem',
            name='cart',
            field=models.ForeignKey(default=cart.models.Cart.get_single_cart, on_delete=django.db.models.deletion.CASCADE, to='cart.cart'),
        ),
    ]