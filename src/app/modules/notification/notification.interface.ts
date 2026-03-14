import { Model, Types } from "mongoose";

export type INotification = {
  text: string;
  receiver?: Types.ObjectId;
  sender?: Types.ObjectId;
  read: boolean;
  referenceId?: Types.ObjectId;
  referenceModel?: "Booking" | "Car" | "Review" | "User";
  type?: string;
};

export type NotificationModel = Model<INotification>;
