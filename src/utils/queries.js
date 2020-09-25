export const createExperienceTable = `
  DROP TABLE IF EXISTS experience;
  CREATE TABLE IF NOT EXISTS experience (
    id SERIAL PRIMARY KEY,
    company VARCHAR DEFAULT '',
    position VARCHAR NOT NULL,
    time VARCHAR NOT NULL,
    description VARCHAR NOT NULL
  )
`;

export const insertExperience = `
  INSERT INTO experience(company, position, time, description)
  VALUES ('Olapic', 'Frontend Engineer', 'June'19 to actual', 'Working on different business units projects for Olapic platform, mostly dedicated to integrations and media activations. The team applies Scrum Agile having daily meetings along with the client/cast members as well as Sprint Planning and Retrospective meetings. Among different projects, delivery included: PHP, Javascript, Jquery, AngularJS, ReactJS and Python.')
`;

export const dropExperienceTable = 'DROP TABLE experience';
