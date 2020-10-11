import ListProvidersService from '@modules/appointments/services/ListProvidersService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class ProvidersController {
  public async list(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;
    const listProviders = container.resolve(ListProvidersService);

    const providers = await listProviders.execute({ user_id: id });

    return response.json(providers);
  }
}

export default ProvidersController;
