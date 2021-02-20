from django.shortcuts import render
from rest_framework import status, viewsets
from .models import Employee
from .serializer import EmployeeSerializer

class EmployeeViewSet(viewsets.ModelViewSet):
    queryset = Employee.objects.filter(is_active = True)
    serializer_class = EmployeeSerializer
    
