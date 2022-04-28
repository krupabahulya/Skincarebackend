import asyncHandler from "../utils/asyncHandler";

export const getAllProducts = asyncHandler(async(req,res,next) => res.send('GET All'));

export const getSingleProduct = asyncHandler(async(req,res,next) => res.send('GET single'));

export const createProduct = asyncHandler(async(req,res,next) => res.send('POST'));