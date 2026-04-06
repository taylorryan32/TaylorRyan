import base64, re

with open("assets/comp-fsc.png", "rb") as f:
    b64 = base64.b64encode(f.read()).decode("utf-8")

with open("index.html", "r") as f:
    html = f.read()

html = html.replace("./assets/comp-fsc.png", f"data:image/png;base64,{b64}")

with open("index.html", "w") as f:
    f.write(html)

print("Done!")
