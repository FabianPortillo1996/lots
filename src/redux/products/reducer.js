const initialState = {
    requesting: false,
    success: false,
    products: [
        {
            marca: 'Samsung',
            telefonos: [
                {
                    id: 1,
                    modelo: 'modelo_a',
                    precio: 1200,
                    cantidad: 1,
                    color: 'negro',
                },
                {
                    id: 2,
                    modelo: 'modelo_b',
                    precio: 1300,
                    cantidad: 1,
                    color: 'negro',
                },
                {
                    id: 3,
                    modelo: 'modelo_c',
                    precio: 1200,
                    cantidad: 1,
                    color: 'negro',
                }
            ]
        },
        {
            marca: 'Apple',
            telefonos: [
                {
                    id: 4,
                    modelo: 'modelo_d',
                    precio: 1200,
                    cantidad: 1,
                    color: 'negro',
                },
                {
                    id: 5,
                    modelo: 'modelo_e',
                    precio: 1300,
                    cantidad: 1,
                    color: 'negro',
                },
                {
                    id: 6,
                    modelo: 'modelo_f',
                    precio: 1200,
                    cantidad: 1,
                    color: 'negro',
                },
                {
                    id: 7,
                    modelo: 'modelo_g',
                    precio: 1200,
                    cantidad: 1,
                    color: 'negro',
                }
            ]
        },
        {
            marca: 'Motorola',
            telefonos: [
                {
                    id: 8,
                    modelo: 'modelo_h',
                    precio: 1200,
                    cantidad: 1,
                    color: 'negro',
                },
                {
                    id: 9,
                    modelo: 'modelo_i',
                    precio: 1300,
                    cantidad: 1,
                    color: 'negro',
                },
                {
                    id: 10,
                    modelo: 'modelo_j',
                    precio: 1200,
                    cantidad: 1,
                    color: 'negro',
                },
                {
                    id: 11,
                    modelo: 'modelo_k',
                    precio: 1200,
                    cantidad: 1,
                    color: 'negro',
                },
                {
                    id: 12,
                    modelo: 'modelo_l',
                    precio: 1200,
                    cantidad: 1,
                    color: 'negro',
                }
            ]
        }
    ]
};

const reducer = (state = initialState, action) => {
    switch (action.type) {

        default:
            return state;
    }
};

export default reducer;
