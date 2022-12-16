import { Button, Form, Input, Select, Tabs, message } from "antd"
import { useEffect } from "react"

import { useStorage } from "@plasmohq/storage/hook"

const Option = Select.Option
const FormItem = Form.Item

function Setting() {
  const [form] = Form.useForm()

  const [qiniuConfig, setQiniuConfig] = useStorage("qiniuConfig", {})
  const onFinish = (values: any) => {
    setQiniuConfig(values)
    message.success("保存成功！")
  }

  useEffect(() => {
    form.setFieldsValue(qiniuConfig)
  }, [qiniuConfig])

  const layout = {
    labelCol: { span: 5 },
    wrapperCol: { span: 16 }
  }

  return (
    <Form
      {...layout}
      form={form}
      initialValues={qiniuConfig}
      onFinish={onFinish}
      autoComplete="off">
      <FormItem
        label="AccessKey"
        name="accessKey"
        rules={[{ required: true, message: "请输入 accessKey" }]}>
        <Input placeholder="请输入 accessKey" />
      </FormItem>
      <FormItem
        name="secretKey"
        rules={[{ required: true, message: "请输入 secretKey" }]}
        label="SecretKey">
        <Input placeholder="请输入 secretKey" />
      </FormItem>
      <FormItem
        name="bucket"
        rules={[{ required: true, message: "请输入空间名称" }]}
        label="Bucket">
        <Input placeholder="请输入空间名称" />
      </FormItem>
      <FormItem
        name="domain"
        rules={[{ required: true, message: "请输入域名" }]}
        label="域名">
        <Input placeholder="请输入域名" />
      </FormItem>
      <FormItem
        name="region"
        rules={[{ required: true, message: "请选择存储区域" }]}
        label="存储区域">
        <Select style={{ width: "100%" }}>
          <Option value="z0">z0</Option>
          <Option value="z1">z1</Option>
          <Option value="z2">z2</Option>
          <Option value="na0">na0</Option>
          <Option value="as0">as0</Option>
          <Option value="cn-east-2">cn-east-2</Option>
        </Select>
      </FormItem>
      <FormItem name="path" label="存储路径">
        <Input placeholder="如：img，可不填，默认为根目录" />
      </FormItem>

      <FormItem wrapperCol={{ offset: 5 }}>
        <Button type="primary" size="large" htmlType="submit">
          保存
        </Button>
      </FormItem>
    </Form>
  )
}

function OptionsIndex() {
  return (
    <div
      style={{
        maxWidth: 980,
        margin: "0 auto"
      }}>
      <Tabs defaultActiveKey="1" type="line">
        <Tabs.TabPane tab="七牛云" key="1">
          <Setting />
        </Tabs.TabPane>
      </Tabs>
    </div>
  )
}

export default OptionsIndex
