---
title: Hillary Keel | Writing
layout: base.njk
templateEngineOverride: njk,md
---

## About Hillary

  **Hillary Keel (1960-2022) b. NY** poet, translator, and practicing hypnotherapist, was adjunct professor of German, English and the German fairy tale at Hunter College. She had lived in Vienna, Austria for most of her adult life, where she was active in the poetry scene. Hillary returned to the US to study at Nairopa Institute and then spent her last 13 years back in New York where she quickly became an active and beloved member of downtown NYC and poetry communities. For more about Hillary see <a href="https://hillarykeel.com">hillarykeel.com</a>, managed by her children; her own <a href="https://hillary16.herokuapp.com">website</a>; and her business page, <a href="https://millbrookhealing.com">Millbrook Healing</a>. The last poem published during her life is <a href="https://livemag.org/issue_19/keel"> here</a>.</p>

## Poems, Prose

{% for poem in collections.poems %}
  <h3><a class="poem-link" href="{{ poem.url }}">{{ poem.data.title }}</a></h3>

  <blockquote>{% excerpt poem %}</blockquote>
  
{%- endfor -%}



