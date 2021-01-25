const getFood = async (req, res) => {
  console.log("YES", process.env.CONTEXT);

  try {
    return res.status(200).json({
      context: process.env.CONTEXT,
    });
  } catch (error) {
    console.log(error);
    return res.status(401).send("You are unauthorised");
  }
};

export default getFood;
