import model from "./model.js";

const GET = async (req, res) => {
    try {
      const messages = await model.GET(req.params);
      res.send(messages);
    } catch (error) {
      console.error(error);
    }
};

const POST = async (req, res) => {
  try {
    const messages = await model.POST(req.body);
    res.status(201).json({
      status:201,
      message:"messages created",
      data:messages
    })
  } catch (error) {
    console.error(error);
  }
};

const PUT = async (req, res) => {
  try {
    const messages = await model.PUT(req.params,req.body);
    res.status(202).json({
      status:202,
      message:"messages update",
      data:messages
    })
  } catch (error) {
    console.error(error);
  }
};


const DELETE = async (req, res) => {
  try {
    const messages = await model.DELETE(req.params);
    res.status(202).json({
      status:203,
      message:"messages deleted",
      data:messages
    })
  } catch (error) {
    console.error(error);
  }
};



export default {
  GET,
  POST,
  PUT,
  DELETE,
};