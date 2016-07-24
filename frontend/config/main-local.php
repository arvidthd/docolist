<?php

$config = [
    'components' => [
        'request' => [
            // !!! insert a secret key in the following (if it is empty) - this is required by cookie validation
<<<<<<< HEAD
            'cookieValidationKey' => 'SvFJG9G3Ujc-V9dYBJOI42lKSGuJQxaz',
=======
            'cookieValidationKey' => 'sJ6HRf-3ekNhdKH1iN8BN3E54idoNxmp',
        ],
        'db' => [
            'class' => 'yii\db\Connection',
            'dsn' => 'mysql:host=localhost;dbname=docolist',
            'username' => 'root',
            'password' => '',
            'charset' => 'utf8',
>>>>>>> ddb2d2a07dc73f4869693f4b39c5eb74ce7ad2bf
        ],
    ],
];

if (!YII_ENV_TEST) {
    // configuration adjustments for 'dev' environment
    $config['bootstrap'][] = 'debug';
    $config['modules']['debug'] = [
        'class' => 'yii\debug\Module',
    ];
    $config['bootstrap'][] = 'gii';
    $config['modules']['gii'] = [
        'class' => 'yii\gii\Module',
    ];
}

return $config;
