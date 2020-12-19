import { useState } from "react";
import { Skeleton, Switch, Card, Avatar } from "antd";

const { Meta } = Card;

export const MediaCard = ({ title, description, imgSrc }) => {
  const [loading, setLoading] = useState(false);

  return (
    <div>
      <Skeleton loading={loading} active>
        <Card
          hoverable
          loading={loading}
          className="media-card"
          cover={<img alt="cover" src={imgSrc} />}
        >
          <Meta title={title} description={description} />
        </Card>
      </Skeleton>
    </div>
  );
};
