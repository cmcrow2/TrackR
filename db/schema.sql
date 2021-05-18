DROP TABLE applications;

CREATE TABLE IF NOT EXISTS applications (
  id serial PRIMARY KEY,
  application bool DEFAULT false,
  phone_screen bool DEFAULT false,
  interview bool DEFAULT false,
  offer bool DEFAULT false
);

INSERT INTO applications (application, phone_screen, interview, offer) VALUES (true, true, true, true);
INSERT INTO applications (application, phone_screen, interview, offer) VALUES (true, false, false, false);
INSERT INTO applications (application, phone_screen, interview, offer) VALUES (true, false, false, false);
INSERT INTO applications (application, phone_screen, interview, offer) VALUES (true, true, false, false);
INSERT INTO applications (application, phone_screen, interview, offer) VALUES (true, true, false, false);
INSERT INTO applications (application, phone_screen, interview, offer) VALUES (true, true, true, false);
INSERT INTO applications (application, phone_screen, interview, offer) VALUES (true, true, true, false);
INSERT INTO applications (application, phone_screen, interview, offer) VALUES (true, false, false, false);
INSERT INTO applications (application, phone_screen, interview, offer) VALUES (true, false, false, false);
INSERT INTO applications (application, phone_screen, interview, offer) VALUES (true, true, false, false);
INSERT INTO applications (application, phone_screen, interview, offer) VALUES (true, true, false, false);
INSERT INTO applications (application, phone_screen, interview, offer) VALUES (true, true, true, false);
INSERT INTO applications (application, phone_screen, interview, offer) VALUES (true, true, true, false);
INSERT INTO applications (application, phone_screen, interview, offer) VALUES (true, false, false, false);
INSERT INTO applications (application, phone_screen, interview, offer) VALUES (true, false, false, false);
INSERT INTO applications (application, phone_screen, interview, offer) VALUES (true, true, false, false);
INSERT INTO applications (application, phone_screen, interview, offer) VALUES (true, true, false, false);
INSERT INTO applications (application, phone_screen, interview, offer) VALUES (true, true, true, false);
INSERT INTO applications (application, phone_screen, interview, offer) VALUES (true, true, true, false);
INSERT INTO applications (application, phone_screen, interview, offer) VALUES (true, true, true, false);