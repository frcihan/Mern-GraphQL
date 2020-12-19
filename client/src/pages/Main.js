import { Layout, Button } from "antd";

const { Content } = Layout;

function Main() {
  return (
      <div className="site-layout-content">
        <Button ghost className="main-button">
          Get Started
        </Button>
      </div>
  );
}

export default Main;
