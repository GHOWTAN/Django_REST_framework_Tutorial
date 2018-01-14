from django.contrib.auth.models import User, Group
from rest_framework import serializers
from .models import Owner, Product

class OwnerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Owner
        fields = ('name', 'address', 'email', 'phone', 'product_unit')


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ('__all__')

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('url', 'username', 'email', 'groups')


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ('url', 'name')