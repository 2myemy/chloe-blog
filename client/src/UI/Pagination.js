import React, { useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const BasicPagination = props => {
  const [currentPage, setcurrentPage] = useState(1);

  const onChange = (event, value) => {
    setcurrentPage(value);
    props.onPageChange(value);
  };

  return (
    <Stack spacing={2}>
      <Pagination count={props.totalPage} page={currentPage} onChange={onChange} />
    </Stack>
  );
};

export default BasicPagination;
