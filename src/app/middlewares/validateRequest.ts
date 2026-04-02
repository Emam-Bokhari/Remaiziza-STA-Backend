// import { NextFunction, Request, Response } from "express";
// import { AnyZodObject } from "zod";

import { NextFunction, query, Request, RequestHandler, Response } from "express";
import { AnyZodObject } from "zod";

// const validateRequest =
//   (schema: AnyZodObject) =>
//   async (req: Request, res: Response, next: NextFunction) => {
//     try {
//       await schema.parseAsync({
//         body: req.body,
//         params: req.params,
//         query: req.query,
//         cookies: req.cookies,
//       });
//       next();
//     } catch (error) {
//       next(error);
//     }
//   };
// export default validateRequest;




const validateRequest = (schema: AnyZodObject) => async (req: Request, res: Response, next: NextFunction) => {
  try {
    await schema.parseAsync({
      body: req.body,
      params: req.params,
      query: req.query,
      cookies: req.cookies,
    })
  } catch (error) {
    next(error);
  }
}

export default validateRequest;