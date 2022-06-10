import React from "react";
import { PEArsPrice, PEArsPriceProps } from ".";
import { Flex } from "../Box";

export default {
  title: "Components/CakePrice",
  component: PEArsPrice,
};

const Template: React.FC<PEArsPriceProps> = ({ ...args }) => {
  return (
    <Flex p="10px">
      <PEArsPrice {...args} />
    </Flex>
  );
};

export const Default = Template.bind({});
Default.args = {
  cakePriceUsd: 20.0,
};
