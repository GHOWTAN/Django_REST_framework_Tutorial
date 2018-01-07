# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

class Owner(models.Model);
	name = models.CharField(max_length=20)
	address = models.CharField(max_length=255)
	email = models.CharField(max_length=255)
	phone = models.IntegerField()
	product_unit =  models.CharField(max_length=255)
	
	def __str__(self):
		return self.name

class Product(models.Model);
	unit = models.CharField(max_length=20)

	def __str__(self):
		return self.unit