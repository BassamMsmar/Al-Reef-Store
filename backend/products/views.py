from django.shortcuts import render
from rest_framework import generics
from django_filters.rest_framework import DjangoFilterBackend

from .models import Products, Category
from .serializers import ProductSerializer, CategorySerializer


class ProductListView(generics.ListAPIView):
    queryset = Products.objects.all()
    serializer_class = ProductSerializer
    # filter_backends = [DjangoFilterBackend]
    # filterset_fields = ['category']


class CategoryListView(generics.ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


# Create your views here.
