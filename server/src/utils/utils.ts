import Joi from "joi";
import jwt from "jsonwebtoken";

export const registerSchema = Joi.object()
  .keys({
    fullName: Joi.string().required(),
    email: Joi.string().trim().lowercase().required(),
    phoneNumber: Joi.string()
      .length(11)
      .pattern(/^[0-9]+$/)
      .required(),
    password: Joi.string()
      .regex(/^[a-zA-Z0-9]{3,30}$/)
      .required(),
    confirm_password: Joi.ref("password"),
  })
  .with("password", "confirm_password");

export const loginSchema = Joi.object().keys({
  email: Joi.string().trim().lowercase().required(),
  password: Joi.string()
    .regex(/^[a-zA-Z0-9]{3,30}$/)
    .required(),
});

export const adminLoginSchema = Joi.object().keys({
  email: Joi.string().trim().lowercase().required(),
  password: Joi.string()
    .regex(/^[a-zA-Z0-9]{3,30}$/)
    .required(),
});
export const vendorLoginSchema = Joi.object().keys({
  email: Joi.string().trim().lowercase().required(),
  password: Joi.string()
    .regex(/^[a-zA-Z0-9]{3,30}$/)
    .required(),
});

//Generate Token
export const generateToken = (user: { [key: string]: unknown }): unknown => {
  const pass = `${process.env.JWT_SECRET}` as string;
  return jwt.sign(user, pass, { expiresIn: "7d" });
};

export const adminRegisterSchema = Joi.object()
  .keys({
    fullName: Joi.string().required(),
    email: Joi.string().trim().lowercase().required(),
    phoneNumber: Joi.string()
      .length(11)
      .pattern(/^[0-9]+$/)
      .required(),
    password: Joi.string()
      .regex(/^[a-zA-Z0-9]{3,30}$/)
      .required(),
    confirm_password: Joi.ref("password"),
  })
  .with("password", "confirm_password");

export const vendorsRegisterSchema = Joi.object()
  .keys({
    name: Joi.string().required(),
    ownedBy: Joi.string().required(),
    address: Joi.string().required(),
    email: Joi.string().trim().lowercase().required(),
    phoneNumber: Joi.string()
      .length(11)
      .pattern(/^[0-9]+$/)
      .required(),
    password: Joi.string()
      .regex(/^[a-zA-Z0-9]{3,30}$/)
      .required(),
    confirm_password: Joi.ref("password"),
  })
  .with("password", "confirm_password");
export const createMenuSchema = Joi.object().keys({
  name: Joi.string().required(),
  description: Joi.string().required(),
  image: Joi.string().required(),
  category: Joi.string().required(),
  premium: Joi.boolean().required(),
  price: Joi.number().required(),
  vendorId: Joi.string().required(),
});
export const createOrdersSchema = Joi.object().keys({
  userId: Joi.string().required(),
  foodId: Joi.string().required(),
  vendorId: Joi.string().required(),
  comments: Joi.string().required(),
  orderDate: Joi.date().required(),
});

export const verifyVendorSchema = Joi.object().keys({
  verified: Joi.boolean(),
});

export const options = {
  abortEarly: false,
  errors: {
    wrap: {
      label: "",
    },
  },
};
