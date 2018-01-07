# Django_REST_framework_Tutorial
# followed this website step by step
# http://www.django-rest-framework.org/tutorial/quickstart/#project-setup 

  virtualenv env

  source env/bin/activate 

  pip install django

  pip install djangorestframework

  django-admin.py startproject tutorial .  # Note the trailing '.' character

  cd tutorial

  django-admin.py startapp quickstart

  cd ..

  python manage.py migrate

  python manage.py createsuperuser --email admin@example.com --username admin
