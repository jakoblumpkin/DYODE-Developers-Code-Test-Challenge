# DYODE-Developers-Code-Test-Challenge
1. Describe how you would make a line of text in a homepage section editable from theme customization and how you would access this in liquid.

<h1>{{section.settings.heading}}</h1>

{% schema %}
{
    "name": "Homepage",
    "settings": [
        {
            "type": "text",
            "label": "Homepage Heading",
            "id": "heading"
        }
    ]
{% endschema %}


2. How would you add the collection featured image as a banner on the collection liquid template?

{% if home_page.featured_image %}
<div class="collection-hero">
        <div class="collection-hero__image ratio-container lazyload js"
        data-bgset="{% include 'bgset', image: home_page.image %}"
        data-sizes="auto"
        data-parent-fit="cover"
        style="background-image: url('{{ home_page.image | img_url: '300x300' }});"></div>
        </div>
{% endif %}

3. Using liquid code and HTML, create a simple pagination container, "< 1 2 ... 5 >".

{% paginate collection.products by 5 %}
  {% for product in collection.products %}
       
  {% endfor %}  
{% endpaginate %}

4. Using liquid code, access the product named "Blue T-Shirt". Store the id, title, handle, price, url, and image in variables.

{% assign title = "" %}
{% assign id = "" %}
{% assign handle = "" %}
{% assign price = "" %}
{% assign url = "" %}
{% assign image = "" %}

{% for product in collections['all'].products %}
        {% if product.title == "LED Strips" %}
            {% assign title =  product.title %}
            {% assign id =  product.id %}
            {% assign handle =  product.handle %}
            {% assign price =  product.price %}
            {% assign url =  product.url %}
            {% assign image =  product.image %}
        {% endif %}
{% endfor %}

5. Using liquid code, create a key:value array using the list below. Loop through the array. Upon key type, store the value in a variable to be used later:
        fruit:apple
        vegetable:carrot
        cloth:t-shirt
        denim:jeans

  {% assign title = "" %}
  {% assign id = "" %}
  {% assign handle = "" %}
  {% assign price = "" %}
  {% assign url = "" %}
  {% assign image = "" %}
  
  {% for product in collections['all'].products %}
        {% if product.title == "Blue T-Shirt" %}
          {% assign title =  product.title %}
          {% assign id =  product.id %}
          {% assign handle =  product.handle %}
          {% assign price =  product.price %}
          {% assign url =  product.url %}
          {% assign image =  product.image %}
        {% endif %}
  {% endfor %}