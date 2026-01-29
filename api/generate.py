import json
import os
import openai
from prompt_builder import build_prompt

# Testmodus aus Environment Variable (optional)
TEST_MODE = (os.getenv("TEST_MODE") or "true").lower() == "true"


# OpenAI API-Key
openai.api_key = os.getenv("OPENAI_API_KEY")

def handler(request):
    if request.method != "POST":
        return {
            "statusCode": 405,
            "body": json.dumps({"error": "Method not allowed"})
        }

    data = json.loads(request.body)

    # 🧪 TESTMODUS (kein API-Key nötig)
    if TEST_MODE:
        return {
            "statusCode": 200,
            "body": json.dumps({
                "rap": (
                    "🎤 TESTMODUS 🎤\n\n"
                    "Kein API-Key nötig, der Flow läuft,\n"
                    "Vercel am Start, das Backend ist cool.\n"
                    "Anfrage kam rein – alles gut,\n"
                    "Test-Rap aktiviert, voller Mut."
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

    try:
        response = openai.ChatCompletion.create(
            model="gpt-4o-mini",
            messages=[{"role": "user", "content": prompt}],
            temperature=0.9
        )

        rap_text = response.choices[0].message.content

    except Exception as e:
        return {
            "statusCode": 500,
            "body": json.dumps({"error": f"Serverfehler: {str(e)}"})
        }

    return {
        "statusCode": 200,
        "body": json.dumps({"rap": rap_text})
    }
