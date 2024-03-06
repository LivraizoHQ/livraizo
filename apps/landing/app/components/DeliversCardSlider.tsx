'use client';

import React from 'react';
import { Surface, Avatar, Box, Text, Badge } from '@axazara/raiton-atoms';
import { transformArrayForCarousel } from './../utils';

export function DeliversCardSlider() {
  const [paymentMethods, setPaymentMethods] = React.useState<Array<any>>([]);

  React.useEffect(() => {
    fetch('https://moneroo-api.axaship.com/utils/payment/methods')
      .then((response) => response.json())
      .then((data) => setPaymentMethods(transformArrayForCarousel(data.data, data.data.length)));
  }, []);

  return (
    <Box style={{ '--slider-item-count': paymentMethods[0]?.length } as any}>
      <Box className="grid relative overflow-hidden place-items-center w-full">
        <Box
          className="mt-8 flex justify-between w-full gap-10 method-animation"
          style={{ width: 'calc(272px * var(--slider-item-count))', animation: 'slide 150s linear infinite' }}
        >
          {paymentMethods[1]?.map((method: any, index: number) => {
            return (
              <Surface key={`${method.code}-${index}`} radius={24} className="bg-primary p-5 w-full min-w-[272px]">
                <Box className="flex justify-center items-center gap-3">
                  <Badge inline offset={12} size={20} position="bottom-end" withBorder color="red">
                    <Avatar radius={100} size="xl" src="https://randomuser.me/api/portraits/men/91.jpg" />
                  </Badge>
                  <Box className='space-y-2'>
                    <Text className="text-heading-06-semibold text-neutral-30">Nom et Prénom</Text>
                    <Text className="text-heading-06-semibold text-neutral-30">Localisation</Text>
                  </Box>
                </Box>
              </Surface>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}
