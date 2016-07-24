Docolist for Hackaton July 2016
===============================

Team Member :
-------------------
```
Arvid, Firli, Edi
```

<<<<<<< HEAD
=======
Project Desc :
-------------------
```
Project Name :
Docolist

Desc :
Semacam app To-do-list untuk member internal Docotel.

Fungsi :
Untuk memudahkan para member Docotel untuk melihat kegiatan member-member lainnya. 
Contoh - Tanggal sekian, si A kemana, ngapain, sampai jam brapa
App ini ditujukan terutama untuk para leaders, CTO dan PM (troops jg bisa).

Detail :
App ini berbasis account. Jadi nanti harus punya sign-in member dulu baru bisa masuk ke app ini.

Stelah masuk, ada 2 tampilan, 
1. Dashboard pribadi
2. Dashboard general

Di Dashboard pribadi, smua member di app ini bisa bikin "Todo" listnya masing-masing, bisa di set sifat kegiatannya ini "private" ato "public".
Nah, nanti smua kegiatan yang di set "public" bakal digabungin dengan kgiatan member lain yg "public" juga dan ditampilin di Dashboard General.

Jadi di Dashboard General, kita bisa ngliat smua kegiatan member Docolist yang bersifat "public".
```


>>>>>>> ddb2d2a07dc73f4869693f4b39c5eb74ce7ad2bf
Framework Customize :
-------------------
```
- Pretty URL = On
```

Example Vhost Setup :
-------------------

```
C:\xampp\apache\conf\extra\httpd-vhosts.conf
```

```
<VirtualHost *:8080> 
 DocumentRoot "C:/xampp/htdocs/docolist/frontend/web"
 ServerName docofront.local
 
 <Directory "C:/xampp/htdocs/docolist/frontend/web">
	# use mod_rewrite for pretty URL support
       RewriteEngine on
       # If a directory or a file exists, use the request directly
       RewriteCond %{REQUEST_FILENAME} !-f
       RewriteCond %{REQUEST_FILENAME} !-d
       # Otherwise forward the request to index.php
       RewriteRule . index.php

       # use index.php as index file
       DirectoryIndex index.php 

  Options Indexes FollowSymLinks Includes ExecCGI
  AllowOverride All
  Order allow,deny
  Allow from all
 </Directory>
</VirtualHost>
```

Note :
```
("Rewrite Engine on" is the code for your framework's direct route,
so you dont have to add .htacess file anymore)
```

Next adding the local vhost address to windows' driver :
```
C:\Windows\System32\drivers\etc\hosts
(edit it by runnning notepad as administrator)
```

Local Database Setup :
-------------------
frontend\config\main-local.php
```
add :
'db' => [
	'class' => 'yii\db\Connection',
	'dsn' => 'mysql:host=localhost;dbname=docolist',
	'username' => 'root',
	'password' => '',
	'charset' => 'utf8',
]

under $config->components

make sure you already have database named : docolist
```

```
next, type : yii migrate
from your project folder, so it migrate the default database (tb : users, tb : migrate)
```

DIRECTORY STRUCTURE
-------------------

```
common
    config/              contains shared configurations
    mail/                contains view files for e-mails
    models/              contains model classes used in both backend and frontend
console
    config/              contains console configurations
    controllers/         contains console controllers (commands)
    migrations/          contains database migrations
    models/              contains console-specific model classes
    runtime/             contains files generated during runtime
backend
    assets/              contains application assets such as JavaScript and CSS
    config/              contains backend configurations
    controllers/         contains Web controller classes
    models/              contains backend-specific model classes
    runtime/             contains files generated during runtime
    views/               contains view files for the Web application
    web/                 contains the entry script and Web resources
frontend
    assets/              contains application assets such as JavaScript and CSS
    config/              contains frontend configurations
    controllers/         contains Web controller classes
    models/              contains frontend-specific model classes
    runtime/             contains files generated during runtime
    views/               contains view files for the Web application
    web/                 contains the entry script and Web resources
    widgets/             contains frontend widgets
vendor/                  contains dependent 3rd-party packages
environments/            contains environment-based overrides
tests                    contains various tests for the advanced application
    codeception/         contains tests developed with Codeception PHP Testing Framework
```
# docolist
