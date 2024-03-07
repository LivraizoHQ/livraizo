"use client";

import React from "react";
import { Box, InputField, Surface, Text, Button } from "@axazara/raiton-atoms";
import Image from "next/image";

export default function Login() {
  return (
    <Box className="md:max-w-5xl md:mx-auto">
      <Box className="flex md:flex-row flex-col-reverse md:justify-between md:items-center mb-10 mt-10">
        <Box>
          <Box className="flex justify-center">
            <Image
              src="/assets/images/logo.png"
              width={145}
              height={48}
              alt="logo_livraiso"
              className=" mb-6"
            />
          </Box>
          <Box className="mb-4 text-center">
            <Text>Vous recherchez un livreur ?</Text>
            <Text>Créez un compte</Text>
          </Box>
          <Box className="flex flex-col space-y-4 px-4">
            <InputField label="Adress e-mail" />
            <InputField label="Mot de passe" />
            <Box className="flex flex-col md:flex-row items-center md:space-x-6 space-y-4 md:space-y-0">
              <Button fullWidth className="bg-dark md:w-auto">
                Créer un compte
              </Button>
              <Button fullWidth className="bg-[#D2D2D2] md:w-auto">
                Déjà inscrit ? Connecter
              </Button>
            </Box>
          </Box>
        </Box>
        <Box className=" flex justify-center">
          <Surface className="bg-[#D9D9D9] md:w-[512px] md:h-[543px] w-[352px] h-[243px] rounded-3xl mb-10 md:mb-0" />
        </Box>
      </Box>
    </Box>
  );
}
