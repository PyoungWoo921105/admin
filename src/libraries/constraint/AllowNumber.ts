/*
 * Copyright (c) 2022 Medir Inc.
 */

export const AllowNumber = (props: string) => props.replace(/[^0-9]/g, '');

export default AllowNumber;
