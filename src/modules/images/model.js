import { fetch, fetchAll } from "../../lib/postgres.js";

import {
    GETIMAGES,
    POSTIMAGES,
    PUTIMAGES,
    DELETEIMAGES
} from "./query.js";

const GET = async ({imageId=0}) => {
    try {
        return await fetchAll(GETIMAGES, [imageId])
    } catch (error) {
        console.log(error);
    }
};

const POST = async ({ image}) => {
    try {
      return await fetch(POSTIMAGES, [ image]);
    } catch (error) {
        console.log(error);
    }
};

const PUT = async ({imageId},{image}) => {
    try {
      return await fetch(PUTIMAGES, [imageId,image]);
    } catch (error) {
        console.log(error);
    }
};



const DELETE = async ({imageId}) => {
    try {
      return await fetch(DELETEIMAGES, [imageId]);
    } catch (error) {
        console.log(error);
    }
};


export default {
    GET,
    POST,
    PUT,
    DELETE
};