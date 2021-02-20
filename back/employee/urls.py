from rest_framework import routers

from .views import EmployeeViewSet


router = routers.DefaultRouter()
router.register('', EmployeeViewSet, basename='nultempoyee')

urlpatterns = router.urls