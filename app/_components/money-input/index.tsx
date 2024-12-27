import { forwardRef, ForwardedRef } from "react";
import { NumericFormat, NumericFormatProps } from "react-number-format";
import { Input } from "../ui/input";

const MoneyInput = forwardRef(
  (props: NumericFormatProps, ref: ForwardedRef<HTMLInputElement>) => {
    return (
      <NumericFormat
        {...props}
        customInput={Input}
        thousandSeparator="."
        decimalSeparator=","
        allowNegative={false}
        decimalScale={2}
        fixedDecimalScale
        getInputRef={ref}
        prefix="R$ "
      />
    );
  },
);

MoneyInput.displayName = "MoneyInput";

export default MoneyInput;
