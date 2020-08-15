from django import forms
from app_two.models import User

class NewUser(forms.ModelForm):
    class Meta:
        model = User
        fields = '__all__'
