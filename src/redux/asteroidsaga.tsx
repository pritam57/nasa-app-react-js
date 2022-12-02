import axios from 'axios';
import { takeEvery, put, call } from 'redux-saga/effects'
import { ASTEROID_DATA, ASTEROID_RANDOM, SET_ASTEROID_DATA, SET_ASTEROID_RANDOMDATA } from './constant';


function* getProducts(action: any): any {
    // console.log(action.data + "from saga");
  
    try {
        const url = `https://api.nasa.gov/neo/rest/v1/neo/${action.data}?api_key=HeQxvmqGeHcJsBYU7EZeHE1JWqgFNY6CKGTlbz4y`
        const resp = yield call(() => axios.get(url))
        // console.log(resp)
        yield put({ type: SET_ASTEROID_DATA, resp })
       
    }
    catch (error) {
        console.log(error);
        alert("please enter correct Asteroid id");
    }
}
function* getrandom(): any {

    try {
        const url = `https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY`
        const resp = yield call(() => axios.get(url))
        //console.log(resp)
        yield put({ type: SET_ASTEROID_RANDOMDATA, resp })

    }
    catch (error) {
        console.log(error);
    }
}


function* productsaga() {

    yield takeEvery(ASTEROID_DATA, getProducts);
    yield takeEvery(ASTEROID_RANDOM, getrandom);
}

export default productsaga;