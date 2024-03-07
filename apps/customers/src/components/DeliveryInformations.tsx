"use client";

import {
  Avatar,
  Badge,
  Box,
  Button,
  Divider,
  Text,
} from "@axazara/raiton-atoms";
import { LocationFill, Timer1Fill } from "@axazara/raiton-icons";
import { openModal } from "@axazara/raiton-molecules";
import { DelivryPhoneNumber } from "./DelivryPhoneNumber";

export function DeliveryInformations() {
  return (
    <Box>
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
        <Box className="space-y-1">
          <Text className="text-dark text-heading-06-sm-semibold">
            Abalo Emmanuel
          </Text>

          <Text className="text-caption-medium text-neutral-60">
            Cotonou - St Michel
          </Text>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-bike text-neutral-60 flex items-center"
          >
            <circle cx="18.5" cy="17.5" r="3.5" />
            <circle cx="5.5" cy="17.5" r="3.5" />
            <circle cx="15" cy="5" r="1" />
            <path d="M12 17.5V14l-3-3 4-3 2 3h2" />
          </svg>
        </Box>
      </Box>

      <Divider color="neutral.6" className="border-neutral-70 mb-4" />

      <Box className="flex justify-between mb-2">
        <Box className="flex items-center space-x-2">
          <Timer1Fill className="w-4 h-4" />
          <Text className="text-p-01-medium">Horaires de travail</Text>
        </Box>

        <Text className="text-caption-medium text-neutral-60">
          7h à 12h & 15h à 20h
        </Text>
      </Box>
      <Box className="flex justify-between">
        <Box className="flex items-center space-x-2">
          <LocationFill className="w-4 h-4" />
          <Text className="text-p-01-medium">Zone couvertes</Text>
        </Box>

        <Text className="text-caption-medium text-neutral-60">
          Cotonou-Calavi
        </Text>
      </Box>
      <Text className="text-center mb-4 mt-8 text-heading-04-sm-semibold text-secondary-60">
        {" "}
        Conseils de sécurité
      </Text>

      <Box className="">
        <Box className="space-y-2 mb-8">
          <Text className="text-caption-medium text-neutral-50">
            1 - Ne pas envoyer de paiements sans avoir verifié le produit.
          </Text>
          <Text className="text-caption-medium text-neutral-50">
            2 - Ne pas envoyer d'argent par des moyens de transfert d'argent,
            par virement bancaire ou par n'importe quels autres moyens.
          </Text>
          <Text className="text-caption-medium text-neutral-50">
            3 - Donner rdv au Livreur dans un lieu public à une heure de
            passage.
          </Text>
        </Box>

        <Button
          onClick={() =>
            openModal({
              children: <DelivryPhoneNumber />,
              size: "xs",
              centered: true,
              title: "",
            })
          }
          fullWidth
          size="xs"
          className="bg-dark text-white"
        >
          Numero de telephone
        </Button>
      </Box>
    </Box>
  );
}
