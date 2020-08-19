from django.urls import path
from basicapp import views

#TEMPLATE URLS!
app_name = 'basicapp'

urlpatterns = [
    path('register', views.register, name='register'),
]
