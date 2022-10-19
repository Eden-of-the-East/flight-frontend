
import { GetCommand } from "@aws-sdk/lib-dynamodb";
import { ddbDocClient } from "./DynamoDBClient.js";

export const getItem = async (param) => {
  try {
    const data = await ddbDocClient.send(new GetCommand(param));
    console.log("Success :", data.Item);
  } catch (err) {
    console.log("Error", err);
  }
};



