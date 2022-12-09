---
title: Hillary Keel | Writing
layout: base.njk
templateEngineOverride: njk,md
---

## About Hillary

  **Hillary Keel (1959-2022) b. NY**. Poet; translator; certified hypnotherapist; and adjunct professor of German, English and the German fairy tale at Hunter College. She had lived in Vienna, Austria for most of her adult life, where she was active in the poetry scene. Hillary returned to the US to earn her MFA in creative writing at Naropa University and then spent her last 13 years back in New York where she quickly became an active and beloved member of downtown NYC, poetry communities, and the readings circuit. In the last year of her life, Hillary completed a manuscript of poems in which she delves into the life and works of Johannes Vermeer and reflects upon her own life. A poem from this manuscript was published<a href="https://livemag.org/issue_19/keel"> here</a>. For more about Hillary see <a href="https://hillarykeel.com">hillarykeel.com</a>, managed by her children; her own <a href="https://hillary16.herokuapp.com">website</a>; and her business page, <a href="https://millbrookhealing.com">Millbrook Healing</a>.</p>

## Poems, Prose

<ul class="menu">

  {%- for poem in collections.poems -%}
    <li>
      <a href="{{ poem.url }}">{{ poem.data.title }}</a>
      <p>{% excerpt poem %}</p>
    </li>
  {%- endfor -%}

</ul>

