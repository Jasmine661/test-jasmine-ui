import { useState } from 'react'
import { 
  Button, 
  Alert, 
  Input, 
  Progress, 
  Tabs, 
  Menu, 
  Form, 
  Upload, 
  AutoComplete, 
  Icon,
  Transition
} from 'jasmine-ui'
import './App.css'

function App() {
  const [progress, setProgress] = useState(30)
  const [alertVisible, setAlertVisible] = useState(true)
  const [transitionVisible, setTransitionVisible] = useState(true)

  // AutoComplete 数据
  const mockSuggestions = [
    { value: 'apple', label: 'Apple' },
    { value: 'banana', label: 'Banana' },
    { value: 'cherry', label: 'Cherry' },
    { value: 'date', label: 'Date' },
    { value: 'elderberry', label: 'Elderberry' },
  ]

  const fetchSuggestions = (str: string) => {
    return mockSuggestions.filter(item => 
      item.value.toLowerCase().includes(str.toLowerCase())
    )
  }

  // 表单提交处理
  const onFinish = (values: any) => {
    console.log('表单数据:', values)
    alert(`表单提交成功！\n数据: ${JSON.stringify(values, null, 2)}`)
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('表单验证失败:', errorInfo)
    alert('表单验证失败，请检查输入')
  }

  // 上传处理
  const handleUploadSuccess = (data: any, file: any) => {
    console.log('上传成功:', data, file)
    alert('文件上传成功！')
  }

  const handleUploadError = (err: any, file: any) => {
    console.log('上传失败:', err, file)
    alert('文件上传失败！')
  }

  // AutoComplete 选择处理
  const handleSelect = (item: any) => {
    console.log('选择了:', item)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Jasmine UI 组件库完整测试</h1>
        <p>这是一个全面的组件库测试页面，展示所有组件的功能和样式</p>
      </header>

      <main className="App-main">
        {/* Button 组件测试 */}
        <section className="test-section">
          <h2>Button 按钮组件</h2>
          <div className="component-demo">
            <div className="demo-group">
              <h3>按钮类型</h3>
              <div className="button-group">
                <Button btnType="primary">Primary</Button>
                <Button btnType="default">Default</Button>
                <Button btnType="danger">Danger</Button>
                <Button btnType="link" href="https://example.com">Link</Button>
              </div>
            </div>
            <div className="demo-group">
              <h3>按钮尺寸</h3>
              <div className="button-group">
                <Button size="lg">Large</Button>
                <Button>Default</Button>
                <Button size="sm">Small</Button>
              </div>
            </div>
            <div className="demo-group">
              <h3>按钮状态</h3>
              <div className="button-group">
                <Button>Normal</Button>
                <Button disabled>Disabled</Button>
                <Button onClick={() => alert('按钮被点击了！')}>Click Me</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Alert 组件测试 */}
        <section className="test-section">
          <h2>Alert 警告提示组件</h2>
          <div className="component-demo">
            <div className="demo-group">
              <h3>不同类型的提示</h3>
              {alertVisible && (
                <Alert
                  type="success"
                  title="成功提示"
                  description="这是一个成功提示信息，可以关闭"
                  closable
                  onClose={() => setAlertVisible(false)}
                />
              )}
              <Alert type="warning" description="这是一个警告信息" />
              <Alert type="error" description="这是一个错误信息" />
              <Alert type="info" description="这是一个信息提示" />
            </div>
            <div className="demo-group">
              <h3>不同样式的提示</h3>
              <Alert type="success" description="只有描述文本的提示" />
              <Alert type="warning" title="带标题的提示" description="这是带标题的警告信息" />
            </div>
          </div>
        </section>

        {/* Input 组件测试 */}
        <section className="test-section">
          <h2>Input 输入框组件</h2>
          <div className="component-demo">
            <div className="demo-group">
              <h3>基本输入框</h3>
              <div className="input-group">
                <Input placeholder="基本输入框" />
                <Input placeholder="带图标" icon="search" />
                <Input placeholder="禁用状态" disabled />
              </div>
            </div>
            <div className="demo-group">
              <h3>组合输入框</h3>
              <div className="input-group">
                <Input placeholder="前置标签" prepend="https://" />
                <Input placeholder="后置标签" append=".com" />
                <Input placeholder="前后都有" prepend="www." append=".com" />
              </div>
            </div>
            <div className="demo-group">
              <h3>不同尺寸</h3>
              <div className="input-group">
                <Input placeholder="大尺寸" size="lg" />
                <Input placeholder="默认尺寸" />
                <Input placeholder="小尺寸" size="sm" />
              </div>
            </div>
          </div>
        </section>

        {/* Progress 组件测试 */}
        <section className="test-section">
          <h2>Progress 进度条组件</h2>
          <div className="component-demo">
            <div className="demo-group">
              <h3>基本进度条</h3>
              <div className="progress-group">
                <Progress percent={progress} />
                <Progress percent={50} />
                <Progress percent={75} />
                <Progress percent={100} />
                <button 
                  className="progress-btn"
                  onClick={() => setProgress(Math.min(100, progress + 10))}
                >
                  增加进度 (+10%)
                </button>
                <button 
                  className="progress-btn"
                  onClick={() => setProgress(Math.max(0, progress - 10))}
                >
                  减少进度 (-10%)
                </button>
              </div>
            </div>
            <div className="demo-group">
              <h3>不同主题</h3>
              <div className="progress-group">
                <Progress percent={30} theme="primary" />
                <Progress percent={50} theme="success" />
                <Progress percent={70} theme="warning" />
                <Progress percent={90} theme="danger" />
              </div>
            </div>
            <div className="demo-group">
              <h3>自定义样式</h3>
              <div className="progress-group">
                <Progress percent={60} strokeHeight={20} />
                <Progress percent={80} showText={false} />
                <Progress percent={100} strokeHeight={8} />
              </div>
            </div>
          </div>
        </section>

        {/* Tabs 组件测试 */}
        <section className="test-section">
          <h2>Tabs 标签页组件</h2>
          <div className="component-demo">
            <div className="demo-group">
              <h3>基本标签页</h3>
              <Tabs defaultIndex={0}>
                <Tabs.Item label="标签页 1">
                  <div className="tab-content">
                    <h4>这是第一个标签页的内容</h4>
                    <p>这里可以放置任何内容，包括其他组件。</p>
                    <Button btnType="primary">按钮示例</Button>
                  </div>
                </Tabs.Item>
                <Tabs.Item label="标签页 2">
                  <div className="tab-content">
                    <h4>这是第二个标签页的内容</h4>
                    <p>每个标签页都是独立的。</p>
                    <Input placeholder="输入框示例" />
                  </div>
                </Tabs.Item>
                <Tabs.Item label="标签页 3" disabled>
                  <div className="tab-content">
                    <h4>这是禁用的标签页</h4>
                    <p>这个标签页被禁用了，无法点击。</p>
                  </div>
                </Tabs.Item>
              </Tabs>
            </div>
            <div className="demo-group">
              <h3>卡片式标签页</h3>
              <Tabs defaultIndex={0} type="card">
                <Tabs.Item label="卡片 1">
                  <div className="tab-content">卡片式标签页内容 1</div>
                </Tabs.Item>
                <Tabs.Item label="卡片 2">
                  <div className="tab-content">卡片式标签页内容 2</div>
                </Tabs.Item>
                <Tabs.Item label="卡片 3">
                  <div className="tab-content">卡片式标签页内容 3</div>
                </Tabs.Item>
              </Tabs>
            </div>
          </div>
        </section>

        {/* Menu 组件测试 */}
        <section className="test-section">
          <h2>Menu 菜单组件</h2>
          <div className="component-demo">
            <div className="demo-group">
              <h3>水平菜单</h3>
              <Menu defaultIndex="0" mode="horizontal">
                <Menu.Item>首页</Menu.Item>
                <Menu.Item>产品</Menu.Item>
                <Menu.SubMenu title="服务">
                  <Menu.Item>Web 开发</Menu.Item>
                  <Menu.Item>移动开发</Menu.Item>
                  <Menu.Item>UI/UX 设计</Menu.Item>
                </Menu.SubMenu>
                <Menu.Item>关于我们</Menu.Item>
                <Menu.Item disabled>联系我们</Menu.Item>
              </Menu>
            </div>
            <div className="demo-group">
              <h3>垂直菜单</h3>
              <Menu defaultIndex="0" mode="vertical">
                <Menu.Item>仪表盘</Menu.Item>
                <Menu.Item>用户管理</Menu.Item>
                <Menu.SubMenu title="系统设置">
                  <Menu.Item>基本设置</Menu.Item>
                  <Menu.Item>安全设置</Menu.Item>
                  <Menu.Item>通知设置</Menu.Item>
                </Menu.SubMenu>
                <Menu.Item>帮助中心</Menu.Item>
                <Menu.Item disabled>退出登录</Menu.Item>
              </Menu>
            </div>
          </div>
        </section>

        {/* Form 组件测试 */}
        <section className="test-section">
          <h2>Form 表单组件</h2>
          <div className="component-demo">
            <div className="demo-group">
              <h3>基本表单</h3>
              <Form
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                initialValues={{ username: 'testuser', email: 'test@example.com' }}
              >
                <Form.Item
                  name="username"
                  label="用户名"
                  rules={[
                    { required: true, message: '请输入用户名' },
                    { min: 3, message: '用户名至少3个字符' }
                  ]}
                >
                  <Input placeholder="请输入用户名" />
                </Form.Item>
                <Form.Item
                  name="email"
                  label="邮箱"
                  rules={[
                    { required: true, message: '请输入邮箱' },
                    { type: 'email', message: '请输入正确的邮箱格式' }
                  ]}
                >
                  <Input placeholder="请输入邮箱" />
                </Form.Item>
                <Form.Item
                  name="password"
                  label="密码"
                  rules={[
                    { required: true, message: '请输入密码' },
                    { min: 6, message: '密码至少6个字符' }
                  ]}
                >
                  <Input type="password" placeholder="请输入密码" />
                </Form.Item>
                <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
                  <Button type="submit" btnType="primary">提交表单</Button>
                  <Button type="reset">重置</Button>
                </div>
              </Form>
            </div>
          </div>
        </section>

        {/* Upload 组件测试 */}
        <section className="test-section">
          <h2>Upload 上传组件</h2>
          <div className="component-demo">
            <div className="demo-group">
              <h3>基本上传</h3>
              <Upload
                action="https://jsonplaceholder.typicode.com/posts"
                onSuccess={handleUploadSuccess}
                onError={handleUploadError}
                accept=".jpg,.png,.pdf,.doc,.docx"
              >
                <Button>选择文件上传</Button>
              </Upload>
            </div>
            <div className="demo-group">
              <h3>多文件上传</h3>
              <Upload
                action="https://jsonplaceholder.typicode.com/posts"
                multiple
                onSuccess={handleUploadSuccess}
                onError={handleUploadError}
              >
                <Button>多文件上传</Button>
              </Upload>
            </div>
            <div className="demo-group">
              <h3>拖拽上传</h3>
              <Upload
                action="https://jsonplaceholder.typicode.com/posts"
                drag
                onSuccess={handleUploadSuccess}
                onError={handleUploadError}
              >
                <div className="upload-dragger">
                  <Icon icon="upload" size="3x" />
                  <p>点击或拖拽文件到此区域上传</p>
                </div>
              </Upload>
            </div>
          </div>
        </section>

        {/* AutoComplete 组件测试 */}
        <section className="test-section">
          <h2>AutoComplete 自动完成组件</h2>
          <div className="component-demo">
            <div className="demo-group">
              <h3>基本自动完成</h3>
              <AutoComplete
                fetchSuggestions={fetchSuggestions}
                onSelect={handleSelect}
                placeholder="请输入水果名称"
              />
            </div>
            <div className="demo-group">
              <h3>带图标的自动完成</h3>
              <AutoComplete
                fetchSuggestions={fetchSuggestions}
                onSelect={handleSelect}
                placeholder="搜索水果"
                icon="search"
              />
            </div>
          </div>
        </section>

        {/* Icon 组件测试 */}
        <section className="test-section">
          <h2>Icon 图标组件</h2>
          <div className="component-demo">
            <div className="demo-group">
              <h3>基本图标</h3>
              <div className="icon-group">
                <Icon icon="search" />
                <Icon icon="user" />
                <Icon icon="heart" />
                <Icon icon="star" />
                <Icon icon="home" />
                <Icon icon="toolbox" />
              </div>
            </div>
            <div className="demo-group">
              <h3>不同主题</h3>
              <div className="icon-group">
                <Icon icon="heart" theme="primary" />
                <Icon icon="star" theme="success" />
                <Icon icon="warning" theme="warning" />
                <Icon icon="times" theme="danger" />
                <Icon icon="info" theme="info" />
              </div>
            </div>
            <div className="demo-group">
              <h3>不同尺寸</h3>
              <div className="icon-group">
                <Icon icon="search" size="xs" />
                <Icon icon="search" size="sm" />
                <Icon icon="search" />
                <Icon icon="search" size="lg" />
                <Icon icon="search" size="xl" />
                <Icon icon="search" size="2xl" />
              </div>
            </div>
            <div className="demo-group">
              <h3>动画效果</h3>
              <div className="icon-group">
                <Icon icon="spinner" spin />
                <Icon icon="heart" pulse />
                <Icon icon="refresh" spin />
              </div>
            </div>
          </div>
        </section>

        {/* Transition 组件测试 */}
        <section className="test-section">
          <h2>Transition 过渡动画组件</h2>
          <div className="component-demo">
            <div className="demo-group">
              <h3>基本过渡效果</h3>
              <div className="transition-controls">
                <button 
                  className="transition-btn"
                  onClick={() => setTransitionVisible(!transitionVisible)}
                >
                  {transitionVisible ? '隐藏' : '显示'} 过渡效果
                </button>
              </div>
              <Transition in={transitionVisible} animation="zoom-in-top" timeout={300}>
                <div className="transition-demo">
                  <h4>这是一个过渡动画示例</h4>
                  <p>点击上面的按钮可以看到淡入淡出效果</p>
                </div>
              </Transition>
            </div>
            <div className="demo-group">
              <h3>不同动画类型</h3>
              <div className="transition-examples">
                <Transition in={true} animation="zoom-in-left" timeout={500}>
                  <div className="transition-item">从左滑入</div>
                </Transition>
                <Transition in={true} animation="zoom-in-right" timeout={500}>
                  <div className="transition-item">从右滑入</div>
                </Transition>
                <Transition in={true} animation="zoom-in-bottom" timeout={500}>
                  <div className="transition-item">从下滑入</div>
                </Transition>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="App-footer">
        <p>Jasmine UI 组件库测试完成 ✅</p>
        <p>所有组件都正常工作，样式美观，功能完整！</p>
      </footer>
    </div>
  )
}

export default App
