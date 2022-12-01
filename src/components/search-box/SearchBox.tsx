import { useState } from "react";
import Box from "../Box";
import Icon from "../icon/Icon";
import TextField from "../text-field/TextField";
import StyledSearchBox from "./SearchBoxStyle";

export interface SearchBoxProps {}

const SearchBox: React.FC<SearchBoxProps> = () => {
  const [category, setCategory] = useState("All Brand");
  const [resultList, setResultList] = useState([]);

  const handleCategoryChange = (cat: any) => () => {
    setCategory(cat);
  };

  return (
    <Box position="relative" flex="1 1 0" maxWidth="670px" mx="auto">
      <StyledSearchBox>
        <Icon className="search-icon" size="18px" transform="0">
          search
        </Icon>
        <TextField
          className="search-field"
          placeholder="Search and hit enter..."
          fullwidth
        />
      </StyledSearchBox>
    </Box>
  );
};

const categories = [
  "All Categories",
  "Car",
  "Clothes",
  "Electronics",
  "Laptop",
  "Desktop",
  "Camera",
  "Toys",
];

export default SearchBox;