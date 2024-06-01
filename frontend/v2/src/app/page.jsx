"use client";
import InputPassword from "@/components/inputPassword";
import { signIn, useSession } from "next-auth/react";
import React, { useState, useEffect } from "react";
import BotaoLogin from "@/components/buttonLogin";
import Carousel from "@/components/carrossel";
import { useRouter } from "next/navigation";
import Loader from "@/components/loader";
import Input from "@/components/input";
import { toast } from "react-toastify";
import Image from "next/image";

export default function Login() {
  const router = useRouter();

  const [showpassword, setShowpassword] = useState();

  const { data: session, status } = useSession();

  const handleShowPassword = () => {
    setShowpassword(!showpassword);
  };

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async () => {
    setLoading(true);
    if (!user.email || !user.password) {
      setLoading(false);
      return toast.error("Preencha todos os campos");
    }
  
    try {
      const callback = await signIn("credentials", {
        ...user,
        redirect: false,
      });
  
      if (callback.ok) {
        router.push("/dashboard");
      } else {
        setLoading(false);
        toast.error("Usuário ou senha inválidos");
      }
    } catch (error) {
      setLoading(false);
  
      if (error.response && error.response.text) {
        error.response.text().then((text) => {
          toast.error("Erro inesperado no servidor");
        });
      } else {
        toast.error("Erro inesperado");
      }
    }
  };  

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/dashboard");
    }
  }, [status]);

  return (
    <main
      className="flex min-h-screen items-center justify-center overflow-hidden bg-white bg-cover bg-center"
    >
      {loading ? (
        <Loader color="#7678ee" />
      ) : (
        <>
          <div className="flex h-full w-full items-center justify-center">
            <div className="flex flex-col md:flex-row w-[85%] md:w-[90%] lg:w-[75%] my-8 md:my-16 lg:my-0 rounded-3xl bg-white shadow-2xl" >
              <div className="flex w-full md:1/3 lg:w-1/2 h-full items-start justify-between rounded-3xl">
                <Carousel />
              </div>
              <div className="flex w-full md:w-2/3 lg:w-1/2 flex-col justify-center py-6 md:py-4 lg:py-6 px-8 md:px-8 lg:px-14">
                <h2 className="text-3xl md:text-xl lg:text-3xl font-bold text-[#7678ee] mb-3">
                  Login
                </h2>
                <div className="w-[100%] flex flex-col">
                  <div className="flex justify-between items-center mb-4 md:mb-2 lg:mb-4 w-full h-14 md:h-[2.7rem] lg:h-14"> 
                    <Input
                      placeholder={"Usuário"}
                      value={user.email}
                      onChange={handleChange}
                      name={"email"}
                      type={"text"}
                    />
                  </div>
                  <div className="flex justify-between items-center mb-4 md:mb-2 lg:mb-4">
                    <InputPassword
                      typePassword={showpassword}
                      onClick={handleShowPassword}
                      placeholder={"Senha"}
                      value={user.password}
                      onChange={handleChange}
                      name={"password"}
                      type={"text"}
                    />
                  </div>
                  <BotaoLogin onClick={() => handleLogin()} />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </main>
  );
}
