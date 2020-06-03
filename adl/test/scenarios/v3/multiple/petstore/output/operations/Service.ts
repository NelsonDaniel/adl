import { schema } from '../aliases/schema';
export interface Service {
    /**
     * List all pets
     * @http GET /pets
     * @tag pets
     * @since 1.0.0
     */
    listPets(limit?: Http.Query<int32>): Http.Response<Http.Default, schema, 'application/json'>;
    /**
     * Create a pet
     * @http POST /pets
     * @tag pets
     * @since 1.0.0
     */
    createPets(): Http.Response<Http.Default, schema, 'application/json'>;
    /**
     * Info for a specific pet
     * @http GET /pets/{petId}
     * @tag pets
     * @since 1.0.0
     */
    showPetById(petId: Http.Path<string>): Http.Response<Http.Default, schema, 'application/json'>;
}
