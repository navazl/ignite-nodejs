import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationUseCase {
  // eslint-disable-next-line prettier/prettier
  constructor(private specificationsRepository: ISpecificationsRepository) { }
  execute({ name, description }: IRequest): void {
    const specificatonAlredyExists =
      this.specificationsRepository.findByName(name);

    if (specificatonAlredyExists) {
      throw new Error("Specification alredy exists!");
    }
    this.specificationsRepository.create({
      name,
      description,
    });
  }
}

export { CreateSpecificationUseCase };
