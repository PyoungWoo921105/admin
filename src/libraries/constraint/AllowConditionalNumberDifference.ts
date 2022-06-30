/*
 * Copyright (c) 2022 Medir Inc.
 */

export const AllowConditionalNumberDifference = (props: { first: string; second: string }) => {
  const { first, second } = props;
  let tempFirst = 0;
  let tempSecond = 0;
  if (first && Number(first)) {
    tempFirst = Number(first);
  }
  if (second && Number(second)) {
    tempSecond = Number(second);
  }
  return (tempFirst + tempSecond).toString();
};

export default AllowConditionalNumberDifference;
