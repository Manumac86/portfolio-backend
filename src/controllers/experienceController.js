import Model from '../models/model';

const experienceModel = new Model('experience');

export const experiencePage = async (req, res) => {
  try {
    const data = await experienceModel.select('company, position, time, description');
    res.status(200).json({ experience: data.rows });
  } catch (err) {
    res.status(200).json({ error: err.stack });
  }
};

export const addExperience = async (req, res) => {
  const {
    company,
    position,
    time,
    description,
  } = req.body;
  const columns = 'company, position, time, description';
  const values = `'${company}', '${position}', '${time}', '${description}'`;
  try {
    const data = await experienceModel.insertWithReturn(columns, values);
    res.status(200).json({ experience: data.rows });
  } catch (err) {
    res.status(400).json({ error: err.stack });
  }
};
