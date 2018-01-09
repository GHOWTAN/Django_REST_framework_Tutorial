# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from .models import Product, Owner
from django.contrib import admin

# Register your models here.
admin.site.register(Product)
admin.site.register(Owner)