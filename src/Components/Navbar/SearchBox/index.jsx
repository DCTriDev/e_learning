import React from "react";
import { Input, message, Space } from "antd";

const { Search } = Input;

const onSearch = (value) => {
  if (value.trim().length === 0) {
    return message.error("Bạn chưa nhập gì vào ô tìm kiếm !!!");
  } else {
    return (window.location.href = `/search/${value}`);
  }
};

function SearchBox() {
  return (
    <Space>
      <Search
        placeholder="Tìm kiếm khóa học"
        onSearch={onSearch}
        allowClear
        style={{ width: 200 }}
        loading={false}
      />
    </Space>
  );
}

export default SearchBox;
