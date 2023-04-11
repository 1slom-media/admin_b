import { fetch, fetchAll } from "../../lib/postgres.js";

import {
    GETMESSAGES,
    POSTMESSAGES,
    PUTMESSAGES,
    DELETEMESSAGES
} from "./query.js";

const GET = async ({msgId=0}) => {
    try {
        return await fetchAll(GETMESSAGES, [msgId])
    } catch (error) {
        console.log(error);
    }
};

const POST = async ({ username,phone,message}) => {
    try {
      return await fetch(POSTMESSAGES, [ username,phone,message]);
    } catch (error) {
        console.log(error);
    }
};

const PUT = async ({msgId},{username,phone,message}) => {
    try {
      return await fetch(PUTMESSAGES, [msgId,username,phone,message]);
    } catch (error) {
        console.log(error);
    }
};



const DELETE = async ({msgId}) => {
    try {
      return await fetch(DELETEMESSAGES, [msgId]);
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