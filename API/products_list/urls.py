from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/v1/', include('products_list.routers')),
    path('api/v1/search/', include('search.urls'))
]
