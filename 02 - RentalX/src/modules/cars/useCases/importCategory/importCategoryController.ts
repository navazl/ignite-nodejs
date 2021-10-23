import { Request, Response } from "express";

import { ImportCategoryUseCase } from "./importCategoryUseCase";

class ImportCategoryController {
  // eslint-disable-next-line prettier/prettier
  constructor(private importCategoryUseCase: ImportCategoryUseCase) { }
  handle(request: Request, response: Response): Response {
    const { file } = request;

    this.importCategoryUseCase.execute(file);

    return response.send();
  }
}

export { ImportCategoryController };
