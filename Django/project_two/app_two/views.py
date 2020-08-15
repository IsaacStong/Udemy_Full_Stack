from django.shortcuts import render
from app_two.forms import NewUser

# Create your views here.
def index(request):
    return render(request, 'app_two/index.html')

def users(request):
    form = NewUser()
    if request.method == 'POST':
        form = NewUser(request.POST)

        if form.is_valid():
            form.save(commit=True)
            return index(request)
        else:
            print('Error')

    return render(request, 'app_two/users.html', {'form': form})
