import React, { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { PeronioCircle, PeronioCircleV2 } from "../Svg";
import Text from "../Text/Text";
import Skeleton from "../Skeleton/Skeleton";
import { Colors } from "../../theme";
import { Input } from "../Input";

export interface Props {
  color?: keyof Colors;
  pePriceArs?: number;
  onClick: () => void;
  reference: Dispatch<SetStateAction<HTMLElement | null>>;
}

const PriceLink = styled.a`
  display: flex;
  align-items: center;
  svg {
    transition: transform 0.3s;
  }
  :hover {
    svg {
      transform: scale(1.2);
    }
  }
`;

const PEArsPrice: React.FC<Props> = ({
  pePriceArs,
  color = "textSubtle",
  onClick,
  reference,
}) => {
  return pePriceArs ? (
    <PriceLink ref={reference} onClick={onClick}>
      <PeronioCircleV2 width="24px" mr="8px" />
      <Text color={color} bold>
        1 PE = {`$${pePriceArs.toFixed(3)}`} ARS
      </Text>
    </PriceLink>
  ) : (
    <Skeleton width={80} height={24} />
  );
};

export default React.memo(PEArsPrice);
