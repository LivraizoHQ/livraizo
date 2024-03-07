"use client";

import {
  Box,
  Surface,
  Button,
  Text,
  Badge,
  Avatar,
  Pagination,
  Select,
  InputField,
  Divider,
} from "@axazara/raiton-atoms";
import { openModal } from "@axazara/raiton-molecules";
import { MessageNotifFill, LocationFill, CarFill } from "@axazara/raiton-icons";
import Image from "next/image";
import { DeliveryInformations } from "@/components/DeliveryInformations";

export default function Home() {
  return (
    <Box>
      <Box className="bg-[#E9E9E7]">
        <Box className="flex md:flex-row flex-col justify-center items-center md:space-x-4 space-y-5 md:space-y-0 mb-14 pt-16 px-4">
          <Select
            className="md:w-auto w-full"
            icon={<CarFill className="w-4 h-4" />}
            data={[""]}
            styles={(theme) => ({
              input: {
                background: "#E9E9E7",
                borderColor: "#D9D9D9",
              },
            })}
          />
          <InputField
            className="md:w-auto w-full"
            placeholder="Votre Ville"
            icon={<LocationFill className="w-4 h-4" />}
            styles={(theme) => ({
              input: {
                background: "#E9E9E7",
                borderColor: "#D9D9D9",
              },
            })}
          />
          <Button className="bg-dark text-white md:w-auto w-full">
            Afficher la liste
          </Button>
        </Box>

        <Box className="grid md:grid-cols-3 grid-cols-1 md:max-w-6xl md:mx-auto gap-6 pb-12 px-4">
          <Surface className="bg-[#E9E9E7] border border-[#D9D9D9] hover:bg-white hover:border-white ">
            <Box className="p-6">
              <Box className="flex items-center mb-4 space-x-2.5">
                <Badge
                  inline
                  offset={7}
                  size={15}
                  position="bottom-end"
                  withBorder
                  color="red"
                >
                  <Avatar
                    radius={100}
                    size="lg"
                    src="https://randomuser.me/api/portraits/men/91.jpg"
                  />
                </Badge>
                <Box>
                  <Text className="text-dark text-heading-06-sm-semibold">
                    Nom et Prénom
                  </Text>

                  <Text className=" text-caption-medium text-neutral-60">
                    Cotonou - St Michel
                  </Text>
                </Box>
              </Box>
              <Box className="flex space-x-2 mb-4">
                <Image
                  src="/assets/images/i1.png"
                  width={48}
                  height={48}
                  alt="source_image"
                />
                <Image
                  src="/assets/images/i2.png"
                  width={48}
                  height={48}
                  alt="source_image"
                />
                <Image
                  src="/assets/images/i3.png"
                  width={48}
                  height={48}
                  alt="source_image"
                />
                <Image
                  src="/assets/images/i4.png"
                  width={48}
                  height={48}
                  alt="source_image"
                />
              </Box>
              <Text className="mb-4">
                Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
              </Text>
              <Box className="flex w-full space-x-2">
                <Button
                  onClick={() =>
                    openModal({
                      children: <DeliveryInformations />,
                      size: "md",
                      centered: true,
                      title: "",
                    })
                  }
                  fullWidth
                  size="xs"
                  className="bg-dark text-white"
                >
                  Contacter
                </Button>
               
              </Box>
            </Box>
          </Surface>
          <Surface className="bg-[#E9E9E7] border border-[#D9D9D9] hover:bg-white hover:border-white ">
            <Box className="p-6">
              <Box className="flex items-center mb-4 space-x-2.5">
                <Badge
                  inline
                  offset={7}
                  size={15}
                  position="bottom-end"
                  withBorder
                  color="red"
                >
                  <Avatar
                    radius={100}
                    size="lg"
                    src="https://randomuser.me/api/portraits/men/91.jpg"
                  />
                </Badge>
                <Box>
                  <Text className="text-dark text-heading-06-sm-semibold">
                    Nom et Prénom
                  </Text>

                  <Text className=" text-caption-medium text-neutral-60">
                    Cotonou - St Michel
                  </Text>
                </Box>
              </Box>
              <Box className="flex space-x-2 mb-4">
                <Image
                  src="/assets/images/i1.png"
                  width={48}
                  height={48}
                  alt="source_image"
                />
                <Image
                  src="/assets/images/i2.png"
                  width={48}
                  height={48}
                  alt="source_image"
                />
                <Image
                  src="/assets/images/i3.png"
                  width={48}
                  height={48}
                  alt="source_image"
                />
                <Image
                  src="/assets/images/i4.png"
                  width={48}
                  height={48}
                  alt="source_image"
                />
              </Box>
              <Text className="mb-4">
                Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
              </Text>
              <Box className="flex w-full space-x-2">
                <Button
                  onClick={() =>
                    openModal({
                      children: <DeliveryInformations />,
                      size: "md",
                      centered: true,
                      title: "",
                    })
                  }
                  fullWidth
                  size="xs"
                  className="bg-dark text-white"
                >
                  Contacter
                </Button>
               
              </Box>
            </Box>
          </Surface>
          <Surface className="bg-[#E9E9E7] border border-[#D9D9D9] hover:bg-white hover:border-white ">
            <Box className="p-6">
              <Box className="flex items-center mb-4 space-x-2.5">
                <Badge
                  inline
                  offset={7}
                  size={15}
                  position="bottom-end"
                  withBorder
                  color="red"
                >
                  <Avatar
                    radius={100}
                    size="lg"
                    src="https://randomuser.me/api/portraits/men/91.jpg"
                  />
                </Badge>
                <Box>
                  <Text className="text-dark text-heading-06-sm-semibold">
                    Nom et Prénom
                  </Text>

                  <Text className=" text-caption-medium text-neutral-60">
                    Cotonou - St Michel
                  </Text>
                </Box>
              </Box>
              <Box className="flex space-x-2 mb-4">
                <Image
                  src="/assets/images/i1.png"
                  width={48}
                  height={48}
                  alt="source_image"
                />
                <Image
                  src="/assets/images/i2.png"
                  width={48}
                  height={48}
                  alt="source_image"
                />
                <Image
                  src="/assets/images/i3.png"
                  width={48}
                  height={48}
                  alt="source_image"
                />
                <Image
                  src="/assets/images/i4.png"
                  width={48}
                  height={48}
                  alt="source_image"
                />
              </Box>
              <Text className="mb-4">
                Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
              </Text>
              <Box className="flex w-full space-x-2">
                <Button
                  onClick={() =>
                    openModal({
                      children: <DeliveryInformations />,
                      size: "md",
                      centered: true,
                      title: "",
                    })
                  }
                  fullWidth
                  size="xs"
                  className="bg-dark text-white"
                >
                  Contacter
                </Button>
               
              </Box>
            </Box>
          </Surface>
          <Surface className="bg-[#E9E9E7] border border-[#D9D9D9] hover:bg-white hover:border-white ">
            <Box className="p-6">
              <Box className="flex items-center mb-4 space-x-2.5">
                <Badge
                  inline
                  offset={7}
                  size={15}
                  position="bottom-end"
                  withBorder
                  color="red"
                >
                  <Avatar
                    radius={100}
                    size="lg"
                    src="https://randomuser.me/api/portraits/men/91.jpg"
                  />
                </Badge>
                <Box>
                  <Text className="text-dark text-heading-06-sm-semibold">
                    Nom et Prénom
                  </Text>

                  <Text className=" text-caption-medium text-neutral-60">
                    Cotonou - St Michel
                  </Text>
                </Box>
              </Box>
              <Box className="flex space-x-2 mb-4">
                <Image
                  src="/assets/images/i1.png"
                  width={48}
                  height={48}
                  alt="source_image"
                />
                <Image
                  src="/assets/images/i2.png"
                  width={48}
                  height={48}
                  alt="source_image"
                />
                <Image
                  src="/assets/images/i3.png"
                  width={48}
                  height={48}
                  alt="source_image"
                />
                <Image
                  src="/assets/images/i4.png"
                  width={48}
                  height={48}
                  alt="source_image"
                />
              </Box>
              <Text className="mb-4">
                Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
              </Text>
              <Box className="flex w-full space-x-2">
                <Button
                  onClick={() =>
                    openModal({
                      children: <DeliveryInformations />,
                      size: "md",
                      centered: true,
                      title: "",
                    })
                  }
                  fullWidth
                  size="xs"
                  className="bg-dark text-white"
                >
                  Contacter
                </Button>
               
              </Box>
            </Box>
          </Surface>
          <Surface className="bg-[#E9E9E7] border border-[#D9D9D9] hover:bg-white hover:border-white ">
            <Box className="p-6">
              <Box className="flex items-center mb-4 space-x-2.5">
                <Badge
                  inline
                  offset={7}
                  size={15}
                  position="bottom-end"
                  withBorder
                  color="red"
                >
                  <Avatar
                    radius={100}
                    size="lg"
                    src="https://randomuser.me/api/portraits/men/91.jpg"
                  />
                </Badge>
                <Box>
                  <Text className="text-dark text-heading-06-sm-semibold">
                    Nom et Prénom
                  </Text>

                  <Text className=" text-caption-medium text-neutral-60">
                    Cotonou - St Michel
                  </Text>
                </Box>
              </Box>
              <Box className="flex space-x-2 mb-4">
                <Image
                  src="/assets/images/i1.png"
                  width={48}
                  height={48}
                  alt="source_image"
                />
                <Image
                  src="/assets/images/i2.png"
                  width={48}
                  height={48}
                  alt="source_image"
                />
                <Image
                  src="/assets/images/i3.png"
                  width={48}
                  height={48}
                  alt="source_image"
                />
                <Image
                  src="/assets/images/i4.png"
                  width={48}
                  height={48}
                  alt="source_image"
                />
              </Box>
              <Text className="mb-4">
                Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
              </Text>
              <Box className="flex w-full space-x-2">
                <Button
                  onClick={() =>
                    openModal({
                      children: <DeliveryInformations />,
                      size: "md",
                      centered: true,
                      title: "",
                    })
                  }
                  fullWidth
                  size="xs"
                  className="bg-dark text-white"
                >
                  Contacter
                </Button>
               
              </Box>
            </Box>
          </Surface>
          <Surface className="bg-[#E9E9E7] border border-[#D9D9D9] hover:bg-white hover:border-white ">
            <Box className="p-6">
              <Box className="flex items-center mb-4 space-x-2.5">
                <Badge
                  inline
                  offset={7}
                  size={15}
                  position="bottom-end"
                  withBorder
                  color="red"
                >
                  <Avatar
                    radius={100}
                    size="lg"
                    src="https://randomuser.me/api/portraits/men/91.jpg"
                  />
                </Badge>
                <Box>
                  <Text className="text-dark text-heading-06-sm-semibold">
                    Nom et Prénom
                  </Text>

                  <Text className=" text-caption-medium text-neutral-60">
                    Cotonou - St Michel
                  </Text>
                </Box>
              </Box>
              <Box className="flex space-x-2 mb-4">
                <Image
                  src="/assets/images/i1.png"
                  width={48}
                  height={48}
                  alt="source_image"
                />
                <Image
                  src="/assets/images/i2.png"
                  width={48}
                  height={48}
                  alt="source_image"
                />
                <Image
                  src="/assets/images/i3.png"
                  width={48}
                  height={48}
                  alt="source_image"
                />
                <Image
                  src="/assets/images/i4.png"
                  width={48}
                  height={48}
                  alt="source_image"
                />
              </Box>
              <Text className="mb-4">
                Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
              </Text>
              <Box className="flex w-full space-x-2">
                <Button
                  onClick={() =>
                    openModal({
                      children: <DeliveryInformations />,
                      size: "md",
                      centered: true,
                      title: "",
                    })
                  }
                  fullWidth
                  size="xs"
                  className="bg-dark text-white"
                >
                  Contacter
                </Button>
               
              </Box>
            </Box>
          </Surface>
        </Box>
        <Box className="flex justify-center pb-16">
          <Pagination
            size="xl"
            radius={0}
            spacing={0}
            color="green"
            initialPage={1}
            total={5}
            style={{ gap: 0 }}
            styles={() => ({
              item: {
                fontSize: 14,
                "&:focus": {
                  outline: "none",
                },
              },
            })}
          />
        </Box>
      </Box>
      <Box className="bg-white mt-16 px-4">
        <Surface className="flex justify-center bg-[#D9D9D9] md:max-w-6xl h-44 mx-auto rounded-3xl" />
        <Box className="text-center">
          <Text className="text-dark md:text-display-04 mt-8">
            Besoin d’assistance ?
          </Text>
          <Text className="mt-6 md:text-heading-06-sm-medium max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur. Netus integer sed diam
            egestas faucibus.
          </Text>
        </Box>
        <Box className="flex justify-center mt-6 mb-20">
          <Button
            leftIcon={<MessageNotifFill className="w-4 h-4" />}
            className="bg-dark text-white"
          >
            Dite-nous en plus
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
