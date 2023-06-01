const asyncHandler = (fn) => async (req, res, next) => {
  try {
    await fn(req, res, next);
  } catch (err) {
    console.log("ERROR:", err.message || err);
    res.status(500).json({
      success: false,
      message: err.message || "Something went wrong",
    });
  }
};

export default asyncHandler;
