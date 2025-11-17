"""octofit_tracker URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

import os
from django.contrib import admin
from django.urls import path
from django.http import JsonResponse


# Helper to get codespace URL
def get_codespace_url():
    codespace_name = os.environ.get('CODESPACE_NAME', 'localhost')
    return f"https://{codespace_name}-8000.app.github.dev"



def api_root(request):
    codespace_url = get_codespace_url()
    return JsonResponse({
        "message": "Welcome to Octofit Tracker API!",
        "endpoints": [
            f"{codespace_url}/api/activities/",
            f"{codespace_url}/api/users/",
            f"{codespace_url}/api/teams/",
            f"{codespace_url}/api/leaderboard/",
            f"{codespace_url}/api/workouts/"
        ],
        "codespace_url": codespace_url
    })

def api_activities(request):
    codespace_url = get_codespace_url()
    url = f"{codespace_url}/api/activities/"
    return JsonResponse({
        "endpoint": url,
        "codespace_url": codespace_url,
        "message": "Octofit activities endpoint",
    })

urlpatterns = [
    path('', api_root),
    path('admin/', admin.site.urls),
    path('api/activities/', api_activities),
]
