import React from 'react';
import { CustomTable } from '../../styled/styled-components';
import UserInfo from '../../components/UserInfo/UserInfo';
import UserFeedback from '../../components/UserFeedback/UserFeedback';
import ReButton from '../../components/ReButton/ReButton';

const columns = [{
  title: '用户',
  dataIndex: 'user',
  width: '25%',
  render: info => <UserInfo userInfo={info} />,
}, {
  title: '反馈内容',
  dataIndex: 'feedback',
  width: '40%',
  render: fb => <UserFeedback userFeedback={fb} />,
}, {
  title: '标签',
  dataIndex: 'tag',
  width: '15%',
}, {
  title: '操作',
  dataIndex: 'operation',
  width: '15%',
  render: () => <ReButton />,
}];

const data = [{
  key: '1',
  user: {
    name: '甜甜',
    tele: '18598886652',
    card: '254152547885',
    avatar: null, // require(avatar path)
  },
  tag: '活动反馈',
  feedback: {
    fbContent: '非常喜欢了',
    fbImg: require('../../assets/9FFF55AE-AFC0-498A-B8AC-51A8EBF1974F@1x.png'),
    fbDate: '2017/10/11 8:21:30',
    fbRe: {
      reMsg: '您好，您反馈的问题已经收到，会尽快核实并处理，对您造成的困扰深表歉意。',
      reStaff: 'mc_ji3423',
      reDate: '2017/10/11 8:21:30',
    },
  },
}, {
  key: '2',
  user: {
    name: '甜甜',
    tele: '18598886652',
    card: '254152547885',
    avatar: null,
  },
  tag: '活动反馈',
  feedback: {
    fbContent: '非常喜欢了',
    fbImg: require('../../assets/9FFF55AE-AFC0-498A-B8AC-51A8EBF1974F@1x.png'),
    fbDate: '2017/10/11 8:21:30',
  },
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
