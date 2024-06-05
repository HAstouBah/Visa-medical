import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import vm_logo from "../assets/images/logo.png";
import login_img from "../assets/images/login.jpg";
import { authService } from "./services/authService.jsx";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [btnDisabled, setBtnDisabled] = useState(true);

  const navigate = useNavigate();
  const handleGetInfo = (e) => {
    const { name, value } = e.target;
    if (name === "username") {
      setUsername(value);
    } else if (name === "password") {
      setPassword(value);
    }
    if (username !== "" && password !== "") {
      setBtnDisabled(false);
    } else {
      setBtnDisabled(true);
    }
  };

  const handleLogin = async () => {
    setLoading(true);
    setBtnDisabled(true);
    const { success, data, error } = await authService(username, password);
    if (success) {
      navigate("/produits");
    } else {
      setErrorMessage("Erreur ! Login ou mot de passe incorrect");
      setBtnDisabled(false);
      setLoading(false);
      <Navigate to="/" />;
    }
  };

  return (
    <div className="grid grid-cols-[40%_auto] h-screen max-lg:grid-cols-1">
      <div className="flex flex-col items-center gap-5 px-20 mt-16 max-lg:px-56 max-md:px-32 max-sm:px-8">
        <div className="flex items-center gap-4 mb-5">
          <img src={vm_logo} className="w-10 max-sm:w-7" alt="" />
          <h1 className="text-5xl space-x-2 max-sm:text-4xl">
            <span className="font-[600] text-[#149cbd]">VISA</span>
            <span>MEDICAL</span>
          </h1>
        </div>

        <div className="space-y-4">
          <h1 className="text-2xl font-semibold">
            Plateforme centrée sur le bien être du patient
          </h1>
          <p className="text-sm font-medium">
            Permet aux médecins d&apos;obtenir des vues récapitulatives sur les
            profils des patients, d&apos;accéder aux dossiers médicaux, de voir
            les resultats de laboratoire, les résumés cliniques des spécialistes
            et l&apos;historique complète des médications.
          </p>
        </div>

        <div className="w-full space-y-3">
          {errorMessage && ( // Afficher le message d'erreur s'il est défini
            <p className="text-red-600 text-sm">{errorMessage}</p>
          )}
          <input
            type="text"
            name="username"
            placeholder="Entrer votre nom d'utilisateur"
            className="border-2 border-gray-400 block w-full rounded-md px-2 py-2"
            onChange={handleGetInfo}
          />
          <input
            type={!showPassword ? "password" : "text"}
            name="password"
            placeholder="Entrer votre mot de passe"
            className="border-2 border-gray-400 block w-full rounded-md px-2 py-2"
            onChange={handleGetInfo}
          />
          <div className="space-x-2 flex items-center">
            <input
              type="checkbox"
              name="showPassword"
              value={showPassword}
              onChange={() => setShowPassword(!showPassword)}
              id="passe"
            />

            <label htmlFor="passe" className="font-medium">
              Afficher le mot de passe
            </label>
          </div>

          <button
            type="submit"
            disabled={btnDisabled || loading ? "disabled" : ""}
            onClick={handleLogin}
            className={`${
              btnDisabled || loading
                ? "w-full bg-[#dddddd] text-white py-2 rounded-md font-medium cursor-not-allowed"
                : "w-full bg-[#149cbd] text-white py-2 rounded-md font-medium mt-5"
            }`}
          >
            {loading ? "Chargement..." : "Se Connecter"}
          </button>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${login_img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          backgroundRepeat: "no-repeat",
        }}
        className="max-lg:hidden"
      ></div>
    </div>
  );
};

export default Login;
