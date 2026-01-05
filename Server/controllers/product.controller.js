// functio of the add the product
const addProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      category,
      subCategory,
      size,
      bestseller,
    } = req.body;

    const image1 = req.files.image1[0];
    const image2 = req.files.image2[0];
    const image3 = req.files.image3[0];
    const image4 = req.files.image4[0];

    if (
      !name ||
      !description ||
      !price ||
      !category ||
      !subCategory ||
      !size ||
      !bestseller
    ) {
      return res.json({
        suucess: false,
        message: "Please filled all property",
      });
    }

    console.log(
      name,
      description,
      price,
      category,
      subCategory,
      size,
      bestseller
    );

    console.log(image1 , image2 , image3 , image4)

    res.json({
        success : true , message : "Product Added Successfully"
    })
  } catch (error) {
    console.log("Error :- ", error);
    return res.json({
      success: false,
      message: error.message,
    });
  }
};

// Function for the list of the product
const listProduct = async (req, res) => {
  try {
  } catch (error) {
    console.log("Error :- ", error);
    return res.json({
      success: false,
      message: error.message,
    });
  }
};

// function for removinf product
const removeProduct = async (req, res) => {
  try {
  } catch (error) {
    console.log("Error :- ", error);
    return res.json({
      success: false,
      message: error.message,
    });
  }
};

// Function for single product
const singleProduct = async (req, res) => {
  try {
  } catch (error) {
    console.log("Error :- ", error);
    return res.json({
      success: false,
      message: error.message,
    });
  }
};

export { addProduct, listProduct, removeProduct, singleProduct };
