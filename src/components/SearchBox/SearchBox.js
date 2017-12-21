import React from 'react';
import { Row, Col, Form, DatePicker, Input, Select, Button } from 'antd';
import { ContentWrap } from '../../styled/styled-components';
import '../../styled/date-picker.less';
import '../../styled/select.less';

const FormItem = Form.Item;
const Option = Select.Option;
class DateRange extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();

    this.props.form.validateFields((err, fieldsValue) => {
      if (err) {
        return;
      }

      const values = {
        ...fieldsValue,
        'start-date': fieldsValue['start-date'].format('YYYY-MM-DD'),
        'end-date': fieldsValue['end-date'].format('YYYY-MM-DD'),
        'user-info': fieldsValue['user-info'],
        'tag-select': fieldsValue['tag-select'],
        'has-responded': fieldsValue['has-responded'],
      };
      console.log('received values of form: ', values);
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const dateConfig = {
      rules: [{
        type: 'object',
        required: true,
        message: '请选择时间',
      }],
    };
    const userConfig = {
      rules: [{
        pattern: /./,
      }],
    };
    const tagConfig = {
      initialValue: '全部',
    };
    const resConfig = {
      initialValue: '全部',
    };

    return (
      <ContentWrap>
        <Form onSubmit={this.handleSubmit}>
          <Row>
            <Col span={6}>
              <FormItem
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                label="反馈时间:"
                colon={false}
                required={false}
              >
                {getFieldDecorator('start-date', dateConfig)(
                  <DatePicker placeholder="开始时间" style={{ display: 'inline-block', width: '100%' }} />
                )}
              </FormItem>
            </Col>
            <Col span={6}>
              <FormItem
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 16 }}
                label="至"
                colon={false}
                required={false}
              >
                {getFieldDecorator('end-date', dateConfig)(
                  <DatePicker placeholder="结束时间" style={{ display: 'inline-block', width: '100%' }} />
                )}
              </FormItem>
            </Col>
            <Col span={9}>
              <FormItem
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 18 }}
                label="用户:"
                colon={false}
                hasFeedback
              >
                {getFieldDecorator('user-info', userConfig)(
                  <Input placeholder="昵称/手机号/卡号" />
                )}
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <FormItem
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 18 }}
                label="标签:"
                colon={false}
              >
                {getFieldDecorator('tag-select', tagConfig)(
                  <Select placeholder="请选择">
                    <Option value="全部">全部</Option>
                  </Select>
                )}
              </FormItem>
            </Col>
            <Col span={9}>
              <FormItem
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 18 }}
                label="回复情况:"
                colon={false}
              >
                {getFieldDecorator('has-responded', resConfig)(
                  <Select placeholder="请选择">
                    <Option value="全部">全部</Option>
                  </Select>
                )}
              </FormItem>
            </Col>
            <Col span={2} offset={1}>
              <FormItem>
                <Button type="primary" htmlType="submit" ghost style={{ fontSize: 12 }}>查询</Button>
              </FormItem>
            </Col>
          </Row>
        </Form>
      </ContentWrap>
    );
  }
}

const WrappedDateRange = Form.create()(DateRange);

export default WrappedDateRange;
