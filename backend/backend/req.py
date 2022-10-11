
import json

def extract(request):
    return json.loads(request.body.decode('utf-8'))
