# Phone List

This application is a simple list of contacts that I made while I was studying AngularJS and Lumen Framework.

## How much time?

I made all project in nearly 15 hours split on two days.

## How to use

**1 - Clone the repository:**

- Option 01: By "clone or download" button on right top side of the git
 
- Option 02: Open the terminal and put this command on a folder of the your preference 
```bash
    git clone https://github.com/brunomartins-com/phonelist.git
```
- _If you don't have the git in your computer, please <a href="https://git-scm.com/book/en/v2/Getting-Started-Installing-Git" target="_blank">click here</a>)_

**2 - Configuring the API**
 
- 2.1 - Go to the "api" folder by terminal
```bash
    cd phonelist/api
```
- 2.2 - On "api", execute the command
```bash
    composer install
```
- _2.2.1 - If you don't have the composer in your computer, please <a href="https://getcomposer.org" target="_blank">click here</a>_

- 2.3 step:
```bash
    cp .env.example .env
```
- 2.4 step:
```bash
    php artisan migrate:install
```
- 2.5 step:
```bash
    php artisan migrate
```
- 2.6 step:
```bash
    composer dump-autoload
```
- 2.7 step:
```bash
    php artisan db:seed
```

**3 - Running the API**

- 3.1 - Execute this command on terminal for start API service
```bash
    php -S localhost:8000 -t public public/index.php
```

**4 - Install and Run the localhost server**

- 4.1 - Open another tab on terminal and go to "front-end" folder
```bash
    cd ../front-end
```
- 4.2 - Execute this command on terminal
```bash
    npm install -g http-server
```
- _4.2.1 - If you don't have the npm in your computer, please <a href="https://docs.npmjs.com/getting-started/installing-node" target="_blank">click here</a>)_

- 4.3 step:
```bash
    http-server -p 8080
```

- _The "http-server" command show your localhost address, that probably will be:_
```bash
   http://127.0.0.1:8080
``` 

- 4.4 - You just need click or copy the address and paste on your browser

    <a href="http://127.0.0.1:8080" target="_blank">http://127.0.0.1:8080</a>

## Demo
- <a href="http://phonelist.brunomartins.com" target="_blank">http://phonelist.brunomartins.com</a>


## Author

Bruno Martins - Web Developer since 2005 with higher skills in:
- HTML
- CSS
- Sass
- Less
- Gulp
- Javascript
- jQuery
- AngularJS
- NodeJS
- EmberJS
- PHP
- MySQL
- Sqlite
- Laravel Framework
- Lumen Framework
- Photoshop
- Illustrator
- Fireworks
- Git/BitBucket

####<a href="http://www.brunomartins.com" target="_blank">Visit my portfolio</a>


## License

The Photo List app is open-sourced software.
