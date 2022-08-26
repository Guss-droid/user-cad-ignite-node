import { Response, Request } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const { name, email } = request.body;

      const user = this.createUserUseCase.execute({ name, email });

      if (!name || !email) {
        return response
          .status(400)
          .json({ error: "Don't have all information" });
      }

      return response.status(201).json(user);
    } catch (err) {
      return response.status(400).json({ error: err });
    }
  }
}

export { CreateUserController };
