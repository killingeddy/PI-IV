"use client";
import InputPassword from "@/components/inputPassword";
import BotaoLogin from "@/components/buttonLogin";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import Loader from "@/components/loader";
import React, { useState } from "react";
import Input from "@/components/input";
import { toast } from "react-toastify";
import useApi from "@/tools/api";

export default function Register() {
    const router = useRouter();

    const [showpassword, setShowpassword] = useState();

    const handleShowPassword = () => {
        setShowpassword(!showpassword);
    };

    const api = useApi();

    const [user, setUser] = useState({
        name: "",
        email: "",
        cpf: "",
        password: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    };

    const handleRegister = async () => {
        setLoading(true);
        if (!user.email || !user.password || !user.name || !user.cpf) {
            setLoading(false);
            return toast.error("Preencha todos os campos");
        }

        user.cpf = user.cpf.replace(/\D/g, "");

        api
            .post("/auth/register", user)
            .then((response) => {
                setLoading(false);
                toast.success("Usuário cadastrado com sucesso");
                Login(user.email, user.password);
            })
            .catch((error) => {
                setLoading(false);
                toast.error("Erro ao cadastrar usuário");
            });
    };

    const Login = async (email, password) => {
        setLoading(true);
        try {
            const callback = await signIn("credentials", {
                email: email,
                password: password,
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
        setLoading(false);
    }

    return (
        <main
            className="flex min-h-screen items-center justify-center overflow-hidden bg-white bg-cover bg-center"
        >
            {loading ? (
                <Loader color="#7678ee" />
            ) : (
                <>
                    <div className="flex h-screen w-full items-center justify-center bg-[#7678ee]">
                        <div className="flex flex-col md:flex-row my-8 md:my-16 lg:my-0 rounded-3xl bg-white shadow-2xl" >
                            <div className="flex w-full flex-col justify-center py-6 md:py-4 lg:py-6 px-8 md:px-8 lg:px-14">
                                <h2 className="text-3xl md:text-xl lg:text-3xl font-bold text-[#7678ee] mb-3">
                                    Cadastre-se
                                </h2>
                                <div className="w-[100%] flex flex-col">
                                    <div className="flex justify-between items-center mb-4 md:mb-2 lg:mb-4 w-full h-14 md:h-[2.7rem] lg:h-14">
                                        <Input
                                            placeholder={"Nome"}
                                            value={user.name}
                                            onChange={handleChange}
                                            name={"name"}
                                            type={"text"}
                                        />
                                    </div>
                                    <div className="flex justify-between items-center mb-4 md:mb-2 lg:mb-4 w-full h-14 md:h-[2.7rem] lg:h-14">
                                        <Input
                                            placeholder={"CPF"}
                                            value={user.cpf}
                                            onChange={handleChange}
                                            name={"cpf"}
                                            type={"text"}
                                        />
                                    </div>
                                    <div className="flex justify-between items-center mb-4 md:mb-2 lg:mb-4 w-full h-14 md:h-[2.7rem] lg:h-14">
                                        <Input
                                            placeholder={"E-mail"}
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
                                    <BotaoLogin onClick={() => handleRegister()} text={'Criar conta'} />
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </main>
    );
}
