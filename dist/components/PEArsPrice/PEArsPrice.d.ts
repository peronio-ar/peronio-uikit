import React, { Dispatch, SetStateAction } from "react";
import { Colors } from "../../theme";
export interface Props {
    color?: keyof Colors;
    pePriceArs?: number;
    onClick: () => void;
    reference: Dispatch<SetStateAction<HTMLElement | null>>;
}
declare const _default: React.NamedExoticComponent<Props>;
export default _default;
