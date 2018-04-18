---
item: false
---


# Hardware and software

{% for dod in site.dads %}
{% if dod.item == true and dod.category == "hardware-and-software" %}
{{ dod.content }}
{% endif %}
{% endfor %}
