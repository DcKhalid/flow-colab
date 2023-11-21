import { connect } from "mongoose";

const URL: string = "mongodb://localhost:27017/authTaskDB";
export const dbConfig = () => {
  try {
    connect(URL).then(() => {
      console.log("Let's do this... 🚀🚀🚀");
    });
  } catch (error) {
    console.log(error);
  }
};