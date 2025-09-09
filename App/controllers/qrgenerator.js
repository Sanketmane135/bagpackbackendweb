const QRCode = require("qrcode");

let generateqr=async(req,res)=>{

        
  const { upiid, amount } = req.body;

  if (!upiid || !amount) {
    return res.status(400).json({ error: "upiid and amount are required" });
  }

  // UPI Payment deep link format
  const upiData = `upi://pay?pa=${upiid}&am=${amount}&cu=INR`;

  try {
    // Generate QR code as Data URL (base64 image)
    const qrImage = await QRCode.toDataURL(upiData);

    // Send as HTML so you can see it in browser
    res.send(`
      <h2>UPI QR Code</h2>
      <p><b>UPI ID:</b> ${upiid}</p>
      <p><b>Amount:</b> ₹${amount}</p>
      <img src="${qrImage}" />
    `);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to generate QR code" });
  
}
}

module.exports={generateqr}