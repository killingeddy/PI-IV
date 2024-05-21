"use client";
import useAccountModal from "@/utils/hooks/useAccountModal";
import { AiOutlineInfoCircle } from "react-icons/ai";
import SelectComponent from "../inputs/Select";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import Loader from "../loader/index";
import toast from "react-hot-toast";
import Input from "../inputs/Input";
import Button from "../Button";
import api from "@/tools/api";
import Logo from "../Logo";
import Modal from "./Modal";
import moment from "moment";

const AccountModal = ({ isOpen, onClose }) => {
  // VARIAVEIS
  const { data: session } = useSession();
  const accountModal = useAccountModal();
  const [loading, setLoading] = useState(false)
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [user, setUser] = useState({});

  const {
    register,
    handleSubmit,
    clearErrors,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const first_name = watch("first_name");
  const last_name = watch("last_name");
  const state = watch("state");
  const city = watch("city");
  const email = watch("email");
  const cpf = watch("cpf");
  const birth_date = watch("birth_date");
  const cellphone = watch("cellphone");

  const resetError = (fieldName) => {
    clearErrors(fieldName);
  };

  const setCustomValue = (id, value) => {
    setValue(id, value, {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
    });
  };

  // POST

  const onUpdate = (data) => {
    setLoading(true)
    api
      .put("/user/edit", data, {
        headers: {
          "x-access-token": session?.user?.token,
        },
      })
      .then((res) => {
        setLoading(false)
        if (res?.error) {
          toast.error(res?.error);
        } else {
          toast.success("Usuário atualizado com sucesso!");
          accountModal.onClose();
        }
      })
      .catch((err) => {
        setLoading(false)
        toast.error(err?.response?.data?.error?.message);
      });
  };

  // GET

  const getUser = () => {
    if (session) {
      api
        .get("/user/info", {
          headers: {
            "x-access-token": session?.user?.token,
          },
        })
        .then((res) => {
          setUser({
            ...res?.data,
            birth_date: moment(res?.data?.birth_date).format("DD/MM/YYYY"),
          });
        })
        .catch((err) => {
          if (err.status == 401) {
            setUser({});
            accountModal.onClose();
          }
        });
    }
  };

  const { data: dataStates } = useQuery(
    "states",
    () => {
      return fetch(
        "https://servicodados.ibge.gov.br/api/v1/localidades/estados"
      ).then((response) => response.json());
    },
    {
      refetchOnWindowFocus: false,
    }
  );

  const getStates = () => {
    dataStates?.map((state) => setStates((prev) => [...prev, state]));
  };

  const getCities = (id) => {
    fetch(
      `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${id}/municipios`
    )
      .then((res) => res.json())
      .then((data) => {
        setCities(data);
      });
  };

  // USE EFFECTS

  useEffect(() => {
    getStates();

    getUser();
  }, [session, dataStates]);

  useEffect(() => {
    setValue("first_name", user?.first_name);
    setValue("last_name", user?.last_name);
    setValue("email", user?.email);
    setValue("cpf", user?.cpf);
    setValue("birth_date", user?.birth_date);
    setValue("state", user?.state);
    setValue("city", user?.city);
    setValue("cellphone", user?.cellphone);
  }, [user]);

  // ACOES

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        positionClose="left"
        header={
          <>
            <div className="flex flex-row items-center justify-between mt-3 ">
              <div className="ml-12">
                <h1 className="text-2xl text-primary-yellow font-bold">
                  Sua conta
                </h1>
              </div>
              <div
                className="
             
              rounded-t
              bg-primary-green
              p-6
              rounded-tl-full
              rounded-bl-full
              w-[60%]
              "
              >
                <Logo width={100} height={80} src="/images/logo_light.png" />
              </div>
            </div>
          </>
        }
        body={
          <>
            <>
              <div className="w-full md:w-[90%]">
                <div className="flex flex-col md:flex-row mb-4">
                  <Input
                    id="first_name"
                    register={register}
                    value={first_name}
                    onChange={(value) => setCustomValue("first_name", value)}
                    placeholder="Primeiro Nome"
                    margin="mr-0 md:mr-4 mb-4 md:mb-0"
                  />
                  <Input
                    id="last_name"
                    register={register}
                    value={last_name}
                    placeholder="Sobrenome"
                  />
                </div>
                <div className="flex flex-col md:flex-row mb-4">
                  <Input
                    id="email"
                    name="email"
                    register={register}
                    value={email}
                    onChange={(value) => setCustomValue("email", value)}
                    placeholder="Email"
                    margin="mr-0 md:mr-4 mb-4 md:mb-0"
                  />
                  <Input
                    id="cpf"
                    name="cpf"
                    register={register}
                    value={cpf}
                    onChange={(value) => setCustomValue("cpf", value)}
                    placeholder="CPF"
                    typeMask="999.999.999-99"
                    isMask
                  />
                </div>
                <Input
                  id="birth_date"
                  name="birth_date"
                  register={register}
                  value={birth_date}
                  onChange={(value) => setCustomValue("birth_date", value)}
                  placeholder="Data de nascimento"
                  margin="mb-4"
                  typeMask="99/99/9999"
                  isMask
                />
                <Input
                  id="cellphone"
                  name="cellphone"
                  value={cellphone}
                  register={register}
                  // errors={errors}
                  required
                  onChange={() => resetError("cellphone")}
                  placeholder="Telefone"
                  margin="mb-4"
                  isMask
                  typeMask="(99) 99999-9999"
                />
                <div className="flex flex-col md:flex-row mb-4">
                  <SelectComponent
                    id="state"
                    name="state"
                    value={{ label: state }}
                    register={register}
                    isClearable={true}
                    isSearchable={true}
                    margin="mr-4 mb-4 md:mb-0"
                    onChange={(e) => {
                      getCities(e?.value);
                      setCustomValue("state", e?.label);
                      resetError("state");
                    }}
                    placeholder="Selecione um estado"
                    options={states.map((state) => ({
                      label: state.sigla,
                      value: state.id,
                    }))}
                  />
                  <SelectComponent
                    id="city"
                    name="city"
                    value={{ label: city }}
                    register={register}
                    isSearchable={true}
                    isClearable={true}
                    onChange={(e) => {
                      setCustomValue("city", e?.label);
                      resetError("city");
                    }}
                    placeholder="Selecione uma cidade"
                    options={cities.map((city) => ({
                      label: city.nome,
                      value: city.id,
                    }))}
                  />
                </div>
                <div className="flex flex-col">
                  <Input
                    type="password"
                    id="password"
                    register={register}
                    placeholder="Senha"
                    isPassword
                  />{" "}
                </div>
                <div className="flex items-center gap-2 mt-4">
                  <AiOutlineInfoCircle className="text-primary-green" />
                  <p className="text-xs text-gray-500">
                    Só coloque senha caso queira mudar a sua atual. A senha deve
                    conter no mínimo 6 caracteres, com pelo menos um caractere
                    especial.
                  </p>
                </div>
              </div>
            </>
          </>
        }
        footer={
          <>
            {loading === true ? (
                <div className="h-20 flex justify-center items-center pb-16">
                <Loader />
              </div>
            ): (
              <div
              className="
              flex
              flex-col
              gap-2
              px-6
              pb-6
              "
            >
              <div className="flex justify-center">
                <Button
                  outline
                  label="FECHAR"
                  background="primary-green"
                  padding="px-6 py-2"
                  rounded="lg"
                  margin="mr-3"
                  onClick={() => {
                    accountModal.onClose();
                  }}
                />

                <Button
                disabled={loading}
                  label="EDITAR"
                  background="primary-green"
                  padding="px-6 py-2"
                  rounded="lg"
                  labelColor="white"
                  onClick={handleSubmit(onUpdate)}
                />
              </div>
            </div>
            )}
          </>
        }
      />
    </>
  );
};

export default AccountModal;