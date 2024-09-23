import os
import django

# إعداد متغير البيئة لمشروع Django الخاص بك
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'project.settings')  # استبدل 'project' باسم مشروعك الفعلي
django.setup()


from products.models import Category, Products
import random
from faker import Faker
from django.core.files.base import ContentFile


def handle():
    fake = Faker()

    # Create categories
    categories = ['Electronics', 'Clothing',
                  'Books', 'Home & Garden', 'Toys']
    for cat_name in categories:
        Category.objects.create(name=cat_name)

        # Create products
    for _ in range(50):  # Create 50 products
        category = Category.objects.order_by('?').first()
        name = fake.catch_phrase()
        price = round(random.uniform(10, 1000), 2)

        product = Products.objects.create(
            name=name,
            price=price,
            category=category
        )

        # Create a dummy image (1x1 pixel)
    dummy_image = ContentFile(
        b'\x00\x00\x00\x00', name=f'{fake.slug()}.png')
    product.image.save(dummy_image.name, dummy_image, save=True)

    print('Successfully created dummy data using Faker')



handle()