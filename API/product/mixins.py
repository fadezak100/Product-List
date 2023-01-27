from rest_framework.throttling import UserRateThrottle, AnonRateThrottle
from django.utils.decorators import method_decorator
from django.views.decorators.cache import cache_page
from rest_framework.mixins import UpdateModelMixin

class UserThrottlingMixin():
    throttle_classes = [UserRateThrottle, AnonRateThrottle]
    

class CachePageMixin(UpdateModelMixin):
    cache_timeout = 60 * 15

    def dispatch(self, request, *args, **kwargs):
        return cache_page(self.cache_timeout)(super().dispatch)(request, *args, **kwargs)