import { ASTEROID_DATA, SET_ASTEROID_DATA, ASTEROID_RANDOM, SET_ASTEROID_RANDOMDATA } from "./constant"


export const productData = (data = [], action: any) => {
    switch (action.type) {
        case SET_ASTEROID_DATA:
            console.log("action.resp", action.resp.data)
            return data = action.resp.data;

        case SET_ASTEROID_RANDOMDATA:
            var g = Math.floor(Math.random() * 19);
            console.log("action.resp", action.resp.data.near_earth_objects[g])
            return data = action.resp.data.near_earth_objects[g];

        case ASTEROID_RANDOM:
            return data;

        case ASTEROID_DATA:
            return data;

        default:
            return data
    }
}
