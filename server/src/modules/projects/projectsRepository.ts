import DatabaseClient from "../../../database/client";
import type { Result, Rows } from "../../../database/client";

type Projects = {
  id: number;
  name: string;
  img_url: string;
};

class ProjectsRepository {
  async readAll() {
    const [rows] = await DatabaseClient.query<Rows>("select * from projects");

    return rows as Projects[];
  }

  async read(id: number) {
    // Execute the SQL SELECT query to retrieve a specific category by its ID
    const [rows] = await DatabaseClient.query<Rows>(
      "select * from projects where id = ?",
      [id],
    );

    // Return the first row of the result, which represents the category
    return rows[0] as Projects;
  }
}

export default new ProjectsRepository();
