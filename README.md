# PRISMA-POSTGRES-TYPESCRIPT

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/4c223b9cdac84e23990217125eedefe9)](https://app.codacy.com/manual/josphatwambugu77/PRISMA-POSTGRES-TYPESCRIPT?utm_source=github.com&utm_medium=referral&utm_content=wambugucoder/PRISMA-POSTGRES-TYPESCRIPT&utm_campaign=Badge_Grade_Settings)

A simple crud Application created using Typescript and Prisma

Just started doing integrations tests.



## WHAT IS PRISMA?

Prisma is a database toolkit. 

The toolkit includes Prisma Client, which is an auto-generated query builder that exposes queries which are tailored to your models.



## To understand how Prisma and ORMs differ conceptually, here's a brief overview of how their building blocks relate to databases:


| Database	  |       ORMS |             Prisma|
| ------------- | ------------- |  ------------|
|SQL Schema | 	Migrations and model classes  |    	      Prisma schema|
|Tables	       |  Model classes	|                        Models in the Prisma schema|
|Columns   	  |Properties in model classes	Model   |         fields in the Prisma schema|
|Records	     |   Instances of a model class (objects)|	  Plain JavaScript objects|
|Foreign keys	|  Foreign keys on model classes          |	Relations between Prisma models|
