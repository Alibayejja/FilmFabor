import React from "react";
import { Link } from "react-router";
import { useState } from "react";

export default function Footer() {
  const [ name, SetName ] = useState("");
  const [ email, SetEmail ] = useState("");
  const [message, SetMessage] = useState("");
  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [success, setSuccess] = useState("");

  const [nameError, setNameError] = useState("");
  const [messageError, setMessageError] = useState("");


    const handleSubmit = (e) => {
    e.preventDefault();

    // nssaybo l-errors
    setNameError("");
    setEmailError("");
    setMessageError("");
    setSuccess("");

    let isValid = true;

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();

    // ✅ Name: makhassouch ikoun khawi + ghi 7orof w l'espace
    if (!trimmedName) {
      setNameError("Name is required");
      isValid = false;
    } else if (!/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/.test(trimmedName)) {
      setNameError("Name must contain only letters");
      isValid = false;
    }

    // ✅ Email: makhassouch ikoun khawi + format sah
    if (!trimmedEmail) {
      setEmailError("Email is required");
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      setEmailError("Enter a valid email");
      isValid = false;
    }

    // ✅ Message: makhassouch ikoun khawi
    if (!trimmedMessage) {
      setMessageError("Message is required");
      isValid = false;
    }

    if (!isValid) return;

      setSuccess("Sent successfully");
      SetName("");
      SetEmail("");
      SetMessage("");
    };
  return (
    <div className="flex  justify-between px-12 py-12 bg-gradient-to-t from-red-500 from-2% to-black h-fit">
      <div className="left flex flex-col gap-4">
        <Link
          className="flex gap-0 items-center border-b-2 border-white py-4 w-100"
          to="/"
        >
          <img src="../../public/Nav-Logo.png" width={50} height={50} alt="" />
          <h1 className="text-3xl font-bold text-white">FilmFabor</h1>
        </Link>
        <p className="text-white">
          Watch unlimited movies and TV Shows fro free
        </p>
        <div className="social-media flex gap-2">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="cursor-pointer" src="/facebook.png" width={25} />
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="cursor-pointer" src="/instagram.png" width={25} />
          </a>

          <a
            href="https://snapchat.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="cursor-pointer" src="/snapchat.png" width={25} />
          </a>
        </div>
      </div>
      <div className="right">
        <form
          onSubmit={handleSubmit}
          noValidate
          action=""
          className="flex flex-col gap-4 w-140 backdrop-blur-sm border border-white border-2 px-12 py-8"
        >
          {/* رسالة النجاح اللي كاتبانو فوق الفورم */}
          <p className="text-green-500 text-sm text-center">{success}</p>
          {/* ======= NAME ======= */}
          <div className="flex flex-col">
            <label className="text-white pb-2">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => SetName(e.target.value)}
              className="p-2 bg-black/20 text-white outline-none border-b-2 border-white"
            />
            {/* هنا بالضبط كتبان رسالة الخطأ ديال Name */}
            <p className="text-red-500 text-sm">{nameError}</p>
          </div>

          {/* ======= EMAIL ======= */}
          <div className="flex flex-col">
            <label className="text-white pb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => SetEmail(e.target.value)}
              className="p-2 bg-black/20 text-white outline-none border-b-2 border-white"
            />
            {/* هنا بالضبط كتبان رسالة الخطأ ديال Email */}
            <p className="text-red-500 text-sm">{emailError}</p>
          </div>

          {/* ======= MESSAGE ======= */}
          <div className="flex flex-col">
            <label className="text-white pb-2">Message</label>
              <textarea
                value={message}
                onChange={(e) => SetMessage(e.target.value)}
                className="p-2 bg-black/20 text-white outline-none border-b-2 border-white resize-none"
              ></textarea>
              {/* هنا بالضبط كتبان رسالة الخطأ ديال Message */}
            <p className="text-red-500 text-sm">{messageError}</p>
          </div>

          <button
            type="submit"
            className="bg-red-500 text-white py-2 px-8 font-medium w-full hover:bg-red-600 transition border m-auto cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
