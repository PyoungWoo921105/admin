/*
 * Copyright (c) 2022 Medir Inc.
 */

export const AllowNumericInput = (props: string) => props.replace(/[^0-9]/g, '');

export default AllowNumericInput;
