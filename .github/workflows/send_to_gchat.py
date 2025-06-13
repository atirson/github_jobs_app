import os
import requests

GCHAT_WEBHOOK_URL = os.environ['GCHAT_WEBHOOK_URL']
PR_TITLE = os.environ['PR_TITLE']
PR_URL = os.environ['PR_URL']
PR_AUTHOR = os.environ['PR_AUTHOR']

message = {
    "text": f"@all\nNovo Pull Request aberto por *{PR_AUTHOR}*:\n*{PR_TITLE}*\nVeja mais: {PR_URL}"
}

response = requests.post(GCHAT_WEBHOOK_URL, json=message)
response.raise_for_status()
