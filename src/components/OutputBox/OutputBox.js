import React from 'react';
import { Row, Col, Form, Button } from 'antd';
import { ContentWrap } from '../../styled/styled-components';

const FormItem = Form.Item;

function OutputBox() {
  return (
    <ContentWrap center>
      <Form>
        <Row>
          <Col span={12} offset={6}>
            <FormItem>
              <Button type="primary" ghost style={{ fontSize: 12, padding: '0 39px' }}><span>导</span><span>出</span></Button>
            </FormItem>
          </Col>
        </Row>
      </Form>
    </ContentWrap>
  );
}

export default OutputBox;
