import React from 'react';
import { Layout } from 'antd';
import PropTypes from 'prop-types';
import TopMenuComponent from '../TopMenu/TopMenu';
import LeftNavComponent from '../LeftNav/LeftNav';
// import DataRange from '../components/DateRange/DateRange';
import { ContentTip } from '../../styled/styled-components';
import '../../styled/menu.less';

const { Header, Sider, Content } = Layout;

function MainLayout({ location, tip, content }) {
  return (
    <Layout>
      <Header className="header" style={{ height: 70, width: '100%', background: '#182a3a' }}>
        <span className="logo">logo</span>
        <TopMenuComponent location={location} />
      </Header>
      <Layout>
        <Sider style={{ background: '#fff', width: 200, boxShadow: '3px 0 3px #e5e5e5' }}>
          <LeftNavComponent location={location} />
        </Sider>
        <Layout style={{ background: '#f4f5f7', padding: '56px 26px 100px 26px' }}>
          <ContentTip>{tip}</ContentTip>
          <Content style={{ padding: 24, margin: 0, minHeight: 280 }}>
            {content}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

MainLayout.PropTypes = {
  location: PropTypes.object.isRequired,
  tip: PropTypes.string,
  content: PropTypes.string,
};

export default MainLayout;
