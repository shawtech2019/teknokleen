/* Replace with your SQL commands */
CREATE TABLE IF NOT EXISTS categories (
    id int AUTO_INCREMENT PRIMARY KEY,
    name varchar(255),
    image varchar(255) NULL,
    slug varchar(255)
);


CREATE TABLE IF NOT EXISTS brands (
    id int AUTO_INCREMENT PRIMARY KEY,
    name varchar(255),
    image varchar(255) NULL,
    slug varchar(255)
);



CREATE TABLE IF NOT EXISTS products (
    id int AUTO_INCREMENT PRIMARY KEY,
    name varchar(255),
    slug varchar(255),
    status varchar(255),
    image varchar(255),
    price varchar(255) NULL,
    is_featured int DEFAULT 0,
    short_description text NULL,
    description text NULL
);

CREATE TABLE IF NOT EXISTS product_categories (
    id int AUTO_INCREMENT PRIMARY KEY,
    product_id int,
    category_id int,
    CONSTRAINT fk_product FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE ON UPDATE CASCADE ,
    CONSTRAINT fk_category FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE ON UPDATE CASCADE  
);

CREATE TABLE IF NOT EXISTS product_brands (
    id int AUTO_INCREMENT PRIMARY KEY,
    product_id int,
    brand_id int,
    CONSTRAINT fk_productb FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT fk_brand FOREIGN KEY (brand_id) REFERENCES brands(id) ON DELETE CASCADE ON UPDATE CASCADE  
);
