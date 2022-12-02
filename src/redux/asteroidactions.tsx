import { ASTEROID_DATA, ASTEROID_RANDOM } from "./constant";
export const asteroiddata = (data: number) => {

    return {
        type: ASTEROID_DATA,
        data: data,
    }
}

export const asteroidrandom = () => {

    return {
        type: ASTEROID_RANDOM,

    }
}
