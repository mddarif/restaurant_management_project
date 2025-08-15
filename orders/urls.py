from django.urls import path
from .views import *

def urlpatterns(request):

urlpatterns = [
    {"name":"Margherita Pizza","price":299},
    {"name":"Pasta Alfredo","price":349},
    {"name":"Caesar Salad", "Price":149},
    
]
return render (request,"menu_list.html",{"menu_items":menu_items})