from django.db import models



class Employee(models.Model):
    Mobile = 1
    FrontEnd = 2
    BackEnd = 3
    TEAM_CHOICES = (
        (Mobile, 'Mobile'),
        (FrontEnd, 'FrontEnd'),
        (BackEnd, 'BackEnd'),
    )
    WOMAN = 1
    MAN = 2
    OTHER = 3 
    GENDER_CHOICE = (
        (WOMAN, 'WOMAN'),
        (MAN, 'MAN'),
        (OTHER, 'OTHER'),
    )
    name = models.CharField('nome ', max_length=255,blank=False, null=False)
    email = models.EmailField('email',max_length=200, null=False)
    birth_day = models.DateField('birthDay', null=False)
    gender = models.IntegerField('gender', 
        choices=GENDER_CHOICE,
        default=None)
    cpf = models.CharField('cpf', max_length=20, null=False)
    start_date = models.DateField('StartDate', null=False)
    team = models.IntegerField(
        'team',
        choices=TEAM_CHOICES,
        default=None
    )
    is_active = models.BooleanField(default=True)