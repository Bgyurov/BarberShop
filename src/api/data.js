import { del, get, post, put } from './api.js'

export async function getAll() {
    return get('/data/albums?sortBy=_createdOn%20desc&distinct=nam')
}

export async function getById(id) {
    return get('/data/albums' + id)
}

export async function deleteById(id) {
    return del('/data/albums/' + id)
}

export async function createPet(petData) {
    return post('/data/albums', petData)

}
export async function editPet(id, petData) {
    return put('/data/albums/' + id, petData)
}