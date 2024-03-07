'use client';

import React from 'react';
import Image from 'next/image';
import { Box, Button, Text, Surface } from '@axazara/raiton-atoms';
import { MessageNotifFill } from '@axazara/raiton-icons';
import { DeliversCardSlider, Header } from './components';

export default function Page(): JSX.Element {
  return (
    <Box>
      <Box className="bg-neutral-10">
        <Box className="md:max-w-7xl mx-auto mb-10 md:px-0 px-5">
          <Header />
          <Box className="flex justify-center mb-12">
            <Text className="text-display-04 text-white md:w-3/4">
              Vous êtes à la recherche d’un livreur ? C’est ici.
            </Text>
          </Box>
          <Box className="flex justify-center">
            <Image src="/assets/hero-illustration.svg" height={320} width={1168} alt="hero" />
          </Box>
          <Box className="flex md:flex-row flex-col gap-5 justify-center pt-10">
            <Button variant="filled" className="bg-white text-black">
              Trouver un livreur
            </Button>
            <Button variant="filled" className="bg-[#353434]">
              Devenir un livreur
            </Button>
          </Box>
        </Box>
        <Box className="mb-10">
          <DeliversCardSlider />
        </Box>
        <Box className="bg-white pt-10">
          <Box className="md:max-w-5xl max-w-xs mx-auto mb-20">
            <Box className="flex md:flex-row flex-col items-center md:space-x-10 md:space-y-0 space-y-5">
              <Box>
                <Text className="text-display-04 mb-2">Devenez livreur, gagnez de l’argent.</Text>
                <Text component="p">Créez votre compte et commencez à livrer.</Text>
                <Box className="flex md:flex-row flex-col gap-4 pt-10">
                  <Button variant="filled" className="bg-[#353434]">
                    Devenir un livreur
                  </Button>
                  <Button variant="filled" className="bg-[#003932] text-white">
                    Trouver un livreur
                  </Button>
                </Box>
              </Box>
              <Image src="/assets/delivers.svg" width={512} height={543} alt="delivers-illustration" />
            </Box>
          </Box>
          <Box className="md:max-w-5xl max-w-xs mx-auto mb-10">
            <Box className="flex md:flex-row flex-col items-center md:space-x-10 md:space-y-0 space-y-5">
              <Image src="/assets/delivers.svg" width={512} height={543} alt="delivers-illustration" />
              <Box>
                <Text className="text-display-04 mb-2">Livraizo, c’est gratuit. Trouvez votre livreur</Text>
                <Text component="p">
                  Lorem ipsum dolor sit amet consectetur. Netus integer sed diam egestas faucibus.
                </Text>
                <Box className="flex md:flex-row flex-col gap-4 pt-10">
                  <Button variant="filled" className="bg-[#353434]">
                    Devenir un livreur
                  </Button>
                  <Button variant="filled" className="bg-[#003932] text-white">
                    Trouver un livreur
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className="bg-white mt-16 px-4">
            <Surface className="flex justify-center bg-[#D9D9D9] md:max-w-6xl h-44 mx-auto rounded-3xl" />
            <Box className="text-center">
              <Text className="text-dark md:text-display-04 mt-8">Accédez au catalogue</Text>
            </Box>
            <Box className="flex md:flex-row md:space-x-4 justify-center mt-6 mb-20">
              <Button className="bg-dark text-white">Trouver un livreur</Button>
              <Button className="bg-dark text-white">Devenir livreur</Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
