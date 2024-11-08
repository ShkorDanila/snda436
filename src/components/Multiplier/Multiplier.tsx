import { Fragment, PropsWithChildren, ReactElement } from "react";

interface MultiplierProps extends PropsWithChildren {
  count?: number;
  keyPrefix: string;
}

const Multiplier = ({
  children,
  count,
  keyPrefix,
}: MultiplierProps): ReactElement => {
  return (
    <>
      {count
        ? Array(count)
            .fill(0)
            .map((_, iterator) => (
              <Fragment key={`${keyPrefix}_${iterator}`}>{children}</Fragment>
            ))
        : null}
    </>
  );
};
export default Multiplier;
