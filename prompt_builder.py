def build_prompt(topics=None, artist=None, lyrics=None, beat=None):
    prompt = "Schreibe einen deutschen Rap mit starkem Flow.\n\n"

    if topics:
        prompt += f"Themen: {topics}\n"
    if artist:
        prompt += f"Stil: {artist}\n"
    if lyrics:
        prompt += f"Eigene Zeilen:\n{lyrics}\n"
    if beat:
        prompt += f"Beat: {beat}\n"

    prompt += "\nStruktur: 2 Parts + Hook."

    return prompt
