# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib import admin

from .models import Owner, Product

# Register your models here.
admin.site.register(Owner)
admin.site.register(Product)