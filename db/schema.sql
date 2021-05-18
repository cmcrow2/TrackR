DROP TABLE applications;

CREATE TABLE IF NOT EXISTS applications (
  id serial PRIMARY KEY,
  application bool DEFAULT false,
  phone_screen bool DEFAULT false,
  interview bool DEFAULT false,
  offer bool DEFAULT false
);

INSERT INTO applications (application, phone_screen, interview, offer) VALUES (true, true, true, true);