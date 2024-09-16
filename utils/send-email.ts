// //path: official-website\utils\send-email.ts
// import { FormData } from "@/components/contact-form";

// export function sendEmail(data: FormData) {
//   const apiEndpoint = '/api/email';

//   fetch(apiEndpoint, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(data), // Send form data as JSON
//   })
//     .then((res) => res.json())
//     .then((response) => {
//       alert(response.message); // Display success message
//     })
//     .catch((err) => {
//       alert("Error sending email: " + err); // Handle errors
//     });
// }



// path: official-website/utils/send-email.ts

import { FormData } from "@/components/contact-form";

export async function sendEmail(data: FormData) {
  const apiEndpoint = '/api/email';

  const response = await fetch(apiEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();
  
  if (!response.ok) {
    throw new Error(result.error || 'Failed to send email');
  }

  return result;
}
