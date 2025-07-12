
import mongoose from "mongoose";
import Questions from "../models/Questions.js";
import User from "../models/auth.js";
import sendEmail from "../utils/sendEmail.js";
import { htmlToPlainText } from "../utils/htmlToPlainText.js";

export const postAnswer = async (req, res) => {
  const { id: _id } = req.params;
  const { noOfAnswers, answerBody, userAnswered } = req.body;
  const userId = req.userId;

  let answererEmail = "";
  if (userId) {
    const answerer = await User.findById(userId);
    if (answerer && answerer.email) {
      answererEmail = answerer.email;
    }
  }
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("question unavailable...");
  }

  updateNoOfQuestions(_id, noOfAnswers);
  try {
    const updatedQuestion = await Questions.findByIdAndUpdate(_id, {
      $addToSet: { answer: [{ answerBody, userAnswered, userId, email: answererEmail }] },
    }, { new: true });

    // Send email to question owner
    const question = await Questions.findById(_id);
    if (question && question.userId) {
      const questionOwner = await User.findById(question.userId);
      if (questionOwner && questionOwner.email) {
        try {
          const plainAnswer = htmlToPlainText(answerBody);
          await sendEmail(
            questionOwner.email,
            "You received a new answer on your question!",
            `Hello ${questionOwner.name},\n\nYour question: "${question.questionTitle}" just received a new answer.\n\nAnswer: ${plainAnswer}\n\nBest regards,\nThe Team`
          );
        } catch (err) {
          console.error("Error sending answer notification email:", err);
        }
      }
    }

    res.status(200).json(updatedQuestion);
  } catch (error) {
    res.status(400).json("error in updating");
  }
};

const updateNoOfQuestions = async (_id, noOfAnswers) => {
  try {
    await Questions.findByIdAndUpdate(_id, {
      $set: { noOfAnswers: noOfAnswers },
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteAnswer = async (req, res) => {
  const { id: _id } = req.params;
  const { answerId, noOfAnswers } = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("Question unavailable...");
  }
  if (!mongoose.Types.ObjectId.isValid(answerId)) {
    return res.status(404).send("Answer unavailable...");
  }
  updateNoOfQuestions(_id, noOfAnswers);
  try {
    await Questions.updateOne(
      { _id },
      { $pull: { answer: { _id: answerId } } }
    );
    res.status(200).json({ message: "Successfully deleted..." });
  } catch (error) {
    res.status(405).json(error);
  }
};