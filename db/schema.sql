DROP TABLE applications;

CREATE TABLE IF NOT EXISTS applications (
  id serial PRIMARY KEY,
  username varchar(20),
  application bool DEFAULT false,
  phone_screen bool DEFAULT false,
  interview bool DEFAULT false,
  offer bool DEFAULT false
);

-- INSERT INTO applications (username, application, phone_screen, interview, offer) VALUES ('cmcrow2', true, true, true, false);
-- INSERT INTO applications (username, application, phone_screen, interview, offer) VALUES ('cmcrow2', true, false, false, false);
-- INSERT INTO applications (username, application, phone_screen, interview, offer) VALUES ('cmcrow2', true, false, false, false);
-- INSERT INTO applications (username, application, phone_screen, interview, offer) VALUES ('cmcrow2', true, true, false, false);
-- INSERT INTO applications (username, application, phone_screen, interview, offer) VALUES ('cmcrow2', true, true, false, false);
-- INSERT INTO applications (username, application, phone_screen, interview, offer) VALUES ('cmcrow2', true, true, true, false);
-- INSERT INTO applications (username, application, phone_screen, interview, offer) VALUES ('cmcrow2', true, true, true, false);
-- INSERT INTO applications (username, application, phone_screen, interview, offer) VALUES ('cmcrow2', true, false, false, false);
-- INSERT INTO applications (username, application, phone_screen, interview, offer) VALUES ('cmcrow2', true, false, false, false);
-- INSERT INTO applications (username, application, phone_screen, interview, offer) VALUES ('cmcrow2', true, true, false, false);
-- INSERT INTO applications (username, application, phone_screen, interview, offer) VALUES ('cmcrow2', true, true, false, false);
-- INSERT INTO applications (username, application, phone_screen, interview, offer) VALUES ('cmcrow2', true, true, true, false);
-- INSERT INTO applications (username, application, phone_screen, interview, offer) VALUES ('cmcrow2', true, true, true, false);
-- INSERT INTO applications (username, application, phone_screen, interview, offer) VALUES ('cmcrow2', true, false, false, false);
-- INSERT INTO applications (username, application, phone_screen, interview, offer) VALUES ('cmcrow2', true, false, false, false);
-- INSERT INTO applications (username, application, phone_screen, interview, offer) VALUES ('cmcrow2', true, true, false, false);
-- INSERT INTO applications (username, application, phone_screen, interview, offer) VALUES ('cmcrow2', true, true, false, false);
-- INSERT INTO applications (username, application, phone_screen, interview, offer) VALUES ('cmcrow2', true, true, true, false);
-- INSERT INTO applications (username, application, phone_screen, interview, offer) VALUES ('cmcrow2', true, true, true, false);
-- INSERT INTO applications (username, application, phone_screen, interview, offer) VALUES ('cmcrow2', true, true, true, false);
-- INSERT INTO applications (username, application, phone_screen, interview, offer) VALUES ('ecruz4', true, true, true, false);
-- INSERT INTO applications (username, application, phone_screen, interview, offer) VALUES ('ecruz4', true, false, false, false);
-- INSERT INTO applications (username, application, phone_screen, interview, offer) VALUES ('ecruz4', true, false, false, false);
-- INSERT INTO applications (username, application, phone_screen, interview, offer) VALUES ('ecruz4', true, true, false, false);
-- INSERT INTO applications (username, application, phone_screen, interview, offer) VALUES ('ecruz4', true, true, false, false);
-- INSERT INTO applications (username, application, phone_screen, interview, offer) VALUES ('ecruz4', true, true, true, false);
-- INSERT INTO applications (username, application, phone_screen, interview, offer) VALUES ('ecruz4', true, true, true, false);
-- INSERT INTO applications (username, application, phone_screen, interview, offer) VALUES ('ecruz4', true, false, false, false);
-- INSERT INTO applications (username, application, phone_screen, interview, offer) VALUES ('ecruz4', true, false, false, false);
-- INSERT INTO applications (username, application, phone_screen, interview, offer) VALUES ('ecruz4', true, true, false, false);
-- INSERT INTO applications (username, application, phone_screen, interview, offer) VALUES ('ecruz4', true, true, false, false);
-- INSERT INTO applications (username, application, phone_screen, interview, offer) VALUES ('ecruz4', true, true, true, false);
-- INSERT INTO applications (username, application, phone_screen, interview, offer) VALUES ('ecruz4', true, true, true, false);
-- INSERT INTO applications (username, application, phone_screen, interview, offer) VALUES ('ecruz4', true, false, false, false);
-- INSERT INTO applications (username, application, phone_screen, interview, offer) VALUES ('ecruz4', true, false, false, false);
-- INSERT INTO applications (username, application, phone_screen, interview, offer) VALUES ('ecruz4', true, true, false, false);
-- INSERT INTO applications (username, application, phone_screen, interview, offer) VALUES ('ecruz4', true, true, false, false);
-- INSERT INTO applications (username, application, phone_screen, interview, offer) VALUES ('ecruz4', true, true, true, false);
-- INSERT INTO applications (username, application, phone_screen, interview, offer) VALUES ('ecruz4', true, true, true, false);
-- INSERT INTO applications (username, application, phone_screen, interview, offer) VALUES ('ecruz4', true, true, true, true);
-- INSERT INTO applications (username, application, phone_screen, interview, offer) VALUES ('itsme-sunil', true, true, true, false);
-- INSERT INTO applications (username, application, phone_screen, interview, offer) VALUES ('itsme-sunil', true, false, false, false);
-- INSERT INTO applications (username, application, phone_screen, interview, offer) VALUES ('itsme-sunil', true, false, false, false);
-- INSERT INTO applications (username, application, phone_screen, interview, offer) VALUES ('itsme-sunil', true, true, false, false);
-- INSERT INTO applications (username, application, phone_screen, interview, offer) VALUES ('itsme-sunil', true, true, false, false);
-- INSERT INTO applications (username, application, phone_screen, interview, offer) VALUES ('itsme-sunil', true, true, true, false);
-- INSERT INTO applications (username, application, phone_screen, interview, offer) VALUES ('itsme-sunil', true, true, true, false);
-- INSERT INTO applications (username, application, phone_screen, interview, offer) VALUES ('itsme-sunil', true, false, false, false);
-- INSERT INTO applications (username, application, phone_screen, interview, offer) VALUES ('itsme-sunil', true, false, false, false);
-- INSERT INTO applications (username, application, phone_screen, interview, offer) VALUES ('itsme-sunil', true, false, false, false);
-- INSERT INTO applications (username, application, phone_screen, interview, offer) VALUES ('itsme-sunil', true, false, false, false);
-- INSERT INTO applications (username, application, phone_screen, interview, offer) VALUES ('itsme-sunil', true, true, true, false);
-- INSERT INTO applications (username, application, phone_screen, interview, offer) VALUES ('itsme-sunil', true, true, true, false);
-- INSERT INTO applications (username, application, phone_screen, interview, offer) VALUES ('itsme-sunil', true, false, false, false);
-- INSERT INTO applications (username, application, phone_screen, interview, offer) VALUES ('itsme-sunil', true, false, false, false);
-- INSERT INTO applications (username, application, phone_screen, interview, offer) VALUES ('itsme-sunil', true, true, false, false);
-- INSERT INTO applications (username, application, phone_screen, interview, offer) VALUES ('itsme-sunil', true, true, false, false);
-- INSERT INTO applications (username, application, phone_screen, interview, offer) VALUES ('itsme-sunil', true, true, true, false);
-- INSERT INTO applications (username, application, phone_screen, interview, offer) VALUES ('itsme-sunil', true, true, true, true);
-- INSERT INTO applications (username, application, phone_screen, interview, offer) VALUES ('itsme-sunil', true, true, true, true);