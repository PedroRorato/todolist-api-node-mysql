# Todo List API Node MySQL
Simple Todo List API with Node and MySQL.

## Installation Steps
To use this application you must have MySQL and NPM or Yarn installed in your machine.

### 1. Create MySQL database and tables

    CREATE DATABASE todoNode;
    
    CREATE TABLE `tasks` (
	  `id` bigint NOT NULL AUTO_INCREMENT,
	  `title` varchar(255) NOT NULL,
	  `description` text NOT NULL,
	  `status` varchar(50) NOT NULL DEFAULT 'PENDING',
	  `user_id` bigint UNSIGNED NOT NULL,
	  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
	  PRIMARY KEY (`id`)
	);
	
	CREATE TABLE `users` (
	  `id` bigint NOT NULL AUTO_INCREMENT,
	  `name` varchar(255) NOT NULL,
	  `email` varchar(255) NOT NULL,
	  `password` varchar(50) NOT NULL,
	  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
	  PRIMARY KEY (`id`)
	);



### 2. Install Dependencies 
In your terminal, go to the project root directory and execute *npm install* or *yarn*, to download all dependencies.


### 3. Environment configuration
Create a *.env* file in the project root directory and change the values according to your MySQL configurations:

    DB_HOST=localhost
    DB_USER=username
    DB_PASS=password
    DB_DATABASE=todoNode


### 3. Run the application
In your terminal, go to the project root directory and *npm run dev* or *yarn dev*.

#### The application is running! Enjoy it!





