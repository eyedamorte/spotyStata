import React, { useEffect, useState, FC } from "react";
import { Select } from "antd";
import useDebounce from "../hooks/useDebounce";
import { useSelector, useDispatch } from "react-redux";
import { getArtistsList } from "./ArtistsSelector";
import { getArtistsThunk, selectArtist } from "./ArtistsSlice";
import { Avatar } from "antd";

const { Option } = Select;

interface ArtistsSearchPropsType {
  style?: React.CSSProperties;
}

const ArtistsSearch: FC<ArtistsSearchPropsType> = ({ style }) => {
  const dispatch = useDispatch();

  const [value, setValue] = useState<string>("");
  const debouncedValue = useDebounce<string>(value, 500);
  const artistsList = useSelector(getArtistsList);

  const options = artistsList.map((d) => (
    <Option value={d.id} key={d.id}>
      <Avatar shape="square" src={d.images[0]?.url} /> {d.name}
    </Option>
  ));

  const handleChange = (value: string) => {
    dispatch(selectArtist(value));
  };

  const handleSearch = (value: string) => {
    setValue(value);
  };

  useEffect(() => {
    if (debouncedValue.length) {
      dispatch(getArtistsThunk({ q: debouncedValue }));
    }
  }, [debouncedValue]);

  return (
    <Select
      showSearch
      value={value}
      placeholder={"placeholder"}
      style={style}
      defaultActiveFirstOption={false}
      showArrow={false}
      filterOption={false}
      onSearch={handleSearch}
      onChange={handleChange}
      notFoundContent={null}
    >
      {options}
    </Select>
  );
};

export default ArtistsSearch;
