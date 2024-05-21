"use client";
import Modal from "./index";
import Input from "../input";
import DropdownInput from "../dropdown";
import Image from "next/image";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectLabel,
} from "@/components/ui/select";

import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import React from "react";

const AddEventModal = ({ isOpen, onClose }) => {

  const [img, setImg] = React.useState("")

  const handleImage = (e) => {
    try {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setImg(reader.result);
      };
    } catch {}
  };

  const handleInputImage = () => {
    document.getElementById("imageInput").click();
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        positionClose="left"
        header={
          <div className="flex justify-between items-center p-5 text-[#7678ee]">
            <h1 className="text-2xl">Adicionar evento</h1>
          </div>
        }
        body={
          <>
            <div
              className="flex flex-col items-center w-[96%] h-full rouded-3xl mx-auto"
              onClick={""}
            >
              <label className="text-sm md:text-sm lg:text-sm text-[#7678ee] ml-1 mb-0.5">
                Adicionar imagem:
              </label>
              <Image
                src={img}
                alt="Image"
                width={150}
                height={150}
                className="flex border-2 rounded-2xl"
                onClick={handleInputImage}
              />
              <Input id="imageInput" type="file" style={{ display: "none" }} onChange={handleImage}  />
            </div>

            <div className="flex flex-col mx-1 p-2 rounded-xl">
              <label className="text-sm md:text-sm lg:text-sm text-[#7678ee] ml-1 mb-0.5">
                Nome do evento:
              </label>
              <div className="w-[100%] h-12 m-auto">
                <Input
                  placeholder={"Nome do evento"}
                  // value={user.identifier}
                  // onChange={handleChange}
                  name={"identifier"}
                  type={"text"}
                />
              </div>
            </div>

            <div className="flex flex-col mx-1 p-2 rounded-xl">
              <label className="text-sm md:text-sm lg:text-sm text-[#7678ee] ml-1 mb-0.5">
                Estado - Cidade:
              </label>
              <div className="flex justify-between">
                <div className="w-[46%] h-12 m-0">
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Estado" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ocean">Ocean</SelectItem>
                      <SelectItem value="mountain">Mountain</SelectItem>
                      <SelectItem value="forest">Forest</SelectItem>
                      <SelectItem value="desert">Desert</SelectItem>
                      <SelectItem value="river">River</SelectItem>
                      <SelectItem value="canyon">Canyon</SelectItem>
                      <SelectItem value="volcano">Volcano</SelectItem>
                      <SelectItem value="glacier">Glacier</SelectItem>
                      <SelectItem value="savanna">Savanna</SelectItem>
                      <SelectItem value="tundra">Tundra</SelectItem>
                      <SelectItem value="jungle">Jungle</SelectItem>
                      <SelectItem value="island">Island</SelectItem>
                      <SelectItem value="valley">Valley</SelectItem>
                      <SelectItem value="cave">Cave</SelectItem>
                      <SelectItem value="waterfall">Waterfall</SelectItem>
                      <SelectItem value="plateau">Plateau</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="w-[46%] h-12 m-0">
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Cidade" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <div className="flex flex-col mx-1 p-2 rounded-xl">
              <label className="text-sm md:text-sm lg:text-sm text-[#7678ee] ml-1 mb-0.5">
                Endereço:
              </label>
              <div className="w-[100%] h-12 m-auto">
                <Input
                  placeholder={"Nome do evento"}
                  // value={user.identifier}
                  // onChange={handleChange}
                  name={"identifier"}
                  type={"text"}
                />
              </div>
            </div>

            <div className="flex flex-col mx-1 p-2 rounded-xl mb-6">
              <div className="flex justify-between">
                <div className="w-[46%] h-12 m-0">
                  <label className="text-sm md:text-sm lg:text-sm text-[#7678ee] ml-1 mb-0.5">
                    Data de início:
                  </label>
                  <Input
                    placeholder={"Data de início"}
                    type={"date"}
                    // value={moment(data.date).format("YYYY-MM-DD")}
                    // onChange={(e) => setData({ ...data, date: e.target.value })}
                    // icon={<Icons.CalendarOutline />}
                  />
                </div>
                <div className="w-[46%] h-12 m-0">
                  <label className="text-sm md:text-sm lg:text-sm text-[#7678ee] ml-1 mb-0.5">
                    Hora de início:
                  </label>
                  <Input
                    placeholder={"Data de início"}
                    type={"time"}
                    // value={moment(data.date).format("YYYY-MM-DD")}
                    // onChange={(e) => setData({ ...data, date: e.target.value })}
                    // icon={<Icons.CalendarOutline />}
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col mx-1 p-2 rounded-xl mb-6">
              <div className="flex justify-between">
                <div className="w-[46%] h-12 m-0">
                  <label className="text-sm md:text-sm lg:text-sm text-[#7678ee] ml-1 mb-0.5">
                    Data de término:
                  </label>
                  <Input
                    placeholder={"Data de início"}
                    type={"date"}
                    // value={moment(data.date).format("YYYY-MM-DD")}
                    // onChange={(e) => setData({ ...data, date: e.target.value })}
                    // icon={<Icons.CalendarOutline />}
                  />
                </div>
                <div className="w-[46%] h-12 m-0">
                  <label className="text-sm md:text-sm lg:text-sm text-[#7678ee] ml-1 mb-0.5">
                    Hora de término:
                  </label>
                  <Input
                    placeholder={"Data de início"}
                    type={"time"}
                    // value={moment(data.date).format("YYYY-MM-DD")}
                    // onChange={(e) => setData({ ...data, date: e.target.value })}
                    // icon={<Icons.CalendarOutline />}
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col mx-1 p-2 rounded-xl">
              <label className="text-sm md:text-sm lg:text-sm text-[#7678ee] ml-1 mb-0.5">
                Nome do produtor:
              </label>
              <div className="w-[100%] h-12 m-auto">
                <Input
                  placeholder={"Nome do produtor"}
                  // value={user.identifier}
                  // onChange={handleChange}
                  name={"identifier"}
                  type={"text"}
                />
              </div>
            </div>

            <div className="flex flex-col mx-1 p-2 rounded-xl">
              <label className="text-sm md:text-sm lg:text-sm text-[#7678ee] ml-1 mb-0.5">
                Status:
              </label>
              <div className="flex flex-wrap justify-start">
                <div className="w-full md:w-[45%] flex items-center m-1">
                  <Switch id="Evento ativo" />
                  <Label className="text-[#7678ee] ml-2">Evento ativo</Label>
                </div>
                <div className="w-full md:w-[45%] flex items-center m-1">
                  <Switch id="Evento oculto" />
                  <Label className="text-[#7678ee] ml-2">Evento oculto</Label>
                </div>
                <div className="w-full md:w-[45%] flex items-center m-1">
                  <Switch id="Evento destaque" />
                  <Label className="text-[#7678ee] ml-2">Evento em destaque</Label>
                </div>
                <div className="w-full md:w-[45%] flex items-center m-1">
                  <Switch id="Evento no carrossel" />
                  <Label className="text-[#7678ee] ml-2">Evento no carrossel</Label>
                </div>
              </div>
            </div>
          </>
        }
        footer={<></>}
      />
    </>
  );
};

export default AddEventModal;
