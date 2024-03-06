"use client"

import { Box, Text, Button, Divider } from '@axazara/raiton-atoms'
import React from 'react'
import Image from 'next/image'

export default function Header() {
  return (
    <Box className="bg-[#E9E9E7] w-full">
        <Box className="max-w-7xl mx-auto pt-6 md:block hidden">
          <Box className="flex justify-between items-center w-full mb-4">
            <Box className="flex items-center space-x-12">
              <Image src="/assets/images/logo.png" width={120} height={40} alt="logo_livraiso" />
              <Box className="flex items-center space-x-6">
                <Text className="text-p-01-semibold">
                  About
                </Text>
                <Text className="text-p-01-semibold">
                  A propos
                </Text>
              </Box>
            </Box>
            <Box className="flex items-center space-x-6">
              <Text className="text-p-01-semibold">
                Log in
              </Text>
              <Button className="bg-dark text-white rounded-3xl">
                Créer un compte
              </Button>
            </Box>

          </Box>
          <Divider />
        </Box> 
    </Box>
    
  )
}
