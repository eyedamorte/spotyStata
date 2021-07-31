import React, { FC } from "react";
import { Card, Skeleton } from "antd";
import { ArtistsStateType } from "../artists/ArtistsTypes";

const { Meta } = Card;

interface SelectedArtistPropsType {
  user?: ArtistsStateType["selectedArtist"];
}

const SelectedArtistCard: FC<SelectedArtistPropsType> = ({ user }) => {
  return (
    <div>
      <Card
        style={{ width: "70%" }}
        cover={
          <img
            alt="avatar"
            src={
              user?.images[0]
                ? user.images[0].url
                : "https://cdn.iconscout.com/icon/premium/png-256-thumb/avatar-2084388-1747738.png"
            }
          />
        }
      >
        <Skeleton loading={!user} active>
          <Meta title={user?.name} />
        </Skeleton>
      </Card>
    </div>
  );
};

export default SelectedArtistCard;
