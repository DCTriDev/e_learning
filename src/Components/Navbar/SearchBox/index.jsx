import React from 'react';
import {Input, Space} from 'antd';

const {Search} = Input;

const onSearch = value => window.location.href = `/search/${value}`;

function SearchBox() {
    return (
        <Space>
            <Search placeholder="Tìm kiếm khóa học"
                    onSearch={onSearch}
                    allowClear
                    style={{width: 200}}
                    loading={false}
            />
        </Space>
    );
}

export default SearchBox;