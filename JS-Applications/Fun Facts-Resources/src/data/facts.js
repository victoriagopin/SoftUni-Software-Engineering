import { get, post, put, del } from "./request.js";

const endpoints = {
    dashboard: '/data/facts?sortBy=_createdOn%20desc',
    facts: '/data/facts',
    details: '/data/facts/'
}

export async function getAllFacts() {
    return get(endpoints.dashboard);
}

export async function getFactById(id) {
    return get(endpoints.details + id);
}

export async function createFact(category, imageUrl, description, moreInfo) {
    return post(endpoints.facts, {
        category,
        imageUrl,
        description,
        moreInfo
    })
}

export async function updateFact(id, data) {
    return put(endpoints.details + id, data);
}

export async function deleteFact(id) {
    return del(endpoints.details + id);
}