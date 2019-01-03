---
title: Adult Basic Education Authorization
---
The **Adult Basic Education Authorization** (ABEA) is the only credential issued by the CDE Office of Educator Preparation, Licensing and Enforcement for educators who work with adult learners to improve literacy skills, English language proficiency and/or to prepare them to pass a high school equivalency exam.

The ABEA is not required in order to teach adult basic education in Colorado. It is, however, the policy of the Office of Adult Education Initiatives (AEI) to require the ABEA of all instructors teaching in programs receiving federal funds through the Adult Education and Family Literacy Act (AEFLA). In this context, the ABEA serves to ensure that instructors in those programs are “well-trained” as stipulated by AEFLA. As a result, instructors must either already have the ABEA when they join an AEFLA-funded program, or be willing to obtain it within three years of joining an AEFLA-funded program.

**ABEA courses required for the credential:**

 * EDU-131 (or EDAE-520) - Introduction to Adult Education
 * EDU-132 (or EDAE-620) - Planning and Delivering Instruction to Adult Learners
 * EDU-133 (or EDAE-530) - Teaching Adult Basic Education (ABE)/Adult Secondary Education (ASE)
 * EDU-134 (or EDAE-540) - Teaching English as a Second Language (ESL) to Adults

{% for collection in site[page.slug] %}
  <article>

   {%- unless collection.available == FALSE -%}
    <h2 class="mdc-typography--headline2">{{ collection.title }}</h2>
   {%- endunless -%}

   {{ collection.content | markdownify }}

  </article>
{% endfor %}
