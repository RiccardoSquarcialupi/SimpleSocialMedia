import React from "react";
import {Textarea, Modal, useMantineTheme } from "@mantine/core";
import FollowersCard from "../FollowersCard/FollowersCard";

const FollowersModal = ({ modalOpened, setModalOpened }) => {
  const theme = useMantineTheme();
  return (
    <Modal 
      size="60%"
      heigth
      className="mainModal"
      transition="fade"
      transitionDuration={1000}
      transitionTimingFunction="ease"
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      opened={modalOpened}
      onClose={() => setModalOpened(false)}
      style={{}}
    >
  
      <FollowersCard location="modal" />
            
    </Modal>
  );
};

export default FollowersModal;
