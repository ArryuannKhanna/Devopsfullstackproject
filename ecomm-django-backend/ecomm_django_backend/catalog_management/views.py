from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from .models import Product
from .serialisers import ProductSerializer

class AddProductView(APIView):
    def post(self,request):
        serializer = ProductSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_202_ACCEPTED)
        else:
            return Response(data=serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    def get(self,request):
        AllProducts = Product.objects.all()
        serializer = ProductSerializer(AllProducts,many=True)
        return Response(serializer.data,status=status.HTTP_202_ACCEPTED)

# Create your views here.
