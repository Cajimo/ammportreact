import React from 'react';
import {
  Card,
  CardHeader,
  CardMedia,
  CardActions,
  CardContent,
  Button,
  Typography,
  Avatar,
  IconButton,
} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import Titles from '../../theme/Titles';

const EjemploItem = (props) => {
  const { avatarSrc, title, category, description, imgSrc } = props;
  const useTitleStyles = Titles();
  return (
    <Card>
      <CardHeader
        avatar={<Avatar src={avatarSrc} />}
        action={
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        }
        title={title}
        subheader={category}
        className={useTitleStyles.titulo}
      />
      <CardMedia style={{ height: '150px' }} image={imgSrc} />
      <CardContent>
        <Typography variant="body2" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          Más info...
        </Button>
      </CardActions>
    </Card>
  );
};

export default EjemploItem;
