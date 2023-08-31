import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import UpdateClinica from 'App/Validators/UpdateClinicaValidator'

import Clinica from "App/Models/Clinica";

export default class ClinicasController 
{

    public async index(ctx: HttpContextContract) 
    {
        const clinicas = await Clinica.all();
        
        return clinicas;
    }
    
      async show({ params, request, response }) {
        const clinica = await Clinica.findOrFail(params.id);
        
        return clinica;
      }
    
    public async store({request, response})
    {

		const newClinicaSchema = schema.create({
			razao_social: schema.string(),
			cnpj: schema.string([
				rules.minLength(12)
			])
		})

		try {
			/**
			 * Step 2 - Validate request body against
			 *          the schema
			 */
			const payload = await request.validate({
			  schema: newClinicaSchema
			});
		
			const clinica = await Clinica.create(payload);
			return clinica;

		  } catch (error) {
			/**
			 * Step 3 - Handle errors
			 */
			response.badRequest(error.messages)
		  }
		        
    }
    
    public async update({ params, request, response }) {
		const data = await request.validate(UpdateClinica)

        const plano = await Clinica.findOrFail(params.id);
        
        plano.merge(data);
        await plano.save();
        
        return plano;
    }
    
    public async destroy({ params, request, response }) {
        const plano = await Clinica.findOrFail(params.id);
        await plano.delete();
    }

}
