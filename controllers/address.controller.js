import Address from "../models/address.model.js";

// @desc Get user addresses
export const getAddresses = async (req, res) => {
  const addresses = await Address.find({ user: req.user._id });
  res.json(addresses);
};

// @desc Add new address
export const addAddress = async (req, res) => {
  const { fullName, street, city, state, postalCode, country, phone, isDefault } = req.body;
  
  if(!fullName || !street || !city || !state || !postalCode || !country || !phone) {
    return res.status(400).json({ message: "All fields are required" });
  }

  if (isDefault) {
  const existingDefault = await Address.findOne({ user: req.user._id, isDefault: true });
  }
  if (existingDefault) {
    existingDefault.isDefault = false;
    await existingDefault.save();
  }

  const address = new Address({
    user: req.user._id,
    fullName,
    street,
    city,
    state,
    postalCode,
    country,
    phone,
    isDefault: !!isDefault
  });
  

  res.status(201).json(address);
};

// @desc Update address
export const updateAddress = async (req, res) => {
    try {
    const { fullName, street, city, state, postalCode, country, phone, isDefault } = req.body;
    const address = await Address.findOne({ _id: req.params.id, user: req.user._id });
    if (!address) return res.status(404).json({ message: "Address not found" });

    if (isDefault) {
    const existingDefault = await Address.findOne({ user: req.user._id, isDefault: true });
    if (existingDefault) {
      existingDefault.isDefault = false;
      await existingDefault.save();
    }
    address.isDefault = true;
  } else if (isDefault === false && address.isDefault) {
    address.isDefault = false;
  }
    address.fullName = fullName || address.fullName;
    address.street = street || address.street;
    address.city = city || address.city;
    address.state = state || address.state;
    address.postalCode = postalCode || address.postalCode;
    address.country = country || address.country;
    address.phone = phone || address.phone;
    await address.save();
    res.json(address);        
    } catch (error) {
        res.status(500).json({ message: "Internal Server error" });
        console.log(error);       
    }

}

// @desc Delete address
export const deleteAddress = async (req, res) => {
  const address = await Address.findOneAndDelete({ _id: req.params.id, user: req.user._id });
  if (!address) return res.status(404).json({ message: "Address not found" });
  res.json({ message: "Address deleted" });
};
