---
year: 2018
title: "The 2018 Pre-Rendezvous"
theme: "Adult Education Ambassadors: Train the Trainer"
availability: true

startDate: "2018-10-22T08:00:00.000"
duration: "8:00 AM - 5:00 PM both days"

location: "Double Tree by Hilton"
address: "8773 Yates Drive"
city: "Westminster"
state: "CO"
zipcode: "80031"
phone: "(303) 427-4000"

forms:
  - "application-ambassador"
  - "rendezvous-registration"

relatedItems:
  - title: "DoubleTree Reservations"
    url: "http://doubletree.hilton.com/en/dt/groups/personalized/D/DENNSDT-CAE-20181021/index.jhtml"

---
<div itemscope itemtype="http://schema.org/Event">
  <span itemprop="name" content="{{ page.title }}" />
  <span itemprop="description" content="{{ page.theme }}" />
  <p class="post-meta">
    <time datetime="{{ page.startDate | date_to_xmlschema }}" itemprop="startDate">
      {%- assign date_format = site.minima.date_format | default: "%B %-d, %Y" -%}
      {{ page.startDate | date: date_format }}
    </time>
  </p>
  <p class="post-meta">{{ page.duration }}</p>
  <div itemprop="location" itemscope itemtype="http://schema.org/Place">
    <span itemprop="name">{{ page.location }}</span>
    <div itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">
      <span itemprop="streetAddress">{{ page.address }}</span><br>
      <span itemprop="addressLocality">{{ page.city }}</span>,
      <span itemprop="addressRegion"> {{ page.state }}</span>
      <span itemprop="postalCode"> {{ page.zipcode }}</span>
    </div>
  </div>
</div>

Ambassadors become representational leaders by developing their voices, so they can effectively represent other students and take action for social change on issues they care about.

CAEPA's Student Ambassadors Task Force wants to establish teams of trainers from programs around the state:

Director/Administrator + Staff/Instructor + Student Leadership

## Ambassador Training 4 Components

Awareness
: Statistics and research about the value of adult basic education

Stories
: Most powerful tool to affect change

Public speaking
: Message and delivery

Meeting with officials
: Planing, practicing, facilitating meeting with people in power

## Goals

* Develop role and identity as a representational leader
* Provide students with skills for college and career success
* Increase visibility of adult education
* Offer networking for students- current and alumni
* Heighten the impact of Educate & Elevate with trained student leaders who are ready to deliver their powerful stories

For more information contact <ambassadors@caepa.org>
