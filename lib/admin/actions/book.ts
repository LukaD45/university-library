"use server";

import { db } from "@/db/drizzle";

const createBook = async (params: BookParams) => {
  try {
    const newBook = await db.insert(books);
  } catch (error) {
    console.log(error);
    return { success: false, message: "An error occured while creating book" };
  }
};
