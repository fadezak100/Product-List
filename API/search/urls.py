from django.urls import path
from .views import SearchListAPIView, CategorySearchListAPIView, SortProducts

urlpatterns = [
    path('', SearchListAPIView.as_view(), name="search"),
    path('<slug:slug>/', CategorySearchListAPIView.as_view()),
    path('sort/<slug:sort>/', SortProducts.as_view()),
]