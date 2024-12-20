import User from "../models/user.model.js"
import Message from "../models/message.model.js"
export const getusersforsidebar = async (req,res) =>{
    try {
        const loggedinuserid = req.user._id;
        const filteredusers = await User.find({_id:{$ne:loggedinuserid}}).select("-password")
        res.status(200).json(filteredusers);

    } catch (error) {
        console.log("error in getusers controller");
        res.status(500).json({
            message:"internal server error."
        })
    }
};

export const getmessages = async (req,res) =>{
    try {
        const {id:userchatid} = req.params;
        const myid = req.user._id;
        const messages = await Message.find({
            $ar:[
                { senderId:myid,receiverId:userchatid},
                {senderId:userchatid,receiverId:myid}
            ]
        })
        res.status(200).json(messages)
    } catch (error) {
        console.log("error in getmessages controller");
        res.status(500).json({
            message:"internal server error."
        })
    }
}

export const sendMessage = async (req, res) => {
    try {
      const { text, image } = req.body;
      const { id: receiverId } = req.params;
      const senderId = req.user._id;
  
      let imageUrl;
      if (image) {
        const uploadResponse = await cloudinary.uploader.upload(image);
        imageUrl = uploadResponse.secure_url;
      }
  
      const newMessage = new Message({
        senderId,
        receiverId,
        text,
        image: imageUrl,
      });
  
      await newMessage.save();
  
      const receiverSocketId = getReceiverSocketId(receiverId);
      if (receiverSocketId) {
        io.to(receiverSocketId).emit("newMessage", newMessage);
      }
  
      res.status(201).json(newMessage);
    } catch (error) {
      console.log("Error in sendMessage controller: ", error.message);
      res.status(500).json({ error: "Internal server error" });
    }
  };