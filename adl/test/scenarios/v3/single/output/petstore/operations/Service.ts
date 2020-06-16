export interface Service {
    /**
     * List all pets
     * @since 1.0.0
     * @http GET /pets
     * @tag pets
     * @param limit - How many items to return at one time (max 100)
     * @return 200|application/json - A paged array of pets
     * @return default|application/json - unexpected error
     */
    listPets(limit?: Query<int32>): [(code: 200, mediaType: "application/json") => {
        body: Pets;
        headers: [Header<string, "x-next">];
    }, (mediaType: "application/json") => {
        body: Error;
        isException: true;
    }];
    /**
     * Create a pet
     * @since 1.0.0
     * @http POST /pets
     * @tag pets
     * @return 201| - Null response
     * @return default|application/json - unexpected error
     */
    createPets(): [(code: 201) => {}, (mediaType: "application/json") => {
        body: Error;
        isException: true;
    }];
    /**
     * Info for a specific pet
     * @since 1.0.0
     * @http GET /pets/{petId}
     * @tag pets
     * @param petId - The id of the pet to retrieve
     * @return 200|application/json - Expected response to a valid request
     * @return default|application/json - unexpected error
     */
    showPetById(petId: string): [(code: 200, mediaType: "application/json") => {
        body: Pet;
    }, (mediaType: "application/json") => {
        body: Error;
        isException: true;
    }];
}
