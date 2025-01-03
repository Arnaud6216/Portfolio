import DatabaseClient from "../../../database/client";
import type { Result, Rows } from "../../../database/client";

type Skills = {
  id: number;
  name: string;
  img_url: string;
};

class SkillsRepository {
  async readAll() {
    const [rows] = await DatabaseClient.query<Rows>("select * from skills");

    return rows as Skills[];
  }

  async read(id: number) {
    // Execute the SQL SELECT query to retrieve a specific category by its ID
    const [rows] = await DatabaseClient.query<Rows>(
      "select * from skills where id = ?",
      [id],
    );

    // Return the first row of the result, which represents the category
    return rows[0] as Skills;
  }
}

export default new SkillsRepository();
