'use client';

import React from 'react';
import { ActionIcon, Box, Table } from '@axazara/raiton-atoms';
import { ProfileDeleteOutline } from '@axazara/raiton-icons';

export default function Users() {
  return (
    <div className="">
      <h1 className="text-display-06 mb-10 pt-10">Liste des livreurs</h1>
      <Box className="w-full overflow-hidden rounded-2xl border border-neutral-80">
        <Table className="rounded-xl overflow-hidden border-collapse border border-neutral-80 border-spacing-0">
          <Table.Head className="text-p-01-semibold border-b border-neutral-80 text-neutral-20 rounded-xl !bg-neutral">
            <Table.HeadCell className="text-neutral-20 text-p-01-semibold">ID</Table.HeadCell>
            <Table.HeadCell className="text-neutral-20 text-p-01-semibold">Email/WhatsApp number</Table.HeadCell>
            <Table.HeadCell className="text-neutral-20 text-p-01-semibold">Created at</Table.HeadCell>
            <Table.HeadCell className="flex justify-end text-neutral-20 text-p-01-semibold">View</Table.HeadCell>
          </Table.Head>
          <Table.Body>
            <Table.Row className="border-b border-neutral-90">
              <Table.Cell>jkdajadj</Table.Cell>
              <Table.Cell>+22951220980</Table.Cell>
              <Table.Cell>02/02/2002</Table.Cell>
              <Table.Cell>
                <Box className="flex justify-end">
                  <ActionIcon color="primary" size="xl" className="p-0.5">
                    <ProfileDeleteOutline className="w-6 h-6" />
                  </ActionIcon>
                </Box>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </Box>
    </div>
  );
}
