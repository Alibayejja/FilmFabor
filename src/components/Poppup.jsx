import React, { useState } from "react";
import mail from "../../public/mail.png";

export default function Poppup({ skipPoppup }) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(""); 
  const [isError, setIsError] = useState(false); 

  const handleSubmit = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
      setMessage("Subscribed successfully!");
      setIsError(false);
      setEmail(""); 

      setTimeout(() => {
        skipPoppup();
      }, 1000);

    } else {
      setMessage("Please enter a valid email.");
      setIsError(true);
    }
  };

  return (
    <div className="flex flex-col gap-4 w-fit px-16 py-12 h-fit bg-white justify-center items-center">
      <img src={mail} alt="" width={140} height={140} />
      <h1 className="text-red-500 text-3xl font-bold">Subscribe to Newsletter</h1>
      <p className="text-black">Subscribe to our email and get updates right in your inbox.</p>

      <div className="relative w-100">
        <input
          type="text"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 border bg-black text-white"
        />
        <button
          onClick={handleSubmit}
          className="absolute right-1 top-1 bg-red-500 text-white px-4 py-1 border font-medium"
        >
          Send
        </button>
      </div>

      {message && (
        <p className={`${isError ? "text-red-500" : "text-green-500"} mt-2`}>
          {message}
          
        </p>
      )}

      <button
        onClick={skipPoppup}
        className="underline text-black/50 cursor-pointer"
      >
        Skip
      </button>
    </div>
  );
}
