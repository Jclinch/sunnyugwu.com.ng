// //path: official-website\app\api\email\route.ts
// import { type NextRequest, NextResponse } from "next/server";
// import nodemailer from "nodemailer";
// import Mail from "nodemailer/lib/mailer";

// export async function POST(request: NextRequest) {
//   const { email, name, message } = await request.json();

//   const transport = nodemailer.createTransport({
//     service: "gmail",
//      auth: {
//       user: process.env.MY_EMAIL,
//       pass: process.env.MY_PASSWORD,
//     },
//   });

//   const mailOptions: Mail.Options = {
//     from: process.env.MY_EMAIL,
//     to: process.env.MY_EMAIL,
//     // cc: email, (uncomment this line if you want to send a copy to the sender)
//     subject: `New Contact Form Submission from ${name} with email:${email}`,
//     text: message,
//   };

//   const sendMailPromise = () =>
//     new Promise<string>((resolve, reject) => {
//       transport.sendMail(mailOptions, function (err) {
//         if (!err) {
//           resolve("Email sent");
//         } else {
//           reject(err.message);
//         }
//       });
//     });

//   try {
//     await sendMailPromise();
//     return NextResponse.json({ message: "Email sent" });
//   } catch (err) {
//     return NextResponse.json({ error: err }, { status: 500 });
//   }
// }

//----------------------------------

// path: official-website\app\api\email\route.ts
import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export async function POST(request: NextRequest) {
  try {
    // Extract the form data from the request body
    const { email, name, message } = await request.json();

    // Ensure all fields are present
    if (!email || !name || !message) {
      return NextResponse.json(
        { error: "All fields (email, name, message) are required" },
        { status: 400 }
      );
    }

    // Create Nodemailer transport with Gmail credentials
    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MY_EMAIL,
        pass: process.env.MY_PASSWORD,
      },
    });

    // Define the email content
    const mailOptions: Mail.Options = {
      from: process.env.MY_EMAIL,
      to: process.env.MY_EMAIL,
      subject: `New Contact Form Submission from ${name} (${email})`,
      text: message,
    };

    // Helper function to send the email
    const sendMailPromise = () =>
      new Promise<string>((resolve, reject) => {
        transport.sendMail(mailOptions, function (err) {
          if (!err) {
            resolve("Email sent successfully");
          } else {
            reject(err.message);
          }
        });
      });

    // Try to send the email and return success response
    await sendMailPromise();
    return NextResponse.json({ message: "Email sent successfully" });

  } catch (err) {
    // Handle unexpected errors
    return NextResponse.json(
      { error: "Failed to send email", details: err instanceof Error ? err.message : String(err) },
      { status: 500 }
    );
  }
}
