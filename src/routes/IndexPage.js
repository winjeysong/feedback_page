import React from 'react';
import { connect } from 'dva';
import { Layout } from 'antd';
import TopMenuComponent from '../components/TopMenu/TopMenu';
import LeftNavComponent from '../components/LeftNav/LeftNav';
import { ContentTip } from '../styled/styled-components';
import '../styled/menu.less';

const { Header, Sider, Content } = Layout;

function IndexPage() {
  return (
    <Layout>
      <Header className="header" style={{ height: 70, width: '100%', background: '#182a3a' }}>
        <span className="logo">logo</span>
        <TopMenuComponent />
      </Header>
      <Layout>
        <Sider style={{ background: '#fff', width: 200 }}>
          <LeftNavComponent />
        </Sider>
        <Layout style={{ background: '#f4f5f7', padding: '56px 26px 100px 26px' }}>
          <ContentTip>意见反馈</ContentTip>
          <Content style={{ padding: 24, margin: 0, minHeight: 280 }}>
            内容
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
