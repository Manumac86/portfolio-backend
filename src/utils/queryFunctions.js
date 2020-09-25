import { pool } from '../models/pool';
import {
  insertExperience,
  dropExperienceTable,
  createExperienceTable,
} from './queries';

export const executeQueryArray = async arr => new Promise(resolve => {
  const stop = arr.length;
  arr.forEach(async (q, index) => {
    await pool.query(q);
    if (index + 1 === stop) resolve();
  });
});

export const dropTables = () => executeQueryArray([ dropExperienceTable ]);
export const createTables = () => executeQueryArray([ createExperienceTable ]);
export const insertIntoTables = () => executeQueryArray([ insertExperience ]);
