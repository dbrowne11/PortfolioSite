# Generated by Django 4.1 on 2023-07-14 19:53

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ContactInfo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('date', models.DateTimeField(verbose_name='Time sent')),
                ('subject', models.CharField(max_length=128)),
                ('text', models.CharField(max_length=2048)),
                ('email', models.CharField(max_length=128)),
            ],
        ),
    ]
