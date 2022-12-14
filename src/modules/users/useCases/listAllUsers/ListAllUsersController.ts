import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const { user_id } = request.headers;

      const user = this.listAllUsersUseCase.execute({ user_id });

      if (!user) {
        return response.status(404).json({ message: "None user found" });
      }

      return response.status(200).json(user);
    } catch (err) {
      return response.status(400).json({ error: `${err}` });
    }
  }
}

export { ListAllUsersController };
