USE damasparfum;
CREATE TABLE IF NOT EXISTS users  (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(50) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO users (name, email, password) VALUES
('Damas', 'Damas44@gmail.com', 'jesuisdamas'),
('Jean', 'jean44@gmail.com', 'jesuisjean'),
('Valentin', 'valentin44@gmail.com', 'jesuisvalentin'),
('Vito', 'vito44@gmail.com', 'jesuisvito');

CREATE TABLE IF NOT EXISTS parfums (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL,
  marque VARCHAR(50) NOT NULL,
  description VARCHAR(250),
  image VARCHAR(255),
  user_id INT,
  PRIMARY KEY (id),
  FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE SET NULL
); 

INSERT INTO parfums (name, marque, description, image, user_id) VALUES
('One Million', 'Rabanne Fragrances', 'Ce parfum boisé, frais et épicé pour homme aux notes d\'ambre, de cuir et de mandarine, renferme des arômes exaltants.', 'https://www.sephora.fr/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dwb48e924e/images/hi-res/SKU/SKU_1116/173908_swatch.jpg', 1),
('Le Male', 'Jean-Paul Gaultier', 'Une Eau de Toilette irrésistible aromatique & ambrée, aux notes de menthe, lavande et vanille. Son eau de toilette en poupe, vous voilà paré de séduction et de virilité.', 'https://www.sephora.fr/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dw3c7c6608/images/hi-res/SKU/SKU_6202/170113_swatch.jpg', 1),
('Pure XS', 'Rabanne Fragrances', 'Un parfum frais, brûlant, obsédant. Un mélange de gingembre et de vanille en notes de tête. Le parfum Pure XS pour homme symbolise l\'excès à l\'état pur.', 'https://www.sephora.fr/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dw4b9cb51d/images/hi-res/SKU/SKU_1121/431180_swatch.jpg', 1);
