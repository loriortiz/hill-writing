---
title: Hillary Keel Strohmeier | Writing
layout: base.njk
templateEngineOverride: njk,md
---

  Poetry and Prose by the late NY-based writer, translator, and Hypnotherapist Hillary Keel. For more about Hillary, see <a href="https://hillarykeel.com">hillarykeel.com</a>, her old <a href="https://hillary16.herokuapp.com">website</a>, and her business page: <a href="https://millbrookhealing.com">Millbrook Healing</a>. See a 2022 poem by Hillary <a href="https://livemag.org/issue_19/keel">here</a>.</p>


{% for poem in collections.poems %}

- [{{ poem.data.title }}]({{poem.url}})

{%- endfor %}