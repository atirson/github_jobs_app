import os
import requests

# Lê variáveis de ambiente
webhook_url = os.environ['GCHAT_WEBHOOK_URL']
title = os.environ.get('PR_TITLE', '(sem título)')
body = os.environ.get('PR_BODY', '(sem descrição)')
author = os.environ.get('PR_AUTHOR', 'desconhecido')
url = os.environ.get('PR_URL', '')
status = os.environ.get('PR_STATUS', 'desconhecido')

# Formata a mensagem
message = {
    "text": (
        f"*Novo evento de Pull Request*: `{status}`\n\n"
        f"📌 *Título:* {title}\n"
        f"📝 *Descrição:* {body}\n"
        f"👤 *Autor:* {author}\n"
        f"🔗 *Link:* {url}"
    )
}

# Envia a mensagem
response = requests.post(webhook_url, json=message)

# Verifica sucesso
if response.status_code != 200:
    print(f"Erro ao enviar para Google Chat: {response.status_code} - {response.text}")
    response.raise_for_status()
else:
    print("Mensagem enviada com sucesso para o Google Chat.")
