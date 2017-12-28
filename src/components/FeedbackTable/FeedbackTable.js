import React from 'react';
import { connect } from 'dva';
import { CustomTable } from '../../styled/styled-components';
import UserInfo from '../../components/UserInfo/UserInfo';

const columns = [{
  title: '用户',
  dataIndex: 'user',
  render: info => <UserInfo userInfo={info} />,
}, {
  title: '反馈内容',
  dataIndex: 'feedback',
}, {
  title: '标签',
  dataIndex: 'tag',
}, {
  title: '操作',
  dataIndex: 'operation',
}];

const data = [{
  key: '1',
  user: {
    name: '甜甜',
    tele: '18598886652',
    card: '254152547885',
  },
  tag: '活动反馈',
  feedback: 'content',
  operation: 'New York No. 1 Lake Park',
}, {
  key: '2',
  user: {
    name: '甜甜',
    tele: '18598886652',
    card: '254152547885',
  },
  tag: '活动反馈',
  feedback: 'content',
  operation: 'London No. 1 Lake Park',
}];

// rowSelection object indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: record => ({
    disabled: record.name === 'Disabled User', // Column configuration not to be checked
  }),
};

function FeedbackTable() {
  return (
    <CustomTable rowSelection={rowSelection} columns={columns} dataSource={data} />
  );
}

export default FeedbackTable;
