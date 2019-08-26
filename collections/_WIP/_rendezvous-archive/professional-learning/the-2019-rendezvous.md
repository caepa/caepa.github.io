---
published: true
year: 2018
title: "The 2019 Rendezvous"
theme: "SAVE THE DATE"
author: "George O'Clair, CAEPA President"
availability: true

startDate: "2019-10-10T08:00:00.000"
endDate: "2019-10-11T17:00:00.000"
# duration: "8:00 AM - 5:00 PM both days"
# location: "To be announced"
# address: "8773 Yates Drive"
# city: "Westminster"
# state: "CO"
# zipcode: "80031"
# phone: "(303) 427-4000"
# hotel: "Double Tree by Hilton"
# hotel-address: "8773 Yates Drive"
# hotel-city-state-zipcode: "Westminster, CO 80031"
# reservations-phone: "(303) 427-4000"
# price1-title: "Two-day registration (General)"
# price1: "175.00"
# price2-title: "w/Presenter discount"
# price2: "150.00"
# price3-title: "w/Mini-conference discount"
# price3: "125.00"
# price4-title: "One-day registration"
# price4: "87.50"

forms:
  - "rendezvous-registration"
  - "application-ambassador"

relatedItems:
#  - title: "DoubleTree Reservations"
#    url: "http://doubletree.hilton.com/en/dt/groups/personalized/D/DENNSDT-CAE-20181021/index.jhtml"

docs:
  -
    title: "2018 Rendezvous"
    image: "https://source.unsplash.com/fDzQTTDI7bs/220x220"
    url: "/professional-learning/the-2019-rendezvous"
  -
    title: "PDF: Program & Schedule"
    image: "https://drive.google.com/thumbnail?id=1deBSNHAJHI0w8qWyify1c7wwD_X9uNQR"
    url: "/professional-learning/the-2019-rendezvous/program"
  -
    title: "Awards"
    image: "https://source.unsplash.com/Xaanw0s0pMk/220x220"
    url: "/professional-learning/the-2019-rendezvous/awards"
  -
    title: "Keynotes"
    image: "https://source.unsplash.com/FpkXoY51lg8/220x220"
    url: "/professional-learning/the-2019-rendezvous/keynotes"
  -
    title: "Presenters"
    image: "https://source.unsplash.com/QrqeusbpFMM/220x220"
    url: "/professional-learning/the-2019-rendezvous/presenters"
  -
    title: "Sessions"
    image: "https://source.unsplash.com/MAYsdoYpGuk/220x220"
    url: "/professional-learning/the-2019-rendezvous/sessions"
  -
    title: "Session Documents"
    image: "https://source.unsplash.com/MldQeWmF2_g/220x220"
    url: "/resources/the-2019-rendezvous"
  -
    title: "2019 Vision"
    image: "https://source.unsplash.com/ErO0E8wZaTA/220x220"
    url: "/resources/the-2019-vision"
---

<article itemscope itemtype="http://schema.org/Event">
  <span itemprop="name" content="{{ page.title }}" />
  <span itemprop="description" content="{{ page.theme }}" />
  <p class="post-meta">
    <time datetime="{{ page.startDate | date_to_xmlschema }}" itemprop="startDate">
      {%- assign date_format = site.minima.date_format | default: "%B %-d, %Y" -%}
      {{ page.startDate | date: date_format }}
    </time>
      •
    <time datetime="{{ page.endDate | date_to_xmlschema }}" itemprop="endDate">
      {{ page.endDate | date: date_format }}
    </time>
  </p>
</article>
