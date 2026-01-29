import json
import os
import openai
from prompt_builder import build_prompt

# Passwort & Testmodus aus Vercel Environment Variables
PASSWORD = os.getenv("APP_PASSWORD", "test")
TEST_MODE = os.getenv("TEST_MODE", "true").lower() == "true"

openai.api_key = os.getenv("OPENAI_API_KEY")

def handler(request):
    if request.method != "POST":
        return {
            "statusCode": 405,
            "body": json.dumps({"error": "Method not allowed"})
        }

    data = json.loads(request.body)

    # 🔐 Passwort prüfen
    if data.get("password") != PASSWORD:
        return {
            "statusCode": 401,
            "body": json.dumps({"error": "Falsches Passwort"})
        }

    # 🧪 TESTMODUS (kein API-Key nötig)
    if TEST_MODE:
        return {
            "statusCode": 200,
            "body": json.dumps({
                "rap": (
                    "🎤 TESTMODUS 🎤\n\n"
                    "Kein API-Key, doch der Flow ist echt,\n"
                    "Vercel am Start, das Backend läuft perfekt.\n"
                    "Passwort korrekt, Anfrage kam rein,\n"
                    "Test-Rap aktiviert – alles fein."
                )
            })
        }

    # 🚀 NORMALMODUS (OpenAI)
    prompt = build_prompt(
        data.get("topics"),
        data.get("artist"),
        data.get("lyrics"),
        data.get("beat")
    )

    response = openai.ChatCompletion.create(
        model="gpt-4o-mini",
        messages=[{"role": "user", "content": prompt}],
        temperature=0.9
    )

    return {
        "statusCode": 200,
        "body": json.dumps({
            "rap": response.choices[0].message.content
        })
    }

