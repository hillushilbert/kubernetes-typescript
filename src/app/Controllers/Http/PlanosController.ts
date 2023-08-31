import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Plano from 'App/Models/Plano';

export default class PlanosController {
  
  
  public async index(ctx: HttpContextContract) {
    const planos = await Plano.all();
    
    return planos;
  }

  async show({ params, request, response }) {
    const plano = await Plano.findOrFail(params.id);
    
    return plano;
  }

  public async store(ctx: HttpContextContract)
  {
    console.log(ctx.request.url());
    console.log(ctx.request.input('name'));
    const data = ctx.request.only(["name"]);

    const plano = await Plano.create(data);
    
    return plano;
  }

  async update({ params, request, response }) {
    const plano = await Plano.findOrFail(params.id);
    const data = request.only(["name"]);
    
    plano.merge(data);
    await plano.save();
    
    return plano;
  }

  async destroy({ params, request, response }) {
    const plano = await Plano.findOrFail(params.id);
    await plano.delete();
  }
}