import * as tokenService from './tokenService'

const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/trivia`

async function index() {
  try {
    const res = await fetch(BASE_URL, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    })
    return await res.json()
  } catch (error) {
    console.log(error);
  }
}

async function show(id) {
  try {
    const res = await fetch(`${BASE_URL}/${id}`);
    return res.json();
  } catch (error) {
    console.log(error);
  }
}

export {
  index, 
  show,
}