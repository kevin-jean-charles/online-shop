-- -----------------------------------------------------
-- Add sample category
-- -----------------------------------------------------

INSERT INTO category(category_name) VALUES ('DVD');
INSERT INTO category(category_name) VALUES ('BOOKS');


-- -----------------------------------------------------
-- Add sample product
-- -----------------------------------------------------


INSERT INTO product (barcode, name, description, image_url, active, units_in_stock, unit_price, category_id, date_created)
VALUES ('1000', 'JavaScript - The Fun Parts', 'Learn JavaScript', 'assets/images/products/placeholder.png', 1,100, 19.99, 2, NOW());

INSERT INTO product (barcode, name, description, image_url, active, units_in_stock,unit_price, category_id, date_created)
VALUES ('1001', 'Spring Framework Tutorial', 'Learn Spring', 'assets/images/products/placeholder.png', 1, 100,29.99, 1, NOW());

INSERT INTO product (barcode, name, description, image_url, active, units_in_stock,unit_price, category_id, date_created)
VALUES ('1002', 'Kubernetes - Deploying Containers', 'Learn Kubernetes', 'assets/images/products/placeholder.png', 1, 100, 24.99, 2, NOW());

INSERT INTO product (barcode, name, description, image_url, active, units_in_stock,unit_price, category_id, date_created)
VALUES ('1003', 'Internet of Things (IoT) - Getting Started', 'Learn IoT', 'assets/images/products/placeholder.png', 1, 100, 29.99, 1, NOW());

INSERT INTO product (barcode, name, description, image_url, active, units_in_stock,unit_price, category_id, date_created)
VALUES ('1004', 'The Go Programming Language: A to Z', 'Learn Go', 'assets/images/products/placeholder.png', 1, 100, 24.99, 2, NOW());
 